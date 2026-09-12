---
id: triar-projeto
name: Triar Novo Projeto de Copy
title: Sistema de Triagem — Cliente/Campanha/Outputs
description: Coleta informações de cliente/campanha e cria estrutura de pastas automaticamente
domain: copywriting
agent_owner: copy-chief
executor: copy-chief
tier: 0
complexity: medium
time_estimate: 1min
dependencies: []
elicit: true
interactive: true
version: 2.0.0
execution_type: Worker
worker_scripts:
  - scripts/triagem-projeto.sh
optimized_by: "*optimize copywriters --implement"
optimized_date: "2026-02-12"
---

## MANDATORY PREFLIGHT: Run Worker Script FIRST

```
EXECUTE FIRST — esta task é 100% Worker (determinística):

  bash scripts/triagem-projeto.sh

IF o comando falhar → CORRIGIR o erro do script. NÃO proceder manualmente.
IF o comando funcionar → Estrutura de pastas criada automaticamente.

VETO: NÃO criar pastas/arquivos manualmente. NÃO rodar mkdir/touch.
       O script faz isso mais rápido, barato e 100% consistente.
```

### Veto Conditions
- id: "GAP_ZERO_001"
  condition: "Pastas criadas manualmente sem script"
  check: "Script não foi executado"
  result: "VETO - BLOCK. Run worker script FIRST."
  rationale: "100% das ações são determinísticas. Script roda em <1s com 100% consistência."

- id: "TRIAGEM_002"
  condition: "Iniciar producao sem triagem completa"
  result: "VETO - BLOCK. Concluir a triagem antes de qualquer producao."
  rationale: "Producao sem triagem gera copy sem contexto de cliente e campanha."

- id: "TRIAGEM_003"
  condition: "Faixa de preco ou temperatura do trafego nao definidas"
  result: "VETO - BLOCK. Ambas sao obrigatorias para rotear a copy."
  rationale: "Preco e temperatura determinam o tipo de lead e o nivel de prova exigido."

- id: "TRIAGEM_004"
  condition: "Projeto sem estrutura de pastas criada"
  result: "VETO - BLOCK. Rodar o script de triagem primeiro."
  rationale: "Sem estrutura, os outputs se espalham fora da convencao canonica."

---

# Task: Triagem de Novo Projeto de Copy

## Pre Conditions
- Script de triagem funcional (scripts/triagem-projeto.sh)
- Usuario disponivel para responder perguntas interativas sobre cliente e campanha
- Informacao minima sobre cliente (nome) e produto/servico
- Diretorio copys/ existente para criacao de estrutura de pastas
- Definicao basica de tipo de negocio e faixa de preco

## Objetivo

Coletar informações estruturadas sobre cliente e campanha para:
1. Criar estrutura de pastas organizada automaticamente
2. Gerar briefing inicial estruturado
3. Configurar metadados do projeto
4. Preparar ambiente para criação de copy

## Fluxo de Triagem

### PASSO 1: Identificar Cliente

**Pergunta ao usuário:**

"Qual é o cliente deste projeto?"

**Opções:**
1. ✅ Cliente existente: VR (Vinícius Carlos)
2. ➕ Novo cliente

**Se Cliente Existente:**
- Sistema reconhece cliente
- Propõe campanhas existentes do cliente
- Avança para PASSO 2

**Se Novo Cliente:**
- Nome completo do cliente: `[Entrada de texto]`
- Slug (será gerado automaticamente): `[slug-cliente]`
- Email (opcional): `[Entrada de email]`
- Telefone (opcional): `[Entrada de telefone]`
- Empresa (opcional): `[Entrada de texto]`
- Segmento (seleção): [Consultoria | Educação | Saúde | Tech | Varejo | Outro]
- Porte da Empresa (seleção): [MEI | Pequeno | Médio | Grande]

**Ações Automáticas:**
- ✅ Criar pasta `/copys/[cliente-slug]/`
- ✅ Criar arquivo `/copys/[cliente-slug]/.cliente.yaml` com metadados
- ✅ Registrar cliente no INDEX.md

---

### PASSO 2: Identificar Campanha

**Pergunta ao usuário:**

"Qual é a campanha/projeto?"

**Opções:**
1. ✅ Campanha existente do cliente (se houver)
2. ➕ Nova campanha

**Se Campanha Existente:**
- Sistema carrega metadados da campanha
- Mostra outputs já criados
- Pergunta se deseja adicionar novos outputs OU criar novo briefing

**Se Nova Campanha:**
- Nome da campanha: `[Entrada de texto]`
- Slug (será gerado automaticamente): `[slug-campanha]`
- Nome do produto/serviço: `[Entrada de texto]`
- Tipo de negócio (seleção):
  - Imersão Presencial
  - Curso Online
  - Mentoria/Coaching
  - Consultoria
  - Produto Digital
  - Serviço
  - Outro
