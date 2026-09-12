# Template — Anúncio Estático (padrão Torriani)

Formato obrigatório de todo anúncio para imagem estática. Cada bloco tem função
única. Respeitar os limites de palavras.

## Estrutura (4 blocos)

```
ÂNGULO: {NOME DO CONCEITO EM CAIXA ALTA — rótulo interno, não vai na arte}

HEADLINE:
{até 10 palavras, máx 15. Frase única, ZERO ponto. O gancho.}

CORPO:
{1 a 2 frases, até 45 palavras. Confirma a headline E ENTREGA O BENEFÍCIO CONCRETO.
Aqui mora o argumento: o que os assistentes fazem, com que número, em que canal.
NÃO repetir o que a headline já disse.}

TRANSIÇÃO:
{1 frase, até 20 palavras. SÓ O CONVITE. Não é mais argumento.
Padrão: "Eu posso te mostrar como ter isso instalado no seu negócio com uma consultoria de IA."}

CTA:
{o clique. Ex: "Clica abaixo e agenda a sua consultoria".}
```

## A regra que define a TRANSIÇÃO

**A transição não continua explicando.** O argumento acaba no CORPO.

Erro clássico (reprovado): a ponte dá uma terceira rodada de argumento em cima de
algo que headline e corpo já fecharam. Vira conversa desnecessária e não cabe na arte.

| Errado (mais argumento) | Certo (convite) |
|---|---|
| "Reduzi 5 pessoas do time e a receita ficou de pé porque o atendimento não dependia mais de gente." | "Eu posso te mostrar como ter esse mesmo atendimento no seu negócio." |
| "Margem sobe de dois lados: menos custo fixo por tarefa e trabalho com mais qualidade." | "Eu posso te mostrar como aumentar sua margem de lucro usando IA." |

**Se o benefício é forte, ele pertence ao CORPO, não à transição.**

## Padrões de transição

Varie entre eles. Não repita o mesmo em peças vizinhas.

| # | Padrão | Quando usar |
|---|--------|-------------|
| 1 | "Eu posso te mostrar como ter isso instalado no seu negócio com uma consultoria de IA." | O padrão. Qualquer ângulo. |
| 2 | "Na consultoria eu abro {coisa concreta} e mostro como fica com os seus números." | Quando há algo real pra colocar na tela dele. |
| 3 | "Eu posso te mostrar como ter {benefício} no seu negócio." | Benefício claro e nomeável. |
| 4 | "Eu instalo isso na sua operação, e a consultoria começa mostrando onde." | Ângulos de execução. |
| 5 | "Isso cabe na sua empresa também, e a consultoria mostra exatamente como." | Quando a peça citou caso de terceiro. |
| 6 | "Em 90 dias isso está rodando aí, e a consultoria é onde a gente começa." | Ângulos de lentidão e atraso. |
| 7 | "Eu instalo isso no seu negócio." | Versão curta, para peças de texto longo. |

**PROIBIDO:** "instalo isso aí dentro" (reprovado). Usar "na sua operação" ou "no seu negócio".

## Destino: diagnóstico ou aplicação

| Destino | Quando | Transição | CTA |
|---------|--------|-----------|-----|
| **Diagnóstico** | Dor, desejo, inimigo, contraste, margem | convida para a consultoria | "Clica abaixo e agenda a sua consultoria" |
| **Aplicação** | Oferta direta | convida a preencher o formulário | "Quero saber mais" · "Preencher o formulário" |

O diagnóstico é gratuito, mas **isso não é dito na peça.** Nunca escrever "grátis" ou "gratuito".

## REGRA ABSOLUTA: HEADLINE NUNCA TEM PONTO

Headline é **UMA FRASE ÚNICA**. Sem ponto no meio, sem ponto no fim.

Se você escreveu duas frases, você não escreveu uma headline. Junte com vírgula,
dois pontos, "e", "porque", ou reescreva menor.

| Errado | Certo |
|--------|-------|
| Sua empresa cresceu até o tamanho da sua agenda. Parou ali. | Sua empresa cresceu até o tamanho da sua agenda e parou ali |
| Hoje 80% do meu tempo é estratégia. O resto roda sozinho. | Hoje 80% do meu tempo é estratégia porque o resto roda sozinho |
| Equipe, agência, automação, ChatGPT. Nada tirou você da operação. | Equipe, agência, automação e ChatGPT: nada tirou você da operação |

