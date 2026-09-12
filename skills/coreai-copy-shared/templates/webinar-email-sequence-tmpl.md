# Template: Sequência de Emails para Webinar

```yaml
name: webinar-email-sequence-template
description: Sequência de 5-7 emails para webinar — convite, lembretes, replay e oferta. Com timing e copy para cada email
agent_sugerido: jeff-walker, andre-chaperon
tipo: lancamento
output_type: email-sequence
version: 1.0
priority: MEDIUM
emails: 5-7
cadence: pré-webinar (3-7 dias) + pós-webinar (3 dias)
```

## Instruções de Uso

1. Defina a data do webinar ANTES de escrever — todo o timing depende dela
2. Preencha os placeholders [PLACEHOLDER] com dados reais
3. Adapte o tom de voz para seu avatar
4. Configure automação com delays precisos
5. Segmente: quem assistiu vs quem não assistiu (emails pós-webinar diferentes)

---

## VISÃO GERAL DA SEQUÊNCIA

```
PRÉ-WEBINAR:
EMAIL 1: Convite Principal (5-7 dias antes)
    ↓ [Objetivo: gerar inscrição]
EMAIL 2: Lembrete + Conteúdo (2-3 dias antes)
    ↓ [Objetivo: manter interesse, reduzir no-show]
EMAIL 3: Lembrete Dia Anterior (24 horas antes)
    ↓ [Objetivo: confirmar presença]
EMAIL 4: Lembrete Dia D (1-2 horas antes)
    ↓ [Objetivo: garantir presença ao vivo]

PÓS-WEBINAR:
EMAIL 5: Replay + Oferta (para quem não assistiu) — 2-6h depois
EMAIL 6: Urgência + Oferta (24-48h depois)
EMAIL 7: Último Aviso (72h depois — fechamento)
```

---

## EMAIL 1: CONVITE PRINCIPAL

**Timing:** 5-7 dias antes do webinar
**Objetivo:** Gerar inscrição com promessa clara de valor

### Subject Lines (teste A/B)
```
Opção A: [NOME], convite especial: [TEMA DO WEBINAR]
Opção B: Aula ao vivo gratuita: Como [RESULTADO] em [TEMPO]
Opção C: Você está convidado(a) para [EVENTO]
Opção D: [DATA] — Reserve na sua agenda (importante)
Opção E: O que [NÚMERO]+ [AVATARES] querem saber sobre [TEMA]
```

### Preview Text
```
Vaga gratuita para a aula ao vivo de [DATA]...
```

### Corpo do Email

```
Oi [NOME],

Tenho um convite especial pra você.

No próximo [DIA DA SEMANA], [DATA], às [HORÁRIO],
vou fazer uma aula ao vivo e gratuita sobre:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[TÍTULO DO WEBINAR]
[SUBTÍTULO — promessa principal]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nessa aula, você vai descobrir:

✅ [BENEFÍCIO/REVELAÇÃO 1 — o mais atrativo]
✅ [BENEFÍCIO/REVELAÇÃO 2]
✅ [BENEFÍCIO/REVELAÇÃO 3]
✅ [BÔNUS: algo extra que gera curiosidade]

---

Para quem é essa aula:

→ [AVATAR] que [SITUAÇÃO/DESEJO 1]
→ [AVATAR] que [SITUAÇÃO/DESEJO 2]
→ [AVATAR] que [SITUAÇÃO/DESEJO 3]

---

📅 Data: [DIA DA SEMANA], [DATA]
⏰ Horário: [HORÁRIO] (horário de Brasília)
📍 Onde: Online e ao vivo (você receberá o link por email)
💰 Investimento: GRATUITO

[BOTÃO: QUERO RESERVAR MINHA VAGA →]

---

Sobre quem vai apresentar:

[NOME DO EXPERT] é [CREDENCIAL EM 2-3 LINHAS].
Já ajudou [NÚMERO]+ [AVATARES] a [RESULTADO].

---

⚠️ Vagas limitadas. [MOTIVO DA LIMITAÇÃO — plataforma, interação, etc.]

[BOTÃO: GARANTIR MINHA VAGA GRATUITA →]

[ASSINATURA]

P.S. — Essa aula NÃO ficará gravada [OU: o replay ficará
disponível por tempo limitado]. Se você quer [RESULTADO],
reserve agora e coloque na agenda.
```

