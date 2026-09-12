<!--
checklist_id: filtro-anti-ia
version: 3.7
changelog:
  v3.1: "Adicionada §14 — Regras de Reescrita (preservar original bom, calibrar números à realidade do nicho, completar ideia). Origem: feedback Torriani 2026-05-18."
  v3.7 (referência): "checklists/PADRAO-ANTI-IA.md declara a fonte canônica desta cópia local como v3.7 (com §16, §19, §23.6-§23.10, §29, §30 adicionados até 24/05/2026). Esta cópia local em squads/conteudo/ ainda não reflete o conteúdo completo dessas seções, ver checklists/PADRAO-ANTI-IA.md para o mapa de mudanças pendentes de sincronização. Número de versão alinhado em 2026-08-18 para eliminar a divergência de rótulo (3.1 vs 3.7); a divergência de CONTEÚDO segue registrada como pendência, não foi resolvida nesta correção."
  validador-v4.0 (28/08/2026): "O VALIDADOR EXECUTÁVEL CANÔNICO desta checklist agora é legacy/squads/_shared/anti-ia/validate.mjs (fonte única, consolidação por decisão do founder de 28/08/2026: 'o anti-IA pode ser uma skill que todos os squads que produzem conteúdo podem chamar'). Ele substitui, como motor de regras, tanto squads/copy/scripts/anti-ia-validate.mjs quanto squads/conteudo/scripts/validate-anti-ia.sh + anti-ia-structural.mjs — esses três continuam existindo como WRAPPERS finos (mesmos comandos/flags de sempre) que delegam pra fonte única. Regra nova de anti-IA entra SÓ em legacy/squads/_shared/anti-ia/validate.mjs, nunca nos scripts dos squads. Ver legacy/squads/_shared/anti-ia/README.md para o mapa completo de origem das regras."
scope: UNIVERSAL (todos os clientes, todos os formatos, todos os agentes de escrita)
applies_to:
  - carousel-creator
  - reels-creator
  - stories-strategist
  - print-tweet-creator
  - content-repurposer
  - content-suggester
  - positioning-expert (bio, CLC, storyads)
  - strategist (copy de campanha)
enforced_by: content-validator (Layer 0, antes do oráculo de tom)
severity: VETO_BLOCKING
order_of_application:
  1: filtro-anti-ia (UNIVERSAL — esta checklist)
  2: oraculo-posts.md OU oraculo-reels.md (formato-específico)
  3: tom-de-voz do cliente ativo (ex: data/nucleo.md para Torriani)
-->

# FILTRO DE NATURALIDADE ANTI-IA — v3.1

> **VALIDADOR EXECUTÁVEL CANÔNICO (28/08/2026):** `legacy/squads/_shared/anti-ia/validate.mjs`. É a fonte única que implementa mecanicamente o subconjunto detectável das regras abaixo, reunindo o que antes estava dividido (e divergente) entre o validador do squad Copy e o do squad Conteúdo. Os scripts antigos (`squads/copy/scripts/anti-ia-validate.mjs`, `squads/conteudo/scripts/validate-anti-ia.sh`, `squads/conteudo/scripts/anti-ia-structural.mjs`) continuam funcionando com os mesmos comandos, mas agora só delegam pra esse validador. Detalhe completo em `legacy/squads/_shared/anti-ia/README.md`. Regra nova de anti-IA que também precisa virar checagem mecânica: escrever primeiro nesta checklist, depois implementar SÓ no validador compartilhado.

> **REGRA OBRIGATÓRIA DE SISTEMA.** Este filtro se aplica a TODO texto que você gerar, independente do cliente, do formato ou do canal. Vale para post, copy, roteiro, e-mail, legenda, headline, CTA, descrição, bio, anúncio, página de vendas — qualquer texto que sai pro usuário final.
>
> Este é o filtro UNIVERSAL. Depois dele, aplique o documento de TOM DE VOZ específico do cliente.

---

## COMO APLICAR (duas camadas obrigatórias)

### CAMADA 1 — DURANTE A ESCRITA
Filtre enquanto escreve. Não produza texto sujo pra "limpar depois". Aplique as regras desde a primeira frase do rascunho.

