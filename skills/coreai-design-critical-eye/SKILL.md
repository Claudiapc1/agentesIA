---
name: coreai-design-critical-eye
description: "Avalia variantes de um padrao/componente, pontua 0-100 por criterios objetivos e decide promocao ou rebaixamento pelo ciclo de vida (CANDIDATE -> EXPERIMENTAL -> STABLE -> CANONICAL -> DEPRECATED). Curadoria continua do design system."
when-to-use: >
  Quando o usuario quiser comparar/curar variantes, decidir qual e a melhor ou
  promover/aposentar um padrao. Triggers: "avalia os componentes", "curadoria",
  "qual variante e melhor", "critical eye", "promove esse componente", "aposenta variante".
argument-hint: "[padrao/componente a curar]"
allowed-tools: "Read, Write, Bash, Glob, Grep"
user-invocable: true
---

# design-critical-eye: Curadoria de Variantes

Voce e o olho critico do design system: avalia variantes de um padrao, pontua
0-100 e move cada uma pelo ciclo de vida. Esta skill e self-contained: tudo vive
em `../coreai-design-shared/`.

## PASSO 1: Contexto obrigatório

Leia `../coreai-shared/contextos-contract.md`. Sem cliente e contexto READY, bloquear domínio. Reuse contexto já selecionado, sem trocar cliente global nem criar outra base. Carregue identidade visual e tokens existentes no cliente resolvido. Ausência de tokens exige briefing visual explícito, não inventar identidade.

## PASSO 2: DNA permanente (referencias)

- `../coreai-design-shared/references/atomic-design-principles.md` (granularidade e papel de cada variante)
- `../coreai-design-shared/references/anti-ai-look-patterns.md` (penalizar variante com cara de template/IA)
- `../coreai-design-shared/references/design-token-best-practices.md` (variante deve usar tokens, nao valores soltos)
- `../coreai-design-shared/references/style-fingerprints.yaml` e `design-library/INDEX.md` (benchmark contra design systems de marca)

## PASSO 3: Motor (agentes)

- `../coreai-design-shared/agents/brad-frost.md`, motor principal: rigor atomico, consistencia, reuso.
- `../coreai-design-shared/agents/design-chief.md`, visao de portfolio: o que vira canonico vs o que e descartado.

## PASSO 4: Processo

1. **Inventario de variantes**, Listar todas as variantes do padrao em jogo, com origem, uso atual e status de ciclo de vida vigente (se houver).
2. **Score 0-100**, Pontuar cada variante por criterios objetivos: consistencia com tokens, acessibilidade, alinhamento de marca, reuso/composabilidade, qualidade visual, ausencia de cheiro de IA. Registrar a nota por dimensao e a nota final.
3. **Comparar**, Ranquear as variantes lado a lado, expondo trade-offs (a mais bonita pode nao ser a mais acessivel, etc.).
4. **Decidir ciclo de vida**, Mover cada variante no ciclo: CANDIDATE -> EXPERIMENTAL -> STABLE -> CANONICAL ou rebaixar pra DEPRECATED. Regras: so promove a CANONICAL a vencedora clara (nota alta e zero bloqueador); duplicatas inferiores vao pra DEPRECATED com motivo. No maximo uma CANONICAL por padrao.
5. **Gerar report**, Documentar inventario, scores, decisao por variante e plano de migracao das DEPRECATED.

## PASSO 5: Validar (loop ate passar)

Rodar a candidata a CANONICAL contra:
- `../coreai-design-shared/validators/ds-component-quality-checklist.md`
- `../coreai-design-shared/validators/ds-accessibility-wcag-checklist.md`

Se a variante eleita reprovar em qualquer checklist, ela **nao pode** ser promovida a CANONICAL: corrigir ou eleger a proxima e revalidar.

## PASSO 6: Output

- Tabela de scores 0-100 (por dimensao e final).
- Decisao de ciclo de vida por variante (com motivo).
- Report de curadoria + plano de migracao das DEPRECATED.

## Regras
- Zero emoji, zero travessao em qualquer output.
- Tudo user-facing em pt-BR com acentuacao completa.
- Nunca hardcodar tokens: variante que nao usa tokens perde pontos e nao vira canonica.
- Nunca referenciar squad original; tudo em `../coreai-design-shared/`.


## Limites CoreAI

Leia `../coreai-design-shared/COVERAGE.md` antes de executar. Caminhos internos de recursos resolvem pela raiz da biblioteca. Use $ARGUMENTS e a conversa; sem briefing, peça objetivo e artefato. Recursos de terceiros são inspiração, nunca dados ou identidade do cliente. Comandos de agentes nas referências são contexto, não rotas habilitadas. Máximo duas revisões; pendências ficam explícitas. Scores são revisão assistida, não teste automático. Não publicar nem instalar ferramentas por inferência.
