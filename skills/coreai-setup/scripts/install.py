#!/usr/bin/env python3
"""Install CoreAI skills as independent copies; no overwrite, no network, stdlib only."""
import argparse, json, os, re, shutil, sys
from pathlib import Path

def _dirs_match(dst: Path, src: Path) -> bool:
    """True se dst já é uma cópia do conteúdo de src (mesmo SKILL.md), não link nem pasta estranha."""
    dst_skill = dst / 'SKILL.md'
    src_skill = src / 'SKILL.md'
    if not dst_skill.is_file() or not src_skill.is_file():
        return False
    try:
        return dst_skill.read_bytes() == src_skill.read_bytes()
    except OSError:
        return False

def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('--source', type=Path, default=Path(__file__).resolve().parents[2])
    p.add_argument('--target', choices=['claude','codex','both'], default='both')
    p.add_argument('--global-root', type=Path, help='Alternative HOME root for isolated installation/test')
    p.add_argument('--list', action='store_true'); p.add_argument('--status',action='store_true')
    p.add_argument('--force', action='store_true', help='Overwrite an existing install that is a stale copy of the same skill (never touches unrelated content)')
    p.add_argument('skills', nargs='*', help='Explicit coreai-* slugs; omit only for list/status')
    a=p.parse_args(); source=a.source.expanduser().resolve()
    if (source/'skills').is_dir(): source=source/'skills'
    if not source.is_dir(): p.error('Source directory does not exist')
    available={d.name:d for d in source.iterdir() if d.is_dir() and re.fullmatch(r'coreai-[a-z0-9-]+',d.name) and (d/'SKILL.md').is_file()}
    if a.list: print(json.dumps(sorted(available))); return 0
    names=a.skills or (sorted(available) if a.status else [])
    if not names: p.error('Select explicit coreai-* skills (use --list first)')
    if any(n not in available for n in names): p.error('Unknown or non-CoreAI skill selected')
    libraries={d.name:d for d in source.iterdir() if d.is_dir() and (d.name=='coreai-shared' or re.fullmatch(r'coreai-[a-z0-9-]+-shared',d.name))}
    if 'coreai-shared' not in libraries: p.error('Required coreai-shared dependency missing')
    available.update(libraries)
    names=sorted(set(names+list(libraries)))
    base=(a.global_root or Path.home()).expanduser().resolve()
    roots={'claude':base/'.claude/skills','codex':base/'.agents/skills'}
    targets=roots if a.target=='both' else {a.target:roots[a.target]}
    rows=[]
    for runtime, root in targets.items():
        for name in names:
            dst=root/name; src=available[name].resolve()
            if not os.path.lexists(dst):
                state='missing'
            elif dst.is_symlink():
                state='conflict'  # symlink nunca é considerado instalação válida; instalação é sempre cópia
            elif dst.is_dir() and _dirs_match(dst, src):
                state='installed'
            elif dst.is_dir() and a.force:
                state='stale'  # mesma skill, versão desatualizada: --force substitui
            else:
                state='conflict'
            rows.append(dict(runtime=runtime,skill=name,source=str(src),destination=str(dst),status=state))
    if a.status: print(json.dumps(rows,indent=2)); return int(any(r['status']=='conflict' for r in rows))
    if any(r['status']=='conflict' for r in rows):
        print(json.dumps({'status':'BLOCKED_CONFLICT','entries':rows},indent=2)); return 2
    created=[]
    try:
        for row in rows:
            if row['status']=='installed': continue
            dst=Path(row['destination']); src=Path(row['source'])
            if row['status']=='stale':
                shutil.rmtree(dst)
            dst.parent.mkdir(parents=True,exist_ok=True)
            shutil.copytree(src,dst); created.append(dst); row['status']='installed'
    except OSError as e:
        for dst in reversed(created): shutil.rmtree(dst, ignore_errors=True)
        print(json.dumps({'status':'INSTALL_FAILED','detail':str(e),'rolled_back_copies':len(created)})); return 3
    print(json.dumps({'status':'INSTALLED','entries':rows},indent=2)); return 0
if __name__=='__main__': sys.exit(main())
