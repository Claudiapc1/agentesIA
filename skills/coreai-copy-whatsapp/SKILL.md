---
name: coreai-copy-whatsapp
description: "Redige mensagens e templates WhatsApp com contexto real, distinguindo utility de marketing e sem executar disparos."
when-to-use: "Quando pedir mensagem WhatsApp, template utility, régua de convite ou lembretes de reunião."
argument-hint: "[cliente] [objetivo e ato prévio do destinatário]"
allowed-tools: "Read, Write, Glob, Grep"
user-invocable: true
---

# CoreAI:WhatsApp

1. Leia `../coreai-shared/contextos-contract.md`. Use `$ARGUMENTS` e a conversa para identificar cliente e produto. Sem READY, bloquear redação de domínio. Sem argumentos, pergunte cliente e objetivo.
2. Leia `../coreai-copy-shared/tasks/criacao/create-whatsapp-utility-campaign.md`, `../coreai-copy-shared/data/banco-templates-utility-whatsapp.yaml` e `../coreai-copy-shared/swipe/templates-utility-whatsapp.md`. Caminhos internos resolvem na raiz da biblioteca.
3. Identifique ato real anterior, finalidade, dados disponíveis e quantidade. Sem ato real, não enquadrar prospecção como utility: preparar proposta Marketing identificada, nunca disfarçar promoção.
4. Para sequência de reunião, leia `../coreai-copy-shared/workflows/convite-reuniao-diagnostico.md` e `../coreai-copy-shared/templates/mensagens-convite-reuniao-tmpl.md`.
5. Produza textos e exemplos de variáveis apenas com dados fornecidos. Não invente opt-in, transação, prazo, prova, preço ou protocolo. Marque pendências.
6. Revise voz e clareza com `../coreai-copy-shared/validators/filtro-anti-ia.md` e `../coreai-copy-shared/validators/oraculo-torriani.md`. Entregue Markdown com objetivo, categoria proposta, mensagens e condições de uso; salve no output do cliente autorizado sem sobrescrever.

Esta skill escreve. Não envia, agenda disparo, submete template ou garante aprovação Meta. Regras locais não substituem validação vigente da plataforma antes de submissão. Dados de outros clientes nos exemplos são ilustração, nunca defaults.

## Disponibilidade antes de executar

Leia `../coreai-copy-shared/ROUTE-COVERAGE.md` antes de qualquer processo abaixo. Seus estados por rota e restrições prevalecem sobre promessas antigas de entrega pronta. Classificação estrutural não é teste runtime.
