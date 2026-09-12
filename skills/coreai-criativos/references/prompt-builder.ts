interface CopyContent {
  /** Riddle Line — chamada principal. */
  headline?: string;
  /** Sub-riddle Line — apoio da headline. */
  subheadline?: string;
  /** Ponte / chamada — corpo que conecta headline ao CTA. */
  ponte?: string;
  /** Call to action — quando preenchido, vira BOTÃO desenhado na arte. */
  cta?: string;
  // legados (compatibilidade com copies antigas)
  mini_copy?: string;
  list_items?: string;
  [key: string]: string | undefined;
}

/**
 * Bloco de instrução do botão de CTA. Quando a copy tem CTA, a arte deve
 * renderizar um BOTÃO (pill) na cor accent da marca com o texto do CTA dentro.
 * Decisão do usuário (2026-06): CTA é botão desenhado, não texto solto.
 */
function buildCtaButtonRule(cta: string, accent: string): string {
  return `BOTÃO DE CTA (OBRIGATÓRIO — renderizar como botão, não como texto solto):
A arte DEVE conter um botão de call-to-action com o texto exato "${cta}".
Formato do botão: retângulo de cantos bem arredondados (pill), preenchido na cor de destaque da marca (${accent}), com o texto "${cta}" centralizado em cor de alto contraste (branco ou a cor de fundo da marca), peso semibold/bold.
Posição: parte inferior do criativo, centralizado ou alinhado conforme a composição, com respiro das bordas.
Este é o ÚNICO botão permitido na arte. NÃO crie outros botões nem repita o CTA em outro lugar.`;
}

export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
  background?: string;
  text?: string;
}

export interface BrandFonts {
  heading: { family: string; weight: string };
  body: { family: string; weight: string };
}

interface TextLayoutItem {
  role: string;
  text_found: string;
  position: string;
  grid_area?: string;
  size_pct?: number;
  style?: string;
  color?: string;
  lines?: number;
}

interface PersonAnalysis {
  present: boolean;
  framing?: string;
  grid_position?: string;
  coverage_pct?: number;
  pose?: string;
  clothing?: string;
  expression?: string;
  gaze_direction?: string;
}

interface BackgroundAnalysis {
  type: string;
  description: string;
  colors?: string[];
}

interface SpacingAnalysis {
  text_blocks_gap?: string;
  margin_edges_pct?: number;
  overall_density?: string;
}

interface PromptProject {
  copy: CopyContent;
  brand: {
    colors: BrandColors;
    fonts: BrandFonts;
  };
  format: { width: number; height: number };
  hasExpertPhotos: boolean;
  hasLogo: boolean;
  /**
   * Índice deste criativo dentro do projeto (0, 1, 2...). Quando > 0 e o usuário
   * pediu variação (nos ajustes/notas), o prompt instrui a variar cenário/fundo
   * e composição pra cada criativo ficar diferente.
   */
  variationIndex?: number;
  /**
   * Força a variação de fundo/cenário/roupa/pose entre criativos, mesmo sem
   * palavra-chave nas notas. Quando true, o bloco de VARIAÇÃO OBRIGATÓRIA entra
   * no topo do prompt usando variationIndex como semente. Funciona mesmo com 1
   * foto do expert (o ROSTO continua o mesmo, só o entorno muda).
   */
  forceVariation?: boolean;
  /**
   * Toggle de variação de ROUPA/VESTIMENTA entre criativos (independente de
   * forceVariation). Quando false (padrão), a IA MANTÉM o mesmo TIPO de roupa do
   * template (mesma peça: terno, camisa social, jaleco, etc), só adaptando a cor à
   * marca. Quando true, a IA pode variar a roupa entre os criativos. Mesmo com
   * variação de fundo/pose ligada (forceVariation), a roupa só varia se isto for true.
   */
  varyClothing?: boolean;
  /**
   * BLOCO C — modo composição (fundo próprio). Quando true, uma foto de fundo
   * REAL foi anexada como primeira imagem e DEVE ser preservada como cena final.
   * O sistema entra em modo composição: aplica só os textos do template por cima
   * da foto, sem recriar/inventar o cenário. Mutuamente exclusivo com variação de
   * cenário (variação é suprimida automaticamente quando isto é true).
   */
  hasCustomBackground?: boolean;
  /**
   * BLOCO C.2 — layout do fundo próprio:
   * - 'full' (padrão): a foto ocupa a tela inteira e o texto entra por cima com overlay sutil.
   * - 'split-top': a foto ocupa a METADE SUPERIOR (50%) preservada intacta; a metade
   *   INFERIOR é um bloco de cor sólida da marca onde a IA desenha headline/subheadline/pills.
   */
  backgroundMode?: "full" | "split-top" | "split-bottom";
  /**
   * BLOCO C.3 — cor do bloco no layout 'split-top'. Quando definida, o bloco
   * inferior usa ESTA cor específica (vinda do rodízio de cores escolhidas pelo
   * usuário). Quando ausente, a IA escolhe a melhor cor da paleta da marca.
   */
  blockColor?: string;
  templateMiniPrompt?: string;
  /** Análise visual do template (Vision API no upload) */
  templateAnalysis?: {
    hasLogo: boolean | null;
    logoPosition: string | null;
    hasPerson: boolean | null;
    personPose: string | null;
  };
  /** Análise visual enriquecida (V2) */
  templateBackground?: BackgroundAnalysis | null;
  templateTextLayout?: TextLayoutItem[] | null;
  templatePerson?: PersonAnalysis | null;
  templateSpacing?: SpacingAnalysis | null;
  templateLogoSizePct?: number | null;
  chatRefinement?: string;
  /**
   * BLOCO B — campos de copy ativos no projeto (checkboxes nível projeto).
   * Quando definido, os campos de copy que NÃO estiverem nesta lista são
   * ignorados na arte (mesmo que a copy tenha valor). Quando undefined, todos
   * os campos preenchidos são usados (comportamento padrão).
   */
  activeCopyFields?: string[];
  /** EP08: Quantidade de imagens de referência por tipo */
  imageRefs?: {
    templateCount: number;
    photoCount: number;
    hasLogo: boolean;
  };
  /** Ajustes do expert (presets + notas livres) — vem do step-visual */
  expertAdjustments?: ExpertAdjustmentsInput;
}

export interface ExpertAdjustmentsInput {
  presets: string[];
  notes: string;
}

// Mapeamento dos preset IDs para instruções (espelha EXPERT_ADJUSTMENT_PRESETS do step-visual)
const EXPERT_ADJUSTMENT_INSTRUCTIONS: Record<string, string> = {
  "no-glasses": "Não desenhar óculos na pessoa, mesmo se o template mostrar óculos.",
  "no-tie": "Não desenhar gravata, mesmo se o template mostrar gravata.",
  "no-beard": "Não desenhar barba, mesmo se o template mostrar pessoa com barba.",
  "no-hat": "Não desenhar chapéu, boné ou qualquer acessório de cabeça.",
  "neutral-expression": "Manter expressão neutra ou séria. Não fazer a pessoa sorrir, mesmo se o template tiver sorriso.",
  "use-expert-clothing": "Usar a roupa que aparece nas fotos do expert, não a roupa do template.",
  "preserve-hair": "Manter cor, comprimento e estilo do cabelo exatamente como nas fotos do expert.",
  "preserve-age": "Manter a idade aparente do expert das fotos. Não rejuvenescer nem envelhecer.",
  "force-brand-colors": "OBRIGATÓRIO: TODA a paleta visível na arte final (fundo, textos, formas, gradientes, overlays, badges, destaques, sombras coloridas, tints, divisores, ícones decorativos) DEVE estar dentro da paleta de cores da marca configurada no brand kit. JAMAIS use cores do template original — elas servem só pra indicar ONDE vai cada cor, não QUAL. Onde o template usa cor escura/principal → usar Primária da marca. Onde usa cor de destaque → usar Accent. Onde usa cor de fundo → usar Fundo (ou Primária). Onde usa cor clara → manter clara mas dentro da paleta.",
  "force-brand-logo": "OBRIGATÓRIO: o ÚNICO logo, selo ou assinatura visual permitido na arte final é o logo da marca anexado. Qualquer outro logo, marca d'água, símbolo de empresa ou assinatura que apareça no template original DEVE SUMIR completamente. Se o template tem logo de outra empresa, REMOVE e substitui pelo logo da marca configurada (mesma posição e tamanho relativo).",
  "force-brand-typography": "OBRIGATÓRIO: usar APENAS as fontes configuradas no brand kit da marca para todos os textos da arte final. Títulos na fonte de heading da marca, corpo na fonte body da marca. JAMAIS usar a fonte original do template.",
};

function buildExpertAdjustmentsBlock(input: ExpertAdjustmentsInput | undefined): string | null {
  if (!input) return null;
  const presetLines = (input.presets ?? [])
    .map((id) => EXPERT_ADJUSTMENT_INSTRUCTIONS[id])
    .filter(Boolean);
  const notes = (input.notes ?? "").trim();
  if (presetLines.length === 0 && !notes) return null;

  const lines: string[] = [
    "AJUSTES OBRIGATÓRIOS DO EXPERT (têm prioridade sobre o template):",
  ];
  for (const line of presetLines) lines.push(`- ${line}`);
  if (notes) lines.push(`- Outras particularidades: ${notes}`);
  lines.push(
    "Se houver conflito entre o que o template mostra e estes ajustes, OS AJUSTES ACIMA VENCEM. O template define pose, enquadramento, cenário e layout — não define acessórios, roupa ou expressão do expert."
  );
  return lines.join("\n");
}

/**
 * Monta o prompt final para geração de criativos.
 * V2: Usa dados granulares da análise enriquecida (fundo, grid, proporções, tipografia)
 * para gerar instruções artesanais por template — máxima fidelidade ao original.
 */
