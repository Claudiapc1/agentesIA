# ContextOS Protocol — Padrao de Integracao para Skills

## Regra Fundamental

**Toda skill que precisa de dados de empresa/usuario DEVE seguir este protocolo.**

O ContextOS e o sistema operacional de contexto. Ele vive em `context-os/` na raiz do
workspace do usuario. Toda informacao de empresa (perfil, marca, ICP, pricing, design system,
produtos, cultura) esta la dentro, organizada por empresa.

## Estrutura do ContextOS

```
context-os/
├── config.yaml                  # empresa ativa + lista de empresas
├── user.yaml                    # identidade do dono
└── businesses/
    └─�� {slug}/
        ├── context/             # company-profile, founder-dna, icp, brand, pricing, team
        ├── brand-dna/           # voice, visual-identity, archetype, positioning, manifesto
        ├── design-system/       # tokens, components, patterns, guidelines
        ├── products/            # um YAML por produto
        ├── culture/             # values, pillars, commandments
        ├── operations/          # kpis, processes, tech-stack
        ├── intelligence/        # meetings/, decisions/, memory-index
        └── evidence/            # completeness, source-registry, etl-history
```

## Como Integrar uma Skill com ContextOS

### 1. Declarar no SKILL.md

Adicionar secao `## ContextOS Integration` no corpo do SKILL.md:

```markdown
## ContextOS Integration

Esta skill consulta o ContextOS para obter dados da empresa ativa.

### Dados Lidos

| Path | Dado | Obrigatorio |
|------|------|-------------|
| `context/company-profile.yaml` | Nome, missao, proposta de valor | Sim |
| `context/icp.yaml` | Perfil do cliente ideal, dores | Sim |
| `brand-dna/voice.yaml` | Tom de voz, vocabulario | Nao |

### Dados Escritos

| Path | Dado | Quando |
|------|------|--------|
| `products/{slug}.yaml` | Oferta estruturada | Apos criacao |

### Dependencias de Skills

| Skill | Quando | Fallback |
|-------|--------|----------|
| `context-create` | Se ContextOS nao existe | Pedir *init |
```

### 2. Implementar Context Resolution como Fase 1

Toda skill com ContextOS DEVE comecar com Context Resolution:

```markdown
## Processo

### Fase 1: Context Resolution

1. Buscar diretorio `context-os/` no workspace (subir ate a raiz se necessario)
2. Se nao encontrar:
   - Informar: "ContextOS nao encontrado. Execute `/context-create *init` primeiro."
   - HALT — nao prosseguir sem contexto
3. Ler `config.yaml` → extrair `active_business`
4. Se nenhuma empresa ativa:
   - Informar: "Nenhuma empresa ativa. Execute `/context-create *set-active {slug}`"
   - HALT
5. Carregar dados necessarios de `businesses/{slug}/`
6. Para cada dado obrigatorio:
   - Se arquivo nao existe ou completeness < 50% → avisar e sugerir `/context-create *setup-context`
   - Se completeness 50-84% → avisar mas prosseguir com dados parciais
   - Se completeness >= 85% → usar normalmente
7. Prosseguir para proxima fase com contexto carregado
```

### 3. Usar Dados do ContextOS no Prompt

Referenciar dados carregados no processo da skill:

```markdown
### Fase 2: Execucao

Com os dados do ContextOS:
- **Nome da empresa:** extraido de `company-profile.yaml → company_essence.business_name`
- **ICP:** extraido de `icp.yaml → core_icp`
- **Tom de voz:** extraido de `voice.yaml → tone_attributes`
- **Design tokens:** extraido de `design-system/tokens.yaml`

[resto do processo da skill usando esses dados]
```

### 4. (Opcional) Persistir de Volta

Se a skill gera artefatos que pertencem ao contexto da empresa:

```markdown
### Fase N: Persistencia

Salvar resultado no ContextOS:
1. Escrever em `businesses/{slug}/{path}/{arquivo}.yaml`
2. Atualizar `evidence/completeness.yaml` se aplicavel
3. Confirmar ao usuario: "Resultado salvo no ContextOS em {path}"
```

## Busca do ContextOS

O diretorio `context-os/` pode estar em:
1. Raiz do workspace atual (`./context-os/`)
2. Home do usuario (`~/context-os/`)
3. Diretorio pai do workspace (`../context-os/`)

Ordem de busca: workspace atual → home → pai. Usar o primeiro encontrado.

## Completeness

Cada YAML do ContextOS tem campos preenchidos ou placeholders.

| Completeness | Significado | Acao da Skill |
|-------------|-------------|---------------|
| < 50% | Praticamente vazio | Avisar, sugerir setup |
| 50-84% | Parcial | Avisar, prosseguir com cuidado |
| >= 85% | Completo | Usar normalmente |
| 100% | Perfeito | Usar com confianca |

Valores placeholder (nao contam): `null`, `""`, `FILL_THIS`, `TBD`, `TODO`, `PREENCHER`, `N/A`, `[]`, `{}`

## Exemplo Completo de Integracao

```markdown
---
name: minha-skill
description: "Faz X usando dados da empresa do ContextOS"
---

# Minha Skill

## ContextOS Integration

### Dados Lidos
| Path | Dado | Obrigatorio |
|------|------|-------------|
| `context/company-profile.yaml` | Nome, missao | Sim |
| `context/icp.yaml` | Dores, desejos | Sim |

### Dependencias
| Skill | Quando | Fallback |
|-------|--------|----------|
| `context-create` | Se ContextOS nao existe | Pedir *init |

## Processo

### Fase 1: Context Resolution
[seguir protocolo acima]

### Fase 2: Execucao
[usar dados carregados]

### Fase 3: Output
[entregar resultado]
```

## Skills que JA Integram com ContextOS

| Skill | Le | Escreve | Status |
|-------|-----|---------|--------|
| `context-create` | — | Tudo | Pronta |
| `grand-slam-offer` | ICP, pricing, products | products/ | Pronta |
| `design-system-builder` | brand-dna | design-system/ | Planejada |
| `page-creator` | contexto completo + DS | — | Planejada |
