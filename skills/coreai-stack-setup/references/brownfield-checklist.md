# Checklist de Compatibilidade Brownfield

> Para projetos existentes — verificar ANTES de configurar

## Pre-Migracao

### 1. Status do Controle de Versao
- [ ] Todas as mudancas commitadas no controle de versao
- [ ] Branch de trabalho criada a partir de main/master
- [ ] Backup remoto verificado (push antes da migracao)

### 2. Preservacao de Configuracoes Existentes
- [ ] Arquivos `.env` preservados (NUNCA sobrescritos)
- [ ] Scripts do `package.json` preservados
- [ ] Configs de linting (.eslintrc, .prettierrc) detectadas
- [ ] Workflows CI/CD (.github/workflows) inventariados

### 3. Compatibilidade de Dependencias
- [ ] Versao do Node.js compativel (>=18)
- [ ] Sem dependencias globais conflitantes
- [ ] Lock file (package-lock.json/yarn.lock) preservado

### 4. Analise de Estrutura de Diretorio
- [ ] Status do diretorio `docs/` verificado (vazio/existente)
- [ ] Sem conflitos de nomes com diretorios novos
- [ ] `.gitignore` existente detectado

---

## Durante a Configuracao

### 5. Operacoes Nao-Destrutivas
- [ ] Apenas CRIAR arquivos novos, NUNCA sobrescrever existentes
- [ ] Conflitos de merge apresentados ao usuario para decisao
- [ ] Arquivos originais preservados com `.backup` se houver conflito
- [ ] Hash do commit pre-migracao registrado para rollback

### 6. Estrategia de Merge de Configuracao
- [ ] Entradas do `.gitignore` existentes preservadas + novas adicionadas
- [ ] Config TypeScript estendida (nao substituida) se existente
- [ ] Regras ESLint mescladas (nao sobrescritas)

### 7. Pontos de Rollback
- [ ] Hash do commit pre-migracao registrado
- [ ] Arquivos novos claramente identificados (podem ser removidos)
- [ ] Nenhuma modificacao em codigo fonte existente

---

## Pos-Configuracao

### 8. Funcionalidade Existente
- [ ] `npm test` passa (se testes existiam antes)
- [ ] `npm run build` funciona (se build existia)
- [ ] Aplicacao inicia normalmente

### 9. Verificacao de Integracao
- [ ] Ferramentas CLI funcionam no contexto do projeto
- [ ] Git remote configurado corretamente
- [ ] Claude Code funciona na pasta do projeto

### 10. Verificacao de Rollback
- [ ] `git diff HEAD~1` mostra apenas adicoes
- [ ] Sem processos ou arquivos orfaos

---

## Matriz de Compatibilidade

| Config Existente        | Comportamento               | Acao do Usuario          |
|-------------------------|----------------------------|--------------------------|
| `.eslintrc.*`           | Detectar + preservar       | Nenhuma                  |
| `.prettierrc.*`         | Detectar + preservar       | Nenhuma                  |
| `tsconfig.json`         | Estender (nao substituir)  | Revisar extends          |
| `jest.config.*`         | Detectar + preservar       | Nenhuma                  |
| `docs/*.md`             | Pular (nao sobrescrever)   | Merge manual se quiser   |
| `.github/workflows/*`   | Apenas inventariar         | Usuario decide           |
| `package.json` scripts  | Preservar todos            | Nenhuma                  |

---

## Procedimento de Rollback

Se a configuracao falhar ou nao for desejada:

```bash
# Opcao 1: Rollback completo para estado pre-migracao
git checkout HEAD~1 -- .

# Opcao 2: Remover apenas arquivos novos
# Identificar arquivos adicionados
git diff HEAD~1 --name-only --diff-filter=A
# Remover cada um manualmente

# Opcao 3: Rollback suave (manter docs, remover runtime)
# Remover apenas configs de ferramentas adicionadas
```
