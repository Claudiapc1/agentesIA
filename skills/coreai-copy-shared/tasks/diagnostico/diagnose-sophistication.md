# Diagnose Market Sophistication - Schwartz Method

```yaml
name: diagnose-sophistication
description: Diagnostica o estágio de sofisticação do mercado segundo Eugene Schwartz para determinar o tipo de promessa necessária
version: 2.0.0
agent_owner: eugene-schwartz
elicit: true
tags:
  - diagnostico
  - sophistication
  - schwartz
  - mercado
inputs:
  - nicho_mercado
  - concorrentes_principais
  - promessas_atuais
  - historico_mercado
outputs:
  - estagio_sofisticacao
  - analise_competitiva
  - tipo_promessa_recomendada
  - exemplos_headlines
```

## Purpose

Diagnose the market's sophistication stage using Eugene Schwartz's 5 Stages framework from "Breakthrough Advertising" (1966). This determines HOW to position your message within the prospect's awareness level.

## When to Use

- **After awareness level diagnosis** - This is the second diagnostic step
- When entering established markets with competitors
- When copy isn't standing out despite good awareness match
- When competitors are using similar claims
- When market feels "tired" of typical messaging
- When relaunching/repositioning products

## Schwartz on Sophistication

```
"Markets evolve. The first person to make a claim owns it.
The second person to make that claim must enlarge it.
The third must bring proof.
The fourth must develop a new mechanism.
The fifth must identify with the prospect completely.

Know where your market stands on this spectrum
before you write a word."

— Eugene Schwartz, Breakthrough Advertising (1966)
```

## The 5 Stages of Sophistication

```
SOPHISTICATION EVOLUTION:

STAGE 5: COMPLETELY SKEPTICAL ──────────────────────┐
"They've heard it all, believe none of it"          │
- Cynical about claims                              │
- Need identity/emotional connection                │
                                                    │
STAGE 4: TIRED OF MECHANISMS ───────────────────────│
"Unique mechanisms no longer unique"                │
- Market flooded with "proprietary systems"         │
- Need to identify with prospect deeply             │
                                                    │
STAGE 3: MECHANISM REQUIRED ────────────────────────│
"Claims need explanation of HOW"                    │
- Generic claims no longer work                     │
- Need unique mechanism/process                     │
                                                    │
STAGE 2: CLAIMS ENLARGEMENT ────────────────────────│
"First claim has been made, must top it"            │
- "Lose weight" → "Lose weight FAST"                │
- Competition on claim size                         │
                                                    │
STAGE 1: VIRGIN MARKET ─────────────────────────────┘
"No one has made this promise before"
- Simple, direct claim works
- First mover advantage
```

---

## STEP 1: Identificação do Mercado

```elicit
type: multi-question
questions:
  - id: nicho
    question: "Qual é o nicho/mercado específico?"
    type: text
    placeholder: "Ex: Emagrecimento feminino 40+, Day trade, SaaS para dentistas"
    required: true

  - id: sub_nicho
    question: "Há algum sub-nicho específico?"
    type: text
    placeholder: "Ex: Emagrecimento pós-menopausa, Scalping em mini-índice"

  - id: tempo_mercado
    question: "Há quanto tempo este mercado existe no Brasil?"
    type: select
    options:
      - Menos de 2 anos (novo)
      - 2-5 anos (em crescimento)
      - 5-10 anos (estabelecido)
      - 10-20 anos (maduro)
      - Mais de 20 anos (muito maduro)
    required: true

  - id: seu_tempo
    question: "Há quanto tempo VOCÊ atua neste mercado?"
    type: select
    options:
      - Estou entrando agora
      - Menos de 1 ano
      - 1-3 anos
      - 3-5 anos
      - Mais de 5 anos
```

## STEP 2: Análise Competitiva

