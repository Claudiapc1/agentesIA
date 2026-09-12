# Task: Auditoria Científica de Copy - Hopkins Scientific Method

```yaml
task:
  name: audit-copy
  description: "Auditoria científica completa de copy usando metodologia Hopkins"
  agent: claude-hopkins
  command: "*audit-copy"
  estimated_time: "10-20 min"
  execution_type: "Hybrid (Worker pre-check + Agent Hopkins)"
  worker_scripts:
    - "scripts/audit-copy-scoring.sh"
  version: "3.0.0"
  merged_from:
    - "[DEPENDÊNCIA NÃO EMPACOTADA: audit-copy-hopkins] (Hopkins philosophy + scoring /280) (arquivo consolidado, removido em 2026-07-30)"
    - "tasks/otimizacao/audit-copy.md (Worker automation + scoring /100)"

input:
  required:
    - copy_text: "Texto completo do copy para análise"
    - copy_type: sales_page | email | ad | landing_page | vsl_script
    - product_name: What is being sold
    - target_audience: Who this is written for
  optional:
    - metricas: "Dados de performance atual (CTR, conversão, etc)"
    - tracking_codes: Existing UTMs or coupon codes
    - test_history: Previous versions tested
    - competitor_copy: What competitors are saying

output:
  - checklist_preenchido: "Análise de cada elemento do copy"
  - score_geral: "Pontuação Hopkins /280 + Estrutural /100"
  - problemas_identificados: "Lista priorizada de issues"
  - recomendacoes: "Melhorias específicas e acionáveis"
  - variantes_teste: "Sugestões de testes A/B"
```

---

## MANDATORY PREFLIGHT: Run Worker Script FIRST

```
EXECUTE FIRST — antes de QUALQUER análise manual:

  bash scripts/audit-copy-scoring.sh <copy-file> --json

IF o comando falhar → CORRIGIR o erro do script. NÃO proceder manualmente.
IF o comando funcionar → LER /tmp/preflight-audit-copy.yaml. Usar ESSES dados.

VETO: Se /tmp/preflight-audit-copy.yaml não existir → BLOCK.
      NÃO contar parágrafos/CTAs/estrutura manualmente.
      NÃO calcular pre-score manualmente. O script faz isso instantaneamente.

USE os dados do preflight como INPUT para scoring qualitativo Hopkins.
O Agent Hopkins foca em: persuasão, fluxo narrativo, benefícios vs features, testes A/B.
```

### Veto Conditions
- id: "GAP_ZERO_001"
  condition: "Preflight não executado"
  result: "VETO - BLOCK. Run audit-copy-scoring.sh FIRST."
  rationale: "60% dos checks são estruturais/mecânicos. Script detecta em <1s."

- id: "AUDIT_002"
  condition: "Auditoria sem criterios objetivos de scoring"
  result: "VETO - BLOCK. Toda nota precisa de criterio declarado."
  rationale: "Sem criterio objetivo a auditoria vira opiniao, nao diagnostico."

- id: "AUDIT_003"
  condition: "Auditoria superficial, sem analise secao por secao"
  result: "VETO - BLOCK. Cada secao da copy deve ser auditada."
  rationale: "Auditoria por amostragem deixa passar o trecho que mata a conversao."

---

## Hopkins' Core Audit Principles

```
"The only purpose of advertising is to make sales.
It is profitable or unprofitable according to its actual sales."
- Claude Hopkins, Scientific Advertising

AUDIT PHILOSOPHY:
1. Every claim must be provable
2. Every element must be testable
3. Every result must be measurable
4. Specificity beats generality ALWAYS
5. Service sells, pitching repels
```

---

## PART A: Hopkins Deep Audit (/280 points)

### Phase 1: Salesmanship Test (40 pts)

Hopkins said: "Advertising is salesmanship. Its principles are the principles of salesmanship."

