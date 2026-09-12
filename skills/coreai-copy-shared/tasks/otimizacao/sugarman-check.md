# Task: Sugarman 30 Triggers Check

```yaml
task:
  name: sugarman-check
  description: "Validação de copy contra os 30 gatilhos psicológicos de Joe Sugarman"
  type: hybrid
  agent: null  # Worker pre-scan + Agent recomendações
  command: "*sugarman-check"
  estimated_time: "5-10 min"
  execution_type: "Hybrid (Worker scan + Agent recomendações)"
  worker_scripts:
    - "scripts/sugarman-scan.sh"
  version: "2.0.0"
  optimized_by: "*optimize copywriters --implement"
  optimized_date: "2026-02-12"

input:
  required:
    - copy_text: "Texto completo do copy para validação"
  optional:
    - tipo: "Tipo de copy (sales page, email, ad, VSL)"
    - foco: "Triggers específicos para priorizar"

output:
  - checklist_30_triggers: "Status de cada trigger no copy"
  - score_total: "Quantos triggers estão presentes (X/30)"
  - triggers_ausentes: "Lista de triggers não utilizados"
  - recomendacoes: "Como adicionar triggers faltantes"
  - copy_otimizado: "Sugestões de melhoria"
```

---

## MANDATORY PREFLIGHT: Run Worker Script FIRST

```
EXECUTE FIRST — antes de QUALQUER análise manual:

  bash scripts/sugarman-scan.sh <copy-file> --json

IF o comando falhar → CORRIGIR o erro do script. NÃO proceder manualmente.
IF o comando funcionar → LER /tmp/preflight-sugarman.yaml. Usar ESSES dados.

VETO: Se /tmp/preflight-sugarman.yaml não existir → BLOCK.
      NÃO contar triggers manualmente. NÃO calcular score manualmente.
      O script escaneia os 30 triggers em <2s com 100% consistência.

USE o scan como BASE. O Agent avalia:
- Qualidade de implementação de cada trigger (não apenas presença)
- Contexto e coerência dos triggers no fluxo narrativo
- Sugestões de copy para implementar triggers ausentes
```

### Veto Conditions
- id: "GAP_ZERO_001"
  condition: "Preflight não executado"
  result: "VETO - BLOCK. Run sugarman-scan.sh FIRST."
  rationale: "50% do trabalho (scan + cálculo) é determinístico. Script faz em <2s."

- id: "SUGARMAN_002"
  condition: "Aprovar copy com menos de 15 dos 30 triggers presentes"
  result: "VETO - BLOCK. Minimo de 15 triggers e obrigatorio."
  rationale: "Abaixo de 15 triggers a copy nao tem alavancas de persuasao suficientes."

- id: "SUGARMAN_003"
  condition: "Check superficial, sem analise trigger por trigger"
  result: "VETO - BLOCK. Os 30 triggers devem ser avaliados um a um."
  rationale: "Sem analise individual o score nao e rastreavel nem auditavel."

---

## Os 30 Gatilhos Psicológicos de Sugarman

### GRUPO 1: CONEXÃO EMOCIONAL (Triggers 1-6)

