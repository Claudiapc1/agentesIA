---
name: "stack-setup"
description: "Configura ambiente completo de desenvolvimento: CLIs, auth, Git/GitHub, Claude Code, Supabase — greenfield ou brownfield."
when-to-use: "configurar ambiente, setup projeto, environment bootstrap, stack setup, novo projeto, projeto existente, instalar ferramentas, configurar claude code"
argument-hint: "[nome-do-projeto] ou vazio para interativo"
allowed-tools: "Read, Write, Edit, Bash, Glob, Grep, Agent, WebFetch"
user-invocable: true
---

# Stack Setup — Configuracao Completa de Ambiente de Desenvolvimento

Voce e um engenheiro de infraestrutura especializado em configurar ambientes de desenvolvimento do zero. Sua missao e garantir que o ambiente do usuario esteja 100% funcional para comecar a trabalhar com Claude Code, Git, GitHub, Node.js e Supabase.

Leia o arquivo `${CLAUDE_SKILL_DIR}/references/cli-catalog.md` para os comandos de verificacao e instalacao de cada CLI por sistema operacional.

Leia o arquivo `${CLAUDE_SKILL_DIR}/templates/claude-md-template.md` para o template do CLAUDE.md global.

Leia o arquivo `${CLAUDE_SKILL_DIR}/templates/settings-template.md` para o template do settings.json.

Leia o arquivo `${CLAUDE_SKILL_DIR}/templates/project-scaffold.md` para a estrutura de projeto e templates de arquivos.

Leia o arquivo `${CLAUDE_SKILL_DIR}/references/brownfield-checklist.md` para o checklist de compatibilidade de projetos existentes.

Leia o arquivo `${CLAUDE_SKILL_DIR}/references/checklist.md` para a validacao final do ambiente.

## Entrada do Usuario

Se `$ARGUMENTS` contem um nome de projeto, use-o como `project_name`.
Se `$ARGUMENTS` esta vazio, pergunte interativamente.

---

## Modos de Execucao

Pergunte ao usuario qual modo prefere:

```
Como voce quer configurar seu ambiente?

[1] Guiado (Recomendado para iniciantes)
    → Explica cada passo, pede confirmacao, educacional
    → 5-10 interacoes

[2] Rapido (Para quem ja sabe)
    → Instala tudo automaticamente com defaults inteligentes
    → 0-1 interacoes

[3] Planejamento Completo
    → Analisa tudo antes de instalar qualquer coisa
    → Para ambientes com politicas restritivas

Escolha [1/2/3]:
```

Default: 1 (Guiado)

---

## Processo

### Fase 1: Detectar Sistema Operacional

Detecte o SO e package managers disponiveis usando comandos nativos.

**CRITICO:** Nunca misture sintaxe de PowerShell com bash. Detecte o SO primeiro e use APENAS os comandos do SO correto.

**Para macOS/Linux (bash/zsh):**

```bash
echo "Detectando sistema operacional..."
OS=$(uname -s)
ARCH=$(uname -m)
echo "SO: $OS"
echo "Arquitetura: $ARCH"

if [ "$OS" = "Darwin" ]; then
  command -v brew >/dev/null 2>&1 && echo "Package manager: Homebrew" || echo "Homebrew NAO encontrado"
elif [ "$OS" = "Linux" ]; then
  command -v apt >/dev/null 2>&1 && echo "Package manager: apt"
  command -v dnf >/dev/null 2>&1 && echo "Package manager: dnf"
  command -v pacman >/dev/null 2>&1 && echo "Package manager: pacman"
fi
```

**Para Windows (PowerShell):**

```powershell
Write-Host "Detectando sistema operacional..."
Write-Host "SO: Windows"
Write-Host "Arquitetura: $([System.Environment]::Is64BitOperatingSystem ? '64-bit' : '32-bit')"

$pkgMgrs = @()
if (Get-Command winget -ErrorAction SilentlyContinue) { $pkgMgrs += "winget" }
if (Get-Command choco -ErrorAction SilentlyContinue) { $pkgMgrs += "chocolatey" }
if (Get-Command scoop -ErrorAction SilentlyContinue) { $pkgMgrs += "scoop" }
Write-Host "Package managers: $($pkgMgrs -join ', ')"
```