### CAMADA 2 — REVISÃO FINAL (CHECKPOINT OBRIGATÓRIO)
Antes de entregar QUALQUER texto, rode o `TESTE FINAL` da seção 9. Se falhar em qualquer item, reescreva antes de liberar.

---

## 1. FRASES E EXPRESSÕES PROIBIDAS (lista negra)

### Aberturas e ganchos batidos
- "a verdade que ninguém te conta"
- "não é sobre X, é sobre Y"
- "muita gente não percebe isso"
- "se você chegou até aqui"
- "neste vídeo vamos"
- "neste post vou falar"
- "hoje quero falar sobre"
- "vamos falar sobre"
- "imagine só"
- "imagina comigo"
- "imagine acordar todo dia sabendo que..."
- "você já parou pra pensar"
- "já se pegou pensando"
- "saiba que"
- "fato é que"

### Fechamentos e morais genéricas
- "em resumo"
- "no final do dia"
- "no final das contas"
- "e isso muda tudo"
- "faz toda a diferença"
- "pense nisso"
- "e é por isso que"
- "lembre-se sempre"
- "fica a reflexão"
- "no fim, é sobre..."
- "e isso é poderoso"
- "e isso é importante"

### Vocabulário corporativo morto
- "alta performance"
- "novos patamares"
- "transformar resultados"
- "potencial máximo"
- "jornada" (de sucesso, de transformação, do herói)
- "desbloquear"
- "próximo nível"
- "escalar com excelência"
- "revolucionário", "extraordinário", "transformador"
- "incrível" (como elogio próprio)
- "mindset" (usado vazio)

### Tom de coach motivacional
- "acredite em você"
- "você consegue"
- "basta querer"
- "vai dar certo"
- "o céu é o limite"
- "tudo é possível"
- "saia da zona de conforto"

### Construções simétricas viciadas
- "não é só X, é Y"
- "mais que X, é Y"
- "tanto X quanto Y"
- "não apenas... mas também"

### Muletas e formalismos artificiais
- "aliás" (como início pra emendar ideia)
- "inclusive" (como muleta de continuidade)
- "basicamente" (sem função real)
- "literalmente" (como intensificador)
- "de fato", "na verdade", "na realidade" (em excesso)
- "em última análise", "em essência", "fundamentalmente"
- "trata-se de", "diz respeito a"
- "uma vez que" (no sentido de "porque")
- "vale ressaltar", "é importante destacar", "cabe mencionar"
- "por outro lado" (em excesso)
- "portanto", "logo", "assim sendo", "dessa forma"
- "aqui está o pulo do gato", "aqui está o segredo", "aqui está a questão"

---

## 2. FINGERPRINTS DE IA ESCREVENDO PT-BR

> Esta seção é específica pra padrões que IA usa quando escreve português brasileiro. São os tiques que MAIS denunciam que não é humano escrevendo. Atenção redobrada.

### Pontuação e ritmo

1. **Não use travessão (—) como pausa estilística.** Brasileiro usa vírgula, parênteses ou ponto. Travessão em PT-BR só aparece em discurso direto literário, e mesmo assim raro.

2. **Não empilhe frases curtas martelando na MESMA linha/parágrafo.** "Faz isso. Faz aquilo. É assim." é fingerprint de IA. Use vírgula, "e", "mas", "então" pra conectar.

   **EXCEÇÃO:** frases curtas em LINHAS SEPARADAS (com quebra de parágrafo entre elas) funcionam — criam respiro e ritmo natural. Brasileiro escreve assim. O que IA faz errado é empilhar tudo na mesma linha.

   ❌ ERRADO (mesma linha):
   "Preço alto filtra. Preço baixo atrai problema. Quem cobra pouco atende muito."

   ✅ CERTO (linhas separadas):
   "Preço alto filtra cliente.

   Preço baixo atrai problema."

3. **Não use frases do mesmo tamanho em sequência.** Mesmo se forem médias. Texto humano respira — uma curta, uma longa de raciocínio, uma média.

4. **Não use ponto e vírgula em texto casual.** IA usa muito; brasileiro escrevendo post, copy ou email casual quase nunca usa. Em texto formal pode, mas é exceção.

5. **Não use dois pontos pra "anunciar" algo o tempo todo.** "Tem três coisas que importam: tempo, dinheiro e energia." Conecte de outra forma quando der.

