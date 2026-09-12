# 🔱 TASK: Validar Copy com Oráculo Torriani

**Task ID:** validate-copy-oraculo-v3.0
**Agent:** @juliano-torriani
**Category:** validacao
**Tier:** Validação Final (pós-criação)
**Difficulty:** medium
**Duration:** 10-20 minutos por copy
**Status:** ativo
**Versão:** 3.0 (Hybrid: Worker pre-check + Agent qualitativo)
**Data:** 2026-02-12
**Execution Type:** Hybrid (Worker script + Agent interpretation)
**Worker Scripts:** scripts/oraculo-precheck.sh
**Optimized by:** *optimize copywriters --implement

---

## MANDATORY PREFLIGHT: Run Worker Script FIRST

```
EXECUTE FIRST — antes de QUALQUER análise manual:

  bash scripts/oraculo-precheck.sh <copy-file> --json

IF o comando falhar → CORRIGIR o erro do script. NÃO proceder manualmente.
IF o comando funcionar → LER /tmp/preflight-oraculo.yaml. Usar ESSES dados.

VETO: Se /tmp/preflight-oraculo.yaml não existir → BLOCK.
      NÃO contar qualificadores/clichês manualmente.
      NÃO checar clareza manualmente. O script faz isso instantaneamente.

SE auto_reprova=true no preflight:
  → REPROVA IMEDIATAMENTE. Não precisa avaliar checkpoints.
  → Informar: "Copy contém proibições absolutas (clichês coach/frases vazias)"
  → Enviar lista de correções.
```

### Veto Conditions
- id: "GAP_ZERO_001"
  condition: "Preflight não executado"
  result: "VETO - BLOCK. Run oraculo-precheck.sh FIRST."
  rationale: "Clareza e proibições são 100% determinísticas. Script detecta em <1s."

- id: "ORACULO_002"
  condition: "Validacao que aceita nota inferior a 10/10"
  result: "VETO - BLOCK. Nota 9 ou menos = REFAZER, sem excecao."
  rationale: "O Oraculo e binario: 10/10 aprova, qualquer coisa abaixo refaz."

- id: "ORACULO_003"
  condition: "Pular qualquer dos 4 steps (inviolaveis, craft, oraculo, sugarman)"
  result: "VETO - BLOCK. Os 4 steps sao obrigatorios e sequenciais."
  rationale: "Cada step cobre uma classe de defeito distinta. Pular = ponto cego."

---

## 📌 OBJETIVO DA TASK

Validar se uma copy está pronta para publicação usando o Oráculo Torriani.

**Regra simples:**
- Nota 10/10 → APROVADA (sobe para publicação)
- Nota 9 ou menos → REFAZER (sem exceções)

---

## ✅ PRÉ-REQUISITOS

Antes de executar esta task, verifique se você tem:

- [ ] Copy completa (headline + body + CTA)
- [ ] Contexto claro (qual funil, qual objetivo)
- [ ] Avatar definido (quem é o lead, qual sua dor)

Se falta algum dos acima → **PARE. Reúna informações primeiro.**

---

## 🎯 INPUT REQUERIDO

```yaml
copy_completa:
  - headline: "Escreva a primeira linha aqui"
  - body: "Corpo da copy com todos os parágrafos"
  - cta: "Ação que você quer que pessoa faça"

contexto_campanha:
  - qual_funil: "Ex: Funil Sala Secreta, Funil FLI"
  - qual_passo: "Ex: Email 2, Email de Engajamento"
  - qual_objetivo: "Ex: Vender, Engajar, Despertar Interesse"

avatar_mercado:
  - quem_e: "Ex: Empreendedor digital, Lojista, Coach"
  - qual_dor_primaria: "Ex: Não consegue vender, Falta de tráfego"
  - qual_desejo: "Ex: Faturar R$ 10k/mês, Vender de forma automatizada"
```

---

## 🔄 PROCESSO DE EXECUÇÃO

### PASSO 1: Encaixe Narrativo (OBRIGATÓRIO)

**Pergunta de validação:**