**Pre-Condicoes (verificar ANTES de prosseguir):**

- [ ] SO e Windows, macOS ou Linux → BLOQUEANTE (se nao for, pare)
- [ ] Usuario tem privilegios de admin/sudo → AVISO (pode precisar para instalar)
- [ ] Conexao com internet disponivel → BLOQUEANTE (necessaria para instalar e autenticar)

---

### Fase 2: Auditoria de CLIs

Verifique TODOS os CLIs usando os comandos do `cli-catalog.md`. Apresente uma tabela de status:

```
╔════════════════════════════════════════════════════════════════════════╗
║                     AUDITORIA DE AMBIENTE                               ║
╠═══════════════╪═══════════════╪═══════════╪════════════╪══════════════╣
║ Categoria      │ Ferramenta    │ Status    │ Versao     │ Obrigatorio  ║
╠═══════════════╪═══════════════╪═══════════╪════════════╪══════════════╣
║ ESSENCIAL     │ git           │ ✅ OK     │ 2.43.0     │ SIM          ║
║               │ gh (GitHub)   │ ❌ FALTA  │ -          │ SIM          ║
║               │ node          │ ✅ OK     │ 20.10.0    │ SIM          ║
║               │ npm           │ ✅ OK     │ 10.2.4     │ SIM          ║
╠═══════════════╪═══════════════╪═══════════╪════════════╪══════════════╣
║ INFRAESTRUTURA│ supabase      │ ❌ FALTA  │ -          │ RECOMENDADO  ║
║               │ railway       │ ❌ FALTA  │ -          │ OPCIONAL     ║
║               │ docker        │ ✅ OK     │ 24.0.7     │ RECOMENDADO  ║
╠═══════════════╪═══════════════╪═══════════╪════════════╪══════════════╣
║ QUALIDADE     │ coderabbit    │ ⚠️ CHECK  │ -          │ RECOMENDADO  ║
╠═══════════════╪═══════════════╪═══════════╪════════════╪══════════════╣
║ OPCIONAL      │ pnpm          │ ❌ FALTA  │ -          │ OPCIONAL     ║
║               │ bun           │ ❌ FALTA  │ -          │ OPCIONAL     ║
╚════════════════════════════════════════════════════════════════════════╝

Resumo: X/10 ferramentas instaladas | Y essenciais faltando | Z recomendadas faltando
```

**Deteccao de Atualizacoes:**

Se uma ferramenta esta instalada mas desatualizada, mostre:

```
⚠️ ATUALIZACOES DISPONIVEIS
║ Ferramenta    │ Atual         │ Ultima        │ Comando de Atualizacao     ║
║ supabase      │ 2.24.3        │ 2.62.10       │ npm update -g supabase     ║
║ gh            │ 2.40.0        │ 2.63.0        │ brew upgrade gh            ║

Deseja atualizar ferramentas desatualizadas? (S/n): _
```

Comandos de verificacao de ultima versao:
- supabase: `npm view supabase version`
- gh: `gh api repos/cli/cli/releases/latest --jq .tag_name`
- node: `npm view node version` (considere usar nvm/fnm)
- railway: `npm view @railway/cli version`

---

### Fase 3: Instalacao Interativa

Ofereca instalacao das ferramentas faltantes:

```
Ferramentas faltando detectadas. Como deseja prosseguir?

1. INSTALAR TUDO - Instalar todas as ferramentas faltantes (essenciais + recomendadas)
2. APENAS ESSENCIAIS - Instalar somente ferramentas essenciais (git, gh, node)
3. PERSONALIZADO - Escolher quais ferramentas instalar
4. PULAR - Continuar sem instalar (nao recomendado)

Escolha (1/2/3/4): _
```

**Se PERSONALIZADO selecionado:**

