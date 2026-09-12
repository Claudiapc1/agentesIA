#!/usr/bin/env bash
# session-load.sh — SessionStart hook
# Reads .claude/session.md from current folder and outputs JSON with
# additionalContext for the agent so it knows where the previous session left off.

set -uo pipefail

INPUT=$(cat)

CWD=$(echo "$INPUT" | jq -r '.cwd // empty' 2>/dev/null || echo "")
[[ -z "$CWD" ]] && CWD="$PWD"

SESSION_FILE="$CWD/.claude/session.md"

# Silent if no session file
if [[ ! -f "$SESSION_FILE" ]]; then
  exit 0
fi

# Count entries
TOTAL=$(grep -c '^## [0-9]' "$SESSION_FILE" 2>/dev/null || echo 0)
[[ "$TOTAL" -eq 0 ]] && exit 0

# Last entry date
LAST_DATE=$(grep -oE '^## [0-9]{4}-[0-9]{2}-[0-9]{2}' "$SESSION_FILE" | tail -1 | sed 's/^## //')

# Compute days ago (BSD/GNU date compatible)
DAYS_AGO=""
if [[ -n "$LAST_DATE" ]]; then
  if date -j -f "%Y-%m-%d" "$LAST_DATE" +%s >/dev/null 2>&1; then
    LAST_TS=$(date -j -f "%Y-%m-%d" "$LAST_DATE" +%s 2>/dev/null)
    NOW_TS=$(date +%s)
    DAYS_AGO=$(( (NOW_TS - LAST_TS) / 86400 ))
  elif date -d "$LAST_DATE" +%s >/dev/null 2>&1; then
    LAST_TS=$(date -d "$LAST_DATE" +%s 2>/dev/null)
    NOW_TS=$(date +%s)
    DAYS_AGO=$(( (NOW_TS - LAST_TS) / 86400 ))
  fi
fi

# Extract last 5 entries
LAST_ENTRIES=$(awk '
  /^---$/ { count++; if (count > 5) exit }
  count >= 1 || /^## [0-9]/ { print }
' "$SESSION_FILE" | tail -c 4000)

# Build context block (escape for JSON)
CONTEXT=$(cat <<EOF
📂 **Session memory carregada** (de \`.claude/session.md\`)

- **Total de entradas:** $TOTAL
- **Última sessão:** ${LAST_DATE:-(desconhecida)}${DAYS_AGO:+ (há $DAYS_AGO dia(s))}

**Últimas 5 entradas:**

$LAST_ENTRIES

---
*Comandos disponíveis: \`/clear-session\` \`/show-session\` \`/promote-session\`*
EOF
)

# Output JSON for the SessionStart hook to inject into context
jq -n --arg ctx "$CONTEXT" '{
  hookSpecificOutput: {
    hookEventName: "SessionStart",
    additionalContext: $ctx
  }
}'
