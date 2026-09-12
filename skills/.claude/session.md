# Session Memory — skills

> Auto-populated by Stop hook on every assistant turn.
> Last 30 days kept here. Older entries archived in `session-archive/`.
> Manual control: `/clear-session` `/show-session` `/promote-session`.


---

## 2026-09-12 11:33 (sess 9c2dcec4)

**Resumo:** **Resumo do que foi feito:** Migrei todas as ~90 skills de `coreaios/skills/` para `agentesIA/skills/`, renomeadas para o padrão `coreai-*`, instaladas globalmente em Claude e Codex (89 copiadas, 6 puladas por já existirem corretamente, 77 novas instaladas via symlink). Depois ap

**Arquivos modificados:**
- `~/claude/agentesIA/skills/coreai-grand-slam-offer/SKILL.md`
- `~/claude/agentesIA/skills/coreai-stalk/SKILL.md`

---

## 2026-09-12 11:50 (sess 9c2dcec4)

**Resumo:** Respondendo direto às 3 perguntas: **1. Todas as skills do coreaios foram trazidas?** Sim. Confirmei agora: zero faltando. **2. Nenhum symlink?** Confirmado. Zero symlinks em `~/.claude/skills`, zero em `~/.agents/skills`, zero na própria fonte `agentesIA/skills`. Todas são pasta
