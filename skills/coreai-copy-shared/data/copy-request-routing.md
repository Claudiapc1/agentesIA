# Copy Request Routing

## Metadata

```yaml
id: copy-request-routing
version: "1.0.0"
type: routing-guide
load: ON_INTAKE
scope: "New copy requests and project triage"
purpose: "Route requests by price point, audience temperature, and desired asset"
```

## Hierarquia de roteamento (declarada 2026-08-18)

Este arquivo é a **camada 2** da triagem: decide o asset a produzir a partir do que o cliente pediu no intake.
Ordem de consulta completa:

1. `data/arvore-decisao.md` → triagem por preço/temperatura
2. **`copy-request-routing.md`** (este arquivo) → triagem por asset pedido no intake
3. `data/routing-matrix.yaml` → fonte de verdade de agente-por-tipo-de-copy (seleção final do copywriter)

Se este arquivo sugerir um agente diferente do `routing-matrix.yaml` pro mesmo asset, `routing-matrix.yaml` decide —
este arquivo resolve qual asset produzir, não qual copywriter especificamente o executa.

## Intake Questions

The orchestrator should resolve three questions first:

1. What is the price point?
2. What is the audience temperature?
3. What asset is being requested?

## Price Point Routing

### Low ticket

- Typical range: entry-level to impulse-buy offers
- Best assets: short sales page, short VSL, direct ads
- Default posture: direct offer, low friction, fast decision

### Mid ticket

- Typical range: course and guided program territory
- Best assets: longer sales page, VSL, email sequence, short webinar
- Default posture: stronger education plus offer context

### High ticket

- Typical range: consulting, mentoring, application-led offers
- Best assets: application ads, application page, call script, close support
- Default posture: relationship-first conversion, not direct checkout

### Premium high ticket

- Typical range: complex sales with 1:1 or multi-step conversion
- Best assets: multi-angle ad system, authority video, call flow, close strategy
- Default posture: hand-raise -> qualification -> relationship -> conversion

## Audience Temperature Routing

### Cold

- Lead does not know the brand well
- Use education, tension, curiosity, and pattern interrupts
- Do not force hard selling too early

### Warm

- Lead has consumed content or knows the brand
- Can move more directly toward offer context
- Email, webinar, and narrative conversion assets perform better

### Hot

- Lead already trusts the brand or bought before
- Use direct offer, ascension, upsell, and strong proof

## Asset Routing

| Request | Default Assets |
|---|---|
| Direct conversion page | `sales-page`, `landing-page` |
| High-ticket sales flow | `high-ticket ads`, `application page`, `call script` |
| Course launch | `webinar`, `sales-page`, `email-sequence` |
| Daily relationship | `daily-email`, `newsletter` |
| Ad testing | `ads`, `headlines`, `video-hook` |
| Launch strategy | PLF workflows and launch assets |
| WhatsApp Utility templates (API oficial Meta) | task `criacao/create-whatsapp-utility-campaign` · executor `dan-kennedy` · ativos: `data/banco-templates-utility-whatsapp.yaml` + `swipe/templates-utility-whatsapp.md` |
| WhatsApp sequencia de convite pra reuniao | workflow `convite-reuniao-diagnostico` · ativos: `data/banco-angulos-convite-reuniao.yaml` + `templates/mensagens-convite-reuniao-tmpl.md` |

## Routing Rules

- High-ticket offers require a sales process, not only page copy.
- Cold traffic needs tension and relevance before direct ask.
- The higher the price, the more relationship and proof density required.
- If the request is ambiguous, route through diagnosis before execution.
- WhatsApp Utility exige um ATO REAL do lead (transacao existente). Sem ato, e Marketing: a task reprova e o chief avisa o cliente.
