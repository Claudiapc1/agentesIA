# Workflow: Split Test Creation

```yaml
workflow:
  name: wf-split-test-creation
  description: "Criar variantes estruturadas A/B para copy existente (headlines, CTAs, subject lines)"
  estimated_time: "2-4 horas"
  complexity: média-alta
  priority: HIGH

use_cases:
  - "Teste A/B de headlines em sales pages"
  - "Variantes de subject lines para email"
  - "Teste de CTAs em landing pages"
  - "Teste de ângulos em ads"
  - "Otimização científica de copy existente"
```

---

## Visão Geral

Este workflow cria variantes de teste A/B com rigor científico. Cada variante é baseada em uma hipótese clara, garantindo que os testes gerem aprendizado real, não apenas números aleatórios.

```
┌─────────────────────────────────────────────────────────────────────┐
│                WORKFLOW: SPLIT TEST CREATION                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  FASE 1           FASE 2           FASE 3           FASE 4         │
│  Hipótese ──▶ Variantes ──▶ Matriz de ──▶ Validação                │
│  Definida       Criadas       Teste         Científica             │
│                                                                     │
│  ┌─────────┐  ┌─────────┐  ┌──────────┐  ┌─────────┐             │
│  │Análise  │  │Headlines│  │Design    │  │Rigor    │             │
│  │Copy Atual│  │CTAs     │  │Controle  │  │Hopkins  │             │
│  │Hipóteses│  │Bodies   │  │Métricas  │  │Oráculo  │             │
│  │Métricas │  │Subjects │  │Critérios │  │Aprovação│             │
│  └─────────┘  └─────────┘  └──────────┘  └─────────┘             │
│                                                                     │
│  TOTAL: 2-4 horas                                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## FASE 1: Definir Hipótese (30-45 min)

**Objetivo:** Analisar a copy atual, identificar pontos fracos e formular hipóteses testáveis.

### Step 1.1: Análise da Copy Atual

```yaml
task: analyze-current-copy
agent: "@claude-hopkins"
input:
  - copy_atual: "Peça de copy a ser testada"
  - metricas_atuais: "Taxa de conversão, CTR, open rate (se disponível)"
  - tipo: "headline | cta | subject-line | body | ad"
output:
  - pontos_fortes: "O que está funcionando"
  - pontos_fracos: "O que pode estar limitando resultados"
  - elementos_testaveis: "Lista de variáveis isoláveis"
  - baseline: "Métricas atuais como referência"
```

### Step 1.2: Formulação de Hipóteses

```yaml
task: formulate-hypotheses
agent: "@claude-hopkins"
input:
  - analise: "Output do step anterior"
output:
  - hipoteses:
    h1:
      variavel: "Ex: ângulo emocional vs lógico na headline"
      predicao: "Se trocarmos X por Y, esperamos Z% de melhoria"
      justificativa: "Baseado em [princípio/dados]"
    h2:
      variavel: "Ex: CTA específico vs genérico"
      predicao: "Esperamos aumento de X% no CTR"
      justificativa: "Baseado em [princípio/dados]"
    h3:
      variavel: "Ex: subject line com curiosidade vs benefício"
      predicao: "Esperamos aumento de X% no open rate"
      justificativa: "Baseado em [princípio/dados]"
  - prioridade: "Ranking de impacto esperado"
```

**Entregáveis da Fase 1:**
- [ ] Análise da copy atual documentada
- [ ] Mínimo 3 hipóteses formuladas
- [ ] Variáveis isoladas por hipótese
- [ ] Baseline de métricas definido

### 🛑 VETO CONDITIONS — Fase 1 → Fase 2

```yaml
veto_conditions:
  - "Se hipóteses NÃO têm variável isolada → PARAR (teste sem variável = não aprende nada)"
  - "Se hipóteses NÃO têm predição mensurável → PARAR (sem predição = sem critério de sucesso)"
  - "Se NÃO há baseline definido → PARAR (sem baseline = sem comparação)"
  - "Se testando mais de 1 variável por teste → PARAR (multivariado invalida resultado)"
```

### ✅ CHECKPOINT 1: Hipóteses Validadas

```yaml
checkpoint:
  nome: "Hipóteses Científicas"
  validacao:
    - "Cada hipótese testa UMA variável isolada?"
    - "Predições são específicas e mensuráveis?"
    - "Justificativas são baseadas em princípios sólidos (não achismo)?"
    - "Baseline está documentado?"
  decisao:
    passa: "Todos ✅ → Avança para Fase 2"
    falha: "Qualquer ❌ → Reformular hipóteses"
```

---

## FASE 2: Criar Variantes (1-2 horas)

**Objetivo:** Produzir variantes de copy para cada hipótese, mantendo rigor na isolação de variáveis.

### Step 2.1: Variantes de Headlines

```yaml
task: create-headline-variants
agent: "@john-carlton"
input:
  - headline_controle: "Headline atual (controle)"
  - hipoteses: "Hipóteses relevantes para headlines"
