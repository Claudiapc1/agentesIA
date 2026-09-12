# Template: Ads Campaign (Campanha de Anúncios com Variantes)

```yaml
name: ads-campaign-template
description: Template para campanhas de anúncios pagos com múltiplas variantes (Meta, Google, YouTube)
output_type: ads-campaign
version: 1.0
category: criacao
primary_agent: "@copywriter"
platforms: [meta, google, youtube]
formats: [imagem, video, carrossel]
note: "Diferente do ad-copy-tmpl que é para anúncio único — este é para CAMPANHA completa com variantes para teste A/B"
```

## Instruções de Uso

1. Defina a plataforma e objetivo da campanha
2. Preencha os placeholders {PLACEHOLDER}
3. Crie TODAS as variantes indicadas (hooks, copies, headlines)
4. Entregue as variantes organizadas para montagem de testes A/B
5. Inclua sugestões de segmentação

---

## DIFERENÇA: AD COPY vs. ADS CAMPAIGN

<!-- Este template é para CAMPANHA COMPLETA. Para anúncio individual, use ad-copy-tmpl.md -->

```
ad-copy-tmpl.md:                    ads-tmpl.md (ESTE):
- 1 anúncio                         - Campanha completa
- 1 hook, 1 copy, 1 CTA            - 3+ hooks, 3+ copies, 5+ headlines
- Formato único                     - Múltiplos formatos
- Sem teste A/B                     - Estruturado para teste A/B
- Execução rápida                   - Planejamento estratégico
```

---

## BRIEFING DA CAMPANHA

<!-- Preencha antes de criar as variantes. O briefing direciona tudo. -->

```
PRODUTO/SERVIÇO: {NOME}
OBJETIVO: {OBJETIVO — awareness / leads / vendas / retargeting}
PLATAFORMA: {META / GOOGLE / YOUTUBE / MÚLTIPLAS}
ORÇAMENTO DIÁRIO: R$ {VALOR}
DURAÇÃO: {PERÍODO}
PÚBLICO: {DESCRIÇÃO DO PÚBLICO}
TICKET: R$ {VALOR DO PRODUTO}
LANDING PAGE: {URL}
PIXEL: {CONFIGURADO — sim/não}

PROMESSA PRINCIPAL: {O QUE O PRODUTO ENTREGA}
DOR PRINCIPAL DO AVATAR: {DOR #1}
DESEJO PRINCIPAL DO AVATAR: {DESEJO #1}
DIFERENCIAL: {POR QUE ESSE E NÃO O CONCORRENTE}
PROVA SOCIAL: {NÚMERO + RESULTADO}
```

---

## SEÇÃO 1: HOOKS (3 Variações Obrigatórias)

<!-- O hook é a primeira linha do texto / primeiros 3 segundos do vídeo. Determina se a pessoa continua ou passa. -->

### Hook Variação 1 — Dor / Problema

```
{FRASE QUE NOMEIA A DOR DO AVATAR}

Opções:
• "Cansado de {DOR}?"
• "Se você {SITUAÇÃO DO AVATAR}, isso é pra você."
• "{PROBLEMA} está acabando com {CONSEQUÊNCIA}?"
• "Você já tentou {SOLUÇÃO COMUM} e não funcionou?"

HOOK ESCOLHIDO:
"{HOOK_1}"
```

### Hook Variação 2 — Resultado / Promessa

```
{FRASE QUE MOSTRA O RESULTADO POSSÍVEL}

Opções:
• "{RESULTADO} em {TEMPO}"
• "Como {AVATAR} está {RESULTADO} sem {OBJEÇÃO}"
• "De {SITUAÇÃO A} para {SITUAÇÃO B} em {TEMPO}"
• "{NÚMERO}+ {AVATARES} já {RESULTADO}"

HOOK ESCOLHIDO:
"{HOOK_2}"
```

### Hook Variação 3 — Curiosidade / Polêmica

```
{FRASE QUE GERA CURIOSIDADE OU DESAFIA CRENÇA COMUM}

Opções:
• "O que ninguém te conta sobre {TÓPICO}"
• "{CRENÇA COMUM} é mentira. E vou provar."
• "O segredo que {GRUPO DE SUCESSO} usa pra {RESULTADO}"
• "Você está cometendo esse erro sem saber"

HOOK ESCOLHIDO:
"{HOOK_3}"
```

---

## SEÇÃO 2: CORPO DO ANÚNCIO (3 Variações por Hook = 9 Combinações)

<!-- Cada hook combina com 3 variações de corpo. Total: 9 combinações para teste. -->

### Corpo Variação A — Story-Based (Curto)

