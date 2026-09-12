# Árvore de Decisão — Squad Copywriters

> Regras de decisão do Torriani formalizadas.
> O Copy Chief (Logan) DEVE consultar este arquivo quando receber um pedido de copy.

## Hierarquia de roteamento (declarada 2026-08-18)

Este arquivo é a **camada 1** da triagem: decide faixa de preço e temperatura do público.
Depois dele, a ordem de consulta é:

1. **`arvore-decisao.md`** (este arquivo) → triagem por preço/temperatura (as 3 perguntas iniciais)
2. **`copy-request-routing.md`** → triagem por asset pedido no intake (o que o cliente quer criar)
3. **`routing-matrix.yaml`** → fonte de verdade de agente-por-tipo-de-copy (seleção final do copywriter)

Se este arquivo e `routing-matrix.yaml` sugerirem copywriters diferentes pro mesmo tipo de copy,
`routing-matrix.yaml` decide o agente final — este arquivo cobre a triagem anterior, não a seleção de agente.

---

## TRIAGEM RÁPIDA: 3 Perguntas

Quando alguém pede copy, Logan pergunta:

### Pergunta 1: "Qual a faixa de preço do produto?"

```yaml
ate_97:
  nome: "Low Ticket"
  tipo_copy: "Oferta direta"
  formatos: ["Sales page curta", "VSL curta (5-10 min)", "Ads diretos"]
  copywriters: ["@jon-benson", "@gary-halbert", "@john-carlton"]
  comandos: ["*sales-page", "*vsl", "*ads"]
  processo_comercial: false
  observação: "Copy direta, sem enrolação. Preço baixo = decisão rápida."

97_a_497:
  nome: "Curso"
  tipo_copy: "Carta de vendas ou VSL"
  formatos: ["Sales page média", "VSL (15-25 min)", "Email sequence", "Webinar curto"]
  copywriters: ["@gary-halbert", "@jon-benson", "@andre-chaperon", "@frank-kern"]
  comandos: ["*sales-page", "*vsl", "*email-sequence", "*webinar"]
  processo_comercial: false
  observação: "Pessoa precisa se envolver um pouco. Mais educação que low ticket."

997_a_2000:
  nome: "Produto médio"
  tipo_copy: "Aula / Webinar / Sala Secreta"
  formatos: ["Webinar de 45-60 min", "Sala Secreta", "Sales page longa", "Email sequence aquecimento"]
  copywriters: ["@frank-kern", "@russell-brunson", "@gary-halbert", "@andre-chaperon"]
  comandos: ["*webinar", "*sales-page", "*email-sequence"]
  workflows: ["funil-sala-secreta"]
  processo_comercial: false
  observação: "Sala Secreta vende produtos de R$997-2.000. Pessoa precisa de mais contexto."

acima_2000:
  nome: "High Ticket"
  tipo_copy: "Venda com relacionamento"
  formatos: ["Mentorship ads", "Página de aplicação", "Video 15-20 min", "Aula 1h", "Script de vendas"]
  copywriters: ["@juliano-torriani", "@dan-kennedy", "@alex-hormozi", "@todd-brown"]
  comandos: ["*mentorship-ads", "*sales-page", "*call-script", "*close-script"]
  workflows: ["funil-fli", "high-ticket-sales"]
  processo_comercial: true
  observação: |
    OBRIGATÓRIO incluir processo comercial.
    Pessoa PRECISA passar tempo contigo.
    Não adianta mandar pra carta de vendas só.
    Levantada de mao → relacionamento → conversão.

acima_5000:
  nome: "Premium / Ultra High Ticket"
  tipo_copy: "Vendas complexas com relacionamento 1a1"
  formatos: ["FLI com vários ângulos", "Video Big Idea", "Treinamento 1-2 dias", "Script comercial"]
  copywriters: ["@juliano-torriani", "@dan-kennedy", "@alex-hormozi"]
  comandos: ["*mentorship-ads", "*call-script", "*close-script"]
  workflows: ["funil-fli", "high-ticket-sales"]
  processo_comercial: true
  observação: |
    TODOS são vendas com relacionamento.
    Funil de Lucro Imediato com vários ângulos.
    Levantada de mao → relacionamento → conversão.
    Quanto maior o ticket, mais tempo de relacionamento.
```

