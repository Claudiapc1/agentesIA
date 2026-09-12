---
title: "Marketing Page Type Patterns"
purpose: "Define page templates for sales, capture, VSL, and PLF pages with section structure, component mapping, ASCII wireframes, and copy framework integration"
version: "1.0.0"
extends: "page-type-patterns.md"
created: "2026-03-23"
section_contract: "page-section-contract.md"
---

# Marketing Page Type Patterns

## How to Use This KB

Extension of `page-type-patterns.md` focused on marketing/conversion pages. Same structure:

1. **Section breakdown** -- ordered list with section contract keys
2. **Component map** -- shadcn/ui + conversion components
3. **ASCII wireframe** -- visual structure reference
4. **Layout pattern** -- from page-layout-framework.md
5. **Spacing strategy** -- from spacing-rhythm-system.md
6. **Copy framework** -- from copy-to-layout-bridge.md + PLF/Halbert/Ogilvy
7. **Section contract keys** -- from page-section-contract.md

---

## 0. Marketing Design Tone Vocabulary

Extension of Section 0 from page-type-patterns.md for marketing-specific tones:

| Buzzword | Spacing | Typography | Colors | Layout | Componentes |
|----------|---------|------------|--------|--------|-------------|
| **high-ticket** | Generous | Serif headlines, clean sans body, wide tracking | Dark bg (#0a0a0a), gold/champagne accents | Centered narrow, editorial | Minimal CTAs, no popups, application-style forms |
| **launch** | Balanced | Bold sans headlines, urgency in accent color | Brand primary + red/orange urgency accents | Full-width sections, sticky CTA | Countdown, value stack, scarcity badges |
| **direct-response** | Balanced | Large readable body (18px+), bold subheads | Light bg, red/blue CTA contrast | Single column, long-form scroll | Multiple CTAs, highlighted boxes, PS sections |
| **webinar** | Generous | Clean sans, headline+subheadline hierarchy | Brand colors, trust blue | Split hero (video+form), centered content | Video embed, registration form, countdown |
| **lead-magnet** | Generous | Bold headline, minimal body text | High contrast, clean white bg | Centered, minimal sections | Capture form, benefit bullets, social proof bar |

---

## 7. Sales Page (Long-form / Direct Response)

**Layout pattern:** centered-narrow (KB1 Section 5.3) — max-w-3xl for readability
**Spacing strategy:** Balanced (KB4 Section 4.2) — generous between sections, compact within
**Copy framework:** PLF Sales Page Blueprint + AIDA + Halbert long-form
**Eye pattern:** F-pattern (KB5 Section 2) — scanning left-heavy content
**Section contract keys:** hero, problem, mechanism, offer, proof, testimonials, guarantee, faq, cta, ps

### Section Breakdown

| # | Section | Contract Key | AIDA Phase | Purpose |
|---|---------|-------------|------------|---------|
| 1 | Hero + Headline | `hero` | Attention | Hook with benefit-driven headline, subheadline, primary CTA |
| 2 | Opening Hook | `opening` | Attention | Story/question/bold claim to pull reader in |
| 3 | The Problem | `problem` | Interest | Agitate pain, name the enemy, cost of inaction |
| 4 | The Solution | `mechanism` | Interest | Introduce method/approach, big idea, why it works |
| 5 | Authority / Bio | `bio` | Interest | Credibility markers, personal story, credentials |
| 6 | What's Included | `offer` | Desire | Module breakdown, bonus stack, value summary |
| 7 | Value Stack | `pricing` | Desire | Price anchoring (de/por), investment framing |
| 8 | Social Proof | `testimonials` | Desire | Featured testimonials, results stack, before/after |
| 9 | FAQ / Objections | `faq` | Desire | Objection handling in accordion format |
| 10 | Guarantee | `guarantee` | Action | Risk reversal, guarantee terms, why you offer it |
| 11 | Final CTA + Urgency | `cta` | Action | Two options framing, deadline, scarcity |
| 12 | PS Section | `ps` | Action | Final emotional hook, restate key benefit |

### Component Map

| Section | shadcn/ui + Custom Components |
|---------|-------------------------------|
| Hero | Button (primary CTA), Badge (launch/new) |
| Opening Hook | — (pure copy, editorial layout) |
| Problem | Card (highlight box for pain points), Separator |
| Solution | Card, Badge (method name), Separator |
| Bio | Avatar (large), Badge (credentials), Card |
| Offer | Card (per module), Badge (bonus), Separator |
| Value Stack | **ValueStack** (custom: items + crossed prices + total), Button (CTA) |
| Testimonials | Card, Avatar, Badge (result metric), Separator |
| FAQ | Accordion, AccordionItem, AccordionTrigger, AccordionContent |
| Guarantee | **GuaranteeBadge** (custom: shield icon + days + terms), Card |
| Final CTA | Button (primary, large), **CountdownTimer** (custom), **ScarcityBadge** (custom) |
| PS | — (pure copy, italic/handwritten style) |

### ASCII Wireframe

```
+================================================================+
|  [Logo]                                                         |
+================================================================+
|                                                                  |
|                         HERO SECTION                             |
|                                                                  |
|              [Badge: "Inscricoes Abertas"]                        |
|                                                                  |
|         Como [RESULTADO] em [TEMPO]                              |
|         Mesmo Se [OBJECAO]                                       |
|                                                                  |
|         Subheadline com promessa especifica                      |
|                                                                  |
|              [ QUERO COMECAR AGORA → ]                           |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|                     OPENING HOOK                                 |
|                                                                  |
|    Em 2023, eu estava [situacao]...                               |
|    [3-4 paragrafos de historia/conexao]                          |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|                      O PROBLEMA                                  |
|                                                                  |
|    Voce conhece essa sensacao:                                   |
|                                                                  |
|    +--------------------------------------------------+          |
|    |  • Dor 1                                         |          |
|    |  • Dor 2                                         |          |
|    |  • Dor 3                                         |          |
|    +--------------------------------------------------+          |
|                                                                  |
|    O problema nao e voce. O problema e o metodo.                 |
|                                                                  |
|    [ Custo de inacao: consequencias listadas ]                   |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|                      A SOLUCAO                                   |
|                                                                  |
|    Apresento o [NOME DO METODO]:                                 |
|                                                                  |
|    [Explicacao do insight principal]                              |
|    [3 razoes por que funciona]                                   |
|                                                                  |
|              [ QUERO SABER MAIS → ]                              |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|                    SOBRE O AUTOR                                 |
|                                                                  |
|    [Avatar]  Nome do Expert                                      |
|              [Badge] [Badge] [Badge]                             |
|                                                                  |
|    Bio curta + historia de transformacao                          |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|                   O QUE ESTA INCLUIDO                            |
|                                                                  |
|   +------------------+ +------------------+ +----------------+   |
|   | MODULO 1         | | MODULO 2         | | MODULO 3       |   |
|   | Nome             | | Nome             | | Nome           |   |
|   | Descricao        | | Descricao        | | Descricao      |   |
|   | Valor: R$X       | | Valor: R$X       | | Valor: R$X     |   |
|   +------------------+ +------------------+ +----------------+   |
|                                                                  |
|   BONUS #1: [Nome] .......................... Valor: R$X         |
|   BONUS #2: [Nome] .......................... Valor: R$X         |
|   BONUS #3: [Nome] .......................... Valor: R$X         |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|                     VALUE STACK                                  |
|                                                                  |
|    Valor total:                    ~~R$XX.XXX~~                  |
|                                                                  |
|    Seu investimento hoje:          R$X.XXX                       |
|    ou 12x de R$XXX                                               |
|                                                                  |
|              [ GARANTIR MINHA VAGA → ]                           |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|                    DEPOIMENTOS                                   |
|                                                                  |
|   +------------------------------------------------------+       |
|   | [Avatar] "Quote do cliente satisfeito"               |       |
|   |          - Nome, Contexto                            |       |
|   |          Resultado: [metrica especifica]             |       |
|   +------------------------------------------------------+       |
|   +------------------------------------------------------+       |
|   | [Avatar] "Quote do cliente 2"                        |       |
|   +------------------------------------------------------+       |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|                       FAQ                                        |
|                                                                  |
|   [+] Quanto tempo preciso dedicar?                              |
|   [+] Funciona para [situacao]?                                  |
|   [+] E se eu nao conseguir resultado?                           |
|   [+] Como funciona o suporte?                                   |
|   [+] Posso pagar parcelado?                                     |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|                     GARANTIA                                     |
|                                                                  |
|              [Shield Icon]                                       |
|         GARANTIA DE XX DIAS                                      |
|                                                                  |
|    Experimente por XX dias. Se nao for para voce,                |
|    devolvemos 100%. Sem perguntas.                               |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|                    CTA FINAL                                     |
|                                                                  |
|    Voce tem duas opcoes:                                         |
|    Opcao 1: Continuar como esta...                               |
|    Opcao 2: Tomar a decisao hoje.                                |
|                                                                  |
|    [COUNTDOWN: XX:XX:XX]                                         |
|    [Badge: "Ultimas XX vagas"]                                   |
|                                                                  |
|          [ SIM, QUERO COMECAR AGORA → ]                          |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|    PS: Se voce leu ate aqui...                                   |
|    [Link CTA final]                                              |
|                                                                  |
+-----------------------------------------------------------------+
```

---

## 8. Capture Page (Opt-in / Lead Magnet)

**Layout pattern:** centered-narrow (KB1 Section 5.3) — max-w-xl for focus
**Spacing strategy:** Generous (KB4 Section 4.1) — minimal content, maximum clarity
**Copy framework:** AIDA compressed — Attention+Action in single viewport
**Eye pattern:** Z-pattern (KB5 Section 2) — headline → image → bullets → form
**Section contract keys:** hero, features, socialProof, captureForm

### Section Breakdown

| # | Section | Contract Key | Purpose |
|---|---------|-------------|---------|
| 1 | Hero + Promise | `hero` | Headline with specific promise, subheadline with what they get |
| 2 | Lead Magnet Preview | `features` | Visual of the asset + 3-5 bullet benefits |
| 3 | Social Proof Bar | `socialProof` | Trust indicators (number of downloads, logos, mini-testimonials) |
| 4 | Capture Form | `captureForm` | Email/name form with CTA button + privacy note |
| 5 | Footer | `footer` | Minimal: privacy policy, terms links |

### Component Map

| Section | shadcn/ui + Custom Components |
|---------|-------------------------------|
| Hero | Badge (free/download), Button (ghost, secondary) |
| Lead Magnet Preview | Card (elevated, with image), Badge (bullet checkmarks) |
| Social Proof Bar | Avatar (group), Badge (count) |
| Capture Form | Input (email), Input (name, optional), Button (primary, full-width), Label |
| Footer | Separator, link text |

### ASCII Wireframe

```
+================================================================+
|  [Logo]                                                         |
+================================================================+
|                                                                  |
|                    HERO + PROMISE                                |
|                                                                  |
|    [Badge: "Gratuito"]                                           |
|                                                                  |
|    [RESULTADO] em [TEMPO]:                                       |
|    O Guia Definitivo Para [AVATAR]                               |
|                                                                  |
|    Descubra [promessa especifica] neste                          |
|    [tipo de material] gratuito.                                  |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|    +---------------------------+                                 |
|    |                           |    ✓ Beneficio 1               |
|    |    [Mockup do Material]   |    ✓ Beneficio 2               |
|    |                           |    ✓ Beneficio 3               |
|    |                           |    ✓ Beneficio 4               |
|    +---------------------------+    ✓ Beneficio 5               |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|    "Ja baixado por X.XXX pessoas"                                |
|    [Avatar] [Avatar] [Avatar] [Avatar] [Avatar]                  |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|    +--------------------------------------------------+          |
|    |                                                  |          |
|    |    [Nome]     ___________________________        |          |
|    |    [Email]    ___________________________        |          |
|    |                                                  |          |
|    |    [ BAIXAR AGORA — E GRATUITO → ]               |          |
|    |                                                  |          |
|    |    Seus dados estao seguros. Sem spam.           |          |
|    +--------------------------------------------------+          |
|                                                                  |
+-----------------------------------------------------------------+
|  Politica de Privacidade | Termos de Uso                         |
+-----------------------------------------------------------------+
```

---

## 9. VSL Page (Video Sales Letter)

**Layout pattern:** centered-narrow (KB1 Section 5.3) — max-w-4xl for video, max-w-2xl for copy below
**Spacing strategy:** Balanced (KB4 Section 4.2) — compact above fold, generous below
**Copy framework:** VSL Framework — video-first, progressive content reveal
**Eye pattern:** Single focus (video) → F-pattern (copy below)
**Section contract keys:** hero, video, problem, mechanism, offer, testimonials, guarantee, cta

### Section Breakdown

| # | Section | Contract Key | Purpose |
|---|---------|-------------|---------|
| 1 | Pre-headline + Video | `hero` + `video` | Curiosity headline, embedded video player |
| 2 | Below-Video Hook | `problem` | Reinforce video message, bridge to copy |
| 3 | The Solution | `mechanism` | Method summary for skimmers who didnt watch |
| 4 | Offer Summary | `offer` | What they get (compact stack) |
| 5 | Testimonials | `testimonials` | 3-5 results with metrics |
| 6 | Guarantee | `guarantee` | Risk reversal |
| 7 | Final CTA | `cta` | Button + urgency + scarcity |

### Component Map

| Section | shadcn/ui + Custom Components |
|---------|-------------------------------|
| Hero + Video | **VideoEmbed** (custom: poster, play button, aspect-16/9), Badge |
| Below-Video Hook | — (pure copy) |
| Solution | Card, Badge |
| Offer | Card, **ValueStack** (custom), Button |
| Testimonials | Card, Avatar, Badge |
| Guarantee | **GuaranteeBadge** (custom) |
| Final CTA | Button (primary, large), **CountdownTimer** (custom), **StickyCtaBar** (custom) |

### ASCII Wireframe

```
+================================================================+
|  [Logo]                                                         |
+================================================================+
|                                                                  |
|       Atencao: [AVATAR] que quer [RESULTADO]                    |
|                                                                  |
|   +----------------------------------------------------------+   |
|   |                                                          |   |
|   |                                                          |   |
|   |                    [▶ PLAY]                              |   |
|   |                                                          |   |
|   |                   VIDEO PLAYER                           |   |
|   |                   (16:9 ratio)                           |   |
|   |                                                          |   |
|   +----------------------------------------------------------+   |
|                                                                  |
|           [ QUERO COMECAR AGORA → ]                              |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|    Se voce assistiu o video, ja sabe:                            |
|    [copy reforco da mensagem principal]                          |
|                                                                  |
|    Se nao assistiu, aqui esta o resumo:                          |
|    [3 pontos-chave do video]                                     |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|                   O QUE VOCE RECEBE                              |
|                                                                  |
|    Item 1 .......................... ~~R$X~~ Incluso             |
|    Item 2 .......................... ~~R$X~~ Incluso             |
|    Item 3 .......................... ~~R$X~~ Incluso             |
|    Bonus ........................... ~~R$X~~ Incluso             |
|                                                                  |
|    Investimento: R$X.XXX ou 12x R$XXX                           |
|                                                                  |
|           [ GARANTIR MINHA VAGA → ]                              |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|    [Avatar] "Resultado especifico" - Nome                        |
|    [Avatar] "Resultado especifico" - Nome                        |
|    [Avatar] "Resultado especifico" - Nome                        |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|    [Shield] GARANTIA DE XX DIAS                                  |
|    100% do dinheiro de volta.                                    |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|    [COUNTDOWN: XX:XX:XX]                                         |
|    [Badge: "Ultimas vagas"]                                      |
|                                                                  |
|        [ SIM, QUERO COMECAR → ]                                  |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|  +===========================================================+  |
|  |  STICKY CTA BAR (aparece ao scrollar)                      |  |
|  |  [Preco] [COUNTDOWN]    [ GARANTIR VAGA → ]               |  |
|  +===========================================================+  |
|                                                                  |
+-----------------------------------------------------------------+
```

---

## 10. Application Page (High-Ticket / Premium)

**Layout pattern:** centered-narrow (KB1 Section 5.3) — max-w-2xl for exclusivity
**Spacing strategy:** Generous (KB4 Section 4.1) — premium feel, lots of whitespace
**Copy framework:** Brunson Application Funnel — qualify before selling
**Eye pattern:** Z-pattern (KB5 Section 2) — editorial flow
**Section contract keys:** hero, qualify, qualifyNegative, bio, form, cta

### Section Breakdown

| # | Section | Contract Key | Purpose |
|---|---------|-------------|---------|
| 1 | Hero | `hero` | Exclusive positioning, "apply" language, not "buy" |
| 2 | Who This Is For | `qualify` | Positive qualification criteria (ideal client) |
| 3 | Who This Is NOT For | `qualifyNegative` | Negative qualification (filter out wrong fit) |
| 4 | What You Get | `offer` | Brief overview (not full stack — premium restraint) |
| 5 | About the Expert | `bio` | Authority, credentials, why they're selective |
| 6 | Application Form | `form` | Strategic questions that pre-sell through self-reflection |
| 7 | CTA | `cta` | "Submit Application" — not "Buy Now" |

### ASCII Wireframe

```
+================================================================+
|  [Logo]                                                         |
+================================================================+
|                                                                  |
|                                                                  |
|         Aplicacao: [NOME DO PROGRAMA]                            |
|                                                                  |
|         Este nao e um programa para todos.                       |
|         E para [AVATAR ESPECIFICO] que [CRITERIO].               |
|                                                                  |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|    ESTE PROGRAMA E PARA VOCE SE:                                 |
|                                                                  |
|    ✓ Criterio 1                                                  |
|    ✓ Criterio 2                                                  |
|    ✓ Criterio 3                                                  |
|    ✓ Criterio 4                                                  |
|    ✓ Criterio 5                                                  |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|    ESTE PROGRAMA NAO E PARA VOCE SE:                             |
|                                                                  |
|    ✗ Anti-criterio 1                                             |
|    ✗ Anti-criterio 2                                             |
|    ✗ Anti-criterio 3                                             |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|    O QUE VOCE RECEBE                                             |
|                                                                  |
|    [Descricao breve e premium — sem value stack]                 |
|    [Foco em transformacao, nao em features]                      |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|    [Avatar grande]                                               |
|    [Nome do Expert]                                              |
|    [Credenciais em tom editorial]                                |
|                                                                  |
+-----------------------------------------------------------------+
|                                                                  |
|    FORMULARIO DE APLICACAO                                       |
|                                                                  |
|    Nome completo:    ___________________________                 |
|    Email:            ___________________________                 |
|    Empresa:          ___________________________                 |
|    Faturamento:      [Dropdown: faixas]                          |
|    Maior desafio:    ___________________________                 |
|                      ___________________________                 |
|    Por que agora:    ___________________________                 |
|                      ___________________________                 |
|    Como conheceu:    [Dropdown: canais]                          |
|                                                                  |
|         [ ENVIAR APLICACAO → ]                                   |
|                                                                  |
|    Todas as aplicacoes sao revisadas em ate 48h.                 |
|                                                                  |
+-----------------------------------------------------------------+
```

---

## 11. Thank You / Confirmation Page

**Layout pattern:** centered-narrow — max-w-lg, single focus
**Spacing strategy:** Generous
**Copy framework:** Post-conversion reinforcement
**Section contract keys:** congrats, cta

### Section Breakdown

| # | Section | Contract Key | Purpose |
|---|---------|-------------|---------|
| 1 | Confirmation | `congrats` | Confirm action, reduce buyer's remorse |
| 2 | Next Steps | `features` | Clear instructions on what happens next |
| 3 | Bonus CTA | `cta` | Upsell, share, or community invite |

### ASCII Wireframe

```
+================================================================+
|                                                                  |
|              [Checkmark Icon]                                    |
|                                                                  |
|         Parabens! Sua inscricao foi confirmada.                  |
|                                                                  |
|         Proximos passos:                                         |
|         1. Cheque seu email (+ spam)                             |
|         2. [Acao especifica]                                     |
|         3. [Acao especifica]                                     |
|                                                                  |
|         Enquanto isso:                                           |
|         [ ENTRAR NO GRUPO → ]                                   |
|                                                                  |
+-----------------------------------------------------------------+
```

---

## Page Type Selection Guide (Marketing)

| User Intent | Page Type | Key Signal |
|-------------|-----------|------------|
| Vender produto/servico | **Sales Page** (#7) | "pagina de vendas", "sales page", "oferta" |
| Capturar leads | **Capture Page** (#8) | "captura", "opt-in", "lead magnet", "isca" |
| Vender com video | **VSL Page** (#9) | "VSL", "video de vendas", "video sales" |
| Vender high-ticket | **Application Page** (#10) | "aplicacao", "high-ticket", "premium", "seletivo" |
| Pos-compra/inscricao | **Thank You** (#11) | "obrigado", "confirmacao", "thank you" |
| Landing generica | **Landing Page** (#1) | "landing page" (use page-type-patterns.md #1) |

## Copy Framework Compatibility Matrix

| Page Type | AIDA | PAS | StoryBrand | PLF | Halbert | Ogilvy | Brunson |
|-----------|------|-----|------------|-----|---------|--------|---------|
| Sales Page | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| Capture Page | ✓ (compressed) | — | — | — | — | — | — |
| VSL Page | ✓ | ✓ | — | ✓ | — | — | — |
| Application Page | — | — | — | — | — | ✓ | ✓ |
| Thank You | — | — | — | — | — | — | — |
