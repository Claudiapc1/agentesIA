#!/bin/bash
# ContextOS - Initialization Script
# Usage: ./init-context-os.sh <workspace-path>
# Creates the ContextOS directory structure in the given workspace

set -euo pipefail

WORKSPACE="${1:-.}"
CONTEXT_OS="$WORKSPACE/context-os"
SCRIPT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
TEMPLATES="$SCRIPT_DIR/references/templates"

if [ -d "$CONTEXT_OS" ]; then
  echo "⚠️  ContextOS already exists at $CONTEXT_OS"
  echo "   Use *add-business to add a new company."
  exit 1
fi

echo "🚀 Initializing ContextOS at $CONTEXT_OS..."

# Create root structure
mkdir -p "$CONTEXT_OS"/{dashboard,skills,agents,squads,businesses}

# Copy root templates
cp "$TEMPLATES/config.yaml" "$CONTEXT_OS/config.yaml"
cp "$TEMPLATES/user.yaml" "$CONTEXT_OS/user.yaml"

# Create registry files
for dir in skills agents squads; do
  cat > "$CONTEXT_OS/$dir/registry.yaml" << 'EOF'
# ContextOS - Registry
schema_version: "1.0"
items: []
EOF
done

# Create dashboard placeholders
cat > "$CONTEXT_OS/dashboard/overview.yaml" << 'EOF'
# ContextOS - Dashboard Overview
schema_version: "1.0"
generated_at: null
businesses: []
overall_health: null
EOF

cat > "$CONTEXT_OS/dashboard/health-report.yaml" << 'EOF'
# ContextOS - Health Report
schema_version: "1.0"
last_check: null
issues: []
recommendations: []
EOF

# Set timestamps
NOW=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i '' "s/created_at: null/created_at: \"$NOW\"/" "$CONTEXT_OS/config.yaml"
  sed -i '' "s/created_at: null/created_at: \"$NOW\"/" "$CONTEXT_OS/user.yaml"
else
  sed -i "s/created_at: null/created_at: \"$NOW\"/" "$CONTEXT_OS/config.yaml"
  sed -i "s/created_at: null/created_at: \"$NOW\"/" "$CONTEXT_OS/user.yaml"
fi

echo ""
echo "✅ ContextOS initialized successfully!"
echo ""
echo "📁 Structure created:"
echo "   $CONTEXT_OS/"
echo "   ├── config.yaml"
echo "   ├── user.yaml"
echo "   ├── dashboard/"
echo "   ├── skills/"
echo "   ├── agents/"
echo "   ├── squads/"
echo "   └── businesses/"
echo ""
echo "▶ Next: Run *add-business {slug} to add your first company"
