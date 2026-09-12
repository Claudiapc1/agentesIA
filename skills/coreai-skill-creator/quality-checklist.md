# Checklist de Qualidade para Skills

Use este checklist para avaliar a qualidade de uma skill antes de finalizá-la.

## Frontmatter (40 pontos)

| # | Critério | Pts | Verificação |
|---|----------|-----|-------------|
| 1 | `name` presente e em kebab-case | 5 | Sem espaços, sem maiúsculas, sem caracteres especiais |
| 2 | `description` presente, clara e ≤120 chars | 5 | Alguém que nunca viu a skill entende o que faz? |
| 3 | `when-to-use` presente com palavras-chave específicas | 10 | Lista pelo menos 3 situações/palavras-gatilho? |
| 4 | `argument-hint` presente e útil | 5 | O usuário sabe o que digitar depois do /comando? |
| 5 | `allowed-tools` presente e mínimo | 5 | Só as tools realmente necessárias? Nada a mais? |
| 6 | `user-invocable: true` definido | 5 | O usuário pode invocar com /? |
| 7 | Campos não tem erros de digitação | 5 | Nomes de campos corretos (kebab-case)? |

## Prompt / Corpo (35 pontos)

| # | Critério | Pts | Verificação |
|---|----------|-----|-------------|
| 8 | Persona/papel definido no início | 5 | O Claude sabe "quem ele é" nesta skill? |
| 9 | `$ARGUMENTS` usado para receber input | 5 | A skill processa o que o usuário passou? |
| 10 | Processo claro com etapas numeradas | 5 | Tem passo-a-passo? Ou é vago? |
| 11 | Formato de saída definido | 5 | O Claude sabe como entregar o resultado? |
| 12 | Regras/restrições explícitas | 5 | Tem limites claros do que fazer e NÃO fazer? |
| 13 | Instruções sem ambiguidade | 5 | Cada instrução tem apenas uma interpretação? |
| 14 | Exemplos de output quando relevante | 5 | O Claude tem referência visual do resultado? |

## Arquivos Auxiliares (15 pontos)

| # | Critério | Pts | Verificação |
|---|----------|-----|-------------|
| 15 | Referenciados via `${CLAUDE_SKILL_DIR}/` | 5 | Nenhum path absoluto ou relativo hardcoded? |
| 16 | Conteúdo rico e específico | 5 | Tem exemplos concretos, não só teoria? |
| 17 | Focados (1 arquivo = 1 aspecto) | 5 | Cada arquivo tem propósito claro e distinto? |

## Usabilidade (10 pontos)

| # | Critério | Pts | Verificação |
|---|----------|-----|-------------|
| 18 | Nome da skill é intuitivo | 5 | O usuário adivinha o que faz pelo nome? |
| 19 | Funciona sem argumentos (graceful) | 5 | Se o usuário não passar args, a skill pede? Não quebra? |

## Pontuação

| Faixa | Classificação | Ação |
|-------|--------------|------|
| 90-100 | Excelente | Pronta para uso |
| 75-89 | Boa | Pequenos ajustes recomendados |
| 60-74 | Regular | Precisa de melhorias antes de entregar |
| < 60 | Insuficiente | Requer reconstrução significativa |
