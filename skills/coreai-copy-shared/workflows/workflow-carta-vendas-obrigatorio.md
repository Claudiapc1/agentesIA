# 🔥 WORKFLOW OBRIGATÓRIO: CARTAS DE VENDAS
## Verificação Dupla com Critérios Oráculo desde a Escrita

**Versão:** 1.0
**Data:** 05/02/2026
**Status:** ATIVO - OBRIGATÓRIO PARA TODAS AS CARTAS DE VENDAS
**Criado por:** Oráculo Torriani + Copy Chief

---

## ⚠️ REGRA ABSOLUTA

**Nenhuma carta de vendas sai sem passar por TODOS os estágios deste workflow.**

Não existe exceção. Não existe "quase pronto". Não existe "já está bom".

**Se falhar em qualquer estágio → VOLTA pro início.**

---

## 📊 OS 4 ESTÁGIOS OBRIGATÓRIOS

```
┌─────────────────────────────────────────────────────────────┐
│ ESTÁGIO 1: ESTRATÉGIA (Todd Brown)                          │
│ Criar Big Idea com Mecanismo Único NOMEADO                 │
└────────────────────┬────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────────┐
│ ESTÁGIO 2: ESCRITA (Copy Executor - Halbert/Bencivenga)    │
│ Escrever carta JÁ seguindo Critérios Mínimos Oráculo       │
└────────────────────┬────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────────┐
│ ESTÁGIO 3: VALIDAÇÃO (Oráculo Torriani) - OBRIGATÓRIA      │
│ Teste dos 5 critérios Master + 3 Checkpoints               │
└────────────────────┬────────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────────┐
│ ESTÁGIO 4: PUBLICAÇÃO                                        │
│ Só publica se Score = 10/10 do Oráculo                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛑 VETO CONDITIONS GLOBAIS — Carta de Vendas

```yaml
veto_conditions_globais:
  - "Se NÃO passou pelo Estágio 1 (Estratégia) → NÃO ESCREVER (copy sem estratégia = commodity)"
  - "Se NÃO passou pelo Estágio 3 (Validação Oráculo) → NÃO PUBLICAR (zero exceções)"
  - "Se score < 10/10 no Oráculo → NÃO PUBLICAR (nota 9 = reprovada)"
  - "Se clichê de coach presente em qualquer seção → REPROVA AUTOMÁTICA"
  - "Se promessa é copiável por concorrente → REPROVA AUTOMÁTICA"
```

---

## 🎯 ESTÁGIO 1: ESTRATÉGIA
### *Duração: 2-4 horas*

**Responsável:** @todd-brown (ou @copy-chief)

**O QUE FAZER:**

1. **Diagnóstico Completo (E1)**
   - Examinar competidores
   - Examinar produto
   - Examinar prospects

2. **Criar Big Idea (E2)**
   - Fórmula: E-C (P-P+U-M) I-I
   - Primary Promise ESPECÍFICA
   - Unique Mechanism NOMEADO
   - Intellectually Interesting

3. **Definir Funnel Thesis**
   - A crença central que prospect precisa ter
   - Sub-beliefs necessárias

4. **Escrever Brief para Copy Executor**
   - Big Idea resumida
   - Dor específica
   - Tipo de prospect
   - Transformação esperada
   - Risco de não agir

**CRITÉRIOS DE APROVAÇÃO E1:**

- ✅ Big Idea tem nome próprio?
- ✅ Mecanismo é INEGÁVEL (concorrente não consegue copiar)?
- ✅ Promessa é específica com números/prazo?
- ✅ Diferencial é claro?
- ✅ Brief é detalhado (não vago)?

**SE FALHAR:** Volta pra Todd Brown refazer.

### 🛑 VETO CONDITIONS — Estágio 1 → Estágio 2

```yaml
veto_conditions:
  - "Se Big Idea NÃO tem nome proprietário → PARAR (sem nome = sem identidade)"
  - "Se mecanismo é replicável mudando nome → PARAR (não cria categoria)"
  - "Se promessa NÃO tem números/prazo → PARAR (vaga demais)"
  - "Se brief NÃO detalha dor específica e tipo de prospect → PARAR (copywriter vai chutar)"
