---
name: context-quick
description: >
  Preenche o contexto essencial da empresa em ~25 perguntas críticas (~10 min).
  Lê banco de perguntas em ~/coreaios/data/questions-quick.json e popula os
  YAMLs em ~/coreaios/businesses/<empresa-ativa>/. Acionar quando o usuário
  disser "context quick", "preencher contexto rápido", "configurar empresa
  rápido", ou /coreaios:context-quick.
---

# Context Quick

Roda ~25 perguntas críticas e popula YAMLs do business ativo.

## Pré-requisitos

- `/coreaios:setup` já rodou.
- `~/coreaios/.config/config.yaml` existe com `active_business`.
- Pasta `~/coreaios/businesses/<active>/` populada com templates.

## Passos

### 1. Carregar config e perguntas

```bash
ACTIVE=$(grep '^active_business:' ~/coreaios/.config/config.yaml | awk '{print $2}')
BIZ="$HOME/coreaios/businesses/$ACTIVE"
```

Leia `~/coreaios/data/questions-quick.json` (array de objetos `{name, file, ypath, q}`).

### 2. Para cada pergunta

- Apresente `q` ao usuário.
- Aguarde resposta (string).
- Se vazia, pular (não escrever).
- Caso contrário, escrever em `$BIZ/<file>` no caminho dotted `<ypath>` (criar arquivo/keys se faltarem).

Para escrita YAML, use Python inline ou `yq` se disponível:

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

Pode coletar todas as 25 respostas no chat (uma por vez) e escrever de uma só vez no final.

### 4. Resumo final

Mostre quantas perguntas foram respondidas, qual a completude estimada (%), e sugira:

```
Próximo passo:
  /coreaios:context-deep    → preencher contexto completo (~210 perguntas)
  /coreaios:context-enrich  → enriquecer com dados públicos (scrape + research)
```

## Edge cases

- Sem `active_business` → rodar `/coreaios:setup` primeiro.
- YAML target inexistente → criar com estrutura mínima.
- Resposta inválida (ex: número onde esperava string) → aceitar mesmo assim, registrar como string.
