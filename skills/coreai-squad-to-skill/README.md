# squad-to-skill

Converte um squad AIOX num plugin de skills self-contained, invocável por slash command.

## Uso

```
/squad-to-skill legacy/squads/copy
```

Se não passar caminho, lista os squads disponíveis e pergunta qual.

## O que ela faz

Roda 6 fases determinísticas:

1. **Inventário** — lê o squad inteiro (config.yaml, agents + comandos, workflows, tasks, checklists, premissas).
2. **Seleção** (interativo) — você escolhe o que migrar: tudo ou por partes. Workflows e comandos de agente viram slash commands.
3. **Resolução** — descobre os agentes/tasks/validadores que cada item selecionado usa.
4. **Esqueleto** — cria a árvore do plugin (skill mãe + sub-skills + shared/) e o frontmatter.
5. **Materialização** — escreve o conteúdo, condensando agentes/tasks/workflows. Torna tudo self-contained (zero referência ao squad).
6. **Validação + Handoff** — valida cada skill (≥80), smoke test, sugere commit.

## Resultado

- Skill mãe `/{prefix}` — pergunta o cliente, carrega o ContextOS, roteia os comandos.
- Sub-skills `/{prefix}:{item}` — cada workflow/comando selecionado vira uma ação invocável.
- `shared/` — DNA permanente, agentes (motor), validadores. Tudo materializado, nada apontando pro squad.

## Regras-chave

- **Self-contained:** a skill gerada nunca referencia `legacy/squads/...`.
- **Workflows + comandos = slash commands.** Agentes e tasks = contexto interno.
- **ContextOS:** a skill mãe lê `context-os/businesses/{slug}/` (não re-roda context-create).

## Arquivos

- `SKILL.md` — orquestrador das 6 fases.
- `phases/01..06` — instruções de cada fase.
- `references/` — anatomia de squad, regras de mapeamento, protocolo ContextOS, anatomia do plugin.
- `templates/` — moldes da skill mãe, sub-skill e plugin.json.