```
SALESMANSHIP AUDIT:

Would a salesperson say this face-to-face?

□ CONVERSATIONAL TONE
  - Reads like one person talking to another?
  - No corporate speak or jargon?
  - Could be spoken aloud naturally?
  Score: ___/10

  FAIL EXAMPLES:
  - "Leveraging synergies to optimize outcomes" (corporate)
  - "We are excited to announce" (no one talks like this)
  - "Solutions for your needs" (vague and generic)

  PASS EXAMPLES:
  - "Here's how to save $847 on your next order"
  - "I want to show you something that took me 3 years to figure out"
  - "You know that feeling when..."

□ SINGLE READER FOCUS
  - Written to ONE specific person?
  - Uses "you" more than "we/our/us"?
  - Addresses THEIR situation specifically?
  Score: ___/10

  Hopkins: "Don't think of people in the mass.
  That gives you a blurred view."

□ SELF-INTEREST ALIGNMENT
  - 100% focused on reader's benefit?
  - No self-congratulation about company?
  - Answers "What's in it for me?"
  Score: ___/10

  Hopkins: "Remember the people you address are selfish,
  as we all are. They care nothing about your interests or profit."

□ SELLING NOT ENTERTAINING
  - Purpose is conversion, not applause?
  - No clever wordplay that obscures message?
  - Entertainment value serves the sale?
  Score: ___/10

  Hopkins: "Ads are not written to entertain.
  Entertainment seekers are rarely the people you want."

SALESMANSHIP SCORE: ___/40
```

### Phase 2: Reason Why Audit (40 pts)

Hopkins said: "If a claim is worth making, make it in the most impressive way - by explaining WHY."

```
REASON WHY AUDIT:

Does every claim have a "Because..."?

□ CLAIM INVENTORY
  List all claims made in copy:

  Claim 1: _______________________
  Reason Why: ____________________
  Proof: ________________________

  Claim 2: _______________________
  Reason Why: ____________________
  Proof: ________________________

  Claim 3: _______________________
  Reason Why: ____________________
  Proof: ________________________

□ REASON WHY COMPLETENESS
  - Every claim has explanation of WHY it's true?
  - Process/mechanism is revealed?
  - Reader can verify or understand the logic?
  Score: ___/10

  FAIL: "Our product is the purest"
  PASS: "We filter through 7 stages, including reverse osmosis at 0.0001 microns,
         removing 99.97% of contaminants - here's the lab report"

□ SCHLITZ PRINCIPLE APPLIED
  - Processes everyone does are EXPLAINED as if unique?
  - Common practices made interesting through detail?
  - "Behind the scenes" revealed?
  Score: ___/10

  Hopkins' Schlitz insight: Every brewery purified their beer.
  Hopkins explained HOW Schlitz did it (live steam, 245°).
  Result: 5th place to tied for 1st.

□ DIFFERENTIATION THROUGH EXPLANATION
  - Copy shows WHY this is different (not just claims it)?
  - Reader understands the mechanism?
  - Uniqueness is credible and specific?
  Score: ___/10

REASON WHY SCORE: ___/40
```

### Phase 3: Specificity Audit (40 pts)

Hopkins said: "Platitudes and generalities roll off the human understanding like water from a duck."

```
SPECIFICITY AUDIT:

Are claims precise or vague?

□ GENERALITY DETECTION
  Search for and flag these weak terms:

  [ ] "Best" - Replace with: _________
  [ ] "Leading" - Replace with: _________
  [ ] "Top" - Replace with: _________
  [ ] "Quality" - Replace with: _________
  [ ] "Fast" - Replace with: _________
  [ ] "Effective" - Replace with: _________
  [ ] "Many" - Replace with: _________
  [ ] "Several" - Replace with: _________
  [ ] "Affordable" - Replace with: _________
  [ ] "Premium" - Replace with: _________

  Generality Count: ___
  Target: 0

□ NUMBER SPECIFICITY
  - Uses exact numbers vs rounded? (37.4% not "about 40%")
  - Odd numbers used? (47 not 50, 2,847 not "about 3,000")
  - Source for numbers cited?
  Score: ___/10

□ TIME SPECIFICITY
  - Exact timeframes given? ("4 days" not "fast")
  - Results timeline specific? ("By Tuesday" not "soon")
  - Deadlines are precise? ("11:59pm EST Jan 15" not "limited time")
  Score: ___/10

□ RESULT SPECIFICITY
  - Outcomes are measurable? ("37% increase" not "better")
  - Examples include specifics? (name, place, amount)
  - Testimonials have concrete details?
  Score: ___/10

SPECIFICITY CONVERSION TABLE:
┌─────────────────────┬──────────────────────────────────────┐
│ VAGUE               │ SPECIFIC (Hopkins Style)             │
├─────────────────────┼──────────────────────────────────────┤
│ Many customers      │ 47,832 customers in 23 countries     │
│ Fast delivery       │ Arrives in 4.2 business days average │
│ High quality        │ 99.7% pass rate on 47-point QC       │
│ Save money          │ Save $847 per year (avg customer)    │
│ Popular choice      │ 3,247 sold in last 30 days           │
│ Experienced team    │ 127 combined years, 1,847 projects   │
│ Guaranteed results  │ 97.3% success rate or full refund    │
│ Limited time        │ Ends 11:59pm EST Friday, Jan 24      │
│ Affordable          │ $47/month (less than Netflix)        │
│ Best in class       │ Ranked #1 by [Source] 3 years in row │
└─────────────────────┴──────────────────────────────────────┘

SPECIFICITY SCORE: ___/40
```

