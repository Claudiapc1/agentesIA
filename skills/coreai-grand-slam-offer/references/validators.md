# Validadores de Oferta — Gates, Vetos e Anti-Patterns

> Source: $100M Offers + $100M Models - Alex Hormozi
> Scripts: `scripts/validate-mvn.py`, `scripts/validate-antipattern.py`

---

## SCRIPTS DE VALIDACAO

### validate-mvn.py

Valida se os 7 numeros essenciais (MVN) estao presentes antes de qualquer calculo.

```bash
# Via arquivo YAML
python scripts/validate-mvn.py mvn_data.yaml

# Via inline
python scripts/validate-mvn.py --inline "ticket:2997,cac:150,ltv:8000,conversao:5%,churn:15%,leads:500,margem:65%"
```

Retorna PASS (exit 0) ou FAIL (exit 1) com lista de itens faltantes e perguntas para coletar.

### validate-antipattern.py

Executa screening de 11 anti-patterns e retorna violacoes com antidotos.

```bash
# Via arquivo YAML
python scripts/validate-antipattern.py offer_audit.yaml

# Formato do YAML de audit:
churn_estrutural: false
exploracao_vulneraveis: false
margem_baixa: false
cac_maior_fecc: false
key_man_risk: false
comoditizado: false
escassez_falsa: false
sem_prova: false
baixo_valor_percebido: false
mercado_fraco: false
oferta_inchada: false
```

Retorna PASS, MODIFY (ajustar) ou VETO (bloqueia lancamento).

---

## VALIDADOR 1: MARKET VALIDATION VETO

**TIPO:** BLOQUEANTE — Se qualquer indicador < 7/10, NAO prosseguir com criacao de oferta.

> "Uma otima oferta para um mercado ruim sempre falhara."

### Os 4 Indicadores (Starving Crowd Test)

#### Indicador 1: DOR MASSIVA

| Score | Criterio |
|-------|----------|
| 10 | Problema ameaca vida/negocio, urgencia extrema |
| 9 | Problema causa perdas financeiras > R$50k/ano |
| 8 | Problema afeta qualidade de vida diariamente |
| 7 | Problema incomoda muito, ja tentaram resolver |
| 6 | Problema reconhecido, mas nao urgente |
| 5 | Problema existe, mas vivem com ele |
| 1-4 | Nice-to-have, nao need-to-have |

**Perguntas de validacao:**
- O prospect PERDEU SONO por causa desse problema?
- O prospect ja GASTOU DINHEIRO tentando resolver?
- O prospect FALA ATIVAMENTE sobre esse problema?
- O prospect teria VERGONHA se outros soubessem?

#### Indicador 2: PODER DE COMPRA

| Score | Criterio |
|-------|----------|
| 10 | Orcamento dedicado, aprovacao facil, B2B com ROI claro |
| 9 | Renda alta, gastos discricionarios significativos |
| 8 | Classe media alta, historico de compras premium |
| 7 | Capacidade de parcelar, acesso a credito |
| 6 | Renda limitada mas priorizam essa area |
| 5 | Precisariam sacrificar outras coisas |
| 1-4 | Publico sem recursos financeiros |

**Sinais de Poder de Compra:** B2B > R$500k/ano, profissionais > R$150k/ano, empresarios com equipe > 5, historico de compras high-ticket no nicho.

#### Indicador 3: FACIL DE ATINGIR

| Score | Criterio |
|-------|----------|
| 10 | Lista propria, comunidade ativa, associacao especifica |
| 9 | Grupos Facebook/LinkedIn com >10k membros ativos |
| 8 | Conferencias/eventos especificos do nicho |
| 7 | Publicacoes/podcasts que consomem |
| 6 | Hashtags/keywords com volume razoavel |
| 5 | Dispersos, mas encontraveis com esforco |
| 1-4 | Nao existe congregacao clara |

#### Indicador 4: CRESCENDO

| Score | Criterio |
|-------|----------|
| 10 | Crescimento > 20%/ano, tendencia clara |
| 9 | Crescimento 15-20%/ano |
| 8 | Crescimento 10-15%/ano |
| 7 | Crescimento 5-10%/ano, estavel positivo |
| 6 | Mercado estavel, sem crescimento/declinio |
| 5 | Crescimento < 5%/ano |
| 1-4 | Mercado em declinio |

### Regra de Veto

```
SE qualquer indicador < 7/10 → VETO (nao prosseguir)
SE total < 28/40 → VETO (nao prosseguir)
SE todos >= 7 E total >= 28 → PASS (pode criar oferta)
```

