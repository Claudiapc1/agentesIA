# Construir em estado pausado
Pré-condições: contexto, conta ID/nome conferidos, transporte real, briefing e criativos revisados, autorização de criação externa e orçamento/período definidos. Sem qualquer uma, parar na lacuna.
1. Mostrar resumo concreto da criação e usar autorização já vigente para seu escopo. Se falta autorização, pedi-la somente com o plano revisável pronto.
2. Registrar intenção local: operation_id único, conta, ação, configuração e estado pending, sem segredos. Identificador local não garante idempotência Meta.
3. Usar SOMENTE operações e schema realmente expostos pelo adaptador validado. Upload e criação são escritas externas, mesmo pausadas. Criar campanha/conjunto/anúncio em PAUSED nos níveis suportados; jamais enviar ACTIVE por padrão.
4. Após cada resposta, registrar IDs e ler de volta para conferir conta/configuração/status. Em timeout ou resposta incerta, reconciliar com destino; não repetir criação cegamente.
5. Em falha parcial, preservar IDs já criados e registrar o que falta. Não excluir nem duplicar como rollback automático. Não alegar transação atômica.
6. Entregar manifesto dos objetos pausados e evidências. Objeto de criativo não tem necessariamente status: marcar não aplicável, não inventar.
7. Encerrar PAUSED_VERIFIED ou PARTIAL/UNKNOWN. Ativação exige novo escopo explícito com verba/período confirmados e revisão atual. Fora da entrega padrão deste workshop.
