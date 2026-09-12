# Workflow: High Ticket Sales

```yaml
workflow:
  name: high-ticket-sales
  description: "Workflow completo para vendas de produtos/serviços high-ticket (R$3.000+)"
  estimated_time: "6-10 horas"
  complexity: alta

use_cases:
  - "Mentoria individual ou em grupo"
  - "Consultoria especializada"
  - "Programas de coaching"
  - "Masterminds"
  - "Produtos premium (R$3.000-R$100.000+)"
```

---

## Visão Geral

Este workflow é otimizado para vendas de alto valor, onde a copy precisa construir confiança profunda, demonstrar autoridade e criar valor percebido muito acima do investimento.

```
┌─────────────────────────────────────────────────────────────────────┐
│                   WORKFLOW: HIGH TICKET SALES                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  FASE 1           FASE 2           FASE 3           FASE 4         │
│  Diagnóstico ──▶ Oferta ──▶ Copy Premium ──▶ Validação             │
│  Profundo         Hormozi        Sales Page        Completa        │
│                                  Premium                            │
│                                                                     │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐         │
│  │2-3 horas│    │1-2 horas│    │2-4 horas│    │1-2 horas│         │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘         │
│                                                                     │
│  TOTAL: 6-10 horas                                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## FASE 1: Diagnóstico Profundo (2-3 horas)

**Objetivo:** Entendimento completo do cliente ideal, suas objeções e o valor real da transformação.

### Step 1.1: Avatar High-Ticket

```yaml
task: diagnose-avatar
agent: "@dan-kennedy"
modo: profundo
focus: high_ticket

questions_essenciais:
  demografico:
    - "Qual a faixa de renda do cliente ideal?"
    - "Qual posição/cargo ocupa?"
    - "Há quanto tempo está no mercado?"

  psicografico:
    - "Qual o MAIOR medo profissional/pessoal?"
    - "O que mantém essa pessoa acordada à noite?"
    - "Qual transformação ela mais deseja?"
    - "O que ela já tentou que não funcionou?"
    - "Por que NÃO funcionou (na visão dela)?"

  objecoes_high_ticket:
    - "Quais as 5 principais objeções ao preço?"
    - "Que experiências ruins ela já teve?"
    - "O que faria ela CORRER de uma oferta?"
    - "O que a faria dizer SIM imediatamente?"

  tomada_decisao:
    - "Ela decide sozinha ou precisa consultar alguém?"
    - "Quanto tempo leva para decidir?"
    - "O que a faz confiar em um especialista?"

output:
  - avatar_completo: "Perfil detalhado do buyer high-ticket"
  - mapa_objecoes: "Todas as objeções mapeadas com respostas"
  - triggers_decisao: "O que faz ela comprar"
  - red_flags: "O que afasta essa pessoa"
```

### Step 1.2: Consciência e Sofisticação

```yaml
task: diagnose-awareness-sophistication
agent: "@eugene-schwartz"

analise:
  - nivel_consciencia: "Geralmente Product/Solution Aware para high-ticket"
  - nivel_sofisticacao: "Geralmente 4-5 (já viram de tudo)"

implicacoes:
  - "Evitar promessas clichê"
  - "Focar em COMO é diferente, não O QUE é"
  - "Construir caso lógico E emocional"
  - "Prova massiva necessária"
```

### Step 1.3: Análise Competitiva

```yaml
task: competitive-analysis
analise:
  - "Quem são os 3-5 principais concorrentes?"
  - "Qual o posicionamento de cada um?"
  - "Qual a faixa de preço do mercado?"
  - "Quais promessas já foram feitas?"
  - "Onde estão as GAPS não atendidas?"

output:
  - mapa_competitivo: "Posicionamento dos players"
  - oportunidades: "Gaps de mercado"
  - diferenciacao: "Como se destacar"
