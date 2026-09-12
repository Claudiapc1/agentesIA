# Meta: preparação da conta do aluno

Guia de configuração pelo proprietário da conta. Consulta documental: 12/09/2026. Nenhuma conta foi conectada, nenhum token foi gerado e nenhuma publicação foi realizada ao escrever este guia. Os nomes de menus abaixo são orientações de navegação: a interface autenticada não foi inspecionada e pode variar por idioma, portfólio, app e elegibilidade. Se a opção não aparecer, confira os requisitos indicados; não escolha outro produto por tentativa.

## 1. Escolha a situação antes de criar o app

**Conta e app próprios do aluno:** faça o exercício com o portfólio, Página, Instagram e conta de anúncios que ele administra. Na Marketing API, a documentação distingue Standard Access para conta própria de Advanced Access para contas de terceiros. Ter o token não concede acesso a ativos automaticamente. [Documentação oficial Meta no Postman](https://www.postman.com/meta/facebook-marketing-api/documentation/0zr4mes/facebook-marketing-api-mapi).

**App central atendendo clientes:** não reutilize o token do instrutor. Planeje o onboarding de cada empresa, consentimento, acesso aos ativos e as exigências de App Review/Advanced Access e verificação empresarial aplicáveis no dashboard. Adicionar clientes como desenvolvedores/testadores não substitui um fluxo de produção aprovado. Não há prazo de aprovação garantido para a aula. A rota Instagram deste pacote é Facebook Login; não misture permissões de Instagram Login. [Referência de revisão](https://developers.facebook.com/docs/app-review/) e [Facebook Login para Instagram](https://www.postman.com/meta/instagram/folder/u4g5a2a/instagram-api-with-facebook-login).

## 2. Identifique o cliente e os ativos

- **Onde:** ContextOS do aluno e [configurações empresariais](https://business.facebook.com/settings/).
- **Ação:** selecione explicitamente o cliente e o portfólio empresarial correto. Anote somente IDs e nomes não secretos: portfólio, app, Página, Instagram/username e conta de anúncios. Separe as credenciais de cada cliente.
- **Resultado:** uma ficha de integração do negócio, armazenada em seus próprios outputs, sem tokens.
- **Conferir:** os nomes e IDs correspondem ao cliente selecionado; um administrador legítimo consegue ver os ativos.
- **Problemas:** portfólio incorreto, convite ainda não aceito ou ativo de outra empresa exigem ajuste pelo proprietário. Não crie uma segunda conta para contornar falta de acesso.

## 3. Prepare Página e Instagram

- **Onde:** configurações da Página e da conta Instagram, procurando a área de contas vinculadas; também confira os ativos no portfólio.
- **Ação:** use uma conta Instagram profissional Business ou Creator e vincule-a à Página correta. O fluxo Facebook Login requer esse vínculo; contas pessoais não são suportadas. [Fonte oficial](https://www.postman.com/meta/instagram/folder/u4g5a2a/instagram-api-with-facebook-login).
- **Resultado:** Página e Instagram aparecem vinculados ao mesmo negócio autorizado.
- **Conferir:** compare o username visível no Instagram e o nome da Página. O ID da Página não é o ID do Instagram.
- **Problemas:** vínculo ausente, acesso parcial ou conta pessoal devem ser resolvidos nas configurações do proprietário. Não presuma que publicar manualmente no aplicativo comprova permissão via API. A ajuda de vínculo indicada pela Meta é [esta página](https://www.facebook.com/help/1148909221857370), que pode exigir login.

## 4. Crie ou selecione o app

- **Onde:** [Meta for Developers — Apps](https://developers.facebook.com/apps/).
- **Ação:** entre com a conta autorizada, conclua o cadastro de desenvolvedor se solicitado e crie/selecione um app associado ao negócio correto. No assistente de casos de uso/produtos, procure a configuração compatível com Instagram via Facebook Login e, para anúncios, Marketing API. Os nomes e combinações oferecidos variam; confirme no dashboard o produto efetivamente habilitado.
- **Resultado:** App ID identificado e funcionalidades desejadas disponíveis.
- **Conferir:** abra as configurações do app e confira empresa proprietária, pessoas com acesso, estado e permissões disponíveis. App Secret também é segredo: não coloque na ficha do aluno.
- **Problemas:** produto ausente pode significar caso de uso/tipo de app incompatível. Consulte a documentação e ajuste o app antes de emitir tokens. Não selecione Instagram Login apenas por ter nome parecido. [Referência de criação de apps](https://developers.facebook.com/docs/development/create-an-app/).

## 5. System User e atribuição de ativos

Esta é a rota de credencial empresarial para automação quando o app e os ativos permitem. A documentação da Marketing API aceita tokens de usuário e de System User; não assuma que qualquer token empresarial funciona em todos os endpoints Instagram. [Autenticação oficial](https://developers.facebook.com/docs/marketing-apis/overview/authentication).

- **Onde:** configurações empresariais do portfólio, procurando **Usuários → Usuários do sistema / System Users**. Essa navegação deve ser confirmada na interface local.
- **Ação:** um administrador cria/seleciona um usuário de sistema destinado à integração. Atribua apenas os ativos necessários e as tarefas compatíveis: conta de anúncios para Ads; Página e Instagram relacionados para publicação, quando disponibilizados. Confira também o acesso ao app escolhido.
- **Resultado:** usuário de sistema com vínculo explícito ao app e aos ativos, não apenas criado na lista.
- **Conferir:** abra a lista de ativos atribuídos e compare IDs com a ficha. Para anúncios, confira capacidade de gerenciar campanhas; para publicação, a tarefa de conteúdo correspondente quando oferecida. Os rótulos exatos dependem da interface.
- **Problemas:** menu indisponível, app não selecionável ou ativos ausentes indicam papel insuficiente, empresa/app incompatíveis ou atribuição pendente. Peça ao administrador responsável para resolver. Não conceda controle total indiscriminadamente.

## 6. Permissões e emissão do token

**Instagram/Facebook Login:** a coleção oficial lista `pages_show_list`, `instagram_basic`, `instagram_content_publish` e `pages_read_engagement`, além de `instagram_manage_comments` para suas operações de comentários. Para o exercício de publicação, não acrescente comentários se essa capacidade não for usada. Revise o requisito de cada endpoint. Não troque esses nomes por `instagram_business_*`, que pertencem ao outro fluxo. [Permissões na coleção Meta](https://www.postman.com/meta/instagram/folder/u4g5a2a/instagram-api-with-facebook-login).

**Ads:** use `ads_read` para leitura e `ads_management` para gestão; `business_management` é pertinente a operações de gestão/descoberta empresarial que realmente o exigem, não uma solução genérica para todos os erros. A necessidade de Advanced Access depende de operar contas de terceiros. [Permissões Marketing API](https://www.postman.com/meta/facebook-marketing-api/documentation/0zr4mes/facebook-marketing-api-mapi).

- **Onde:** usuário de sistema selecionado, ação de gerar token, escolhendo o app; para testes com token de usuário, as ferramentas do app/Graph API Explorer são outra rota documentada.
- **Ação:** selecione app, permissões necessárias e validade oferecida. Registre somente data de expiração e responsáveis. A emissão precisa refletir as permissões realmente disponíveis para esse app.
- **Resultado:** credencial entregue diretamente ao aluno para armazenamento local.
- **Conferir:** no [Access Token Debugger oficial](https://developers.facebook.com/tools/debug/accesstoken/), o próprio aluno verifica app, validade e scopes sem compartilhar o valor. Um token sem expiração programada ainda pode ser revogado.
- **Problemas:** scope ausente exige verificar produto, acesso/review e papel do usuário; regenerar o mesmo token não corrige ativo não atribuído. A referência de [instalação do app e geração para System User](https://developers.facebook.com/docs/marketing-api/system-users/install-apps-and-generate-tokens/) retornou limite HTTP 429 nesta consulta: os botões autenticados não foram confirmados aqui.

## 7. Guarde o segredo localmente

O aluno configura o token no ambiente do terminal que executará o transporte. Para Instagram, o script do pacote espera `INSTAGRAM_ACCESS_TOKEN`. Para Ads, confira o nome exato no README/script instalado antes de definir a variável; este guia não inventa um transporte ausente. Use entrada oculta do shell ou um gerenciador local de segredos. Arquivos de ambiente, se usados, precisam ficar fora do Git e dos outputs compartilháveis.

Não cole tokens, App Secret ou cabeçalhos Authorization no chat, slides, gravação, manual ou screenshots. Não inclua o token em URLs. O aluno pode informar apenas “configurado”, validade e scopes. Se houve exposição, revogue a credencial e emita outra; não basta apagar a mensagem. Remova a variável da sessão ao terminar se não precisar mantê-la.

## 8. Confira acesso sem publicar

- **Instagram:** depois do cliente ContextOS validado, gere o preview com plano final e output explícito dentro do cliente. O preflight do pacote consulta ID/username por GET; compare com a ficha. Isso não comprova que as URLs das imagens são aceitas nem que a publicação será aprovada.
- **Ads:** compare o ID da conta no Ads Manager e, quando houver transporte de leitura disponível, consulte a conta com autorização do aluno. Confira moeda, fuso, status, acessos e condições de faturamento na interface. Não copie orçamento de exemplos da documentação.
- **Problemas:** token inválido/expirado pede revisão da credencial; permissão negada pede revisão de scopes e ativos; ID não encontrado pode representar falta de acesso, não inexistência. Guarde erro sanitizado, sem credencial. A coleção oficial mostra consultas de conta e identidade como referência, não autoriza executá-las automaticamente. [Consultas Marketing API](https://www.postman.com/meta/facebook-marketing-api/documentation/0zr4mes/facebook-marketing-api-mapi).

## 9. Publicação e campanhas são etapas distintas

Na skill `coreai-publicar-instagram`, siga o README da versão instalada: preview, identidade e autorização explícita precedem a publicação. O candidato validado localmente exige cliente/contexto, username e hash do plano revisado; após mudança de conteúdo ou contexto, obtenha novo preview. Use recibo novo sob outputs do cliente. Falha ou timeout exige reconciliação dos IDs existentes; não repita a sequência cegamente.

No tráfego, confirmar setup não significa subir anúncios. Primeiro prepare plano, criativos, destino, orçamento autorizado e revisão. Se houver implementação disponível, crie inicialmente objetos pausados e confira no Ads Manager. Ativar campanha e permitir gasto exige autorização própria cobrindo a campanha e seus limites; campanha criada não comprova anúncio aprovado ou entrega. O pacote não é uma CLI oficial Meta, nem a presença de skills comprova uma quantidade de agentes funcionando. Este documento não certifica integração real: a validação depende da conta do aluno.

## Evidência e limite da consulta

Foram lidas as coleções públicas **do workspace Meta** no Postman, não coleções comunitárias. URLs Developers complementares foram fornecidas como referências oficiais; algumas recusaram a leitura automatizada, e a ajuda de vínculo exigiu login. Nenhuma tela autenticada foi observada. As instruções de navegação são orientações condicionais para o aluno conferir no seu dashboard, não um registro de clique executado.
