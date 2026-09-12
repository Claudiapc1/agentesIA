# ContextOS — Manual do Usuario

## O que e o ContextOS

O ContextOS e o sistema operacional de contexto da sua empresa. Ele armazena TUDO que qualquer agente, skill ou squad precisa saber sobre o seu negocio: perfil da empresa, DNA da marca, cliente ideal, pricing, cultura, design system, reunioes e decisoes estrategicas.

Quando um squad de copy precisa escrever, ele consulta o ContextOS. Quando um squad de trafego precisa criar anuncios, ele consulta o ContextOS. Quando um agente de design precisa montar uma landing page, ele consulta o ContextOS.

**Uma fonte de verdade. Todos os agentes lendo do mesmo lugar.**

---

## Quick Start (5 minutos)

### Passo 1: Inicializar

```
*init
```

Isso cria a estrutura raiz do ContextOS no seu workspace. Vai te perguntar seu nome, papel e preferencias.

### Passo 2: Adicionar sua empresa

```
*add-business torriani
```

Troque `torriani` pelo slug da sua empresa (use snake_case: `meu_negocio`, `studio_design`, etc). Isso cria 29 templates YAML prontos para preencher.

### Passo 3: Coletar contexto

```
*setup-context torriani
```

Pipeline interativo de 6 fases (~2h30 total). Pode pausar e retomar a qualquer momento.

### Passo 4: Ativar empresa

```
*set-active torriani
```

Define qual empresa os agentes e squads vao consultar.

---

## Comandos Disponiveis

| Comando | O que faz | Quando usar |
|---------|-----------|-------------|
| `*init` | Cria o ContextOS do zero | Primeira vez no workspace |
| `*add-business {slug}` | Adiciona nova empresa | Cada empresa nova |
| `*setup-context {slug}` | Coleta contexto completo (6 fases) | Apos adicionar empresa |
| `*set-active {slug}` | Define empresa ativa | Trocar entre empresas |
| `*status` | Dashboard de completeness | Ver progresso geral |
| `*health-check` | Auditoria de integridade | Verificar saude dos dados |

---

## As 6 Fases do Setup

O `*setup-context` e um pipeline interativo dividido em 6 fases. Cada fase coleta um tipo de informacao e gera YAMLs estruturados.

### Fase 1: Formulario Basico (~15 min)

**Tipo:** Respostas curtas e diretas (formulario)

**O que pergunta:**
- Nome legal e fantasia da empresa
- Ano de fundacao, sede
- Frase que define a empresa em uma linha
- Missao e visao basicas
- Lista de produtos/servicos

**O que gera:** `company-profile.yaml` (parcial, ~35%)

**Dica:** Respostas curtas estao ok aqui. A profundidade vem nas proximas fases.

---

### Fase 2: Deep Dive Fundador (~40 min)

**Tipo:** Entrevista conversacional (perguntas abertas)

**O que pergunta:**
- Historia de origem do fundador (4 atos: antes, virada, conquista, presente)
- Background profissional e milestones
- Filosofia e crencas centrais
- Credenciais: formacao, premios, palestras, midia, clientes notaveis
- Presenca online e lideranca de pensamento

**O que gera:** `founder-dna.yaml` + `credentials.yaml`

**Dica:** Seja detalhado aqui. A historia do fundador alimenta toda a narrativa de autoridade.

---

### Fase 3: Empresa + Time (~30 min)

**Tipo:** Mix de entrevista e formulario

**O que pergunta:**
- Posicionamento e analise de mercado
- Metricas chave (receita, crescimento, LTV, retencao)
- Estagio da empresa (Seed/Growth/Scale/Mature)
- Estrutura atual do time
- Plano de contratacao e gaps

**O que gera:** `company-profile.yaml` (completo) + `team.yaml`

**Dica:** Se nao tem metricas exatas, estimativas sao aceitas. Melhor uma estimativa do que campo vazio.

---

### Fase 4: ICP Completo (~30 min)

**Tipo:** Entrevista profunda

**O que pergunta:**
- Definicao do cliente ideal em uma frase
- Demographics: idade, experiencia, educacao, localizacao
- Psychographics: dor central, crencas, estado mental, consumo
- Pain stack em 3 niveis: latente, oculta, existencial
- 5 arquetipos de cliente (com % de cada)
- Triggers de acao e de paralisia
- Red flags e green flags

**O que gera:** `icp.yaml` + `diagnosis.yaml`

**Dica:** Este e o YAML mais importante. Quanto mais rico o ICP, melhor o trabalho de todos os squads.

---

### Fase 5: Brand + Pricing (~25 min)

**Tipo:** Mix de entrevista e formulario

**O que pergunta:**
- Nome, tagline, proposito da marca
- 3 niveis de promessa (marketing, real, verdadeira)
- Personalidade da marca em 4 escalas (1-10)
- Voice DNA: palavras de poder, frases assinatura, metaforas, palavras proibidas
- Valores centrais com hierarquia
- Modelo de pricing e psicologia de preco
- Posicao competitiva e diagnostico

