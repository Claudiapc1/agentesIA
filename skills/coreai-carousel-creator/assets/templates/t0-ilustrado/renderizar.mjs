#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {options,requireContext} from '../../../scripts/context-gate.mjs';
const context=options();requireContext(context);
const dir=process.argv[2];
if(!dir||dir.startsWith('--'))throw Error('Pasta de HTML obrigatória');
const files=fs.readdirSync(dir).filter(f=>f.endsWith('.html')).sort();
for(const f of files){requireContext({...context,output:path.join(context.output,f.replace('.html','.png'))});}
const {chromium}=await import('playwright');
const browser=await chromium.launch();
try {
 fs.mkdirSync(context.output,{recursive:true});
 const page=await browser.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:1});
 for(const f of files){
  await page.goto(pathToFileURL(path.resolve(dir,f)).href);await page.evaluate(()=>document.fonts.ready);
  const png=await page.screenshot();
  requireContext({...context,output:path.join(context.output,f.replace('.html','.png'))});
  fs.writeFileSync(path.join(context.output,f.replace('.html','.png')),png,{flag:'wx'});
 }
} finally {await browser.close();}
