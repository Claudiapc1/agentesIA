# Template: Sequência de Abandono de Carrinho

```yaml
name: cart-abandonment-sequence-template
description: Sequência de 3-5 emails para recuperar quem abandonou o checkout
agent_sugerido: ben-settle, andre-chaperon
tipo: recuperacao
output_type: email-sequence
version: 1.0
priority: MEDIUM
emails: 3-5
cadence: escalonada (1h, 24h, 48h, 72h, 5 dias)
```

## Instruções de Uso

1. Configure o trigger de abandono no seu sistema de automação
2. Preencha os placeholders [PLACEHOLDER] com dados do produto
3. Ajuste o timing conforme seu ciclo de decisão (ticket alto = mais tempo)
4. Personalize com dados do carrinho abandonado (nome do produto, preço)
5. Teste subject lines A/B — abertura é tudo nessa sequência

---

## VISÃO GERAL DA SEQUÊNCIA

```
EMAIL 1: Lembrete Suave (1 hora após abandono)
    ↓ Tom: prestativo, sem pressão
EMAIL 2: Objeção + Prova Social (24 horas)
    ↓ Tom: empático, quebra de objeções
EMAIL 3: Urgência + Incentivo (48 horas)
    ↓ Tom: direto, escassez legítima
EMAIL 4: Última Chance (72 horas) — OPCIONAL
    ↓ Tom: urgente, deadline real
EMAIL 5: Breakup Email (5 dias) — OPCIONAL
    ↓ Tom: respeitoso, porta aberta
```

### Princípios da Sequência
- **Não pareça spam:** Cada email deve ter valor independente
- **Escale a urgência:** Do suave ao direto, nunca ao contrário
- **Personalize:** Use o nome do produto que estava no carrinho
- **Facilite:** Sempre inclua link direto para retomar o checkout

---

## EMAIL 1: LEMBRETE SUAVE

**Timing:** 1 hora após abandono
**Objetivo:** Recuperar quem saiu por distração, problema técnico ou indecisão

### Subject Lines (teste A/B)
```
Opção A: Você esqueceu algo, [NOME]?
Opção B: Seu [PRODUTO] está esperando por você
Opção C: Problema no checkout? Posso ajudar
Opção D: [NOME], seu carrinho ainda está salvo
Opção E: Opa — aconteceu alguma coisa?
```

### Preview Text
```
Seu pedido está reservado por tempo limitado...
```

### Corpo do Email

```
Oi [NOME],

Percebi que você começou o processo de compra do [NOME DO PRODUTO]
mas não finalizou.

Acontece com frequência — às vezes a internet cai, o telefone toca,
ou simplesmente precisamos de mais um momento para decidir.

Seu carrinho ainda está salvo:

━━━━━━━━━━━━━━━━━━━━━━━━
🛒 SEU CARRINHO:
[NOME DO PRODUTO]
Valor: R$ [PREÇO]
[CONDIÇÃO ESPECIAL SE HOUVER]
━━━━━━━━━━━━━━━━━━━━━━━━

[BOTÃO: FINALIZAR MINHA COMPRA →]

Se teve algum problema técnico ou dúvida sobre o produto,
é só responder esse email. Estou aqui para ajudar.

[ASSINATURA]

P.S. — Reservamos seu carrinho por [TEMPO]. Depois disso,
não podemos garantir [PREÇO ESPECIAL / BÔNUS / VAGA].
```

### Elementos Chave
- [ ] Tom prestativo, não vendedor
- [ ] Mostra o que ficou no carrinho
- [ ] Link direto para retomar checkout
- [ ] Oferece ajuda para problemas técnicos
- [ ] Escassez sutil no P.S.

---

## EMAIL 2: OBJEÇÃO + PROVA SOCIAL

**Timing:** 24 horas após abandono
**Objetivo:** Endereçar as objeções mais comuns que travam a compra

### Subject Lines
```
Opção A: Será que [PRODUTO] é pra você?
Opção B: A dúvida que quase me impediu também...
Opção C: [NOME], posso ser honesto com você?
Opção D: O que [NÚMERO]+ [AVATARES] descobriram
Opção E: Isso pode te ajudar a decidir
```

### Preview Text
```
A resposta para sua maior dúvida...
```

### Corpo do Email

