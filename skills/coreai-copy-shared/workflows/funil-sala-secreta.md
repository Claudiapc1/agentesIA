# Workflow: Funil de Sala Secreta

## Metadados

```yaml
nome: funil-sala-secreta
versao: "1.0.0"
autor: Juliano Torriani
tipo: workflow
categoria: webinar-semanal
duracao: 7-8 dias por ciclo
objetivo: Substituir lançamentos por webinars semanais com vendas recorrentes
fonte: "Playbook Sala Secreta - Torriani"
```

---

## Visão Geral

O **Funil de Sala Secreta** é um sistema de webinars semanais ao vivo que substitui lançamentos tradicionais. Em vez de fazer um grande evento a cada 60 dias, você faz uma "mentoria ao vivo" toda semana, vendendo o mesmo produto com aulas diferentes.

### Filosofia Central

**"É melhor fazer uma aula por semana do que ficar 15 dias convidando pessoas para um evento."**

### Fluxo do Funil

```
Anúncios + Posts → Captura (email/telefone) → Grupo WhatsApp → Mentoria Zoom → Oferta → Follow-up → Vendas
```

---

## Estrutura do Funil

### Fase 01: Atração

| Elemento | Descrição |
|----------|-----------|
| **Posts Intencionais** | Feed + Stories convidando para mentoria |
| **ManyChat** | Automação para entregar link de inscrição |
| **Tráfego Pago** | Anúncios com post intencional + vídeo |
| **Página de Captura** | Promessa + Sub-headline + Tópicos + Bio mentor |

#### Estrutura da Página de Captura

1. **Headline**: Promessa da aula (resultado principal)
2. **Sub-headline**: Explicação da promessa
3. **Lista de tópicos**: O que será abordado na Sala Secreta
4. **Sobre o mentor**: Autoridade e credenciais
5. **CTA**: "SIM! RESERVE MEU LUGAR AGORA"

### Fase 02: Relacionamento/Engajamento

| Elemento | Descrição |
|----------|-----------|
| **Grupo WhatsApp** | Novo grupo a cada semana |
| **Sequência de notificações** | Emails + WhatsApp antes da aula |
| **Mentoria ao vivo** | Zoom webinar (1-2 horas) |

#### Objetivo da Sessão

> **"Gerar desejo de compra, não ensinar coisas profundas. Entregar PLANOS e ORIENTAÇÕES mostrando O QUE fazer, não o COMO."**

### Fase 03: Oferta

| Elemento | Descrição |
|----------|-----------|
| **Pitch ao vivo** | Link de compra + link para WhatsApp do time |
| **Mensagens de venda** | Durante e após a aula |
| **Replay** | Liberado por tempo limitado (2 dias) |
| **Comercial ativo** | Contato 1-a-1 com leads |

---

## Cronograma de 7 Dias

### 🛑 VETO CONDITIONS — Pré-Campanha

```yaml
veto_conditions:
  - "Se tema da aula NÃO definido → PARAR (não começa campanha sem tema)"
  - "Se página de captura NÃO no ar → PARAR (sem captura = leads perdidos)"
  - "Se grupo WhatsApp NÃO criado → PARAR (canal principal de notificação)"
  - "Se ManyChat NÃO configurado → PARAR (sem automação = perda de escala)"
  - "Se anúncios NÃO preparados → PARAR (tráfego é metade do jogo)"
```

### ✅ CHECKPOINT: Pré-Campanha Validada

```yaml
checkpoint:
  nome: "Infraestrutura de Campanha"
  validacao:
    - "Página de captura tem: headline + sub-headline + tópicos + bio + CTA?"
    - "Grupo WhatsApp novo criado (não reutilizar antigo)?"
    - "ManyChat com automação de convite funcionando?"
    - "Pelo menos 2 formatos de anúncio prontos?"
  decisao:
    passa: "Todos ✅ → Iniciar Dia 01"
    falha: "Qualquer ❌ → Resolver antes de iniciar campanha"
```

