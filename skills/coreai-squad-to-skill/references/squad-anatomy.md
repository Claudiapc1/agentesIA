# Anatomia Canônica de um Squad AIOX

Como ler qualquer squad de forma determinística. Extraído do squad-creator-pro.

## Estrutura de pastas

```
{squad}/
├── config.yaml          ← fonte de verdade (metadata, agents, premissas, contracts)
├── squad-io.yaml        ← contrato de input/output do squad (opcional)
├── agents/              ← personas + comandos (cada *.md é um agente)
├── workflows/           ← orquestrações (*.yaml) — viram slash commands
├── tasks/               ← unidades atômicas (*.md) — viram contexto interno
├── checklists/          ← validadores de qualidade (*.md) — viram validators/
├── templates/           ← scaffolds de output
├── data/                ← premissas, knowledge, registries (load:ALWAYS importa)
├── scripts/             ← workers determinísticos (bash/node/py)
└── frameworks/voice/swipe/... ← knowledge bases auxiliares
```

## config.yaml — campos canônicos

```yaml
pack:
  name: {squad-name}            # → nome do plugin gerado
  version: "X.Y.Z"
  short-title: {display}
  description: {desc}
  icon: "{emoji}"
  author: {autor}

slashPrefix: {prefix}           # → prefixo dos slash commands (/{prefix}:xxx)
entry_agent: {agent-id}         # → vira a lógica de roteamento da skill mãe
quality_threshold: {float}

agents:
  - id: {agent-id}              # → cada agente vira shared/agents/{id}.md (contexto)
    name: {display}
    path: agents/{id}.md
    executor_profile:
      story_role: executor|orchestrator
      sinkra_type: Agent|Clone|Human|Worker

# Premissas obrigatórias (load:ALWAYS) — variam de squad pra squad.
# No squad copy aparecem em:
premissas:
  obrigatorias:
    - file: data/premissa-core.md
      load: ALWAYS                # → vira shared/references/ (DNA permanente)
    - file: data/manual-craft.md
      load: ALWAYS_BEFORE_WRITING

# Sistema de validação (varia). No copy:
quality_contract:
  validator: oraculo-torriani + filtro-anti-ia   # → shared/validators/

artifact_contracts:               # contratos de artefato (opcional)
  - artifact_id: "{id}"
    template_path: "templates/{name}"
    command: "*{cmd}"
```

> Nem todo squad usa os mesmos nomes de campo. `pack.name`, `slashPrefix`,
> `entry_agent` e `agents[]` são estáveis. Premissas e validadores variam — procure
> por `load: ALWAYS`, `validator:`, `quality_contract:`, `checklists/`.

## Anatomia de um AGENTE (agents/{id}.md)

Os comandos do agente ficam num bloco `commands:` (frontmatter YAML ou corpo):

```yaml
commands:
  - "*nome-comando - Descrição"
  - "*outro-comando {arg} - Descrição"
```

Regex de extração de comandos:
```
^\s*-\s*"\*([a-z0-9-]+)\s*(?:\{[^}]+\})?\s*-\s*(.+)"\s*$
```
Grupo 1 = nome do comando. Grupo 2 = descrição.

Demais seções úteis: `persona` (identity/philosophy/voice), `triage.routing_triggers`.

## Anatomia de um WORKFLOW (workflows/{id}.yaml)

```yaml
workflow:
  id: wf-{name}
  name: {display}
  description: "..."
  command: "*{cmd} {args}"        # qual comando ativa este workflow
  sequence:                        # fases/steps
    - step: {id}
      agent: {agent-id}            # quem executa (→ vira contexto da sub-skill)
      task_ref: {task-id}          # task usada (→ embutida na sub-skill)
      inputs: [...]
      outputs: [...]
  inputs:   { required: [...] }
  outputs:  { primary: [...] }
  quality_gates: [...]
```

Extração: `workflow.id`, `workflow.command`, `workflow.sequence[].agent`,
`workflow.sequence[].task_ref`, `workflow.inputs`, `workflow.outputs`.

## Anatomia de uma TASK (tasks/{id}.md)

```yaml
# bloco SINKRA_TASK_METADATA ou metadata:
task_id: {id}
responsible_executor: '@{agent-id}'
execution_type: Agent|Worker|Hybrid|Human
elicit: true|false               # requer interação
input: [...]
output: [...]
acceptance_criteria: [...]
```

Extração: `task_id`, `responsible_executor`/`agent`, `execution_type`, `elicit`.

## Inventário determinístico (algoritmo)

```
1. ler config.yaml → pack.name, slashPrefix, entry_agent, agents[], premissas
2. para cada agents/*.md → extrair commands[] (regex acima) + persona resumida
3. scan workflows/*.yaml → ler workflow.id + workflow.command + sequence[].agent/task_ref
4. scan tasks/*.md → ler task_id + execution_type + responsible_executor
5. scan checklists/*.md → listar (são os validadores candidatos)
6. scan data/ por load:ALWAYS → premissas obrigatórias
7. montar inventory.yaml
```