```
[NOME],

Ontem você quase levou o [PRODUTO].

Quase.

E eu entendo. Tomar uma decisão de investimento exige confiança.

---

Nos últimos [TEMPO], conversei com centenas de pessoas que
estiveram exatamente onde você está agora.

E as 3 dúvidas mais comuns são:

❓ "[OBJEÇÃO #1 — ex: E se não funcionar pra mim?]"

[RESPOSTA CURTA + PROVA]
→ [NOME DO CLIENTE]: "[DEPOIMENTO DE 1-2 LINHAS]"

---

❓ "[OBJEÇÃO #2 — ex: Não sei se tenho tempo]"

[RESPOSTA CURTA + PROVA]
→ [NOME DO CLIENTE]: "[DEPOIMENTO DE 1-2 LINHAS]"

---

❓ "[OBJEÇÃO #3 — ex: É caro demais]"

[RESPOSTA CURTA + PROVA]
→ [NOME DO CLIENTE]: "[DEPOIMENTO DE 1-2 LINHAS]"

---

Se a sua dúvida é outra, me responde esse email.

Se era uma dessas... seu carrinho ainda está aqui:

[BOTÃO: RETOMAR MINHA COMPRA →]

🛡️ Lembre-se: garantia de [X] dias. Zero risco.

[ASSINATURA]

P.S. — [DADO DE PROVA SOCIAL: "X pessoas compraram nas últimas 24h"
ou "X% dos nossos clientes recomendam"]
```

### Elementos Chave
- [ ] Aborda as 3 objeções mais comuns
- [ ] Cada objeção tem depoimento/prova
- [ ] Garantia reforçada
- [ ] CTA direto para o carrinho
- [ ] Tom empático, não agressivo

---

## EMAIL 3: URGÊNCIA + INCENTIVO

**Timing:** 48 horas após abandono
**Objetivo:** Criar urgência real e/ou oferecer incentivo para fechar

### Subject Lines
```
Opção A: Último dia para [CONDIÇÃO ESPECIAL]
Opção B: [NOME], reservei algo pra você
Opção C: Isso expira em [X] horas ⏰
Opção D: Uma surpresa antes que seu carrinho expire
Opção E: [NOME], preciso te dizer uma coisa
```

### Preview Text
```
Isso não vai durar muito mais...
```

### Corpo do Email

```
[NOME],

Vou direto ao ponto.

Seu carrinho com [PRODUTO] ainda está salvo.

Mas não por muito tempo.

---

[ESCOLHA UMA ESTRATÉGIA DE INCENTIVO:]

[OPÇÃO A — Desconto]
Como você demonstrou interesse real, quero te oferecer
algo exclusivo:

🎁 [X]% de desconto no [PRODUTO]
Código: [CÓDIGO] (válido por [X] horas)

De R$ [PREÇO CHEIO] por R$ [PREÇO COM DESCONTO]

---

[OPÇÃO B — Bônus Extra]
Separei um bônus exclusivo para quem finalizar até [DATA/HORA]:

🎁 [NOME DO BÔNUS] (Valor: R$ [X])
[Descrição em 1 linha do que é]

Esse bônus NÃO estará disponível depois.

---

[OPÇÃO C — Sem Incentivo, Só Urgência]
[ELEMENTO DE ESCASSEZ REAL]:
• Preço sobe para R$ [VALOR] em [DATA]
• Restam apenas [X] vagas nesta turma
• Bônus [NOME] será removido em [DATA]

---

[BOTÃO: GARANTIR MINHA VAGA AGORA →]

━━━━━━━━━━━━━━━━━━━━━━━━
🛒 RESUMO DO SEU PEDIDO:
[PRODUTO]: R$ [PREÇO]
[BÔNUS/DESCONTO SE APLICÁVEL]
Garantia: [X] dias
━━━━━━━━━━━━━━━━━━━━━━━━

[ASSINATURA]

P.S. — Essa condição especial expira em [HORÁRIO/DATA].
Depois disso, [CONSEQUÊNCIA REAL].
```

### Elementos Chave
- [ ] Urgência é real e específica (data/hora)
- [ ] Incentivo é claro e exclusivo
- [ ] Resumo do pedido facilita decisão
- [ ] CTA forte e direto
- [ ] Deadline explícito

---

## EMAIL 4: ÚLTIMA CHANCE (OPCIONAL)

**Timing:** 72 horas após abandono
**Objetivo:** Último push antes de encerrar a sequência

### Subject Lines
```
Opção A: Última chance, [NOME]
Opção B: Preciso encerrar seu carrinho
Opção C: Isso acaba hoje à meia-noite
Opção D: [NOME], uma última coisa antes de ir...
Opção E: ⚠️ Seu carrinho será excluído em [X]h
```

### Corpo do Email

