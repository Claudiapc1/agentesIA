# Estrutura: Página de vendas de mentoria high-ticket

**Tipo:** `pagina-vendas-mentoria`
**Família:** pagina
**Executor:** `russell-brunson` (`agents/tier-2-executores/russell-brunson.md`)

---

## Proveniência

Esta estrutura é uma FUSÃO de três fontes, cada uma com uma metade do problema.

| Fonte | Path | O que trouxe |
|---|---|---|
| Template órfão, metade PT | `templates/application-page-tmpl.md` (361 l.) | Desqualificação intencional, as 4 etapas de seleção, formulário, opção de não revelar preço |
| Task do Funnel, metade EN | `funnel/[DEPENDÊNCIA NÃO EMPACOTADA: design-application-page]` (312 l.) | Sistema de pontuação de qualificação, capacidade declarada, framing "aplicação, não compra" |
| Estrutura canônica de perpétuo | `data/estruturas/pagina-vendas-perpetuo.md` (120 l.) | O mecanismo com bloco próprio, o ritmo de página, as section keys |

**Criada em:** 2026-08-23
**Motivo:** a taxonomia declarava `pagina-aplicacao` com estrutura em `[DEPENDÊNCIA NÃO EMPACOTADA: pagina-aplicacao]`, e o arquivo nunca existiu. As duas metades viviam separadas, em idiomas diferentes, e nenhuma funcionava sozinha.

**Os originais permanecem intactos.** Esta é cópia com proveniência, não migração.

---

## Quando usar

Mentoria, mastermind ou programa de acompanhamento de ticket alto, com **filtro de entrada**: a pessoa se candidata, é aprovada, e só então compra.

**Não use quando:**

- O produto é curso ou infoproduto que se compra direto, é `pagina-vendas-perpetuo`
- O objeto vendido é a conversa, não o programa, é `pagina-diagnostico-sessao`
- Existe evento com data e lugar, é `pagina-vendas-evento`

**O teste:** se a página termina em botão de compra, não é este tipo. Se termina em formulário de candidatura, é.

---

## O que muda em relação à página de produto

Esta é a razão de o tipo existir. Mentoria troca três blocos por quatro.

| Sai | Entra |
|---|---|
| Garantia obrigatória | Desqualificação intencional (para quem NÃO é) |
| Stack de valor item a item | Como funciona o processo de seleção |
| Botão de compra | Formulário de candidatura |
| | Capacidade declarada (quantas vagas, por quê) |

**Por que a garantia sai:** em programa com filtro, quem entrou foi aprovado. A garantia continua existindo na oferta, mas deixa de ser bloco de página e vira condição de contrato.

**Por que a desqualificação entra:** ela é o que faz o filtro parecer verdadeiro. Página que aceita todo mundo não tem processo seletivo, tem checkout.

---

## A estrutura, bloco a bloco

| # | Bloco | Section key | Obrigatório | O que faz |
|---|---|---|---|---|
| 1 | Categoria do produto | `hero` | sim | Nomeia o que é, em uma linha |
| 2 | Promessa principal | `hero` | sim | A promessa travada, com a subpromessa |
| 3 | CTA de aplicação | `ctaCard` | sim | Botão logo abaixo, sem exigir scroll |
| 4 | Segunda promessa | `problem` | sim | Outro ângulo da mesma coisa, texto curto |
| 5 | Autoridade | `socialProof` | sim | Foto e resumo. Números com data, não adjetivo |
| 6 | O que vai estar rodando | `features` | sim | Os sistemas em cena, cada um com desenho próprio |
| 7 | O problema real | `video` | sim | IA genérica com dado descentralizado, mais o diagrama do segundo cérebro |
| 8 | Pronto mais aprender a construir | `mechanism` | sim | Recebe os times prontos e aprende Claude Code e Codex |
| 9 | CTA | `ctaCard` | sim | Segundo pedido |
| 10 | O que é, em uma tela | `features` | sim | Resumo escaneável |
| 11 | É pra você se | `features` | sim | Perfil do candidato |
| 12 | Não é pra você se | `features` | sim | Desqualificação intencional |
| 13 | Bônus | `bio` | sim | Quem entrar agora recebe ainda, cada um com valor |
| 14 | Como funciona a seleção | `features` | sim | As etapas |
| 15 | Capacidade e transparência | `socialProof` | sim | Vagas por subturma e o estado real da prova |
| 16 | Investimento | `pricing` | sim | Ancoragem antes do preço |
| 17 | CTA | `ctaCard` | sim | Terceiro pedido |
| 18 | Dúvidas frequentes | `faq` | sim | Quebra de objeção |
| 19 | CTA final | `ctaCard` | sim | Reforço final |

