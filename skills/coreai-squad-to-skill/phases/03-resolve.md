# Fase 3 — Resolução de Dependências (determinístico)

Para cada sub-skill selecionada, descobre tudo que ela precisa e monta o manifest.

## Inputs
- `inventory.yaml` + `selection.yaml`

## Passos

### 3.1 — Resolver dependências de cada item selecionado
Para cada item em `selection.sub_skills`:
- **Workflow:** ler `workflow.sequence[]` → coletar `agent` (agentes) e `task_ref` (tasks).
- **Comando:** ler o agente de origem → o comando aponta pra um workflow ou task? Resolver.

Acumular conjuntos globais (deduplicados):
- `agents_usados` = união de todos os agentes referenciados.
- `tasks_usadas` = união de todas as tasks referenciadas.

### 3.2 — Resolver recursos compartilhados
- `validators` = todos os de `inventory.validators` (anti-ia, oráculo sempre entram se existirem).
- `references` = todas as `inventory.premissas_always` (DNA permanente).
- `templates` = templates referenciados pelos workflows/tasks selecionados.

### 3.3 — Definir destino e modo de empacotamento
Perguntar destino (default `~/claude/coreaios/skills/`):
- Modo A (coreaios): skills como pastas prefixadas no coreaios.
- Modo B (standalone): plugin próprio com plugin.json.
(Ver `references/plugin-anatomy.md`.)

### 3.4 — Gravar manifest.yaml
Em `/tmp/squad-to-skill/{squad-name}/manifest.yaml`:
```yaml
plugin:
  name: {squad-name}
  prefix: {slashPrefix}
  mode: A | B
  destino: {path}
mother_skill:
  slug: {prefix}
  source_agent: {entry_agent}
sub_skills:
  - { slug: {kebab}, kind: workflow|command, source: {path}, agents: [...], tasks: [...] }
shared:
  agents:     [ {id}, ... ]
  tasks:      [ {id}, ... ]
  validators: [ {path}, ... ]
  references: [ {path}, ... ]
  templates:  [ {path}, ... ]
```

## Saída
Manifest completo. Avance para Fase 4.
