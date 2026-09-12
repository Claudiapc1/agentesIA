# 🎯 Traffic Meta — Skill Claude Code

> Setup e inteligência diária para **Meta Ads** via CLI oficial (`meta-ads`) e MCP `mcp.facebook.com/ads`.

Skill criada por **[Juliano Torriani](https://torriani.com.br)** para alunos que querem operar Meta Ads direto do Claude Code (Mac/Linux/Windows) — análise de campanhas, leads, pixel/CAPI, e oportunidades de otimização sem precisar abrir o Ads Manager.

---

## 🚀 Instalação rápida

📖 **Tutorial completo passo a passo:** abra o arquivo `tutorial.html` neste pacote no seu navegador. Ele tem screenshots, vídeos e troubleshooting.

Esta skill é instalada junto com o pacote `agentesIA`: siga o `README.md` da raiz
do pacote (instrução para o Claude/Codex executar o setup). Não extraia nem crie
link manual — a instalação sempre grava uma cópia própria em `~/.claude/skills/`
e/ou `~/.agents/skills/`. Depois: `/traffic-meta status`.

---

## 🎯 O que essa skill faz

| Comando | Função |
|---------|--------|
| `/traffic-meta setup` | Wizard completo — instala CLI, gera token, persiste no shell |
| `/traffic-meta status` | Diagnóstico read-only do estado atual |
| `/traffic-meta daily-pulse` | Snapshot performance últimos 7 dias |
| `/traffic-meta health-check` | Diagnóstico de pixel e tracking |
| `/traffic-meta tour` | Tour pelas 29 ferramentas oficiais Meta |
| `/traffic-meta troubleshoot` | Wizard de problemas comuns |

---

## 📋 Pré-requisitos

| Requisito | Onde instalar |
|-----------|---------------|
| **Python 3.12+** | `brew install uv && uv python install 3.12` |
| **Meta Ads CLI** | `uv tool install meta-ads` |
| **Token Meta** | https://business.facebook.com/settings/system-users |

> O setup faz tudo passo a passo — você não precisa decorar nada.

---

## 📦 O que vem no pacote

```
traffic-meta/
├── SKILL.md          ← Skill principal (Claude Code lê)
├── README.md         ← Este arquivo
├── INSTALL.md        ← Tutorial em texto puro
├── tutorial.html     ← Tutorial visual (abre no navegador)
├── scripts/          ← Scripts auxiliares (opcional)
├── references/       ← Documentação técnica
└── assets/           ← Recursos
```

---

## ❓ Dúvidas frequentes

**Funciona no Windows?**
Sim, mas o tutorial é focado em macOS. Adaptações simples: usar `winget`/`scoop` em vez de `brew`.

**Preciso pagar algo?**
Não. A CLI `meta-ads` é gratuita (oficial da Meta), o token Meta Business é gratuito, o Claude Code é gratuito. Você só paga pelos seus anúncios.

**A skill funciona no Claude Desktop?**
A skill em si funciona em Claude Code. **Para o MCP oficial da Meta** (`mcp.facebook.com/ads`), você usa Claude Desktop — o tutorial HTML mostra como configurar os dois.

**Posso usar com qualquer conta Meta?**
Sim, qualquer Business Manager. O token tem que ter permissão nas contas que você quer gerenciar.

---

## 📜 Versão

`v1.0.0` — Maio/2026

Criado com Claude Code · Compatível com Meta Ads CLI `meta-ads` (PyPI oficial) e MCP `mcp.facebook.com/ads` (lançado pela Meta em 29/abr/2026).

---

## 📞 Contato

🐦 [@torriani](https://twitter.com/torriani) · 📧 juliano@torriani.com.br · 🌐 [torriani.com.br](https://torriani.com.br)
