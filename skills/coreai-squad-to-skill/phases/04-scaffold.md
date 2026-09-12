# Fase 4 — Esqueleto (determinístico)

Cria a árvore física do plugin e o frontmatter de cada SKILL.md. Sem conteúdo ainda.

## Input
- `manifest.yaml`

## Passos

### 4.1 — Verificar não-conflito
```bash
test -e "{destino}/{nome}" && echo "JÁ EXISTE — perguntar: overwrite / rename / abort"
```

### 4.2 — Criar árvore
Modo A (coreaios/skills):
```bash
P={destino}
mkdir -p "$P/{prefix}"                       # mãe
for s in {sub-skills}; do mkdir -p "$P/{prefix}-$s"; done
mkdir -p "$P/{prefix}-shared/"{references,agents,validators,templates}
```
Modo B (standalone): criar `{destino}/{nome}/.claude-plugin/` + `skills/` + `shared/`,
e gravar `plugin.json` (ver `templates/plugin.json.tmpl`).

### 4.3 — Gerar frontmatter da skill mãe
Usar `templates/mother-skill.md.tmpl`. Preencher: name=`{prefix}`,
description (de `pack.description`), when-to-use (gatilhos), allowed-tools.
Injetar o bloco do gancho ContextOS (`references/contextos-protocol.md`).

### 4.4 — Gerar frontmatter de cada sub-skill
Usar `templates/sub-skill.md.tmpl`. Preencher por item do manifest:
name, description (do workflow/comando), when-to-use, argument-hint.
Deixar o corpo com PLACEHOLDERS (preenchidos na Fase 5).

### 4.5 — Copiar recursos compartilhados (raw)
Copiar os arquivos-fonte para `shared/` como ponto de partida da materialização:
```bash
# agentes, validadores, premissas, templates → shared/
cp "$SQUAD/checklists/{validador}.md" "$P/{prefix}-shared/validators/"
cp "$SQUAD/data/{premissa}.md"        "$P/{prefix}-shared/references/"
# (na Fase 5 esses arquivos são revisados pra ficarem self-contained)
```

## Saída
Esqueleto pronto (pastas + frontmatter + shared/ raw). Avance para Fase 5.
