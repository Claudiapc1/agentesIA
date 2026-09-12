# Fase 5 — Materialização (escrever conteúdo)

Preenche o corpo de cada SKILL.md e torna o `shared/` self-contained.

## Input
- Esqueleto da Fase 4 + `manifest.yaml`

## Passos

### 5.1 — Materializar a skill mãe
No `skills/{prefix}/SKILL.md`, escrever o corpo:
1. Persona (do `entry_agent`, condensada).
2. Gancho ContextOS completo (passos do `references/contextos-protocol.md`):
   localizar context-os → perguntar cliente → carregar `businesses/{slug}/` → checar completeness.
3. Listar os comandos disponíveis (`/{prefix}:*`) com 1 linha cada.
4. Roteamento: se o pedido já é uma ação, invocar a sub-skill via Skill tool;
   senão, listar e perguntar.

### 5.2 — Materializar cada sub-skill
Para cada item do manifest, no corpo do SKILL.md:
1. Recarregar cliente (ContextOS) se invocada direto.
2. Carregar `shared/references/` (DNA / premissas load:ALWAYS).
3. Carregar `shared/agents/{usados}` (motor).
4. Escrever o PROCESSO: condensar os steps do workflow/task de origem em
   passos executáveis e numerados. Sem referência ao squad — o conteúdo está aqui.
5. Validação final: rodar `shared/validators/` na ordem (ex: anti-ia → oráculo),
   loop de reescrita até passar.
6. Output: onde salvar / como entregar.

### 5.3 — Tornar shared/ self-contained
Revisar cada arquivo copiado para `shared/`:
- Remover/substituir QUALQUER path para `legacy/squads/...`.
- Resolver includes/refs internas do squad (inline o conteúdo necessário).
- `shared/agents/{id}.md`: manter persona + frameworks; remover ativação de squad.
- `shared/validators/`: manter critérios; remover dependência de scripts externos
  do squad (se houver script essencial, portá-lo pra `shared/` ou descrever a regra inline).

### 5.4 — Verificação de self-containment
```bash
grep -rn "legacy/squads" "{plugin}" && echo "FALHA: ainda referencia squad" || echo "OK self-contained"
```
Se falhar, corrigir antes de avançar.

## Saída
Plugin completo e self-contained. Avance para Fase 6.
