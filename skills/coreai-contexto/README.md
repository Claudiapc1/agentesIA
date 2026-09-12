# ContextOS portado para CoreAI

Portados de coreai-mentoria/context-create: os 30 templates empresariais YAML (context, brand-dna, design-system, culture, operations, evidence), config/user e os bancos quick/deep, sem redução de campos. Métodos originais create/quick/deep/enrich preservados como referências. A entrada SKILL.md adapta paths e comandos executáveis.

Não incluídos: Workspace/COO, seus registries globais, dashboard fictício, instalação de squads, automação de navegador/Drive, transcrição e pesquisa externa. Produtos/inteligência continuam estruturas do ContextOS; não há invenção de produtos ou autoridade. Os shell scripts antigos são substituídos pelo CLI Python, não reusados contra a árvore antiga.

Python 3.10+; instalar `requirements.txt` em venv. `contextos.py --help` lista comandos. Raiz sempre explícita, empresas em businesses/, config.json canônico. Scaffold nunca cria contexto.md. Importação exige fonte não vazia dentro de sources/ e preserva número/lista. Fonte é registrada com hash; consolidar exige revisão declarada, quatro campos essenciais e hashes vigentes. Não equivale a validação da verdade, cobertura de 85% ou oferta pronta.

Não há overwrite de template/resposta/consolidado existente diferente. Para evolução, preservar histórico e revisar os arquivos com o usuário; o CLI recusa conflitos. Escritas bloqueiam symlinks conhecidos; não há sandbox contra troca concorrente maliciosa de caminhos. Bootstrap idempotente não apaga dados.

Os arquivos de método mantêm linguagem histórica de automação; as limitações e comandos do SKILL.md prevalecem. Pausa/retomada usa registro de respostas e listagem answered, sem reproduzir cache antigo de cursor. Enriquecimento, cruzamento semântico, authority-story e propagação de marca exigem atuação do agente, não foram automatizados nem testados como conectores.
