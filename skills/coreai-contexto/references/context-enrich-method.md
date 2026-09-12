---
name: context-enrich
description: >
  Enriquece o contexto do business ativo com dados públicos — scrape do
  website (WebFetch), research de mídia/prêmios/redes sociais (WebSearch),
  síntese de brand voice. Lê e grava em
  <CONTEXT_ROOT>/businesses/<active>/context/. Acionar quando o usuário
  pedir "enriquecer contexto", "buscar dados públicos", "completar autoridade",
  "scrapear o site", ou /context-enrich.
---

# Context Enrich

Pesquisa pública pra ir de ~70% para ~95% de completude do contexto.

## Quando usar

- Após `/context-quick` ou `/context-deep`.
- Antes de gerar copies/criativos que dependem de prova social.

## Pré-requisitos

- `context/company-profile.yaml` com pelo menos `company_essence.trade_name`
  preenchido.
- `context/credentials.yaml` com `online_presence.website` (ou o website em
  `company_essence` se o aluno tiver registrado lá).
- `context/founder-dna.yaml` com `founder_essence.legal_name`.

## Passos

### 1. Carregar empresa ativa

```bash
ACTIVE=$(grep '^active_business:' <CONTEXT_ROOT>/config.yaml | awk '{print $2}')
BIZ="$HOME/context-os/workspace/businesses/$ACTIVE/context"
TRADE=$(python3 -c "import yaml; print((yaml.safe_load(open('$BIZ/company-profile.yaml')) or {}).get('company_essence',{}).get('trade_name',''))")
WEBSITE=$(python3 -c "import yaml; print((yaml.safe_load(open('$BIZ/credentials.yaml')) or {}).get('online_presence',{}).get('website',''))")
FOUNDER=$(python3 -c "import yaml; print((yaml.safe_load(open('$BIZ/founder-dna.yaml')) or {}).get('founder_essence',{}).get('legal_name',''))")
```

### 2. Scrape do site (use WebFetch)

Use o tool `WebFetch` pra pegar a home page e 3-5 páginas internas (sobre,
serviços, blog).

Extraia:
- Tagline / hero copy
- Lista de serviços/produtos
- Cases/depoimentos
- Diferenciais
- Selos/certificações

### 3. Research público (use WebSearch)

Pesquise:
- `"<trade_name>" + entrevista OR podcast`
- `"<founder>" + "podcast" OR "palestra"`
- `"<trade_name>" + premio OR awards`
- Redes sociais públicas (LinkedIn, Instagram, YouTube)

Cada fato deve vir com URL. Tag de confiança: ALTA (fonte oficial), MEDIA
(mídia reconhecida), BAIXA (blog/agregador).

## Zero-invention

NUNCA inventar fatos. Se não encontrar evidência pública, deixar campo vazio.
Toda menção em `credentials.yaml` precisa de URL verificável.

### 4. Síntese e gravação

Atualize (todos em `context/`, estrutura EN):
- `company-profile.yaml` → `company_essence.one_liner`, `positioning.primary_promise`
- `founder-dna.yaml` → `credibility_foundation`, `professional_background.career_milestones`
- `brand.yaml` → `voice_dna.signature_phrases`, `personality.*` (inferir do conteúdo público)
- `credentials.yaml` → `media_appearances.interviews`, `awards.recognition_mentions`,
  `online_presence.linkedin`, `online_presence.social_primary`, `notable_clients.*`
- Relatório livre com fontes em `intelligence/research.md`

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
- Sem `trade_name` ou `website` → orientar `/context-quick` primeiro.
- Conteúdo em outro idioma → manter idioma original nas citações, traduzir só na síntese.
