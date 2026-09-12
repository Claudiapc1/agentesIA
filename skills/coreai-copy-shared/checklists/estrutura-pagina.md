# Estrutura de página: qual usar e como verificar

**Severidade: ALTA.** Consultar ANTES de escrever a primeira linha de qualquer página, e de novo ANTES de entregar.

**Origem:** SINKRA Fase 3 declarou este arquivo como bloqueio. Ele é citado em 15 das 16 linhas da taxonomia da Fase 2 e não existia no disco. Todo o gate de estrutura dependia dele.

**Irmão obrigatório:** `carta-vs-pagina.md`. Aquele decide se a peça é carta ou página. Este decide, sendo página, qual das dezesseis, e se a estrutura foi cumprida.

---

## A pergunta que este checklist responde

O founder pede "página de vendas". O squad tem dezesseis tipos de página e cinco estruturas que já concorreram pelo mesmo nome. Qual roda?

---

## Gate 0: é página mesmo?

Antes de qualquer coisa:

```bash
node scripts/resolver-formato.mjs --pedido "<o pedido do founder>"
```

O script resolve família, tipo, executor e estrutura de uma vez, lendo a taxonomia direto. Exit codes: `0` liberado, `1` tipo não canônico (bloqueado pelo V3 por tipo), `2` erro ou ambiguidade que exige o founder.

**Família carta só se alcança com `--carta-explicita`.** Se o pedido menciona "carta" mas a flag não veio, o script resolve como página e emite um aviso. Inferir família a partir de string é exatamente o modo de falha de 22/08/2026.

Se a peça for carta, este arquivo não se aplica e a rota é `workflow-carta-vendas-obrigatorio.md`.

**Este é o único gate que previne em vez de detectar.** Os quatro seguintes pegam o erro depois de escrito. Este impede que ele seja escrito. Reprova aqui quem tratou página como carta.

---

## Gate 1: qual tipo de página

Três degraus, nesta ordem. Não pule.

### Degrau 1: o alias bate

| O founder disse | Tipo |
|---|---|
| página de vendas, sem qualificar | `pagina-vendas-perpetuo` (DEFAULT) |
| página de vendas de lançamento, fecha o PLF | `pagina-vendas-lancamento` |
| página do evento, vender ingresso ou vaga | `pagina-vendas-evento` |
| tripwire, produto de entrada, isca paga | `pagina-vendas-tripwire` |
| página de captura, squeeze, trocar contato | `pagina-captura` |
| inscrição em webinar, desafio ou summit | `pagina-registro-evento` |
| lista de espera, antes de abrir carrinho | `pagina-lista-espera` |
| página de aplicação, candidatura, high ticket | `pagina-aplicacao` |
| diagnóstico, sessão estratégica, call de valor | `pagina-diagnostico-sessao` |
| VSL, página que é o vídeo | `pagina-vsl` |
| upsell, OTO, oferta única pós compra | `pagina-vendas-oto` |
| downsell, segunda chance, oferta reduzida | `pagina-downsell` |
| obrigado, confirmação, bridge, replay | `pagina-obrigado` |
| comparação, versus concorrente | `pagina-comparacao` |
| garantia, página dedicada | `pagina-garantia` |

**Duas correções desta tabela, feitas na Fase 7.** Ela dizia `pagina-vendas-downsell`, e o id real na taxonomia é `pagina-downsell`. E listava `pagina-checkout`, que não existe entre os 16: a Fase 2 classificou checkout fora da taxonomia de páginas e deixou só `order-bump` como elemento. Um alias que aponta para id inexistente faz o Gate 1 resolver para nada, e a peça segue sem tipo, que é o modo de falha que este checklist existe para impedir.

**A tabela acima não é a fonte.** A fonte é `data/estruturas/taxonomia-paginas.yaml`. Esta tabela é leitura humana dela, e quem resolve o alias em produção é `scripts/resolver-formato.mjs`, que lê o YAML direto. Se as duas divergirem, o YAML manda.

### Degrau 2: o desempate declarado

Quando dois tipos disputam, vale a regra escrita, nunca a intuição.

- **Vendas com ou sem lançamento:** só é `lancamento` se existir sequência de PLCs consumida antes. Sem PLC, é `perpetuo`.
- **Vendas ou evento:** se o objeto tem data e lugar, é `evento`. Se vende todo dia, é `perpetuo`.
- **Vendas ou tripwire:** preço baixo e decisão rápida, sem escada antes, é `tripwire`.
- **Aplicação ou diagnóstico:** se o objeto vendido é o programa, é `aplicacao`. Se o objeto é a conversa (a sessão em si), é `diagnostico-sessao`.
- **Captura ou registro:** se entrega material, é `captura`. Se inscreve em evento com data, é `registro-evento`.

### Degrau 3: uma pergunta, só em último caso

