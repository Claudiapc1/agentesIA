# Swipe File · Templates Utility (WhatsApp Business API)

**O que é:** os 169 templates pré-aprovados da Meta (pt-BR) organizados por padrão, mais os 12 templates que escrevemos pro funil do Torriani em cima deles.

**Pra que serve:** escrever mensagens de Utility que a Meta aprova, sem chutar formato.

**Coletado:** 2026-07-31 · catálogo oficial Meta, idioma pt-BR
**Datasets estruturados:** `data/banco-templates-utility-whatsapp.yaml` (padrões) e `data/templates-utility-convite-reuniao-torriani.yaml` (os 12 do Torriani)

---

## Por que Utility e não Marketing

Utility custa **mais caro** que Marketing por conversa iniciada pelo negócio. A escolha não é economia.

O que se ganha pagando mais:

- Não cai no filtro promocional do WhatsApp
- Menos bloqueio e menos denúncia
- É lida como aviso do sistema, não como propaganda
- Entrega melhor em base fria que já interagiu

---

## A regra de ouro

**Utility só é aprovado quando a mensagem se refere a uma transação que já existe.**

Não é truque de redação. O fato precisa ser verdadeiro no seu sistema.

Para usar Utility num convite de reunião, o lead precisa ter praticado um ato antes: preencher formulário, mandar palavra-chave, pedir a análise, entrar na fila. Esse ato é a transação que o Utility notifica.

Se o lead nunca fez nada, a mensagem é Marketing. Tentar disfarçar prospecção fria de Utility derruba a conta.

**Onde isso encaixa na estratégia Stories Recompensa:** quem manda a palavra-chave e preenche o formulário já praticou o ato. A partir daí, toda a régua de convite pode legitimamente ser Utility.

---

## Vocabulário

| Passa | Reprova |
|---|---|
| confirmado, registrado, agendado, reservado, recebido | oferta, desconto, promoção, grátis, exclusivo |
| lembrete, aviso, status, protocolo, referência | aproveite, garanta, não perca, última chance, corra |
| pendente, em processamento, aguardando, em aberto | vagas limitadas, só hoje, imperdível |
| expira em, válido até, prazo, janela | adjetivo de venda no corpo (incrível, revolucionário) |
| atualização, detalhes, acompanhar, verificar | qualquer chamada de compra |

---

## A janela de 24 horas

Template só é obrigatório para **abrir** conversa. Assim que o lead responde, abre uma janela de 24 horas em que você fala livre, sem template e sem custo por mensagem.

Consequência prática: **o template não precisa vender nada. Ele só precisa gerar uma resposta.** A venda acontece depois, dentro da janela.

Por isso o melhor template de convite é o que faz a pessoa responder "sim", "qual horário" ou "o que é isso", não o que explica a oferta inteira.

---

## Regras de variável

Formato na submissão: `{{1}}`, `{{2}}`, `{{3}}`. O catálogo da Meta exibe como `{{texto}}`, `{{data}}`, `{{valor}}`.

- Nunca começar nem terminar o corpo com variável
- Nunca duas variáveis coladas
- Toda variável precisa de exemplo real na submissão
- Título aceita no máximo 1 variável
- Corpo: máximo 1024 caracteres

Tipos observados: `{{texto}}` `{{data}}` `{{valor}}` `{{numero}}` `{{telefone}}` `{{endereço}}` `{{url}}` `{{nome comercial}}`

---

## Botões

Os mais frequentes nos 169: Ver detalhes · Confirmar · Reagendar · Ver pedido · Acompanhar · Verificar · Pagar agora · Rastrear pedido

**Regra:** botão de Utility descreve uma ação operacional, nunca uma decisão de compra. "Ver detalhes" passa. "Quero comprar" não passa.

Pares binários funcionam bem: Confirmar / Reagendar · Sim / Não · Confirmar / Arquivar

---

