# Interfaces e regras preservadas

A autoridade dos campos é `prompt-builder.ts`; este mapa apenas localiza funções.

| Modo | Função | Entradas essenciais |
|---|---|---|
| briefing | buildPromptFromBriefingItem | visualDirection, brand, format, hasLogo; textos e imageInstruction opcionais |
| template | buildPrompt | copy, brand, format, hasExpertPhotos, hasLogo; análises e flags opcionais |
| edit | buildImageEditPrompt | userInstruction, hasExpertPhotos, templateReferenceCount |
| copy-simple | buildCopyPrompt | personaSummary, elements, direction, count |
| copy-template | buildTemplateAwareCopyPrompt | personaSummary, productName, salesArguments, templates, count |

Brand: colors.primary/secondary/accent, colors.background/text opcionais; fonts.heading/body com family e weight. Format: width e height. Copy: headline, subheadline, ponte, cta e aliases legados do motor. Não completar valores fictícios.

Análise: mini_prompt → templateMiniPrompt; text_layout → templateTextLayout; background → templateBackground; person → templatePerson; spacing → templateSpacing; logo_size_pct → templateLogoSizePct. Os campos simples de pessoa/logo alimentam templateAnalysis conforme interface.

As regras literais incluem CTA como botão único; cenário e roupa com toggles independentes; presets de expert; filtragem activeCopyFields; imagem-base preservada no modo edição; referência opcional no briefing. Não reescrever esses condicionais por interpretação da LLM.

Presets existentes: no-glasses, no-tie, no-beard, no-hat, neutral-expression, use-expert-clothing, preserve-hair, preserve-age, force-brand-colors, force-brand-logo, force-brand-typography. Textos exatos estão na constante EXPERT_ADJUSTMENT_INSTRUCTIONS.

O gerador original de ilustrações usa OpenRouter; uma chave Gemini direta não pode ser passada como OPENROUTER_API_KEY. Este kit entrega prompt, não transporte de API.