**O corpo aceita no máximo 1 ponto por frase longa.** Texto picado vira staccato.

**A headline sai de estrutura validada, nunca da sua cabeça.** Clonar fórmula de
headline campeã real do swipe (`swipe/headlines/_index.yaml`,
`data/swipe-file-headlines.md`, `frameworks/halbert/headline-formulas.yaml`) e
declarar qual foi clonada, junto com o `id` da headline no `_index.yaml` e o tier
dela. Clone de tier B ou C exige escrever "estrutura de template, não campeã
comprovada".

Validação automática: `§H1` e `§H2` no `validate-anti-ia.sh`. Regras `RH-01` a `RH-04`
no `oraculo-torriani.md`.

## Regras de cada bloco

- **ÂNGULO** — o conceito-mãe. Vários anúncios podem compartilhar o mesmo ângulo,
  variando a execução. Em CAIXA ALTA.
- **HEADLINE** — ATÉ 10 palavras (15 no limite). **UMA FRASE, ZERO PONTO.** Choque
  numérico ou afirmação que inverte a expectativa. Nunca pergunta.
- **CORPO** — ATÉ 45 palavras. Confirma a headline E entrega o benefício concreto.
  Aqui mora o argumento: o que os assistentes fazem, com que número, em que canal.
  Não repetir o que a headline já disse.
- **TRANSIÇÃO** — ATÉ 20 palavras. **SÓ O CONVITE.** Não argumenta, não traz número
  novo, não fecha raciocínio. Se pode ser lida como "mais um argumento", está errada.
- **CTA** — 1ª pessoa do desejo, específico ao ângulo. Não usar genérico "saiba mais".

## Conformidade (sempre)

- Português brasileiro, acentuação completa. ZERO emoji. ZERO travessão.
- Headline nunca abre com pergunta (afirmação contraintuitiva).
- Todo número vem do proof-bank/contexto do cliente. Nunca inventar.
- Passa pelos validadores (filtro-anti-ia + oraculo-torriani) antes de entregar.

## Exemplos reais aprovados (franquia Zé Coxinha, ângulo "DINHEIRO QUE TRABALHA")

### AE-ZC01
- **HEADLINE:** R$140 mil no banco rendem R$1.400 por mês. Na loja certa, rendem até R$12 mil
- **CORPO:** A renda fixa devolve migalha, e uma unidade fatura em média R$60 mil por mês com margem de até 20%
- **TRANSIÇÃO:** É o tipo de ativo que o seu gerente nunca vai te oferecer, porque ele não ganha com isso. A gente abre os números reais pra você decidir.
- **CTA:** Quero ver a conta

### AE-ZC02
- **HEADLINE:** Seu dinheiro guardado pode estar te custando R$10 mil por mês
- **CORPO:** Cada mês parado na poupança é capital que deixa de virar lucro de loja com 20% de margem
- **TRANSIÇÃO:** Quem entende de retorno não deixa dinheiro dormindo. A franquia Zé Coxinha foi desenhada pra investidor, não pra quem quer fritar coxinha.
- **CTA:** Quero entender o modelo

### AE-ZC03
- **HEADLINE:** O dinheiro do banco trabalha pro banco, o seu pode trabalhar pra você
- **CORPO:** Uma unidade fatura em média R$60 mil por mês com 2 funcionários, e sem royalties o que entra é seu
- **TRANSIÇÃO:** Você não precisa trocar de rotina, precisa trocar onde seu capital está. Vários gerentes de banco já fizeram essa conta e investiram.
- **CTA:** Seja um franqueado

### AE-ZC04
- **HEADLINE:** Investidor de verdade não pergunta quanto custa. Pergunta quanto rende
- **CORPO:** A partir de R$140 mil, faturamento médio de R$60 mil por mês e equilíbrio em 30 a 60 dias
- **TRANSIÇÃO:** Se os números fazem sentido pra você, o próximo passo é ver a disponibilidade da sua praça.
- **CTA:** Quero conhecer o modelo