Não casou em nenhum degrau: pergunte UMA coisa ao founder, a que muda o destino. Nunca abra interrogatório.

**Veto:** avançar sem tipo definido. Peça sem tipo é peça sem estrutura, e peça sem estrutura vira carta por inércia.

---

## Gate 2: a estrutura foi cumprida

Carregue o arquivo de estrutura do tipo, em `data/estruturas/{tipo}.md`, e confira bloco a bloco.

### Três perguntas por bloco (R3)

Para cada bloco declarado na estrutura do tipo, responda três coisas. **Resposta binária: presente ou ausente. Sem escala, sem nota.**

1. O bloco está presente?
2. Está na posição certa da ordem?
3. Tem section key válida em `data/section-contract.md`?

E mais duas do conjunto:

- [ ] Nenhum bloco de outro tipo entrou de carona
- [ ] Bloco marcado como opcional que ficou de fora: a ausência foi decidida, não esquecida

### Saída na reprovação (R4)

Este gate **nunca devolve "refaz"**. Devolve a **lista nominal** dos blocos faltantes ou fora de ordem:

```
REPROVADO
  Faltando: mechanism (posição 10), guarantee (posição 19)
  Fora de ordem: bio veio antes de features, esperado depois
  Section key inválida: nenhuma
```

Um checklist que só devolve PASS ou FAIL não alimenta a regra de reprovação do workflow.

### Reprova quem

- Entrega blocos soltos com transição colada depois. Bloco tem que puxar o próximo.
- Inventa bloco que a estrutura não prevê, sem declarar por quê.
- Usa a ordem de outro tipo. Foi o erro da página de vendas da Core AI: dezesseis blocos ordenados na mão, sem estrutura de origem.

---

## FRONTEIRA: o que NÃO é deste arquivo

**Requisito R6 da SINKRA Fase 4.** Esta fronteira protege o desenho inteiro e é a parte menos óbvia dele.

| Mora aqui (gate de estrutura) | Mora em `carta-vs-pagina.md` (gate de formato) |
|---|---|
| Blocos presentes | Teste dos 3 segundos no topo |
| Ordem dos blocos | Nome do produto na headline |
| Section keys válidas | Headline clonada com tabela de fidelidade |

**Por que declarar:** se os testes de formato vazarem para dentro do checklist de estrutura, os dois gates se fundem, a ordem entre eles some, e a invariante formato-antes-de-voz perde o marco intermediário. É fácil, ao escrever um checklist de página, jogar tudo dentro dele. Se isso acontecer, o Hopkins deixa de ter gate próprio e volta a ser conselho.

**Os dois gates precisam permanecer dois.** Rode `carta-vs-pagina.md` para o topo e a headline. Rode este para os blocos.

---

## Gate 3: o mecanismo tem bloco próprio

Vale para os tipos de venda.

O bloco `mechanism` foi estendido para `sales-page` em 22/08/2026, por decisão do founder. Ele existe porque numa página o mecanismo é o que **justifica o preço**, não uma funcionalidade a mais.

- [ ] A metodologia tem bloco próprio, não está diluída dentro de `features`
- [ ] O bloco tem nome de método, não descrição genérica
- [ ] Os pilares, passos ou etapas estão nomeados

O critério é o efeito Polishop: o mesmo produto vendido por mais caro por causa dos elementos únicos declarados. Se o leitor não consegue dizer o nome do método depois de ler o bloco, o bloco falhou.

---

## Ordem dos gates: formato antes de voz

Regra da SINKRA Fase 3, inegociável:

```
Gate 0 (é página?)  →  Gate 1 (qual tipo?)  →  Gate 2 (estrutura cumprida?)
   →  Gate 3 (mecanismo com bloco próprio)
   →  carta-vs-pagina (topo e headline)
   →  anti-IA (regex, estrutural, crítico LLM)
   →  Oráculo Torriani (10/10)
```

**Por que essa ordem:** uma carta perfeita na voz do Torriani passa 10/10 no Oráculo e continua sendo a peça errada. Validar voz antes de validar formato é gastar rigor no lugar errado.

---

## Onde vive cada coisa

| O quê | Onde |
|---|---|
| Índice dos tipos, com alias e desempate | `data/estruturas/taxonomia-paginas.yaml` |
| A estrutura de cada tipo | `data/estruturas/{tipo}.md` |
| Contrato de blocos e renderização | `data/section-contract.md` |
| Carta contra página | `checklists/carta-vs-pagina.md` |
| Fórmulas de headline | `data/swipe-file-headlines.md` e `swipe/headlines/` |
| Manual de craft, piso de qualidade | `data/manual-craft.md` |

---

## Veto conditions

- Avançar sem tipo definido no Gate 1
- Entregar sem os marcadores de section key
- Mecanismo diluído dentro de features, nos tipos de venda
- Rodar Oráculo antes dos gates de formato
