# Contrato de Seções: Copy → Builder → Design System

> **Versão:** 1.2.0 | **Última atualização:** 2026-02-23

Referência única que conecta os **nomes usados na copy** com as **section keys do builder** e os **componentes do design system**.

---

## REGRA OBRIGATÓRIA: Marcação de Seções

**Toda copy que vira página renderizável DEVE usar marcação HTML comment inline:**

```markdown
<!-- sectionKey -->
Conteúdo da seção aqui...
<!-- /sectionKey -->
```

### Por que comentários HTML?
- **Invisíveis no Markdown** — não poluem a visualização da copy
- **Parser lê com prioridade 1** — é o primeiro formato que o builder processa
- **Zero ambiguidade** — cada seção tem início e fim explícitos

### Exemplo completo (carta de vendas):
```markdown
<!-- headline -->
# Sua Headline Principal Aqui
<!-- /headline -->

<!-- subheadline -->
### Texto de suporte com credencial
<!-- /subheadline -->

<!-- sender -->
Caro mentor,
<!-- /sender -->

<!-- opening -->
Parágrafos de abertura...
<!-- /opening -->

<!-- agitation -->
Parágrafos de agitação...
<!-- /agitation -->
```

### Quais copies recebem marcadores?
| Tipo | Marcadores? | Section keys |
|------|:-----------:|-------------|
| Página de vendas (sales-page) | ✅ | hero, problem, beforeAfter, mechanism, features, socialProof, testimonials, bio, pricing, guarantee, faq, ctaCard, footer |
| Carta de vendas (sales-letter) | ✅ | headline, subheadline, sender, opening, agitation, mechanism, proof, comparison, bullets, qualify, offer, guarantee, closing, ps |
| Página de captura (capture-page) | ✅ | hero, features, socialProof, captureForm, bio, faq, ctaCard, footer |
| VSL page | ✅ | headline, video, cta, footer |
| Landing page | ✅ | hero, features, socialProof, testimonials, faq, ctaCard, captureForm, footer |
| Registration page | ✅ | event, form, host, footer |
| Upsell page | ✅ | congrats, offer, guarantee, footer |
| Link bio page | ✅ | linkProfile, linkItems, linkBio, linkFooter |
| Emails | ❌ | N/A (não renderiza no builder) |
| Ads | ❌ | N/A |
| Posts Instagram | ❌ | N/A |
| WhatsApp | ❌ | N/A |
| VSL script (roteiro) | ❌ | N/A (roteiro de gravação, não página) |
| PLF texto | ❌ | N/A |

### Referência de formato de entrega
Consulte `data/diretriz-entrega-builder.md` para exemplos completos por tipo de página.

---

## Como usar este documento

1. **Copywriter:** Consulte a coluna "Aliases PT" para saber que marcadores usar na copy
2. **Builder/Parser:** Usa a coluna "Section Key" para mapear marcadores → componentes
3. **Design System:** Consulte "Componente DS" e "Tokens" para saber o que renderiza

---

## Tabela Resumo — 38 Seções