```
HOOK: {HOOK_X}

{MINI HISTÓRIA — 3-4 frases}

{RESULTADO ESPECÍFICO}

{PROVA SOCIAL — número ou depoimento}

{CTA}

---

EXEMPLO PREENCHIDO:
"{HOOK_1}"

Eu estava exatamente nessa situação {TEMPO} atrás.
{O QUE TENTEI}. Nada funcionou.
Até descobrir {MÉTODO/PRODUTO}.

Em {TEMPO}, {RESULTADO COM NÚMEROS}.

Mais de {NÚMERO} pessoas já fizeram o mesmo.

{CTA} 👇
```

### Corpo Variação B — Benefícios / Lista

```
HOOK: {HOOK_X}

{FRASE DE TRANSIÇÃO}

O que você ganha:
✓ {BENEFÍCIO 1}
✓ {BENEFÍCIO 2}
✓ {BENEFÍCIO 3}
✓ {BENEFÍCIO 4}

{BÔNUS OU URGÊNCIA}

{CTA}

---

EXEMPLO PREENCHIDO:
"{HOOK_2}"

Isso é o que o {PRODUTO} entrega:

✓ {RESULTADO TANGÍVEL 1}
✓ {RESULTADO TANGÍVEL 2}
✓ {RESULTADO TANGÍVEL 3}
✓ {RESULTADO TANGÍVEL 4}

+ {BÔNUS} por tempo limitado.

{CTA} 👇
```

### Corpo Variação C — Problema-Solução Direta

```
HOOK: {HOOK_X}

O problema:
{DOR — 1-2 frases que descrevem a situação}

A solução:
{MÉTODO/PRODUTO — 1-2 frases que descrevem como resolve}

O resultado:
{TRANSFORMAÇÃO — 1-2 frases com prova}

{CTA}

---

EXEMPLO PREENCHIDO:
"{HOOK_3}"

O problema: {DOR DO AVATAR em uma frase}.
E quanto mais você tenta {SOLUÇÃO ERRADA}, pior fica.

A solução: {NOME DO PRODUTO}. Um {TIPO} que {O QUE FAZ}.
Criado por {CREDENCIAL} com {EXPERIÊNCIA}.

O resultado: {NÚMERO}+ {AVATARES} já {RESULTADO}.
A média é de {RESULTADO MÉDIO} em {TEMPO}.

{CTA} 👇
```

---

## SEÇÃO 3: HEADLINE VARIATIONS (5 Obrigatórias)

<!-- Headlines aparecem abaixo do criativo no Facebook/Instagram. No Google, são o elemento principal. -->

### Para Meta Ads (Facebook/Instagram)

```
<!-- Máximo recomendado: 40 caracteres -->

HEADLINE 1 (Benefício direto):
"{RESULTADO PRINCIPAL EM POUCAS PALAVRAS}"
→ Exemplo: "Emagreça 5kg em 21 dias"

HEADLINE 2 (Urgência):
"{URGÊNCIA + OFERTA}"
→ Exemplo: "Últimas vagas — 50% OFF"

HEADLINE 3 (Prova social):
"{NÚMERO + RESULTADO}"
→ Exemplo: "10.000+ alunos transformados"

HEADLINE 4 (Curiosidade):
"{PERGUNTA OU REVELAÇÃO}"
→ Exemplo: "O método que eles escondem"

HEADLINE 5 (CTA direto):
"{AÇÃO + BENEFÍCIO}"
→ Exemplo: "Comece sua transformação hoje"
```

### Para Google Ads

```
<!-- Headlines Google: 30 caracteres cada, até 15 headlines -->

HEADLINE 1: "{KEYWORD PRINCIPAL + BENEFÍCIO}"
HEADLINE 2: "{OFERTA + URGÊNCIA}"
HEADLINE 3: "{PROVA SOCIAL}"
HEADLINE 4: "{DIFERENCIAL}"
HEADLINE 5: "{CTA + BENEFÍCIO}"
HEADLINE 6: "{PERGUNTA COM KEYWORD}"
HEADLINE 7: "{RESULTADO ESPECÍFICO}"
HEADLINE 8: "{GARANTIA}"
```

### Para YouTube Ads

```
<!-- O "headline" no YouTube é o texto que aparece junto ao CTA -->

HEADLINE 1: "{AÇÃO DIRETA}"
→ Exemplo: "Assista a aula gratuita"

HEADLINE 2: "{BENEFÍCIO + TEMPO}"
→ Exemplo: "Resultados em 21 dias"

HEADLINE 3: "{OFERTA + URGÊNCIA}"
→ Exemplo: "Vagas limitadas — entre agora"
```

---

## SEÇÃO 4: DESCRIPTION VARIATIONS (3 Obrigatórias)

<!-- Descriptions complementam a headline. Aparecem abaixo nos ads de Meta e Google. -->