### Estrutura de frase

6. **Não termine frase com palavra isolada de impacto.** "E o resultado? Decepção." Em PT-BR vira clichê de coach.

7. **Não use anáfora forçada** (repetir início de frase pra "ênfase"). "É sobre coragem. É sobre escolha. É sobre fazer." Padrão de TED Talk traduzido. Ninguém escreve assim em português natural.

8. **Não force paralelismo simétrico.** "Quem cobra pouco atende muito. Quem cobra muito atende pouco." Simetria perfeita denuncia. Humano escreve "Quem cobra pouco precisa atender em massa, quem cobra alto entrega valor pra poucos."

9. **Não use pergunta-resposta como recurso retórico.** "E sabe o que acontece? Nada." IA adora esse pingue-pongue.

10. **Não comece frase com conectivo solto** ("E é exatamente isso." / "Mas tem um detalhe." / "Porque a verdade é essa."). Texto humano não fragmenta dessa forma — emenda na frase anterior.

### Vocabulário e construção

11. **Não use adjetivo antes do substantivo em excesso.** Em português a gente põe adjetivo depois ("uma estratégia poderosa"), não antes ("uma poderosa estratégia"). IA traduz do inglês mantendo a ordem inglesa.

12. **Não use "o mesmo" como pronome.** "Veja o resultado e aplique o mesmo." Brasileiro escreve "aplique isso" ou "aplique também".

13. **Não comece com "Imagine..."** como ferramenta de engajamento. "Imagine acordar todo dia sabendo que..." é coach manual.

14. **Não use negação dupla pra suavizar** ("Não é incomum que..." / "Não é raro encontrar..."). Brasileiro escreve "é comum", "é frequente".

15. **Não use reforço retórico vazio** ("E isso é poderoso." / "E isso é importante."). Frase que não acrescenta nada, só serve pra fechar o parágrafo com "peso".

16. **Não termine cada parágrafo com sentença de moral.** IA adora fechar bloco com aforismo. Texto humano não fecha tudo com chave de ouro — alguns parágrafos só terminam.

### Sintático

17. **Não use voz passiva onde caberia voz ativa.** "Resultados são alcançados por quem age." → "Quem age alcança resultado."

18. **Não use sujeito inanimado abstrato.** "A estratégia revela que..." / "O método mostra que..." Em PT-BR natural quem revela e mostra é gente, não conceito.

19. **Não use sempre ordem direta sujeito-verbo-objeto.** Texto humano inverte às vezes. Quebre a ordem em algumas frases.

20. **Não use conectivos de coesão em excesso.** "Portanto", "logo", "assim sendo", "dessa forma" — brasileiro casual não usa. Usa "então" ou nada.

---

## 3. PADRÕES ESTRUTURAIS PROIBIDOS

- **Explicação didática em excesso** — tom de professor dando aula
- **Estrutura previsível** — intro → 3 pontos → conclusão (IA adora tríade simétrica)
- **Listas de 3 itens simétricos sem motivo real** — se você adicionou um item só pra fechar tríade, corta. Bullets podem ser 2, 4, 5, 6.
- **Pergunta retórica genérica de abertura** — "você já se pegou pensando...?"
- **Parênteses explicativos didáticos** — "(ou seja, ...)", "(em outras palavras, ...)"
- **Emojis decorativos em texto corrido** — só se o cliente usa, e em posição variável (não sempre nos mesmos lugares previsíveis)
- **Mais de 1 "que" por frase**
- **Advérbios em -mente quando dá pra cortar** ("rapidamente" → "rápido"; "claramente" → "claro")
- **Gerúndio em CTA** — "vou estar te enviando", "estarei aguardando"

---

## 4. PADRÕES CONCEITUAIS PROIBIDOS

- **Tentar agradar todo mundo** — texto sem posicionamento é texto morto
- **Falsa humildade performática** — "eu também já errei muito", "não sou perfeito mas..."
- **Hashtag-pensamento** — frases feitas pra virar legenda motivacional vazia
- **Frase de efeito sem substância** — bonita por fora, oca por dentro
- **Linguagem neutra, polida demais** — sem opinião, sem energia, sem lado
- **Generalidade quando dá pra ser específico** — "muito dinheiro" → "R$ 80 mil"; "muita gente" → "9 em cada 10 mentores"

