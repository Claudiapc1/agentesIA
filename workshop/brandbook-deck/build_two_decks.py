#!/usr/bin/env python3
import json, html
from pathlib import Path

ROOT=Path(__file__).resolve().parent
SRC=ROOT.parent/'manual-workshop-times-de-ia.json'
d=json.loads(SRC.read_text())
lessons={}
def walk(x):
 if isinstance(x,dict):
  if x.get('id') in ('w00-boas-vindas','w04-contextos','bonus-2'): lessons[x['id']]=x
  for v in x.values(): walk(v)
 elif isinstance(x,list):
  for v in x: walk(v)
walk(d)

def txt(block):
 out=[]
 for k in ('label','content','text','caption'):
  if block.get(k): out.append(str(block[k]))
 for k in ('before','after','input','output'):
  v=block.get(k)
  if isinstance(v,dict): out += [str(v.get('title','')),str(v.get('subtitle','')), *map(str,v.get('items',[])), str(v.get('result','')),str(v.get('content',''))]
 for k in ('cards','steps'):
  for v in block.get(k,[]): out += [str(v.get('title','')),str(v.get('description',''))]
 if block.get('diagram'): out.append(block['diagram'])
 return ' '.join(x for x in out if x).replace('**','').replace('`','')

opp=lessons['w00-boas-vindas']; ctx=lessons.get('bonus-2') or lessons['w04-contextos']
def notes(lesson,a,b): return ' '.join(txt(x) for x in lesson['blocks'][a-1:b])

O=[
 ('TITLE','A OPORTUNIDADE','Da primeira tarefa automatizada à empresa inteira operada por agentes de IA',[],notes(opp,1,1)),
 ('STATEMENT','Toda segunda-feira, a IA esquece sua empresa.','E você volta a explicar tudo de novo.',[],notes(opp,2,5)),
 ('COMPARISON','Resposta boa. Operação manual.','', ['A IA responde','Você contextualiza','Você move o trabalho','O aprendizado se perde'],notes(opp,2,5)),
 ('SECTION_BREAK','A mudança','De chatbot para empresa agêntica',[],notes(opp,6,7)),
 ('COMPARISON','Conversa isolada ou operação contínua?','',['Pedido isolado','Time com contexto','Skill aplica método','Loop registra aprendizado'],notes(opp,8,8)),
 ('STATEMENT','Uma empresa agêntica opera áreas inteiras.','Funcionários digitais conhecem o negócio e executam de ponta a ponta.',[],notes(opp,9,11)),
 ('BUILD','A progressão do workshop','',['Tarefa isolada','ContextOS','Zeus','Skills','Loops','Empresa agêntica'],notes(opp,12,12)),
 ('SECTION_BREAK','O patrimônio invisível','Seu negócio já produziu o repertório',[],notes(opp,13,15)),
 ('CONTENT','O sistema nasce de três peças','',['Contexto','Skills','Rotinas'],notes(opp,16,16)),
 ('BUILD','O mapa do dia','',['Conhecer','Orquestrar','Realizar','Evoluir'],notes(opp,17,18)),
 ('STATEMENT','Um negócio. Um produto. Uma campanha.','A profundidade vem de manter o mesmo contexto.',[],notes(opp,19,19)),
 ('CODE','Escolha o caso que atravessará o dia','',['Negócio','Produto','Materiais','Rotina prioritária'],notes(opp,20,24)),
 ('CLOSING','A IA precisa conhecer, executar e continuar.','Depois, ela começa a fazer parte da empresa.',[],notes(opp,25,25)),
]

