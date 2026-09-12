# Build Narrative - Evaldo's 10 Sequential Questions

## Task Anatomy

| Field | Value |
|-------|-------|
| **task_name** | Build Narrative (Evaldo Method) |
| **status** | `active` |
| **responsible_executor** | @evaldo-albuquerque |
| **execution_type** | `Interactive` (elicit=true) |
| **executor** | evaldo-albuquerque |
| **pattern** | EXEC-I-001 |
| **rationale** | Cada pergunta gera um bloco narrativo que depende do anterior. O humano deve validar cada bloco antes de avançar para manter coerência narrativa. |

### Interactive Execution Flow

```yaml
interactive_flow:
  elicit: true
  mode: "sequential_q_and_a"
  total_questions: 10
  phases:
    phase_1:
      name: "Problema/Vilão"
      questions: [Q1, Q2, Q3, Q4, Q5, Q6, Q7]
      purpose: "Construir tensão e identificar o inimigo"
    phase_2:
      name: "Solução/Ação"
      questions: [Q8, Q9, Q10]
      purpose: "Apresentar solução e gerar ação"

  checkpoint_per_question:
    action: "Apresentar bloco gerado e solicitar validação"
    options:
      - "Aprovado — avançar para próxima pergunta"
      - "Ajustar — refinar este bloco antes de avançar"
      - "Voltar — revisar pergunta anterior"
```

---

## Pre-Conditions
- Premissa-core.md carregada
- One Belief definido (diagnose-one-belief executado)
- Avatar research completa (diagnose-avatar executado)
- Big Idea definida (create-big-idea executado)

> Bloco único de veto desta task: ver secção "Veto Conditions" (EVALDO_001 a EVALDO_007).

## Purpose

Build a complete sales letter narrative structure using Evaldo Albuquerque's method of 10 sequential questions. Each question generates one narrative block, and the 10 blocks together form a complete persuasion arc — from problem identification through villain exposure to solution and action.

## When to Use

- **After defining One Belief** - This is the MANDATORY starting point
- When building sales letters, VSLs, or long-form sales pages
- When copy needs a strong narrative backbone
- When selling transformation-based products
- When the market needs belief-shifting copy
- After identifying the One Belief that needs to be implanted

## Evaldo on Narrative

```
"A carta de vendas não é uma lista de argumentos.
É uma JORNADA que leva o leitor de onde ele está
até onde ele precisa estar para comprar.

Cada pergunta abre uma porta.
Cada resposta é um bloco da narrativa.
Pule uma pergunta e a narrativa desmorona."

— Evaldo Albuquerque, The 16-Word Sales Letter
```

## Inputs

```yaml
required:
  - one_belief: "A crença central que o leitor precisa ter para comprar (OBRIGATÓRIO)"
  - brand_dna: "Voz, tom e personalidade da marca"
  - awareness_level: "Nível de awareness do prospect (1-5)"

optional:
  - product_info: "Detalhes do produto/serviço"
  - icp: "Perfil do cliente ideal"
  - existing_research: "Pesquisa de mercado/avatar já feita"
  - competitor_narratives: "Como concorrentes contam suas histórias"
```

## Pre-Conditions

```
MANDATORY: One Belief MUST be defined before starting.

IF one_belief is undefined or unclear:
  → BLOCK. Run diagnose-one-belief.md first.
  → Do NOT proceed without a clear One Belief.
  → Do NOT invent a One Belief — it must come from research.

WHAT IS THE ONE BELIEF?
The single belief that, once adopted, makes the purchase inevitable.

EXAMPLE:
- Product: Curso de copywriting
- One Belief: "A habilidade de escrever copy é a skill mais lucrativa
               que um empreendedor pode ter"
- IF the reader believes this → they WILL buy a copywriting course
```

## Workflow

### Step 1: Validate One Belief

```
ONE BELIEF VALIDATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

One Belief: "____________________"

CHECKLIST:
□ É UMA crença (não duas, não três)
□ Se o leitor acreditar nisso, a compra é inevitável
□ É específica (não genérica como "educação é importante")
□ Tem tensão (desafia alguma crença atual do leitor)
□ É defensável (pode ser argumentada com evidências)

RESULT:
□ VALID → Proceed to Q1
□ INVALID → Run diagnose-one-belief.md
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Step 2: Answer Q1-Q10 Sequentially

Each question generates exactly ONE copy block. Present each block for validation before moving to the next.

```
═══════════════════════════════════════════════════════════════════
PHASE 1: PROBLEMA / VILÃO (Q1-Q7)
Purpose: Construir tensão, identificar o inimigo, criar insatisfação
═══════════════════════════════════════════════════════════════════

