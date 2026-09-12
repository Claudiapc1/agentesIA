# Runtime local do carrossel

Requer Node.js/npm disponíveis. Dentro da pasta desta skill, execute:

```sh
npm ci
npx playwright install chromium
```

Playwright fixado em 1.59.1 por package.json e package-lock.json. O módulo é resolvido pela instalação local; não usar NODE_PATH nem dependências de outro projeto.

Renderize uma pasta com HTML usando o caminho do script desta skill:

```sh
node assets/templates/t0-ilustrado/renderizar.mjs /caminho/absoluto/do/deck --context-root /base/contextos --business cliente --output /base/contextos/businesses/cliente/outputs/png
```

O renderer grava PNG ao lado dos HTML; use uma pasta de saída e preserve resultados anteriores. Distribuir package.json/package-lock.json e este guia; NÃO incluir node_modules no ZIP. Chromium é instalado no cache do usuário pelo comando de instalação.

## Evidência de smoke test

HTML neutro criado em diretório temporário, sem fontes/recursos externos. Renderer executado com NODE_PATH removido e dependência própria. PNG validado por assinatura/dimensões 1080×1350. Isso comprova renderização local básica, não revisão visual de carrossel de cliente nem publicação.

Saída do teste: /var/folders/8r/qgybs5q97nld5vg7716z9fnc0000gn/T/coreai-carousel-smoke-ul1tetei/01.png
