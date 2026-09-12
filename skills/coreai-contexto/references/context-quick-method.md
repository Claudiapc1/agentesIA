---
name: context-quick
description: >
  Preenche o contexto essencial da empresa em ~25 perguntas críticas (~10 min).
  Lê o banco de perguntas em <CONTEXT_ROOT>/data/questions-quick.json e popula os
  YAMLs em <CONTEXT_ROOT>/businesses/<empresa-ativa>/context/. Acionar
  quando o usuário disser "context quick", "preencher contexto rápido",
  "configurar empresa rápido", ou /context-quick.
---

# Context Quick

Roda ~25 perguntas críticas e popula os YAMLs do business ativo. As perguntas
aparecem em português; os campos gravados nos YAMLs têm chaves em inglês
(estrutura técnica padronizada).

## Pré-requisitos

- `/context-create` já rodou (cria `<CONTEXT_ROOT>/` com `config.yaml`, `data/` e
  o workspace do business via `*add-business`).
- `<CONTEXT_ROOT>/config.yaml` existe com `active_business`.
- Pasta `<CONTEXT_ROOT>/businesses/<active>/` populada com os templates.

## Passos

### 1. Carregar config e perguntas

```bash
ACTIVE=$(grep '^active_business:' <CONTEXT_ROOT>/config.yaml | awk '{print $2}')
BIZ="$HOME/context-os/workspace/businesses/$ACTIVE"
```

Leia `<CONTEXT_ROOT>/data/questions-quick.json` (array de objetos
`{name, file, ypath, q, type?}`). O campo `q` está em português (texto exibido
ao aluno); `file` e `ypath` apontam para a estrutura EN do YAML.

### 2. Para cada pergunta

- Apresente `q` ao usuário (em português).
- Aguarde resposta.
- Se vazia, pular (não escrever).
- Caso contrário, escrever em `$BIZ/<file>` no caminho dotted `<ypath>`
  (criar arquivo/keys se faltarem).
- Respeitar `type`: `number` → gravar como número; `list` → gravar como lista
  (separar a resposta por vírgula se o usuário listar vários itens).

Para escrita YAML, use Python inline:

```bash
python3 -c "
import yaml, sys, os
fp, ypath, val = sys.argv[1], sys.argv[2], sys.argv[3]
data = {}
if os.path.exists(fp):
    with open(fp) as f: data = yaml.safe_load(f) or {}
keys = ypath.split('.')
d = data
for k in keys[:-1]:
    d = d.setdefault(k, {})
d[keys[-1]] = val
with open(fp, 'w') as f: yaml.safe_dump(data, f, allow_unicode=True, sort_keys=False)
" "$BIZ/$file" "$ypath" "$resposta"
```

### 3. Modo batch (opcional, mais ágil)

Pode coletar todas as 25 respostas no chat (uma por vez) e escrever de uma só
vez no final.

### 4. Resumo final

Mostre quantas perguntas foram respondidas, a completude estimada (%), e sugira:

```
Próximo passo:
  /context-deep    → preencher contexto completo (~92 perguntas, pause/resume)
  /context-enrich  → enriquecer com dados públicos (scrape + research)
```

## Edge cases

- Sem `active_business` → rodar `/context-create` primeiro (bootstrap + business).
- YAML target inexistente → criar com estrutura mínima.
- Resposta inválida (ex: texto onde esperava número) → aceitar mesmo assim,
  registrar do jeito mais fiel possível (number quando parsear, senão string).
