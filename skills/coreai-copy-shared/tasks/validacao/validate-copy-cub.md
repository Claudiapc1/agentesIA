# Validate Copy - CUB Critique (Masterson/Palmer)

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | CUB Critique Validation |
| **status** | `active` |
| **responsible_executor** | @michael-masterson, @copy-chief |
| **execution_type** | `Worker` |
| **pattern** | EXEC-W-002 |
| **rationale** | As 3 perguntas CUB são binárias e objetivas por seção. Automatizável com alta precisão — qualquer seção com C, U ou B = rewrite obrigatório. |

### Worker Execution Flow

```yaml
worker_flow:
  mode: "section_by_section_evaluation"
  automation_level: "high"
  per_section:
    action: "Apply 3 binary CUB questions"
    output: "C/U/B rating per section"
    threshold: "Any YES = section flagged for rewrite"

  final_verdict:
    pass: "All sections clear on all 3 questions"
    revise: "Any section flagged on any question"
```

---

## Purpose

Validate copy quality using the CUB Critique framework from Michael Masterson and John Forde (The Architecture of Persuasion). CUB stands for Confusing, Unbelievable, Boring — the three fatal flaws that kill copy. This is a section-by-section validation gate.

## When to Use

- **After editing** - Run after edit-copy-halbert or any editing pass
- **Before final QA gate** - Last content check before qa-gate.md
- **When conversion drops** - Diagnose which sections are failing
- **For any copy format** - Sales pages, emails, ads, VSLs, landing pages
- **As a quick check** - Faster than full Oraculo validation

## Masterson on CUB

```
"Every section of every piece of copy must pass
three simple tests. If the reader finds ANY section:

- CONFUSING: they stop reading to figure it out (and never return)
- UNBELIEVABLE: they dismiss everything else you say
- BORING: they scroll past and you've lost them forever

One failure in one section can kill the entire piece."

— Michael Masterson, The Architecture of Persuasion
```

## Inputs

```yaml
required:
  - copy_text: "Complete copy to validate (any format)"

optional:
  - copy_type: "sales_page | email | ad | vsl | landing_page"
  - target_audience: "Who this is written for"
  - awareness_level: "Prospect awareness level (1-5)"
  - sections_defined: "Pre-defined section breaks (if any)"
```

## Workflow

### Step 1: Split Copy into Sections

```
SECTION IDENTIFICATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Split the copy into logical sections. Common sections:

□ Headline / Hook
□ Opening / Lead
□ Problem Agitation
□ Villain / Enemy
□ Solution Introduction
□ Mechanism Explanation
□ Proof / Testimonials
□ Offer Presentation
□ Bonuses
□ Guarantee
□ CTA / Close
□ P.S.

IF copy doesn't have clear sections:
→ Split by theme change or paragraph groups (3-5 paragraphs each)

MINIMUM: 3 sections (short copy)
MAXIMUM: 15 sections (long sales page)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Step 2: Apply CUB Test to Each Section

For EACH section, ask 3 binary questions:

```
═══════════════════════════════════════════════════════════════════
QUESTION 1: E CONFUSO?
(Does the reader understand without effort?)
═══════════════════════════════════════════════════════════════════

TEST: Read the section as if you're the target prospect.
      Can you understand it on FIRST READ without re-reading?

CONFUSING SIGNALS:
□ Jargon or technical terms the audience doesn't know
□ Sentences longer than 25 words
□ Unclear pronouns ("it", "this", "they" — referring to what?)
□ Logical jumps (A → C without B)
□ Multiple ideas competing in one paragraph
□ Passive voice hiding the subject
□ Abstract concepts without concrete examples

VERDICT:
- NAO (clear) → Section PASSES on C
- SIM (confusing) → Section FLAGGED — rewrite for clarity

═══════════════════════════════════════════════════════════════════
QUESTION 2: E INACREDITAVEL?
(Does the reader believe without resistance?)
═══════════════════════════════════════════════════════════════════

TEST: Does any claim in this section trigger the reader's
      "that's too good to be true" response?

UNBELIEVABLE SIGNALS:
□ Claims without proof or evidence
□ Superlatives without backing ("the best", "the fastest")
□ Results that sound impossible
□ Guarantees that feel hollow
□ Testimonials that sound fake or too perfect
□ Numbers that seem made up (round numbers = suspicious)
□ Missing the "how" — results without mechanism

VERDICT:
- NAO (believable) → Section PASSES on U
- SIM (unbelievable) → Section FLAGGED — add proof or tone down

═══════════════════════════════════════════════════════════════════
QUESTION 3: E BORING?
(Does the reader WANT to continue reading?)
═══════════════════════════════════════════════════════════════════

TEST: At the end of this section, does the reader feel
      PULLED to read the next one? Or do they want to stop?