```
[NOME],

Esse é meu último email sobre [PRODUTO].

Amanhã, [CONSEQUÊNCIA]:
• [Seu carrinho será removido]
• [O desconto/bônus expira]
• [As vagas se encerram]

---

Quero recapitular o que está em jogo:

✅ O que você ganha: [RESUMO DO PRODUTO + BÔNUS EM 3 LINHAS]
🛡️ Garantia: [X] dias — risco zero
💰 Investimento: [PREÇO] (ou [X]x de R$ [PARCELA])

---

Duas escolhas:

1️⃣ Não fazer nada. Continuar com [SITUAÇÃO ATUAL].
   Daqui a [TEMPO], provavelmente estará no mesmo lugar.

2️⃣ Clicar no link abaixo. Começar hoje.
   E em [TEMPO], estar [RESULTADO].

[BOTÃO: FINALIZAR MINHA COMPRA →]

[ASSINATURA]

P.S. — Não enviarei mais emails sobre isso. A decisão é sua.
Mas se precisar de ajuda, estou a um email de distância.
```

---

## EMAIL 5: BREAKUP EMAIL (OPCIONAL)

**Timing:** 5 dias após abandono
**Objetivo:** Fechar o loop com elegância e abrir porta para o futuro

### Subject Lines
```
Opção A: Tudo bem, [NOME]. Sem ressentimentos.
Opção B: Eu entendo (e quero te dar algo)
Opção C: Uma última coisa, [NOME]
Opção D: Removendo seu carrinho...
```

### Corpo do Email

```
[NOME],

Percebi que [PRODUTO] não é pra agora.

E tudo bem. De verdade.

Cada pessoa tem seu momento.

---

Só quero que você saiba:

Se no futuro [PROBLEMA] voltar a te incomodar...
Se você decidir que é hora de [RESULTADO]...

É só me mandar um email. Estarei aqui.

---

[OPCIONAL — PRESENTE DE DESPEDIDA]
Enquanto isso, preparei [CONTEÚDO GRATUITO] pra você:

📎 [LINK PARA MATERIAL GRATUITO]

[Descrição do que é — ebook, checklist, aula, etc.]

Sem compromisso. É um presente.

---

Cuide-se,

[ASSINATURA]

P.S. — Se mudou de ideia e quer retomar, o link ainda funciona
por [TEMPO]: [LINK DO CHECKOUT]
```

### Elementos Chave
- [ ] Tom respeitoso, sem culpa
- [ ] Porta aberta para o futuro
- [ ] Material gratuito gera goodwill
- [ ] Link de checkout ainda disponível
- [ ] Remove da sequência de abandono

---

## CONFIGURAÇÃO TÉCNICA

### Timing Recomendado por Ticket
```
Ticket Baixo (< R$ 200):
  Email 1: 1 hora | Email 2: 24h | Email 3: 48h

Ticket Médio (R$ 200-1000):
  Email 1: 1 hora | Email 2: 24h | Email 3: 48h | Email 4: 72h

Ticket Alto (> R$ 1000):
  Email 1: 2 horas | Email 2: 24h | Email 3: 72h | Email 4: 5 dias | Email 5: 7 dias
```

### Segmentação Importante
```
→ Se abriu email mas não clicou: problema de copy/oferta
→ Se clicou mas não comprou: problema de checkout/preço
→ Se não abriu nenhum: problema de subject line/deliverability
→ Se comprou após email 1: remover dos emails seguintes!
```

---

## CONDIÇÕES DE VETO (quando este template falha)

- **Sem automação configurada:** Se o sistema não detecta abandono e não envia automaticamente, a sequência não funciona. Configure o trigger antes de escrever a copy.
- **Urgência falsa:** Se o carrinho "expira" mas na verdade o prospect pode voltar quando quiser, você perde credibilidade permanentemente.
- **Incentivo usado como muleta:** Se todo abandono gera desconto, você treina o público a abandonar de propósito. Use incentivos com moderação.
- **Sem personalização:** Emails genéricos sem o nome do produto abandonado têm performance 60% menor.
- **Excesso de emails:** Mais de 5 emails de abandono vira assédio. Respeite o "não" implícito.

---

## CHECKLIST FINAL

**Antes de ativar:**
- [ ] Trigger de abandono configurado no sistema
- [ ] Emails removem o contato da sequência após compra
- [ ] Subject lines testadas A/B
- [ ] Link de checkout funciona e retoma o carrinho
- [ ] Timing ajustado para o ticket do produto
- [ ] Incentivo (se houver) tem deadline real
- [ ] Preview text configurado em todos os emails
- [ ] Mobile-friendly verificado
- [ ] Unsubscribe link presente
- [ ] Prova social é verificável