| # | Section Key | Aliases PT na Copy | Componente | Template Principal |
|---|-------------|-------------------|------------|-------------------|
| 1 | `hero` | hero | `Hero` | sales-page, landing-page, capture-page |
| 2 | `problem` | problema, história problema | `ProblemGrid` | sales-page |
| 3 | `beforeAfter` | antes & depois | `BeforeAfter` | sales-page |
| 4 | `features` | benefícios, features / benefícios | `FeaturesGrid` | sales-page, landing-page, capture-page |
| 5 | `socialProof` | prova social, destaque | `SocialProof` | sales-page, landing-page, capture-page |
| 6 | `testimonials` | depoimentos | `Testimonials` | sales-page, landing-page |
| 7 | `bio` | bio / sobre, sobre, quem sou eu | `BioSection` | sales-page |
| 8 | `pricing` | preço, investimento | `PricingSection` | sales-page |
| 9 | `guarantee` | garantia | `Guarantee` | sales-page, upsell-page |
| 10 | `faq` | faq, dúvidas, perguntas | `FaqSection` | sales-page, landing-page |
| 11 | `ctaCard` | cta, cta final, escassez, aplicação | `CtaCard` | sales-page, landing-page |
| 12 | `captureForm` | formulário | `CaptureForm` | capture-page, landing-page |
| 13 | `footer` | rodapé | `PageFooter` | todos |
| 14 | `envelope` | envelope, envelope / headline externa | inline (carta) | sales-letter |
| 15 | `headline` | headline, headline principal | inline (carta) | sales-letter, vsl-page |
| 16 | `subheadline` | subheadline | inline (carta) | sales-letter |
| 17 | `sender` | remetente, carta aberta | inline (carta) | sales-letter |
| 18 | `opening` | abertura, contexto, história | inline (carta) | sales-letter |
| 19 | `agitation` | agitação | inline (carta) | sales-letter |
| 20 | `mechanism` | mecanismo, mudança, solução, metodologia | inline (carta) · `MechanismSection` (página) | sales-letter, sales-page |
| 21 | `proof` | prova, prova 1/2/3 | inline (carta) | sales-letter |
| 22 | `comparison` | comparativo | inline (carta) | sales-letter |
| 23 | `bullets` | bullets, o que você vai ter | inline (carta) | sales-letter |
| 24 | `qualify` | qualificação, para quem é, pra quem é | inline (carta) | sales-letter |
| 25 | `qualifyNegative` | para quem não é, pra quem não é | inline (carta) | sales-letter |
| 26 | `offer` | oferta, como aplicar | inline (carta) | sales-letter, upsell-page |
| 27 | `closing` | assinatura, última coisa | inline (carta) | sales-letter |
| 28 | `ps` | p.s. | inline (carta) | sales-letter |
| 29 | `event` | evento | inline (registro) | registration-page |
| 30 | `form` | registro | inline (registro) | registration-page |
| 31 | `host` | apresentador | inline (registro) | registration-page |
| 32 | `congrats` | parabéns | inline (upsell) | upsell-page |
| 33 | `video` | vídeo | inline (vsl) | vsl-page |
| 34 | `cta` | cta | inline (vsl) | vsl-page, thank-you-page |
| 35 | `linkProfile` | perfil, profile, perfil link bio | `LinkBioProfile` | link-bio-page |
| 36 | `linkItems` | links, links úteis, lista de links | `LinkBioItems` | link-bio-page |
| 37 | `linkBio` | bio curta, sobre breve | `LinkBioBio` | link-bio-page |
| 38 | `linkFooter` | rodapé link bio, footer link bio, contatos | `LinkBioFooter` | link-bio-page |

---

## Detalhamento por Seção

### 1. hero

- **Aliases PT:** hero
- **Builder key:** `hero`
- **Componente:** `Hero` (`pages-app/src/sections/hero.tsx`)
- **Props:**
  - `headline` (string, OBRIGATÓRIO)
  - `subheadline` (string)
  - `badge` (string) — pill no topo
  - `highlightWord` (string) — palavra em champagne
  - `supportText` (string)
  - `stats` (`{ value, label }[]`)
  - `cta` (`{ text, url }`)
  - `secondaryCta` (`{ text, url }`)
- **Tokens DS:** `--surface-100` (stat cards), `--gradient-cta` (botão), `--radius-full` (badge), `--accent-champagne` (highlight)
- **Dica para copy:** Incluir `highlightWord` para destaque visual automático. Usar `badge` para contexto rápido (ex: "Método Exclusivo").

---

### 2. problem

- **Aliases PT:** problema, história problema
- **Builder key:** `problem`
- **Componente:** `ProblemGrid` (`pages-app/src/sections/problem-grid.tsx`)
- **Props:**
  - `headline` (string, OBRIGATÓRIO)
  - `overline` (string) — label em caps acima do headline
  - `highlightWord` (string)
  - `items` (string[], OBRIGATÓRIO) — lista de dores/problemas
- **Tokens DS:** `--surface-050`, `--surface-100` (cards), `--accent-champagne` (overline), `--border-default`
- **Dica para copy:** Cada item deve ser uma frase curta e visceral. Grid responsivo de 3 colunas.

---

### 3. beforeAfter

- **Aliases PT:** antes & depois
- **Builder key:** `beforeAfter`
- **Componente:** `BeforeAfter` (`pages-app/src/sections/before-after.tsx`)
- **Props:**
  - `headline` (string)
  - `highlightWord` (string)
  - `before` (string[], OBRIGATÓRIO) — itens do "antes"
  - `after` (string[], OBRIGATÓRIO) — itens do "depois"
