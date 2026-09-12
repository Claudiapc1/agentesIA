# Fase 1 — Inventário

Lê o squad inteiro e cataloga. Não decide nada, não pergunta nada.

## Inputs
- `$ARGUMENTS` = caminho do squad. Se vazio, listar `legacy/squads/*/config.yaml` e perguntar qual.

## Passos

### 1.1 — Ler config.yaml
```bash
SQUAD={caminho-do-squad}
cat "$SQUAD/config.yaml"
```
Extrair: `pack.name`, `pack.version`, `pack.description`, `slashPrefix`,
`entry_agent`, `agents[]` (id + path), premissas com `load: ALWAYS`,
validadores (`quality_contract`, `validator:`).

### 1.2 — Inventariar agentes + comandos
Para cada `agents/*.md` (ou cada `agents[].path` do config):
- Ler o arquivo.
- Extrair comandos com regex:
  ```
  ^\s*-\s*"\*([a-z0-9-]+)\s*(?:\{[^}]+\})?\s*-\s*(.+)"\s*$
  ```
- Guardar: agente → [comandos com descrição], persona resumida (1 linha).

### 1.3 — Inventariar workflows
```bash
ls "$SQUAD/workflows/"*.yaml 2>/dev/null
```
Para cada: ler `workflow.id`, `workflow.command`, `workflow.description`,
`workflow.sequence[].agent` (agentes usados), `workflow.sequence[].task_ref`
(tasks usadas).

### 1.4 — Inventariar tasks
```bash
ls "$SQUAD/tasks/"*.md 2>/dev/null
```
Para cada: `task_id`, `execution_type`, `responsible_executor`, `elicit`.
(Pode ser sumarizado em lote — tasks são contexto, não slash commands.)

### 1.5 — Inventariar validadores e premissas
```bash
ls "$SQUAD/checklists/"*.md 2>/dev/null
ls "$SQUAD/data/"*.md "$SQUAD/data/"*.yaml 2>/dev/null
```
Marcar quais `data/` têm `load: ALWAYS` no config (premissas obrigatórias).

### 1.6 — Gravar inventory.yaml
Em `/tmp/squad-to-skill/{squad-name}/inventory.yaml`:
```yaml
squad: {name}
slashPrefix: {prefix}
entry_agent: {id}
agents:
  - id: {id}
    persona: "{1 linha}"
    commands:
      - { name: {cmd}, desc: "{desc}" }
workflows:
  - { id: {id}, command: "{*cmd}", desc: "{desc}", agents: [...], tasks: [...] }
tasks:
  - { id: {id}, executor: {agent}, type: {type} }
validators:
  - checklists/{nome}.md
premissas_always:
  - data/{nome}.md
```

## Saída
Inventário completo gravado. Avance para Fase 2 (não pergunte nada ainda).
