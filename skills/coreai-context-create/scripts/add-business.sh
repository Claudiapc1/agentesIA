#!/bin/bash
# ContextOS - Add Business Script
# Usage: ./add-business.sh <workspace-path> <business-slug>
# Scaffolds complete business directory with all YAML templates

set -euo pipefail

WORKSPACE="${1:-.}"
SLUG="${2:-}"
CONTEXT_OS="$WORKSPACE/context-os"
SCRIPT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
TEMPLATES="$SCRIPT_DIR/references/templates/business"

if [ -z "$SLUG" ]; then
  echo "❌ Usage: ./add-business.sh <workspace-path> <business-slug>"
  exit 1
fi

# Validate slug format (snake_case)
if ! echo "$SLUG" | grep -qE '^[a-z][a-z0-9_-]*$'; then
  echo "❌ Invalid slug: '$SLUG'. Use snake_case (ex: meu_negocio, torriani)"
  exit 1
fi

if [ ! -d "$CONTEXT_OS" ]; then
  echo "❌ ContextOS not found at $CONTEXT_OS"
  echo "   Run *init first to initialize ContextOS."
  exit 1
fi

BIZ_DIR="$CONTEXT_OS/businesses/$SLUG"

if [ -d "$BIZ_DIR" ]; then
  echo "⚠️  Business '$SLUG' already exists at $BIZ_DIR"
  exit 1
fi

echo "🏢 Adding business: $SLUG"

# Create all subdirectories
mkdir -p "$BIZ_DIR"/{context,brand-dna,design-system,products,culture,operations,intelligence/meetings,intelligence/decisions,evidence}

# Copy context templates (9 files)
for f in company-profile founder-dna credentials icp brand pricing team diagnosis authority-story; do
  cp "$TEMPLATES/context/$f.yaml" "$BIZ_DIR/context/$f.yaml"
done

# Copy brand-dna templates (5 files)
for f in voice visual-identity archetype positioning manifesto; do
  cp "$TEMPLATES/brand-dna/$f.yaml" "$BIZ_DIR/brand-dna/$f.yaml"
done

# Copy design-system templates (4 files)
for f in tokens components patterns guidelines; do
  cp "$TEMPLATES/design-system/$f.yaml" "$BIZ_DIR/design-system/$f.yaml"
done

# Copy culture templates (4 files)
for f in values pillars commandments hiring-criteria; do
  cp "$TEMPLATES/culture/$f.yaml" "$BIZ_DIR/culture/$f.yaml"
done

# Copy operations templates (3 files)
for f in kpis processes tech-stack; do
  cp "$TEMPLATES/operations/$f.yaml" "$BIZ_DIR/operations/$f.yaml"
done

# Copy evidence templates (3 files)
for f in completeness source-registry etl-history; do
  cp "$TEMPLATES/evidence/$f.yaml" "$BIZ_DIR/evidence/$f.yaml"
done

# Create intelligence index
cat > "$BIZ_DIR/intelligence/memory-index.yaml" << 'EOF'
# ContextOS - Memory Index
# Indice pesquisavel de reunioes e decisoes
schema_version: "1.0"
meetings: []
decisions: []
learnings: []
last_updated: null
EOF

# Count files
FILE_COUNT=$(find "$BIZ_DIR" -name "*.yaml" | wc -l | tr -d ' ')

echo ""
echo "✅ Business '$SLUG' created with $FILE_COUNT YAML templates!"
echo ""
echo "📁 Structure:"
echo "   $BIZ_DIR/"
echo "   ├── context/       (9 files) - Company profile, founder, ICP, brand"
echo "   ├── brand-dna/     (5 files) - Voice, visual, archetype, positioning"
echo "   ├── design-system/ (4 files) - Tokens, components, patterns"
echo "   ├── culture/       (4 files) - Values, pillars, commandments"
echo "   ├── operations/    (3 files) - KPIs, processes, tech stack"
echo "   ├── products/      (empty)   - Add products later"
echo "   ├── intelligence/  (1 file)  - Meetings, decisions, memory"
echo "   └── evidence/      (3 files) - Completeness, sources, history"
echo ""
echo "▶ Next: Run *setup-context $SLUG to start collecting context"
