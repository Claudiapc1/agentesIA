# Conexões para o workshop

Guia de execução pelo aluno. Fontes oficiais consultadas em 11/09/2026; nenhuma conta foi conectada nem API chamada nesta revisão. Faça primeiro o caminho de documentos→ContextOS; conectores aceleram a coleta. A chave de imagem é uma etapa separada.

## 1. Google Drive no Claude chat ou Desktop

| Etapa / ação | Resultado esperado | Conferência | Se falhar |
|---|---|---|---|
| Abra Customize → Connectors → +; procure Google Drive | Página do conector | Leia capacidades antes de conectar | Use + do chat → Connectors → Manage connectors; se indisponível, use exportação abaixo |
| Clique Connect/Install e conclua o login Google | Conta autorizada | Confira qual conta selecionou e permissões solicitadas | Conta corporativa pode exigir liberação administrativa |
| No chat, abra + → Connectors e habilite o serviço | Serviço habilitado nessa conversa | Não basta estar instalado no diretório | Revise a conexão e as restrições do workspace |

Esses controles são documentados pela [Anthropic](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities). Em ambientes gerenciados, liberação e autenticação dependem da política da organização.

| Etapa / ação | Resultado esperado | Conferência | Se falhar |
|---|---|---|---|
| Abra + → Add from Google Drive e selecione documento recente ou cole sua URL | Documento adicionado | Comece por um arquivo que você consegue abrir diretamente | Confira permissão no Google e conta conectada |
| Peça um resumo com a fonte | Resposta ligada ao documento | Abra a referência e confira uma informação | Documento com imagem embutida pode precisar de exportação/anexo separado |

O conector pode pesquisar e recuperar documentos e extrai texto; imagens embutidas nos documentos não são processadas. Consulte [Google Workspace connectors](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors).

Pedido de teste: “Leia somente este documento e diga o nome do produto e a entrega descrita, citando a fonte. Não altere o Drive.” A conferência do conteúdo é parte do exercício, não teste automático já executado.

## 2. Claude chat, Claude Code e Codex são ambientes distintos

Ter acesso no chat não comprova que a ferramenta está disponível numa sessão do terminal. No Claude Code, peça para identificar as ferramentas realmente disponíveis e testar a leitura do documento escolhido. Se não houver ferramenta, exporte o conteúdo. Este guia não fornece um comando de instalação MCP do Google Drive sem uma configuração específica verificada.

OAuth é o login/autorização da pessoa para um aplicativo. Service Account é uma identidade técnica com permissões próprias; não herda seu Drive porque você entrou na conta Google. Não substitua o login por um JSON de Service Account neste exercício. O caminho técnico exige projeto, APIs e concessões de acesso separadas.

## 3. Google Drive no Codex, quando disponível

| Etapa / ação | Resultado esperado | Conferência | Se falhar |
|---|---|---|---|
| Abra Plugins, quando disponível; procure Google Drive e leia os apps incluídos | Plugin compatível visível | Confirme disponibilidade para sua conta/superfície | Se ausente, use exportação; não pressupor propagação do ChatGPT |
| Instale e complete Connect/login quando solicitado | App autorizado | Confira conta e controles do workspace | Solicite habilitação ao administrador quando aplicável |
| Na tarefa compatível, Sources → Use plugins → selecione o instalado | Capacidade selecionada | Peça leitura de um arquivo conhecido com referência | Instalação sozinha não comprova acesso |

