# Edit Copy - Bond Halbert's 12-Point Formula

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Edit Copy (Halbert 12-Point Formula) |
| **status** | `active` |
| **responsible_executor** | @gary-halbert, @copy-chief |
| **execution_type** | `Worker` |
| **pattern** | EXEC-W-001 |
| **rationale** | Os 12 passos são mecânicos e sequenciais — cada um aplica uma regra objetiva ao texto. Automatizável com validação final. |

### Worker Execution Flow

```yaml
worker_flow:
  mode: "12_sequential_passes"
  automation_level: "high"
  each_pass:
    action: "Apply one editing rule to entire copy"
    output: "Modified copy + change count for this pass"
    validation: "automated_where_possible"

  final_check:
    action: "Read-through for flow after all 12 passes"
    human_review: "optional but recommended"
```

---

## Purpose

Edit and polish copy using Bond Halbert's 12-Point Editing Formula. This is a SEQUENTIAL editing process — each pass focuses on ONE specific improvement. The result is copy that reads faster, hits harder, and converts better.

## When to Use

- **After first draft is complete** - Never during writing (kills flow)
- **After narrative is built** - Use after build-narrative-evaldo or write-copy
- **Before validation** - Polish before running through validate-copy-cub
- **When copy feels bloated** - Tighten without losing impact
- **For any format** - Sales pages, emails, ads, VSLs, landing pages

## Halbert on Editing

```
"Writing is rewriting. The first draft is for getting
your ideas down. Editing is where you make it SELL.

Most copywriters skip editing because it's tedious.
That's why most copy fails.

These 12 steps will turn a rough draft into a
polished money-making machine."

— Bond Halbert, The Halbert Copywriting Method Part III
```

## Inputs

```yaml
required:
  - draft_copy: "Complete copy text to edit (any format)"

optional:
  - copy_type: "sales_page | email | ad | vsl | landing_page"
  - target_audience: "Who this is written for"
  - reading_level: "Target reading level (default: 6th grade)"
  - tone: "conversational | professional | urgent | educational"
```

## Pre-Conditions

```
MANDATORY: Draft copy must exist and be complete.

IF copy is a skeleton/outline:
  → BLOCK. Write the full draft first (write-copy.md).

IF copy has no research foundation:
  → VETO. Editing polished garbage is still garbage.
  → Run research and rewrite before editing.
```

## Workflow: 12 Sequential Editing Passes

```
EXECUTION ORDER — DO NOT SKIP OR REORDER:

Pass 1 → Pass 2 → Pass 3 → ... → Pass 12

Each pass reads the ENTIRE copy and applies ONE rule.
Track changes per pass for the change log.
```

### Pass 1: I→You Shift

```
═══════════════════════════════════════════════════════════════════
PASS 1: I → YOU SHIFT
═══════════════════════════════════════════════════════════════════

RULE: Replace "I/we/our" language with "you/your" language.
Copy is about the READER, not the writer.

FIND:                          REPLACE WITH:
"I discovered..."          → "You'll discover..."
"We created..."            → "You get..."
"Our system..."            → "Your new system..."
"I believe..."             → "Here's what matters to you..."
"In my experience..."      → "What you'll find is..."

EXCEPTIONS (keep "I" when):
- Telling a personal story for credibility
- Honesty trigger ("I have to be honest...")
- Building rapport ("I was just like you...")

COUNT: Track total I→You replacements made.

METRIC: Final copy should have 3:1 You:I ratio minimum.
```

### Pass 2: Read Aloud Check

```
═══════════════════════════════════════════════════════════════════
PASS 2: READ ALOUD CHECK
═══════════════════════════════════════════════════════════════════

RULE: Read the entire copy aloud (or simulate reading aloud).
Flag every sentence where you stumble, pause, or lose breath.

CHECK FOR:
□ Sentences too long to say in one breath (>25 words)
□ Awkward phrasing that doesn't sound natural
□ Tongue twisters or difficult word combinations
□ Passages that sound "written" not "spoken"
□ Rhythm breaks (too many same-length sentences in a row)

FIX:
- Break long sentences into 2-3 shorter ones
- Replace formal phrasing with conversational
- Vary sentence length: Long. Short. Medium. Tiny. Long again.

COUNT: Track total sentences rewritten for flow.
```

### Pass 3: That Hunt

```
═══════════════════════════════════════════════════════════════════
PASS 3: THAT HUNT
═══════════════════════════════════════════════════════════════════

RULE: Find every instance of the word "that" in the copy.
Remove 90% of them. Most are unnecessary filler.

EXAMPLES:
"I believe that you can..."     → "I believe you can..."
"The system that we built..."   → "The system we built..."
"It's clear that this works..." → "It's clear this works..."
"The fact that results..."      → "Results..."
"I know that you want..."       → "I know you want..."

KEEP "THAT" WHEN:
- Removing it changes the meaning
- The sentence becomes ambiguous without it
- It's part of a quotation

TARGET: Remove 90% of all "that" instances.
COUNT: Track total "that" removals.
```

