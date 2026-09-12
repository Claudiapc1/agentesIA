# Padrões de Upgrade para Skills

## Padrão 1: Frontmatter Incompleto

**Sintoma:** Campos obrigatórios ausentes ou genéricos.

**Correção:**
- Adicionar campos faltantes
- Reescrever `when-to-use` com palavras-chave específicas
- Encurtar `description` se > 120 chars
- Adicionar `argument-hint` com formato claro

**Exemplo de when-to-use ruim → bom:**
```
# RUIM
when-to-use: "Quando o usuário precisar de ajuda com texto"

# BOM
when-to-use: "Quando pedir copy de vendas, texto persuasivo, headline, CTA, página de captura, email marketing, sequência de emails, carta de vendas, ou VSL script"
```

## Padrão 2: Prompt Sem Estrutura

**Sintoma:** Corpo do SKILL.md é um bloco de texto sem organização clara.

**Correção:**
- Adicionar seções com headers: Persona, Entrada, Processo, Saída, Regras
- Numerar etapas do processo
- Definir formato de saída explicitamente
- Adicionar regras de "NÃO FAZER"

**Estrutura ideal:**
```markdown
# Título — Subtítulo

{Persona em 1-2 frases}

{Referências a arquivos auxiliares}

## Entrada
{Como processar $ARGUMENTS}

## Processo
1. {Etapa 1}
2. {Etapa 2}
...

## Formato de Saída
{Template ou descrição do output}

## Regras
- {Regra 1}
- {Regra 2}
```

## Padrão 3: Sem Arquivos Auxiliares

**Sintoma:** Todo o conhecimento está embutido no SKILL.md, tornando-o longo e inflexível.

**Correção:**
- Extrair frameworks/metodologias para `frameworks.md`
- Extrair exemplos para `exemplos.md`
- Extrair templates para `templates.md`
- Extrair persona/tom de voz para `persona.md`
- Referenciar via `${CLAUDE_SKILL_DIR}/`

**Quando criar cada tipo:**

| Arquivo | Criar quando... |
|---------|----------------|
| `frameworks.md` | A skill segue métodos específicos (AIDA, PAS, jobs-to-be-done, etc.) |
| `exemplos.md` | A qualidade depende de ter referências concretas |
| `templates.md` | O output segue formato padronizado |
| `persona.md` | Tom de voz é crucial (copywriting, atendimento, etc.) |
| `checklist.md` | Há critérios de qualidade a verificar |
| `regras.md` | Regras de domínio são complexas demais para o SKILL.md |

## Padrão 4: allowed-tools Excessivo

**Sintoma:** Lista ferramentas que a skill não usa.

**Correção:**
- Ler o corpo do prompt e identificar quais tools são realmente necessárias
- Remover tools não utilizadas
- Mapear: "lê arquivo" → Read, "escreve arquivo" → Write, "edita" → Edit, etc.

## Padrão 5: Sem Fallback para Args Vazios

**Sintoma:** Se o usuário digita `/skill` sem argumentos, o prompt fica quebrado.

**Correção:** Adicionar no corpo:
```markdown
## Entrada

O usuário pediu: **$ARGUMENTS**

Se nenhum argumento foi fornecido, pergunte ao usuário:
- {Pergunta 1 relevante ao contexto}
- {Pergunta 2}
```

## Padrão 6: Prompt Muito Longo

**Sintoma:** SKILL.md com mais de 200 linhas. Consome contexto excessivamente.

**Correção:**
- Mover conhecimento para arquivos auxiliares
- Manter no SKILL.md apenas: persona, processo, regras essenciais
- Usar `context: "fork"` se a skill for inerentemente complexa

## Padrão 7: when-to-use Sem Cobertura

**Sintoma:** O Claude não sugere a skill quando deveria.

**Correção:**
- Listar todas as formas que o usuário pediria essa funcionalidade
- Incluir sinônimos e variações
- Incluir termos em português e inglês se público misto
- Pensar em palavras-chave implícitas (ex: "landing page" implica "copy de vendas")

**Exercício:** Para cada skill, responda: "De quantas formas diferentes alguém pediria isso?" — cada forma é uma palavra-chave para o when-to-use.

## Padrão 8: Output Não Definido

**Sintoma:** A skill faz algo, mas não fica claro para o Claude como entregar o resultado.

**Correção:** Adicionar seção explícita:
```markdown
## Formato de Saída

Entregue o resultado como:
- {Formato}: {Descrição}
- {Onde salvar}: {Se aplicável}
- {Estrutura}: {Headers, seções, etc.}
```
