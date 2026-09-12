# Checklist de Validacao Final

Execute este checklist ao final do stack-setup para garantir que tudo esta funcionando.

---

## Essenciais (BLOQUEANTES — todos devem passar)

- [ ] Sistema operacional detectado corretamente
- [ ] git instalado e acessivel (`git --version`)
- [ ] gh (GitHub CLI) instalado e acessivel (`gh --version`)
- [ ] GitHub CLI autenticado (`gh auth status`)
- [ ] node instalado e acessivel (`node --version`)
- [ ] npm instalado e acessivel (`npm --version`)

---

## Repositorio (BLOQUEANTES para projeto novo)

- [ ] Repositorio git inicializado (`.git/` existe)
- [ ] `.gitignore` configurado
- [ ] Commit inicial criado
- [ ] Repositorio remoto no GitHub criado (se aplicavel)
- [ ] Push inicial feito (se aplicavel)

---

## Claude Code (RECOMENDADOS)

- [ ] `~/.claude/CLAUDE.md` existe e contem instrucoes globais
- [ ] `~/.claude/settings.json` existe e esta configurado
- [ ] Idioma configurado para portugues (`"language": "portuguese"`)
- [ ] Permissoes configuradas (allow/deny lists)
- [ ] Plugins essenciais ativados (context7, playwright, supabase)

---

## Infraestrutura (RECOMENDADOS)

- [ ] supabase CLI instalado (`supabase --version`)
- [ ] supabase CLI autenticado (`supabase projects list`)
- [ ] railway CLI instalado (se selecionado)
- [ ] railway CLI autenticado (se selecionado)
- [ ] docker instalado (se selecionado)
- [ ] docker rodando (`docker info`)

---

## Qualidade (OPCIONAIS)

- [ ] coderabbit instalado (se selecionado)
- [ ] pnpm instalado (se selecionado)
- [ ] bun instalado (se selecionado)

---

## Estrutura do Projeto (para projetos novos)

- [ ] Diretorio `docs/` criado
- [ ] Diretorio `docs/stories/` criado
- [ ] Diretorio `docs/architecture/` criado
- [ ] Diretorio `docs/guides/` criado
- [ ] Diretorio `src/` criado
- [ ] Diretorio `tests/` criado
- [ ] `package.json` existe
- [ ] `README.md` existe

---

## Estrutura do Projeto (para projetos existentes)

- [ ] Arquivos existentes preservados intactos
- [ ] `.env` nao foi alterado
- [ ] Scripts do package.json preservados
- [ ] Configs de linting preservadas
- [ ] Nenhum arquivo sobrescrito sem autorizacao

---

## Pos-Condicoes

- [ ] Todos os CLIs essenciais instalados e acessiveis no PATH
- [ ] Repositorio git inicializado com .gitignore
- [ ] Ambiente pronto para desenvolvimento

---

## Resumo de Status

Ao final, exibir:

```
✅ Essenciais: X/6 OK
✅ Repositorio: X/5 OK
✅ Claude Code: X/5 OK
✅ Infraestrutura: X/6 OK
✅ Qualidade: X/3 OK
✅ Estrutura: X/8 OK

Status geral: PRONTO PARA DESENVOLVIMENTO ✅
```

Se algum essencial falhar:

```
❌ Status geral: INCOMPLETO
   Itens faltando: [lista]
   Acao necessaria: [instrucoes]
```
