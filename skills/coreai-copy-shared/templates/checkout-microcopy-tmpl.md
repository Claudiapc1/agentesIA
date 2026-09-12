# Template: Microcopy de Checkout

```yaml
name: checkout-microcopy-template
description: Textos curtos para checkout — botões, labels, badges de segurança, garantia inline, order summary
agent_sugerido: joe-sugarman, gary-bencivenga
tipo: conversao
output_type: microcopy
version: 1.0
priority: MEDIUM
estimated_length: 500-1500 palavras (textos curtos e pontuais)
```

## Instruções de Uso

1. Adapte cada microcopy ao tom de voz da marca
2. Priorize clareza sobre criatividade — checkout não é lugar para ambiguidade
3. Teste cada texto em mobile (espaço reduzido)
4. Preencha os placeholders [PLACEHOLDER] com dados reais
5. Menos é mais — cada palavra extra no checkout pode custar conversões

---

## PRINCÍPIO CENTRAL

O checkout é o momento de maior tensão da jornada. A copy aqui tem uma única missão: **reduzir fricção, reforçar confiança e facilitar a conclusão da compra**. Nada de vender de novo — o prospect já decidiu. Agora é hora de não atrapalhar.

---

## 1. BOTÕES DE AÇÃO (CTAs)

### Botão Principal — Finalizar Compra
```
Opção A: FINALIZAR COMPRA SEGURA →
Opção B: GARANTIR MEU ACESSO AGORA →
Opção C: SIM, QUERO [PRODUTO] →
Opção D: COMPLETAR MEU PEDIDO →
Opção E: COMEÇAR MINHA [TRANSFORMAÇÃO] →
```

**Regras para botões:**
- Verbo de ação no imperativo ou primeira pessoa
- Máximo 4-5 palavras
- Cor contrastante com a página
- Repetir no topo e no final do formulário

### Botão Secundário — Escolha de Plano
```
[PLANO BÁSICO]                    [PLANO PREMIUM] ← MAIS POPULAR
"Começar com [PLANO]"             "Quero o pacote completo"
R$ [X]/mês                        R$ [Y]/mês
```

### Botão de Aplicar Cupom
```
"Aplicar cupom" (não "Validar" — soa burocrático)
Sucesso: "Desconto aplicado! Você economizou R$ [X]"
Erro: "Cupom inválido. Verifique e tente novamente."
```

---

## 2. LABELS DE FORMULÁRIO

### Dados Pessoais
```
Nome completo: "Como aparecerá no seu certificado/acesso"
Email: "Enviaremos seu acesso para este email"
Telefone: "Apenas para suporte — sem spam"
CPF: "Exigido pela operadora de pagamento"
```

### Dados de Pagamento
```
Número do cartão: "Seus dados são criptografados"
Validade: "MM/AA"
CVV: "3 dígitos no verso do cartão"
Parcelas: "Escolha a melhor opção para você"
```

**Regra:** Cada campo que pode gerar dúvida precisa de um helper text explicando POR QUE é necessário.

---

## 3. BADGES DE SEGURANÇA

### Badge Principal
```
🔒 Compra 100% Segura
"Seus dados são protegidos com criptografia SSL 256-bit"
```

### Badges Complementares
```
✅ Compra Segura          — Criptografia SSL
✅ Privacidade Garantida  — Dados protegidos pela LGPD
✅ Satisfação Garantida   — [X] dias para pedir reembolso
✅ Suporte Humanizado     — Atendimento em até [X]h
```

### Selos de Pagamento
```
"Aceitamos: Visa, Mastercard, Elo, Amex, Pix, Boleto"
[ÍCONES DAS BANDEIRAS]
```

### Texto Abaixo do Botão
```
Opção A: 🔒 Ambiente seguro. Seus dados estão protegidos.
Opção B: Pagamento processado por [GATEWAY]. 100% seguro.
Opção C: 🔒 Criptografia de ponta. Mesmo padrão dos bancos.
```

---

## 4. GARANTIA INLINE

### Versão Compacta (ao lado do botão)
```
🛡️ Garantia de [X] dias. Não gostou? Devolvemos seu dinheiro.
```

### Versão Expandida (abaixo do resumo do pedido)
```
🛡️ GARANTIA INCONDICIONAL DE [X] DIAS

Acesse tudo. Aplique. Teste.
Se em [X] dias não estiver satisfeito,
basta enviar um email para [EMAIL].
Devolvemos 100% — sem perguntas.
```

### Versão Ultra-Compacta (mobile)
```
🛡️ [X] dias de garantia — risco zero
```

---

## 5. ORDER SUMMARY (Resumo do Pedido)

### Estrutura Padrão
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 RESUMO DO SEU PEDIDO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[NOME DO PRODUTO]                    R$ [PREÇO]
  [Descrição curta em 1 linha]

[BÔNUS 1]: [NOME]                    GRÁTIS
[BÔNUS 2]: [NOME]                    GRÁTIS
[BÔNUS 3]: [NOME]                    GRÁTIS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subtotal:                            R$ [X]
Desconto [CUPOM]:                   -R$ [X]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL: R$ [PREÇO FINAL]
ou [X]x de R$ [PARCELA] sem juros
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Economia Destacada
```
💰 Você está economizando R$ [VALOR] (XX% de desconto)
```

