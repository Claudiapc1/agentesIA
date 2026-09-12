# Workflow: Email Marketing Continuo

```yaml
workflow:
  name: email-marketing-continuo
  description: "Workflow para criacao e manutencao de email marketing continuo"
  estimated_time: "Setup: 4-6h | Diario: 20-30min"
  complexity: media

use_cases:
  - "Email diario estilo Ben Settle"
  - "Newsletter semanal"
  - "Nurturing de lista"
  - "Lancamentos via email"
  - "Monetizacao de lista"
```

---

## Visao Geral

Este workflow estabelece uma estrutura para email marketing continuo, combinando sequencias automatizadas com emails diarios/regulares para manter a lista engajada e gerar vendas consistentes.

```
┌─────────────────────────────────────────────────────────────────────┐
│                 WORKFLOW: EMAIL MARKETING CONTINUO                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    SETUP INICIAL (1x)                        │   │
│  │  Welcome ──▶ Nurturing ──▶ Templates ──▶ Sistema            │   │
│  │  Sequence    Sequence     Diarios      Automacao            │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    CICLO DIARIO                              │   │
│  │  Tema ──▶ Escrita ──▶ Revisao ──▶ Envio                     │   │
│  │  (5 min)  (15 min)   (5 min)     (5 min)                    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    OTIMIZACAO (Semanal)                      │   │
│  │  Metricas ──▶ Ajustes ──▶ Testes                            │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## PARTE 1: SETUP INICIAL (4-6 horas)

### Step 1.1: Welcome Sequence (Soap Opera Sequence)

```yaml
task: create-welcome-sequence
agent: "@andre-chaperon"
tipo: soap_opera_sequence

estrutura:
  email_1_boas_vindas:
    timing: "Imediatamente apos opt-in"
    objetivo: "Entrega + primeira impressao"
    elementos:
      - "Entrega do lead magnet"
      - "Agradecimento genuino"
      - "O que esperar"
      - "Mini-hook para proximo email"

  email_2_historia:
    timing: "+1 dia"
    objetivo: "Conexao + backdrop dramatico"
    elementos:
      - "Sua historia de origem"
      - "O problema que enfrentou"
      - "Inicio da jornada"
      - "Cliffhanger"

  email_3_revelacao:
    timing: "+1 dia"
    objetivo: "A descoberta + credibilidade"
    elementos:
      - "O que descobriu"
      - "A mudanca de paradigma"
      - "Resultados iniciais"
      - "Antecipacao para proximo"

  email_4_beneficios:
    timing: "+1 dia"
    objetivo: "O que mudou + prova social"
    elementos:
      - "Transformacao completa"
      - "Beneficios obtidos"
      - "Outros que conseguiram"
      - "Setup para oferta"

  email_5_urgencia:
    timing: "+1 dia"
    objetivo: "CTA + urgencia"
    elementos:
      - "Resumo da jornada"
      - "Por que agir agora"
      - "Oferta especial"
      - "CTA claro"

  emails_6_7:
    timing: "+1 dia cada"
    objetivo: "Follow-up + alternativas"
    elementos:
      - "Mais prova social"
      - "Diferentes angulos"
      - "FAQ/Objecoes"
      - "Ultimo CTA"

output:
  - "7 emails da welcome sequence"
  - "Configurados na automacao"
  - "Segmentacao por comportamento"
```

### Step 1.2: Nurturing Sequence

```yaml
task: create-nurturing-sequence
agent: "@andre-chaperon"

objetivo: "Manter engajamento apos welcome sequence"

estrutura:
  bloco_1_educacao:
    emails: 3-5
    tema: "Conteudo educacional de alto valor"
    frequencia: "A cada 2-3 dias"

  bloco_2_autoridade:
    emails: 3-5
    tema: "Cases, resultados, posicionamento"
    frequencia: "A cada 2-3 dias"

  bloco_3_soft_sell:
    emails: 2-3
    tema: "Ofertas suaves, CTAs leves"
    frequencia: "A cada 3-4 dias"

  # Ciclo repete com novos temas

total_emails: "12-15 emails"
duracao: "30-45 dias"

transicao:
  apos_nurturing: "Move para lista principal (emails diarios)"
