# Diretriz de Entrega para o Page Builder

> **Versão:** 2.0.0 | **Última atualização:** 2026-02-23
>
> Referência completa: `data/section-contract.md`

---

## Objetivo

Garantir que toda copy produzida pelo Squad Copywriters chegue no Page Builder **sem perda de conteúdo**, com marcação de seções inline que permite construir a página diretamente.

---

## Formato de Entrega — Marcação Inline

Toda copy que vira página DEVE usar marcação HTML comment inline:

```markdown
<!-- hero -->
# Sua Headline Principal
### Texto de suporte aqui
[BOTÃO DE CTA — R$297]
<!-- /hero -->

<!-- problem -->
## Você Reconhece Esses Sinais?

- Dor 1 específica
- Dor 2 específica
- Dor 3 específica
<!-- /problem -->

<!-- mechanism -->
## A Solução Que Ninguém Te Contou

Texto explicando o mecanismo único...
<!-- /mechanism -->

<!-- offer -->
## Tudo Que Você Recebe Hoje

| Componente | Valor |
|-----------|-------|
| Item 1 | R$X |
| Item 2 | R$Y |

**Seu investimento: R$297**
<!-- /offer -->

<!-- guarantee -->
## Garantia de 14 Dias

Texto da garantia...
<!-- /guarantee -->

<!-- faq -->
## Perguntas Frequentes

**Pergunta 1?**
Resposta 1.

**Pergunta 2?**
Resposta 2.
<!-- /faq -->

<!-- ctaCard -->
## Clique e Comece Agora

[BOTÃO FINAL — R$297]

*50 vagas restantes.*
<!-- /ctaCard -->

<!-- footer -->
*© 2026 Nome. Todos os direitos reservados.*
<!-- /footer -->
```

---

## Regras de Marcação

### Sintaxe
- Abertura: `<!-- nome -->`
- Fechamento: `<!-- /nome -->`
- Nome = section key do contrato (lowercase, sem acentos)
- Sempre abrir E fechar. Nunca deixar seção aberta.

### Nomes válidos
- Usar APENAS section keys do contrato de seções (`section-contract.md`)
- Nunca inventar nomes fora do contrato
- Se a copy tem uma seção que não mapeia pra nenhuma key, usar a mais próxima

### Conteúdo dentro da marcação
- Markdown normal (headings, bullets, bold, tabelas, links)
- O copywriter escreve naturalmente — a marcação só delimita onde começa e termina cada seção
- Tudo entre `<!-- nome -->` e `<!-- /nome -->` pertence àquela seção

### O que NÃO precisa de marcação
- Copies que NÃO viram página (emails, WhatsApp, ads, posts IG, VSL script)
- Notas técnicas, headlines alternativas, mapas de sub-headlines (ficam fora dos marcadores)

---

## Tipos de Copy Que DEVEM Usar Marcação

| Tipo | Obrigatório? | Motivo |
|------|-------------|--------|
| **sales-page** | ✅ SIM | Vira página no builder |
| **sales-letter** | ✅ SIM | Vira página no builder |
| **capture-page** | ✅ SIM | Vira página no builder |
| **landing-page** | ✅ SIM | Vira página no builder |
| **registration-page** | ✅ SIM | Vira página no builder |
| **upsell-page** | ✅ SIM | Vira página no builder |
| **vsl-page** | ✅ SIM | Vira página no builder |
| email-sequence | ❌ NÃO | Não vira página |
| whatsapp | ❌ NÃO | Não vira página |
| ads | ❌ NÃO | Não vira página |
| posts-instagram | ❌ NÃO | Não vira página |
| vsl-script | ❌ NÃO | Script de narração, não página |

---

## Seções Válidas por Tipo de Página

| Tipo | Seções Obrigatórias | Seções Opcionais |
|------|-------------------|-----------------|
| **sales-page** | hero, problem, features, ctaCard, footer | beforeAfter, socialProof, pricing, faq, guarantee, testimonials, bio |
| **sales-letter** | headline, opening, mechanism, offer, ps, footer | envelope, subheadline, sender, agitation, proof, comparison, bullets, qualify, qualifyNegative, guarantee, closing |
| **capture-page** | hero, captureForm, footer | features, socialProof, testimonials, bio |
| **landing-page** | hero, ctaCard, footer | features, socialProof, testimonials, faq, captureForm |
| **registration-page** | event, form, footer | host |
| **upsell-page** | congrats, offer, footer | guarantee |
| **vsl-page** | headline, video, cta, footer | — |
| **link-bio-page** | linkProfile, linkItems, linkFooter | linkBio |

---

## Referência Rápida — Todas as Section Keys

### Seções de página (componentes visuais)
| Key | Uso típico |
|-----|-----------|
| `hero` | Topo da página — headline, sub, CTA, stats |
| `problem` | Grid de dores/problemas |
| `beforeAfter` | Antes vs depois |
| `features` | O que está incluso / benefícios |
| `socialProof` | Números de destaque |
| `testimonials` | Depoimentos |
| `bio` | Sobre o autor/mentor |
| `pricing` | Cards de preço |
| `guarantee` | Garantia |
| `faq` | Perguntas frequentes |
| `ctaCard` | CTA final com urgência |
| `captureForm` | Formulário de captura |
| `footer` | Rodapé |

### Seções de carta (inline, fluxo narrativo)
| Key | Uso típico |
|-----|-----------|
| `envelope` | Headline externa |
| `headline` | Headline principal |
| `subheadline` | Sub-headline |
| `sender` | Remetente / "Caro..." |
| `opening` | Abertura / história |
| `agitation` | Agitação da dor |
| `mechanism` | Mecanismo / solução |
| `proof` | Provas e resultados |
| `comparison` | Comparativo |
| `bullets` | Bullets / fascinations |
| `qualify` | Pra quem é |
| `qualifyNegative` | Pra quem NÃO é |
| `offer` | Oferta / stack de valor |
| `closing` | Assinatura |
| `ps` | P.S. |

