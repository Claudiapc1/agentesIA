---
name: coreai-stories-recompensa
description: Gera lotes de Stories de captação que entregam uma recompensa na DM (padrão P03 Stories Recompensa, decifrado de @thiagoreis). Cada story é abertura forte com número/prazo + contexto do entregável ("eu montei um guia/relatório com N casos") + CTA "me manda PALAVRA aqui 👇". Serve pra qualquer recompensa e qualquer cliente. Use quando o usuário pedir "stories de captação", "stories pra recompensa", "stories pra divulgar o guia/material", ou digitar /stories-recompensa.
---

## Contrato de execução
Leia `../coreai-shared/contextos-contract.md` antes de produzir. Caminhos relativos partem deste SKILL.md. Use exclusivamente o cliente selecionado. Recompensa e números devem ser reais: se o padrão exigir número/prazo e não houver prova, solicite o dado ou marque rascunho incompleto, nunca invente. Esta skill redige stories; não publica nem envia recompensa automaticamente.


> **Roteamento:** redação de Stories Recompensa. Pedidos de tráfego devem voltar ao CoreAI:Zeus para selecionar uma rota instalada.

# CoreAI:Stories Recompensa

Skill pra gerar **Stories Recompensa**: o story de Instagram que faz a pessoa responder uma palavra-chave pra receber uma recompensa (guia, relatório, dossiê, estudos de caso) na DM.

Não é o story que entrega o conteúdo. É o story que **gera desejo pela recompensa e captura o lead** com baixo atrito (responder 1 palavra, sem sair do app).

## Padrão canônico

Esta skill aplica o **Padrão P03** do squad Conteúdo. Leia sempre antes de gerar:

```
references/P03-stories-recompensa.md
```

P03 tem a anatomia completa, heurísticas H1-H7, templates A/B/C, anti-padrões e checklist. **A skill não inventa formato, ela executa o P03.**

## Anatomia (resumo, detalhe no P03)

3 blocos, lê em 3-5 segundos:

```
[ABERTURA]  promessa/resultado com número e prazo
            (Formato A "Como [resultado]", B resultado seco, ou C pergunta)
[CONTEXTO]  o entregável + prova: "Montei um relatório com 30 casos que mostram X"
[CTA]       "Me manda 'PALAVRA' aqui 👇"
```

Regras de ouro (ver H1-H7 no P03):
- Toda abertura TEM número/prazo
- O bloco CONTEXTO é obrigatório (diz o que recebe + prova, na 1ª pessoa "eu montei")
- Pergunta é o formato mais fraco: máximo 2-3 a cada 15
- Vende o RESULTADO do empresário, não a feature técnica
- 1 palavra-chave única pra toda a campanha
- Zero travessão, zero catálogo de features, zero gancho lúdico/metafórico

## Como o usuário invoca

```
/stories-recompensa                  -> pergunta os insumos e gera
/stories-recompensa <link ou arquivo da recompensa>   -> já começa do conteúdo
```

## Fluxo de execução

### Passo 1: Identificar cliente e recompensa

Se o cliente ainda não foi identificado nesta sessão, pergunte o slug do business
(pra carregar voz e gravar output no lugar certo):
- Contexto: `{context_root}/businesses/{slug}/`
- Output: `{business_dir}/outputs/`

Depois colete os **insumos** (ver seção "Insumos" do P03):
1. **A recompensa** (link/arquivo). Se for link localhost/web, abrir com Playwright e
   extrair o conteúdo (use subagente se a página for grande, pra não estourar contexto).
   Se for arquivo .md, ler direto.
2. **A palavra-chave** do CTA (ex: AGENTE, CLIENTE, GUIA). Se o cliente tiver tese ativa
   com CTA padrão (registrada no contexto do negócio), sugerir essa.
3. **O que o lead recebe** ao responder (a própria recompensa na DM, ou link dela).
4. **Quantidade** (default 15).

### Passo 2: Extrair ângulos da recompensa

Da recompensa, extraia o material pra alimentar os stories:
- Promessa central
- Casos reais, números, provas (resultados específicos, não redondos)
- Benefícios pro avatar (o que muda na vida do empresário/cliente)

Cada story = 1 ângulo de benefício ou 1 caso forte. Não repetir ângulo.

### Passo 3: Gerar o lote no padrão P03

Pra cada story, montar os 3 blocos seguindo os templates A/B/C do P03:
- Variar a abertura (maioria declarativa "Como..." ou resultado seco, poucas perguntas)
- Sempre incluir o bloco CONTEXTO com o entregável nomeado + prova, na 1ª pessoa
- Variar o nome do entregável (relatório, guia, reporte, estudos de caso, dossiê)
- CTA único e idêntico em todos

Aplicar a **voz do cliente**. Nunca aplicar a voz de outro cliente.

### Passo 4: Validar anti-IA (OBRIGATÓRIO)

Regra NON-NEGOTIABLE da operação: copy pública não sai sem validação anti-IA.

- Checar **zero travessão** (— ou –) em todo o texto da copy
- Checar ausência de clichês de IA (ver `references/filtro-anti-ia.md`)
- Rodar o checklist do P03 (todos os itens)

Se houver travessão ou clichê, corrigir antes de declarar pronto.

### Passo 5: Entregar

- Gravar em `{business_dir}/outputs/<campanha-ou-recompensa>/stories/STORIES-RAPIDOS-CAPTACAO-<slug-recompensa>.md`
- Mostrar os stories no chat pra aprovação
- Incluir o bloco "COMO USAR" no final do arquivo (fundo casual, caixas de cor, 1/dia, etc.)

## Insumos mínimos

| Insumo | Obrigatório | Default |
|--------|-------------|---------|
| Cliente (slug) | sim | perguntar |
| Recompensa (link/arquivo) | sim | perguntar |
| Palavra-chave do CTA | sim | sugerir da tese ativa, senão perguntar |
| O que o lead recebe | sim | a recompensa na DM |
| Quantidade | não | 15 |

## Anti-padrões (não fazer)

Decifrados em iterações reais. NÃO repetir:
- ❌ Transformar tudo em pergunta (pergunta é o formato fraco)
- ❌ Bullet/catálogo de features ("SDR 24/7 · Atendente · Vendedor")
- ❌ Gancho lúdico/metafórico ("Seu cérebro é uma peneira")
- ❌ Esquecer o bloco CONTEXTO (story vira frase solta sem corpo)
- ❌ Abertura sem número/prazo
- ❌ Travessão (regra absoluta)

## Referências

- Padrão canônico: `references/P03-stories-recompensa.md`
- Filtro anti-IA: `references/filtro-anti-ia.md`
- Convenção de outputs: salvar sob o negócio selecionado no ContextOS, sem sobrescrever entregas existentes.