- **Tokens DS:** `--accent-red` (✕ antes), `--accent-green` (✓ depois), `--surface-100`
- **Dica para copy:** Antes e depois devem ser espelhados (mesmo tema, perspectivas opostas).

---

### 4. features

- **Aliases PT:** benefícios, features / benefícios
- **Builder key:** `features`
- **Componente:** `FeaturesGrid` (`pages-app/src/sections/features-grid.tsx`)
- **Props:**
  - `headline` (string)
  - `overline` (string)
  - `highlightWord` (string)
  - `items` (`{ title, desc }[]`, OBRIGATÓRIO) — cada item tem título e descrição
- **Tokens DS:** `--surface-050`, `--surface-100` (cards), `--accent-champagne` (overline), `--border-default`
- **Dica para copy:** Cada feature precisa de `title` (curto) + `desc` (1-2 frases).

---

### 5. socialProof

- **Aliases PT:** prova social, destaque
- **Builder key:** `socialProof`
- **Componente:** `SocialProof` (`pages-app/src/sections/social-proof.tsx`)
- **Props:**
  - `items` (`{ value, label }[]`, OBRIGATÓRIO) — números de impacto
- **Tokens DS:** `--accent-champagne` (números grandes), `--text-secondary`
- **Dica para copy:** Máximo 4 items. Valor deve ser impactante ("+500", "97%", "R$ 2M").

---

### 6. testimonials

- **Aliases PT:** depoimentos
- **Builder key:** `testimonials`
- **Componente:** `Testimonials` (`pages-app/src/sections/testimonials.tsx`)
- **Props:**
  - `headline` (string)
  - `items` (`{ name, role?, text }[]`, OBRIGATÓRIO)
- **Tokens DS:** `--surface-100` (cards), `--border-default`, `--radius-md`
- **Dica para copy:** Cada depoimento precisa de `name` + `text`. `role` é opcional mas recomendado.

---

### 7. bio

- **Aliases PT:** bio / sobre, sobre, quem sou eu, quem sou eu para te falar isso
- **Builder key:** `bio`
- **Componente:** `BioSection` (`pages-app/src/sections/bio-section.tsx`)
- **Props:**
  - `name` (string, OBRIGATÓRIO)
  - `tagline` (string)
  - `subtitle` (string)
  - `paragraphs` (string[], OBRIGATÓRIO) — parágrafos da bio
  - `avatarInitial` (string)
- **Tokens DS:** `--accent-champagne` (avatar), `--surface-050`, `--surface-100`, `--radius-lg`
- **Dica para copy:** Parágrafos devem ser curtos (3-5 linhas cada). Primeiro parágrafo é o mais importante.

---

### 8. pricing

- **Aliases PT:** preço, investimento
- **Builder key:** `pricing`
- **Componente:** `PricingSection` (`pages-app/src/sections/pricing-section.tsx`)
- **Props:**
  - `headline` (string)
  - `subtitle` (string)
  - `cards` (PricingCard[], OBRIGATÓRIO)
    - Cada card: `badge`, `price`, `subtitle?`, `features` (string[]), `buttonText`, `buttonUrl`, `highlighted?`
- **Tokens DS:** `--gradient-cta` (botão), `--shadow-gold-glow` (card destacado), `--accent-champagne`
- **Dica para copy:** Card com `highlighted: true` recebe borda dourada e glow.

---

### 9. guarantee

- **Aliases PT:** garantia
- **Builder key:** `guarantee`
- **Componente:** `Guarantee` (`pages-app/src/sections/guarantee.tsx`)
- **Props:**
  - `headline` (string, OBRIGATÓRIO)
  - `highlightWord` (string)
  - `description` (string, OBRIGATÓRIO)
- **Tokens DS:** `rgba(201,178,152,0.08)` (fundo dourado sutil), `--accent-champagne`, `--radius-lg`
- **Dica para copy:** Headline deve conter a palavra-chave da garantia. Description em 2-3 frases.

---

### 10. faq

- **Aliases PT:** faq, dúvidas, perguntas
- **Builder key:** `faq`
- **Componente:** `FaqSection` (`pages-app/src/sections/faq-section.tsx`)
- **Props:**
  - `headline` (string)
  - `items` (`{ q, a }[]`, OBRIGATÓRIO) — perguntas e respostas
