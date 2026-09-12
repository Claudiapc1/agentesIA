#!/usr/bin/env python3
"""Local setup inventory. No network, installs, login, or secret values."""
import json,os,platform,shutil,subprocess,sys
from pathlib import Path

def inspect():
    checks={}
    for name in ['node','npm','claude','codex']:
        path=shutil.which(name)
        item={'available':bool(path)}
        if path:
            try:
                p=subprocess.run([path,'--version'],capture_output=True,text=True,timeout=8)
                item.update(version=(p.stdout or p.stderr).strip().splitlines()[0][:160],exit_code=p.returncode)
            except Exception:item['version_check']='FAILED'
        checks[name]=item
    return {'platform':platform.system(),'python':platform.python_version(),'python_supported':sys.version_info>=(3,10),'commands':checks,'environment_keys_present':{key:bool(os.environ.get(key)) for key in ['GEMINI_API_KEY','INSTAGRAM_ACCESS_TOKEN','META_ACCESS_TOKEN']},'notice':'Presence is not authentication, permission, compatibility, or a successful connection. No secret values read into report.'}
if __name__=='__main__':print(json.dumps(inspect(),ensure_ascii=False,indent=2))
