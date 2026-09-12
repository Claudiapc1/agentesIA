# Offer Stack — Guia de Construcao

> Source: $100M Offers - Alex Hormozi + Offer Architecture SOP

## Estrutura do Offer Stack

```
┌─────────────────────────────────────────┐
│           PREMIUM UPSELL                │  $$$$$
│     (Done-for-you, VIP access)          │
├─────────────────────────────────────────┤
│           STANDARD UPSELL               │  $$$$
│     (Additional implementation help)    │
├─────────────────────────────────────────┤
│           CORE OFFER                    │  $$$
│     (Main product/service)              │
├─────────────────────────────────────────┤
│           BONUS STACK                   │
│     (Enhance core offer value)          │
├─────────────────────────────────────────┤
│           ORDER BUMP                    │  $
│     (Small add-on at checkout)          │
├─────────────────────────────────────────┤
│           LEAD MAGNET                   │  Free
│     (Entry point)                       │
└─────────────────────────────────────────┘
```

## Componentes

### Core Offer

A coisa principal que estao comprando.

```yaml
core_offer:
  name: ""
  promise: ""          # A transformacao que recebem
  components:
    - item: ""
      value: ""
      why_matters: ""
  delivery: ""         # Como recebem
  timeline: ""         # Quanto tempo leva
```

### Bonus Stack

Extras que aumentam valor percebido. **Regra:** Cada bonus deve resolver um OBSTACULO especifico para usar a oferta core.

```yaml
bonus_stack:
  - bonus_name: ""
    solves_obstacle: ""    # Por que precisam disto
    standalone_value: ""
  # Mirar em 3-7 bonus
```

**CRITICO:** Nunca adicionar bonus por adicionar valor. Cada bonus responde "Mas e quanto a [objecao]?"

### Order Bump

Add-on de impulso no checkout. **Regra:** < $50, entregavel instantaneamente, complementar.

```yaml
order_bump:
  name: ""
  price: ""
  what_it_is: ""
  why_add_it: ""
```

### Upsells

Aumento de valor pos-compra.

```yaml
upsells:
  - level: 1
    name: ""
    price: ""
    what_it_adds: ""
  - level: 2
    name: ""
    price: ""
    what_it_adds: ""
```

## A Regra 10x

Valor percebido total deve ser 10x+ o preco pedido.

```
Core Offer Value:      $5,000
Bonus 1 Value:         $2,000
Bonus 2 Value:         $1,500
Bonus 3 Value:         $1,500
────────────────────────────────
Total Value:           $10,000

Asking Price:          $997

Value Ratio:           10:1 ✓
```

## Metodos de Valuacao

Usar estes metodos para atribuir valor percebido a cada componente:

1. **Custo de substituicao** — Quanto custaria obter isso em outro lugar?
2. **Tempo economizado** — Horas × taxa horaria do avatar
3. **Dinheiro gerado** — Potencial de receita que o componente gera
4. **Problema resolvido** — Custo do problema persistindo

## Execucao em 7 Passos

1. **Definir Core Offer** — Qual a transformacao principal?
2. **Identificar Obstaculos** — O que pode impedi-los de ter sucesso com a oferta core?
3. **Criar Bonus para Cada Obstaculo** — Cada bonus remove uma barreira
4. **Construir Value Stack** — Atribuir valores a cada componente
5. **Desenhar Order Bump** — Quick add-on que ajuda no checkout
6. **Desenhar Caminho de Upsell** — Proximo nivel para quem quer mais
7. **Validar Regra 10x** — Valor total >= 10x preco

## Garantia

3 tipos de garantia (do mais fraco ao mais forte):

| Tipo | Descricao | Exemplo |
|------|-----------|---------|
| **Incondicional** | Dinheiro de volta sem perguntas | "30 dias, dinheiro de volta, sem perguntas" |
| **Condicional** | Dinheiro de volta se cumprir criterios | "Se implementar os 12 modulos e nao tiver resultado em 90 dias, devolvemos 100%" |
| **Performance** | Resultado garantido ou nao paga | "30 clientes em 30 dias ou trabalho de graca ate conseguir" |

**NUNCA** usar "satisfacao garantida" — termos devem ser ESPECIFICOS.

## Escassez e Urgencia

Devem ser GENUINAS, nunca fabricadas.

| Tipo | Mecanismo | Exemplo |
|------|-----------|---------|
| **Capacidade** | Vagas limitadas por limite real | "Aceito 10 clientes por mes (limite operacional)" |
| **Cohort** | Turma com data fixa | "Turma de abril comeca dia 15" |
| **Temporal** | Bonus expira | "Bonus de sessao 1:1 so ate sexta" |
| **Preco** | Aumento agendado | "Preco sobe para $X em 30 dias" |

## Output Final

```markdown
# [Offer Name] — Offer Stack Architecture

## Core Offer: [Name]
**Promise:** [Transformation statement]
**Price:** $[X]
**Includes:**
- [Component 1] — Value: $[X]
- [Component 2] — Value: $[X]

## Bonus Stack
1. **[Bonus 1]** — Value: $[X]
   Solves: [Obstacle]
2. **[Bonus 2]** — Value: $[X]
   Solves: [Obstacle]

## Order Bump: [Name]
**Price:** $[X]

## Upsell 1: [Name]
**Price:** $[X]
**Adds:** [Additional value]

## Value Stack Summary
| Component | Value |
|-----------|-------|
| Core Offer | $[X] |
| Bonus 1 | $[X] |
| Bonus 2 | $[X] |
| **Total** | **$[X]** |

**Asking Price:** $[X]
**Value Ratio:** [X]:1
```