### Pergunta 2: "Qual a temperatura do público?"

```yaml
frio:
  descrição: "Não te conhece"
  abordagem: "Educacao primeiro, nunca venda direta"
  tipo_anuncio: "Anúncio de CONTEÚDO (não parecer anúncio)"
  regras:
    - "Headlines com curiosidade + afirmações contraintuitivas"
    - "NUNCA fazer perguntas nos anúncios"
    - "Começar com AFIRMACOES contraintuitivas"
  copywriters_ideais: ["@john-carlton", "@gary-halbert", "@dan-koe"]
  awareness_level: "Unaware ou Problem Aware"

morno:
  descrição: "Já te segue / já consumiu algo"
  abordagem: "Pode ir direto pra oferta com contexto"
  tipo_anuncio: "Mix conteúdo + oferta"
  formatos: ["Email sequences", "Soap Opera", "Conteúdo orgânico", "Sala Secreta"]
  copywriters_ideais: ["@andre-chaperon", "@ben-settle", "@russell-brunson"]
  awareness_level: "Solution Aware ou Product Aware"

quente:
  descrição: "Já comprou algo / já te conhece bem"
  abordagem: "Oferta direta, upsell, ascensão"
  tipo_anuncio: "Oferta direta com prova social"
  formatos: ["Upsell page", "Downsell", "Ascensao", "Relacionamento 1a1"]
  copywriters_ideais: ["@dan-kennedy", "@alex-hormozi", "@juliano-torriani"]
  awareness_level: "Product Aware ou Most Aware"
  modo: "*operação-tática (modo rápido)"
```

### Pergunta 3: "O que exatamente você quer criar?"

```yaml
situações:
  vender_low_ticket:
    comandos: ["*sales-page", "*vsl"]
    copywriters: ["@gary-halbert", "@jon-benson"]
    workflow: null

  vender_mentoria:
    comandos: ["*mentorship-ads"]
    copywriters: ["@juliano-torriani", "@dan-kennedy"]
    workflow: "funil-fli"
    obrigatório: "Processo comercial + levantada de mao"

  vender_curso_ate_2k:
    comandos: ["*webinar", "*sales-page"]
    copywriters: ["@frank-kern", "@russell-brunson"]
    workflow: "funil-sala-secreta"

  vender_ecommerce:
    comandos: ["*ads", "*email-sequence"]
    copywriters: ["@john-carlton", "@ben-settle"]
    workflow: "wf-ecommerce-copywriting"

  posts_instagram:
    comandos: ["*organic-content"]
    copywriters: ["@dan-koe"]
    workflow: "conteúdo-orgânico-diario"

  scripts_vendas:
    comandos: ["*call-script", "*close-script"]
    copywriters: ["@dan-kennedy"]
    workflow: "high-ticket-sales"

  mensagens_whatsapp:
    comandos: ["*email-sequence"]  # adaptar formato
    copywriters: ["@andre-chaperon"]
    observação: "Adaptar formato de email pra WhatsApp"

  copy_conversao_direta:
    comandos: ["*sales-page"]
    copywriters: ["@gary-halbert", "@clayton-makepeace"]
    workflow: null

  lancamento_completo:
    comandos: ["*launch-plan"]
    copywriters: ["@jeff-walker"]
    workflow: "lançamento-completo"
    pré-requisito: "Premissas prontas + tese + big idea + mecanismo"

  email_diario:
    comandos: ["*email-daily"]
    copywriters: ["@ben-settle"]
    workflow: "email-marketing-contínuo"
```

---

## REGRAS DE ANÚNCIOS

