# Workflow: Otimizacao de Funil

```yaml
workflow:
  name: otimizacao-funil
  description: "Workflow para auditoria completa e otimizacao incremental de funis de vendas"
  estimated_time: "4-8 horas (completo) | 1-2h (incremental)"
  complexity: alta

use_cases:
  - "Funil com baixa conversao"
  - "Escalar funil existente"
  - "Diagnosticar gargalos"
  - "Melhorias continuas"
  - "Turnaround de campanha"
```

---

## Visao Geral

Este workflow aplica metodologia cientifica (Hopkins) para identificar e corrigir problemas em funis existentes, maximizando conversoes em cada etapa.

```
┌─────────────────────────────────────────────────────────────────────┐
│                  WORKFLOW: OTIMIZACAO DE FUNIL                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  FASE 1        FASE 2         FASE 3         FASE 4       FASE 5   │
│  Auditoria ─▶ Gargalos ──▶ Otimizacao ──▶ Validacao ──▶ Oraculo    │
│  Completa     Identificados  Implementada   Resultados    (gate)    │
│                                                                     │
│  ┌─────────┐  ┌─────────┐   ┌─────────┐   ┌─────────┐  ┌────────┐ │
│  │2-3 horas│  │1 hora   │   │2-3 horas│   │1 hora   │  │30-60min│ │
│  └─────────┘  └─────────┘   └─────────┘   └─────────┘  └────────┘ │
│                                                                     │
│  CICLO (Fases 1-4) SE REPETE ATE ATINGIR METAS                     │
│  FASE 5 e gate obrigatorio: nenhuma copy publica sem passar         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## FASE 1: Auditoria Completa (2-3 horas)

**Objetivo:** Mapear todo o funil e coletar dados de cada etapa.

### Step 1.1: Mapeamento do Funil

```yaml
task: map-funnel
processo:
  1: "Identificar todas as etapas do funil"
  2: "Documentar cada peca de copy"
  3: "Coletar metricas de cada etapa"

template_mapeamento:
  etapa_1_trafego:
    origem:
      - "Facebook Ads"
      - "Google Ads"
      - "Organico"
      - "Email"
      - "Outro"
    metricas:
      - impressoes: "X"
      - cliques: "X"
      - ctr: "X%"
      - cpc: "R$ X"
    pecas:
      - "Ads (listar todos)"
      - "Headlines"

  etapa_2_captura:
    tipo: "Landing page / Opt-in"
    metricas:
      - visitantes: "X"
      - leads: "X"
      - taxa_conversao: "X%"
      - cpl: "R$ X"
    pecas:
      - "Landing page copy"
      - "Form fields"
      - "Thank you page"

  etapa_3_nurturing:
    tipo: "Email sequence / Conteudo"
    metricas:
      - open_rate: "X%"
      - click_rate: "X%"
      - unsubscribe_rate: "X%"
    pecas:
      - "Email sequence"
      - "Conteudo de aquecimento"

  etapa_4_venda:
    tipo: "Sales page / VSL / Call"
    metricas:
      - visitantes_pagina: "X"
      - inicios_checkout: "X"
      - vendas: "X"
      - taxa_conversao: "X%"
      - ticket_medio: "R$ X"
    pecas:
      - "Sales page"
      - "VSL"
      - "Checkout page"

  etapa_5_upsell:
    tipo: "Order bump / Upsell"
    metricas:
      - oferecidos: "X"
      - aceitos: "X"
      - taxa_aceitacao: "X%"
    pecas:
      - "Copy order bump"
      - "Copy upsell"

output:
  - mapa_funil: "Documento com todas as etapas"
  - metricas_atuais: "Numeros de cada etapa"
  - pecas_listadas: "Todas as copys identificadas"
```

### Step 1.2: Auditoria de Cada Peca

```yaml
task: audit-all-pieces
agent: "@claude-hopkins"

por_peca:
  1: "Aplicar checklist Hopkins"
  2: "Calcular score"
  3: "Identificar problemas"
  4: "Documentar recomendacoes"

output_por_peca:
  - score: "X/100"
  - problemas: "Lista priorizada"
  - recomendacoes: "Melhorias especificas"
```

### Step 1.3: Sugarman Check Global

```yaml
task: sugarman-check
aplicacao: "Verificar triggers ao longo do funil"

analise:
  - "Quais triggers estao presentes no funil?"
  - "Onde estao os gaps?"
  - "Consistencia entre etapas?"

