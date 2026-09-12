import fs from 'fs';
import {options,requireContext} from '../../../scripts/context-gate.mjs';
const context=options();requireContext(context);
const D = process.cwd();
const faces = '';

// Titulo com o mesmo peso do slide 1 ate o 10. So encolhe passando de 3 linhas.
function corpo(t){
  const linhas = Math.ceil(t.length / 20);
  // Ate 3 linhas mantem o peso da capa. Acima disso encolhe, com piso de 64px
  // pra titulo de duas frases (slide 6) continuar legivel sem comer a arte.
  return linhas <= 3 ? 108 : Math.max(64, Math.round(108 * (3 / linhas)));
}

function slide({ n, titulo, accent, img, eyebrow, bullets, texto, comparacao, fecho }) {
  const t = titulo.replace(accent, `<span class="ac">${accent}</span>`);
  let bloco = '';
  if (bullets) {
    bloco = `<ul class="bul">` + bullets.map(b =>
      `<li>${b.replace(/\*(.+?)\*/g, '<b>$1</b>')}</li>`
    ).join('') + `</ul>`;
  } else if (comparacao) {
    bloco = `<div class="cmp">` + comparacao.map(c =>
      `<div class="cmp-l"><span class="cmp-t ${c.tom}">${c.rotulo}</span><span class="cmp-x">${c.texto}</span></div>`
    ).join('') + `</div>`;
    if (fecho) bloco += `<p class="fecho">${fecho.replace(/\*(.+?)\*/g, '<b>$1</b>')}</p>`;
  } else if (texto) {
    bloco = `<p class="txt">${texto.replace(/\*(.+?)\*/g, '<b>$1</b>')}</p>`;
  }
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
${faces}
*{margin:0;padding:0;box-sizing:border-box}
body{width:1080px;height:1350px;background:${cor.fundo};font-family:Arial,sans-serif;
     display:flex;flex-direction:column;padding:70px 72px 56px;overflow:hidden}
.handle{font-family:'IBM Plex Mono','SF Mono',monospace;font-size:21px;color:${cor.meta};
        text-align:right;letter-spacing:1px;margin-bottom:34px}
.eyebrow{font-family:'IBM Plex Mono','SF Mono',monospace;font-size:26px;letter-spacing:6px;
         color:${cor.acento};margin-bottom:22px}
.eyebrow b{color:${cor.meta};font-weight:400}
h1{font-family:'Arial Narrow',sans-serif;font-weight:900;font-size:${corpo(titulo)}px;
   line-height:.92;letter-spacing:-1.5px;text-transform:uppercase;color:${cor.texto}}
h1 .ac{color:${cor.acento}}
.bul{list-style:none;margin-top:28px;display:flex;flex-direction:column;gap:15px}
.bul li{font-size:38px;line-height:1.32;color:#1A1A1A;padding-left:26px;position:relative;font-weight:500}
.bul li::before{content:'';position:absolute;left:0;top:13px;width:5px;height:26px;background:${cor.acento};border-radius:2px}
.bul li b{color:${cor.acento};font-weight:700}
.cmp{margin-top:52px;display:flex;flex-direction:column;gap:14px}
.cmp-l{display:flex;gap:14px;align-items:baseline}
.cmp-t{font-family:'IBM Plex Mono','SF Mono',monospace;font-size:26px;letter-spacing:2px;
       padding:7px 0;border-radius:4px;white-space:nowrap;font-weight:700;
       width:168px;flex:none;text-align:center}
.cmp-t.hoje{background:#EDEFF2;color:#5A6A7A}
.cmp-t.amanha{background:${cor.acento};color:#fff}
.cmp-x{font-size:35px;line-height:1.3;color:#1A1A1A;font-weight:500}
.fecho{margin-top:44px;font-size:38px;line-height:1.32;color:${cor.texto};font-weight:700}
.fecho b{color:${cor.acento}}
.txt{margin-top:28px;font-size:38px;line-height:1.35;color:#1A1A1A;font-weight:500}
.txt b{color:${cor.acento};font-weight:700}
.art{flex:1;display:flex;align-items:flex-end;justify-content:center;margin-top:26px;min-height:0}
.art.folgada{margin-top:30px;align-items:center}
.art.folgada img{max-height:84%}
.art img{max-width:100%;max-height:100%;object-fit:contain}
.foot{display:flex;align-items:center;justify-content:space-between;padding-top:14px;
      font-family:'IBM Plex Mono','SF Mono',monospace;font-size:21px;color:${cor.meta};letter-spacing:2px}
.foot .sw{color:${cor.acento}}
</style></head><body>
  <div class="handle">${handle}</div>
  ${eyebrow ? `<div class="eyebrow"><b>[</b> ${eyebrow} <b>]</b></div>` : ''}
  <h1>${t}</h1>
  ${bloco}
  <div class="art${comparacao ? ' folgada' : ''}"><img src="file://${ilustraDir}/${img}"></div>
  <div class="foot"><span>${String(n).padStart(2,'0')}/${total}</span><span class="sw">${n === total ? '[' + handle + ']' : '[ ARRASTA &rarr; ]'}</span></div>
</body></html>`;
}

// Slides e paleta vem de fora: este template nao conhece cliente nenhum.
const args = process.argv.slice(2);
const val = (f) => { const k = args.indexOf(f); return k >= 0 ? args[k + 1] : null; };
const slidesPath = val('--slides');
const ilustraDir = val('--ilustracoes') || D;
const saida      = context.output;
const handle = val('--handle') || '';
const cor        = { acento: val('--acento'), fundo: val('--fundo') || '#FFFFFF',
                     texto: val('--texto') || '#0A0A0A', meta: val('--meta') || '#8A9AAA' };

if (!slidesPath) {
  console.log(`
Montador de carrossel ilustrado (multi-cliente)

  --slides <arquivo.json>   lista de slides (obrigatorio)
  --ilustracoes <pasta>     onde estao os PNG das cenas
  --output <pasta>          onde gravar os HTML
  --acento --fundo --texto --meta   cores (hex), vindas do design system do cliente

Cada slide aceita: n, titulo, accent, img, eyebrow, e UM de:
  bullets: []            lista com marcador
  texto: ''              paragrafo
  comparacao: [] + fecho bloco antes/depois com frase de fecho
Use *trecho* pra destacar no acento.

Regras: references/carrossel-ilustrado.md
`);
  process.exit(0);
}

if (!/^#[0-9a-f]{6}$/i.test(cor.acento || '')) throw new Error('--acento #RRGGBB obrigatório');
const slides = JSON.parse(fs.readFileSync(slidesPath, 'utf-8'));

const total = slides.length;
fs.mkdirSync(saida, { recursive: true });
slides.forEach(s => requireContext({...context,output:`${saida}/slide-${String(s.n).padStart(2,'0')}.html`}));
slides.forEach(s => fs.writeFileSync(`${saida}/slide-${String(s.n).padStart(2,'0')}.html`, slide(s), {flag:'wx'}));
console.log(slides.length + ' slides com texto escritos');
