#!/usr/bin/env python3
import json, html
from pathlib import Path

ROOT=Path(__file__).resolve().parent
SOURCE=ROOT.parent/'deck-spec.json'
slides=json.loads(SOURCE.read_text())

type_map={'title':'TITLE','section':'SECTION_BREAK','break':'SECTION_BREAK','statement':'STATEMENT','comparison':'COMPARISON','cards':'CONTENT','timeline':'BUILD','demo':'CODE','proof':'BUILD','cta':'CLOSING','closing':'CLOSING'}

canonical={"presentation":{"title":"Workshop Times de IA","subtitle":"Da primeira tarefa automatizada a uma empresa agêntica","author":"Juliano Torriani","date":"2026-09-12","mode":"palco","format":"technical","aspect_ratio":"16:9","brand":{"name":"CoreAI / Torriani","color":{"bg_primary":"#050505","bg_accent":"#2B7DE1","surface":"#111111","text_primary":"#FFFDD0","text_secondary":"#999999","accent":"#2B7DE1","border":"#2A2A2A","warning":"#FF5F42"},"font":{"sans":"Geist, Arial, sans-serif","mono":"Geist Mono, monospace"}},"slides":[]}}

def esc(s): return html.escape(str(s))
def words(s): return len(str(s).replace('·',' ').replace('|',' ').split())

sections=[]
for i,s in enumerate(slides,1):
    typ=type_map.get(s['function'],'CONTENT')
    title=s['visible_copy'][0]
    sub=s['visible_copy'][1] if len(s['visible_copy'])>1 else ''
    canonical['presentation']['slides'].append({"id":f"slide-{i:03}","type":typ,"title":title,"content":{"title":title,"subtitle":sub},"layout":"full_center" if typ in ('TITLE','SECTION_BREAK','STATEMENT','CLOSING') else "left_aligned","decoratives":["MetaBar","WatermarkNumber","PageFooter","SectionTag"],"animation":{"preset":"fadeUp","delay":0.1},"speaker_notes":s['speaker_notes'],"duration_s":15 if typ in ('TITLE','SECTION_BREAK','STATEMENT') else 35})

    label=f"COREAI // WORKSHOP TIMES DE IA"
    n=f"{i:02}"
    tag=f"[{n}] — {typ.replace('_',' ')}"
    parts=[]
    if typ=='TITLE':
        a=title.split(' ',1); lead=a[0]; rest=a[1] if len(a)>1 else ''
        body=f'<div class="hero"><div>{esc(lead)}</div><div class="lime">{esc(rest)}</div></div><p class="subtitle">{esc(sub)}</p>'
    elif typ=='SECTION_BREAK':
        body=f'<div class="section-num">{n}</div><div class="section-label">PARTE {n}</div><h1 class="section-title">{esc(title)}</h1><p class="subtitle">{esc(sub)}</p>'
    elif typ=='STATEMENT':
        body=f'<div class="statement">{esc(title)}</div><div class="rule"></div><p class="subtitle">{esc(sub)}</p>'
    elif typ=='COMPARISON':
        vals=[x.strip() for x in sub.split('|')]
        if len(vals)<2: vals=[sub,'']
        body=f'<div class="tag">{tag}</div><h1>{esc(title)}</h1><div class="compare"><div><b>ANTES</b><span>{esc(vals[0])}</span></div><div class="positive"><b>DEPOIS</b><span>{esc(vals[1])}</span></div></div>'
    elif typ=='BUILD':
        vals=[x.strip() for x in sub.replace('→','·').split('·') if x.strip()]
        steps=''.join(f'<div class="step"><i>{j:02}</i><span>{esc(v)}</span></div>' for j,v in enumerate(vals,1))
        body=f'<div class="tag">{tag}</div><h1>{esc(title)}</h1><div class="steps">{steps}</div>'
    elif typ=='CODE':
        body=f'<div class="tag">{tag}</div><h1>{esc(title)}</h1><div class="mission"><span>MISSÃO PARA O AGENTE</span><strong>{esc(sub)}</strong></div>'
    elif typ=='CLOSING':
        body=f'<div class="closing">{esc(title)}</div><p class="subtitle">{esc(sub)}</p><div class="closing-mark">COREAI.</div>'
    else:
        vals=[x.strip() for x in sub.split('|') if x.strip()]
        cards=''.join(f'<div class="card"><i>{j:02}</i><strong>{esc(v)}</strong></div>' for j,v in enumerate(vals,1))
        body=f'<div class="tag">{tag}</div><h1>{esc(title)}</h1><div class="cards">{cards}</div>'
    sections.append(f'''<section class="slide" id="S{n}" data-index="{i-1}" data-type="{typ}">
      <div class="meta"><span>{label}</span><span>PALCO / 2026</span></div><div class="corner tl"></div><div class="corner br"></div><div class="watermark">{n}</div>
      <main>{body}</main><footer><span>WORKSHOP TIMES DE IA</span><span>{n} / {len(slides):02}</span><span>JULIANO TORRIANI</span></footer>
      <aside class="notes"><b>NOTAS DO APRESENTADOR</b>{esc(s['speaker_notes'])}</aside>
    </section>''')

