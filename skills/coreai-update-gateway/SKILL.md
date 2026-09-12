---
name: "update-gateway"
description: "Atualiza o Message Gateway do legacy a partir do aiox-imersao (upstream). Faz git pull, sincroniza infrastructure/message-gateway/, preserva config local, e opcionalmente re-deploya o agente."
version: "1.0.0"
user-invocable: true
maxTurns: 10
---

# Update Gateway

Sincroniza o `infrastructure/message-gateway/` do upstream (`aiox-imersao`) para este projeto (`legacy`).

## Usage

```bash
/update-gateway              # Pull + sync + report
/update-gateway --dry-run    # Apenas mostra o que mudaria, sem aplicar
/update-gateway --redeploy   # Pull + sync + deploy agent + restart
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `--dry-run` | flag | false | Apenas mostra diff, nao aplica |
| `--redeploy` | flag | false | Apos sync, roda deploy-agent.sh e restart |

## Paths

```yaml
upstream_repo: /Users/julianotorriani/claude/aiox-imersao
upstream_path: /Users/julianotorriani/claude/aiox-imersao/infrastructure/message-gateway
local_path: infrastructure/message-gateway
```

## Execution Protocol

### Step 1: Git Pull no upstream

```yaml
steps:
  - Run: git -C /Users/julianotorriani/claude/aiox-imersao pull --ff-only
  - If pull fails (conflicts, detached HEAD, etc): report error and STOP
  - Report: branch, commits pulled (0 = already up to date)
```

### Step 2: Dry-run diff

```yaml
steps:
  - Run rsync dry-run to see what would change:
    rsync -avn --delete \
      --exclude='.env' \
      --exclude='.DS_Store' \
      --exclude='agents/aiox-master/' \
      /Users/julianotorriani/claude/aiox-imersao/infrastructure/message-gateway/ \
      infrastructure/message-gateway/
  - Parse output into 3 categories:
    - NEW: files that will be added
    - MODIFIED: files that will be updated
    - DELETED: files that will be removed (--delete)
  - Present table with categories
  - If --dry-run flag: STOP here, do not apply
```

### Step 3: Apply sync

```yaml
steps:
  - Run rsync for real:
    rsync -av --delete \
      --exclude='.env' \
      --exclude='.DS_Store' \
      --exclude='agents/aiox-master/' \
      /Users/julianotorriani/claude/aiox-imersao/infrastructure/message-gateway/ \
      infrastructure/message-gateway/
  - Report: files synced, total size
```

### Step 4: Sync skills (telegram)

```yaml
steps:
  - Compare .claude/skills/telegram/SKILL.md between upstream and local
  - If upstream is newer or different:
    rsync -av \
      /Users/julianotorriani/claude/aiox-imersao/.claude/skills/telegram/ \
      .claude/skills/telegram/
  - Report: skill updated or already current
```

### Step 5: Post-sync verification

```yaml
steps:
  - Verify key files exist after sync:
    - infrastructure/message-gateway/core/bus/send-telegram.sh
    - infrastructure/message-gateway/core/scripts/agent-wrapper.sh
    - infrastructure/message-gateway/core/scripts/fast-checker.sh
    - infrastructure/message-gateway/deploy-agent.sh
    - infrastructure/message-gateway/enable-agent.sh
  - Verify .env was preserved:
    - test -f infrastructure/message-gateway/.env (if it existed before)
  - Report: verification table
```

### Step 6: Re-deploy (only if --redeploy)

```yaml
steps:
  - Run: bash infrastructure/message-gateway/deploy-agent.sh
  - Run: bash infrastructure/message-gateway/enable-agent.sh aiox-master --restart
  - Wait 5 seconds
  - Verify tmux: tmux has-session -t crm-default-aiox-master 2>/dev/null
  - Report: agent redeployed and restarted
```

### Final Report

```yaml
format: |
  ## Gateway Update Report

  | Item | Status |
  |------|--------|
  | Git pull | X commits pulled / already up to date |
  | Files added | N |
  | Files updated | N |
  | Files removed | N |
  | Skill telegram | updated / current |
  | Local .env | preserved |
  | Agent redeploy | done / skipped |

  **Proximo passo:** /telegram status (para verificar) ou /telegram restart (se nao usou --redeploy)
```

## Preserved Files (NEVER overwritten)

These files are excluded from rsync and will never be touched:

- `infrastructure/message-gateway/.env` - Configuracao local do gateway
- `infrastructure/message-gateway/agents/aiox-master/` - Agent local com telegram-images/
- `.DS_Store` - macOS metadata

## Error Handling

| Error | Action |
|-------|--------|
| git pull fails | Report error, suggest manual resolution, STOP |
| upstream repo not found | Report: "aiox-imersao nao encontrado em /Users/julianotorriani/claude/aiox-imersao" |
| rsync fails | Report error with details |
| deploy-agent.sh fails | Report error, agent may need manual fix |
| No changes detected | Report "Gateway ja esta atualizado" |

---

*Skill: update-gateway v1.0.0*
*Source: aiox-imersao/infrastructure/message-gateway/*
*Target: legacy/infrastructure/message-gateway/*
