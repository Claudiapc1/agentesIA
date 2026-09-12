# Publicação Instagram
Transporte Python 3.9+ stdlib para Facebook Login, baseado na sequência Graph do script Legacy inventariado. Requer conta profissional e Página vinculada, acesso aos ativos e permissões compatíveis com o app/fluxo. Sem hosting, banco, MCP ou credenciais embutidas.

Plano JSON: `{"version":"vXX.X","ig_id":"123","username":"perfil","images":["https://host/1.jpg","https://host/2.jpg"],"caption":"Texto aprovado"}`. Substituir versão pelo valor vigente validado para o app; vXX.X é placeholder e falha no script. URLs devem ser realmente públicas e de imagens suportadas pela Meta; validação de sintaxe HTTPS não comprova acessibilidade/formato.

Preview não faz rede. Preflight faz somente GET de id/username. Publicação faz escritas reais. --confirm-username é barreira operacional, não mecanismo de autenticação nem prova automática de consentimento. O agente deve obter autorização do usuário. Token somente env INSTAGRAM_ACCESS_TOKEN, enviado em header.

Não há retry, polling ou retomada automática: se pai ainda processa, consultar/reconciliar manualmente seus IDs antes de publicar. Nunca reexecutar o fluxo inteiro após falha parcial. Recibo novo exclusivo registra cada etapa, mas não implementa idempotência de servidor. Antes de retomar qualquer publicação, verificar se já foi publicada. Revise conteúdo do recibo antes de compartilhar.

Fontes: https://developers.facebook.com/docs/instagram-platform/instagram-api-with-facebook-login/content-publishing/ e https://developers.facebook.com/docs/instagram-platform/ . Permissões e limites devem ser confirmados na documentação atual e no app real. Testes locais com transporte mock não comprovam aceitação Meta nem postagem real.
