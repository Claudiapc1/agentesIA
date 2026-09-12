# Mapa de fontes · Workshop Times de IA

## Fonte canônica

- Produto publicado: **Core IA · Mentoria**
- Product ID: `0eea6be1-07a5-4e3c-a988-7137652cb076`
- Código externo: `pb:core-ia-mentoria`
- Espelho editorial local: `/Users/julianotorriani/claude/playbook/src/data/manual-core-ia-mentoria.json`
- Regra aplicada: preservar os blocos ricos, diagramas, analogias, casos e explicações; adaptar somente a entrada, a prática e a transição para o Workshop Times de IA.

## Fontes por aula reconstruída

| Aula do workshop | Fontes preservadas | Adaptação feita |
|---|---|---|
| `w01-ferramentas-modelos` | `encontro-01-00` · “Por que a gente não usa só o ChatGPT”; `encontro-01-03` · planejamento, qualidade e gerenciamento de contexto | Separação entre ambiente, modelo, ContextOS, skill e ferramenta; comparação Claude Code × Codex; escolha por faixa de capacidade e disponibilidade da conta |
| `w02-segundo-cerebro` | Aula publicada `a6606424-a769-4810-abd1-b13ad8435024`, manual `encontro-01-00`, 55 blocos | Preservados casos, IA agnóstica × sistema determinístico, analogia do funcionário, Matrix, contexto da empresa e do cliente, níveis de skills, rotinas, exemplos reais e diagramas Mermaid. Repertório foi explicitado como quarto elemento operacional do workshop |
| `w03-setup` | `encontro-01-02` · instalação, diagnóstico, primeiro teste, troubleshooting e checkpoint | O fluxo principal virou desktop primeiro → pedir à própria IA para configurar o CLI → entregar a pasta `agentesIA` → ler README → executar e testar. O aluno não recebe uma sequência manual de terminal |
| `w04-contextos` | Aula publicada no Workshop `495a3982-0c8d-4366-9001-395afd1c9c1c`, originada da Core IA Mentoria `a06b29c5-15c8-47af-9d26-7fab2669b8ec`, 100 blocos | O payload publicado foi promovido integralmente para a aula principal, preservando objetivos, agenda e os 100 blocos. Foram acrescentados somente quatro blocos de aplicação ao workshop: transição, gate, prompt e checklist |
| `w05-zeus` | `encontro-02-01` · “O que é um agente de verdade” | Preservados tese de agente, analogia do Matrix, camadas de capacidade e sequência de construção. O protagonista foi adaptado para Zeus e ganhou protocolo explícito de contexto, despacho, acompanhamento e registro |
| `w06-loops-portal` | `encontro-02-05` · arquitetura de memória; `encontro-02-07` · heartbeats e proatividade; `encontro-08-04` · `/loop` | Preservadas memória carregada × memória sob demanda, Alzheimer digital, política falar × calar, modos de loop, segurança e comparação loop × goal × schedule. O portal operacional e a retomada pelo Zeus conectam as três fontes |

## Escopo preservado durante a reconstrução de `w01` a `w06`

- `w00-boas-vindas`: preservada integralmente para não sobrescrever a nova recepção, tese e promessa.
- `w07` a `w13`: foram reconstruídas posteriormente, com fontes registradas na próxima seção.
- Os demais bônus foram preservados. O antigo `bonus-2` de ContextOS foi removido depois da promoção integral para `w04-contextos`.

## Decisão de consolidação do ContextOS

- Aula publicada analisada: `495a3982-0c8d-4366-9001-395afd1c9c1c`.
- Payload lógico de origem: `bonus-2`.
- Conteúdo encontrado: cinco objetivos, sete itens de agenda e 100 blocos ricos.
- Destino: aula principal `w04-contextos`, no módulo **Workshop**.
- Adaptação: quatro blocos adicionais para conectar o manual completo à execução ao vivo e ao gate compartilhado das skills.
- Bônus duplicado: removido do módulo **Bônus**. Reaproveitá-lo como cópia integral criaria duas aulas com o mesmo objetivo e o mesmo conteúdo. Um bônus futuro deve tratar aprofundamento diferente, como ContextOS no agente ou GitHub como cérebro compartilhado.

