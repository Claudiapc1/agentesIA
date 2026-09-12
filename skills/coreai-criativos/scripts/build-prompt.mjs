#!/usr/bin/env node
import fs from 'node:fs';
import {options,requireContext} from './context-gate.mjs';
import * as motor from './prompt-builder.mjs';
const routes={briefing:'buildPromptFromBriefingItem',template:'buildPrompt',edit:'buildImageEditPrompt','copy-simple':'buildCopyPrompt','copy-template':'buildTemplateAwareCopyPrompt'};
try {
 const args=process.argv.slice(2);
 const inputFile=args[0];const context=options(args);const outputFile=context.output;
 requireContext(context);
 if(!inputFile||!outputFile) throw Error('Uso: node build-prompt.mjs input.json prompt.txt');
 const envelope=JSON.parse(fs.readFileSync(inputFile,'utf8'));
 if(!routes[envelope.mode]||!envelope.input||typeof envelope.input!=='object'||Array.isArray(envelope.input)) throw Error('Modo ou input inválido. Consulte references/modos.md.');
 const prompt=motor[routes[envelope.mode]](envelope.input);
 if(typeof prompt!=='string'||!prompt.trim()) throw Error('Motor não retornou prompt.');
 fs.writeFileSync(outputFile,prompt+'\n',{flag:'wx'});
 console.log('Prompt salvo. Nenhuma imagem gerada.');
} catch(error) {console.error(error.message);process.exitCode=1;}
