---
name: movement
description: Squad multiagente para Marketing Ideologico (N1..N8) Triggers: tarefas amplas relacionadas a movement, ou quando usuario pede orientacao geral. Delega para filhas movement-* quando topico for especifico.
---

# movement

## Quando usar

Skill guarda-chuva derivada do squad `movement`. Use para tarefas globais; delegue para skills filhas para subtopicos.

## Filhas

- `movement-analista-de-impacto` — derivada de analista-de-impacto
- `movement-entrevistador` — derivada de entrevistador
- `movement-estrategista-de-ciclo` — derivada de estrategista-de-ciclo
- `movement-fenomenologo` — derivada de fenomenologo
- `movement-identitario` — derivada de identitario
- `movement-manifestador` — derivada de manifestador
- `movement-movement-architect` — derivada de movement-architect
- `movement-movement-chief` — derivada de movement-chief

## Workflow

1. Avalie a tarefa do usuario.
2. Se cair em um subtopico especifico, sugira a filha correspondente.
3. Caso contrario, conduza a tarefa diretamente.

