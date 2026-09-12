# Validate Copy - Cialdini's 7 Influence Principles

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Cialdini 7 Principles Validation |
| **status** | `active` |
| **responsible_executor** | @copy-chief |
| **execution_type** | `Worker` |
| **pattern** | EXEC-W-003 |
| **rationale** | Os 7 princípios são checáveis de forma binária (ativo ou não). Scorecard objetivo com threshold mínimo de 3/7. |

### Worker Execution Flow

```yaml
worker_flow:
  mode: "7_principle_scorecard"
  automation_level: "high"
  per_principle:
    action: "Check if principle is actively used in the copy"
    output: "SIM/NAO + evidence"
    threshold: "Minimum 3 of 7 must be SIM for PASS"

  final_verdict:
    pass: ">= 3 principles active"
    fail: "< 3 principles active"
```

---

## Purpose

Validate copy against Robert Cialdini's 7 Principles of Influence (updated from the original 6 to include Unity). This is a persuasion coverage check — ensuring the copy activates enough psychological influence levers to drive action.

## When to Use

- **Before promoting copy to FINAL status** - Last influence check
- **After CUB Critique passes** - CUB checks quality, Cialdini checks persuasion
- **When conversion is low** - Diagnose which influence levers are missing
- **For any copy format** - Sales pages, emails, ads, VSLs, landing pages
- **As a strategic enhancement tool** - Identify opportunities to strengthen copy

## Cialdini on Influence

```
"People's ability to understand the factors that
affect their behavior is surprisingly poor.

The principles of influence work because they are
shortcuts the brain uses to make decisions.

When you activate these shortcuts ethically,
you make it EASIER for people to say yes
to something that genuinely serves them."

— Robert Cialdini, Influence: The Psychology of Persuasion
```

## Inputs

```yaml
required:
  - copy_text: "Complete copy to validate (any format)"

optional:
  - copy_type: "sales_page | email | ad | vsl | landing_page"
  - target_audience: "Who this is written for"
  - product_type: "digital | physical | service | subscription"
  - price_point: "Low (<$50) | Medium ($50-500) | High (>$500)"
```

## Workflow

### Step 1: Evaluate Each Principle

For each of the 7 principles, determine if it is actively present in the copy.