```elicit
type: multi-question
questions:
  - id: num_concorrentes
    question: "Quantos concorrentes diretos você identifica?"
    type: select
    options:
      - Nenhum ou quase nenhum
      - 1-5 concorrentes
      - 6-15 concorrentes
      - 16-30 concorrentes
      - Mais de 30 (mercado saturado)
    required: true

  - id: concorrentes_nomes
    question: "Liste os 3-5 principais concorrentes"
    type: textarea
    placeholder: "Nome - URL (se tiver)"
    required: true

  - id: investimento_ads
    question: "Você vê MUITOS anúncios de concorrentes no seu feed?"
    type: select
    options:
      - Raramente vejo anúncios do nicho
      - Vejo alguns ocasionalmente
      - Vejo frequentemente
      - Vejo muitos, quase diariamente
      - Estou saturado de tanto anúncio
    required: true
```

## STEP 3: Análise das Promessas Atuais

```elicit
type: multi-question
questions:
  - id: promessas_vistas
    question: "Quais são as PROMESSAS mais comuns que você vê no mercado?"
    type: textarea
    placeholder: "Ex: 'Emagreça 10kg', 'Ganhe R$ 5mil/mês', 'Dobre suas vendas'"
    required: true

  - id: mecanismos_vistos
    question: "Os concorrentes usam MECANISMOS/MÉTODOS nomeados?"
    type: select
    options:
      - Não, promessas são diretas sem mecanismo
      - Poucos usam mecanismos
      - A maioria usa algum mecanismo
      - Todos usam mecanismos bem definidos
    required: true

  - id: exemplos_mecanismos
    question: "Liste mecanismos/métodos que você já viu no mercado"
    type: textarea
    placeholder: "Ex: Método XYZ, Protocolo ABC, Sistema 123"

  - id: provas_usadas
    question: "Que tipo de PROVA os concorrentes mais usam?"
    type: multi-select
    options:
      - Depoimentos em texto
      - Depoimentos em vídeo
      - Estudos científicos
      - Demonstrações ao vivo
      - Números/estatísticas
      - Certificações/autoridade
      - Print de resultados
```

## STEP 4: Reação do Mercado

```elicit
type: multi-question
questions:
  - id: ceticismo
    question: "Qual o nível de CETICISMO do seu público?"
    type: select
    options:
      - Baixo - acreditam facilmente
      - Moderado - questionam um pouco
      - Alto - duvidam da maioria das promessas
      - Muito alto - não acreditam em quase nada
      - Extremo - já foram enganados antes
    required: true

  - id: objecoes_comuns
    question: "Quais objeções seu público mais levanta?"
    type: textarea
    placeholder: "Ex: 'Já tentei tudo', 'Isso não funciona pra mim', 'É golpe'"
    required: true

  - id: fadiga
    question: "Seu público demonstra FADIGA com promessas do nicho?"
    type: select
    options:
      - Não, ainda respondem bem
      - Um pouco, mas ainda engajam
      - Sim, estão cansados
      - Muito, ignoram a maioria
      - Extremamente, têm repulsa
    required: true
```

## STEP 5: Tendências e Inovações

```elicit
type: multi-question
questions:
  - id: novidades
    question: "Surgiu alguma NOVIDADE recente no mercado?"
    type: textarea
    placeholder: "Nova tecnologia, descoberta científica, tendência..."

  - id: angulos_novos
    question: "Você vê novos ÂNGULOS sendo testados?"
    type: select
    options:
      - Não, todos falam a mesma coisa
      - Poucos tentam coisas diferentes
      - Alguns estão inovando
      - Muita experimentação acontecendo
    required: true

  - id: seu_diferencial
    question: "O que seu produto/método tem de GENUINAMENTE diferente?"
    type: textarea
    required: true
```

---

## STEP 6: Diagnose Each Stage (Deep Framework)

