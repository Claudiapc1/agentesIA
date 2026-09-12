---
name: coreai-criativos
description: Prepara prompts de criativos usando o motor original, sem banco ou backend; gera por ferramenta de imagem disponível no Codex ou externa no Claude.
---

# Criativos

Antes de qualquer produção, leia [contrato de contexto](../coreai-shared/contextos-contract.md). Contexto do negócio ativo é obrigatório. Se o contrato ou o contexto não estiver disponível, pare a produção e complete essa entrada. Não procurar dados de outro cliente, workspace externo ou COO.

## Processo

1. Carregue contexto, oferta, marca e copy aprovada. Colete apenas lacunas: formato, direção visual, modo, anexos e pasta de saída. Não invente provas, identidade, fotos ou textos ausentes.
2. Escolha um modo: `briefing`, `template`, `edit`, `copy-simple`, `copy-template`. Para começar sem template use briefing. Consulte [contrato de modos](references/modos.md) e as interfaces exatas em [fonte canônica](references/prompt-builder.ts).
3. No modo template, veja a imagem e aplique literalmente [prompt de análise](references/template-analysis.txt). Valide o JSON e salve a análise. Sem visão/imagem não invente blueprint. Não há templates de clientes incluídos.
4. Prepare JSON `{ "mode": "briefing", "input": { ... } }` conforme a interface real. Preserve diferenças entre campo ausente, vazio e falso. Confira flags de foto/logo/referência com anexos existentes.
5. Execute `node <pasta-desta-skill>/scripts/build-prompt.mjs <input.json> --context-root <base> --business <cliente> --output <prompt.txt>` para obter a string literal do motor. O comando só lê JSON e grava texto; não acessa rede, banco ou API. Não sobrescreve saída existente.
6. Salve junto um manifesto com arquivos anexados, papéis e ordem efetiva, modo, contexto utilizado e ferramenta prevista. Nunca inclua chaves nesse manifesto. Texto de imagem `imageInstruction` ausente significa sem referência; string vazia também sinaliza referência.
7. Se geração foi solicitada, use a ferramenta de imagem realmente disponível. No Codex, pode ser a geração nativa. No Claude, use ferramenta externa conectada ou Gemini configurado. Não afirmar que Claude gera imagens nativamente. Se não houver ferramenta, entregar prompt/anexos e informar geração pendente. Este pacote não configura API e não chama serviço pago.
8. Inspecione imagens geradas: grafia, textos exatos, hierarquia, logo, identidade, formato e composição. Salve em pasta indicada pelo contrato, com nomes novos. Não declarar fidelidade visual com base somente no prompt.

## Limites

- Fonte original e JavaScript compilado preservam as regras do motor. Promessas de “pixel-perfect” dentro do prompt são instruções ao gerador, não garantia.
- A composição com fundo próprio possui ambiguidade herdada de numeração de anexos: o transporte original põe fundo primeiro, mas `imageRefs` enumera templates a partir de 1. Não gerar esse modo antes de reconciliar e registrar ordem. Briefing sem template não depende desse caso.
- Geração, publicação Instagram e criação de campanha não fazem parte do despachante local.
- Se copy ainda não está aprovada, usar o fluxo de copy correspondente antes da geração; os modos copy retornam prompts para texto, não imagens.

## Gate executável de contexto

Todos os comandos de produção exigem `--context-root /base/contextos --business cliente --output /base/contextos/businesses/cliente/outputs/entrega`. Use o caminho real resolvido do business; nunca grave nas skills. O gate Python compartilhado deve existir e retornar sucesso antes de qualquer escrita. Falta de contexto, cliente ou destino bloqueia. Não contorne o gate criando pastas manualmente.

Exemplos de sintaxe (substituir caminhos pelo business resolvido):

`node scripts/build-prompt.mjs input.json --context-root /base/contextos --business cliente --output /base/contextos/businesses/cliente/outputs/prompt.txt`