```
═══════════════════════════════════════════════════════════════════
PRINCIPLE 1: RECIPROCIDADE
(Does the copy offer value before asking?)
═══════════════════════════════════════════════════════════════════

DEFINITION: People feel obligated to return favors.
When you give first, people want to give back.

CHECK — Is this principle ACTIVE in the copy?

ACTIVE SIGNALS:
□ Copy offers free value (tip, insight, framework) before the pitch
□ Lead magnet or free resource mentioned
□ Reader learns something useful just by reading the copy
□ "Here's something you can use right now, even if you don't buy..."
□ Free trial, sample, or demo offered
□ Valuable content shared without strings attached

INACTIVE SIGNALS:
□ Copy goes straight to selling without offering anything
□ No value given before asking for the sale
□ Reader gains nothing unless they purchase
□ Pure pitch with zero educational/useful content

VERDICT: SIM (active) | NAO (inactive)
EVIDENCE: "[Quote or description of where it appears]"

IF INACTIVE — ACTIVATION SUGGESTION:
"Add a valuable insight, tip, or free resource early in the copy.
Give the reader something they can use immediately, even if they
never buy. This creates psychological debt."

═══════════════════════════════════════════════════════════════════
PRINCIPLE 2: COMPROMISSO E COERENCIA
(Does the copy escalate commitments gradually?)
═══════════════════════════════════════════════════════════════════

DEFINITION: People want to be consistent with their past
actions and commitments. Small yeses lead to big yeses.

CHECK — Is this principle ACTIVE in the copy?

ACTIVE SIGNALS:
□ Micro-commitments before the main ask (click, read, watch, answer)
□ "If you agree that [small statement], then..."
□ Qualifying questions that make the reader self-identify
□ Progressive disclosure (reveal more as they engage)
□ "You've already taken the first step by reading this..."
□ Small action before big action (download before buy)

INACTIVE SIGNALS:
□ Single giant ask with no buildup
□ No qualifying or self-identification
□ No progression from small to large commitment
□ Reader goes from zero to "buy now" in one step

VERDICT: SIM (active) | NAO (inactive)
EVIDENCE: "[Quote or description of where it appears]"

IF INACTIVE — ACTIVATION SUGGESTION:
"Add qualifying questions early: 'If you've ever felt [pain],
keep reading.' This gets a mental 'yes' before the big ask.
Add 2-3 micro-commitments before the CTA."

═══════════════════════════════════════════════════════════════════
PRINCIPLE 3: PROVA SOCIAL
(Does the copy show similar people taking action?)
═══════════════════════════════════════════════════════════════════

DEFINITION: People follow what others like them are doing.
We use others' behavior as a shortcut for correct behavior.

CHECK — Is this principle ACTIVE in the copy?

ACTIVE SIGNALS:
□ Testimonials from people similar to the target audience
□ Specific numbers ("47,832 people have already...")
□ Case studies with relatable protagonists
□ User-generated content or reviews referenced
□ "Join the [X] people who have already..."
□ Screenshots of results from real users
□ Media mentions or endorsements

INACTIVE SIGNALS:
□ Zero testimonials or social proof
□ No numbers showing adoption/usage
□ No case studies or success stories
□ Copy makes claims without showing others who achieved them
□ Only the seller's perspective (no customer voice)

VERDICT: SIM (active) | NAO (inactive)
EVIDENCE: "[Quote or description of where it appears]"

IF INACTIVE — ACTIVATION SUGGESTION:
"Add at least 3 testimonials from people similar to your ICP.
Include specific numbers: how many customers, what results they got,
how long it took. Use their words, not yours."

═══════════════════════════════════════════════════════════════════
PRINCIPLE 4: AFINIDADE
(Does the copy create rapport and likability?)
═══════════════════════════════════════════════════════════════════

DEFINITION: People say yes to people they like.
<!-- Dependência externa de contexto/identidade excluída: aplicar contrato CoreAI. -->
and shared identity.

CHECK — Is this principle ACTIVE in the copy?

ACTIVE SIGNALS:
□ Writer shares personal story showing vulnerability
□ "I was just like you..." — shared experience
□ Conversational tone (feels like talking to a friend)
□ Empathy shown for reader's situation
□ Humor or personality in the writing
□ Shared enemy or frustration ("We both know that...")
□ Compliments that feel genuine (not flattery)

INACTIVE SIGNALS:
□ Corporate/formal tone with no personality
□ No shared experience or empathy
□ Writer positioned as superior, not relatable
□ No warmth, humor, or human connection
□ Feels like a brochure, not a conversation

VERDICT: SIM (active) | NAO (inactive)
EVIDENCE: "[Quote or description of where it appears]"

IF INACTIVE — ACTIVATION SUGGESTION:
"Add a personal story that shows you understand the reader's
situation because you've been there. Use conversational tone.
Show empathy before showing authority."

═══════════════════════════════════════════════════════════════════
PRINCIPLE 5: AUTORIDADE
(Does the copy establish authority BEFORE the pitch?)
═══════════════════════════════════════════════════════════════════

DEFINITION: People defer to experts and authority figures.
Credentials, experience, and expertise create trust.

CHECK — Is this principle ACTIVE in the copy?

ACTIVE SIGNALS:
□ Credentials mentioned (degrees, certifications, awards)
□ Experience quantified ("15 years", "1,200+ projects")
□ Media features or press mentions
□ Endorsements from recognized figures
□ Published work, research, or case studies
□ "As featured in [publication]..."
□ Specific expertise demonstrated (not claimed)

INACTIVE SIGNALS:
□ No credentials or expertise mentioned
□ Claims of authority without evidence
□ "Trust me" without showing why
□ No external validation
□ Authority established AFTER the pitch (too late)

VERDICT: SIM (active) | NAO (inactive)
EVIDENCE: "[Quote or description of where it appears]"

IF INACTIVE — ACTIVATION SUGGESTION:
"Establish authority early — before making claims.
Lead with credentials, experience, or endorsements.
Show expertise through specific knowledge, not by saying
'I'm an expert.' Authority must come BEFORE the pitch."

═══════════════════════════════════════════════════════════════════
PRINCIPLE 6: ESCASSEZ
(Does the copy create REAL scarcity?)
═══════════════════════════════════════════════════════════════════

DEFINITION: People value what's scarce or diminishing.
Loss aversion is stronger than gain seeking.

CHECK — Is this principle ACTIVE in the copy?

ACTIVE SIGNALS:
□ Limited quantity ("Only 47 spots remaining")
□ Limited time ("Offer ends Friday at midnight")
□ Exclusive access ("Members-only" / "Invitation required")
□ Price increase upcoming ("Price goes up Monday")
□ Bonuses with deadline ("Bonuses disappear in 72 hours")
□ Real reason for scarcity explained (not just "limited!")
□ Loss framing ("Don't miss..." / "You'll lose access to...")

INACTIVE SIGNALS:
□ No urgency or deadline
□ No quantity limits
□ Offer available indefinitely (no reason to act NOW)
□ Fake scarcity that's obviously manufactured
□ "Limited time" without specifying when it ends

IMPORTANT: Scarcity MUST be real. Fake scarcity destroys trust
and violates ethical persuasion principles.

VERDICT: SIM (active) | NAO (inactive)
EVIDENCE: "[Quote or description of where it appears]"

IF INACTIVE — ACTIVATION SUGGESTION:
"Add a real deadline, quantity limit, or price increase date.
The scarcity must be genuine — explain WHY it's limited.
'Only 50 spots because we provide personal feedback to each
participant' is credible. 'Limited time!!!' is not."

═══════════════════════════════════════════════════════════════════
PRINCIPLE 7: AUTOMATICIDADE (Unity)
(Does the copy use automatic response triggers?)
═══════════════════════════════════════════════════════════════════

DEFINITION: People respond automatically to certain triggers
based on shared identity, tribal belonging, and in-group signals.
(Cialdini's 7th principle, added in "Pre-Suasion")

CHECK — Is this principle ACTIVE in the copy?

ACTIVE SIGNALS:
□ Shared identity language ("As fellow entrepreneurs...")
□ In-group/out-group framing ("People who get it vs. those who don't")
□ Tribal markers (language, values, beliefs specific to the group)
□ "People like us do things like this"
□ Shared values or worldview expressed
□ Us vs. them narrative (ethical, not divisive)
□ Reader feels "this is for MY people"

INACTIVE SIGNALS:
□ Generic language that could apply to anyone
□ No tribal or identity elements
□ No shared values expressed
□ Reader doesn't feel the copy "gets" them
□ No sense of belonging or community

VERDICT: SIM (active) | NAO (inactive)
EVIDENCE: "[Quote or description of where it appears]"

IF INACTIVE — ACTIVATION SUGGESTION:
"Use language that signals shared identity.
Reference values, beliefs, and behaviors that your target
audience considers core to who they are. Create an 'us' —
people who think/act this way — and make the reader feel
they belong to this group."
```

