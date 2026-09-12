#!/usr/bin/env python3
"""Separa a recepção operacional da primeira aula do Workshop Times de IA."""

from __future__ import annotations

import datetime as dt
import json
import urllib.request
import uuid
from pathlib import Path

ROOT = Path("/Users/julianotorriani/claude/agentesIA")
MANUAL_PATH = ROOT / "workshop/manual-workshop-times-de-ia.json"
ENV_PATH = Path("/Users/julianotorriani/claude/area/app/.env.local")
BACKUP_DIR = ROOT / "backups"
PRODUCT_ID = "96895ed9-bea9-45e4-a991-bd7c797a8291"
WELCOME_AULA_ID = "2412e8e9-0ed1-4610-b840-1e84131d7a4a"
WELCOME_MODULE_ID = "b3a4d66c-135d-4ec5-9156-eeba194bcfad"
WORKSHOP_MODULE_ID = "681a5ba3-825c-4935-9eb9-7ddb70b9a857"
ORG_ID = "b8f10429-fed4-412d-b753-a0797f6aa5ea"


def operational_welcome() -> dict:
    return {
        "id": "welcome-operacional",
        "title": "Bem-vindo ao Workshop Times de IA",
        "subtitle": "Entre no grupo, prepare o computador e encontre aqui o acesso da aula ao vivo",
        "tag": "Comece aqui",
        "shortTitle": "Bem-vindo",
        "status": "available",
        "duration": 5,
        "learningGoals": [
            "Entrar no canal oficial do workshop",
            "Saber onde o link da aula ao vivo será publicado",
            "Chegar com o computador e o negócio preparados",
        ],
        "schedule": [
            {"title": "Acesso", "duration": "2min", "description": "Grupo oficial e sala ao vivo"},
            {"title": "Preparação", "duration": "3min", "description": "O que separar antes do início"},
        ],
        "deliverable": "Acesso ao grupo confirmado e computador pronto para o workshop",
        "blocks": [
            {"type": "section-badge", "label": "COMECE AQUI", "color": "#2B7DE1"},
            {"type": "text", "content": "Você está dentro do **Workshop Times de IA**. Esta é a sua página de recepção. Use esta aula para entrar no grupo oficial, localizar a sala ao vivo e preparar o que será usado durante o dia."},
            {"type": "callout", "variant": "success", "title": "Workshop ao vivo", "content": "**12 de setembro de 2026, das 9h às 17h.** Reserve o dia e participe pelo computador. A construção acontece ao vivo e usa o seu próprio negócio."},
            {"type": "section-badge", "label": "GRUPO OFICIAL", "color": "#22C55E"},
            {"type": "heading", "level": 2, "content": "Entre no grupo de WhatsApp"},
            {"type": "text", "content": "O grupo é o canal operacional do workshop. É nele que você recebe os avisos, o link da sala e qualquer atualização de última hora."},
            {"type": "callout", "variant": "success", "title": "Grupo oficial do Workshop", "content": "[ENTRAR NO GRUPO DE WHATSAPP](https://chat.whatsapp.com/Ljyoag3dqqhDj85np6Kbu1?s=cl&p=i&mlu=4&ilr=4)"},
            {"type": "section-badge", "label": "AULA AO VIVO", "color": "#8B5CF6"},
            {"type": "heading", "level": 2, "content": "O link da sala ficará aqui"},
            {"type": "text", "content": "Antes do início, o acesso da transmissão será publicado nesta seção e também enviado no grupo oficial. Volte a esta aula amanhã pela manhã."},
            {"type": "callout", "variant": "info", "title": "Link da transmissão", "content": "**Aguardando publicação do link da aula ao vivo.**"},
            {"type": "section-badge", "label": "ANTES DE COMEÇAR", "color": "#06B6D4"},
            {"type": "numbered-steps", "steps": [
                {"badge": "01", "title": "Separe um computador", "description": "O workshop é prático. Você acompanhará a demonstração e fará no seu próprio ambiente."},
                {"badge": "02", "title": "Escolha um negócio", "description": "Defina a empresa e o produto que serão usados nos exercícios."},
                {"badge": "03", "title": "Reúna seu repertório", "description": "Deixe por perto documentos, apresentações, ofertas, conteúdos e materiais da empresa."},
            ]},
            {"type": "checklist", "id": "welcome-operacional-checkpoint", "title": "Checklist de chegada", "items": [
                {"title": "Grupo oficial", "description": "Entre no grupo e confirme que consegue visualizar os avisos."},
                {"title": "Horário reservado", "description": "12/09, das 9h às 17h."},
                {"title": "Computador disponível", "description": "Você fará as configurações e práticas durante o encontro."},
                {"title": "Negócio escolhido", "description": "Use uma empresa e um produto ao longo do workshop."},
            ]},
            {"type": "callout", "variant": "success", "title": "Depois desta recepção", "content": "Abra a primeira aula do módulo **Workshop**: **A oportunidade que quase ninguém está vendo**. Ela apresenta a mudança de chatbot para empresa agêntica e o que você construirá ao longo do dia."},
        ],
    }


