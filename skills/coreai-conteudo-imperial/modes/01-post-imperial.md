# Modo 01 — POST IMPERIAL (Carrossel 10 slides)

**Default mode.** Ativado quando o pedido envolve "post", "carrossel", "slides", ou quando é ambíguo.

## Knowledge a carregar (em ordem)

1. `knowledge/00-identidade.md`
2. `knowledge/01-voz-vocabulario.md`
3. `knowledge/02-hooks.md`
4. `knowledge/03-narrativas.md`
5. `knowledge/04-ctas.md`
6. `knowledge/05-titulos-swipe.md`
7. `knowledge/10-cliches-proibidos.md`

## Inputs necessários

Antes de gerar, confirme/peça:
1. **Tema do post** (1 frase)
2. **Tipo de post desejado** (Imperial / Polêmica / Crença / Problema / Curiosidade / História / Oferta) — se não disser, escolha Imperial (default)
3. **Público específico** (mentores R$10K? coaches iniciantes? founders?)
4. **Objetivo** (autoridade / venda / engajamento / recrutar tribo)

Se faltar 1+ input crítico, pergunte UMA por vez. Não pergunte tudo de uma vez.

## Passo-a-passo de execução

### 1. Validar inputs
Se tema/público/objetivo OK → seguir. Senão → perguntar.

### 2. Escolher tipo de post
Se não foi indicado, escolher pelo objetivo:
- autoridade → Imperial
- venda → Oferta
- engajamento → Polêmica ou Curiosidade
- recrutar tribo → Polêmica
- quebrar paradigma → Crença
- conexão emocional → História

### 3. Construir Slide 1 (Hook)
- Escolher 1 fórmula de `knowledge/05-titulos-swipe.md` família Curiosidade.
- Escolher 1 fórmula de outra família (Polêmica ou Desejo).
- Criar 1 hook IMPERIAL autoral seguindo regras de `knowledge/02-hooks.md`.
- Aplicar `validators/lei-slide-1.md`.

### 4. Construir Slides 2-10
Seguir estrutura de `knowledge/03-narrativas.md`:

- Slide 2: Inimigo Silencioso
- Slide 3: Dualidade (Antes × Depois)
- Slide 4: Crença Errada (Diagnóstico)
- Slide 5: Nova Crença (Manifesto)
- Slide 6: O Vilão
- Slide 7: Novo Caminho
- Slide 8: Cenário Real
- Slide 9: A Oportunidade (3 ações)
- Slide 10: CTA Imperial

Aplicar variações de tom conforme o **tipo de post** escolhido.

### 5. Validar progressão emocional
Aplicar `validators/progressao-emocional.md`:
- Slides 1-3 → Reptiliano
- Slides 4-6 → Límbico
- Slides 7-10 → Neocórtex

### 6. Construir CTA do Slide 10
Escolher categoria de CTA de `knowledge/04-ctas.md` conforme tipo do post:
| Tipo | CTA categoria recomendada |
|------|---------------------------|
| Imperial | 4 ou 12 |
| Polêmica | 12 ou 9 |
| Crença | 11 ou 13 |
| Problema | 1 ou 2 |
| Curiosidade | 5 ou 13 |
| História | 3 ou 8 |
| Oferta | 6 ou 7 |

### 7. Rodar ORACULO completo
Aplicar `validators/oraculo-completo.md` no carrossel inteiro.

Se REPROVADO em qualquer etapa → reescrever apenas seção falha + re-rodar (máx 2x).

### 8. Entregar

## Formato de output

```markdown
# POST IMPERIAL — [TEMA]

## Tipo
[Imperial / Polêmica / Crença / etc.]

## Público
[descrito]

## Objetivo
[autoridade / venda / etc.]

---

## SLIDE 1 — HOOK

[VIRAL 1] [hook 1]
[VIRAL 2] [hook 2]
[IMPERIAL] [hook autoral]

## SLIDE 2 — INIMIGO SILENCIOSO
[texto]

## SLIDE 3 — DUALIDADE
[texto]

## SLIDE 4 — CRENÇA ERRADA
[texto]

## SLIDE 5 — NOVA CRENÇA (MANIFESTO)
[aforismo curto]

## SLIDE 6 — O VILÃO
[texto + lista de 2-4 ações sabotadoras]

## SLIDE 7 — NOVO CAMINHO
[texto]

## SLIDE 8 — CENÁRIO REAL
[texto]

## SLIDE 9 — A OPORTUNIDADE
[3 ações concretas + pergunta-transição]

## SLIDE 10 — CTA IMPERIAL
[gancho final brutal]
[pergunta-fechamento]
[comando + palavra-chave]

---

## Legenda do post (separada)
[80-150 palavras complementando os slides, com tom Imperial preservado]

## Hashtags sugeridas
[5-7 hashtags relevantes]
```

## Anti-padrões do modo

- ❌ Slide 5 sem aforismo (precisa ser frase curta e cravada)
- ❌ Slide 10 sem palavra-chave de resposta
- ❌ Inverter ordem dos slides
- ❌ Misturar 2 tipos de post (escolher 1)
- ❌ Mencionar "ETAPA X" ou nomes técnicos ao usuário
- ❌ Entregar sem rodar ORACULO

## Quando passar pra outro modo

Se o usuário pediu "post" mas o tema/objetivo claramente exige reels ou stories:
- Reels: tema curto, alta carga emocional, viralização → sugerir `modes/02-reels.md`
- Stories: conversão imediata, audiência morna → sugerir `modes/03-stories.md`

Nunca trocar de modo sem perguntar.
