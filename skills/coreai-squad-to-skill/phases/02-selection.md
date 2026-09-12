# Fase 2 — Seleção (interativo)

A ÚNICA fase que pergunta ao usuário. Define o escopo da migração.

## Input
- `/tmp/squad-to-skill/{squad-name}/inventory.yaml`

## Passos

### 2.1 — Apresentar o inventário
Mostre, de forma legível:
```
Squad: {name}  (prefixo /{prefix})

WORKFLOWS (viram /{prefix}:xxx):
  [ ] 1. {workflow-id}      — {desc}
  [ ] 2. {workflow-id}      — {desc}
  ...

COMANDOS DE AGENTE (viram /{prefix}:xxx):
  [ ] a. {*comando} ({agente})  — {desc}
  [ ] b. {*comando} ({agente})  — {desc}
  ...

(Agentes e tasks usados pelo que você escolher entram automaticamente como contexto.)
```

### 2.2 — Perguntar o escopo
Pergunte (uma vez, objetivo):
> "Migrar **tudo** ou **por partes**?
> - 'tudo' → todos os workflows + comandos viram sub-skills.
> - por partes → me diz os números/letras (ex: 1, 3, a, c)."

### 2.3 — Resolver a seleção
- Se "tudo": selecionar todos os workflows + comandos do inventário.
- Se lista: marcar os itens escolhidos.
- Deduplicar: se um comando de agente só dispara um workflow já selecionado, manter
  só um (o workflow). Avisar quando fundir.

### 2.4 — Gravar selection.yaml
Em `/tmp/squad-to-skill/{squad-name}/selection.yaml`:
```yaml
mode: tudo | partes
sub_skills:
  - { kind: workflow, id: {id}, slug: {kebab}, source: "workflows/{id}.yaml" }
  - { kind: command,  id: {cmd}, slug: {kebab}, agent: {agent}, source: "agents/{agent}.md" }
```

## Saída
Seleção gravada. Avance para Fase 3.
