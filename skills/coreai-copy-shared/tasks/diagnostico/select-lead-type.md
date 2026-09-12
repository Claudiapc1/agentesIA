# Select Lead Type - Masterson's 6 Lead Types

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Select Lead Type |
| **status** | `active` |
| **responsible_executor** | @michael-masterson, @copy-chief |
| **execution_type** | `Hybrid` |
| **pattern** | EXEC-HY-002 |
| **rationale** | Lead type errado mata a copy antes da primeira frase. AI mapeia awareness para lead type, humano valida antes de escrever. |

### Hybrid Execution Flow

```yaml
hybrid_flow:
  ai_phase:
    action: "Mapear awareness level para lead type + determinar copy length"
    output: "Recomendação de lead type com justificativa"
    confidence_threshold: 0.8

  human_phase:
    action: "Validar se o lead type faz sentido para o mercado e produto"
    checkpoint: "LEAD_TYPE_VALIDATION"
    questions:
      - "O lead type recomendado faz sentido dado o nível de awareness?"
      - "O comprimento de copy sugerido é viável para o formato?"
      - "A Rule of One está respeitada (uma ideia, um desejo, uma emoção)?"

  fallback:
    trigger: "Humano discorda da recomendação"
    action: "Refazer análise com input adicional do humano"
```

---

## Purpose

Select the optimal lead type for a piece of copy based on the prospect's awareness level, using Michael Masterson's 6 Lead Types framework. The lead type determines HOW the copy opens and sets the tone for everything that follows.

## When to Use

- **After awareness diagnosis** - ALWAYS run diagnose-awareness first
- Before writing any sales page, email, ad, or VSL
- When copy opening isn't converting (lead type mismatch)
- When repositioning existing copy for a different audience
- When adapting copy from one format to another

## Masterson on Lead Types

```
"The lead is the most important part of your copy.
It's the first thing your prospect reads.
If it doesn't grab them, nothing else matters.

The type of lead you choose depends entirely
on how AWARE your prospect is of:
- The problem
- The solution
- Your product"

— Michael Masterson, Great Leads
```

## Inputs

```yaml
required:
  - awareness_level: "Output from diagnose-awareness (1-5)"
  - product_info: "What you're selling, key benefit, unique mechanism"
  - icp: "Ideal Customer Profile (who, what they want, what they fear)"

optional:
  - copy_format: "sales_page | email | ad | vsl | landing_page"
  - brand_dna: "Brand voice and positioning"
  - competitor_leads: "How competitors open their copy"
```

## Executor

```yaml
executor:
  primary: copy-chief
  secondary: null
  rationale: "Copy Chief seleciona lead type com base no diagnostico de awareness, integrando Masterson Lead Types com estrategia geral de copy"
```

## Pre-Conditions

```
MANDATORY: Awareness level MUST be diagnosed first.

IF awareness_level is undefined or unknown:
  → BLOCK. Run diagnose-awareness.md first.
  → Do NOT guess the awareness level.
  → Do NOT default to any level.
```

## Workflow

### Step 1: Load Masterson 6 Lead Types

```
THE 6 LEAD TYPES (from least to most direct):

═══════════════════════════════════════════════════════════════════
TYPE 1: INDIRECT LEAD — Story Lead
═══════════════════════════════════════════════════════════════════
FOR: Level 1 (Unaware) audiences
APPROACH: Open with a compelling story that draws reader in
          before they know what you're selling.
COPY LENGTH: Very Long (3000-5000+ words)
EXAMPLE: "On a cold Tuesday morning in 1997, a broke teacher
         discovered something that would change everything..."
WHEN: Prospect doesn't know they have a problem.

═══════════════════════════════════════════════════════════════════
TYPE 2: INDIRECT LEAD — Proclamation Lead
═══════════════════════════════════════════════════════════════════
FOR: Level 1-2 (Unaware to Problem-Aware) audiences
APPROACH: Open with a bold, dramatic statement that challenges
          the reader's worldview.
COPY LENGTH: Long (2500-4000 words)
EXAMPLE: "Everything you've been told about retirement
         is a lie."
WHEN: Prospect needs a wake-up call about their situation.

═══════════════════════════════════════════════════════════════════
TYPE 3: TRANSITIONAL LEAD — Secret Lead
═══════════════════════════════════════════════════════════════════
FOR: Level 2-3 (Problem-Aware to Solution-Aware) audiences
APPROACH: Promise a hidden solution, insider knowledge,
          or suppressed information.
COPY LENGTH: Medium-Long (2000-3500 words)
EXAMPLE: "Wall Street insiders have been using this
         little-known strategy for decades..."
WHEN: Prospect knows the problem, curious about solutions.

═══════════════════════════════════════════════════════════════════
TYPE 4: TRANSITIONAL LEAD — Promise Lead
═══════════════════════════════════════════════════════════════════
FOR: Level 3 (Solution-Aware) audiences
APPROACH: Lead with the biggest, most compelling benefit.
          Bold promise + specific mechanism.
COPY LENGTH: Medium (1500-2500 words)
EXAMPLE: "Lose 20 pounds in 30 days without giving up
         your favorite foods."
WHEN: Prospect is comparing solutions, needs to see YOUR
      unique promise.

═══════════════════════════════════════════════════════════════════
TYPE 5: DIRECT LEAD — Offer Lead
═══════════════════════════════════════════════════════════════════
FOR: Level 4 (Product-Aware) audiences
APPROACH: Lead with the offer itself — price, deal, bonus,
          guarantee. No buildup needed.
COPY LENGTH: Short-Medium (800-1500 words)
EXAMPLE: "Get [Product] today for just $47 — includes
         3 bonuses worth $297."
WHEN: Prospect knows your product, needs a reason to buy NOW.

═══════════════════════════════════════════════════════════════════
TYPE 6: DIRECT LEAD — Straight Offer Lead
═══════════════════════════════════════════════════════════════════
FOR: Level 5 (Most Aware) audiences
APPROACH: Pure transaction. State the deal. No persuasion
          needed — just the terms.
COPY LENGTH: Short (300-800 words)
EXAMPLE: "[Product] — 50% off this weekend only."
WHEN: Prospect is ready to buy, just needs the trigger.
```

