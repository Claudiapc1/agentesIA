---
name: context-deep
description: >
  Preenchimento completo do contexto da empresa em ~92 perguntas organizadas
  em 9 fases, com suporte a pause/resume. Lê o banco em
  <CONTEXT_ROOT>/data/questions-deep.json e grava em
  <CONTEXT_ROOT>/businesses/<active>/context/. Acionar quando o usuário
  disser "context deep", "contexto completo", "preencher tudo", ou /context-deep.
---

# Context Deep

Preenchimento profundo do business ativo, com pause/resume. As perguntas
aparecem em português; os campos gravados nos YAMLs têm chaves em inglês.

## Pré-requisitos

- `/context-create` rodou (bootstrap `<CONTEXT_ROOT>/` + `*add-business`).
- Recomendado: rodar `/context-quick` antes (preenche os 25 essenciais).

## Estado e retomada

Salve estado em `<CONTEXT_ROOT>/.cache/context-deep-<slug>.json`:

```json
{
  "active": "<slug>",
  "current_phase": 3,
  "current_question_index": 12,
  "answered": ["legal_name", "..."],
  "started_at": "ISO",
  "last_update": "ISO"
}
```

Ao iniciar:
1. Se houver state file → pergunte: "Retomar de onde parou (Fase X, pergunta Y)? (s/n)"
2. Se não → começar do zero.

## Passos

### 1. Carregar config + perguntas

```bash
ACTIVE=$(grep '^active_business:' <CONTEXT_ROOT>/config.yaml | awk '{print $2}')
BIZ="$HOME/context-os/workspace/businesses/$ACTIVE"
mkdir -p <CONTEXT_ROOT>/.cache
```

Carregue `<CONTEXT_ROOT>/data/questions-deep.json`. A raiz é
`{ "DEEP_PHASES": [...] }`, com 9 fases. Cada fase tem `id`, `titulo` e
`questions`. Cada pergunta tem `file`, `ypath`, `q` (português) e `type?`
(`number` | `list`).

### 2. Loop de fases

Para cada fase (1..9, na ordem do array):

- Anuncie: "Fase X — <titulo>" + número de perguntas restantes.
- Para cada pergunta da fase:
  - Mostre `q` (em português).
  - Aguarde resposta.
  - Comandos especiais aceitos a qualquer momento:
    - `/skip` → pula pergunta.
    - `/skip-phase` → pula fase inteira.
    - `/pause` → salva state, sai.
    - `/status` → mostra progresso (X/Y respondidas, fase atual).
  - Escreva YAML conforme `file` + `ypath` (mesmo helper Python do context-quick).
  - Respeite `type`: `number` grava número; `list` grava lista.
  - Atualize o state file a cada N respostas.

### 3. Conclusão

- Apague o state file.
- Mostre relatório: "X/92 respondidas, completude Y%".
- Sugira `/context-enrich` pra completar com dados públicos.

## Edge cases

- Tipos especiais (`type: list`, `type: number`) → parse adequado antes de gravar.
- Crash no meio → state file deve ter sido salvo; ao reabrir, oferecer retomada.
- Sem `active_business` → rodar `/context-create` primeiro.
