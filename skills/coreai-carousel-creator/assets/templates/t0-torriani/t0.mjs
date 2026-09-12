#!/usr/bin/env node
/**
 * T0 portável v2, template mestre de carrossel.
 *
 * Padrão visual: @brandsdecoded__ (referência aprovada pelo founder em 24/08),
 * adaptado ao DS AZUL do portável. Acento azul definido pela marca, nunca o vermelho deles.
 *
 * Distribuição de imagem, decisão explícita do founder:
 *   capa    = retrato de pessoa real ocupando o quadro
 *   internas= fundo sólido, sem foto, com cartão de prova real opcional
 *
 * Interface preservada do v1: um array de slides
 *   { n, kind: 'cover'|'content'|'cta', title, body, image, ... }
 * continua funcionando, então o pipeline existente não quebra.
 *
 * Campos novos, todos opcionais:
 *   accent    trecho do título que recebe a cor de acento
 *   kicker    linha de apoio da capa, com seta
 *   proof     caminho de um print de tela, vira cartão de prova
 *   list      array de itens, cada um string ou { text }
 *   retrato   caminho do retrato da capa (aceita foto de terceiros)
 *   avatar    avatar do bloco de assinatura
 *
 * Uso como módulo:
 *   import { buildSlide, buildDeck } from './t0.mjs';
 * Uso por linha de comando:
 *   node t0.mjs slides.json ./saida
 */

import fs from 'fs';
import {options,requireContext} from '../../../scripts/context-gate.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const FONT_FACES = '';
const css = () => fs.readFileSync(path.join(__dirname, 't0.css'), 'utf-8');

const SELO = `<svg viewBox="0 0 24 24"><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"/></svg>`;

/** Aplica a cor de acento no trecho indicado, preservando o resto do texto. */
function comAcento(texto, trecho) {
  const base = esc(texto);
  if (!trecho) return base;
  const alvo = esc(trecho);
  const i = base.toLowerCase().indexOf(alvo.toLowerCase());
  if (i === -1) return base;
  return base.slice(0, i) + `<span class="accent">` + base.slice(i, i + alvo.length) + `</span>` + base.slice(i + alvo.length);
}

/* ── Ajuste tipográfico ────────────────────────────────────────────────────────
   A Fixture Condensed é estreita: a cada 100px de corpo cabem cerca de 21
   caracteres na largura útil de 968px. Frases longas encolhem para não estourar
   a caixa, que é o defeito que o founder pegou na versão anterior. */

function escala(texto, base, charsPorLinha, linhasCabem, minimo) {
  const linhas = Math.ceil(String(texto || '').length / charsPorLinha);
  if (linhas <= linhasCabem) return base;
  return Math.max(minimo, Math.round(base * (linhasCabem / linhas)));
}

export const headlineFontSize = (t) => escala(t, 108, 20, 4, 56);
export const tituloFontSize = (t) => escala(t, 104, 21, 4, 54);
export const ctaFontSize = (t) => escala(t, 112, 19, 4, 56);

/** Barra superior: um único rótulo à esquerda, com o tema ou campanha da peça.
    Decisão do founder em 24/08: sem handle no centro e sem marcador de ano.
    O bloco de assinatura da capa continua trazendo o handle. */
function topbar(slide) {
  return `<div class="t0-topbar">
    <span class="meta">${esc(slide?.rotulo || '')}</span>
  </div>`;
}

function progresso(n, total) {
  const pct = Math.round((n / total) * 100);
  return `<div class="t0-progress">
    <div class="track"><div class="fill" style="width:${pct}%;"></div></div>
    <span class="count">${n}/${total}</span>
  </div>`;
}

function blocoTexto(slide, comFoto = false) {
  const partes = [];
  if (slide.title) {
    // Com foto, a metade inferior é menor: o corpo base cai e cabem 3 linhas.
    const corpo = comFoto ? escala(slide.title, 84, 26, 3, 48) : tituloFontSize(slide.title);
    partes.push(`<div class="t0-title" style="font-size:${corpo}px;">${comAcento(slide.title, slide.accent)}</div>`);
  }
  if (slide.body && slide.body.trim()) {
    partes.push(`<div class="t0-text">${slide.bodyHtml ? slide.body : esc(slide.body)}</div>`);
  }
  if (slide.proof) {
    partes.push(`<div class="t0-proof"><img src="file://${slide.proof}" alt=""></div>`);
  }
  if (Array.isArray(slide.list) && slide.list.length) {
    const itens = slide.list.map((it) => {
      const texto = typeof it === 'string' ? it : it.text;
      return `<div class="item"><span class="mark">&check;</span><span>${esc(texto)}</span></div>`;
    }).join('');
    partes.push(`<div class="t0-list">${itens}</div>`);
  }
  // Diagrama "antes e depois": dois blocos com seta no meio, desenhados em HTML.
  // Entra por slide via `diagram`, nunca por padrão. Não usa imagem externa.
  if (slide.diagram) {
    partes.push(diagrama(slide.diagram));
  }
  return partes.join('\n    ');
}

