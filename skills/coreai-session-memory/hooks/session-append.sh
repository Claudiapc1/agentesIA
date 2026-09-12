#!/usr/bin/env bash
# session-append.sh — Stop hook
# Appends a summary entry to .claude/session.md in the current project folder
# every time the agent finishes responding.
#
# Input: JSON via stdin with at least { cwd, transcript_path, session_id }
# Output: silent (writes to .claude/session.md only)

set -uo pipefail

# Read hook input JSON from stdin
INPUT=$(cat)

# Extract fields (with sane defaults)
CWD=$(echo "$INPUT" | jq -r '.cwd // empty' 2>/dev/null || echo "")
TRANSCRIPT_PATH=$(echo "$INPUT" | jq -r '.transcript_path // empty' 2>/dev/null || echo "")
SESSION_ID=$(echo "$INPUT" | jq -r '.session_id // empty' 2>/dev/null || echo "")

# Fallback: use PWD if cwd missing
if [[ -z "$CWD" ]]; then
  CWD="$PWD"
fi

# Skip if cwd is home dir or root (avoid polluting global)
if [[ "$CWD" == "$HOME" || "$CWD" == "/" ]]; then
  exit 0
fi

# Ensure .claude/ exists
mkdir -p "$CWD/.claude"
SESSION_FILE="$CWD/.claude/session.md"
ARCHIVE_DIR="$CWD/.claude/session-archive"

# Initialize file if missing
if [[ ! -f "$SESSION_FILE" ]]; then
  cat > "$SESSION_FILE" <<EOF
# Session Memory — $(basename "$CWD")