C=[
 ('TITLE','ContextOS','A camada de contexto do Core AIOS',[],notes(ctx,1,1)),
 ('STATEMENT','Contexto rico separa o genérico do preciso.','Todos os agentes consultam a mesma verdade do negócio.',[],notes(ctx,2,6)),
 ('COMPARISON','Sem contexto você reescreve. Com contexto você revisa.','',['Output genérico','Voz e dados reais','Prova verificável','Continuidade'],notes(ctx,3,6)),
 ('STATEMENT','Zero invenção.','Sem evidência, o campo fica vazio.',[],notes(ctx,6,6)),
 ('SECTION_BREAK','As quatro skills','Um ciclo de completude progressiva',[],notes(ctx,7,10)),
 ('BUILD','Do zero a 95%','',['CREATE · 0%','QUICK · 35%','DEEP · 70%','ENRICH · 95%'],notes(ctx,7,14)),
 ('CONTENT','Cada skill tem uma função','',['Criar estrutura','Preencher o essencial','Aprofundar o negócio','Enriquecer com fontes'],notes(ctx,11,14)),
 ('SECTION_BREAK','Context Create','A estrutura inicial do cérebro',[],notes(ctx,15,20)),
 ('CONTENT','Uma base para cada empresa','',['Inicializar','Adicionar empresa','Definir ativa','Medir saúde'],notes(ctx,15,20)),
 ('BUILD','Do zero até empresa ativa','',['Init','Add business','Set active','Status'],notes(ctx,21,22)),
 ('BUILD','28 templates em sete diretórios','',['Context','Brand DNA','Design System','Culture','Operations','Intelligence','Evidence'],notes(ctx,23,26)),
 ('SECTION_BREAK','Context Quick','O essencial em cerca de 10 minutos',[],notes(ctx,27,37)),
 ('CONTENT','25 perguntas tornam o contexto utilizável','',['Nome e site','Empresa ativa','Respostas em YAML','Resumo de completude'],notes(ctx,28,37)),
 ('BUILD','Quick em quatro passos','',['Ler perguntas','Perguntar','Gravar','Resumir'],notes(ctx,33,37)),
 ('SECTION_BREAK','Context Deep','Profundidade em sessões que continuam',[],notes(ctx,38,49)),
 ('CONTENT','210 perguntas em nove fases','',['Fundador','Empresa e time','ICP','Marca','Oferta'],notes(ctx,38,49)),
 ('COMPARISON','Você controla o ritmo','',['/skip','/skip-phase','/pause','/status'],notes(ctx,42,46)),
 ('STATEMENT','Não faça as nove fases de uma vez.','Trabalhe em sessões de 30 a 40 minutos.',[],notes(ctx,47,49)),
 ('SECTION_BREAK','Context Enrich','Pesquisa pública com fonte e confiança',[],notes(ctx,50,61)),
 ('BUILD','Enriquecimento em quatro etapas','',['Site','Pesquisa pública','Confiança','Síntese'],notes(ctx,50,61)),
 ('COMPARISON','Cada fato precisa de evidência.','',['ALTA · fonte oficial','MÉDIA · mídia reconhecida','BAIXA · agregador','Sem fonte · não entra'],notes(ctx,54,61)),
 ('SECTION_BREAK','Receitas práticas','Escolha profundidade conforme o uso',[],notes(ctx,62,75)),
 ('CONTENT','Quatro cenários reais','',['Nova empresa · 95%','Novo cliente','Projeto pontual','Empresa desatualizada'],notes(ctx,62,75)),
 ('SECTION_BREAK','Diagnóstico','Status antes de pedir socorro',[],notes(ctx,76,93)),
 ('CONTENT','Seis erros comuns têm caminho claro','',['Empresa não ativa','Template ausente','Website ausente','Cache não retoma','Dúvida sobre ativa','Local dos YAMLs'],notes(ctx,76,93)),
 ('CONTENT','Os cinco princípios do ContextOS','',['Zero invenção','Pause e retome','Multiempresa','Completude progressiva','Fonte verificável'],notes(ctx,94,97)),
 ('CLOSING','Contexto vira combustível.','Agora todos os agentes trabalham sobre a mesma verdade.',[],notes(ctx,98,100)),
]

