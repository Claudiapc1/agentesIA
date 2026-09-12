---
version: "1.0"
date: "2026-03-09"
author:
  agent: "squad-chief"
  squad: "copy"
aios: true
project: "opb-corp"
---

# Task: Deliver — Entrega Final ao Usuário

## Task Anatomy

| Campo | Valor |
|-------|-------|
| task_name | deliver |
| status | active |
| responsible_executor | copy-chief |
| executor | copy-chief |
| execution_type | autonomous |
| elicit | false |

## Objetivo

Copy Chief consolida o resultado final e entrega ao usuário com contexto completo.

## Pre Conditions
- Copy final aprovada pelo QA Gate com verdict PASS (score minimo 20/30)
- Oraculo Torriani aplicado com nota 10/10
- Diagnostic Report disponivel para inclusao no delivery package
- Routing decision e rationale documentados
- Copy formatada para o canal de destino (premissa-core.md carregada)

## Input

1. Copy final (post-QA Gate PASS)
2. Diagnostic Report
3. QA Gate score
4. Routing decision + rationale

## Output — Delivery Package

```markdown
# Copy Delivery — {projeto}

## Copy Final
{copy completa aqui}

## Metadata
- **Writer:** {agent-name} ({tier})
- **Canal:** {canal}
- **Awareness Level:** {1-5} ({label})
- **Sophistication Level:** {1-5}
- **QA Score:** {X}/30 ({grade})

## Diagnostic Summary
- Hopkins: {key finding}
- Schwartz: {key finding}
- Collier: {key finding}

## Routing Rationale
{por que este writer foi selecionado}

## Next Steps (sugestões)
- [ ] A/B test headline variants
- [ ] Monitorar métricas em {período}
- [ ] Iterar baseado em dados
```

## Acceptance Criteria

- [ ] Copy final inclusa e formatada para o canal
- [ ] Metadata completo (writer, awareness, QA score)
- [ ] Diagnostic summary presente
- [ ] Routing rationale documentado

## Output Example

```markdown
# Entrega Final — Email Sequence Open Cart (Mentoria Elite)

## Resumo da Entrega
| Campo | Valor |
|-------|-------|
| Projeto | Mentoria Elite — Lançamento Q2/2026 |
| Asset | Sequência de emails Open Cart (12 emails, 5 dias) |
| Writer | @andre-chaperon (SOAP Opera Sequence) |
| Reviewer | @stefan-georgi (RMBC cross-review) |
| QA Score | 27/30 — PASS |
| Oráculo | 10/10 ✅ |
| Sugarman Triggers | 19/30 ativos |

## Diagnostic Summary
- Awareness Level: Solution-Aware (Schwartz Level 3)
- Sophistication: Stage 3 (Mecanismo Único necessário)
- Routing: Andre Chaperon selecionado por sequência narrativa

## Arquivos Entregues
1. `outputs/mentoria-elite/cart-email-01-doors-open.md`
2. `outputs/mentoria-elite/cart-email-02-social-proof.md`
3. `outputs/mentoria-elite/cart-email-03-objection.md`
...
12. `outputs/mentoria-elite/cart-email-12-closed.md`

## Próximo Passo
Revisar emails e carregar na plataforma de envio.
Sugestão: testar assuntos A/B nos emails 1 e 8.
```

## Veto Conditions
- Copy nao passou pelo Oraculo Torriani (10/10 obrigatorio)
- Entrega sem formato copy_structured definido
- Premissa-core.md nao foi carregada na sessao
