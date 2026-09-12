# agentesIA

## Liberado neste pacote

- coreai-setup: instalação dos arquivos do pacote.
- coreai-contexto: instruções de criação da base (exceção ao contexto prévio).
- coreai-criativos: construção local de prompts com bloqueio obrigatório. Geração de imagens por API não foi testada.
- coreai-carousel-creator: montagem HTML e PNG com bloqueio obrigatório.
- coreai-shared: resolvedor e gate comuns.

## Bloqueio

Executáveis exigem --context-root, --business e saída explícita dentro de businesses/<cliente>/outputs/. Sem contexto válido, não gravam. contexto.md é obrigatório; --require é aditivo. O gate verifica estrutura e fontes, não a veracidade do conteúdo. Leia cada SKILL.md para a interface exata.

## Dependências

Python 3.9+, Node.js. Para PNG, na raiz deste pacote:

```sh
npm --prefix skills/coreai-carousel-creator ci
npm --prefix skills/coreai-carousel-creator exec -- playwright install chromium
```

## Estado

Os outros 26 candidatos não foram incluídos. Instagram foi corrigido e testado com mocks, sem publicação real. As demais rotas precisam de testes de comportamento nos aplicativos. Os links globais antigos não foram modificados: continuam apontando para coreai-mentoria e não são esta versão corrigida.

Nenhuma aula, slide, credencial ou dado de cliente acompanha este pacote. Originais preservados.

## Ensaios nos aplicativos

Claude: teste inconclusivo, encerrado pelo limite de orçamento da execução antes da resposta final. Codex CLI: versão instalada incompatível com o modelo configurado, solicitou atualização. Nenhum desses ensaios comprova o comportamento das demais skills; nenhuma foi promovida com base neles.

## Setup guiado

Abra [o guia completo](docs/GUIA-SETUP.html): computador, instalação, ContextOS, Drive, Gemini e Meta. A skill coreai-setup conduz as mesmas etapas. Testes locais não equivalem a conexões externas verificadas.
