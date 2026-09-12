# Workflow: Estratégia do Story Único

## Metadados

```yaml
nome: funil-story-unico
versao: "1.0.0"
autor: Juliano Torriani
tipo: workflow
categoria: captacao-rapida
duracao: 3 dias por ciclo
objetivo: Gerar leads qualificados e vendas diárias via Instagram Stories
fonte: "Playbook Story Único - Torriani"
```

---

## Visão Geral

A **Estratégia do Story Único** é um método para gerar vendas diárias através do Instagram Stories e Direct Messages, focando em criar uma única publicação de alto impacto que capture a atenção e gere leads qualificados.

### Filosofia Central

> **Foco total em uma única mensagem = Máxima conversão**

### Fluxo do Funil

```
48h Silêncio → 1 Story Magnético → ManyChat/Direct → Isca Digital → Consulta → Venda
```

---

## Objetivo Principal

Converter seguidores em clientes através de:

1. **Stories magnéticos** com chamadas irresistíveis
2. **Iscas digitais** gratuitas de alto valor
3. **Automação** para captura de leads
4. **Conversão** através de consultas/reuniões

---

## Componentes do Story Único

### Estrutura do Story Perfeito

| Elemento | Função |
|----------|--------|
| **Chamada magnética** | Título que gera curiosidade imediata |
| **Contexto + Desejo** | Explica o benefício e cria urgência |
| **Prova social/Resultado** | Números, resultados, validação |
| **CTA claro** | Call-to-action específico para Direct |

### Exemplo Prático

```
📌 CHAMADA MAGNÉTICA:
"Quer dobrar a taxa de conversão do seu funil de vendas?"

💎 CONTEXTO + DESEJO:
"Decidi liberar gratuitamente meu script validado de vendas -
um Pitch Ideológico para os mais chegados.
Esse pitch já gerou +R$ 10.000.000"

📲 CTA:
"Digite PITCH para receber agora!"
```

---

## Cronograma de Execução

### 🛑 VETO CONDITIONS — Pré-Campanha

```yaml
veto_conditions:
  - "Se 48h de silêncio NÃO cumpridas → ADIAR (efeito de reset é obrigatório)"
  - "Se isca digital NÃO preparada e testada → PARAR (promessa sem entrega = desconfiança)"
  - "Se ManyChat NÃO configurado com trigger → PARAR (sem automação = perde escala)"
  - "Se agenda para consultas NÃO organizada → PARAR (gerar lead sem poder atender = desperdício)"
```

### ✅ CHECKPOINT: Infraestrutura Pronta

```yaml
checkpoint:
  nome: "Story Único Ready"
  validacao:
    - "48h de silêncio nos stories cumpridas?"
    - "Isca digital pronta e com alto valor percebido?"
    - "ManyChat configurado e testado com palavra-chave?"
    - "Agenda tem slots disponíveis para consultas?"
    - "Script de vendas para consulta preparado?"
  decisao:
    passa: "Todos ✅ → Postar Story Único"
    falha: "Qualquer ❌ → Adiar até resolver"
```

### Fase 1: Preparação (48h Antes)

**Ações:**
- [ ] Parar de postar Stories por 48 horas
- [ ] Não postar NADA nos stories
- [ ] Preparar a isca digital
- [ ] Configurar automação no ManyChat
- [ ] Organizar agenda para consultas
- [ ] Preparar script de vendas

**Objetivo:** Resetar a atenção dos seguidores

**Resultado:** Seu próximo story aparecerá PRIMEIRO no feed

### 🛑 VETO CONDITIONS — Story → Conversão

```yaml
veto_conditions:
  - "Se story NÃO tem os 4 elementos (chamada + contexto + prova + CTA) → NÃO PUBLICAR"
  - "Se CTA (palavra-chave) NÃO é claro e simples → REESCREVER (confusão = não responde)"
  - "Se isca NÃO está relacionada ao produto/serviço → TROCAR (lead frio para oferta)"
  - "Se publicou outros stories junto → DELETAR (dilui mensagem)"
```

### ✅ CHECKPOINT: Story Validado