```

### Step 1.3: Templates de Email Diario

```yaml
task: create-daily-templates
agent: "@ben-settle"

filosofia: "Infotainment - informar + entreter"

tipos_templates:
  story_moral:
    estrutura: |
      Assunto: [Curioso/Contraintuitivo]

      [Historia curta e envolvente]

      [Moral/Licao inesperada]

      [Conexao com produto/servico]

      [CTA natural]

      [Assinatura]

  contrarian:
    estrutura: |
      Assunto: [Opiniao controversa/diferente]

      [Afirmacao poderosa]

      [Por que a maioria esta errada]

      [Sua perspectiva unica]

      [O que fazer diferente]

      [CTA]

  curiosidade:
    estrutura: |
      Assunto: [Gerando curiosidade intensa]

      [Gancho que prende]

      [Revelacao gradual]

      [Insight valioso]

      [Conexao com oferta]

      [CTA]

  social_proof:
    estrutura: |
      Assunto: [Resultado de cliente/caso]

      [Historia do cliente]

      [Problema que tinha]

      [O que fez]

      [Resultado obtido]

      [Como voce pode fazer igual]

      [CTA]

  educational:
    estrutura: |
      Assunto: [Promessa de aprendizado]

      [O que vai aprender]

      [Conteudo valioso]

      [Exemplo pratico]

      [Proximo passo]

      [CTA]

output:
  - "5+ templates prontos para usar"
  - "Exemplos preenchidos de cada"
  - "Banco de assuntos por tipo"
```

### Step 1.4: Banco de Assuntos (Subject Lines)

```yaml
task: create-subject-bank
agent: "@ben-settle"

quantidade: 100+ assuntos

categorias:
  curiosidade:
    - "Isso vai te irritar..."
    - "Nao abra esse email se..."
    - "A verdade sobre [tema] que ninguem conta"
    - "Por que [resultado] nao funciona (para a maioria)"

  contrarian:
    - "Pare de [conselho comum]"
    - "[Guru/metodo popular] esta errado"
    - "O mito de [crenca comum]"
    - "Por que eu nunca [acao popular]"

  story:
    - "A historia de [pessoa] e [resultado]"
    - "Como perdi [coisa] e ganhei [coisa melhor]"
    - "O dia que [evento] mudou tudo"
    - "[Pessoa] me ensinou [licao]"

  urgencia:
    - "Ultimas horas"
    - "Isso expira amanha"
    - "Depois nao diga que nao avisei"
    - "Decisao de [prazo]"

  beneficio:
    - "[Resultado] em [tempo]"
    - "Como [resultado] sem [objecao]"
    - "O segredo para [resultado]"
    - "[Numero] passos para [resultado]"

output:
  - "100+ subject lines organizadas"
  - "Por categoria e tipo de email"
```

**Entregaveis do Setup:**
- [ ] Welcome sequence (7 emails)
- [ ] Nurturing sequence (12-15 emails)
- [ ] Templates de email diario (5+ tipos)
- [ ] Banco de 100+ subject lines
- [ ] Automacoes configuradas

### 🛑 VETO CONDITIONS — Setup → Ciclo Diário

```yaml
veto_conditions:
  - "Se welcome sequence < 5 emails → PARAR (sequência incompleta, primeira impressão fraca)"
  - "Se nurturing NÃO tem bloco de soft sell → PARAR (vai nutrir sem nunca vender)"
  - "Se templates < 3 tipos → PARAR (vai repetir formato e cansar lista)"
  - "Se banco de assuntos < 50 → PARAR (vai ficar sem ideias rapidamente)"
  - "Se automações NÃO testadas → PARAR (email quebrado = lead perdido)"
```

### ✅ CHECKPOINT: Setup Email Validado

```yaml
checkpoint:
  nome: "Infraestrutura de Email Pronta"
  validacao:
    - "Welcome sequence segue Soap Opera Sequence (história → revelação → CTA)?"
    - "Nurturing tem mix de educação + autoridade + soft sell?"
    - "Templates cobrem: story, contrarian, curiosidade, social proof, educational?"
    - "Automações testadas com email real?"
  decisao:
    passa: "Todos ✅ → Iniciar Ciclo Diário"
    falha: "Qualquer ❌ → Completar setup"