### Se VETO — Opcoes

1. **Ajustar Avatar** — Ex: de "donos de academia" para "donos de academia com >3 anos" (evita churn de iniciantes)
2. **Pivotar Mercado Adjacente** — Ex: de "coaches iniciantes" para "coaches estabelecidos buscando escalar"
3. **Abandonar** — Se nenhum ajuste resolve

### Caso de Estudo: Lloyd

"Lloyd era treinador de fitness. Excelente no que fazia. Escolheu vender para 'personal trainers' — mercado com alto churn estrutural (muitos desistem da profissao). Mesmo com habilidades identicas, fracassou. Quando pivotou para 'donos de academia estabelecidos' (mesmo skillset), prosperou."

**Licao:** A mesma pessoa, com a mesma habilidade, FALHA em mercado ruim e PROSPERA em mercado bom.

---

## VALIDADOR 2: GOLDEN RATIOS VETO

**TIPO:** BLOQUEANTE — Nao escalar se ratios nao estiverem saudaveis.

> "Tentar consertar um modelo quebrado injetando mais volume apenas ACELERA o caminho para a falencia."

### Os 2 Ratios de Ouro (Non-Negotiable)

#### Ratio 1: LTV:CAC >= 3:1

```
LTV = Lucro Bruto por Venda x Numero de Transacoes
CAC = Total Gasto (Marketing + Vendas) / Novos Clientes
```

| Ratio | Status | Acao |
|-------|--------|------|
| >= 5:1 | EXCELENTE | Escalar agressivamente |
| 3:1 - 5:1 | SAUDAVEL | Escalar com monitoramento |
| 2:1 - 3:1 | ALERTA | Otimizar antes de escalar |
| < 2:1 | **VETO** | NAO escalar — modelo quebrado |

#### Ratio 2: FECC:CAC >= 2:1

```
FECC = Caixa coletado na primeira transacao
     = Preco Principal + Upsells + Order Bumps (se a vista)
     = Entrada + Primeiras Parcelas (se parcelado)
```

| Ratio | Status | Acao |
|-------|--------|------|
| >= 3:1 | EXCELENTE | Crescimento autofinanciado facil |
| 2:1 - 3:1 | SAUDAVEL | Crescimento autofinanciado possivel |
| 1:1 - 2:1 | ALERTA | Precisa de capital de giro |
| < 1:1 | **VETO** | Queima de caixa — NAO escalar |

### Benchmarks por Industria

**LTV:CAC Targets:**
| Industria | Target Minimo | Excelente |
|-----------|---------------|-----------|
| SaaS B2B | 3:1 | 5:1+ |
| E-commerce | 3:1 | 4:1+ |
| Info-produtos | 4:1 | 7:1+ |
| Servicos High-Ticket | 5:1 | 10:1+ |
| Agencias | 4:1 | 6:1+ |

**FECC:CAC Targets (Bootstrapped):**
| Modelo | Target Minimo | Excelente |
|--------|---------------|-----------|
| One-time Sale | 2:1 | 3:1+ |
| Subscription | 1.5:1 | 2:1+ |
| High-Ticket | 2.5:1 | 4:1+ |

### Alavancas para Corrigir

**Aumentar LTV:** Aumentar preco, criar upsells/cross-sells, implementar recorrencia, reduzir churn, aumentar frequencia, criar programa de indicacao.

**Diminuir CAC:** Otimizar funil de conversao, melhorar targeting de ads, investir em conteudo organico, programa de referral, melhorar script de vendas.

**Aumentar FECC:** Aumentar preco front-end, adicionar order bumps, adicionar upsell imediato pos-compra, reduzir parcelamento.

### Red Flags Auxiliares

- Churn > 5% mensal (SaaS) ou > 10% mensal (servicos)
- CVR < 1% para cold traffic ou < 10% para warm
- NPS < 30

---

## VALIDADOR 3: ANTIPATTERN SCREENING

**TIPO:** BLOQUEANTE/MODIFICADOR — Um unico VETO desqualifica a estrategia.

### 5 Gates de Validacao

#### GATE 1: Mercado e Cliente

| Check | Tipo | Pergunta |
|-------|------|----------|
| Churn Estrutural | VETO | Mercado tem alta taxa de falencia/desistencia inerente? |
| Exploracao de Vulneraveis | VETO ABSOLUTO | Modelo explora populacoes vulneraveis? |