1. Essa copy conecta com o que veio antes?
2. Ela prepara terreno para próximo passo?
3. O leitor sente continuidade ou ruptura?

**Se parecer solta/descontextualizada:**
→ ❌ **REPROVA AQUI MESMO** (não avança para próximo passo)

**Se tudo ok:**
→ ✅ Continua para Passo 2

---

### PASSO 2: Calibrar Estado Emocional

**Identifique em qual estado o lead está:**

- 🔴 **URGÊNCIA:** Precisa de solução rápida e objetiva
- 🟡 **DÚVIDA:** Precisa ser confrontado e ter dúvida dissolvida
- 🟢 **AÇÃO:** Precisa de refinamento e desafio

**Ação:** Tenha isso em mente ao validar tom da copy.

---

### PASSO 3: Validador Master (5 Critérios)

**⚠️ AVISO:** Se falhar EM QUALQUER UM desses critérios:
- Não continua para checkpoints
- **REFAZ DO ZERO**

**Critério 1: Promessa Copiável?**
- Teste: Qualquer concorrente poderia dizer a mesma coisa?
- ❌ Se SIM → REPROVA

**Critério 2: Dor Verdadeira?**
- Teste: A dor é específica e visceral ou é genérica/bonita?
- ❌ Se genérica → REPROVA

**Critério 3: Trava Scroll?**
- Teste: Primeira frase para scroll ou a pessoa desliza?
- ❌ Se não trava → REPROVA

**Critério 4: Promessa Executável?**
- Teste: Tem resultado concreto + caminho visível?
- ❌ Se é conteúdo bonito (educacional) → REPROVA

**Critério 5: Risco de Não Agir?**
- Teste: Pessoa sente que pode sair ilesa?
- ❌ Se pode sair ilesa → REPROVA

**Resultado do Master:**
- ✅ Passou em TODOS os 5 → Continua para Checkpoints
- ❌ Falhou em QUALQUER UM → REFAZ

---

### PASSO 4: Checkpoint 1 - Mecanismo Único

**Só chega aqui se passou no Master.**

**9 Perguntas (marque quantas são SIM):**

- [ ] A oferta tem NOME PRÓPRIO inédito?
- [ ] O método é VISUAL e explicável em 30s?
- [ ] Existe processo EXCLUSIVO?
- [ ] Concorrente consegue replicar mudando só nome? (SE SIM = REPROVA)
- [ ] Resolve DIFERENTE ou só "melhor"?
- [ ] Explica sem "mais rápido/fácil/completo"?
- [ ] Tem framework/modelo/sistema batizado?
- [ ] Existe metáfora/analogia proprietária?
- [ ] Entrega é TANGÍVEL (ferramenta/template/processo)?

**Score:**
- 9-10 SIM = ✅ Mecanismo proprietário
- 6-8 SIM = ⚠️ Genérico demais
- 0-5 SIM = ❌ **REFAZER**

---

### PASSO 5: Checkpoint 2 - Voz com Verdade

**Só chega aqui se passou no Master.**

**12 Testes (marque quantos são SIM):**

- [ ] Autenticidade emocional (fúria legítima, não teatral)?
- [ ] Zero marcadores (flui como cena, não diagnóstico)?
- [ ] Visual narrativo (gesto, metáfora, impacto)?
- [ ] Linguagem cirúrgica (direto na ferida)?
- [ ] Profundidade em camadas (superficial → emocional → existencial)?
- [ ] Comando inegociável (verbo + prazo + tensão)?
- [ ] Tensão crescente (arco com clímax)?
- [ ] Equilíbrio 70/30 (valor + brutalidade)?
- [ ] Estrutura integrada (início/ápice/fecho conectados)?
- [ ] Variedade expressiva (ritmo variável)?
- [ ] Coerência com Torriani (encaixa na doutrina)?
- [ ] Proteção de sistema (não expõe estrutura)?

**Score:**
- 10-12 SIM = ✅ Voz autêntica
- 7-9 SIM = ⚠️ Sem personalidade marcante
- 0-6 SIM = ❌ **REESCREVER**

