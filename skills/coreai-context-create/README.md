# Skills Ecosystem

Repositorio centralizado de skills para alunos e projetos.

## Arquitetura

```
skills/
├── README.md                    ← voce esta aqui
├── CONTEXT-OS-PROTOCOL.md       ← protocolo obrigatorio de integracao com ContextOS
│
├── context-create/              ← SKILL ZERO: cria e gerencia o contexto da empresa
│   ├── SKILL.md
│   ├── references/
│   ├── scripts/
│   └── assets/
│
├── skill-create/                ← Construtor de novas skills (ja com ContextOS)
│   └── SKILL.md
│
├── design-system-builder/       ← (planejado) Cria design systems
├── page-creator/                ← (planejado) Cria paginas de vendas/landing
├── grand-slam-offer/            ← Cria ofertas irresistiveis
├── tech-search/                 ← Pesquisa tecnica profunda
├── enhance-workflow/            ← Melhoria de workflows
├── transcrever/                 ← Transcreve audio/video
├── yt-text/                     ← Extrai texto do YouTube
├── ebook-to-md/                 ← Converte ebooks para Markdown
├── create-db/                   ← Cria projeto Supabase
├── doc-rot/                     ← Detecta documentacao desatualizada
├── list-skills/                 ← Lista skills instaladas
├── progress-visualizer/         ← Visualiza progresso de trabalho
├── skill-discover/              ← Descobre skills em squads
├── skill-validate/              ← Valida qualidade de skills
├── skill-upgrade/               ← Melhora skills existentes
└── update-aiox/                 ← Atualiza AIOX em projetos
```

## Como Funciona

### ContextOS e a Skill Zero

**Toda skill que precisa de dados do usuario/empresa DEVE consultar o ContextOS.**

O ContextOS (`context-create`) e o sistema operacional de contexto. Ele:
1. Cria o diretorio `context-os/` no workspace do aluno
2. Coleta dados da empresa (perfil, marca, ICP, pricing, design system, etc.)
3. Persiste tudo em YAMLs organizados por empresa
4. Permite multiplas empresas no mesmo workspace

### Fluxo Padrao de Qualquer Skill

```
Aluno invoca /minha-skill
    │
    ├── 1. CONTEXT RESOLUTION (obrigatorio)
    │   ├── Busca context-os/ no workspace
    │   ├── Le config.yaml → empresa ativa
    │   ├── Carrega dados necessarios
    │   └── Se ContextOS nao existe → sugere /context-create *init
    │
    ├── 2. EXECUCAO DA SKILL
    │   └── Usa dados do ContextOS como input
    │
    └── 3. OUTPUT
        ├── Entrega resultado ao usuario
        └── (opcional) Persiste dados de volta no ContextOS
```

### Cadeia de Dependencia

```
context-create (Skill Zero)
    │
    ├── design-system-builder → le brand-dna, escreve design-system
    │       │
    │       └── page-creator → le design-system + contexto completo
    │
    ├── grand-slam-offer → le ICP, pricing, products
    │
    ├── [futuras skills de copy] → le brand-dna, ICP, voice
    │
    └── [futuras skills de ads] → le ICP, products, pricing
```

## Para Criar Novas Skills

Use `/skill-create` — ele ja inclui o protocolo ContextOS automaticamente.

Ou siga o protocolo manualmente: leia `CONTEXT-OS-PROTOCOL.md`.
