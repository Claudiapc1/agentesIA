# Como Instalar e Ativar a Skill stack-setup

## Pre-Requisitos

- Claude Code instalado (CLI `claude` funcionando no terminal)
- Terminal aberto (macOS Terminal, iTerm2, Windows Terminal, etc)

---

## Instalacao

### Opcao 1: Copiar para pasta de skills globais (recomendado)

Copie a pasta `stack-setup/` inteira para a pasta de skills do Claude Code:

```bash
# Criar pasta de skills se nao existir
mkdir -p ~/.claude/skills

# Copiar a skill
cp -r stack-setup/ ~/.claude/skills/stack-setup/
```

Apos copiar, a estrutura deve ficar:

```
~/.claude/
├── skills/
│   └── stack-setup/
│       ├── SKILL.md                          # Skill principal
│       ├── INSTALL.md                        # Este arquivo
│       ├── references/
│       │   ├── cli-catalog.md                # CLIs por SO
│       │   ├── brownfield-checklist.md       # Checklist projeto existente
│       │   └── checklist.md                  # Validacao final
│       └── templates/
│           ├── claude-md-template.md          # Template CLAUDE.md global
│           ├── settings-template.md           # Template settings.json
│           └── project-scaffold.md            # Estrutura de projeto
```

### Opcao 2: Skill dentro do projeto

Se preferir ter a skill apenas em um projeto especifico:

```bash
# Na raiz do projeto
mkdir -p .claude/skills
cp -r stack-setup/ .claude/skills/stack-setup/
```

---

## Como Usar

Abra o Claude Code no terminal e digite:

```
/stack-setup
```

Ou com nome do projeto:

```
/stack-setup meu-novo-projeto
```

O Claude vai guiar voce por todo o processo de configuracao.

---

## O que a Skill Faz

1. **Detecta seu sistema operacional** (macOS, Linux, Windows)
2. **Verifica ferramentas instaladas** (git, node, npm, gh, supabase, etc)
3. **Instala o que estiver faltando** com comandos do seu SO
4. **Autentica servicos** (GitHub, Supabase, Railway)
5. **Configura o Claude Code** (CLAUDE.md global + settings.json)
6. **Configura o projeto** (novo ou existente)
   - Projeto Novo: cria repo, estrutura, .gitignore, README, push pro GitHub
   - Projeto Existente: verifica compatibilidade, preserva tudo, complementa
7. **Valida tudo** e mostra um resumo com proximos passos

---

## Verificacao

Para confirmar que a skill esta instalada corretamente, abra o Claude Code e digite:

```
/stack-setup
```

Se aparecer o prompt pedindo o modo de execucao (Guiado/Rapido/Planejamento), esta funcionando.

---

## Problemas Comuns

### "Skill nao encontrada"

Verifique se a pasta esta no local correto:

```bash
ls ~/.claude/skills/stack-setup/SKILL.md
```

O arquivo `SKILL.md` deve existir nesse caminho.

### "Permission denied"

```bash
chmod -R 755 ~/.claude/skills/stack-setup/
```

### Claude Code nao reconhece a skill

Reinicie o Claude Code (feche e abra novamente). Skills sao carregadas na inicializacao.

---

## Atualizacao

Para atualizar a skill, substitua a pasta inteira:

```bash
rm -rf ~/.claude/skills/stack-setup/
cp -r stack-setup/ ~/.claude/skills/stack-setup/
```
