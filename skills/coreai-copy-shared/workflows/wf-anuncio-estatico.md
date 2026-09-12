---
name: wf-anuncio-estatico
version: "1.1"
criado: 2026-08-28
aprovado_por: founder
formatos: [A, B]
tipos: [reuniao-estrategica, recompensa, oferta-direta, convite-aula]
descricao: Workflow oficial de escrita de anuncio estatico (2 formatos, 4 tipos), guiado por regras e pecas-modelo aprovadas pelo founder.
---

# WF Anúncio Estático

Workflow para produção de anúncios estáticos em 2 formatos. Self-contained: todas as regras e exemplos vivem dentro do squad.

**A LEI DO WORKFLOW:** exemplo validado = funcionou em produção = inteligência = precisa ser replicado. O que se escreve tem que estar dentro da regra E dentro do exemplo validado. Nunca sair dos guard rails.

**A PEÇA É UMA UNIDADE.** Headline, subheadline, ponte e CTA só validam JUNTOS. Não existe campo aprovado solto. E a peça anda com uma imagem que chama atenção: a arte faz parte da unidade.

## Artefatos do workflow (todos dentro do squad)

| Artefato | Path (relativo à raiz do squad copy) |
|---|---|
| Regras dos formatos + saída JSON | `data/anuncio-estatico/FORMATO.md` |
| Peças-modelo (12, com status) | `data/anuncio-estatico/pecas-modelo.md` |
| Checklist de guard rails | `checklists/anuncio-estatico-checklist.md` |
| Filtro anti-IA | `checklists/filtro-anti-ia.md` |
| Oráculo Torriani (só cliente Torriani) | `checklists/oraculo-torriani.md` |
| Aprovação humana em HTML | `tasks/validacao/aprovacao-anuncios-html.md` |
| Task de arte (FASE 6, squad traffic-masters) | `../traffic-masters/[DEPENDÊNCIA NÃO EMPACOTADA: generate-creatives]` |

---

## FASE 1: Triagem (Copy Chief)

1. Recebe o pedido: cliente, campanha, objetivo da peça.
2. Define o **formato**:
   - **A** (headline, subheadline, ponte, CTA): quando a peça precisa de texto que flui até a ação.
   - **B** (headline, mini-copy, CTA): quando a peça pede lista curta de benefícios + prova.
3. Define o **tipo** (muda o objetivo e o verbo do CTA, não a estrutura):
   - reunião estratégica
   - recompensa
   - oferta direta
   - convite de aula
4. Carrega o **ICP do cliente**: dores, desejos e dúvidas já mapeados. A headline nasce daí.
   - **GATE BLOQUEANTE:** se não houver ICP mapeado para o cliente, o workflow PARA aqui. O Chief pede o mapeamento de ICP antes de qualquer escrita. Escrever sem ICP é veto.
5. Designa o copywriter executor e entrega o briefing: formato, tipo, ICP, peças-modelo de referência.

## FASE 2: Escrita (copywriter designado pelo Chief)

1. O copywriter lê `data/anuncio-estatico/FORMATO.md` (regras por etapa do formato escolhido) e `data/anuncio-estatico/pecas-modelo.md` (os exemplos validados/aprovados).
2. Escreve DENTRO da regra e DENTRO de um exemplo validado: cada peça nova declara qual peça-modelo está replicando (a estrutura, não o texto).
3. A peça é escrita como unidade: os campos precisam validar juntos, e a direção da arte (imagem que chama atenção) acompanha a peça.
4. Proibido inventar estrutura nova, campo novo ou CTA fora do padrão do tipo.

## FASE 3: Validação (loop até passar)

Rodar, nesta ordem:

1. `checklists/anuncio-estatico-checklist.md`: guard rails do formato (headline, sub/mini-copy, ponte, CTA, unidade da peça).
2. `checklists/filtro-anti-ia.md`: zero cheiro de IA.
3. `checklists/oraculo-torriani.md`: APENAS quando o cliente é Torriani. Para outros clientes, manter anti-IA + fidelidade à voz do cliente.

Se qualquer checklist reprovar: volta pra FASE 2, corrige, revalida. Loop até passar em todos.

## FASE 4: Aprovação humana (gate bloqueante)