```
┌─────────────────────────────────────────────────────────────┐
│           TRIGGERS DE CONEXÃO EMOCIONAL                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. FEELING OF INVOLVEMENT (Envolvimento)                  │
│     [ ] Leitor se sente PARTE da história?                 │
│     [ ] Usa "você" frequentemente?                         │
│     [ ] Leitor consegue se ver usando o produto?           │
│                                                             │
│  2. HONESTY (Honestidade)                                  │
│     [ ] Admite limitações do produto?                      │
│     [ ] Evita exageros óbvios?                             │
│     [ ] Tom genuíno e autêntico?                           │
│                                                             │
│  3. INTEGRITY (Integridade)                                │
│     [ ] Promessas são realistas?                           │
│     [ ] Consistência entre claims e realidade?             │
│     [ ] Valores alinhados com ações?                       │
│                                                             │
│  4. CREDIBILITY (Credibilidade)                            │
│     [ ] Provas para claims importantes?                    │
│     [ ] Fonte das informações clara?                       │
│     [ ] Dados e números verificáveis?                      │
│                                                             │
│  5. VALUE AND PROOF OF VALUE (Prova de Valor)              │
│     [ ] Valor claramente demonstrado?                      │
│     [ ] Comparação de preço vs valor?                      │
│     [ ] ROI evidente?                                      │
│                                                             │
│  6. JUSTIFY THE PURCHASE (Justificativa)                   │
│     [ ] Razões lógicas para comprar?                       │
│     [ ] Leitor pode "se explicar" para outros?             │
│     [ ] Argumentos racionais além dos emocionais?          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### GRUPO 2: PERSUASÃO LÓGICA (Triggers 7-12)

```
┌─────────────────────────────────────────────────────────────┐
│             TRIGGERS DE PERSUASÃO LÓGICA                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  7. GREED (Ganância/Oportunidade)                          │
│     [ ] Apresenta como oportunidade única?                 │
│     [ ] "Mais por menos" evidente?                         │
│     [ ] Sensação de vantagem exclusiva?                    │
│                                                             │
│  8. ESTABLISH AUTHORITY (Autoridade)                       │
│     [ ] Credenciais apresentadas?                          │
│     [ ] Expertise demonstrado?                             │
│     [ ] Posicionamento como especialista?                  │
│                                                             │
│  9. SATISFACTION CONVICTION (Satisfação Garantida)         │
│     [ ] Garantia clara e forte?                            │
│     [ ] Risco removido do comprador?                       │
│     [ ] Confiança na qualidade transmitida?                │
│                                                             │
│  10. NATURE OF PRODUCT (Natureza do Produto)               │
│     [ ] Produto explicado claramente?                      │
│     [ ] Funcionamento compreensível?                       │
│     [ ] Diferencial único destacado?                       │
│                                                             │
│  11. CURRENT FADS (Tendências Atuais)                      │
│     [ ] Conectado a tendências relevantes?                 │
│     [ ] Linguagem atual do mercado?                        │
│     [ ] Timing alinhado com momento?                       │
│                                                             │
│  12. TIMING (Momento Certo)                                │
│     [ ] Senso de urgência real?                            │
│     [ ] "Agora é a hora" justificado?                      │
│     [ ] Razão para agir imediatamente?                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### GRUPO 3: DINÂMICA SOCIAL (Triggers 13-18)

```
┌─────────────────────────────────────────────────────────────┐
│              TRIGGERS DE DINÂMICA SOCIAL                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  13. LINKING (Associação)                                  │
│     [ ] Produto associado a algo positivo?                 │
│     [ ] Conexão com valores do público?                    │
│     [ ] Ligação emocional criada?                          │
│                                                             │
│  14. DESIRE TO BELONG (Pertencimento)                      │
│     [ ] Comunidade ou grupo apresentado?                   │
│     [ ] "Faça parte de..." implícito?                      │
│     [ ] Identidade de grupo criada?                        │
│                                                             │
│  15. DESIRE TO COLLECT (Colecionismo)                      │
│     [ ] Produto como parte de coleção?                     │
│     [ ] Completude de experiência?                         │
│     [ ] Desejo de ter "o conjunto completo"?               │
│                                                             │
│  16. CURIOSITY (Curiosidade)                               │
│     [ ] Loops abertos criados?                             │
│     [ ] Perguntas intrigantes?                             │
│     [ ] Revelações progressivas?                           │
│                                                             │
│  17. SENSE OF URGENCY (Urgência)                           │
│     [ ] Escassez de tempo?                                 │
│     [ ] Escassez de quantidade?                            │
│     [ ] Consequência de não agir?                          │
│                                                             │
│  18. INSTANT GRATIFICATION (Gratificação Instantânea)      │
│     [ ] Resultado rápido prometido?                        │
│     [ ] Acesso imediato?                                   │
│     [ ] Benefício instantâneo claro?                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### GRUPO 4: ELEMENTOS NARRATIVOS (Triggers 19-24)

```
┌─────────────────────────────────────────────────────────────┐
│             TRIGGERS DE ELEMENTOS NARRATIVOS                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  19. EXCLUSIVITY (Exclusividade)                           │
│     [ ] Oferta exclusiva destacada?                        │
│     [ ] "Apenas para [grupo]" presente?                    │
│     [ ] Sensação de privilégio?                            │
│                                                             │
│  20. SIMPLICITY (Simplicidade)                             │
│     [ ] Mensagem fácil de entender?                        │
│     [ ] Oferta clara e direta?                             │
│     [ ] Processo simples de compra?                        │
│                                                             │
│  21. HUMAN RELATIONSHIPS (Relacionamentos)                  │
│     [ ] Histórias de pessoas reais?                        │
│     [ ] Conexão humana estabelecida?                       │
│     [ ] Empatia demonstrada?                               │
│                                                             │
│  22. STORYTELLING (História)                               │
│     [ ] Narrativa envolvente?                              │
│     [ ] Personagem identificável?                          │
│     [ ] Jornada clara (problema → solução)?                │
│                                                             │
│  23. MENTAL ENGAGEMENT (Engajamento Mental)                │
│     [ ] Leitor precisa pensar/imaginar?                    │
│     [ ] Interação mental criada?                           │
│     [ ] Exercício de visualização?                         │
│                                                             │
│  24. GUILT (Culpa/Responsabilidade)                        │
│     [ ] Consequência de NÃO agir?                          │
│     [ ] Responsabilidade pessoal ativada?                  │
│     [ ] "Você deve isso a si mesmo"?                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### GRUPO 5: ELEMENTOS PERSUASIVOS (Triggers 25-30)