```

---

## PARTE 2: CICLO DIARIO (20-30 min)

### Step 2.1: Escolher Tema/Angulo (5 min)

```yaml
task: daily-theme
fontes_inspiracao:
  - "Experiencia do dia"
  - "Pergunta de cliente/lista"
  - "Noticia/trend relevante"
  - "Conteudo que consumiu"
  - "Conversa que teve"
  - "Insight aleatorio"
  - "Historia do passado"

processo:
  1: "Revisar rapidamente fontes de inspiracao"
  2: "Escolher tema com potencial de historia"
  3: "Definir conexao com produto/servico"
  4: "Escolher template adequado"

output:
  - tema: "Assunto do email"
  - template: "Qual estrutura usar"
  - conexao: "Como ligar com CTA"
```

### Step 2.2: Escrever Email (15 min)

```yaml
task: write-email
agent: "@ben-settle"

processo:
  1: "Escrever assunto primeiro"
  2: "Escrever fluxo de consciencia (sem editar)"
  3: "Manter tom conversacional"
  4: "Inserir CTA natural"
  5: "Adicionar assinatura padrao"

regras_ben_settle:
  - "Personalidade > Perfeccao"
  - "Escreva como se falasse com um amigo"
  - "Cada email = 1 ideia principal"
  - "CTA sempre no final"
  - "Nao tenha medo de polarizar"
  - "Entretenimento primeiro, venda segundo"

tamanho_ideal: "300-500 palavras"
```

### Step 2.3: Revisao Rapida (5 min)

```yaml
task: quick-review
checklist:
  assunto:
    - [ ] Gera curiosidade?
    - [ ] Curto (< 50 caracteres ideal)?
    - [ ] Nao parece spam?

  abertura:
    - [ ] Primeira linha prende?
    - [ ] Conecta com assunto?

  corpo:
    - [ ] Flui naturalmente?
    - [ ] Tem personalidade?
    - [ ] Uma ideia central?

  cta:
    - [ ] Natural (nao forcado)?
    - [ ] Link funcionando?

  tecnico:
    - [ ] Preview text ok?
    - [ ] Sem erros gritantes?
```

### Step 2.4: Agendamento/Envio (5 min)

```yaml
task: send-email
processo:
  1: "Subir na plataforma"
  2: "Verificar preview em diferentes clientes"
  3: "Agendar para horario ideal"
  4: "Confirmar envio"

horarios_ideais:
  - "06:00-08:00 (quem acorda cedo)"
  - "10:00-11:00 (pausa matinal)"
  - "19:00-21:00 (apos trabalho)"

melhor_testar: "Variar e medir open rates"
```

### 🛑 VETO CONDITIONS — Email Diário → Envio

```yaml
veto_conditions:
  - "Se assunto NÃO gera curiosidade → REESCREVER (assunto ruim = não abre)"
  - "Se email NÃO tem CTA → NÃO ENVIAR (email sem propósito)"
  - "Se email > 800 palavras → CORTAR (Ben Settle: 300-500 ideal)"
  - "Se email NÃO tem personalidade/opinião → REESCREVER (sem personalidade = unsubscribe)"
  - "Se preview text não confere → CORRIGIR"
```

### ✅ CHECKPOINT: Email Pronto para Envio

```yaml
checkpoint:
  nome: "Email Diário Validado"
  validacao:
    - "Assunto gera curiosidade e tem < 50 caracteres?"
    - "Primeira linha prende e conecta com assunto?"
    - "Uma ideia central (não múltiplas)?"
    - "CTA natural (não forçado)?"
    - "Tom conversacional com personalidade?"
  decisao:
    passa: "Todos ✅ → Agendar envio"
    falha: "Qualquer ❌ → Ajustar e re-verificar"
```

---

## PARTE 3: OTIMIZACAO SEMANAL (1 hora)

### Step 3.1: Analise de Metricas

```yaml
task: weekly-metrics
metricas_principais:
  - open_rate: "Taxa de abertura (benchmark: 20-30%)"
  - click_rate: "Taxa de cliques (benchmark: 2-5%)"
  - unsubscribe_rate: "Descadastros (< 0.5% por email)"
  - reply_rate: "Respostas (engajamento)"
  - revenue: "Receita gerada"

