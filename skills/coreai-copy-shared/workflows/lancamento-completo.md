# Workflow: Lançamento Completo

```yaml
workflow:
  name: lancamento-completo
  description: "Workflow completo para lançamento de produto digital high-ticket"
  estimated_time: "4-8 horas"
  complexity: alta

use_cases:
  - "Lançamento de infoproduto high-ticket"
  - "Lançamento de mentoria/consultoria"
  - "Campanha de vendas completa"
  - "PLF (Product Launch Formula)"
```

---

## Visão Geral

Este workflow orquestra todas as fases necessárias para criar uma campanha de lançamento completa, desde o diagnóstico estratégico até a validação final de todo material produzido.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    WORKFLOW: LANÇAMENTO COMPLETO                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  FASE 1          FASE 2          FASE 3          FASE 4            │
│  Diagnóstico ──▶ Estratégia ──▶ Criação ──▶ Validação              │
│                                                                     │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐          │
│  │Awareness│    │Big Idea │    │Sales    │    │Audit    │          │
│  │Avatar   │    │Mechanism│    │Page     │    │Copy     │          │
│  │Position │    │Offer    │    │VSL      │    │Sugarman │          │
│  └─────────┘    └─────────┘    │Emails   │    │Check    │          │
│                                └─────────┘    └─────────┘          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## FASE 1: Diagnóstico Completo (Tier 1)

**Objetivo:** Entender profundamente o contexto antes de criar qualquer copy.

### Step 1.1: Diagnóstico de Consciência

```yaml
task: diagnose-awareness
agent: "@eugene-schwartz"
input:
  - produto: "Descrição do produto/serviço"
  - mercado: "Informações sobre o mercado"
  - publico: "Descrição do público-alvo"
output:
  - nivel_consciencia: "Unaware / Problem Aware / Solution Aware / Product Aware / Most Aware"
  - implicacoes: "Como isso afeta a copy"
```

### Step 1.2: Diagnóstico de Avatar

```yaml
task: diagnose-avatar
agent: "@dan-kennedy"
input:
  - produto: "Descrição do produto"
  - mercado: "Informações sobre o mercado"
output:
  - avatar_completo: "Perfil demográfico e psicográfico"
  - dores_profundas: "Medos, frustrações, desejos"
  - linguagem: "Palavras e expressões do público"
```

### Step 1.3: Diagnóstico de Sofisticação

```yaml
task: diagnose-sophistication
agent: "@eugene-schwartz"
input:
  - mercado: "Estado atual do mercado"
  - concorrentes: "O que já foi prometido"
output:
  - nivel_sofisticacao: "1-5"
  - estrategia_diferenciacao: "Como se destacar"
```

**Entregáveis da Fase 1:**
- [ ] Nível de consciência definido
- [ ] Avatar completo documentado
- [ ] Nível de sofisticação identificado
- [ ] Briefing estratégico compilado

### 🛑 VETO CONDITIONS — Fase 1 → Fase 2

```yaml
veto_conditions:
  - "Se nível de consciência NÃO foi definido → PARAR (sem isso, toda copy será genérica)"
  - "Se avatar NÃO tem dores profundas mapeadas → PARAR (copy sem dor = copy morta)"
  - "Se nível de sofisticação NÃO identificado → PARAR (risco de promessa clichê)"
  - "Se briefing estratégico está incompleto ou vago → PARAR (lixo entra, lixo sai)"
```

### ✅ CHECKPOINT 1: Diagnóstico Validado

```yaml
checkpoint:
  nome: "Diagnóstico Completo"
  validacao:
    - "Nível de consciência está entre os 5 níveis de Schwartz? (não inventado)"
    - "Avatar tem pelo menos 3 dores profundas específicas (não genéricas)?"
    - "Sofisticação do mercado foi baseada em análise real de concorrentes?"
    - "Briefing tem informações suficientes para Todd Brown criar Big Idea?"
  decisao:
    passa: "Todos os critérios ✅ → Avança para Fase 2"
    falha: "Qualquer critério ❌ → Volta para Step que falhou"
```

---

## FASE 2: Estratégia (Tier 1)