```
┌─────────────────────────────────────────────────────────────┐
│            TRIGGERS DE ELEMENTOS PERSUASIVOS                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  25. SPECIFICITY (Especificidade)                          │
│     [ ] Números específicos usados?                        │
│     [ ] Detalhes concretos?                                │
│     [ ] Fatos verificáveis?                                │
│                                                             │
│  26. FAMILIARITY (Familiaridade)                           │
│     [ ] Conceitos conhecidos usados?                       │
│     [ ] Analogias com familiar?                            │
│     [ ] Referências reconhecíveis?                         │
│                                                             │
│  27. HOPE (Esperança)                                      │
│     [ ] Visão de futuro melhor?                            │
│     [ ] Possibilidade de transformação?                    │
│     [ ] Otimismo fundamentado?                             │
│                                                             │
│  28. PATTERN INTERRUPT (Quebra de Padrão)                  │
│     [ ] Elemento surpresa?                                 │
│     [ ] Algo inesperado?                                   │
│     [ ] Quebra de expectativa?                             │
│                                                             │
│  29. RHYME AND RHYTHM (Ritmo/Rima)                         │
│     [ ] Frases memoráveis?                                 │
│     [ ] Fluidez de leitura?                                │
│     [ ] Cadência agradável?                                │
│                                                             │
│  30. PURITY (Pureza/Autenticidade)                         │
│     [ ] Intenção genuína?                                  │
│     [ ] Produto "limpo" de problemas?                      │
│     [ ] Transparência total?                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Sistema de Pontuação

```
┌─────────────────────────────────────────────────────────────┐
│                 CÁLCULO DE SCORE                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Cada trigger pode ter 3 status:                           │
│                                                             │
│  ✅ PRESENTE (1 ponto)                                     │
│     Trigger claramente identificável no copy               │
│                                                             │
│  ⚠️ PARCIAL (0.5 ponto)                                    │
│     Trigger presente mas fraco ou incompleto               │
│                                                             │
│  ❌ AUSENTE (0 pontos)                                     │
│     Trigger não identificado no copy                       │
│                                                             │
│  ─────────────────────────────────────────                 │
│                                                             │
│  SCORE = (Presentes x 1) + (Parciais x 0.5)               │
│                                                             │
│  CLASSIFICAÇÃO:                                            │
│  25-30: Excelente - Copy altamente persuasivo              │
│  20-24: Bom - Forte, com espaço para melhorar              │
│  15-19: Regular - Vários triggers faltando                 │
│  10-14: Fraco - Precisa de trabalho significativo          │
│  <10:   Crítico - Revisão completa necessária              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Processo de Validação

### PASSO 1: Análise Inicial

```yaml
analise_inicial:
  1: "Ler copy completo uma vez sem avaliar"
  2: "Identificar tipo de copy e objetivo"
  3: "Mapear estrutura (headline, lead, body, oferta, CTA)"
  4: "Identificar público-alvo pretendido"
```