### Step 2: Generate Scorecard

```
CIALDINI 7 PRINCIPLES — SCORECARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────┬─────────────────────────┬─────────┬──────────────────────┐
│  #  │ Principle               │ Rating  │ Evidence             │
├─────┼─────────────────────────┼─────────┼──────────────────────┤
│  1  │ Reciprocidade           │ SIM/NAO │ [brief evidence]     │
│  2  │ Compromisso e Coerencia │ SIM/NAO │ [brief evidence]     │
│  3  │ Prova Social            │ SIM/NAO │ [brief evidence]     │
│  4  │ Afinidade               │ SIM/NAO │ [brief evidence]     │
│  5  │ Autoridade              │ SIM/NAO │ [brief evidence]     │
│  6  │ Escassez                │ SIM/NAO │ [brief evidence]     │
│  7  │ Automaticidade (Unity)  │ SIM/NAO │ [brief evidence]     │
└─────┴─────────────────────────┴─────────┴──────────────────────┘

ACTIVE PRINCIPLES: [X] / 7
MINIMUM REQUIRED: 3 / 7

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Step 3: Determine Verdict

```
VERDICT LOGIC:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

IF active_principles >= 5:
  → PASS (STRONG) — Copy has robust influence coverage.

IF active_principles >= 3 AND < 5:
  → PASS (ADEQUATE) — Copy meets minimum.
    Recommend activating 1-2 more for stronger persuasion.

IF active_principles < 3:
  → FAIL — Copy lacks sufficient influence levers.
    Must activate at least 3 principles before delivery.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SCORING GUIDE BY COPY TYPE:

┌─────────────────┬─────────────┬──────────────────────┐
│ Copy Type       │ Min Target  │ Ideal Target         │
├─────────────────┼─────────────┼──────────────────────┤
│ Sales Page      │ 4/7         │ 6-7/7                │
│ Email Sequence  │ 3/7         │ 5/7 (across emails)  │
│ Ad Copy         │ 3/7         │ 4/7 (space limited)  │
│ VSL Script      │ 5/7         │ 7/7                  │
│ Landing Page    │ 3/7         │ 5/7                  │
│ Webinar Script  │ 5/7         │ 7/7                  │
└─────────────────┴─────────────┴──────────────────────┘
```

### Step 4: Generate Recommendations (if < 7 active)

```
ACTIVATION RECOMMENDATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For each INACTIVE principle, provide specific instructions
on how to activate it in this copy.

PRIORITY ORDER for activation:
1. Prova Social (3) — easiest to add, highest impact
2. Autoridade (5) — builds trust fast
3. Escassez (6) — drives action
4. Reciprocidade (1) — creates goodwill
5. Afinidade (4) — builds connection
6. Compromisso (2) — subtle but effective
7. Automaticidade (7) — advanced, tribal