- **Tokens DS:** `--surface-100` (cards), `--border-default`, `--radius-md`
- **Dica para copy:** Mínimo 5 perguntas. Formato `q` (pergunta) e `a` (resposta).

---

### 11. ctaCard

- **Aliases PT:** cta, cta final, escassez, aplicação
- **Builder key:** `ctaCard`
- **Componente:** `CtaCard` (`pages-app/src/sections/cta-card.tsx`)
- **Props:**
  - `headline` (string, OBRIGATÓRIO)
  - `highlightWord` (string)
  - `description` (string)
  - `buttonText` (string, OBRIGATÓRIO)
  - `buttonUrl` (string, OBRIGATÓRIO)
- **Tokens DS:** `--gradient-cta` (botão), `--shadow-gold-glow` (container), `--surface-050`, `--radius-lg`
- **Dica para copy:** Headline deve criar urgência. `buttonText` em imperativo ("Quero Minha Vaga").

---

### 12. captureForm

- **Aliases PT:** formulário
- **Builder key:** `captureForm`
- **Componente:** `CaptureForm` (`pages-app/src/sections/capture-form.tsx`)
- **Props:**
  - `headline` (string)
  - `description` (string)
  - `buttonText` (string, OBRIGATÓRIO)
  - `redirectUrl` (string)
  - `slug` (string, OBRIGATÓRIO — preenchido pelo sistema)
  - `fields` (`{ name, placeholder, type? }[]`)
- **Tokens DS:** `--gradient-cta` (botão), `--shadow-gold-glow`, `--surface-050`, `--radius-lg`
- **Dica para copy:** Se não especificar `fields`, usa padrão (nome + email + telefone).

---

### 13. footer

- **Aliases PT:** rodapé
- **Builder key:** `footer`
- **Componente:** `PageFooter` (`pages-app/src/sections/page-footer.tsx`)
- **Props:**
  - `columns` (`{ title, links: { label, url? }[] }[]`)
  - `copyright` (string)
- **Tokens DS:** `--surface-050`, `--text-muted`, `--border-default`
- **Dica para copy:** Opcional. Se omitido, renderiza copyright padrão.

---

### 14. envelope

- **Aliases PT:** envelope, envelope / headline externa
- **Builder key:** `envelope`
- **Renderização:** Inline (carta de vendas)
- **Props:**
  - `label` (string) — texto em caps dourado
  - `text` (string) — frase em itálico
- **Tokens DS:** `--accent-champagne` (label)
- **Dica para copy:** Usado como "pré-headline" em cartas de vendas.

---

### 15. headline

- **Aliases PT:** headline, headline principal
- **Builder key:** `headline`
- **Renderização:** Inline (carta/VSL)
- **Props:**
  - `text` (string, OBRIGATÓRIO)
  - `sub` (string) — sub-headline em itálico
- **Tokens DS:** `--text-primary` (44px, 800 weight)
- **Dica para copy:** Headline principal da carta. Máximo 2 linhas.

---

### 16. subheadline

- **Aliases PT:** subheadline
- **Builder key:** `subheadline`
- **Renderização:** Inline (carta)
- **Props:**
  - `paragraphs` (string[]) ou `text` (string)
- **Tokens DS:** `--text-secondary`
- **Dica para copy:** Texto de suporte abaixo da headline.

---

### 17. sender

- **Aliases PT:** remetente, carta aberta
- **Builder key:** `sender`
- **Renderização:** Inline (carta)
- **Props:**
  - `from` (string) — remetente
  - `to` (string) — destinatário
- **Tokens DS:** `--surface-050`, `--border-subtle`, `--radius-lg`
- **Dica para copy:** Formato carta: "De: [nome]" / "Para: [público]".

---

### 18. opening

- **Aliases PT:** abertura, contexto, história
- **Builder key:** `opening`
- **Renderização:** Inline (carta)
- **Props:**
  - `greeting` (string) — saudação
  - `paragraphs` (string[], OBRIGATÓRIO)
- **Tokens DS:** `--text-secondary` (17px, lineHeight 1.8)
- **Dica para copy:** Primeira conexão emocional. Parágrafos curtos.

---

### 19. agitation

- **Aliases PT:** agitação
- **Builder key:** `agitation`
- **Renderização:** Inline (carta)
- **Props:**
  - `headline` (string)
  - `paragraphs` (string[], OBRIGATÓRIO)
