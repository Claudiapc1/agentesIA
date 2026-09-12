# Lei do Slide 1

Validador específico para o Slide 1 de qualquer carrossel ou hook de reels.

## Regra absoluta

Todo post imperial entrega **3 variações de hook** no Slide 1:
- 2 marcados como `[VIRAL]` (vêm de hooks consagrados em `knowledge/02-hooks.md` ou `knowledge/05-titulos-swipe.md`)
- 1 marcado como `[IMPERIAL]` (autoral, criado pelo agente)

## Checklist por hook

Para CADA uma das 3 linhas:

- [ ] ≤15 palavras
- [ ] Zero `?` (ponto de interrogação)
- [ ] Zero emoji
- [ ] Zero saudação ("Fala...", "Oi...", "E aí...")
- [ ] Zero contexto prévio ("Hoje eu quero falar...", "Vou te contar...")
- [ ] Tom dominante (quem fala sabe mais que quem lê)
- [ ] Contraintuitivo ou polarizador (quebra expectativa)
- [ ] Zero clichê de `knowledge/10-cliches-proibidos.md`

## Diversidade obrigatória

As 3 variações devem usar **categorias diferentes** de hook. Não entregar:
- ❌ 3 hooks de "mistério"
- ❌ 3 hooks de "comando + dor"
- ❌ 3 hooks da mesma família de títulos (todos curiosidade, ou todos polêmica)

Entregar:
- ✅ 1 categoria mistério + 1 categoria polêmica + 1 autoral imperial
- ✅ 1 quebra de mito + 1 promessa + 1 binarismo autoral
- ✅ Qualquer combinação que misture famílias

## Formato de entrega no Slide 1

```
SLIDE 1 — HOOK

[VIRAL 1] [Texto exato do primeiro hook viral]
[VIRAL 2] [Texto exato do segundo hook viral]
[IMPERIAL] [Texto exato do hook imperial autoral]
```

## Exemplos válidos

**Tema:** Mentor que entrega muito conteúdo grátis e não fatura.

```
SLIDE 1 — HOOK

[VIRAL 1] O maior mito sobre construir audiência é educar antes de filtrar.
[VIRAL 2] Pare de gravar reels educativo se quiser cliente premium.
[IMPERIAL] Seu carrossel grátis pavimenta o caminho do seu concorrente.
```

```
SLIDE 1 — HOOK

[VIRAL 1] 5 sinais de que você virou biblioteca, não autoridade.
[VIRAL 2] Mentor que ensina demais vira freelancer disfarçado.
[IMPERIAL] Conteúdo educativo é golpe contra quem cobra alto.
```

## Exemplos REPROVADOS

❌ "Você sabia que mentor que ensina demais não fatura?"  → pergunta
❌ "Vou te contar 5 segredos sobre criar conteúdo que vende"  → contexto + "segredo"
❌ "Pessoal, atenção: pare de educar de graça!"  → saudação + exclamação
❌ "🔥 Mentor de elite faz isso e ninguém percebe 🔥"  → emoji
❌ "Como mentor parou de gravar reels educativo e dobrou ticket em 30 dias"  → 16 palavras (1 acima do limite)

## Quando este validador é chamado

- Sempre que `modes/01-post-imperial.md` gera output.
- Quando `modes/02-reels.md` gera o gancho (0-3s).
- Quando `modes/03-stories.md` gera primeiro story de uma sequência.

## Resposta esperada deste validador

- Se OK → continue para próxima ETAPA do ORACULO.
- Se FAIL → reescrever só o slide 1 e re-testar (máx 3 iterações no slide 1, depois escala).
