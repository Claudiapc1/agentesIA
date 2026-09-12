# Task: Diagnose Failed Launch

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Post-Launch Analysis
> **Output**: Complete launch diagnosis and improvement plan
> **Executor**: jeff-walker

---

## Purpose

Systematically analyze a launch that underperformed expectations to identify root causes and create an actionable improvement plan for the next launch.

---

## Pre Conditions
- Acesso a dados reais do lancamento (emails enviados, vendas, trafego)
- Metricas de cada fase disponíveis (open rate, CTR, conversao por fase)
- Acesso a analytics de email (plataforma de email marketing)
- Dados de vendas/conversao com breakdown por dia
- Disponibilidade para analise honesta dos resultados (sem viés de confirmacao)

## Veto Conditions
- Nao diagnosticar sem acesso a dados reais do lancamento (emails, vendas, trafego)
- Nao executar sem metricas de cada fase disponíveis (open rate, CTR, conversao)
- Nao produzir diagnostico baseado apenas em percepcao — exigir numeros

## When to Use This Task

> "A 'failed' launch is just market feedback. The question isn't why it failed - it's what can you learn to make the next one better." - Jeff Walker

**Use this task when:**
- Revenue significantly below target
- Conversion rates below industry standards
- High refund rates
- Low engagement during prelaunch
- Any launch you want to improve

---

## Prerequisites

- [ ] Launch data available (emails, sales, traffic)
- [ ] Access to email analytics
- [ ] Sales/conversion data
- [ ] Honest assessment capability

---

## Workflow Steps

### Step 1: Gather Launch Data

**Collect metrics:**

```yaml
# Launch Overview
launch_name: ""
launch_dates: ""
product_price: ""
revenue_goal: ""
revenue_actual: ""
conversion_goal: ""
conversion_actual: ""

# List Metrics
list_size_at_launch: ""
engagement_rate: ""
unsubscribe_rate: ""

# Content Metrics
plc1_views: ""
plc2_views: ""
plc3_views: ""
sales_page_visits: ""
checkout_starts: ""
checkout_completions: ""

# Email Metrics (average)
open_rate: ""
click_rate: ""
```

### Step 2: Establish Benchmarks

**PLF benchmark ranges:**

| Metric | Poor | Average | Good | Excellent |
|--------|------|---------|------|-----------|
| Email Open Rate | <15% | 15-25% | 25-35% | >35% |
| Email Click Rate | <1% | 1-3% | 3-5% | >5% |
| PLC1 View Rate | <30% | 30-50% | 50-70% | >70% |
| PLC2 View Rate | <20% | 20-35% | 35-50% | >50% |
| PLC3 View Rate | <15% | 15-25% | 25-40% | >40% |
| Conversion Rate | <0.5% | 0.5-2% | 2-5% | >5% |
| Refund Rate | >10% | 5-10% | 2-5% | <2% |

**Reference:**
- `data/plf/email-benchmarks-kb.yaml`

### Step 3: Run Diagnostic Framework

**Analyze each area systematically:**

---

#### AREA 1: LIST QUALITY

**Symptoms of list problems:**
- Low open rates (<15%)
- High unsubscribe rates (>1%)
- Low engagement
- Mismatched avatar

**Diagnostic questions:**
- [ ] Was list warmed before launch?
- [ ] How was list built? (quality of lead magnet)
- [ ] When was last regular communication?
- [ ] Is list segmented for relevance?
- [ ] Are there engagement segments?

**Common issues:**
1. Cold list (no recent contact)
2. Wrong audience (lead magnet mismatch)
3. Bought/scraped list (no relationship)
4. List fatigue (over-emailed)
5. Poor deliverability

**Fix checklist:**
- [ ] Clean list (remove inactive >6 months)
- [ ] Re-engagement campaign before next launch
- [ ] Improve lead magnet alignment
- [ ] Regular value content between launches
- [ ] Check deliverability (SPF, DKIM, DMARC)

---

#### AREA 2: PRE-LAUNCH CONTENT

**Symptoms of PLC problems:**
- Low view rates
- Declining engagement PLC to PLC
- No comments/replies
- No "aha" feedback

**Diagnostic questions:**
- [ ] Did PLC1 deliver real value?
- [ ] Were case studies relatable (PLC2)?
- [ ] Did PLC3 create ownership feeling?
- [ ] Was anticipation built between PLCs?
- [ ] Did content match avatar's language?

**Common issues:**
1. Too much selling, not enough value
2. Case studies not relatable
3. Content too long or too short
4. Wrong format for audience
5. Poor anticipation building

**PLC quality checklist:**
- [ ] Review against `checklists/plf/cpl1-opportunity-checklist.md (e cpl2/cpl3/cpl4 conforme o CPL)`
- [ ] Get external feedback on content
- [ ] Compare to successful PLF launches
- [ ] Test different formats (video vs text)

---

#### AREA 3: OFFER/STACK

**Symptoms of offer problems:**
- High page views, low conversion
- Price objections in replies
- "I'll wait" responses
- Cart abandonment

