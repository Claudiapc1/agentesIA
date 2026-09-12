---
name: campaign-new
description: >
  Cria nova campanha de marketing dentro do business ativo do ContextOS
  deste pacote. Pergunta nome, slugifica como YYYY-MM-slug, cria pasta em
  marketing/campaigns/ e copia os templates brief.md, execution.md,
  results.yaml embutidos nesta skill. Acionar quando o usuário disser
  "nova campanha", "criar campanha", "registrar campanha", ou
  /coreai:campaign-new.
---

# Campaign New

Cria pasta de campanha com templates iniciais, dentro do ContextOS já resolvido.

## Pré-requisitos

- Leia `../coreai-shared/contextos-contract.md` e resolva o negócio ativo antes
  de qualquer escrita. Sem READY, bloqueie e ofereça `coreai-contexto`.
- Templates desta skill: `templates/brief.md`, `templates/execution.md`,
  `templates/results.yaml` (embutidos, sem dependência externa).

## Passos

### 1. Coletar nome

Pergunte: "Qual o nome da campanha?" (ex: "Black Friday 2026").

Slugify: lowercase, sem acentos, espaços → hífen.

Prefixo: `YYYY-MM-` baseado em data atual.

Exemplo: `2026-04-black-friday-2026`

### 2. Criar pasta

Use `business_root` retornado pelo gate como raiz do negócio ativo:

```bash
DEST="$BUSINESS_ROOT/marketing/campaigns/<slug>"
mkdir -p "$DEST/assets"
```

### 3. Copiar templates

```bash
TPL="$(dirname "$0")/../templates"  # resolvido relativo a esta skill
cp "templates/brief.md" "$DEST/"
cp "templates/execution.md" "$DEST/"
cp "templates/results.yaml" "$DEST/"
```

### 4. Atualizar índice

Adicionar entry em `$BUSINESS_ROOT/marketing/campaigns/_index.yaml`:

```yaml
campaigns:
  - slug: <slug>
    nome: <nome>
    status: planejada
    criada_em: <YYYY-MM-DD>
```

### 5. Confirmar

```
Campanha criada: <slug>
Local: <business_root>/marketing/campaigns/<slug>/

Próximos passos:
  - Edite brief.md com objetivo, público, oferta, canais.
  - Edite execution.md com plano de execução e cronograma.
  - Após executar, rode coreai-campaign-results pra registrar números.
```

## Edge cases

- Pasta já existe → adicione sufixo `-2`, `-3`, etc.
- Sem contexto de negócio válido → orientar `coreai-contexto`.