CSS='''@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;700;900&family=Geist+Mono:wght@400;500;700&display=swap');:root{--d:#050505;--l:#2B7DE1;--c:#FFFDD0;--m:#999;--s:#101010;--b:#292929}*{box-sizing:border-box}html,body{margin:0;background:#000;color:var(--c);font-family:Geist,Arial,sans-serif;overflow:hidden}.slide{position:absolute;inset:0;display:none;background:var(--d);overflow:hidden}.slide.active{display:block}.slide:before{content:'';position:absolute;inset:0;background:linear-gradient(#ffffff05 1px,transparent 1px),linear-gradient(90deg,#ffffff05 1px,transparent 1px);background-size:64px 64px}.meta{position:absolute;top:4vh;left:7vw;right:7vw;display:flex;justify-content:space-between;font:500 15px Geist Mono;color:var(--m);letter-spacing:.15em}.wm{position:absolute;right:6vw;top:9vh;font:900 18vw Geist;color:#fffdd006}.corner{position:absolute;width:38px;height:38px}.tl{top:2.3vh;left:2vw;border-top:2px solid var(--l);border-left:2px solid var(--l)}.br{right:2vw;bottom:2.3vh;border-right:2px solid var(--l);border-bottom:2px solid var(--l)}main{position:absolute;inset:13vh 7vw 11vh;display:flex;flex-direction::column;flex-direction:column;justify-content:center}.tag{font:500 17px Geist Mono;color:var(--l);letter-spacing:.14em;margin-bottom:3vh}h1{font-size:clamp(54px,4.6vw,88px);line-height:.93;letter-spacing:-.05em;max-width:86%;margin:0 0 5vh;font-weight:900}.sub{font-size:clamp(25px,2vw,38px);line-height:1.25;color:var(--m);max-width:70%;margin:0}.hero,.statement{font-size:clamp(68px,7.6vw,146px);line-height:.84;letter-spacing:-.065em;font-weight:900;max-width:91%}.hero span{color:var(--l)}.section{font-size:clamp(84px,8.5vw,164px);line-height:.82;font-weight:900;letter-spacing:-.07em;color:var(--l)}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:1.2vw;width:100%}.card{background:var(--s);border-top:6px solid var(--l);min-height:21vh;padding:2.2vw;display:flex;flex-direction:column;gap:4vh}.card i{font:500 15px Geist Mono;color:var(--l);font-style:normal}.card strong{font-size:clamp(25px,1.8vw,35px);line-height:1}.flow{display:flex;width:100%;border-top:6px solid var(--l)}.step{flex:1;min-height:19vh;border-right:1px solid var(--b);padding:2.6vh 1.5vw;display:flex;flex-direction:column;gap:4vh}.step i{font:500 15px Geist Mono;color:var(--l);font-style:normal}.step strong{font-size:clamp(21px,1.45vw,30px)}.compare{display:grid;grid-template-columns:1fr 1fr;gap:2vw}.compare>div{background:var(--s);border-top:6px solid #555;min-height:26vh;padding:3vh 3vw}.compare>div:last-child{border-color:var(--l)}.compare b{font:500 15px Geist Mono;color:var(--l);letter-spacing:.14em}.compare p{font-size:clamp(27px,2vw,40px);font-weight:700;line-height:1.12}footer{position:absolute;bottom:3.5vh;left:7vw;right:7vw;border-top:1px solid var(--b);padding-top:1.4vh;display:grid;grid-template-columns:1fr auto 1fr;font:500 13px Geist Mono;color:#777;letter-spacing:.13em}footer span:last-child{text-align:right}.notes{display:none;position:absolute;left:7vw;right:7vw;bottom:9vh;background:#111;border:1px solid var(--l);padding:2vh 2vw;font-size:18px;line-height:1.4;z-index:9;max-height:30vh;overflow:auto}.show-notes .notes{display:block}.hint{position:fixed;right:1vw;top:46%;font:12px Geist Mono;color:#777;writing-mode:vertical-rl;z-index:20}.slide.active main>*{animation:up .5s ease both}.slide.active main>*:nth-child(2){animation-delay:.1s}.slide.active main>*:nth-child(3){animation-delay:.18s}@keyframes up{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}'''