```
<!-- Máximo recomendado: 30 caracteres (Meta) / 90 caracteres (Google) -->

DESCRIPTION 1 (Complemento da headline):
"{FRASE QUE COMPLEMENTA A HEADLINE PRINCIPAL}"
→ Exemplo: "Sem dieta restritiva. Método comprovado."

DESCRIPTION 2 (Garantia / Risco zero):
"{GARANTIA + SEGURANÇA}"
→ Exemplo: "Garantia de 30 dias. Risco zero."

DESCRIPTION 3 (Social proof compacta):
"{NÚMERO + VALIDAÇÃO}"
→ Exemplo: "Aprovado por +5.000 clientes."
```

---

## SEÇÃO 5: CTA (Call-to-Action)

<!-- Escolha 1 CTA principal. Varie nas copies, não no CTA. Consistência > criatividade. -->

```
CTA POR OBJETIVO:

LEAD GENERATION:
• Baixe grátis
• Acesse a aula
• Quero o material
• Inscreva-se agora
• Saiba mais

VENDAS:
• Compre agora
• Garanta sua vaga
• Quero começar
• Aproveite a oferta
• Garantir meu acesso

AGENDAMENTO:
• Agende sua consulta
• Falar com especialista
• Reservar horário

CTA ESCOLHIDO PARA A CAMPANHA: {CTA}

<!-- Use o MESMO CTA em todos os anúncios da campanha para consistência -->
```

---

## SEÇÃO 6: FORMATO (Por Plataforma)

### Meta Ads (Facebook/Instagram)

```
FORMATO 1: IMAGEM ESTÁTICA
• Dimensões: 1080x1080 (feed) / 1080x1920 (stories)
• Texto na imagem: máximo 20% da área
• Briefing visual: {DESCRIÇÃO DO QUE A IMAGEM DEVE CONTER}

FORMATO 2: VÍDEO
• Dimensões: 1080x1080 (feed) / 1080x1920 (stories/reels)
• Duração: 15-30s (stories) / 30-60s (feed) / 60-90s (reels)
• Briefing: {DESCRIÇÃO DO CONTEÚDO DO VÍDEO}
• Hook visual: {O QUE APARECE NOS PRIMEIROS 3 SEGUNDOS}

FORMATO 3: CARROSSEL
• Slides: 3-10 cards
• Dimensões: 1080x1080
• Briefing por slide:
  - Slide 1 (capa): {CONTEÚDO}
  - Slide 2: {CONTEÚDO}
  - Slide 3: {CONTEÚDO}
  - Slide 4: {CONTEÚDO}
  - Slide 5 (CTA): {CONTEÚDO}
```

### Google Ads

```
FORMATO: RESPONSIVE SEARCH AD
• Headlines: 15 variações (30 chars cada)
• Descriptions: 4 variações (90 chars cada)
• URL final: {URL}
• Path display: {DOMÍNIO}/{PATH_1}/{PATH_2}

FORMATO: DISPLAY
• Dimensões: 300x250, 728x90, 160x600, 300x600
• Briefing visual: {CONTEÚDO DAS IMAGENS}
```

### YouTube Ads

```
FORMATO 1: IN-STREAM SKIPPABLE
• Duração: 15-60s (skip após 5s)
• Hook: primeiros 5 segundos são TUDO
• Script: {VER SEÇÃO DE VIDEO HOOKS}
• CTA: botão + companion banner

FORMATO 2: IN-STREAM NON-SKIPPABLE
• Duração: 15s (máximo)
• Mensagem direta e concisa
• Script: {VERSÃO COMPACTA}

FORMATO 3: SHORTS AD
• Duração: 15-60s
• Formato vertical (9:16)
• Script: {VERSÃO SHORTS}
```

---

## SEÇÃO 7: SEGMENTAÇÃO SUGERIDA

<!-- Sugestões para o gestor de tráfego. O copywriter deve conhecer o público pra quem escreve. -->

### Audiência Fria (Prospecção)

```
INTERESSE 1: {INTERESSE RELACIONADO AO TÓPICO}
INTERESSE 2: {INTERESSE RELACIONADO À DOR}
INTERESSE 3: {INTERESSE RELACIONADO AO COMPORTAMENTO}
INTERESSE 4: {CONCORRENTE / REFERÊNCIA DO MERCADO}

DEMOGRAFIA:
• Idade: {FAIXA}
• Gênero: {M/F/TODOS}
• Localização: {REGIÃO}
• Renda estimada: {FAIXA}

LOOKALIKE:
• Base: {COMPRADORES / LEADS / ENGAJADOS}
• Tamanho: {1-3%}
```

### Audiência Morna (Retargeting Nível 1)

```
• Visitou {URL} nos últimos {DIAS} dias
• Engajou com conteúdo nos últimos {DIAS} dias
• Abriu e-mail nos últimos {DIAS} dias
• Assistiu {X}% do vídeo de {CONTEÚDO}
```

