# Catalogo de Templates de Carrossel

## Visao Geral

20 templates HTML em 3 familias para renderizar slides de carrossel Instagram (1080x1350px).
Templates usam sistema de placeholders `{{variavel}}` para injecao dinamica de conteudo e brand.

## Placeholders Disponiveis

| Placeholder | Descricao | Exemplo |
|-------------|-----------|---------|
| `{{bg_color}}` | Cor de fundo | `#151517` |
| `{{text_color}}` | Cor do texto | `#FFFFFF` |
| `{{accent_color}}` | Cor de destaque | `#2B7DE1` |
| `{{font_family}}` | Fonte principal | `Inter` |
| `{{brand_name}}` | Nome da marca | `Torriani` |
| `{{slide_text}}` | Texto do slide | Conteudo gerado |
| `{{slide_number}}` | Numero do slide | `3` |
| `{{total_slides}}` | Total de slides | `10` |
| `{{slide_type}}` | Tipo: hook/content/cta | `hook` |
| `{{photo_url}}` | URL da foto (Imperial) | `photo.jpg` |
| `{{avatar_url}}` | URL do avatar (Twitter) | `avatar.jpg` |
| `{{handle}}` | @ do usuario (Twitter) | `@torriani` |

---

## Familia 1: Imperial (Editorial/Foto)

**Uso:** Quando tem fotos. Estetica editorial/magazine.
**Dimensao:** 1080x1350px (feed Instagram)
**Requer:** Fotos portrait para cover e internos D/E

| Template | Layout | Quando Usar |
|----------|--------|-------------|
| `cover.html` | Foto fullbleed + gradiente + titulo centralizado | Sempre no Slide 1 |
| `internal-A.html` | Foto topo (55%) + texto embaixo | Slides com foto + texto curto |
| `internal-B.html` | Texto em cima + foto embaixo (45%) | Slides com texto longo + foto |
| `internal-C.html` | Foto centralizada (35%) + texto acima e abaixo | Slides com imagem de apoio |
| `internal-D.html` | Foto fullbleed + card glassmorphism embaixo | Slides impactantes (climax) |
| `internal-E.html` | Foto fullbleed + card glassmorphism em cima | Slides de revelacao |
| `cta.html` | Botoes de acao (salvar/compartilhar/curtir) | Sempre no ultimo slide |

**Regra de distribuicao:** Nao repetir variante consecutiva. Alternar A→D→B→E→C.

---

## Familia 2: Twitter (Social Media)

**Uso:** Sem fotos ou estetica "post de rede social". Suporta dark/light mode.
**Dimensao:** 1080x1350px (feed Instagram)
**Modos:** Dark (bg #000000) / Light (bg #FFFFFF)

| Template | Layout | Quando Usar |
|----------|--------|-------------|
| `impact.html` | Foto fullbleed + overlay escuro + texto grande | Slide 1 (hook visual forte) |
| `text-top.html` | Texto em cima + foto embaixo (discreta) | Slides argumentativos |
| `image-top.html` | Foto em cima + texto embaixo | Slides com evidencia visual |
| `bubble-bottom.html` | Foto fullbleed + card glassmorphism embaixo | Citacoes, destaques |
| `bubble-top.html` | Foto fullbleed + card glassmorphism em cima | Revelacoes, dados |
| `list.html` | Lista com icones verde/vermelho | Comparacoes, checklist |

**Header padrao:** Avatar (80px) + nome + @handle + badge verificado

---

## Familia 3: Classic (Texto Puro)

**Uso:** Sem fotos. Layouts texto-only com design forte.
**Dimensao:** 1080x1350px (feed Instagram)

| Template | Layout | Quando Usar |
|----------|--------|-------------|
| `minimal-dark.html` | Fundo escuro + texto branco minimalista | Afirmacoes impactantes |
| `editorial-clean.html` | Fundo claro + tipografia editorial | Conteudo educativo elegante |
| `bold-gradient.html` | Gradiente vibrante + texto bold | Posts provocativos |
| `brand-bar.html` | Barra de marca + layout estruturado | Conteudo serializado |
| `split-accent.html` | Divisao com cor de destaque | Comparacoes, antes/depois |

---

## Selecao Automatica de Familia

| Criterio | Familia | Motivo |
|----------|---------|--------|
| Tem fotos + intencao qualquer | Imperial | Fotos elevam engagement |
| Sem fotos + Atracao/Consciencia | Twitter | Estetica moderna, text-driven |
| Sem fotos + Aquecimento/Venda | Classic | Bold, direto ao ponto |
| Tipo Oferta | Classic (bold-gradient) | Urgencia visual |
| Tipo Imperial | Imperial (se foto) ou Twitter | Match de nome + estetica |

## Renderizacao

Templates sao renderizados via Playwright MCP:
1. Substituir placeholders com dados reais
2. Servir HTML via localhost
3. Screenshot em 1080x1350px → PNG
4. Salvar como `slide-01.png` a `slide-XX.png`
