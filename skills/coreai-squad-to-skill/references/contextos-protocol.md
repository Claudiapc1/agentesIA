# Gancho ContextOS — protocolo canônico

Toda skill mãe gerada injeta este bloco para carregar o contexto do cliente.
Fonte: a skill `context-create` e seu `CONTEXT-OS-PROTOCOL.md`.

## Onde fica o ContextOS

A skill busca o diretório `context-os/` nesta ordem:
1. `./context-os/` (workspace atual)
2. `~/context-os/` (home)
3. `../context-os/` (diretório pai)

## Passo a passo (injetar na skill mãe)

```
PASSO 1 — Localizar ContextOS
  Procurar context-os/ (workspace → home → pai).
  Se não achar: avisar e sugerir rodar /context-create primeiro. Parar.

PASSO 2 — Ler config + listar businesses
  Ler context-os/config.yaml → active_business + lista de businesses.
  SEMPRE perguntar qual cliente usar:
    "Qual cliente?
     1. {business-1}
     2. {business-2}  ← ativo (default)
     ...
     Responde número ou nome. Enter usa o ativo."

PASSO 3 — Carregar contexto do cliente escolhido
  Base: context-os/businesses/{slug}/
  Ler (os que existirem):
    context/company-profile.yaml   (nome, missão)
    context/icp.yaml               (ICP, dores)
    context/credentials.yaml       (prova/autoridade)
    brand-dna/voice.yaml           (tom de voz)
    brand-dna/positioning.yaml     (posicionamento)
    brand-dna/archetype.yaml       (arquétipo)
    culture/values.yaml            (valores)
    products/*.yaml                (produtos)

PASSO 4 — Checar completeness
  Ler context/../evidence/completeness.yaml (se existir):
    < 50%  → avisar "contexto quase vazio", sugerir setup, mas permitir seguir
    50-84% → avisar "contexto parcial", seguir com cuidado
    ≥ 85%  → usar normalmente
```

## Paths canônicos (ler, nunca re-gerar)

| Dado | Path |
|---|---|
| empresa ativa | `context-os/config.yaml` → `active_business` |
| perfil | `context-os/businesses/{slug}/context/company-profile.yaml` |
| ICP | `context-os/businesses/{slug}/context/icp.yaml` |
| credenciais | `context-os/businesses/{slug}/context/credentials.yaml` |
| voz | `context-os/businesses/{slug}/brand-dna/voice.yaml` |
| posicionamento | `context-os/businesses/{slug}/brand-dna/positioning.yaml` |
| arquétipo | `context-os/businesses/{slug}/brand-dna/archetype.yaml` |
| valores | `context-os/businesses/{slug}/culture/values.yaml` |
| produtos | `context-os/businesses/{slug}/products/*.yaml` |
| completeness | `context-os/businesses/{slug}/evidence/completeness.yaml` |

## Regra

A skill gerada **lê** o ContextOS existente. **Não** re-roda `context-create`
nem grava no ContextOS. Se o cliente não tiver contexto montado, avisa e sugere
`/context-create`, mas não bloqueia geração de copy (degrada com o que tiver).
