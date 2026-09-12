# Anatomia de um Squad — Referência para Extração

## Estrutura de Diretórios de um Squad

```
squad-name/
├── README.md              # Visão geral, propósito, links
├── agents/                # Personas de agentes
│   ├── agent-1.md         # Agent com YAML: persona, expertise, commands
│   └── agent-2.md
├── tasks/                 # Workflows executáveis
│   ├── task-1.md          # Task com frontmatter: inputs, outputs, steps
│   └── task-2.md
├── checklists/            # Critérios de validação
│   ├── checklist-1.md     # Lista de verificação com gates
│   └── checklist-2.md
├── data/                  # Knowledge base
│   ├── framework-1.md     # Frameworks, heurísticas, best practices
│   └── reference-1.md
├── templates/             # Modelos de output
│   ├── template-1.md      # Templates com placeholders
│   └── template-2.md
├── workflows/             # Processos multi-step
│   ├── workflow-1.md       # Sequência de tasks/agents
│   └── workflow-2.md
├── config/                # Configurações técnicas
│   ├── tech-stack.md
│   └── coding-standards.md
├── docs/                  # Documentação
│   └── *.md
└── scripts/               # Automações
    └── *.js
```

## Formato de Agent

```yaml
# Dentro de um bloco YAML no .md do agent:
agent:
  name: nome-do-agent
  role: Papel principal
  expertise: [lista, de, áreas]
  persona:
    tone: Tom de voz
    style: Estilo de comunicação
  commands:
    - name: comando-1
      description: O que faz
      dependency: tasks/task-1.md
    - name: comando-2
      description: O que faz
```

**O que importa para extração:**
- `role` e `expertise` → Define a persona da skill
- `commands` → Cada comando pode ser uma skill candidata
- `persona.tone` e `persona.style` → Tom de voz da skill

## Formato de Task

```yaml
---
task: Nome da Task
responsavel: "@agent-name"
atomic_layer: task
elicit: true/false
phase: discovery/creation/validation
templates:
  - template-name
config:
  - config-name
---

# Título

## Purpose
O que a task faz

## Inputs
| Input | Type | Required | Description |
...

## Outputs
| Output | Type | Description |
...

## Execution
Steps numerados...

## Acceptance Criteria
- Critério 1
- Critério 2
```

**O que importa para extração:**
- `Purpose` → `description` da skill
- `Inputs` → `argument-hint` e como processar `$ARGUMENTS`
- `Outputs` → Formato de saída da skill
- `Execution` → Processo/etapas da skill
- `elicit: true` → Skill será interativa (faz perguntas)
- `templates` → Pode virar arquivo auxiliar

## Formato de Checklist

```markdown
# Nome do Checklist

## Critérios
- [ ] Critério 1 — Descrição
- [ ] Critério 2 — Descrição
...

## Gates
| Gate | Condição | Ação se falhar |
...
```

**O que importa para extração:**
- Critérios → Regras de validação da skill
- Gates → Condições de bloqueio
- Sistema de pontuação (se houver)

## Formato de Data/Framework

```markdown
# Nome do Framework

## Princípios
...

## Como Aplicar
1. Passo 1
2. Passo 2
...

## Exemplos
...
```

**O que importa para extração:**
- O framework inteiro → Vira arquivo auxiliar da skill
- Exemplos → Essenciais para qualidade da skill

## Prioridade de Leitura na Análise

1. **README.md** primeiro — entender propósito geral
2. **agents/** segundo — mapear expertises disponíveis
3. **tasks/** terceiro — identificar processos extraíveis
4. **data/** quarto — frameworks e knowledge base
5. **checklists/** quinto — validações reutilizáveis
6. **templates/** por último — modelos de output