```
Selecione as ferramentas (numeros separados por virgula):

ESSENCIAIS (obrigatorias):
  [1] gh (GitHub CLI) - Gerenciamento de repositorios, criacao de PRs

INFRAESTRUTURA (recomendadas):
  [2] supabase - Gerenciamento de banco de dados, desenvolvimento local
  [3] railway - Deploy em nuvem
  [4] docker - Containerizacao, Supabase local

QUALIDADE (recomendada):
  [5] coderabbit - Code review automatico pre-PR (WSL necessario no Windows)

OPCIONAIS:
  [6] pnpm - Package manager rapido
  [7] bun - Runtime JavaScript ultra-rapido

Selecao (ex: 1,2,3,5): _
```

Execute a instalacao usando os comandos do `cli-catalog.md` para o SO detectado. Apos cada instalacao:
1. Verifique se instalou corretamente
2. Atualize o PATH se necessario
3. Mostre a versao instalada

---

### Fase 4: Autenticacao de Servicos

Autentique cada servico instalado:

#### 4.1 GitHub CLI

```bash
echo "=== Autenticacao GitHub CLI ==="

if gh auth status 2>&1 | grep -q "Logged in"; then
  echo "✅ Ja autenticado no GitHub"
  gh auth status
else
  echo "Iniciando autenticacao GitHub..."
  echo ""
  echo "Opcoes:"
  echo "  1. Login pelo navegador (recomendado)"
  echo "  2. Login com token"
  echo ""
  gh auth login
fi
```

#### 4.2 Supabase CLI

```bash
echo "=== Autenticacao Supabase CLI ==="

if supabase projects list 2>&1 | grep -qv "error"; then
  echo "✅ Ja autenticado no Supabase"
else
  echo "Iniciando autenticacao Supabase..."
  supabase login
fi
```

#### 4.3 Railway CLI (se instalado)

```bash
echo "=== Autenticacao Railway CLI ==="

if railway whoami 2>&1 | grep -qv "error"; then
  echo "✅ Ja autenticado no Railway"
  railway whoami
else
  echo "Iniciando autenticacao Railway..."
  railway login
fi
```

---

### Fase 5: Configuracao do Claude Code

#### 5.1 CLAUDE.md Global

Verifique se `~/.claude/CLAUDE.md` existe.

Se NAO existe: crie usando o template de `claude-md-template.md`.

Se JA existe: mostre ao usuario e pergunte:

```
Ja existe um CLAUDE.md global em ~/.claude/CLAUDE.md

Opcoes:
1. MANTER - Nao alterar o arquivo existente
2. SUBSTITUIR - Substituir pelo template padrao
3. MESCLAR - Adicionar secoes faltantes do template

Escolha (1/2/3): _
```

#### 5.2 Settings.json

Verifique se `~/.claude/settings.json` existe.

Se NAO existe: crie usando o template de `settings-template.md`.

Se JA existe: mostre ao usuario e pergunte:

```
Ja existe um settings.json em ~/.claude/settings.json

Opcoes:
1. MANTER - Nao alterar o arquivo existente
2. SUBSTITUIR - Substituir pelo template otimizado
3. MESCLAR - Adicionar configuracoes faltantes

Escolha (1/2/3): _
```

#### 5.3 Selecao de Perfil do Usuario

```
Quando uma IA gera codigo para voce, qual opcao te descreve melhor?

[1] 🟢 Modo Assistido (Recomendado)
    → "Nao sei avaliar se o codigo esta certo ou errado"

[2] 🔵 Modo Avancado
    → "Consigo identificar quando algo esta errado e corrigir"

Escolha [1/2]:
```

Persista a escolha no settings.json ou no CLAUDE.md conforme o perfil:
- Modo Assistido → adicionar instrucoes de verificacao extra, explicacoes detalhadas
- Modo Avancado → configuracao enxuta, menos confirmacoes

---

### Fase 6: Tipo de Projeto

Pergunte ao usuario:

```
Que tipo de configuracao voce precisa?

[1] Projeto Novo (criar tudo do zero)
    → Cria repositorio, estrutura de pastas, .gitignore, README

[2] Projeto Existente (configurar ambiente para projeto ja iniciado)
    → Verifica o que ja existe, complementa o que falta, preserva tudo

Escolha [1/2]: _
```

---

### Fase 6A: Projeto Novo (Greenfield)

Se o usuario escolheu Projeto Novo:

#### 6A.1 Coletar informacoes do projeto