BORING SIGNALS:
□ No tension or stakes
□ Information dump without emotion
□ Predictable (reader knows what's coming)
□ No sensory details (all abstract)
□ Same rhythm/pace throughout (no variation)
□ Feature-heavy without benefits
□ No story, example, or analogy
□ No open loop or cliffhanger at section end

VERDICT:
- NAO (engaging) → Section PASSES on B
- SIM (boring) → Section FLAGGED — inject tension, story, or stakes
```

### Step 3: Score Each Section

```
SECTION SCORING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For each section, record:

Section [N]: "[Section Name]"
┌───────────────┬─────────┬──────────────────────┐
│ Question      │ Rating  │ Notes                │
├───────────────┼─────────┼──────────────────────┤
│ Confuso?      │ SIM/NAO │ [issue if SIM]       │
│ Inacreditavel?│ SIM/NAO │ [issue if SIM]       │
│ Boring?       │ SIM/NAO │ [issue if SIM]       │
└───────────────┴─────────┴──────────────────────┘

SECTION RESULT:
□ ALL NAO → PASS (section is clean)
□ ANY SIM → FLAGGED (section needs rewrite)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Step 4: Generate Overall Verdict

```
CUB CRITIQUE — OVERALL VERDICT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total Sections Evaluated: [X]
Sections Passed (all NAO): [Y]
Sections Flagged (any SIM): [Z]

BREAKDOWN:
- Flagged as CONFUSO: [N] sections
- Flagged as INACREDITAVEL: [N] sections
- Flagged as BORING: [N] sections

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VERDICT:

□ PASS — All sections clear on all 3 questions.
  Copy is ready for qa-gate.md.

□ REVISE — [N] sections flagged.
  Copy must be rewritten in flagged sections before proceeding.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Step 5: Generate Rewrite Instructions (if REVISE)

```
REWRITE INSTRUCTIONS PER FLAGGED SECTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Section [N]: "[Section Name]" — FLAGGED

FLAGS:
□ CONFUSO — [specific clarity issue]
  FIX: [instruction to simplify/clarify]

□ INACREDITAVEL — [specific believability issue]
  FIX: [instruction to add proof/evidence]

□ BORING — [specific engagement issue]
  FIX: [instruction to add tension/story/stakes]

PRIORITY: Fix in order C → U → B
(Clarity first, then credibility, then engagement)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Veto Conditions

```yaml
veto_conditions:
  - id: "CUB_001"
    condition: "Delivering copy with any section flagged as Confusing without rewrite"
    result: "VETO - BLOCK. Confused readers don't buy. Rewrite flagged sections."
    rationale: "Confusion = instant drop-off. No reader re-reads to understand."

  - id: "CUB_002"
    condition: "Delivering copy with any section flagged as Unbelievable without rewrite"
    result: "VETO - BLOCK. Unbelievable claims destroy all credibility."
    rationale: "One unbelievable claim makes the reader doubt EVERYTHING."

  - id: "CUB_003"
    condition: "Delivering copy with any section flagged as Boring without rewrite"
    result: "VETO - BLOCK. Boring copy = unread copy = zero conversions."
    rationale: "The reader has no obligation to keep reading. Bore them and they're gone."

  - id: "CUB_004"
    condition: "Skipping sections during evaluation"
    result: "VETO - RESTART. Every section must be evaluated."
    rationale: "One bad section in an otherwise great piece can kill conversion."
```

## Outputs

### Output Format

```yaml
cub_critique:
  total_sections: [X]
  sections_passed: [Y]
  sections_flagged: [Z]

section_results:
  - section: 1
    name: "[Section Name]"
    confuso: "SIM | NAO"
    inacreditavel: "SIM | NAO"
    boring: "SIM | NAO"
    verdict: "PASS | FLAGGED"
    notes: "[issues if flagged]"
    fix: "[rewrite instruction if flagged]"

  - section: 2
    name: "[Section Name]"
    # ... etc

summary:
  confuso_flags: [N]
  inacreditavel_flags: [N]
  boring_flags: [N]

overall_verdict: "PASS | REVISE"

rewrite_priority:
  - section: [N]
    issue: "[C/U/B]"
    severity: "HIGH | MEDIUM"
    fix: "[specific instruction]"

next_step: |
  IF PASS → Proceed to qa-gate.md for final quality gate.
  IF REVISE → Return to creation agent with rewrite instructions.
```

## Acceptance Criteria

```
□ Copy was split into logical sections (minimum 3)
□ All 3 CUB questions were applied to EVERY section
□ Each section has a clear SIM/NAO rating per question
□ Overall verdict is PASS or REVISE (no ambiguity)
□ Flagged sections have specific rewrite instructions
□ Rewrite priority order is defined (C → U → B)
□ No sections were skipped during evaluation
□ No veto conditions triggered
```

## Integration

- **Follows**: edit-copy-halbert.md, write-copy.md, build-narrative-evaldo.md
- **References**: data/masterson-core-emotional-complex.yaml (CUB section)
- **Handoff to (PASS)**: qa-gate.md
- **Handoff to (REVISE)**: Back to creation agent (write-copy.md, build-narrative-evaldo.md)
- **Agent**: @michael-masterson, @copy-chief

## Executor

```yaml
executor: oraculo-torriani
```

## Output Example

```markdown
# CUB Critique — Email Open Cart Day 3 (Mentoria Elite)

## Resultado: REVISE ⚠️ (2 seções flagged)

| Seção | Confusing? | Unnecessary? | Boring? | Veredicto |
|-------|-----------|--------------|---------|-----------|
| Assunto | NÃO | NÃO | NÃO | ✅ OK |
| Abertura | NÃO | NÃO | NÃO | ✅ OK |
| Corpo | NÃO | SIM | NÃO | ⚠️ REWRITE |
| Social Proof | NÃO | NÃO | SIM | ⚠️ REWRITE |
| CTA | NÃO | NÃO | NÃO | ✅ OK |

## Seções Flagged

### Corpo — UNNECESSARY
"Parágrafo 3 repete o benefício do parágrafo 1 com palavras diferentes.
Remover ou substituir por novo ângulo de argumento."

### Social Proof — BORING
"Dois testimonials genéricos ('mudou minha vida', 'recomendo muito').
Substituir por depoimentos com NÚMEROS: faturamento, timeline, resultado específico."

## Ação Requerida
Reescrever 2 seções e re-submeter para nova avaliação CUB.
```

---

## Pre-Conditions
- Copy editado (pos edit-copy-halbert ou outro pass de edicao)
- Copy divisivel em secoes logicas (minimo 3 secoes)
- Objetivo da copy claro para avaliar relevancia de cada secao
- Formato identificado (sales page, email, ad, VSL, landing page)