analise:
  por_email:
    - "Top 3 open rates"
    - "Top 3 click rates"
    - "Piores performers"
    - "Padroes de assunto"

  por_segmento:
    - "Performance por origem do lead"
    - "Performance por tempo na lista"
    - "Performance por comportamento"
```

### Step 3.2: Identificar Padroes

```yaml
task: pattern-analysis
perguntas:
  - "Que tipos de assunto performam melhor?"
  - "Que dias/horarios tem melhor abertura?"
  - "Que angulos geram mais cliques?"
  - "Que ofertas convertem melhor?"
  - "O que causa descadastros?"

output:
  - padroes_positivos: "Replicar"
  - padroes_negativos: "Evitar"
  - hipoteses_testar: "Proxima semana"
```

### Step 3.3: Ajustes e Testes

```yaml
task: weekly-adjustments
acoes:
  - "Ajustar horarios de envio"
  - "Testar novos formatos de assunto"
  - "Experimentar novos tipos de conteudo"
  - "Segmentar melhor a lista"
  - "Limpar inativos (periodicamente)"

testes_ab:
  - "Assuntos (sempre)"
  - "Horarios de envio"
  - "Tipos de CTA"
  - "Tamanho do email"
```

---

## Sequencias Especiais

### Sequencia de Lancamento

```yaml
sequencia_lancamento:
  pre_lancamento:
    email_1: "Antecipacao - algo vem ai"
    email_2: "Backstory - por que criei isso"
    email_3: "Teaser - revelacao parcial"

  abertura_carrinho:
    email_1: "Lancamento - portas abertas"
    email_2: "Detalhe - o que esta incluso"
    email_3: "Prova - cases e depoimentos"
    email_4: "FAQ - objecoes respondidas"

  fechamento:
    email_1: "Ultima chance (48h)"
    email_2: "Reforco (24h)"
    email_3: "Final (4h)"
    email_4: "Fechado - proxima oportunidade"
```

### Sequencia de Reengajamento

```yaml
sequencia_reengajamento:
  objetivo: "Reativar inativos (90+ dias sem abrir)"

  email_1:
    assunto: "Ei, voce ainda esta ai?"
    conteudo: "Notamos que nao tem aberto emails..."

  email_2:
    assunto: "Ultima chance de continuar"
    conteudo: "Se nao quiser mais, sem problema..."

  email_3:
    assunto: "Despedida (talvez)"
    conteudo: "Vamos te remover da lista a menos que..."

  acao:
    abriu: "Manter na lista principal"
    nao_abriu: "Remover ou mover para segmento frio"
```

---

## Templates de Email por Objetivo

### Template: Email de Valor

```
┌─────────────────────────────────────────────────────────────┐
│               EMAIL DE VALOR/EDUCACIONAL                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ASSUNTO: [Promessa especifica de aprendizado]             │
│                                                             │
│  ABERTURA:                                                 │
│  Uma coisa que [descobri/aprendi] recentemente...          │
│                                                             │
│  CONTEXTO:                                                 │
│  [Como chegou nessa descoberta]                            │
│                                                             │
│  VALOR:                                                    │
│  Aqui esta o que funciona:                                 │
│  [Passo 1]                                                 │
│  [Passo 2]                                                 │
│  [Passo 3]                                                 │
│                                                             │
│  APLICACAO:                                                │
│  Experimente isso [hoje/essa semana] e me conte.           │
│                                                             │
│  CTA (soft):                                               │
│  Se quiser ir mais fundo nisso, [oferta].                  │
│                                                             │
│  [Assinatura]                                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Template: Email de Historia

