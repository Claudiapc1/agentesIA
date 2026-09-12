# Validação estrutural Zeus

- Frontmatter presente com name, description, when-to-use, argument-hint, allowed-tools e user-invocable.
- Referências internas engine/state/routes presentes.
- Rotas apontam somente SKILL.md existentes: True.
- Contrato compartilhado presente: False.
- Resolvedor compartilhado presente: False.
- Cliente obrigatório para domínio; bloqueio explícito se contrato faltar.
- Estado autorizado somente no cliente; seleção isolada por sessão.
- Sem cópia de identidade pessoal, templates corporativos ou dependência da origem.

Não executados: ativação real Claude Code/Codex, execução de domínio, persistência de estado de cliente, APIs ou publicação. Testes do resolvedor pertencem ao contrato compartilhado; esta inspeção não substitui integração runtime.