### Bônus no Resumo
```
🎁 BÔNUS INCLUSOS (R$ [VALOR TOTAL] em bônus):
  ✓ [Bônus 1] — Valor: R$ [X] → GRÁTIS
  ✓ [Bônus 2] — Valor: R$ [X] → GRÁTIS
  ✓ [Bônus 3] — Valor: R$ [X] → GRÁTIS
```

---

## 6. MENSAGENS DE ESTADO

### Processando Pagamento
```
"Processando seu pagamento... Não feche esta página."
"Quase lá! Estamos confirmando seu pedido..."
```

### Pagamento Aprovado
```
"Pagamento confirmado! Seu acesso está sendo liberado."
"Parabéns, [NOME]! Sua compra foi aprovada."
```

### Pagamento Recusado
```
"Ops, o pagamento não foi aprovado. Tente outro cartão ou forma de pagamento."
"Não conseguimos processar. Verifique os dados e tente novamente."
```

### Boleto Gerado
```
"Boleto gerado! Seu acesso será liberado em até [X] horas após o pagamento."
"Copie o código de barras ou baixe o PDF abaixo."
```

### Pix Gerado
```
"Escaneie o QR Code ou copie o código Pix abaixo."
"Após o pagamento, seu acesso é liberado em até [X] minutos."
```

---

## 7. ELEMENTOS DE REFORÇO

### Depoimento no Checkout (1 apenas, curto)
```
⭐⭐⭐⭐⭐
"[DEPOIMENTO CURTO — máximo 2 linhas sobre resultado]"
— [NOME], [PROFISSÃO/CIDADE]
```

### Contador de Compradores
```
"[X] pessoas compraram nas últimas [PERÍODO]"
"Junte-se a [X]+ [AVATARES] que já transformaram [RESULTADO]"
```

### Lembrete de Escassez (se real)
```
"⚠️ Preço especial válido até [DATA/HORA]"
"⚠️ Últimas [X] vagas nesta condição"
"⏰ Bônus exclusivos expiram em [COUNTDOWN]"
```

### FAQ Mínima no Checkout (2-3 perguntas)
```
❓ "Quando recebo meu acesso?"
→ Imediatamente após a confirmação do pagamento.

❓ "É seguro colocar meus dados aqui?"
→ Sim. Usamos criptografia SSL — mesmo padrão dos bancos.

❓ "Posso pedir reembolso?"
→ Sim. Garantia de [X] dias, sem perguntas.
```

---

## 8. TEXTOS LEGAIS (rodapé)

```
"Ao clicar em 'Finalizar Compra', você concorda com nossos
Termos de Uso e Política de Privacidade."

"Este site não é afiliado ao Facebook, Instagram ou Google."

"Resultados podem variar. Depoimentos representam experiências individuais."

"[NOME DA EMPRESA] — CNPJ: [XX.XXX.XXX/XXXX-XX]"
```

---

## EXEMPLO PREENCHIDO — CHECKOUT DE CURSO ONLINE

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 RESUMO DO SEU PEDIDO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Método Vendas Magnéticas              R$ 997
  Acesso vitalício + 47 aulas

🎁 Bônus #1: Templates de Email       GRÁTIS
🎁 Bônus #2: Grupo VIP 12 meses       GRÁTIS
🎁 Bônus #3: Mentoria de Lançamento   GRÁTIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL: R$ 997 ou 12x R$ 97,08
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[BOTÃO: GARANTIR MEU ACESSO AGORA →]

🔒 Pagamento seguro | 🛡️ 15 dias de garantia | ✅ Acesso imediato

⭐⭐⭐⭐⭐ "Recuperei o investimento na primeira semana"
— Carlos R., empresário, SP
```

---

## CONDIÇÕES DE VETO (quando este template falha)

- **Copy longa no checkout:** Se o prospect precisa rolar para encontrar o botão, você vai perder vendas. Checkout é lugar de textos curtos e diretos.
- **Excesso de campos:** Cada campo extra no formulário reduz conversão em 3-5%. Peça apenas o essencial.
- **Sem badges de segurança:** Checkout sem selos de segurança gera desconfiança, especialmente em mobile.
- **Informações ambíguas sobre cobrança:** Se o prospect não entende exatamente quanto vai pagar e quando, ele abandona.
- **Sem garantia visível:** Se a garantia não está no checkout, o prospect assume que não existe.
- **Botão genérico:** "Enviar" ou "Submeter" no botão de compra destrói conversão. Use verbos que confirmam a decisão.

---

## CHECKLIST FINAL

**Antes de publicar:**
- [ ] Botão de CTA é claro e usa verbo de ação
- [ ] Badge de segurança (SSL) está visível
- [ ] Garantia aparece antes ou ao lado do botão
- [ ] Order summary mostra exatamente o que o prospect está comprando
- [ ] Preço total e parcelas estão claros
- [ ] Helper texts explicam campos que podem gerar dúvida
- [ ] Mensagens de erro são úteis (não genéricas)
- [ ] Funciona bem em mobile (textos não cortados)
- [ ] Máximo 1 depoimento no checkout (não poluir)
- [ ] Textos legais estão presentes no rodapé
