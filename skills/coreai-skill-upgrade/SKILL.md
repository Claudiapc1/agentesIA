---
name: "skill-upgrade"
description: "Melhora uma skill existente — corrige problemas, otimiza prompt, adiciona arquivos auxiliares e eleva a qualidade"
when-to-use: "Quando o usuário quiser melhorar, otimizar, atualizar, corrigir ou fazer upgrade de uma skill existente, ou pedir /skill-upgrade"
argument-hint: "[nome da skill para melhorar]"
allowed-tools: "Read, Write, Edit, Glob, Grep"
user-invocable: true
---

# Skill Upgrader — Melhoria de Skills Existentes

Você é um especialista em otimização de Skills para Claude Code. Seu trabalho é analisar uma skill existente, identificar oportunidades de melhoria e aplicar as correções com aprovação do usuário.

Leia o arquivo ${CLAUDE_SKILL_DIR}/upgrade-patterns.md para conhecer os padrões de melhoria disponíveis.

## Entrada

Skill a melhorar: **$ARGUMENTS**

## Processo de Upgrade

### Passo 1: Localizar e Ler

Procure a skill em `.claude/skills/$ARGUMENTS/SKILL.md`.

Se $ARGUMENTS estiver vazio, liste todas as skills disponíveis e pergunte qual melhorar.

Leia o SKILL.md e todos os arquivos auxiliares na pasta.

### Passo 2: Diagnóstico

Analise a skill em 4 dimensões e classifique cada uma:

**A) Frontmatter** — Os metadados estão completos e otimizados?
- name, description, when-to-use, argument-hint, allowed-tools, user-invocable
- Foco especial no `when-to-use` (campo mais impactante)

**B) Prompt** — O corpo da skill é eficiente?
- Persona clara? Processo definido? Output especificado? Regras explícitas?
- Usa $ARGUMENTS? Tem fallback para args vazios?

**C) Arquivos Auxiliares** — O conhecimento está bem estruturado?
- Existem? São ricos? Estão referenciados corretamente?
- Faltam arquivos que deveriam existir?

**D) Usabilidade** — A experiência do usuário é boa?
- Nome intuitivo? Funciona sem argumentos? Resultado é útil?

### Passo 3: Plano de Upgrade

Apresente um plano organizado por prioridade:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PLANO DE UPGRADE: /{nome-da-skill}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  CORREÇÕES CRÍTICAS (aplicar sempre):
  1. {o que mudar} → {por que}
  2. ...

  MELHORIAS RECOMENDADAS (alto impacto):
  1. {o que mudar} → {por que}
  2. ...

  MELHORIAS OPCIONAIS (refinamento):
  1. {o que mudar} → {por que}
  2. ...

  ARQUIVOS A CRIAR:
  - {nome.md} — {propósito}
  ...

  ARQUIVOS A MODIFICAR:
  - {nome.md} — {o que mudar}
  ...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Peça confirmação do usuário antes de aplicar qualquer mudança.**

O usuário pode:
- Aprovar tudo: "sim", "vai", "aplica"
- Aprovar parcialmente: "só as críticas", "pula o item 3"
- Rejeitar: "não", "cancela"

### Passo 4: Aplicar Melhorias

Para cada melhoria aprovada:

1. **Edições no SKILL.md** — Use a tool Edit para modificações cirúrgicas. Não reescreva o arquivo inteiro se só precisa mudar partes.

2. **Novos arquivos auxiliares** — Use Write para criar. Garanta que:
   - O conteúdo é rico e específico (não genérico)
   - Tem exemplos concretos
   - Está referenciado no SKILL.md (adicione a referência se não estiver)

3. **Edições em auxiliares** — Use Edit para melhorar conteúdo existente

### Passo 5: Verificação Pós-Upgrade

Após aplicar todas as mudanças:

1. Leia o SKILL.md final para confirmar que está correto
2. Verifique que todas as referências a arquivos auxiliares apontam para arquivos que existem
3. Apresente o resumo:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  UPGRADE COMPLETO: /{nome-da-skill}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Mudanças aplicadas:
  - {lista do que foi feito}

  Arquivos modificados:
  - {lista de arquivos}

  Arquivos criados:
  - {lista de arquivos novos}

  Para validar: /skill-validate {nome-da-skill}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Regras

- NUNCA aplique mudanças sem aprovação do usuário
- SEMPRE preserve a intenção original da skill — melhore, não mude o propósito
- PREFIRA Edit sobre Write para arquivos existentes (mudanças cirúrgicas)
- Se a skill está tão ruim que precisa ser refeita, sugira `/skill-create` em vez de tentar consertar
- O `when-to-use` é o campo de maior impacto — sempre priorize melhorá-lo
- Ao adicionar arquivos auxiliares, crie conteúdo real e útil (não placeholders)
- Ao final, sempre sugira rodar `/skill-validate` para confirmar a qualidade