### Elementos Chave
- [ ] Promessa clara de valor (o que vai aprender)
- [ ] Data, horário e formato explícitos
- [ ] "Gratuito" destacado
- [ ] Credenciais do expert
- [ ] Escassez (vagas limitadas)
- [ ] CTA para inscrição

---

## EMAIL 2: LEMBRETE + CONTEÚDO DE VALOR

**Timing:** 2-3 dias antes do webinar
**Objetivo:** Manter interesse, reduzir no-show, entregar valor antecipado

### Subject Lines
```
Opção A: [NOME], lembra da aula de [DIA]?
Opção B: Antes da aula, quero te contar algo...
Opção C: Um aperitivo do que você vai aprender [DIA]
Opção D: [DADO SURPREENDENTE] sobre [TEMA]
Opção E: Preparação para [DIA]: leia isso antes
```

### Corpo do Email

```
E aí [NOME],

Faltam [X] dias para nossa aula ao vivo.

E antes do dia, quero te dar um aperitivo.

---

[MICRO-CONTEÚDO DE VALOR — 1 insight poderoso sobre o tema]

Sabia que [DADO SURPREENDENTE SOBRE O TEMA]?

A maioria dos [AVATARES] acredita que [CRENÇA ERRADA].

Mas a verdade é que [INSIGHT CONTRAINTUITIVO].

E na aula de [DIA], vou mostrar exatamente como usar
isso a seu favor.

---

O que você vai sair sabendo:

1️⃣ [TÓPICO 1 — mais detalhado que no email 1]
2️⃣ [TÓPICO 2]
3️⃣ [TÓPICO 3]
4️⃣ [SURPRESA: algo que ainda não revelei]

---

📅 [DIA DA SEMANA], [DATA] às [HORÁRIO]

[BOTÃO: JÁ ESTOU INSCRITO — CONFIRMAR PRESENÇA →]
[OU: AINDA NÃO ME INSCREVI — RESERVAR VAGA →]

---

Dica: Adicione ao seu calendário para não esquecer.
[LINK PARA ADICIONAR AO GOOGLE CALENDAR / ICAL]

[ASSINATURA]

P.S. — Prepare papel e caneta. Essa aula vai ser intensa.
Você vai sair com [RESULTADO CONCRETO].
```

---

## EMAIL 3: LEMBRETE DIA ANTERIOR

**Timing:** 24 horas antes
**Objetivo:** Confirmar presença e reduzir no-show

### Subject Lines
```
Opção A: AMANHÃ: Aula ao vivo sobre [TEMA]
Opção B: [NOME], é amanhã! Tudo pronto?
Opção C: Lembrete: [TÍTULO DO WEBINAR] — amanhã às [HORA]
Opção D: Já separou [HORÁRIO] amanhã?
Opção E: ⏰ Amanhã às [HORA] — não perca
```

### Corpo do Email

```
[NOME],

Amanhã é o dia!

📅 [TÍTULO DO WEBINAR]
⏰ [DIA], [DATA] às [HORÁRIO]

---

3 coisas para aproveitar ao máximo:

1. Esteja em um lugar tranquilo (sem distração)
2. Tenha papel e caneta para anotações
3. Entre [X] minutos antes para garantir seu lugar

---

O que você vai aprender:

✅ [BENEFÍCIO 1 — em 1 linha]
✅ [BENEFÍCIO 2]
✅ [BENEFÍCIO 3]

E no final, tenho uma surpresa especial
para quem assistir ao vivo.

---

[BOTÃO: CONFIRMAR MINHA PRESENÇA →]

Te vejo amanhã!

[ASSINATURA]

P.S. — Se você conhece alguém que precisa ouvir isso,
encaminhe esse email. Ainda tem vagas.
```

---

## EMAIL 4: LEMBRETE DIA D

**Timing:** 1-2 horas antes do webinar
**Objetivo:** Garantir que o inscrito entre na sala

### Subject Lines
```
Opção A: COMEÇA EM [X] MINUTOS 🔴
Opção B: [NOME], estamos ao vivo às [HORA]!
Opção C: Seu link de acesso para a aula ao vivo
Opção D: ⚡ Em [X] minutos — entre agora
Opção E: O link da aula está aqui (não perca)
```

