# Referência Técnica do Motor de Skills — Claude Code

Este documento contém o conhecimento técnico de como o motor de skills do Claude Code funciona internamente. Use estas informações para construir skills otimizadas.

## Como o Motor Carrega Skills

1. O Claude Code escaneia `.claude/skills/` (projeto) e `~/.claude/skills/` (global)
2. Cada subdiretório com `SKILL.md` é registrado como uma skill
3. O frontmatter YAML é parseado para extrair metadados
4. O conteúdo markdown se torna o prompt injetado na conversa

## Campos do Frontmatter

| Campo | Tipo | Obrigatório | Função |
|-------|------|-------------|--------|
| `name` | string | Sim | Identificador da skill |
| `description` | string | Sim | Exibida na listagem (max ~120 chars) |
| `when-to-use` | string | Recomendado | O Claude lê isso para decidir quando sugerir a skill automaticamente |
| `argument-hint` | string | Recomendado | Mostra ao usuário o que passar como argumento |
| `allowed-tools` | string/array | Não | Restringe quais tools a skill pode usar |
| `model` | string | Não | Força modelo específico (ex: "claude-opus-4-6") |
| `context` | "inline"/"fork" | Não | inline=expande na conversa, fork=roda em sub-agente isolado |
| `agent` | string | Não | Tipo de sub-agente (só para context: fork) |
| `user-invocable` | boolean | Não | Se o usuário pode invocar manualmente com / |
| `disable-model-invocation` | boolean | Não | Se true, o Claude não pode invocar sozinho |
| `paths` | string/array | Não | Skill só ativa após editar arquivos que casam com o glob |
| `effort` | string/number | Não | Nível de esforço (1-5 ou "high"/"low") |
| `version` | string | Não | Versão da skill |

## Substituições Automáticas no Corpo

| Placeholder | Substituído por |
|-------------|-----------------|
| `$ARGUMENTS` | Texto que o usuário passou após o nome da skill |
| `${CLAUDE_SKILL_DIR}` | Caminho absoluto da pasta da skill |
| `${CLAUDE_SESSION_ID}` | ID da sessão atual |

## Ferramentas Disponíveis (allowed-tools)

| Tool | O que faz | Quando usar |
|------|-----------|-------------|
| `Read` | Lê arquivos do disco | Carregar referências, analisar código existente |
| `Write` | Cria/sobrescreve arquivos | Gerar outputs como arquivos |
| `Edit` | Edita arquivos existentes | Modificar código/texto existente |
| `Bash` | Executa comandos shell | Git, npm, abrir browser, processar dados |
| `Glob` | Busca arquivos por padrão | Encontrar arquivos por nome/extensão |
| `Grep` | Busca conteúdo em arquivos | Encontrar texto/código específico |
| `WebSearch` | Pesquisa na internet | Buscar referências, tendências, dados |
| `WebFetch` | Acessa URLs | Baixar conteúdo de páginas específicas |
| `Agent` | Cria sub-agentes | Tarefas paralelas ou isoladas |

## Contexto Inline vs Fork

### Inline (padrão)
- O prompt da skill é expandido diretamente na conversa
- Tem acesso a todo o contexto da conversa
- Bom para: skills rápidas, que precisam do contexto atual
- Custo: consome tokens do contexto principal

### Fork
- Roda em sub-agente com contexto isolado
- Não vê a conversa anterior
- Bom para: skills pesadas, que processam muito
- Retorna: apenas o resultado final para o contexto principal

## Budget de Listagem

O motor aloca ~1% da janela de contexto para listar skills disponíveis. Por isso:
- `description` deve ser curta e informativa
- `when-to-use` é o campo mais importante para descoberta automática
- Skills demais diluem a atenção — cada skill deve ter propósito claro

## Arquivos Auxiliares

Arquivos `.md` na mesma pasta da skill podem ser carregados com:
```
Leia o arquivo ${CLAUDE_SKILL_DIR}/nome-do-arquivo.md
```

O motor NÃO carrega esses arquivos automaticamente — só quando o prompt da skill instrui explicitamente a leitura. Isso é uma vantagem: o conhecimento só ocupa contexto quando realmente necessário.

## Dicas de Otimização

1. **Frontmatter preciso** > prompt longo — o motor usa frontmatter para decidir, não o corpo
2. **Arquivos auxiliares** para knowledge — mantém o SKILL.md limpo e o contexto leve
3. **`when-to-use` com palavras-chave** — pense em todas as formas que o usuário pediria isso
4. **`allowed-tools` mínimo** — só as tools que realmente precisa, evita riscos
5. **`context: fork`** para skills que leem muitos arquivos ou processam muito
