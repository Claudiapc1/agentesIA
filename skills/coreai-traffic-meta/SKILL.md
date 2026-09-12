---
name: traffic-meta
description: Setup e inteligência diária para Meta Ads via CLI oficial (`meta-ads`) e MCP `mcp.facebook.com/ads`. Faz onboarding guiado (System User Token), diagnóstico, daily pulse, oportunidades, health check de pixel/CAPI, benchmarks da indústria e detecção de anomalias. Usa as 29 ferramentas oficiais da Meta. Triggers — "/traffic-meta", "conectar meta", "performance meta", "oportunidades meta ads", "system user meta". Não usar para Google/TikTok/LinkedIn ou criativos visuais.
version: 1.0.0
author: Juliano Torriani
created: 2026-05-01
keywords: [meta-ads, facebook-ads, instagram-ads, marketing-api, mcp, cli, performance, traffic]
---

# Traffic Meta — Setup + Inteligência para Meta Ads

Skill compartilhável para conectar e operar **Meta Ads** via Claude Code, usando a CLI oficial `meta-ads` (Python, PyPI) e o MCP oficial `https://mcp.facebook.com/ads`, ambos lançados pela Meta em **29/abr/2026**.

## Subcomandos

### 🔧 TIER 1 — Setup
| Comando | Função |
|---------|--------|
| `/traffic-meta setup` | Wizard: Python 3.12+, instala `meta-ads`, gera System User Token, persiste no `~/.zshrc` |
| `/traffic-meta status` | Diagnóstico read-only (token mascarado) |
| `/traffic-meta token-rotate` | Renovar token |

### 📊 TIER 2 — Inteligência
| Comando | Tools usadas |
|---------|--------------|
| `/traffic-meta daily-pulse [--days 7]` | `meta ads campaign list`, `meta ads insights get`, `ads_insights_anomaly_signal` |
| `/traffic-meta opportunities` | `ads_get_opportunity_score` |
| `/traffic-meta health-check` | `ads_get_dataset_quality`, `ads_get_dataset_stats`, `ads_get_errors` |
| `/traffic-meta benchmark` | `ads_insights_industry_benchmark` |
| `/traffic-meta anomalies` | `ads_insights_anomaly_signal` |

### 🎓 TIER 3 — Educacional
- `/traffic-meta tour` — Tour pelas 29 ferramentas oficiais
- `/traffic-meta troubleshoot` — Wizard de problemas comuns

## Pré-requisito do setup

```bash
# Python 3.12+ obrigatório
brew install uv
uv tool install meta-ads

# Token via Business Manager → System Users → Generate (não expira)
export ACCESS_TOKEN=<token>
export AD_ACCOUNT_ID=act_XXXXXXXXX
```

## Roteamento CLI vs MCP

1. **MCP no Claude Desktop** (se conectado em `mcp.facebook.com/ads`): preferir
2. **CLI Python via Bash** (`meta ads ...`): fallback universal

## Segurança

1. Token NUNCA em output (sempre mascarar `EAAi...XXXX`)
2. Operações de write requerem `yes` digitado
3. System User Token (não expira) > Graph API Explorer (60 dias)

## Squad relacionado

Não substitui o squad `traffic-masters` (legacy/squads/traffic-masters/) — squad faz multi-plataforma completa com frameworks de experts; esta skill foca em Meta-only com setup express e inteligência diária.
