---
name: update
description: >
  Atualiza o Core AIOS rodando git pull no repo clonado. Mostra changelog
  dos últimos commits. Acionar quando o usuário disser "atualizar coreaios",
  "update", "git pull", ou /coreaios:update.
---

# Update Core AIOS

Atualiza o plugin via `git pull`.

## Passos

### 1. Localizar o repo

Padrão: `~/coreaios`. Confirmar com:

```bash
[ -d "$HOME/coreaios/.git" ] && echo "ok" || echo "missing"
```

Se não existir, instruir o aluno a fazer:

```bash
git clone https://github.com/torriani/coreaios.git ~/coreaios
```

### 2. Pull

```bash
cd "$HOME/coreaios"
git fetch origin
BEFORE=$(git rev-parse HEAD)
git pull --ff-only
AFTER=$(git rev-parse HEAD)
```

### 3. Mostrar mudanças

Se `BEFORE != AFTER`:

```bash
git log --oneline "$BEFORE..$AFTER"
```

Liste skills/squads/templates novos ou alterados:

```bash
git diff --name-only "$BEFORE..$AFTER" | grep -E '^(skills|squads|templates)/' | head -30
```

### 4. Confirmar

```
✅ Core AIOS atualizado.
Commits novos: <N>
Skills/squads/templates alterados: <ver lista>

Reinicie o Claude Code pra que skills novas apareçam no autocomplete.
```

## Edge cases

- Conflitos no pull → orientar `git stash` ou abrir issue.
- Pull com `--ff-only` falhou → mostrar erro real e parar.
- Sem internet → mensagem clara.
