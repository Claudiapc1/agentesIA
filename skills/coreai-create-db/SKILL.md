---
name: create-db
description: |
  Cria um projeto Supabase completo via CLI.
  Gera senha segura, cria o projeto, coleta API keys e salva credenciais.
  Output: .env + supabase-credentials.json no diretorio atual.
---

# Create DB

Cria um projeto Supabase completo com um comando.

## Quick Start

```
/create-db meu-projeto
```

## Activation

1. Parse nome do projeto de `$ARGUMENTS` (ou perguntar se nao fornecido)
2. Executar workflow de criacao
3. Salvar credenciais no diretorio atual

---

## SKILL DEFINITION

```yaml
skill:
  name: Create DB
  id: create-db
```

## WORKFLOW

### Fase 1: Coleta de Dados

1. **Nome do projeto**: Usar `$ARGUMENTS` se fornecido. Se nao, perguntar ao usuario.

2. **Organizacao**: Listar as organizacoes disponveis com:
   ```bash
   supabase orgs list
   ```
   Apresentar como opcoes numeradas. Se houver apenas 1, usar automaticamente.

3. **Regiao**: Perguntar ao usuario. Opcoes comuns:
   - `us-east-1` (Virginia - padrao)
   - `sa-east-1` (Sao Paulo)
   - `us-west-1` (California)
   - `eu-west-1` (Irlanda)

   Usar AskUserQuestion para apresentar as opcoes. Sugerir `sa-east-1` como recomendado.

### Fase 2: Criacao do Projeto

1. **Gerar senha segura** para o banco de dados:
   ```bash
   openssl rand -base64 24
   ```
   A senha deve ter pelo menos 16 caracteres, incluindo letras, numeros e caracteres especiais.

2. **Criar o projeto** no Supabase:
   ```bash
   supabase projects create "<nome>" --org-id <org-id> --db-password "<senha>" --region <regiao> -o json
   ```

3. **Extrair o project ref** do output JSON (campo `id`).

4. **Aguardar o projeto ficar pronto** (pode levar alguns segundos):
   ```bash
   # Tentar ate 3 vezes com intervalo de 15 segundos
   supabase projects api-keys --project-ref <ref> -o json
   ```

### Fase 3: Coleta de Credenciais

1. **Obter API keys**:
   ```bash
   supabase projects api-keys --project-ref <ref> -o json
   ```
   Extrair:
   - `anon` key (publica)
   - `service_role` key (privada)

2. **Montar as variaveis**:
   - `NEXT_PUBLIC_SUPABASE_URL`: `https://<ref>.supabase.co`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: anon key
   - `SUPABASE_SERVICE_ROLE_KEY`: service_role key
   - `SUPABASE_DB_PASSWORD`: senha gerada
   - `SUPABASE_PROJECT_REF`: ref do projeto
   - `DATABASE_URL`: `postgresql://postgres.<ref>:<senha>@aws-0-<regiao>.pooler.supabase.com:6543/postgres`

### Fase 4: Salvar Credenciais

1. **Criar `.env`** no diretorio atual (ou adicionar ao existente):
   ```
   # Supabase - <nome-do-projeto>
   # Criado em: <data>
   NEXT_PUBLIC_SUPABASE_URL=https://<ref>.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
   SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
   SUPABASE_DB_PASSWORD=<senha>
   SUPABASE_PROJECT_REF=<ref>
   DATABASE_URL=postgresql://postgres.<ref>:<senha>@aws-0-<regiao>.pooler.supabase.com:6543/postgres
   ```

   **IMPORTANTE**: Se ja existir um `.env`, perguntar ao usuario:
   - Adicionar ao final do arquivo existente
   - Sobrescrever o arquivo
   - Salvar como `.env.supabase`

2. **Criar `supabase-credentials.json`**:
   ```json
   {
     "project_name": "<nome>",
     "project_ref": "<ref>",
     "region": "<regiao>",
     "created_at": "<data-iso>",
     "url": "https://<ref>.supabase.co",
     "anon_key": "<anon-key>",
     "service_role_key": "<service-role-key>",
     "db_password": "<senha>",
     "database_url": "postgresql://postgres.<ref>:<senha>@aws-0-<regiao>.pooler.supabase.com:6543/postgres",
     "dashboard_url": "https://supabase.com/dashboard/project/<ref>"
   }
   ```

3. **Verificar `.gitignore`**: Se existir um `.gitignore` no diretorio, verificar se `.env` e `supabase-credentials.json` estao listados. Se nao estiverem, perguntar ao usuario se deseja adiciona-los.

### Fase 5: Resumo

Exibir resumo final com:
- Nome do projeto
- Regiao
- URL do dashboard: `https://supabase.com/dashboard/project/<ref>`
- Arquivos criados
- Lembrete: "As credenciais estao salvas. NAO commite esses arquivos!"

## REGRAS

- NUNCA exibir a service_role_key no terminal (apenas salvar nos arquivos)
- SEMPRE gerar senha forte (minimo 24 caracteres)
- SEMPRE verificar se o CLI esta autenticado antes de comecar
- Se o projeto falhar na criacao, exibir o erro e sugerir solucoes
- Usar formato JSON no output do CLI para parsing confiavel
