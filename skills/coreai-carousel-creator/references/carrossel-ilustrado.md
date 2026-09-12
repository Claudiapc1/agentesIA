# Carrossel ilustrado: regra de produção

**Criada em 08/09/2026, a partir do post 47 do Torriani.** Vale para qualquer cliente.

Este documento existe porque a diferença entre uma ilustração que funciona e uma que o founder reprova não está na ferramenta, está no jeito de escrever o pedido. Cada regra abaixo nasceu de um erro real, e o erro está registrado junto para não ser repetido.

---

## 1. O que é um carrossel ilustrado

Carrossel em que cada slide tem três camadas na vertical:

| Camada | Função |
|---|---|
| Título | A tese do slide, uma frase, em caixa alta condensada |
| Texto | Bullets curtos ou um parágrafo, com o trecho-chave no acento da marca |
| Ilustração | Um diagrama que PROVA o título, com rótulos dentro do próprio desenho |

A ilustração não decora. Ela carrega informação que o texto não repete.

---

## 2. As sete regras de prompt (o núcleo)

Cada uma nasceu de um erro cometido na produção do post 47.

### R1. Travar a paleta por hexadecimal e proibir cor por escrito

Escreva os códigos exatos e liste o que é proibido. Modelo de imagem puxa para a paleta que viu na referência.

> `Color palette strictly: black (#0A0A0A) for the OLD state and vivid blue (#2B7DE1) for the NEW state. Absolutely NO green, NO teal, NO orange.`

**Erro que originou:** a primeira leva saiu em verde-petróleo, copiando a paleta do perfil de referência em vez da paleta do cliente. O founder: "minha cor é branca, azul e preto, não tem verde".

### R2. Pedir o fundo como superfície única

> `on ONE uniform pure WHITE background (#FFFFFF) filling the entire canvas edge to edge. Do not split the canvas.`

**Erro que originou:** pedindo só "fundo preto", o modelo dividiu a arte ao meio, metade branca e metade preta.

### R3. Estrutura sempre ANTES → seta → DEPOIS

É a gramática que faz o formato funcionar. O lado esquerdo é o estado atual, o direito é o novo, e uma seta sólida no acento da marca separa os dois.

### R4. Os rótulos vão DENTRO do desenho, listados um a um

Nunca proíba texto na imagem. Liste cada rótulo, em português, com acento.

> `each floor labeled with a department name: 'DIRETORIA', 'GERÊNCIA', 'MARKETING', 'VENDAS', 'FINANCEIRO', 'OPERAÇÕES'`

**Erro que originou:** proibi texto no prompt achando que a referência não tinha escritos. Ela tinha: "20 PEOPLE", "5 PEOPLE + AI", "MARKET CHANGE", "WEEKS". O texto dentro do desenho é o que faz a peça ser entendida sem legenda. O founder: "se houver coisas escritas nos desenhos do original, a gente precisa ter".

### R5. Nomear o concreto, nunca o conceito

Descreva objetos, não ideias. "Prédio de seis andares com fileiras de figuras sentadas em mesas" funciona. "Empresa hierárquica" não.

**Erro que originou:** a primeira capa saiu parecendo sala de jantar de apartamento. O founder: "parece um apartamento com uma mesa de jantar, o que não tem a ver com uma empresa".

### R6. Cinza para o velho, acento para o novo

O contraste de cor faz a leitura acontecer antes de o leitor ler qualquer palavra.

### R7. Declarar o idioma dos rótulos

> `All labels must be rendered in correct Brazilian Portuguese exactly as specified, correctly spelled with proper accents.`

Sem isso o modelo escreve em inglês ou erra acento.

---

## 3. Molde de prompt

Trocar apenas o que está entre colchetes.

```
A professional flat vector infographic illustration on ONE uniform pure [FUNDO]
background ([HEX_FUNDO]) filling the entire canvas edge to edge, consulting-deck
style, clean and minimal with generous space and thin precise lines.
Color palette strictly: [HEX_VELHO] for the OLD state and [HEX_ACENTO] for the
NEW state. Absolutely NO [CORES_PROIBIDAS].

On the LEFT, labeled at top '[ROTULO_ANTES]': [CENA_CONCRETA_ANTES, com cada
elemento nomeado].
A big [HEX_ACENTO] arrow points right.
On the RIGHT, labeled at top '[ROTULO_DEPOIS]': [CENA_CONCRETA_DEPOIS, com cada
elemento nomeado].

All labels must be rendered in correct Brazilian Portuguese exactly as specified,
in a clean bold sans-serif, correctly spelled with proper accents.
```

---

## 4. Ordem de trabalho (não pular etapas)

1. **Escrever o texto primeiro.** Título e corpo de cada slide, aprovados, antes de gerar imagem. Ilustração desenhada para texto que ainda vai mudar é retrabalho.
2. **Gerar as ilustrações** com ferramenta de imagem disponível, usando `../coreai-criativos/SKILL.md`, uma por slide.
3. **Mostrar as ilustrações ao cliente** antes de montar. Imagem gerada custa crédito a cada tentativa: aprovar antes economiza rodada.
4. **Montar os slides** com o template.
5. **Validar a copy** nos dois validadores anti-IA.
6. **Apresentar num visualizador com slide grande**, nunca em mosaico de miniaturas.

**Erro que originou o passo 6:** entreguei os dez slides como miniaturas de 240px. O founder: "eu tenho que aumentar muito o zoom para conseguir ler".

---

## 5. Regras de apresentação

- Slide grande no centro, setas dos dois lados, tira de navegação embaixo, clique abre em tamanho real.
- Nunca mosaico de miniaturas para aprovação.
- Comparações de versão sempre em tabela de três colunas: item, antes, agora.

---

## 6. Custo e limites

Cada ilustração é uma chamada paga ao modelo de imagem. Gerar dez slides custa dez chamadas, e cada refação custa mais uma. Daí a ordem de trabalho acima: texto aprovado antes, ilustração aprovada antes de montar.

O modelo erra texto longo dentro da imagem. Rótulos curtos, de uma a três palavras, saem corretos com consistência. Frase inteira dentro do desenho é território de erro de ortografia.

---

