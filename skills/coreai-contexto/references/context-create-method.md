---
name: context-create
description: "ContextOS - Sistema operacional de contexto empresarial. Bootstrap unico (init + add-business): constroi o ContextOS em <CONTEXT_ROOT>/ e popula a empresa em <CONTEXT_ROOT>/businesses/<slug>/context/ com todos os templates (perfil, DNA da marca, design system, ICP, pricing, cultura, produtos, inteligencia). Tambem instala o banco de perguntas em <CONTEXT_ROOT>/data/ usado por /context-quick e /context-deep. Suporta multiplas empresas. Usar quando o usuario quer configurar/iniciar o contexto da sua empresa, fazer o setup do ContextOS, adicionar uma nova empresa, ou popular informacoes de negocio."
---

# ContextOS - Sistema Operacional de Contexto

Sistema que constroi e gerencia o contexto completo de empresas. Coleta, organiza e disponibiliza todas as informacoes de negocio para que agentes, skills e squads tenham contexto rico ao executar qualquer tarefa.

> **Base autossuficiente:** todo o ContextOS vive em `<CONTEXT_ROOT>/` (no home do usuario), independente da pasta onde o Claude Code foi aberto. Esta skill e o **bootstrap unico** do sistema: ela faz o papel de setup inicial (cria a estrutura + instala o banco de perguntas) e tambem a gestao multi-empresa. Depois dela, use `/context-quick`, `/context-deep` e `/context-enrich` para preencher o contexto.

> **Padrao de idioma:** as chaves dos YAMLs sao em **ingles** (estrutura tecnica padronizada, ex: `company_essence.trade_name`). As perguntas exibidas ao usuario (em `/context-quick` e `/context-deep`) sao em **portugues**.

## Quando Usar

- Usuario quer configurar o contexto da sua empresa
- Usuario quer adicionar uma nova empresa ao workspace
- Usuario precisa popular informacoes de negocio (perfil, marca, ICP, pricing)
- Usuario precisa de um design system documentado
- Usuario quer registrar reunioes, decisoes e inteligencia acumulada
- Qualquer agente ou squad precisa consultar dados de contexto de uma empresa

## Comandos

| Comando | Descricao |
|---------|-----------|
| `*init` | Inicializa o ContextOS no workspace (cria estrutura raiz) |
| `*add-business {slug}` | Adiciona nova empresa com scaffold completo de templates |
| `*setup-context {slug}` | Pipeline interativo de 6 fases para coletar contexto completo |
| `*set-active {slug}` | Define empresa ativa (consultada por outros agentes/squads) |
| `*status` | Mostra dashboard de completeness de todas as empresas |
| `*health-check` | Auditoria de integridade do workspace |

## Estrutura do ContextOS

```
<CONTEXT_ROOT>/
├── config.yaml              # Config global + empresa ativa + lista de empresas
├── user.yaml                # Identidade do dono (nome, role, preferencias)
│
├── data/                    # Bancos de perguntas (instalados no *init)
│   ├── questions-quick.json # 25 perguntas essenciais (usado por /context-quick)
│   └── questions-deep.json  # 92 perguntas em 9 fases (usado por /context-deep)
│
├── dashboard/               # Painel de controle
│   ├── overview.yaml        # Snapshot consolidado
│   └── health-report.yaml   # Ultima auditoria
│
├── skills/  agents/  squads/   # Registries compartilhados (todas as empresas)
│
└── workspace/
    └── businesses/          # Separacao por empresa
        └── {slug}/
            ├── context/         # Perfil completo (company-profile, founder-dna, icp, brand, pricing, team, credentials, diagnosis, authority-story, tech-stack, ai-strategy)
            ├── brand-dna/       # DNA da marca
            ├── design-system/   # DS - Design System
            ├── products/        # Produtos
            ├── culture/         # Cultura organizacional
            ├── operations/      # Operacoes
            ├── intelligence/    # Memoria e inteligencia acumulada
            └── evidence/        # Rastreabilidade e fontes
```

## Escopo por Empresa vs Compartilhado

| Recurso | Escopo | Logica |
|---------|--------|--------|
| `skills/` | Global | Todas as empresas compartilham |
| `agents/` | Global | Agentes sabem qual empresa esta ativa |
| `squads/` | Global | Recebem contexto da empresa ativa |
| `context/` | Por empresa | Dados isolados por empresa |
| `brand-dna/` | Por empresa | DNA de marca unico |
| `design-system/` | Por empresa | DS unico por empresa |
| `products/` | Por empresa | Produtos pertencem a uma empresa |
| `intelligence/` | Por empresa | Memoria e reunioes por empresa |

## Workflow: *init