**Diagnostic questions:**
- [ ] Was transformation clear?
- [ ] Was value stack compelling?
- [ ] Did price feel justified?
- [ ] Were bonuses actually valuable?
- [ ] Was guarantee strong enough?

**Common issues:**
1. Price too high for value perception
2. Transformation unclear
3. Bonuses don't add real value
4. Weak or confusing guarantee
5. No urgency/scarcity

**Offer analysis:**
- [ ] Review against `checklists/plf/launch-stack-completeness.md`
- [ ] Survey non-buyers for feedback
- [ ] Compare to competitor offers
- [ ] Test different price points

---

#### AREA 4: SALES PAGE

**Symptoms of sales page problems:**
- Traffic but no sales
- High bounce rate
- Low time on page
- Checkout abandonment

**Diagnostic questions:**
- [ ] Does page load fast?
- [ ] Is headline compelling?
- [ ] Is offer clearly presented?
- [ ] Are testimonials prominent?
- [ ] Is CTA clear and visible?
- [ ] Does mobile work?

**Common issues:**
1. Slow loading
2. Weak headline
3. Confusing structure
4. Hidden price/CTA
5. Mobile issues
6. Too long (for PLF warm traffic)

**Sales page analysis:**
- [ ] Review against `checklists/plf/sales-page-plf.md`
- [ ] Heatmap analysis (if available)
- [ ] Mobile testing
- [ ] Speed test
- [ ] External copywriter review

---

#### AREA 5: EMAIL SEQUENCE

**Symptoms of email problems:**
- Declining opens through sequence
- Low clicks to content/page
- No replies or engagement
- Unsubscribes during launch

**Diagnostic questions:**
- [ ] Were subject lines compelling?
- [ ] Was frequency right? (not too many)
- [ ] Did emails have personality?
- [ ] Was there variety in approach?
- [ ] Did close cart sequence create urgency?

**Common issues:**
1. Boring/generic subject lines
2. Too many emails (fatigue)
3. Too few emails (missed)
4. All emails sound the same
5. Weak close cart sequence

**Email analysis:**
- [ ] Review open rates by email
- [ ] Identify drop-off points
- [ ] Compare to `data/plf/email-benchmarks-kb.yaml`
- [ ] Test new subject lines

---

#### AREA 6: TIMING & EXTERNAL FACTORS

**Symptoms:**
- Strong content but poor results
- Unusual engagement patterns
- Competitor activity

**Diagnostic questions:**
- [ ] Was timing right? (avoid holidays, events)
- [ ] Were there competitor launches?
- [ ] Any external events (economic, news)?
- [ ] Was cart open long enough?
- [ ] Was there enough pre-launch time?

**Common issues:**
1. Launched during holiday/vacation
2. Competitor launched same time
3. Economic downturn
4. Too short cart period
5. Rushed prelaunch

---

#### AREA 7: TECHNICAL ISSUES

**Symptoms:**
- Missing data
- Checkout problems
- Delivery issues
- Payment failures

**Diagnostic questions:**
- [ ] Did checkout work smoothly?
- [ ] Were there payment issues?
- [ ] Did emails deliver?
- [ ] Did links work?
- [ ] Was tracking accurate?

**Common issues:**
1. Checkout bugs
2. Payment gateway issues
3. Deliverability problems
4. Broken links
5. Tracking failures

### Step 4: Prioritize Issues

**Issue prioritization matrix:**

| Issue | Impact | Ease of Fix | Priority |
|-------|--------|-------------|----------|
| | High/Med/Low | High/Med/Low | 1-10 |
| | | | |
| | | | |

**Priority framework:**
- High Impact + Easy Fix = DO FIRST
- High Impact + Hard Fix = PLAN CAREFULLY
- Low Impact + Easy Fix = DO IF TIME
- Low Impact + Hard Fix = SKIP/DELEGATE

### Step 5: Create Improvement Plan

**For each priority issue:**

```markdown
## Issue: [ISSUE NAME]

**Current State:** [What's happening]
**Desired State:** [What should happen]
**Root Cause:** [Why it's happening]

**Action Items:**
1. [ ] [SPECIFIC ACTION]
2. [ ] [SPECIFIC ACTION]
3. [ ] [SPECIFIC ACTION]

**Success Metric:** [How we'll know it's fixed]
**Owner:** [Who's responsible]
**Timeline:** [When it will be done]
```

### Step 6: Document Lessons Learned

**Launch retrospective:**

```markdown
## What Worked
1. [POSITIVE 1]
2. [POSITIVE 2]
3. [POSITIVE 3]

## What Didn't Work
1. [NEGATIVE 1] → Fix: [SOLUTION]
2. [NEGATIVE 2] → Fix: [SOLUTION]
3. [NEGATIVE 3] → Fix: [SOLUTION]

## Surprises
1. [UNEXPECTED 1]
2. [UNEXPECTED 2]

## Next Launch Commitments
1. [ ] [COMMITMENT 1]
2. [ ] [COMMITMENT 2]
3. [ ] [COMMITMENT 3]
```

### Step 7: Plan Recovery (If Applicable)