### Phase 4: Service Audit (40 pts)

Hopkins said: "The best ads ask no one to buy. They are based entirely on service."

```
SERVICE AUDIT:

Does copy provide value BEFORE asking for money?

□ VALUE-FIRST TEST
  - Remove the product/CTA - is remaining content useful?
  - Would reader learn something even if they don't buy?
  - Is information genuinely helpful to them?
  Score: ___/10

□ EDUCATION RATIO
  - What % is education vs pitch?
  - Minimum 60% educational content for long-form?
  - Reader feels helped, not sold to?
  Score: ___/10

□ CURIOSITY CREATION
  - Opens loops that make reader want more?
  - Uses Zeigarnik effect (incomplete = memorable)?
  - Creates genuine interest in mechanism/process?
  Score: ___/10

  Hopkins: "Curiosity is one of the strongest human incentives."

□ EXPERT POSITIONING
  - Copy demonstrates expertise through teaching?
  - Reader sees you as authority through content quality?
  - Trust built through helpfulness, not claims?
  Score: ___/10

SERVICE SCORE: ___/40
```

### Phase 5: Headline Audit (40 pts)

Hopkins said: "Headlines can change results by 500%."

```
HEADLINE AUDIT:

Does headline select the RIGHT people?

□ AUDIENCE SELECTION
  - Headline calls out specific audience?
  - Wrong people self-deselect?
  - Right people immediately identify?
  Score: ___/10

  Hopkins: "The purpose of a headline is to pick out people you can interest.
  You wish to talk to someone in a crowd."

□ BENEFIT PROMISE
  - Clear benefit stated or implied?
  - Reader knows what they'll get?
  - Promise is credible and specific?
  Score: ___/10

□ CURIOSITY GAP
  - Creates desire to read more?
  - Doesn't give everything away?
  - "I need to know more" response?
  Score: ___/10

□ TESTABLE HYPOTHESIS
  - Headline represents a hypothesis about what works?
  - Multiple variations created for testing?
  - Clear metric to measure winner?
  Score: ___/10

  Hopkins ran "Do You Make These Mistakes in English?" for 40 YEARS
  because he tested and found nothing beat it.

HEADLINE PATTERNS TO TEST:
1. Direct Benefit: "How to [achieve X] in [time]"
2. Curiosity: "Do You Make These Mistakes in [area]?"
3. News: "Announcing: [new thing] that [benefit]"
4. Callout: "To [specific audience] who [situation]"
5. Specific: "[Number] Ways to [achieve result]"

HEADLINE SCORE: ___/40
```

### Phase 6: Testability Audit (40 pts)

Hopkins said: "Almost any question can be answered, cheaply, quickly and finally, by a test campaign."

```
TESTABILITY AUDIT:

Can you measure and improve this copy?

□ TRACKING IMPLEMENTATION
  - Unique tracking code/UTM for this copy?
  - Different codes for different channels?
  - Attribution possible to this specific piece?
  Score: ___/10

  TRACKING CODE CHECKLIST:
  □ UTM Source: ____________
  □ UTM Medium: ____________
  □ UTM Campaign: ____________
  □ Coupon Code: ____________
  □ Phone Number: ____________
  □ Landing Page: ____________

□ VARIABLE ISOLATION
  - If testing, only ONE variable changed?
  - Control version documented?
  - Winner criteria defined before test?
  Score: ___/10

□ METRIC CLARITY
  - Primary success metric defined?
  - Secondary metrics identified?
  - ROI calculable from data?
  Score: ___/10

□ TEST VARIATIONS READY
  - At least 3 headline variations?
  - Offer variations considered?
  - CTA variations available?
  Score: ___/10

TESTABILITY SCORE: ___/40
```

### Phase 7: Sample/Trial Strategy Audit (40 pts)

Hopkins said: "The product itself should be its own best salesman."

