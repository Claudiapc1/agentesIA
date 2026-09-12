# Integracao com o ContextOS: qual negocio e qual design system

Toda skill `/design` carrega ESTE protocolo no inicio. Ele segue o padrao oficial do
ContextOS (a skill `/context-create` e o `CONTEXT-OS-PROTOCOL.md` dela). O ContextOS e
o sistema operacional de contexto da empresa; vive na MAQUINA do usuario em `~/context-os/`.

## Fase 1: Context Resolution (sempre, antes de qualquer coisa)

1. **Procurar o ContextOS na maquina.** Localizar `context-os/` nesta ordem:
   - `~/context-os/` (base oficial, no home, autossuficiente)
   - `./context-os/` (workspace atual)
   - subir diretorios ate a raiz, se necessario
2. **Se NAO encontrar:** informar
   > "ContextOS nao encontrado nesta maquina. Rode `/context-create *init` pra criar e
   >  `/context-create *add-business {slug}` pra cadastrar o negocio."
   e PARAR (nao prosseguir sem contexto). [salvo regra de degrade definida na skill]
3. **Se encontrar:** ler `~/context-os/config.yaml` para descobrir:
   - a lista de **negocios disponiveis** (`businesses`)
   - a **empresa ativa** (`active_business`)
4. **PERGUNTAR sempre qual negocio** (mostrando os que existem na maquina):
   > "Encontrei o ContextOS. Qual negocio?
   >  1. {business-1}  (ativo)
   >  2. {business-2}
   >  ...
   >  Responde numero ou nome. Enter usa o ativo."
   Nunca assumir o negocio sem confirmar.

## Fase 2: Carregar o contexto completo do negocio escolhido

Base: `~/context-os/workspace/businesses/{slug}/`. Ler o que existir:

| Pasta / arquivo | O que da |
|---|---|
| `context/company-profile.yaml` | nome, missao, proposta de valor |
| `context/icp.yaml` | cliente ideal, dores |
| `context/credentials.yaml` | prova, autoridade |
| `context/pricing.yaml` | precos/ofertas |
| `brand-dna/voice.yaml` | tom de voz (pra textos da pagina) |
| `brand-dna/visual-identity.yaml` | identidade visual (logo, cores, do/dont) |
| `brand-dna/positioning.yaml` | posicionamento |
| `brand-dna/archetype.yaml` | arquetipo |
| **`design-system/tokens.yaml`** | **tokens do DS (cores, tipografia, spacing) - USAR ESTES** |
| **`design-system/components.yaml`** | componentes do DS da marca |
| **`design-system/patterns.yaml`** | padroes de uso |
| **`design-system/guidelines.yaml`** | diretrizes do DS |
| `culture/values.yaml`, `products/*.yaml` | cultura e produtos |

Checar `evidence/completeness.yaml`: <50% avisar "contexto quase vazio" / 50-84% seguir
com cuidado / >=85% usar normalmente.

## Fase 3: Aplicar

- Ao criar pagina/componente/tokens, **usar o design system real do negocio**
  (`design-system/tokens.yaml` etc.). Nunca inventar tokens quando o negocio ja tem DS.
- Se `design-system/` estiver vazio, avisar e oferecer `/design-greenfield` ou
  `/design-foundations` pra construir o DS do negocio (usando brand-dna como base).
- A **biblioteca de 70 marcas** (`coreai-design-shared/references/design-library/`) entra so como
  INSPIRACAO de direcao visual, nunca substitui o DS do cliente.

## Regra
A skill **le** o ContextOS, nunca grava nele. Quando construir um DS novo
(greenfield/foundations), o output volta pro ContextOS via `/context-create` ou e
entregue pro usuario sincronizar. Dependencia: skill `context-create` (se ContextOS
nao existe, e ela quem inicializa).