export function buildPrompt(project: PromptProject): string {
  const {
    copy, brand, format, hasExpertPhotos, hasLogo, variationIndex, forceVariation,
    varyClothing,
    hasCustomBackground,
    backgroundMode,
    blockColor,
    templateMiniPrompt, templateAnalysis, templateBackground,
    templateTextLayout, templatePerson, templateSpacing, templateLogoSizePct,
    chatRefinement, imageRefs, expertAdjustments, activeCopyFields,
  } = project;

  // BLOCO B — quando o projeto define campos ativos, ignorar os campos de copy
  // fora da lista. Mapeamento de aliases legados → campo canônico (mini_copy é
  // alias de subheadline; list_items é alias de ponte) pra o filtro funcionar
  // independente do padrão (estatico/mini_copy) usado na copy.
  const fieldAlias: Record<string, string> = {
    mini_copy: "subheadline",
    list_items: "ponte",
  };
  const isCopyFieldActive = (field: string): boolean => {
    if (!activeCopyFields || activeCopyFields.length === 0) return true;
    const canonical = fieldAlias[field] ?? field;
    return activeCopyFields.includes(field) || activeCopyFields.includes(canonical);
  };
  const templateHasPerson = templateAnalysis?.hasPerson === true;
  const templateHasLogo = templateAnalysis?.hasLogo === true;

  // TIPOGRAFIA — o TEMPLATE é o dono da verdade (P0): a arte final replica a
  // fonte aparente, pesos e tamanhos do template. As fontes do brand kit SÓ
  // entram quando o usuário liga explicitamente o preset "force-brand-typography"
  // (Aplicar tipografia da marca) nos ajustes. Antes o default forçava a fonte
  // da marca e contradizia a REGRA #3.2 (preservar estilo do template) — o
  // template nunca saía fiel.
  const forceBrandTypography = expertAdjustments?.presets?.includes("force-brand-typography") === true;

  // VARIAÇÃO: o usuário pediu pra variar (cenário/pose/roupa/fundo)? Detectamos
  // por palavras-chave nas notas/chat, OU por forceVariation explícito. Quando
  // true, as regras de "preserve o fundo/pose/cenário do template" são INVERTIDAS
  // pra esses elementos — senão elas contradizem o pedido e o modelo gera tudo igual.
  const variationText = `${expertAdjustments?.notes ?? ""} ${chatRefinement ?? ""}`.toLowerCase();
  const keywordVariation = /\bvari|cen[áa]rio|fundo|consult[óo]rio|ambiente|background|pose|roupa|enquadr/.test(variationText);
  // BLOCO C: modo composição (fundo próprio) e variação de cenário são MUTUAMENTE
  // EXCLUSIVOS. Quando há fundo próprio, a cena é preservada — não faz sentido variar.
  const wantsVariation = !hasCustomBackground
    && (forceVariation === true || keywordVariation)
    && typeof variationIndex === "number";

  // ROUPA: por padrão a vestimenta do template é MANTIDA (mesmo tipo de peça),
  // mesmo quando há variação de fundo/pose. Só varia a roupa quando o usuário
  // liga o toggle dedicado (varyClothing). Detecta também menção explícita a
  // "variar roupa" nas notas/chat, pra respeitar pedido em texto livre.
  const explicitClothingKeyword = /\bvari\w*\s+(a\s+)?roupa|roupa\w*\s+diferent|trocar?\s+(a\s+)?roupa/.test(variationText);
  const wantsClothingVariation = !hasCustomBackground
    && (varyClothing === true || explicitClothingKeyword);

  const lines: string[] = [];

  // BLOCO C — MODO COMPOSIÇÃO (fundo próprio): no TOPO, alta prioridade. A foto de
  // fundo anexada (imagem 1) é a cena final e DEVE ser preservada o mais fiel
  // possível. O template só empresta os textos (fonte/posição/formato).
  if (hasCustomBackground && (backgroundMode === "split-top" || backgroundMode === "split-bottom")) {
    // Layout split 50/50: foto real numa metade (preservada), bloco de cor da marca na outra com o texto.
    const fotoEmCima = backgroundMode === "split-top";
    const metadeFoto = fotoEmCima ? "METADE SUPERIOR (os 50% DE CIMA)" : "METADE INFERIOR (os 50% DE BAIXO)";
    const metadeBloco = fotoEmCima ? "METADE INFERIOR (os 50% DE BAIXO)" : "METADE SUPERIOR (os 50% DE CIMA)";
    const paletaCores = [brand.colors.primary, brand.colors.secondary, brand.colors.accent]
      .filter(Boolean).join(", ");
    // Cor do bloco: específica (rodízio escolhido pelo usuário) ou IA escolhe da paleta.
    const blocoRule = blockColor
      ? `um BLOCO DE COR SÓLIDA na cor ${blockColor} (cor da marca escolhida para este criativo). Use EXATAMENTE essa cor.`
      : `um BLOCO DE COR SÓLIDA da marca. Escolha a cor da paleta (${paletaCores}) que der MELHOR contraste e leitura com os textos.`;
    lines.push(`MODO COMPOSIÇÃO — DUAS FAIXAS HORIZONTAIS SEPARADAS (PRIORIDADE MÁXIMA, LEIA ANTES DE TUDO):
ESTE NÃO É um criativo com texto por cima de uma foto. É um criativo DIVIDIDO em DUAS FAIXAS HORIZONTAIS distintas, com uma LINHA DE CORTE RETA E LIMPA no meio (~50/50). NUNCA coloque texto, badges ou botões SOBRE a foto.

FAIXA 1 — FOTO (a ${metadeFoto}): use a PRIMEIRA imagem anexada (a FOTO REAL da franquia) ocupando EXATAMENTE essa metade, do jeito que ela é. PRESERVE com MÁXIMA FIDELIDADE: mesmos objetos, mesma perspectiva, mesma iluminação, MESMAS cores. NÃO recrie, NÃO invente, NÃO redesenhe, NÃO substitua o cenário, NÃO escreva NADA sobre essa foto. Ela fica LIMPA, sem nenhum texto ou elemento gráfico por cima.

FAIXA 2 — BLOCO DE COR + TEXTO (a ${metadeBloco}): é ${blocoRule} TODO o texto vive AQUI, dentro deste bloco de cor sólida, NUNCA sobre a foto. Desenhe headline em destaque, subheadline de apoio, e os bullets/destaques como PÍLULAS arredondadas de cor contrastante, seguindo a fonte e a hierarquia do template.

REGRAS DURAS:
- A linha que separa a foto do bloco é RETA, HORIZONTAL e no MEIO (~50%).
- ZERO texto, badge, logo ou botão sobre a foto. Texto só no bloco de cor.
- A foto NÃO é fundo de tela cheia. Ela ocupa SÓ a sua metade.`);
  } else if (hasCustomBackground) {
    lines.push(`MODO COMPOSIÇÃO — FUNDO PRÓPRIO (PRIORIDADE MÁXIMA, LEIA ANTES DE TUDO):
A PRIMEIRA imagem anexada é a FOTO DE FUNDO REAL e é a CENA FINAL do criativo. PRESERVE-A com MÁXIMA FIDELIDADE.
- NÃO recrie, NÃO invente, NÃO redesenhe, NÃO substitua e NÃO altere o cenário/ambiente desta foto. Mantenha os mesmos objetos, a mesma perspectiva, a mesma iluminação e as MESMAS cores da cena. O resultado deve ser essa mesma foto, apenas com os textos por cima.
- Aplique APENAS os TEXTOS por cima dessa foto de fundo, usando a MESMA fonte, posição, tamanho relativo e formato indicados pelo template anexado (o template serve SÓ como molde de layout/tipografia do texto — ele NÃO dita o fundo).
- ÚNICO ajuste permitido na foto de fundo: um overlay/gradiente sutil (escurecer ou clarear) ATRÁS do texto, só o necessário pra garantir a leitura. NÃO mude as cores da cena, NÃO troque o fundo por outro, NÃO aplique a paleta da marca sobre a foto inteira.
Pense assim: a foto de fundo é intocável; o template é apenas a régua de onde e como o texto entra.`);
  }

  // VARIAÇÃO NO TOPO (alta prioridade): aparece ANTES das regras de preservação,
  // pra o modelo entender desde o início que esta versão deve ser diferente.
  // Funciona mesmo com 1 foto (hasExpertPhotos): o ROSTO continua o mesmo, só o
  // fundo/cenário/roupa/pose em volta é que mudam por versão.
  if (wantsVariation) {
    const clothingVariationLine = wantsClothingVariation
      ? "- VARIE a ROUPA da pessoa entre as versões (cores/peças diferentes, sempre profissional e do MESMO TIPO de vestimenta do template, ex.: se o template usa terno, varie entre ternos)."
      : "- MANTENHA a ROUPA: a pessoa usa o MESMO tipo de roupa do template (mesma peça: terno, camisa social, jaleco, etc) em TODAS as versões. NÃO invente roupa diferente entre as versões; a cor pode ser adaptada à marca, mas o tipo de vestimenta é o do template.";
    const naoMudaRoupa = wantsClothingVariation ? "a roupa, " : "";
    lines.push(`VARIAÇÃO OBRIGATÓRIA — esta é a versão ${(variationIndex ?? 0) + 1} do conjunto, e ela DEVE ser visualmente diferente das outras versões:
- TROQUE o FUNDO/CENÁRIO por um ambiente diferente e coerente (ex.: consultório moderno, sala acolhedora, ambiente claro com plantas, parede com estante de livros) — cada versão com um cenário, ângulo e iluminação DIFERENTES. NÃO use o fundo do template nem repita o cenário das outras versões.
- VARIE a POSE da pessoa (em pé, sentada, braços diferentes, leve mudança de ângulo).
${clothingVariationLine}
- VARIE o ENQUADRAMENTO (uma versão mais próxima do rosto, outra meio corpo, outra mais aberta).
${hasExpertPhotos
  ? `O que NÃO muda: o LAYOUT do template (onde ficam headline, subheadline, CTA, logo), as CORES da marca, a COPY (textos exatos) e a IDENTIDADE FACIAL da pessoa — é SEMPRE o MESMO rosto da foto do expert anexada, em todas as versões. Só o fundo, ${naoMudaRoupa}a pose e o enquadramento é que mudam.`
  : "O que NÃO muda: o LAYOUT do template (posições de headline, subheadline, CTA, logo), as CORES da marca e a COPY (textos exatos). Só o fundo/cenário e a composição é que variam."}
Use o número da versão (${(variationIndex ?? 0) + 1}) como semente criativa pra garantir que esta seja diferente das demais.`);
  }

  // INSTRUÇÃO PRINCIPAL — hierarquia clara: template = ESTRUTURA, expert+brand = CONTEÚDO.
  // MODO PADRÃO = EDIÇÃO DO ORIGINAL: o Nano Banana replica muito melhor quando a
  // tarefa é "EDITE esta imagem trocando os campos" do que "gere uma imagem nova
  // usando referência" (o verbo "gerar nova" convida a recompor o design — caso
  // real 2026-08-01: criativos saiam "novos" sem manter o original). Nos modos
  // variação e fundo próprio a recomposição é DESEJADA, então mantém o verbo antigo.
  const hardRulesIntro: string[] = [];
  if (!wantsVariation && !hasCustomBackground) {
    hardRulesIntro.push(`TAREFA: EDITAR a imagem 1 (o template anexado) — NÃO é criar um design novo.
Pense como um designer que recebeu o ARQUIVO-FONTE deste template e vai apenas TROCAR o conteúdo dos campos, exportando a mesma arte:
- Reproduza a imagem 1 IDENTICAMENTE: mesmo layout, mesmas posições e tamanhos de cada bloco, mesma tipografia, mesmo tipo de fundo, mesmas formas/elementos gráficos, mesma composição.
- Troque SOMENTE: (1) os TEXTOS → pela copy fornecida abaixo; (2) as CORES → pela paleta da marca; (3) a PESSOA → pela identidade do expert anexado (mesma pose/enquadramento)${hasLogo ? "; (4) o LOGO → pelo logo da marca anexado, na mesma posição" : "; (4) o LOGO do template → REMOVIDO (a arte final não tem logo)"}.
- TUDO que não está nessa lista de trocas permanece EXATAMENTE como na imagem 1. Colocada ao lado do original, a arte final deve parecer o MESMO design com outro conteúdo.`);
  } else {
    hardRulesIntro.push("TAREFA: gerar uma imagem nova que use o TEMPLATE anexado APENAS como referência de LAYOUT e COMPOSIÇÃO (posições, hierarquia, enquadramento, pose, espaçamento, tipografia relativa).");
  }
  hardRulesIntro.push("O CONTEÚDO da imagem é DIFERENTE do template:");

  const hardBullets: string[] = [];
  if (hasExpertPhotos) {
    hardBullets.push("- O ROSTO, traços faciais, pele, cabelo e identidade da pessoa final são SEMPRE os da foto do expert anexada — JAMAIS o rosto do template. Se o template mostra uma pessoa, ela serve só para indicar pose/enquadramento/iluminação.");
  }
  if (hasCustomBackground) {
    hardBullets.push(`- As CORES dos TEXTOS e elementos gráficos desenhados por cima (CTA, badges, overlays de leitura) são as da marca anexada (Primária ${brand.colors.primary}, Secundária ${brand.colors.secondary}, Accent ${brand.colors.accent}${brand.colors.background ? `, Fundo ${brand.colors.background}` : ""}). A FOTO DE FUNDO mantém as cores reais dela — NÃO repintar a cena (ver MODO COMPOSIÇÃO no topo).`);
  } else {
    hardBullets.push(`- As CORES da imagem final são SEMPRE as da marca anexada (Primária ${brand.colors.primary}, Secundária ${brand.colors.secondary}, Accent ${brand.colors.accent}${brand.colors.background ? `, Fundo ${brand.colors.background}` : ""}) — JAMAIS as cores do template original.`);
  }
  if (forceBrandTypography) {
    hardBullets.push("- A TIPOGRAFIA usa as fontes da marca (ajuste explícito do usuário), não as do template — mas mantendo os MESMOS tamanhos relativos, pesos e posições dos textos do template.");
  } else {
    hardBullets.push("- A TIPOGRAFIA é a DO TEMPLATE (P0): replique fielmente a fonte aparente (família visual, serifa/sem serifa, peso, caixa alta/baixa), os TAMANHOS relativos e o espaçamento de cada bloco de texto do template. Os textos novos da copy entram com a MESMA cara tipográfica dos textos que substituem.");
  }
  if (hasLogo) {
    hardBullets.push("- O LOGO é o da marca anexada, não o do template.");
  } else {
    hardBullets.push("- SEM LOGO: a arte final NÃO pode ter NENHUM logo, marca, selo, símbolo de empresa ou assinatura visual. Se o template de referência tiver um logo, IGNORE-O por completo e deixe esse espaço limpo (fundo). NÃO copie o logo do template.");
  }
  hardBullets.push("- OS TEXTOS são exclusivamente a copy fornecida abaixo — qualquer texto que apareça no template e não esteja na copy é descartado.");

  hardRulesIntro.push(hardBullets.join("\n"));
  hardRulesIntro.push(`REGRA ABSOLUTA — divisão de autoridade:
- O TEMPLATE é o dono da FORMA (PRIORIDADE MÁXIMA/P0): layout, grid, posição e tamanho de cada bloco, proporções, enquadramento, pose, espaçamentos${forceBrandTypography ? "" : " e TIPOGRAFIA (fonte aparente, pesos, tamanhos relativos)"}. A arte final colocada lado a lado com o template deve parecer O MESMO design — só com outro conteúdo.
- As INSTRUÇÕES ABAIXO são donas do CONTEÚDO: quem aparece (rosto do expert), quais cores (paleta da marca), qual marca (logo), qual mensagem (copy). Em conflito de CONTEÚDO, as instruções vencem.
- NUNCA use a autoridade de conteúdo como desculpa pra redesenhar a forma: trocar cor/texto/rosto NÃO muda posição, tamanho ou fonte de nada.`);

  lines.push(hardRulesIntro.join("\n\n"));

  // Identificar imagens anexadas por posição
  if (imageRefs) {
    const refLines: string[] = [];
    let pos = 1;

    if (imageRefs.templateCount > 0) {
      const templateScopeNote = ` A referência serve APENAS para a FORMA: layout/grid, posição dos blocos, proporções, hierarquia e estilo de tipografia. NÃO copie o CONTEÚDO do template — nem os textos, nem o logo, nem marcas/selos que apareçam nele.${imageRefs.hasLogo ? "" : " Se houver um logo no template, IGNORE-O: a arte final NÃO tem logo."}`;
      if (imageRefs.templateCount === 1) {
        refLines.push(`A imagem ${pos} é o template/modelo base — a REFERÊNCIA PRINCIPAL. Replique fielmente a ESTRUTURA visual (layout e tipografia).${templateScopeNote}`);
      } else {
        refLines.push(`As ${imageRefs.templateCount} primeiras imagens (${pos}-${pos + imageRefs.templateCount - 1}) são templates/modelos base (referência de ESTRUTURA e tipografia).${templateScopeNote}`);
      }
      pos += imageRefs.templateCount;
    }

    if (imageRefs.photoCount > 0) {
      const range = imageRefs.photoCount === 1
        ? `A imagem ${pos}`
        : `As imagens ${pos}-${pos + imageRefs.photoCount - 1}`;
      refLines.push(`${range} ${imageRefs.photoCount === 1 ? "é uma referência" : "são referências"} de IDENTIDADE FACIAL da pessoa real (rosto, pele, cabelo, traços). NÃO é para ser colada na arte final. Use APENAS para capturar a identidade facial e aplicá-la na pessoa do template, preservando a POSE, enquadramento e iluminação do template.`);
      pos += imageRefs.photoCount;
    }

    if (imageRefs.hasLogo) {
      refLines.push(`A imagem ${pos} é o logo da marca. Posicione no mesmo local onde está o logo no template original.`);
    }

    lines.push(refLines.join(" "));
  }

  // === BLUEPRINT DO TEMPLATE ===
  // Combina mini_prompt + dados granulares para um blueprint ultra-preciso
  const blueprintParts: string[] = [];

  if (templateMiniPrompt) {
    blueprintParts.push(templateMiniPrompt);
  }

  // Fundo detalhado — SUPRIMIDO no modo composição (a cena vem da foto própria,
  // não do fundo descrito pelo template).
  if (templateBackground && !hasCustomBackground) {
    blueprintParts.push(`FUNDO: ${templateBackground.description}${templateBackground.colors?.length ? ` (cores: ${templateBackground.colors.join(", ")})` : ""}`);
  }

  // Grid de texto com proporções
  if (templateTextLayout?.length) {
    const textDesc = templateTextLayout.map((item) => {
      const parts = [`${item.role.toUpperCase()}: "${item.text_found}"`];
      if (item.position) parts.push(`posição ${item.position}`);
      if (item.grid_area) parts.push(`no ${item.grid_area}`);
      if (item.size_pct) parts.push(`ocupando ~${item.size_pct}% da altura`);
      if (item.style) parts.push(`estilo: ${item.style}`);
      if (item.color) parts.push(`cor: ${item.color}`);
      if (item.lines) parts.push(`${item.lines} linha${item.lines > 1 ? "s" : ""}`);
      return parts.join(", ");
    }).join("\n  ");
    blueprintParts.push(`MAPA DE TEXTOS DO TEMPLATE:\n  ${textDesc}`);
  }

  // Pessoa detalhada
  if (templatePerson?.present) {
    const personParts: string[] = [];
    if (templatePerson.framing) personParts.push(`enquadramento: ${templatePerson.framing}`);
    if (templatePerson.grid_position) personParts.push(`posição: ${templatePerson.grid_position}`);
    if (templatePerson.coverage_pct) personParts.push(`ocupa ~${templatePerson.coverage_pct}% do quadro`);
    if (templatePerson.pose) personParts.push(`pose: ${templatePerson.pose}`);
    if (templatePerson.clothing) personParts.push(`vestimenta: ${templatePerson.clothing}`);
    if (templatePerson.expression) personParts.push(`expressão: ${templatePerson.expression}`);
    if (templatePerson.gaze_direction) personParts.push(`olhar: ${templatePerson.gaze_direction}`);
    if (personParts.length > 0) {
      blueprintParts.push(`PESSOA NO TEMPLATE: ${personParts.join("; ")}`);
    }
  }

  // Espaçamento
  if (templateSpacing) {
    const spacingParts: string[] = [];
    if (templateSpacing.overall_density) spacingParts.push(`densidade: ${templateSpacing.overall_density}`);
    if (templateSpacing.text_blocks_gap) spacingParts.push(`gap entre textos: ${templateSpacing.text_blocks_gap}`);
    if (templateSpacing.margin_edges_pct) spacingParts.push(`margem das bordas: ~${templateSpacing.margin_edges_pct}%`);
    if (spacingParts.length > 0) {
      blueprintParts.push(`ESPAÇAMENTO: ${spacingParts.join("; ")}`);
    }
  }

  if (blueprintParts.length > 0) {
    lines.push(`BLUEPRINT DETALHADO DO TEMPLATE:
${blueprintParts.join("\n\n")}

REGRA #1 — REPLIQUE ESTE LAYOUT COM PRECISÃO:
Siga o blueprint acima como especificação técnica. Cada elemento deve estar EXATAMENTE na posição descrita, com o MESMO tamanho relativo (respeite os percentuais indicados), a MESMA hierarquia, o MESMO estilo tipográfico, o MESMO peso visual e o MESMO enquadramento. A imagem de referência anexada confirma visualmente esta descrição. Se houver conflito entre o texto do blueprint e a imagem, a IMAGEM DE REFERÊNCIA tem prioridade.`);
  } else {
    lines.push(`REGRA #1 — ESTRUTURA IDÊNTICA:
Mantenha EXATAMENTE a mesma composição visual do template: posição de textos, tamanho das letras, estilo tipográfico, peso visual, espaçamentos, alinhamento e hierarquia visual. A imagem final deve parecer o mesmo template, apenas com conteúdo diferente.`);
  }

  // REGRA #2 — TROQUE CORES + FUNDO
  // Cor de fundo SEMPRE concreta: se a marca não declara background, deriva da Primária.
  // Sem isso, a IA recai pro preto/azul do template original (caso Zé Coxinha).
  const fundoCor = brand.colors.background || brand.colors.primary;
  const colorParts = [`Primária: ${brand.colors.primary}`, `Secundária: ${brand.colors.secondary}`, `Accent: ${brand.colors.accent}`];
  // Garante SEMPRE uma cor de fundo concreta na paleta listada, mesmo sem background declarado.
  colorParts.push(`Fundo: ${fundoCor}`);

  let colorRule = hasCustomBackground
    ? `REGRA #2 — CORES DA MARCA NOS TEXTOS E ELEMENTOS (NÃO NO FUNDO):
Aplique a paleta da marca abaixo APENAS aos TEXTOS e elementos gráficos desenhados por cima da foto (textos, botão de CTA, badges, overlays/gradientes de leitura). NÃO altere as cores da FOTO DE FUNDO — ela é preservada como está (ver MODO COMPOSIÇÃO no topo).
Paleta da marca: ${colorParts.join(" | ")}
${forceBrandTypography ? `Tipografia: títulos em ${brand.fonts.heading.family} (${brand.fonts.heading.weight}), corpo em ${brand.fonts.body.family} (${brand.fonts.body.weight}).` : "Tipografia: a DO TEMPLATE — replique a fonte aparente e os tamanhos relativos de cada bloco de texto do template."}
Garanta contraste suficiente entre o texto e a foto de fundo (use o overlay/gradiente sutil permitido se necessário), mas SEM repintar a cena.`
    : `REGRA #2 — CORES DA MARCA SÃO OBRIGATÓRIAS (NÃO É OPCIONAL):
Toda paleta visível na arte final (fundo, textos, formas geométricas, gradientes, overlays, destaques, botões/CTAs decorativos, sombras coloridas, tints, badges) DEVE estar dentro da paleta da marca abaixo. JAMAIS use as cores originais do template — elas servem só pra você entender ONDE vai cada cor, não QUAL cor usar.
Paleta da marca: ${colorParts.join(" | ")}
${forceBrandTypography ? `Tipografia: títulos em ${brand.fonts.heading.family} (${brand.fonts.heading.weight}), corpo em ${brand.fonts.body.family} (${brand.fonts.body.weight}).` : "Tipografia: a DO TEMPLATE — replique a fonte aparente e os tamanhos relativos de cada bloco de texto do template (a paleta muda, a tipografia NÃO)."}
COR DE FUNDO DA ARTE: use ${fundoCor} como cor base do fundo. JAMAIS use preto, azul, cinza ou qualquer cor do template original no fundo, a não ser que essa cor esteja na paleta da marca.
Mapeamento: onde o template usa cor escura/primária → use a Primária da marca. Onde usa cor de destaque/CTA → use o Accent da marca. Onde usa cor de fundo → use ${fundoCor}. Onde usa texto claro → mantenha claro mas dentro da paleta.`;

  // FUNDO — instrução de preservação do TIPO + atmosfera do fundo do template,
  // adaptando SÓ as cores à marca. SUPRIMIDO no modo composição (fundo próprio,
  // regra do topo) e no modo variação (o fundo DEVE mudar, regra do topo).
  // Sem variação e sem fundo próprio, a IA inventava cenário novo — por isso
  // a instrução abaixo é dura: preserve o TIPO de fundo, nunca invente cena nova.
  if (!hasCustomBackground && !wantsVariation) {
    if (templateBackground?.type === "gradient") {
      colorRule += `\nFUNDO (PRESERVE O TIPO): O template usa gradiente (${templateBackground.description}). Mantenha um fundo GRADIENTE (mesma direção e transição), apenas trocando as cores para a paleta da marca (base ${fundoCor}). NÃO transforme o gradiente em foto, cena ou ambiente; NÃO invente um cenário novo.`;
    } else if (templateBackground?.type === "solid") {
      colorRule += `\nFUNDO (PRESERVE O TIPO): O template usa cor SÓLIDA. Mantenha um fundo de cor sólida da marca (${fundoCor}), com o MESMO nível de contraste com os textos. NÃO invente foto, ambiente ou cenário no lugar do fundo sólido.`;
    } else if (templateBackground?.type === "photo" || templateBackground?.type === "blur") {
      colorRule += `\nFUNDO (PRESERVE O TIPO E A ATMOSFERA): O template usa foto/ambiente de fundo (${templateBackground.description}). Mantenha um fundo com o MESMO tipo de cena e a MESMA atmosfera, apenas tonalizando/adaptando as cores para a paleta da marca via overlay sutil. NÃO troque por um cenário diferente, NÃO invente um ambiente novo, NÃO transforme em fundo sólido/gradiente.`;
    } else {
      // Sem dados de análise de fundo: regra genérica forte contra inventar cenário.
      colorRule += `\nFUNDO (PRESERVE O TIPO E A ATMOSFERA): mantenha o MESMO tipo de fundo que o template anexado mostra (se é gradiente, mantenha gradiente; se é cor sólida, mantenha sólida; se é foto/ambiente, mantenha um ambiente equivalente), apenas ADAPTANDO as cores para a paleta da marca (base ${fundoCor}). NÃO invente um cenário novo que não existe no template, NÃO troque o TIPO de fundo, NÃO adicione objetos/ambientes que o template não tem.`;
    }
  } else if (templateBackground && !hasCustomBackground && templateBackground.type === "gradient") {
    // Modo variação: o cenário muda (regra do topo), mas se o template é gradiente
    // sem pessoa, mantemos coerência de cor da marca sem forçar cena.
    colorRule += `\nFUNDO: adapte sempre as cores do fundo à paleta da marca (base ${fundoCor}).`;
  }
  lines.push(colorRule);

  // DIREÇÃO DE MENSAGEM — conecta copy ao mood da imagem
  const headlineForMood = copy.headline || copy.chamada || Object.values(copy).find((v) => typeof v === "string" && v.length > 0);
  if (headlineForMood) {
    const moodExpression = templatePerson?.expression ? ` A expressão original do template é "${templatePerson.expression}" com olhar "${templatePerson.gaze_direction || "para câmera"}".` : "";
    lines.push(`DIREÇÃO DE MENSAGEM:
A mensagem central deste criativo é: "${headlineForMood}".${moodExpression}
Ajuste a micro-expressão facial e a energia emocional da cena para reforçar essa mensagem — mantendo ABSOLUTAMENTE a composição e o layout do template${wantsVariation ? " (a pose/cenário/fundo variam conforme a VARIAÇÃO OBRIGATÓRIA do topo)" : ", enquadramento, pose e cenário do template"}. ${wantsVariation ? "" : "Apenas a energia sutil e a expressão devem conversar com a copy."}`);
  }

  // REGRA #3 — TROQUE TEXTOS com proporções do template.
  // 4 campos canônicos: headline (riddle), subheadline (sub-riddle), ponte, cta (vira botão).
  const copyParts: string[] = [];
  if (copy.headline && isCopyFieldActive("headline")) copyParts.push(`Headline (texto principal, destaque): ${copy.headline}`);
  if ((copy.subheadline || copy.mini_copy) && isCopyFieldActive("subheadline")) copyParts.push(`Subheadline (apoio): ${copy.subheadline || copy.mini_copy}`);
  if ((copy.ponte || copy.list_items) && isCopyFieldActive("ponte")) copyParts.push(`Ponte (corpo que conecta): ${copy.ponte || copy.list_items}`);
  // CTA NÃO entra aqui — vira botão (regra própria abaixo).
  const knownFields = ["headline", "subheadline", "ponte", "cta", "mini_copy", "list_items"];
  for (const [key, value] of Object.entries(copy)) {
    if (!knownFields.includes(key) && value && isCopyFieldActive(key)) {
      copyParts.push(`${key}: ${value}`);
    }
  }

  let textRule = `REGRA #3 — TROQUE OS TEXTOS:
Substitua TODOS os textos do template pela copy abaixo. Os textos abaixo DEVEM aparecer na arte, com a hierarquia indicada (headline em maior destaque, subheadline menor, ponte como corpo):
${copyParts.join("\n")}

ORDEM VERTICAL OBRIGATÓRIA (NUNCA pode ser diferente): dentro da área de conteúdo/texto do template, os blocos ficam SEMPRE nesta sequência, um abaixo do outro:
1º HEADLINE (topo da área de texto)
2º SUBHEADLINE (logo abaixo da headline)
3º PONTE/corpo (abaixo da subheadline)
4º CTA (por último, embaixo)
É PROIBIDO inverter, intercalar ou espalhar esses blocos em áreas diferentes da arte. Todos vivem DENTRO da área de conteúdo que o template define (o painel/box/área de texto do template) — nenhum texto da copy pode ir parar fora dela (ex: no topo da imagem, sobre a foto, no lugar do nome de pessoa do template).`;

  // CTA vira botão desenhado (não texto solto) — respeita o checkbox do campo
  if (copy.cta && isCopyFieldActive("cta")) {
    textRule += `\n\n${buildCtaButtonRule(copy.cta, brand.colors.accent)}`;
  }

  // Se temos text_layout, adicionar mapeamento de proporções.
  // DEFESA CONTRA ANÁLISE ENVENENADA: a Vision às vezes classifica o NOME DA
  // PESSOA do template como "headline" (caso real: "Marcelo Toledo" role=headline
  // em topo-direita no G4 Fundamentos). Sem defesa, o mapeamento mandava a
  // headline da copy pro lugar do nome e o título real do template ficava
  // intacto na arte. Regras: (1) cada campo da copy substitui UM ÚNICO bloco —
  // o melhor candidato (maior size_pct; penaliza texto que parece nome próprio/
  // cargo); (2) blocos NÃO escolhidos entram na lista explícita de REMOÇÃO.
  const looksLikePersonName = (t: string): boolean => {
    const s = String(t || "").trim();
    if (s.length === 0 || s.length > 45) return false;
    // "Marcelo Toledo", "Fundador e CEO da Klivo": 2-6 palavras capitalizadas/conectivos
    const words = s.split(/\s+/);
    if (words.length < 2 || words.length > 7) return false;
    if (s === s.toUpperCase()) return false; // ALL CAPS = título, não nome
    const capsOrConnector = words.filter((w) => /^[A-ZÀ-Ü]/.test(w) || /^(e|de|da|do|dos|das)$/i.test(w));
    return capsOrConnector.length === words.length;
  };

  if (templateTextLayout?.length) {
    const usedBlocks = new Set<number>();
    const mapping: string[] = [];
    // agrupar candidatos por campo da copy
    const byField = new Map<string, number[]>();
    templateTextLayout.forEach((item, idx) => {
      const copyField = mapRoleToCopyField(item.role);
      if (copyField && copy[copyField] && isCopyFieldActive(copyField)) {
        if (!byField.has(copyField)) byField.set(copyField, []);
        byField.get(copyField)!.push(idx);
      }
    });
    for (const [copyField, idxs] of byField) {
      // melhor candidato: maior size_pct; nome de pessoa/cargo é fortemente penalizado
      const best = [...idxs].sort((a, b) => {
        const ia = templateTextLayout[a]; const ib = templateTextLayout[b];
        const score = (it: typeof ia) => (it.size_pct ?? 1) - (looksLikePersonName(it.text_found) ? 1000 : 0);
        return score(ib) - score(ia);
      })[0];
      const item = templateTextLayout[best];
      usedBlocks.add(best);
      const propParts: string[] = [];
      if (item.size_pct) propParts.push(`~${item.size_pct}% da altura`);
      if (item.position) propParts.push(`posição: ${item.position}`);
      if (item.style) propParts.push(`estilo: ${item.style}`);
      mapping.push(`• ${copyField.toUpperCase()} → substitui "${item.text_found}"${propParts.length ? ` — manter ${propParts.join(", ")}` : ""}`);
    }
    // blocos que sobraram = remover explicitamente (nome de pessoa, cargo, duplicatas)
    const toRemove = templateTextLayout
      .map((item, idx) => ({ item, idx }))
      .filter(({ item, idx }) => !usedBlocks.has(idx) && item.role !== "logo_text" && typeof item.text_found === "string" && item.text_found.trim().length > 1)
      .map(({ item }) => `• "${item.text_found}"${item.position ? ` (${item.position})` : ""} → REMOVER por completo (não tem substituto na copy; reconstrua o fundo limpo no lugar)`);
    if (mapping.length > 0 || toRemove.length > 0) {
      textRule += `\n\nMAPEAMENTO TEXTO→POSIÇÃO (cada campo substitui APENAS o bloco indicado; preserve as proporções EXATAS):\n${[...mapping, ...toRemove].join("\n")}`;
    }
  }
  lines.push(textRule);

  // Enumerar EXPLICITAMENTE os textos do template (da análise visual) que devem
  // sumir/ser substituídos. A regra genérica "todo texto do template sai" não
  // basta: o modelo trata títulos grandes do template (ex: nome de produto) como
  // "elemento gráfico" e os mantém. Nomear cada texto elimina a ambiguidade.
  const templateFoundTexts = (templateTextLayout ?? [])
    .map((item) => item.text_found)
    .filter((t): t is string => typeof t === "string" && t.trim().length > 1);
  const residualList = templateFoundTexts.length > 0
    ? `\nTEXTOS CONCRETOS DO TEMPLATE (todos DEVEM ser substituídos pela copy correspondente ou removidos — NENHUM pode aparecer na arte final):\n${templateFoundTexts.map((t) => `• "${t}"`).join("\n")}`
    : "";

  lines.push(`REGRA #3.1 — ZERO TEXTO RESIDUAL DO TEMPLATE (CRÍTICO):
TODO e QUALQUER texto que existir no template original DEVE SUMIR da arte final, a menos que esteja LITERALMENTE escrito na copy listada acima.${residualList}
Isso inclui: headlines antigos, subtítulos, datas, números de telefone, URLs, e-mails, nomes de produto, slogans, hashtags, @arrobas, palavras decorativas, selos, badges, CTAs antigos, "Webinar 2024", "Aulão Gratuito", "Inscreva-se", "Acesse o link", nomes de pessoa que não sejam o expert atual, qualquer marca/logo antigo, qualquer texto em rodapé, qualquer marca d'água.
Se o template mostra a palavra "X" e "X" não aparece na copy fornecida, "X" NÃO PODE estar na arte final. Substitua pelo texto correspondente da copy, ou (se não houver substituto) APAGUE por completo e RECONSTRUA o fundo limpo nesse lugar (a mesma cor/textura do fundo ao redor). PROIBIDO deixar o texto antigo borrado, esmaecido, fantasma, meio-apagado ou como sombra — ou o texto está lá nítido (porque está na copy) ou o espaço fica 100% limpo. Um resíduo borrado é ERRO.
Pense assim: o template é uma forma vazia. A copy fornecida é o ÚNICO conteúdo que pode preenchê-la. Tudo que existia antes que não está na copy nova é LIXO e tem que sair SEM DEIXAR VESTÍGIO.`);

  lines.push(`REGRA #3.2 — MANTER O ESTILO E PROPORÇÃO DO TEXTO (P0):
Troque apenas o conteúdo escrito. Preserve o MESMO estilo do template original para cada bloco de texto: ${forceBrandTypography ? "peso aparente" : "família visual (a MESMA fonte aparente do template), peso aparente"}, caixa alta/baixa, tamanho relativo, alinhamento, quantidade de linhas e posição. Se o headline ocupava ~12% da altura do quadro, o novo headline deve ocupar a MESMA proporção. Se o CTA estava em um botão retangular, mantenha o botão com as mesmas dimensões.${forceBrandTypography ? " (Exceção única: a FAMÍLIA da fonte é a da marca, por ajuste explícito do usuário — todo o resto do estilo segue o template.)" : ""}
FONTE — PROIBIDO CAIR NO GENÉRICO: se você não conseguir reproduzir a fonte EXATA do template, use a fonte MAIS PRÓXIMA possível da MESMA família (serifada→serifada elegante equivalente; sans bold→sans bold equivalente; condensada→condensada), com o mesmo peso e a mesma caixa. NUNCA use uma fonte genérica/default de sistema que destoe do estilo do template — texto com cara de "fonte padrão" é ERRO.`);

  // REGRA #4 — FACE SWAP (enriquecido com dados da person analysis)
  if (hasExpertPhotos) {
    if (templateHasPerson && (templateAnalysis?.personPose || templatePerson?.pose)) {
      const pose = templatePerson?.pose || templateAnalysis?.personPose || "";
      const framing = templatePerson?.framing ? ` (${templatePerson.framing})` : "";
      const gridPos = templatePerson?.grid_position ? `, posicionada no ${templatePerson.grid_position}` : "";
      const coverage = templatePerson?.coverage_pct ? `, ocupando ~${templatePerson.coverage_pct}% do quadro` : "";
      // VESTIMENTA: por padrão mantém o TIPO de roupa do template. Só vira "varie"
      // quando o usuário liga o toggle de roupa. Sem isso a IA inventa roupa
      // (caso "pessoa de camisa" que não estava na referência nem no template).
      const clothingDesc = templatePerson?.clothing ? `${templatePerson.clothing}` : "a mesma vestimenta/tipo de roupa que a pessoa do template usa";
      const clothing = wantsClothingVariation
        ? `\n5. VESTIMENTA: pode VARIAR a roupa entre as versões, mas SEMPRE do MESMO TIPO da do template (${clothingDesc}). Ex.: se o template usa terno, varie entre ternos; se usa jaleco, varie entre jalecos. NÃO troque o tipo de peça.`
        : `\n5. VESTIMENTA (REGRA FORTE): a pessoa final usa o MESMO TIPO de roupa que a pessoa do template (${clothingDesc}) — mesma peça (terno, camisa social, jaleco, etc). NÃO invente roupa diferente, NÃO ponha "de camisa" se o template não tem camisa. A cor pode ser adaptada à paleta da marca se fizer sentido, mas o TIPO de vestimenta é o do template.`;

      lines.push(`REGRA #4 — FACE SWAP NA POSE DO TEMPLATE (NÃO É COLAGEM):
O template original CONTÉM uma pessoa${framing}${gridPos}${coverage}.
Pose do template: "${pose}".
A foto de referência anexada serve APENAS como fonte de identidade facial. NÃO cole, recorte nem reproduza essa foto na arte final.
PROIBIDO: deixar o rosto/traços faciais da pessoa que aparece no template original na arte final. A pessoa do template é descartada; só sobra a POSE dela. O ROSTO é SEMPRE o da foto de referência anexada, sem exceção. Se você gerar a imagem com o rosto original do template, a tarefa está ERRADA.
O que fazer:
1. ${wantsVariation
      ? `A POSE, o cenário/fundo e o enquadramento seguem a VARIAÇÃO OBRIGATÓRIA do topo (cada versão diferente) — NÃO copie a pose/cenário do template. ${wantsClothingVariation ? "A roupa também varia (mesmo tipo do template)." : "A ROUPA NÃO varia: mantenha o mesmo tipo de vestimenta do template."} Só o LAYOUT (posição dos textos, logo, CTA) é que vem do template.`
      : "Mantenha EXATAMENTE a pose descrita acima — o ângulo, enquadramento, posição no quadro, iluminação e cenário do template original."}
2. Substitua INTEGRALMENTE o rosto, traços faciais, tom de pele, cabelo, idade aparente e identidade pelos da pessoa da foto de referência. Nada do rosto original sobrevive.
3. O resultado deve parecer que a pessoa da foto de referência foi fotografada de verdade nessa cena.
4. ${wantsVariation
      ? `Use a foto de referência SÓ para o rosto/identidade. Pose, fundo e iluminação ${wantsClothingVariation ? "e roupa " : ""}devem variar conforme o topo.`
      : "IGNORE completamente a roupa, fundo, pose e iluminação da foto de referência — só o rosto/identidade importa."}${clothing}`);
    } else if (templateHasPerson) {
      lines.push(`REGRA #4 — FACE SWAP (NÃO É COLAGEM):
O template tem uma pessoa. A foto de referência anexada serve APENAS como fonte de identidade facial.
1. Mantenha a POSE, enquadramento, ângulo, iluminação, roupa e cenário da pessoa do template.
2. Troque apenas rosto, traços, pele e cabelo pelos da foto de referência.
3. NÃO cole nem recorte a foto de referência. NÃO reproduza a roupa/fundo/pose dela.`);
    } else {
      lines.push(`REGRA #4 — INSERIR PESSOA RESPEITANDO O LAYOUT:
O template original NÃO tem pessoa. A foto de referência mostra a pessoa que deve aparecer na arte.
1. Insira a pessoa em um espaço coerente com o layout do template, sem quebrar a composição, sem cobrir textos ou elementos importantes.
2. Use a foto de referência APENAS para identidade facial — não copie a pose/roupa/fundo dela.
3. ${wantsVariation
      ? `Pose, enquadramento e cenário/fundo seguem a VARIAÇÃO OBRIGATÓRIA do topo (cada versão diferente). ${wantsClothingVariation ? "A roupa também pode variar, sempre profissional." : "A ROUPA é uma vestimenta profissional coerente e CONSISTENTE entre as versões (não invente peças extravagantes)."}`
      : "Escolha uma pose neutra que combine com o estilo do template, com vestimenta profissional sóbria e coerente (não invente roupa chamativa)."}`);
    }
  } else if (templateHasPerson) {
    lines.push(`REGRA #4 — MANTENHA A PESSOA DO TEMPLATE:
O template original já tem uma pessoa. Mantenha-a EXATAMENTE como está, na mesma pose, enquadramento, iluminação e expressão.`);
  }

  // REGRA #4.5 — AJUSTES DO EXPERT (sobrepoe template)
  const adjustmentsBlock = buildExpertAdjustmentsBlock(expertAdjustments);
  if (adjustmentsBlock) {
    lines.push(`REGRA #4.5 — ${adjustmentsBlock}`);
  }

  // REGRA #5 — LOGO (com tamanho percentual se disponível)
  if (hasLogo && templateHasLogo) {
    const pos = templateAnalysis?.logoPosition;
    const size = templateLogoSizePct ? ` (~${templateLogoSizePct}% da largura do quadro)` : "";
    lines.push(`REGRA #5 — LOGO:
O template original tem um logo${pos ? ` em ${pos}` : ""}${size}. Substitua-o pelo logo da marca anexado, mantendo a MESMA posição, tamanho${size ? " proporcional" : ""} e proporção do logo original.`);
  } else if (hasLogo && !templateHasLogo) {
    lines.push(`REGRA #5 — LOGO:
O template original NÃO tinha logo. Insira o logo da marca anexado em um canto discreto (rodapé ou topo), ocupando no máximo 8% da largura, sem competir com a hierarquia visual do template.`);
  } else if (!hasLogo && templateHasLogo) {
    lines.push(`REGRA #5 — REMOVER LOGO (OBRIGATÓRIO):
O template de referência tem um logo${templateAnalysis?.logoPosition ? ` em ${templateAnalysis.logoPosition}` : ""}. A arte final NÃO PODE ter logo. REMOVA-O por completo e deixe o espaço LIMPO (só o fundo). NÃO copie, NÃO recrie, NÃO deixe versão apagada/fantasma do logo. NÃO coloque nenhum outro logo, marca, selo, monograma, ícone de empresa ou assinatura visual no lugar. Se você desenhar QUALQUER logo, a tarefa está ERRADA.`);
  } else {
    lines.push(`REGRA #5 — SEM LOGO (OBRIGATÓRIO):
A arte final NÃO PODE ter NENHUM logo, nome de marca, selo, monograma, ícone de empresa ou assinatura visual. Se o template de referência tiver algum logo ou marca (mesmo pequeno, num canto), IGNORE-O e deixe o espaço limpo. NÃO copie marcas do template. Se você desenhar qualquer logo, a tarefa está ERRADA.`);
  }

  // REGRA #6 — SEM IMITAR A INTERFACE DA META (mas o botão de CTA da marca É permitido)
  lines.push(`REGRA #6 — NÃO IMITAR A INTERFACE DA META (CRÍTICO):
A arte NÃO pode conter elementos que imitem a INTERFACE do Facebook/Instagram/Meta. Mesmo que o template/referência mostre esses elementos, REMOVA-OS. NÃO pode aparecer:
- Ícone de link/cursor/seta/dedo apontando, simulando clique
- "Saiba mais" ao lado de um ícone de link (estilo Instagram bio link)
- Barra de progresso de stories, avatar circular + @usuario + horário, faixa "Patrocinado/Sponsored"
- Ícones de curtir (coração), comentar (balão), compartilhar (avião), salvar (bookmark)
- "Swipe up", "Arraste pra cima", "Toque aqui"
IMPORTANTE: isto NÃO proíbe o BOTÃO DE CTA da marca${copy.cta && isCopyFieldActive("cta") ? ` (com o texto "${copy.cta}")` : ""}. O botão de CTA descrito acima É parte do design do criativo e DEVE aparecer. O que se proíbe é imitar a UI nativa da Meta (ícones de rede social, swipe, barra de stories), não o botão da campanha.`);

  // PROIBIDO
  const forbidden: string[] = [
    "- NÃO altere o layout, composição ou grid do template",
    "- NÃO mude as proporções dos elementos (se o headline ocupa 12% da altura, mantenha 12%)",
    "- NÃO adicione elementos visuais que não existam no template original",
    "- NÃO mude o estilo tipográfico (se o template usa sans-serif bold uppercase, mantenha sans-serif bold uppercase)",
    "- NÃO invente textos — use APENAS a copy fornecida acima",
    '- NÃO mantenha textos originais do template ("Webinar Pro", "Saiba mais", nomes de produto, headers, botões, labels) se eles não estiverem na copy fornecida',
    "- NÃO adicione bordas, sombras ou efeitos que não existam no template",
    // Quando o usuário pede variação, o fundo PODE (e deve) mudar — então esta
    // proibição só vale no modo normal. No modo composição o fundo é a foto própria
    // (preservada pela regra do topo), então esta proibição baseada no template não se aplica.
    ...(wantsVariation || hasCustomBackground ? [] : ["- NÃO altere o tipo de fundo (se é gradiente, mantenha gradiente; se é foto, mantenha foto)"]),
    '- Se o template for screenshot do Instagram, IGNORE a interface (faixa "Patrocinado", botões, nomes de perfil) — recrie APENAS o conteúdo criativo',
    '- NUNCA reproduza a INTERFACE nativa do Facebook/Instagram/Meta que apareça no template: barra de progresso de stories, ícones de curtir/comentar/compartilhar/salvar (clip/bookmark), avatar+@usuario+horário, faixa "Patrocinado/Sponsored", swipe up, ícone de link/cursor/dedo. Esses elementos são da plataforma — a arte final NÃO pode tê-los. (Isto NÃO inclui o botão de CTA da marca, que é parte do design e deve ser desenhado quando a copy tiver CTA.)',
  ];
  if (hasExpertPhotos) {
    forbidden.push(
      "- NÃO cole, recorte nem reproduza a foto de referência da pessoa na arte final — ela serve só como fonte de identidade facial",
      // No modo variação, pose/roupa/fundo DEVEM variar (regra do topo). No modo
      // normal, mantém pose/cenário do template.
      wantsVariation
        ? `- Use a foto de referência APENAS para a identidade facial (o rosto é sempre o mesmo). A pose, o enquadramento e o cenário/fundo DEVEM seguir a VARIAÇÃO OBRIGATÓRIA descrita no topo. ${wantsClothingVariation ? "A roupa também varia, mas sempre do MESMO TIPO de vestimenta do template." : "A ROUPA NÃO varia: mantenha o MESMO TIPO de vestimenta do template em todas as versões."}`
        : "- NÃO reproduza a pose, a roupa, o fundo ou a iluminação da foto de referência — use SEMPRE a pose e o cenário do template",
      "- NÃO deixe o resultado parecer uma colagem ou um sticker de foto sobre o template"
    );
    // Roupa: por padrão a IA mantém o tipo de vestimenta do template. Proíbe
    // explicitamente inventar roupa (caso "pessoa de camisa" que não existia).
    if (!wantsClothingVariation) {
      forbidden.push("- NÃO invente uma roupa/vestimenta que não esteja no template (ex.: não ponha a pessoa 'de camisa' se o template não tem camisa). A pessoa final usa o MESMO TIPO de peça que a pessoa do template.");
    }
  }
  lines.push(`PROIBIDO:\n${forbidden.join("\n")}`);

  // VALIDAÇÃO FINAL DE CORES — regra única e rígida, lida por último (alta retenção).
  // Consolida o mapa univoco de cores num só lugar e força uma checagem antes de
  // finalizar. Resolve o conflito histórico de "JAMAIS use cor do template" vs
  // "use a cor X" espalhado em vários blocos: aqui fica a fonte única de verdade.
  if (!hasCustomBackground) {
    lines.push(`VALIDAÇÃO FINAL DE CORES (LEIA POR ÚLTIMO — REGRA ÚNICA E DEFINITIVA):
A paleta da marca é a ÚNICA fonte de cor permitida: Primária ${brand.colors.primary} | Secundária ${brand.colors.secondary} | Accent ${brand.colors.accent} | Fundo ${fundoCor}.
Mapa univoco (use SEMPRE este mapeamento, sem exceção):
- Onde o template usa cor ESCURA/principal → use a PRIMÁRIA da marca (${brand.colors.primary}).
- Onde o template usa cor de DESTAQUE/CTA/badge → use o ACCENT da marca (${brand.colors.accent}).
- Onde o template usa cor de FUNDO → use ${fundoCor}.
- Onde o template usa cor SECUNDÁRIA/apoio → use a SECUNDÁRIA da marca (${brand.colors.secondary}).
- Onde o template usa branco/cor clara neutra → pode manter claro, desde que dentro da paleta.
ANTES DE FINALIZAR, confirme item a item: percorra TODA cor visível na arte (fundo, textos, formas, gradientes, overlays, badges, botões, ícones, sombras coloridas, divisores) e verifique se cada uma pertence à paleta da marca acima. Se SOBROU qualquer cor do template original que não está na paleta, SUBSTITUA imediatamente pela cor correspondente do mapa univoco. Nenhuma cor fora da paleta da marca pode permanecer na arte final.`);
  }

  // FORMATO
  lines.push(`FORMATO: ${format.width}x${format.height}px`);

  // Refinamento do usuário via chat
  if (chatRefinement) {
    lines.push(`Instruções do usuário: ${chatRefinement}`);
  }

  // (A instrução de variação foi movida para o TOPO do prompt — ver bloco
  // "VARIAÇÃO OBRIGATÓRIA" no início da função, com alta prioridade.)

  return lines.join("\n\n");
}

