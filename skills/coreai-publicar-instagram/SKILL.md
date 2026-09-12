---
name: coreai-publicar-instagram
description: Prepara e publica carrossel Instagram via Facebook Login com preview, conta conferida e autorização explícita; preflight é somente leitura.
---
# Publicar Instagram CoreAI
Leia ../coreai-shared/contextos-contract.md antes da produção. Sem cliente validado bloqueie. Leia README.md desta pasta; não execute publicação ao ativar esta skill.
1. Receba IG ID, username esperado, versão Graph explícita vigente, legenda final e 2–10 URLs HTTPS públicas de imagens revisadas. O pacote não hospeda arquivos nem fornece conta/token. Token exclusivamente INSTAGRAM_ACCESS_TOKEN no ambiente.
2. Monte plan.json no negócio autorizado. Execute `python3 scripts/instagram.py preview --plan <arquivo>` relativamente a esta skill. Mostre perfil, imagens e legenda ao usuário.
3. `preflight --plan <arquivo>` somente lê ID/username. Não cria containers nem uploads; requer autorização para essa leitura. Confira integração/permissões reais.
4. Publicar exige pedido explícito cobrindo preview/destino. Use `publish --plan <arquivo> --confirm-username <username> --receipt <arquivo-novo.jsonl>`. Não preencher confirmação sem autorização do usuário.
5. O script cria filhos e pai, consulta estado, publica apenas FINISHED e lê permalink. Se não pronto/falha/timeout, para com recibo parcial; não rerodar cegamente nem inventar sucesso. Não possui retomada automática.
6. Entregue permalink/ID verificados ou estado parcial. Publicação orgânica não é campanha de tráfego.