- **Tokens DS:** `--text-primary` (h2 32px), `--text-secondary`
- **Dica para copy:** Amplifica a dor identificada no opening.

---

### 20. mechanism

- **Aliases PT:** mecanismo, mudança, solução, metodologia
- **Builder key:** `mechanism`
- **Tipos de peça:** `sales-letter` e `sales-page`
- **Renderização:** Inline (carta) · `MechanismSection` (página)
- **Props (carta):**
  - `headline` (string, OBRIGATÓRIO)
  - `paragraphs` (string[], OBRIGATÓRIO)
- **Props (página):**
  - `headline` (string, OBRIGATÓRIO): o nome do método ou sistema
  - `paragraphs` (string[], OBRIGATÓRIO)
  - `pillars` (objeto[], OPCIONAL): pilares, passos ou etapas do método. Cada item com `nome` e `descricao`
  - `visual` (string, OPCIONAL): sugestão de diagrama, quando os pilares pedem representação gráfica
- **Tokens DS:** `--accent-champagne` (headline em dourado)
- **Dica para copy:** headline do mecanismo aparece em dourado e deve ser o nome do método ou sistema.
- **Por que existe em página (decisão do founder, 2026-08-22):** numa página de vendas o mecanismo é o bloco que justifica o preço, não uma funcionalidade a mais. É o efeito Polishop: o mesmo produto vendido por mais caro por causa dos elementos únicos declarados. Alojar isso dentro de `features` dilui o argumento de diferenciação no meio da lista de benefícios. Origem: modelo de página de vendas para perpétuo do founder, seção "Metodologia como ponto de diferenciação", versionado em `data/estruturas/pagina-vendas-perpetuo-FONTE-FOUNDER.md`.

---

### 21. proof

- **Aliases PT:** prova, prova 1/2/3
- **Builder key:** `proof`
- **Renderização:** Inline (carta)
- **Props:**
  - `headline` (string)
  - `paragraphs` (string[])
  - `quotes` (`{ text, author }[]`) — citações/depoimentos
  - `stats` (`{ value, label }[]`) — números de prova
- **Tokens DS:** `--accent-champagne` (stats, borda citação), `--surface-100` (stat cards)
- **Dica para copy:** Combinar parágrafos + stats + quotes para máximo impacto.

---

### 22. comparison

- **Aliases PT:** comparativo
- **Builder key:** `comparison`
- **Renderização:** Inline (carta)
- **Props:**
  - `headline` (string)
  - `intro` (string | string[])
  - `columnLeft` (string) — label coluna esquerda
  - `columnRight` (string) — label coluna direita
  - `rows` (`{ label, value }[]`, OBRIGATÓRIO) — linhas da tabela
  - `footer` (string | string[])
- **Tokens DS:** `--surface-100` (header/total), `--border-subtle`
- **Dica para copy:** Linha com "Total" no label recebe destaque automático.

---

### 23. bullets

- **Aliases PT:** bullets, o que você vai ter
- **Builder key:** `bullets`
- **Renderização:** Inline (carta)
- **Props:**
  - `headline` (string)
  - `items` (string[], OBRIGATÓRIO)
- **Tokens DS:** `--accent-champagne` (checkmarks ✓)
- **Dica para copy:** Cada bullet = 1 benefício específico com resultado implícito.

---

### 24. qualify

- **Aliases PT:** qualificação, para quem é, pra quem é, é para você se
- **Builder key:** `qualify`
- **Renderização:** Inline (carta)
- **Props:**
  - `positive` (`{ headline?, items: string[] }`) — para quem É
  - `negative` (`{ headline?, items: string[] }`) — para quem NÃO É
- **Tokens DS:** `--accent-champagne` (título positivo), verde ✅, vermelho ❌
- **Dica para copy:** Separar em dois blocos claros. Negativo repele parasitas (premissa core).

---

### 25. qualifyNegative

- **Aliases PT:** para quem não é, pra quem não é, não é para você se
- **Builder key:** `qualifyNegative`
- **Renderização:** Mesma que `qualify` (bloco negativo)
- **Props:** Mesmo formato do bloco `negative` do qualify
- **Dica para copy:** Pode ser usado separado do qualify para ênfase.

---

