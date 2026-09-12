---
name: aprovacao-anuncios-html
version: "1.0"
owner: copy-chief
workflow: wf-anuncio-estatico
gate: founder-approval
---

# Aprovação de anúncios em HTML

## Objetivo

Transformar um lote validado de copies em uma interface local onde o founder edita e decide cada peça antes do handoff para arte. Este gate é obrigatório para todo lote produzido pelo `wf-anuncio-estatico`.

## Nomes canônicos

- Interface: `APROVACAO-ANUNCIOS.html`
- Resultado: `APROVACAO-ANUNCIOS.feedback.json`

Os dois arquivos ficam na mesma pasta da campanha. O painel anterior pode ser mantido como fonte, mas não substitui o arquivo de aprovação.

## Contrato da interface

Cada peça deve exibir o preview e permitir editar:

- Formato A: `headline`, `subheadline`, `bridge` e `cta`.
- Formato B: `headline`, cada item de `list_items` e `cta`.
- Ambos: `reviewer_note` e `learning_candidate`.

Cada peça tem exatamente três estados: `pending`, `approved` e `rejected`.

Regras bloqueantes:

1. Reprovar exige `reviewer_note`.
2. Qualquer mudança na copy após aprovação ou reprovação devolve a peça a `pending`.
3. O painel salva o rascunho no `localStorage` e permite exportar e importar o JSON.
4. A exportação alerta quando existem pendências, mas preserva todos os estados para retomada.
5. O texto original e o texto editado devem existir separadamente no JSON.

## Contrato do JSON

Schema: `squad-copy-ad-approval/v1`.

Campos de topo obrigatórios:

- `schema`, `generated_at`, `campaign`, `source_file` e `summary`.
- `summary`: `total`, `approved`, `rejected`, `pending`.
- `items`: uma entrada por peça, sem omissões.

Campos obrigatórios por item:

- Identidade: `id`, `format`, `origin`, `angle`.
- Decisão: `status`, `decided_at`, `reviewer_note`.
- Aprendizado: `learning_candidate`.
- Conteúdo: `original`, `edited`, `changed_fields`.

## Ingestão do feedback

Ao receber o JSON, o Copy Chief:

1. Confere schema, contagem e IDs contra a fonte.
2. Trava como final apenas o conteúdo `edited` das peças `approved`.
3. Devolve `rejected` e `pending` à escrita, usando `reviewer_note` como briefing.
4. Produz um resumo das alterações aprovadas e dos padrões recorrentes.
5. Classifica cada `learning_candidate` como:
   - `campaign_specific`: vale só para esta campanha;
   - `brand_rule`: vale para a voz e as mensagens do cliente;
   - `format_rule`: vale para o workflow de anúncio estático.
6. Só promove aprendizado a regra permanente com escopo explícito e evidência dos IDs aprovados. Uma preferência isolada não vira regra universal por inferência.

## Definition of done

- Todas as peças estão presentes e editáveis.
- Não existem IDs duplicados.
- O JSON exportado respeita o schema e reimporta sem perda.
- Nenhuma peça segue para arte sem `status: approved`.
- As versões original e aprovada permanecem auditáveis.