**Objetivo:** Criar a fundação estratégica que guiará toda a copy.

### Step 2.1: Criar Big Idea

```yaml
task: create-big-idea
agent: "@todd-brown"
input:
  - diagnostico: "Output da Fase 1"
  - produto: "Características do produto"
output:
  - big_idea: "Ideia central diferenciadora"
  - emotional_appeal: "Apelo emocional principal"
  - intellectual_appeal: "Apelo intelectual principal"
```

### Step 2.2: Criar Unique Mechanism

```yaml
task: create-unique-mechanism
agent: "@todd-brown"
input:
  - big_idea: "Output do step anterior"
  - produto: "Como o produto funciona"
output:
  - mechanism: "Mecanismo único proprietário"
  - nome: "Nome do mecanismo"
  - explicacao: "Como apresentar na copy"
```

### Step 2.3: Criar Oferta Grand Slam

```yaml
task: create-offer
agent: "@alex-hormozi"
input:
  - diagnostico: "Output da Fase 1"
  - big_idea: "Output da Fase 2"
  - preco: "Faixa de preço pretendida"
output:
  - oferta_completa: "Estrutura da oferta"
  - stack: "Lista de entregáveis"
  - bonus: "Bônus estratégicos"
  - garantia: "Estrutura de garantia"
  - valor_percebido: "Cálculo de valor"
```

**Entregáveis da Fase 2:**
- [ ] Big Idea validada
- [ ] Unique Mechanism nomeado e explicado
- [ ] Oferta completa estruturada
- [ ] Document estratégico finalizado

### 🛑 VETO CONDITIONS — Fase 2 → Fase 3

```yaml
veto_conditions:
  - "Se Big Idea NÃO tem nome proprietário → PARAR (sem diferencial = commodity)"
  - "Se Unique Mechanism é copiável por concorrente → PARAR (não cria categoria)"
  - "Se oferta NÃO tem valor percebido >= 10x preço → PARAR (oferta fraca)"
  - "Se Big Idea score < 7/10 no framework Todd Brown → PARAR (ideia fraca)"
  - "Se garantia NÃO definida → PARAR (sem garantia = alta fricção)"
```

### ✅ CHECKPOINT 2: Estratégia Aprovada

```yaml
checkpoint:
  nome: "Estratégia Validada"
  validacao:
    - "Big Idea passa no teste: 'concorrente poderia copiar mudando nome?' Se SIM → REPROVA"
    - "Mecanismo tem nome próprio e explicação visual?"
    - "Oferta tem stack com valores e bônus estratégicos?"
    - "Documento estratégico é suficiente para copywriter executar sem perguntas?"
  decisao:
    passa: "Todos os critérios ✅ → Avança para Fase 3"
    falha: "Qualquer critério ❌ → Volta para Todd Brown / Hormozi refinar"
```

---

## FASE 3: Criação (Tier 2)

**Objetivo:** Produzir todos os materiais de copy necessários para o lançamento.

### Step 3.1: Criar Sales Page

```yaml
task: create-sales-page
agent: "@gary-halbert"
input:
  - estrategia: "Output da Fase 2"
  - diagnostico: "Output da Fase 1"
output:
  - sales_page: "Copy completa da página de vendas"
  - headlines: "Variantes de headline"
  - bullets: "Fascinations/bullets"
```

### Step 3.2: Criar VSL Script

```yaml
task: create-vsl
agent: "@jon-benson"
input:
  - estrategia: "Output da Fase 2"
  - sales_page: "Para manter consistência"
output:
  - vsl_script: "Roteiro completo do VSL"
  - timing: "Marcações de tempo"
  - ctas: "Momentos de CTA"
```

### Step 3.3: Criar Sequência de Emails

```yaml
task: create-email-sequence
agent: "@andre-chaperon"
input:
  - estrategia: "Output da Fase 2"
  - tipo: "Lançamento"
output:
  - sequencia_lancamento: "Emails de pré-lançamento"
  - sequencia_abertura: "Emails de carrinho aberto"
  - sequencia_fechamento: "Emails de fechamento/escassez"
```

### Step 3.4: Criar Ads e Headlines (Paralelo)