- Ticket/Investimento: `R$ [Entrada de número]`
- Objetivo principal (seleção):
  - 🎯 Vender
  - 🎣 Leadgen/Captura
  - 📢 Autoridade
  - 📚 Educação/Awareness
- Timeline (seleção):
  - 🔴 Urgente (1-7 dias)
  - 🟡 Normal (1-3 semanas)
  - 🟢 Relaxado (1+ mês)

**Ações Automáticas:**
- ✅ Criar pasta `/copys/[cliente-slug]/[campanha-slug]/`
- ✅ Criar `briefing.md` com template preenchido
- ✅ Registrar campanha no `.cliente.yaml`

---

### PASSO 3: Definir Outputs Necessários

**Pergunta ao usuário:**

"Quais materiais de copy você precisa criar? (Múltipla escolha)"

**Opções:**
- [ ] Big Idea + Mecanismo Único (estratégia)
- [ ] Sales Page (Página de Vendas)
- [ ] Capture Page (Página de Opt-in)
- [ ] VSL Script (Vídeo Sales Letter)
- [ ] Email Sequence (Sequência de emails)
- [ ] Email Daily (Email diário)
- [ ] Ads Facebook (Anúncios)
- [ ] Ads Instagram (Anúncios)
- [ ] Ads Google (Anúncios)
- [ ] Headlines (Múltiplas variações)
- [ ] Bullets/Fascinations (Bullets impactantes)
- [ ] Outro: `[Entrada de texto]`

**Ações Automáticas:**
- ✅ Registrar outputs solicitados no `briefing.md`
- ✅ Criar placeholders/templates para cada output
- ✅ Configurar ordem de execução recomendada

---

### PASSO 4: Confirmar Estrutura Criada

**Mostrar ao usuário:**

```
✅ ESTRUTURA DE PASTAS CRIADA

copys/
└── [cliente-slug]/
    ├── .cliente.yaml
    │   └── Metadados do cliente (nome, contato, histórico)
    │
    └── [campanha-slug]/
        ├── briefing.md
        │   └── Briefing estratégico (preencher manualmente)
        │
        ├── outputs-solicitados/
        │   ├── big-idea.md (TEMPLATE)
        │   ├── sales-page-v1.md (TEMPLATE)
        │   ├── capture-page-v1.md (TEMPLATE)
        │   ├── emails-v1.md (TEMPLATE)
        │   └── [outros conforme seleção]
        │
        └── validacao-final.md (TEMPLATE)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 PRÓXIMOS PASSOS:

1. PREENCHER BRIEFING
   - Acesse: copys/[cliente-slug]/[campanha-slug]/briefing.md
   - Preencha todas as seções com informações do projeto
   - Status: [Rascunho → Finalizado]

2. EXECUTAR DIAGNÓSTICO (Tier 0)
   - Comando: *diagnose
   - Executado por: @eugene-schwartz
   - Saída: Análise de consciência do avatar + recomendações

3. RECEBER ESTRATÉGIA (Tier 1)
   - Após diagnóstico aprovado
   - Executado por: @todd-brown, @dan-kennedy, @alex-hormozi
   - Saída: Big Idea + Mecanismo + Positioning

4. COMEÇAR CRIAÇÃO (Tier 2)
   - Equipe de executores
   - Copywriters: @gary-halbert, @jon-benson, @clayton-makepeace, etc.
   - Saída: Copies prontas para validação

5. VALIDAR (Tier 3)
   - Oráculo Torriani: @juliano-torriani
   - Sugarman 30 Triggers: *sugarman-check
   - Saída: Validação final (APROVADA/REVISÃO/REFAZ)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 RESUMO DO PROJETO

Cliente: [cliente-slug]
Campanha: [campanha-slug]
Ticket: R$ [valor]
Outputs: [quantidade] selecionados
Urgência: [Baixa/Média/Alta]
Deadline: [data]

Pronto para começar? 🚀
```

---

## Outputs Esperados

### 1. Estrutura de Pastas

```
copys/
└── [cliente-slug]/
    ├── .cliente.yaml          # Metadados do cliente
    └── [campanha-slug]/
        ├── briefing.md        # Briefing estratégico
        ├── big-idea.md        # Big idea (se selecionado)
        ├── mecanismo.md       # Mecanismo único (se selecionado)
        ├── sales-page-v1.md   # Sales page (se selecionado)
        ├── capture-page-v1.md # Capture page (se selecionado)
        ├── emails-v1.md       # Email sequence (se selecionado)
        ├── validacao-final.md # Report de validação
        └── [outros arquivos conforme seleção]
```

### 2. Arquivo `.cliente.yaml`