```

### ✅ CHECKPOINT: Estratégia Aprovada para Escrita

```yaml
checkpoint:
  nome: "Brief Completo"
  validacao:
    - "Big Idea com nome próprio e mecanismo único?"
    - "Promessa específica com números?"
    - "Brief detalhado (não vago) para copywriter?"
    - "Diferencial claro e inegável?"
  decisao:
    passa: "Todos ✅ → Enviar para Copy Executor"
    falha: "Qualquer ❌ → Todd Brown refaz"
```

---

## ✍️ ESTÁGIO 2: ESCRITA
### *Duração: 4-8 horas*

**Responsável:** @gary-halbert / @gary-bencivenga / @clayton-makepeace
*(Depende do tipo de copy)*

**PREMISSA OBRIGATÓRIA NA ESCRITA:**

Antes de escrever UMA PALAVRA, o copywriter precisa internalizar os **5 Critérios Master do Oráculo**:

1. ✅ **Promessa NÃO copiável** - diferencial inegável
2. ✅ **Dor VISCERAL** - não bonita, não socialmente aceitável
3. ✅ **Trava o scroll** - contraste brutal na abertura
4. ✅ **Promessa EXECUTÁVEL** - número + prazo + métrica
5. ✅ **Risco de NÃO agir** - fantasma emocional presente

**ESTRUTURA OBRIGATÓRIA DA CARTA:**

### **SEÇÃO 1: HEADLINE + SUBHEADLINE**
- Contraste brutal (problema/solução ou antes/depois)
- NÃO educado, NÃO bonito
- Trava o scroll IMEDIATAMENTE

**Checklist:**
- [ ] Primeira frase dói?
- [ ] Tem contraste claro?
- [ ] Quebra padrão?

---

### **SEÇÃO 2: O LEAD (350-800 palavras)**
- História verdadeira ou caso real
- Estabelece EMPATIA
- Revela o PROBLEMA REAL (não óbvio)

**Checklist:**
- [ ] Começa com cena viva (não conceito)?
- [ ] Prospect se vê na história?
- [ ] Revela dor que ninguém fala?
- [ ] Termina com pergunta/revelation?

---

### **SEÇÃO 3: MECANISMO DO PROBLEMA**
- Explica POR QUE soluções anteriores falharam
- Identifica causa raiz DIFERENTE
- Instala comando ("aqui está a verdade")

**Checklist:**
- [ ] Começa com "o motivo pelo qual"?
- [ ] Diferencia de senso comum?
- [ ] É específico (não genérico)?
- [ ] Tem NOME PRÓPRIO?

---

### **SEÇÃO 4: MECANISMO DA SOLUÇÃO**
- Explica COMO seu método funciona diferente
- Usa metáfora/analogia proprietária
- Dá "legs" pra promessa

**Checklist:**
- [ ] Método tem nome?
- [ ] Processo é visual (pode desenhar)?
- [ ] É fácil de entender?
- [ ] Cria categoria própria?

---

### **SEÇÃO 5: PROOF STACKING**
- Cases com números reais
- Antes/depois específico
- Métricas observáveis

**Checklist:**
- [ ] Cases têm número + prazo?
- [ ] Conversão é específica (%)?
- [ ] Receita é concreta (R$)?
- [ ] Sem exagero (credível)?

---

### **SEÇÃO 6: FUNNEL THESIS**
- A crença central é clara?
- Lógica é inevitável?

**Checklist:**
- [ ] Thesis é uma frase?
- [ ] Implica consequências?
- [ ] Leva a ação?

---

### **SEÇÃO 7: SUB-BELIEFS**
- Todas as crenças necessárias listadas
- Cada uma com prova/argumento

**Checklist:**
- [ ] 4-6 sub-beliefs?
- [ ] Cada uma é provada?
- [ ] Sequência faz sentido?

---

### **SEÇÃO 8: S.I.N. OFFER**
- Superior (melhor que alternativas)
- Irresistível (adiciona valor)
- No-brainer (remove risco)

**Checklist:**
- [ ] Preço é específico?
- [ ] Bônus tem valor (R$)?
- [ ] Garantia é real?
- [ ] Urgência é legítima?

---

### **SEÇÃO 9: CLOSING**
- Reafirma transformação
- Insere risco de não agir
- CTA é claro e binário

**Checklist:**
- [ ] Risco é visceral?
- [ ] CTA tem prazo?
- [ ] Impossível confundir o que fazer?

---

### **SEÇÃO 10: POST-SCRIPTS**
- P.S. reforça prova ou urgência
- P.P.S. insere medo/risco

**Checklist:**
- [ ] P.S. traz novo argumento?
- [ ] P.P.S. é emocional?

---

**CRITÉRIOS DE APROVAÇÃO E2:**

Antes de passar para validação, verificar:

- ✅ Cada seção tem checklist completo?
- ✅ Não tem clichês de coach?
- ✅ Linguagem é cirúrgica (não educada)?
- ✅ Ritmo varia (curta-longa-curta)?
- ✅ Zero qualificadores ("muito", "talvez")?
- ✅ Promessa é inegável?
- ✅ Dor é visceral?

**SE FALHAR:** Volta pro copywriter corrigir seção específica.

### 🛑 VETO CONDITIONS — Estágio 2 → Estágio 3

```yaml
veto_conditions:
  - "Se QUALQUER seção (1-10) tem checklist incompleto → PARAR (volta pro copywriter)"
  - "Se clichê de coach encontrado → PARAR (contaminação = reescrita)"
  - "Se qualificadores ('muito', 'talvez') presentes → PARAR (linguagem fraca)"
  - "Se ritmo NÃO varia (curta-longa-curta) → PARAR (copy monótona)"
  - "Se 5 Critérios Master do Oráculo NÃO internalizados na escrita → PARAR (vai reprovar)"
