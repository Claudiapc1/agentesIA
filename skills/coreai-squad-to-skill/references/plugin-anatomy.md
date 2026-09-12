# Anatomia do Plugin Gerado

A estrutura-alvo que a `squad-to-skill` materializa. Exemplo: squad `copy`.

## Árvore do plugin

```
{destino}/{squad-name}/                  ← ex: coreaios/skills/copy/  (ou plugin próprio)
├── .claude-plugin/
│   └── plugin.json                      ← metadata + namespace (se plugin standalone)
├── skills/
│   ├── {prefix}/SKILL.md                ← /{prefix}     skill mãe (orquestrador)
│   ├── {item-1}/SKILL.md                ← /{prefix}:{item-1}   sub-skill (workflow/comando)
│   ├── {item-2}/SKILL.md                ← /{prefix}:{item-2}
│   └── ...
└── shared/                              ← recursos lidos pelas skills (self-contained)
    ├── references/                      ← DNA permanente (premissas load:ALWAYS)
    ├── agents/                          ← personas/motores (contexto interno)
    ├── validators/                      ← anti-ia, oráculo, etc.
    └── templates/                       ← templates de output
```

## Dois modos de empacotamento

A Fase 4 escolhe um, conforme o destino:

### Modo A — dentro do coreaios (default)
O `coreaios` já é um plugin. Grave as skills como pastas em `coreaios/skills/`:
- `coreaios/skills/{prefix}/SKILL.md`        → mãe
- `coreaios/skills/{prefix}-{item}/SKILL.md` → sub-skills (prefixo no nome)
- `coreaios/skills/{prefix}-shared/`         → recursos compartilhados

Invocação: `/coreaios:{prefix}` e `/coreaios:{prefix}-{item}` (namespace do coreaios).
Sem `plugin.json` próprio — herda o do coreaios.

### Modo B — plugin standalone
Cria `{destino}/{squad-name}/` com `.claude-plugin/plugin.json` próprio:

```json
{
  "name": "{squad-name}",
  "version": "1.0.0",
  "description": "{pack.description do squad}",
  "author": "{pack.author}"
}
```

Invocação: `/{squad-name}:{prefix}` e `/{squad-name}:{item}`.

> Pergunte o destino na Fase 4. Default: Modo A (coreaios/skills).

## Frontmatter da skill mãe gerada

```yaml
---
name: {prefix}
description: "{do pack.description, adaptado}"
when-to-use: "{gatilhos derivados do entry_agent + slashPrefix}"
argument-hint: "[tema ou acao]"
allowed-tools: "Read, Write, Bash, Glob, Grep, Skill"
user-invocable: true
---
```

## Frontmatter de sub-skill gerada

```yaml
---
name: {prefix}-{item}      (Modo A)  |  {item} (Modo B)
description: "{do workflow.description ou da descrição do comando}"
when-to-use: "{gatilhos do item: nome + sinônimos}"
argument-hint: "[brief / tema]"
allowed-tools: "Read, Write, Bash, Glob, Grep"
user-invocable: true
---
```

## Regras de geração

1. Todo `shared/` é materializado a partir do squad — zero referência externa.
2. A mãe SEMPRE tem o gancho ContextOS (ver `contextos-protocol.md`).
3. Cada sub-skill carrega `shared/references/` (DNA) + seus `shared/agents/` + roda `shared/validators/`.
4. Nomes de arquivo em kebab-case, únicos no destino.