### Corpo do Email

```
[NOME],

Em [X] minutos começamos!

[TÍTULO DO WEBINAR]

Clique no link abaixo para entrar:

[BOTÃO GRANDE: ENTRAR NA AULA AO VIVO →]

---

Dica rápida:
• Use fones de ouvido para melhor áudio
• Feche abas desnecessárias
• Prepare perguntas — vamos ter Q&A ao vivo

---

Lembre-se: quem ficar até o final
ganha [BÔNUS/SURPRESA EXCLUSIVA].

Te vejo lá dentro!

[ASSINATURA]
```

---

## EMAIL 5: REPLAY + OFERTA (PÓS-WEBINAR)

**Timing:** 2-6 horas após o webinar
**Objetivo:** Enviar replay para quem não assistiu + reforçar oferta para todos

### Segmentação
```
QUEM ASSISTIU → Foco na oferta, recapitulação
QUEM NÃO ASSISTIU → Foco no replay, FOMO
```

### Subject Lines
```
Para quem assistiu:
Opção A: O que você achou da aula? (+ link da oferta)
Opção B: Recapitulando o que vimos hoje + próximo passo

Para quem NÃO assistiu:
Opção A: [NOME], você perdeu. Mas tem uma segunda chance
Opção B: O replay está disponível (por tempo limitado)
Opção C: Todo mundo está falando sobre a aula de hoje...
```

### Corpo — Para Quem NÃO Assistiu

```
[NOME],

Você perdeu a aula ao vivo de hoje.

Mas entendo — a vida acontece.

Por isso, liberei o replay por tempo limitado:

[BOTÃO: ASSISTIR REPLAY AGORA →]

---

O que você perdeu:

✅ [PONTO ALTO 1 DA AULA]
✅ [PONTO ALTO 2]
✅ [PONTO ALTO 3]
✅ [OFERTA ESPECIAL revelada no final]

---

⚠️ O replay ficará disponível até [DATA/HORA].
Depois disso, será removido.

[BOTÃO: ASSISTIR ANTES QUE EXPIRE →]

[ASSINATURA]

P.S. — No final da aula, fiz um convite especial
para [PROGRAMA/PRODUTO]. Se você tem interesse em
[RESULTADO], assista até o final.
```

### Corpo — Para Quem Assistiu

```
[NOME],

Obrigado por ter ficado na aula até o final!

Recapitulando os 3 pontos-chave:

1️⃣ [INSIGHT PRINCIPAL]
2️⃣ [INSIGHT 2]
3️⃣ [INSIGHT 3]

---

Durante a aula, apresentei o [PRODUTO/PROGRAMA].

Para quem estava lá, o resumo:

📦 [O QUE INCLUI — 3-4 linhas]
💰 Investimento: R$ [PREÇO] (ou [X]x de R$ [PARCELA])
🛡️ Garantia: [X] dias
🎁 Bônus exclusivos para quem assistiu ao vivo: [BÔNUS]

Essa condição é válida até [DATA/HORA].

[BOTÃO: QUERO GARANTIR MINHA VAGA →]

[ASSINATURA]

P.S. — Se ficou com alguma dúvida, responde esse email.
Eu leio e respondo pessoalmente.
```

---

## EMAIL 6: URGÊNCIA + OFERTA

**Timing:** 24-48 horas após o webinar
**Objetivo:** Pressionar decisão com urgência real

### Subject Lines
```
Opção A: [NOME], a oferta do webinar encerra em [TEMPO]
Opção B: Última chance: [BÔNUS/PREÇO ESPECIAL]
Opção C: Preciso da sua resposta até [DATA]
Opção D: O que está te impedindo?
Opção E: Replay + oferta: expira amanhã ⏰
```

### Corpo do Email