---

### PASSO 6: Checkpoint 3 - Transformação Executável

**Só chega aqui se passou no Master.**

**15 Critérios (marque quantos são SIM):**

- [ ] Tem NÚMERO concreto?
- [ ] Tem PRAZO definido?
- [ ] Tem MÉTRICA observável?
- [ ] Pessoa consegue SE VER com resultado?
- [ ] Existe ANTES/DEPOIS emocional?
- [ ] Transformação é PALPÁVEL?
- [ ] Há custo de NÃO agir?
- [ ] Tempo é INIMIGO visível?
- [ ] Existe "última janela"?
- [ ] Promete FAZER ou "aprender"?
- [ ] Resultado não depende de "esforço" vago?
- [ ] Tem primeiro passo ÓBVIO?
- [ ] Serve SÓ pra esse público?
- [ ] Exclui quem não é avatar?
- [ ] Usa linguagem tribal do nicho?

**Score:**
- 12-15 SIM = ✅ Promessa violenta
- 8-11 SIM = ⚠️ Vaga demais
- 0-7 SIM = ❌ **REESCREVER**

---

### PASSO 7: Clareza e Limpeza

**Só chega aqui se passou no Master.**

**Checklist de limpeza:**

- [ ] Cada palavra trabalha? Deletar desnecessários
- [ ] Nenhum qualificador (muito, basicamente, talvez)?
- [ ] Nenhum preenchimento (na verdade, acredito que)?
- [ ] Nenhuma redundância (subir pra cima)?
- [ ] Ritmo está vivo? (Longa > Curta > Média > Curta)
- [ ] CTA é específico e binário?

**Se passou em tudo:**
→ ✅ Continua para Passo 8

**Se tem falhas:**
→ ⚠️ Corrija antes de passar adiante

---

### PASSO 8: Decisão Final

**Calcule a nota final (0-10):**

```
Nota = (Master passou? +2)
     + (CP1 score ÷ 3)
     + (CP2 score ÷ 4)
     + (CP3 score ÷ 5)
     + (Clareza OK? +1)
```

---

## 📤 OUTPUT A: Copy APROVADA (10/10)

```
✅ COPY APROVADA — NOTA 10/10
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Essa copy tem TUDO:

✓ Mecanismo único (não copiável)
✓ Promessa proprietária
✓ Dor específica (visceral)
✓ Tensão real (risco palpável)
✓ Voz autêntica
✓ Transformação executável
✓ Clareza brutal

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 O que torna única:
[Descrever o diferencial]

📈 Resultado esperado:
[Qual métrica vai subir]

✅ AÇÃO: PODE SUBIR PARA PUBLICAÇÃO
Essa copy vai converter.
```

---

## 📤 OUTPUT B: Copy REPROVADA (9 ou menos)

```
❌ COPY REPROVADA — NOTA X/10
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FALHAS IDENTIFICADAS (por gravidade):

[🔴 GRAVIDADE 10] → Falta de risco de não agir
   A pessoa pode sair ilesa. Sem risco = sem urgência.

[🔴 GRAVIDADE 9] → Promessa genérica
   "Aumente vendas" = qualquer concorrente diz.
   Precisa de NOME PRÓPRIO + método ÚNICO.

[🟠 GRAVIDADE 8] → Dor vaga
   "Está difícil?" = socialmente aceitável, não visceral.
   Precisa de CENA ESPECÍFICA que dói.

[🟠 GRAVIDADE 7] → Sem CTA real
   Lead não sabe exatamente o que fazer.
   Reforce com verbo claro + prazo + tensão.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROTOCOLO DE CORREÇÃO:

1️⃣ Falha em "Risco de Não Agir"
   Template: "Se você ignorar isso agora,
             daqui a X dias você vai [consequência]"

2️⃣ Falha em "Promessa Genérica"
   Template: "Em X dias, usando [método único],
             você faz [transformação específica]"

3️⃣ Falha em "Dor Vaga"
   Template: "Você [ação rotineira] todo dia…
             mas mesmo assim [dor silenciosa]"

4️⃣ Falha em "CTA Fraco"
   Template: "[Verbo 1]. [Verbo 2]. [Verbo 3]."
   Ex: "Abra WhatsApp. Mande a mensagem. Feche o pedido."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PERGUNTAS DESTRAVADORAS:

❓ Para a promessa:
   "O que oferecemos que NENHUM concorrente oferece?"

❓ Para a dor:
   "Onde essa pessoa sente VERGONHA ao não agir?"

❓ Para o risco:
   "Em 30 dias sem agir, qual custo emocional paga?"

❓ Para a voz:
   "Essa copy soa como confissão ou como palestra?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ AÇÃO: REFAÇA

Qual checkpoint falhou? Vamos corrigir.
```

