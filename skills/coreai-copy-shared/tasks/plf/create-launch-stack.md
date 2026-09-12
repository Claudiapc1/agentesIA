# Task: Create Launch Stack

> **Framework**: Product Launch Formula (Jeff Walker)
> **Agent**: @jeff-walker
> **Phase**: Pre-Cart Preparation
> **Output**: Complete offer stack with value anchoring
> **Executor**: jeff-walker

---

## Purpose

Build a compelling launch stack (offer) that maximizes perceived value while providing genuine transformation. The stack should make the decision to buy feel like a "no-brainer" through strategic value anchoring.

---

## Pre Conditions
- Produto core definido com estrutura de modulos e formato de entrega
- Avatar com dores, desejos e objecoes mapeadas (via survey ou pesquisa)
- Pesquisa de precos competitivos no mercado realizada
- PLCs em progresso ou planejados (stack precisa alinhar com conteudo dos PLCs)
- Decisao sobre tipo de garantia viavel para o negocio

## Veto Conditions
- Nao criar launch stack sem produto core definido e precificado
- Nao executar sem mapeamento de objecoes e dores do avatar
- Nao produzir sem pesquisa de precos competitivos no mercado

## Prerequisites

- [ ] Core product defined and structured
- [ ] Avatar pain points and desires mapped
- [ ] Objections identified (from survey/research)
- [ ] Competitive pricing research done
- [ ] PLC sequence in progress or planned

---

## Workflow Steps

### Step 1: Gather Context

**Elicit from user:**
```
1. What is your core product? (name and one-line description)
2. What's the main transformation it provides?
3. How is it delivered? (course, coaching, software, etc.)
4. What access duration? (lifetime, 12 months, etc.)
5. Target price point? (or range)
6. What are top 3 objections you need to overcome?
7. Do you have existing bonuses or assets to include?
```

### Step 2: Structure Core Product

**Define modules/components:**

| Module | Name | What They Learn/Get | Standalone Value |
|--------|------|---------------------|------------------|
| 1 | | | R$ |
| 2 | | | R$ |
| 3 | | | R$ |
| 4 | | | R$ |
| 5 | | | R$ |

**Value anchoring principles:**
- Each module should have believable standalone value
- Total should be 10-20x actual price
- Values should feel real (not inflated)

**Reference:**
- `templates/plf/launch-stack-tmpl.md`

### Step 3: Design Bonus Stack

**Create 3-5 strategic bonuses:**

**Bonus #1: Fast Action Bonus**
- Purpose: Create urgency for early buyers
- Type: Time-limited or quantity-limited
- Deadline: First 24-48 hours or first X buyers
- Value: Compelling enough to drive action

**Bonus #2: Objection Crusher**
- Purpose: Eliminate primary objection
- Maps to: [OBJECTION]
- How it solves: [EXPLANATION]
- Value: [R$]

**Bonus #3: Complementary Asset**
- Purpose: Add value without competing
- Type: Template, tool, resource, access
- Value: [R$]

**Optional Bonus #4-5:**
- Partner contributions
- Community access
- Additional resources

**Reference:**
- `data/plf/objection-database.yaml` - Objection patterns

### Step 4: Define Guarantee

**Select guarantee type:**

| Type | Description | Best For |
|------|-------------|----------|
| Money Back | 30/60/90 day refund | Digital products |
| Conditional | "Do X, get refund" | High-ticket |
| Result-Based | "If no X result" | Transformation offers |
| Hybrid | Combination | Premium offers |

**Guarantee elements:**
- Duration: ___ days
- Conditions (if any): ___
- Process: ___
- Contact method: ___

### Step 5: Set Pricing Structure

**Single payment:**
- Price: R$ ___
- Position vs value stack: ___% discount

**Payment plan (if offered):**
- Number of payments: ___
- Amount each: R$ ___
- Total: R$ ___
- Premium over single pay: ____%

**Price positioning:**
```
Total Value: R$ [STACK_TOTAL]
Regular Price: R$ [ANCHOR_PRICE] (optional)
Your Investment: R$ [ACTUAL_PRICE]
You Save: R$ [SAVINGS] ([X]%)
```

### Step 6: Create Scarcity Elements

**Select real scarcity:**
- [ ] Cart close (time-based)
- [ ] Limited spots (capacity)
- [ ] Price increase after
- [ ] Bonus removal

**Scarcity schedule:**
- Cart opens: [DATE/TIME]
- Cart closes: [DATE/TIME]
- Fast action deadline: [DATE/TIME]
- Timezone: [TIMEZONE]

