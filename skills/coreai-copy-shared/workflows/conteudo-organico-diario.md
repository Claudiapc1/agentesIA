# Workflow: Conteudo Organico Diario

```yaml
workflow:
  name: conteudo-organico-diario
  description: "Workflow para criacao e manutencao de conteudo organico diario em redes sociais"
  estimated_time: "Setup: 2-3h | Diario: 30-45min"
  complexity: media

use_cases:
  - "Construcao de audiencia organica"
  - "Posicionamento como autoridade"
  - "Aquecimento para lancamentos"
  - "Personal branding"
  - "Conteudo para Instagram, LinkedIn, X/Twitter"
```

---

## Visao Geral

Este workflow combina um setup inicial robusto com um processo diario eficiente para manter consistencia de publicacao com qualidade.

```
┌─────────────────────────────────────────────────────────────────────┐
│                WORKFLOW: CONTEUDO ORGANICO DIARIO                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    SETUP INICIAL (1x)                        │   │
│  │  Pilares ──▶ Formatos ──▶ Calendario ──▶ Templates          │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    CICLO DIARIO                              │   │
│  │  Ideacao ──▶ Criacao ──▶ Revisao ──▶ Agendamento            │   │
│  │  (10 min)    (20 min)   (5 min)     (5 min)                 │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                              │                                      │
│                              ▼                                      │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                    OTIMIZACAO (Semanal)                      │   │
│  │  Analise ──▶ Ajustes ──▶ Novos Temas                        │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## PARTE 1: SETUP INICIAL (Uma vez)

### Step 1.1: Definir Pilares de Conteudo

```yaml
task: define-content-pillars
agent: "@juliano-torriani"

processo:
  1: "Identificar 3-5 temas centrais do nicho"
  2: "Mapear subtopicos de cada pilar"
  3: "Definir proporcao de cada pilar"

exemplo:
  pilar_1:
    nome: "Educacional (40%)"
    subtopicos:
      - "Tutoriais e como fazer"
      - "Explicacoes de conceitos"
      - "Dicas praticas"

  pilar_2:
    nome: "Autoridade (25%)"
    subtopicos:
      - "Estudos de caso"
      - "Resultados de clientes"
      - "Opinioes e posicionamentos"

  pilar_3:
    nome: "Conexao (20%)"
    subtopicos:
      - "Bastidores"
      - "Historia pessoal"
      - "Vulnerabilidade controlada"

  pilar_4:
    nome: "Conversao (15%)"
    subtopicos:
      - "CTAs para produtos/servicos"
      - "Lancamentos"
      - "Ofertas"

output:
  - pilares_definidos: "Lista com proporcoes"
  - subtopicos: "Ideias para cada pilar"
  - calendario_base: "Distribuicao semanal"
```

### Step 1.2: Definir Formatos por Plataforma

```yaml
task: define-formats
agent: "@dan-koe"

por_plataforma:
  instagram:
    feed:
      - "Carrossel educacional (10 slides)"
      - "Post unico com copy longa"
      - "Antes/Depois ou Comparativo"
    reels:
      - "Hook + Valor + CTA (15-30s)"
      - "Storytelling curto (30-60s)"
      - "Tutorial rapido (30-60s)"
    stories:
      - "Bastidores"
      - "Enquetes e interacao"
      - "CTA para conteudo"

  linkedin:
    - "Post texto longo (reflexivo)"
    - "Carrossel (documento)"
    - "Historia + licao"
    - "Lista pratica"

  x_twitter:
    - "Thread educacional"
    - "Tweet unico viral"
    - "Opinionated take"
    - "Resposta/Comentario estrategico"

distribuicao_semanal:
  exemplo_instagram:
    - "Segunda: Carrossel educacional"
    - "Terca: Reel tutorial"
    - "Quarta: Post autoridade"
    - "Quinta: Reel storytelling"
    - "Sexta: Carrossel educacional"
    - "Sabado: Post conexao"
    - "Domingo: Conteudo leve/pessoal"
```

### Step 1.3: Criar Banco de Ganchos

```yaml
task: create-hook-bank
agent: "@dan-koe"

quantidade: 50-100 hooks