# PARTE 1 · Os 8 padrões da Meta

Extraídos dos 169 templates. Cada um traz exemplos reais do catálogo.

---

## P1 · Confirmação de compromisso

Notifica que um agendamento existe, está confirmado ou foi criado.

**Anatomia:** título é frase de estado, não de venda · corpo tem saudação, agradecimento pelo ato e os dados (serviço, data, hora) · botão Ver detalhes

**Marcadores:** referência a ato anterior do lead · dados concretos · zero adjetivo de venda

**Potencial criativo: ALTO.** "Sua análise está reservada" funciona porque a pessoa pediu.

### Exemplos reais do catálogo

**`appointment_confirmation_1`**
> **Sua consulta está marcada**
> Olá, {{texto}}.
> Obrigado por reservar com {{nome comercial}}.
> Sua consulta para {{texto}} em {{data}} às {{texto}} está confirmada.
> `[Ver detalhes]`

**`appointment_confirmed`**
> **Agendamento confirmado**
> Olá {{texto}},
> Sua consulta está agendada para {{texto}}.
> Serviço: {{texto}}
> Número de confirmação: {{texto}}
> Estamos ansiosos pela sua visita.

**`order_confirm_auto_schedule`**
> Olá, {{texto}}, seu pedido {{texto}} foi feito com sucesso! Agendamos um compromisso para {{data}} na sua localização preferida. Por favor confirme se este horário funciona para você.
> `[Confirmar]` `[Reagendar]`

**`appointment_scheduling`**
> **Visita do técnico**
> Olá, {{texto}}, estamos agendando uma visita de técnico para sua {{texto}} em {{data}} entre {{texto}} e {{texto}}. Por favor confirme se este horário funciona para você.
> `[Confirmar]` `[Reagendar]`

---

## P2 · Lembrete de compromisso

Avisa que um compromisso já marcado está chegando.

**Anatomia:** título "Você tem um compromisso próximo" · corpo com "este é um lembrete sobre" mais data e hora · botão Ver detalhes

**Marcadores:** a palavra "lembrete" declara a função · pressupõe que o compromisso existe

**Potencial criativo: ALTO.** O lembrete cria compromisso psicológico mesmo sem data fechada.

### Exemplos reais do catálogo

**`appointment_reminder_2`**
> **Você tem um compromisso próximo**
> Olá, {{texto}}.
> Este é um lembrete sobre o seu próximo compromisso com a {{nome comercial}} em {{data}} às {{texto}}.
> Estamos ansiosos por te ver!
> `[Ver detalhes]`

**`appointment_reminder`**
> Lembrete: o nosso técnico irá visitar a sua localização no dia {{data}} às {{texto}} para a sua instalação de banda larga. Por favor, esteja disponível.

**`renewal_reminder`**
> **Lembrete de renovação do serviço**
> Seu plano {{texto}} está programado para renovar em {{data}}. Por favor, mantenha o equilíbrio suficiente para manter o serviço ativo.

**`auto_pay_reminder_2`**
> **Próximo pagamento automático**
> Oi, {{texto}}, este é um lembrete de que seu pagamento automático está chegando:
> Data: {{data}}
> Conta: {{texto}}
> Valor: {{valor}}
> `[Ver detalhes]`

---

## P3 · Status pendente e ação necessária

Informa que algo está parado esperando uma ação do cliente.

**Anatomia:** título "Finalize a configuração" ou "Verifique suas informações" · corpo com "antes de podermos processar X, precisamos de Y" · botão Verificar

**Marcadores:** existe processo em andamento e ele está travado · a ação pedida faz o pedido do lead voltar a andar

**Potencial criativo: MUITO ALTO.** É o padrão mais forte pro convite de reunião.

### Exemplos reais do catálogo

**`account_creation_confirmation_3`**
> **Finalize a configuração da conta**
> Oi, {{texto}},
> Sua nova conta foi criada com sucesso.
> Verifique {{texto}} para concluir seu perfil.
> `[Verificar a conta]`

