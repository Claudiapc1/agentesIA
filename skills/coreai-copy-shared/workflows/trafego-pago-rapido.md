# Workflow: Tráfego Pago Rápido

```yaml
workflow:
  name: trafego-pago-rapido
  description: "Workflow acelerado para criação de ads e headlines para campanhas de tráfego pago"
  estimated_time: "1-2 horas"
  complexity: media

use_cases:
  - "Campanha de tráfego pago urgente"
  - "Testes de criativos para escala"
  - "Renovação de ads saturados"
  - "Campanhas de captação de leads"
```

---

## Visão Geral

Workflow otimizado para criar rapidamente materiais de tráfego pago com qualidade, focando em velocidade sem sacrificar a eficácia.

```
┌─────────────────────────────────────────────────────────────────────┐
│                   WORKFLOW: TRÁFEGO PAGO RÁPIDO                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  FASE 1              FASE 2               FASE 3                   │
│  Diagnóstico ───▶ Criação ───▶ Validação                          │
│  Rápido            Ads + Headlines       Básica                    │
│                                                                     │
│  ┌─────────┐      ┌─────────┐          ┌─────────┐                │
│  │30 min   │      │45-60 min│          │15-20 min│                │
│  └─────────┘      └─────────┘          └─────────┘                │
│                                                                     │
│  TOTAL: 1-2 horas                                                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## FASE 1: Diagnóstico Rápido (30 min)

**Objetivo:** Coletar apenas informações essenciais para criar ads eficazes.

### Step 1.1: Quick Awareness Check

```yaml
task: quick-awareness
agent: "@eugene-schwartz"
modo: rapido
input:
  - produto: "O que você vende?"
  - publico: "Para quem?"
  - problema: "Que problema resolve?"
output:
  - nivel_consciencia: "Identificação rápida do nível"
  - tipo_ad: "Adequado para o nível (educação/oferta direta)"
tempo: 10 min
```

### Step 1.2: Avatar Essencial

```yaml
task: quick-avatar
agent: "@dan-kennedy"
modo: rapido
questions:
  1: "Qual a maior dor do seu público?"
  2: "O que eles já tentaram que não funcionou?"
  3: "O que eles desejam acima de tudo?"
  4: "Que palavras/expressões eles usam?"
output:
  - dor_principal: "A dor que o ad vai atacar"
  - desejo_principal: "O desejo que o ad vai prometer"
  - linguagem: "Termos chave para usar"
tempo: 15 min
```

### Step 1.3: Definir Ângulos

```yaml
task: define-angles
processo:
  1: "Identificar 3-5 ângulos diferentes para os ads"
  2: "Priorizar por potencial de performance"
output:
  - angulos:
    - "Ângulo dor"
    - "Ângulo desejo"
    - "Ângulo curiosidade"
    - "Ângulo prova social"
    - "Ângulo novidade"
tempo: 5 min
```

**Entregáveis da Fase 1:**
- [ ] Nível de consciência identificado
- [ ] Dor e desejo principais mapeados
- [ ] 3-5 ângulos definidos para testar

### 🛑 VETO CONDITIONS — Fase 1 → Fase 2

```yaml
veto_conditions:
  - "Se nível de consciência NÃO identificado → PARAR (tipo de ad depende disso)"
  - "Se dor principal é genérica (ex: 'quer vender mais') → PARAR (ad genérico = CTR baixo)"
  - "Se ângulos < 3 definidos → PARAR (sem diversidade = sem teste real)"
  - "Se linguagem do público NÃO coletada → PARAR (ad com palavras erradas = baixa relevância)"
```

### ✅ CHECKPOINT 1: Diagnóstico Rápido Validado

```yaml
checkpoint:
  nome: "Quick Diagnosis OK"
  validacao:
    - "Nível de consciência determina tipo de ad (educação vs oferta direta)?"
    - "Dor e desejo são específicos o suficiente para criar hooks?"
    - "Ângulos são DIFERENTES entre si (não variações do mesmo)?"
  decisao:
    passa: "Todos ✅ → Avança para Fase 2"
    falha: "Qualquer ❌ → Refinar diagnóstico (mais 10 min)"
```

---

## FASE 2: Criação (45-60 min)

**Objetivo:** Produzir variantes de ads e headlines para teste.

### Step 2.1: Criar Ads de Imagem

```yaml
task: create-ad-copy
agent: "@john-carlton"
quantidade: 5-10 variantes
formatos:
  - feed_facebook: "1:1 ou 4:5"
  - stories: "9:16"
  - feed_instagram: "1:1"

estrutura_por_ad:
  - headline: "Gancho principal"
  - primary_text: "Texto do post (125-250 caracteres ideal)"
  - description: "Texto secundário"
  - cta: "Call to action"

angulos_a_cobrir:
  - "2 ads focados em DOR"
  - "2 ads focados em DESEJO"
  - "2 ads focados em CURIOSIDADE"
  - "1-2 ads com PROVA SOCIAL"
  - "1-2 ads com NOVIDADE/URGÊNCIA"