### Dia 01: Primeiro Dia dos Convites

**Ações:**
- [ ] Criar post intencional no feed
- [ ] Criar sequência de stories com mesma ideia
- [ ] Iniciar anúncios (post intencional + vídeo + convite direto)
- [ ] Colocar link na bio

**Pré-requisitos:**
- Tema da aula definido
- Página de captura criada
- Grupo WhatsApp criado
- Automação ManyChat configurada

### Dia 02: Comece a Usar Suas Listas

**Ações:**
- [ ] Enviar convite direto para lista de email
- [ ] Enviar convite via WhatsApp (listas de transmissão)
- [ ] Usar stories para convidar (caixinha de perguntas)
- [ ] Responder comentários nos posts

### Dia 03: Post Intencional + Email

**Ações:**
- [ ] Fazer novo post intencional (ângulo diferente)
- [ ] Adicionar novo post aos anúncios
- [ ] Enviar mais um email de convite
- [ ] Começar antecipação no grupo WhatsApp

### Dia 04: Notificações + Post Intencional

**Ações:**
- [ ] Enviar aviso "É AMANHÃ" no grupo WhatsApp
- [ ] Enviar email de antecipação
- [ ] Fazer mais um post intencional
- [ ] Continuar campanhas de tráfego

**Exemplo de Mensagem WhatsApp:**

```
*É AMANHÃ*

*Estamos nos preparativos para a Reunião Secreta onde vou
apresentar [TEMA DA AULA].*

_[Promessa da aula gerando curiosidade e desejo]_

📌 *A Reunião começa amanhã, [DIA], às [HORÁRIO].*

🗓 *Já marque na sua agenda para não ficar de fora!*

Nos vemos amanhã,
*[Seu Nome]*
```

### 🛑 VETO CONDITIONS — Pré-Mentoria (Dia 05)

```yaml
veto_conditions:
  - "Se inscritos < 50 → AVALIAR se vale rodar (pode ser melhor adiar e captar mais)"
  - "Se mensagens de notificação NÃO enviadas (D-1, D-0) → PARAR (show-up rate vai despencar)"
  - "Se Zoom NÃO configurado → PARAR (sem ferramenta = sem evento)"
  - "Se pitch de vendas NÃO preparado → PARAR (mentoria sem oferta = oportunidade desperdiçada)"
```

### ✅ CHECKPOINT: Pré-Mentoria

```yaml
checkpoint:
  nome: "Tudo Pronto para Sala Secreta"
  validacao:
    - "Inscritos suficientes para justificar o evento?"
    - "Todas as notificações enviadas (D-2, D-1, D-0)?"
    - "Pitch de vendas e links de compra prontos?"
    - "Gravação configurada para replay?"
  decisao:
    passa: "Todos ✅ → Executar mentoria"
    falha: "Qualquer ❌ → Resolver ou adiar"
```

### Dia 05: Sala Secreta + Notificações

**Cronograma de Mensagens WhatsApp:**

| Horário | Mensagem |
|---------|----------|
| 10h00 | "É hoje" |
| 15h00 | Antecipação com história (opcional) |
| 18h00 | Vídeo avisando que falta 1 hora |
| 18h57 | "Ao Vivo" |
| 19h25 | "Ainda Dá tempo" |
| 20h30 | "Inscrições abertas" |

**Durante a Mentoria:**
- [ ] Fazer a sessão no Zoom (webinar de preferência)
- [ ] Gravar para replay
- [ ] Enviar pitch de vendas (link + WhatsApp do time)
- [ ] Pedir telefones no chat para follow-up

### 🛑 VETO CONDITIONS — Pós-Mentoria