```yaml
checkpoint:
  nome: "Story Pronto para Publicar"
  validacao:
    - "Story tem: chamada magnética + contexto + prova + CTA?"
    - "Palavra-chave é simples e memorável?"
    - "Números são específicos (não genéricos)?"
    - "Isca conecta naturalmente com produto/serviço?"
  decisao:
    passa: "Todos ✅ → Publicar e monitorar"
    falha: "Qualquer ❌ → Ajustar antes de publicar"
```

### Fase 2: Lançamento do Story Único (24h)

**Ações:**
- [ ] Postar APENAS 1 story com a estrutura completa
- [ ] Manter por 24 horas sem postar outros conteúdos
- [ ] Opcional: Máximo 1 story de "volte" para reengajar
- [ ] Monitorar respostas em tempo real

**Regras:**
- NÃO postar mais nada
- NÃO poluir o feed de stories
- FOCO total em uma mensagem

### Fase 3: Acompanhamento e Conversão

**Ações:**
- [ ] Monitorar respostas automáticas
- [ ] Responder rapidamente interações manuais
- [ ] Agendar reuniões/consultas
- [ ] Executar processo de vendas

---

## Tipos de Iscas Digitais Eficazes

### Opções de Conteúdo Gratuito

| Tipo | Descrição |
|------|-----------|
| **Aulas exclusivas** | Vídeo/ao vivo com conteúdo de valor |
| **E-books/PDFs** | Estratégias práticas documentadas |
| **Scripts validados** | Como o exemplo do pitch |
| **Áudios** | Insights valiosos em formato áudio |
| **Reuniões de diagnóstico** | Consultas gratuitas |
| **Consultas estratégicas** | Individuais e personalizadas |

### Critérios para Escolha da Isca

- [ ] Alto valor percebido pelo público
- [ ] Relacionada diretamente ao seu produto/serviço
- [ ] Fácil de entregar digitalmente
- [ ] Que naturalmente leve à consulta de vendas

---

## Automação com ManyChat

### Configuração Básica

| Elemento | Configuração |
|----------|--------------|
| **Ferramenta** | ManyChat |
| **Função** | Automatizar respostas no Direct |
| **Trigger** | Palavra-chave específica (ex: "PITCH") |

### Fluxo de Automação

```
Usuário envia palavra-chave
        ↓
Recebe material gratuito automaticamente
        ↓
Mensagem de seguimento:
"Que bom que recebeu o material!
Vamos fazer uma reunião para eu te ajudar mais?"
        ↓
Agendamento da consulta de vendas
```

---

## Estratégia no Direct Messages

### Objetivo Duplo do Direct

1. **Gerar relacionamento** personalizado
2. **Converter em vendas** através de consultas

### Abordagem na Consulta

- [ ] Entregar degustação do serviço/produto
- [ ] Explicar como funciona sua solução
- [ ] Identificar necessidades específicas do lead
- [ ] Apresentar proposta comercial adequada
- [ ] Fechar a venda ou agendar próximo passo

---

## Templates de Story por Nicho

### Template 1: Mentor de Negócios

```
QUER O MAPA COMPLETO PARA FATURAR 100K/MÊS?

Liberei o plano exato que usamos para sair de 30k
para 6 dígitos em 90 dias.

Mais de 130 mentores já aplicaram.

Digite MAPA e te envio agora.
```

### Template 2: Profissional de Saúde

```
QUER ATRAIR PACIENTES PARTICULARES SEM VIRAR INFLUENCER?

Criei um guia com as 3 estratégias que uso para
lotar minha agenda de particulares.

Já ajudou +60 profissionais.

Digite PACIENTES pra receber.
```

### Template 3: Consultor/Agência

```
QUER FECHAR CONTRATOS DE 10K+ POR MÊS?

Separei o script exato que uso nas reuniões
de vendas high-ticket.

Taxa de conversão: 40%+

Digite SCRIPT e te mando.
```

### Template 4: E-commerce/Infoprodutos

```
QUER DOBRAR SUAS VENDAS NOS PRÓXIMOS 30 DIAS?

Liberei a checklist de otimização de funil
que gerou +R$500k para meus clientes.

Digite FUNIL e receba agora.
```

---

## Resultados Esperados

### Métricas de Sucesso