### Regras invioláveis (RA)
```yaml
RA-01: "NUNCA começar com pergunta"
RA-02: "Curiosidade nos primeiros 3 segundos"
RA-03: "Sem pitch explícito — anúncio de CONTEÚDO"
RA-04: "Sem conteúdo técnico — linguagem acessível"
RA-05: "Sem clichês de marketing digital"
```

### Formato padrão
```
[HEADLINE contraintuitiva ou afirmação forte]
[Mini copy — 2-4 linhas fluidas]
[CTA claro]
---
[DESCRICAO DO VISUAL: como deve ser a imagem ou como gravar o video]
```

### Andromeda (Meta Ads Advantage+)

**O que é:** Motor de IA da Meta (rollout global outubro 2025) que usa o CRIATIVO como sinal primario de segmentação. Antes, segmentação era o controle principal e criativo era secundario. Agora é o inverso — o conteúdo do anúncio (visual + copy + formato) determina PARA QUEM o anúncio aparece.

**Implicacao crítica:** Copy É segmentação. O texto e visual determinam para quem o anúncio aparece.

```yaml
regras_andromeda:
  variacoes_minimas: 8-15 por ad set (cada um com ângulo/formato/mensagem DISTINTA)
  criativos_novos_mes: 8-20 para manter o algoritmo alimentado
  composição: "60% polido + 40% UGC"
  renovação: "25-30% da biblioteca criativa por mes"
  reserva: "3-5 variações reserva antes de lancar"
  refresh: "A cada 2-4 semanas"

  variar_obrigatorio:
    - angulo_psicologico: "Dor, aspiração, prova social, autoridade, curiosidade, medo de perder"
    - narrativa: "Storytelling, problema/solução, testemunho, demonstração"
    - formato: "Video curto (<15s), video médio (30-60s), imagem estática, carrossel, UGC"
    - tom: "Provocativo, empático, educativo, urgente"
    - persona: "Propostas de valor distintas para personas diferentes"

  framework_pda:
    P: "Persona — Para quem este criativo fala?"
    D: "Desejo — Qual desejo/dor esta sendo ativado?"
    A: "Awareness — Em qual nível de consciência o prospect esta?"

  nao_conta_como_diversidade:
    - "20 versoes do mesmo anúncio mudando só headline"
    - "Ajustes de cor ou disposicao de elementos"
    - "Duplicar anúncios com alteracoes cosméticas"
    - "Trocar background ou CTA mantendo o mesmo conceito"
    - "Meta detecta similaridade e LIMITA distribuição"

  volume_por_investimento:
    ate_50k: "1 criativo novo/mes"
    50k_a_250k: "4-5/mes (1/semana)"
    250k_a_500k: "6-20/mes (2-4/semana)"
    acima_500k: "20+/mes"

  formato_entrega: |
    Cada variação deve conter:
    1. Copy completa (headline + body + CTA)
    2. Descrição do visual (imagem OU instruções de video)
    3. Indicacao do ANGULO PSICOLOGICO usado
    4. Indicacao da PERSONA alvo
    5. Formato do criativo (video/imagem/carrossel/UGC)

  checklist_producao:
    - "1. Mapear 4-6 ângulos psicológicos para o produto"
    - "2. Para cada ângulo, criar pelo menos 2 formatos diferentes"
    - "3. Variar o tom de voz entre criativos"
    - "4. Incluir mix: video curto + médio + imagem + carrossel + UGC"
    - "5. Cada copy com texto primario, headline e descrição SIGNIFICATIVAMENTE diferentes"
    - "6. Testar hooks COMPLETAMENTE diferentes (não variações do mesmo)"
    - "7. Pipeline contínuo de novos conceitos — não apenas otimizar existentes"
```

---

## ARQUITETURA DE FUNIS (11 Caminhos Simultaneos)

Todos os caminhos funcionam SIMULTANEAMENTE. Não cria conteúdo e reza pra vender — cria sistema de captura onde a venda é resultado natural.

### Caminho 1: STORY → PRODUTO PRINCIPAL (DIRETO)
```
STORY (levantada de mao) → PRODUTO PRINCIPAL
```
- Story com CTA direto ("deslize para cima")
- Leva pra página de vendas ou aplicação
- Ideal para escassez real (vagas limitadas/tempo limitado)

