# Template settings.json do Claude Code

Use este template para criar ou atualizar o arquivo `~/.claude/settings.json` do usuario. Este arquivo controla permissoes, plugins, idioma e comportamento global do Claude Code.

---

## Template

```json
{
  "permissions": {
    "allow": [
      "Read(**/*)",
      "Write(**/*)",
      "Edit(**/*)",
      "Bash",
      "WebFetch",
      "WebSearch",
      "Task",
      "Glob",
      "Grep",
      "NotebookEdit",
      "Skill(*)",
      "mcp__context7__*"
    ],
    "deny": [
      "Bash(rm -rf /)",
      "Bash(rm -rf ~)",
      "Bash(rm -rf /*)",
      "Bash(sudo rm -rf:*)",
      "Bash(mkfs:*)",
      "Bash(dd if=/dev/zero:*)",
      "Bash(chmod -R 777 /)"
    ],
    "defaultMode": "bypassPermissions",
    "additionalDirectories": [
      "~"
    ]
  },
  "enableAllProjectMcpServers": true,
  "enabledPlugins": {
    "context7@claude-plugins-official": true,
    "playwright@claude-plugins-official": true,
    "supabase@claude-plugins-official": true
  },
  "outputStyle": "default",
  "language": "portuguese",
  "alwaysThinkingEnabled": false,
  "effortLevel": "medium",
  "promptSuggestionEnabled": false,
  "skipDangerousModePermissionPrompt": true,
  "skipAutoPermissionPrompt": true
}
```

---

## Explicacao de Cada Campo

### permissions.allow
Ferramentas que o Claude pode usar sem pedir confirmacao:
- `Read/Write/Edit(**/**)` — ler, escrever e editar qualquer arquivo
- `Bash` — executar comandos no terminal
- `WebFetch/WebSearch` — acessar internet
- `Task/Glob/Grep` — ferramentas de busca e gerenciamento
- `Skill(*)` — executar qualquer skill
- `mcp__context7__*` — documentacao de bibliotecas

### permissions.deny
Comandos BLOQUEADOS por seguranca (nunca podem ser executados):
- `rm -rf /`, `rm -rf ~` — destruir sistema
- `mkfs`, `dd if=/dev/zero` — formatar disco
- `chmod -R 777 /` — remover permissoes de seguranca

### defaultMode
- `bypassPermissions` — o Claude executa sem pedir confirmacao (mais fluido)
- `ask` — pede confirmacao para cada acao (mais seguro)
- `explore` — apenas leitura

### enabledPlugins
Plugins ativados por padrao:
- `context7` — consulta documentacao atualizada de bibliotecas
- `playwright` — automacao de browser, testes de UI
- `supabase` — integracao com Supabase

### language
- `"portuguese"` — todas as respostas em portugues brasileiro

### effortLevel
- `"medium"` — balanco entre qualidade e velocidade de resposta

### Flags de conveniencia
- `skipDangerousModePermissionPrompt: true` — nao pergunta ao trocar para modo perigoso
- `skipAutoPermissionPrompt: true` — nao pergunta ao trocar para modo auto
- `alwaysThinkingEnabled: false` — thinking desligado por padrao (ativar quando necessario)
- `promptSuggestionEnabled: false` — desliga sugestoes automaticas de prompt

---

## Plugins Opcionais

Adicione conforme necessidade:

```json
{
  "figma@claude-plugins-official": true,
  "telegram@claude-plugins-official": true,
  "claude-mem@thedotmack": true
}
```

Se usar `claude-mem` (memoria persistente), adicione tambem:

```json
{
  "extraKnownMarketplaces": {
    "thedotmack": {
      "source": {
        "source": "github",
        "repo": "thedotmack/claude-mem"
      }
    }
  }
}
```