### Pass 4: Pronoun Hunt

```
═══════════════════════════════════════════════════════════════════
PASS 4: PRONOUN HUNT
═══════════════════════════════════════════════════════════════════

RULE: Find overused pronouns (he, she, it, they, this, these).
Pre-map descriptors, then replace pronouns with specific nouns.

STEP 1 — PRE-MAP DESCRIPTORS:
Before editing, create a descriptor list:
- "he/she" → [name, role, title, description]
- "it" → [product name, system name, method name]
- "they" → [specific group name]
- "this" → [specific thing being referenced]

STEP 2 — REPLACE:
"It works by..."               → "The Revenue Engine works by..."
"They discovered..."           → "Harvard researchers discovered..."
"This is important because..." → "This 3-step framework is important..."
"He said..."                   → "Dr. Silva said..."

BENEFIT: Every noun replacement adds specificity and authority.
COUNT: Track total pronoun replacements.
```

### Pass 5: Big Word Hunt

```
═══════════════════════════════════════════════════════════════════
PASS 5: BIG WORD HUNT
═══════════════════════════════════════════════════════════════════

RULE: Replace any word above 6th grade reading level
with a simpler synonym. Copy should be understood by a 12-year-old.

CONVERSION TABLE:
┌────────────────────┬──────────────────┐
│ BIG WORD           │ SIMPLE WORD      │
├────────────────────┼──────────────────┤
│ utilize            │ use              │
│ implement          │ do / set up      │
│ methodology        │ method / way     │
│ subsequently       │ then / after     │
│ approximately      │ about / around   │
│ demonstrate        │ show             │
│ facilitate         │ help / make easy │
│ comprehensive      │ complete / full  │
│ optimization       │ improvement      │
│ leverage           │ use              │
│ synergize          │ combine / work   │
│ paradigm           │ model / way      │
│ revolutionary      │ new / different  │
│ unprecedented      │ first / never    │
│ transformational   │ life-changing    │
└────────────────────┴──────────────────┘

EXCEPTIONS: Keep technical terms if audience expects them.
TARGET: Max reading level = 6th grade (Flesch-Kincaid).
COUNT: Track total simplifications.
```

### Pass 6: Repeat Word Hunt

```
═══════════════════════════════════════════════════════════════════
PASS 6: REPEAT WORD HUNT
═══════════════════════════════════════════════════════════════════

RULE: Find words repeated within 2-3 sentences of each other.
Replace with synonyms or restructure the sentence.

CHECK FOR:
□ Same adjective used twice in a paragraph
□ Same verb used in consecutive sentences
□ Same noun used 3+ times in a section
□ Repeated sentence starters ("You can...", "You can...", "You can...")

EXCEPTIONS:
- Intentional repetition for emphasis ("Simple. Simple. Simple.")
- Brand/product name (should be repeated)
- Key benefit (can be repeated with variation)

FIX: Use synonym, restructure sentence, or combine sentences.
COUNT: Track total repeat-word fixes.
```

### Pass 7: Cliffhangers

```
═══════════════════════════════════════════════════════════════════
PASS 7: CLIFFHANGERS — Add Hooks Between Sections
═══════════════════════════════════════════════════════════════════

RULE: Add a cliffhanger or transition hook at the end of
every major section to pull the reader into the next one.

CLIFFHANGER TEMPLATES:
- "But that's not even the best part..."
- "And here's where it gets really interesting..."
- "What happened next changed everything..."
- "But there's a catch..."
- "Now, here's the part most people miss..."
- "And that brings us to the real question..."
- "But wait — it gets better..."
- "Here's why that matters more than you think..."

WHERE TO ADD:
□ End of each major section
□ Before key transitions (problem → solution)
□ Before the offer reveal
□ Before testimonials/proof section
□ Before CTA

DO NOT ADD:
- After every paragraph (overkill)
- In the CTA itself (CTA should be direct)
- More than 5-7 total in a piece

COUNT: Track total cliffhangers added.
```

### Pass 8: Power Word Insertion