**`order_action_required_1`**
> Olá, {{texto}}, antes de podermos processar a tua encomenda {{texto}}, precisamos de verificar algumas informações.
> Por favor contacte-nos assim que possível.
> `[Ligue-nos]`

**`payment_action_required_1`**
> **Verifique suas informações de pagamento**
> Oi, {{texto}},
> O pagamento do seu cartão {{texto}} com final {{número}} está chegando.
> Verifique suas informações para evitar cobranças {{texto}}.
> `[Verificar]`

**`identity_compliance_1`**
> Isto é para notificar-te de que precisas de atualizar para um {{texto}} até {{data}}. Para evitar quaisquer inconvenientes durante a viagem, certifique-se de marcar uma consulta no seu {{texto}}.

---

## P4 · Reagendamento e ausência

Trata quem furou ou precisa remarcar.

**Anatomia:** título "Visita perdida" ou "Sua consulta foi reagendada" · corpo com "sentimos sua falta em" mais o compromisso e convite pra remarcar · botão Reagendar

**Marcadores:** referência direta a compromisso que existia · tom neutro, sem cobrança emocional

**Potencial criativo: ALTO.** Resolve o problema de quem sumiu sem parecer perseguição.

### Exemplos reais do catálogo

**`missed_appointment`**
> **Visita perdida**
> Olá, {{texto}}, sentimos a tua falta na tua consulta agendada {{texto}} para {{data}}. Responda para reagendar ou entre em contato com {{texto}} para marcar um novo horário.
> `[Reagendar]`

**`followup_missed_calls`**
> **Ligação perdida**
> Olá, {{texto}}, perdemos a tua chamada. Avise-nos se estiver disponível para reagendar.
> `[Reagendar ligação]`

**`appointment_reschedule_1`**
> **Sua consulta foi reagendada**
> Olá, {{texto}}.
> Seu próximo compromisso com {{nome comercial}} foi reagendado para {{data}} às {{texto}}.
> `[Ver detalhes]`

**`rescheduling_request`**
> Olá, {{texto}}, precisamos de reagendar a sua {{texto}}. Responda a *Reagenda* para escolher um novo horário.
> `[Reagendar]`

---

## P5 · Encerramento e expiração

Avisa que algo vai expirar, encerrar ou ser liberado pra outro.

**Anatomia:** título "Lembrete de validade" ou "Seu saldo expira" · corpo com "seu X expira em" mais data e o que acontece se nada for feito · botão Renovar

**Marcadores:** prazo real vinculado a recurso real que o lead tem · consequência declarada sem drama

**Potencial criativo: ALTO.** Substitui a urgência fabricada por prazo operacional real.

### Exemplos reais do catálogo

**`recharge_reminder`**
> **Lembrete de validade do pacote**
> Olá, {{texto}}, o seu {{texto}} vai terminar hoje à noite. Para continuar usando sem interrupção, por favor recarregue.
> `[Recarregar]`

**`disbursement_balance_1`**
> Seu saldo de desembolso de {{texto}} é de {{valor}}. Observe que expirará em {{data}}. Novos desembolsos de {{texto}} serão anunciados mensalmente.
> `[Ver horário]`

**`phone_deactivation_reminder_01`**
> Olá! Seu número {{texto}} poderá ser cancelado em {{texto}} por falta de recarga.
> Você pode fazer uma recarga para evitar o cancelamento.
> Se você já realizou a recarga, desconsidere esta mensagem.
> `[Fazer recarga]` `[Não tenho interesse]`

**`device_recovery`**
> **Devolução do dispositivo**
> Olá, {{texto}}, a tua ligação de banda larga foi desligada. Para devolveres o teu dispositivo, segue estes passos: {{texto}}

---

## P6 · Solicitação registrada e em processamento

Confirma que um pedido entrou no sistema e está andando.