/** Mapeia role da análise visual para campo da copy */
function mapRoleToCopyField(role: string): string | null {
  const map: Record<string, string> = {
    headline: "headline",
    subheadline: "subheadline",
    mini_copy: "subheadline",
    ponte: "ponte",
    list_items: "ponte",
    body: "ponte",
    cta: "cta",
    badge: "cta",
  };
  return map[role] || null;
}

interface CopyGenerationInput {
  personaSummary: string;
  elements: string[];
  direction: string;
  count: number;
}

interface ImageEditPromptInput {
  originalPrompt?: string | null;
  userInstruction: string;
  hasExpertPhotos: boolean;
  hasLogo?: boolean;
  templateReferenceCount: number;
  /** "preserve" = fotos mantêm identidade atual; "replace" = foto nova substitui rosto/identidade do criativo */
  expertPhotoMode?: "preserve" | "replace";
  /** Ajustes do expert do projeto (herda automaticamente no edit) */
  expertAdjustments?: ExpertAdjustmentsInput;
  /** Brand kit do projeto pra reforçar cores/fontes na edição */
  brand?: {
    colors: BrandColors;
    fonts: BrandFonts;
  };
  /** 4 campos canônicos de copy pra substituir nos textos do criativo (opcional). */
  copy?: CopyContent;
  /**
   * Descrição do contexto/tema do anúncio (ex: "Plenna, evento pra psicólogas").
   * Quando presente, o prompt instrui trocar imagens que NÃO batem com este
   * contexto (ex: foto de cavalo num anúncio de psicologia) por algo coerente.
   */
  contextHint?: string;
}

