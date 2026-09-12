---
name: session-memory
description: Continuidade automática entre sessões do Claude Code via hooks. Cada vez que o agente termina uma resposta, faz append num `.claude/session.md` da pasta atual com resumo + arquivos modificados + próximo passo. Quando você reabre o Claude Code na mesma pasta, injeta esse histórico no contexto inicial — você volta exatamente de onde parou. Auto-rotaciona entradas > 30 dias para `.claude/session-archive/`. Triggers — "/session-memory", "instalar session memory", "ativar memória sessão", "configurar continuidade entre sessões". NÃO confundir com claude-mem (busca semântica cross-projeto) — session-memory é continuidade local sequencial.
version: 1.0.0
author: Juliano Torriani
created: 2026-05-01
keywords:
  - session-memory
  - hooks
  - continuity
  - claude-code
  - persistence
  - context-restoration
---

# Session Memory — Continuidade Automática Entre Sessões

Skill que dá ao Claude Code **memória de curto prazo automática**. Cada turno do agente é registrado num arquivo local da pasta de trabalho, e ao reabrir você volta de onde parou — sem precisar re-explicar contexto.

## Quando usar

✅ "/session-memory", "instalar session memory", "ativar memória sessão"

❌ Para busca semântica cross-projeto → `claude-mem`. Para memória curada longo prazo → `CLAUDE.md`.

## Arquitetura — 3 camadas de memória

| Camada | Onde mora | Conteúdo | Vida útil |
|--------|-----------|----------|-----------|
| **Curto prazo (esta skill)** | `.claude/session.md` por pasta | Cada turno meu — resumo + arquivos + próximo passo | 30 dias auto |
| **Arquivo histórico** | `.claude/session-archive/YYYY-MM.md` | Histórico mensal de quando passou dos 30 dias | Permanente local |
| **Longo prazo semântico** | `claude-mem` (banco indexado) | Buscável por keyword cross-projeto | Permanente |
| **Curado** | `CLAUDE.md` no projeto | Decisões importantes via `/promote-session` | Permanente, commitado |

## Subcomandos

**Automáticos (você não chama):**
- Stop hook → toda vez que termino resposta, append em `.claude/session.md`
- SessionStart hook → toda vez que abre Claude Code, lê e injeta no contexto

**Manuais:**
| Comando | Função |
|---------|--------|
| `/show-session` | Mostra conteúdo completo do `.claude/session.md` |
| `/clear-session` | Apaga `session.md` (com confirmação) |
| `/promote-session` | Cura entradas → move pro `CLAUDE.md` |

## Política de retenção

**Auto:** entradas > 30 dias → `.claude/session-archive/YYYY-MM.md`. Se `session.md` > 50KB → trim últimas 30 entradas.

**Manual:** `/clear-session`, `/show-session`, `/promote-session`.

## Instalação

Sem script de instalação externo: copie os arquivos desta própria skill.

```bash
mkdir -p ~/.claude/hooks ~/.claude/commands
cp hooks/session-append.sh hooks/session-load.sh ~/.claude/hooks/
cp commands/*.md ~/.claude/commands/
```

Depois, mergeie manualmente os hooks em `~/.claude/settings.json` (chamando
`session-append.sh` ao fim de cada resposta e `session-load.sh` no início da
sessão) e adicione `.claude/session.md` ao `~/.gitignore_global`.

## Privacidade

`.claude/session.md` pode conter tokens. **Não commite por default** — `install.sh` adiciona ao `.gitignore_global`.

## Squad relacionado

Não substitui `claude-mem` (busca semântica) ou `CLAUDE.md` (curado). Complementa.
