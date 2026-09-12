---
name: ativa-squad
description: >
  Ativa um squad da pasta ~/coreaios/squads/ no Claude Code, sincronizando
  seus agents/tasks como referências utilizáveis na sessão. Acionar quando o
  usuário disser "ativa squad X", "carregar squad", "usar squad", ou
  /coreaios:ativa-squad. NÃO usar para criar squads (use /coreaios:skill-creator).
---

# Ativa Squad

Lê um squad em `~/coreaios/squads/<nome>/` e o disponibiliza pra sessão atual.

## Squads disponíveis no plugin

- `conteudo` — produção de conteúdo (carrosséis, reels, stories)
- `course-builder` — construção de cursos online
- `traffic-masters` — tráfego pago e funil
- `openclaw-creator` — geração de skills

## Pré-requisitos

- Squad existe em `~/coreaios/squads/<slug>/`.
- Estrutura mínima: `agents/` ou `tasks/` no squad.

## Passos

### 1. Listar squads disponíveis

```bash
ls "$HOME/coreaios/squads/" | grep -v '^_'
```

### 2. Ler o squad escolhido

- Se `~/coreaios/squads/<slug>/config.yaml` existir, leia para entender o squad chief, agents, workflows.
- Liste agents em `~/coreaios/squads/<slug>/agents/`.
- Liste tasks em `~/coreaios/squads/<slug>/tasks/`.
- Liste workflows em `~/coreaios/squads/<slug>/workflows/`.

### 3. Carregar contexto na sessão

Apresente ao usuário:

```
Squad <nome> ativado.

Agents disponíveis:
  - <agent1> — <descrição curta lida do agent.md>
  - <agent2> — ...

Tasks disponíveis:
  - <task1>
  - ...

Workflows:
  - <wf1>
  - ...
```

A partir daí, quando o usuário pedir um agent ("rode o agent X"), você lê `agents/<X>/agent.md` e atua conforme a persona descrita lá.

### 4. (Opcional) Symlinks pra slash commands

Se o usuário quiser slash commands `/squad-<slug>-<agent>`:

```bash
mkdir -p "$HOME/.claude/commands"
for a in "$HOME/coreaios/squads/<slug>/agents/"*/; do
  name=$(basename "$a")
  ln -sf "$a/agent.md" "$HOME/.claude/commands/squad-<slug>-$name.md"
done
```

Avisar pra reiniciar Claude Code.

## Edge cases

- Squad sem `agents/` → liste o que existe (tasks, workflows, scripts) e oriente uso direto.
- Squad com `SQUAD-NOTES.md` → leia e mostre ao usuário (avisos sobre ativos faltantes).