```yaml
tasks_paralelas:
  - task: create-ad-copy
    agent: "@john-carlton"
    output: "Anúncios para tráfego pago"

  - task: create-headlines
    agent: "@gary-bencivenga"
    output: "Headlines e bullets adicionais"
```

**Entregáveis da Fase 3:**
- [ ] Sales page completa
- [ ] VSL script finalizado
- [ ] Sequência de emails (15-20 emails)
- [ ] Ads para Facebook/Instagram (5-10 variantes)
- [ ] Headlines para testes

### 🛑 VETO CONDITIONS — Fase 3 → Fase 4

```yaml
veto_conditions:
  - "Se sales page NÃO tem Big Idea da Fase 2 → PARAR (desconexão estratégica)"
  - "Se VSL NÃO segue mesma narrativa da sales page → PARAR (inconsistência mata conversão)"
  - "Se emails < 15 na sequência → PARAR (sequência incompleta)"
  - "Se ads NÃO cobrem pelo menos 3 ângulos diferentes → PARAR (sem diversidade de teste)"
  - "Se Unique Mechanism NÃO aparece em TODAS as peças → PARAR (mensagem fragmentada)"
```

### ✅ CHECKPOINT 3: Materiais Completos

```yaml
checkpoint:
  nome: "Criação Completa"
  validacao:
    - "Sales page tem todas as seções (headline, lead, mecanismo, prova, oferta, garantia, CTA)?"
    - "VSL mantém consistência de mensagem com sales page?"
    - "Emails cobrem pré-lançamento, abertura e fechamento?"
    - "Ads têm variantes suficientes para teste A/B?"
    - "Big Idea + Mecanismo presentes em todas as peças?"
  decisao:
    passa: "Todos os critérios ✅ → Avança para Fase 4 (Validação)"
    falha: "Qualquer critério ❌ → Volta para copywriter responsável corrigir"
```

---

## FASE 4: Validação (Tier 3 + Tools)

**Objetivo:** Auditar e otimizar todo material antes do lançamento.

### Step 4.1: Auditoria Hopkins

```yaml
task: audit-copy
agent: "@claude-hopkins"
input:
  - sales_page: "Output 3.1"
  - vsl: "Output 3.2"
  - emails: "Output 3.3"
output:
  - score_por_peca: "Pontuação de cada material"
  - problemas: "Issues identificados"
  - recomendacoes: "Melhorias específicas"
```

### Step 4.2: Sugarman Check

```yaml
task: sugarman-check
tool: true
input:
  - todas_pecas: "Todos os materiais da Fase 3"
output:
  - score_triggers: "X/30 triggers presentes"
  - triggers_ausentes: "O que está faltando"
  - sugestoes: "Como adicionar triggers"
```

### Step 4.3: Revisão e Ajustes

```yaml
processo:
  1: "Compilar todos os feedbacks"
  2: "Priorizar ajustes por impacto"
  3: "Implementar correções"
  4: "Re-validar se necessário"

criterio_aprovacao:
  - "Score Hopkins >= 80 em todas as peças"
  - "Sugarman Check >= 20/30 triggers"
  - "Zero erros críticos"
```

**Entregáveis da Fase 4:**
- [ ] Relatório de auditoria completo
- [ ] Score Sugarman de cada peça
- [ ] Materiais revisados e aprovados
- [ ] Checklist pre-publish completo

### 🛑 VETO CONDITIONS — Fase 4 → Publicação

```yaml
veto_conditions:
  - "Se score Hopkins < 80 em QUALQUER peça → PARAR (qualidade insuficiente)"
  - "Se Sugarman Check < 20/30 triggers → PARAR (faltam gatilhos essenciais)"
  - "Se há erros críticos não corrigidos → PARAR (zero tolerância)"
  - "Se peças NÃO foram re-validadas após ajustes → PARAR (ajuste sem verificação)"
```

### ✅ CHECKPOINT 4: Validação Final