/**
 * Diagrama de contraste, a gramática visual do carrossel: ANTES → DEPOIS.
 * @param {{antes:{rotulo:string,itens:string[],forma?:string},
 *          depois:{rotulo:string,itens:string[],forma?:string}}} d
 */
function diagrama(d) {
  const lado = (l, tipo) => {
    const itens = (l.itens || []).map((t) => `<span class="d-chip">${esc(t)}</span>`).join('');
    return `<div class="d-lado ${tipo}">
      <div class="d-rotulo">${esc(l.rotulo || '')}</div>
      <div class="d-forma">${forma(l.forma, tipo)}</div>
      <div class="d-chips">${itens}</div>
    </div>`;
  };
  return `<div class="t0-diagrama">
    ${lado(d.antes, 'antes')}
    <div class="d-seta"><svg viewBox="0 0 40 24" width="40" height="24" aria-hidden="true">
      <path d="M2 12h30M26 5l8 7-8 7" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg></div>
    ${lado(d.depois, 'depois')}
  </div>`;
}

/** Formas do diagrama, todas em SVG inline: nada de imagem de banco. */
function forma(nome, tipo) {
  const cor = tipo === 'depois' ? 'var(--accent)' : 'var(--meta)';
  const op = tipo === 'depois' ? '1' : '.55';
  const S = (inner, vb = '0 0 120 90') =>
    `<svg viewBox="${vb}" width="100%" height="100%" style="color:${cor};opacity:${op}">${inner}</svg>`;

  switch (nome) {
    case 'predio': // corporativo cheio de andares e gente
      return S(`<g fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 78h76M28 78V22h64v56"/>
        <path d="M28 36h64M28 50h64M28 64h64"/>
        <path d="M60 22V14"/></g>
        <g fill="currentColor">${
          Array.from({length:15},(_,i)=>{
            const x = 36 + (i%5)*13;
            const y = 31 + Math.floor(i/5)*14;
            return `<circle cx="${x}" cy="${y}" r="2.6"/>`;
          }).join('')
        }</g>`);
    case 'nucleo': // time pequeno no centro, agentes em volta
      return S(`<g fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 4">
        <circle cx="60" cy="45" r="33"/></g>
        <g fill="currentColor">
        <circle cx="52" cy="42" r="4"/><rect x="48" y="48" width="8" height="11" rx="3.4"/>
        <circle cx="68" cy="42" r="4"/><rect x="64" y="48" width="8" height="11" rx="3.4"/></g>
        <g fill="none" stroke="currentColor" stroke-width="2">
        <rect x="53" y="3" width="14" height="11" rx="3"/>
        <rect x="93" y="24" width="14" height="11" rx="3"/>
        <rect x="93" y="56" width="14" height="11" rx="3"/>
        <rect x="53" y="77" width="14" height="11" rx="3"/>
        <rect x="13" y="56" width="14" height="11" rx="3"/>
        <rect x="13" y="24" width="14" height="11" rx="3"/></g>`);
    case 'piramide': // hierarquia cheia de camadas
      return S(`<g fill="none" stroke="currentColor" stroke-width="2">
        <path d="M60 12 L96 76 L24 76 Z"/>
        <path d="M42 44h36M33 60h54"/></g>
        <g fill="currentColor"><circle cx="60" cy="24" r="3"/>
        <circle cx="50" cy="40" r="3"/><circle cx="70" cy="40" r="3"/>
        <circle cx="40" cy="56" r="3"/><circle cx="60" cy="56" r="3"/><circle cx="80" cy="56" r="3"/>
        <circle cx="34" cy="71" r="3"/><circle cx="49" cy="71" r="3"/><circle cx="60" cy="71" r="3"/><circle cx="71" cy="71" r="3"/><circle cx="86" cy="71" r="3"/></g>`);
    case 'rede': // time pequeno cercado de agentes
      return S(`<g fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="3 4">
        <circle cx="60" cy="45" r="30"/></g>
        <g fill="currentColor"><circle cx="52" cy="45" r="4"/><circle cx="68" cy="45" r="4"/></g>
        <g fill="none" stroke="currentColor" stroke-width="2">
        <rect x="26" y="18" width="14" height="11" rx="3"/><rect x="80" y="18" width="14" height="11" rx="3"/>
        <rect x="26" y="61" width="14" height="11" rx="3"/><rect x="80" y="61" width="14" height="11" rx="3"/>
        <rect x="53" y="6" width="14" height="11" rx="3"/><rect x="53" y="73" width="14" height="11" rx="3"/></g>`);
    case 'multidao': // muita gente
      return S(`<g fill="currentColor">${
        Array.from({ length: 18 }, (_, i) => {
          const x = 16 + (i % 6) * 18;
          const y = 24 + Math.floor(i / 6) * 22;
          return `<circle cx="${x}" cy="${y}" r="4"/><rect x="${x - 5}" y="${y + 6}" width="10" height="12" rx="4"/>`;
        }).join('')
      }</g>`);
    case 'poucos': // time enxuto
      return S(`<g fill="currentColor">${
        Array.from({ length: 4 }, (_, i) => {
          const x = 30 + i * 20;
          return `<circle cx="${x}" cy="36" r="6"/><rect x="${x - 7}" y="45" width="14" height="18" rx="6"/>`;
        }).join('')
      }</g>`);
    case 'relogio-lento':
      return S(`<g fill="none" stroke="currentColor" stroke-width="2.4">
        <circle cx="60" cy="46" r="26"/><path d="M60 46V28M60 46l14 9"/>
        <path d="M52 12h16"/></g>`);
    case 'raio':
      return S(`<path d="M66 10 L38 50h18l-6 32 30-44H62z" fill="currentColor"/>`);
    case 'navio':
      return S(`<g fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 60h92l-10 16H24z"/><path d="M28 60V38h56v22"/>
        <path d="M40 38V26h8v12M60 38V22h8v16"/></g>`);
    case 'lancha':
      return S(`<g fill="none" stroke="currentColor" stroke-width="2.4">
        <path d="M22 58h72l-12 14H32z"/><path d="M44 58V46h26l8 12"/>
        <path d="M10 76c14-6 26-6 40 0M14 66c8-4 16-4 24 0"/></g>`);
    case 'castelo-seco':
      return S(`<g fill="none" stroke="currentColor" stroke-width="2">
        <path d="M38 72V40h44v32z"/><path d="M38 40v-8h8v5h8v-5h8v5h8v-5h8v8"/>
        <path d="M54 72V56h12v16"/><ellipse cx="60" cy="76" rx="42" ry="7"/></g>`);
    case 'castelo-fosso':
      return S(`<g fill="none" stroke="currentColor" stroke-width="2">
        <path d="M38 68V36h44v32z"/><path d="M38 36v-8h8v5h8v-5h8v5h8v-5h8v8"/>
        <path d="M54 68V52h12v16"/><ellipse cx="60" cy="74" rx="46" ry="9"/><ellipse cx="60" cy="74" rx="34" ry="6"/></g>
        <g fill="currentColor"><path d="M60 40l5 3v6l-5 3-5-3v-6z"/></g>`);
    case 'papelada':
      return S(`<g fill="none" stroke="currentColor" stroke-width="2">
        <rect x="24" y="52" width="30" height="24" rx="2"/><rect x="30" y="42" width="30" height="24" rx="2"/>
        <rect x="66" y="56" width="30" height="20" rx="2"/><rect x="60" y="44" width="30" height="20" rx="2"/>
        <path d="M40 20l10 10-10 10-10-10z"/></g>`);
    case 'ciclo':
      return S(`<g fill="none" stroke="currentColor" stroke-width="2.4">
        <path d="M60 18a28 28 0 1 1-24 14" stroke-linecap="round"/>
        <path d="M52 10l10 8-10 8" stroke-linecap="round" stroke-linejoin="round"/></g>
        <g fill="currentColor"><circle cx="60" cy="46" r="4"/></g>`);
    default:
      return S(`<rect x="26" y="24" width="68" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="2"/>`);
  }
}