### Step 2: Map Awareness Level to Lead Type

```
MAPPING MATRIX:

┌───────────┬─────────────────────┬──────────────────────┐
│ AWARENESS │ PRIMARY LEAD TYPE   │ SECONDARY (optional) │
├───────────┼─────────────────────┼──────────────────────┤
│ Level 1   │ Story Lead          │ Proclamation Lead    │
│ Level 2   │ Proclamation Lead   │ Secret Lead          │
│ Level 3   │ Promise Lead        │ Secret Lead          │
│ Level 4   │ Offer Lead          │ Promise Lead         │
│ Level 5   │ Straight Offer Lead │ Offer Lead           │
└───────────┴─────────────────────┴──────────────────────┘

DECISION LOGIC:
IF awareness == 1 → Story Lead (ALWAYS — no shortcuts)
IF awareness == 2 → Proclamation (default) or Secret (if market jaded)
IF awareness == 3 → Promise (default) or Secret (if many competitors)
IF awareness == 4 → Offer (default) or Promise (if weak proof stack)
IF awareness == 5 → Straight Offer (ALWAYS — don't overcomplicate)
```

### Step 3: Determine Copy Length

```
COPY LENGTH BY LEAD TYPE:

┌────────────────────┬───────────────┬─────────────────────┐
│ LEAD TYPE          │ WORD COUNT    │ RATIONALE           │
├────────────────────┼───────────────┼─────────────────────┤
│ Story Lead         │ 3000-5000+    │ Must educate first  │
│ Proclamation Lead  │ 2500-4000     │ Must shock + prove  │
│ Secret Lead        │ 2000-3500     │ Must reveal + build │
│ Promise Lead       │ 1500-2500     │ Must prove claim    │
│ Offer Lead         │ 800-1500      │ Must stack value    │
│ Straight Offer     │ 300-800       │ Just the deal       │
└────────────────────┴───────────────┴─────────────────────┘

ADJUSTMENT FACTORS:
- High price (>$500): +30% length for more proof
- Low price (<$50): -20% length (less justification needed)
- New market: +20% length for education
- Mature market: -10% length (audience is savvier)
```

### Step 4: Validate with Rule of One

```
MASTERSON'S RULE OF ONE:
Every piece of copy must have:

□ ONE Big Idea — What is the single dominant concept?
□ ONE Core Emotion — What feeling drives the action?
□ ONE Desirable Benefit — What is the #1 result promised?
□ ONE Inevitable Response — What is the ONLY logical action?

VALIDATION:
IF lead type respects Rule of One → PROCEED
IF lead has multiple competing ideas → SIMPLIFY before writing
IF lead tries to appeal to multiple emotions → PICK THE STRONGEST

COMMON VIOLATION:
"This product helps you lose weight AND make money AND save time"
→ Pick ONE. The strongest. Build the lead around that.
```

### Step 5: Output Recommendation

