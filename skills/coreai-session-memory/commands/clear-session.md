---
description: Apaga o arquivo .claude/session.md da pasta atual (com confirmação)
---

# /clear-session

Apaga o arquivo `.claude/session.md` da pasta de trabalho atual.

## Comportamento

1. Verificar se existe `.claude/session.md` na pasta atual (`pwd`)
2. Se existir, mostrar tamanho e número de entradas
3. **Pedir confirmação explícita** ("yes" digitado pelo usuário)
4. Se confirmado, apagar o arquivo
5. **NÃO apagar** o `session-archive/` — histórico longo permanece intacto
6. Reportar resultado

## Implementação

Execute via Bash:

```bash
SESSION="$PWD/.claude/session.md"
if [[ -f "$SESSION" ]]; then
  SIZE=$(du -h "$SESSION" | awk '{print $1}')
  ENTRIES=$(grep -c '^## [0-9]' "$SESSION" 2>/dev/null || echo 0)
  echo "📂 $SESSION"
  echo "   Tamanho: $SIZE"
  echo "   Entradas: $ENTRIES"
  echo ""
  echo "⚠️  Apagar este arquivo? (digite 'yes' pra confirmar)"
else
  echo "ℹ️  Nenhum .claude/session.md nesta pasta. Nada pra limpar."
fi
```

Se usuário confirmar com "yes", então:

```bash
rm "$PWD/.claude/session.md" && echo "✅ session.md apagado. Archive preservado em .claude/session-archive/"
```

Caso contrário, abortar.
