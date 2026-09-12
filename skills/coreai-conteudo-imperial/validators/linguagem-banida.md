# Linguagem Banida

Validador de filtro negativo. Roda em TODO output para detectar palavras, frases e construções proibidas.

## Como funciona

Após gerar o output, **busque cada item abaixo no texto**. Se encontrar 1+ match, marque a linha e reescreva sem usar a expressão banida.

## Palavras proibidas (busca exata)

| Palavra | Por quê |
|---------|---------|
| `segredo` | Cliché de coach iniciante |
| `dica` | Vocabulário de Pinterest |
| `truque` | Soa marketeiro |
| `hack` | Estrangeirismo gasto |
| `simples` | Promessa fácil |
| `fácil` | Promessa fácil |
| `rápido` | Promessa de fast-food |
| `automático` | Soa golpe |
| `incrível` | Adjetivo vazio |
| `fantástico` | Adjetivo vazio |
| `revolucionário` | Hipérbole oca |
| `inacreditável` | Adjetivo vazio |

## Verbos banidos (busca por raiz)

| Verbo | Substituir por |
|-------|----------------|
| `melhora`, `melhorar` | `acelera`, `desbloqueia`, `instala` |
| `ajuda`, `ajudar` | `arma`, `equipa`, `destrava` |
| `inspira`, `inspirar` | `provoca`, `confronta` |
| `ensina`, `ensinar` | `revela`, `crava`, `expõe` |
| `facilita`, `facilitar` | `corta`, `elimina obstáculo` |
| `descomplica` | `corta etapa`, `mata gargalo` |
| `transforma sua vida` | (banido por inteiro — refazer construção) |

## Frases proibidas (busca exata, case-insensitive)

| Frase | Por quê |
|-------|---------|
| "Vou ser honesto com você" | Prefácio inútil |
| "A verdade é que..." | Prefácio que adia (exceto contexto Manifesto) |
| "O segredo do sucesso é..." | Cliché supremo |
| "Você precisa entender que..." | Tom paternalista |
| "Como eu sempre digo..." | Autocentrismo |
| "A maioria das pessoas..." | Genérico vago |
| "Se você quer ter sucesso..." | Pergunta-gancho fraca |
| "Olha só..." | Prefácio inútil |
| "Antes de mais nada..." | Atrasa o ponto |
| "Você sabia que...?" | Pergunta + "?" |
| "Já parou pra pensar...?" | Pergunta retórica |
| "Imagine se..." | (permitido só em CTA categoria 3) |
| "E se eu te dissesse...?" | Pergunta retórica |

## Saudações banidas (qualquer abertura)

❌ "Fala, galera"
❌ "Oi, pessoal"
❌ "E aí, time"
❌ "Bom dia, família"
❌ "Olá, amigos"
❌ "Salve, mentor"

Imperador NUNCA saúda. Entra cravando.

## Construções banidas

### Perguntas retóricas no início
- "Você está cansado de [X]?"
- "Quer ter [Y]?"
- "Tá precisando de [Z]?"

→ Substituir por afirmação direta: "Se você está cansado de X, leia isso." ou comando.

### Auto-elogio
- "Sou especialista em..."
- "Tenho 10 anos de..."
- "Já ajudei mais de X clientes..."

→ Mostrar autoridade pelo método e tom, nunca por currículo declarado.

### Promessa hiperbólica
- "Transforme sua vida em 30 dias"
- "Revolucione seu negócio"
- "Mude tudo com um clique"

→ Substituir por resultado específico mensurável.

## Pontuação banida

- **Travessão** (`—`, `–`): PROIBIDO em qualquer output.
  - Substituir por: vírgula, ponto, dois pontos, parênteses, ou quebra de linha.
- **Reticências exageradas** (`...` no meio da frase): use ponto final.
- **Múltiplas exclamações** (`!!!`): usa 1 ou nenhuma.

## Acentuação obrigatória

- **TODOS os diacríticos** devem estar presentes (á, é, ç, ã, õ, ê, í, ó, ú, etc).
- Escrever sem acentos = FAIL absoluto.
- Regra de ouro: o texto vai pro Instagram cru, sem encoding mágico.

## Algoritmo de aplicação

```
1. Receber output gerado.
2. Para cada item desta lista:
   a. Buscar no output (case-insensitive, exceto onde indicado).
   b. Se match → marcar linha.
3. Se há marcações → bloquear entrega e reescrever cada linha marcada.
4. Re-rodar este validador no output reescrito.
5. Se passar → seguir para próxima ETAPA do ORACULO.
6. Se ainda falhar após 2 tentativas → escalar pro usuário.
```

## Exceções controladas

Algumas expressões "soam cliché" mas são permitidas em contexto específico:

| Expressão | Permitida quando |
|-----------|------------------|
| "A verdade é..." | Slide 5 (Manifesto), seguido de aforismo brutal |
| "Você precisa..." | Slide 10 (CTA Imperial), como comando direto |
| "Imagina se..." | CTA categoria 3 (Despertar desejo) |

Em todos os casos: só permitido se o que vem **depois** for cravado, brutal e específico.

## Quando este validador é chamado

- Etapa 4 do `validators/oraculo-completo.md`.
- Pode ser chamado isoladamente em qualquer momento de revisão.
