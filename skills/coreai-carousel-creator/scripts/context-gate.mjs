import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const gate=fileURLToPath(new URL('../../coreai-shared/scripts/gate.py',import.meta.url));
export function options(args=process.argv.slice(2)) {
 const get=name=>{const i=args.indexOf(name);return i<0?undefined:args[i+1];};
 return {root:get('--context-root'),business:get('--business'),output:get('--output')};
}
export function requireContext({root,business,output}={}) {
 if(!root||!business||!output) throw Error('--context-root, --business e --output explícitos são obrigatórios');
 const result=spawnSync('python3',[gate,'--root',root,'--business',business,'--output',output],{encoding:'utf8',env:{...process.env,PYTHONDONTWRITEBYTECODE:'1'}});
 if(result.error)throw result.error;
 let data;try{data=JSON.parse(result.stdout);}catch{throw Error('Gate de contexto não retornou JSON válido');}
 if(result.status!==0 || data.status!=='READY')throw Error('Contexto bloqueado: '+JSON.stringify(data));
 return data;
}
