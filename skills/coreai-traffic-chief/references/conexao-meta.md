# Preparação Meta
Este pacote não inclui servidor MCP nem transporte de Marketing API. Permite planejamento/revisão local e orienta um operador quando ferramentas reais estiverem disponíveis. Não há contagem prometida de tools, CLI oficial ou instalação automática.

1. Confirmar portfólio, conta de anúncios, Página e Instagram necessários ao negócio.
2. Criar/selecionar app com Marketing API e vinculação empresarial pertinente.
3. Criar/selecionar usuário do sistema, atribuir app e ativos necessários, gerar token com permissões mínimas adequadas. ads_read/ads_management são relevantes a leitura/gestão; permissões adicionais dependem da operação. Não incluir token no chat, contexto ou relatório.
4. Conferir acesso/revisão do app: operar própria conta e contas alheias pode exigir níveis diferentes. Não presumir que app/token implica autorização completa.
5. Configurar adaptador escolhido por documentação real. Sem adaptador, o setup permanece pendente; uso manual do Gerenciador é caminho separado, sem alegar API executada.
6. Verificar leitura da conta ID/nome/moeda/fuso; conferir ativos. Escrever só depois com escopo autorizado.

Fontes oficiais para revisão vigente:
- https://www.postman.com/meta/facebook-marketing-api/documentation/0zr4mes/facebook-marketing-api-mapi
- https://developers.facebook.com/docs/marketing-api/business-manager/system-users/
- https://developers.facebook.com/docs/instagram-platform/

Guia do workshop: GUIA-SETUP.html, seção Instagram e Meta, distribuído nos materiais do evento; não depende de path privado. Publicação orgânica possui autorização/token/ativos próprios. Não confundir com campanha paga.