```
┌─────────────────────────────────────────────────────────────┐
│                 EMAIL DE HISTORIA                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ASSUNTO: [Gancho intrigante da historia]                  │
│                                                             │
│  HISTORIA:                                                 │
│  [Contexto - onde/quando/quem]                             │
│                                                             │
│  [Problema/conflito - o que aconteceu]                     │
│                                                             │
│  [Ponto de virada - o insight]                             │
│                                                             │
│  [Resolucao - o que mudou]                                 │
│                                                             │
│  LICAO:                                                    │
│  O ponto e: [moral da historia]                            │
│                                                             │
│  CONEXAO:                                                  │
│  E isso me lembra de [produto/servico] porque...           │
│                                                             │
│  CTA:                                                      │
│  [Link natural]                                            │
│                                                             │
│  [Assinatura]                                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Template: Email de Venda Direta

```
┌─────────────────────────────────────────────────────────────┐
│                 EMAIL DE VENDA DIRETA                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ASSUNTO: [Urgencia ou beneficio direto]                   │
│                                                             │
│  ABERTURA:                                                 │
│  Direto ao ponto:                                          │
│  [Oferta em 1-2 linhas]                                    │
│                                                             │
│  BENEFICIOS:                                               │
│  Isso vai te ajudar a:                                     │
│  - [Beneficio 1]                                           │
│  - [Beneficio 2]                                           │
│  - [Beneficio 3]                                           │
│                                                             │
│  PROVA:                                                    │
│  [Depoimento curto ou resultado]                           │
│                                                             │
│  URGENCIA:                                                 │
│  [Por que agir agora]                                      │
│                                                             │
│  CTA:                                                      │
│  [Link claro e direto]                                     │
│                                                             │
│  PS: [Reforco final ou bonus]                              │
│                                                             │
│  [Assinatura]                                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Criterios de Sucesso

```yaml
criterios:
  consistencia:
    - "Email diario enviado (ou frequencia definida)"
    - "Tom e personalidade consistentes"
    - "Sequencias automatizadas funcionando"

  metricas:
    - "Open rate > 25%"
    - "Click rate > 3%"
    - "Unsubscribe rate < 0.5%"
    - "Receita por email positiva"

  crescimento:
    - "Lista crescendo (mais entradas que saidas)"
    - "Engajamento se mantendo ou aumentando"
    - "Vendas consistentes via email"
```

---

## Checklist Semanal

### Producao
- [ ] 7 emails diarios enviados
- [ ] Sequencias automatizadas funcionando
- [ ] Nenhum erro tecnico

### Analise
- [ ] Metricas revisadas
- [ ] Top/Flop identificados
- [ ] Padroes documentados

### Otimizacao
- [ ] Ajustes implementados
- [ ] Testes planejados
- [ ] Lista limpa (se necessario)

---

## PARTE 4: Validação Oráculo (OBRIGATÓRIA)

**Objetivo:** Garantir que toda copy criada neste workflow passa pelos critérios imperiais antes de publicação.

**Responsável:** @oraculo-torriani

**Referência:** workflows/validacao-oraculo-torriani.md

```yaml
checkpoint: "Validação Final"
agent: oraculo-torriani
load_before: data/manual-craft.md
sequence:
  - step: "V1"
    name: "Regras Invioláveis (veto instantâneo)"
    regras: ["RU-01 a RU-03", "RA-01 a RA-05 (se ads)", "CL-01 a CL-38"]
  - step: "V2"
    name: "Regras de Craft"
    file: data/manual-craft.md
    regra: "RC-01 a RC-10 — 3+ violações = reprova"
  - step: "V3"
    name: "Oráculo Torriani"
    file: checklists/oraculo-torriani.md
    regra: "10/10 ou refaz"
  - step: "V4"
    name: "Sugarman 30 Triggers"
    file: checklists/sugarman-30-triggers.md
    regra: "Mínimo 15 triggers presentes"
```

🛑 **VETO CONDITIONS — Output → Publicação**

```yaml
veto_conditions:
  - "Se score Oráculo < 10/10 → NÃO PUBLICAR"
  - "Se qualquer Regra Inviolável falhar → REPROVA INSTANTÂNEA"
  - "Se 3+ Regras de Craft violadas → REPROVA"
  - "Se < 15 Sugarman Triggers → REPROVA"
```

> **Copy 10/10 ou refaz. Zero meio-termo.**

---

*Workflow: email-marketing-continuo v1.0 - High-Ticket Copy Factory*

## Quality Gates
- Todas as pecas de copy passam pelo Oraculo Torriani (10/10)
- Sugarman 30 Triggers verificados (minimo 15 presentes)
- Regras inviolaveis checadas (0 violacoes)