### 26. offer

- **Aliases PT:** oferta, como aplicar
- **Builder key:** `offer`
- **Renderização:** Inline (carta/upsell)
- **Props:**
  - `headline` (string)
  - `description` (string)
  - `steps` (`{ label, desc }[]`) — passos da oferta
  - `price` (string) — valor principal
  - `priceNote` (string) — nota de preço (ex: "ou 12x de R$ 97")
  - `buttonText` (string)
  - `buttonUrl` (string)
  - `scarcity` (string) — texto de escassez
- **Tokens DS:** `--surface-100`, `--border-default`, `--gradient-cta` (botão), `--shadow-gold-glow`, `--accent-champagne` (preço/steps)
- **Dica para copy:** Incluir `scarcity` para urgência. Steps numerados automaticamente.

---

### 27. closing

- **Aliases PT:** assinatura, última coisa, uma última coisa
- **Builder key:** `closing`
- **Renderização:** Inline (carta)
- **Props:**
  - `text` (string) — frase final
  - `name` (string, OBRIGATÓRIO) — nome do signatário
  - `title` (string) — cargo/título
- **Tokens DS:** `--text-muted` (itálico), `--text-primary` (nome)
- **Dica para copy:** Tom pessoal e intimista.

---

### 28. ps

- **Aliases PT:** p.s.
- **Builder key:** `ps`
- **Renderização:** Inline (carta)
- **Props:**
  - Aceita: string, string[], `{ items: string[] }`, ou array direto
- **Tokens DS:** `--text-muted` (itálico)
- **Dica para copy:** Último gatilho de urgência. 1-3 P.S. máximo.

---

### 29. event

- **Aliases PT:** evento
- **Builder key:** `event`
- **Renderização:** Inline (registro)
- **Props:**
  - `badge` (string)
  - `headline` (string)
  - `subheadline` (string)
  - `datetime` (string)
  - `bullets` (string[])
- **Dica para copy:** Para páginas de inscrição em eventos/webinars.

---

### 30. form

- **Aliases PT:** registro
- **Builder key:** `form`
- **Renderização:** Inline (registro)
- **Props:**
  - `headline` (string)
  - `buttonText` (string)
  - `fields` (`{ name, placeholder, type? }[]`)
- **Dica para copy:** Formulário de inscrição.

---

### 31. host

- **Aliases PT:** apresentador
- **Builder key:** `host`
- **Renderização:** Inline (registro)
- **Props:**
  - `name` (string)
  - `tagline` (string)
  - `paragraphs` (string[])
- **Dica para copy:** Bio do apresentador do evento.

---

### 32. congrats

- **Aliases PT:** parabéns
- **Builder key:** `congrats`
- **Renderização:** Inline (upsell/thank-you)
- **Props:**
  - `headline` (string)
  - `description` (string)
- **Dica para copy:** Celebração pós-compra. Tom positivo e energético.

---

### 33. video

- **Aliases PT:** vídeo
- **Builder key:** `video`
- **Renderização:** Inline (VSL)
- **Props:**
  - `embedHtml` (string) — HTML embed do vídeo
  - `url` (string) — URL alternativa
- **Dica para copy:** Para VSL pages. Prioridade: embedHtml > url.

---

### 34. cta

- **Aliases PT:** cta
- **Builder key:** `cta`
- **Renderização:** Inline (VSL/thank-you)
- **Props:**
  - `delaySeconds` (number) — tempo até mostrar botão (padrão: 300 = 5min)
  - `timerText` (string) — texto durante countdown
  - `buttonText` (string)
  - `buttonUrl` (string)
- **Dica para copy:** Em VSL, botão aparece após delay. Usar `timerText` para manter atenção.

---

### 35. linkProfile

- **Aliases PT:** perfil, profile, perfil link bio
- **Builder key:** `linkProfile`
- **Renderização:** Seção de cabeçalho do Link da Bio
- **Props:**
  - `name` (string)
  - `title` (string)
  - `subtitle` (string)
  - `avatarUrl` (string)
  - `backgroundImageUrl` (string)
  - `showAvatar` (boolean)
  - `logoUrl` (string)
- **Dica para copy:** Use uma frase curta de posicionamento em `title`.

---

### 36. linkItems

