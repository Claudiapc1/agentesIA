# T0 v2 portátil

Adaptação do layout T0 v2 original. Input: array com n, kind (cover/content/cta), title, body; cada slide exige brand.accent (#RRGGBB). Opcionais handle, avatar (arquivo absoluto), verified (somente true quando confirmado), rotulo, accent (trecho do título), retrato, image, diagram, kicker, scene, sceneCaption, proof, list e bodyHtml.

node t0.mjs slides.json --context-root <base> --business <cliente> --output <pasta-saida>

Não sobrescreve HTML existente. Fontes pessoais removidas: usa Arial/Arial Narrow e fallbacks locais; identidade tipográfica difere do original. Sem retrato/avatar por padrão. Texto bodyHtml é markup local de confiança, nunca conteúdo externo executável.
