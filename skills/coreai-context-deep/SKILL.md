---
name: context-deep
description: >
  Preenchimento completo do contexto da empresa em ~210 perguntas organizadas
  em 9 fases, com suporte a pause/resume. Lê banco em ~/coreaios/data/questions-deep.json.
  Acionar quando o usuário disser "context deep", "contexto completo",
  "preencher tudo", ou /coreaios:context-deep.
---

# Context Deep

Preenchimento profundo do business ativo, com pause/resume.

## Pré-requisitos

- `/coreaios:setup` rodou.
- Recomendado: rodar `/coreaios:context-quick` antes (preenche os 25 essenciais).

## Estado e retomada

Salve estado em `~/coreaios/.config/cache/context-deep-<slug>.json`:

```json
{
  "active": "<slug>",
  "current_phase": 3,
  "current_question_index": 12,
  "answered": ["razao_social", "..."],
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
ACTIVE=$(grep '^active_business:' ~/coreaios/.config/config.yaml | awk '{print $2}')
BIZ="$HOME/coreaios/businesses/$ACTIVE"
mkdir -p ~/coreaios/.config/cache
```

Carregue `~/coreaios/data/questions-deep.json`. As perguntas têm `phase` (1-9), `name`, `file`, `ypath`, `q`, `type?`.

### 2. Loop de fases

Para cada fase 1..9:

- Anuncie: "Fase X — <nome>" + número de perguntas restantes.
- Para cada pergunta da fase:
  - Mostre `q`.
  - Aguarde resposta.
  - Comandos especiais aceitos a qualquer momento:
    - `/skip` → pula pergunta.
    - `/skip-phase` → pula fase inteira.
    - `/pause` → salva state, sai.
    - `/status` → mostra progresso (X/Y respondidas, fase atual).
  - Escreva YAML conforme `file` + `ypath` (mesmo helper do context-quick).
  - Atualize state file a cada N respostas.

### 3. Conclusão

- Apague state file.
- Mostre relatório: "X/210 respondidas, completude Y%".
- Sugira `/coreaios:context-enrich` pra completar com dados públicos.

## Edge cases

- Tipos especiais (`type: list`, `type: number`) → parse adequado antes de gravar.
- Pergunta condicional (`when: <expr>`) → avaliar baseado em respostas anteriores; se não aplicar, pular silenciosamente.
- Crash no meio → state file deve ter sido salvo; ao reabrir, oferecer retomada.