def rich_opening() -> dict:
    return {
        "id": "w00-boas-vindas",
        "title": "A oportunidade que quase ninguém está vendo",
        "subtitle": "Da primeira tarefa automatizada à empresa inteira operada por agentes de IA",
        "tag": "Workshop",
        "shortTitle": "A oportunidade",
        "status": "available",
        "duration": 20,
        "learningGoals": [
            "Diferenciar uso pontual de IA de uma operação agêntica",
            "Reconhecer os ativos que a empresa já possui",
            "Escolher o negócio, o produto e a rotina usados no workshop",
        ],
        "schedule": [
            {"title": "Problema", "duration": "4min", "description": "Por que o chat não acumula a empresa"},
            {"title": "Demonstração", "duration": "6min", "description": "Da resposta isolada ao time que executa"},
            {"title": "Mapa do dia", "duration": "4min", "description": "Contexto, Zeus e times de marketing"},
            {"title": "Aplicação", "duration": "6min", "description": "Escolha do caso real do participante"},
        ],
        "deliverable": "Um negócio, um produto, materiais localizados e uma rotina prioritária",
        "blocks": [
            {"type": "section-badge", "label": "O PROBLEMA", "color": "#F59E0B"},
            {"type": "text", "content": "Imagine abrir o ChatGPT ou o Claude na segunda-feira e precisar explicar tudo de novo: quem é você, o que a empresa vende, como fala, quais ofertas já funcionaram e o que aconteceu na semana passada."},
            {"type": "quote", "text": "A IA parece inteligente durante a conversa, mas a empresa continua dependendo de você para lembrar, contextualizar, copiar, colar e decidir cada próximo passo."},
            {"type": "text", "content": "Esse é o limite do uso pontual. A resposta pode ser boa, mas ela nasce sem o repertório da empresa, sem uma função definida e sem continuidade. O trabalho volta para a sua mão."},
            {"type": "callout", "variant": "info", "title": "Pense no seu negócio", "content": "Quantas vezes você já escreveu o mesmo contexto para uma IA? E quantas respostas boas ficaram perdidas numa conversa que ninguém retomou?"},
            {"type": "section-badge", "label": "A MUDANÇA", "color": "#8B5CF6"},
            {"type": "heading", "level": 2, "content": "De chatbot para empresa agêntica"},
            {"type": "comparison", "before": {"title": "IA como conversa", "subtitle": "Pedido isolado", "items": ["Você repete o contexto", "A IA responde", "Você move o trabalho", "A conversa termina", "O aprendizado se perde"], "result": "A IA ajuda numa tarefa, mas a operação continua manual.", "variant": "before"}, "after": {"title": "IA como operação", "subtitle": "Time com contexto", "items": ["O cliente é identificado", "O contexto é carregado", "A skill aplica um método", "O agente cria a entrega", "O loop registra o aprendizado"], "result": "A empresa acumula capacidade e executa de ponta a ponta.", "variant": "after"}},
            {"type": "section-badge", "label": "CONCEITO CENTRAL", "color": "#2B7DE1"},
            {"type": "text", "content": "Uma **empresa agêntica** é uma organização onde funcionários digitais operam áreas inteiras do negócio com autonomia, conhecem o contexto da empresa e executam de ponta a ponta."},
            {"type": "callout", "variant": "success", "title": "A promessa", "content": "**Vá além do ChatGPT e do Claude: tenha agentes de IA autônomos operando a sua empresa.**"},
            {"type": "mermaid", "caption": "A progressão do workshop", "diagram": "graph LR\n A[\"Tarefa isolada\"] --> B[\"ContextOS\"]\n B --> C[\"Zeus orquestra\"]\n C --> D[\"Skills executam\"]\n D --> E[\"Loops aprendem\"]\n E --> F[\"Empresa agêntica\"]"},
            {"type": "section-badge", "label": "O QUE VOCÊ JÁ TEM", "color": "#06B6D4"},
            {"type": "heading", "level": 2, "content": "Seu negócio já produziu o repertório"},
            {"type": "text", "content": "Conversas com clientes, propostas, páginas, anúncios, reuniões, documentos, decisões e exemplos formam um patrimônio. O problema é que esse patrimônio costuma estar espalhado e fora do alcance da IA quando ela trabalha."},
            {"type": "cards-grid", "fullWidth": True, "layout": "row", "cards": [
                {"title": "Contexto", "description": "O que a empresa é, vende, acredita e já aprendeu."},
                {"title": "Skills", "description": "Métodos de execução para conteúdo, oferta, copy, criativos e tráfego."},
                {"title": "Rotinas", "description": "Loops que registram, atualizam e preparam o próximo trabalho."},
            ]},
            {"type": "section-badge", "label": "O MAPA DO DIA", "color": "#22C55E"},
            {"type": "numbered-steps", "steps": [
                {"badge": "01", "title": "Conhecer", "description": "Preparar o ambiente, reunir as fontes e construir o ContextOS."},
                {"badge": "02", "title": "Orquestrar", "description": "Instalar Zeus para identificar o cliente, formar briefings e chamar a skill certa."},
                {"badge": "03", "title": "Realizar", "description": "Produzir conteúdo, oferta, copy, criativos e preparar o tráfego."},
                {"badge": "04", "title": "Evoluir", "description": "Criar loops e um portal que acumulam o que aconteceu e mantêm continuidade."},
            ]},
            {"type": "callout", "variant": "warning", "title": "O acordo do workshop", "content": "Trabalhe com **um negócio, um produto e uma campanha**. A profundidade vem de manter o mesmo contexto ao longo de todas as etapas."},
            {"type": "section-badge", "label": "SUA VEZ", "color": "#F59E0B"},
            {"type": "heading", "level": 2, "content": "Escolha o caso que atravessará o dia"},
            {"type": "input-output", "input": {"label": "Seu pedido", "content": "Diga qual negócio e produto você quer usar hoje. Liste os materiais que já possui e uma rotina de marketing que gostaria de executar melhor."}, "output": {"label": "Entrega", "content": "Um negócio, um produto, materiais localizados e uma rotina prioritária."}},
            {"type": "prompt", "title": "Copie para o seu agente", "content": "Vou usar este negócio durante o Workshop Times de IA. Antes de executar qualquer tarefa, me ajude a registrar: 1) nome e objetivo da empresa; 2) produto escolhido; 3) público; 4) materiais disponíveis; 5) uma rotina de marketing prioritária. Não invente o que faltar: pergunte."},
            {"type": "checklist", "id": "w00-boas-vindas-checkpoint", "title": "Checkpoint", "items": [
                {"title": "Negócio escolhido", "description": "Você sabe qual empresa alimentará todas as atividades."},
                {"title": "Produto escolhido", "description": "O workshop não mistura várias ofertas."},
                {"title": "Materiais localizados", "description": "Você sabe onde estão documentos, conteúdos e exemplos relevantes."},
                {"title": "Rotina prioritária", "description": "Você definiu o primeiro trabalho que quer melhorar."},
            ]},
            {"type": "callout", "variant": "success", "title": "Pra levar com você", "content": "**A IA só trabalha como parte da empresa quando conhece o negócio, recebe um método e consegue continuar de onde parou.** Na próxima aula, você verá onde Claude Code, Codex e os modelos entram nessa arquitetura."},
        ],
    }