**O que gera:** `brand.yaml` + `pricing.yaml`

**Apos esta fase**, os dados de marca sao automaticamente propagados para a pasta `brand-dna/` (voice, archetype, positioning).

---

### Fase 6: Enriquecimento Automatico (~10 min)

**Tipo:** Automatizado (sem perguntas)

**O que acontece:**
1. Cross-reference entre ICP e Company Profile (verifica alinhamento)
2. Cross-reference entre Brand e Founder DNA (verifica coerencia)
3. Gera `authority-story.yaml` automaticamente (sintese da narrativa de autoridade)
4. Calcula completeness global
5. Produz relatorio final

**O que gera:** `authority-story.yaml` + `completeness.yaml`

---

## Pausar e Retomar

Pode pausar o pipeline a qualquer momento respondendo **"pausar"** quando perguntado.

Para retomar, basta executar `*setup-context {slug}` novamente. O sistema detecta onde voce parou e oferece continuar de onde parou.

**Importante:** O progresso e salvo por arquivo YAML. Se voce completou a Fase 2 inteira, ela nao sera repetida.

---

## Multi-Empresa

O ContextOS suporta multiplas empresas no mesmo workspace.

### Como funciona

```
context-os/businesses/
├── torriani/              # Empresa 1
├── meu-ecommerce/       # Empresa 2
└── consultoria/         # Empresa 3
```

Cada empresa tem seu contexto, brand DNA, design system, cultura e operacoes **completamente isolados**.

### O que e compartilhado

- **Skills** — Todas as skills funcionam para todas as empresas
- **Agents** — Os agentes sao compartilhados, consultam a empresa ativa
- **Squads** — Os squads sao compartilhados, recebem contexto da empresa ativa

### Trocar empresa ativa

```
*set-active meu-ecommerce
```

Todos os agentes e squads passam a consultar o contexto do `meu-ecommerce`.

### Adicionar outra empresa

```
*add-business consultoria
*setup-context consultoria
```

---

## Intelligence Layer (Reunioes e Decisoes)

### Registrar uma reuniao

Apos qualquer reuniao, call ou workshop, registre as informacoes:

```
Registrar reuniao de kickoff com cliente sobre definicao de ICP
```

O sistema cria um YAML estruturado em `intelligence/meetings/` com:
- Data, tipo, participantes, duracao
- Topicos discutidos
- Decisoes tomadas
- Acoes pendentes
- Insights extraidos
- Atualizacoes de contexto (propaga para os YAMLs relevantes)

### Registrar uma decisao

```
Registrar decisao: descartamos modelo freemium, vamos com assinatura anual
```

Cria YAML em `intelligence/decisions/` com:
- Decisao, racional, impacto
- Se e reversivel ou nao
- Quem decidiu

### Por que isso importa

Toda reuniao e decisao fica registrada e pesquisavel. Quando um squad de copy precisa de contexto sobre pricing, ele encontra nao so o YAML de pricing, mas tambem as decisoes que levaram aquele pricing.

**Memoria organizacional. Nada se perde.**

---

## Dashboard e Status

### Ver progresso

```
*status
```

Mostra um dashboard visual com:
- Empresa ativa
- Completeness por empresa (barra de progresso)
- Completeness por area (context, brand-dna, design-system, etc)
- Gates passados

### Health Check

```
*health-check
```

Verifica:
- Estrutura de diretorios esta completa?
- YAMLs tem sintaxe valida?
- Campos placeholder foram preenchidos?
- Dados sao consistentes entre YAMLs?

---

## Completeness (% de Preenchimento)

### Como e calculado

Para cada YAML:
1. Conta campos totais (excluindo metadata)
2. Conta campos preenchidos (excluindo placeholders)
3. Formula: `(preenchidos / total) × 100`

### O que conta como "nao preenchido"

- `null`, vazio `""`, `~`
- `FILL_THIS`, `TBD`, `TODO`, `PREENCHER`, `N/A`
- Arrays vazios `[]`, objetos vazios `{}`

### O que conta como preenchido

- Qualquer valor real, incluindo `0` e `false`
- Textos, numeros, listas com itens

### Gates

- **< 85%** → Nao pode avancar para proxima fase (pode pausar)
- **>= 85%** → Gate passa, proxima fase liberada
- **100%** → Contexto completo e validavel

---

## Estrutura Completa de uma Empresa

