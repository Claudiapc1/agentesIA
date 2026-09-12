# Task: Criar Página de Captura

## Metadados

```yaml
nome: create-capture-page
tipo: task
executor: stefan-georgi
copywriters:
  - "@todd-brown (Big Idea + Hook)"
  - "@gary-halbert (Storytelling)"
  - "@john-carlton (Copy direto)"
output: Página de captura completa
template: templates/capture-page-tmpl.md
validacao:
  - checklists/oraculo-torriani.md (adaptado)
  - checklists/sugarman-30-triggers.md
```

---

## Pre-Conditions
- Premissa-core.md carregada
- Avatar research completa (diagnose-avatar executado)
- Lead magnet ou oferta de captura definida
- Awareness level diagnosticado (diagnose-awareness executado)
- Fonte de trafego definida (paid, organic, email)

## Veto Conditions
- VETO: Pagina sem headline clara → VETO
- VETO: Pagina sem CTA unico e visivel → VETO
- VETO: Copy generico sem especificidade para o avatar → REWRITE
- VETO: Sem lead magnet ou promessa de valor para troca de dados → BLOCK
- VETO: Promessa que nao pode ser cumprida pelo lead magnet → BLOCK

## Comando

```
*create-capture-page
```

---

## Pré-requisitos

Antes de executar, carregar:

```yaml
obrigatorio:
  - data/premissa-core.md          # Posicionamento premium
  - templates/capture-page-tmpl.md # Estrutura da página

recomendado:
  - frameworks/externos/schwartz-5-levels.md  # Nível de consciência
  - frameworks/torriani/headlines-ganchos.md   # Bank de headlines
```

---

## Inputs Necessários

### Briefing Mínimo:

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| **tipo** | webinar, material, evento, lista_espera | "webinar" |
| **entregavel** | O que a pessoa recebe | "Aula ao vivo de 1h" |
| **promessa** | Resultado principal | "Reduzir 15h semanais de operação" |
| **publico** | Quem é o lead ideal | "Empresários 100k+/mês" |
| **especialista** | Nome + credenciais | "Vinicius Carlos, R$ 500k/ano" |
| **data_evento** | Se aplicável | "21/02/2026 às 20h" |
| **urgencia** | Elemento de escassez | "Últimas 47 vagas" |

### Briefing Completo (opcional):

| Campo | Descrição |
|-------|-----------|
| **bullets** | 3-4 benefícios específicos |
| **para_quem** | 3 perfis que se beneficiam |
| **prova_social** | Depoimentos, números, logos |
| **objecoes** | Principais objeções a neutralizar |

---

## Workflow de Execução

### Fase 1: Diagnóstico (5 min)

```yaml
perguntas_chave:
  - Qual o nível de consciência do público? (Schwartz)
  - Qual o próximo passo após captura? (aquecimento, venda direta?)
  - Qual a principal objeção para se cadastrar?
  - Tem urgência real ou precisa criar?
```

### Fase 2: Estratégia (5 min)

```yaml
decisoes:
  - Tipo de página (curta vs longa)
  - Fórmula de headline (resultado+prazo vs como+resultado)
  - Elementos obrigatórios vs opcionais
  - Tom da copy (mais agressivo vs mais sofisticado)
```

### Fase 3: Execução (15-20 min)

```yaml
ordem_de_escrita:
  1: Headline (testar 3-5 variações)
  2: Sub-headline
  3: Bullets (máximo 4)
  4: CTA principal
  5: Seções de reforço (se página longa)
  6: Revisar contra premissa-core
```

### Fase 4: Validação (5 min)

```yaml
validacao:
  - Teste dos 5 segundos (entende O QUE, PRA QUEM, O QUE FAZER?)
  - Checklist Oráculo adaptado (5 critérios)
  - Sugarman essenciais para captura (5 triggers)
  - Zero palavras proibidas
```

---

## Tipos de Página e Estrutura