/**
 * Monta o prompt para editar um criativo já gerado.
 * Usa a imagem atual como base principal e o template como régua visual.
 */
export function buildImageEditPrompt(input: ImageEditPromptInput): string {
  const {
    originalPrompt,
    userInstruction,
    hasExpertPhotos,
    hasLogo = false,
    templateReferenceCount,
    expertPhotoMode = "preserve",
    expertAdjustments,
    brand,
    copy,
    contextHint,
  } = input;

  const lines: string[] = [
    `TAREFA: edição LOCAL da imagem 1 (criativo atual). Trate a imagem 1 como a BASE definitiva: copie-a pixel a pixel e altere APENAS a região do elemento citado na instrução. Todo o resto (composição, enquadramento, proporções, posição e tamanho de cada bloco, cores, fundo, tipografia, a pessoa e a pose) deve sair IDÊNTICO à imagem 1. NÃO redesenhe a arte do zero. NÃO recomponha o layout. NÃO mude o formato/aspecto. NÃO reposicione nada que não foi citado.

MUDANÇA A APLICAR (é a ÚNICA coisa que pode mudar):
${userInstruction || "(ver substituições de texto/imagem especificadas abaixo)"}

Regra de ouro: a edição é CIRÚRGICA. Só o elemento citado muda; ele TEM que mudar de verdade (o resultado precisa ficar visivelmente diferente NESSE ponto). Se o elemento citado não existir na imagem 1, devolva a imagem 1 sem nenhuma outra alteração — NÃO invente mudanças em outros lugares pra compensar.`,
  ];

  // Mapa de imagens anexadas
  const refMap: string[] = [];
  refMap.push("- Imagem 1: criativo ATUAL (base que vai ser editada).");
  let pos = 2;
  if (templateReferenceCount === 1) {
    refMap.push(`- Imagem ${pos}: template original — referência de layout/tipografia/proporções.`);
    pos += 1;
  } else if (templateReferenceCount > 1) {
    refMap.push(`- Imagens ${pos}-${pos + templateReferenceCount - 1}: templates de referência.`);
    pos += templateReferenceCount;
  }
  if (hasExpertPhotos) {
    if (expertPhotoMode === "replace") {
      refMap.push(`- Imagem ${pos}${pos !== pos ? "" : ""}: NOVA IDENTIDADE do expert (foto enviada nesta edição). USE como fonte de rosto/traços/pele/cabelo para SUBSTITUIR a identidade da pessoa do criativo atual.`);
    } else {
      refMap.push(`- Imagem ${pos}: foto real do expert do projeto — fonte de identidade facial OFICIAL. Se houver pessoa na arte, ela deve ter o ROSTO desta foto, não o rosto que está no criativo atual.`);
    }
    pos += 1;
  }
  if (hasLogo) {
    refMap.push(`- Imagem ${pos}: LOGO OFICIAL da marca configurada no projeto. Este é o ÚNICO logo permitido na arte final. Qualquer logo/marca/selo que apareça no criativo atual e que NÃO seja este logo DEVE ser removido e substituído por este. Mantenha a mesma posição e tamanho relativo do logo atual.`);
    pos += 1;
  }
  lines.push(`MAPA DE IMAGENS ANEXADAS:\n${refMap.join("\n")}`);

  // Comportamento das fotos do expert
  if (hasExpertPhotos) {
    if (expertPhotoMode === "replace") {
      lines.push(`COMPORTAMENTO DAS FOTOS DO EXPERT (modo SUBSTITUIR):\nSUBSTITUA INTEGRALMENTE o rosto, traços faciais, pele, cabelo e (se visível) acessórios faciais da pessoa do criativo pelos da pessoa anexada. Mantenha pose/enquadramento/iluminação/cenário/roupa do criativo atual. Se a foto NÃO mostra óculos, REMOVA óculos. Se NÃO mostra gravata, REMOVA gravata. Se NÃO mostra barba, REMOVA barba. NÃO invente acessórios que a pessoa não tem.`);
    } else {
      lines.push(`COMPORTAMENTO DAS FOTOS DO EXPERT:\nA pessoa visível no criativo final DEVE ser a pessoa da foto anexada do expert do projeto — rosto, traços, pele, cabelo. Se a pessoa atualmente no criativo for visivelmente diferente, SUBSTITUA pela identidade da foto. Mantenha pose/enquadramento/cenário/roupa do criativo atual.`);
    }
  }

  // Branding obrigatório
  if (brand) {
    const fundoCor = brand.colors.background || brand.colors.primary;
    const colorParts = [`Primária: ${brand.colors.primary}`, `Secundária: ${brand.colors.secondary}`, `Accent: ${brand.colors.accent}`];
    colorParts.push(`Fundo: ${fundoCor}`);
    lines.push(`BRANDING OBRIGATÓRIO DA MARCA DO PROJETO:
Paleta autorizada: ${colorParts.join(" | ")}
Tipografia: títulos em ${brand.fonts.heading.family} (${brand.fonts.heading.weight}), corpo em ${brand.fonts.body.family} (${brand.fonts.body.weight}).
COR DE FUNDO DA ARTE: use ${fundoCor} como cor base do fundo. JAMAIS use preto, azul, cinza ou qualquer cor do template original no fundo, a não ser que essa cor esteja na paleta da marca.
Toda cor visível na arte final (fundo, formas, textos, gradientes, overlays, badges, ícones decorativos) DEVE estar dentro desta paleta. Se o criativo atual usa cores fora desta paleta, AJUSTE-AS para a paleta da marca durante a edição. Toda fonte de texto DEVE ser da tipografia da marca.${hasLogo ? "\nO logo da marca é a imagem anexada — substitua qualquer outro logo/símbolo de empresa que apareça no criativo atual por este logo oficial." : ""}`);
  }

  // Substituição estruturada de texto pelos 4 campos canônicos
  if (copy && (copy.headline || copy.subheadline || copy.ponte || copy.cta)) {
    const repl: string[] = [];
    if (copy.headline) repl.push(`• HEADLINE (texto principal/maior do criativo) → troque por: "${copy.headline}"`);
    if (copy.subheadline || copy.mini_copy) repl.push(`• SUBHEADLINE (texto de apoio, menor que a headline) → troque por: "${copy.subheadline || copy.mini_copy}"`);
    if (copy.ponte || copy.list_items) repl.push(`• PONTE (corpo que conecta a ideia ao CTA) → troque por: "${copy.ponte || copy.list_items}"`);
    lines.push(`SUBSTITUIÇÃO DE TEXTOS (mapeie cada bloco de texto do criativo atual ao campo correspondente e troque o conteúdo, mantendo posição/estilo/proporção de cada um):
${repl.join("\n")}
Os textos acima DEVEM aparecer na arte final. Remova qualquer texto antigo que não corresponda a esses campos. Preserve toda a acentuação do português.`);
    if (copy.cta) {
      lines.push(buildCtaButtonRule(copy.cta, brand?.colors.accent ?? "#000000"));
    }
  }

  // Troca de imagem que não bate com o contexto (ex: cavalo num anúncio de psicologia)
  if (contextHint) {
    lines.push(`COERÊNCIA DE IMAGEM COM O CONTEXTO:
O contexto deste anúncio é: ${contextHint}.
Se o criativo atual contiver fotos, ilustrações ou elementos visuais que NÃO fazem sentido para este contexto (ex: um animal, objeto ou cena genérica de banco de imagens sem relação com o tema), SUBSTITUA por uma imagem coerente com o contexto acima. Mantenha o mesmo enquadramento, posição e proporção do elemento original — troque apenas o CONTEÚDO da imagem, não o lugar dela na composição.`);
  }

  lines.push(`INSTRUÇÃO DE EDIÇÃO DO USUÁRIO (PRIORITÁRIA):
${userInstruction || "(sem instrução livre — aplicar as substituições de texto/imagem acima)"}`);

  const adjustmentsBlock = buildExpertAdjustmentsBlock(expertAdjustments);
  if (adjustmentsBlock) {
    lines.push(adjustmentsBlock);
  }

  // NOTA: o prompt original do criativo NÃO é reinjetado aqui de propósito.
  // Ele é cheio de "preserve o template / mantenha tudo", o que faz o modelo
  // ignorar a edição e devolver a imagem igual. A imagem 1 (atual) já é a
  // referência visual suficiente para a edição.
  void originalPrompt;

  const obligatoryRules: string[] = [
    "- A MUDANÇA pedida na instrução tem prioridade sobre qualquer regra de preservação. Aplique-a de verdade.",
    "- Preserve a estrutura/enquadramento/tipografia APENAS dos elementos que a instrução NÃO mandou mudar",
    "- Não invente novos textos, logos, marcas ou selos além dos especificados (o botão de CTA da marca, quando pedido, é permitido)",
    "- Remova qualquer texto residual antigo que não faça parte da edição pedida",
    "- Faça apenas as mudanças pedidas; todo o resto deve permanecer consistente",
  ];
  if (hasExpertPhotos && expertPhotoMode === "preserve") {
    obligatoryRules.push("- Se houver pessoa na arte, preserve a identidade da pessoa das fotos anexadas");
  }
  lines.push(`REGRAS OBRIGATÓRIAS:\n${obligatoryRules.join("\n")}`);

  lines.push(`PROIBIDO:
- Não redesenhar o layout do zero
- Não trocar fontes por estilos diferentes
- Não mudar a posição dos blocos sem necessidade
- Não adicionar elementos novos que não existiam
- Não manter nomes de produto, CTA ou logos antigos se a instrução pedir remoção
- NUNCA desenhar CTAs nativos da Meta/Facebook/Instagram: botões "Saiba mais", "Quero saber mais", "Cadastre-se", "Compre agora", "Baixar", clip/bookmark de salvar, ícones de like/comentar/compartilhar, barra de stories, faixa "Patrocinado". A plataforma adiciona isso automaticamente — duplicar na arte vira ruído visual e a Meta penaliza.`);

  return lines.join("\n\n");
}