**Revisão de 2026-08-23, v8:** 19 blocos. A promessa principal fica no topo e NÃO se altera. A segunda promessa (outro ângulo) entra no bloco 4, depois do primeiro botão, com texto curto. Sem botão logo em seguida: o founder cortou o segundo CTA para não empilhar dois pedidos antes da autoridade. Regra de volume ditada pelo founder: TUDO CURTO. Nenhum bloco passa de 3 parágrafos, e a maioria tem 1 ou 2.


---

## O bloco 7, e por que ele carrega a página

**Os casos de uso são o miolo.** É o que a página de referência do concorrente faz melhor: sete casos, micro-copy de uma ou duas linhas cada, ritmo rápido, o produto em ação.

Não é lista de features. É **o sistema fazendo alguma coisa**, com o resultado visível.

**Formato:** um caso por bloco visual, título curto e uma ou duas linhas. Nunca parágrafo de explicação.

**Reprova quem** transforma isso em lista de funcionalidades com bullet. Feature é o que o produto tem. Caso de uso é o que ele faz.

---

## O bloco 11, e por que ele vende

A desqualificação intencional é contraintuitiva e funciona por dois motivos.

**Primeiro:** ela torna o filtro crível. Se a página não diz para quem não é, o processo seletivo é encenação.

**Segundo:** ela qualifica antes da call. Quem se reconhece na coluna do "não é" não se candidata, e isso protege a agenda de quem conduz.

**Regra de escrita:** o "não é" precisa ser tão sério quanto o "é". Coluna apagada, escrita de má vontade, não filtra ninguém.

---

## O bloco 13, as etapas de seleção

Herdado do template PT, com o sistema de pontuação da metade EN.

Formato de referência, quatro etapas:

1. **Candidatura**, com o tempo estimado de preenchimento e o pedido de honestidade
2. **Análise**, com o prazo de resposta declarado
3. **Conversa**, se aprovado, com a duração e o enquadramento de decisão mútua
4. **Início**, com o onboarding e o prazo da primeira sessão

**A frase que define o modelo**, do template original: *decisão mútua, nós escolhemos você, você nos escolhe.*

---

## Ritmo

Este tipo herda o ritmo de página, não de carta.

- Parágrafos de duas a três frases, no máximo
- Nenhum bloco de argumentação longa
- Prova social cedo, antes da explicação
- O peso está nos casos de uso, não no texto
- Zero história pessoal longa. A bio é curta e serve à venda

**Se a peça sair com leitura corrida e primeira pessoa longa, virou carta e reprova.**

---

## Gates aplicáveis

1. `checklists/carta-vs-pagina.md`, é página mesmo
2. `checklists/estrutura-pagina.md` Gate 1, o tipo é este
3. `checklists/estrutura-pagina.md` Gate 2, blocos presentes, na ordem, com section keys
4. `checklists/estrutura-pagina.md` Gate 3, mecanismo com bloco próprio
5. Pipeline anti-IA: regex, estrutural, crítico LLM
6. Oráculo Torriani, 10/10

---

## Conflito de propriedade resolvido

A taxonomia atribuía `pagina-aplicacao` a `russell-brunson`. O template órfão atribuía a `dan-kennedy, stefan-georgi`.

**Vale a taxonomia: `russell-brunson`.** Motivo: ele é o dono dos tipos de funil no squad, e este tipo é funil com página na frente, não peça isolada.