```

### ✅ CHECKPOINT: Carta Pronta para Validação

```yaml
checkpoint:
  nome: "Escrita Completa"
  validacao:
    - "Todas as 10 seções escritas com checklists completos?"
    - "Zero clichês de coach?"
    - "Linguagem cirúrgica (sem qualificadores)?"
    - "Ritmo varia ao longo da carta?"
    - "Big Idea + Mecanismo presentes e consistentes?"
  decisao:
    passa: "Todos ✅ → Envia para Oráculo Torriani"
    falha: "Qualquer ❌ → Copywriter corrige seção específica"
```

---

## ✅ ESTÁGIO 3: VALIDAÇÃO ORÁCULO
### *Duração: 2-4 horas - NÃO NEGOCIÁVEL*

**Responsável:** Oráculo Torriani (Juliano)

**PROTOCOLO EXATO:**

### **PASSO 1: PRÉ-VALIDAÇÃO (Checklist Rápida)**

- [ ] Encaixe narrativo OK? (conecta com campanha anterior/próxima)
- [ ] Estado emocional correto? (urgência/dúvida/ação)
- [ ] Linguagem tribal? (usa termos do nicho)

**SE FALHAR AQUI → VOLTA pro copywriter**

---

### **PASSO 2: VALIDADOR MASTER (5 Critérios)**

Aplicar os 5 critérios não negociáveis:

1. **Promessa Copiável?**
   - Score: 0-10
   - Se menos de 8 → REPROVA

2. **Dor Verdadeira?**
   - Score: 0-10
   - Se menos de 7 → REPROVA

3. **Trava Scroll?**
   - Score: 0-10
   - Se menos de 7 → REPROVA

4. **Promessa Executável?**
   - Score: 0-10
   - Se menos de 7 → REPROVA

5. **Risco de Não Agir?**
   - Score: 0-10
   - Se menos de 8 → REPROVA

**SCORE MASTER:**
- 8+ em TODOS = avança
- Menos de 8 em qualquer um = REPROVADA

**SE FALHAR → Volta com feedback específico**

---

### **PASSO 3: CHECKPOINT 1 (Mecanismo Único)**

**9 Perguntas Eliminatórias:**

- [ ] Oferta tem NOME PRÓPRIO que não existe no mercado?
- [ ] Método é VISUAL e pode ser desenhado em 30s?
- [ ] Existe processo EXCLUSIVO que só funciona nesse contexto?
- [ ] Um concorrente consegue replicar mudando só o nome? (SIM = REPROVA)
- [ ] Mecanismo resolve problema DIFERENTEMENTE ou só "melhor"?
- [ ] Dá pra explicar sem "mais rápido/fácil/completo"?
- [ ] Tem framework, modelo ou sistema batizado?
- [ ] Existe metáfora/analogia proprietária?
- [ ] Entrega é TANGÍVEL (ferramenta, template, processo)?

**CRITÉRIO DE APROVAÇÃO:**
- 9 SIM = Categoria proprietária ✅
- 6-8 SIM = Mecanismo genérico ⚠️
- 0-5 SIM = REPROVA ❌

**SE FALHAR → Volta para reposicionar mecanismo**

---

### **PASSO 4: CHECKPOINT 2 (Voz com Verdade)**

**12 Testes de Validação Imperial:**

1. Autenticidade Emocional (raiva é legítima?)
2. Zero Marcadores (flui como cena viva?)
3. Visual Narrativo (tem impacto visual?)
4. Linguagem Cirúrgica (vai direto na ferida?)
5. Profundidade em Camadas (superficial → emocional → existencial?)
6. Comando Inegociável (verbo + prazo + tensão?)
7. Tensão Crescente (existe arco?)
8. Equilíbrio 70/30 (70% valor, 30% brutalidade?)
9. Estrutura Integrada (início, ápice, fecho conectados?)
10. Variedade Expressiva (nada parece repetido?)
11. Coerência com Doutrina (encaixa no método Torriani?)
12. Proteção de Sistema (não expõe estrutura interna?)

**CRITÉRIO DE APROVAÇÃO:**
- 10-12 SIM = Voz autêntica ✅
- 7-9 SIM = Boa mas fraca ⚠️
- 0-6 SIM = REPROVA ❌

**SE FALHAR → Volta para injetar autenticidade emocional**

---

### **PASSO 5: CHECKPOINT 3 (Transformação Executável)**

**15 Critérios da Promessa Violenta:**

- [ ] Tem NÚMERO concreto?
- [ ] Tem PRAZO definido?
- [ ] Tem MÉTRICA observável?
- [ ] Pessoa consegue SE VER com resultado?
- [ ] Existe ANTES/DEPOIS emocional?
- [ ] Transformação é PALPÁVEL?
- [ ] Há custo de NÃO agir agora?
- [ ] Tempo é INIMIGO visível?
- [ ] Existe "última janela" estrutural?
- [ ] Promete FAZER ou apenas "aprender"?
- [ ] Resultado independe de "esforço" vago?
- [ ] Tem primeiro passo ÓBVIO pós-compra?
- [ ] Serve SÓ pra esse público?
- [ ] Alguém "de fora" se sentiria excluído?
- [ ] Usa linguagem tribal do nicho?

**CRITÉRIO DE APROVAÇÃO:**
- 12-15 SIM = Promessa violenta ✅
- 8-11 SIM = Promessa vaga ⚠️
- 0-7 SIM = REPROVA ❌

**SE FALHAR → Volta para executabilizar promessa**

---

### **PASSO 6: DECISÃO FINAL**

**SCORE TOTAL = Somatório de todos os testes**

- **90-100/100 = 10/10 → APROVADA ✅ PUBLICA**
- **80-89/100 = 8-9/10 → REPROVADA ❌ VOLTA**
- **Menos de 80/100 = Abaixo de 8 → REPROVADA ❌ REFAZ**

**RESULTADO FINAL:**
- Score: __/100
- Status: [ ] Aprovada [ ] Reprovada
- Motivo se reprovada: ________________

---

## 🚀 ESTÁGIO 4: PUBLICAÇÃO
### *Duração: 1-2 horas*

**Responsável:** Você (Juliano) ou @devops

**CHECKLIST FINAL:**

- [ ] Oráculo aprovou 10/10?
- [ ] Arquivo .md criado em `/copys/`?
- [ ] Histórias reais validadas?
- [ ] Números reais inseridos?
- [ ] Links funcionam?
- [ ] CTA está claro?
- [ ] Email de promoção está pronto?
- [ ] Landing page está pronta?

**PUBLICA QUANDO:** Todos os itens acima = ✅

---

## 📋 SUMMARY DO WORKFLOW

| Estágio | Responsável | Duração | Criterio de Aprovação |
|---------|-------------|---------|----------------------|
| 1. Estratégia | @todd-brown | 2-4h | Big Idea + Brief completo |
| 2. Escrita | Copy Executor | 4-8h | Seções seguem Oráculo |
| 3. Validação | Oráculo | 2-4h | Score 10/10 (90+/100) |
| 4. Publicação | You/@devops | 1-2h | Todos os checkboxes ✅ |

**Tempo total:** 9-18 horas para 1 carta de vendas

---

## 🔥 PROIBIÇÕES ABSOLUTAS

**NÃO PODE TER:**

❌ Cliché de coach ("acredite em você", "destrave seu potencial")
❌ Frases vazias ("aumente seus resultados", "melhore sua performance")
❌ Qualificadores ("muito", "talvez", "basicamente")
❌ Estrutura fraca (slides literais, etapas descritas)
❌ Promessa sem método (benefício sem mecanismo)
❌ Copy sem diferencial (copiável por concorrente)
❌ Dor genérica (bonita em vez de visceral)
❌ Risco inexistente (pessoa pode sair ilesa)

---

## 📞 E SE FALHAR?

**Protocolo de Reescrita:**

1. **Identifique onde falhou:**
   - Master = reescreve tudo
   - CP1 = reposiciona mecanismo
   - CP2 = injeta autenticidade
   - CP3 = executa promessa

2. **Aplique o Micromecanismo específico** (do Oráculo)

3. **Reescreva APENAS essa seção**

4. **Retorne para validação no mesmo step**

5. **Não é "quase pronto"** - ou passa 10/10 ou volta

---

## 🛑 EXCEÇÕES?

**Não existem exceções.**

Não existe:
- "Quase pronto"
- "Vamos ajustar depois"
- "Já é suficiente"
- "Deixa passar dessa vez"

**Copy que não passa no Oráculo = Copy que não converte.**

Copy que não converte = **tempo e dinheiro jogado fora.**

---

## 📌 DOCUMENTAÇÃO

Este workflow é OBRIGATÓRIO para:
- [ ] Cartas de vendas para novos produtos
- [ ] Cartas de vendas para relançamentos
- [ ] Cartas de vendas para novas ofertas
- [ ] Cartas de vendas para sequências de emails (primeira)

---

**VERSÃO:** 1.0
**CRIADO:** 05/02/2026
**VIGENTE:** A PARTIR DE AGORA
**ALTERAÇÕES:** Requer aprovação de Oráculo + Copy Chief

---

*"Se a copy parece com qualquer outra do mercado, ela já está morta."*
**— Oráculo Torriani**

*"Nenhuma carta de vendas sai sem passar por aqui. ZERO EXCEÇÕES."*
**— Copy Chief**

## Quality Gates
- 4 steps de validacao executados na sequencia (inviolaveis, craft, oraculo, sugarman)
- Nota 10/10 no Oraculo ou copy retorna para reescrita
- Zero palavras proibidas no output final
