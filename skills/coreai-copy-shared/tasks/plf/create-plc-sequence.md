# Task: Create PLC Sequence

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Prelaunch
> **Output**: Complete PLC1, PLC2, PLC3 content sequence
> **Executor**: jeff-walker

---

## Purpose

Design and create the three Pre-Launch Content pieces that form the heart of the Product Launch Formula. Each PLC serves a specific purpose and activates different mental triggers.

---

## Pre Conditions
- Pre-prelaunch concluida com dados de survey e feedback da audiencia
- Produto/oferta completamente definida com mecanismo unico/metodo proprietario
- Case studies e testimonials disponiveis (minimo 3 para PLC2)
- Avatar profundamente entendido com linguagem mapeada
- Datas de lancamento confirmadas para calibrar timing dos PLCs
- Formato de conteudo decidido (video, texto, audio)

## Veto Conditions
- Nao criar PLCs sem dados da pre-prelaunch (survey, feedback, objecoes)
- Nao executar sem mecanismo unico/metodo proprietario definido
- Nao produzir sem case studies e provas sociais disponiveis para PLC2

## Prerequisites

- [ ] Pre-Prelaunch completed (survey data available)
- [ ] Product/offer fully defined
- [ ] Avatar deeply understood
- [ ] Case studies/testimonials available (for PLC2)
- [ ] Launch dates confirmed

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. What are the top 3 insights from your survey?
2. What's your unique mechanism/method?
3. Do you have 3+ case studies/testimonials?
4. What's your content format preference? (video/text/audio)
5. What's your authority story?
6. What are the top 3 objections from your audience?
```

### Step 2: Design PLC Architecture

**Map the sequence:**

| PLC | Focus | Duration | Primary Trigger |
|-----|-------|----------|-----------------|
| PLC1 | The Opportunity | 15-30 min | Authority + Anticipation |
| PLC2 | The Transformation | 20-40 min | Social Proof + Reciprocity |
| PLC3 | The Ownership | 25-45 min | Anticipation + Community |

**Reference:**
- `data/plf/content-formats-kb.yaml` - Format recommendations
- `checklists/plf/cpl1-opportunity-checklist.md (e cpl2/cpl3/cpl4 conforme o CPL)` - Quality standards

### Step 3: Create PLC1 - The Opportunity

**Use template:**
- `templates/plf/plc1-script-tmpl.md`

**Structure:**
1. Hook (30 seconds) - Grab attention
2. Authority/Origin story (2-3 min) - Why listen to you
3. Opportunity revealed (5-7 min) - What's possible
4. First teaching (7-10 min) - Real value
5. Anticipation for PLC2 (2-3 min) - Teaser

**Key elements:**
- [ ] Opens with curiosity/hook
- [ ] Establishes credibility without bragging
- [ ] Shows transformation possibility
- [ ] Delivers REAL value (not just teaser)
- [ ] Uses avatar's exact language
- [ ] Creates genuine anticipation for PLC2

### Step 4: Create PLC2 - The Transformation

**Use template:**
- `templates/plf/plc2-script-tmpl.md`

**Structure:**
1. Recap of PLC1 (1-2 min)
2. Main case study detailed (5-7 min)
3. Additional cases 2-3 (5 min)
4. Deeper teaching (7-10 min)
5. Objection handling (3-5 min)
6. Anticipation for PLC3 (2-3 min)

**Case study criteria:**
- [ ] Similar to target avatar
- [ ] Specific, measurable results
- [ ] Clear before/after
- [ ] Includes direct quote
- [ ] Timeline stated

**Reference:**
- `templates/plf/case-study-tmpl.md` - Case study structure

### Step 5: Create PLC3 - The Ownership

**Use template:**
- `templates/plf/plc3-script-tmpl.md`

**Structure:**
1. Recap of journey (2-3 min)
2. Ownership vision (5-7 min) - Future pacing
3. Day-in-the-life (3-5 min)
4. Final teaching (10-15 min)
5. Bridge to offer (5 min)
6. Product preview (3-5 min)
7. Scarcity/urgency setup (2-3 min)

**Ownership elements:**
- [ ] "Imagine waking up..." scenario
- [ ] Daily life transformation
- [ ] Emotional state change
- [ ] Sensory details
- [ ] Connection to their deeper goals

### Step 6: Create Email Sequences

**For each PLC, create:**
1. Announcement email (day of release)
2. Reminder email (day after)
3. "Did you see?" email (2 days after)

**Reference:**
- `data/plf/copy-swipes-kb.yaml` - Email templates
- `data/plf/email-benchmarks-kb.yaml` - Performance targets

### Step 7: Map Mental Triggers

**Validate trigger activation across PLCs:**

| Trigger | PLC1 | PLC2 | PLC3 |
|---------|------|------|------|
| Authority | ✓ | ✓ | |
| Reciprocity | ✓ | ✓ | ✓ |
| Trust | ✓ | ✓ | ✓ |
| Anticipation | ✓ | ✓ | ✓ |
| Likability | ✓ | ✓ | |
| Community | ✓ | ✓ | ✓ |
| Social Proof | ✓ | ✓ | |
| Scarcity | | | ✓ |

**Reference:**
- `checklists/plf/mental-triggers-activation.md`

### Step 8: Quality Validation

**Run checklist for each PLC:**
- `checklists/plf/cpl1-opportunity-checklist.md (e cpl2/cpl3/cpl4 conforme o CPL)`

**Minimum scores:**
- PLC1: 18/23 (80%)
- PLC2: 30/37 (80%)
- PLC3: 23/29 (80%)

---

## Deliverables

1. **PLC1 Script/Outline**
   - Complete script or detailed outline
   - Email sequence (3 emails)
   - Quality score

2. **PLC2 Script/Outline**
   - Complete script with case studies
   - Email sequence (3 emails)
   - Quality score

3. **PLC3 Script/Outline**
   - Complete script with ownership vision
   - Email sequence (3 emails)
   - Quality score

4. **PLC Calendar**
   - Release dates
   - Email timing
<!-- Dependência externa de contexto/identidade excluída: aplicar contrato CoreAI. -->

---

## Success Criteria

- [ ] Each PLC delivers standalone value
- [ ] Case studies are relatable and specific
- [ ] Mental triggers properly distributed
- [ ] Email open rates: 25%+ (warm list)
- [ ] Video/content completion rate: 60%+
- [ ] Comments/engagement increases each PLC

---

## Common Mistakes to Avoid

**PLC1:**
- All teaser, no substance
- Authority without vulnerability
- Generic advice

**PLC2:**
- Fake or vague testimonials
- Only extreme success cases
- Ignoring objections

**PLC3:**
- Hard sell too early
- Vague about what's included
- Fake scarcity

---

## Next Steps

After PLC sequence complete:
→ `tasks/plf/create-launch-stack.md` - Build offer stack
→ `tasks/plf/create-open-cart-sequence.md` - Cart emails
→ `tasks/plf/create-sales-page-plf.md` - Sales page

---

## References

### Templates
- `templates/plf/plc1-script-tmpl.md`
- `templates/plf/plc2-script-tmpl.md`
- `templates/plf/plc3-script-tmpl.md`
- `templates/plf/case-study-tmpl.md`

### Checklists
- `checklists/plf/cpl1-opportunity-checklist.md (e cpl2/cpl3/cpl4 conforme o CPL)`
- `checklists/plf/mental-triggers-activation.md`

### Knowledge Bases
- `data/plf/content-formats-kb.yaml`
- `data/plf/mental-triggers-kb.yaml`
- `data/plf/copy-swipes-kb.yaml`
- `data/plf/email-benchmarks-kb.yaml`

---

## Output Example

```markdown
# PLC1 — A Oportunidade (Outline)