## Fontes de `w07` a `w13`

| Aula do workshop | Aula exportada da Core IA Mentoria | Skills operacionais consultadas | Conteúdo preservado ou adaptado |
|---|---|---|---|
| `w07-conteudo` | `c3b6b682-92e8-4a59-8ac6-542fd2ec1e30` · Parte 2, Construindo a Skill de Conteúdo | `coreai-content-chief`, `coreai-carousel-creator` | Contexto como centro, diferença entre skill e time, repertório como diferencial e princípio “se é repetitivo, vira skill”. Acrescentado fluxo real tese → copy → aprovação → template → render → revisão |
| `w08-oferta` | `9fd06471-47de-45f6-9d0c-e828da2d48d7` · Parte 1, Feedback e Hotseats | `coreai-grand-slam-offer` | Caso aquecer lead com oferta, objeção preço × medo e tese sobre implementação. Acrescentadas equação de valor e as 11 fases da skill, com números e condições desconhecidos tratados como lacuna |
| `w09-copy` | `d3c3d09c-2b63-4965-b28b-9be5791e3600` · Fábrica de Copy High Ticket | `coreai-copy-chief` e rotas CoreAI instaladas | Preservados diretor criativo, fluxo ContextOS → triagem → especialista → duas validações, arsenal, copywriters, exemplos e anti-padrões. Comandos traduzidos para a nomenclatura CoreAI e cobertura real elevada a gate |
| `w10-criativos` | Sem aula específica exportada | `coreai-criativos` | Modos reais, JSON de entrada, motor local, prompt, manifesto, ferramenta de imagem disponível e revisão visual. Não atribui geração nativa ao Claude |
| `w11-trafego` | Bloco “Setup da Meta pra publicar no Instagram” de `c3b6b682-92e8-4a59-8ac6-542fd2ec1e30` | `coreai-traffic-chief`, `coreai-publicar-instagram`; `wf-meta-launch.md`, `conexao-meta.md` e README da publicação | App, System User, ativos e token; campanha até `PAUSED_VERIFIED`; publicação orgânica com preview, preflight, autorização, recibo e permalink |
| `w12-pitch` | Bloco “Entrega de graça, cobra a implementação” de `9fd06471-47de-45f6-9d0c-e828da2d48d7` | Definição e promessa fornecidas pelo Juliano; arquitetura CoreAI já ensinada | Empresa agêntica, promessa, progressão e escopo de acompanhamento. Nenhum preço, garantia, prazo, vaga ou condição foi criado |
| `w13-encerramento` | Síntese das entregas anteriores | `coreai-zeus`; contrato `coreai-shared/contextos-contract.md` | Fechamento por decisão, entrega, estado, pendência e próxima rotina; plano de sete dias; retomada em uma nova sessão |

### Caminhos das fontes operacionais

- Exportações: `/Users/julianotorriani/claude/agentesIA/workshop/sources/core-ia-mentoria/`
- Skills: `/Users/julianotorriani/.agents/skills/`
- Contrato comum: `/Users/julianotorriani/.agents/skills/coreai-shared/contextos-contract.md`
- Regra comum: `READY` libera leitura e produção; `SELECT_BUSINESS` exige escolha; `BLOCKED_CONTEXT` interrompe o domínio e encaminha para `CoreAI:Contexto`.

## Lacunas editoriais

1. Os números e casos específicos de **Oportunidade 2026** ainda dependem da apresentação-fonte.
2. O pitch preserva a transformação da Core IA Mentoria, mas investimento, duração, condição do workshop, vagas, garantia e CTA precisam da confirmação atual do Juliano.
3. Os nomes de modelos e a disponibilidade por conta mudam; a aula ensina a selecionar pela função e conferir o seletor atual.