output:
  - variantes:
    controle: "Headline original (A)"
    variante_b: "Teste de ângulo emocional"
    variante_c: "Teste de especificidade"
    variante_d: "Teste de mecanismo"
    variante_e: "Teste de curiosidade"
  - justificativa_por_variante: "Por que esta variante testa a hipótese"
```

### Step 2.2: Variantes de CTAs

```yaml
task: create-cta-variants
agent: "@joe-sugarman"
input:
  - cta_controle: "CTA atual"
  - hipoteses: "Hipóteses relevantes para CTAs"
output:
  - variantes:
    controle: "CTA original"
    variante_urgencia: "Com gatilho de urgência"
    variante_beneficio: "Focado no resultado"
    variante_baixo_compromisso: "Redução de fricção"
    variante_social_proof: "Com prova social integrada"
  - triggers_por_variante: "Gatilhos Sugarman aplicados"
```

### Step 2.3: Variantes de Subject Lines / Corpo

```yaml
task: create-body-variants
agent: "@john-carlton"
input:
  - body_controle: "Texto atual"
  - hipoteses: "Hipóteses relevantes"
output:
  - variantes_subject:
    controle: "Subject original"
    curiosidade: "Abordagem curiosidade"
    beneficio: "Abordagem benefício direto"
    controversia: "Abordagem controvérsia"
    pessoal: "Abordagem pessoal/storytelling"
  - variantes_body:
    controle: "Body original"
    lead_emocional: "Lead emocional vs lógico"
    lead_historia: "Lead com história"
    lead_direto: "Lead direto ao ponto"
```

**Entregáveis da Fase 2:**
- [ ] Variantes de headlines (4-5 + controle)
- [ ] Variantes de CTAs (4-5 + controle)
- [ ] Variantes de subject lines (4-5 + controle)
- [ ] Variantes de body/lead (3-4 + controle)
- [ ] Justificativa para cada variante

### 🛑 VETO CONDITIONS — Fase 2 → Fase 3

```yaml
veto_conditions:
  - "Se variante muda mais de 1 elemento vs controle → PARAR (invalida teste)"
  - "Se variantes são apenas sinônimos (sem mudança real de ângulo) → PARAR (teste inútil)"
  - "Se NÃO há controle definido para cada teste → PARAR (sem controle = sem comparação)"
  - "Se justificativa é vaga → PARAR (variante sem tese = desperdício de tráfego)"
  - "Se triggers Sugarman NÃO foram considerados → PARAR (CTAs sem gatilho = fraco)"
```

### ✅ CHECKPOINT 2: Variantes Validadas

```yaml
checkpoint:
  nome: "Variantes Científicas"
  validacao:
    - "Cada variante testa exatamente 1 variável vs controle?"
    - "Diferença entre variantes é clara e significativa?"
    - "Justificativas são sólidas (baseadas em princípios de copy)?"
    - "Controle está definido para todos os testes?"
  decisao:
    passa: "Todos ✅ → Avança para Fase 3"
    falha: "Qualquer ❌ → Refinar variantes"
```

---

## FASE 3: Design da Matriz de Teste (30-45 min)

**Objetivo:** Estruturar a execução dos testes com critérios de sucesso, volume mínimo e cronograma.

### Step 3.1: Matriz de Testes

```yaml
task: design-test-matrix
agent: "@claude-hopkins"
input:
  - variantes: "Output da Fase 2"
  - trafego_estimado: "Volume de tráfego/audiência disponível"
output:
  - matriz:
    teste_1:
      elemento: "Headline"
      controle: "Versão A"
      challenger: "Versão B"
      metrica_primaria: "CTR / Conversão"
      volume_minimo: "X impressões/visitantes"
      duracao_minima: "X dias"
      significancia: "95%"
    teste_2:
      elemento: "CTA"
      controle: "Versão A"
      challenger: "Versão B"
      metrica_primaria: "Click-through rate"
      volume_minimo: "X cliques"
      duracao_minima: "X dias"
      significancia: "95%"
  - ordem_execucao: "Prioridade dos testes (maior impacto primeiro)"
  - criterio_vencedor: "Como declarar vencedor"
```

### Step 3.2: Documentação de Controle

```yaml
task: document-controls
agent: "@claude-hopkins"
output:
  - regras_teste:
    - "Rodar teste por mínimo de 7 dias (capturar variação semanal)"
    - "Volume mínimo de X por variante antes de declarar vencedor"
    - "Significância estatística de 95% obrigatória"
    - "NÃO pausar teste antes do volume mínimo"
    - "Registrar TODAS as variáveis externas (promoção, sazonalidade)"
  - template_resultado:
    - "Data início/fim"
    - "Volume por variante"
    - "Métricas primárias e secundárias"
    - "Vencedor declarado"
    - "Aprendizado para próximo teste"
