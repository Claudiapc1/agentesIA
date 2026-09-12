# Workflow: Funil de Social Selling 2.0

## Metadados

```yaml
nome: funil-social-selling
versao: "2.0.0"
autor: Juliano Torriani
tipo: workflow
categoria: vendas-diretas
duracao: contínuo (diário)
objetivo: Gerar vendas high-ticket via DM sem depender de tráfego pago
fonte: "Playbook Social Selling 2.0 - Torriani"
```

---

## Visão Geral

O **Social Selling 2.0** é uma estratégia de abordagem direta via Instagram para gerar conversas qualificadas no Direct, conduzindo leads até o agendamento de call de vendas.

### Filosofia Central

> **"Se a pessoa não consegue conversar no direct, ela não tem negócio. Simples assim."**

### Fluxo do Funil

```
Encontrar Leads → Pré-Aquecimento → Abertura → Condução → Qualificação → Agendamento → Call → Venda
```

---

## Quem Deve Usar

- Mentores
- Consultores
- Donos de agência
- Especialistas que vendem high-ticket
- Pessoas com perfil minimamente estruturado no Instagram

### Quando Usar

- Quando precisa gerar caixa rápido
- Quando quer validar oferta
- Quando quer previsibilidade com controle
- Quando não tem budget para tráfego

---

## 🛑 VETO CONDITIONS — Pré-Execução

```yaml
veto_conditions:
  - "Se perfil do Instagram NÃO está estruturado (bio, destaques, conteúdo) → PARAR (credibilidade zero)"
  - "Se oferta para call NÃO definida → PARAR (vai conversar sem ter o que vender)"
  - "Se script de condução NÃO memorizado/internalizado → PARAR (improvisar = perder lead)"
  - "Se sistema de etiquetas NÃO configurado → PARAR (sem tracking = caos)"
```

## ✅ CHECKPOINT: Infraestrutura de Social Selling

```yaml
checkpoint:
  nome: "Pronto para Abordar"
  validacao:
    - "Perfil transmite autoridade e credibilidade?"
    - "Oferta para call está clara e estruturada?"
    - "Script de 5 passos da condução está pronto?"
    - "Sistema de etiquetas configurado?"
  decisao:
    passa: "Todos ✅ → Iniciar prospecção"
    falha: "Qualquer ❌ → Preparar antes de abordar"
```

---

## Passo 1: Encontrar os Leads

### Onde Buscar

**Instagram → Lista de Seguidores**

### Como Filtrar

Use a busca interna dos seguidores com palavras-chave:

| Palavra-Chave | Indica |
|---------------|--------|
| Tráfego | Já investe em marketing |
| Marketing | Está no mercado |
| Social | Trabalha com redes |
| Automação | Já tentou escalar |
| Mentor | É seu público-alvo |
| Coach | Pode ter dor de vendas |
| Consultor | Vende serviços |

### Critérios de Qualificação Visual

- [ ] Perfil comercial (não pessoal)
- [ ] Posta conteúdo regularmente
- [ ] Tem bio estruturada
- [ ] Parece estar "no jogo"

---

## Passo 2: Pré-Aquecimento (Obrigatório)

**ANTES de enviar qualquer mensagem:**

1. [ ] Abrir o perfil da pessoa
2. [ ] Curtir 2-3 posts
3. [ ] Reagir a pelo menos 1 story (se houver)

### Por Que Isso Funciona

- Reduz rejeição
- Aumenta taxa de resposta
- Tira você da "caixa de spam mental"
- Cria familiaridade inconsciente

---

## Passo 3: Script de Abertura

### Versão 1: Seguidor Antigo

```
Oi [Nome], tudo bem?

Vi que você me acompanha aqui já tem algum tempo
e que trabalha com [especialidade da pessoa].

Como está seu negócio hoje?
```

### Versão 2: Perfil Interessante

```
Oi [Nome], tudo bem?

Vi seu perfil e ele me chamou a atenção.

[ÁUDIO COM CONTEXTO PERSONALIZADO]
```

### Regras da Abertura

- [ ] Sempre personalizar a especialidade
- [ ] Sempre terminar com pergunta aberta
- [ ] NUNCA vender nada aqui
- [ ] Objetivo: Abrir conversa e gerar resposta

---

## Passo 4: Organização e Follow-Up

### Sistema de Etiquetas

| Etiqueta | Significado |
|----------|-------------|
| Abordado | Primeira mensagem enviada |
| Respondeu | Iniciou conversa |
| Não respondeu | Entrou no follow-up |
| Qualificado | Passou pela condução |
| Agendado | Call marcada |
| Fechado | Virou cliente |

### Script de Follow-Up (Para Quem Não Respondeu)

Enviar após 2-3 dias:

```
Te mandei mensagem aqui porque recentemente fiz um
estudo de caso de um aluno meu

que saiu de 30k para 130k de faturamento mensal
implementando 3 funis simples…

Achei que poderia fazer sentido pra você também.

Quer que eu te mande o Vídeo?
```

**Se responder "sim":**

```
Aqui está:
[LINK]

Depois me conta o que achou.
```

---

### 🛑 VETO CONDITIONS — Pré-Aquecimento → Abertura

```yaml
veto_conditions:
  - "Se NÃO curtiu 2-3 posts antes → NÃO ENVIAR mensagem (taxa de resposta cai 50%+)"
  - "Se NÃO reagiu a story → REAGIR PRIMEIRO (familiaridade antes de abordagem)"
  - "Se perfil NÃO é comercial → PULAR lead (não é público-alvo)"
```

### ✅ CHECKPOINT: Lead Qualificado para Abordagem

```yaml
checkpoint:
  nome: "Pré-Aquecimento Completo"
  validacao:
    - "Curtiu 2-3 posts do lead?"
    - "Reagiu a pelo menos 1 story?"
    - "Perfil passa nos critérios de qualificação visual?"
    - "Mensagem personalizada com especialidade da pessoa?"
  decisao:
    passa: "Todos ✅ → Enviar mensagem de abertura"
    falha: "Qualquer ❌ → Completar pré-aquecimento ou pular lead"
```

---

## Passo 5: Guia de Condução da Conversa

### Etapa 1: Criar Conexão

**Objetivo:** Gerar rapport e conforto

**Script:**

```
Até dei uma olhada no seu perfil e vi que você está
se movimentando bem no mercado.

Me conta um pouco da sua trajetória no digital.

Hoje você já tem clientes?
```

### Etapa 2: Identificar o Problema

**Objetivo:** Entender a dor real e impacto financeiro

**Script:**

```
Se a gente conseguisse [resultado desejado],
isso mudaria o patamar financeiro do seu negócio hoje?
```

**Exemplo prático:**

```
Se você aumentasse o volume de vendas e organizasse
melhor a operação, isso mudaria seu jogo hoje?
```

### Etapa 3: Criar Autoridade

**Objetivo:** Mostrar que você já resolveu isso antes

**Script:**

```
Pela experiência que tenho aqui, o que mais destrava
pessoas nesse estágio é aumentar o volume de oportunidades,
subir ticket médio e sair do operacional.

Assim você para de ficar preso só na execução
e começa a focar em gerar receita.

Isso faz sentido pra você hoje?
```

### Etapa 4: Qualificar o Lead

**Objetivo:** Ver se vale avançar

**Script:**

```
Pra eu entender melhor seu momento:

Quanto você fatura hoje, em média?

E onde você quer chegar nos próximos 90 dias?
```

### Etapa 5: Gerar Agendamento

**Objetivo:** Levar para a call

**Script:**

```
Se eu pedir para alguém do meu time estruturar um plano
específico pro seu momento,

faz sentido a gente marcar uma call rápida pra te apresentar?
```

**Se resposta positiva:**

```
Perfeito.

Tenho horário amanhã às 10h ou no dia X às 15h.

Qual fica melhor pra você?
```

**Após confirmação:**

```
Ótimo.

Me passa seu WhatsApp e e-mail pra eu confirmar o agendamento.
```

**Encerramento:**

```
Já passei seu contato pro time.

Minha equipe vai confirmar o horário com você.

Combinado?
```

---

### 🛑 VETO CONDITIONS — Condução → Agendamento

```yaml
veto_conditions:
  - "Se lead NÃO revelou dor/problema → NÃO AGENDAR (call sem dor = perda de tempo)"
  - "Se lead NÃO respondeu sobre faturamento → NÃO AGENDAR (pode não ter capacidade de investir)"
  - "Se lead falou de preço → PARAR (nunca falar de preço nessa fase)"
  - "Se lead NÃO demonstrou interesse ativo → MOVER para follow-up (não forçar agendamento)"
```

### ✅ CHECKPOINT: Lead Pronto para Call

```yaml
checkpoint:
  nome: "Qualificação Completa"
  validacao:
    - "Lead revelou dor principal?"
    - "Lead indicou faturamento/momento?"
    - "Lead demonstrou interesse em resolver (não apenas curioso)?"
    - "Rapport estabelecido (conversa fluiu naturalmente)?"
  decisao:
    passa: "Todos ✅ → Propor agendamento de call"
    falha: "Qualquer ❌ → Continuar nutrindo ou descartar"
```

---

## Templates de Follow-Up (14 Dias)

### D-0: Agradecimento

```
"Oi [Nome], foi ótimo falar com você hoje! Como combinamos,
estou enviando um resumo dos pontos principais da nossa conversa:
[resumo]. Caso tenha alguma dúvida, estou à disposição!"
```

