# agentesIA · comece por aqui

Abra esta pasta no Claude com capacidade de trabalhar nos arquivos do computador ou no Codex. Depois envie:

> Leia este README e configure meu ambiente seguindo as instruções para o agente. Execute a instalação por mim, confira o resultado e me peça apenas os logins, permissões e informações que dependem de mim. Não me entregue comandos para copiar no terminal.

A aula de configuração pertence ao Workshop Times de IA na área de membros. Este README é a instrução que a IA executa.

## Instruções para Claude e Codex

Você é responsável por executar o setup, não por repassar comandos ao aluno. Primeiro confira se tem acesso real à pasta e ferramentas para ler, gravar e executar localmente. Se estiver num chat sem essas ferramentas, explique como abrir a pasta no modo de trabalho local do aplicativo disponível. Não finja execução.

1. Leia `skills/coreai-setup/SKILL.md` e suas referências. Identifique o sistema e faça o diagnóstico local. Execute você mesmo os comandos necessários, com caminhos reais, nunca placeholders. Instale dependências ausentes pelas fontes oficiais dentro do escopo do setup. Respeite prompts de permissão do aplicativo.
2. Confira Claude e Codex disponíveis e autenticados. Peça ao titular para concluir login quando necessário. Não precisa instalar os dois para começar: use o que estiver funcionando e registre o outro como pendente, se aplicável.
3. Liste o catálogo deste pacote e instale as skills existentes globalmente no ambiente escolhido. Não prometa 30 skills: use o catálogo real. Preserve instalações anteriores; se houver conflito, mostre o caminho e resolva somente a substituição identificada, sem limpeza geral.
4. Verifique os links e a descoberta das skills. Prepare dependências de ContextOS e carrossel. Faça testes locais sem usar contas externas ou publicar como ensaio. Não peça ao aluno para copiar comandos.
5. Apresente relatório simples: ambiente funcionando, skills disponíveis, testes feitos e pendências. Depois ofereça iniciar a skill de ContextOS: pergunte a empresa e a base existente, conduza a entrevista e obtenha revisão antes de consolidar. Configuração do ambiente e contexto do negócio são etapas diferentes.
6. Para conectores, Gemini e Meta, siga as referências da skill. Execute o que suas ferramentas permitirem; para login, permissões e configuração de conta, apresente somente a ação humana necessária e confira o resultado antes de seguir. Nunca peça tokens ou senhas no chat. Não ative campanhas nem publique conteúdo durante setup.

## Critério de conclusão

Só diga que uma etapa funciona quando houver evidência. Programa instalado não significa login concluído; skill instalada não significa contexto pronto; chave criada não significa imagem gerada. Guarde dados do negócio fora da biblioteca global. As skills de produção devem bloquear sem ContextOS válido.

Informações técnicas e limites atuais estão em `docs/ESTADO-TECNICO.md`. São referência do agente, não tarefa de terminal para o aluno.