tempo: 25-30 min
```

### Step 2.2: Criar Headlines para Teste

```yaml
task: create-headlines
agent: "@gary-bencivenga"
quantidade: 15-20 headlines
tipos:
  - how_to: "Como [resultado] sem [objeção]"
  - curiosity: "O [elemento] que [benefício surpreendente]"
  - proof: "[Número] [pessoas] já [resultado]"
  - direct: "[Verbo imperativo] + [benefício]"
  - question: "[Pergunta que gera identificação]?"
  - story: "Como [pessoa] [resultado] em [tempo]"

tempo: 15-20 min
```

### Step 2.3: Variantes de Copy Curta

```yaml
task: create-short-copy
variantes:
  - ultra_curta: "1-2 linhas (stories, TikTok)"
  - curta: "3-4 linhas (feed)"
  - media: "5-7 linhas (feed com mais contexto)"

por_angulo:
  - "3 variantes de cada tamanho"

tempo: 10-15 min
```

**Entregáveis da Fase 2:**
- [ ] 5-10 ads completos (diferentes ângulos)
- [ ] 15-20 headlines para teste
- [ ] Variantes de copy curta para diferentes formatos

### 🛑 VETO CONDITIONS — Fase 2 → Fase 3

```yaml
veto_conditions:
  - "Se ads < 5 → PARAR (volume insuficiente para teste)"
  - "Se headlines < 15 → PARAR (pouca diversidade)"
  - "Se todos os ads usam mesmo ângulo → PARAR (sem diversidade = sem aprendizado)"
  - "Se ads NÃO cobrem pelo menos 3 ângulos (dor, desejo, curiosidade) → PARAR"
```

### ✅ CHECKPOINT 2: Materiais de Criação Completos

```yaml
checkpoint:
  nome: "Criação Completa"
  validacao:
    - "Cada ad tem: headline + primary text + description + CTA?"
    - "Ângulos cobertos: dor, desejo, curiosidade (mínimo 3)?"
    - "Headlines têm variedade de fórmulas (how-to, curiosity, proof, direct)?"
    - "Copy curta tem variantes por tamanho (ultra curta, curta, média)?"
  decisao:
    passa: "Todos ✅ → Avança para Fase 3"
    falha: "Qualquer ❌ → Completar materiais faltantes"
```

---

## FASE 3: Validação Básica (15-20 min)

**Objetivo:** Garantir qualidade mínima antes de subir os ads.

### Step 3.1: Checklist Rápido

```yaml
checklist_por_ad:
  essenciais:
    - [ ] Gancho nos primeiros 3 segundos/palavras?
    - [ ] Benefício claro e específico?
    - [ ] CTA presente e direto?
    - [ ] Linguagem do público?
    - [ ] Sem erros ortográficos?

  facebook_specific:
    - [ ] Menos de 20% texto na imagem?
    - [ ] Não viola políticas (claims, antes/depois)?
    - [ ] Texto primário não cortado no preview?

  performance:
    - [ ] Diferencia dos concorrentes?
    - [ ] Gera curiosidade/interesse?
    - [ ] Promessa believable?
```

### Step 3.2: Sugarman Quick Check

```yaml
task: sugarman-check
modo: rapido
triggers_essenciais:
  - [ ] Curiosidade (16)
  - [ ] Urgência (17)
  - [ ] Especificidade (25)
  - [ ] Envolvimento (1)
  - [ ] Credibilidade (4)

minimo_aceitavel: 3/5 triggers presentes
```

### Step 3.3: Organizar para Upload

```yaml
organizacao:
  formato:
    - "Ad 1 - Ângulo Dor - Variante A"
    - "Ad 1 - Ângulo Dor - Variante B"
    - "Ad 2 - Ângulo Desejo - Variante A"
    - "..."

  prioridade_teste:
    1: "Ads com ângulo mais forte primeiro"
    2: "Headlines mais disruptivas"
    3: "Formatos mais adequados ao objetivo"
```

**Entregáveis da Fase 3:**
- [ ] Checklist aprovado para cada ad
- [ ] Ads organizados por prioridade de teste
- [ ] Documento final para equipe de mídia

### 🛑 VETO CONDITIONS — Fase 3 → Upload

```yaml
veto_conditions:
  - "Se QUALQUER ad viola políticas do Facebook/Instagram → REMOVER (não arriscar ban)"
  - "Se Sugarman Quick Check < 3/5 triggers → PARAR (ad fraco demais)"
  - "Se gancho NÃO para scroll nos primeiros 3 segundos/palavras → REESCREVER"
  - "Se CTA ausente ou confuso em algum ad → CORRIGIR antes de subir"
