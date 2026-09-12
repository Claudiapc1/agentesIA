# Catalogo de CLIs — Verificacao e Instalacao por SO

## CLIs Essenciais (Obrigatorios)

### git

| SO | Verificacao | Versao Esperada | Instalacao |
|----|------------|-----------------|------------|
| Windows | `git --version` | 2.x | `winget install --id Git.Git` |
| macOS | `git --version` | 2.x | `xcode-select --install` |
| Linux | `git --version` | 2.x | `sudo apt install git` |

### gh (GitHub CLI)

| SO | Verificacao | Versao Esperada | Instalacao |
|----|------------|-----------------|------------|
| Windows | `gh --version` | 2.x | `winget install --id GitHub.cli` |
| macOS | `gh --version` | 2.x | `brew install gh` |
| Linux | `gh --version` | 2.x | `sudo apt install gh` |

**Pos-instalacao:** `gh auth login`

### node (Node.js)

| SO | Verificacao | Versao Esperada | Instalacao |
|----|------------|-----------------|------------|
| Windows | `node --version` | v18.x ou v20.x ou v22.x | `winget install --id OpenJS.NodeJS.LTS` |
| macOS | `node --version` | v18.x ou v20.x ou v22.x | `brew install node@22` |
| Linux | `node --version` | v18.x ou v20.x ou v22.x | `curl -fsSL https://deb.nodesource.com/setup_22.x \| sudo -E bash - && sudo apt install nodejs` |

**Nota:** Considere usar nvm ou fnm para gerenciar versoes do Node.js.

### npm

| SO | Verificacao | Versao Esperada | Instalacao |
|----|------------|-----------------|------------|
| Todos | `npm --version` | 10.x | Instalado junto com Node.js |

---

## CLIs de Infraestrutura (Recomendados)

### supabase

| SO | Verificacao | Versao Esperada | Instalacao |
|----|------------|-----------------|------------|
| Windows | `supabase --version` | 1.x ou 2.x | `scoop bucket add supabase https://github.com/supabase/scoop-bucket.git && scoop install supabase` |
| macOS | `supabase --version` | 1.x ou 2.x | `brew install supabase/tap/supabase` |
| Linux | `supabase --version` | 1.x ou 2.x | `brew install supabase/tap/supabase` |
| Todos (npm) | `supabase --version` | 1.x ou 2.x | `npm install -g supabase` |

**Pos-instalacao:** `supabase login`

### railway

| SO | Verificacao | Versao Esperada | Instalacao |
|----|------------|-----------------|------------|
| Windows | `railway --version` | 3.x | `npm install -g @railway/cli` |
| macOS | `railway --version` | 3.x | `brew install railway` |
| Linux | `railway --version` | 3.x | `npm install -g @railway/cli` |

**Pos-instalacao:** `railway login`

### docker

| SO | Verificacao | Versao Esperada | Instalacao |
|----|------------|-----------------|------------|
| Windows | `docker --version` | 24.x ou 25.x ou 26.x | `winget install --id Docker.DockerDesktop` |
| macOS | `docker --version` | 24.x ou 25.x ou 26.x | `brew install --cask docker` |
| Linux | `docker --version` | 24.x ou 25.x ou 26.x | Ver https://docs.docker.com/engine/install/ |

**Nota:** Necessario para desenvolvimento local com Supabase.

---

## CLIs de Qualidade (Recomendados)

### coderabbit

**Windows (WSL obrigatorio):**

```bash
# Verificacao
wsl bash -c 'if [ -f ~/.local/bin/coderabbit ]; then ~/.local/bin/coderabbit --version; else echo "NOT_INSTALLED"; fi'

# Instalacao (dentro do WSL)
# 1. Garantir WSL instalado: wsl --install
# 2. No terminal WSL:
curl -fsSL https://coderabbit.ai/install.sh | bash
# 3. Autenticar:
~/.local/bin/coderabbit auth login
```

**macOS/Linux:**

```bash
# Verificacao
if command -v coderabbit >/dev/null 2>&1; then
  coderabbit --version
elif [ -f ~/.local/bin/coderabbit ]; then
  ~/.local/bin/coderabbit --version
else
  echo "NOT_INSTALLED"
fi

# Instalacao
curl -fsSL https://coderabbit.ai/install.sh | bash
```

**Versao esperada:** 0.8.x ou superior

**IMPORTANTE para Windows:** CodeRabbit CLI roda no WSL, nao no Windows nativo.
- Requer WSL com distribuicao Ubuntu/Debian
- Binario em ~/.local/bin/coderabbit (dentro do WSL)
- Todos os comandos devem usar: `wsl bash -c 'comando'`

---

## CLIs Opcionais

### pnpm

| SO | Verificacao | Versao Esperada | Instalacao |
|----|------------|-----------------|------------|
| Todos | `pnpm --version` | 8.x ou 9.x | `npm install -g pnpm` |

**Nota:** Alternativa mais rapida ao npm.

### bun

| SO | Verificacao | Versao Esperada | Instalacao |
|----|------------|-----------------|------------|
| Windows | `bun --version` | 1.x | `powershell -c "irm bun.sh/install.ps1 \| iex"` |
| macOS/Linux | `bun --version` | 1.x | `curl -fsSL https://bun.sh/install \| bash` |

**Nota:** Runtime JavaScript ultra-rapido.

---

## Comandos de Verificacao de Atualizacao

| Ferramenta | Verificar Ultima Versao | Atualizar (macOS) | Atualizar (Windows) | Atualizar (npm) |
|------------|------------------------|-------------------|--------------------|----|
| supabase | `npm view supabase version` | `brew upgrade supabase` | `scoop update supabase` | `npm update -g supabase` |
| gh | `gh api repos/cli/cli/releases/latest --jq .tag_name` | `brew upgrade gh` | `winget upgrade GitHub.cli` | - |
| node | `npm view node version` | `brew upgrade node` | `winget upgrade OpenJS.NodeJS.LTS` | Use nvm/fnm |
| railway | `npm view @railway/cli version` | `brew upgrade railway` | - | `npm update -g @railway/cli` |
