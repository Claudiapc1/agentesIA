# Manual — Grand Slam Offer Skill

## O Que Esta Skill Faz

Guia a criacao de ofertas irresistiveis usando a metodologia Grand Slam Offer de Alex Hormozi ($100M Offers + $100M Models). Transforma uma ideia ou produto bruto em uma proposta de valor matematicamente superior — uma oferta que faz as pessoas se sentirem estupidas dizendo nao.

Inclui o processo completo de 10 fases, scripts de validacao executaveis, 3 validadores com gates de veto, exemplos concretos de ofertas e quality gates finais.

---

## Como Usar

### Comando Basico

Ative a skill pedindo para criar uma oferta:

```
Crie uma Grand Slam Offer para meu [negocio/produto]
```

### Exemplos de Uso

| Cenario | O Que Dizer |
|---------|-------------|
| Criar oferta do zero | "Crie uma oferta para meu curso de ingles para executivos" |
| Reformular oferta existente | "Minha mentoria de vendas custa R$2.000 e ninguem compra. Reformule a oferta." |
| Diagnosticar oferta | "Por que minha oferta nao converte? Aqui estao os dados: [...]" |
| Montar bonus stack | "Quais bonus devo criar para quebrar as objecoes do meu avatar?" |
| Criar garantia | "Desenhe uma garantia para meu programa de coaching" |
| Dar nome a oferta | "Crie um nome MAGICO para minha consultoria de marketing digital" |
| Montar upsell/downsell | "Crie sequencia de upsell e downsell para minha oferta" |
| Aumentar preco | "Quero subir de R$997 para R$4.997 sem perder conversao" |
| Validar oferta | "Rode o antipattern screening na minha oferta" |

---

## O Processo (10 Fases)

A skill segue um processo sequencial completo. Cada fase tem gates que precisam passar antes de avancar.

### Fase 0: Discovery

**O que acontece:** Coleta dos 7 numeros essenciais do negocio (MVN) e validacao do mercado com 4 indicadores (Starving Crowd Test).

**Voce precisa informar:**
- O que vende (produto/servico)
- Para quem vende (avatar especifico)
- Preco atual
- Como consegue clientes hoje
- Receita mensal
- CAC, LTV, conversao, churn (se tiver)

**Validacao:** O script `validate-mvn.py` verifica se os 7 MVN estao presentes antes de calcular.

**Gate:** Mercado deve passar nos 4 indicadores (Dor Massiva, Poder de Compra, Facil de Atingir, Crescendo — todos >= 7/10). Se qualquer um < 5, a skill recomenda pivot antes de construir a oferta.

### Fase 1: Value Equation

**O que acontece:** Diagnostico da oferta contra as 4 variaveis da Equacao de Valor.

```
Value = (Dream Outcome x Perceived Likelihood) / (Time Delay + Effort & Sacrifice)
```

**Resultado:** Score de cada variavel + identificacao da variavel mais fraca (maior alavanca de melhoria). Busca solucoes PSICOLOGICAS alem das logicas. Tudo se resume a STATUS.

### Fase 2: Engenharia de Oferta

**O que acontece:** Construcao completa em 4 etapas:

1. **Dream Outcome** — O que o cliente REALMENTE quer (conectar com STATUS)
2. **Listagem de Problemas** — Todos os obstaculos (minimo 20, ideal 32-64)
3. **Solucoes** — Cada problema vira uma solucao "Como fazer para..."
4. **Veiculos de Entrega** — Como cada solucao sera entregue (ferramentas > treinamento)

### Fase 3: Offer Stack Architecture

**O que acontece:** Montagem da estrutura completa: Lead Magnet → Order Bump → Core Offer → Bonus Stack → Upsells. Cada componente com valor percebido atribuido.

**Gate:** Valor percebido total >= 10x o preco.

### Fase 4: Bonus Stack (Quebrando Objecoes)

**O que acontece:** Criacao de bonus usando os 11 Bonus Bullets do Hormozi. Cada bonus esmaga uma objecao especifica do avatar.

**Principios-chave:**
- Nunca dar desconto — adicionar bonus para aumentar valor
- Ferramentas e checklists > treinamento
- Cada bonus tem nome com beneficio, prova, quadro mental vivido, valor justificado
- Valor total dos bonus deve ECLIPSAR o valor da oferta principal
- Bonus de parceiros: negocios adjacentes fornecem servicos gratis + comissao

### Fase 5: Guarantee Stack (Eliminando Risco)

**O que acontece:** Design de garantias usando os 4 tipos do Hormozi:

- **Incondicional** — Mais forte. "30 dias, dinheiro de volta, sem perguntas."
- **Condicional** — 6 variacoes criativas. "Se X em Y dias, fazemos Z."
- **Anti-Garantia** — "Todas vendas finais" com razao criativa.
- **Implied** — Performance-based. "So ganho quando voce ganha."

**Tecnicas avancadas:** Stacking de garantias, naming criativo (nunca "Garantia de Satisfacao").