/**
 * Monta o prompt para geração de copies via IA.
 * Persona é usada AQUI (na geração de copy), não na geração de imagem.
 */
export function buildCopyPrompt(input: CopyGenerationInput): string {
  const { personaSummary, elements, direction, count } = input;

  return `Você é um copywriter especialista em anúncios para redes sociais.

PERSONA/PÚBLICO-ALVO:
${personaSummary}

ELEMENTOS NECESSÁRIOS:
${elements.map((e) => `- ${e}`).join("\n")}

DIREÇÃO/TEMA:
${direction}

TAREFA:
Gere ${count} versões diferentes de copy para um criativo.
Cada versão deve conter os elementos listados acima.

REGRAS:
- Textos curtos e impactantes
- Adaptados para o público-alvo descrito
- Cada versão com abordagem/ângulo diferente
- Formato: retorne um JSON array com objetos contendo os campos: ${elements.join(", ")}

Retorne APENAS o JSON, sem markdown ou explicações.`;
}

interface TemplateAwareCopyInput {
  personaSummary: string;
  productName: string;
  salesArguments: string;
  templates: {
    name: string;
    category: string;
    copyElements: { type: string; text_found: string; position?: string }[];
  }[];
  count: number;
}

/**
 * Monta o prompt para geração de copies baseadas em templates.
 * Analisa os copy_elements de cada template para gerar copies
 * que encaixem na estrutura do template.
 */