def env() -> dict[str, str]:
    result = {}
    for line in ENV_PATH.read_text().splitlines():
        if line and not line.startswith("#") and "=" in line:
            key, value = line.split("=", 1)
            result[key] = value.strip("\"'")
    return result


def request(method: str, path: str, body=None):
    values = env()
    headers = {
        "apikey": values["SUPABASE_SERVICE_ROLE_KEY"],
        "Authorization": "Bearer " + values["SUPABASE_SERVICE_ROLE_KEY"],
        "Content-Type": "application/json",
        "Prefer": "return=representation",
    }
    data = None if body is None else json.dumps(body, ensure_ascii=False).encode()
    req = urllib.request.Request(values["NEXT_PUBLIC_SUPABASE_URL"] + "/rest/v1" + path, data=data, headers=headers, method=method)
    with urllib.request.urlopen(req) as response:
        raw = response.read()
    return json.loads(raw) if raw else None


def update_manual(reception: dict, opening: dict) -> dict:
    manual = json.loads(MANUAL_PATH.read_text())
    by_id = {lesson["id"]: lesson for module in manual["modules"] for lesson in module["lessons"]}
    by_id[reception["id"]] = reception
    by_id[opening["id"]] = opening
    workshop_order = [
        "w00-boas-vindas", "w01-ferramentas-modelos", "w02-segundo-cerebro", "w03-setup",
        "w04-contextos", "w05-zeus", "w06-loops-portal", "w07-conteudo", "w08-oferta",
        "w09-copy", "w10-criativos", "w11-trafego", "w12-pitch", "w13-encerramento",
    ]
    bonus_order = ["bonus-1", "bonus-2", "bonus-3", "bonus-4"]
    manual["modules"] = [
        {"id": "bem-vindo", "number": 0, "title": "Bem vindo", "date": "", "lessons": [by_id["welcome-operacional"]]},
        {"id": "workshop", "number": 1, "title": "Workshop", "date": "12/09/2026", "lessons": [by_id[x] for x in workshop_order]},
        {"id": "bonus", "number": 2, "title": "Bônus", "date": "", "lessons": [by_id[x] for x in bonus_order]},
    ]
    MANUAL_PATH.write_text(json.dumps(manual, ensure_ascii=False, indent=2) + "\n")
    return manual