**A matematica:** 130% mais vendas com 10% refund (vs 5%) = 23% mais lucro.

### Fase 6: Escassez & Urgencia

**O que acontece:** Design de escassez e urgencia GENUINAS.

- 4 tipos de escassez real: Capacidade, Temporal, Inventario, Bonus
- 4 tipos de urgencia real: Evento, Preco, Sazonal, Cohort
- Templates de comunicacao para cada tipo

**Regra absoluta:** Se nao pode provar que e real, nao use.

### Fase 7: Pricing & Anchoring

**O que acontece:** Pricing value-based com circulo virtuoso do premium.

- Calcular valor total para o cliente
- Aplicar regra 10x (preco = max 10% do valor)
- Tiers com decoy effect (basic/professional/premium)
- Script de ancoragem (mostrar valor antes de revelar preco)
- Margens >= 80% para servicos

### Fase 8: Naming (MAGICO)

**O que acontece:** Criacao do nome usando a formula MAGICO:

| Letra | Elemento |
|-------|----------|
| M | Mecanismo Unico |
| A | Alvo Atraente |
| G | Grafia Diferente |
| I | Ideia que Ajuda |
| C | Convergencia Temporal |
| O | Objetivo Final |

**Resultado:** 3-5 opcoes de nome. Container words por ticket (Academy/Mastermind para high-ticket, System/Blueprint para mid, Challenge/Bootcamp para low).

**Exemplo:**
- Antes: "Curso de Marketing"
- Depois: "O Arsenal de Aquisicao Infinita para Agencias Boutique: Primeiro Cliente em 14 Dias"

### Fase 9: Upsell & Downsell Sequences

**O que acontece:** Criacao de sequencias para maximizar receita e recuperar "naos".

**4 Tipos de Upsell:**
- Classic — "Voce nao pode ter X sem Y" (2-4x lift)
- Menu — Unsell → Prescribe → A/B → Card on File (3x conversao)
- Anchor — Premium 5-10x primeiro → Resgate (5x receita)
- Rollover — Creditar compra anterior, max 25% desconto (40%+ uptake)

**3 Tipos de Downsell:**
- Payment Plan — 7 passos (pare quando comprarem)
- Trial com Penalidade — Cartao ANTES dos termos
- Feature Downsell — Hack da garantia (remover feature de alto valor faz muitos reconsiderarem oferta completa = 3x taxa de fechamento)

**Regra:** NUNCA baixar preco da mesma coisa.

### Fase 10: Validacao Anti-Pattern

**O que acontece:** Scan completo na oferta finalizada usando 3 validadores:

1. **Market Validation Veto** — 4 indicadores >= 7/10
2. **Golden Ratios Veto** — LTV:CAC >= 3:1 e FECC:CAC >= 2:1
3. **Antipattern Screening** — 11 checks em 5 gates (churn estrutural, exploracao, margem, CAC, key man, comoditizacao, escassez falsa, promessa sem prova, valor < 10x, mercado fraco, oferta inchada)

**Validacao final:** O script `validate-antipattern.py` retorna PASS, MODIFY ou VETO.

**"Stupid to Say No" Test:** 5 perguntas que devem todas ser YES para aprovar a oferta.

---

## O Que Voce Recebe no Final

Um documento estruturado contendo TODOS os elementos:

```
# [NOME MAGICO DA OFERTA]
> "[Tagline]"

## Resumo
Price: R$X | Value: R$Y | Ratio: Z:1 | Estagio: N

## Value Equation Score
Dream Outcome / Perceived Likelihood / Time Delay / Effort & Sacrifice

## Core Offer
Deliverable principal + promessa + timeline

## Problema → Solucao → Veiculo (minimo 20)
Tabela completa com valores percebidos

## Bonus Stack
Cada bonus: nome, objecao que esmaga, valor, prova

## Guarantee Stack
Tipo + estrutura "Se X em Y, fazemos Z" + nome criativo

## Escassez & Urgencia
Tipo + mecanismo + prova de que e real

## Pricing & Anchoring
Tabela de valor + ratio + margem + script de ancoragem

## Upsell Path
Sequencia com tipo, preco, trigger

## Downsell Path
Sequencia para quem diz nao

## Validacao
Antipattern scan + "Stupid to Say No" test
```

---

## Scripts de Validacao

A skill inclui 2 scripts executaveis:

| Script | Funcao | Quando Usar |
|--------|--------|-------------|
| `scripts/validate-mvn.py` | Valida os 7 MVN antes de calcular | Fase 0 — antes de construir qualquer oferta |
| `scripts/validate-antipattern.py` | Screening de 11 anti-patterns | Fase 10 — antes de aprovar a oferta |

**Uso do validate-mvn.py:**
```bash
python scripts/validate-mvn.py --inline "ticket:2997,cac:150,ltv:8000,conversao:5%,churn:15%,leads:500,margem:65%"
```