### Caminho 2: LINK DA BIO → VIDEO → APLICACAO → PRODUTO PRINCIPAL
```
LINK NA BIO → VIDEO EXPLICATIVO → FORMULARIO APLICACAO → PRODUTO PRINCIPAL
```
- Anuncia video especial/exclusivo no link da bio
- Video cria desejo e explica transformação
- Formulário de aplicação qualifica prospects
- Aprova candidatos ideais

### Caminho 3: AREA DE MEMBROS → ENTREGA PRODUTO 1 → PITCH PRODUTO PRINCIPAL
```
AREA DE MEMBROS → ENTREGA PRODUTO 1 → PRODUTO PRINCIPAL
```
- Cliente acessa area de membros de produto que já comprou
- Ao final de cada módulo, recomendações personalizadas
- Seção "Próximos Passos" direciona pra produto principal como evolução natural

### Caminho 4: POST DEMONSTRACAO → DOC → PRODUTO ENTRADA → PRODUTO PRINCIPAL
```
POST RESULTADOS → DOCUMENTO GRATUITO → PRODUTO ENTRADA → PRODUTO PRINCIPAL
```
- Compartilha resultados reais em post do feed
- Oferece documento gratuito explicando o método
- No documento, oferece produto de entrada acessível
- Dentro do produto de entrada, escalona pra produto principal

### Caminho 5: PRODUTO ENTRADA → PEDE DEPOIMENTO → PRODUTO PRINCIPAL
```
PRODUTO ENTRADA → FORMULARIO DEPOIMENTO → PRODUTO PRINCIPAL
```
- Cliente implementa e obtem resultado com produto de entrada
- Solicita depoimento por formulário específico
- Após enviar depoimento, recebe oferta exclusiva pro produto principal
- Posicionada como "próximo nível lógico"

### Caminho 6: DESTAQUE CASOS → DM → FORMULARIO → PRODUTO PRINCIPAL
```
DESTAQUE CASOS → DM AUTOMATICA → FORMULARIO PRE-VENDA → PRODUTO PRINCIPAL
```
- Destaque com casos de sucesso/transformações
- No final, pede palavra-chave na DM
- Resposta automática pede informações e envia link de formulário
- Formulário qualifica e direciona

### Caminho 7: REELS → CAIXINHA → RESPOSTA → PRODUTO PRINCIPAL
```
REELS VIRAL → CAIXINHA PERGUNTAS → RESPOSTA STORIES → PRODUTO PRINCIPAL
```
- Reels educacional/entretenimento com alto potencial viral
- Stories seguintes: caixinha de perguntas sobre o tema
- Seleciona perguntas estratégicas que abrem porta pra solução
- Na resposta, menciona produto principal

### Caminho 8: CARROSSEL TENSAO → PERFIL → HIGHLIGHTS → PRODUTO PRINCIPAL
```
CARROSSEL TENSAO → VISITA PERFIL → HIGHLIGHT METODO → PRODUTO PRINCIPAL
```
- Carrossel que cria tensão psicológica sem resolver completamente
- Prospect visita perfil pra buscar mais informações
- Highlights estratégicos mostram método/sistema
- Highlight do método leva ao produto principal

### Caminho 9: POST RESULTADOS → DOC GRATUITO → PRODUTO PRINCIPAL (DIRETO)
```
POST RESULTADOS → DOCUMENTO GRATUITO → PRODUTO PRINCIPAL
```
- Compartilha resultados reais em post do feed
- Oferece documento gratuito explicando o método
- No documento, direciona DIRETO pro produto principal (sem produto entrada intermediário)

### Caminho 10: REELS DOR → LINK BIO → APLICACAO → CONVERSA → PRODUTO PRINCIPAL
```
REELS DOR/SOLUCAO → LINK NA BIO → APLICACAO → CONVERSA/APRESENTACAO → PRODUTO PRINCIPAL (FECHAMENTO)
```
- Reels que bate na dor do público e entrega pequena solução
- Chama pra clicar no link da bio e fazer aplicação
- Formulário qualifica o prospect
- Conversa e apresentação personalizada conduzem ao fechamento