```

**Entregáveis da Fase 1:**
- [ ] Avatar high-ticket completo
- [ ] Mapa de objeções com respostas
- [ ] Análise de consciência/sofisticação
- [ ] Análise competitiva
- [ ] Briefing estratégico

### 🛑 VETO CONDITIONS — Fase 1 → Fase 2

```yaml
veto_conditions:
  - "Se avatar NÃO tem objeções ao preço mapeadas → PARAR (high-ticket sem tratamento de preço = fracasso)"
  - "Se análise competitiva NÃO identifica gaps → PARAR (sem diferenciação = commodity)"
  - "Se nível de sofisticação < 3 → VERIFICAR se realmente é high-ticket (público errado?)"
  - "Se triggers de decisão NÃO mapeados → PARAR (sem saber o que faz comprar = copy cega)"
  - "Se red flags NÃO identificados → PARAR (vamos atrair quem não devemos)"
```

### ✅ CHECKPOINT 1: Diagnóstico High-Ticket Validado

```yaml
checkpoint:
  nome: "Diagnóstico Profundo"
  validacao:
    - "Avatar tem mapa de objeções com pelo menos 5 objeções ao preço?"
    - "Análise competitiva identifica pelo menos 1 gap exploravável?"
    - "Triggers de decisão são específicos (não genéricos como 'confiança')?"
    - "Briefing tem profundidade suficiente para Hormozi criar oferta?"
  decisao:
    passa: "Todos ✅ → Avança para Fase 2"
    falha: "Qualquer ❌ → Aprofundar diagnóstico antes de prosseguir"
```

---

## FASE 2: Oferta Hormozi (1-2 horas)

**Objetivo:** Criar uma oferta tão boa que pareça estupidez recusar.

### Step 2.1: Value Equation

```yaml
task: create-offer
agent: "@alex-hormozi"
framework: value_equation

equacao:
  valor = (resultado_desejado x certeza_percebida) /
          (tempo_para_resultado x esforco_necessario)

trabalho:
  - aumentar: "Resultado desejado (específico e desejável)"
  - aumentar: "Certeza percebida (provas, garantias)"
  - diminuir: "Tempo para resultado (atalhos, aceleração)"
  - diminuir: "Esforço necessário (done-for-you, templates)"
```

### Step 2.2: Estrutura da Oferta Premium

```yaml
componentes:
  core_offer:
    nome: "[Nome proprietário impactante]"
    descricao: "A entrega principal"
    valor_real: "R$ X.XXX"
    valor_percebido: "R$ XX.XXX"

  stack:
    modulo_1:
      nome: "[Nome do módulo/entregável]"
      descricao: "O que entrega"
      valor: "R$ X.XXX"
    modulo_2:
      nome: "[Nome do módulo/entregável]"
      descricao: "O que entrega"
      valor: "R$ X.XXX"
    # Continuar até cobrir todas entregas

  bonus_estrategicos:
    bonus_1:
      nome: "[Bônus que remove objeção específica]"
      valor: "R$ X.XXX"
      objecao_removida: "[Qual objeção]"
    bonus_2:
      nome: "[Bônus que acelera resultado]"
      valor: "R$ X.XXX"
      beneficio: "[Como acelera]"

  garantia:
    tipo: "Condicional / Incondicional / Dupla"
    prazo: "X dias"
    condicoes: "[Se condicional, quais condições]"
    nome: "[Nome da garantia - ex: Garantia Resultado ou Reembolso]"

  urgencia_escassez:
    tipo: "Vagas limitadas / Prazo / Bônus expira"
    justificativa: "[Por que é real]"
```

### Step 2.3: Cálculo de Valor Percebido

```yaml
stack_visual:
  formato: |
    ┌─────────────────────────────────────────┐
    │ [Nome do Programa]                      │
    │ Valor: R$ XX.XXX                        │
    ├─────────────────────────────────────────┤
    │ + [Módulo 1]............... R$ X.XXX    │
    │ + [Módulo 2]............... R$ X.XXX    │
    │ + [Módulo 3]............... R$ X.XXX    │
    ├─────────────────────────────────────────┤
    │ BÔNUS:                                  │
    │ + [Bônus 1]................ R$ X.XXX    │
    │ + [Bônus 2]................ R$ X.XXX    │
    │ + [Bônus 3]................ R$ X.XXX    │
    ├─────────────────────────────────────────┤
    │ VALOR TOTAL: R$ XXX.XXX                 │
    │                                         │
    │ INVESTIMENTO HOJE: R$ X.XXX             │
    │ (ou Xx de R$ XXX)                       │
    └─────────────────────────────────────────┘

  regra:
    - "Valor percebido = 10x o preço (mínimo)"
    - "Se vende por R$10k, stack deve mostrar R$100k+ de valor"