---

## 🔧 MICROMECANISMO DE CORREÇÃO RÁPIDA

Se a copy tiver falhas específicas, use esses templates:

### ❌ Falha em "Dor Verdadeira"

**Estrutura:** Você [ação rotineira] todo dia… mas mesmo assim [dor silenciosa]

**Exemplo forte:**
```
"Você manda DM pra potencial cliente todo dia,
faz lives, publica carrossel, tira print de resultado…

Mas mesmo assim ninguém clica. Ninguém compra.
Nem um 'oi' de volta."
```

---

### ❌ Falha em "Risco de Não Agir"

**Estrutura:** Se você ignorar isso agora, daqui a X dias você vai [consequência emocional]

**Exemplo forte:**
```
"Se você não implementar isso agora,
daqui a 30 dias você vai estar vendo seu concorrente
faturar R$ 50k enquanto você tá sem caixa,
com aquela sensação de impotência que conhece bem."
```

---

### ❌ Falha em "Promessa Copiável"

**Estrutura:** Em X dias, usando [método único], você faz [transformação específica]

**Exemplo forte:**
```
"Em 7 dias, usando o Canvas Cliente dos Sonhos,
você identifica exatamente quem vai pagar caro
e já sabe a primeira venda que vai fazer."
```

---

### ❌ Falha em "Ação Visível"

**Estrutura:** [Verbo urgente]. [Verbo urgente]. [Verbo urgente].

**Exemplo forte:**
```
"Abra o WhatsApp agora.
Mande o script de 4 frases pra 5 contatos.
Feche o primeiro pedido hoje."
```

---

## 📊 ESCALA DE GRAVIDADE EXPANDIDA

Use para saber por onde começar a reescrita:

| FALHA | GRAVIDADE | PRIORIDADE | O QUE FAZER |
|-------|-----------|-----------|-----------|
| Falta de risco | 🔴 10 | REFAZ JÁ | Injetar medo real + prazo curto |
| Promessa genérica | 🔴 9 | REFAZ JÁ | Criar nome próprio + método visual |
| Dor vaga/genérica | 🟠 8 | REFAZ HOJE | Trocar por cena específica |
| Sem CTA claro | 🟠 7 | REFAZ HOJE | Adicionar 3 verbos + prazo |
| Sem mecanismo | 🟡 6 | REFAZ DEPOIS | Estruturar método único |
| Ritmo fraco | 🟡 4 | POLIR | Quebrar frases longas |
| Metáfora fraca | 🟢 2 | OPCIONAL | Trocar por outra mais forte |

**Regra:** Falhas 7+ = NÃO PODE PUBLICAR

---

## 🎯 PERGUNTAS DESTRAVADORAS

Quando a copy fica presa em um checkpoint, use essas perguntas:

### Checkpoint 1 (Mecanismo):
- "O que essa oferta promete que nenhuma outra consegue?"
- "Se apagasse o nome da marca, 5 concorrentes poderiam usar?"
- "Qual é o processo INVISÍVEL que só funciona aqui?"
- "Essa oferta cria uma categoria nova ou compete em categoria existente?"

### Checkpoint 2 (Voz):
- "Onde essa pessoa sente VERGONHA se não agir?"
- "Qual cena dessa dor pode ser MOSTRADA e não descrita?"
- "Que palavras essa pessoa usa sozinha às 3h da manhã?"
- "Essa copy confronta a cumplicidade ou só aponta erro externo?"

