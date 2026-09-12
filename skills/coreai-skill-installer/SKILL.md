---
name: skill-installer
description: Utility skill que ativa qualquer skill de `~/coreaios/skills/` globalmente no Claude Code. NOTA — neste setup, `~/.claude/skills/` JÁ é symlink para `~/coreaios/skills/`, então toda skill criada em coreaios/skills aparece automaticamente como ativa. Esta skill apenas executa `scripts/install.sh` (se a skill alvo tiver) — útil pra skills com hooks/commands que precisam de instalação extra. Triggers — "/skill-installer {nome}", "ativar skill global", "rodar install da skill".
version: 1.0.0
author: Juliano Torriani
created: 2026-05-01
keywords: [skill-installer, activation, coreaios, distribution]
---

# Skill Installer

> **Importante:** neste setup, `~/.claude/skills/` é symlink direto para `~/coreaios/skills/`. Toda skill criada em coreaios/skills aparece automaticamente como ativa no Claude Code — não precisa de symlink individual.

Esta utility serve para skills que tem `scripts/install.sh` extra (hooks, mods em settings.json, env vars) — apenas executa esse script.

## Subcomandos

| Comando | Função |
|---------|--------|
| `/skill-installer {nome}` | Roda `scripts/install.sh` da skill (se existir) |
| `/skill-installer --list` | Lista skills com `install.sh` disponível |

## Use case

Distribuição pra alunos: aluno tem `~/coreaios/skills/` apontando do mesmo jeito → você manda pasta da skill → ele extrai → roda `/skill-installer {nome}` se precisar instalar hooks.

## Fluxo

1. Recebe nome da skill
2. Verifica `~/coreaios/skills/{nome}/SKILL.md` existe
3. Se tem `scripts/install.sh`, pergunta confirmação e executa
4. Reporta resultado

## Convenção para skills com install

Cada skill que precise instalar coisas extra (além de aparecer como skill no Claude Code) deve ter `scripts/install.sh` idempotente. Veja `~/coreaios/skills/session-memory/scripts/install.sh` como referência.
