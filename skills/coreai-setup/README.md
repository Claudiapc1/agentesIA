# Instalador portátil CoreAI

Referência interna para a IA executar. Para iniciar, leia o README na raiz do pacote. O aluno não precisa executar estes comandos.

Python 3.9+ e stdlib; sem Node, rede ou banco. `--source` aceita pasta skills ou repositório contendo skills. Seleção explícita de slugs coreai-*; sem seleção instalação falha (list/status não exigem seleção). coreai-shared e bibliotecas coreai-*-shared presentes acompanham qualquer seleção, mesmo sem SKILL.md. Bibliotecas não aparecem como skills em --list.

Claude: ~/.claude/skills. Codex: ~/.agents/skills, conforme documentação oficial consultada em 2026-09-11: https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills (redirecionamento de https://developers.openai.com/codex/skills). Claude: https://code.claude.com/docs/en/skills.

`python3 scripts/install.py --source ../ --list`
`python3 scripts/install.py --source ../ --target both --global-root /tmp/coreai-test coreai-contexto`
`python3 scripts/install.py --source ../ --target both --global-root /tmp/coreai-test --status`

--global-root é uma HOME alternativa, com .claude/skills e .agents/skills abaixo. Symlinks são usados; Windows pode exigir Developer Mode/permissão de symlink. Se não houver, falha e remove apenas links criados nesta execução. Não há cópia silenciosa, overwrite, uninstall ou update automático. Conflitos são detectados para todo lote antes de criar links. Diretórios vazios criados podem permanecer após erro. Links acompanham mudanças na origem, que deve permanecer no disco.

Não registra negócios, contexto ou credenciais em pasta global. O instalador antigo permanece intacto. Teste de links não certifica descoberta em Claude/Codex nem produção/publicação.