---

## 5. IDENTIFICAR E CORRIGIR

Se encontrar no rascunho, refaça:

| Sintoma | Correção |
|---|---|
| Frase "bonitinha demais" | Tornar mais crua, mais falada |
| Construção perfeita demais | Quebrar o ritmo, deixar imperfeito |
| Texto linear demais | Variar comprimento de frase, criar cadência |
| Frase curta empilhada na mesma linha | Conectar com vírgula ou separar em parágrafos diferentes |
| Falta de emoção | Inserir intenção, energia, opinião |
| Falta de posicionamento | Tomar lado, defender uma ideia |
| Tudo soa igual | Mudar o ataque da frase, começar diferente |
| Genérico demais | Trocar por número, nome, exemplo concreto |

---

## 6. GARANTIR NO TEXTO FINAL

- **Voz humana autêntica** — parece fala (ou escrita pessoal), não redação
- **Personalidade clara** — tem opinião, não é neutro
- **Ritmo natural** — mistura frase curta com frase longa
- **Energia emocional** — não é morno
- **Clareza sem parecer aula**
- **Trechos que podem virar corte forte** — linhas que se sustentam sozinhas
- **Especificidade** — números reais, nomes reais, casos reais
- **Inimigo claro** — todo texto está contra ALGO

---

## 7. DIREÇÃO DE ESTILO

- Escreva como alguém experiente, que domina o tema
- Não explique o óbvio
- Não repita padrões saturados de YouTube/Instagram
- Prefira impacto a perfeição
- Corte tudo que for excesso
- Frase curta tem peso quando aparece em momento certo — não quando empilha

---

## 8. REGRA DO INIMIGO (obrigatória)

Todo texto bom tem um inimigo claro. Sem inimigo, o texto fica morno.

O inimigo pode ser:
- Uma crença errada do mercado
- Um comportamento que o cliente não tolera
- Um tipo de pessoa/profissional que faz tudo errado
- Uma prática que o cliente combate

**Se você não consegue apontar contra QUEM ou contra O QUÊ o texto está, reescreve.**

---

## 9. TESTE FINAL (CHECKPOINT OBRIGATÓRIO)

Antes de liberar o texto, responda:

1. Soa como alguém de verdade escrevendo (ou falando, se for roteiro)?
2. Tem alguma frase, expressão ou clichê das listas proibidas (§1)?
3. Tem fingerprint de IA escrevendo PT-BR (§2)? Especialmente: travessão? Frase curta empilhada na mesma linha? Anáfora forçada?
4. Tem padrão estrutural proibido (§3)?
5. O texto tem personalidade ou poderia ser de qualquer canal?
6. Tem inimigo claro (§8)?
7. Tem especificidade (número, nome, caso) ou tá no abstrato?
8. **CHECKPOINT CRUZADO COM TOM DE VOZ:** o texto poderia sair da boca/mão do cliente? Tem ao menos uma palavra, expressão, ataque ou bordão que ele usa?

**Se qualquer resposta indicar problema, REESCREVA antes de entregar.**

---

## 10. REGRA DE OURO

> Se o texto parecer **bonito demais, correto demais ou genérico demais**, está errado. Corrija até parecer humano, imperfeito e real.

---

## 11. EXEMPLOS ANTES/DEPOIS

### Exemplo 1 — Abertura de post

❌ **ANTES (IA):**
"Hoje eu quero falar sobre uma verdade que ninguém te conta sobre vendas. Se você chegou até aqui, é porque quer resultados de verdade."

✅ **DEPOIS:**
"Mentor que vende barato não tem problema de marketing. O problema é de posicionamento."

**Por quê:** cortou aquecimento e clichê de abertura. Entrou com opinião e inimigo claro (o mentor que vende barato).

---

### Exemplo 2 — Frase curta empilhada na mesma linha (fingerprint clássico)

❌ **ANTES (IA):**
"Preço alto filtra. Preço baixo atrai problema. É isso."

✅ **DEPOIS (versão A — conectado):**
"Preço alto filtra cliente, enquanto preço baixo atrai problema."