css='''
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;700;900&family=Geist+Mono:wght@400;500;700&display=swap');
:root{--dark:#050505;--lime:#2B7DE1;--cream:#FFFDD0;--dim:#999;--surface:#101010;--border:#2A2A2A}*{box-sizing:border-box}html,body{margin:0;background:#000;color:var(--cream);font-family:Geist,Arial,sans-serif;overflow:hidden}.slide{position:absolute;inset:0;width:100vw;height:100vh;background:var(--dark);display:none;overflow:hidden}.slide.active{display:block}.slide:before{content:'';position:absolute;inset:0;background:linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);background-size:64px 64px;mask-image:linear-gradient(to bottom,transparent,#000 20%,#000 80%,transparent)}main{position:absolute;inset:12vh 7vw 10vh;display:flex;flex-direction:column;justify-content:center;z-index:2}.meta{position:absolute;top:4.2vh;left:7vw;right:7vw;display:flex;justify-content:space-between;font:500 clamp(13px,.75vw,16px) Geist Mono;color:var(--dim);letter-spacing:.16em;z-index:3}.tag,.section-label{font:500 clamp(15px,.9vw,18px) Geist Mono;color:var(--lime);letter-spacing:.14em;margin-bottom:3vh}h1{font-size:clamp(48px,4vw,78px);line-height:.95;letter-spacing:-.045em;max-width:78%;margin:0 0 6vh;font-weight:900}.hero{font-size:clamp(72px,8.4vw,162px);line-height:.78;font-weight:900;letter-spacing:-.07em;text-transform:uppercase}.lime{color:var(--lime)}.subtitle{font-size:clamp(24px,2vw,38px);line-height:1.25;max-width:67%;color:var(--dim);margin:5vh 0 0}.statement,.closing{font-size:clamp(60px,6.8vw,130px);line-height:.88;font-weight:900;letter-spacing:-.06em;max-width:88%}.rule{width:11vw;height:8px;background:var(--lime);margin-top:5vh}.section-num{position:absolute;right:0;top:50%;transform:translateY(-50%);font:900 clamp(260px,31vw,600px)/1 Geist;color:rgba(209,255,0,.07)}.section-title{font-size:clamp(76px,7.7vw,148px);max-width:72%;margin:0}.compare{display:grid;grid-template-columns:1fr 1fr;gap:2vw;width:100%}.compare>div{border-top:6px solid #555;padding:4vh 3vw;background:var(--surface);min-height:28vh;display:flex;flex-direction:column;gap:4vh}.compare .positive{border-color:var(--lime)}.compare b{font:500 18px Geist Mono;letter-spacing:.2em;color:var(--dim)}.compare .positive b{color:var(--lime)}.compare span{font-size:clamp(34px,3vw,58px);font-weight:700;line-height:1.05}.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.3vw}.card{min-height:20vh;border:1px solid var(--border);background:var(--surface);padding:2.5vw;display:flex;flex-direction:column;justify-content:space-between}.card i,.step i{font:500 17px Geist Mono;color:var(--lime);font-style:normal}.card strong{font-size:clamp(27px,2vw,40px);line-height:1}.steps{display:flex;align-items:stretch;width:100%;gap:0}.step{flex:1;border-top:6px solid var(--lime);padding:3vh 1.7vw;border-right:1px solid var(--border);min-height:18vh;display:flex;flex-direction:column;gap:4vh}.step span{font-size:clamp(22px,1.7vw,34px);font-weight:700}.mission{border-left:9px solid var(--lime);background:var(--surface);padding:4vh 4vw;display:flex;flex-direction:column;gap:3vh;max-width:83%}.mission span{font:500 16px Geist Mono;color:var(--lime);letter-spacing:.16em}.mission strong{font-size:clamp(32px,2.8vw,54px);line-height:1.12}.closing-mark{font:900 20px Geist Mono;color:var(--lime);margin-top:8vh;letter-spacing:.18em}footer{position:absolute;bottom:3.5vh;left:7vw;right:7vw;border-top:1px solid var(--border);padding-top:1.5vh;display:grid;grid-template-columns:1fr auto 1fr;gap:3vw;color:#777;font:500 13px Geist Mono;letter-spacing:.14em;z-index:3}footer span:last-child{text-align:right}.watermark{position:absolute;right:6vw;top:8vh;font:900 18vw/1 Geist;color:rgba(255,253,208,.025)}.corner{position:absolute;width:38px;height:38px;z-index:4}.corner.tl{top:2.3vh;left:2vw;border-top:2px solid var(--lime);border-left:2px solid var(--lime)}.corner.br{bottom:2.3vh;right:2vw;border-bottom:2px solid var(--lime);border-right:2px solid var(--lime)}.notes{display:none;position:absolute;left:7vw;right:7vw;bottom:9vh;background:#111;border:1px solid var(--lime);padding:2vh 2vw;color:#ddd;font:18px/1.45 Geist;z-index:8}.notes b{display:block;color:var(--lime);font:500 13px Geist Mono;letter-spacing:.15em;margin-bottom:1vh}.show-notes .notes{display:block}.hud{position:fixed;right:1vw;top:50%;transform:translateY(-50%);z-index:20;color:#888;font:12px Geist Mono;writing-mode:vertical-rl}.slide.active main>*:not(.section-num){animation:up .55s cubic-bezier(.25,.1,.25,1) both}.slide.active main>*:not(.section-num):nth-child(2){animation-delay:.1s}.slide.active main>*:not(.section-num):nth-child(3){animation-delay:.2s}@keyframes up{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){*{animation:none!important}}
'''