| Métrica | Meta |
|---------|------|
| Visualizações em 24h | +4.000 (exemplo real) |
| Pessoas interessadas | +200 qualificadas |
| Taxa de conversão | Elevada (público pré-aquecido) |

### Vantagens da Estratégia

- Foco total em uma mensagem
- Máxima visibilidade no feed dos seguidores
- Leads altamente qualificados (tomaram ação específica)
- Processo escalável com automação

---

## Checklist de Execução

### Antes de Postar

- [ ] 48h sem stories para reset de atenção
- [ ] Isca digital preparada e testada
- [ ] Automação configurada no ManyChat
- [ ] Agenda organizada para consultas
- [ ] Script de vendas preparado

### Durante a Campanha

- [ ] Story único postado com todos os elementos
- [ ] Monitoramento ativo das respostas
- [ ] Resposta rápida às interações manuais
- [ ] Agendamento das consultas qualificadas

### Após 24h

- [ ] Análise dos resultados e métricas
- [ ] Follow-up com leads que não agendaram
- [ ] Execução das consultas agendadas
- [ ] Planejamento do próximo Story Único

---

## Dicas para Maximizar Resultados

### Para o Story

- [ ] Use números específicos (R$ 10.000.000, +4.000 visualizações)
- [ ] Crie urgência real (limitado, exclusivo, por tempo limitado)
- [ ] Teste diferentes chamadas de atenção
- [ ] Use emojis estratégicos para destacar elementos

### Para a Conversão

- [ ] Responda rapidamente às interações
- [ ] Personalize as abordagens no direct
- [ ] Ofereça valor real antes de vender
- [ ] Seja consultivo, não apenas vendedor

### Para Escalar

- [ ] Documente o que funciona
- [ ] Crie templates dos stories que convertem
- [ ] Automatize processos repetitivos
- [ ] Teste continuamente novas abordagens

---

## Frequência e Repetição

### Ciclo Recomendado

| Frequência | Ação |
|------------|------|
| A cada 7-14 dias | Executar novo Story Único |
| Variar | As iscas digitais oferecidas |
| Testar | Diferentes palavras-chave |
| Aprimorar | Baseado nos resultados |

### Calendário Exemplo (Mensal)

```
Semana 1: Story Único - Isca A (PDF)
Semana 2: Descanso (conteúdo normal)
Semana 3: Story Único - Isca B (Aula)
Semana 4: Descanso (conteúdo normal)
```

---

## Integração com Outros Funis

### Combinação com FLI

O Story Único pode ser usado como **fase de atração** do FLI:

```
Story Único → Lead levanta mão → Entra no fluxo FLI
```

### Combinação com Sala Secreta

O Story Único pode **convidar para a Sala Secreta**:

```
Story Único → Convite para mentoria → Inscrição na Sala Secreta
```

### Combinação com Social Selling

Usar Story Único para **identificar leads quentes**:

```
Story Único → Lead responde → Entra na abordagem Social Selling
```

---

## Erros Comuns a Evitar

1. **Postar múltiplos stories** - Dilui a mensagem
2. **Não esperar 48h** - Perde o efeito de reset
3. **CTA confuso** - Palavra-chave deve ser CLARA
4. **Isca fraca** - Se não tem valor, não converte
5. **Demora em responder** - Lead esfria em minutos
6. **Não ter automação** - Perde escala

---

## Integração com Squad

### Tier 1 (Estratégia)
- `@todd-brown` - Big Idea para o story
- `@alex-hormozi` - Oferta irresistível da isca

### Tier 2 (Execução)
- `@gary-bencivenga` - Headlines magnéticas
- `@dan-koe` - Tom e linguagem do story
- `@ben-settle` - Personalidade na comunicação

### Tier 3 (Otimização)
- `@claude-hopkins` - Testar variações
- `*sugarman-check` - Validar gatilhos

---

---

## Fase 4: Validação Oráculo (OBRIGATÓRIA)

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
*Baseado no Playbook Story Único de Juliano Torriani*

## Quality Gates
- Posicionamento imperial validado (Torriani)
- Premissa-core.md internalizada em todas as peças
- Oráculo Torriani 10/10 em toda copy do funil