**Post-launch recovery options:**

1. **Reopen (rare):**
   - Only with legitimate reason
   - "Extended due to [REAL REASON]"
   - Use sparingly

2. **Downsell:**
   - Offer smaller product
   - Payment plan option
   - Different format

3. **Waitlist:**
   - Collect for next launch
   - Nurture relationship
   - Give value meanwhile

4. **Evergreen test:**
   - Small traffic test
   - Validate with paid ads
   - Iterate before next live

---

## Deliverables

1. **Diagnostic Report**
   - All metrics documented
   - Benchmark comparisons
   - Issue identification

2. **Root Cause Analysis**
   - Each area assessed
   - Primary issues identified
   - Evidence documented

3. **Improvement Plan**
   - Prioritized action items
   - Owners and timelines
   - Success metrics

4. **Lessons Learned Document**
   - What worked/didn't
   - Commitments for next launch
   - Retrospective notes

---

## Success Criteria

- [ ] All metrics documented
- [ ] Root causes identified
- [ ] Action plan created
- [ ] Lessons documented
- [ ] Team aligned on improvements
- [ ] Timeline for fixes set

---

## Jeff's Perspective on "Failure"

> "I've never had a failed launch. I've had launches that taught me things. Every launch is market research - some just happens to make more money than others."

> "The biggest launches often follow the 'failures.' Because you learned so much that the next one couldn't help but be better."

> "Don't beat yourself up. Analyze, learn, improve. That's all any of us can do."

---

## Common Root Causes

| Symptom | Often Caused By |
|---------|-----------------|
| Low opens | Cold list, bad timing, weak subjects |
| Low clicks | Content not matching interest |
| Low PLC views | Wrong format, too long, not enough value |
| Low conversion | Wrong audience, wrong offer, wrong price |
| High refunds | Over-promised, wrong expectations |

---

## Next Steps

After diagnosis complete:
→ Implement priority fixes
→ `tasks/plf/create-preprelaunch.md` - Plan next launch
→ Schedule relaunch with improvements

---

## References

### Checklists
- `checklists/plf/post-launch-analysis.md`
- `checklists/plf/cpl1-opportunity-checklist.md (e cpl2/cpl3/cpl4 conforme o CPL)`
- `checklists/plf/sales-page-plf.md`
- `checklists/plf/launch-stack-completeness.md`

### Knowledge Bases
- `data/plf/email-benchmarks-kb.yaml`
- `data/plf/contingency-framework-kb.yaml`

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Launch Diagnosis*

---

## Output Example

```markdown
# Diagnóstico de Lançamento — Mentoria Elite (Março/2026)

## Resultado vs Meta
| Métrica | Meta | Real | Status |
|---------|------|------|--------|
| Faturamento | R$80.000 | R$23.400 | ❌ 29% da meta |
| Vendas | 80 | 23 | ❌ |
| Taxa de conversão | 3% | 0.9% | ❌ |
| Open rate (cart) | 30% | 18% | ❌ |

## Diagnóstico por Fase
| Fase | Score | Problema Identificado |
|------|-------|-----------------------|
| Pre-Prelaunch | 6/10 | Survey com apenas 3% de resposta — lista fria |
| PLC1 | 7/10 | Bom conteúdo, mas hook fraco (drop 60% nos 30s) |
| PLC2 | 4/10 | CRÍTICO: Apenas 1 case study, sem resultados específicos |
| PLC3 | 5/10 | Ownership vago — faltou future pacing concreto |
| Open Cart | 3/10 | CRÍTICO: Apenas 6 emails em 5 dias (mínimo: 12) |

## Causa Raiz
PLC2 sem social proof + sequência de cart fraca = lista não convencida.

## Plano de Correção (próximo lançamento)
1. Coletar 5+ cases com números reais antes do PLC2
2. Dobrar frequência de emails no cart (12-15 emails)
3. Aquecer lista 30 dias antes com conteúdo de valor
```

---

## VALIDAÇÃO OBRIGATÓRIA (auto-trigger pós-criação)

```yaml
step_final:
  name: "Validacao Oraculo + Sugarman"
  action: "Executar quando task gera copy ou conteudo persuasivo"
  agent: oraculo-torriani
  load_before: data/manual-craft.md
  sequence:
    - step: "V1"
      name: "Regras Inviolaveis (veto instantaneo)"
      regras: ["RU-01 a RU-03", "RA-01 a RA-05 (se ads)", "CL-01 a CL-38"]
    - step: "V2"
      name: "Regras de Craft"
      file: data/manual-craft.md
      regra: "RC-01 a RC-10 — 3+ violacoes = reprova"
    - step: "V3"
      name: "Oraculo Torriani"
      file: checklists/oraculo-torriani.md
      regra: "10/10 ou refaz"
    - step: "V4"
      name: "Sugarman 30 Triggers"
      file: checklists/sugarman-30-triggers.md
      regra: "Minimo 15 triggers presentes"
```

> **REGRA:** Nenhum output de PLF sai sem passar pelo Oráculo. Copy 10/10 ou refaz.