output:
  - triggers_por_etapa: "Mapa de triggers"
  - gaps_identificados: "Triggers faltando"
```

**Entregaveis da Fase 1:**
- [ ] Mapa completo do funil
- [ ] Metricas de cada etapa
- [ ] Score Hopkins de cada peca
- [ ] Analise Sugarman do funil
- [ ] Documento consolidado de auditoria

### 🛑 VETO CONDITIONS — Fase 1 → Fase 2

```yaml
veto_conditions:
  - "Se mapa do funil NÃO tem métricas reais (só estimativas) → PARAR (otimizar sem dados = achismo)"
  - "Se alguma etapa NÃO tem peça de copy mapeada → PARAR (gap invisível)"
  - "Se score Hopkins NÃO calculado para cada peça → PARAR (sem baseline = sem comparação)"
  - "Se metricas têm menos de 7 dias de dados → PARAR (amostra insuficiente)"
```

### ✅ CHECKPOINT 1: Auditoria Completa

```yaml
checkpoint:
  nome: "Auditoria Validada"
  validacao:
    - "Todas as etapas do funil mapeadas (tráfego → captura → nurturing → venda → upsell)?"
    - "Métricas de cada etapa são reais e atualizadas?"
    - "Score Hopkins calculado para CADA peça de copy?"
    - "Sugarman Check identificou gaps de triggers?"
  decisao:
    passa: "Todos ✅ → Avança para Fase 2"
    falha: "Qualquer ❌ → Completar auditoria antes de prosseguir"
```

---

## FASE 2: Identificar Gargalos (1 hora)

**Objetivo:** Priorizar onde focar a otimizacao para maior impacto.

### Step 2.1: Analise de Drop-offs

```yaml
task: analyze-dropoffs
metodo: "Identificar onde esta perdendo mais conversoes"

calculo:
  por_etapa:
    entrada: "X"
    saida: "Y"
    drop_off: "X - Y = Z"
    percentual: "(Z/X) * 100 = W%"

priorizacao:
  maior_drop_off: "Onde perde mais em volume absoluto"
  maior_impacto: "Onde melhoria teria maior efeito no resultado final"

formula_impacto:
  resultado_potencial = "conversao_atual * (1 + melhoria_esperada) * valor_venda"
```

### Step 2.2: Identificar Gargalo Principal

```yaml
task: identify-bottleneck
analise:
  pergunta_1: "Qual etapa tem menor conversao vs benchmark?"
  pergunta_2: "Qual etapa, se melhorada 20%, teria maior impacto no resultado?"
  pergunta_3: "Qual etapa tem score Hopkins mais baixo?"

benchmarks_referencia:
  ctr_ads: "1-3%"
  conversao_lp: "20-40%"
  open_rate_email: "20-30%"
  click_rate_email: "2-5%"
  conversao_sales_page: "1-5%"
  taxa_upsell: "10-30%"

output:
  gargalo_principal: "Etapa X"
  justificativa: "Por que e o gargalo"
  impacto_potencial: "Melhoria de X% = R$ Y adicional"
```

### Step 2.3: Plano de Prioridades

```yaml
task: prioritize-fixes
criterios:
  - impacto: "Quanto vai melhorar o resultado?"
  - esforco: "Quanto trabalho para implementar?"
  - velocidade: "Quanto tempo para ver resultado?"

matriz_priorizacao:
  alta_prioridade: "Alto impacto + Baixo esforco"
  media_prioridade: "Alto impacto + Alto esforco"
  baixa_prioridade: "Baixo impacto"

output:
  lista_priorizada:
    1: "Otimizacao X (impacto alto, esforco baixo)"
    2: "Otimizacao Y (impacto alto, esforco medio)"
    3: "Otimizacao Z (impacto medio, esforco baixo)"
```

**Entregaveis da Fase 2:**
- [ ] Analise de drop-offs por etapa
- [ ] Gargalo principal identificado
- [ ] Lista de otimizacoes priorizadas
- [ ] Estimativa de impacto de cada uma

### 🛑 VETO CONDITIONS — Fase 2 → Fase 3

```yaml
veto_conditions:
  - "Se gargalo NÃO identificado com dados → PARAR (otimizar sem foco = desperdício)"
  - "Se lista de prioridades NÃO tem critério de impacto vs esforço → PARAR (pode otimizar errado)"
  - "Se drop-off calculado sem volume significativo → PARAR (conclusão estatisticamente fraca)"
  - "Se múltiplos gargalos com mesma prioridade → ESCOLHER UM (não otimizar tudo ao mesmo tempo)"
