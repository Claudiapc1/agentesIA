---
description: Mostra o conteúdo completo de .claude/session.md da pasta atual
---

# /show-session

Mostra o histórico completo de sessões da pasta atual.

## Comportamento

1. Verificar se existe `.claude/session.md` na pasta atual
2. Mostrar metadados (tamanho, número de entradas, data primeira/última)
3. Exibir conteúdo formatado
4. Listar archive disponível (se houver)

## Implementação

```bash
SESSION="$PWD/.claude/session.md"
ARCHIVE="$PWD/.claude/session-archive"

if [[ -f "$SESSION" ]]; then
  SIZE=$(du -h "$SESSION" | awk '{print $1}')
  ENTRIES=$(grep -c '^## [0-9]' "$SESSION" 2>/dev/null || echo 0)
  FIRST=$(grep -oE '^## [0-9]{4}-[0-9]{2}-[0-9]{2}' "$SESSION" | head -1 | sed 's/^## //')
  LAST=$(grep -oE '^## [0-9]{4}-[0-9]{2}-[0-9]{2}' "$SESSION" | tail -1 | sed 's/^## //')

  echo "📂 Session memory — $(basename "$PWD")"
  echo "   Arquivo: $SESSION"
  echo "   Tamanho: $SIZE"
  echo "   Entradas: $ENTRIES"
  echo "   Período: ${FIRST:-—} → ${LAST:-—}"
  echo ""
  echo "─────────────────────────────────────────────────────────"
  cat "$SESSION"
  echo ""
  echo "─────────────────────────────────────────────────────────"

  if [[ -d "$ARCHIVE" ]]; then
    echo ""
    echo "📦 Archive disponível:"
    ls -lh "$ARCHIVE"/*.md 2>/dev/null | awk '{print "   " $NF " (" $5 ")"}'
  fi
else
  echo "ℹ️  Nenhum .claude/session.md nesta pasta ainda."
  echo "   Volte aqui depois de algumas conversas — o Stop hook popula automaticamente."
fi
```