**Red Flags Churn:** Clientes iniciantes, setor com mortalidade > 20%/ano, clientes temporarios (noivas, gravidas), alta rotatividade profissional.

**Red Flags Exploracao:** Baixa educacao financeira + produto complexo, estado emocional extremo, promessas que maioria nao alcancara, pressao em desesperados.

#### GATE 2: Modelo de Negocio

| Check | Tipo | Formula |
|-------|------|---------|
| Margem Bruta | VETO se < 60% | (Receita - Custo Direto) / Receita |
| CAC vs Receita Inicial | VETO se CAC > FECC | FECC deve cobrir CAC |
| Key Man Risk | VETO se total | Negocio funciona sem fundador? |

#### GATE 3: Oferta e Taticas

| Check | Tipo | Pergunta |
|-------|------|----------|
| Comoditizacao | MODIFICAR | Oferta comparavel por preco? |
| Taticas Enganosas | VETO | Escassez/urgencia/depoimentos falsos? |

#### GATE 4: Lideranca (Para Parcerias)

| Check | Tipo | Pergunta |
|-------|------|----------|
| Reatividade Emocional | VETO | Decisoes baseadas em emocao vs dados? |

#### GATE 5: Antipadroes Especificos

| Check | Tipo | Pergunta |
|-------|------|----------|
| Oferta Inchada | MODIFICAR | Mais de 10 bonus? Cliente confuso? |
| Buraco no Modelo | MODIFICAR | Incentivos vendas vs entrega alinhados? |
| Niche Slapping | VETO | Pulando de nicho sem validar? (<90 dias) |

### Matriz de Referencia Rapida

| Antipattern | Principio Violado | Consequencia | Antidoto |
|-------------|-------------------|--------------|----------|
| Churn Estrutural | Estabilidade da Base | Colapso do modelo | Mudar segmento |
| Comoditizacao | Circulo Virtuoso do Preco | Corrida para o fundo | Grand Slam Offer |
| Falsa Escassez | Preservacao de Confianca | Erosao de marca | Escassez genuina |
| Oferta Inchada | Minimizar Esforco (Eq. Valor) | Paralisia de analise | Simplificar 3-5 core |
| Key Man Risk | Escalabilidade | Teto de crescimento | Sistematizar |
| Niche Slapping | Comprometimento | Nunca valida | 90 dias + Regra dos 100 |

### Protocolo de Rejeicao

Se identificar antipattern:
1. **RECONHECIMENTO:** "Compreendo a logica por tras dessa abordagem..."
2. **DIAGNOSTICO:** "No entanto, isso ativa o antipattern de [NOME], porque viola [PRINCIPIO]."
3. **CONSEQUENCIA:** "A consequencia previsivel e [CONSEQUENCIA]."
4. **ANTIDOTO:** "Uma abordagem mais robusta seria [ANTIDOTO], porque [BENEFICIO]."

---

## EXEMPLOS COMPLETOS DE OFERTAS

### Exemplo 1: Fitness Gym (do livro)

**Contexto:** De R$99/mes que ninguem comprava → R$2.997 com fila de espera.

**Dream Outcome:** Perder 9kg em 6 semanas

**Problema → Solucao → Veiculo:**
| Problema | Solucao | Veiculo | Valor |
|----------|---------|---------|-------|
| Nao sei o que comprar | Como fazer compras saudaveis em 20min | Lista de compras pronta | R$200 |
| Cozinhar demora | Refeicoes em menos de 5min | 21 receitas rapidas | R$300 |
| Nao tenho tempo pra academia | Treinos de 20min que funcionam | App com timer | R$500 |
| Vou desistir | Sistema de accountability | Grupo + check-ins diarios | R$1.000 |
| Viajo muito | Treinos de hotel sem equipamento | Videos de treino viagem | R$200 |
| Familia nao apoia | Como incluir a familia | Plano family-friendly | R$300 |

**Value Stack:**
```
Core: Programa 6 Semanas........................R$2.000
Bonus 1: Lista de Compras Inteligente...........R$  200
Bonus 2: 21 Receitas de 5 Minutos..............R$  300
Bonus 3: App de Treino 20min...................R$  500
Bonus 4: Grupo Accountability..................R$1.000
Bonus 5: Pack Viajante Fitness.................R$  200
Bonus 6: Plano Familia Saudavel................R$  300
────────────────────────────────────────────────────────
Total Value:                                  R$4.500
Investment:                                   R$  997
Ratio:                                          4.5:1
```