**Anatomia:** título "Pedido recebido" ou "Solicitação registrada" · corpo com "recebemos seu X, número Y, enviaremos atualização quando Z" · botão Acompanhar

**Marcadores:** número de protocolo ou identificador · promessa de próximo update

**Potencial criativo: MUITO ALTO.** Dá peso institucional a um pedido informal.

### Exemplos reais do catálogo

**`support_ticket_acknowledgement`**
> O seu pedido {{número}} está registado. Entraremos em contato com você dentro de {{número}} horas.

**`order_management_5`**
> **Pedido recebido**
> Olá {{texto}},
> Recebemos seu pedido {{texto}}. Enviaremos uma atualização de status assim que seu pagamento for aprovado.
> `[Detalhes do pedido]`

**`shifting_journey`**
> Olá, {{texto}}, o teu pedido de mudança de ligação de banda larga está a ser processado! Vamos mantê-lo informado sobre o status.
> `[Status da faixa]`

**`group_invite_link_concise`**
> Sua solicitação {{texto}} com {{texto}} está confirmada. Por favor, entre no grupo do WhatsApp para começar: {{group_id}}

---

## P7 · Coleta de informação e feedback

Pede um dado ou uma avaliação após um evento real.

**Anatomia:** título "Como foi sua experiência?" · corpo ancorado em evento datado, pedido curto, quanto tempo leva · botão Responder

**Marcadores:** âncora num evento datado que aconteceu · declara o custo de tempo da ação

**Potencial criativo: MÉDIO.** Útil na etapa pós-material, antes do convite.

### Exemplos reais do catálogo

**`request_contact_info_1`**
> Olá {{texto}}, gostaríamos de ter o seu número de telefone em arquivo para poder nos contatar mais facilmente. Por favor, compartilhe suas informações de contato abaixo.
> `[Compartilhar informações de contato]`

**`feedback_collection`**
> Olá, {{texto}}, o pedido de serviço que concluímos em {{data}} está encerrado. Classifique sua experiência de 1-5 e compartilhe qualquer feedback para nos ajudar a melhorar.

**`feedback_survey_1`**
> Olá, {{texto}}.
> Obrigado por sua recente {{texto}} em {{data}}.
> Nós valorizamos o seu feedback e gostaríamos que compartilhasse mais sobre a sua experiência conosco no link abaixo.
> Isto deve demorar apenas {{número}} minutos.
> `[Deixe feedback]`

**`feedback_survey_2`**
> **Como foi a sua experiência?**
> Agradecemos por nos visitar em {{endereço}} no dia {{data}}.
> Seu feedback é importante para nós.
> `[Preencher pesquisa]`

---

## P8 · Aviso operacional e mudança de serviço

Comunica manutenção, interrupção, atualização de sistema.

**Anatomia:** título "Aviso de manutenção" ou "Instalação concluída" · corpo com fato operacional, janela de tempo e o que muda pro cliente · botão Ver atualizações

**Marcadores:** fato técnico verificável · zero pedido de compra

**Potencial criativo: BAIXO pro convite, ALTO pra pós-venda.**

### Exemplos reais do catálogo

**`service_disruption`**
> Caro cliente, temos atualizações de rede agendadas para {{data}} entre {{texto}} e {{texto}}. Você pode sofrer interrupção temporária no serviço. Obrigado pela compreensão.

**`installation_complete`**
> **Instalação concluída**
> Olá, {{texto}}, a sua instalação {{texto}} está concluída! O nosso técnico configurou a tua ligação, e agora estás pronto para entrar online.

**`upgrade_confirmation`**
> **Aviso de aceleração**
> Temos o prazer de informá-lo que a sua velocidade de internet foi atualizada para {{número}} Mbps. Obrigado por escolher nossos serviços.

**`operation_disruption_2`**
> A manutenção regular de {{texto}} está agendada para {{data}} e a estação na área {{texto}} estará fechada até {{data}}.
> `[Ver alternativas]`