categorias:
  curiosidade:
    - "[Numero] pessoas fizeram isso e [resultado]"
    - "O erro que 90% cometem em [area]"
    - "Por que [crenca comum] esta errada"

  contrarian:
    - "[Conselho popular] e o pior conselho que voce pode seguir"
    - "Pare de [acao comum]. Faca isso em vez disso"
    - "Todo mundo faz [X]. Isso e exatamente o problema"

  story:
    - "Ha [tempo] eu estava [situacao ruim]..."
    - "Meu cliente chegou com [problema]. Em [tempo]..."
    - "O dia que [evento] mudou minha perspectiva sobre [tema]"

  educacional:
    - "[Numero] passos para [resultado]"
    - "Como [resultado] em [tempo] (sem [objecao])"
    - "O framework de [numero] etapas para [resultado]"

  autoridade:
    - "Depois de [tempo/numero] em [area], aprendi que..."
    - "[Numero] clientes depois, posso afirmar que..."
    - "O padrao que vejo em todos que [resultado positivo]"

output:
  - banco_hooks: "Documento com 50-100 hooks organizados"
  - por_pilar: "Hooks separados por pilar de conteudo"
```

### Step 1.4: Criar Templates de Copy

```yaml
task: create-copy-templates
agent: "@dan-koe"

templates:
  carrossel:
    slide_1: "[HOOK FORTE - gancho visual]"
    slide_2: "[CONTEXTO - por que isso importa]"
    slide_3_7: "[CONTEUDO - passos/pontos principais]"
    slide_8: "[RESUMO ou EXEMPLO]"
    slide_9: "[CTA + valor adicional]"
    slide_10: "[CTA salvar/compartilhar]"

    caption: |
      [Hook expandido]

      [2-3 paragrafos de contexto/valor]

      [CTA: Salve este post | Comente X | Siga para mais]

      .
      .
      .
      #hashtags

  post_longo:
    estrutura: |
      [HOOK - primeira linha que para o scroll]

      [PROBLEMA - identifica a dor]

      [AGITACAO - por que isso e ruim]

      [SOLUCAO - o que fazer diferente]

      [PROVA - exemplo ou resultado]

      [CTA - proxima acao]

  reel:
    hook: "[0-3s] Gancho visual + texto"
    setup: "[3-10s] Contexto rapido"
    valor: "[10-25s] Conteudo principal"
    cta: "[25-30s] Chamada para acao"

output:
  - templates_por_formato: "Documento com todos os templates"
  - exemplos: "3 exemplos preenchidos de cada"
```

**Entregaveis do Setup:**
- [ ] 3-5 pilares de conteudo definidos
- [ ] Formatos por plataforma mapeados
- [ ] Calendario base semanal
- [ ] Banco de 50+ hooks
- [ ] Templates de copy prontos

### 🛑 VETO CONDITIONS — Setup → Ciclo Diário

```yaml
veto_conditions:
  - "Se pilares < 3 definidos → PARAR (sem pilares = conteúdo sem direção)"
  - "Se banco de hooks < 30 → PARAR (vai ficar sem ideias na primeira semana)"
  - "Se templates NÃO criados → PARAR (sem template = cada post demora 3x mais)"
  - "Se proporção de pilares NÃO definida → PARAR (risco de 100% educacional sem conversão)"
  - "Se calendário NÃO tem pelo menos 1 post de conversão/semana → PARAR (sem vendas)"
```

### ✅ CHECKPOINT: Setup Completo

```yaml
checkpoint:
  nome: "Setup Validado"
  validacao:
    - "Pilares cobrem: educacional + autoridade + conexão + conversão?"
    - "Hooks são variados (curiosidade, contrarian, story, educacional, autoridade)?"
    - "Templates existem para cada formato (carrossel, post longo, reel)?"
    - "Calendário semanal tem distribuição equilibrada?"
  decisao:
    passa: "Todos ✅ → Iniciar Ciclo Diário"
    falha: "Qualquer ❌ → Completar setup antes de começar"
```

---

## PARTE 2: CICLO DIARIO (30-45 min)

### Step 2.1: Ideacao Rapida (10 min)

```yaml
task: daily-ideation
processo:
  1: "Verificar calendario: qual pilar/formato hoje?"
  2: "Escolher hook do banco (ou criar novo)"
  3: "Definir angulo especifico"
  4: "Anotar pontos principais"