```
═══════════════════════════════════════════════════════════════════
STAGE 1: VIRGIN MARKET
═══════════════════════════════════════════════════════════════════

DEFINITION:
Your product is the first to make this type of promise.
No one has claimed this benefit before in this market.
You can be simple and direct.

DIAGNOSTIC QUESTIONS:
□ Is this a new category/solution?
□ Has NO ONE made this specific promise before?
□ Can you state the benefit simply and be believed?
□ Is there little/no direct competition?

EXAMPLES:
- First electric car company (just say "electric, no gas")
- First AI writing tool (just say "AI writes for you")
<!-- Dependência externa de contexto/identidade excluída: aplicar contrato CoreAI. -->

IF YES → STAGE 1 CONFIRMED

COPY STRATEGY:
Simply state the claim. Be direct. Don't overcomplicate.
"Lose 10 pounds" - when NO ONE else offers weight loss.

═══════════════════════════════════════════════════════════════════
STAGE 2: CLAIMS ENLARGEMENT
═══════════════════════════════════════════════════════════════════

DEFINITION:
Someone has made your claim before. Now you must ENLARGE it.
Make it faster, bigger, easier, more certain.

DIAGNOSTIC QUESTIONS:
□ Are there 1-3 direct competitors making similar claims?
□ Are prospects comparing based on "who promises more"?
□ Is the market still growing/discovering solutions?
□ Do bigger/faster/easier claims still work?

EXAMPLES:
- "Lose 10 pounds" has been claimed...
  → Now claim: "Lose 10 pounds in 30 days"
  → Then: "Lose 10 pounds in 2 weeks"
  → Then: "Lose 10 pounds in 10 days - guaranteed"

IF YES → STAGE 2 CONFIRMED

COPY STRATEGY:
Enlarge the claim. Add speed, ease, certainty.
Outpromise (credibly) the competition.

═══════════════════════════════════════════════════════════════════
STAGE 3: MECHANISM REQUIRED
═══════════════════════════════════════════════════════════════════

DEFINITION:
Claims have been enlarged so many times, nobody believes
"just claims" anymore. You need to explain HOW it works.
You need a unique MECHANISM.

DIAGNOSTIC QUESTIONS:
□ Are there many competitors making enlarged claims?
□ Has the market become skeptical of "just promises"?
□ Do prospects ask "but HOW does it work?"
□ Do winners in this market have "proprietary methods"?

EXAMPLES:
- "Lose 10 pounds fast" no longer works...
  → Need mechanism: "The Keto Metabolic Switch"
  → Or: "The 16:8 Intermittent Fasting Protocol"
  → Or: "The Hormone Reset Method"

IF YES → STAGE 3 CONFIRMED

COPY STRATEGY:
Introduce a UNIQUE MECHANISM. Name it. Explain the science.
Make the HOW more important than the WHAT.

═══════════════════════════════════════════════════════════════════
STAGE 4: TIRED OF MECHANISMS
═══════════════════════════════════════════════════════════════════

DEFINITION:
Everyone has a "unique mechanism" now. The market is flooded
with proprietary methods. New mechanisms don't stand out.
You must now IDENTIFY with the prospect personally.

DIAGNOSTIC QUESTIONS:
□ Does everyone have their own "system" or "method"?
□ Are mechanisms starting to sound the same?
□ Is the market becoming cynical about "new discoveries"?
□ Do prospects care more about WHO than HOW?

EXAMPLES:
- Every diet has a "system" now...
  → Need identification: "The busy mom's solution"
  → Or: "For men over 40 who hate gyms"
  → Or: "By someone who was exactly where you are"

IF YES → STAGE 4 CONFIRMED

COPY STRATEGY:
Identify deeply with the prospect. Make them feel understood.
Your mechanism matters less than showing you KNOW them.

═══════════════════════════════════════════════════════════════════
STAGE 5: COMPLETELY SKEPTICAL
═══════════════════════════════════════════════════════════════════

DEFINITION:
Market has seen EVERYTHING. Claims, enlarged claims, mechanisms,
identification - all have been tried. They're cynical about
everything. You must connect emotionally/identity-based.

DIAGNOSTIC QUESTIONS:
□ Has this market been saturated for years/decades?
□ Do prospects roll their eyes at all marketing?
□ Has every angle/approach been tried?
□ Is the only path through authentic relationship?

EXAMPLES:
- Weight loss market is FULLY Stage 5...
  → Need: Emotional/identity-based connection
  → "This isn't about weight. It's about the life you deserve."
  → Celebrity/influencer endorsements that feel authentic
  → Community-based approaches

IF YES → STAGE 5 CONFIRMED

COPY STRATEGY:
Lead with emotion, identity, and relationship.
Claims become secondary to WHO you are and HOW you connect.
```