### Seções especiais
| Key | Uso típico |
|-----|-----------|
| `event` | Evento (registration) |
| `form` | Formulário (registration) |
| `host` | Apresentador |
| `congrats` | Parabéns (upsell) |
| `video` | Vídeo (VSL page) |
| `cta` | CTA (VSL page) |
| `linkProfile` | Perfil (link bio) |
| `linkItems` | Links (link bio) |
| `linkBio` | Bio curta (link bio) |
| `linkFooter` | Rodapé (link bio) |

---

## Exemplo Completo: Sales Page com Marcação

```markdown
<!-- hero -->
# Transforme Seu Negócio em Uma Máquina de Resultados

### O método que já gerou R$50M para nossos clientes

[QUERO MINHA VAGA]
<!-- /hero -->

<!-- problem -->
## Os 5 Sinais de Que Seu Negócio Está Estagnado

- Trabalha 12h por dia e o faturamento não cresce
- Depende 100% de você para tudo funcionar
- Não consegue tirar férias sem o negócio parar
- Contrata errado e demite tarde demais
- Sabe que precisa mudar mas não sabe por onde começar
<!-- /problem -->

<!-- features -->
## Tudo Que Está Incluso

**3 Dias de Imersão**
Presencial, em grupo reduzido de no máximo 20 empresários.

**Plano de Ação Personalizado**
Saia com seu plano de 90 dias pronto para executar.

**Acesso ao Grupo VIP**
12 meses de acompanhamento com mentores seniores.
<!-- /features -->

<!-- guarantee -->
## Garantia Incondicional de 30 Dias

Se nos primeiros 30 dias você não sentir que este foi o melhor investimento que já fez no seu negócio, devolvemos 100% do seu investimento. Sem perguntas.
<!-- /guarantee -->

<!-- ctaCard -->
## Pronto Para Transformar Seu Negócio?

Restam apenas 8 vagas para a próxima turma.

[QUERO MINHA VAGA AGORA]
<!-- /ctaCard -->

<!-- footer -->
*© 2026 Empresa. Todos os direitos reservados.*
<!-- /footer -->
```

---

## Exemplo Completo: Sales Letter com Marcação

```markdown
<!-- headline -->
# Suas Copies de Mentoria Estão Perdendo Vendas Todos os Dias
<!-- /headline -->

<!-- subheadline -->
### A primeira IA treinada com R$20M em vendas REAIS de mentoria
<!-- /subheadline -->

<!-- sender -->
Caro mentor,
<!-- /sender -->

<!-- opening -->
Deixa eu te contar uma coisa que ninguém do meu mercado sabe.

Em 2024, eu demiti todo o meu time de copy...
<!-- /opening -->

<!-- agitation -->
## Contratei Gente. Treinei Gente. Ninguém Fazia Igual.

Eu tentei resolver isso de todo jeito possível...
<!-- /agitation -->

<!-- mechanism -->
## Então Eu Construí o Cirurgião.

Peguei tudo que aprendi em R$20 milhões em vendas de mentoria...
<!-- /mechanism -->

<!-- proof -->
## Veja o Logan em Ação

[ESPAÇO PARA DEMONSTRAÇÃO]
<!-- /proof -->

<!-- offer -->
## Tudo Que Você Recebe Hoje

| Componente | Valor |
|-----------|-------|
| Logan | R$2.997 |
| Imperador | R$497 |
| ... | ... |

**Seu investimento: R$297**

[QUERO O LOGAN — R$297]
<!-- /offer -->

<!-- guarantee -->
## A Garantia É Simples

Use por 14 dias. Crie 3 copys. Se não funcionar, devolvo 100%.
<!-- /guarantee -->

<!-- faq -->
## Perguntas Frequentes

**Funciona pro meu nicho?**
Sim. Treinado com mentorias de saúde, negócios, dev pessoal...

**Preciso saber de copy?**
Não. O Guia de Ativação ensina tudo em 5 minutos.
<!-- /faq -->

<!-- ctaCard -->
## Clique e Comece Sua Primeira Campanha em 15 Minutos

[QUERO O LOGAN — R$297]

**50 vagas com grupo exclusivo. Quando fechar, fechou.**
<!-- /ctaCard -->

<!-- ps -->
P.S. — As 50 vagas do grupo são reais...

P.P.S. — Pensa comigo: quanto custa UMA campanha ruim?
<!-- /ps -->

<!-- footer -->
*Juliano Torriani — Especialista em Copy | R$100M+ em Vendas*
<!-- /footer -->
```

---

## Checklist de Entrega

- [ ] Toda seção aberta com `<!-- nome -->` e fechada com `<!-- /nome -->`
- [ ] Nomes usam section keys do contrato (lowercase, sem acentos)
- [ ] Seções obrigatórias do tipo de página estão presentes
- [ ] Seções na ordem lógica do template
- [ ] Zero seções abertas sem fechar
- [ ] Zero nomes inventados fora do contrato
- [ ] Conteúdo fora dos marcadores = notas técnicas (não vai pra página)
- [ ] URLs de CTA definidas (mesmo que placeholder `#aplicar`)
- [ ] Zero palavras proibidas (premissa-core)

---

## Migração de Copies Existentes

Copies antigas no formato `--- HERO ---` ou sem marcação continuam funcionais.
Novas copies DEVEM usar o formato `<!-- nome -->` / `<!-- /nome -->`.
Não é necessário migrar copies antigas retroativamente.

---

*Diretriz de Entrega v2.0.0 — Marcação Inline `<!-- -->` — Squad Copywriters → Page Builder*