```yaml
veto_conditions:
  - "Se replay NÃO gravado → PROBLEMA CRÍTICO (perde 50%+ das vendas)"
  - "Se leads de interesse NÃO coletados durante mentoria → PARAR follow-up (sem lista)"
  - "Se link de compra NÃO funcionando → CORRIGIR IMEDIATAMENTE"
```

### ✅ CHECKPOINT: Pós-Mentoria

```yaml
checkpoint:
  nome: "Follow-up Ready"
  validacao:
    - "Replay gravado e disponível?"
    - "Lista de leads interessados organizada por prioridade?"
    - "Links de compra e WhatsApp do time funcionando?"
  decisao:
    passa: "Todos ✅ → Iniciar follow-up e replay"
    falha: "Qualquer ❌ → Resolver antes de perder momento"
```

### Dia 06: Replay + Comercial Ativo

**Ações:**
- [ ] Liberar replay (na página de vendas ou página específica)
- [ ] Notificar por WhatsApp e email
- [ ] Iniciar contato 1-a-1 com leads

**Ordem de Prioridade para Contato:**
1. Quem se interessou durante a aula
2. Quem deixou telefone no chat
3. Todos os outros inscritos

**Exemplo de Mensagem de Replay:**

```
🚨 *ATENÇÃO, REPLAY LIBERADO!*

Percebi que muitas pessoas não conseguiram acompanhar a
Reunião Secreta onde compartilhei [TEMA].

Por isso, eu decidi deixar disponível por muito pouco tempo.

⚠️ APROVEITE, antes que saia do ar.

➡️ Toque no link abaixo para assistir: 👇
[LINK DO REPLAY]
```

### Dia 07: Último Dia de Replay + Oferta

**Ações:**
- [ ] Reforçar que é último dia do replay
- [ ] Falar sobre inscrições para o produto
- [ ] Enviar mensagens no WhatsApp e email
- [ ] Usar escassez no comercial
- [ ] Enviar "última chance" no final do dia

### Dia 08: Reset de Atenção

**Opções:**
- Fazer oferta de downsell
- Convidar para baixar PDF
- Convidar para workshop
- Convidar para próxima aula (novo ciclo)

---

## Sistema de 4 Aulas Rotativas

Para manter a estratégia sustentável, crie **4 aulas de vendas** para o mesmo produto:

| Mês | Aula |
|-----|------|
| Mês 1 | Aula 01 |
| Mês 2 | Aula 02 |
| Mês 3 | Aula 03 |
| Mês 4 | Aula 04 |
| Mês 5 | Aula 01 (repete) |

### Exemplo de Variação de Chamadas (Mesmo Conteúdo)

1. "Plano 100k: O Plano Completo Para Faturar 100k Todos Os Meses"
2. "A Estratégia Ignorada No Brasil Que Está Nos Rendendo 6 Dígitos Por Semana"
3. "A Sequência De Produtos E Funis Para Faturar 6 Dígitos Sem Depender De Lançamentos"
4. "Funil 100k30: Os Bastidores Das Campanhas De 6 Dígitos Por Mês"

---

## Métricas de Sucesso

| Métrica | Meta Inicial | Meta Otimizada |
|---------|--------------|----------------|
| Inscritos/semana | 100+ | 300+ |
| Show-up rate | 30% | 50%+ |
| Vendas ao vivo | 1-2 | 3-5 |
| Vendas pós-replay | 2-3 | 5-10 |
| Taxa conversão | 3-5% | 8-10% |

---

## Copy a Ser Criada

### Para Página de Captura

**Task:** `*create-headlines` (Gary Bencivenga)
- Headline principal
- Sub-headline
- Lista de tópicos (bullets)

### Para Posts Intencionais

**Task:** `*create-organic-content` (Dan Koe)
- 3-4 posts com ângulos diferentes
- Sequência de stories

### Para Emails de Convite

**Task:** `*create-email-sequence` (Andre Chaperon)
- Email 1: Convite direto
- Email 2: Convite com copy do post
- Email 3: "É amanhã"
- Email 4: "É hoje"
- Email 5: Replay liberado
- Email 6: Última chance