```

### ✅ CHECKPOINT 2: Gargalo Priorizado

```yaml
checkpoint:
  nome: "Foco Definido"
  validacao:
    - "Gargalo principal identificado com dados concretos?"
    - "Estimativa de impacto calculada (melhoria de X% = R$ Y)?"
    - "Lista priorizada: alto impacto + baixo esforço primeiro?"
    - "Volume de dados suficiente para conclusão confiável?"
  decisao:
    passa: "Todos ✅ → Avança para Fase 3"
    falha: "Qualquer ❌ → Coletar mais dados ou refinar análise"
```

---

## FASE 3: Otimizacao (2-3 horas)

**Objetivo:** Implementar melhorias no gargalo principal.

### Step 3.1: Otimizar Gargalo Principal

```yaml
task: optimize-bottleneck
processo:
  1: "Revisar score Hopkins da peca"
  2: "Revisar triggers Sugarman faltantes"
  3: "Implementar melhorias priorizadas"
  4: "Criar variantes para teste"

por_tipo_de_gargalo:
  ads:
    agent: "@john-carlton"
    acoes:
      - "Novos hooks"
      - "Novos angulos"
      - "Novas headlines"
      - "Variacoes de copy"

  landing_page:
    agent: "@gary-halbert"
    acoes:
      - "Melhorar headline"
      - "Otimizar lead"
      - "Adicionar prova social"
      - "Simplificar form"

  email_sequence:
    agent: "@ben-settle"
    acoes:
      - "Novos assuntos"
      - "Reescrever emails fracos"
      - "Adicionar emails"
      - "Ajustar timing"

  sales_page:
    agent: "@gary-halbert"
    acoes:
      - "Fortalecer headline"
      - "Melhorar lead"
      - "Adicionar prova"
      - "Clarificar oferta"
      - "Fortalecer garantia"
      - "Otimizar CTAs"

  checkout:
    acoes:
      - "Simplificar processo"
      - "Adicionar prova social"
      - "Reforcar garantia"
      - "Trust badges"
```

### Step 3.2: Criar Variantes para Teste

```yaml
task: create-test-variants
filosofia_hopkins: "Sempre testar, nunca assumir"

por_elemento:
  headlines:
    quantidade: "3-5 variantes"
    tipos:
      - "Foco em dor"
      - "Foco em desejo"
      - "Foco em curiosidade"
      - "Foco em prova"

  leads:
    quantidade: "2-3 variantes"
    tipos:
      - "Historia"
      - "Problema-agitacao"
      - "Estatistica impactante"

  ofertas:
    quantidade: "2-3 variantes"
    variacoes:
      - "Stack diferente"
      - "Bonus diferente"
      - "Garantia diferente"

output:
  - variantes_criadas: "Documento com todas as variantes"
  - plano_teste: "O que testar primeiro"
```

### Step 3.3: Implementar Melhorias

```yaml
task: implement-improvements
processo:
  1: "Versao atual salva como controle"
  2: "Nova versao implementada"
  3: "Configurar split test (se possivel)"
  4: "Verificar tudo funcionando"

checklist_implementacao:
  - [ ] Backup da versao atual
  - [ ] Nova versao implementada
  - [ ] Links funcionando
  - [ ] Tracking configurado
  - [ ] Split test configurado
  - [ ] Pronto para rodar
```

**Entregaveis da Fase 3:**
- [ ] Pecas otimizadas
- [ ] Variantes para teste criadas
- [ ] Implementacao feita
- [ ] Testes configurados

### 🛑 VETO CONDITIONS — Fase 3 → Fase 4

```yaml
veto_conditions:
  - "Se versão controle NÃO salva como backup → PARAR (sem rollback possível)"
  - "Se variantes < 2 para elemento principal → PARAR (sem teste A/B real)"
  - "Se tracking NÃO configurado → PARAR (não vai conseguir medir resultado)"
  - "Se otimização NÃO focou no gargalo da Fase 2 → PARAR (perdeu o foco)"
```

### ✅ CHECKPOINT 3: Otimização Implementada

```yaml
checkpoint:
  nome: "Implementação Pronta"
  validacao:
    - "Backup da versão atual (controle) salvo?"
    - "Nova versão implementada e funcionando?"
    - "Split test configurado corretamente?"
    - "Tracking verificado (links, pixels, UTMs)?"
  decisao:
    passa: "Todos ✅ → Avança para Fase 4 (medir resultados)"
    falha: "Qualquer ❌ → Corrigir antes de rodar teste"
