# Anúncio Estático: os 2 formatos (regras aprovadas pelo founder)

Fonte: documento de regras aprovado pelo founder em 28/08/2026. Este arquivo é a transcrição fiel das regras. Os exemplos inteiros estão em `pecas-modelo.md` (mesma pasta).

---

## A LEI DO WORKFLOW

**Exemplo validado = funcionou em produção = inteligência = precisa ser replicado.** O que se escreve tem que estar dentro da regra e dentro do exemplo. **Nunca sair dos guard rails.**

**A PEÇA É UMA UNIDADE.** Headline, subheadline, ponte e CTA só validam JUNTOS. A subheadline validada é validada PARA aquela headline; não existe campo aprovado solto. E a peça anda com uma **imagem que chama atenção**: a arte faz parte da unidade.

---

## FORMATO A

Estrutura: `HEADLINE → SUBHEADLINE → PONTE → CTA (+ imagem que chama atenção)`

Regras por etapa (nas palavras do founder):

- **Headline:** a pessoa não sabe quem você é. Nunca começa com pergunta. É um benefício grande e inesperado, que para o scroll. Nasce do ICP: dores, desejos e dúvidas do cliente já mapeadas.
- **Subheadline:** traz de novo um grande benefício, complementa a headline com mais informação. Ela trabalha PARA a headline; sozinha não vale.
- **Ponte:** corpo que conecta ao CTA. Benefício da plataforma/negócio/serviço, características do produto, mais um benefício de uso. Texto que flui, NÃO lista.
- **CTA:** nunca seco ("quero aplicar" não, a pessoa nem sabe o que quer). Ação de baixo compromisso: saber mais, ver como funciona, diagnóstico, garantir vaga. O verbo muda pelo TIPO. Na arte, vira botão.

## FORMATO B

Estrutura: `HEADLINE → MINI-COPY → CTA (+ imagem que chama atenção)`

Regras por etapa:

- **Headline:** mesma regra do A: nunca pergunta, benefício grande e inesperado, do ICP.
- **Mini-copy:** aqui sim é lista: 3 benefícios curtos de 1 linha cada + 1 benefício de prova/autoridade (números, validação, quem já usou). CURTO. Mini-copy grande demais está errado. Não precisa esgotar os benefícios.
- **CTA:** mesma regra do A: nunca seco, baixo compromisso, verbo pelo tipo.

---

## OS 4 TIPOS (dentro dos formatos)

Mudam o objetivo e o verbo do CTA, não a estrutura:

1. **Reunião estratégica** (ex.: "Quero ver no meu negócio", diagnóstico)
2. **Recompensa** (ex.: "Receba seu plano de ação")
3. **Oferta direta** (registrada; ex.: lançamento pago, "Toque no link e garanta seu ingresso")
4. **Convite de aula** (garantir vaga)

---

## FORMATO DE SAÍDA: JSON do sistema de criativos

Especificação copiada para dentro do squad (não referenciar sistemas externos). O sistema de criativos trabalha com 2 padrões de copy, e a entrega da FASE 4 do workflow sai neste JSON.

### Padrão "estatico" (usar para FORMATO A)

Cada peça é um objeto com 5 campos:

- **headline**: frase principal de impacto (chamada principal)
- **subheadline**: frase de apoio que complementa a headline (sub). Se não houver, ""
- **ponte**: corpo/chamada que conecta a headline ao CTA (texto que faz a transição pra ação). Se não houver, ""
- **cta**: call-to-action
- **body**: notas visuais, observações, direções de arte. Se não houver, ""

```json
[
  { "headline": "...", "subheadline": "...", "ponte": "...", "cta": "...", "body": "..." }
]
```

### Padrão "mini_copy" (usar para FORMATO B)

Cada peça é um objeto com 5 campos:

- **headline**: frase principal de impacto
- **mini_copy**: texto corrido de apoio (redline, sub, descrição). Se a peça usa LISTA em vez de texto, deixe ""
- **list_items**: bullets/tópicos, um por linha separados por `\n` (sem marcadores). Se a peça usa TEXTO CORRIDO, deixe ""
- **cta**: call-to-action
- **body**: notas visuais, observações, direções de arte. Se não houver, ""

No FORMATO B a mini-copy é lista (3 benefícios + 1 prova): preencher `list_items` com um item por linha e deixar `mini_copy` como "".

```json
[
  { "headline": "...", "mini_copy": "", "list_items": "Beneficio 1\nBeneficio 2\nBeneficio 3\nPROVA: ...", "cta": "...", "body": "..." }
]
```

### Regras da saída (valem para os 2 padrões)

- JSON válido puro, sem markdown, sem backticks no conteúdo dos campos.
- Extração/entrega fiel: não reescrever, não "melhorar", não inventar na hora de exportar.
- Campo inexistente = "".
- Sem limite de caracteres.
