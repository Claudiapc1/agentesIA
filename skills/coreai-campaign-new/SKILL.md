---
name: campaign-new
description: >
  Cria nova campanha de marketing dentro do business ativo. Pergunta nome,
  slugifica como YYYY-MM-slug, cria pasta em marketing/campaigns/ e copia
  templates brief.md, execution.md, results.yaml. Acionar quando o usuário
  disser "nova campanha", "criar campanha", "registrar campanha", ou
  /coreaios:campaign-new.
---

# Campaign New

Cria pasta de campanha com templates iniciais.

## Pré-requisitos

- Business ativo em `~/coreaios/.config/config.yaml`.
- Templates de campanha em `~/coreaios/templates/business/campaigns/`.

## Passos

### 1. Coletar nome

Pergunte: "Qual o nome da campanha?" (ex: "Black Friday 2026").

Slugify: lowercase, sem acentos, espaços → hífen.

Prefixo: `YYYY-MM-` baseado em data atual.

Exemplo: `2026-04-black-friday-2026`

### 2. Criar pasta

```bash
ACTIVE=$(grep '^active_business:' ~/coreaios/.config/config.yaml | awk '{print $2}')
DEST="$HOME/coreaios/businesses/$ACTIVE/marketing/campaigns/<slug>"
mkdir -p "$DEST/assets"
```

### 3. Copiar templates

```bash
TPL="$HOME/coreaios/templates/business/campaigns"
cp "$TPL/brief.md" "$DEST/"
cp "$TPL/execution.md" "$DEST/"
cp "$TPL/results.yaml" "$DEST/"
```

### 4. Atualizar índice

Adicionar entry em `$BIZ/marketing/campaigns/_index.yaml`:

```yaml
campaigns:
  - slug: <slug>
    nome: <nome>
    status: planejada
    criada_em: <YYYY-MM-DD>
```

### 5. Confirmar

```
✅ Campanha criada: <slug>
Local: ~/coreaios/businesses/<active>/marketing/campaigns/<slug>/

Próximos passos:
  - Edite brief.md com objetivo, público, oferta, canais.
  - Edite execution.md com plano de execução e cronograma.
  - Após executar, rode /coreaios:campaign-results pra registrar números.
```

## Edge cases

- Pasta já existe → adicione sufixo `-2`, `-3`, etc.
- Sem `active_business` → orientar `/coreaios:setup`.