### D-2: Geração de Valor

```
"Oi [Nome], lembrei de você ao ver esse conteúdo sobre [tema].
Acredito que pode te ajudar bastante a [solução específica].
Dá uma olhada e me diz o que acha! [link]"
```

### D-3: Relacionamento

```
"E aí, [Nome], tudo bem? Vi que você comentou sobre
[algo relacionado ao seu negócio]. Muito interessante!
Me conta, como tem sido sua experiência com isso?"
```

### D-4: Pedido de Venda

```
"[Nome], já discutimos bastante sobre como [produto/serviço]
pode te ajudar a resolver [problema].
O que falta para darmos esse próximo passo?"
```

### D-5: Geração de Valor (Insights)

```
"Oi, [Nome]! Você sabia que [dado relevante ou estatística]?
Isso mostra o quanto é essencial ter [solução].
Como está sua visão sobre isso agora?"
```

### D-6: Relacionamento (Conteúdo)

```
"Oi, [Nome]! Separei esse material que complementa nossa
última conversa sobre [tema]. Espero que seja útil!"
```

### D-7: Pedido de Venda (Lista de Benefícios)

```
"[Nome], só para reforçar, ao fechar conosco, você terá acesso a:
[Lista de Benefícios].
Vamos fazer isso acontecer?"
```

### D-8: Geração de Valor (Casos de Sucesso)

```
"[Nome], queria te mostrar um exemplo real:
o [Cliente X] enfrentava [problema] e, com [solução],
conseguiu [resultado]. O que acha?"
```

### D-10: Bônus Especial

```
"[Nome], quero te dar um incentivo extra!
Fechando até [data], você ganha acesso a [bônus].
Me avisa o que acha!"
```

### D-13: Confirmação Final

```
"[Nome], só para confirmar: você ainda deseja resolver [problema]?
Tenho um espaço para você, mas preciso saber se faz sentido agora."
```

### D-14: Encerramento

```
"Oi, [Nome]! Percebo que agora pode não ser o melhor momento
para você seguir com [solução], então vou encerrar nosso
acompanhamento por enquanto. Se no futuro fizer sentido, me avisa!"
```

---

## Métricas de Sucesso

### Funil de Conversão

| Etapa | Meta |
|-------|------|
| Abordagens/dia | 20-30 |
| Taxa de resposta | 30-50% |
| Conversas qualificadas | 50-70% |
| Calls agendadas | 30-40% |
| Taxa de fechamento | 20-30% |

### Exemplo Prático

```
30 abordagens → 12 respostas → 7 qualificadas → 3 calls → 1 venda
```

Se ticket = R$5.000, e você faz isso 5 dias/semana:
**5 vendas/semana = R$25.000/semana = R$100.000/mês**

---

## Checklist Diário

### Manhã (30 min)
- [ ] Identificar 30 leads na lista de seguidores
- [ ] Pré-aquecer todos (curtir + reagir)
- [ ] Enviar mensagens de abertura

### Tarde (30 min)
- [ ] Responder quem interagiu
- [ ] Seguir script de condução
- [ ] Enviar follow-ups programados

### Noite (15 min)
- [ ] Atualizar etiquetas
- [ ] Agendar calls do dia seguinte
- [ ] Revisar métricas

---

## Integração com Squad

### Tier 1 (Estratégia)
- `@dan-kennedy` - Definir avatar para filtrar melhor
- `@alex-hormozi` - Estruturar oferta para a call

### Tier 2 (Execução)
- `@ben-settle` - Tom de conversa/personalidade
- `@dan-koe` - Conteúdo de autoridade para perfil

### Tier 3 (Otimização)
- `@claude-hopkins` - Testar variações de abordagem
- `*sugarman-check` - Validar gatilhos nas mensagens

---

## Erros Comuns a Evitar

1. **Vender na primeira mensagem** - Objetivo é CONVERSA
2. **Não personalizar** - Copiar e colar não funciona
3. **Pular o pré-aquecimento** - Reduz taxa de resposta
4. **Não fazer follow-up** - 80% das vendas vêm do follow-up
5. **Desistir cedo demais** - Precisa de 14 dias de nutrição

---

## Verdade Brutal

> **"Se alguém da sua mentoria não consegue executar isso, o problema não é o script. É medo de conversar, medo de rejeição e falta de postura comercial. Essa estratégia expõe isso rápido. E exatamente por isso ela funciona."**

---

---

## Passo 6: Validação Oráculo (OBRIGATÓRIA)

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
*Baseado no Playbook Social Selling 2.0 de Juliano Torriani*

## Quality Gates
- Posicionamento imperial validado (Torriani)
- Premissa-core.md internalizada em todas as peças
- Oráculo Torriani 10/10 em toda copy do funil
