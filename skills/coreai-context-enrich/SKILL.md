---
name: context-enrich
description: >
  Enriquece o contexto do business ativo com dados públicos — scrape do
  website (WebFetch), research de mídia/prêmios/redes sociais (WebSearch),
  síntese de brand voice. Acionar quando o usuário pedir "enriquecer
  contexto", "buscar dados públicos", "completar autoridade", "scrapear o
  site", ou /coreaios:context-enrich.
---

# Context Enrich

Pesquisa pública pra ir de ~70% para ~95% de completude do contexto.

## Quando usar

- Após `/coreaios:context-quick` ou `/coreaios:context-deep`.
- Antes de gerar copies/criativos que dependem de prova social.

## Pré-requisitos

- `~/coreaios/businesses/<active>/company/company-profile.yaml` com pelo menos `essencia.nome_fantasia` e `essencia.website` preenchidos.
- `founder-dna.yaml` com `essencia.nome_completo`.

## Passos

### 1. Carregar empresa ativa

```bash
ACTIVE=$(grep '^active_business:' ~/coreaios/.config/config.yaml | awk '{print $2}')
BIZ="$HOME/coreaios/businesses/$ACTIVE"
WEBSITE=$(python3 -c "import yaml; print(yaml.safe_load(open('$BIZ/company/company-profile.yaml'))['essencia'].get('website',''))")
FOUNDER=$(python3 -c "import yaml; print(yaml.safe_load(open('$BIZ/company/founder-dna.yaml'))['essencia'].get('nome_completo',''))")
```

### 2. Scrape do site (use WebFetch)

Use o tool `WebFetch` pra pegar a home page e 3-5 páginas internas (sobre, serviços, blog).

Extraia:
- Tagline / hero copy
- Lista de serviços/produtos
- Cases/depoimentos
- Diferenciais
- Selos/certificações

### 3. Research público (use WebSearch)

Pesquise:
- `"<nome_fantasia>" + entrevista OR podcast`
- `"<founder>" + "podcast" OR "palestra"`
- `"<nome_fantasia>" + premio OR awards`
- Redes sociais públicas (LinkedIn, Instagram, YouTube)

Cada fato deve vir com URL. Tag de confiança: ALTA (fonte oficial), MEDIA (mídia reconhecida), BAIXA (blog/agregador).

## Zero-invention

NUNCA inventar fatos. Se não encontrar evidência pública, deixar campo vazio. Toda menção em `credentials.yaml` precisa de URL verificável.

### 4. Síntese e gravação

Atualize:
- `$BIZ/company/company-profile.yaml` (essencia.tagline, premios, midia)
- `$BIZ/company/founder-dna.yaml` (autoridade, midia, palestras)
- `$BIZ/company/brand.yaml` (voz, tom — inferir do conteúdo público)
- `$BIZ/company/credentials.yaml` (mídia.entrevistas, mídia.premios, redes_sociais)
- `$BIZ/intelligence/research.md` (relatório livre com fontes)

### 5. Resumo

```
✅ Enriquecimento concluído.
Fontes consultadas: <N>
Fatos novos:
  - <fato 1> [ALTA] — <url>
  - <fato 2> [MEDIA] — <url>
  ...
Completude estimada: <X>% → <Y>%
```

## Edge cases

- Site indisponível / 404 → pular scrape, fazer só research.
- Sem `nome_fantasia` ou `website` → orientar `/coreaios:context-quick` primeiro.
- Conteúdo em outro idioma → manter idioma original nas citações, traduzir só na síntese.
