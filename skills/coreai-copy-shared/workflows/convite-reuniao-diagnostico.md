# Workflow: Convite para Reunião de Diagnóstico

## Metadados

```yaml
nome: convite-reuniao-diagnostico
versao: "1.0.0"
autor: Juliano Torriani
tipo: workflow
categoria: convite-reuniao
canal: WhatsApp 1-a-1 (envio manual)
duracao: 60 dias por ciclo
objetivo: Levar leads a uma reunião de diagnóstico via sequência de mensagens, com munição pra 60 dias sem repetir
fonte: "Engenharia reversa da sequência do time do Érico Rocha (2026), reposicionada para diagnóstico operacional de negócio real"
```

---

## Visão Geral

Sequência de mensagens de WhatsApp 1-a-1 para **convidar leads a uma reunião de diagnóstico** (do negócio / da operação), com volume suficiente pra rodar 60 dias direto sem repetir mensagem no mesmo contato.

### Filosofia Central

> **Não é venda direta. É seleção + clareza.** A reunião entrega o mapa da operação. O lead sai sabendo o que dá pra automatizar, cortar e escalar, tendo fechado ou não.

### Diferença do modelo original (Érico Rocha)

Adaptamos a mecânica de follow-up deles, mas:
- Trocamos o tema (lançamento/infoproduto) por **diagnóstico operacional de negócio real** (produtividade, lucro, escala, agentes de IA)
- Removemos os clichês de urgência fabricada ("6 em 7", "vagas encerrando", "última chance", "vou passar pra outra pessoa")
- Aplicamos a **voz Imperial** (posição de quem seleciona, não de quem implora)

### Fluxo do Funil

```
Lead → Abertura (1 de 15 ângulos) → responde? 
  → SIM: conduz pro agendamento (F15/confirmação)
  → NÃO responde: Follow-up (1 a cada 2-3 dias)
  → sumiu / base antiga: Remarketing
→ Reunião de diagnóstico → mapa da operação → oferta (se aplicável)
```

---

## Ativos do Workflow

| Ativo | Onde |
|---|---|
| Banco de ângulos (dataset) | `data/banco-angulos-convite-reuniao.yaml` |
| Template (molde + exemplos) | `templates/mensagens-convite-reuniao-tmpl.md` |
| Output de referência (HTML) | `[exemplo de cliente não empacotado] WhatsApp — Diagnóstico do Negócio.html` |

---

## Anatomia da Mensagem (3 blocos)

```
[1] GANCHO    abre com o ângulo, faz o lead parar e se reconhecer
[2] CONTEXTO  o problema + prova/número real + existe outro caminho
[3] CTA       COM CONTEXTO: o que ele leva da reunião, depois pede o horário
```

**Regra de ouro do CTA:** o lead ainda não sabe o que é a reunião. O CTA explica o valor antes de pedir a ação. Nunca "agende" seco.

---

## Estrutura (3 grupos, ~40 mensagens)

| Grupo | Qtd | Para quem |
|---|---|---|
| **Abertura** | 15 | Primeiro contato. 15 ângulos diferentes |
| **Follow-up** | 15 | Abriu conversa mas não marcou |
| **Remarketing** | 10 | Lead frio, base antiga, ex-contato |

Os 15 ângulos de abertura, os 15 de follow-up e os 10 de remarketing estão catalogados no banco (`data/banco-angulos-convite-reuniao.yaml`).

---

## Passo a Passo

### Passo 1: Carregar contexto do cliente

- Voz, proof-bank (números reais), ICP, oferta/produto que a reunião leva
- Palavra da oferta (ex: diagnóstico, sessão estratégica, call de descoberta)

### Passo 2: Puxar os ângulos do banco

Ler `data/banco-angulos-convite-reuniao.yaml`. Cada ângulo é reutilizável: trocar produto e prova mantém o gancho.

### Passo 3: Escrever o lote (3 grupos)

Para cada ângulo, montar os 3 blocos (gancho + contexto + CTA com contexto), na voz do cliente. Variar o gancho, nunca repetir.

### Passo 4: Validar (obrigatório)

1. **Filtro Anti-IA** (`validators/filtro-anti-ia.md`): zero travessão, zero clichê, zero emoji
2. **Oráculo Torriani** (`validators/oraculo-torriani.md`): 10/10 ou refaz

Checar especificamente: sem "6 em 7", "vagas encerrando", "última chance". CTA com contexto em todas.

### Passo 5: Entregar em HTML

Gerar HTML no Design System do cliente (Torriani Dark, Blue #2B7DE1) com cards, filtros por grupo e botão copiar. Registrar como peça no portal do cliente.

---

## Cadência de 60 dias

```
Semana 1-4:  Aberturas (1 ângulo por contato que ainda não respondeu)
             Quem responde → conduz pro agendamento
             Quem não → entra no Follow-up
Semana 3-8:  Follow-ups (1 a cada 2-3 dias, ângulo diferente)
A qualquer momento: Remarketing pra base fria / sumida
```

**Regra:** nunca dispara a sequência inteira no mesmo contato de uma vez. Uma mensagem, espera resposta, avança.

---

## VETO CONDITIONS

```yaml
veto_conditions:
  - "Se a copy usa clichê de urgência fabricada (6 em 7, vagas encerrando) → REPROVA e reescreve"
  - "Se o CTA é seco (só 'agende'/'aplique' sem contexto) → REPROVA, adiciona o que a reunião entrega"
  - "Se tem travessão ou emoji → REPROVA (regra de marca)"
  - "Se número não rastreável ao proof-bank → REMOVER (nada inventado)"
  - "Se ângulos de abertura se repetem → variar (o valor está na diversidade)"
```

---

## Validação Oráculo (obrigatória)

Toda copy passa por `workflows/validacao-oraculo-torriani.md` antes de publicar. Copy 10/10 ou refaz.

---

*Workflow documentado por Copy Chief — Squad Copy Torriani*
*Baseado na engenharia reversa da sequência do time do Érico Rocha, reposicionada para diagnóstico operacional*
