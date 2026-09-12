# Regras de Validação Detalhadas

## Regras de Frontmatter

### name
- DEVE estar em kebab-case: `minha-skill` (não `MinhaSkill`, `minha skill`, `minha_skill`)
- DEVE ser curto (1-3 palavras separadas por hífen)
- DEVE ser descritivo o suficiente para o usuário adivinhar a função
- NÃO DEVE conter caracteres especiais além de hífen

### description
- DEVE ter no máximo 120 caracteres
- DEVE ser autoexplicativa para alguém que nunca viu a skill
- DEVE começar com verbo de ação (Gera, Cria, Analisa, Valida, etc.)
- NÃO DEVE ser genérica (ex: "Uma skill útil" = RUIM)
- PADRÃO: "{Verbo} {o quê} {para quem/qual contexto}"

### when-to-use
- DEVE conter pelo menos 3 situações ou palavras-chave
- DEVE incluir variações de como o usuário pediria (sinônimos)
- DEVE ser específico ao domínio da skill
- PENALIZAR SEVERAMENTE se for genérico como "quando o usuário pedir"
- BOM: "Quando pedir copy de vendas, texto persuasivo, headline, CTA, página de captura, email de lançamento"
- RUIM: "Quando o usuário precisar de texto"

### argument-hint
- DEVE usar colchetes para indicar o que é esperado: `[descrição do produto]`
- DEVE ser claro sobre o formato esperado
- SE aceita múltiplos argumentos, mostrar: `[arg1] [arg2]`
- DEVE dar exemplo concreto quando possível: `[ex: "curso de marketing digital"]`

### allowed-tools
- DEVE listar APENAS as ferramentas que a skill realmente usa
- PENALIZAR se incluir ferramentas não utilizadas (princípio do mínimo privilégio)
- Ferramentas válidas: Read, Write, Edit, Bash, Glob, Grep, WebSearch, WebFetch, Agent
- VERIFICAR se o corpo do prompt realmente precisa de cada tool listada

### user-invocable
- DEVE ser `true` para skills que o usuário invoca diretamente
- Só deve ser `false` para skills internas/auxiliares

## Regras do Corpo/Prompt

### Persona
- DEVE definir claramente quem o Claude "é" nesta skill
- BOM: "Você é um copywriter sênior especializado em direct response com 15 anos de experiência"
- RUIM: "Você vai ajudar o usuário" (genérico demais)
- A persona deve ser relevante para o domínio da skill

### Referência a Arquivos Auxiliares
- DEVE usar `${CLAUDE_SKILL_DIR}/nome.md` (nunca path absoluto)
- DEVE usar instrução explícita: "Leia o arquivo ${CLAUDE_SKILL_DIR}/x.md"
- NÃO PODE referenciar arquivo que não existe na pasta
- VERIFICAR se todos os arquivos da pasta estão referenciados

### Uso de $ARGUMENTS
- DEVE usar `$ARGUMENTS` para processar o input do usuário
- DEVE ter fallback se $ARGUMENTS estiver vazio (pedir ao usuário)
- NÃO DEVE assumir formato específico sem indicar no argument-hint

### Processo/Etapas
- DEVE ter etapas claras e numeradas
- Cada etapa DEVE ter um propósito definido
- A ordem das etapas DEVE fazer sentido lógico
- PENALIZAR instruções vagas como "faça algo bom"

### Formato de Saída
- DEVE definir explicitamente como o resultado é entregue
- Se gera texto: qual formato? (markdown, plain text, HTML?)
- Se gera arquivo: qual nome, extensão, localização?
- Se gera múltiplos outputs: listar cada um

### Regras/Restrições
- DEVE ter pelo menos 2-3 regras explícitas
- Regras de "NÃO FAZER" são tão importantes quanto as de "FAZER"
- DEVE cobrir edge cases previsíveis

## Regras de Arquivos Auxiliares

### Quando são necessários
- Se a skill segue frameworks/metodologias → precisa de `frameworks.md`
- Se a skill precisa de referências de qualidade → precisa de `exemplos.md`
- Se a skill gera output padronizado → precisa de `templates.md`
- Se a skill assume tom de voz específico → precisa de `persona.md`

### Qualidade do conteúdo
- DEVE ter exemplos concretos (não só teoria)
- DEVE ser organizado com headers e listas
- DEVE ser focado (1 arquivo = 1 tema)
- NÃO DEVE ser só um parágrafo genérico
- Mínimo recomendado: 20 linhas de conteúdo útil por arquivo

## Tabela de Penalidades

| Problema | Penalidade |
|----------|------------|
| `when-to-use` ausente | -10 pts |
| `when-to-use` genérico | -7 pts |
| `description` > 120 chars | -3 pts |
| Path hardcoded (não usa CLAUDE_SKILL_DIR) | -5 pts |
| $ARGUMENTS não utilizado | -5 pts |
| Sem persona definida | -3 pts |
| Sem formato de saída | -4 pts |
| Sem regras/restrições | -3 pts |
| Arquivo referenciado não existe | -5 pts (crítico) |
| Tool não utilizada no allowed-tools | -2 pts por tool |
| Sem fallback para args vazios | -3 pts |