def main():
    reception, opening = operational_welcome(), rich_opening()
    stamp = dt.datetime.now().strftime("%Y%m%d-%H%M%S")
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    snapshot = {
        "produto": request("GET", f"/produtos?id=eq.{PRODUCT_ID}&select=*"),
        "aula_recepcao": request("GET", f"/aulas?id=eq.{WELCOME_AULA_ID}&select=*"),
        "modulos": request("GET", f"/modulos?produto_id=eq.{PRODUCT_ID}&select=*"),
        "vinculos": request("GET", f"/modulo_aula?modulo_id=in.({WELCOME_MODULE_ID},{WORKSHOP_MODULE_ID})&select=*"),
    }
    (BACKUP_DIR / f"before-repair-welcome-{stamp}.json").write_text(json.dumps(snapshot, ensure_ascii=False, indent=2))
    update_manual(reception, opening)

    request("PATCH", f"/produtos?id=eq.{PRODUCT_ID}", {"tema": "playbook"})
    request("PATCH", f"/aulas?id=eq.{WELCOME_AULA_ID}", {
        "titulo": reception["title"], "tipo": "texto", "texto_conteudo": None,
        "lesson_payload": reception, "status": "publicado", "visibilidade": "publica",
    })

    existing = request("GET", "/aulas?lesson_payload->>id=eq.w00-boas-vindas&select=id")
    if existing:
        opening_id = existing[0]["id"]
        request("PATCH", f"/aulas?id=eq.{opening_id}", {"titulo": opening["title"], "lesson_payload": opening, "status": "publicado", "visibilidade": "publica"})
    else:
        opening_id = str(uuid.uuid4())
        request("POST", "/aulas", [{
            "id": opening_id, "organization_id": ORG_ID, "titulo": opening["title"],
            "tipo": "texto", "status": "publicado", "visibilidade": "publica",
            "lesson_payload": opening,
        }])

    links = request("GET", f"/modulo_aula?modulo_id=eq.{WORKSHOP_MODULE_ID}&select=aula_id,ordem&order=ordem")
    if not any(link["aula_id"] == opening_id for link in links):
        for link in sorted(links, key=lambda item: item["ordem"], reverse=True):
            request("PATCH", f"/modulo_aula?modulo_id=eq.{WORKSHOP_MODULE_ID}&aula_id=eq.{link['aula_id']}", {"ordem": link["ordem"] + 1})
        request("POST", "/modulo_aula", [{"modulo_id": WORKSHOP_MODULE_ID, "aula_id": opening_id, "ordem": 0}])

    print(json.dumps({"ok": True, "product_id": PRODUCT_ID, "welcome_id": WELCOME_AULA_ID, "opening_id": opening_id, "theme": "playbook", "backup": str(BACKUP_DIR / f"before-repair-welcome-{stamp}.json")}, ensure_ascii=False))


if __name__ == "__main__":
    main()