---

## STEP 7: Algoritmo de Classificação Quantitativo

```
SCORE = 0

# Tempo de mercado
SE tempo_mercado ∈ ["Menos de 2 anos"] → SCORE += 1
SE tempo_mercado ∈ ["2-5 anos"] → SCORE += 2
SE tempo_mercado ∈ ["5-10 anos"] → SCORE += 3
SE tempo_mercado ∈ ["10-20 anos"] → SCORE += 4
SE tempo_mercado ∈ ["Mais de 20 anos"] → SCORE += 5

# Concorrência
SE num_concorrentes ∈ ["Nenhum"] → SCORE += 0
SE num_concorrentes ∈ ["1-5"] → SCORE += 1
SE num_concorrentes ∈ ["6-15"] → SCORE += 2
SE num_concorrentes ∈ ["16-30"] → SCORE += 3
SE num_concorrentes ∈ ["Mais de 30"] → SCORE += 4

# Mecanismos no mercado
SE mecanismos_vistos = "Não" → SCORE += 0
SE mecanismos_vistos = "Poucos" → SCORE += 1
SE mecanismos_vistos = "A maioria" → SCORE += 2
SE mecanismos_vistos = "Todos" → SCORE += 3

# Ceticismo
SE ceticismo ∈ ["Baixo", "Moderado"] → SCORE += 0
SE ceticismo ∈ ["Alto"] → SCORE += 2
SE ceticismo ∈ ["Muito alto", "Extremo"] → SCORE += 3

# Classificação Final
SE SCORE <= 3 → ESTÁGIO 1
SE SCORE <= 6 → ESTÁGIO 2
SE SCORE <= 9 → ESTÁGIO 3
SE SCORE <= 12 → ESTÁGIO 4
SE SCORE > 12 → ESTÁGIO 5
```

### Matriz de Sofisticação (Quick Reference)

| Indicador | Estágio 1-2 | Estágio 3 | Estágio 4-5 |
|-----------|------------|-----------|-------------|
| Concorrentes | Poucos | Moderado | Muitos |
| Mecanismos | Raros | Comuns | Saturados |
| Ceticismo | Baixo | Médio | Alto |
| Fadiga | Nenhuma | Alguma | Muita |
| Promessas | Diretas | Com how | Experiência |

---

## STEP 8: Copy Implications

```
COPY STRATEGY BY STAGE:

┌─────────┬────────────────────┬────────────────────────────────────┐
│ STAGE   │ HEADLINE FOCUS     │ BODY COPY FOCUS                    │
├─────────┼────────────────────┼────────────────────────────────────┤
│ 1       │ Direct claim       │ Simple promise + basic proof       │
│         │ "Get [benefit]"    │ Don't overcomplicate               │
├─────────┼────────────────────┼────────────────────────────────────┤
│ 2       │ Enlarged claim     │ Bigger/faster/easier promise       │
│         │ "Get [benefit]     │ Outpromise credibly                │
│         │ FAST/EASY/NOW"     │                                    │
├─────────┼────────────────────┼────────────────────────────────────┤
│ 3       │ Mechanism name     │ Explain the unique HOW             │
│         │ "The [mechanism]   │ Science, process, method           │
│         │ that [benefit]"    │ Make mechanism the hero            │
├─────────┼────────────────────┼────────────────────────────────────┤
│ 4       │ Identification     │ Show you understand THEM           │
│         │ "For [specific     │ Their specific situation           │
│         │ audience] who..."  │ Their unique challenges            │
├─────────┼────────────────────┼────────────────────────────────────┤
│ 5       │ Identity/Emotion   │ Lead with feeling/belonging        │
│         │ "This is about     │ Community, transformation,         │
│         │ more than [X]..."  │ relationship, authenticity         │
└─────────┴────────────────────┴────────────────────────────────────┘
```