```

**Entregáveis da Fase 3:**
- [ ] Matriz de testes completa
- [ ] Ordem de execução definida
- [ ] Critérios de vencedor documentados
- [ ] Template de registro de resultados
- [ ] Regras de controle estabelecidas

### 🛑 VETO CONDITIONS — Fase 3 → Fase 4

```yaml
veto_conditions:
  - "Se volume mínimo NÃO definido → PARAR (teste sem volume = resultado aleatório)"
  - "Se significância < 95% → PARAR (resultado não confiável)"
  - "Se duração < 7 dias → PARAR (não captura variação semanal)"
  - "Se critério de vencedor é subjetivo → PARAR (precisa ser numérico)"
  - "Se mais de 3 testes simultâneos → PARAR (complexidade excessiva)"
```

### ✅ CHECKPOINT 3: Matriz Validada

```yaml
checkpoint:
  nome: "Matriz de Teste Científica"
  validacao:
    - "Cada teste tem volume mínimo realista?"
    - "Significância estatística definida (95%)?"
    - "Ordem de execução prioriza maior impacto?"
    - "Template de resultado permite aprendizado?"
  decisao:
    passa: "Todos ✅ → Avança para Fase 4"
    falha: "Qualquer ❌ → Ajustar matriz"
```

---

## FASE 4: Validação Científica + Oráculo (30-45 min)

**Objetivo:** Validação final de rigor científico e qualidade das variantes antes da execução.

### Step 4.1: Auditoria Hopkins

```yaml
task: audit-test-rigor
agent: "@claude-hopkins"
input:
  - variantes: "Todas as variantes criadas"
  - matriz: "Matriz de teste"
output:
  - score_rigor: "X/10 (rigor científico do setup)"
  - problemas: "Vieses, variáveis confusas, gaps"
  - recomendacoes: "Ajustes para melhorar rigor"
```

### Step 4.2: Validação Oráculo

```yaml
task: oraculo-validation
agent: "@oraculo"
input:
  - copy_original: "Peça original analisada"
  - hipoteses: "Hipóteses formuladas"
  - variantes: "Todas as variantes"
  - matriz: "Matriz de teste"
output:
  - score_geral: "X/10"
  - qualidade_hipoteses: "Avaliação das hipóteses"
  - qualidade_variantes: "Avaliação das variantes"
  - potencial_aprendizado: "O que cada teste pode ensinar"
  - aprovacao_final: "APROVADO | AJUSTES NECESSÁRIOS"
```

**Entregáveis da Fase 4:**
- [ ] Score de rigor científico
- [ ] Score Oráculo
- [ ] Recomendações de ajuste (se houver)
- [ ] Aprovação final para execução

### 🛑 VETO CONDITIONS — Fase 4 → Execução

```yaml
veto_conditions:
  - "Se score rigor < 7/10 → PARAR (teste mal desenhado desperdiça tráfego)"
  - "Se score Oráculo < 7/10 → PARAR (qualidade insuficiente)"
  - "Se vieses identificados e NÃO corrigidos → PARAR (resultado será inválido)"
  - "Se variantes NÃO re-validadas após ajustes → PARAR"
```

### ✅ CHECKPOINT 4: Aprovação Final

```yaml
checkpoint:
  nome: "Validação Oráculo - Split Test"
  validacao:
    - "Score rigor >= 7/10?"
    - "Score Oráculo >= 7/10?"
    - "Cada teste tem hipótese clara, variável isolada e critério de sucesso?"
    - "Matriz é executável com tráfego disponível?"
    - "Potencial de aprendizado é alto (não teste trivial)?"
  decisao:
    passa: "Todos ✅ → APROVADO PARA EXECUÇÃO"
    falha: "Qualquer ❌ → Volta para fase específica e corrige"
```

---

## Critérios de Sucesso

```yaml
criterios:
  rigor:
    - "Cada teste isola 1 variável"
    - "Significância estatística de 95%"
    - "Volume mínimo definido e realista"
    - "Critério de vencedor objetivo"

  qualidade:
    - "Variantes são significativamente diferentes (não sinônimos)"
    - "Hipóteses baseadas em princípios de copy"
    - "Justificativas documentadas"

  aprendizado:
    - "Cada teste gera insight acionável"
    - "Template de resultado estruturado"
    - "Aprendizados alimentam próximos testes"
```

---

## Estimativa de Tempo por Fase

| Fase | Tempo Estimado | Dependências |
|------|----------------|--------------|
| Fase 1: Hipótese | 30-45 min | Copy atual + métricas |
| Fase 2: Variantes | 1-2 horas | Fase 1 completa |
| Fase 3: Matriz | 30-45 min | Fase 2 completa |
| Fase 4: Validação | 30-45 min | Fase 3 completa |
| **TOTAL** | **2-4 horas** | - |

---

*Workflow: wf-split-test-creation v1.0 - Testes A/B com Rigor Científico*

## Quality Gates
- Copy final validada pelo Oraculo Torriani (10/10)
- Manual de craft aplicado (zero violacoes de regras de escrita)
- CTA claro e especifico em toda peca de copy