export function buildTemplateAwareCopyPrompt(input: TemplateAwareCopyInput): string {
  const { personaSummary, productName, salesArguments, templates, count } = input;

  // Extrair todos os tipos de elementos unicos dos templates
  const elementTypes = new Map<string, string[]>();
  for (const tmpl of templates) {
    for (const el of tmpl.copyElements) {
      if (!elementTypes.has(el.type)) {
        elementTypes.set(el.type, []);
      }
      elementTypes.get(el.type)!.push(el.text_found);
    }
  }

  const templateDescriptions = templates.map((t) => {
    const elements = t.copyElements
      .map((el) => `  - ${el.type}: "${el.text_found}"${el.position ? ` (posição: ${el.position})` : ""}`)
      .join("\n");
    return `Template "${t.name}" (${t.category}):\n${elements}`;
  }).join("\n\n");

  const allFields = Array.from(elementTypes.keys());

  return `Você é um copywriter especialista em anúncios para redes sociais.

PERSONA/PÚBLICO-ALVO:
${personaSummary}

PRODUTO/SERVIÇO:
${productName}

ARGUMENTOS DE VENDA E DIFERENCIAIS:
${salesArguments}

TEMPLATES SELECIONADOS (análise dos elementos de copy):
${templateDescriptions}

CAMPOS QUE CADA COPY DEVE CONTER:
${allFields.map((f) => {
  const examples = elementTypes.get(f)!;
  return `- ${f} (exemplos dos templates: "${examples.slice(0, 2).join('", "')}")`;
}).join("\n")}

TAREFA:
Gere ${count} versões diferentes de copy para criativos baseados nos templates acima.
Cada versão deve conter TODOS os campos listados: ${allFields.join(", ")}.

REGRAS:
- Os textos devem ENCAIXAR na estrutura dos templates (respeitar tipo e tamanho dos elementos)
- headline: máximo 8-12 palavras, impactante e direto
- mini_copy: 1-2 frases curtas de apoio
- list_items: lista de tópicos/benefícios
- cta: chamada para ação clara e urgente (2-5 palavras)
- Outros campos: adaptar ao contexto do template
- Usar os argumentos de venda fornecidos como base
- Adaptados para o público-alvo descrito
- Cada versão com abordagem/ângulo diferente
- Formato: retorne um JSON array com objetos contendo os campos: ${allFields.join(", ")}

Retorne APENAS o JSON, sem markdown ou explicações.`;
}