### Checkpoint 3 (Transformação):
- "Em 7 dias, o que MUDA na rotina dessa pessoa?"
- "Qual métrica sobe/desce e em quanto tempo?"
- "O resultado depende de 'esforço' vago ou de PROCESSO?"
- "Se remover 'aprender/descobrir', o que sobra?"

---

## 🚫 PROIBIÇÕES ABSOLUTAS

Copy com QUALQUER UM desses = REPROVADA automaticamente

### ❌ Clichês de Coach:
- "acredite em você"
- "o segredo é…"
- "destrave seu potencial"
- "jornada de transformação"
- "você é incrível"

### ❌ Frases Vazias:
- "conteúdo de valor"
- "escale seus resultados"
- "aumente suas vendas"
- "melhore sua performance"

### ❌ Estruturas Fracas:
- Explicações técnicas sem tensão
- Foco no vendedor ("eu já fiz", "minha opinião")
- Perguntas de alívio ("está difícil?")
- Slide ou etapas listadas literalmente

---

## 📌 EXEMPLO COMPLETO DE USO

### Input:

```
COPY ENVIADA PARA VALIDAÇÃO:

Headline: "Aumente suas vendas com este novo método."

Body: "Muitos empreendedores têm dificuldade em vender.
Na verdade, segundo pesquisas, 70% dos negócios fracassam
porque não sabem como atrair clientes.
O bom é que existe uma solução.
Nós criamos um sistema que pode ajudar você a vender mais.
Com este método, você aprende estratégias novas e pode melhorar seus resultados.
Basicamente, o segredo é consistência e dedicação."

CTA: "Clique aqui para saber mais"
```

### Validação Step-by-Step:

**STEP 1 - Encaixe Narrativo:** ✅ OK (faz parte de sequência)

**STEP 2 - Estado Emocional:** 🟡 DÚVIDA (mas copy não resolve)

**STEP 3 - Validador Master:**

```
Critério 1 - Promessa Copiável?
❌ "Aumente suas vendas" = qualquer concorrente diz
→ REPROVA AQUI

RESULTADO: FALHOU NO MASTER
NÃO CONTINUA PARA CHECKPOINTS
REFAZ DO ZERO
```

### Output:

```
❌ COPY REPROVADA — NOTA 2/10
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FALHOU NO VALIDADOR MASTER (critério 1 de 5)

[🔴 GRAVIDADE 9] Promessa Genérica
   "Aumente suas vendas" = qualquer agência/coach diz isso
   → Sem diferencial, sem identidade
   → Copy é commodity, não proprietária

[🔴 GRAVIDADE 8] Dor Vaga e Genérica
   "Muitos empreendedores têm dificuldade" = bonito, não visceral
   → Não toca a dor real dessa pessoa
   → Parece artigo de blog, não copy de venda

[🔴 GRAVIDADE 9] Linguagem de Coach Clichê
   "o segredo é...", "você aprende", "melhore seus resultados"
   → Copy inteira é genérica educacional
   → Zero tensão, zero comando, zero diferencial

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROTOCOLO DE CORREÇÃO:

1. PROMESSA PROPRIETÁRIA
   Template: "Em X dias, usando [método único], você faz [transformação]"

   Opções possíveis:
   - "Em 7 dias, usando o Canvas DVE, você se posiciona e sobe 3x o preço"
   - "Em 21 dias, aplicando o Raio-X Psicológico, você vende pra quem paga"
   - "Em 14 dias, com a Escada de Valor, você fecha 3 clientes high-ticket"

2. DOR ESPECÍFICA
   Template: "Você [ação rotineira] todo dia… mas mesmo assim [dor silenciosa]"

   Opção possível:
   - "Você manda DM todo dia, faz reels, posta stories… mas ninguém compra nada"
   - "Você faz lives, tira print, comemora 10 likes… mas tá quebrado no fim do mês"
   - "Você tem o produto, conhecimento, vontade… mas não consegue vender caro"

3. RISCO DE NÃO AGIR
   Adicionar: "Se ignorar isso agora, daqui a 30 dias você vai estar…
             [vendo concorrente faturar / com mesma dor / sem saída]"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PERGUNTAS DESTRAVADORAS:

❓ "O que você oferece que NENHUM concorrente oferece?"
   (A resposta deve ser bem específica, não "melhor")

❓ "Qual é a dor que essa pessoa NUNCA contou pra ninguém?"
   (A resposta deve ser uma CENA, não conceito)

❓ "Se não agir agora, qual será o custo em 6 meses?"
   (A resposta deve ser emocional, não racional)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ REESCREVA TUDO

Copy inteira é genérica educacional.
Zero diferencial, zero tensão, zero comando.

Qual framework/método ÚNICO você usa?
Posicione a copy ao redor disso.
```

