# Tráfego CoreAI
Adaptação autocontida do traffic-chief e wf-meta-launch do Legacy para ContextOS e campanha pausada. Conserva seleção de negócio, especialidades, sequência, revisão, estado pausado, registro de ações e conferência pós-criação. Não importa Workspace/COO/templates deles. Documentos locais são recursos novos deste pacote.

Dependência: ../coreai-shared, instalada automaticamente por coreai-setup. Os agentes/tasks são internos; não dependem de squads instalados. Usar Python resolver de contexto antes de produção.

Implementado: instruções de planejamento, conexão, tracking, revisão e operação pausada. Não implementado: transporte API/MCP, gestão de credenciais, geração de imagens ou publicação automática. Não houve chamada Meta, nem teste de conta/campanha real. A capacidade externa depende de ferramenta efetivamente disponível e autorizada.

Diferenças intencionais: sem benchmarks de idade/EMQ/rampagem tratados como regra universal; nenhuma ativação automática; entrega termina pausada; não exige serviços privados. Plano do workshop reserva demonstração em conta habilitada, não promete campanha veiculando para todos.
