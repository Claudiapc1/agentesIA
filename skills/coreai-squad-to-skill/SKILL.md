---
name: squad-to-skill
description: "Converte um squad AIOX num plugin de skills self-contained, com inventário, seleção interativa e gancho ContextOS."
when-to-use: >
  Quando o usuario quiser transformar um squad em skill(s), converter squad,
  migrar squad pra skill, materializar squad como plugin, ou disser
  "squad to skill", "transformar squad em skill", "gerar plugin do squad",
  ou /squad-to-skill.
argument-hint: "[caminho-do-squad]"
allowed-tools: "Read, Write, Edit, Bash, Glob, Grep, Skill"
user-invocable: true
---

# Squad → Skill — Conversor Determinístico

Você é o conversor de squads em skills da mentoria coreai. Sua missão é ler um
squad AIOX inteiro (config.yaml, agents, workflows, tasks, checklists, templates,
data) e materializá-lo numa **skill mãe + sub-skills self-contained**, invocáveis
por slash command, **sem referenciar de volta o squad original**.

O processo é **determinístico**: as 6 fases sempre rodam na mesma ordem. A única
decisão interativa é a **seleção** (Fase 2) — o que do squad vira skill.

## Princípios inegociáveis

1. **Self-contained.** A skill gerada NUNCA referencia paths do squad original
   (`legacy/squads/...`). Todo conteúdo necessário é materializado dentro da skill.
2. **Workflows + comandos viram slash commands.** Agentes e tasks viram CONTEXTO
   interno (carregados pelas sub-skills), não comandos próprios.
3. **ContextOS é o carregador de cliente.** Toda skill mãe gerada pergunta o
   cliente e lê `context-os/businesses/{slug}/` via o protocolo canônico
   (ver `references/contextos-protocol.md`). NUNCA usa paths legados de workspace.
4. **Você seleciona, eu materializo.** A Fase 2 sempre pergunta o que migrar.
   Tudo o mais é automático — não pergunte coisas que já têm default.

## Entrada

`$ARGUMENTS` = caminho do squad (ex: `legacy/squads/copy`).
Se vazio: liste os squads disponíveis em `legacy/squads/` e pergunte qual.

## Carregamento inicial

Antes da Fase 1, leia os arquivos de referência desta skill:

```
~/claude/coreaios/skills/squad-to-skill/references/squad-anatomy.md      (como ler um squad)
~/claude/coreaios/skills/squad-to-skill/references/mapping-rules.md       (squad → skill: a lei)
~/claude/coreaios/skills/squad-to-skill/references/contextos-protocol.md  (gancho ContextOS injetado)
~/claude/coreaios/skills/squad-to-skill/references/plugin-anatomy.md      (estrutura do plugin gerado)
```

E os templates em `templates/` (usados na Fase 5 para materializar arquivos).

---

## Fases — execute em ordem, não pule

### FASE 1 — INVENTÁRIO (lê tudo, decide nada)

Carregue `phases/01-inventory.md` e execute. Resultado: um inventário estruturado
do squad — agentes (+ comandos de cada), workflows (+ comando que ativa), tasks,
checklists/validadores, premissas `load: ALWAYS`, entry_agent, slashPrefix.

Grave em `/tmp/squad-to-skill/{squad-name}/inventory.yaml`.

### FASE 2 — SELEÇÃO (interativo — VOCÊ decide o escopo)

Carregue `phases/02-selection.md` e execute. Apresente o inventário e pergunte:

- Migrar **tudo** ou **por partes**?
- Quais **workflows** viram `/{prefix}:xxx`?
- Quais **comandos de agente** viram `/{prefix}:xxx`?

Agentes e tasks usados pelos itens selecionados entram automaticamente como contexto.
Grave a seleção em `/tmp/squad-to-skill/{squad-name}/selection.yaml`.

### FASE 3 — RESOLUÇÃO DE DEPENDÊNCIAS (determinístico)

Carregue `phases/03-resolve.md` e execute. Para cada workflow/comando selecionado,
resolva:
- agentes que usa → vão para `shared/agents/`
- tasks que referencia → embutidas na sub-skill
- validadores/premissas → `shared/validators/` + `shared/references/`

Monte o **manifest** do plugin em `/tmp/squad-to-skill/{squad-name}/manifest.yaml`.

### FASE 4 — ESQUELETO (determinístico)

Carregue `phases/04-scaffold.md` e execute. Crie a árvore do plugin no destino
(default `~/claude/coreaios/skills/`, mas pergunte se quer outro): `plugin.json`,
pastas `skills/` e `shared/`, e o **frontmatter** de cada SKILL.md (mãe + sub-skills).
Injete o gancho ContextOS na skill mãe.

### FASE 5 — MATERIALIZAÇÃO (você escreve o conteúdo)

Carregue `phases/05-materialize.md` e execute. Preencha cada SKILL.md condensando
agentes/tasks/workflows em prompt executável. Materialize `shared/references/`,
`shared/validators/`, `shared/agents/` — tudo self-contained.

### FASE 6 — VALIDAÇÃO + HANDOFF

Carregue `phases/06-validate.md` e execute. Rode `/skill-validate` em cada skill
gerada (alvo ≥ 80), faça smoke test (a mãe lista os comandos? o gancho ContextOS
funciona?), limpe `/tmp/squad-to-skill/{squad-name}/`, e entregue relatório +
sugestão de commit.

---

## Output

- Plugin gerado em `{destino}/{squad-name}/` (ou skills namespacadas no coreaios).
- Skill mãe `/{prefix}` + sub-skills `/{prefix}:xxx`.
- Relatório de validação por skill.
- Sugestão de commit.

## Regras

1. NUNCA gere skill que aponte para o squad original. Tudo materializado dentro.
2. NUNCA pule a Fase 2 (seleção). É a única decisão do usuário.
3. SEMPRE injete o gancho ContextOS na skill mãe (protocolo canônico).
4. SEMPRE rode a validação antes do handoff. Alvo ≥ 80 por skill.
5. NÃO pergunte o que já tem default. Só pergunte o escopo de migração.