**Duração:** 22 minutos | **Formato:** Vídeo gravado

## Estrutura

**[0:00-0:30] Hook**
"Nos próximos 20 minutos eu vou te mostrar o sistema exato
que transformou um mentor quebrado em um negócio de R$47k/mês.
E vou te dar o primeiro pilar de graça."

**[0:30-3:00] História de Origem**
- Minha demissão em 2019 e os primeiros R$800 online
- O momento em que percebi que expertise sem sistema = pobreza
- Por que decidi criar o Método 3R

**[3:00-10:00] A Oportunidade**
- O mercado de mentoria digital cresce 34% ao ano
- 93% dos mentores faturam menos de R$5k/mês — por falta de SISTEMA
- A janela está aberta AGORA (dados do mercado)

**[10:00-19:00] Primeiro Ensino — Pilar 1: Reposicionamento**
- Framework completo de reposicionamento em 4 passos
- Exercício prático: "Sua frase de poder"
- Exemplo real: como a Fernanda saiu de "coach genérica" para
  "especialista em transição de carreira para mulheres 40+"

**[19:00-22:00] Teaser PLC2**
"No próximo vídeo eu vou te mostrar como a Fernanda usou os
outros 2 pilares para sair de ZERO para R$18k em 60 dias.
E vou te apresentar mais 3 cases. Fique de olho no seu email."
```

---

*Task Version: 1.0*
*Framework: Product Launch Formula - PLC Sequence*

---

## VALIDAÇÃO OBRIGATÓRIA (auto-trigger pós-criação)

```yaml
step_final:
  name: "Validacao Oraculo + Sugarman"
  action: "Executar AUTOMATICAMENTE apos gerar output"
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