/**
 * Monta o markup de um slide.
 * @param {object} slide
 * @param {number} total total de slides, usado no contador do rodapé
 */
export function buildSlide(slide, total = 10) {
  // Variante de capa sem retrato: rótulo no topo, headline gigante e diagrama
  // grande na metade inferior. Para peça de tese, quando a foto do founder não
  // entra (já usada em outra campanha, ou o assunto não pede pessoa).
  if (slide.kind === 'cover' && slide.diagram && !slide.retrato && !slide.image) {
    const avatar = slide.avatar;
    return `<div class="si">
  <div class="t0-cover-bg"></div>
  ${topbar(slide)}
  <div class="t0-cover-tese">
    ${slide.eyebrow ? `<div class="t0-eyebrow">${esc(slide.eyebrow)}</div>` : ''}
    <div class="t0-headline" style="font-size:${headlineFontSize(slide.title)}px;">${comAcento(slide.title, slide.accent)}</div>
    ${slide.kicker ? `<div class="t0-kicker"><span class="arrow">&rarr;</span><span>${esc(slide.kicker)}</span></div>` : ''}
    <div class="t0-cover-diagrama">${diagrama(slide.diagram)}</div>
    <div class="t0-signature capa-tese">
      ${avatar ? `<img src="file://${avatar}" alt="">` : ''}
      <span class="handle">${esc(slide.handle || '')}</span>
      ${slide.verified === true ? SELO : ''}
    </div>
  </div>
</div>`;
  }

  if (slide.kind === 'cover') {
    const retrato = slide.retrato || slide.image;
    const avatar = slide.avatar;
    // Assinatura, headline e kicker empilhados no rodapé, em fluxo: o navegador
    // resolve a altura real da headline e nada se sobrepõe.
    return `<div class="si">
  <div class="t0-cover-bg"></div>
  ${retrato ? `<img class="t0-cover-photo" src="file://${retrato}" alt="">` : ''}
  <div class="t0-cover-veil"></div>
  ${topbar(slide)}
  <div class="t0-cover-foot">
    <div class="t0-signature">
      ${avatar ? `<img src="file://${avatar}" alt="">` : ''}
      <span class="handle">${esc(slide.handle || '')}</span>
      ${slide.verified === true ? SELO : ''}
    </div>
    <div class="t0-headline" style="font-size:${headlineFontSize(slide.title)}px;">${comAcento(slide.title, slide.accent)}</div>
    ${slide.kicker ? `<div class="t0-kicker"><span class="arrow">&rarr;</span><span>${esc(slide.kicker)}</span></div>` : ''}
  </div>
</div>`;
  }

  if (slide.kind === 'cta') {
    return `<div class="si">
  ${topbar(slide)}
  <div class="t0-cta-wrap">
    <div class="t0-cta-rule"></div>
    <div class="t0-cta-title" style="font-size:${ctaFontSize(slide.title)}px;">${comAcento(slide.title, slide.accent)}</div>
    ${slide.body && slide.body.trim() ? `<div class="t0-text">${esc(slide.body)}</div>` : ''}
  </div>
  ${progresso(slide.n, total)}
</div>`;
  }

  // Variante A: interna com foto de cena. Exceção pedida por slide via `scene`,
  // nunca o padrão. Serve para ilustrar a cena de que o texto fala.
  const cena = slide.scene;
  return `<div class="si">
  ${cena ? `<div class="t0-scene"><img src="file://${cena}" alt=""></div>` : ''}
  ${topbar(slide)}
  ${cena && slide.sceneCaption ? `<div class="t0-scene-caption">${esc(slide.sceneCaption)}</div>` : ''}
  <div class="t0-body-wrap${cena ? ' com-foto' : ''}">
    ${blocoTexto(slide, Boolean(cena))}
  </div>
  ${progresso(slide.n, total)}
</div>`;
}