```

---

## FASE 4: Validacao e Resultados (1 hora+)

**Objetivo:** Medir impacto das otimizacoes e iterar.

### Step 4.1: Medir Resultados

```yaml
task: measure-results
tempo_minimo: "7 dias ou significancia estatistica"

metricas_antes_depois:
  - metrica: "Taxa de conversao"
    antes: "X%"
    depois: "Y%"
    melhoria: "+Z%"

  - metrica: "Custo por aquisicao"
    antes: "R$ X"
    depois: "R$ Y"
    economia: "R$ Z"

  - metrica: "Receita"
    antes: "R$ X"
    depois: "R$ Y"
    aumento: "+R$ Z"

analise_estatistica:
  - "Resultado e estatisticamente significativo?"
  - "Volume suficiente para conclusao?"
  - "Fatores externos podem ter influenciado?"
```

### Step 4.2: Documentar Aprendizados

```yaml
task: document-learnings
registro:
  - hipotese: "O que acreditavamos"
  - teste: "O que testamos"
  - resultado: "O que aconteceu"
  - conclusao: "O que aprendemos"
  - proximos_passos: "O que fazer agora"

adicionar_ao_knowledge_base:
  - "Ganchos que funcionaram"
  - "Angulos que nao funcionaram"
  - "Padroes identificados"
```

### Step 4.3: Planejar Proxima Iteracao

```yaml
task: plan-next-iteration
processo:
  1: "Atualizar mapa do funil com novos numeros"
  2: "Recalcular gargalos"
  3: "Priorizar proxima otimizacao"
  4: "Repetir ciclo"

ciclo_continuo:
  - "Nunca parar de otimizar"
  - "Sempre ter um teste rodando"
  - "Documentar tudo"
```

**Entregaveis da Fase 4:**
- [ ] Resultados medidos e documentados
- [ ] Aprendizados registrados
- [ ] Proxima iteracao planejada
- [ ] Knowledge base atualizada

### 🛑 VETO CONDITIONS — Fase 4 → Próxima Iteração

```yaml
veto_conditions:
  - "Se resultado NÃO tem significância estatística → PARAR (não concluir com dados insuficientes)"
  - "Se aprendizados NÃO documentados → PARAR (erro vai se repetir)"
  - "Se melhoria < 5% → INVESTIGAR (pode ser ruído estatístico)"
  - "Se fatores externos influenciaram → PARAR e isolar variáveis"
```

### ✅ CHECKPOINT 4: Ciclo Completo

```yaml
checkpoint:
  nome: "Resultados Validados"
  validacao:
    - "Resultado é estatisticamente significativo (volume suficiente)?"
    - "Hipótese confirmada ou refutada com dados?"
    - "Aprendizados documentados no knowledge base?"
    - "Próxima iteração planejada com novo gargalo identificado?"
  decisao:
    passa: "Todos OK: implementar vencedor, seguir para FASE 5 (validacao Oraculo) antes de publicar, depois iniciar novo ciclo"
    falha: "Qualquer ❌ → Estender período de teste ou investigar"
```

---

## Framework de Diagnostico por Etapa

### Diagnostico: Ads

```
┌─────────────────────────────────────────────────────────────┐
│                 DIAGNOSTICO: ADS                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SE CTR < 1%:                                              │
│  - Problema de GANCHO (nao para o scroll)                  │
│  - Problema de TARGETING (publico errado)                  │
│  - Problema de CRIATIVO (visual nao chama atencao)         │
│                                                             │
│  SE CTR bom mas CPC alto:                                  │
│  - Problema de COMPETICAO (leilao caro)                    │
│  - Problema de RELEVANCE SCORE                             │
│                                                             │
│  ACOES:                                                    │
│  1. Testar novos hooks                                     │
│  2. Testar novos angulos                                   │
│  3. Revisar targeting                                      │
│  4. Testar novos criativos                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Diagnostico: Landing Page