### Headline Templates by Stage

```
STAGE 1 (VIRGIN) HEADLINES:
- Direct: "[Get benefit] with [product]"
- Simple: "Now you can [achieve result]"
- Announcement: "Introducing: [benefit] for [audience]"

STAGE 2 (ENLARGEMENT) HEADLINES:
- Speed: "[Benefit] in [faster time]"
- Ease: "[Benefit] without [hard thing]"
- Certainty: "[Guaranteed benefit] or [risk reversal]"
- Amount: "[More benefit] than [competitor/alternative]"

STAGE 3 (MECHANISM) HEADLINES:
- Named mechanism: "The [Mechanism Name] that [benefit]"
- Discovery: "New [scientific term] [achieves benefit]"
- Process: "The [number]-step [method] that [benefit]"
- Science: "Harvard/MIT/Doctor discovers [mechanism]"

STAGE 4 (IDENTIFICATION) HEADLINES:
- Audience specific: "For [specific person] who [specific situation]"
- Empathy: "If you've tried everything and nothing works..."
- Understanding: "Finally, someone who gets [your situation]"
- Story: "I was exactly where you are when..."

STAGE 5 (EMOTION/IDENTITY) HEADLINES:
- Transformation: "This isn't about [surface thing]..."
- Belonging: "Join [number] people who [identity]"
- Values: "For those who believe [value/identity]"
- Movement: "The [movement name] changing [industry]"
```

### Combined Awareness × Sophistication Matrix

```
AWARENESS × SOPHISTICATION MATRIX:

                    SOPHISTICATION STAGE
                    1       2       3       4       5
AWARENESS   1   │Story  │Story  │Story  │Story  │Story
LEVEL           │Direct │Enlarged│Mech   │ID     │Emotion
                │Claim  │Claim  │       │       │
            ────┼───────┼───────┼───────┼───────┼───────
            2   │Problem│Problem│Problem│Problem│Problem
                │Direct │Enlarged│+ Mech │+ ID   │+ Emotion
                │Claim  │Claim  │       │       │
            ────┼───────┼───────┼───────┼───────┼───────
            3   │Direct │Compare│Mech   │ID +   │Identity
                │Claim  │Claims │Hero   │Mech   │First
            ────┼───────┼───────┼───────┼───────┼───────
            4   │Offer  │Better │Mech   │ID +   │Emotion
                │Direct │Offer  │Proof  │Proof  │Proof
            ────┼───────┼───────┼───────┼───────┼───────
            5   │Deal   │Better │Mech   │ID     │Belong
                │       │Deal   │Deal   │Deal   │Join

USE: Find intersection of your Awareness Level (row) and
Sophistication Stage (column) for optimal approach.
```

## STEP 9: Gerar Relatório de Diagnóstico

### Output Format

```yaml
diagnosis:
  product: [Product name]
  market: [Target market]
  awareness_level: [1-5]
  sophistication_stage: [1-5]
  stage_name: [Virgin | Enlargement | Mechanism | Identification | Skeptical]
  quantitative_score: [X/15]

evidence:
  - [Evidence point 1]
  - [Evidence point 2]
  - [Evidence point 3]

competitive_landscape:
  competitors_analyzed: [Number]
  common_claims: [List]
  market_age: [New | Emerging | Established | Saturated]

copy_strategy:
  headline_approach: [Based on stage]
  body_focus: [Based on stage]
  proof_type: [What proof works at this stage]
  differentiation: [How to stand out]

headline_templates:
  - "[Template 1]"
  - "[Template 2]"
  - "[Template 3]"

combined_recommendation: |
  Awareness Level [X] + Sophistication Stage [Y]:
  [Specific approach recommendation]

mechanism_required: [YES/NO]
mechanism_suggestion: [If YES, suggested mechanism direction]
```

