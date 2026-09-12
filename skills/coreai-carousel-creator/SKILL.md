---
name: coreai-carousel-creator
description: Cria copy e HTML de carrosséis com templates portáveis incluindo T0 v2 e T0 Ilustrado; render opcional em PNG.
---
# Carrosséis

1. Leia obrigatoriamente [contrato ContextOS](../coreai-shared/contextos-contract.md). Identifique negócio ativo, voz, público, oferta e identidade antes de produzir; peça somente lacunas. Não buscar contexto de terceiros.
2. Colete tema, público, intenção e quantidade. Leia `references/copy-rules.md` e `references/prompt-templates.md`. Proponha headlines e CTA e aprove o texto antes da imagem.
3. Escolha família: os 20 layouts anteriores estão em `assets/templates/{imperial,twitter,classic}` com catálogo em `references/template-catalog.md`. Novos: `t0-torriani` (nome de origem, identidade parametrizada) e `t0-ilustrado`. Leia README do T0; para ilustrado leia `references/carrossel-ilustrado.md`.
4. T0: cada slide recebe `brand.accent` da marca, handle/rotulo e fotos opcionais. Execute `node assets/templates/t0-torriani/t0.mjs slides.json --context-root <base> --business <cliente> --output <pasta-saida>` a partir desta skill. Fontes pessoais foram removidas; fallback Arial/Arial Narrow não reproduz exatamente Fixture.
5. Ilustrado: escreva texto e gere ilustrações por `../coreai-criativos/SKILL.md` quando solicitado, ou receba arquivos prontos. Execute `node assets/templates/t0-ilustrado/montar.mjs --slides slides.json --ilustracoes /pasta/absoluta --context-root <base> --business <cliente> --output <business>/outputs/deck --acento '#HEXHEX' --handle '@perfil'`. Passe cores reais; nunca literalmente HEXHEX. JSON contém n, titulo, accent (trecho do título), img (arquivo relativo à pasta ilustrações), e texto, bullets ou comparacao/fecho.
6. Templates antigos: substitua placeholders por dados reais antes de renderizar. Nunca entregar placeholders visíveis. Use valores seguros em HTML; bodyHtml é apenas markup local revisado.
7. Para PNG, use renderer `assets/templates/t0-ilustrado/renderizar.mjs /pasta/absoluta/html --context-root <base> --business <cliente> --output <business>/outputs/png` com Playwright/Chromium disponíveis ao módulo. Sem renderer, entregue HTML e marque PNG pendente. Nenhuma API necessária para layout HTML.
8. Inspecione cada slide renderizado, cortes e ortografia; confira marca/handle, contraste e legibilidade. Saída segue contrato, nomes novos sem sobrescrever. Apresente slides grandes para revisão. Publicação é etapa separada.

## Gate executável de contexto

Todos os comandos de produção exigem `--context-root /base/contextos --business cliente --output /base/contextos/businesses/cliente/outputs/entrega`. Use o caminho real resolvido do business; nunca grave nas skills. O gate Python compartilhado deve existir e retornar sucesso antes de qualquer escrita. Falta de contexto, cliente ou destino bloqueia. Não contorne o gate criando pastas manualmente.

Exemplos de sintaxe (substituir caminhos pelo business resolvido):

`node assets/templates/t0-torriani/t0.mjs slides.json --context-root /base/contextos --business cliente --output /base/contextos/businesses/cliente/outputs/deck`

`node assets/templates/t0-ilustrado/montar.mjs --slides slides.json --ilustracoes /imagens --acento "#116644" --context-root /base/contextos --business cliente --output /base/contextos/businesses/cliente/outputs/deck`

`node assets/templates/t0-ilustrado/renderizar.mjs /html --context-root /base/contextos --business cliente --output /base/contextos/businesses/cliente/outputs/png`

Importação: `buildDeck(slides, output, {root, business})` também exige gate.
