---
name: coreai-design-artifact-cycle
description: Ciclo iterativo de criacao de artefato de design (brief, resolve contexto de DS, captura premissas, gera variantes, mostra feedback cedo, itera, verifica, handoff) com gates explicitos em cada etapa.
when-to-use: >
  Use quando o usuario quer criar um artefato de design iterando com feedback rapido:
  "cria um artefato", "itera esse design", "monta essa tela/secao com variantes",
  "quero ver opcoes antes de fechar", ou qualquer ciclo de design com checkpoints.
argument-hint: "[descricao do artefato a criar | --client <slug>]"
allowed-tools: "Read, Write, Bash, Glob, Grep"
user-invocable: true
---

# Design Artifact Cycle

Ciclo controlado de producao de um artefato de design. Cada passo tem gate explicito: nao avanca sem o anterior fechado. O objetivo e mostrar trabalho cedo, evitar retrabalho e entregar com handoff limpo.

## PASSO 1: Contexto obrigatório

Leia `../coreai-shared/contextos-contract.md`. Sem cliente e contexto READY, bloquear domínio. Reuse contexto já selecionado, sem trocar cliente global nem criar outra base. Carregue identidade visual e tokens existentes no cliente resolvido. Ausência de tokens exige briefing visual explícito, não inventar identidade.

## PASSO 2 - Carregar DNA permanente

Leia apenas o que for relevante ao artefato:

- `../coreai-design-shared/references/page-layout-framework.md`
- `../coreai-design-shared/references/typography-hierarchy-rules.md`
- `../coreai-design-shared/references/spacing-rhythm-system.md`
- `../coreai-design-shared/references/design-token-best-practices.md`
- `../coreai-design-shared/references/anti-ai-look-patterns.md`
- `../coreai-design-shared/references/wcag-compliance-guide.md`

## PASSO 3 - Carregar motor

- `../coreai-design-shared/agents/design-chief.md` (triagem e orquestracao do ciclo)
- `../coreai-design-shared/agents/page-composer.md` (composicao do artefato)

## PASSO 4 - Executar o processo (8 passos com gates)

1. **Materializar o brief.** Transforme o pedido em brief objetivo: objetivo do artefato, publico, tipo (secao, tela, pagina, componente), restricoes. GATE: brief confirmado pelo usuario antes de seguir.
2. **Resolver contexto de DS.** Identifique tokens, componentes e padroes ja existentes no projeto/cliente que devem ser reusados. GATE: contexto de DS mapeado (o que existe vs o que falta).
3. **Capturar premissas (assumptions).** Liste explicitamente as suposicoes que esta fazendo (sobre conteudo, hierarquia, breakpoints, estados). GATE: usuario valida ou corrige as premissas.
4. **Gerar variantes.** Produza 2 a 3 direcoes distintas. Use `../coreai-design-shared/references/design-library/INDEX.md` para puxar inspiracao de marcas adequadas ao posicionamento e citar a referencia de cada variante.
5. **Mostrar early feedback.** Apresente as variantes cedo (preview/descricao/render leve) ANTES de detalhar. GATE: usuario escolhe a direcao.
6. **Iterar o artefato.** Refine a direcao escolhida em ciclos curtos: aplica ajuste, mostra, coleta feedback, repete ate o usuario aprovar.
7. **Verificar pos-build.** Rode os validadores do PASSO 5 sobre o artefato final.
8. **Handoff.** Entregue artefato + lista de tokens/componentes usados + premissas finais + pendencias conhecidas.

## PASSO 5 - Validar (loop ate passar)

Na ordem, corrigindo e repetindo ate cada um passar:

1. `../coreai-design-shared/validators/brief-validation-checklist.md`
2. `../coreai-design-shared/validators/design-fidelity-checklist.md`
3. `../coreai-design-shared/validators/page-level-dos-donts.md`
4. `../coreai-design-shared/validators/dops-ai-trope-guardrails.yaml`

Se qualquer validador reprovar, volte ao passo 6 do PASSO 4 e itere. Nao declare pronto com gate aberto.

## PASSO 6 - Output

- Artefato final (codigo/markup/preview).
- Resumo: variante escolhida + referencia de inspiracao + tokens e componentes reusados.
- Premissas finais e pendencias para o proximo passo (handoff).

## Regras finais

- Zero emoji em qualquer saida.
- Zero travessao: use virgula, ponto, dois-pontos, parenteses ou quebra de linha.
- Portugues do Brasil com acentuacao completa.
- Nunca hardcodar tokens: sempre via variaveis do design system do cliente.


## Limites CoreAI

Leia `../coreai-design-shared/COVERAGE.md` antes de executar. Caminhos internos de recursos resolvem pela raiz da biblioteca. Use $ARGUMENTS e a conversa; sem briefing, peça objetivo e artefato. Recursos de terceiros são inspiração, nunca dados ou identidade do cliente. Comandos de agentes nas referências são contexto, não rotas habilitadas. Máximo duas revisões; pendências ficam explícitas. Scores são revisão assistida, não teste automático. Não publicar nem instalar ferramentas por inferência.
