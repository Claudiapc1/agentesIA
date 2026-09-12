# Mapeamento Determinístico squad → skill

A "lei" da conversão. Para qualquer squad, sempre o mesmo mapeamento.

## Tabela mestra

| Origem no squad | Vira na skill gerada | Regra |
|---|---|---|
| `config.yaml` → `entry_agent` + roteamento | **`skills/{prefix}/SKILL.md`** (skill mãe) | O agente de entrada vira a lógica de orquestração: pergunta cliente, carrega ContextOS, lista e roteia os comandos |
| `config.yaml` → `pack.name`, `slashPrefix` | **`plugin.json`** + namespace | nome do plugin = `pack.name`; namespace dos comandos = `slashPrefix` |
| `workflows/*.yaml` (SELECIONADOS) | **`skills/{nome}/SKILL.md`** = `/{prefix}:{nome}` | Cada workflow selecionado vira uma sub-skill (slash command) |
| comandos de agente `*cmd` (SELECIONADOS) | **`skills/{cmd}/SKILL.md`** = `/{prefix}:{cmd}` | Cada comando selecionado vira uma sub-skill (slash command) |
| `agents/*.md` (usados pelos selecionados) | **`shared/agents/{id}.md`** | Persona + frameworks como CONTEXTO interno. NÃO vira slash command. |
| `tasks/*.md` (referenciadas pelos selecionados) | embutidas na sub-skill que as usa | Os steps da task viram o processo interno da sub-skill |
| `checklists/*` validadores | **`shared/validators/{nome}.md`** | Validadores embutidos (ex: anti-ia, oráculo) |
| `data/` com `load: ALWAYS` | **`shared/references/{nome}.md`** | DNA permanente — carregado por TODA skill (mãe + subs) |
| `templates/` usados | **`shared/templates/{nome}.md`** | Materializados, sem referência externa |
| (injetado — novo) | **gancho ContextOS** na skill mãe | Lê `context-os/businesses/{slug}/` via protocolo canônico |

## O que vira slash command vs o que vira contexto

- **VIRA slash command** (`/{prefix}:xxx`): **workflows** e **comandos de agente** — são ações/execuções.
- **VIRA contexto interno** (carregado, não invocável): **agentes** (personas/motores) e **tasks** (passos).

Racional: o usuário invoca *ações* ("faz uma carta de venda"), não *pessoas* ("ativa o Halbert"). O agente é o motor por trás.

## Naming dos slash commands

- Plugin = `pack.name` (ex: `copy`).
- Skill mãe = `/{prefix}` (ex: `/copy`).
- Sub-skill = `/{prefix}:{slug-do-item}` (ex: `/copy:carta-de-venda`).
- `slug-do-item` = kebab-case do nome do workflow/comando, sem prefixo `wf-` nem `*`.

## Skill mãe — responsabilidades fixas

Toda skill mãe gerada faz, nesta ordem:
1. Pergunta o **cliente** (lista businesses do ContextOS — ver `contextos-protocol.md`).
2. Carrega `context-os/businesses/{slug}/` (contexto do cliente).
3. Lista os **comandos disponíveis** (`/{prefix}:*`) e roteia.
4. Se o usuário já pediu uma ação direta, roteia pro comando certo sem listar.

## Sub-skill — estrutura interna fixa

Toda sub-skill gerada faz, nesta ordem:
1. Herda/recarrega o **cliente** (ContextOS) — se invocada direto, pergunta.
2. Carrega `shared/references/` (DNA permanente / premissas load:ALWAYS).
3. Carrega o(s) `shared/agents/` que usa (motor).
4. Executa o **processo** (os steps do workflow/task de origem).
5. Roda os `shared/validators/` no fim (ex: anti-ia → oráculo, loop até passar).

## Self-containment (regra absoluta)

A skill gerada NUNCA pode conter paths para o squad original
(`legacy/squads/...`). Tudo que ela precisa é copiado/materializado em
`shared/`. Verificação na Fase 6: `grep -r "legacy/squads" {plugin}` deve
retornar vazio.
