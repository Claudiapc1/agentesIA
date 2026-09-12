# Templates de Scaffold de Projeto

## Estrutura de Pastas (Greenfield)

Criar esta estrutura para projetos novos:

```
{project-name}/
├── .claude/
│   └── settings.json        # Configuracoes locais do Claude Code (se necessario)
├── docs/
│   ├── stories/              # User stories
│   ├── architecture/         # Documentacao de arquitetura
│   └── guides/               # Guias para desenvolvedores
├── src/                      # Codigo fonte
├── tests/                    # Testes
├── .gitignore
├── package.json
└── README.md
```

---

## Template .gitignore

```gitignore
# Dependencies
node_modules/
.pnpm-store/

# Build outputs
dist/
build/
.next/
out/

# Environment files
.env
.env.local
.env.*.local

# IDE
.idea/
.vscode/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs/
*.log
npm-debug.log*

# Testing
coverage/
.nyc_output/

# Temporary files
tmp/
temp/
*.tmp

# Supabase
supabase/.temp/
```

---

## Template README.md

```markdown
# {PROJECT_NAME}

## Primeiros Passos

```bash
npm install
npm run dev
```

## Estrutura

```
src/          # Codigo fonte
tests/        # Testes
docs/         # Documentacao
```

## Comandos

| Comando | Descricao |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Build de producao |
| `npm test` | Roda testes |
| `npm run lint` | Verifica estilo de codigo |
```

---

## Template package.json

```json
{
  "name": "{PROJECT_NAME}",
  "version": "0.1.0",
  "description": "",
  "scripts": {
    "dev": "echo 'Adicione seu script de dev'",
    "build": "echo 'Adicione seu script de build'",
    "test": "echo 'Adicione seu script de test'",
    "lint": "echo 'Adicione seu script de lint'"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

---

## Commit Inicial (CRITICO)

O commit inicial DEVE ser criado ANTES de `gh repo create --push`. O flag `--push` requer pelo menos um commit existente.

```bash
git add .
git commit -m "chore: setup inicial do projeto

- Inicializar estrutura do projeto
- Adicionar .gitignore com exclusoes padrao
- Adicionar README.md
- Adicionar package.json"
```

---

## Criacao do Repositorio GitHub

```bash
# Metodo principal
gh repo create {PROJECT_NAME} --private --description "{DESCRIPTION}" --source . --remote origin --push

# Se falhar, metodo alternativo
gh repo create {PROJECT_NAME} --private --description "{DESCRIPTION}" --source . --remote origin
git push -u origin main
```