```
LEAD TYPE RECOMMENDATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Product: ____________________
Awareness Level: ___
Lead Type Selected: ____________________
Copy Length Range: ____ - ____ words

RULE OF ONE:
- Big Idea: ____________________
- Core Emotion: ____________________
- Desirable Benefit: ____________________
- Inevitable Response: ____________________

JUSTIFICATION:
[Why this lead type is the right match for
 this awareness level + product + audience]

OPENING DIRECTION:
[Specific guidance on how to open the copy
 using this lead type]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Veto Conditions

```yaml
veto_conditions:
  - id: "LEAD_001"
    condition: "Selecting Direct Lead (Offer/Straight) for Unaware audience (Level 1)"
    result: "VETO - BLOCK. Unaware audiences need Story or Proclamation leads."
    rationale: "Going direct with an unaware audience = zero comprehension, zero conversion."

  - id: "LEAD_002"
    condition: "Selecting Curiosity/Secret Lead for Most Aware audience (Level 5)"
    result: "VETO - BLOCK. Most Aware audiences need Straight Offer lead."
    rationale: "Building curiosity for someone ready to buy = friction, lost sales."

  - id: "LEAD_003"
    condition: "Awareness level not diagnosed"
    result: "VETO - BLOCK. Run diagnose-awareness.md first."
    rationale: "Cannot select lead type without knowing awareness level."

  - id: "LEAD_004"
    condition: "Rule of One violated — multiple competing ideas in lead"
    result: "VETO - REVISE. Simplify to one idea before proceeding."
    rationale: "Multiple ideas = confused reader = no conversion."
```

## Outputs

### Output Format

```yaml
lead_type_recommendation:
  product: [Product name]
  awareness_level: [1-5]
  awareness_name: [Unaware | Problem-Aware | Solution-Aware | Product-Aware | Most Aware]
  selected_lead_type: [Story | Proclamation | Secret | Promise | Offer | Straight Offer]
  lead_category: [Indirect | Transitional | Direct]
  copy_length_range: [min-max words]

rule_of_one:
  big_idea: "[The single dominant concept]"
  core_emotion: "[The primary feeling driving action]"
  desirable_benefit: "[The #1 result promised]"
  inevitable_response: "[The only logical action]"

justification: |
  [Why this lead type matches this awareness level,
   product, and audience]

opening_direction: |
  [Specific guidance for how to open the copy
   using the selected lead type]

opening_templates:
  - "[Template 1 for this lead type]"
  - "[Template 2 for this lead type]"

next_step: |
  Proceed to write-copy.md or create-sales-page.md
  with this lead type as the opening framework.
```

## Acceptance Criteria

```
□ Awareness level was diagnosed BEFORE selecting lead type
□ Lead type maps correctly to awareness level (no mismatches)
□ Copy length is appropriate for lead type and price point
□ Rule of One is satisfied (one idea, one emotion, one benefit)
□ Justification explains WHY this lead type fits
□ Opening direction gives actionable guidance for writing
□ No veto conditions triggered
```

## Common Mistakes

```
MISTAKE 1: Defaulting to Promise Lead for everything
- Symptom: Every copy opens with a big promise
- Fix: Match lead type to awareness level first

MISTAKE 2: Using Story Lead for Product-Aware audience
- Symptom: Long story for someone who already knows you
- Fix: Go direct — they don't need the buildup

MISTAKE 3: Using Offer Lead for Unaware audience
- Symptom: Leading with price/deal to someone who doesn't know they need it
- Fix: Educate first with Story or Proclamation lead

MISTAKE 4: Ignoring copy length implications
- Symptom: 500-word copy with a Story Lead
- Fix: Story leads REQUIRE length to work — respect the format
```

## Integration

## Output Example

```yaml
lead_type_selection:
  product: "Mentoria Elite — Escala para Agencias"
  awareness_level: 3 # Solution-Aware
  date: "2026-03-15"

  recommended_lead:
    type: "Secret Lead"
    rationale: |
      Awareness Level 3 = prospect sabe que existem mentorias mas
      nao conhece a nossa. Secret Lead cria curiosidade sobre o
      mecanismo unico antes de revelar o produto.

    opening_example: |
      Existe um metodo pouco conhecido que donos de agencia de 7 digitos
      usam para sair do operacional em 90 dias — sem contratar gerente,
      sem trocar de nicho, sem fazer lancamento.

    copy_length: "Medium-Long (2000-3000 palavras)"
    rule_of_one:
      one_idea: "Sair do operacional e possivel com processo, nao com gente"
      one_emotion: "Esperanca de liberdade"
      one_desire: "Agencia que roda sem o dono"

  alternative_lead:
    type: "Story Lead"
    when_to_use: "Se o mercado estiver em Stage 4+ de sofisticacao"
```

- **Depends on**: diagnose-awareness.md (MANDATORY prerequisite)
- **References**: data/masterson-6-lead-types.yaml
- **Handoff to**: write-copy.md, create-sales-page.md
- **Agent**: @michael-masterson (Tier 0 - Strategy), @copy-chief