---

# PARTE 2 · Os 12 templates do Torriani

Conversão das mensagens de convite (formato Marketing) para Utility, mantendo a voz Imperial.

**Fato gerador:** o lead enviou a palavra-chave AGENTE no Instagram e preencheu o formulário pedindo uma análise de IA aplicada a marketing, copy e conteúdo. Esse ato cria uma solicitação real no sistema, com data e protocolo. Toda mensagem abaixo notifica o estado dessa solicitação.

**Validação:** aprovado no regex anti-IA, no estrutural e no oráculo Torriani (clareza 6/6). Zero travessão, zero emoji.

---

## Os 4 criativos

Usam a estrutura de forma inesperada, sem inventar fato.

### `analise_ia_vaga_reservada` · reclassificado pela Meta como Marketing em 03/09/2026 · substitui E18

> **Sua vaga está reservada até {{1}}**
> {{1}}, sua vaga na análise de IA aplicada ao marketing está reservada desde {{2}}, quando você enviou a palavra AGENTE e preencheu o formulário.
> A reserva fica no seu nome e ninguém ocupa esse lugar enquanto ela estiver ativa.
> Falta só uma coisa: o horário. Responda com o seu e a reserva vira agendamento.
> `[Ver detalhes]` `[Confirmar horário]`

**Preenchido:** "Marcos, sua vaga na análise de IA aplicada ao marketing está reservada desde 28/07, quando você enviou a palavra AGENTE e preencheu o formulário..."

**Por que passa:** a reserva existe. O lead pediu a análise e ocupa lugar na fila até definir horário ou ser arquivado.

**Nota:** o melhor do lote. Usa a estrutura de confirmação de compromisso e cita o próprio ato do lead como prova. Escassez sem urgência fabricada.

---

### `analise_ia_pauta_registrada` · padrão P1 · substitui E28

> **Pauta da sua análise registrada**
> {{1}}, a pauta da sua análise de IA para copy e conteúdo já está montada com base no que você respondeu no formulário em {{2}}.
> Itens registrados: {{3}}.
> A pauta fica reservada no seu nome até o agendamento. Responda com o horário para marcarmos.
> `[Ver detalhes]`

**Preenchido:** itens como "onde a IA entra no seu processo comercial, o que dá pra automatizar sem perder resposta, e o que custa dinheiro hoje sem você ver"

**Por que passa:** a pauta é gerada das respostas reais do formulário, então o documento existe antes da mensagem.

**Nota:** entrega valor antes da reunião. O lead lê a pauta e já entende o que ganha, sem soar vendedor.

---

### `analise_ia_protocolo_torriani` · padrão P6 · substitui E21

> **Protocolo {{1}} atribuído**
> {{1}}, seu protocolo de análise de IA aplicada à sua operação é {{2}}, aberto em {{3}}.
> Responsável pelo protocolo: Torriani, que conduz essa conversa pessoalmente, um cadastro por vez.
> O protocolo fica em processamento até você informar um horário nesta conversa.
> `[Acompanhar]`

**Por que passa:** o protocolo é gerado no preenchimento e a atribuição ao responsável é dado operacional real.

**Nota:** "Responsável pelo protocolo: Torriani" comunica atendimento individual usando linguagem de sistema de atendimento. Diz que é pessoal sem dizer que é especial.

---

### `analise_ia_aviso_fila` · padrão P8 · substitui E26

> **Atualização da sua fila de análise**
> {{1}}, atualização sobre a fila de análise de IA de marketing.
> Seu registro de {{2}} continua aguardando a definição do horário. Os cadastros nessa condição avançam por ordem de resposta e disponibilidade de agenda.
> Informe um horário nesta conversa para avançar na fila.
> `[Verificar]`

**Por que passa:** a fila de leads aguardando agendamento existe e a ordem por resposta é o critério operacional usado.