✅ **DEPOIS (versão B — separado em parágrafos):**
"Preço alto filtra cliente.

Preço baixo atrai problema."

**Por quê:** na mesma linha, frase curta empilhada vira fingerprint. Conectada com vírgula vira frase humana. Separada por quebra de parágrafo cria respiro e mantém o ritmo cru.

---

### Exemplo 3 — Explicação de método

❌ **ANTES (IA):**
"Não é sobre vender mais, é sobre vender melhor. Muita gente não percebe isso, mas a verdade é que o preço alto atrai o cliente certo."

✅ **DEPOIS:**
"Quem cobra alto não vende menos. Vende pra cliente diferente. Mentor que ainda acha que volume é a saída tá brigando no campeonato errado."

**Por quê:** matou "não é X, é Y", matou "muita gente não percebe". Posicionamento direto, inimigo claro (mentor que aposta em volume), exemplo com construção mais elaborada que evita simetria forçada.

---

### Exemplo 4 — Fechamento / CTA

❌ **ANTES (IA):**
"Em resumo, se você quer escalar seu negócio de mentoria e alcançar novos patamares, é fundamental aplicar essas estratégias no seu dia a dia."

✅ **DEPOIS:**
"Quem aplica passa. Quem fica reclamando que mentoria não escala, fica esperando."

**Por quê:** sem "em resumo", sem "novos patamares", sem moral genérica. Inimigo claro (quem reclama em vez de aplicar). Aqui a construção paralela funciona porque está em ÚLTIMO bloco — uso pontual, não padrão do texto.

---

### Exemplo 5 — Texto descritivo de produto

❌ **ANTES (IA):**
"O programa COLISEU foi desenvolvido para mentores de alta performance que buscam transformar seus resultados através de uma metodologia exclusiva e comprovada."

✅ **DEPOIS:**
"COLISEU não é programa pra quem está começando. É pra mentor que já fatura e cansou de operar como autônomo de luxo."

**Por quê:** cortou jargão corporativo ("alta performance", "transformar resultados", "metodologia exclusiva"). Definiu o público pelo que ele NÃO é. Posicionamento + inimigo (autônomo de luxo).

---

## 12. NOTA ESPECIAL — USO DE FRASE CURTA

Frase curta funciona quando:

- Aparece pontualmente, não como padrão do texto inteiro
- Está em LINHA SEPARADA (parágrafo próprio) das outras frases curtas
- Fecha um bloco ou abre uma seção — não empilhada no meio
- Tem função real: cortar ritmo, enfatizar conclusão, dar pausa

Frase curta NÃO funciona quando:

- Vem empilhada na mesma linha que outras curtas
- Aparece três ou mais vezes em sequência
- É usada como recurso de estilo o tempo todo
- Substitui conectivo natural ("Faz isso. Faz aquilo." em vez de "Faz isso e aquilo.")

---

## 14. REGRAS DE REESCRITA (CRÍTICO — quando aplicar filtro em texto existente)

> Esta seção foi adicionada na v3.1 porque a aplicação do filtro estava gerando texto pior que o original em muitos casos. Reescrita errada também é fingerprint de IA.

### R1 — Preservar frase original boa
Se a frase original transmite a tese com clareza e ritmo natural, **NÃO reescrever**. Apenas **enriquecer com o porquê** ou um complemento.

❌ **ERRADO:** Trocar "Escada de valor não funciona no Brasil. Nunca funcionou." por "Escada de valor é golpe americano que ninguém te avisou."
✅ **CERTO:** Manter original + adicionar "A escada de valor é um golpe americano que ninguém teve coragem de te avisar."

**Por quê:** "Nunca funcionou" é ênfase legítima, não fingerprint. Pulou pra reescrita por reflexo, sem necessidade real.

### R2 — Teste oral antes de propor substituição
Antes de trocar uma frase, leia em voz alta a alternativa. Se soa mais artificial que o original, **mantém o original**.

❌ **ERRADO:** Trocar "Quase todo mundo aprendeu" por "Aprenderam todos a mesma coisa" (soa traduzido).
✅ **CERTO:** "Todo mundo aprendeu da mesma forma" (mais natural).