```

### ✅ CHECKPOINT 3: Pronto para Upload

```yaml
checkpoint:
  nome: "Validação Final para Mídia"
  validacao:
    - "Todos os ads passam no checklist rápido?"
    - "Zero violações de política?"
    - "Mínimo 3/5 triggers Sugarman em cada ad?"
    - "Prioridade de teste definida (qual subir primeiro)?"
  decisao:
    passa: "Todos ✅ → ENTREGA para equipe de mídia"
    falha: "Qualquer ❌ → Corrigir ad específico e re-validar"
```

---

## Templates de Ads por Objetivo

### Ads para Captação de Lead

```
┌─────────────────────────────────────────────────────────────┐
│              TEMPLATE: CAPTAÇÃO DE LEAD                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HEADLINE:                                                 │
│  [Número] [profissionais/pessoas] já descobriram           │
│  [benefício específico]                                    │
│                                                             │
│  PRIMARY TEXT:                                             │
│  [Dor identificável em 1 linha]                            │
│                                                             │
│  Se você [situação do avatar]...                           │
│                                                             │
│  [Teaser do que vai aprender no lead magnet]               │
│                                                             │
│  [CTA: Baixe grátis / Acesse agora / etc]                  │
│                                                             │
│  DESCRIPTION:                                              │
│  [Benefício adicional ou remoção de objeção]               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Ads para Venda Direta

```
┌─────────────────────────────────────────────────────────────┐
│              TEMPLATE: VENDA DIRETA                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HEADLINE:                                                 │
│  [Resultado específico] em [tempo específico]              │
│                                                             │
│  PRIMARY TEXT:                                             │
│  [História curta ou gancho forte]                          │
│                                                             │
│  [Unique mechanism em 1 frase]                             │
│                                                             │
│  [3 bullets de benefícios]                                 │
│  • [Benefício 1]                                           │
│  • [Benefício 2]                                           │
│  • [Benefício 3]                                           │
│                                                             │
│  [Urgência/Escassez]                                       │
│                                                             │
│  [CTA direto]                                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Ads para Retargeting

```
┌─────────────────────────────────────────────────────────────┐
│              TEMPLATE: RETARGETING                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HEADLINE:                                                 │
│  Ainda pensando em [benefício]?                            │
│                                                             │
│  PRIMARY TEXT:                                             │
│  Você viu [produto/oferta] mas ainda não decidiu.          │
│                                                             │
│  Entendo. [Validar objeção principal]                      │
│                                                             │
│  Mas aqui está o que você talvez não saiba:                │
│  [Fato/benefício/prova que remove a objeção]               │
│                                                             │
│  [Urgência específica]                                     │
│                                                             │
│  [CTA: Última chance / Garanta agora / etc]                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Critérios de Sucesso

```yaml
criterios:
  quantidade:
    - "Mínimo 5 ads completos"
    - "Mínimo 15 headlines"
    - "Cobrir pelo menos 3 ângulos diferentes"

  qualidade:
    - "Todos passam no checklist rápido"
    - "Mínimo 3/5 triggers Sugarman"
    - "Zero erros que violam políticas"

  velocidade:
    - "Workflow completo em até 2 horas"
    - "Pronto para upload imediato"
```

---

## Checklist de Entrega Final

### Materiais Produzidos
- [ ] 5-10 ads completos (texto)
- [ ] 15-20 headlines para teste
- [ ] Variantes de copy por tamanho
- [ ] Briefing para design (se necessário)

### Validação
- [ ] Checklist rápido aprovado
- [ ] Triggers essenciais presentes
- [ ] Compliance com políticas de plataforma

### Organização
- [ ] Ads nomeados por ângulo/variante
- [ ] Prioridade de teste definida
- [ ] Documento entregue para mídia

---

## Quick Reference: Ângulos de Ads

```
┌────────────────────────────────────────────────────────────────────┐
│                    ÂNGULOS MAIS EFICAZES                           │
├─────────────┬──────────────────────────────────────────────────────┤
│ ÂNGULO      │ QUANDO USAR                                          │
├─────────────┼──────────────────────────────────────────────────────┤
│ DOR         │ Público consciente do problema, busca solução        │
│ DESEJO      │ Público já sabe o que quer, busca como conseguir     │
│ CURIOSIDADE │ Público frio, precisa de gancho para prestar atenção │
│ PROVA       │ Público cético, precisa de credibilidade             │
│ NOVIDADE    │ Público saturado, precisa de algo diferente          │
│ URGÊNCIA    │ Público interessado mas procrastinador               │
│ CONTRARIAN  │ Público sofisticado, cansado do mesmo de sempre      │
└─────────────┴──────────────────────────────────────────────────────┘
```

---

*Workflow: trafego-pago-rapido v1.0 - High-Ticket Copy Factory*

## Quality Gates
- Todas as pecas de copy passam pelo Oraculo Torriani (10/10)
- Sugarman 30 Triggers verificados (minimo 15 presentes)
- Regras inviolaveis checadas (0 violacoes)
