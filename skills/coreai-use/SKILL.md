---
name: use
description: >
  Troca o business ativo do Core AIOS. Lista businesses em
  ~/coreaios/businesses/, deixa escolher e atualiza
  ~/coreaios/.config/config.yaml. Acionar quando o usuário disser
  "trocar empresa", "use empresa X", "ativar business", ou /coreaios:use.
---

# Use Business

Troca a empresa ativa.

## Passos

### 1. Listar businesses

```bash
ls "$HOME/coreaios/businesses/" | grep -v '^\.'
```

### 2. Apresentar e pedir escolha

Mostre numerado. Aceite número ou nome direto.

### 3. Atualizar config

```bash
CONF="$HOME/coreaios/.config/config.yaml"
mkdir -p "$(dirname $CONF)"

# Se já existe, atualizar a chave; se não, criar
if [ -f "$CONF" ]; then
  python3 -c "
import yaml
fp='$CONF'
with open(fp) as f: d=yaml.safe_load(f) or {}
d['active_business']='<slug>'
with open(fp,'w') as f: yaml.safe_dump(d,f,allow_unicode=True,sort_keys=False)
"
else
  cat > "$CONF" <<EOF
active_business: <slug>
language: pt-BR
version: 1.0.0
EOF
fi
```

### 4. Confirmar

```
✅ Business ativo: <slug>
Local: ~/coreaios/businesses/<slug>/
```

## Edge cases

- Nenhum business → sugerir `/coreaios:setup`.
- Nome inválido → re-perguntar.