```yaml
cliente:
  nome: "[Nome Completo]"
  slug: "[slug-cliente]"

  contato:
    email: "[email]"
    telefone: "[telefone]"

  dados:
    empresa: "[nome empresa]"
    segmento: "[segmento]"
    porte: "[porte]"

  campanhas:
    - campanha-1-slug
    - campanha-2-slug

  historico:
    primeira_campanha: "YYYY-MM-DD"
    total_campanhas: 1
    status: "ativo"
```

### 3. Arquivo `briefing.md`

[Briefing preenchido com base nas informações coletadas]

### 4. Arquivos de Output (Templates)

Cada arquivo de output receberá um YAML header com:
- Projeto
- Cliente
- Campanha
- Tipo de copy
- Versão
- Status: "pendente"

---

## Checklist de Qualidade

- [ ] Cliente slug é válido (minúsculas, sem acentos, hífens)
- [ ] Campanha slug é válida
- [ ] Estrutura de pastas criada corretamente
- [ ] Arquivo `.cliente.yaml` existe e é válido YAML
- [ ] Arquivo `briefing.md` existe com template correto
- [ ] Metadados YAML corretos em todos os arquivos
- [ ] Outputs solicitados listados no briefing
- [ ] INDEX.md foi atualizado com novo cliente/campanha
- [ ] Nomes de arquivo seguem convenção: `[tipo]-v1.md`
- [ ] Pronto para `*diagnose` ser executado

---

## Integração com Copy-Chief

O Copy-Chief pode chamar esta task via:
- Comando: `*triar-projeto`
- Alias: `*novo-projeto`
- Menu interativo: `@copy-chief → "Novo Projeto" → selecionar`

Após triagem completa:
- Copy-Chief recebe contexto do cliente/campanha
- Próximo passo é `*diagnose` (automaticamente sugerido)
- Sessão rastreada com contexto de cliente/campanha

---

## Notas Importantes

### Validação de Slugs
- Minúsculas obrigatoriamente
- Sem acentos (ç, ã, é, etc.)
- Hífens para separar palavras
- Não começar com número
- Exemplos válidos: `vr`, `joao-silva`, `black-friday-2026`

### Convenção de Versionamento
- Primeiro output: `[tipo]-v1.md`
- Revisão: `[tipo]-v2.md`, `[tipo]-v3.md`, etc.
- Com status (opcional): `[tipo]-v2-APROVADA.md`, `[tipo]-v3-REVISAO.md`

### Atualização de INDEX.md
- Manual por enquanto (futura automação)
- Atualizar após cada nova campanha
- Adicionar seção de cliente se for novo

---

## Dados de Exemplo

### Cliente VR (já existente)

```yaml
cliente:
  nome: "Vinícius Carlos"
  slug: "vr"
  contato:
    email: "[a-definir]"
    telefone: "[a-definir]"
  dados:
    empresa: "VR Consultoria"
    segmento: "Consultoria Empresarial"
    porte: "Médio"
  campanhas:
    - gestao-eficaz
  historico:
    primeira_campanha: "2026-02-03"
    total_campanhas: 1
    status: "ativo"
```

### Campanha Gestão Eficaz

**Tipo:** Imersão Presencial
**Ticket:** R$ 497 (+ Mentoria Backend R$ 30K)
**Objetivo:** Vender imersão + qualificar para mentoria
**Urgência:** Alta (7 dias)
**Outputs Criados:** Sales Page v2, Email Sequence v1, Capture Page v1

---

## Próximas Melhorias (Fase Futura)

- [ ] Automação de INDEX.md (script Python)
- [ ] Integração com Google Forms para briefing remoto
- [ ] API REST para criar clientes programaticamente
- [ ] Dashboard de status de campanhas
- [ ] Tracking automático de conversão
- [ ] Interface web para clientes

---

**Task ID:** triar-projeto
**Versão:** 1.0.0
**Última atualização:** 2026-02-10
**Mantido por:** Squad Copywriters

*Synkra AIOS — Copy Organization System*

## Output Example

```markdown
# Triagem Concluída — Mentoria Elite

## Dados Coletados
| Campo | Valor |
|-------|-------|
| Cliente | Juliano Torriani |
| Projeto | Mentoria Elite — Lançamento Q2 |
| Faixa de Preço | High-ticket (R$12.000) |
| Temperatura do Tráfego | Warm (lista existente de 3.200) |
| Canal | Email + Webinar + Call de Vendas |
| Assets Necessários | Webinar script, call script, email sequence |

## Estrutura de Pastas Criada
```
outputs/
└── mentoria-elite-q2/
    ├── briefing.yaml
    ├── diagnostic-report.md
    ├── emails/
    ├── scripts/
    └── sales-page/
```

## Próximo Passo
→ Executar `briefing.md` para captura detalhada do projeto
```