Q1: QUAL É A DOR DO LEITOR AGORA?
────────────────────────────────────
Descreva a situação atual do leitor com detalhes sensoriais.
Não diga "ele tem um problema" — MOSTRE a cena da dor.

BLOCO 1 deve:
□ Pintar uma cena específica (não genérica)
□ Usar linguagem do avatar (não linguagem técnica)
□ Fazer o leitor pensar "isso sou EU"
□ Gerar identificação instantânea

TEMPLATE:
"Você [ação cotidiana]... mas [dor que sente].
[Detalhe sensorial]. [Consequência emocional]."

────────────────────────────────────

Q2: POR QUE ESSA DOR EXISTE?
────────────────────────────────────
Explique a causa raiz da dor — mas de forma que o leitor
NUNCA pensou antes. Mude a perspectiva dele.

BLOCO 2 deve:
□ Revelar uma causa não-óbvia
□ Fazer o leitor questionar suas suposições
□ Começar a construir o "vilão" da história
□ Gerar o pensamento "eu nunca tinha pensado nisso"

TEMPLATE:
"O problema não é [o que ele pensa].
O verdadeiro problema é [causa raiz inesperada]."

────────────────────────────────────

Q3: QUEM OU O QUE É O VILÃO?
────────────────────────────────────
Identifique o inimigo externo. O leitor NÃO é o vilão.
O vilão é o sistema, a indústria, a desinformação, etc.

BLOCO 3 deve:
□ Nomear um inimigo específico (não vago)
□ Mostrar como o vilão se beneficia da dor do leitor
□ Gerar indignação (não pena)
□ Transferir a culpa: leitor → vilão

TEMPLATE:
"[O vilão] quer que você acredite que [mentira].
Porque enquanto você acredita nisso, [benefício do vilão]."

────────────────────────────────────

Q4: COMO O VILÃO MANTÉM O LEITOR PRESO?
────────────────────────────────────
Exponha os mecanismos de controle — como o vilão
perpetua o problema.

BLOCO 4 deve:
□ Detalhar as táticas do vilão
□ Mostrar como o leitor está sendo manipulado
□ Aumentar a indignação
□ Fazer o leitor sentir urgência de escapar

TEMPLATE:
"Eles fazem isso de [X] formas:
Primeiro... Segundo... Terceiro...
E o pior: [consequência mais grave]."

────────────────────────────────────

Q5: O QUE O LEITOR JÁ TENTOU QUE NÃO FUNCIONOU?
────────────────────────────────────
Liste as soluções que o leitor já tentou e explique
por que falharam (por causa do vilão/sistema).

BLOCO 5 deve:
□ Validar as tentativas anteriores do leitor
□ Mostrar que não é culpa dele (é do sistema)
□ Desqualificar as alternativas
□ Preparar terreno para a nova solução

TEMPLATE:
"Você provavelmente já tentou [solução 1], [solução 2],
e talvez até [solução 3]. E nenhuma funcionou.
Não porque você fez errado — mas porque [razão sistêmica]."

────────────────────────────────────

Q6: O QUE ACONTECE SE NADA MUDAR?
────────────────────────────────────
Pinte o cenário futuro se o leitor não agir.
Maximize o custo da inação.

BLOCO 6 deve:
□ Projetar o futuro negativo (30, 60, 90 dias)
□ Tornar a inação mais dolorosa que a ação
□ Ser específico (não "vai ficar ruim")
□ Tocar em medo, perda, arrependimento

TEMPLATE:
"Se você não mudar nada, daqui a [prazo]...
[Consequência 1]. [Consequência 2].
E a pior parte: [consequência emocional]."

────────────────────────────────────

Q7: QUAL É A VERDADE QUE NINGUÉM CONTA?
────────────────────────────────────
Revele a verdade oculta que muda tudo.
Esta é a transição para a solução.

BLOCO 7 deve:
□ Introduzir a One Belief de forma natural
□ Fazer o leitor sentir "eureka"
□ Ser surpreendente mas lógica
□ Conectar Phase 1 (problema) com Phase 2 (solução)

TEMPLATE:
"Aqui está o que [vilão] não quer que você saiba:
[One Belief reformulada como revelação]."