Inicializacao do ContextOS no workspace.

### Pre-condicoes
- Nenhuma (a base `<CONTEXT_ROOT>/` e criada do zero)

### Execucao

Rodar o script `scripts/init-context-os.sh` (base default `~/context-os`):

```bash
bash "${CLAUDE_SKILL_DIR}/scripts/init-context-os.sh"
```

O script:
1. Cria `<CONTEXT_ROOT>/` com `config.yaml`, `user.yaml`, `data/`, `dashboard/`, `skills/ agents/ squads/` e `workspace/businesses/`.
2. **Instala o banco de perguntas** copiando `data/questions-quick.json` e `data/questions-deep.json` para `<CONTEXT_ROOT>/data/` (deixa o sistema autossuficiente).
3. Cria registries vazios e placeholders de dashboard.

Depois do script, elicitar nome/role/preferencias do usuario e preencher `<CONTEXT_ROOT>/user.yaml`.

### Output
- `<CONTEXT_ROOT>/config.yaml`, `<CONTEXT_ROOT>/user.yaml`
- `<CONTEXT_ROOT>/data/questions-{quick,deep}.json`
- Diretorios compartilhados + `workspace/businesses/` criados

## Workflow: *add-business {slug}

Adiciona nova empresa ao ContextOS com scaffold completo.

### Pre-condicoes
- ContextOS inicializado (`config.yaml` existe)
- Slug unico (snake_case, sem espacos)

### Execucao

Rodar o script `scripts/add-business.sh <slug>` (base default `~/context-os`):

```bash
bash "${CLAUDE_SKILL_DIR}/scripts/add-business.sh" <slug>
```

O script valida o slug, cria `<CONTEXT_ROOT>/businesses/{slug}/` com todos os subdiretorios e copia os templates YAML. Depois, registrar a empresa em `<CONTEXT_ROOT>/config.yaml` (`registered_businesses` + `active_business`).

### Templates Copiados (por empresa)

