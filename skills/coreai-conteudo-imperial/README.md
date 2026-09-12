# Conteúdo Imperial

Skill do Claude Code que materializa o **Agente Imperador** — gerador de conteúdo brutal para Instagram (posts, reels, stories, estratégia, posicionamento, planejamento).

Knowledge base 100% empacotada, derivada dos docs originais do Imperador no Dropbox. Toda saída passa pelo gate ORACULO (12 testes de qualidade) antes de ser entregue.

## Instalação

A skill já vive em `~/claude/coreai-mentoria/skills/conteudo-imperial/`. Pra ativar globalmente:

```bash
/ativa-skill conteudo-imperial
```

Isso cria um symlink em `~/.claude/skills/conteudo-imperial/` que aponta pra cá. Auto-atualiza quando você fizer `git pull` na mentoria.

## Uso

Após ativar, em qualquer projeto:

```
/conteudo-imperial [pedido em linguagem natural]
```

### Exemplos

```
/conteudo-imperial post imperial sobre mentor que ensina demais e não fatura
/conteudo-imperial reels tático sobre carrossel educativo
/conteudo-imperial estratégia de lançamento pra mentoria de 15K
/conteudo-imperial bio imperial pra coach high-ticket
/conteudo-imperial planejamento de 30 dias pra mentor de mentoras
/conteudo-imperial 5 stories pra vender mentoria amanhã
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
conteudo-imperial/
├── SKILL.md                          # Orquestrador (raiz)
├── README.md                         # Este arquivo
│
├── modes/                            # 6 sub-skills
│   ├── 01-post-imperial.md
│   ├── 02-reels.md
│   ├── 03-stories.md
│   ├── 04-estrategia.md
│   ├── 05-posicionamento.md
│   └── 06-planejamento.md
│
├── knowledge/                        # 12 MDs de conhecimento
│   ├── 00-identidade.md
│   ├── 01-voz-vocabulario.md
│   ├── 02-hooks.md
│   ├── 03-narrativas.md
│   ├── 04-ctas.md
│   ├── 05-titulos-swipe.md
│   ├── 06-estrategias.md
│   ├── 07-posicionamento.md
│   ├── 08-reels-roteiro.md
│   ├── 09-planejamento.md
│   ├── 10-cliches-proibidos.md
│   └── 11-swipe-posts.md
│
├── validators/                       # Sistema ORACULO
│   ├── oraculo-completo.md           # Gate final (9 etapas)
│   ├── lei-slide-1.md                # 3 hooks no slide 1
│   ├── progressao-emocional.md       # Reptiliano→Límbico→Neocórtex
│   ├── linguagem-banida.md           # Palavras/frases proibidas
│   └── balanco-valor-brutalidade.md  # 70/30
│
└── templates/                        # Esqueletos preenchíveis
    ├── post-imperial-10slides.md
    ├── reels-tatico.md
    ├── reels-storytelling.md
    ├── reels-provocacao.md
    ├── bio-imperial.md
    ├── estrategias-E1-E8.md
    └── planejamento-25-ideias.md
```

## Decisões arquiteturais

| Decisão | Razão |
|---------|-------|
| Orquestrador + sub-skills (modes/) | Espelha arquitetura do prompt-v9 original. Cada modo tem responsabilidade única. |
| Knowledge embutido (não referencia Dropbox) | Skill auto-contida. Funciona sem depender do Dropbox estar montado. |
| ORACULO modular (validators/) | Reutilizável entre modos. Cada validador roda independente. |
| Templates separados | Esqueletos preenchíveis, sem prosa. Foco em estrutura. |
| Sem BOPE (anti-prompt-injection) | Skill privada do Juliano, sem necessidade. |

## Relação com a skill `imperador` existente

Esta skill (`conteudo-imperial`) **convive paralelamente** com a `imperador` existente. Não substitui.

- `imperador` — versão atual já instalada
- `conteudo-imperial` — versão nova, com knowledge base completa do Dropbox

Use ambas e compare resultados. Quando estiver satisfeito com uma, pode desativar a outra.

## Origem do conhecimento

Toda a knowledge base derivou destes 17 docs originais:

```
~/Library/CloudStorage/Dropbox/[AGENTES GPT]/AGENTE IMPERADOR/DOCS IMPERADOR/
├── NUCLEO.md (identidade)
├── EXPRESSION.md (voz, vocabulário, 5 blocos)
├── ORACULO.md / ORACULO.pdf (validação)
├── prompt-imperador-v9.md (router master)
├── AG-IMPERADOR-VALIDATOR.md (12 testes)
├── AG-IMPERADOR-HOOKS.md (25 hooks)
├── AG-IMPERADOR-NARRATIVAS.md / .pdf (7 tipos de post)
├── AG-IMPERADOR-PLANEJAMENTO.md (Schwartz)
├── AG-IMPERADOR-CTAS.pdf (13 categorias)
├── AG-IMPERADOR-SWIPETITULOS+CTA.pdf (~230 títulos)
├── AG-IMPERADOR-SWIPE-POSTS.pdf (posts longos)
├── AG-IMPERADOR-ESTRATEGIAS.pdf (E1-E8)
├── AG-IMPERADOR-POSICIONAMENTO.pdf (Bio Imperial)
├── AG-IMPERADOR-ROTEIRO-REELS.pdf (4C)
└── cliches.pdf (~35 expressões banidas)
```

Esses arquivos seguem como **fonte canônica** no Dropbox. Esta skill é a versão sintetizada e executável.

## Atualização

Se você editar os docs originais no Dropbox e quiser refletir aqui:

1. Editar manualmente os MDs em `knowledge/` correspondentes.
2. Ou: rodar `/skill-creator conteudo-imperial-v2 --quick` apontando pra novos docs.

A skill `imperador` atual no Claude tem mesma proposta mas knowledge espalhada — esta `conteudo-imperial` é a versão consolidada.

## Validação

Pra validar a qualidade desta skill:

```
/skill-validate conteudo-imperial
```

Esperado: ≥80/100.

## Próximas iterações sugeridas

- [ ] Adicionar `lib/oraculo-grep.sh` pra rodar parte do ORACULO via shell (palavras proibidas, contagem de palavras por slide)
- [ ] Criar `examples/` com 5-10 outputs canônicos pra few-shot
- [ ] Adicionar modo "rebrief" (recebe peça pronta + reescreve no estilo Imperial)
- [ ] Integração com `/publicar` pra publicar automaticamente no Instagram após aprovação
