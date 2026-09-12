# Task: Create Pre-Prelaunch Campaign

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Pre-Prelaunch (Seed Phase)
> **Output**: Complete pre-prelaunch strategy and content
> **Executor**: jeff-walker

---

## Purpose

Create the Pre-Prelaunch phase of a Product Launch Formula campaign. This phase builds anticipation, gathers market intelligence, and warms up your list before the official prelaunch begins.

---

## Pre Conditions
- Conceito do produto/oferta minimamente definido (transformacao, publico, formato)
- Lista de email existente (minimo 100 para Seed Launch, 1000+ para Internal Launch)
- Datas tentativas de lancamento estabelecidas para calibrar timeline
- Entendimento basico do avatar (dores, desejos, linguagem)
- Plataforma de email configurada para envio de survey e teasers

## Veto Conditions
- Nao criar pre-prelaunch sem conceito do produto/oferta minimamente definido
- Nao executar sem lista de email existente (minimo 100 para seed, 1000+ para internal)
- Nao produzir sem datas tentativas de lancamento estabelecidas

## Prerequisites

- [ ] Product/offer concept defined
- [ ] Email list exists (minimum 100 subscribers for Seed, 1000+ for Internal)
- [ ] Launch dates tentatively set
- [ ] Basic avatar understanding

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. What is your product/offer? (brief description)
2. What transformation does it provide?
3. Who is your ideal avatar?
4. What is your current list size?
5. When do you want to launch? (target date)
6. Have you launched before? (first launch or repeat?)
```

### Step 2: Define Pre-Prelaunch Strategy

**Based on inputs, determine:**
- Launch type (Seed, Internal, JV)
- Pre-prelaunch duration (7-14 days typical)
- Survey approach (email reply vs form)
- Teaser content strategy

**Reference:**
- `data/plf/timeline-reference-kb.yaml` - Timeline templates
- `checklists/plf/preprelaunch-readiness.md` - Readiness validation

### Step 3: Create Survey Campaign

**Generate:**
1. Survey email (curiosity-driven, invites responses)
2. Follow-up/reminder email
3. Analysis framework for responses

**Use template:**
- `templates/plf/preprelaunch-survey-tmpl.md`

**Survey structure:**
```
Question 1: What's your #1 challenge with [TOPIC]?
Question 2: What have you tried that didn't work?
Question 3: If you could wave a magic wand, what would change?
Question 4: What would achieving [RESULT] mean for you?
```

### Step 4: Create Teaser Content

**Generate sequence:**
- Day -14: "Something big coming" hint
- Day -10: Behind-the-scenes sneak peek
- Day -7: "Save the date" announcement
- Day -3: Final countdown teaser
- Day -1: "Tomorrow" anticipation email

**Mental triggers to activate:**
- Anticipation (primary)
- Curiosity
- Events (launch as event)

**Reference:**
- `data/plf/mental-triggers-kb.yaml`
- `data/plf/copy-swipes-kb.yaml`

### Step 5: Plan List Building (Optional)

**If building launch list:**
- Lead magnet strategy
- Opt-in page concept
- Traffic sources
- List growth targets

### Step 6: Create Content Calendar

**Output:**
- Day-by-day content plan
- Email schedule
- Social media tie-ins
- Key milestones

### Step 7: Validate Readiness

**Run checklist:**
- `checklists/plf/preprelaunch-readiness.md`

**Minimum requirements:**
- Product concept: 6/6 items
- Avatar: 4/4 items
- List: 5/5 items
- Tech: 10/10 items

---

## Deliverables

1. **Pre-Prelaunch Strategy Document**
   - Launch type recommendation
   - Timeline with key dates
   - Goals and success metrics

2. **Survey Campaign**
   - Primary survey email
   - Reminder email
   - Response analysis template

3. **Teaser Sequence**
   - 5-7 teaser emails
   - Social media posts (optional)
   - Content calendar

4. **Readiness Report**
   - Checklist status
   - Go/No-Go recommendation
   - Action items for gaps

---

## Success Criteria

- [ ] Survey generates 5-15% response rate
- [ ] Teaser emails achieve 25%+ open rate
- [ ] Anticipation built (replies, engagement)
- [ ] Market intelligence gathered
- [ ] List warmed for prelaunch

---

## Next Steps

After Pre-Prelaunch completes:
→ `tasks/plf/create-plc-sequence.md` - Create PLC content
→ `tasks/plf/map-mental-triggers.md` - Map triggers across launch

---

## References

### Templates
- `templates/plf/preprelaunch-survey-tmpl.md`

### Checklists
- `checklists/plf/preprelaunch-readiness.md`

### Knowledge Bases
- `data/plf/timeline-reference-kb.yaml`
- `data/plf/mental-triggers-kb.yaml`
- `data/plf/copy-swipes-kb.yaml`
- `data/plf/avatar-framework-kb.yaml`

---

## Output Example

```markdown
# Pre-Prelaunch — Email de Survey

Assunto: Preciso da sua ajuda (1 pergunta)

[NOME],

Estou preparando algo grande pra Maio.

Mas antes de finalizar, preciso ouvir de VOCÊ.

Me responde uma coisa:

→ Qual é o seu maior desafio hoje para transformar
  seu conhecimento em um negócio digital que fatura
  pelo menos R$10k/mês?

Pode responder esse email mesmo. Eu leio TUDO.

Sua resposta vai moldar o que estou criando.

Juliano

P.S. Quem responder vai receber algo exclusivo
antes de todo mundo. Só estou dizendo...

---
# Teaser Email (Day -7)
Assunto: Algo está vindo...

[NOME], eu estive quieto nas últimas semanas.

Tem um motivo. Estou finalizando o sistema que levou
meus mentorados a faturar R$2.3M nos últimos 12 meses.

Não posso contar tudo ainda. Mas anota: dia 15 de Maio.

Fique de olho.
```

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Pre-Prelaunch*

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