```

**Entregáveis da Fase 2:**
- [ ] Oferta completa estruturada
- [ ] Stack com valores
- [ ] Garantia definida
- [ ] Nome proprietário do programa
- [ ] Urgência/escassez definida

### 🛑 VETO CONDITIONS — Fase 2 → Fase 3

```yaml
veto_conditions:
  - "Se valor percebido < 10x preço → PARAR (oferta não é irresistível)"
  - "Se nome do programa NÃO é proprietário → PARAR (sem identidade = genérico)"
  - "Se garantia NÃO remove risco do comprador → PARAR (high-ticket precisa de garantia forte)"
  - "Se urgência/escassez é artificial → PARAR (público sofisticado detecta fake)"
  - "Se stack NÃO tem pelo menos 3 componentes com valor individual → PARAR (stack fraco)"
```

### ✅ CHECKPOINT 2: Oferta Irresistível Validada

```yaml
checkpoint:
  nome: "Oferta Grand Slam"
  validacao:
    - "Value Equation: resultado x certeza / tempo x esforço = valor percebido alto?"
    - "Cada bônus remove uma objeção específica do mapa da Fase 1?"
    - "Garantia é forte o suficiente para público sofisticado?"
    - "Urgência tem justificativa real (não artificial)?"
  decisao:
    passa: "Todos ✅ → Avança para Fase 3"
    falha: "Qualquer ❌ → Volta para Hormozi refinar oferta"
```

---

## FASE 3: Copy Premium (2-4 horas)

**Objetivo:** Criar sales page de alta conversão para público sofisticado.

### Step 3.1: Sales Page Premium

```yaml
task: create-sales-page
agent: "@david-ogilvy"  # Para tom premium/sofisticado
ou: "@gary-halbert"     # Para storytelling forte

estrutura_high_ticket:
  1_headline:
    funcao: "Filtrar e atrair apenas o buyer ideal"
    elementos:
      - "Resultado específico e desejável"
      - "Indicação de exclusividade/premium"
      - "Evitar hype exagerado (credibilidade)"

  2_lead:
    funcao: "Criar conexão profunda e empatia"
    elementos:
      - "Demonstrar que entende a dor REAL"
      - "Mostrar que sabe o que não funciona"
      - "Posicionar como a solução diferente"

  3_story_credibilidade:
    funcao: "Estabelecer autoridade e confiança"
    elementos:
      - "História pessoal relevante"
      - "Credenciais e resultados próprios"
      - "Por que criou esta solução"

  4_problema_agitacao:
    funcao: "Aprofundar a dor antes da solução"
    elementos:
      - "Consequências de não resolver"
      - "Custo da inação"
      - "Por que outras soluções falham"

  5_mecanismo_unico:
    funcao: "Explicar COMO funciona de forma diferente"
    elementos:
      - "Nome proprietário do método"
      - "Framework visual (se possível)"
      - "Por que funciona (lógica)"
      - "Por que é diferente"

  6_prova_massiva:
    funcao: "Construir certeza através de evidência"
    elementos:
      - "Casos de estudo detalhados (3-5)"
      - "Depoimentos em vídeo/texto"
      - "Resultados específicos com números"
      - "Variedade de perfis (relatabilidade)"

  7_oferta:
    funcao: "Apresentar o que está incluso"
    elementos:
      - "Stack visual completo"
      - "Valor de cada componente"
      - "Bônus com justificativa"
      - "Valor total vs investimento"

  8_garantia:
    funcao: "Remover todo risco"
    elementos:
      - "Garantia clara e forte"
      - "Condições transparentes"
      - "Nome da garantia"

  9_objecoes:
    funcao: "Antecipar e resolver dúvidas"
    elementos:
      - "FAQ estratégico"
      - "Objeções transformadas em benefícios"
      - "Para quem É e NÃO É"

  10_cta:
    funcao: "Guiar para ação"
    elementos:
      - "Próximo passo claro"
      - "Múltiplos CTAs ao longo da página"
      - "Urgência reiterada"
