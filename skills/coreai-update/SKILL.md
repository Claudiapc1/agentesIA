---
name: update
description: >
  Atualiza o pacote agentesIA rodando git pull na pasta clonada. Mostra
  changelog dos últimos commits. Acionar quando o usuário disser "atualizar
  agentesIA", "update", "git pull", ou /coreai:update.
---

# Update agentesIA

Atualiza o pacote via `git pull`.

## Passos

### 1. Localizar a pasta do pacote

Peça ou confirme o path da pasta `agentesIA` já clonada pelo usuário (nunca assumir
path fixo de máquina). Confirmar com:

```bash
[ -d "$PACOTE/.git" ] && echo "ok" || echo "missing"
```

Se não existir, instruir o aluno a fazer:

```bash
git clone https://github.com/torriani/agentesIA.git
```

### 2. Pull

```bash
cd "$PACOTE"
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

Liste skills novas ou alteradas:

```bash
git diff --name-only "$BEFORE..$AFTER" | grep -E '^skills/' | head -30
```

### 4. Confirmar e reinstalar

```
Pacote agentesIA atualizado.
Commits novos: <N>
Skills alteradas: <ver lista>
```

Baixar arquivo novo não instala nada sozinho: rode `coreai-setup` (ou
`skills/coreai-setup/scripts/install.py --list`) para instalar as skills novas
ou atualizadas no seu ambiente. A instalação sempre grava cópia própria, nunca
link — atualizar o pacote não muda skill já instalada até você rodar o instalador.

## Edge cases

- Conflitos no pull → orientar `git stash` ou abrir issue.
- Pull com `--ff-only` falhou → mostrar erro real e parar.
- Sem internet → mensagem clara.