1. Depois da validação interna, o Copy Chief gera `APROVACAO-ANUNCIOS.html`, seguindo `tasks/validacao/aprovacao-anuncios-html.md`.
2. O founder pode editar headline, subheadline/mini-copy, ponte e CTA, e então aprovar ou reprovar cada peça.
3. Reprovação exige feedback. Alterar texto depois de uma decisão invalida a decisão anterior e devolve a peça a `pendente`.
4. A revisão termina com `APROVACAO-ANUNCIOS.feedback.json`. Este JSON é a fonte de verdade da decisão humana.
5. Somente peças com `status: approved` seguem. Peças `pending` ou `rejected` voltam para a FASE 2.
6. Aprendizados registrados no JSON são candidatos rastreáveis. Antes de virarem regra permanente, o Copy Chief os classifica como regra de marca, regra do formato ou decisão específica da campanha e registra escopo + IDs que serviram de evidência.

## FASE 5: Entrega

1. Saída em **JSON no formato do sistema de criativos** (especificação completa em `data/anuncio-estatico/FORMATO.md`):
   - Formato A: campos `headline`, `subheadline`, `ponte`, `cta` (+ `body` para notas visuais).
   - Formato B: campos `headline`, `mini_copy`, `list_items`, `cta` (+ `body`).
2. O arquivo entregue leva **frontmatter de autoria** obrigatório:

```yaml
---
data: YYYY-MM-DD
cliente: {slug do cliente}
campanha: {slug da campanha}
peca: {descricao curta}
executor: {copywriter designado}
<!-- Dependência externa de contexto/identidade excluída: aplicar contrato CoreAI. -->
workflow: wf-anuncio-estatico
formato: A | B
tipo: reuniao-estrategica | recompensa | oferta-direta | convite-aula
peca_modelo_replicada: {id da peca-modelo, ex: prontuario-plenna, AE-30, lancamento-pago}
status: {rascunho | validado | entregue}
---
```

## FASE 6: Arte (handoff para traffic-masters)

A peça de copy validada na FASE 3, aprovada na FASE 4 e entregue na FASE 5 vira o briefing de entrada da arte. A copy NÃO desenha a peça: ela entrega o texto travado, e quem produz o criativo é o squad traffic-masters.

1. **Handoff formal:** o Copy Chief entrega ao squad traffic-masters, executor `creative-producer`, via task `traffic-masters/[DEPENDÊNCIA NÃO EMPACOTADA: generate-creatives]`.
2. **Contrato do handoff — o que a copy entrega:**
   - Headline, subheadline/mini-copy, ponte/list_items e CTA já aprovados (JSON da FASE 4 e saída da FASE 5), com o frontmatter de autoria completo.
   - **Tipo** da peça (reunião estratégica, recompensa, oferta direta, convite de aula), que define tom e contexto visual.
   - **Formato** (A ou B), que define a estrutura de blocos de texto que a arte precisa acomodar.
   - Direção de arte indicada na FASE 2/3 (a imagem que chama atenção, já apontada como parte da unidade da peça).
3. **Contrato do handoff — o que a arte devolve:**
   - Criativo formatado nas specs da plataforma-alvo (dimensões, peso, duração), conforme a tabela de plataformas de `traffic-masters/[DEPENDÊNCIA NÃO EMPACOTADA: generate-creatives]`.
   - Entity ID atribuído e catalogado conforme `andromeda-rules.yaml`.
   - O texto da peça (headline, sub/mini-copy, ponte, CTA) reproduzido **sem alteração** em relação ao JSON aprovado na FASE 4: a arte não reescreve copy.
4. Se o criativo devolvido não corresponder ao texto aprovado (uma palavra que seja) ou não atender as specs da plataforma, o Copy Chief rejeita e devolve pro `creative-producer` corrigir. Não volta pra FASE 2 de escrita: o texto já está travado.

## Veto conditions

- ❌ Escrever sem ICP mapeado do cliente (bloqueia na FASE 1).
- ❌ Campo fora do formato (estrutura inventada, campo extra, campo faltando).
- ❌ Sair dos exemplos: peça que não replica nenhuma peça-modelo declarada.
- ❌ Entregar sem passar pela FASE 3 completa (checklist + anti-IA + oráculo quando Torriani).
<!-- Dependência externa de contexto/identidade excluída: aplicar contrato CoreAI. -->
- ❌ Enviar para arte sem `APROVACAO-ANUNCIOS.feedback.json` ou com status diferente de `approved`.
- ❌ Arte que altera o texto aprovado da copy (headline, sub/mini-copy, ponte ou CTA) sem retornar pro Copy Chief.
- ❌ Gerar arte sem passar pela FASE 6 (handoff formal com o contrato completo).