**CRITICAL:** All scarcity must be 100% REAL and will be honored.

### Step 7: Write Stack Presentation

**Create stack reveal copy:**

```markdown
## What You Get

✓ [CORE PRODUCT NAME] (Value: R$X)
  - Module 1: [NAME] - [BENEFIT]
  - Module 2: [NAME] - [BENEFIT]
  - Module 3: [NAME] - [BENEFIT]
  - Module 4: [NAME] - [BENEFIT]
  - Module 5: [NAME] - [BENEFIT]

+ BONUS #1: [NAME] (Value: R$X)
  [One-line benefit]

+ BONUS #2: [NAME] (Value: R$X)
  [One-line benefit]

+ BONUS #3: [NAME] (Value: R$X)
  [One-line benefit]

+ [GUARANTEE] Guarantee
  [One-line reassurance]

═══════════════════════════════════
Total Value: R$[TOTAL]
Your Investment Today: R$[PRICE]
═══════════════════════════════════
```

### Step 8: Validate Stack

**Run checklist:**
- `checklists/plf/launch-stack-completeness.md`

**Quality checks:**
- [ ] Stack total > 10x price
- [ ] Each bonus has real value
- [ ] Transformation is clear
- [ ] Guarantee removes friction
- [ ] Scarcity is REAL
- [ ] Payment plan accessible

---

## Deliverables

1. **Core Product Structure**
   - Module breakdown with descriptions
   - Value assignments
   - Delivery format details

2. **Bonus Stack**
   - 3-5 bonuses with values
   - Objection mapping
   - Fast action bonus details

3. **Guarantee Copy**
   - Type and duration
   - Terms and conditions
   - Process description

4. **Pricing Document**
   - Price points
   - Payment plan details
   - Value anchoring math

5. **Stack Presentation Copy**
   - Sales page stack section
   - Slide deck version (optional)
   - Email announcement version

---

## Success Criteria

- [ ] Value stack feels believable
- [ ] Bonuses address real objections
- [ ] Guarantee reduces friction
- [ ] Price feels like a "no-brainer"
- [ ] Scarcity is genuine
- [ ] Stack tells a complete story

---

## Value Anchoring Guidelines

**Believable values:**
- Base on time to create
- Consider market alternatives
- Use round numbers
- Don't over-inflate

**Example reasoning:**
```
Module 1: Complete System Training
- 8 hours of content
- Similar courses sell for R$997
- Conservative value: R$497
```

---

## Next Steps

After launch stack complete:
→ `tasks/plf/create-sales-page-plf.md` - Build sales page
→ `tasks/plf/create-open-cart-sequence.md` - Cart emails
→ `tasks/plf/map-mental-triggers.md` - Trigger validation

---

## References

### Templates
- `templates/plf/launch-stack-tmpl.md`
- `templates/plf/objection-crusher-tmpl.md`

### Checklists
- `checklists/plf/launch-stack-completeness.md`

### Knowledge Bases
- `data/plf/objection-database.yaml`
- `data/plf/launch-budget-kb.yaml`
- `data/plf/platform-comparison-kb.yaml`

---

## Output Example

```markdown
# Launch Stack — Programa Acelerador Digital

## O Que Você Recebe

✓ Programa Acelerador Digital (Valor: R$4.997)
  - Módulo 1: Fundação Digital — posicionamento e avatar
  - Módulo 2: Máquina de Conteúdo — sistema de 30 dias
  - Módulo 3: Funil de Entrada — primeiro produto de R$97-297
  - Módulo 4: Lançamento Semente — valide antes de escalar
  - Módulo 5: Escala Inteligente — de R$5k para R$30k/mês

+ BÔNUS #1: Kit de Templates Prontos (Valor: R$997)
  Emails, scripts e páginas — só preencher e usar

+ BÔNUS #2: Comunidade VIP por 12 meses (Valor: R$1.997)
  Grupo fechado + calls mensais ao vivo comigo

+ BÔNUS #3: Sessão de Diagnóstico Individual (Valor: R$1.500)
  ⚡ FAST ACTION — apenas para quem entrar nas primeiras 48h

+ Garantia Incondicional de 30 Dias
  Se não gostar, devolvemos 100% sem perguntas.

═══════════════════════════════════════
Valor Total: R$9.491
Seu Investimento Hoje: 12x de R$97 ou R$997 à vista
═══════════════════════════════════════
```

---

*Task Version: 1.0*
*Framework: Product Launch Formula - Launch Stack*

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