```
[NOME],

Vou ser direto.

A condição especial que apresentei na aula
de [DIA] expira em [TEMPO].

Depois de [DATA/HORA]:
• O preço volta para R$ [PREÇO CHEIO]
• Os bônus [LISTA] serão removidos
• [OUTRA CONSEQUÊNCIA]

---

Você tem duas opções:

❌ Não fazer nada.
   Continuar com [SITUAÇÃO ATUAL].
   E daqui a [TEMPO], estar no mesmo lugar.

✅ Dar o próximo passo.
   Investir em [RESULTADO].
   E começar a [BENEFÍCIO] essa semana.

---

Recap rápido:

📦 [PRODUTO]: [O QUE É — 1 linha]
✅ Inclui: [LISTA RESUMIDA]
🎁 Bônus: [BÔNUS EXCLUSIVOS]
💰 R$ [PREÇO] ou [X]x de R$ [PARCELA]
🛡️ Garantia de [X] dias
⏰ Válido até: [DATA/HORA]

[BOTÃO: GARANTIR MINHA VAGA AGORA →]

[ASSINATURA]

P.S. — Se a única coisa te segurando é dúvida,
lembre da garantia de [X] dias. Você testa, aplica,
e se não for pra você, devolvo tudo. Risco zero.
```

---

## EMAIL 7: ÚLTIMO AVISO (FECHAMENTO)

**Timing:** 72 horas após o webinar (ou no dia do deadline)
**Objetivo:** Último push — fechar ou liberar

### Subject Lines
```
Opção A: Encerra hoje à meia-noite
Opção B: [NOME], último email sobre [PRODUTO]
Opção C: Sua última chance (de verdade)
Opção D: Em [X] horas, acabou
Opção E: Me despedindo da oferta do webinar
```

### Corpo do Email

```
[NOME],

Último email.

Hoje às [HORA] encerra a condição especial do [PRODUTO].

---

Se você assistiu a aula e sentiu que faz sentido...
Se você sabe que [RESULTADO] é o que precisa agora...
Se a única coisa que falta é clicar no botão...

Esse é o momento.

[BOTÃO: ÚLTIMA CHANCE — GARANTIR MINHA VAGA →]

---

Depois de [HORA]:
❌ Preço volta para R$ [VALOR CHEIO]
❌ Bônus exclusivos são removidos
❌ Replay será retirado do ar

---

Não vou insistir mais.

A decisão é sua.

Mas se você está esperando o "momento perfeito"...
ele raramente chega.

O melhor momento é agora.

[BOTÃO: SIM, QUERO [RESULTADO] →]

[ASSINATURA]

P.S. — Essa é minha última mensagem sobre [PRODUTO].
Se você decidir que não é pra agora, tudo bem.
Seguimos com conteúdo gratuito normalmente.
Obrigado por acompanhar.
```

---

## MÉTRICAS DE REFERÊNCIA

```
Taxa de Inscrição (email 1): 15-30% de clique
Taxa de Presença (show-up rate): 25-40% dos inscritos
Taxa de Replay: 10-20% dos que não assistiram ao vivo
Taxa de Conversão na Oferta: 5-15% dos presentes
```

---

## CONDIÇÕES DE VETO (quando este template falha)

- **Webinar sem valor real:** Se a aula é só um pitch disfarçado e não entrega conteúdo de verdade, a taxa de conversão despenca e a marca sofre. Entregue valor genuíno.
- **Replay eterno:** Se o replay fica disponível pra sempre, não há urgência e a taxa de assistir ao vivo cai drasticamente. Defina um deadline real.
- **Emails demais pós-webinar:** Mais de 3 emails de oferta após o webinar vira assédio. Escale urgência, não volume.
- **Sem segmentação:** Enviar o mesmo email pós-webinar para quem assistiu e quem não assistiu desperdiça relevância. Segmente.
- **Subject lines idênticas:** Se todas as subject lines começam com "Lembrete", o email 3 e 4 não serão abertos. Varie.
- **Sem deadline real:** Se a oferta "encerra" mas continua disponível, você treina o público a ignorar seus deadlines futuros.

---

## CHECKLIST FINAL

**Antes de ativar:**
- [ ] Data do webinar definida e emails programados com timing correto
- [ ] Subject lines variadas e testadas A/B
- [ ] Link de inscrição funciona
- [ ] Link do webinar ao vivo funciona
- [ ] Link do replay funciona e tem deadline real
- [ ] Emails pós-webinar segmentam quem assistiu vs quem não assistiu
- [ ] Oferta está clara (preço, bônus, garantia, deadline)
- [ ] Emails removem contato após compra
- [ ] Mobile-friendly verificado
- [ ] Unsubscribe link presente
- [ ] Calendário/reminder link funciona
- [ ] Automação de lembretes está configurada