> Auto-populated by Stop hook on every assistant turn.
> Last 30 days kept here. Older entries archived in \`session-archive/\`.
> Manual control: \`/clear-session\` \`/show-session\` \`/promote-session\`.

EOF
fi

# Extract last assistant response from transcript (if available)
SUMMARY="(resumo automático indisponível)"
FILES_MODIFIED=""

if [[ -n "$TRANSCRIPT_PATH" && -f "$TRANSCRIPT_PATH" ]] && command -v python3 >/dev/null 2>&1; then
  EXTRACTED=$(python3 - "$TRANSCRIPT_PATH" "$HOME" <<'PYEOF' 2>/dev/null || true
import json, sys, os, re

path, home = sys.argv[1], sys.argv[2]

# Read last ~200 lines (sliding window)
try:
    with open(path, 'rb') as f:
        f.seek(0, 2)
        size = f.tell()
        chunk = 200_000
        f.seek(max(0, size - chunk))
        data = f.read().decode('utf-8', errors='replace')
except Exception:
    sys.exit(0)

lines = data.splitlines()
records = []
for line in lines:
    line = line.strip()
    if not line:
        continue
    try:
        records.append(json.loads(line))
    except Exception:
        continue

# Find last assistant message that contains a text block
summary_text = ""
for rec in reversed(records):
    if rec.get('type') != 'assistant' and rec.get('role') != 'assistant':
        continue
    msg = rec.get('message') or rec
    content = msg.get('content')
    if not isinstance(content, list):
        continue
    text_parts = [b.get('text', '') for b in content
                  if isinstance(b, dict) and b.get('type') == 'text' and b.get('text')]
    if text_parts:
        summary_text = '\n'.join(text_parts)
        break

# Clean: strip code blocks, take first 2 meaningful lines, cap at 280 chars
if summary_text:
    no_code = re.sub(r'```[\s\S]*?```', '', summary_text)
    meaningful = [l.strip() for l in no_code.splitlines() if l.strip() and not l.strip().startswith('|')]
    summary = ' '.join(meaningful[:3])[:280].replace('\n', ' ')
else:
    summary = "(turno sem texto — só tool calls)"

# Collect file paths from tool_use blocks across recent assistant messages
files = []
seen = set()
for rec in records[-80:]:
    if rec.get('type') != 'assistant' and rec.get('role') != 'assistant':
        continue
    msg = rec.get('message') or rec
    content = msg.get('content')
    if not isinstance(content, list):
        continue
    for block in content:
        if not isinstance(block, dict) or block.get('type') != 'tool_use':
            continue
        name = block.get('name', '')
        if name not in ('Edit', 'Write', 'NotebookEdit'):
            continue
        fp = (block.get('input') or {}).get('file_path')
        if fp and fp not in seen:
            seen.add(fp)
            files.append(fp.replace(home, '~') if fp.startswith(home) else fp)
        if len(files) >= 10:
            break

# Output: 2 lines — summary then file list (tab-separated)
print(summary)
print('\t'.join(files))
PYEOF
)
  if [[ -n "$EXTRACTED" ]]; then
    SUMMARY=$(echo "$EXTRACTED" | sed -n '1p')
    FILES_LINE=$(echo "$EXTRACTED" | sed -n '2p')
    [[ -z "$SUMMARY" ]] && SUMMARY="(turno concluído)"
    if [[ -n "$FILES_LINE" ]]; then
      FILES_MODIFIED=$(echo "$FILES_LINE" | tr '\t' '\n')
    fi
  fi
fi

# Build entry
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
SHORT_ID="${SESSION_ID:0:8}"

{
  echo ""
  echo "---"
  echo ""
  echo "## $TIMESTAMP (sess $SHORT_ID)"
  echo ""
  echo "**Resumo:** $SUMMARY"

  if [[ -n "$FILES_MODIFIED" ]]; then
    echo ""
    echo "**Arquivos modificados:**"
    echo "$FILES_MODIFIED" | while IFS= read -r f; do
      [[ -n "$f" ]] && echo "- \`$f\`"
    done
  fi
} >> "$SESSION_FILE"

# Auto-rotation: move entries > 30 days to archive
if command -v python3 >/dev/null 2>&1; then
  python3 - "$SESSION_FILE" "$ARCHIVE_DIR" <<'PYEOF' 2>/dev/null || true
import os
import re
import sys
from datetime import datetime, timedelta

session_file = sys.argv[1]
archive_dir = sys.argv[2]

if not os.path.exists(session_file):
    sys.exit(0)

with open(session_file, 'r', encoding='utf-8') as f:
    content = f.read()

header_match = re.match(r'^(.*?)(?=\n---\n|\Z)', content, re.DOTALL)
header = header_match.group(1) if header_match else ""

entry_pattern = re.compile(r'(\n---\n\n## (\d{4}-\d{2}-\d{2}) [\d:]+ .*?)(?=\n---\n|\Z)', re.DOTALL)
entries = entry_pattern.findall(content)

if not entries:
    sys.exit(0)

cutoff = datetime.now() - timedelta(days=30)
keep = []
archive_by_month = {}

for entry_text, date_str in entries:
    try:
        entry_date = datetime.strptime(date_str, '%Y-%m-%d')
        if entry_date < cutoff:
            ym = entry_date.strftime('%Y-%m')
            archive_by_month.setdefault(ym, []).append(entry_text)
        else:
            keep.append(entry_text)
    except ValueError:
        keep.append(entry_text)

if archive_by_month:
    os.makedirs(archive_dir, exist_ok=True)
    for ym, entries_list in archive_by_month.items():
        archive_file = os.path.join(archive_dir, f'{ym}.md')
        existing = ''
        if os.path.exists(archive_file):
            with open(archive_file, 'r', encoding='utf-8') as f:
                existing = f.read()
        with open(archive_file, 'w', encoding='utf-8') as f:
            f.write(existing + ''.join(entries_list))

    new_content = header + ''.join(keep)
    with open(session_file, 'w', encoding='utf-8') as f:
        f.write(new_content)

# Hard limit: if file > 50KB even after rotation, keep last 30 entries
if os.path.getsize(session_file) > 50 * 1024:
    with open(session_file, 'r', encoding='utf-8') as f:
        content = f.read()
    header_match = re.match(r'^(.*?)(?=\n---\n|\Z)', content, re.DOTALL)
    header = header_match.group(1) if header_match else ""
    entries_only = entry_pattern.findall(content)
    last_30 = [e[0] for e in entries_only[-30:]]
    with open(session_file, 'w', encoding='utf-8') as f:
        f.write(header + ''.join(last_30))
PYEOF
fi

exit 0
