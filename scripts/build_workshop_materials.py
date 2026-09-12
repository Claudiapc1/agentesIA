#!/usr/bin/env python3
import html
import json
from pathlib import Path

ROOT = Path("/Users/julianotorriani/claude/agentesIA")
OUT = ROOT / "workshop"
OUT.mkdir(parents=True, exist_ok=True)

def text_block(content):
    return {"type": "text", "content": content}

def lesson(identifier, title, subtitle, duration, goals, sections, prompt=None, checklist=None):
    concept_minutes = max(5, duration // 3)
    practice_minutes = max(5, duration - concept_minutes)
    blocks = [
        {"type": "callout", "variant": "info", "title": "O que você vai construir nesta aula",
         "content": f"Ao final, você terá uma entrega concreta: **{prompt[2] if prompt else subtitle}**. Leia a explicação, acompanhe a demonstração e execute a prática no seu próprio negócio."},
        {"type": "heading", "level": 1, "content": "Por que esta etapa existe"},
        text_block(sections[0]),
        {"type": "numbered-steps", "steps": [
            {"badge": f"{index:02d}", "title": item[0], "description": item[1]}
            for index, item in enumerate(sections[1], 1)
        ]},
    ]
    for heading, paragraphs in sections[2]:
        blocks.append({"type": "heading", "level": 1, "content": heading})
        blocks.extend(text_block(p) for p in paragraphs)
    if prompt:
        blocks.extend([
            {"type": "heading", "level": 1, "content": "Prática guiada"},
            {"type": "input-output",
             "input": {"label": "Seu pedido", "content": prompt[1]},
             "output": {"label": "Entrega que você deve receber", "content": prompt[2]}},
            {"type": "prompt", "title": prompt[0], "content": prompt[1]},
            {"type": "callout", "variant": "info", "title": "Resposta esperada", "content": prompt[2]},
        ])
    if checklist:
        blocks.extend([
            {"type": "heading", "level": 1, "content": "Checkpoint"},
            {"type": "checklist", "id": f"{identifier}-checkpoint", "items": [{"title": x, "description": y} for x, y in checklist]},
            {"type": "callout", "variant": "success", "title": "Para levar com você",
             "content": "A etapa só está concluída quando a entrega pode ser aberta, conferida e retomada. Se faltar acesso, fonte ou decisão, registre a pendência em vez de completar com suposição."},
        ])
    return {
        "id": identifier, "title": title, "subtitle": subtitle,
        "tag": "Workshop", "shortTitle": title.split(":")[0],
        "status": "available", "duration": duration,
        "learningGoals": goals,
        "schedule": [{"time": "0:00", "topic": "Conceito e demonstração", "duration": f"{concept_minutes} min"},
                     {"time": f"0:{concept_minutes:02d}", "topic": "Prática guiada e checkpoint", "duration": f"{practice_minutes} min"}],
        "blocks": blocks,
    }

lessons = []
lessons.append(lesson("w00-boas-vindas", "Boas-vindas: a oportunidade que quase ninguém está vendo", "Da primeira tarefa automatizada à empresa inteira operada por agentes de IA", 20,
    ["Entender a proposta do dia", "Reconhecer ativos que já existem no próprio negócio", "Visualizar a operação que será construída"],
    ["Você já tem mais matéria-prima do que imagina: conversas, documentos, decisões, exemplos, clientes, produtos e processos. O problema é que esse patrimônio costuma estar disperso e não participa do trabalho diário da IA. O workshop organiza esse conhecimento e conecta times capazes de produzir com ele. Uma **empresa agêntica** é uma organização onde funcionários digitais operam áreas inteiras do negócio com autonomia, conhecem o contexto da empresa e executam de ponta a ponta. A nossa promessa é direta: **vá além do ChatGPT e do Claude: tenha agentes de IA autônomos operando a sua empresa.**",
     [("Conhecimento", "O que a empresa sabe e já viveu."), ("Capacidade", "Skills que transformam método em execução."), ("Continuidade", "Rotinas e registros que permitem retomar o trabalho.")],
     [("O que você terá ao final", ["Um ambiente local funcionando, um negócio identificado no ContextOS, um orquestrador, uma primeira produção de conteúdo e a cadeia oferta, copy, criativo e tráfego preparada.", "A entrega real depende dos acessos disponíveis. Tudo será classificado como configurado, testado ou pendente." ]),
      ("O acordo do workshop", ["Vamos trabalhar com um negócio, um produto e uma campanha. Quem já tem ferramentas instaladas avança na qualidade do contexto; quem começa do zero segue o setup guiado pela própria IA."]) ]],
    ("Escolha seu caso", "Diga qual negócio e produto você quer usar hoje. Liste os materiais que já possui e uma rotina de marketing que gostaria de executar melhor.", "Um negócio, um produto, materiais localizados e uma rotina prioritária."),
    [("Negócio escolhido", "Você sabe qual empresa alimentará todas as atividades."), ("Produto escolhido", "O workshop não mistura várias ofertas."), ("Resultado compreendido", "Você consegue explicar o que pretende construir no dia.")]))

lessons.append(lesson("w01-ferramentas-modelos", "Claude Code, Codex e modelos: o que você está escolhendo", "Ambiente, inteligência, contexto e ferramentas cumprem papéis diferentes", 20,
    ["Distinguir aplicativo, agente e modelo", "Escolher capacidade conforme a tarefa", "Evitar comparar famílias como equivalentes diretos"],
    ["Claude Code e Codex são ambientes de trabalho capazes de acessar arquivos e usar ferramentas. Opus, Sonnet, Haiku, Astra, Sol, Terra e Luna são modelos disponíveis conforme produto e conta. O modelo pensa; o ambiente oferece meios de agir; o ContextOS fornece conhecimento; a skill fornece método.",
     [("Rápido", "Extração, classificação e pequenas alterações."), ("Equilibrado", "Produção cotidiana e tarefas bem definidas."), ("Máxima capacidade", "Problemas complexos, arquitetura, revisão e decisões difíceis.")],
     [("Família Claude", ["Haiku prioriza velocidade e custo. Sonnet equilibra capacidade e eficiência. Opus é indicado para as tarefas mais exigentes. A disponibilidade muda por plano e produto."]),
      ("Família usada no Codex", ["Luna prioriza tarefas focadas e econômicas. Sol atende trabalho profissional complexo. Terra ocupa uma faixa equilibrada quando disponível. Astra é a escolha para o trabalho mais difícil e de maior horizonte."]),
      ("Como escolher", ["Use o modelo mais simples que mantém a qualidade necessária. Suba de capacidade quando a tarefa exige raciocínio, coordenação longa, investigação ou revisão crítica."]) ]],
    ("Peça uma recomendação", "Analise esta tarefa e recomende o nível de modelo adequado. Considere complexidade, duração, risco de erro e custo. Explique a escolha sem assumir que todas as opções estão disponíveis na minha conta.", "Uma recomendação justificada e uma alternativa caso o modelo não esteja disponível."),
    [("Papéis separados", "Você distingue ambiente, modelo, skill e contexto."), ("Escolha consciente", "Você sabe quando priorizar velocidade ou capacidade.")]))

lessons.append(lesson("w02-segundo-cerebro", "Segundo cérebro: contexto, skills, repertório e rotinas", "A arquitetura que sustenta os times de IA", 30,
    ["Entender as camadas do sistema", "Diferenciar assistente de agente", "Definir onde cada informação vive"],
    ["Um chatbot responde ao que está na conversa. Um agente trabalha com objetivo, ferramentas e capacidade de registrar resultados. Um sistema confiável precisa organizar o que a empresa sabe, como executa, quais referências usa e quando o trabalho se repete.",
     [("Contexto", "Empresa, público, produtos, marca, provas e decisões."), ("Skills", "Métodos reutilizáveis para cada tipo de trabalho."), ("Repertório", "Exemplos, frameworks e critérios que elevam a qualidade."), ("Rotinas", "Frequência, gatilho, entrada, saída e responsável.")],
     [("Onde guardar", ["A biblioteca global guarda capacidades. O ContextOS guarda fatos e decisões do cliente. As fontes preservam a origem. Outputs guardam entregas. Credenciais ficam em mecanismos privados, fora do contexto."]),
      ("Hierarquia da empresa", ["O dono define direção. Zeus coordena. Líderes organizam disciplinas. Especialistas executam. Um repositório central pode versionar capacidades e permitir colaboração sem carregar os dados privados de todos os clientes."]),
      ("A diferença prática", ["O mesmo pedido sem contexto produz generalidades. Com contexto, repertório e critério, a resposta pode ser conferida contra o negócio real."]) ]],
    ("Mapeie seu segundo cérebro", "Separe o que você forneceu em contexto, skills, repertório, rotinas, fontes e outputs. Aponte o que está faltando e não invente informações.", "Um mapa com cada item no lugar correto e lacunas explícitas."),
    [("Fonte definida", "Cada fato importante pode apontar para uma origem."), ("Dados separados", "Skills globais não carregam dados privados do cliente."), ("Rotina concreta", "Existe entrada, frequência e saída esperada.")]))

# A aula de setup já foi validada no schema da área.
setup = json.loads((ROOT / "docs/aula-configuracao.json").read_text())
setup["id"] = "w03-setup"
for block_index, block in enumerate(setup.get("blocks", []), 1):
    if block.get("type") == "checklist" and not block.get("id"):
        block["id"] = f"w03-setup-checkpoint-{block_index}"
lessons.append(setup)

lessons.append(lesson("w04-contextos", "ContextOS: ensinar a IA sobre o negócio", "Construir uma base revisada antes de produzir", 60,
    ["Criar o cliente correto", "Coletar fontes por áudio e documentos", "Consolidar fatos sem preencher lacunas"],
    ["Contexto bom não é um formulário cheio. É uma base em que informações importantes têm origem, conflitos permanecem visíveis e o dono revisa o que será usado pelos agentes.",
     [("Quick", "Uma primeira coleta para começar com o essencial."), ("Deep", "Entrevista completa por fases."), ("Enrich", "Complemento com fontes públicas e documentos."), ("Gate", "Bloqueio das skills quando o cliente não está definido.")],
     [("Entradas possíveis", ["Você pode falar livremente, responder à entrevista ou selecionar documentos do Drive. O agente separa fatos, hipóteses e perguntas abertas."]),
      ("Regra de cliente", ["Toda skill de produção resolve primeiro qual empresa está ativa. Se não houver cliente ou contexto consolidado, ela para e pede a definição correta."]),
      ("Revisão do dono", ["Produto, público, preço, promessa, provas e limites precisam ser conferidos. Documento antigo não confirma automaticamente a condição atual."]) ]],
    ("Construa meu contexto", "Use CoreAI:Contexto. Conduza a coleta quick para este negócio usando meu relato e os documentos que eu autorizar. Preserve as fontes, separe fatos de hipóteses e mostre conflitos. Só consolide depois da minha revisão.", "Contexto revisável, lacunas visíveis e cliente corretamente identificado."),
    [("Cliente correto", "A base ativa corresponde ao negócio escolhido."), ("Fontes preservadas", "Fatos críticos têm origem."), ("Gate liberado", "Somente após respostas reais e revisão.")]))

lessons.append(lesson("w05-zeus", "Zeus: o orquestrador que conhece a operação", "Direção, despacho e continuidade entre os times", 30,
    ["Compreender o papel do orquestrador", "Criar pedidos rastreáveis", "Evitar mistura de clientes"],
    ["Zeus é o ponto de entrada da operação. Ele começa pelo cliente, consulta o ContextOS, identifica a skill adequada, entrega o briefing ao especialista e acompanha o resultado. Sua função é manter direção e continuidade.",
     [("Direção", "Transforma objetivo do dono em próximo resultado."), ("Contexto", "Resolve cliente, produto, fontes e restrições."), ("Despacho", "Encaminha ao especialista real."), ("Fechamento", "Registra decisão, entrega e pendência.")],
     [("O que Zeus sabe", ["Ele sabe o que foi registrado e o que suas ferramentas conseguem consultar. Não deve afirmar acesso a uma sessão, conta ou skill que não está disponível."]),
      ("Um bom despacho", ["Contém cliente, objetivo, insumos, fontes, restrições, executor e critério de revisão. Estado encaminhado não significa executado."]) ]],
    ("Ative o orquestrador", "CoreAI:Zeus, use o cliente ativo. Quero alcançar este objetivo. Mostre o que você entendeu, quais fontes usará, qual skill executará e como vamos conferir o resultado. Pare se o ContextOS não estiver pronto.", "Um plano de execução rastreável e ligado ao cliente certo."),
    [("Contexto resolvido", "Zeus nomeia o negócio antes de produzir."), ("Executor existente", "A rota aponta para uma skill disponível."), ("Critério de revisão", "A entrega tem condição objetiva de conclusão.")]))

lessons.append(lesson("w06-loops-portal", "Loops e portal: o sistema aprende com o trabalho", "Revisar sessões, registrar aprendizados e preparar o dia seguinte", 30,
    ["Distinguir memória, rotina e portal", "Configurar revisão diária", "Retomar trabalho em uma nova sessão"],
    ["O portal é a visualização. A memória guarda registros. O loop varre as sessões autorizadas e propõe decisões, aprendizados e pendências. Zeus consulta esse material antes de responder onde o trabalho parou.",
     [("Sessões", "Fontes do que aconteceu durante o dia."), ("Extração", "Decisões, correções, entregas e pendências."), ("Revisão", "O dono aprova mudanças de regra ou skill."), ("Portal", "Resumo navegável e briefing do próximo dia.")],
     [("Rotina diária", ["A automação precisa ter horário, acesso real ao histórico, destino e política de recuperação se o computador estiver desligado."]),
      ("Aprender com segurança", ["Correções viram propostas. Alterar regras automaticamente pode consolidar um erro. O fundador aprova aprendizados antes de modificar skills."]),
      ("Teste no workshop", ["Registre uma decisão e uma pendência, rode a atualização e abra outra sessão. Pergunte onde parou e confira se a resposta aponta para o registro correto."]) ]],
    ("Crie meu loop", "Zeus, configure uma rotina diária para revisar as sessões que eu autorizar. Extraia decisões, entregas, correções e pendências por cliente, preserve a origem, atualize o portal e prepare o briefing seguinte. Proponha aprendizados para minha revisão antes de alterar regras ou skills.", "Rotina com fonte, horário, destino, política de revisão e teste de recuperação."),
    [("Origem autorizada", "O loop sabe quais sessões pode ler."), ("Portal atualizado", "A página mostra o registro mais recente."), ("Nova sessão testada", "Zeus recupera uma decisão com fonte.")]))

lessons.append(lesson("w07-conteudo", "Time de conteúdo: do contexto ao carrossel", "Uma tese, uma sequência e uma ação", 50,
    ["Definir uma tese útil", "Criar e revisar um carrossel", "Usar marca e repertório do cliente"],
    ["Conteúdo não começa pela imagem. Começa pela ideia que o público precisa compreender. O time usa contexto e repertório para construir copy, sequência visual, legenda e chamada para ação.",
     [("Tese", "Uma ideia central que vale a atenção."), ("Progressão", "Cada slide move a compreensão."), ("Identidade", "Marca, voz e referências do cliente."), ("CTA", "Uma ação coerente com a intenção.")],
     [("Fluxo", ["Zeus cria o briefing. Content Chief define a rota. Carousel Creator apresenta a copy, recebe aprovação e materializa o carrossel."]),
      ("Revisão", ["Abra o artefato em tamanho real. Confira leitura, acentos, promessa, identidade e ação. Uma renderização concluída não certifica qualidade visual."]) ]],
    ("Crie o primeiro carrossel", "Use o cliente ativo e crie um carrossel sobre este tema para este público. Apresente tese, headline e copy de todos os slides antes de gerar imagens. Use minha identidade e não invente provas.", "Copy aprovada, carrossel aberto e revisão registrada."),
    [("Uma ideia central", "O carrossel não disputa atenção entre várias teses."), ("Identidade correta", "Texto e visual pertencem ao cliente."), ("Artefato aberto", "HTML ou imagem foi realmente conferido.")]))

lessons.append(lesson("w08-oferta", "Construção da oferta: tornar o valor concreto", "Público, promessa, entrega, mecanismo e prova", 35,
    ["Organizar a oferta real", "Separar benefício de entregável", "Identificar lacunas antes da copy"],
    ["A copy não salva uma oferta que ninguém consegue explicar. Antes de escrever, organize para quem é, o problema, o resultado desejado, o que será entregue, como funciona, quais provas existem e quais condições são verdadeiras.",
     [("Público", "Quem deve reconhecer o problema."), ("Promessa", "Mudança desejada dentro de limites reais."), ("Entrega", "O que a pessoa recebe."), ("Prova", "O que sustenta a afirmação.")],
     [("A oferta como fonte", ["Preço, prazo, garantia, vagas e bônus só entram quando confirmados. Lacunas permanecem abertas e seguem para decisão do dono."]),
      ("Uma campanha, um caminho", ["Defina se o próximo passo é conversa, captura, compra ou inscrição. O destino orienta toda a copy seguinte."]) ]],
    ("Organize minha oferta", "Use CoreAI:Oferta com o contexto ativo. Separe público, problema, promessa, entregáveis, mecanismo, provas, limites, condições e próximo passo. Não invente preço, garantia ou escassez.", "Ficha de oferta compreensível, sustentada e com lacunas identificadas."),
    [("Entrega clara", "Outra pessoa entende o que receberá."), ("Condições confirmadas", "Preço, prazo e garantia vêm de fonte atual."), ("Destino escolhido", "Existe um próximo passo real.")]))

lessons.append(lesson("w09-copy", "Time de copy: transformar oferta em mensagem", "Método, canal e revisão antes da publicação", 40,
    ["Escolher a peça certa", "Produzir anúncio e WhatsApp", "Revisar promessa, prova e CTA"],
    ["Cada canal recebe a mesma estratégia de forma diferente. Um anúncio conquista atenção. WhatsApp entra em uma conversa. VSL e página sustentam decisões mais longas. A operação de copy escolhe o workflow e preserva as condições da oferta.",
     [("Anúncio", "Gancho, argumento e ação."), ("WhatsApp", "Contexto da conversa, clareza e resposta."), ("VSL", "Roteiro de persuasão em vídeo."), ("Página", "Decisão com oferta, prova e objeções.")],
     [("Fluxo de produção", ["Briefing, estratégia, peça principal, derivados e revisão. O Oráculo procura promessas sem sustentação, artificialidade e inconsistências."]),
      ("Rotas extras", ["Story Único, Stories de Recompensa e Perfect Webinar ficam disponíveis como aplicações específicas. No workshop, produzimos uma cadeia principal e mostramos as demais rotas."]) ]],
    ("Produza as peças", "Use CoreAI:Copy com o contexto e a oferta aprovados. Crie um anúncio e uma mensagem de WhatsApp, cada um com um CTA único. Revise com o Oráculo antes de entregar. Não envie nem publique.", "Duas peças adequadas ao canal, coerentes com a oferta e revisadas."),
    [("Oferta preservada", "A copy não criou condição nova."), ("Canal respeitado", "Anúncio e WhatsApp não são cópias idênticas."), ("CTA real", "A ação aponta para um destino existente.")]))

lessons.append(lesson("w10-criativos", "Criativos: transformar a mensagem em peça visual", "Direção, referências, geração e revisão", 45,
    ["Construir um briefing visual", "Gerar por ferramenta disponível", "Revisar o arquivo final"],
    ["Uma imagem bonita pode estar errada. O criativo precisa carregar a mensagem aprovada, respeitar a marca e funcionar no formato em que será publicado.",
     [("Copy", "Texto final e hierarquia."), ("Direção", "Cena, composição e emoção."), ("Referências", "Marca, produto, pessoa e estilo."), ("Formato", "Dimensão e canal de destino.")],
     [("Ferramentas", ["Codex pode gerar imagens quando a ferramenta estiver disponível. Claude precisa de uma integração compatível, como Gemini. Preparar prompt e gerar imagem são etapas diferentes."]),
      ("Revisão concreta", ["Abra a peça e confira texto, acentos, logo, pessoa, produto, enquadramento e CTA. Preserve versões para comparar correções."]) ]],
    ("Construa o criativo", "Use CoreAI:Criativos no modo briefing. Utilize a copy e a identidade aprovadas. Salve o prompt, gere somente pela ferramenta disponível e abra o resultado para revisão. Não sobrescreva a versão anterior.", "Prompt salvo, arquivo gerado quando possível e revisão visual registrada."),
    [("Prompt preservado", "A direção pode ser reutilizada."), ("Arquivo conferido", "O resultado foi aberto em tamanho legível."), ("Pendência honesta", "Ausência de gerador não vira falsa entrega.")]))

lessons.append(lesson("w11-trafego", "Tráfego: da peça à campanha", "Conta, objetivo, destino, verba e estado verificável", 50,
    ["Mapear o caminho da campanha", "Configurar Meta com segurança", "Distinguir rascunho, publicação e veiculação"],
    ["Criativo pronto ainda não é campanha. Antes de subir, confira identidade, conta, objetivo, público, destino, orçamento proposto e o que acontece depois do clique.",
     [("Origem", "Anúncio ou conteúdo."), ("Destino", "Conversa, página, captura ou webinar."), ("Conversão", "Ação que será medida."), ("Acompanhamento", "Métrica, decisão e próxima otimização.")],
     [("Configuração Meta", ["Aplicativo, portfólio, System User, ativos e permissões são etapas separadas. Token fica privado. Acesso de leitura não prova autorização para publicar."]),
      ("Estados reais", ["Preparado, criado, pausado, em análise, ativo e entregando são estados diferentes. Ativar orçamento exige decisão explícita do dono."]),
      ("Publicação orgânica", ["Instagram também exige conta correta, permissão e confirmação do conteúdo. O recibo da API ou a publicação visível comprovam o resultado."]) ]],
    ("Revise minha campanha", "Use CoreAI:Traffic Chief. Revise negócio, conta, objetivo, identidade, público, criativo, destino, orçamento proposto e status desejado. Mostre requisitos ausentes e não ative verba sem minha instrução explícita.", "Campanha preparada com conta e destino conferidos, ou pendências específicas registradas."),
    [("Destino aberto", "A jornada funciona como visitante."), ("Conta conferida", "Identidade e ativos pertencem ao negócio."), ("Estado registrado", "Não confundimos criação com veiculação.")]))

lessons.append(lesson("w12-pitch", "Da primeira tarefa à empresa agêntica", "Como transformar os times em uma capacidade permanente", 20,
    ["Reconhecer o que foi construído", "Entender o papel da mentoria", "Tomar uma decisão clara sobre continuidade"],
    ["Hoje você instalou uma base e viu uma cadeia completa. A progressão continua: **da primeira tarefa automatizada à empresa inteira operada por agentes de IA.** O desafio seguinte é adaptar os times ao seu negócio, aumentar repertório, criar rotinas confiáveis, acompanhar qualidade e fazer a operação melhorar com o uso.",
     [("Hoje", "Estrutura, contexto e primeira execução."), ("Depois", "Personalização, integrações e consistência."), ("Mentoria", "Acompanhamento para construir e ajustar a operação."), ("Decisão", "Aplicar para conhecer a proposta atual.")],
     [("A ponte", ["O workshop prova que você consegue começar. A Core IA Mentoria acompanha a implementação dessa transformação dentro da empresa: diagnóstico, contexto, desenho dos funcionários digitais, instalação dos times, integrações, rotinas, revisão e evolução da operação. O período e o formato comerciais permanecem para confirmação do Juliano."]),
      ("Oferta a confirmar", ["Antes da publicação, preencher: nome atual da mentoria, duração, formato dos encontros, entregáveis, bônus, investimento, condição do workshop, vagas, garantia se existir e destino da aplicação."]),
      ("Convite", ["Se você quer construir essa operação com acompanhamento, aplicar contexto e agentes ao seu negócio e sair de tentativas isoladas, conheça a mentoria. O CTA final será ajustado ao destino real."]) ]],
    ("Organize meu fechamento", "Mostre o que eu construí hoje, o que ainda está pendente e o que exige acompanhamento para virar operação. Depois apresente a mentoria usando somente as condições confirmadas pelo Juliano e direcione para o CTA oficial.", "Uma transição coerente, sem promessas ou condições inventadas."),
    [("Prova do dia", "As entregas demonstradas estão abertas e localizáveis."), ("Oferta confirmada", "Todos os termos comerciais foram revisados pelo Juliano."), ("CTA oficial", "A aplicação ou compra aponta para o destino correto.")]))

lessons.append(lesson("w13-encerramento", "Seu time começa pelo próximo pedido", "Fechar entregas, pendências e primeira rotina", 10,
    ["Localizar os artefatos", "Registrar pendências", "Definir a próxima rotina"],
    ["O valor do dia aparece quando você consegue retomar a operação. Feche dizendo onde estão contexto, carrossel, oferta, copy, criativo e campanha, e qual é a próxima ação.",
     [("Entregas", "Arquivos abertos e revisados."), ("Pendências", "Acessos ou decisões ainda necessários."), ("Rotina", "O que será repetido e quando."), ("Zeus", "O próximo briefing começa pelos registros.")],
     [("Fechamento", ["Escolha uma rotina para a próxima semana. Peça ao Zeus que organize o briefing e confirme o cliente antes de executar."]) ]],
    ("Feche meu dia", "Zeus, organize as decisões, entregas revisadas, publicações comprovadas e pendências deste workshop por cliente. Prepare o próximo pedido e indique a primeira rotina a executar.", "Registro final com uma próxima ação objetiva."),
    [("Arquivos localizados", "Você sabe onde estão as entregas."), ("Pendências visíveis", "Nada foi marcado como concluído sem teste."), ("Próxima ação definida", "Existe responsável e condição de conclusão.")]))

# Bônus reaproveitados da mentoria existente, preservando o conteúdo integral.
source = json.loads(Path("/Users/julianotorriani/claude/playbook/src/data/manual-core-ia-mentoria.json").read_text())
bonus_titles = [
    "Como Usar o Claude Code Como um Profissional",
    "ContextOS · A Camada de Contexto do CORE AIOS",
    "Parte 1 · A Skill de Copy: Fábrica de Copy High Ticket",
    "GitHub como Cérebro Compartilhado · Sync Bidirecional Local ↔ Agente",
]
bonus = []
for wanted in bonus_titles:
    found = None
    for module in source.get("modules", []):
        for candidate in module.get("lessons", []):
            if candidate.get("title") == wanted:
                found = candidate
                break
        if found:
            break
    if found:
        cloned = dict(found)
        cloned["id"] = "bonus-" + str(len(bonus) + 1)
        bonus.append(cloned)

manual = {
    "slug": "workshop-times-de-ia",
    "title": "Workshop Times de IA",
    "description": "Do contexto à operação: configure seus times de IA e aplique ao seu negócio.",
    "modules": [
        {"id": "modulo-0", "number": 0, "title": "Módulo 0 · Comece aqui", "lessons": lessons[:4]},
        {"id": "modulo-1", "number": 1, "title": "Módulo 1 · Segundo cérebro e orquestração", "lessons": lessons[4:7]},
        {"id": "modulo-2", "number": 2, "title": "Módulo 2 · Times de marketing em ação", "lessons": lessons[7:]},
        {"id": "bonus", "number": 3, "title": "Bônus · Aprofundamento", "lessons": bonus},
    ],
}
(OUT / "manual-workshop-times-de-ia.json").write_text(json.dumps(manual, ensure_ascii=False, indent=2) + "\n")

architecture = """# Arquitetura pedagógica · Workshop Times de IA

## Transformação

**Ponto A:** empresário usa ChatGPT ou Claude como uma janela de conversa, repete contexto e depende de prompts isolados.

**Ponto B:** empresário sai com a base de uma empresa agêntica instalada: negócio identificado, ContextOS revisado, Zeus coordenando skills, primeiro fluxo de marketing executado e rotina de continuidade definida.

**Promessa:** Vá além do ChatGPT e do Claude: tenha agentes de IA autônomos operando a sua empresa.

**Progressão:** da primeira tarefa automatizada à empresa inteira operada por agentes de IA.

## Método · C.O.R.E.

1. **Conhecer** · organizar ambiente, fontes, contexto e repertório.
2. **Orquestrar** · Zeus resolve o cliente, transforma direção em briefing e aciona o especialista.
3. **Realizar** · os times executam conteúdo, oferta, copy, criativos e tráfego.
4. **Evoluir** · loops registram decisões, atualizam o portal e preparam a próxima sessão.

## Arco do dia

| Bloco | Mudança de estado | Evidência |
|---|---|---|
| Abertura | Chatbot → sistema operacional | Caso de uso escolhido |
| Segundo cérebro | Informação dispersa → arquitetura | Mapa contexto, skills, repertório e rotinas |
| Setup | Ferramenta ausente → ambiente conferido | Claude ou Codex funcionando e README executado pela IA |
| ContextOS | Prompt genérico → negócio identificado | Contexto consolidado e gate liberado |
| Zeus | Pedidos soltos → despacho rastreável | Briefing com cliente, fonte, executor e critério |
| Loop e portal | Sessão perdida → continuidade | Registro recuperado em nova sessão |
| Times | Ideia → cadeia de marketing | Conteúdo, oferta, copy, criativo e campanha preparada |
| Mentoria | Experimento → plano de transformação | Diagnóstico do que falta para a empresa agêntica |

## Regra editorial das aulas

Cada aula funciona sem os slides. Ela contém objetivo, explicação, estrutura visual, exemplos, prática guiada, resposta esperada, checkpoint e fechamento. Os slides são o guia de palco do professor e carregam uma ideia por tela.

## Limites de publicação

Não publicar o pitch enquanto duração, formato, entregáveis comerciais, bônus, investimento, condição do workshop, vagas, garantia e CTA oficial não forem confirmados. Não inserir números de oportunidade de 2026 sem a apresentação-fonte.
"""
(OUT / "course-architecture.md").write_text(architecture)

lesson_rows = []
for module in manual["modules"]:
    for item in module["lessons"]:
        lesson_rows.append({
            "module": module["title"], "id": item["id"], "title": item["title"],
            "duration": item.get("duration"), "blockCount": len(item.get("blocks", [])),
            "learningGoalCount": len(item.get("learningGoals", [])),
        })
(OUT / "lesson-map.json").write_text(json.dumps(lesson_rows, ensure_ascii=False, indent=2) + "\n")

(OUT / "course-builder-status.md").write_text("""# Course Builder · status das cinco fases

| Fase | Entregável | Estado |
|---|---|---|
| 1 · Briefing | `briefing-normalized.md` | Completo com tese, público, formato, transformação, materiais e prazo |
| 2 · Método | Método C.O.R.E. em `course-architecture.md` | Completo |
| 3 · Arquitetura | Arco, módulos, progressão e evidências em `course-architecture.md` | Completo |
| 4 · Design de aulas | 14 aulas principais no manual, detalhadas em `lesson-map.json` | Completo editorialmente |
| 5 · Materiais | Manual JSON, deck HTML, deck spec e bônus | Completo localmente |

## Gaps que não podem ser inventados

1. Dados e casos da apresentação **Oportunidade 2026**.
2. Condições comerciais da **Core IA Mentoria** e CTA oficial.
3. Vídeos, transcrições e timestamps do workshop, que só existirão após a gravação.
4. Publicação e inspeção visual na área de membros, fora do escopo desta geração local.
""")

# Deck de palco: títulos são conclusões; conteúdo completo permanece na aula.
slides = [
    ("title", "TIMES DE IA", "Do conhecimento disperso a uma operação que trabalha com você"),
    ("statement", "Vá além do ChatGPT e do Claude", "Tenha agentes de IA autônomos operando a sua empresa"),
    ("timeline", "Da primeira tarefa à empresa agêntica", "Automatizar · coordenar · operar áreas · evoluir"),
    ("statement", "Você já tem o combustível", "Conversas, documentos, decisões, exemplos, produtos e processos"),
    ("statement", "O problema é que nada disso trabalha junto", "A IA recebe pedidos, mas não conhece a operação"),
    ("timeline", "Hoje vamos conectar tudo", "Ambiente · contexto · Zeus · conteúdo · oferta · copy · criativos · tráfego"),
    ("section", "A ferramenta não é o sistema", "Fundamentos"),
    ("comparison", "Chat responde. Agente executa.", "Conversa sob demanda | Objetivo + ferramentas + registro"),
    ("cards", "Quatro peças formam o segundo cérebro", "Contexto | Skills | Repertório | Rotinas"),
    ("statement", "O modelo pensa. O ambiente permite agir.", "Claude Code e Codex são ambientes; modelos são inteligências"),
    ("cards", "Escolha capacidade conforme a tarefa", "Rápido | Equilibrado | Máxima capacidade"),
    ("section", "A instalação começa por uma conversa", "Setup"),
    ("timeline", "Desktop primeiro. A IA faz o resto.", "Baixar · entrar · abrir pasta · ler README · instalar · conferir"),
    ("demo", "Não copie comandos. Entregue a missão.", "Leia o README e configure meu ambiente"),
    ("section", "Sem contexto, nenhuma skill trabalha", "ContextOS"),
    ("comparison", "Formulário cheio não é contexto confiável", "Placeholder | Fato com fonte e revisão"),
    ("cards", "Conte sua empresa de três formas", "Entrevista | Áudio | Documentos"),
    ("timeline", "O ContextOS cresce sem inventar", "Quick · Deep · Enrich · Revisão · Gate"),
    ("demo", "O dono valida a verdade do negócio", "Produto · público · promessa · prova · limite"),
    ("section", "Zeus transforma direção em execução", "Orquestração"),
    ("timeline", "Um pedido atravessa o time sem perder contexto", "Dono · Zeus · líder · especialista · revisão"),
    ("cards", "Todo despacho precisa ser conferível", "Cliente | Fonte | Objetivo | Executor | Critério"),
    ("statement", "O portal mostra. A memória guarda.", "O loop atualiza; Zeus consulta"),
    ("timeline", "Cada dia prepara o seguinte", "Sessões · extração · revisão · portal · briefing"),
    ("demo", "Teste a memória em uma nova sessão", "Onde paramos e o que faço agora?"),
    ("section", "A primeira entrega torna o sistema real", "Conteúdo"),
    ("timeline", "A imagem entra depois da ideia", "Tese · headline · sequência · CTA · visual · revisão"),
    ("demo", "Crie um carrossel do seu negócio", "Contexto e identidade obrigatórios"),
    ("break", "ALMOÇO", "Voltamos para transformar mensagem em campanha"),
    ("section", "Uma campanha forte começa na oferta", "Oferta"),
    ("cards", "Valor precisa ser compreensível", "Público | Promessa | Entrega | Mecanismo | Prova"),
    ("statement", "A copy não inventa o que a oferta não sustenta", "Condições reais entram; lacunas ficam visíveis"),
    ("section", "Cada canal muda a forma da mensagem", "Copy"),
    ("cards", "Um time, várias rotas", "Anúncio | WhatsApp | VSL | Página | Webinar"),
    ("timeline", "Método antes de volume", "Briefing · estratégia · produção · Oráculo · derivados"),
    ("section", "Criativo bonito ainda pode estar errado", "Criativos"),
    ("cards", "A peça nasce de quatro decisões", "Copy | direção | referência | formato"),
    ("demo", "Abra o arquivo antes de aprovar", "Texto · marca · pessoa · produto · CTA"),
    ("section", "Peça pronta ainda não é campanha", "Tráfego"),
    ("timeline", "O clique precisa chegar a algum lugar", "Origem · destino · conversão · acompanhamento"),
    ("cards", "Meta exige configuração por camadas", "App | System User | ativos | permissões | token"),
    ("statement", "Criada não significa veiculando", "Rascunho · pausada · análise · ativa · entregando"),
    ("proof", "Você construiu uma cadeia completa", "Contexto → conteúdo → oferta → copy → criativo → campanha"),
    ("section", "Agora transforme o começo em operação", "Core IA Mentoria"),
    ("comparison", "Workshop instala a base. Mentoria acompanha a implementação.", "Primeira execução | Contexto, funcionários digitais, integrações, rotinas e evolução"),
    ("statement", "Da primeira tarefa à empresa inteira", "Agentes de IA operando áreas do seu negócio"),
    ("cards", "A proposta precisa ser confirmada", "Formato | duração | entregas | investimento | vagas | CTA"),
    ("cta", "Quer construir isso no seu negócio?", "[CTA OFICIAL DA MENTORIA]"),
    ("closing", "SEU TIME COMEÇA PELO PRÓXIMO PEDIDO", "Decisões · entregas · pendências · próxima rotina"),
]

deck_spec = []
for i, (kind, title, detail) in enumerate(slides, 1):
    deck_spec.append({
        "id": f"S{i:02d}", "function": kind, "action_title": title,
        "audience_movement": "Avançar da curiosidade para uma decisão ou ação concreta",
        "visible_copy": [title, detail], "structure": kind,
        "speaker_notes": f"Conecte este momento à aula correspondente. {detail}. Não leia o slide; demonstre ou conte um caso real.",
        "evidence": "Fonte local do workshop/CoreAI Mentoria" if "2026" not in title else "Apresentação Oportunidade 2026 ainda a localizar",
    })
(OUT / "deck-spec.json").write_text(json.dumps(deck_spec, ensure_ascii=False, indent=2) + "\n")

def slide_markup(i, kind, title, detail):
    parts = [x.strip() for x in detail.split("|")]
    if len(parts) > 1:
        body = '<div class="grid">' + ''.join(f'<div><span>{j:02d}</span><strong>{html.escape(x)}</strong></div>' for j, x in enumerate(parts, 1)) + '</div>'
    else:
        body = f'<p>{html.escape(detail)}</p>'
    return f'<section class="slide {kind}" id="S{i:02d}" {"" if i == 1 else "hidden"}><div class="tag">TIMES DE IA · {i:02d}</div><main><h1>{html.escape(title)}</h1>{body}</main><footer>Workshop Times de IA <b>{i:02d} / {len(slides):02d}</b></footer></section>'

slide_html = ''.join(slide_markup(i, *s) for i, s in enumerate(slides, 1))
notes = json.dumps([x["speaker_notes"] for x in deck_spec], ensure_ascii=False)
deck = f'''<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Workshop Times de IA</title><style>
:root{{--dark:#050505;--surface:#101010;--cream:#f4efe5;--blue:#2b7de1;--dim:#9ba6b2}}*{{box-sizing:border-box}}body{{margin:0;background:#000;color:var(--cream);font-family:Arial,sans-serif;overflow:hidden}}.slide{{width:100vw;height:100vh;position:relative;background:radial-gradient(circle at 85% 12%,#163b69 0,transparent 35%),var(--dark);padding:7vh 8vw}}.tag{{font:700 1.1vw/1 monospace;color:var(--blue);letter-spacing:.18em}}main{{height:75vh;display:flex;flex-direction:column;justify-content:center}}h1{{font-size:5.5vw;line-height:.94;letter-spacing:-.055em;max-width:84vw;margin:0;text-transform:uppercase}}p{{font:400 2.1vw/1.35 monospace;color:var(--dim);max-width:76vw;margin:5vh 0 0}}.grid{{display:grid;grid-template-columns:repeat(auto-fit,minmax(16vw,1fr));gap:1.2vw;margin-top:6vh}}.grid div{{background:var(--surface);border:1px solid #27313c;padding:2vw;min-height:17vh;display:flex;flex-direction:column;justify-content:space-between}}.grid span{{font:700 1vw monospace;color:var(--blue)}}.grid strong{{font-size:1.7vw;line-height:1.1}}footer{{position:absolute;left:8vw;right:8vw;bottom:5vh;display:flex;justify-content:space-between;font:1vw monospace;color:var(--dim)}}.section h1,.break h1{{color:var(--blue)}}.statement h1,.proof h1{{font-size:6.6vw}}.cta{{background:radial-gradient(circle at 50% 50%,#16467c 0,transparent 48%),#050505;text-align:center}}.cta main{{align-items:center}}.cta p{{color:var(--cream)}}#controls{{position:fixed;z-index:20;bottom:1vh;left:50%;transform:translateX(-50%);background:#111d;padding:.5rem 1rem}}button{{background:none;color:white;border:0;font-size:1rem}}#notes{{position:fixed;z-index:30;right:2vw;bottom:8vh;width:34vw;max-height:30vh;overflow:auto;background:#f4efe5;color:#111;padding:1.2rem;font:15px/1.5 sans-serif}}@media(prefers-reduced-motion:reduce){{*{{animation:none!important;transition:none!important}}}}
</style>{slide_html}<div id="controls"><button id="prev">←</button><button id="note">Notas</button><button id="next">→</button></div><aside id="notes" hidden></aside><script>const pages=[...document.querySelectorAll('.slide')],notes={notes};let current=0;function show(n){{current=Math.max(0,Math.min(pages.length-1,n));pages.forEach((p,i)=>p.hidden=i!==current);document.querySelector('#notes').textContent=notes[current];location.hash=pages[current].id}}document.querySelector('#prev').onclick=()=>show(current-1);document.querySelector('#next').onclick=()=>show(current+1);document.querySelector('#note').onclick=()=>document.querySelector('#notes').hidden=!document.querySelector('#notes').hidden;document.onkeydown=e=>{{if(e.key==='ArrowRight'||e.key==='PageDown')show(current+1);if(e.key==='ArrowLeft'||e.key==='PageUp')show(current-1);if(e.key.toLowerCase()==='n')document.querySelector('#note').click()}};show(Math.max(0,pages.findIndex(p=>'#'+p.id===location.hash)));</script></html>'''
(OUT / "slides-workshop.html").write_text(deck)

(OUT / "briefing-normalized.md").write_text("""# Briefing normalizado

Público: empresários e profissionais com níveis Novice e Advanced Beginner. Formato: workshop intensivo ao vivo, 9h às 17h, com prática aplicada ao negócio do participante. Ponto A: uso de ChatGPT ou Claude como conversa isolada, sem contexto persistente nem processo. Ponto B: base de uma empresa agêntica instalada, com ContextOS, Zeus, times de marketing e rotina de continuidade. Promessa: “Vá além do ChatGPT e do Claude: tenha agentes de IA autônomos operando a sua empresa.” Progressão: “da primeira tarefa automatizada à empresa inteira operada por agentes de IA.” Materiais: CoreAI Mentoria, Eliaquim, portal, skills agentesIA e brandbook. CTA: Core IA Mentoria, com condições comerciais pendentes de confirmação do Juliano.
""")
(OUT / "story-arc.md").write_text("""# Mudança de crença e arco

Antes: IA é uma janela que responde prompts. Depois: IA é uma camada operacional formada por funcionários digitais que conhecem o negócio, usam métodos, acionam ferramentas, coordenam trabalho e registram o que aconteceu. Arco: oportunidade 2026 → limitação do chat → segundo cérebro → instalação → contexto → orquestração → memória diária → primeira produção → cadeia comercial → prova → empresa agêntica → mentoria → próxima ação.
""")
(OUT / "design-direction.md").write_text("""# Direção de design

Palco 16:9, fundo preto, azul Torriani, creme e cinza acessível. Tipografia editorial pesada nos títulos e monoespaçada nos metadados. Uma conclusão por slide, até quatro elementos paralelos e pausas visuais entre blocos. Sem fotos genéricas, parágrafos ou interface falsa. Portal e artefatos reais aparecem na demonstração ao vivo.
""")
(OUT / "render-lock.yaml").write_text("""mode: palco
canvas: 1920x1080
colors: {background: '#050505', surface: '#101010', accent: '#2B7DE1', text: '#F4EFE5', dim: '#9BA6B2'}
fonts: {display: Arial Black, body: Arial, mono: monospace}
forbidden: [stock_photos, paragraphs, invented_metrics, unconfirmed_offer_terms]
assets: {portal: live_demo, opportunity_2026: pending_source, pitch_terms: pending_founder}
""")
(OUT / "qa-report.md").write_text("""# QA

Estrutura: 14 aulas principais + 4 bônus, com objetivos, agenda, explicação, estrutura visual, prática guiada, resposta esperada, checkpoint e fechamento. Deck: 49 slides, título inicial e fechamento final, com seções entre blocos. Tese, promessa e progressão aparecem na abertura e no pitch. Prova: nenhum número de mercado ou condição comercial foi inventado. Bloqueios antes da publicação: localizar a apresentação Oportunidade 2026; confirmar oferta e CTA da mentoria; validar a inserção na área autenticada. O HTML é um deck funcional para ensaio, não PPTX.
""")
allowed_block_types = {
    "text", "heading", "terminal", "image", "cta-button", "steps", "callout",
    "cards-grid", "code", "prompt", "clones", "quote", "timeline", "agenda-list",
    "numbered-cards", "command-line", "command-list", "tabbed-commands",
    "command-with-input", "accordion", "checklist", "video", "mermaid", "quiz",
    "section-badge", "comparison", "tool-card", "input-output", "numbered-steps",
    "next-steps", "video-cue", "skill-download", "command-reference",
    "troubleshoot-card", "metric-grid", "section-cover", "decision-tree",
}
all_lessons = [item for module in manual["modules"] for item in module["lessons"]]
validation = {
    "modules": len(manual["modules"]),
    "lessons": len(all_lessons),
    "principalLessons": len(lessons),
    "bonusLessons": len(bonus),
    "emptyLessons": [item["id"] for item in all_lessons if not item.get("blocks")],
    "unknownBlockTypes": sorted({block.get("type") for item in all_lessons for block in item.get("blocks", []) if block.get("type") not in allowed_block_types}),
    "checklistsWithoutId": [item["id"] for item in all_lessons for block in item.get("blocks", []) if block.get("type") == "checklist" and not block.get("id")],
    "unconfirmed": ["opportunity_2026_source", "mentoria_commercial_terms", "mentoria_official_cta", "member_area_publication"],
}
validation["passedLocalStructure"] = not validation["emptyLessons"] and not validation["unknownBlockTypes"] and not validation["checklistsWithoutId"]
(OUT / "validation-report.json").write_text(json.dumps(validation, ensure_ascii=False, indent=2) + "\n")
print(f"manual={len(lessons)} aulas + {len(bonus)} bônus; slides={len(slides)}")