doc=f'''<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Workshop Times de IA — Brandbook</title><style>{css}</style></head><body>{''.join(sections)}<div class="hud">← → N notas · F tela cheia</div><script>
const slides=[...document.querySelectorAll('.slide')];let i=Math.max(0,Math.min(slides.length-1,parseInt(location.hash.slice(2))-1||0));function show(n){{i=(n+slides.length)%slides.length;slides.forEach((s,j)=>s.classList.toggle('active',j===i));history.replaceState(null,'','#S'+String(i+1).padStart(2,'0'))}}addEventListener('keydown',e=>{{if(['ArrowRight','PageDown',' '].includes(e.key))show(i+1);if(['ArrowLeft','PageUp'].includes(e.key))show(i-1);if(e.key.toLowerCase()==='n')slides[i].classList.toggle('show-notes');if(e.key.toLowerCase()==='f')document.documentElement.requestFullscreen?.()}});addEventListener('hashchange',()=>show(parseInt(location.hash.slice(2))-1));show(i);
</script></body></html>'''

(ROOT/'workshop-times-ia-brandbook.html').write_text(doc)
(ROOT/'canonical-deck.json').write_text(json.dumps(canonical,ensure_ascii=False,indent=2))

wc=[]
for i,s in enumerate(slides,1):
    visible=' '.join(s['visible_copy'])
    wc.append({"slide":i,"words":words(visible),"over_15":words(visible)>15,"type":type_map.get(s['function'],'CONTENT')})
(ROOT/'structural-qa.json').write_text(json.dumps({"slide_count":len(slides),"first_type":type_map.get(slides[0]['function']),"last_type":type_map.get(slides[-1]['function']),"speaker_notes":sum(bool(s.get('speaker_notes')) for s in slides),"word_counts":wc},indent=2))
print(f'generated {len(slides)} slides')
