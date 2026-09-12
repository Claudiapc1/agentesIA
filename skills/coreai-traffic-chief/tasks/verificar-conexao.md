# Verificar conexão e identidade
Consultar references/conexao-meta.md. Não executa nada apenas ao carregar esta task.
1. Inventariar ferramentas realmente disponíveis e suas descrições, ou adaptador local auditado. Token presente não prova canal funcional.
2. Se não houver transporte implementado/configurado: BLOCKED_CONNECTION; entregar checklist, não criar comandos fictícios.
3. Com leitura externa autorizada, obter conta pelo identificador fornecido e verificar nome, moeda, fuso e acesso; comparar ao negócio escolhido. Divergência bloqueia.
4. Conferir Página/Instagram e pixel/dataset apenas se pertinentes. Não enumerar outras empresas sem escopo.
5. Registrar transport, account_id, account_name, currency, timezone, checked_at e ativos no relatório local, sem credencial.
6. Antes de toda escrita revalidar o destino e a autorização da ação. Antes de leitura confirmar identidade da conta alvo; se faltarem dados, pedir o dado, não adivinhar.
Saída: CONNECTION_VERIFIED ou BLOCKED_CONNECTION, com evidência. Não chamar criação de container/upload para simular teste de leitura.