A [documentação OpenAI de plugins](https://help.openai.com/en/articles/20001256-plugins-in-chatgpt-and-codex) confirma esses controles condicionais. Disponibilidade varia; não há promessa neste guia de Google Drive presente em toda conta Codex.

## 4. Caminho universal: documentos exportados → ContextOS

Fluxo pedagógico do kit, utilizável quando o conector estiver ausente:

| Etapa / ação | Resultado esperado | Conferência | Se falhar |
|---|---|---|---|
| Escolha os documentos relevantes da oferta atual; exporte pelo serviço de origem ou copie texto para arquivo local | Material legível no computador | Abra cada arquivo e confira conteúdo | PDF escaneado precisa de OCR/leitura visual; não assumir extração completa |
| Inclua nome/link original e data de coleta junto de cada material | Origem rastreável | Diferencie documento antigo da decisão atual | Marque origem desconhecida como lacuna |
| Abra coreai-contexto e informe a base/cliente existentes | Cliente correto resolvido | Leia a identificação antes de gravar | Não crie segunda base para contornar erro |
| Peça consolidação de fatos, hipóteses, conflitos e lacunas | Rascunho revisável | Confira produto, público e oferta | Corrija o dado e preserve a fonte |
| Aprove o conteúdo e peça gravação conforme contrato ContextOS | Contexto salvo no cliente | Em nova leitura, confira uma informação com fonte | Arquivo salvo não significa conector ou sincronização ativa |

Pedido: “Use estes documentos do meu negócio. Preserve as fontes, separe fatos de hipóteses e pergunte pelos conflitos. Use o ContextOS existente; não grave dados do cliente dentro das skills.”

## 5. Gemini: conta, projeto e chave

| Etapa / ação | Resultado esperado | Conferência | Se falhar |
|---|---|---|---|
| Abra Google AI Studio e aceite os termos com a conta escolhida | Dashboard acessível | Confira a conta | Resolva restrição de conta/organização |
| Abra Dashboard → Projects; importe o projeto existente se necessário | Projeto listado | Confira nome/ID do projeto | Não escolher projeto de outra empresa |
| Abra API Keys e crie a chave no projeto | Chave emitida | Confira projeto, nunca projete o valor | Falta de permissão exige administrador IAM |

Projeto padrão pode ser criado para novos usuários; projetos existentes podem precisar de importação. A SDK aceita `GEMINI_API_KEY` ou `GOOGLE_API_KEY`; a segunda prevalece se ambas existirem. Veja [chaves Gemini](https://ai.google.dev/gemini-api/docs/api-key).

Guarde a chave em campo secreto/configuração privada do executor escolhido. Não a coloque no ContextOS, prompt, captura de tela ou código compartilhado. A chave do Google não é `OPENROUTER_API_KEY`. Criar a chave não conecta automaticamente Claude ou Codex ao gerador.

## 6. Teste da chave sem exibir o segredo

Ação do aluno, não executada por este guia: use o exemplo atual do [quickstart oficial](https://ai.google.dev/gemini-api/docs/get-started) em ambiente Python isolado com `google-genai`. Insira a chave por entrada oculta, faça uma única chamada de texto e mostre apenas sucesso/falha. Uma chamada pode consumir quota ou gerar cobrança; confirme o projeto e limites antes.

Exemplo de adaptação local para entrada oculta (salve como arquivo, execute num terminal normal, não numa célula que ecoa entradas):

```python
from getpass import getpass
from google import genai

key = getpass("Chave Gemini (entrada oculta): ")
model = input("Modelo de texto disponível no seu projeto: ").strip()
try:
    client = genai.Client(api_key=key)
    result = client.interactions.create(model=model, input="Responda apenas OK.")
    print("Resposta recebida." if result.output_text else "Sem texto na resposta.")
except Exception:
    print("Teste falhou. Confira projeto, chave, modelo e quota no painel.")
```

| Etapa / ação | Resultado esperado | Conferência | Se falhar |
|---|---|---|---|
| Teste texto uma vez | Resposta recebida | Confirme uso no projeto, sem imprimir credencial | Confira modelo disponível, autorização e quota; não repetir em loop |
| Configure o executor de imagem com essa credencial, por mecanismo secreto próprio | Ferramenta de imagem identificada | Liste ferramenta e modelo disponíveis | Sem executor instalado, entregue apenas prompt |
| Gere uma imagem de teste não sensível com modelo de imagem disponível | Arquivo de imagem retornado | Abra a imagem e confira formato/conteúdo | Resposta textual não comprova geração de imagem |

A [documentação de geração de imagens Gemini](https://ai.google.dev/gemini-api/docs/image-generation) separa modelos e retorno de imagem. Copie o exemplo atual correspondente ao modelo disponível no projeto; salve a saída em pasta autorizada do cliente. O teste de texto não valida acesso ao modelo de imagem. Geração confirmada não configura publicação Instagram.

## Registro final

Anote somente: ambiente utilizado, conta/projeto identificados sem segredos, documento conferido, caminho do contexto, modelo testado, artefato retornado e pendências. Marque separadamente instalado, autenticado, leitura comprovada e geração comprovada.