### PÁGINA CURTA (Above the Fold Only)

```
Usar quando:
- Público já conhece o especialista
- Oferta muito clara (webinar de tema específico)
- Tráfego vindo de anúncio que já aqueceu

Estrutura:
- Pre-headline (opcional)
- Headline
- Sub-headline
- Formulário + CTA
- Urgência (se houver)
```

### PÁGINA LONGA (Com Scroll)

```
Usar quando:
- Público frio
- Precisa construir credibilidade
- Entregável complexo
- Lead mais qualificado necessário

Estrutura:
- Pre-headline
- Headline
- Sub-headline
- Imagem/Video
- Bullets (o que vai receber)
- Para quem é
- Sobre o especialista
- Prova social
- Formulário + CTA
- Urgência
```

---

## Checklist de Entrega

### Copy Obrigatória:

- [ ] Headline principal (resultado específico)
- [ ] Sub-headline (reforço ou prova)
- [ ] 3-4 bullets de benefício
- [ ] CTA com verbo de ação
- [ ] Dados do formulário

### Elementos Recomendados:

- [ ] Pre-headline (filtro de público)
- [ ] Bio do especialista
- [ ] Elemento de urgência
- [ ] Prova social

### Validação Final:

- [ ] Teste dos 5 segundos ✓
- [ ] Oráculo adaptado 5/5
- [ ] Zero palavras proibidas
- [ ] CTA não é fraco (enviar, cadastrar, clique aqui)

---

## Exemplo de Output

```markdown
# PAGINA DE CAPTURA — Masterclass Acelerador Digital

## Metadados

projeto: Programa Acelerador Digital
tipo: webinar
publico: Empreendedores digitais 10k-50k/mes
data: 2026-04-10
status: APROVADA

---

## COPY

**PRE-HEADLINE:**
Para empreendedores digitais que faturam entre R$10k e R$50k/mes

**HEADLINE:**
O Sistema de 3 Etapas Para Faturar R$100k/Mes
Sem Lancamento e Sem Equipe Grande

**SUB-HEADLINE:**
Masterclass gratuita revela como 200+ empreendedores instalaram
um sistema que vende todos os dias no automatico — mesmo dormindo.

**BULLETS:**
✅ O erro fatal que trava 93% dos empreendedores abaixo de R$30k/mes
✅ Como transformar trafego frio em cliente pagante em ate 72 horas
✅ O framework de 3 etapas que gerou R$2.3M em vendas perpetuas
✅ Por que escalar trafego SEM esse sistema e jogar dinheiro fora

**CTA:**
Reservar Minha Vaga Gratuita

**URGENCIA:**
Quinta-feira, 10/04 as 20h | Ultimas 147 vagas | Replay por 48h

---

## VALIDACAO

| Criterio | Status |
|----------|--------|
| Resultado especifico (R$100k/mes) | ✅ |
| Promessa executavel (sistema de 3 etapas) | ✅ |
| Filtro de publico (10k-50k/mes) | ✅ |
| CTA forte (Reservar Minha Vaga Gratuita) | ✅ |
| Zero palavras proibidas | ✅ |
```

---

## Erros Comuns a Evitar

```yaml
erros_headline:
  - ❌ "Descubra como..." (palavra proibida)
  - ❌ "Aprenda a..." (passivo demais)
  - ❌ Promessa vaga sem número
  - ❌ Falar do método antes do resultado

erros_cta:
  - ❌ "Enviar" (fraco)
  - ❌ "Cadastrar" (burocrático)
  - ❌ "Clique aqui" (genérico)
  - ❌ "Saiba mais" (não tem ação)

erros_estrutura:
  - ❌ Muitos campos no formulário (máximo 3-4)
  - ❌ Página longa para tráfego quente
  - ❌ Página curta para tráfego frio
  - ❌ Sem elemento de urgência quando há escassez real
```

---

*Task v1.0.0 — Squad Copywriters*

