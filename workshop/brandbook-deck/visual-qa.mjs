import { chromium } from '/Users/julianotorriani/.agents/skills/coreai-carousel-creator/node_modules/playwright-core/index.mjs';
import fs from 'node:fs';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1920,height:1080}});
const url='file:///Users/julianotorriani/claude/agentesIA/workshop/brandbook-deck/workshop-times-ia-brandbook.html';
const checks=[];
for (const n of [1,8,13,20,28,29,37,45,49]) {
 await page.goto(url+'#S'+String(n).padStart(2,'0'));
 await page.waitForTimeout(900);
 const c=await page.evaluate(()=>{const s=document.querySelector('.slide.active'),m=s.querySelector('main'),r=m.getBoundingClientRect();return {slide:s.id,type:s.dataset.type,main:{x:r.x,y:r.y,w:r.width,h:r.height},scroll:[s.scrollWidth,s.scrollHeight],viewport:[innerWidth,innerHeight],text:s.innerText.length}});
 checks.push(c);
 await page.screenshot({path:`/Users/julianotorriani/claude/agentesIA/workshop/brandbook-deck/qa-S${String(n).padStart(2,'0')}.png`});
}
fs.writeFileSync('/Users/julianotorriani/claude/agentesIA/workshop/brandbook-deck/visual-qa.json',JSON.stringify(checks,null,2));
await browser.close();