**Nota:** "processados por ordem de resposta" transforma a demora do lead em custo dele, sem ameaça e sem prazo fabricado.

---

## Os 8 seguros

Fato literal, sem invenção nenhuma.

### `analise_ia_solicitacao_registrada` · P6 · substitui E03

> **Solicitação registrada: {{1}}**
> Olá {{1}}, sua solicitação de análise de IA aplicada a marketing, copy e conteúdo foi registrada em {{2}}.
> Protocolo: {{3}}.
> Status atual: aguardando definição de horário com Torriani.
> Responda esta mensagem para seguir com o agendamento.
> `[Acompanhar]`

---

### `analise_ia_status_pendente` · P3 · substitui E30

> **Status da sua análise de IA**
> {{1}}, sua solicitação de análise de IA para marketing está com status pendente.
> Falta apenas uma informação: o melhor dia e horário para a conversa com Torriani.
> Registrado no seu formulário em {{2}}.
> Envie sua preferência de horário nesta conversa para atualizarmos o status.
> `[Verificar status]`

---

### `analise_ia_pendencia_agendamento` · P3 · substitui E06

> **Pendência no seu agendamento**
> {{1}}, antes de liberarmos sua análise de IA aplicada ao processo de marketing precisamos confirmar um dado do seu cadastro.
> Solicitação recebida em {{2}} e ainda em aberto.
> Confirme se o número {{3}} continua sendo o melhor contato e qual período do dia funciona para você.
> `[Confirmar dados]`

---

### `analise_ia_lembrete_solicitacao` · P2 · substitui E16

> **Lembrete: análise de IA em aberto**
> {{1}}, lembrete da sua análise de IA para copy e conteúdo solicitada em {{2}}.
> Ela permanece em aberto e sem horário marcado.
> Para reservar um horário, basta responder aqui com o dia que funciona melhor.
> `[Ver detalhes]` `[Confirmar horário]`

---

### `analise_ia_reagendamento` · P4 · substitui E13

> **Retomar a análise de IA**
> {{1}}, sua análise de IA para conteúdo segue registrada desde {{2}} e sem horário definido.
> Registros parados costumam ser fechados por falta de contato, e o seu ainda está ativo.
> Se quiser retomar, responda com um dia da semana que funcione.
> `[Reagendar]`

---

### `analise_ia_confirmacao_interesse` · P7 · substitui E20

> **Confirmação do seu cadastro**
> {{1}}, seu cadastro para a análise de IA de copy foi feito em {{2}} e ainda consta como ativo.
> Precisamos de uma confirmação simples para atualizar o registro: você segue querendo a análise ou prefere que ela seja arquivada?
> Responda com sim ou arquivar.
> `[Confirmar]` `[Arquivar]`

**Nota:** o botão Arquivar dá saída honrosa. Quem clica limpa a base, quem não clica se compromete.

---

### `analise_ia_prazo_expira` · P5 · substitui E23

> **Sua solicitação expira em {{1}}**
> {{1}}, sua solicitação de análise de IA para marketing fica válida até {{2}}.
> Depois dessa data o registro é encerrado e o cadastro precisa ser refeito para entrar na próxima leva de agendamentos.
> Responda aqui com um horário caso queira manter o registro ativo.
> `[Manter ativo]`

**Atenção:** só use se a política de validade existir de verdade no seu processo. Prazo inventado é o que a Meta procura pra reprovar.

---

### `analise_ia_encerramento_registro` · P5 · substitui E19

> **Encerramento de registros sem retorno**
> {{1}}, estamos encerrando os registros de análise de IA que ficaram sem retorno.
> O seu, feito em {{2}}, entra nessa lista em {{3}}.
> Se preferir manter o agendamento em aberto, responda esta mensagem antes dessa data.
> `[Manter em aberto]`

**Atenção:** mesma ressalva do anterior. A política de encerramento precisa ser real.