```
SAMPLE STRATEGY AUDIT:

Does offer let product prove itself?

□ RISK REVERSAL
  - Trial/sample/guarantee offered?
  - Risk on seller, not buyer?
  - Objection "what if it doesn't work" addressed?
  Score: ___/10

□ SAMPLE QUALITY
  - Sample delivers FULL experience?
  - Not crippled/limited version?
  - Enough to form real impression?
  Score: ___/10

□ SAMPLE QUALIFICATION
  - Sample goes to INTERESTED people only?
  - Some barrier to entry (not free for anyone)?
  - Creates respect, not desperation?
  Score: ___/10

  Hopkins: "Give samples to interested people only.
  Create an atmosphere of respect, a desire, an expectation."

□ FOLLOW-UP SYSTEM
  - What happens after sample?
  - Conversion path clear?
  - Timing defined?
  Score: ___/10

SAMPLE STRATEGY SCORE: ___/40
```

---

## PART B: Structural Pre-Score (/100 points)

> Dados vêm do Worker script (preflight). Agent Hopkins valida qualitativamente.

### Headline (20 pts)
```
[ ] (3pt) Promete benefício ESPECÍFICO?
[ ] (3pt) Seleciona o público CERTO?
[ ] (3pt) Cria CURIOSIDADE para continuar?
[ ] (2pt) Entendida em 3 segundos?
[ ] (2pt) Independente do body (faz sentido sozinha)?
[ ] (3pt) Tem ESPECIFICIDADE (números, dados)?
[ ] (2pt) Evita clichês gastos?
[ ] (2pt) Passaria no teste do vendedor?
Pontuação: ___/20
```

### Lead (15 pts)
```
[ ] (3pt) Mantém promessa da headline?
[ ] (3pt) Conecta emocionalmente?
[ ] (3pt) Primeiras 50 palavras prendem?
[ ] (3pt) Transição natural para próxima seção?
[ ] (3pt) Expande (não repete) a headline?
Pontuação: ___/15
```

### Body Copy (25 pts)
```
[ ] (4pt) Especificidade > Generalidades?
[ ] (4pt) PROVA para cada claim importante?
[ ] (3pt) Fluxo lógico entre seções?
[ ] (4pt) Responde principais OBJEÇÕES?
[ ] (2pt) Parágrafos curtos (max 3-4 linhas)?
[ ] (2pt) Linguagem simples (nível 5a série)?
[ ] (3pt) Benefícios > Features?
[ ] (3pt) Transições suaves entre seções?
Pontuação: ___/25
```

### Oferta (20 pts)
```
[ ] (4pt) Clara e simples de entender?
[ ] (4pt) Valor percebido ALTO?
[ ] (3pt) Urgência REAL (não artificial)?
[ ] (3pt) Garantia que remove RISCO?
[ ] (3pt) Preço justificado adequadamente?
[ ] (3pt) Bônus agregam valor real?
Pontuação: ___/20
```

### CTA (10 pts)
```
[ ] (2pt) UMA ação clara e específica?
[ ] (2pt) Fácil de executar?
[ ] (2pt) Repetido adequadamente (3x mínimo)?
[ ] (2pt) Visualmente destacado?
[ ] (2pt) Urgência reiterada próximo ao CTA?
Pontuação: ___/10
```

### Geral (10 pts)
```
[ ] (2pt) Passaria no "teste do vendedor"?
[ ] (2pt) Elementos são testáveis individualmente?
[ ] (2pt) Resultados podem ser medidos?
[ ] (2pt) Tom consistente do início ao fim?
[ ] (2pt) Zero erros gramaticais/ortográficos?
Pontuação: ___/10
```

---

## Final Scoring

```
AUDIT COMPLETO - DUAL SCORE

┌──────────────────────────────────────────────────────────────┐
│ PART A: HOPKINS DEEP AUDIT                                    │
├────────────────────────┬────────┬────────┐                    │
│ CATEGORY               │ SCORE  │ MAX    │                    │
├────────────────────────┼────────┼────────┤                    │
│ 1. Salesmanship        │ ___    │ /40    │                    │
│ 2. Reason Why          │ ___    │ /40    │                    │
│ 3. Specificity         │ ___    │ /40    │                    │
│ 4. Service             │ ___    │ /40    │                    │
│ 5. Headline            │ ___    │ /40    │                    │
│ 6. Testability         │ ___    │ /40    │                    │
│ 7. Sample Strategy     │ ___    │ /40    │                    │
├────────────────────────┼────────┼────────┤                    │
│ TOTAL A                │ ___    │ /280   │                    │
└────────────────────────┴────────┴────────┘                    │
                                                                │
┌──────────────────────────────────────────────────────────────┐│
│ PART B: STRUCTURAL PRE-SCORE                                  ││
├────────────────────────┬────────┬────────┐                    ││
│ Headline               │ ___    │ /20    │                    ││
│ Lead                   │ ___    │ /15    │                    ││
│ Body Copy              │ ___    │ /25    │                    ││
│ Oferta                 │ ___    │ /20    │                    ││
│ CTA                    │ ___    │ /10    │                    ││
│ Geral                  │ ___    │ /10    │                    ││
├────────────────────────┼────────┼────────┤                    ││
│ TOTAL B                │ ___    │ /100   │                    ││
└────────────────────────┴────────┴────────┘                    ││
                                                                ││
┌──────────────────────────────────────────────────────────────┐││
│ COMBINED SCORE: A% + B% / 2 = ____%                          │││
│                                                               │││
│ 90%+: PUBLISH - Scientific advertising excellence             │││
│ 80-89%: MINOR FIXES - Address noted issues                    │││
│ 70-79%: SIGNIFICANT REVISION - Core issues present            │││
│ Below 70%: REWRITE - Fundamental problems                     │││
└──────────────────────────────────────────────────────────────┘│││
```

