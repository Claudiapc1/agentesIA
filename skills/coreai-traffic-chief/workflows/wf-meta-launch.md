# Meta Launch CoreAI · adaptação para workshop
Contrato ContextOS obrigatório. Sequência herdada do workflow Meta Launch: pesquisa → briefing → tracking → criativo → build → revisão humana. A entrega padrão aqui termina PAUSED_VERIFIED, não em veiculação.

| Fase | Especialista | Task local | Saída / bloqueio |
|---|---|---|---|
| Contexto | Chief | ../coreai-shared/contextos-contract.md (a partir da raiz da skill) | Contexto lido ou BLOCKED_CONTEXT |
| Pesquisa/briefing | agents/ad-midas.md | tasks/planejar.md | Plano ancorado nas fontes |
| Canal/identidade | agents/campaign-manager.md | tasks/verificar-conexao.md | Conta ID/nome verificados ou bloqueio de API |
| Tracking | agents/pixel-specialist.md | tasks/tracking.md | Medição pertinente conferida |
| Criativo/revisão | agents/fiscal.md | tasks/revisar.md | Materiais existentes revisados |
| Build pausado | agents/campaign-manager.md | tasks/construir-pausada.md | IDs e estados lidos de volta |
| Conferência | Chief | tasks/revisar.md | Entrega, pendências e limite explícito |

No máximo três revisões internas antes de registrar bloqueio concreto; não são três tentativas de API. Não exige executar pesquisa externa em conta sem autorização. Sem conexão, pode entregar plano/criativos locais, declarando campanha não criada. Criação de novas peças pode ser encaminhada a coreai-copy/coreai-criativos somente se essas skills existirem e forem carregadas.