═══════════════════════════════════════════════════════════════════
PHASE 2: SOLUÇÃO / AÇÃO (Q8-Q10)
Purpose: Apresentar a solução, construir prova, gerar ação
═══════════════════════════════════════════════════════════════════

Q8: QUAL É A SOLUÇÃO E COMO FUNCIONA?
────────────────────────────────────
Apresente o produto/método como consequência natural
da verdade revelada em Q7.

BLOCO 8 deve:
□ Conectar diretamente com a One Belief (Q7)
□ Mostrar o mecanismo (não só o resultado)
□ Ser simples de entender
□ Fazer a compra parecer lógica e inevitável

TEMPLATE:
"É por isso que [produto/método] funciona diferente.
Em vez de [abordagem antiga], [abordagem nova].
Funciona assim: [mecanismo em 3 passos]."

────────────────────────────────────

Q9: POR QUE O LEITOR DEVE ACREDITAR?
────────────────────────────────────
Empilhe provas. Prova social, dados, resultados,
autoridade, garantia.

BLOCO 9 deve:
□ Ter pelo menos 3 tipos de prova diferentes
□ Incluir resultados específicos (números)
□ Endereçar a objeção "parece bom demais"
□ Construir confiança antes do CTA

TEMPLATE:
"[Prova social]. [Dado concreto]. [Resultado específico].
E se ainda tem dúvida: [garantia/reversão de risco]."

────────────────────────────────────

Q10: O QUE O LEITOR DEVE FAZER AGORA?
────────────────────────────────────
CTA claro, urgente, específico.
Uma ação. Um prazo. Uma consequência.

BLOCO 10 deve:
□ Ter CTA com verbo imperativo
□ Incluir prazo ou urgência real
□ Reforçar o custo de NÃO agir
□ Ser binário (faz ou não faz)

TEMPLATE:
"[Verbo]. [Instrução específica]. [Prazo].
Se esperar, [consequência]. [Reforço da One Belief]."
```

### Step 3: Assemble Blocks into Narrative

```
NARRATIVE ASSEMBLY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PHASE 1: PROBLEMA / VILÃO
┌────────────────────────────────────────┐
│ BLOCO 1: Dor atual (Q1)               │
│ BLOCO 2: Causa raiz (Q2)              │
│ BLOCO 3: O vilão (Q3)                 │
│ BLOCO 4: Mecanismos de controle (Q4)  │
│ BLOCO 5: Tentativas fracassadas (Q5)  │
│ BLOCO 6: Futuro sem ação (Q6)         │
│ BLOCO 7: A verdade oculta (Q7)        │
└────────────────────────────────────────┘
         ↓ TRANSIÇÃO (One Belief)
┌────────────────────────────────────────┐
│ BLOCO 8: A solução (Q8)               │
│ BLOCO 9: Prova empilhada (Q9)         │
│ BLOCO 10: CTA (Q10)                   │
└────────────────────────────────────────┘

VERIFICATION:
□ Os 10 blocos fluem como uma narrativa contínua?
□ A transição Q7→Q8 é natural (não abrupta)?
□ A One Belief aparece em Q7 e é reforçada em Q8-Q10?
□ O arco emocional segue: empatia → indignação → esperança → ação?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Veto Conditions

```yaml
veto_conditions:
  - id: "EVALDO_001"
    condition: "Starting without One Belief defined"
    result: "VETO - BLOCK. Run diagnose-one-belief.md first."
    rationale: "Sem One Belief, a narrativa não tem norte. Os 10 blocos ficam desconectados."

  - id: "EVALDO_002"
    condition: "Skipping questions (e.g., jumping from Q3 to Q7)"
    result: "VETO - BLOCK. Every question must be answered in sequence."
    rationale: "Cada pergunta constrói sobre a anterior. Pular = buracos na narrativa."

  - id: "EVALDO_003"
    condition: "Inverting phases (solution before problem)"
    result: "VETO - BLOCK. Phase 1 (Q1-Q7) MUST come before Phase 2 (Q8-Q10)."
    rationale: "Apresentar solução antes de estabelecer o problema = zero tensão."

  - id: "EVALDO_004"
    condition: "One Belief not present in Q7 transition"
    result: "VETO - REVISE Q7. The One Belief must appear as the revelation."
    rationale: "Q7 é o ponto de virada. Sem One Belief aqui, a transição não funciona."

  - id: "EVALDO_005"
    condition: "Narrativa sem vilão/inimigo claro"
    result: "VETO - REWRITE. Todo bloco de problema precisa de um vilão nomeado."
    rationale: "Sem vilão não há indignação. Sem indignação a narrativa não move ninguém."

  - id: "EVALDO_006"
    condition: "Blocos narrativos sem conexão lógica entre si"
    result: "VETO - REVIEW. Cada bloco deve puxar o seguinte."
    rationale: "Blocos desconectados quebram o arco de persuasão e derrubam a leitura."

  - id: "EVALDO_007"
    condition: "Copy sem CTA no bloco final (Q10)"
    result: "VETO - REWRITE. Q10 fecha com chamada para ação explícita."
    rationale: "Narrativa sem CTA entrega convencimento e não colhe a conversão."
```

