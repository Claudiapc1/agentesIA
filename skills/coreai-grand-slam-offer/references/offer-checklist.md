# Checklist de Arquitetura de Ofertas

> Source: $100M Offers + $100M Models - Alex Hormozi

## Pre-Flight: Pre-Requisitos

### Validacao de Prontidao
- [ ] **Produto validado:** Pelo menos 10 clientes satisfeitos pagantes
- [ ] **CAC conhecido:** Custo de aquisicao documentado e consistente
- [ ] **Capacidade de entrega:** Consegue entregar 2x volume atual
- [ ] **Sistema de cobranca:** Processador aceita planos e recorrencia
- [ ] **Mentalidade alinhada:** "Todo nao e rejeicao, e redirecionamento"
- [ ] **Caixa minimo:** 3 meses de despesas OU linha de credito disponivel
- [ ] **Tracking instalado:** Metricas de conversao por estagio configuradas

### Red Flags (NAO esta pronto se)
- [ ] Taxa de reembolso > 5%
- [ ] Nao consegue explicar valor em 30 segundos
- [ ] Nao tem depoimentos/casos de sucesso
- [ ] Margem bruta < 30%
- [ ] Churn > 10% mensal

**Se qualquer red flag marcado:** PARAR e resolver antes de prosseguir.

---

## ESTAGIO 1: Ofertas de Atracao (Get Money)

### Selecao de Tipo
- [ ] Ganhe Seu Dinheiro de Volta (atividades de comecar/parar)
- [ ] Sorteios (geracao massiva de leads)
- [ ] Oferta Isca (maximizar conversao geral)
- [ ] Compre X, Ganhe Y Gratis (produtos fisicos)
- [ ] Pague Menos Agora (workshops, trials)

### Validacao Estagio 1
- [ ] **Lucro 30 dias >= CAC**
- [ ] **Conversao >= 10%**
- [ ] **Testado com >= 10 clientes**
- [ ] **Scripts documentados**

---

## ESTAGIO 2: Ofertas de Upsell (More Money)

### Tipos de Upsell
- [ ] **Upsell Classico:** "Voce nao pode ter X sem Y"
- [ ] **Menu Upsell:** Desvenda + Prescreve + AB + Cartao em arquivo
- [ ] **Anchor Upsell:** Premium 5-10x preco, depois "vir ao resgate"
- [ ] **Rollover Upsell:** Creditar compras anteriores (max 25% nova oferta)

### Validacao Estagio 2
- [ ] **Aceitacao upsell >= 30%**
- [ ] **LTV 30 dias >= 2x compra inicial**
- [ ] **>= 3 upsells mapeados e funcionando**
- [ ] **Scripts de cada tipo documentados**

---

## ESTAGIO 3: Ofertas de Downsell (Recuperar)

### Regras do Downselling
- [ ] "Nao = nao para ESTA oferta, nao todas"
- [ ] NUNCA baixar preco da mesma coisa
- [ ] Sempre trocar: dar algo = receber algo
- [ ] Personalizar, nao pressionar
- [ ] 100 formas de oferecer > 100 produtos

### Downsell de Plano de Pagamento (7 Passos)
1. Recompensar pre-pagamento (desconto)
2. Financiamento externo
3. Metade agora, metade depois
4. Verificar desejo (escala 1-10, se >= 8 continuar)
5. Tres pagamentos
6. Pagamentos uniformes
7. Trial gratuito (ULTIMO recurso)

### Trial com Penalidade
- [ ] Definir termos para evitar taxa
- [ ] SEMPRE pegar cartao
- [ ] Vender ficar e pagar
- [ ] Tornar check-ins obrigatorios

### Downsell de Recursos
- [ ] Mapear recursos removiveis (quantidade, qualidade, features, DIY vs DFY)
- [ ] Ordenar do maior para menor valor
- [ ] Script: "Tire algo, baixe preco, pergunte: E agora?"