FOR EACH INACTIVE PRINCIPLE:
- What to add (specific text/element)
- Where to add it (which section of the copy)
- Why it matters (impact on conversion)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Veto Conditions

```yaml
veto_conditions:
  - id: "CIALDINI_001"
    condition: "Promoting copy to FINAL status with fewer than 3 active principles"
    result: "VETO - BLOCK. Copy must activate at least 3 of 7 principles."
    rationale: "Copy with <3 influence levers lacks sufficient persuasion power to convert."

  - id: "CIALDINI_002"
    condition: "Using fake scarcity (manufactured urgency without real limits)"
    result: "VETO - REVISE. Scarcity must be genuine and explainable."
    rationale: "Fake scarcity destroys trust — the opposite of what Cialdini teaches."

  - id: "CIALDINI_003"
    condition: "Sales page or VSL with fewer than 4 active principles"
    result: "VETO - BLOCK. Long-form sales copy needs at least 4 principles."
    rationale: "Sales pages and VSLs have enough space to activate more levers."
```

## Outputs

### Output Format

```yaml
cialdini_validation:
  total_principles: 7
  active_principles: [X]
  minimum_required: 3

scorecard:
  - principle: "Reciprocidade"
    number: 1
    active: "SIM | NAO"
    evidence: "[where it appears or why it's absent]"

  - principle: "Compromisso e Coerencia"
    number: 2
    active: "SIM | NAO"
    evidence: "[where it appears or why it's absent]"

  - principle: "Prova Social"
    number: 3
    active: "SIM | NAO"
    evidence: "[where it appears or why it's absent]"

  - principle: "Afinidade"
    number: 4
    active: "SIM | NAO"
    evidence: "[where it appears or why it's absent]"

  - principle: "Autoridade"
    number: 5
    active: "SIM | NAO"
    evidence: "[where it appears or why it's absent]"

  - principle: "Escassez"
    number: 6
    active: "SIM | NAO"
    evidence: "[where it appears or why it's absent]"

  - principle: "Automaticidade"
    number: 7
    active: "SIM | NAO"
    evidence: "[where it appears or why it's absent]"

verdict: "PASS (STRONG) | PASS (ADEQUATE) | FAIL"

recommendations:
  - principle: "[inactive principle name]"
    what_to_add: "[specific text/element]"
    where_to_add: "[which section]"
    why_it_matters: "[impact on conversion]"

next_step: |
  IF PASS → Proceed to delivery or final QA gate.
  IF FAIL → Return to creation agent with activation suggestions.
```

## Acceptance Criteria

```
□ All 7 principles were evaluated (none skipped)
□ Each principle has a clear SIM/NAO rating with evidence
□ Active principle count meets minimum threshold (3/7)
□ Inactive principles have specific activation suggestions
□ Scarcity (if present) is genuine and explainable
□ Verdict is clear: PASS (STRONG), PASS (ADEQUATE), or FAIL
□ Recommendations are actionable (what + where + why)
□ No veto conditions triggered
```

## Integration

- **Follows**: validate-copy-cub.md, edit-copy-halbert.md
- **References**: data/cialdini-7-principios.yaml
- **Handoff to (PASS)**: Delivery or qa-gate.md
- **Handoff to (FAIL)**: Back to creation agent with activation suggestions
- **Agent**: @copy-chief

## Executor

```yaml
executor: oraculo-torriani
```

## Output Example

```markdown
# Validação Cialdini — Sales Page "Programa Acelerador Digital"

## Scorecard: 5/7 — PASS ✅ (mínimo: 3/7)

| # | Princípio | Status | Evidência |
|---|-----------|--------|-----------|
| 1 | Reciprocidade | SIM | 3 PLCs gratuitos antes da oferta |
| 2 | Compromisso | SIM | Survey + micro-compromissos nos PLCs |
| 3 | Prova Social | SIM | "437 alunos", 6 testimonials com foto |
| 4 | Autoridade | SIM | "R$2.3M em resultados", menção podcast |
| 5 | Afinidade | SIM | História de origem vulnerável (demissão) |
| 6 | Escassez | NÃO | ⚠️ Cart close mencionado mas sem countdown visível |
| 7 | Unidade | NÃO | ⚠️ Falta senso de "nós" / pertencimento ao grupo |

## Recomendações
1. Adicionar countdown timer na sales page (Escassez)
2. Incluir seção "Junte-se a 437 mentores que já estão dentro" (Unidade)
```

---

## Pre-Conditions
- Copy completo e editado (pos-edicao Halbert ou equivalente)
- CUB Critique ja executado e aprovado (CUB checa qualidade, Cialdini checa persuasao)
- Copy em formato analisavel (texto integral com todas as secoes)
- Produto e publico-alvo definidos para contextualizar os principios
