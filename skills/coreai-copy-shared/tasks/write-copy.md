---
version: "1.0"
date: "2026-03-09"
author:
  agent: "squad-chief"
  squad: "copy"
aios: true
project: "opb-corp"
---

# Task: Write Copy — Produção de Copy por Agente Selecionado

## Task Anatomy

| Campo | Valor |
|-------|-------|
| task_name | write-copy |
| status | active |
| responsible_executor | agent selecionado pelo Copy Chief (T1/T2/T3) |
| executor | copy-chief |
| execution_type | autonomous |
| elicit | false |

## Objetivo

O agente selecionado produz o draft de copy usando sua metodologia proprietária, informado pelo briefing + diagnostic report.

## Pre Conditions
- Briefing completo disponivel (output de briefing.md)
- Diagnostic Report concluido com awareness level e sophistication level definidos
- Copy Chief routing decision tomada (agente selecionado com rationale)
- Premissa-core.md carregada na sessao
- Awareness level do Schwartz justificado e documentado
- Canal de destino definido para formatacao adequada

## Input

1. Briefing completo
2. Diagnostic Report (awareness, sophistication, conversation entry)
3. Copy Chief routing decision (agent selecionado + rationale)

## Execution Rules

1. **Ativar o agente via slash command:** `/copy:agents:{agent-name}`
2. **Entregar ao agente:**
   - Briefing
   - Diagnostic Report
   - Instrução: "Produza o copy usando sua metodologia. Aplique seus frameworks. Mantenha sua voz."
3. **O agente produz usando SUA metodologia** — não uma genérica
4. **Output deve refletir o DNA do agente** — se é Halbert, deve soar como Halbert

## Agent Selection by Copy Type (from routing-matrix)

| Copy Type | Primary Agents | When |
|-----------|---------------|------|
| Sales page (long-form) | halbert, makepeace, bencivenga | High-stakes, $1K+ products |
| VSL script | georgi, benson | Health VSLs, conversational VSLs |
| Email sequence | chaperon, settle | Nurture sequences, daily emails |
| Launch sequence | walker, brunson, kern | PLF, webinar, relational launches |
| Ads copy | kennedy, halbert | Urgency-driven, hook-driven |
| Cohort/workshop | ry-schwartz | Cohort launch copy |
| Unique mechanism | todd-brown | E5 Method, mechanism discovery |
| Brand + DR | ogilvy, bencivenga | Brand layer + response layer |
| Magalog/direct mail | rutz, makepeace, lampropoulos | Magalogs, health/finance controls |
| Infomercial/TV | deutsch | DRTV, demonstrations |
| Social/creator | dan-koe | OPB, threads, newsletters |
| Webinar script | brunson | Perfect Webinar |

## Output

Draft de copy no formato do canal solicitado, com:
- Headline/hook
- Body copy
- CTA
- Notas do agente sobre decisões de copy

## Veto Conditions

- NÃO produzir copy genérica — deve refletir a metodologia do agente
- NÃO ignorar o Diagnostic Report — awareness level guia o tom e a estrutura
- NÃO misturar metodologias de agentes diferentes no mesmo draft
- NÃO escrever sem premissa-core.md carregada
- NÃO entregar copy sem CTA claro e especifico

## Acceptance Criteria

- [ ] Copy produzida no formato correto para o canal
- [ ] Metodologia do agente claramente aplicada
- [ ] Diagnostic Report considerado (awareness, sophistication)
- [ ] Copy pronta para QA Gate

## Handoff

→ `review-copy.md` (opcional, high-stakes) → `qa-gate.md` (obrigatório)

## Output Example

```markdown
# Copy Draft — Email Cart Day 1 "Doors Open" (Acelerador Digital)
## Writer: @andre-chaperon (SOAP Opera Sequence)

Assunto: As portas acabaram de abrir

[NOME],

Há 3 semanas eu te pedi pra me contar seu maior desafio.

Você respondeu. 847 pessoas responderam.

E a resposta mais comum me pegou de guarda baixa:

"Eu SEI o que fazer. Eu só não consigo FAZER."

Foi por isso que criei o Programa Acelerador Digital.

Não é mais um curso. Não é mais conteúdo pra consumir.

É um SISTEMA de implementação. 5 passos. 12 semanas.
Com alguém do meu time te cobrando toda semana.

Funciona? Pergunta pra Fernanda (R$18k no primeiro mês).
Ou pro Ricardo (R$12k com lista de 340 pessoas).
Ou pra qualquer um dos 437 que já passaram por aqui.

As portas estão abertas. Mas só até sexta, 23:59.

→ Entrar agora: [LINK]

Juliano

---
**Metadata:** Awareness L3 | Sophistication S3 | CTA: sales page
**Oráculo:** Pendente (aguardando qa-gate)
```

