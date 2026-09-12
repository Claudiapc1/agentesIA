# Fase 6 — Validação + Handoff

Valida cada skill gerada, faz smoke test, limpa runtime e entrega.

## Passos

### 6.1 — Validar cada skill
Para a mãe e cada sub-skill, rodar:
```
/skill-validate {slug}
```
Alvo: ≥ 80/100, sem problemas CRÍTICOS. Se < 80, corrigir os itens apontados
(frontmatter, description, when-to-use) e revalidar (máx 3 iterações por skill).

### 6.2 — Smoke test funcional
Verificar sem executar geração real:
- A skill mãe lista os comandos `/{prefix}:*`? (ler o SKILL.md)
- O gancho ContextOS está presente e aponta pros paths canônicos?
- `grep -rn "legacy/squads" {plugin}` retorna vazio? (self-contained)
- Cada sub-skill carrega references + agents + validators?

### 6.3 — Limpar runtime
```bash
rm -rf /tmp/squad-to-skill/{squad-name}/
```

### 6.4 — Relatório final
Apresentar:
```
Plugin {nome} gerado em {destino}.
Skill mãe: /{prefix}
Sub-skills ({N}):
  /{prefix}:{item-1}
  /{prefix}:{item-2}
  ...
Shared: {X} references, {Y} agents, {Z} validators.
Validação: {média}/100. Self-contained: OK.
```

### 6.5 — Sugestão de commit
```bash
cd ~/claude/coreaios
git add skills/{prefix}*
git commit -m "feat(coreaios): converte squad {nome} em skill via squad-to-skill"
```
(Não commitar automaticamente — apenas sugerir.)

## Saída
Plugin pronto pra usar. Fim do processo.