```

### Step 3.2: Prova Social Premium

```yaml
task: structure-social-proof
tipos:
  casos_estudo:
    quantidade: "3-5 completos"
    estrutura:
      - situacao_antes: "Contexto e problema"
      - processo: "O que fez no programa"
      - resultado: "Números e transformação"
      - quote: "Depoimento direto"

  depoimentos:
    quantidade: "10-20"
    tipos:
      - "Video testimonials (mais poderosos)"
      - "Screenshots de mensagens"
      - "Depoimentos escritos com foto"
      - "Logos de empresas (B2B)"

  autoridade:
    - "Aparições em mídia"
    - "Livros/publicações"
    - "Clientes notáveis"
    - "Certificações/prêmios"
```

### Step 3.3: Materiais de Suporte

```yaml
materiais_adicionais:
  application_page:
    descricao: "Para high-ticket com aplicação"
    elementos:
      - "Formulário de qualificação"
      - "Perguntas estratégicas"
      - "Expectativa setting"

  call_script:
    descricao: "Se há call de vendas"
    elementos:
      - "Script de discovery"
      - "Apresentação da oferta"
      - "Handling de objeções"

  follow_up_emails:
    descricao: "Sequência pós-aplicação"
    elementos:
      - "Email confirmação"
      - "Email pre-call"
      - "Email follow-up"
```

**Entregáveis da Fase 3:**
- [ ] Sales page premium completa
- [ ] Casos de estudo estruturados
- [ ] Depoimentos organizados
- [ ] Application page (se aplicável)
- [ ] Call script (se aplicável)
- [ ] Emails de follow-up

### 🛑 VETO CONDITIONS — Fase 3 → Fase 4

```yaml
veto_conditions:
  - "Se sales page tem tom de 'vendedor' em vez de premium → PARAR (tom errado = repele high-ticket)"
  - "Se casos de estudo < 3 detalhados → PARAR (prova insuficiente para high-ticket)"
  - "Se hype ou exagero presente na copy → PARAR (público sofisticado rejeita hype)"
  - "Se objeções do mapa da Fase 1 NÃO foram respondidas no FAQ → PARAR (objeções abertas = não compra)"
  - "Se 'Para quem NÃO é' ausente → PARAR (exclusividade é essencial em high-ticket)"
```

### ✅ CHECKPOINT 3: Copy Premium Validada

```yaml
checkpoint:
  nome: "Copy Premium Completa"
  validacao:
    - "Tom é premium e confiante (não hype)?"
    - "Prova social tem variedade (vídeo, texto, números, logos)?"
    - "Mecanismo único está claro e diferenciado?"
    - "Todas as objeções mapeadas na Fase 1 foram endereçadas?"
    - "Application page qualifica adequadamente?"
  decisao:
    passa: "Todos ✅ → Avança para Fase 4"
    falha: "Qualquer ❌ → Volta para copywriter ajustar seção específica"
```

---

## FASE 4: Validação Completa (1-2 horas)

**Objetivo:** Garantir que a copy está no nível de excelência requerido para high-ticket.

### Step 4.1: Auditoria Hopkins

```yaml
task: audit-copy
agent: "@claude-hopkins"
foco: high_ticket

criterios_especiais:
  - "Credibilidade impecável"
  - "Zero hype ou exagero"
  - "Provas para cada claim"
  - "Tom premium consistente"
  - "Fluxo lógico perfeito"

minimo_aceitavel: 85/100
```

### Step 4.2: Sugarman Check

```yaml
task: sugarman-check
foco: high_ticket

triggers_criticos_high_ticket:
  - "Credibilidade (4)" - OBRIGATÓRIO
  - "Integridade (3)" - OBRIGATÓRIO
  - "Prova de Valor (5)" - OBRIGATÓRIO
  - "Autoridade (8)" - OBRIGATÓRIO
  - "Justificativa (6)" - OBRIGATÓRIO
  - "Exclusividade (19)" - OBRIGATÓRIO