inputs:
  - "Noticias/trends do dia (relevantes)"
  - "Perguntas recebidas de seguidores"
  - "Experiencias recentes"
  - "Conteudo de outros para inspiracao"

output:
  - tema: "Assunto do conteudo"
  - hook: "Gancho escolhido"
  - pontos: "3-5 pontos a cobrir"
  - formato: "Carrossel/Post/Reel/etc"
```

### Step 2.2: Criacao (20 min)

```yaml
task: daily-creation
agent: "@dan-koe"

processo:
  1: "Abrir template do formato"
  2: "Preencher com pontos definidos"
  3: "Escrever copy completa"
  4: "Criar/selecionar visual (se aplicavel)"

por_formato:
  carrossel:
    tempo: "20-25 min"
    output: "10 slides + caption"

  post_longo:
    tempo: "15-20 min"
    output: "Post completo"

  reel_script:
    tempo: "10-15 min"
    output: "Script para gravacao"
```

### Step 2.3: Revisao Rapida (5 min)

```yaml
task: quick-review
checklist:
  gancho:
    - [ ] Primeira linha para o scroll?
    - [ ] Promessa clara?

  conteudo:
    - [ ] Valor real entregue?
    - [ ] Linguagem do publico?
    - [ ] Facil de consumir?

  cta:
    - [ ] Acao clara?
    - [ ] Baixa friccao?

  tecnico:
    - [ ] Sem erros ortograficos?
    - [ ] Hashtags adequadas?
    - [ ] Formato correto?
```

### Step 2.4: Agendamento (5 min)

```yaml
task: schedule
processo:
  1: "Subir conteudo na ferramenta de agendamento"
  2: "Definir horario otimo"
  3: "Configurar primeiro comentario (se aplicavel)"
  4: "Preview final"

horarios_sugeridos:
  instagram:
    - "07:00-09:00"
    - "12:00-14:00"
    - "18:00-21:00"

  linkedin:
    - "07:30-08:30"
    - "12:00-13:00"
    - "17:00-18:00"

  x_twitter:
    - "08:00-10:00"
    - "12:00-14:00"
    - "20:00-22:00"
```

### 🛑 VETO CONDITIONS — Ciclo Diário → Publicação

```yaml
veto_conditions:
  - "Se post NÃO tem gancho na primeira linha → NÃO PUBLICAR (não vai parar scroll)"
  - "Se post NÃO tem CTA → NÃO PUBLICAR (sem direcionamento = engajamento perdido)"
  - "Se post NÃO segue template definido → REVISAR (consistência importa)"
  - "Se post tem erros ortográficos → CORRIGIR antes de publicar"
```

### ✅ CHECKPOINT: Revisão Diária

```yaml
checkpoint:
  nome: "Post Pronto para Publicar"
  validacao:
    - "Gancho para scroll nos primeiros 3 segundos/palavras?"
    - "Valor real entregue (não só teoria)?"
    - "CTA claro e de baixa fricção?"
    - "Linguagem do público (não acadêmica)?"
  decisao:
    passa: "Todos ✅ → Agendar publicação"
    falha: "Qualquer ❌ → Ajustar antes de publicar"
```

---

## PARTE 3: OTIMIZACAO SEMANAL (1 hora)

### Step 3.1: Analise de Performance

```yaml
task: weekly-analysis
metricas_por_plataforma:
  instagram:
    - "Alcance"
    - "Salvamentos (crucial)"
    - "Compartilhamentos"
    - "Comentarios"
    - "Crescimento de seguidores"

  linkedin:
    - "Impressoes"
    - "Engajamento"
    - "Cliques no perfil"
    - "Conexoes novas"

  x_twitter:
    - "Impressoes"
    - "Engajamento"
    - "Retweets"
    - "Novos seguidores"

analise:
  1: "Top 3 posts da semana"
  2: "Flop 3 posts da semana"
  3: "Padroes identificados"
  4: "Horarios que performaram melhor"
```

### Step 3.2: Ajustes

```yaml
task: weekly-adjustments
com_base_na_analise:
  - "Ajustar proporcao de pilares"
  - "Focar em formatos que funcionam"
  - "Evitar angulos que floparam"
  - "Testar novos horarios"
  - "Atualizar banco de hooks"