```
═══════════════════════════════════════════════════════════════════
PASS 8: POWER WORD INSERTION
═══════════════════════════════════════════════════════════════════

RULE: Replace weak words with power words that trigger
emotion and action.

POWER WORD CATEGORIES:

URGENCY: now, immediately, today, deadline, limited, final
EXCLUSIVITY: secret, insider, private, members-only, invitation
RESULTS: proven, guaranteed, tested, results, breakthrough
EMOTION: shocking, devastating, life-changing, incredible
SIMPLICITY: easy, simple, effortless, automatic, instant
AUTHORITY: scientific, research, studies show, expert, official

WEAK → POWERFUL:
"good results"      → "breakthrough results"
"learn how"          → "discover the secret"
"it's important"     → "it's critical"
"try this"           → "use this proven method"
"we offer"           → "you get instant access"
"nice bonus"         → "exclusive bonus"

TARGET: 1 power word per 50 words minimum.
CAUTION: Don't overdo it — too many = feels fake.
COUNT: Track total power word insertions.
```

### Pass 9: Qualifier Hunt

```
═══════════════════════════════════════════════════════════════════
PASS 9: QUALIFIER HUNT — Kill Weasel Words
═══════════════════════════════════════════════════════════════════

RULE: Find and ELIMINATE all qualifier/weasel words.
These weaken every sentence they touch.

KILL LIST:
- "very" → DELETE (or replace with specific)
- "really" → DELETE
- "quite" → DELETE
- "somewhat" → DELETE
- "fairly" → DELETE
- "basically" → DELETE
- "actually" → DELETE
- "just" → DELETE (90% of the time)
- "probably" → DELETE or be specific
- "maybe" → DELETE or commit
- "sort of" → DELETE
- "kind of" → DELETE
- "a little" → DELETE
- "pretty much" → DELETE
- "in my opinion" → DELETE (own the statement)
- "I think" → DELETE (be definitive)
- "I believe" → DELETE (state as fact)
- "it seems" → DELETE (state as fact)
- "tends to" → DELETE (state as fact)

EXAMPLES:
"It's really very important"   → "It's critical"
"You'll probably see results"  → "You'll see results"
"I think this can help you"    → "This will help you"
"It's basically a system"      → "It's a system"
"Just try it for a few days"   → "Try it for 7 days"

TARGET: Remove 100% of qualifiers (zero tolerance).
COUNT: Track total qualifier removals.
```

### Pass 10: Eye Relief

```
═══════════════════════════════════════════════════════════════════
PASS 10: EYE RELIEF — Short Paragraphs + Subheads
═══════════════════════════════════════════════════════════════════

RULE: Break up dense text blocks. No paragraph longer than
3-4 lines on screen. Add subheads every 3-5 paragraphs.

FORMATTING RULES:
□ Max paragraph length: 3-4 lines (on mobile)
□ Break after every complete thought
□ One-sentence paragraphs for emphasis
□ Subhead every 300-500 words
□ Bullet points for lists of 3+ items
□ Bold for key phrases (1-2 per section)

SUBHEAD FORMULA:
- Benefit-driven: "How to [achieve result] in [timeframe]"
- Curiosity: "The [adjective] truth about [topic]"
- Question: "What if you could [desired outcome]?"
- Proof: "[Number] people already [achieved result]"

WHITESPACE RULES:
- Double line break between paragraphs
- Triple line break before new sections
- Indent for emphasis (sparingly)

COUNT: Track total paragraph breaks and subheads added.
```

### Pass 11: So What Test

```
═══════════════════════════════════════════════════════════════════
PASS 11: SO WHAT TEST
═══════════════════════════════════════════════════════════════════

RULE: Read every sentence and ask "So what?"
If the answer isn't obvious, either make it explicit or delete.

FOR EACH SENTENCE, ASK:
1. "So what?" — Why does the reader care?
2. "Who cares?" — Is this relevant to THEIR life?
3. "What's in it for me?" — Where's the benefit?

IF NO CLEAR ANSWER → DELETE the sentence.
IF ANSWER EXISTS BUT ISN'T STATED → Add the "because" clause.

EXAMPLES:
"We've been in business for 15 years."
→ So what? → "We've tested this on 47,000 customers over 15 years."

"Our team has extensive experience."
→ So what? → "Your project is handled by specialists who've
              delivered 1,200+ projects like yours."

"This is a comprehensive solution."
→ So what? → DELETE or "This handles [X], [Y], and [Z]
              so you don't need 3 separate tools."

COUNT: Track total sentences deleted or rewritten.
```

### Pass 12: Punch at End

