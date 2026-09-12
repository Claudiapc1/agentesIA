# Template CLAUDE.md Global

Use este template para criar o arquivo `~/.claude/CLAUDE.md` do usuario. Este arquivo configura o comportamento do Claude Code em TODAS as sessoes, independente do projeto.

---

## Template

```markdown
# Instrucoes Globais do Claude Code

Estas instrucoes se aplicam a TODAS as sessoes do Claude Code, independente do projeto.

## Idioma

- Responda SEMPRE em portugues brasileiro.
- Termos tecnicos e identificadores de codigo permanecem em ingles.
- Todo conteudo visivel ao usuario (UI, mensagens, docs) deve estar em portugues brasileiro.

## Modo de Trabalho

- Para tarefas com 3 ou mais etapas, planeje antes de executar.
- Se algo der errado, PARE e replaneje — nao continue insistindo no mesmo caminho.
- Elabore o plano antes de implementar para reduzir ambiguidade.
- Use subagentes para pesquisa e exploracao, mantendo o contexto principal limpo.

## Verificacao

- Nunca marque uma tarefa como concluida sem comprovar que funciona.
- Execute testes, verifique logs e demonstre a correcao.
- Pergunte a si mesmo: "Isso esta correto e completo?"

## Qualidade de Codigo

- Escreva codigo limpo e auto-documentado.
- Siga os padroes existentes no projeto.
- Nunca hardcode secrets/tokens — use variaveis de ambiente.
- Nunca commite .env com credenciais reais.
- Verifique se imports/modulos existem antes de usar.

## Fechamento

- SEMPRE termine trabalho com resumo do que foi feito e proximo passo recomendado.
- O resumo deve ser conciso: o que mudou, arquivos, status.
- O proximo passo deve ser acionavel.
- Se nao houver proximo passo: "Nada pendente."

## Economia de Tokens

- Use subagentes para tarefas exploratorias (grep, leitura de diretorios).
- Especifique linhas ao ler arquivos grandes ("Leia linhas 80-150").
- Nunca leia package-lock.json ou schemas grandes inteiros.
- /compact ao trocar de subtarefa. /clear ao trocar de assunto.

## Comportamentos Obrigatorios

- Quando pedido para rodar dev server, execute imediatamente. NAO explore o codebase primeiro.
- NAO expanda o escopo alem do pedido. Se pediu para corrigir um bug, corrija apenas esse bug.
- Para deploys Vercel: `vercel --prod --yes`

## Licoes Aprendidas

- **Soft delete:** Verificar se tabela tem coluna deleted_at antes de filtrar.
- **Dependencias opcionais:** Redis, Sentry, APIs externas devem ter graceful degradation.
- **Secrets:** Variaveis de ambiente com throw em producao, fallback em dev.
- **Migrations:** Verificar naming sequencial. Nunca DROP sem IF EXISTS.
- **DB via CLI:** Usar CLI oficial do provider, NUNCA pedir para abrir SQL Editor no dashboard.

## Principios

### Simplicidade em primeiro lugar
Simplifique ao maximo cada alteracao e minimize o impacto no codigo.

### Sem preguica
Identifique causas principais. Evite solucoes temporarias.
```
