#!/usr/bin/env python3
"""Validate context and output before a caller writes; no writes or network."""
import argparse,hashlib,importlib.util,json,sys
from pathlib import Path
spec=importlib.util.spec_from_file_location('_coreai_resolver',Path(__file__).with_name('resolve_context.py'))
resolver=importlib.util.module_from_spec(spec);spec.loader.exec_module(resolver)

def gate(root=None,business=None,output=None,required=None):
    result=resolver.resolve(root,business,required)
    if result['status']!='READY':return result
    try:
        if not output:raise ValueError('Explicit output required')
        dest=Path(output).expanduser()
        if not dest.is_absolute():raise ValueError('Absolute output required')
        folder=Path(result['business_root']);allowed=folder/'outputs'
        supplied_root=Path(root).expanduser().absolute()
        if dest.is_relative_to(supplied_root):
            dest=Path(result['context_root'])/dest.relative_to(supplied_root)
        if '..' in dest.parts:raise ValueError('Output traversal rejected')
        if not dest.is_relative_to(allowed) or dest==allowed:raise ValueError('Output must be below business/outputs')
        current=folder
        for part in dest.relative_to(folder).parts:
            current=current/part
            if current.is_symlink():raise ValueError('Symlink output rejected')
        if not dest.resolve().is_relative_to(allowed.resolve()):raise ValueError('Output escapes business/outputs')
        digest=hashlib.sha256();loaded=[]
        for name in result['sources']:
            path=Path(name);content=path.read_bytes();digest.update(str(path.relative_to(folder)).encode()+b'\0'+content+b'\0')
            loaded.append({'path':name,'sha256':hashlib.sha256(content).hexdigest()})
        return dict(result,output=str(dest),context_sha256=digest.hexdigest(),loaded_sources=loaded)
    except (OSError,ValueError,TypeError) as e:return {'status':'BLOCKED_CONTEXT','reason':str(e)}

def main():
    p=argparse.ArgumentParser();p.add_argument('--root');p.add_argument('--business');p.add_argument('--output');p.add_argument('--require',action='append');a=p.parse_args()
    result=gate(a.root,a.business,a.output,a.require);print(json.dumps(result,ensure_ascii=False));return 0 if result['status']=='READY' else 2
if __name__=='__main__':sys.exit(main())
