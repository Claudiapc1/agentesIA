# 🚀 Instalação — Traffic Meta Skill

Skill do Claude Code criada por **Juliano Torriani** para conectar e operar Meta Ads via CLI oficial + MCP.

---

## ⚡ Instalação rápida (3 minutos)

### 1. Baixar e extrair o ZIP

Você recebeu o arquivo `traffic-meta.zip`. Extraia em `~/claude/coreaios/skills/`:

```bash
# Criar pasta se não existir
mkdir -p ~/claude/coreaios/skills

# Extrair o ZIP que você baixou
unzip ~/Downloads/traffic-meta.zip -d ~/claude/coreaios/skills/
```

> Resultado: pasta criada em `~/claude/coreaios/skills/traffic-meta/`

### 2. Configurar Claude Code (se ainda não fez)

Garante que `~/.claude/skills/` aponta pra `~/claude/coreaios/skills/`:

```bash
# Verificar se já existe symlink
ls -la ~/.claude/skills

# Se NÃO mostrar "skills -> /Users/<você>/coreaios/skills", criar:
mkdir -p ~/.claude
rm -rf ~/.claude/skills 2>/dev/null
ln -s ~/claude/coreaios/skills ~/.claude/skills
```

### 3. Reiniciar o Claude Code

Feche e abra. A skill `traffic-meta` aparece no listing automaticamente.

---

## 🎯 Pré-requisitos para usar a skill

Você vai precisar de:

| Requisito | Como verificar | Como instalar |
|-----------|----------------|---------------|
| **Python 3.12+** | `python3 --version` | `brew install uv && uv python install 3.12` |
| **uv** (gerenciador Python) | `uv --version` | `brew install uv` |
| **Meta Ads CLI** (`meta-ads`) | `meta ads --help` | `uv tool install meta-ads` |
| **Token Meta Business** | `echo $ACCESS_TOKEN` | Ver tutorial abaixo |

A skill faz isso passo a passo no `/traffic-meta setup` — você não precisa decorar.

---

## 🔑 Como gerar seu token Meta (System User Token — não expira)

1. Vá em https://business.facebook.com/settings/system-users
2. Selecione seu Business Manager → clique **+ Add**
3. Nome: `meta-cli-{seu-nome}` · Role: **Admin**
4. Clique no usuário criado → **Add Assets** → adicione suas contas de ads
5. **Generate New Token** → escolha um app Meta Developer (ou crie um chamado "meta-cli-helper")
6. Token Expiration: **Never**
7. Permissões: ✅ `ads_management` ✅ `ads_read` ✅ `business_management`
8. Copie o token (só aparece uma vez)

Persistir no shell:

```bash
echo '' >> ~/.zshrc
echo '# Meta Ads CLI' >> ~/.zshrc
echo 'export ACCESS_TOKEN="<seu-token>"' >> ~/.zshrc
echo 'export AD_ACCOUNT_ID="act_XXXXXXXXX"' >> ~/.zshrc  # sua conta principal
source ~/.zshrc
```

---

## ✅ Como usar (depois de instalado)

No Claude Code, em qualquer pasta:

```
/traffic-meta status
```

Se tudo estiver verde, você pode rodar:

| Comando | O que faz |
|---------|-----------|
| `/traffic-meta daily-pulse` | Resumo dos últimos 7 dias da sua conta |
| `/traffic-meta health-check` | Diagnóstico do pixel e tracking |
| `/traffic-meta tour` | Tour pelas 29 ferramentas oficiais |
| `/traffic-meta troubleshoot` | Wizard pra problemas comuns |

---

## 🆘 Suporte

Se travar em algum passo:
1. Rode `/traffic-meta status` — ele diz exatamente o que está faltando
2. Manda print pro Juliano

---

## 📜 Versão

`traffic-meta v1.0.0` — Maio/2026

Compatível com:
- Meta Ads CLI `meta-ads` (PyPI, oficial Meta)
- Meta MCP `https://mcp.facebook.com/ads`
- Claude Code (qualquer versão recente)

---

🤖 Skill criada com Claude Code · @juliano-torriani
