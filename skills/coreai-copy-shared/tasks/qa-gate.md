---
version: "1.0"
date: "2026-03-09"
author:
  agent: "squad-chief"
  squad: "copy"
aios: true
project: "opb-corp"
---

# Task: QA Gate — Sugarman 30 Triggers Evaluation

## Task Anatomy

| Campo | Valor |
|-------|-------|
| task_name | qa-gate |
| status | active |
| responsible_executor | joe-sugarman |
| executor | oraculo-torriani |
| execution_type | deterministic |
| elicit | false |
| mandatory | true — NUNCA pular |

## Objetivo

Avaliar o copy final contra os 30 Psychological Triggers de Joe Sugarman. Produzir score e recomendações de melhoria.

## Pre Conditions
- Copy draft completo disponivel (output de write-copy.md ou review-copy.md)
- Briefing original acessivel para comparacao de aderencia
- Canal e tipo de copy definidos para avaliar triggers relevantes
- Oraculo Torriani aplicado previamente (10/10 obrigatorio)
- Manual de craft (data/manual-craft.md) carregado na sessao

## Input

1. Copy draft (post-review se aplicável)
2. Briefing original
3. Canal e tipo de copy

## Execution

Ativar via `/copy:agents:joe-sugarman`

Instruir: "Avalie este copy contra os 30 Psychological Triggers. Score cada trigger como ATIVO, PARCIAL, ou AUSENTE. Recomende melhorias para triggers ausentes."

## 30 Psychological Triggers Checklist

| # | Trigger | Avaliar |
|---|---------|---------|
| 1 | Feeling of Involvement | Leitor se sente parte da narrativa? |
| 2 | Honesty | Copy transparente e crível? |
| 3 | Integrity | Consistente com a marca? |
| 4 | Credibility | Provas e credenciais apresentadas? |
| 5 | Value and Proof of Value | Valor claramente demonstrado? |
| 6 | Justify the Purchase | Razão lógica para comprar? |
| 7 | Greed | Oferta irresistível? |
| 8 | Establish Authority | Autoridade estabelecida? |
| 9 | Satisfaction Conviction | Garantia ou risco reverso? |
| 10 | Nature of Product | Produto bem explicado? |
| 11 | Current Fads | Aproveita tendências atuais? |
| 12 | Timing | Urgência/timing adequado? |
| 13 | Belonging | Senso de comunidade/tribo? |
| 14 | Desire to Collect | Colecionabilidade (se aplicável)? |
| 15 | Curiosity | Gera curiosidade suficiente? |
| 16 | Sense of Urgency | Urgência real (não falsa)? |
| 17 | Fear | FOMO ou perda potencial? |
| 18 | Instant Gratification | Resultado imediato prometido? |
| 19 | Exclusivity | Exclusividade comunicada? |
| 20 | Simplicity | Copy fácil de entender? |
| 21 | Human Relationships | Conexão humana presente? |
| 22 | Storytelling | História envolvente? |
| 23 | Mental Engagement | Leitor mentalmente engajado? |
| 24 | Guilt | Reciprocidade/obrigação? |
| 25 | Specificity | Números e detalhes específicos? |
| 26 | Familiarity | Linguagem familiar ao ICP? |
| 27 | Hope | Esperança de resultado? |
| 28 | Pattern Interrupt | Quebra de padrão na abertura? |
| 29 | Linking | Conexão com algo conhecido? |
| 30 | Consistency | Tom consistente do início ao fim? |

## Output

```yaml
qa_gate:
  copy_type: "{tipo}"
  total_score: "{X}/30"
  grade: "{A+ (27-30) | A (24-26) | B (20-23) | C (15-19) | F (<15)}"
  verdict: "{PASS | REVISE | FAIL}"
  triggers:
    active: ["{trigger numbers}"]
    partial: ["{trigger numbers}"]
    absent: ["{trigger numbers}"]
  top_3_improvements:
    - trigger: "{#}"
      name: "{name}"
      action: "{specific improvement}"
    - trigger: "{#}"
      name: "{name}"
      action: "{specific improvement}"
    - trigger: "{#}"
      name: "{name}"
      action: "{specific improvement}"
```

## Scoring Rules

| Grade | Score | Verdict | Action |
|-------|-------|---------|--------|
| A+ | 27-30 | PASS | Deliver to user |
| A | 24-26 | PASS | Deliver with minor suggestions |
| B | 20-23 | REVISE | Apply top 3 improvements, re-evaluate |
| C | 15-19 | REVISE | Significant revision needed |
| F | <15 | FAIL | Re-route to different writer or restructure |

## Veto Conditions

- NUNCA pular o QA Gate — é obrigatório para toda copy
- NUNCA dar PASS para score < 20 sem justificativa
- NUNCA avaliar triggers irrelevantes para o canal (ex: "Desire to Collect" em email nurture)
- NUNCA aprovar copy sem o Oraculo Torriani aplicado previamente
- NUNCA aprovar copy com nota do Oraculo inferior a 10/10
- NUNCA ignorar regras inviolaveis (palavras proibidas, cliches)

## Acceptance Criteria

- [ ] Todos os 30 triggers avaliados
- [ ] Score calculado corretamente
- [ ] Top 3 improvements com ações específicas (não genéricas)
- [ ] Verdict claro (PASS/REVISE/FAIL)

## Handoff

- PASS → `deliver.md` (Copy Chief entrega ao usuário)
- REVISE → Writer original aplica fixes → re-run `qa-gate.md`
- FAIL → Copy Chief re-avalia routing → `write-copy.md` com outro agent

## Output Example

```markdown
# QA Gate — Sugarman 30 Triggers — Sales Page Acelerador Digital

## Score: 22/30 — PASS ✅ (mínimo: 20/30)

| # | Trigger | Ativo? | Onde |
|---|---------|--------|------|
| 1 | Involvement | SIM | Quiz na abertura |
| 2 | Honesty | SIM | "Não é pra todo mundo" seção |
| 3 | Integrity | SIM | Garantia transparente |
| 4 | Credibility | SIM | Cases com números |
| 5 | Value Justification | SIM | Stack com valores individuais |
| 6 | Greed | SIM | "R$9.491 por R$997" |
| 7 | Authority | SIM | Credenciais + resultados |
| ... | ... | ... | ... |
| 28 | Guilt | NÃO | — |
| 29 | Specificity | SIM | "437 alunos", "R$2.3M" |
| 30 | Familiarity | SIM | Linguagem do avatar |

## Triggers Ausentes (8)
Guilt, Belonging, Patterning, Rhyme/Rhythm, Hope,
Mental Engagement, Curiosity (fraco), Desire to Collect

## Recomendação
Score adequado para aprovação. Para elevar para 25+,
adicionar Curiosity (open loop no mid-page) e Belonging
("junte-se a 437 mentores que já fazem parte").
```