- **Aliases PT:** links, links úteis, lista de links, cards de links
- **Builder key:** `linkItems`
- **Renderização:** Lista principal de links da bio
- **Props:**
  - `items` (`{ label, url, variant?, description?, imageUrl?, backgroundImageUrl?, ctaText? }[]`, OBRIGATÓRIO)
- **Dica para copy:** `variant: "button"` para link simples e `variant: "card"` para bloco alto com imagem.

---

### 37. linkBio

- **Aliases PT:** bio curta, sobre breve, bio final
- **Builder key:** `linkBio`
- **Renderização:** Bloco opcional de descrição pessoal/profissional
- **Props:**
  - `headline` (string)
  - `paragraphs` (string[], OBRIGATÓRIO)
- **Dica para copy:** 1 a 3 parágrafos curtos com autoridade e contexto.

---

### 38. linkFooter

- **Aliases PT:** rodapé link bio, footer link bio, contatos
- **Builder key:** `linkFooter`
- **Renderização:** Rodapé institucional/contato da página
- **Props:**
  - `company` (string)
  - `site` (string)
  - `phone` (string)
  - `copyright` (string)
- **Dica para copy:** incluir apenas dados realmente úteis para não poluir a página.

---

## Seções por Tipo de Página

| Tipo de Página | Seções Disponíveis |
|---------------|-------------------|
| **sales-page** | hero, problem, beforeAfter, mechanism, features, socialProof, pricing, faq, guarantee, ctaCard, testimonials, bio, footer |
| **sales-letter** | headline, opening, agitation, mechanism, bullets, offer, guarantee, ps, footer |
| **landing-page** | hero, features, socialProof, testimonials, faq, ctaCard, captureForm, footer |
| **capture-page** | hero, features, socialProof, captureForm, testimonials, bio, footer |
| **registration-page** | event, form, host, footer |
| **upsell-page** | congrats, offer, guarantee, footer |
| **vsl-page** | headline, video, cta, footer |
| **thank-you-page** | congrats, cta, footer |
| **application-page** | hero, qualify, form, socialProof, faq, footer |
| **checkout-page** | hero, pricing, guarantee, faq, ctaCard, footer |
| **order-bump** | offer, pricing, cta, footer |
| **link-bio-page** | linkProfile, linkItems, linkBio, linkFooter |
| **dynamic-page** | TODAS (auto-detect) |

---

## Regras de Overflow

Seções que o parser NÃO reconhece são tratadas pelo `renderExtraSections()`:

1. Se a section key existe em `COMPONENT_MAP` → renderiza o componente dedicado
2. Se a section key existe em `SALES_INLINE_MAP` → renderiza inline de carta
3. Senão → `renderUnknownSection()` faz auto-detect pela forma dos dados:
   - Array de strings → bullets
   - Array de `{ q, a }` → FAQ accordion
   - Array de `{ name, text }` → testimonial cards
   - Array de `{ title, desc }` → features grid
   - Array de `{ value, label }` → social proof
   - Objeto com `paragraphs` + `name` → bio
   - Objeto com `before` + `after` → before/after
   - Fallback final → HeroCard com título e descrição

**Resultado:** Copy nunca se perde. Mesmo seções desconhecidas são renderizadas.

---

## Tokens do Design System

| Token | Valor | Uso Principal |
|-------|-------|---------------|
| `--surface-000` | `#0A0A0C` | Fundo da página |
| `--surface-050` | — | Cards sutis, sender, footer |
| `--surface-100` | — | Cards, stat boxes, headers tabela |
| `--accent-champagne` | `#C9B298` | Highlight, overlines, preços, checks |
| `--accent-red` | — | ✕ antes, ❌ negativo |
| `--accent-green` | — | ✓ depois, ✅ positivo |
| `--gradient-cta` | champagne→brown | Botões CTA |
| `--shadow-gold-glow` | — | Container de oferta/CTA |
| `--radius-full` | — | Badges pill |
| `--radius-lg` | — | Cards grandes |
| `--radius-md` | — | Cards menores, botões |
| `--border-default` | — | Bordas de cards |
| `--border-subtle` | — | Bordas internas |
| `--text-primary` | — | Headlines, nomes |
| `--text-secondary` | — | Parágrafos, descrições |
| `--text-muted` | — | Labels, notas, PS |

---

*Contrato de Seções v1.1.0 — Referência única Copy → Builder → Design System*