```

### Step 3.3: Planejamento Proxima Semana

```yaml
task: weekly-planning
output:
  - "Calendario da semana"
  - "Temas pre-definidos por dia"
  - "Hooks selecionados"
  - "Conteudos especiais (se houver)"
```

---

## Frameworks de Conteudo por Tipo

### Framework: Post Educacional

```
┌─────────────────────────────────────────────────────────────┐
│                 POST EDUCACIONAL                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HOOK: [Numero] [coisa] que [resultado]                    │
│                                                             │
│  CONTEXTO: Por que isso importa para voce                  │
│                                                             │
│  LISTA:                                                    │
│  1. [Ponto 1 + mini explicacao]                           │
│  2. [Ponto 2 + mini explicacao]                           │
│  3. [Ponto 3 + mini explicacao]                           │
│  ...                                                       │
│                                                             │
│  CONCLUSAO: Resumo + insight adicional                     │
│                                                             │
│  CTA: Salve para referencia | Qual voce vai aplicar?       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Framework: Post de Autoridade

```
┌─────────────────────────────────────────────────────────────┐
│                  POST DE AUTORIDADE                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HOOK: Depois de [tempo/experiencia], percebi que...       │
│                                                             │
│  OBSERVACAO: O que você notou no mercado/publico          │
│                                                             │
│  INSIGHT: Sua conclusao/opiniao baseada em dados          │
│                                                             │
│  EVIDENCIA: Exemplo ou prova que suporta                  │
│                                                             │
│  TAKEAWAY: O que o leitor deve fazer com isso             │
│                                                             │
│  CTA: Concorda? Discorda? Comente sua visao               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Framework: Post de Conexao/Story

```
┌─────────────────────────────────────────────────────────────┐
│                   POST DE CONEXAO                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HOOK: Ha [tempo] eu estava [situacao identificavel]       │
│                                                             │
│  PROBLEMA: O que estava acontecendo                        │
│                                                             │
│  TURNING POINT: O momento de mudanca                       │
│                                                             │
│  TRANSFORMACAO: O que fez diferente                        │
│                                                             │
│  RESULTADO: Onde esta hoje                                 │
│                                                             │
│  LICAO: O que aprendeu com isso                           │
│                                                             │
│  CTA: Alguem mais passou por isso?                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Framework: Reel/Video Curto

```
┌─────────────────────────────────────────────────────────────┐
│                    REEL/VIDEO CURTO                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [0-1s] PATTERN INTERRUPT: Movimento/visual/texto forte    │
│                                                             │
│  [1-3s] HOOK: Frase que prende (texto na tela)            │
│                                                             │
│  [3-5s] PROMESSA: O que vai aprender                       │
│                                                             │
│  [5-25s] VALOR: Entrega do conteudo                       │
│          - Ponto 1                                         │
│          - Ponto 2                                         │
│          - Ponto 3                                         │
│                                                             │
│  [25-30s] CTA: Siga + Salve + Comente                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Criterios de Sucesso

```yaml
criterios:
  consistencia:
    - "Publicar todos os dias do calendario"
    - "Manter proporcao de pilares"
    - "Seguir templates definidos"

  qualidade:
    - "Todo post passa no checklist rapido"
    - "Hooks testados performam bem"
    - "Engajamento acima da media"

  crescimento:
    - "Crescimento semanal de seguidores"
    - "Aumento de alcance mes a mes"
    - "Leads gerados pelo conteudo"
```

---

## Checklist Semanal

### Producao
- [ ] 7 conteudos principais criados
- [ ] Stories diarios (se aplicavel)
- [ ] Respostas a comentarios
- [ ] Interacao com outros perfis

### Analise
- [ ] Metricas da semana registradas
- [ ] Top/Flop identificados
- [ ] Padroes documentados

### Planejamento
- [ ] Proxima semana planejada
- [ ] Temas definidos
- [ ] Hooks selecionados

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

*Workflow: conteudo-organico-diario v1.0 - High-Ticket Copy Factory*

## Quality Gates
- Todas as pecas de copy passam pelo Oraculo Torriani (10/10)
- Sugarman 30 Triggers verificados (minimo 15 presentes)
- Regras inviolaveis checadas (0 violacoes)