**Uso do validate-antipattern.py:**
```bash
python scripts/validate-antipattern.py offer_audit.yaml
```

---

## Diagnostico de Estagio

A skill diagnostica em qual estagio o negocio esta e adapta a estrategia:

| Estagio | Quando | Foco |
|---------|--------|------|
| 1: Overdelivery | Meses 1-6 | Entregar 10x, criar casos de sucesso, aceitar margens baixas |
| 2: Sistematizacao | Meses 6-12 | Criar sistemas, reduzir custos 50%, manter qualidade |
| 3: Otimizacao | Meses 12+ | Criar tiers (DFY/DWY/DIY), maximizar lucro, escalar |

---

## Arquivos de Referencia

A skill inclui 7 arquivos de referencia detalhados:

| Arquivo | Para Que Serve |
|---------|---------------|
| `value-equation-scorecard.md` | Scorecard completo com perguntas diagnosticas, scoring detalhado, comparacao com mercado |
| `offer-stack-guide.md` | Estrutura do value stack (core, bonus, upsells), regra 10x, metodos de valuacao |
| `bonus-guarantee-scarcity.md` | 11 bonus bullets, 4 tipos de garantia com scripts e variacoes, escassez/urgencia com templates |
| `pricing-upsell-downsell.md` | Pricing value-based, tiers/decoy, 4 tipos de upsell, 3 tipos de downsell, 17 quality levers |
| `validators.md` | 3 validadores completos (Market, Golden Ratios, Antipattern), exemplos de ofertas, quality gates finais |
| `offer-checklist.md` | Checklist de 5 estagios (atracao, upsell, downsell, continuidade), plano 30-60-90 dias |
| `manual.html` | Versao visual deste manual em HTML |

---

## Conceitos-Chave

### Value Equation
A formula central: Value = (Dream Outcome x Perceived Likelihood) / (Time Delay + Effort & Sacrifice). Aumentar numerador, diminuir denominador. Se denominador = 0, valor = infinito.

### Regra 10x
Valor percebido total deve ser pelo menos 10x o preco cobrado. R$1.000 de preco = R$10.000 de valor percebido.

### 11 Bonus Bullets
Cada bonus esmaga objecao especifica, tem nome com beneficio, prova, quadro mental vivido, valor justificado. Ferramentas > treinamento. Valor total eclipsa core. Bonus de parceiros como alavanca.

### 4 Tipos de Garantia
Incondicional, Condicional (6 variacoes), Anti-Garantia, Implied. Empilhar garantias como bonus. Nomear de forma criativa. Estrutura: "Se X em Y, fazemos Z."

### MAGICO
Formula de naming: Mecanismo + Alvo + Grafia + Ideia + Convergencia + Objetivo. Torna impossivel comparar com concorrentes.

### Starving Crowd
O mercado importa mais que a oferta. 4 indicadores: Dor Massiva, Poder de Compra, Facil de Atingir, Crescendo. Todos >= 7/10.

### Golden Ratios
LTV:CAC >= 3:1 (modelo lucrativo) e FECC:CAC >= 2:1 (crescimento autofinanciado). Nao escalar se nao passar.

### Hack da Garantia (Downsell)
Remover garantia como downsell faz muitos reconsiderarem oferta completa. De 25 vendas para 75 = 3x taxa de fechamento.

### Circulo Virtuoso Premium
Premium Price → Maior Compromisso → Melhores Resultados → Melhores Clientes → Maiores Margens → Justifica Premium.

### Sales-Fulfillment Continuum
DFY = facil de vender, margens baixas. DIY = margens altas, dificil de vender. Comecar pelo DFY, evoluir para DIY com o tempo.

---

## Dicas de Uso

1. **Traga dados reais** — A skill funciona melhor com numeros concretos (CAC, LTV, conversao). Use o validate-mvn.py para verificar completude.

2. **Nao pule a validacao de mercado** — Se o mercado nao passar nos 4 indicadores, a oferta vai fracassar independente de quao boa seja.

3. **Quanto mais problemas, melhor** — Na Fase 2, listar pelo menos 20 problemas (ideal 32-64). Cada problema resolvido e mais valor percebido.

4. **Bonus esmagam objecoes** — Cada bonus deve matar uma objecao especifica. Se nao mata nenhuma, nao adicione.

5. **Garantia tem estrutura** — "Se X em Y, fazemos Z." Sem o "ou o que", soa fraco.

6. **Escassez so real** — Se nao pode provar que e real, nao use. Escassez falsa destroi confianca permanentemente.

7. **Rode os validadores** — validate-mvn.py antes de comecar, validate-antipattern.py antes de lancar.

8. **Itere** — A primeira versao nao precisa ser perfeita. Use, colete feedback, ajuste e rode novamente.

9. **Use para auditar ofertas existentes** — A skill funciona para diagnosticar por que uma oferta nao converte.

10. **"Stupid to Say No" test** — Se a resposta nao for um YES imediato, a oferta precisa de mais trabalho.