---

## Guia de Estratégia por Estágio

### ESTÁGIO 1 - Faça a Promessa Direta
```
Headline: "Aprenda Inglês"
- Não precisa de mecanismo
- Não precisa de prova elaborada
- Foco em CLAREZA
```

### ESTÁGIO 2 - Expanda a Promessa
```
Headline: "Aprenda Inglês em 8 Semanas Sem Sair de Casa"
- Adicione velocidade, facilidade, quantidade
- Comece a usar números
- Mostre algumas provas
```

### ESTÁGIO 3 - Introduza o Mecanismo
```
Headline: "O Método Imersivo que Faz Você Pensar em
Inglês em 8 Semanas (Mesmo que Nunca Tenha Conseguido)"
- NOMEIE seu método
- Explique o "como" funciona
- Diferenciação é chave
```

### ESTÁGIO 4 - Expanda o Mecanismo
```
Headline: "O Sistema de 3 Fases que Ativa o 'Modo
Bilíngue' do Seu Cérebro em 60 Dias"
- Mais detalhes do mecanismo
- Sub-componentes
- Maior especificidade
```

### ESTÁGIO 5 - Venda Experiência/Identidade
```
Headline: "Junte-se às 23.847 Pessoas que Descobriram
Como Finalmente Se Tornaram Fluentes"
- Foco em pertencimento
- Histórias, não promessas
- Identidade do usuário
```

---

## Exemplo de Execução Completa

### Input
```
Nicho: Emagrecimento feminino
Tempo: Mais de 20 anos
Concorrentes: Mais de 30
Mecanismos vistos: Todos usam
Ceticismo: Muito alto
Promessas saturadas: "Emagreça X kg", "Sem dieta", "Sem exercício"
```

### Output
```
ESTÁGIO 5 - Experiência/Identificação
Score: 15/15

O mercado de emagrecimento feminino está em seu estágio
máximo de sofisticação. O público está extremamente
cético e já ouviu TODAS as promessas imagináveis.

Estratégia: Abandonar promessas diretas. Focar em
IDENTIFICAÇÃO e PERTENCIMENTO.

Headlines recomendadas:
1. "Para Mulheres de 40+ que Estão Cansadas de
   Dietas que Funcionam por 2 Semanas"
2. "O Que 47.000 Mulheres Descobriram Quando
   Pararam de Fazer Dieta"
3. "Você Não Precisa de Mais Uma Dieta. Você
   Precisa Entender Seu Corpo."

Nota: Neste estágio, a CONEXÃO EMOCIONAL supera
a promessa lógica. Lidere com empatia.
```

---

## Common Mistakes

```
MISTAKE 1: Stage 1 Copy in Stage 3+ Market
- Symptom: "Get [benefit]" - simple claim ignored
- Fix: Add mechanism to differentiate

MISTAKE 2: Stage 3 Mechanism in Stage 5 Market
- Symptom: New mechanism gets eye rolls
- Fix: Lead with identity/emotion, mechanism secondary

MISTAKE 3: Inventing Mechanism When Not Needed
- Symptom: Overcomplicating in Stage 1-2 market
- Fix: Sometimes simple is best. Trust the stage.

MISTAKE 4: Ignoring Awareness × Sophistication
- Symptom: Right sophistication, wrong awareness
- Fix: Always combine both diagnoses
```

## Notas do Agent

> "À medida que seu mercado se desenvolve, sua copy deve evoluir com
> ele. O que funcionou no Estágio 2 parecerá ingênuo no Estágio 4.
> Conheça seu mercado, ou ele vai ignorar você."
>
> — Eugene Schwartz

### Sinais de Alerta

1. **Estágio subestimado**: Sua copy parece "genérica" demais
2. **Estágio superestimado**: Sua copy está complicada demais
3. **Mecanismo forçado**: Em estágios iniciais, mecanismo confunde
4. **Promessa fraca em mercado maduro**: Você será ignorado