### Validacao Estagio 3
- [ ] **Recovery rate >= 40%**
- [ ] **Conversao total >= 50%**
- [ ] **Taxa de reembolso <= 5%**

---

## ESTAGIO 4: Ofertas de Continuidade (Max Money)

### Bonus de Continuidade
- [ ] Bonus UNICO de alto valor (> primeiro pagamento)
- [ ] Bonus MENSAIS exclusivos para membros
- [ ] Ancoragem: vender beneficios do bonus primeiro, depois revelar como conseguir gratis

### Precificacao Continuidade vs Independente
| % Desejado em Continuidade | Multiplicador do Preco Independente |
|----------------------------|--------------------------------------|
| 50% | 1.33x |
| 60% | 1.66x |
| 70% | 2.00x |
| 80% | 2.33x |
| 90% | 2.66x |

### Oferta de Taxa Dispensada
- [ ] Taxa de configuracao = 3-5x mensalidade
- [ ] Opcao A: Mes a mes + taxa (cancele quando quiser)
- [ ] Opcao B: Compromisso X meses, taxa dispensada
- [ ] Taxa paga se quebrar compromisso

### Validacao Estagio 4
- [ ] **>= 60% em continuidade**
- [ ] **Churn mensal <= 5%**
- [ ] **Valor bonus >= 1.5x primeiro pagamento**

---

## Integracao: Calculo de Lucro de 30 Dias

```
L30 = (P1 × C1) + Σ(Un × Cn × Vn) - CAC - COGS
```

| Nivel | Benchmark |
|-------|-----------|
| Minimo | L30 >= 1x CAC |
| Bom | L30 >= 2x CAC |
| Excelente | L30 >= 3x CAC |

---

## Benchmarks-Chave

| Metrica | Benchmark |
|---------|-----------|
| CAC coberto | Em 30 dias |
| Conversao fria | 10-25% |
| Aceitacao upsell | 30-50% |
| Recovery downsell | 40-60% |
| Continuidade | 60-80% |
| Churn mensal | < 5% |
| Lucro 30 dias | >= 2x CAC |

---

## Plano de Implementacao 30-60-90 Dias

### Primeiros 30 Dias: FUNDACAO
**Semana 1:** Mapear jornada do cliente, identificar 10 problemas, escolher oferta de atracao
**Semana 2:** Criar materiais, testar com 10 prospects, documentar script vencedor
**Semana 3:** Criar upsell classico, testar com compradores (meta: 30% aceitacao)
**Semana 4:** Implementar downsell basico, calcular lucro de 30 dias
**Checkpoint:** L30 >= $0, script validado, 1+ upsell funcionando

### 30-60 Dias: ACELERACAO
**Semana 5-6:** Criar 3 niveis de servico, implementar unselling, adicionar upsell AB
**Semana 7-8:** Implementar anchor premium 5x, trial com penalidade, rollover
**Checkpoint:** L30 >= 1x CAC, aceitacao upsell >= 30%, LTV 30d >= 2x inicial

### 60-90 Dias: MAESTRIA
**Semana 9-10:** Migrar >= 60% para recorrencia, bonus massivos, taxa dispensada
**Semana 11-12:** CRM com triggers automaticos, documentar scripts, dobrar volume
**Checkpoint:** L30 >= 2x CAC, >= 60% continuidade, churn <= 5%

---

## Troubleshooting Rapido

| Problema | Causa Provavel | Acao |
|----------|---------------|------|
| Conversao < 10% | Oferta nao resolve problema real | Mudar oferta de atracao |
| Upsell < 20% | Timing errado ou irrelevante | Mover para momento diferente |
| Downsell < 30% | Muito caro ou complexo | Simplificar opcoes |
| Churn > 10% | Expectativas desalinhadas | Adicionar onboarding + quick wins |
| Lucro negativo | Custos altos ou preco baixo | Aumentar precos ou cortar custos |
