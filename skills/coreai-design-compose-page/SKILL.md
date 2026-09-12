---
name: coreai-design-compose-page
description: "Compoe uma pagina/landing page completa em chain deterministica de 9 fases: valida brief, detecta tipo de pagina, seleciona template, aplica layout/tipografia/spacing, seleciona componentes, gera codigo React+Tailwind+shadcn e valida (anti-IA, a11y, fidelidade). Usa biblioteca de 70 marcas pra inspiracao."
when-to-use: >
  Quando o usuario quiser criar uma pagina, landing page, hero, secao, ou montar
  o layout de uma pagina do zero a partir de um brief/conteudo. Triggers:
  "cria uma pagina", "monta uma LP", "compoe o layout", "faz o hero", "pagina de captura".
argument-hint: "[brief / tipo de pagina / conteudo]"
allowed-tools: "Read, Write, Bash, Glob, Grep"
user-invocable: true
---

# Compose Page: Composicao de Pagina (9 fases)

Motor: **Page Composer** (content-first, ritmo-obcecado) + apoio do **Brad Frost**
(atomic design / a11y). Tudo self-contained em `../coreai-design-shared/`.

## PASSO 1: Contexto obrigatório

Leia `../coreai-shared/contextos-contract.md`. Sem cliente e contexto READY, bloquear domínio. Reuse contexto já selecionado, sem trocar cliente global nem criar outra base. Carregue identidade visual e tokens existentes no cliente resolvido. Ausência de tokens exige briefing visual explícito, não inventar identidade.

## PASSO 2: Carregar DNA permanente
Ler de `../coreai-design-shared/references/` (caminho relativo a esta skill: `../coreai-design-shared/references/`):
- `page-layout-framework.md`, grid, containers, larguras
- `typography-hierarchy-rules.md`, hierarquia tipografica
- `spacing-rhythm-system.md`, ritmo de espacamento (grid 4px)
- `page-type-patterns.md` + `marketing-page-type-patterns.md`, padroes por tipo
- `copy-to-layout-bridge.md`, mapear copy (AIDA/PAS) em hierarquia visual
- `anti-ai-look-patterns.md`, o que evitar pra nao parecer IA
- `seo-rules.md`, metadados e SEO
- `ds-page-types-registry.yaml`, registry de tipos de pagina

## PASSO 3: Biblioteca de inspiracao (DIFERENCIAL)
Abrir `../coreai-design-shared/references/design-library/INDEX.md` (70 marcas).
Com base no brief, escolher 1-3 marcas de referencia e abrir os
`{marca}-DESIGN.md` correspondentes pra extrair paleta, tipografia e ritmo.
Oferecer ao usuario: "Pra esse brief, inspiracao em {X}, {Y} ou {Z}? (ou diga outra)".
Mapa rapido: tech/SaaS → Linear/Vercel/Stripe; luxo → Ferrari/Tesla; consumer-foto
→ Apple/Airbnb; IA/dev → Cursor/Claude/Warp; fintech → Coinbase/Wise/Revolut.

## PASSO 4: Carregar motor (agentes)
Ler `../coreai-design-shared/agents/page-composer.md` (persona + frameworks) e, se for
gerar componentes novos, `../coreai-design-shared/agents/brad-frost.md`.

## PASSO 5: Executar as 9 fases (deterministico, em ordem)
1. **Validar brief + detectar tipo de pagina + constraints.** Use o 3-Input Framework
   (objetivo, conteudo, restricoes). Se faltar input critico, perguntar antes de seguir.
2. **Selecionar template base** conforme o tipo (capture, sales, VSL, letter, institucional...).
3. **Bridge copy→layout** (condicional): se ha copy, mapear em hierarquia (AIDA/PAS/StoryBrand).
4. **Aplicar layout framework** (grid, containers, larguras de `page-layout-framework.md`).
5. **Aplicar hierarquia tipografica** (`typography-hierarchy-rules.md`).
6. **Aplicar ritmo de spacing** (grid 4px, `spacing-rhythm-system.md`).
7. **Selecionar componentes** (shadcn/registry). CHECKPOINT design-spec-gate:
   layout + tipografia + spacing + plano de componentes definidos. Veto: layout sem
   grid → volta fase 4; spacing fora do 4px → veto; componente inexistente no registry → halt.
8. **Gerar codigo** React + Tailwind + shadcn, com SEO e estados (loading/empty/error).
9. **Validar** (PASSO 6).

## PASSO 6: Validar (obrigatorio)
Rodar os validadores de `../coreai-design-shared/validators/` na ordem:
1. `brief-validation-checklist.md`, brief completo?
2. `page-composition-checklist.md`, composicao correta
3. `page-level-dos-donts.md`, do's and don'ts de pagina
4. `dops-ai-trope-guardrails.yaml` + cruzar com `anti-ai-look-patterns.md`, nao parecer IA
5. `ds-accessibility-wcag-checklist.md`, a11y WCAG
6. `seo-meta-checklist.md`, SEO
7. `design-fidelity-checklist.md`, fidelidade a inspiracao escolhida
Loop de reescrita ate passar. So entregar quando aprovado.

## PASSO 7: Output
Entregar o codigo da pagina (componente .tsx) + notas de implementacao + marcas de
inspiracao usadas. Salvar onde o usuario indicar (ex: projeto LP/brandbook).

## Regras
- Zero emoji e zero travessao no output (UI, copy, codigo).
- Conteudo user-facing sempre em pt-BR com acentuacao completa.
- Nunca hardcodar valores que deveriam ser tokens.


## Limites CoreAI

Leia `../coreai-design-shared/COVERAGE.md` antes de executar. Caminhos internos de recursos resolvem pela raiz da biblioteca. Use $ARGUMENTS e a conversa; sem briefing, peça objetivo e artefato. Recursos de terceiros são inspiração, nunca dados ou identidade do cliente. Comandos de agentes nas referências são contexto, não rotas habilitadas. Máximo duas revisões; pendências ficam explícitas. Scores são revisão assistida, não teste automático. Não publicar nem instalar ferramentas por inferência.