## Outputs

### Output Format

```yaml
narrative_structure:
  one_belief: "[The One Belief this narrative is built on]"
  total_blocks: 10
  phase_1_blocks: 7  # Problem/Villain
  phase_2_blocks: 3  # Solution/Action

blocks:
  - block: 1
    question: "Qual é a dor do leitor agora?"
    content: |
      [Narrative block text]
    word_count: [X]

  - block: 2
    question: "Por que essa dor existe?"
    content: |
      [Narrative block text]
    word_count: [X]

  # ... blocks 3-10

assembled_narrative: |
  [Complete narrative with all 10 blocks
   flowing as a single cohesive piece]

emotional_arc:
  - block_1: "Identification (empatia)"
  - block_2: "Revelation (surpresa)"
  - block_3: "Anger (indignação)"
  - block_4: "Frustration (impotência)"
  - block_5: "Validation (alívio)"
  - block_6: "Fear (urgência)"
  - block_7: "Eureka (esperança)"
  - block_8: "Excitement (possibilidade)"
  - block_9: "Confidence (confiança)"
  - block_10: "Action (decisão)"

total_word_count: [X]

next_step: |
  Proceed to write-copy.md to expand narrative into full copy,
  or edit-copy-halbert.md to refine the text.
```

## Acceptance Criteria

```
□ One Belief was validated before starting
□ All 10 questions were answered in sequence (none skipped)
□ Phase 1 (Q1-Q7) precedes Phase 2 (Q8-Q10) — never inverted
□ Each block was validated before advancing to the next
□ Q7 contains the One Belief as the narrative turning point
□ The 10 blocks flow as a cohesive narrative (no jarring transitions)
□ Emotional arc follows: empatia → indignação → esperança → ação
□ No veto conditions triggered
```

## Output Example

```
ONE BELIEF: "O que separa quem fatura R$10k/mes de quem fatura R$100k/mes
nao e mais trafego — e ter um SISTEMA que converte estranhos em clientes
todos os dias, no automatico."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BLOCO 1 — DOR ATUAL (Q1)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Voce abre o painel de vendas de manha e ve o mesmo numero de ontem.
Zero. Mais um dia sem venda. O cafe esfria enquanto voce rola o feed
procurando a "estrategia que vai mudar tudo". Seu estomago aperta
porque o boleto do trafego vence sexta — e o ROAS nao paga nem o almoco.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BLOCO 2 — CAUSA RAIZ (Q2)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

O problema nao e que voce nao sabe fazer trafego.
O problema e que voce esta tentando vender sem ter um SISTEMA
de conversao. E como encher um balde furado — nao importa
quanta agua voce coloca, ela escorre pelo fundo.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BLOCO 7 — A VERDADE OCULTA (Q7) [transicao]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Aqui esta o que a industria de lancamentos nao quer que voce saiba:
O que separa quem fatura 10k de quem fatura 100k nao e mais trafego.
E ter um SISTEMA que converte estranhos em clientes todos os dias,
no automatico. Um sistema que funciona enquanto voce dorme,
enquanto voce viaja, enquanto voce vive.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BLOCO 10 — CTA (Q10)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Clique no botao abaixo e acesse o Programa Acelerador Digital agora.
As vagas desta turma fecham sexta-feira as 23:59.
Se voce esperar, volta pro mesmo painel zerado amanha de manha.
A pergunta nao e se o sistema funciona — e se voce vai continuar
fingindo que mais um curso de trafego vai resolver.
```

## Integration

- **Pre-condition**: diagnose-one-belief.md (MANDATORY)
- **References**: data/evaldo-10-perguntas.yaml
- **Handoff to**: write-copy.md, edit-copy-halbert.md
- **Agent**: @evaldo-albuquerque