/** Envolve o markup de um slide numa página de 1080x1350. */
export function wrap(inner) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<style>
${FONT_FACES}
${css()}
</style>
</head>
<body>${inner}</body>
</html>`;
}

/** Escreve um deck inteiro de HTMLs em outDir e devolve os caminhos gerados. */
export function buildDeck(slides, outDir, context) {
  requireContext({...context,output:outDir});
  fs.mkdirSync(outDir, { recursive: true });
  const total = slides.length;
  return slides.map((s) => {
    const file = path.join(outDir, `slide-${String(s.n).padStart(2, '0')}.html`);
    requireContext({...context,output:file});
    const html = wrap(buildSlide(s, total));
    const accent = s.brand?.accent;
    if (!/^#[0-9a-f]{6}$/i.test(accent || '')) throw new Error('Cada slide precisa brand.accent hexadecimal');
    fs.writeFileSync(file, html.replace('</style>', `:root{--accent:${accent};--flare:${accent}}\n</style>`), {flag:'wx'});
    return file;
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  const jsonPath = process.argv[2];
  const context = options();const outDir=context.output;
  requireContext(context);
  if (!jsonPath || !outDir) {
    console.log('Uso: node t0.mjs <slides.json> <pasta-saida>');
    process.exit(1);
  }
  const files = buildDeck(JSON.parse(fs.readFileSync(jsonPath, 'utf-8')), outDir, context);
  console.log(`${files.length} slides HTML escritos em ${outDir}`);
}