minimo_aceitavel: 22/30 (sendo todos os críticos presentes)
```

### Step 4.3: Checklist High-Ticket

```yaml
checklist_especifico:
  credibilidade:
    - [ ] Todas as promessas têm prova?
    - [ ] Números são específicos e verificáveis?
    - [ ] Há casos de estudo detalhados?
    - [ ] Depoimentos são de pessoas reais com contexto?

  tom_premium:
    - [ ] Evita linguagem de "vendedor"?
    - [ ] Tom confiante mas não arrogante?
    - [ ] Linguagem do nível do buyer?
    - [ ] Sem hype exagerado ou clichês?

  objecoes:
    - [ ] Preço justificado adequadamente?
    - [ ] Objeções principais respondidas?
    - [ ] Garantia remove risco?
    - [ ] "Para quem não é" presente?

  processo:
    - [ ] Próximos passos claros?
    - [ ] Expectativas alinhadas?
    - [ ] Processo de compra simples?
    - [ ] Suporte/contato disponível?
```

### Step 4.4: Revisão Final

```yaml
revisao:
  1: "Compilar feedback de Hopkins e Sugarman"
  2: "Verificar checklist high-ticket"
  3: "Ajustar pontos fracos"
  4: "Re-validar se score aumentou"
  5: "Aprovar para publicação"

criterio_aprovacao:
  - "Hopkins score >= 85"
  - "Sugarman >= 22/30 com críticos presentes"
  - "Checklist high-ticket 100% completo"
```

**Entregáveis da Fase 4:**
- [ ] Relatório Hopkins (score >= 85)
- [ ] Relatório Sugarman (score >= 22)
- [ ] Checklist high-ticket aprovado
- [ ] Versão final revisada
- [ ] Aprovação para publicação

### 🛑 VETO CONDITIONS — Fase 4 → Publicação

```yaml
veto_conditions:
  - "Se Hopkins score < 85 → PARAR (padrão high-ticket é mais alto que normal)"
  - "Se Sugarman < 22/30 → PARAR (gatilhos insuficientes)"
  - "Se triggers críticos (Credibilidade, Integridade, Autoridade) AUSENTES → PARAR (obrigatórios para high-ticket)"
  - "Se checklist high-ticket NÃO está 100% → PARAR (zero exceções)"
  - "Se versão NÃO foi re-validada após ajustes → PARAR (ajuste sem verificação = risco)"
```

### ✅ CHECKPOINT 4: Aprovação Final High-Ticket

```yaml
checkpoint:
  nome: "Validação Final High-Ticket"
  validacao:
    - "Hopkins >= 85 em TODAS as peças?"
    - "Sugarman >= 22/30 com TODOS os 6 triggers críticos presentes?"
    - "Checklist high-ticket 100% completo?"
    - "Tom premium consistente do início ao fim?"
    - "Zero hype, zero exagero, zero claims não suportados?"
  decisao:
    passa: "Todos ✅ → APROVADO PARA PUBLICAÇÃO"
    falha: "Qualquer ❌ → Volta para ajustes específicos e re-validação"
```

---

## Critérios de Sucesso

```yaml
criterios:
  conversao:
    - "Taxa aplicação: 5-15% visitantes"
    - "Taxa fechamento (call): 20-40%"
    - "ROI campanha: mínimo 3x"

  qualidade:
    - "Hopkins score >= 85"
    - "Sugarman >= 22/30"
    - "Zero objeções não respondidas"
    - "Tom premium consistente"

  completude:
    - "Sales page completa"
    - "Oferta estruturada com stack"
    - "Mínimo 3 casos de estudo"
    - "Application page (se aplicável)"
    - "Follow-up emails (se aplicável)"
```

---

## Checklist de Entrega Final

### Estratégia
- [ ] Avatar high-ticket documentado
- [ ] Mapa de objeções com respostas
- [ ] Análise competitiva
- [ ] Posicionamento definido

### Oferta
- [ ] Nome proprietário do programa
- [ ] Stack completo com valores
- [ ] Bônus estratégicos
- [ ] Garantia definida
- [ ] Urgência/escassez real

### Copy
- [ ] Sales page premium
- [ ] Casos de estudo (3-5)
- [ ] Depoimentos organizados
- [ ] Application page
- [ ] Call script
- [ ] Follow-up emails

### Validação
- [ ] Hopkins >= 85
- [ ] Sugarman >= 22
- [ ] Checklist high-ticket aprovado

---

*Workflow: high-ticket-sales v1.0 - High-Ticket Copy Factory*

## Quality Gates
- Todas as pecas de copy passam pelo Oraculo Torriani (10/10)
- Sugarman 30 Triggers verificados (minimo 15 presentes)
- Regras inviolaveis checadas (0 violacoes)