// ─────────────────────────────────────────────────────────────────────────────
// EP-13 — Modo Lote por Briefing (geração SEM template)
// ─────────────────────────────────────────────────────────────────────────────

export interface BriefingPromptInput {
  /** Direção visual do item — espinha dorsal do prompt. */
  visualDirection: string;
  /** Textos que devem aparecer na arte (exatamente). 4 campos canônicos. */
  headline?: string;
  subheadline?: string;
  /** Ponte / chamada — corpo que conecta. */
  ponte?: string;
  /** CTA — vira botão desenhado quando preenchido. */
  cta?: string;
  /** Restrição de marca. */
  brand: { colors: BrandColors; fonts: BrandFonts };
  format: { width: number; height: number };
  hasLogo: boolean;
  /**
   * Instrução do usuário sobre o que fazer com a(s) imagem(ns) de referência
   * anexada(s) ao criativo (rodízio). Quando presente, uma imagem real é
   * enviada junto ao modelo e este texto diz como aplicá-la.
   */
  imageInstruction?: string;
}

/**
 * Bloco "IMAGEM DE REFERÊNCIA ANEXADA" — anexado a QUALQUER prompt do briefing
 * (gerado ou pronto) quando há imagens de referência no lote. Cada criativo
 * recebe UMA imagem do rodízio; este texto diz ao modelo como usá-la.
 */