### Caminho 11: MEMBROS FUNDADORES (Stories/Posts/WhatsApp → Formulário → Aprovacao → Apresentação → Venda)
```
STORIES/POSTS/WHATSAPP → MEMBROS FUNDADORES → FORMULARIO → APROVACAO → APRESENTACAO → PRODUTO PRINCIPAL (VENDA)
```
- Ativa audiência via stories, posts e WhatsApp sobre novo produto
- Oferta posicionada como oportunidade exclusiva de membros fundadores (levantada de mao)
- Interessados direcionados para formulário de pre-qualificação
- Candidatos aprovados recebem apresentação personalizada
- Apresentação conduz ao fechamento

---

### Princípio da Arquitetura
```yaml
arquitetura:
  conceito: "Todos os 11 caminhos funcionam SIMULTANEAMENTE"
  elimina:
    - "Dependência de campanhas"
    - "Necessidade de lançamentos"
    - "Obrigação de postagem diaria"
    - "Funis lineares rígidos"
  princípio: |
    Não cria conteúdo e reza pra vender.
    Cria sistema de captura onde a venda é resultado natural de qualquer interação.
    Quando a pessoa esta dentro da ARQUITETURA (ambiente Instagram),
    não importa pra onde ela navegue — todos os caminhos levam a venda.

  componentes_essenciais:
    1_multiplos_pontos_entrada:
      - "Bio do Instagram"
      - "Stories"
      - "Conteúdo do feed"
      - "Lead magnets"
      - "Email marketing"
      - "Plataforma de entrega"
      - "Página de vendas"
    2_interconexao_total:
      - "Cada conteúdo menciona outros conteúdos relevantes"
      - "Cada produto sugere produtos complementares"
      - "Cada gratuitidade aponta para pagos relacionados"
    3_onipresenca_sutil:
      - "Não precisa vender diretamente em cada contato"
      - "Sempre há um próximo passo disponível"
      - "Ofertas posicionadas como soluções naturais"
```

---

## SOBRE PLF / LANCAMENTOS

```yaml
regra: "Só sugere PLF/lançamento DEPOIS que premissas já foram feitas"
pré-requisitos:
  - "Tese definida"
  - "Big Idea construida"
  - "Mecanismo Único identificado"
  - "Avatar mapeado"
  - "Awareness diagnosticado"
nao_sugere_antes: "Nunca sugere lançamento antes de ter premissas prontas"
```

---

## ESTRUTURA DE ARGUMENTACAO HIGH TICKET (Método Torriani)

### Diagnóstico (o que esta errado)
```yaml
problemas:
  1: "Você parece pessoa genérica no Instagram — olho pro seu perfil e vejo coisas iguais a todos"
  2: "Seu produto não esta gerando desejo — se tirar seu nome fica igual aos outros"
  3: "Não tem processo comercial — mandei mensagem e vi que não tem processo"
  4: "Só faz um tipo de funil — precisa ter múltiplos canais de captação"
```

### Solução (5 etapas do método)
```yaml
etapas:
  1:
    nome: "Construir marca pessoal de destaque"
    metáfora: "Construir o seu Trono"
  2:
    nome: "Transformar mentoria em oferta que gera desejo"
    metáfora: "Oferta Trono"
    detalhe: "Tirar a palavra mentoria, criar oferta como grandes lançamentos"
  3:
    nome: "Ativar processo comercial"
    detalhe: "Playbook desde pessoa chegar até comprar"
  4:
    nome: "Ativar canais de captação"
    detalhe: "7 funis pra bater R$100k/mes (orgânicos + ascensão + tráfego pago)"
  5:
    nome: "Gestão"
    detalhe: "Pra tudo funcionar junto"
```

---

*Árvore de Decisão v1.0 — Regras do Torriani formalizadas para o Copy Chief*