**context/** (11 arquivos):
- company-profile.yaml, founder-dna.yaml, credentials.yaml, icp.yaml, brand.yaml, pricing.yaml, team.yaml, diagnosis.yaml, authority-story.yaml, tech-stack.yaml, ai-strategy.yaml

**brand-dna/** (5 arquivos):
- voice.yaml, visual-identity.yaml, archetype.yaml, positioning.yaml, manifesto.yaml

**design-system/** (4 arquivos):
- tokens.yaml, components.yaml, patterns.yaml, guidelines.yaml

**culture/** (4 arquivos):
- values.yaml, pillars.yaml, commandments.yaml, hiring-criteria.yaml

**operations/** (3 arquivos):
- kpis.yaml, processes.yaml, tech-stack.yaml

**evidence/** (3 arquivos):
- completeness.yaml, source-registry.yaml, etl-history.yaml

### Output
- Diretorio completo da empresa em `<CONTEXT_ROOT>/businesses/{slug}/` com 30 templates YAML
- `config.yaml` atualizado

### Proximo passo (preenchimento)

Depois de `*add-business`, oriente o usuario:

```
Proximas skills para preencher o contexto:
  /context-quick   → 25 perguntas essenciais (~10 min)
  /context-deep    → 92 perguntas completas em 9 fases (pause/resume)
  /context-enrich  → enriquece com dados publicos (scrape + research)
```

## Workflow: *setup-context {slug}

Pipeline interativo de 6 fases para coletar o contexto completo da empresa. Baseado no business-profile-pipeline do workspace squad, adaptado para o ContextOS.

### Pre-condicoes
- Empresa adicionada via `*add-business`
- Templates scaffolded

### Fases

#### Fase 0: Pre-Flight (~2 min)
- Validar empresa existe e templates estao scaffolded
- Carregar contexto parcial (se resumindo de pausa anterior)
- Apresentar visao geral das 6 fases

#### Fase 1: Formulario Basico (~15 min)
**Metodo:** FORM (respostas curtas e diretas)
**Coleta:** Essencia da empresa, missao, visao basica
**Output:** `context/company-profile.yaml` (parcial, ~35%)
**Gate:** Secao company_essence COMPLETE

#### Fase 2: Deep Dive Fundador (~40 min)
**Metodo:** INTERVIEW (conversacional, profundo)
**Coleta:** Historia de origem (4 atos), credenciais, background profissional
**Output:** `context/founder-dna.yaml` + `context/credentials.yaml`
**Gate:** founder-dna.yaml >= 85% completeness

#### Fase 3: Empresa + Time (~30 min)
**Metodo:** INTERVIEW + FORM
**Coleta:** Company profile completo, estrutura do time, metricas
**Output:** `context/company-profile.yaml` (completo) + `context/team.yaml`
**Gate:** company-profile.yaml >= 85% completeness

#### Fase 4: ICP Completo (~30 min)
**Metodo:** INTERVIEW
**Coleta:** Demographics, psychographics, pain stack (3 niveis), arquetipos, triggers
**Output:** `context/icp.yaml` + `context/diagnosis.yaml`
**Gate:** icp.yaml >= 85% completeness

**Inclui Diagnosis Gate:**
- market_awareness_level (1-5)
- market_sophistication_stage (1-5)

#### Fase 5: Brand + Pricing (~25 min)
**Metodo:** INTERVIEW + FORM
**Coleta:** DNA da marca, personalidade (escalas 1-10), voice DNA, pricing psychology
**Output:** `context/brand.yaml` + `context/pricing.yaml`
**Gate:** brand.yaml >= 85% completeness

**Apos conclusao, propagar dados de marca para brand-dna/:**
- Extrair voice DNA -> `brand-dna/voice.yaml`
- Extrair archetype -> `brand-dna/archetype.yaml`
- Extrair positioning -> `brand-dna/positioning.yaml`

#### Fase 6: Enriquecimento + Validacao (~10 min, automatizado)
**Metodo:** SYNTHESIZED (sem input do usuario)
**Acoes automaticas:**
1. Cross-reference ICP <-> Company Profile (verificar alinhamento)
2. Cross-reference Brand <-> Founder DNA (verificar coerencia)
3. Gerar `context/authority-story.yaml` (sintese automatica)
4. Calcular completeness global
5. Produzir relatorio

**Output:** `context/authority-story.yaml` + `evidence/completeness.yaml`
**Gate Final:** Todos os 7 YAMLs core >= 85%

### Pause/Resume
- Responder "pausar" em qualquer gate suspende o pipeline
- Executar `*setup-context {slug}` novamente detecta progresso parcial e oferece retomar

## Workflow: *set-active {slug}

1. Validar que empresa existe em `config.yaml`
2. Atualizar `config.yaml` com `active_business: {slug}`
3. Confirmar: "Empresa ativa: {nome} ({slug})"

## Workflow: *status

1. Ler `config.yaml` para listar empresas
2. Para cada empresa, calcular completeness de cada YAML core
3. Apresentar dashboard:

```
╔══════════════════════════════════════════╗
║         ContextOS Dashboard              ║
╠══════════════════════════════════════════╣
║ Empresa Ativa: torriani                    ║
╠══════════════════════════════════════════╣
║ torriani          ████████░░ 82%           ║
║   Company Profile  ██████████ 95%        ║
║   Founder DNA      █████████░ 90%        ║
║   ICP              ████████░░ 80%        ║
║   Brand            █████████░ 88%        ║
║   Pricing          ██████░░░░ 65%        ║
║   Team             ████████░░ 78%        ║
║   Design System    ██░░░░░░░░ 20%        ║
╠══════════════════════════════════════════╣
║ meu-ecommerce    ███░░░░░░░ 30%          ║
║   (setup incompleto)                     ║
╚══════════════════════════════════════════╝
```

## Workflow: *health-check

1. Validar estrutura de diretorios (todos os subdirs existem)
2. Validar sintaxe YAML de todos os arquivos
3. Verificar campos placeholder nao preenchidos (FILL_THIS, TBD, null, "")
4. Verificar consistencia cross-reference (ICP <-> Company Profile)
5. Apresentar relatorio de saude

## Completeness Engine

### Calculo de Completeness

Para cada YAML:
1. Contar campos totais (excluindo metadata)
2. Contar campos preenchidos (excluindo placeholders)
3. Formula: `(preenchidos / total) * 100`

### Valores Considerados Placeholder (nao preenchidos)
- `null`, `""`, `~`, `"null"`
- `FILL_THIS`, `TBD`, `TODO`, `INCOMPLETE`, `PREENCHER`, `N/A`
- Regex: `^FILL[_ ]?`, `^TODO:`, `^TBD:`
- Arrays vazios `[]`, objetos vazios `{}`
- NOTA: `0` e `false` sao valores REAIS, nao placeholders

### Gates
- `< 85%`: Nao pode avancar para proxima fase (pode pausar)
- `>= 85%`: Gate passa, proxima fase liberada
- `100%`: Contexto validavel contra analytics

## Intelligence Layer

### Registrar Reuniao

Ao registrar uma reuniao ou interacao importante:

```yaml
# intelligence/meetings/YYYY-MM-DD-{topic}.yaml
date: "2026-04-03"
type: kickoff | followup | strategy | review
participants:
  - nome
duration: 60min
topics:
  - Topico discutido
decisions:
  - Decisao tomada
action_items:
  - Acao pendente
insights:
  - Insight extraido
context_updates:
  - file: context/icp.yaml
    field: core_icp.company_size
    new_value: "10-50 funcionarios"
```

### Registrar Decisao

```yaml
# intelligence/decisions/YYYY-MM-DD-{decision}.yaml
date: "2026-04-03"
decision: "Descricao da decisao"
rationale: "Por que foi decidido"
impact:
  - O que muda
  - Onde impacta
reversible: true | false
decided_by: nome
```

### Memory Index

`intelligence/memory-index.yaml` consolida um indice pesquisavel de todas as reunioes e decisoes, atualizado automaticamente ao registrar novos itens.

## Elicitation Guidelines

### Principios de Coleta

1. **Zero invencao:** Todos os dados vem do usuario, nunca inventados
2. **Conversacional:** Perguntas em tom natural, nao interrogatorio
3. **Progressivo:** Comecar com o basico, aprofundar gradualmente
4. **Pause/Resume:** Sempre permitir pausar e retomar depois
5. **Contexto anterior:** Usar respostas anteriores para informar proximas perguntas

### Formato de Perguntas por Metodo

**FORM (respostas curtas):**
```
1. Qual o nome legal da empresa?
2. E o nome fantasia (como as pessoas conhecem)?
3. Ano de fundacao?
4. Sede (cidade/estado)?
```

**INTERVIEW (conversacional):**
```
Me conta a historia de como tudo comecou. O que voce fazia antes?
O que aconteceu que te fez mudar de rumo?
E o momento de virada — quando voce percebeu que isso era o caminho?
```

### Campos Obrigatorios vs Opcionais

Cada template YAML marca campos como required ou optional no metadata. Durante a elicitacao:
- Campos required: Insistir ate obter resposta
- Campos optional: Oferecer pular ("Posso pular esse se preferir")

## Templates Reference

Todos os templates YAML de referencia estao em `references/templates/`. Consultar esses arquivos para a estrutura exata de cada YAML ao executar o scaffold ou a elicitacao.

### Templates Disponiveis

| Diretorio | Arquivo | Descricao |
|-----------|---------|-----------|
| `templates/` | `config.yaml` | Config global do ContextOS |
| `templates/` | `user.yaml` | Identidade do usuario |
| `templates/business/context/` | `company-profile.yaml` | Perfil da empresa (~50 campos) |
| `templates/business/context/` | `founder-dna.yaml` | DNA do fundador (4 atos) |
| `templates/business/context/` | `credentials.yaml` | Provas de autoridade |
| `templates/business/context/` | `icp.yaml` | Perfil do cliente ideal |
| `templates/business/context/` | `brand.yaml` | Identidade de marca |
| `templates/business/context/` | `pricing.yaml` | Estrategia de precos |
| `templates/business/context/` | `team.yaml` | Estrutura do time |
| `templates/business/context/` | `diagnosis.yaml` | Diagnostico estrategico |
| `templates/business/context/` | `authority-story.yaml` | Narrativa de autoridade |
| `templates/business/brand-dna/` | `voice.yaml` | Tom, vocabulario, persona |
| `templates/business/brand-dna/` | `visual-identity.yaml` | Cores, tipografia, logos |
| `templates/business/brand-dna/` | `archetype.yaml` | Arquetipo de marca |
| `templates/business/brand-dna/` | `positioning.yaml` | Posicionamento estrategico |
| `templates/business/brand-dna/` | `manifesto.yaml` | Manifesto da marca |
| `templates/business/design-system/` | `tokens.yaml` | Design tokens |
| `templates/business/design-system/` | `components.yaml` | Catalogo de componentes |
| `templates/business/design-system/` | `patterns.yaml` | Padroes de UI |
| `templates/business/design-system/` | `guidelines.yaml` | Regras de uso |
| `templates/business/culture/` | `values.yaml` | Valores da empresa |
| `templates/business/culture/` | `pillars.yaml` | Pilares culturais |
| `templates/business/culture/` | `commandments.yaml` | Mandamentos |
| `templates/business/culture/` | `hiring-criteria.yaml` | Criterios de contratacao |
| `templates/business/operations/` | `kpis.yaml` | KPIs e metricas |
| `templates/business/operations/` | `processes.yaml` | Processos operacionais |
| `templates/business/operations/` | `tech-stack.yaml` | Stack tecnologica |
| `templates/business/evidence/` | `completeness.yaml` | Metricas de completeness |
| `templates/business/evidence/` | `source-registry.yaml` | Registro de fontes |
| `templates/business/evidence/` | `etl-history.yaml` | Historico de enriquecimento |
