---
version: "1.0"
date: "2026-03-09"
author:
  agent: "squad-chief"
  squad: "copy"
aios: true
project: "opb-corp"
---

# Task: Briefing — Captura Estruturada do Projeto de Copy

## Task Anatomy

| Campo | Valor |
|-------|-------|
| task_name | briefing |
| status | active |
| responsible_executor | copy-chief |
| executor | copy-chief |
| execution_type | interactive |
| elicit | true |

## Objetivo

Capturar todas as informações necessárias do usuário para que o Copy Chief possa rodar o diagnóstico Tier 0 e selecionar os copywriters corretos.

## Input

Descrição livre do usuário sobre o projeto de copy.

## Output

```yaml
briefing:
  projeto: "{nome do projeto}"
  produto: "{descrição do produto/serviço}"
  preco: "{faixa de preço}"
  icp:
    quem: "{perfil do cliente ideal}"
    dor_principal: "{maior dor/frustração}"
    desejo_principal: "{maior desejo/aspiração}"
    objecoes: ["{objeção 1}", "{objeção 2}"]
  canal: "{sales page | email | VSL | ads | launch | webinar | social | magalog | infomercial | cohort}"
  objetivo: "{gerar leads | vender direto | nutrir | lançar | reativar}"
  tom: "{agressivo | consultivo | story-driven | educacional | provocativo}"
  stakes: "{low | medium | high | critical}"
  referencias: "{exemplos de copy que gosta, concorrentes}"
  restricoes: "{compliance, regulatório, brand guidelines}"
  prazo: "{urgência}"
```

## Pre Conditions
- Usuario disponivel para responder perguntas interativas sobre o projeto
- Informacao minima sobre produto ou servico a ser vendido
- Nocao basica do publico-alvo (mesmo que superficial — sera refinado no diagnostico)
- Canal de distribuicao pelo menos cogitado (ads, email, sales page, etc.)

## Elicitation Flow

Perguntar na seguinte ordem (máximo 5 perguntas, agrupar quando possível):

1. **Produto + Preço:** "O que você está vendendo e por quanto?"
2. **ICP + Dor:** "Quem é o cliente ideal e qual a maior dor/desejo dele?"
3. **Canal + Objetivo:** "Onde vai publicar (sales page, email, VSL, ads...) e qual o objetivo?"
4. **Tom + Stakes:** "Qual tom de voz? E qual o nível de importância desse projeto (low/medium/high/critical)?"
5. **Referências + Restrições:** "Tem referências de copy que gosta? Alguma restrição (compliance, brand)?"

## Veto Conditions

- NÃO avançar sem canal definido (impossível rotear sem canal)
- NÃO avançar sem ICP (copy sem ICP é copy genérica)
- NÃO avançar sem produto (impossível criar argumento sem saber o que se vende)
- NÃO avançar sem o cliente ter aprovado o escopo

## Acceptance Criteria

- [ ] Todos os campos obrigatórios preenchidos (produto, ICP, canal, objetivo)
- [ ] Briefing formatado no schema YAML acima
- [ ] Handoff para task `diagnose.md` com briefing completo

## Handoff

→ `diagnose.md` (Tier 0 Diagnostic)

## Output Example

```yaml
# Briefing — Programa Acelerador Digital

projeto:
  nome: "Programa Acelerador Digital"
  tipo: "Lançamento PLF (Internal Launch)"
  cliente: "Juliano Torriani"

produto:
  nome: "Programa Acelerador Digital"
  formato: "Mentoria em grupo (12 semanas)"
  preco: "R$997 ou 12x R$97"
  transformacao: "Mentor digital sai de R$3k/mês para R$30k/mês"
  mecanismo_unico: "Método 3R (Reposicionar, Reter, Rentabilizar)"

avatar:
  quem: "Profissionais com expertise que querem monetizar online"
  idade: "30-50 anos"
  dor_principal: "Tem conhecimento mas não sabe transformar em renda"
  desejo: "Faturar R$10-30k/mês com mentoria digital"
  objecoes: ["Não tenho audiência", "Já tentei e não deu certo", "Não tenho tempo"]

canal: "Email + Sales Page + Webinar"
prazo: "Lançamento em 45 dias"
assets_solicitados: ["Sequência de emails", "Sales Page", "PLC scripts"]
```