---

## Output Template

```yaml
audit_summary:
  copy_type: [type audited]
  hopkins_score: [X/280]
  structural_score: [X/100]
  combined_percentage: [X%]
  grade: [PUBLISH | MINOR FIXES | REVISION | REWRITE]

strengths:
  - [What Hopkins would approve]
  - [Scientific elements present]

critical_issues:
  - issue: [Description]
    category: [Salesmanship | Reason Why | Specificity | etc.]
    current: [What copy says now]
    hopkins_fix: [How Hopkins would fix it]
    priority: [HIGH | MEDIUM | LOW]

tracking_plan:
  primary_metric: [What to measure]
  tracking_codes:
    - channel: [Name]
      code: [Tracking code]
  test_variations:
    - element: [Headline | Offer | CTA]
      versions: [List of variations to test]

next_steps:
  1: [First action]
  2: [Second action]
  3: [Third action]
```

## Hopkins' Final Words

```
"The compass of accurate knowledge directs
the shortest, safest, cheapest course."

"Guessing is not advertising. Testing is."

Before you publish, ask:
1. Can I measure this?
2. Can I test variations?
3. Can I prove my claims?
4. Would a salesperson say this face-to-face?

If any answer is NO, fix it first.
```

## Integration

- **Follows**: Eugene Schwartz diagnosis (awareness + sophistication levels)
- **Precedes**: Final publication or A/B test launch
- **Related Tasks**: setup-split-test.md, create-headlines.md, sugarman-check.md
- **Related Checklist**: hopkins-audit-checklist.md
- **Worker Script**: scripts/audit-copy-scoring.sh
- **Agent**: @claude-hopkins (Tier 3 - Otimizador)

## Executor

```yaml
executor: claude-hopkins
```

## Pre-Conditions
- Copy completo para auditoria (headline, body, CTA, oferta)
- Worker script `scripts/audit-copy-scoring.sh` disponivel e funcional
- Produto e publico-alvo definidos
- Preflight executado com sucesso (`/tmp/preflight-audit-copy.yaml` existente)

## Output Example

```yaml
audit_result:
  copy: "Email de lancamento — Programa Acelerador Digital"
  score_hopkins: 192/280
  score_estrutural: 72/100
  date: "2026-03-15"

  worker_prescan:
    word_count: 847
    reading_level: "5th grade" # OK
    cliches_detectados: 3
    triggers_sugarman: 16/30
    cta_count: 2

  problemas_identificados:
    - severity: CRITICO
      element: "Subject line"
      issue: "Generico — 'Novidade importante para voce'"
      fix: "'47 donos de agencia ja fizeram isso para sair do operacional'"

    - severity: ALTO
      element: "Abertura"
      issue: "Comeca falando do produto, nao do prospect"
      fix: "Abrir com pergunta sobre a dor: 'Voce terminou a semana exausto e mesmo assim ficou devendo entrega?'"

    - severity: MEDIO
      element: "Prova social"
      issue: "Depoimento generico sem resultado especifico"
      fix: "Trocar por case com numeros: 'De 45k para 127k em 4 meses'"

  variantes_teste:
    - element: "Subject line"
      controle: "Novidade importante para voce"
      variante: "O erro que impede sua agencia de passar de 50k/mes"
      hipotese: "Especificidade + curiosidade aumenta open rate em 20%+"

  veredicto: "REPROVAR — corrigir subject line e abertura antes de enviar"
```