---

## ✅ CHECKLIST DE EXECUÇÃO

Antes de validar:
- [ ] Li toda a copy
- [ ] Entendi o contexto
- [ ] Identifiquei o avatar
- [ ] Levantei a dor primária

Durante a validação:
- [ ] Apliquei encaixe narrativo
- [ ] Calibrei estado emocional
- [ ] Testei validador master
- [ ] Avaliei 3 checkpoints (se passou no master)
- [ ] Verifiquei clareza
- [ ] Calculei nota final

Depois da validação:
- [ ] Enviei output claro (aprovada ou reprovada)
- [ ] Se reprovada: dei protocolos de correção
- [ ] Se reprovada: fiz perguntas destravadoras
- [ ] Se aprovada: confirmei que pode subir

---

## 🔄 PRÓXIMAS AÇÕES

### Se Copy Foi Aprovada (10/10):
1. ✅ Comunicar aprovação
2. ✅ Liberar para publicação
3. ✅ Log: registrar data, score, diferencial

### Se Copy Foi Reprovada:
1. ❌ Comunicar motivo
2. ❌ Enviar protocolo de correção
3. ❌ Oferecer revalidação após reescrita
4. ❌ Log: registrar data, score, motivo principal

---

## 🎯 COMANDO FINAL

```
"Se a copy parece com qualquer outra do mercado,
ela já está morta.

SEM PIEDADE. SEM EXCEÇÕES."
```

Copy nota 10 ou refaz.

---

**Task criada em 2026-02-05**
**Última atualização:** 2026-02-05
**Responsável:** Oráculo Torriani

*"Só copy que converte passa por aqui."*

## Executor

```yaml
executor: oraculo-torriani
```

## Pre-Conditions
- Copy completo pronto para validacao final
- Worker script `scripts/oraculo-precheck.sh` disponivel e funcional
- Preflight executado com sucesso (`/tmp/preflight-oraculo.yaml` existente)
- Copy ja passou por edicao (Halbert ou equivalente) e CUB Critique

## Output Example

```markdown
# Validação Oráculo Torriani — Email Cart Day 5 Final Call

## Score: 10/10 ✅ APROVADO

### V1: Regras Invioláveis
- Palavras proibidas: 0 encontradas ✅
- Clichês: 0 encontrados ✅
- Qualificadores fracos: 0 encontrados ✅

### V2: Regras de Craft (RC-01 a RC-10)
- Violações: 0 ✅
- Destaque: Ritmo de frases curtas excelente (RC-04)

### V3: Oráculo 10 Critérios
| Critério | Nota |
|----------|------|
| Clareza | 10 |
| Especificidade | 10 |
| Urgência Real | 10 |
| Emoção | 9 |
| Prova | 10 |
| CTA Claro | 10 |
| Ritmo | 10 |
| Hook | 10 |
| Autenticidade | 10 |
| Conversão | 10 |
| **Média** | **10/10** |

### V4: Sugarman 30 Triggers
- Triggers ativos: 18/30 ✅ (mínimo: 15)
- Mais fortes: Urgency, Fear of Loss, Storytelling, Specificity

## Veredicto: APROVADO — pronto para envio.
```

---