### PASSO 2: Checagem Sistemática

```yaml
checagem:
  metodo: "Verificar trigger por trigger, grupo por grupo"
  registro: "Marcar status (✅/⚠️/❌) para cada um"
  evidencia: "Anotar trecho que demonstra o trigger (se presente)"
  sugestao: "Para cada ausente, sugerir como adicionar"
```

### PASSO 3: Compilar Relatório

```yaml
relatorio:
  secoes:
    - resumo_executivo: "Score e classificação"
    - breakdown_grupos: "Score por grupo de triggers"
    - triggers_fortes: "Os melhor utilizados"
    - triggers_fracos: "Os que precisam de trabalho"
    - recomendacoes: "Como adicionar triggers faltantes"
```

---

## Template de Output

### RELATÓRIO SUGARMAN CHECK

**Copy Analisado:** [Tipo e identificação]
**Data:** [Data da análise]
**Ferramenta:** Sugarman 30 Triggers Checklist

---

#### SCORE GERAL: [X]/30 - [CLASSIFICAÇÃO]

| Grupo | Triggers | Score | Status |
|-------|----------|-------|--------|
| Conexão Emocional | 1-6 | X/6 | [Emoji] |
| Persuasão Lógica | 7-12 | X/6 | [Emoji] |
| Dinâmica Social | 13-18 | X/6 | [Emoji] |
| Elementos Narrativos | 19-24 | X/6 | [Emoji] |
| Elementos Persuasivos | 25-30 | X/6 | [Emoji] |

---

#### CHECKLIST COMPLETO

**GRUPO 1: CONEXÃO EMOCIONAL**

| # | Trigger | Status | Evidência/Sugestão |
|---|---------|--------|-------------------|
| 1 | Envolvimento | ✅/⚠️/❌ | [texto] |
| 2 | Honestidade | ✅/⚠️/❌ | [texto] |
| 3 | Integridade | ✅/⚠️/❌ | [texto] |
| 4 | Credibilidade | ✅/⚠️/❌ | [texto] |
| 5 | Prova de Valor | ✅/⚠️/❌ | [texto] |
| 6 | Justificativa | ✅/⚠️/❌ | [texto] |

[... repetir para todos os grupos ...]

---

#### TRIGGERS MAIS FORTES

1. **[Trigger X]** - [Por que está bem implementado]
2. **[Trigger Y]** - [Por que está bem implementado]
3. **[Trigger Z]** - [Por que está bem implementado]

---

#### TRIGGERS QUE PRECISAM DE TRABALHO

**Prioridade Alta:**
1. **[Trigger X]** - [Por que está fraco + como melhorar]

**Prioridade Média:**
2. **[Trigger Y]** - [Por que está fraco + como melhorar]

**Prioridade Baixa:**
3. **[Trigger Z]** - [Por que está fraco + como melhorar]

---

#### RECOMENDAÇÕES DE IMPLEMENTAÇÃO

**Para adicionar [Trigger X]:**
```
[Exemplo de copy que implementa o trigger]
```

**Para adicionar [Trigger Y]:**
```
[Exemplo de copy que implementa o trigger]
```

---

## Critérios de Sucesso

```yaml
success_criteria:
  completude:
    - "Todos os 30 triggers avaliados"
    - "Score calculado corretamente"
    - "Evidências documentadas para triggers presentes"

  acionabilidade:
    - "Sugestões específicas para triggers ausentes"
    - "Exemplos de copy para implementação"
    - "Priorização clara do que melhorar"

  usabilidade:
    - "Relatório fácil de ler e entender"
    - "Ações claras para o copywriter"
    - "Pode ser usado como checklist iterativo"
```

---

## Integração com Squad

```yaml
typical_usage:
  - "Após Tier 2 finalizar copy"
  - "Em conjunto com audit-copy (Hopkins)"
  - "Como checklist de qualidade antes de publicar"
  - "Para identificar áreas de melhoria rápida"

combines_well_with:
  - "audit-copy": "Hopkins foca em estrutura, Sugarman em persuasão"
  - "quality-gate": "Parte do processo de validação"
  - "pre-publish": "Checagem final antes de ir ao ar"
```

---