### Audiência Quente (Retargeting Nível 2)

```
• Visitou página de vendas
• Adicionou ao carrinho
• Iniciou checkout sem finalizar
• Já comprou outro produto (cross-sell)
```

### Copy por Temperatura de Audiência

```
FRIA → Copy longa, mais educativa, prova social forte
MORNA → Copy média, relembrar benefícios, urgência
QUENTE → Copy curta, oferta direta, escassez real
```

---

## SEÇÃO 8: MATRIZ DE TESTES A/B

<!-- Organize os testes de forma sistemática. Teste UMA variável por vez. -->

```
TESTE 1: HOOK
├── Anúncio A: Hook 1 (Dor) + Corpo A + Headline 1
├── Anúncio B: Hook 2 (Resultado) + Corpo A + Headline 1
└── Anúncio C: Hook 3 (Curiosidade) + Corpo A + Headline 1

→ Vencedor do Hook: ___

TESTE 2: CORPO (com hook vencedor)
├── Anúncio D: Hook vencedor + Corpo A (Story)
├── Anúncio E: Hook vencedor + Corpo B (Lista)
└── Anúncio F: Hook vencedor + Corpo C (Problema-Solução)

→ Vencedor do Corpo: ___

TESTE 3: HEADLINE (com hook + corpo vencedores)
├── Anúncio G: Combo vencedor + Headline 1
├── Anúncio H: Combo vencedor + Headline 2
├── Anúncio I: Combo vencedor + Headline 3
├── Anúncio J: Combo vencedor + Headline 4
└── Anúncio K: Combo vencedor + Headline 5

→ Vencedor da Headline: ___

TESTE 4: FORMATO (com combo vencedor)
├── Anúncio L: Imagem
├── Anúncio M: Vídeo
└── Anúncio N: Carrossel

→ Vencedor do Formato: ___
```

### Métricas por Teste

```
MÉTRICA PRIMÁRIA: {CTR / CPA / ROAS — depende do objetivo}
MÉTRICA SECUNDÁRIA: {CPM / CPC / Taxa de conversão}
VOLUME MÍNIMO: {NÚMERO} impressões por variante antes de decidir
DURAÇÃO MÍNIMA: {DIAS} dias por teste
BUDGET POR TESTE: R$ {VALOR} por dia por variante
```

---

## ENTREGA FINAL: CHECKLIST DA CAMPANHA

```
📋 CAMPANHA: {NOME DA CAMPANHA}
📅 DATA: {DATA}
🎯 OBJETIVO: {OBJETIVO}
💰 BUDGET: R$ {VALOR}/dia

PEÇAS PRODUZIDAS:

HOOKS:
□ Hook 1 (Dor): "{HOOK_1}"
□ Hook 2 (Resultado): "{HOOK_2}"
□ Hook 3 (Curiosidade): "{HOOK_3}"

COPIES (por hook):
□ Copy A (Story) — {COMPRIMENTO} palavras
□ Copy B (Lista) — {COMPRIMENTO} palavras
□ Copy C (Problema-Solução) — {COMPRIMENTO} palavras

HEADLINES:
□ Headline 1: "{H1}"
□ Headline 2: "{H2}"
□ Headline 3: "{H3}"
□ Headline 4: "{H4}"
□ Headline 5: "{H5}"

DESCRIPTIONS:
□ Description 1: "{D1}"
□ Description 2: "{D2}"
□ Description 3: "{D3}"

CTA: {CTA_ESCOLHIDO}

FORMATOS:
□ {FORMATO 1}
□ {FORMATO 2}
□ {FORMATO 3}
```

---

## CHECKLIST DE QUALIDADE

**Copy:**
- [ ] 3 hooks criados (dor, resultado, curiosidade)
- [ ] 3 variações de corpo por hook
- [ ] 5 headlines criadas
- [ ] 3 descriptions criadas
- [ ] CTA definido e consistente
- [ ] Copy adaptada por temperatura de audiência
- [ ] Limites de caracteres respeitados por plataforma
- [ ] Nenhuma promessa que viole políticas da plataforma

**Campanha:**
- [ ] Objetivo definido e métricas claras
- [ ] Segmentação detalhada por nível de audiência
- [ ] Matriz de teste A/B organizada
- [ ] Budget e duração de teste definidos
- [ ] Formatos adequados à plataforma

**Técnico:**
- [ ] Pixel de conversão configurado
- [ ] UTMs nos links
- [ ] Landing page responsiva e rápida
- [ ] Tracking de conversão funcionando
- [ ] Briefing de criativos pronto para designer/videomaker

**Compliance:**
- [ ] Sem promessas exageradas
- [ ] Sem conteúdo proibido pela plataforma
- [ ] Disclaimer onde necessário
- [ ] Termos de uso e política de privacidade linkados
