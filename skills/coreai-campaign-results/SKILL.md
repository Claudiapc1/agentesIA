---
name: campaign-results
description: >
  Registra resultados de uma campanha existente do business ativo do
  ContextOS deste pacote. Lista campanhas, deixa escolher uma, pergunta
  métricas (leads, vendas, ROI, CPA, learnings) e preenche results.yaml.
  Acionar quando o usuário disser "resultados de campanha", "preencher
  results", "fechar campanha", ou /coreai:campaign-results.
---

# Campaign Results

Coleta e registra métricas finais de uma campanha.

## Pré-requisitos

- Leia `../coreai-shared/contextos-contract.md` e resolva o negócio ativo antes
  de qualquer escrita. Sem READY, bloqueie e ofereça `coreai-contexto`.
- Campanha criada via `coreai-campaign-new`.
- Arquivo `results.yaml` existe na pasta da campanha.

## Passos

### 1. Listar campanhas

Use `business_root` retornado pelo gate:

```bash
ls "$BUSINESS_ROOT/marketing/campaigns/" | grep -v '^_' | grep -v assets
```

Mostre numerada e peça escolha.

### 2. Coletar métricas (perguntas em ordem)

- Início (YYYY-MM-DD)
- Fim (YYYY-MM-DD)
- Canais usados (lista separada por vírgula)
- Investimento total em BRL (número)
- Investimento por canal (Meta Ads, Google Ads, outros)
- Impressões, cliques, CTR
- Leads, qualified leads
- Reuniões agendadas / realizadas
- Vendas, receita BRL
- CPA, CPL, ROI, ROAS
- O que funcionou (lista)
- O que não funcionou (lista)
- Ações pra próxima campanha (lista)
- Notas livres

Aceite "skip" ou vazio para pular.

### 3. Escrever YAML

Atualize `$BUSINESS_ROOT/marketing/campaigns/<slug>/results.yaml` preservando estrutura do template. Use Python inline com `yaml.safe_dump(allow_unicode=True, sort_keys=False)`.

### 4. Atualizar índice

Em `_index.yaml`, mude `status: planejada` → `status: encerrada` e adicione `encerrada_em`.

### 5. Resumo

```
Resultados registrados: <slug>
ROI: <X>x | Vendas: <Y> | Receita: R$<Z>
Local: <business_root>/marketing/campaigns/<slug>/results.yaml
```

## Edge cases

- Nenhuma campanha → sugerir `coreai-campaign-new`.
- `results.yaml` ausente → copiar de `../coreai-campaign-new/templates/results.yaml` e seguir.