```
businesses/{slug}/
│
├── context/                          # CORE — Perfil completo
│   ├── company-profile.yaml          # ~50 campos: essencia, missao, visao, metricas
│   ├── founder-dna.yaml              # Historia de origem em 4 atos
│   ├── credentials.yaml              # Provas de autoridade
│   ├── icp.yaml                      # Cliente ideal: demographics, psychographics, pain stack
│   ├── brand.yaml                    # Identidade de marca, voice DNA, personalidade
│   ├── pricing.yaml                  # Estrategia de precos, psicologia, diagnostico
│   ├── team.yaml                     # Estrutura do time, plano de contratacao
│   ├── diagnosis.yaml                # Diagnostico de mercado
│   └── authority-story.yaml          # Narrativa de autoridade (auto-gerada)
│
├── brand-dna/                        # DNA da marca (consumido por squads)
│   ├── voice.yaml                    # Tom, vocabulario, palavras de poder
│   ├── visual-identity.yaml          # Cores, tipografia, logos
│   ├── archetype.yaml                # Arquetipo de marca
│   ├── positioning.yaml              # Posicionamento estrategico
│   └── manifesto.yaml                # Manifesto da marca
│
├── design-system/                    # DS — Design System
│   ├── tokens.yaml                   # Cores, spacing, tipografia, shadows
│   ├── components.yaml               # Catalogo de componentes UI
│   ├── patterns.yaml                 # Padroes de layout e interacao
│   └── guidelines.yaml               # Regras de uso
│
├── products/                         # Produtos (um dir por produto)
│   └── {product-slug}/
│       ├── positioning.yaml
│       ├── offerbook.yaml
│       ├── proof.yaml
│       ├── testimonials.yaml
│       └── narrative/
│           ├── brandscript.yaml
│           ├── pitch.yaml
│           └── objections.yaml
│
├── culture/                          # Cultura organizacional
│   ├── values.yaml
│   ├── pillars.yaml
│   ├── commandments.yaml
│   └── hiring-criteria.yaml
│
├── operations/                       # Operacoes
│   ├── kpis.yaml
│   ├── processes.yaml
│   └── tech-stack.yaml
│
├── intelligence/                     # Memoria acumulada
│   ├── meetings/                     # Reunioes transcritas
│   │   └── YYYY-MM-DD-{topic}.yaml
│   ├── decisions/                    # Decisoes registradas
│   │   └── YYYY-MM-DD-{decision}.yaml
│   └── memory-index.yaml            # Indice pesquisavel
│
└── evidence/                         # Rastreabilidade
    ├── completeness.yaml             # % de cada arquivo
    ├── source-registry.yaml          # Origem de cada dado
    └── etl-history.yaml              # Historico de coletas
```

---

## Dicas Importantes

### Para melhores resultados no setup

1. **Reserve tempo.** O pipeline completo leva ~2h30. Pode dividir em sessoes.
2. **Seja especifico no ICP.** E o YAML mais consumido por outros squads.
3. **Nao pule a Fase 2.** A historia do fundador alimenta toda a narrativa.
4. **Estimativas valem.** Melhor "~R$50k/mes" do que campo vazio.
5. **Atualize depois.** Os YAMLs nao sao estaticos — atualize quando algo mudar.

### Quando atualizar o contexto

- Depois de uma reuniao estrategica importante
- Quando mudar pricing ou modelo de negocio
- Quando refinar o ICP com novos dados
- Quando lançar um produto novo
- Periodicamente, a cada 30-60 dias

### Como squads consomem o contexto

Quando um squad e ativado, ele:
1. Le `config.yaml` para saber qual empresa esta ativa
2. Carrega os YAMLs que precisa (definido no manifest do squad)
3. Usa os dados para executar sua funcao

**Exemplo:** Squad de copy carrega `brand-dna/voice.yaml` + `context/icp.yaml` + `products/{produto}/offerbook.yaml` para escrever copy alinhada com a marca e o publico.

---

## Troubleshooting

| Problema | Solucao |
|----------|---------|
| "ContextOS not found" | Execute `*init` primeiro |
| "Business already exists" | Use outro slug ou delete o existente |
| Gate nao passa (< 85%) | Preencha mais campos ou responda "pausar" |
| YAML com erro de sintaxe | Execute `*health-check` para identificar |
| Empresa errada ativa | Execute `*set-active {slug-correto}` |
| Setup travou | Execute `*setup-context {slug}` novamente para retomar |

---

## Glossario

| Termo | Significado |
|-------|-------------|
| **Slug** | Identificador unico da empresa (snake_case: `meu_negocio`) |
| **Gate** | Checkpoint de qualidade (>= 85% para passar) |
| **Completeness** | % de campos preenchidos em um YAML |
| **ICP** | Ideal Customer Profile — perfil do cliente ideal |
| **Pain Stack** | 3 niveis de dor: latente, oculta, existencial |
| **Voice DNA** | Identidade verbal da marca (tom, palavras, frases) |
| **Brand Archetype** | Personalidade da marca (Mentor, Rebelde, Heroi, etc) |
| **Authority Story** | Narrativa sintetizada de autoridade do fundador |
| **Intelligence Layer** | Sistema de memoria com reunioes e decisoes |
| **Scaffold** | Criacao automatica de templates YAML vazios |
| **Elicitation** | Processo de coleta de informacoes via perguntas |