## Referência Rápida dos 30 Triggers

```
┌────┬─────────────────────────────┬─────────────────────────────┐
│ #  │ Trigger (EN)                │ Trigger (PT)                │
├────┼─────────────────────────────┼─────────────────────────────┤
│ 1  │ Feeling of Involvement      │ Envolvimento                │
│ 2  │ Honesty                     │ Honestidade                 │
│ 3  │ Integrity                   │ Integridade                 │
│ 4  │ Credibility                 │ Credibilidade               │
│ 5  │ Value/Proof of Value        │ Prova de Valor              │
│ 6  │ Justify the Purchase        │ Justificativa               │
│ 7  │ Greed                       │ Ganância/Oportunidade       │
│ 8  │ Establish Authority         │ Autoridade                  │
│ 9  │ Satisfaction Conviction     │ Satisfação Garantida        │
│ 10 │ Nature of Product           │ Natureza do Produto         │
│ 11 │ Current Fads                │ Tendências Atuais           │
│ 12 │ Timing                      │ Momento Certo               │
│ 13 │ Linking                     │ Associação                  │
│ 14 │ Desire to Belong            │ Pertencimento               │
│ 15 │ Desire to Collect           │ Colecionismo                │
│ 16 │ Curiosity                   │ Curiosidade                 │
│ 17 │ Sense of Urgency            │ Urgência                    │
│ 18 │ Instant Gratification       │ Gratificação Instantânea    │
│ 19 │ Exclusivity                 │ Exclusividade               │
│ 20 │ Simplicity                  │ Simplicidade                │
│ 21 │ Human Relationships         │ Relacionamentos             │
│ 22 │ Storytelling                │ História                    │
│ 23 │ Mental Engagement           │ Engajamento Mental          │
│ 24 │ Guilt                       │ Culpa/Responsabilidade      │
│ 25 │ Specificity                 │ Especificidade              │
│ 26 │ Familiarity                 │ Familiaridade               │
│ 27 │ Hope                        │ Esperança                   │
│ 28 │ Pattern Interrupt           │ Quebra de Padrão            │
│ 29 │ Rhyme and Rhythm            │ Ritmo/Rima                  │
│ 30 │ Purity                      │ Pureza/Autenticidade        │
└────┴─────────────────────────────┴─────────────────────────────┘
```

---

*Task: sugarman-check v1.0 - High-Ticket Copy Factory*

## Executor

```yaml
executor: joe-sugarman
```

## Pre-Conditions
- Copy completo para validacao (texto integral)
- Worker script `scripts/sugarman-scan.sh` disponivel e funcional
- Preflight executado com sucesso (`/tmp/preflight-sugarman.yaml` existente)
- Tipo de copy identificado (sales page, email, ad, VSL)

## Output Example

```yaml
sugarman_check:
  copy: "Email de vendas — Mentoria Elite"
  score: 19/30 triggers presentes
  date: "2026-03-15"

  triggers_presentes:
    - {id: 1, name: "Involvement", status: "PRESENTE", nota: "Pergunta retorica na abertura"}
    - {id: 2, name: "Honesty", status: "PRESENTE", nota: "Admite que nao e para todos"}
    - {id: 3, name: "Integrity", status: "PRESENTE", nota: "Promessas alinham com entrega"}
    - {id: 7, name: "Exclusivity", status: "PRESENTE", nota: "20 vagas, processo seletivo"}
    - {id: 12, name: "Urgency", status: "PRESENTE", nota: "Deadline real"}

  triggers_ausentes_prioritarios:
    - id: 5
      name: "Storytelling"
      impacto: ALTO
      sugestao: "Adicionar historia de 3 paragrafos no lead — como dono quase perdeu tudo"
    - id: 8
      name: "Linking"
      impacto: MEDIO
      sugestao: "Conectar resultado da mentoria com algo familiar — 'como ter um socio sem dividir lucro'"
    - id: 15
      name: "Curiosity"
      impacto: ALTO
      sugestao: "Adicionar: 'O erro de R$ 6.800/mes que 87% dos donos de agencia cometem'"

  veredicto: "APROVADO (19/30 >= 15 minimo). Recomenda adicionar Storytelling e Curiosity para subir para 21+."
```

