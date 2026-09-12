# Padrões de Extração: Squad → Skill

## Padrão 1: Agent → Skill de Expertise

**Quando usar:** O agent tem persona rica com expertise específica e pode operar sozinho.

**O que extrair do agent:**
- Persona e tom de voz → `persona.md` na skill
- Frameworks/metodologias que o agent usa → `frameworks.md`
- Comandos do agent que fazem sentido como skill standalone

**Transformação:**
```
Agent YAML (persona, thinking DNA, voice DNA)
    ↓ extrair expertise core
    ↓ simplificar para uso direto
    ↓ remover dependências de squad
Skill com persona + frameworks como arquivos auxiliares
```

**Exemplo:**
```
Agent: brad-frost.md (Design System expert)
    ↓
Skill: /design-review
    - Persona: especialista em design systems
    - Frameworks: atomic design, component API
    - Input: componente ou página para revisar
    - Output: relatório de review com sugestões
```

**Cuidados:**
- NÃO copiar a persona literalmente (é proprietária)
- EXTRAIR o conhecimento e framework por trás
- ADAPTAR o tom de voz para algo genérico mas eficaz

---

## Padrão 2: Task → Skill de Execução

**Quando usar:** A task tem processo claro com inputs/outputs definidos e pode rodar sem outros agents.

**O que extrair da task:**
- Purpose → description da skill
- Inputs → argument-hint + $ARGUMENTS
- Outputs → formato de saída
- Execution steps → processo da skill
- Acceptance criteria → regras da skill

**Transformação:**
```
Task MD (frontmatter + execution steps)
    ↓ extrair propósito e processo
    ↓ remover dependências de squad (config, outros agents)
    ↓ adaptar inputs para $ARGUMENTS
Skill com processo autocontido
```

**Exemplo:**
```
Task: extract-sop.md (extrai SOP de transcrição)
    ↓
Skill: /extrair-sop
    - Input: transcrição colada ou arquivo
    - Processo: 11 partes do SOP
    - Output: documento SOP estruturado
```

**Cuidados:**
- Tasks com `elicit: true` viram skills interativas (fazem perguntas)
- Tasks que dependem de outros agents NÃO são boas candidatas
- Remover referências a templates/configs internos do squad

---

## Padrão 3: Data → Skill de Framework

**Quando usar:** Arquivo em `data/` contém framework, metodologia ou base de conhecimento que pode ser aplicada diretamente.

**O que extrair:**
- O framework/metodologia em si
- Exemplos de aplicação
- Critérios de decisão

**Transformação:**
```
Data MD (framework documentation)
    ↓ selecionar framework core
    ↓ criar prompt que aplica o framework
    ↓ framework vira arquivo auxiliar da skill
Skill que aplica framework a qualquer input
```

**Exemplo:**
```
Data: decision-heuristics-framework.md
    ↓
Skill: /decidir
    - Input: decisão que precisa tomar
    - Processo: aplica heurísticas do framework
    - Output: análise estruturada com recomendação
```

---

## Padrão 4: Checklist → Skill de Validação

**Quando usar:** Checklist tem critérios objetivos que podem ser aplicados a qualquer input do mesmo tipo.

**O que extrair:**
- Critérios de avaliação
- Sistema de pontuação (se houver)
- Formato de relatório

**Transformação:**
```
Checklist MD (critérios + gates)
    ↓ extrair critérios universais
    ↓ remover critérios específicos do squad
    ↓ criar formato de relatório
Skill de validação com scoring
```

**Exemplo:**
```
Checklist: quality-gate-checklist.md
    ↓
Skill: /quality-check
    - Input: artefato para validar
    - Processo: avalia contra N critérios
    - Output: relatório com nota e gaps
```

---

## Padrão 5: Template → Skill Geradora

**Quando usar:** Template produz artefato útil que o mentorado pode usar diretamente.

**O que extrair:**
- Estrutura do template
- Campos/placeholders
- Exemplos preenchidos

**Transformação:**
```
Template MD (structure + placeholders)
    ↓ converter placeholders em perguntas
    ↓ criar skill que preenche o template
Skill que gera documento completo a partir de inputs
```

---

## Padrão 6: Composta (Agent + Task + Data)

**Quando usar:** O valor real está na combinação de expertise + processo + conhecimento.

**O que extrair:**
- Persona do agent (expertise)
- Processo da task (como fazer)
- Frameworks do data (base teórica)

**Transformação:**
```
Agent expertise + Task process + Data framework
    ↓ combinar em skill única
    ↓ persona no prompt principal
    ↓ framework como arquivo auxiliar
    ↓ processo como etapas da skill
Skill completa e autocontida
```

---

## Anti-Padrões (NÃO Extrair)

| Material | Por que NÃO vira skill |
|----------|----------------------|
| Agent que depende de outros agents | Não funciona sozinho |
| Task com muitas dependências internas | Complexa demais para skill |
| Workflow multi-agent | Precisa de orquestração |
| Config/tech-stack | Muito específico do projeto |
| Changelog/reports | Não tem valor reutilizável |
| Scripts de automação | Dependem do ambiente |

## Checklist de Viabilidade

Antes de sugerir uma skill, confirme:

- [ ] Funciona sozinha? (sem precisar de outros agents)
- [ ] Gera output útil? (não só análise interna)
- [ ] Simples de invocar? (1 comando + 1 argumento)
- [ ] Público entenderia? (vêm do Lovable, não são devs hardcore)
- [ ] Valor imediato? (resultado útil na primeira execução)