### R3 — Calibrar números à realidade do nicho (CRÍTICO)
Quando adicionar especificidade numérica, **rode a matemática**. Se o número implica cenário impossível ou inverossímil pro nicho, ele destrói credibilidade — pior que abstração.

❌ **ERRADO:** "Precisa vender 30 por dia de R$3.000 = R$90 mil/dia" (irrealista)
✅ **CERTO:** "Precisa vender 5 por dia só pra fechar o mês" (realista)

**Regra prática:** Antes de cravar um número, perguntar:
- Esse volume é factível pro nicho do cliente?
- A multiplicação resulta em valor coerente com a realidade do mercado?
- Se eu fosse o cliente lendo isso, esse número me faria sentido ou me faria duvidar?

### R4 — Conhecer a definição de high/low ticket DO CLIENTE
Não usar definições genéricas. Calibrar exemplos com a realidade do nicho.

**Para Torriani (mentoria high ticket):**
- Low ticket: R$97, R$197, R$297
- Médio ticket: R$497, R$997
- High ticket: R$3.000+
- Premium: R$30.000+

❌ **ERRADO:** Usar R$3.000 como exemplo de "produto barato" (no universo Torriani é high ticket)
✅ **CERTO:** R$297 como low ticket, R$3.000 como high básico, R$30.000 como premium

**Generalização:** Antes de inventar número, consultar `data/nucleo.md` ou contexto do cliente ativo. Cada nicho tem sua escala.

### R5 — Texto humano frequentemente é incompleto, redundante ou hesitante
Texto polido demais é fingerprint mesmo SEM frase curta empilhada. Humano:
- Repete uma palavra pra reforçar ("vive em movimento, vive sempre em movimento")
- Refraseia no meio da frase ("...que tem dinheiro, sabe, que tem capacidade de investir")
- Deixa pendente quando o sentido já está claro

❌ **ERRADO:** "Tem dinheiro circulando e investe quando vê valor" (polido demais)
✅ **CERTO:** "Tem dinheiro circulando, e quando aparece valor de verdade, investe sem pensar muito"

**Regra prática:** Se a frase está "elegantemente compacta", joga um pouco de imperfeição: redundância, refrasing, ou um "sabe" no meio.

### R6 — Não trocar frase clara por metáfora forçada
"Cute" não é melhor. Direto é melhor. Metáfora só quando ela é mais clara ou mais visceral que a versão literal.

❌ **ERRADO:** Trocar "Nem todo mundo que chega no Direct merece sua atenção" por "Mentor que responde todo direct virou atendente de SAC" (metáfora forçada, perdeu clareza)
✅ **CERTO:** Manter original ou ajustar pra "Quem responde todo direct virou atendente de quem nunca vai pagar"

### R7 — Frase tem que terminar a ideia
Coerência de raciocínio > impacto isolado. Não cortar pra parecer profundo.

❌ **ERRADO:** "Quem ainda chega, cara, tem muito" (parece corte, não terminou a ideia)
✅ **CERTO:** "Quem ainda acha que precisa aquecer cliente high ticket nunca vendeu pra um cara de verdade"

### CHECKPOINT DE REESCRITA (rodar SEMPRE antes de propor versão nova)

Antes de entregar uma reescrita, perguntar:

1. **A frase original tinha algum problema REAL** (das listas §1, §2, §3)? Se não, NÃO reescrever.
2. **A alternativa proposta soa MELHOR** quando lida em voz alta? Se não, manter original.
3. **Se adicionei número, ele faz sentido na realidade do nicho do cliente?** Se não, refazer ou tirar.
4. **A frase nova TERMINA a ideia?** Se cortou no meio pra parecer profundo, completar.
5. **Mantive a tese e o inimigo do original?** Se mudei a tese sem necessidade, voltar.

**Se qualquer resposta indicar problema, NÃO entregar a reescrita — refazer.**

---

## 13. LEMBRETE FINAL DE EXECUÇÃO

- Aplique DURANTE a escrita E na revisão final.
- Não pule o checkpoint da seção 9.
- Na dúvida entre soar polido ou soar real → escolha real.
- Texto bom é o que cabe na boca/mão de alguém de verdade.
- Filtro Anti-IA ELIMINA o que não pode aparecer. Tom de Voz MOLDA o que tem que aparecer. Use os dois.
