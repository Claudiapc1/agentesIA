---
description: Cura entradas do session.md para promoção ao CLAUDE.md (memória de longo prazo)
---

# /promote-session

Revisa o `.claude/session.md` e oferece promover decisões/aprendizados importantes para o `CLAUDE.md` da pasta (memória de longo prazo curada).

## Filosofia

- **session.md** = memória de curto prazo (30 dias auto-rotacionados)
- **CLAUDE.md** = memória de longo prazo curada (decisões arquiteturais, contexto de negócio, padrões)

Esta skill faz a ponte: pega o que vale a pena lembrar pra sempre e move pro CLAUDE.md.

## Comportamento

1. Ler `.claude/session.md`
2. Analisar entradas e identificar:
   - Decisões arquiteturais ("decidimos usar X porque Y")
   - Padrões reutilizáveis ("toda vez que X, fazer Y")
   - Contexto de negócio ("cliente Z opera de forma W")
   - Workarounds/aprendizados ("erro comum: ..., solução: ...")
3. Apresentar ao usuário uma lista numerada de candidatos com:
   - Trecho original
   - Sugestão de como ficaria no CLAUDE.md (mais conciso, sem timestamp)
   - Categoria sugerida (Decisões, Padrões, Contexto, Aprendizados)
4. Pedir ao usuário quais aprovar (números ou "todos" / "nenhum")
5. Para cada aprovado: append ao `CLAUDE.md` na seção apropriada (criar seção se não existir)
6. Marcar entradas promovidas no session.md com `[PROMOVIDO → CLAUDE.md]`

## Implementação (orquestração)

1. Ler `$PWD/.claude/session.md` se existir; senão abortar com mensagem
2. Ler `$PWD/CLAUDE.md` se existir (criar template se não)
3. Analisar entradas (último mês) e gerar lista de candidatos
4. Apresentar tabela e pedir seleção
5. Editar CLAUDE.md (append nas seções: ## Decisões, ## Padrões, ## Contexto, ## Aprendizados)
6. Atualizar session.md marcando entradas promovidas

Template inicial CLAUDE.md (se vazio):

```markdown
# CLAUDE.md — Memória de longo prazo curada

## Contexto do projeto

(o que é este projeto, stakeholders, escopo)

## Decisões arquiteturais

(decisões importantes que foram tomadas e o porquê)

## Padrões e convenções

(como fazemos as coisas neste projeto)

## Aprendizados

(erros que cometemos e soluções, gotchas, etc.)
```
