# Modo 03 — STORIES

Ativado quando o pedido envolve "stories", "sequência de stories", "story pra vender".

## Knowledge a carregar

1. `knowledge/00-identidade.md`
2. `knowledge/01-voz-vocabulario.md`
3. `knowledge/06-estrategias.md` (E4, E6, E7, E8 são stories)
4. `knowledge/04-ctas.md`
5. `knowledge/10-cliches-proibidos.md`

## Inputs necessários

Pergunte UMA por vez:
1. **Objetivo:** conversão imediata / lead qualificado / validação / pressão progressiva?
2. **Produto/oferta** envolvida?
3. **Público** alvo?
4. **Audiência atual** (estimativa de views por story)?

## Roteamento por objetivo → estratégia

| Objetivo | Estratégia | N stories |
|----------|------------|-----------|
| Conversão imediata | **E4 — Stories Venda Direta** | 5 |
| Lead qualificado específico | **E6 — Story Direto** | 1 |
| Validar oferta pré-lançamento | **E7 — Stories PAS** | 11 |
| Pressão progressiva (5 dias) | **E8 — Funil Pressão** | 25-35 (5/dia) |

Se o usuário não tem clareza, sugira **E4** (default).

## Passo-a-passo de execução

### 1. Validar inputs
Coletar objetivo + produto + público.

### 2. Verificar pré-requisito de audiência
- **E4** requer ≥200 views/story. Se audiência menor, sugerir E6 ou ampliar via tráfego.
- **E7** requer audiência morna mínima. Pode rodar com 50-100 views.
- **E6** funciona em qualquer audiência (é 1 story só).
- **E8** requer continuidade de 5 dias, ideal com ≥150 views.

### 3. Executar template da estratégia escolhida

#### E4 — Stories Venda Direta (5 stories)

```
Story 1 — IDENTIFICAÇÃO
> "Se você é [perfil específico], leia isso."

Story 2 — DIAGNÓSTICO
> [Aponta dor + quebra de objeção comum]

Story 3 — OPORTUNIDADE
> [Apresenta solução, não a oferta ainda]

Story 4 — MECANISMO
> [Mostra como funciona, nomeia o método]

Story 5 — COMANDO
> [CTA direto com palavra-chave de resposta]
```

#### E6 — Story Direto (1 story)

Template universal:
```
PROCURO [N] [público específico] que querem [resultado tangível] em [prazo curto] usando [ativo/método].
Vou te mostrar [promessa específica].
Responde [PALAVRA-CHAVE] aqui.
```

#### E7 — Stories PAS (11 stories)

```
Story 1-3 — PROBLEMA
> Expõe dor em 3 camadas progressivas

Story 4-7 — AGITAÇÃO
> Mostra consequências de não resolver, casos negativos

Story 8-10 — SOLUÇÃO
> Apresenta caminho sem revelar oferta

Story 11 — CTA DE VALIDAÇÃO
> "Quem quer saber mais? Responde [PALAVRA-CHAVE]"
```

#### E8 — Funil Pressão (5 dias × 5-7 stories)

```
Dia 1 — IDENTIFICAÇÃO
> Stories tipo "isso é pra você se..."

Dia 2 — DOR
> Stories de dor + prova social sutil

Dia 3 — MECANISMO
> Stories que mostram como funciona

Dia 4 — ESCASSEZ
> Stories com vagas reais, prazo real

Dia 5 — COMANDO FINAL
> Stories de fechamento + CTA pra conversa
```

### 4. Sugerir visual para cada story

Tipos comuns:
- **Texto puro** sobre fundo neutro
- **Talking head** + texto sobreposto
- **Caixinha de perguntas** ativa
- **Enquete binária** (X vs Y)
- **Bastidor** (B-roll do dia)
- **Print de conversa** anônimo (cliente, lead)

### 5. Rodar ORACULO
Aplicar `validators/oraculo-completo.md`. Para sequências, validar arco completo.

### 6. Entregar

## Formato de output

```markdown
# STORIES — [E4 / E6 / E7 / E8]

## Objetivo
[conversão / lead / validação / pressão]

## Produto/Oferta
[descrito]

## Público
[perfil]

## Quantidade
[N stories]

---

## Story 1
[Texto exato]
[Sugestão visual]
[Sugestão de interação: enquete? caixinha? link?]

## Story 2
[Texto exato]
[Sugestão visual]
...

[... até o N final]

---

## CTA principal
[Palavra-chave + mecânica de resposta]

## Tempo de execução sugerido
[Tudo em 1 dia / Ao longo de X dias]

## Métrica de sucesso
[O que considerar bom resultado: N respostas, N DMs, N leads]
```

## Regras especiais para stories

| Regra | Aplicação |
|-------|-----------|
| Texto curto | ≤2 linhas por story idealmente |
| 1 CTA por sequência | Não pedir 5 ações diferentes |
| Continuidade visual | Manter mesmo estilo visual na sequência |
| Pico no story do meio | Sequências de 5+ devem ter pico de tensão no meio |
| Última story = comando | Sempre fechar com CTA, nunca informativo |

## Anti-padrões do modo

- ❌ Sequência sem progressão (todos os stories no mesmo tom)
- ❌ Story com texto longo (>3 linhas) — ninguém lê
- ❌ Stories educativos puros (sem objetivo claro)
- ❌ CTA "respondam o que acharam"
- ❌ Esquecer de fechar com palavra-chave de resposta
- ❌ Misturar 2 estratégias na mesma sequência

## Quando passar pra outro modo

- Se for plano editorial geral → `modes/06-planejamento.md`
- Se for estratégia completa com feed + stories → `modes/04-estrategia.md`