```
═══════════════════════════════════════════════════════════════════
PASS 12: PUNCH AT END
═══════════════════════════════════════════════════════════════════

RULE: Every paragraph, section, and the copy itself must
END with the strongest word/phrase — not trail off weakly.

PRINCIPLE: "The last word in a sentence is the one
that echoes in the reader's mind."

WEAK ENDINGS:                   STRONG ENDINGS:
"...and much more."          → "...and results that last."
"...for better results."     → "...for results that change everything."
"...to help you succeed."    → "...to make failure impossible."
"...at an affordable price." → "...for less than your daily coffee."
"...in just a few days."     → "...in 72 hours flat."

STRUCTURE: End with the benefit, not the feature.
Put the number, the result, or the emotion LAST.

FINAL SENTENCE CHECK:
□ Does the copy END with a bang (not a whimper)?
□ Is the last sentence the most powerful?
□ Does it reinforce the One Big Idea?
□ Does it make inaction feel impossible?

COUNT: Track total ending rewrites.
```

## Veto Conditions

```yaml
veto_conditions:
  - id: "HALBERT_001"
    condition: "Applying to copy without solid research foundation"
    result: "VETO - BLOCK. Editing polished garbage is still garbage."
    rationale: "Editing improves delivery, not substance. Bad research = bad copy regardless of polish."

  - id: "HALBERT_002"
    condition: "Skipping passes or doing them out of order"
    result: "VETO - RESTART. All 12 passes must be sequential."
    rationale: "Later passes depend on earlier ones (e.g., Pass 5 after Pass 1)."

  - id: "HALBERT_003"
    condition: "Editing during writing (before first draft is complete)"
    result: "VETO - BLOCK. Finish the draft first."
    rationale: "Editing while writing kills creative flow and produces weaker copy."
```

## Outputs

### Output Format

```yaml
editing_summary:
  total_passes: 12
  passes_completed: 12

change_log:
  - pass: 1
    name: "I→You Shift"
    changes_made: [X]
    examples:
      - before: "[original text]"
        after: "[edited text]"

  - pass: 2
    name: "Read Aloud Check"
    changes_made: [X]

  # ... passes 3-12

totals:
  total_changes: [sum of all pass changes]
  words_before: [X]
  words_after: [X]
  word_reduction_pct: [X%]
  reading_level_before: "[grade level]"
  reading_level_after: "[grade level]"

edited_copy: |
  [Complete edited copy after all 12 passes]

quality_metrics:
  you_to_i_ratio: "[X:1]"
  avg_sentence_length: "[X words]"
  qualifier_count: "[X (should be 0)]"
  power_word_density: "[1 per X words]"
  max_paragraph_lines: "[X]"

next_step: |
  Proceed to validate-copy-cub.md for CUB Critique validation,
  or qa-gate.md for final quality gate.
```

## Acceptance Criteria

```
□ All 12 passes were completed in sequence (none skipped)
□ Change log tracks count per pass
□ You:I ratio is at least 3:1
□ Reading level is 6th grade or below
□ Zero qualifiers remain in the copy
□ No paragraph exceeds 4 lines
□ Subheads appear every 300-500 words
□ Every section ends with a strong punch
□ Copy reads naturally when read aloud
□ No veto conditions triggered
```

## Integration

- **Follows**: write-copy.md, build-narrative-evaldo.md
- **References**: data/halbert-editing-formula.yaml
- **Handoff to**: validate-copy-cub.md, qa-gate.md
- **Agent**: @gary-halbert (Editing), @copy-chief

## Executor

```yaml
executor: gary-halbert
```

## Pre-Conditions
- First draft completo (nunca editar durante a escrita)
- Narrativa ja construida (apos build-narrative-evaldo ou write-copy)
- Copy em formato editavel (nao imagem ou PDF)
- Objetivo da copy claro (vendas, leads, awareness)

## Output Example

```yaml
halbert_edit:
  copy: "Email de lancamento — Programa Acelerador Digital"
  passes_completed: 12/12
  date: "2026-03-15"

  changes_summary:
    total_edits: 43
    words_before: 847
    words_after: 612
    reading_level_before: "8th grade"
    reading_level_after: "5th grade"

  top_edits_by_pass:
    pass_1_eliminate_weak_words:
      count: 8
      example:
        antes: "Voce possivelmente ja tentou delegar e talvez nao tenha funcionado"
        depois: "Voce tentou delegar. Nao funcionou."

    pass_3_shorten_sentences:
      count: 12
      example:
        antes: "O que a maioria dos donos de agencia nao entende e que o problema real nao esta na falta de clientes mas sim na incapacidade de entregar sem depender do dono"
        depois: "O problema nao e falta de clientes. E que voce e o gargalo da entrega."

    pass_7_add_specificity:
      count: 6
      example:
        antes: "Nossos alunos conseguem resultados rapidos"
        depois: "47 alunos sairam do operacional em media de 11 dias"

    pass_12_final_readthrough:
      verdict: "APROVADO — flui naturalmente, sem travamentos"

  resultado: "Copy 28% mais curta, 3 niveis mais simples, 2x mais especifica"
```