def render(name,title,deck,source_id):
 ss=[]; mapping=[]
 for i,(typ,tit,sub,items,note) in enumerate(deck,1):
  n=f'{i:02}'
  if typ=='TITLE': body=f'<div class="hero">{html.escape(tit).replace(" "," <span>",1)}</span></div><p class="sub">{html.escape(sub)}</p>'
  elif typ=='SECTION_BREAK': body=f'<div class="tag">PARTE {n}</div><div class="section">{html.escape(tit)}</div><p class="sub">{html.escape(sub)}</p>'
  elif typ=='STATEMENT': body=f'<div class="statement">{html.escape(tit)}</div><p class="sub">{html.escape(sub)}</p>'
  elif typ=='BUILD': body=f'<div class="tag">[{n}] — PROGRESSÃO</div><h1>{html.escape(tit)}</h1><div class="flow">'+''.join(f'<div class="step"><i>{j:02}</i><strong>{html.escape(x)}</strong></div>' for j,x in enumerate(items,1))+'</div>'
  elif typ=='COMPARISON':
   mid=(len(items)+1)//2;a=items[:mid];b=items[mid:]
   body=f'<div class="tag">[{n}] — COMPARAÇÃO</div><h1>{html.escape(tit)}</h1><div class="compare"><div><b>SEM SISTEMA</b><p>{"<br>".join(map(html.escape,a))}</p></div><div><b>COM SISTEMA</b><p>{"<br>".join(map(html.escape,b))}</p></div></div>'
  elif typ=='CLOSING': body=f'<div class="statement">{html.escape(tit)}</div><p class="sub">{html.escape(sub)}</p>'
  else: body=f'<div class="tag">[{n}] — {typ}</div><h1>{html.escape(tit)}</h1><div class="grid">'+''.join(f'<div class="card"><i>{j:02}</i><strong>{html.escape(x)}</strong></div>' for j,x in enumerate(items,1))+'</div>'
  ss.append(f'<section class="slide" id="S{n}"><div class="meta"><span>COREAI // {html.escape(title.upper())}</span><span>PALCO / 2026</span></div><div class="corner tl"></div><div class="corner br"></div><div class="wm">{n}</div><main>{body}</main><footer><span>WORKSHOP TIMES DE IA</span><span>{n} / {len(deck):02}</span><span>JULIANO TORRIANI</span></footer><aside class="notes">{html.escape(note)}</aside></section>')
  mapping.append({'slide':i,'type':typ,'title':tit,'source_lesson':source_id,'speaker_notes':note})
 js="""const s=[...document.querySelectorAll('.slide')];let i=Math.max(0,(parseInt(location.hash.slice(2))||1)-1);function sh(n){i=(n+s.length)%s.length;s.forEach((x,j)=>x.classList.toggle('active',j===i));history.replaceState(null,'','#S'+String(i+1).padStart(2,'0'))}addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key))sh(i+1);if(['ArrowLeft','PageUp'].includes(e.key))sh(i-1);if(e.key.toLowerCase()==='n')s[i].classList.toggle('show-notes');if(e.key.toLowerCase()==='f')document.documentElement.requestFullscreen?.()});addEventListener('hashchange',()=>sh(Math.max(0,(parseInt(location.hash.slice(2))||1)-1)));sh(i);"""
 doc=f'<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{html.escape(title)}</title><style>{CSS}</style></head><body>{"".join(ss)}<div class="hint">← → · N notas · F tela cheia</div><script>{js}</script></body></html>'
 (ROOT/f'{name}.html').write_text(doc)
 (ROOT/f'{name}-map.json').write_text(json.dumps(mapping,ensure_ascii=False,indent=2))
 return len(deck)

print('opportunity',render('a-oportunidade','A Oportunidade',O,'w00-boas-vindas'))
print('contextos',render('contextos','ContextOS',C,'495a3982-0c8d-4366-9001-395afd1c9c1c / bonus-2'))
