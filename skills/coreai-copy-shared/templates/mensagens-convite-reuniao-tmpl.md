# Template — Mensagens de Convite para Reunião (Diagnóstico)

**Categoria:** convite-reuniao
**Canal:** WhatsApp 1-a-1 (envio manual)
**Objetivo:** levar o lead a uma reunião de diagnóstico via sequência de mensagens
**Banco de ângulos:** `data/banco-angulos-convite-reuniao.yaml`
**Workflow:** `workflows/convite-reuniao-diagnostico.md`

---

## Quando usar

Use quando o objetivo é **convidar leads (frios, mornos ou base antiga) para uma reunião** (diagnóstico, sessão estratégica, call de descoberta) por WhatsApp, com munição pra rodar semanas/meses sem repetir mensagem.

**NÃO usar para:** venda direta com preço (use carta/VSL), conteúdo orgânico de feed (use organic-content), ou stories de recompensa (use P03 / stories-recompensa).

---

## Anatomia (3 blocos, toda mensagem)

```
[1] GANCHO    abre com o ângulo, faz o lead parar e se reconhecer
[2] CONTEXTO  o problema + prova/número real + existe outro caminho
[3] CTA       COM CONTEXTO: o que ele leva da reunião, depois pede o horário
```

### Regra de ouro do CTA

O lead **ainda não sabe o que é** a reunião. Então o CTA nunca é seco ("agende", "aplique"). Ele explica o valor antes de pedir a ação:

- Fraco: "Bora marcar?"
- Forte: "Quer que eu te mostre num diagnóstico onde isso trava seu lucro hoje?"

---

## Regras invioláveis

- Voz do cliente (se Torriani: Imperial, direto, posição de quem seleciona)
- CTA sempre com contexto
- PROIBIDO clichê de urgência fabricada: "6 em 7", "vagas encerrando", "última chance", "vou passar pra outra pessoa"
- Zero travessão, zero emoji
- Todo número vem do proof-bank do cliente. Nada inventado
- `[Nome]` como placeholder. Uma mensagem por contato, espera resposta, avança
- Gancho de frase única (sem ponto no meio da promessa)

---

## Estrutura de saída (3 grupos)

| Grupo | Qtd sugerida | Para quem |
|---|---|---|
| **Abertura** | 15 | Primeiro contato. 15 ângulos diferentes (ver banco) |
| **Follow-up** | 15 | Abriu conversa mas não marcou |
| **Remarketing** | 10 | Lead frio, base antiga, ex-contato |

Total: ~40 mensagens = 60 dias de disparo.

---

## Molde por mensagem

```
{ id, grupo, angulo, titulo, hint, mensagem }
```

### Exemplo — Abertura (ângulo: pergunta do gargalo)

```
[Nome], uma pergunta honesta: quanto do seu dia ainda passa por você?

Se a resposta for "quase tudo", o problema não é falta de esforço, é que a operação depende de você pra andar.

No diagnóstico eu te mostro onde isso trava seu lucro e quais partes um agente de IA já consegue assumir pra tirar você do meio.

Topa 30 minutos pra eu te mostrar isso no seu negócio?
```

### Exemplo — Follow-up (ângulo: escolha simples)

```
[Nome], pra eu não ficar te incomodando, me responde só uma coisa:

1. Faz sentido a gente marcar o diagnóstico e você quer que eu mande os horários
2. Não é prioridade agora e prefere que eu te procure mais pra frente

Qualquer uma das duas tá ótima, só me diz qual.
```

### Exemplo — Remarketing (ângulo: reabre lead antigo)

```
Oi [Nome], tudo bem?

Um tempo atrás você demonstrou interesse em destravar o crescimento do seu negócio. Como ficou isso? Já resolveu ou ainda tá no aperto?

Se ainda faz sentido, tenho um horário pra fazer o diagnóstico da sua operação e te mostrar o que hoje já dá pra automatizar com IA.

Quer que eu te chame?
```

---

## Entrega em HTML (portal)

Gerar também um HTML no Design System do cliente (Torriani Dark, Torriani Blue #2B7DE1),
com cards por mensagem, filtros por grupo (Abertura/Follow-up/Remarketing) e botão copiar.
Referência de output: `[exemplo de cliente não empacotado] WhatsApp — Diagnóstico do Negócio.html`

---

## Checklist pré-entrega

- [ ] 3 blocos em toda mensagem (gancho + contexto + CTA)
- [ ] CTA com contexto (nunca só "agende")
- [ ] Ângulos variados nas aberturas (sem repetir gancho)
- [ ] Zero clichê de urgência fabricada
- [ ] Zero travessão, zero emoji
- [ ] Todo número rastreável ao proof-bank
- [ ] `[Nome]` como placeholder
- [ ] Validação anti-IA + Oráculo (10/10)