---

## Integration

- **Prerequisite**: diagnose-awareness.md (run first)
- **Uses**: schwartz-diagnosis-checklist.md
- **Informs**: All copy creation tasks
- **Agent**: @eugene-schwartz (Tier 0 - Diagnosis)

## Tasks Relacionadas

- `diagnose-awareness.md` - Complementa com análise do prospect
- `create-unique-mechanism.md` - Criar mecanismo único para estágio 3+
- `create-big-idea.md` - Big Idea adequada ao estágio

## Executor

```yaml
executor:
  primary: eugene-schwartz
  secondary: copy-chief
  rationale: "Eugene Schwartz como autor do framework de 5 estagios de sofisticacao de mercado (Breakthrough Advertising, 1966)"
```

## Pre-Conditions

```yaml
pre_conditions:
  - Diagnostico de awareness level concluido (diagnose-awareness.md)
  - Nicho/mercado especifico identificado
  - Concorrentes principais listados (minimo 3-5)
  - Promessas atuais do mercado mapeadas
  - Historico do mercado conhecido (tempo de existencia, evolucao)
```

## Output Example

```yaml
sophistication_diagnosis:
  nicho: "Cursos online de produtividade"
  estagio: 3
  estagio_nome: "Mechanism Required"
  confianca: HIGH

analise_competitiva:
  promessas_comuns:
    - "Seja mais produtivo"
    - "Organize sua vida"
    - "Faca mais em menos tempo"
  concorrentes_mapeados: 12
  nivel_saturacao: "ALTO — promessas identicas entre concorrentes"

tipo_promessa_recomendada: "Mecanismo Unico obrigatorio"
justificativa: |
  Promessas diretas ja foram esgotadas. O mercado precisa de um
  MECANISMO que explique POR QUE este metodo e diferente.
  Ex: "O Metodo 90-Minutos" em vez de "seja mais produtivo".

exemplos_headlines:
  - "O sistema de blocos de 90 minutos que cientistas de Stanford usam para dobrar produtividade"
  - "Por que listas de tarefas DESTROEM sua produtividade (e o que fazer no lugar)"
  - "A tecnica japonesa de 3 passos que elimina procrastinacao em 7 dias"

proximo_passo: "Criar Unique Mechanism (create-unique-mechanism.md)"
```

### Output Example 2 — Stage 4 (mentorias para agências)

```yaml
sophistication_diagnosis:
  market: "Mentorias para donos de agencia digital"
  stage: 4
  stage_name: "Tired of Mechanisms"
  confidence: HIGH

evidence:
  - "Dezenas de mentorias prometem 'metodo proprio' (Metodo X, Sistema Y)"
  - "Publico ja ouviu 'processo + pessoas + performance' em 5 variantes"
  - "Comentarios: 'mais um guru vendendo metodo magico'"

market_analysis:
  claims_saturadas:
    - "Escale sua agencia em 90 dias"
    - "Saia do operacional com meu metodo"
    - "Fature 100k/mes com agencia"
  mecanismos_gastos:
    - "Metodo de 3 pilares"
    - "Framework de delegacao"
    - "Sistema de processos"

copy_strategy:
  approach: "Identificacao profunda com o prospect — mostrar que voce VIVEU o problema"
  headline_style: "Story-driven com vulnerabilidade + resultado especifico"
  differentiation: "Nao vender metodo, vender IDENTIDADE e pertencimento"
  example_headline: "Eu quase fechei minha agencia de 500k/mes. Aqui esta o que me salvou."

next_step: |
  Criar Big Idea que transcenda mecanismos (create-big-idea.md).
  Em Stage 4, a diferenciacao vem da HISTORIA, nao do metodo.
```

## Veto Conditions
- Diagnostico sem informacoes reais do mercado (nao inventar dados)
- Pular niveis intermediarios de awareness/sofisticacao
- Diagnostico generico sem especificidade do nicho
