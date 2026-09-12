---
version: "1.0"
date: "2026-03-09"
author:
  agent: "squad-chief"
  squad: "copy"
aios: true
project: "opb-corp"
---

# Task: Review Copy — Cross-Review por Segundo Agente

## Task Anatomy

| Campo | Valor |
|-------|-------|
| task_name | review-copy |
| status | active |
| responsible_executor | segundo agente (selecionado pelo Copy Chief) |
| executor | oraculo-torriani |
| execution_type | autonomous |
| elicit | false |
| mandatory | false — apenas para high-stakes |

## Objetivo

Um segundo copywriter revisa o draft sob sua perspectiva metodológica. Não reescreve — sugere melhorias baseadas em seus frameworks.

## Quando Usar

- `stakes: high` ou `stakes: critical` no briefing
- Copy Chief identifica que o draft precisa de perspectiva complementar
- Projetos com blending (2-3 writers)

## Pre Conditions
- Draft de copy disponivel (output de write-copy.md)
- Briefing original acessivel para contexto
- Diagnostic Report disponivel para referencia metodologica
- Stakes definido como high ou critical no briefing (review obrigatorio)
- Agente reviewer selecionado pelo Copy Chief com base na necessidade especifica
- Manual de craft (data/manual-craft.md) carregado para referencia

## Input

1. Draft de copy (output de `write-copy.md`)
2. Briefing original
3. Diagnostic Report

## Execution Rules

1. Ativar o agente reviewer via `/copy:agents:{agent-name}`
2. Entregar draft + briefing + diagnostic
3. Instruir: "Revise este draft sob sua perspectiva. Não reescreva — aponte gaps e sugira melhorias usando seus frameworks."

## Reviewer Selection Heuristics

| Situação | Reviewer Sugerido | Razão |
|----------|-------------------|-------|
| Sales page precisa de mais prova | claude-hopkins | Specificity + reason-why |
| Headline fraca | eugene-schwartz | Awareness-level headline strategy |
| Copy sem big idea | gary-bencivenga | Big Idea methodology |
| Urgency insuficiente | dan-kennedy | Urgency/deadline frameworks |
| Mechanism não claro | todd-brown | Unique Mechanism discovery |
| Story fraca | john-carlton | Star/Story/Solution |

## Output

```yaml
review:
  reviewer: "{agent-name}"
  overall_assessment: "{strong | needs_work | weak}"
  strengths:
    - "{strength 1}"
    - "{strength 2}"
  gaps:
    - gap: "{description}"
      framework: "{framework name from reviewer's methodology}"
      suggestion: "{specific improvement}"
  priority_fixes:
    - "{fix 1 — highest impact}"
    - "{fix 2}"
```

## Veto Conditions

- NÃO reescrever o copy inteiro — apenas sugerir melhorias
- NÃO sobrepor a voz do writer original — manter o DNA
- NÃO pular para reviewer se stakes = low
- NÃO fazer review sem criterios objetivos de avaliacao
- NÃO aprovar copy que viola regras inviolaveis do Oraculo
- NÃO fazer review sem referencia ao manual-craft.md

## Handoff

→ Writer original aplica fixes → `qa-gate.md`

## Output Example

```markdown
# Cross-Review — Sales Page Acelerador Digital
## Reviewer: @todd-brown (E5 Method perspective)

### Avaliação Geral: 8/10 — BOM (com 3 sugestões de melhoria)

### Pontos Fortes
1. Mecanismo único (Método 3R) bem posicionado na headline
2. Proof stack forte — 437 alunos, R$2.3M, cases com nomes reais
3. Stack de valor convincente com ancoragem R$9.491 → R$997

### Sugestões de Melhoria (E5 Framework)

**1. Big Idea mais agressiva (prioridade ALTA)**
- Atual: "De mentor invisível a R$30k/mês"
- Sugestão: "O método de 5 passos que está criando uma nova geração
  de mentores milionários — e por que funciona mesmo se você não tem
  audiência hoje"
- Razão: Big Idea precisa ser ÚNICA e ARGUMENTÁVEL, não só promessa

**2. Emotional Connection fraca no mid-page (prioridade MÉDIA)**
- Falta uma "story of discovery" entre o PLC recap e o stack
- Sugestão: Adicionar momento de vulnerabilidade pessoal

**3. Urgência real insuficiente (prioridade BAIXA)**
- Cart close está mencionado mas não VISUALIZADO
- Sugestão: Countdown timer + "X vagas restantes" dinâmico

### NÃO reescrevi — apenas sugeri. Writer original decide.
```