### Para Pitch da Mentoria

**Task:** `*create-vsl` (Jon Benson) - versão curta para ao vivo

### Para Anúncios

**Task:** `*create-ad-copy` (John Carlton)
- Anúncio imagem (post intencional)
- Anúncio vídeo
- Anúncio convite direto

---

## Ferramentas Recomendadas

| Função | Ferramenta |
|--------|------------|
| Páginas | HotmartPages, Leadpages |
| Webinar | Zoom Webinar |
| WhatsApp | MeuGrupoVIP |
| Automação | ManyChat |
| Email | ActiveCampaign, ConvertKit |

---

## Checklist Semanal

### Antes da Campanha
- [ ] Tema da aula definido
- [ ] Página de captura no ar
- [ ] Novo grupo WhatsApp criado
- [ ] ManyChat configurado
- [ ] Anúncios preparados

### Durante a Campanha
- [ ] Posts diários conforme cronograma
- [ ] Responder comentários em até 2h
- [ ] Monitorar inscrições
- [ ] Enviar notificações no horário

### Após a Campanha
- [ ] Analisar métricas
- [ ] Fazer follow-up 1-a-1
- [ ] Documentar o que funcionou
- [ ] Planejar próxima semana

---

## Integração com Squad

### Tier 1 (Estratégia)
- `@eugene-schwartz` - Definir nível de consciência do público
- `@todd-brown` - Big Idea para cada aula
- `@juliano-torriani` - Aplicar Protocolo Império

### Tier 2 (Execução)
- `@gary-halbert` - Storytelling para a mentoria
- `@dan-koe` - Posts intencionais
- `@andre-chaperon` - Sequência de emails
- `@john-carlton` - Copy dos anúncios

### Tier 3 (Otimização)
- `@claude-hopkins` - Testar variações de headlines
- `*sugarman-check` - Validar copy final

---

---

## Fase 04: Validação Oráculo (OBRIGATÓRIA)

**Objetivo:** Garantir que toda copy criada neste workflow passa pelos critérios imperiais antes de publicação.

**Responsável:** @oraculo-torriani

**Referência:** workflows/validacao-oraculo-torriani.md

```yaml
checkpoint: "Validação Final"
agent: oraculo-torriani
load_before: data/manual-craft.md
sequence:
  - step: "V1"
    name: "Regras Invioláveis (veto instantâneo)"
    regras: ["RU-01 a RU-03", "RA-01 a RA-05 (se ads)", "CL-01 a CL-38"]
  - step: "V2"
    name: "Regras de Craft"
    file: data/manual-craft.md
    regra: "RC-01 a RC-10 — 3+ violações = reprova"
  - step: "V3"
    name: "Oráculo Torriani"
    file: checklists/oraculo-torriani.md
    regra: "10/10 ou refaz"
  - step: "V4"
    name: "Sugarman 30 Triggers"
    file: checklists/sugarman-30-triggers.md
    regra: "Mínimo 15 triggers presentes"
```

🛑 **VETO CONDITIONS — Output → Publicação**

```yaml
veto_conditions:
  - "Se score Oráculo < 10/10 → NÃO PUBLICAR"
  - "Se qualquer Regra Inviolável falhar → REPROVA INSTANTÂNEA"
  - "Se 3+ Regras de Craft violadas → REPROVA"
  - "Se < 15 Sugarman Triggers → REPROVA"
```

> **Copy 10/10 ou refaz. Zero meio-termo.**

---

*Framework documentado por Craft - Squad Creator*
*Baseado no Playbook Sala Secreta de Juliano Torriani*

## Quality Gates
- Posicionamento imperial validado (Torriani)
- Premissa-core.md internalizada em todas as pecas
- Oraculo Torriani 10/10 em toda copy do funil