---

## Sequência de disparo

Um template por vez, esperando resposta. Quem responde sai da régua e entra na conversa livre.

| Quando | Template | Objetivo |
|---|---|---|
| D+0 (após o formulário) | `analise_ia_solicitacao_registrada` | Confirmar que o pedido entrou. Abre a conversa. |
| D+1 | `analise_ia_vaga_reservada` | O mais forte do lote. Dá peso ao ato do lead e pede o horário. |
| D+3 | `analise_ia_pauta_registrada` | Entrega valor antecipado pra quem não respondeu. |
| D+5 | `analise_ia_status_pendente` | Reduz a ação a uma informação só. |
| D+8 | `analise_ia_aviso_fila` | Custo de não responder, sem ameaça. |
| D+12 | `analise_ia_confirmacao_interesse` | Binário com saída honrosa. Limpa a base. |
| D+15 | `analise_ia_encerramento_registro` | Último. Só se a política de encerramento for real. |

---

# PARTE 3 · Como escrever um Utility novo

Método em 6 passos, pra qualquer cliente e qualquer oferta.

## 1. Ache o ato real

Pergunta: **o que essa pessoa fez que criou um registro no sistema?**

Preencheu formulário · mandou palavra-chave · pediu orçamento · baixou material · entrou em lista de espera · comprou · agendou · cancelou

Sem ato, não há Utility. Volta pra Marketing.

## 2. Escolha o padrão

| Se o estado é | Use |
|---|---|
| Existe e está confirmado | P1 Confirmação |
| Existe e está chegando | P2 Lembrete |
| Existe e está travado | P3 Status pendente |
| Existia e foi perdido | P4 Reagendamento |
| Existe e vai acabar | P5 Expiração |
| Acabou de entrar | P6 Solicitação registrada |
| Já aconteceu e quer avaliação | P7 Feedback |
| Mudou operacionalmente | P8 Aviso |

## 3. Escreva o estado, não a venda

Errado: "Você foi selecionado pra uma análise exclusiva"
Certo: "Sua solicitação foi registrada em 28/07. Protocolo AIA-4471."

O primeiro é adjetivo. O segundo é fato com data.

## 4. Peça uma resposta, não uma decisão

O template não vende. Ele abre a janela de 24h.

Errado: "Clique aqui pra garantir sua vaga na mentoria"
Certo: "Responda com o dia que funciona melhor"

## 5. Passe o texto pelos filtros

- Nenhuma palavra da coluna "reprova"
- Nenhum adjetivo de venda no corpo
- Todo prazo citado precisa ser real
- Zero travessão, zero emoji
- Botão descreve ação operacional

## 6. Prepare os dados antes de submeter

- Protocolo gerado de verdade no momento do ato
- Data do ato registrada e usada na variável
- Exemplo real de cada variável (a Meta exige)
- Categoria UTILITY, idioma pt_BR

Se reprovar, o motivo quase sempre é adjetivo de venda no corpo. Revisa e resubmete.

---

## Erros que derrubam a aprovação

| Erro | Por quê |
|---|---|
| Prospecção fria disfarçada | Não existe transação. É o pior, derruba a conta. |
| Prazo inventado | "Só até amanhã" sem política real é o que a Meta procura. |
| Adjetivo de venda no corpo | "Exclusivo", "imperdível", "revolucionário" reclassificam pra Marketing. |
| Botão de compra | "Quero comprar" não é ação operacional. |
| Variável no começo ou no fim | Reprova automática na submissão. |
| Duas variáveis coladas | Reprova automática. |
| Corpo acima de 1024 caracteres | Reprova automática. |

---

*Fonte dos 169: catálogo oficial Meta pt-BR, coletado em 2026-07-31.*
*Os 12 do Torriani: escritos por Dan Kennedy (clone) via Copy Chief, validados no pipeline anti-IA completo.*
