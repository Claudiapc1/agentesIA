# Estrutura: Página de vendas para perpétuo

**Tipo:** `pagina-vendas-perpetuo`
**Família:** pagina
**É o DEFAULT** quando o founder diz "página de vendas" sem qualificar.

---

## Proveniência

| Campo | Valor |
|---|---|
| Fonte | Modelo do founder, "Estrutura padrão de Página de Vendas para vender todo dia" |
| Arquivo fonte | `data/estruturas/pagina-vendas-perpetuo-FONTE-FOUNDER.md` |
| Status da fonte | Modelo validado pelo founder, em uso |
| Versionado em | 2026-08-22, a partir do Desktop (risco R6 da Fase 1, resolvido) |
| Blocos na fonte | 20 |
| Origem do arquivo | SINKRA Fase 2, decisão T4. Canonizado na implementação |

**Regra de deriva:** a fonte do founder manda. Se este arquivo divergir dela, este arquivo está errado. Auditoria reporta a divergência, não sincroniza sozinha.

---

## Quando usar

Produto que vende todo dia, com tráfego contínuo. Sem sequência de lançamento antes, sem data de evento.

**Não use quando:**

- Existe sequência de PLCs consumida antes, é `pagina-vendas-lancamento`
- O objeto tem data e lugar, é `pagina-vendas-evento`
- Preço baixo, decisão rápida, sem escada antes, é `pagina-vendas-tripwire`

---

## Executor

**`john-carlton`** (`agents/tier-2-executores/john-carlton.md`)

Razão: linhagem Halbert resolvida em forma direta. Simple Writing System, sócio do Halbert por 20 anos. O `whenToUse` dele é literalmente "simplified, more direct, more conversational".

**Não é o Halbert.** A Fase 3 confirmou que o arquivo dele, na linha 69, descreve `*sales-page` como "criar carta de vendas completa". Ele escreve carta por default, e foi essa a causa da reprovação da página da Core AI.

---

## A estrutura, bloco a bloco

Ordem da fonte do founder, com as section keys de `data/section-contract.md`.

| # | Bloco | Section key | Obrigatório | O que faz |
|---|---|---|---|---|
| 1 | Headline (promessa) | `hero` | sim | A promessa. Passa no teste dos 3 segundos |
| 2 | Subheadline | `hero` | sim | Complementa a promessa, não repete |
| 3 | Vídeo de vendas | `video` | opcional | Apresentação ou aula experimental |
| 4 | CTA | `ctaCard` | sim | Primeiro pedido, cedo na página |
| 5 | Nova promessa, outro ângulo | `problem` (abertura) | sim | Foca em dor ou oportunidade. Ângulo diferente do bloco 1 |
| 6 | Contextualização do problema | `problem` | sim | Máximo 15 parágrafos. Mostra as consequências |
| 7 | História ou case com passo a passo | `beforeAfter` | sim | A pessoa entende a solução pela narrativa |
| 8 | Dados de mercado | `socialProof` | opcional | Confirmam as afirmações da promessa. Se não tiver, deixa de fora |
| 9 | Prova social tangibilizada | `socialProof` | sim | Tangibilizar, não só afirmar |
| 10 | **Metodologia como diferenciação** | `mechanism` | sim | Pilares, passos, estratégia. O bloco que justifica o preço |
| 11 | O que você vai aprender | `features` | sim | Promessa de resultado. Como a pessoa sai |
| 12 | Pra quem é | `features` (qualificação) | sim | Dores e desejos, na linguagem do avatar |
| 13 | Sobre o autor | `bio` | sim | Só o que faz sentido para vender. Conquistas e vitórias |
| 14 | Módulos do treinamento | `features` (entregáveis) | sim | Nome do módulo com benefício. Descrição do ganho |
| 15 | Bônus | `features` (bônus) | sim | Título, benefício e valor de cada um |
| 16 | Preço | `pricing` | sim | Ancorado, como alavancagem |
| 17 | CTA | `ctaCard` | sim | Segundo pedido |
| 18 | Provas | `testimonials` | sim | Prints com resultados de alunos ou próprios |
| 19 | Garantia | `guarantee` | sim | 7 dias ou mais |
| 20 | Headline mais CTA | `ctaCard` | sim | Reforço final |
| 21 | Dúvidas frequentes | `faq` | sim | Quebra de objeções |

---

## O bloco 10, e por que ele tem key própria

**Metodologia como ponto de diferenciação** é o bloco que justifica o preço.

A analogia da fonte é a Polishop: eles vendem o mesmo produto por muito mais caro por causa dos elementos únicos declarados.

Por decisão do founder em 22/08/2026, o `mechanism` foi estendido para `sales-page` no `section-contract.md`. Antes ele só existia em carta.

**Reprova quem** dilui a metodologia dentro de `features`. Ela vira mais um item na lista de benefícios e o argumento de diferenciação se perde.

O bloco precisa de:
- Nome de método ou sistema, não descrição genérica
- Pilares, passos ou etapas nomeados
- Se os pilares pedem representação gráfica, `visual` declarado

**Teste:** se o leitor não consegue dizer o nome do método depois de ler o bloco, o bloco falhou.

---

## Onde a estrutura mais erra

**No bloco 5.** A fonte pede uma promessa NOVA, com ângulo diferente, depois do primeiro CTA. Não é repetir a headline com outras palavras. É o mesmo produto visto por outra dor ou outra oportunidade.

**No bloco 14.** O nome do módulo carrega o benefício. "Módulo 3: Configuração" reprova. "Módulo 3: O agente que atende enquanto você dorme" passa.

**No bloco 12.** Dores e desejos na linguagem do avatar, não na do produto. A fonte traz um exemplo em caixa alta, curto, direto, quase em forma de lista de reconhecimento.

---

## Gates aplicáveis

Na ordem, sem pular:

1. `checklists/carta-vs-pagina.md`, é página mesmo
2. `checklists/estrutura-pagina.md` Gate 1, o tipo é este
3. `checklists/estrutura-pagina.md` Gate 2, blocos presentes, na ordem, com section keys marcadas
4. `checklists/estrutura-pagina.md` Gates 3 a 5, topo, headline clonada, mecanismo com bloco próprio
5. Pipeline anti-IA: `validate-anti-ia.sh`, `anti-ia-structural.mjs`, crítico LLM
6. Oráculo Torriani, 10/10 ou refaz

---

## Variantes

Nenhuma declarada. Se aparecer contexto que exija delta de blocos, registrar aqui com o que entra, o que sai e o que muda de peso.