**Garantia:** Condicional — "Se seguir o programa por 6 semanas e nao perder pelo menos 5kg, devolvemos 100% + pagamos 3 meses de qualquer academia da sua escolha."

---

### Exemplo 2: Programa Acelerador Digital

**Contexto:** Empresarios faturando R$50k-500k/mes querendo sistema digital em 90 dias.

**Value Equation:**
```
Dream Outcome:        9/10 — "Sistema digital completo funcionando em 90 dias"
Perceived Likelihood:  8/10 — Garantia de resultado + 12 case studies
Time Delay:           8/10 — 90 dias (framework comprovado)
Effort & Sacrifice:   7/10 — Done-with-you (nao DIY)
```

**Value Stack:**
```
Core: Programa Acelerador Digital (12 semanas)...R$15.000
Bonus 1: Auditoria de Oferta 1-on-1.............R$ 3.000
Bonus 2: Templates de Funil Prontos..............R$ 2.000
Bonus 3: Grupo VIP Whatsapp (6 meses)...........R$ 5.000
────────────────────────────────────────────────────────
Total Value:                                    R$25.000
Investment:                               R$4.997 (ou 12x R$497)
Ratio:                                            5:1
```

**Garantia:** Condicional — "Se implementar os 12 modulos e nao recuperar o investimento em 90 dias, devolvemos 100%."

**Escassez:** Capacidade — "Aceito 15 alunos por turma. Cada aluno recebe 2h de mentoria individual por mes."

**Urgencia:** Cohort — "Proxima turma comeca dia 15. A seguinte so em 3 meses."

---

### Exemplo 3: Consultoria B2B (Naming MAGICO)

**Antes:** "Mentoria de Vendas"

**MAGICO:**
| Letra | Elemento |
|-------|----------|
| M | Sistema de Fechamento Inevitavel |
| A | Consultores B2B |
| G | "Inevitavel" (palavra de impacto) |
| I | Vendas B2B |
| C | 60 Dias |
| O | 10 Contratos High-Ticket |

**Depois:** "O Sistema de Fechamento Inevitavel para Consultores B2B: 10 Contratos High-Ticket em 60 Dias"

---

## QUALITY GATE FINAL — CHECKLIST DE BONUS

Para CADA bonus na oferta:

- [ ] Nome tem beneficio no titulo (nao generico)
- [ ] Mapeia para obstaculo/objecao especifica do cliente
- [ ] Tem prova (estatistica, case, experiencia pessoal)
- [ ] Preco standalone atribuido e justificado
- [ ] Tipo e ferramenta/checklist (>70% do stack, nao treinamento)
- [ ] Metodo de entrega claro (PDF, video, acesso, etc.)
- [ ] Quadro mental vivido ("Imagine...")
- [ ] Historia de origem incluida

**Stack total:**
- [ ] Valor total bonus > valor oferta principal
- [ ] Sem redundancia entre bonus
- [ ] Parceiros identificados (onde possivel)
- [ ] Sequencia de apresentacao otimizada
- [ ] Pelo menos 1 bonus com escassez/urgencia propria

---

## QUALITY GATE FINAL — CHECKLIST DE GARANTIA

- [ ] Estrutura "Se X em Y, fazemos Z" completa
- [ ] Nome criativo (NAO "Garantia de Satisfacao")
- [ ] Tipo apropriado para modelo de negocio
- [ ] Matematica validada: conversao × (1 - refund) > baseline
- [ ] Condicoes sao alcancaveis (80%+ devem conseguir)
- [ ] Condicoes sao rastreaveis
- [ ] Condicoes levam ao resultado (compliance = sucesso)
- [ ] Script de apresentacao pronto
- [ ] Stacking considerado (incondicional + condicional)

---

## QUALITY GATE FINAL — "STUPID TO SAY NO" TEST

Apos completar TODAS as fases, responder HONESTAMENTE:

1. "Eu compraria esta oferta?" — Se nao, por que? Corrigir.
2. "E impossivel comparar com concorrentes?" — Se nao, MAGICO insuficiente.
3. "O avatar se sentiria ESTUPIDO dizendo nao?" — Se nao, valor insuficiente.
4. "A estrategia esta alinhada com o estagio do negocio?" — Se nao, ajustar.
5. "Todos os anti-patterns passaram?" — Se nao, corrigir antes de lancar.

**Se TODAS as respostas sao YES → Oferta aprovada.**
**Se QUALQUER resposta e NO → Voltar a fase relevante e corrigir.**
