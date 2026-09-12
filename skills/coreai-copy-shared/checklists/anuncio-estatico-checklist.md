# Checklist: Anúncio Estático (guard rails do wf-anuncio-estatico)

Rodar na FASE 3 do workflow `workflows/wf-anuncio-estatico.md`, ANTES do filtro anti-IA e do oráculo. Reprovou em qualquer item: volta pra escrita. Loop até passar em todos.

Regras completas: `data/anuncio-estatico/FORMATO.md`. Exemplos: `data/anuncio-estatico/pecas-modelo.md`.

## Headline (formatos A e B)

- [ ] A headline NÃO é pergunta (nem começa com pergunta).
- [ ] A headline é um benefício grande e INESPERADO, que para o scroll.
- [ ] O benefício da headline é rastreável a uma dor, desejo ou dúvida MAPEADA do ICP do cliente (dizer qual).

## Subheadline (formato A)

- [ ] A subheadline traz de novo um grande benefício e complementa a headline com mais informação.
- [ ] A subheadline trabalha PARA esta headline específica (não é frase genérica que serviria em qualquer peça).

## Ponte (formato A)

- [ ] A ponte é texto que FLUI até o CTA (não é lista, não é bullets).
- [ ] A ponte carrega benefício da plataforma/negócio/serviço, característica do produto ou benefício de uso.

## Mini-copy (formato B)

- [ ] A mini-copy é lista: 3 benefícios curtos de 1 linha cada.
- [ ] Tem 1 benefício de prova/autoridade (números, validação, quem já usou).
- [ ] É CURTA. Mini-copy grande demais está errado; não precisa esgotar os benefícios.

## CTA (formatos A e B)

- [ ] O CTA NÃO é seco ("quero aplicar" reprovado: a pessoa nem sabe o que quer).
- [ ] É ação de baixo compromisso: saber mais, ver como funciona, diagnóstico, garantir vaga.
- [ ] O verbo do CTA corresponde ao TIPO da peça (reunião estratégica, recompensa, oferta direta, convite de aula).
- [ ] Sem preço no CTA de público frio (exceto decisão explícita do founder).
- [ ] Na arte, o CTA vira botão.

## A peça como unidade

- [ ] Headline, sub/mini-copy, ponte e CTA validam JUNTOS (nenhum campo aprovado solto).
- [ ] A peça cabe numa imagem (é anúncio estático, não carta).
- [ ] A peça está dentro de um exemplo-modelo de `data/anuncio-estatico/pecas-modelo.md` (DIZER QUAL peça-modelo está replicando).
- [ ] Se a peça-modelo replicada tem DEFEITO ANOTADO (AS-7/AS-14 CTA seco, WK-16 CTA de compra direta), o defeito NÃO foi replicado.

## Arte (FASE 5, guard rails do handoff pro traffic-masters)

- [ ] Executor de arte declarado: `creative-producer` (squad traffic-masters).
- [ ] Task usada declarada: `traffic-masters/[DEPENDÊNCIA NÃO EMPACOTADA: generate-creatives]`.
- [ ] Specs da plataforma-alvo atendidas (dimensão, peso, duração) conforme a tabela de plataformas da task de arte.
- [ ] O texto da peça na arte final é IDÊNTICO ao JSON aprovado na FASE 4 (headline, sub/mini-copy, ponte, CTA): a arte não muda uma palavra.

## Forma (regras absolutas)

- [ ] Zero travessão em qualquer campo.
- [ ] Zero emoji.
- [ ] Português brasileiro com acentuação completa.

## Entrega

- [ ] Saída no JSON do sistema de criativos (padrão "estatico" pro formato A, "mini_copy" pro formato B), conforme especificação em `data/anuncio-estatico/FORMATO.md`.
<!-- Dependência externa de contexto/identidade excluída: aplicar contrato CoreAI. -->