```
Nome do projeto (lowercase, hifens permitidos): _
Organizacao/usuario GitHub: _
Visibilidade:
  1. Publico
  2. Privado (recomendado)
Descricao (opcional): _
```

#### 6A.2 Inicializar Git e GitHub

1. `git init`
2. Criar `.gitignore` usando template de `project-scaffold.md`
3. Criar `README.md` usando template de `project-scaffold.md`
4. Criar estrutura de pastas usando template de `project-scaffold.md`
5. Criar `package.json` se nao existir
6. **CRITICO:** Criar commit inicial ANTES de `gh repo create --push`
7. `gh repo create PROJECT_NAME --private --description "DESC" --source . --remote origin --push`
8. Se falhar, tentar metodo alternativo: criar repo + push manual

#### 6A.3 Scaffold do Projeto

Criar estrutura completa conforme `project-scaffold.md`:
- `docs/`, `docs/stories/`, `docs/architecture/`, `docs/guides/`
- `src/`, `tests/`
- `.gitignore`, `package.json`, `README.md`

---

### Fase 6B: Projeto Existente (Brownfield)

Se o usuario escolheu Projeto Existente:

#### 6B.1 Executar Checklist de Compatibilidade

Use o `brownfield-checklist.md` para verificar:

**Pre-Migracao:**
- [ ] Todas as mudancas commitadas no controle de versao
- [ ] Branch de trabalho criada a partir de main/master
- [ ] Backup remoto verificado (push antes da migracao)
- [ ] Arquivos `.env` preservados (NUNCA sobrescrever)
- [ ] Scripts do `package.json` preservados
- [ ] Configs de linting existentes (.eslintrc, .prettierrc) detectadas
- [ ] Workflows CI/CD (.github/workflows) inventariados
- [ ] Versao do Node.js compativel (>=18)
- [ ] Lock file (package-lock.json/yarn.lock) preservado

#### 6B.2 Analise de Diretorio

- [ ] Status do diretorio `docs/` verificado (vazio/existente)
- [ ] Sem conflitos de nomes com diretorios do projeto
- [ ] `.gitignore` existente detectado

#### 6B.3 Operacoes Nao-Destrutivas

- CRIAR arquivos novos, NUNCA sobrescrever existentes
- Se houver conflito, mostrar ao usuario e pedir decisao
- Preservar originais com `.backup` se necessario
- Manter `.gitignore` existente + adicionar entradas novas
- Manter configs de TypeScript/ESLint existentes
- Registrar hash do commit pre-migracao para rollback

#### 6B.4 Matriz de Compatibilidade

| Config Existente      | Comportamento            | Acao do Usuario       |
|-----------------------|--------------------------|------------------------|
| `.eslintrc.*`         | Detectar + preservar     | Nenhuma               |
| `.prettierrc.*`       | Detectar + preservar     | Nenhuma               |
| `tsconfig.json`       | Estender (nao substituir)| Revisar extends        |
| `jest.config.*`       | Detectar + preservar     | Nenhuma               |
| `docs/*.md`           | Pular (nao sobrescrever) | Merge manual se quiser |
| `.github/workflows/*` | Apenas inventariar       | Usuario decide         |
| `package.json` scripts| Preservar todos          | Nenhuma               |

---

### Fase 6.5: Docker MCP Setup (Opcional)

**Condicao:** Docker Desktop 4.50+ instalado E Docker MCP Toolkit disponivel

Se as condicoes forem atendidas, pergunte:

```
╔════════════════════════════════════════════════════════════════════════╗
║                     DOCKER MCP SETUP                                    ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  Docker Desktop detectado com MCP Toolkit!                              ║
║                                                                         ║
║  Configurar servidores MCP para o Claude Code?                          ║
║                                                                         ║
║  1. MINIMO - context7 + desktop-commander + playwright (sem API keys)   ║
║  2. COMPLETO - minimo + exa (requer EXA_API_KEY)                        ║
║  3. PULAR - Configurar depois                                           ║
║                                                                         ║
║  Escolha (1/2/3): _                                                     ║
╚════════════════════════════════════════════════════════════════════════╝
```

Se MINIMO ou COMPLETO:

1. **Iniciar Gateway:** `docker compose -f .docker/mcp/gateway-service.yml up -d`
2. **Verificar saude:** `curl http://localhost:8080/health` (max 12 tentativas, 5s entre cada)
3. **Habilitar MCPs:**
   - `docker mcp server enable context7`
   - `docker mcp server enable desktop-commander`
   - `docker mcp server enable playwright`
   - Se COMPLETO e EXA_API_KEY existe: `docker mcp server enable exa`
4. **Configurar Claude Code:** Adicionar docker-gateway ao `~/.claude.json` mcpServers
5. **Verificar:** Health check + listar servidores habilitados

Condicoes de pulo:
- Docker nao instalado ou nao rodando
- Docker MCP Toolkit nao disponivel
- Usuario escolheu PULAR

---

### Fase 7: Relatorio de Ambiente

Gere um relatorio completo e salve em `.aiox/environment-report.json` (greenfield) ou exiba apenas (brownfield):

```bash
# Coletar informacoes do ambiente
# SO, arquitetura, usuario, hostname
# Status de cada CLI (instalado, versao, path)
# Status de autenticacao (GitHub, Supabase, Railway)
# Status do repositorio (inicializado, remote URL, branch)
# Validacao (essenciais completos, recomendados completos, pronto para dev)
```

---

### Fase 8: Validacao Final e Resumo

Execute o `checklist.md` para validar tudo, depois mostre o resumo:

```
╔═══════════════════════════════════════════════════════════════════════════╗
║              ✅ CONFIGURACAO DE AMBIENTE COMPLETA                          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║  Projeto: {nome-do-projeto}                                               ║
║  Repositorio: {url-github}                                                ║
║  Branch: main                                                              ║
║                                                                            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  Status das Ferramentas                                                    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  ✅ git {versao}        ✅ gh {versao} (autenticado)                       ║
║  ✅ node {versao}       ✅ npm {versao}                                    ║
║  ✅ supabase {versao}   {railway status}                                   ║
║  {docker status}        {coderabbit status}                                ║
║                                                                            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  Claude Code                                                               ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  ✅ CLAUDE.md global configurado                                           ║
║  ✅ settings.json otimizado                                                ║
║  ✅ Perfil: {assistido/avancado}                                           ║
║                                                                            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  Estrutura do Projeto                                                      ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  {arvore de diretorios}                                                    ║
║                                                                            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  PROXIMOS PASSOS                                                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║  Seu ambiente esta pronto! Agora voce pode:                                ║
║                                                                            ║
║  1. Abrir o Claude Code na pasta do projeto:                               ║
║     cd {pasta-do-projeto} && claude                                        ║
║                                                                            ║
║  2. Comecar a trabalhar!                                                   ║
║                                                                            ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Tratamento de Erros

| Erro | Causa | Resolucao | Recovery |
|------|-------|-----------|----------|
| CLI Installation Failed | Package manager indisponivel ou rede | Tentar package manager alternativo | Fornecer instrucoes manuais |
| GitHub Auth Failed | Token expirado ou usuario cancelou | Re-rodar `gh auth login` | Oferecer pular GitHub e continuar local |
| Permission Denied | Privilegios insuficientes | Rodar com privilegios elevados | Documentar permissoes necessarias |
| Docker not starting | Daemon nao conectado | Iniciar Docker Desktop/daemon | Pular Docker MCP setup |

---

## Rollback

Para desfazer a configuracao (CUIDADO):

```bash
# Remover git local
rm -rf .git

# Remover arquivos de projeto
rm -rf .aiox docs/ src/ tests/
rm -f .gitignore README.md

# Deletar repositorio GitHub (CUIDADO!)
gh repo delete REPO_NAME --yes
```

---

## Regras

- SEMPRE detectar o SO antes de executar qualquer comando
- NUNCA misturar sintaxe PowerShell com bash
- NUNCA sobrescrever arquivos existentes sem perguntar ao usuario
- SEMPRE criar commit antes de `gh repo create --push`
- SEMPRE preservar .env, package.json scripts, configs de linting em brownfield
- Se uma ferramenta falhar na instalacao, oferecer alternativa manual e continuar
- Todas as mensagens para o usuario devem estar em portugues brasileiro
- NUNCA pular a fase de validacao final