```yaml
checkpoint:
  nome: "Aprovação para Lançamento"
  validacao:
    - "TODAS as peças com score Hopkins >= 80?"
    - "TODAS as peças com Sugarman >= 20/30?"
    - "Consistência de mensagem entre materiais verificada?"
    - "Zero erros críticos remanescentes?"
    - "Checklist pre-publish 100% completo?"
  decisao:
    passa: "Todos os critérios ✅ → APROVADO PARA LANÇAMENTO"
    falha: "Qualquer critério ❌ → Volta para ajustes e re-validação"
```

---

## Critérios de Sucesso do Workflow

```yaml
criterios:
  qualidade:
    - "Todas as peças com score >= 80"
    - "Consistência de mensagem entre materiais"
    - "Big Idea presente em todas as peças"
    - "Oferta clara e irresistível"

  completude:
    - "Sales page finalizada"
    - "VSL script pronto para gravação"
    - "Mínimo 15 emails na sequência"
    - "Mínimo 5 variantes de ads"
    - "Todas as peças auditadas"

  estrategia:
    - "Nível de consciência respeitado"
    - "Avatar refletido na linguagem"
    - "Unique Mechanism destacado"
    - "Oferta com valor 10x preço"
```

---

## Checklist de Entrega Final

### Documentos Estratégicos
- [ ] Briefing de diagnóstico
- [ ] Big Idea documentada
- [ ] Unique Mechanism documentado
- [ ] Oferta estruturada

### Materiais de Copy
- [ ] Sales page completa
- [ ] VSL script (com marcações)
- [ ] Emails pré-lançamento (5-7)
- [ ] Emails carrinho aberto (5-7)
- [ ] Emails fechamento (3-5)
- [ ] Ads Facebook (5 variantes)
- [ ] Ads Instagram (5 variantes)
- [ ] Headlines para teste (10+)

### Validação
- [ ] Relatório audit Hopkins
- [ ] Relatório Sugarman check
- [ ] Ajustes implementados
- [ ] Aprovação final

---

## Fluxo de Decisão

```
┌─────────────────────────────────────────────────────────────────────┐
│                     FLUXO DE DECISÃO                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  INÍCIO                                                            │
│     │                                                              │
│     ▼                                                              │
│  ┌─────────────┐                                                   │
│  │ Diagnóstico │──────────────────────────────────────────────┐    │
│  │ Completo?   │                                              │    │
│  └──────┬──────┘                                              │    │
│         │ SIM                                                 │NÃO │
│         ▼                                                     ▼    │
│  ┌─────────────┐                               ┌──────────────┐    │
│  │ Estratégia  │                               │ Voltar para  │    │
│  │ Definida?   │                               │ Fase 1       │────┘
│  └──────┬──────┘                               └──────────────┘
│         │ SIM
│         ▼
│  ┌─────────────┐
│  │ Copy        │──────────────────────────────────────────────┐
│  │ Criada?     │                                              │
│  └──────┬──────┘                                              │NÃO
│         │ SIM                                                 ▼
│         ▼                                        ┌──────────────┐
│  ┌─────────────┐                                 │ Criar peças  │
│  │ Score >= 80?│                                 │ faltantes    │───┘
│  └──────┬──────┘                                 └──────────────┘
│         │ SIM
│         ▼
│  ┌─────────────┐
│  │ APROVADO    │
│  │ PARA        │
│  │ LANÇAMENTO  │
│  └─────────────┘
│
└─────────────────────────────────────────────────────────────────────┘
```

---

## Estimativa de Tempo por Fase

| Fase | Tempo Estimado | Dependências |
|------|----------------|--------------|
| Fase 1: Diagnóstico | 1-2 horas | Informações do cliente |
| Fase 2: Estratégia | 1-2 horas | Fase 1 completa |
| Fase 3: Criação | 2-4 horas | Fase 2 completa |
| Fase 4: Validação | 1-2 horas | Fase 3 completa |
| **TOTAL** | **4-8 horas** | - |

---

*Workflow: lancamento-completo v1.0 - High-Ticket Copy Factory*

## Quality Gates
- Todas as pecas de copy passam pelo Oraculo Torriani (10/10)
- Sugarman 30 Triggers verificados (minimo 15 presentes)
- Regras inviolaveis checadas (0 violacoes)
