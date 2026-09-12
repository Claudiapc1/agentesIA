# Gate ContextOS candidato

API: scripts/gate.py expõe gate(root=None, business=None, output=None, required=None). CLI: python3 scripts/gate.py --root ROOT --business SLUG --output ABSOLUTE_PATH [--require FILE]. Sem root/output retorna BLOCKED_CONTEXT exit2. READY exit0 é somente estrutural, com fontes lidas/hashes e context_sha256. Não cria diretórios/arquivos nem chama rede.

contexto.md sempre obrigatório; --require adiciona. Rejeita symlinks de cliente, config, fontes e caminho de output. Output deve ficar estritamente abaixo de business/outputs. A raiz explicitamente escolhida é canonicalizada (incluindo alias de filesystem como /var no macOS).

O chamador deve executar o gate imediatamente antes de escrever, usar os paths retornados e preservar bloqueio. Isto não elimina corrida TOCTOU contra outro processo modificando links/arquivos após verificação; não é sandbox de sistema operacional. Não valida semântica nem autorização financeira/publicação.

Nove testes unitários em ../../tests/test_gate.py validaram context obrigatório/aditivo, múltiplos clientes, symlinks e saída, ausência de escrita e mudança do hash. Nenhum original/global alterado.
