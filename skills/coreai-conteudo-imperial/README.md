# Conteúdo Imperial

Skill que gera conteúdo brutal para Instagram no estilo Imperador (posts, reels, stories,
estratégia, posicionamento, planejamento). Knowledge base 100% embutida nesta pasta,
sem depender de nada fora dela. Toda saída passa pelo gate ORACULO (validação de
qualidade) antes de ser entregue.

## Uso

Após instalada (veja o README na raiz do pacote), em qualquer conversa:

```
/coreai-conteudo-imperial [pedido em linguagem natural]
```

### Exemplos

```
/coreai-conteudo-imperial post imperial sobre mentor que ensina demais e não fatura
/coreai-conteudo-imperial reels tático sobre carrossel educativo
/coreai-conteudo-imperial estratégia de lançamento pra mentoria de 15K
/coreai-conteudo-imperial bio imperial pra coach high-ticket
/coreai-conteudo-imperial planejamento de 30 dias pra mentor de mentoras
/coreai-conteudo-imperial 5 stories pra vender mentoria amanhã
```

## Modos automáticos

A skill detecta automaticamente o modo pelo pedido:

| Você diz... | Modo ativado |
|-------------|--------------|
| "post", "carrossel", "slides" | POST IMPERIAL (carrossel 10 slides) |
| "reels", "vídeo curto", "roteiro" | REELS (4C, 3 durações) |
| "stories", "sequência" | STORIES (E4/E6/E7/E8) |
| "estratégia", "campanha", "lançamento" | ESTRATÉGIA (E1-E8) |
| "bio", "posicionamento", "frase de domínio" | POSICIONAMENTO (Bio Imperial) |
| "planejamento", "calendário editorial" | PLANEJAMENTO (25 ideias × Schwartz) |

## Arquitetura

```
coreai-conteudo-imperial/
├── SKILL.md                          # Orquestrador (raiz)
├── README.md                         # Este arquivo
│
├── modes/                            # 6 sub-skills
├── knowledge/                        # 12 MDs de conhecimento
├── validators/                       # Sistema ORACULO
└── templates/                        # Esqueletos preenchíveis
```

Voz autoral fixa (a do Torriani), não é genérica por cliente do ContextOS — por isso
não passa pelo gate de contexto que as demais skills de produção usam.