```
┌─────────────────────────────────────────────────────────────┐
│              DIAGNOSTICO: LANDING PAGE                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SE conversao < 20%:                                       │
│  - Problema de HEADLINE (nao gera interesse)               │
│  - Problema de CONGRUENCIA (ad promete X, LP fala Y)       │
│  - Problema de VALOR (oferta fraca)                        │
│  - Problema de FRICCAO (muitos campos, pagina lenta)       │
│                                                             │
│  ACOES:                                                    │
│  1. Testar novas headlines                                 │
│  2. Verificar match com ads                                │
│  3. Fortalecer oferta do lead magnet                       │
│  4. Reduzir campos do form                                 │
│  5. Melhorar velocidade da pagina                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Diagnostico: Email Sequence

```
┌─────────────────────────────────────────────────────────────┐
│              DIAGNOSTICO: EMAIL SEQUENCE                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SE open rate < 20%:                                       │
│  - Problema de ASSUNTO (nao gera curiosidade)              │
│  - Problema de FROM NAME (nao reconhecem)                  │
│  - Problema de TIMING (horario ruim)                       │
│  - Problema de DELIVERABILITY (spam)                       │
│                                                             │
│  SE open bom mas click < 2%:                               │
│  - Problema de CONTEUDO (nao engaja)                       │
│  - Problema de CTA (fraco ou confuso)                      │
│  - Problema de RELEVANCIA (nao interessa)                  │
│                                                             │
│  ACOES:                                                    │
│  1. Testar novos assuntos                                  │
│  2. Revisar timing                                         │
│  3. Melhorar qualidade do conteudo                         │
│  4. Fortalecer CTAs                                        │
│  5. Verificar deliverability                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Diagnostico: Sales Page

```
┌─────────────────────────────────────────────────────────────┐
│               DIAGNOSTICO: SALES PAGE                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SE conversao < 1%:                                        │
│  - Problema de HEADLINE (nao prende)                       │
│  - Problema de LEAD (perde atencao)                        │
│  - Problema de OFERTA (valor percebido baixo)              │
│  - Problema de PROVA (falta credibilidade)                 │
│  - Problema de OBJECOES (nao respondidas)                  │
│  - Problema de CTA (fraco ou escondido)                    │
│                                                             │
│  SE scroll bom mas checkout baixo:                         │
│  - Problema de OFERTA                                      │
│  - Problema de PRECO                                       │
│  - Problema de GARANTIA                                    │
│  - Problema de URGENCIA                                    │
│                                                             │
│  ACOES (ordem de impacto):                                 │
│  1. Testar headlines                                       │
│  2. Fortalecer lead                                        │
│  3. Adicionar mais prova                                   │
│  4. Clarificar oferta                                      │
│  5. Fortalecer garantia                                    │
│  6. Adicionar urgencia real                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Criterios de Sucesso

```yaml
criterios:
  por_ciclo:
    - "Gargalo principal identificado"
    - "Otimizacao implementada"
    - "Resultados medidos"
    - "Aprendizados documentados"

  metricas_alvo:
    - "Melhoria minima de 10% por ciclo"
    - "ROI positivo das otimizacoes"
    - "Reducao de CPA"
    - "Aumento de conversao geral"

  longo_prazo:
    - "Funil consistentemente otimizado"
    - "Knowledge base de aprendizados"
    - "Processo replicavel"
```

---

## Checklist de Otimizacao

### Por Ciclo
- [ ] Auditoria completa realizada
- [ ] Gargalo principal identificado
- [ ] Otimizacoes priorizadas
- [ ] Variantes criadas
- [ ] Testes implementados
- [ ] Resultados medidos
- [ ] Aprendizados documentados
- [ ] Proxima iteracao planejada

### Gate de Publicacao (Fase 5 — obrigatorio antes de qualquer copy ir ao ar)
- [ ] V1 Regras Inviolaveis: 0 violacoes (RU-01 a RU-03, RA-01 a RA-05 se ads, CL-01 a CL-38)
- [ ] V2 Regras de Craft: menos de 3 violacoes (RC-01 a RC-10)
- [ ] V3 Oraculo Torriani: 10/10
- [ ] V4 Sugarman 30 Triggers: minimo 15 presentes

### Por Mes
- [ ] Review geral do funil
- [ ] Benchmarks atualizados
- [ ] Knowledge base atualizada
- [ ] Metas revisadas

---

## FASE 5: Validação Oráculo (OBRIGATÓRIA)

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

*Workflow: otimizacao-funil v1.0 - High-Ticket Copy Factory*

## Quality Gates
- Todas as pecas de copy passam pelo Oraculo Torriani (10/10)
- Sugarman 30 Triggers verificados (minimo 15 presentes)
- Regras inviolaveis checadas (0 violacoes)