export function buildBriefingImageReferenceRule(instruction?: string): string {
  const instr = (instruction || "").trim();
  const intro = instr
    ? `IMAGEM DE REFERÊNCIA ANEXADA: ${instr}`
    : "IMAGEM DE REFERÊNCIA ANEXADA: use a imagem anexada como referência principal da composição.";
  return `${intro}
Uma imagem de referência foi anexada a este criativo. Aplique-a conforme a instrução acima. Se a instrução pedir para preservar a imagem como fundo/cena real, mantenha-a como está e componha apenas o texto e os elementos de marca por cima, sem recriar ou substituir a cena. Se a instrução pedir referência de estilo/cores, use-a como guia visual sem copiar literalmente. Respeite sempre as regras de marca (cores, tipografia, logo) definidas abaixo.`;
}

/**
 * Monta o prompt do Nano Banana a partir de um item do briefing, SEM template.
 * Diferente de `buildPrompt`: aqui não há blueprint de template — a direção
 * visual descreve o conceito inteiro. O brand kit entra como restrição (cores,
 * tipografia, logo) e os textos do item são o que aparece na arte.
 *
 * Reaproveita as regras canônicas de `buildPrompt`: cores da marca (REGRA #2)
 * e zero CTA nativo Meta (REGRA #6), adaptadas ao contexto sem-template.
 */
export function buildPromptFromBriefingItem(input: BriefingPromptInput): string {
  const { visualDirection, headline, subheadline, ponte, cta, brand, format, hasLogo, imageInstruction } = input;
  // Presença da imagem é sinalizada por imageInstruction !== undefined (string,
  // mesmo vazia). O texto pode estar vazio (o builder usa o fallback padrão).
  const hasRefImage = typeof imageInstruction === "string";
  const lines: string[] = [];

  lines.push(
    hasRefImage
      ? `Crie uma arte publicitária de ${format.width}x${format.height}px (proporção ${format.width}:${format.height}) para anúncio/rede social, a partir do conceito visual descrito abaixo e da imagem de referência anexada, seguindo as regras de marca.`
      : `Crie uma arte publicitária de ${format.width}x${format.height}px (proporção ${format.width}:${format.height}) para anúncio/rede social, a partir do conceito visual descrito abaixo. Você compõe a arte inteira do zero, guiado apenas por esta direção visual e pelas regras de marca — não há imagem de referência a copiar.`,
  );

  // IMAGEM DE REFERÊNCIA ANEXADA (rodízio) — alta prioridade, logo após a abertura.
  if (hasRefImage) {
    lines.push(buildBriefingImageReferenceRule(imageInstruction));
  }

  // CONCEITO VISUAL — espinha dorsal
  lines.push(`CONCEITO VISUAL (siga fielmente):
${visualDirection}`);

  // TEXTOS que aparecem na arte — 4 campos canônicos (CTA é botão, tratado à parte)
  const textParts: string[] = [];
  if (headline) textParts.push(`- Headline (destaque principal, maior): "${headline}"`);
  if (subheadline) textParts.push(`- Subheadline (apoio, menor que a headline): "${subheadline}"`);
  if (ponte) textParts.push(`- Ponte (corpo que conecta a ideia ao CTA): "${ponte}"`);
  if (textParts.length > 0) {
    lines.push(`TEXTOS NA ARTE — escreva EXATAMENTE estes textos, com a hierarquia indicada, sem alterar nem inventar outros:
${textParts.join("\n")}
Preserve toda a acentuação do português. Não adicione textos decorativos, hashtags, @arrobas, URLs ou selos que não estejam listados acima${cta ? " (o botão de CTA é descrito abaixo)" : ""}.`);
  } else if (!cta) {
    lines.push(`TEXTOS NA ARTE: o conceito visual acima não especifica textos obrigatórios. Não invente headlines ou frases — mantenha a arte limpa de texto, a menos que o conceito visual peça explicitamente algum rótulo.`);
  }

  // CTA vira botão desenhado
  if (cta) {
    lines.push(buildCtaButtonRule(cta, brand.colors.accent));
  }

  // REGRA #2 — cores da marca (adaptada: não há "cores do template", a direção visual pode citar cor conceitualmente)
  const fundoCor = brand.colors.background || brand.colors.primary;
  const colorParts = [
    `Primária: ${brand.colors.primary}`,
    `Secundária: ${brand.colors.secondary}`,
    `Accent: ${brand.colors.accent}`,
  ];
  colorParts.push(`Fundo: ${fundoCor}`);
  lines.push(`REGRA #2 — CORES DA MARCA SÃO OBRIGATÓRIAS (NÃO É OPCIONAL):
Toda a paleta visível na arte final (fundo, textos, formas, gradientes, overlays, destaques, badges) DEVE estar dentro da paleta da marca abaixo. Se a direção visual mencionar uma cor de forma conceitual (ex.: "vermelho de alerta", "verde de aprovação"), trate como intenção semântica e materialize com a cor mais próxima DENTRO da paleta da marca — nunca use cores fora dela.
Paleta da marca: ${colorParts.join(" | ")}
COR DE FUNDO DA ARTE: use ${fundoCor} como cor base do fundo. JAMAIS use preto, azul, cinza ou qualquer cor do template original no fundo, a não ser que essa cor esteja na paleta da marca.
Tipografia: títulos em ${brand.fonts.heading.family} (${brand.fonts.heading.weight}), corpo em ${brand.fonts.body.family} (${brand.fonts.body.weight}).`);

  // LOGO
  if (hasLogo) {
    lines.push(`LOGO: a imagem de logo da marca foi anexada. Posicione-a de forma discreta e profissional (canto superior ou inferior), sem distorcer proporções e sem competir com o conceito visual principal.`);
  } else {
    lines.push(`LOGO: não há logo a aplicar. NÃO invente nome de marca, selo ou assinatura visual na arte.`);
  }

  // REGRA #6 — não imitar a interface da Meta (o botão de CTA da marca É permitido)
  lines.push(`REGRA #6 — NÃO IMITAR A INTERFACE DA META (CRÍTICO):
A arte NÃO pode conter elementos que imitem a INTERFACE do Facebook/Instagram/Meta:
- Ícone de link/cursor/seta/dedo simulando clique
- Barra de progresso de stories, avatar circular + @usuario, faixa "Patrocinado"
- Ícones de curtir/comentar/compartilhar/salvar
- "Swipe up"/"Arraste pra cima"/"Toque aqui"
Isto NÃO proíbe o botão de CTA da marca${cta ? ` (com o texto "${cta}")` : ""}, que é parte do design e deve ser desenhado. O que se proíbe é imitar a UI nativa da Meta (ícones de rede social, swipe, barra de stories).`);

  lines.push(`QUALIDADE: arte profissional, alto contraste de leitura, hierarquia tipográfica clara, composição equilibrada para o formato ${format.width}x${format.height}.`);

  return lines.join("\n\n");
}
