#!/usr/bin/env python3
"""Instagram Facebook Login: explicit read-only preflight, preview, and publish."""
import argparse,json,os,re,sys,urllib.request,urllib.parse,urllib.error
from pathlib import Path

class Graph:
    def __init__(self,version,token):self.base='https://graph.facebook.com/'+version;self.token=token
    def call(self,method,path,params):
        data=urllib.parse.urlencode(params).encode();url=self.base+'/'+path
        if method=='GET':url+='?'+data.decode();data=None
        req=urllib.request.Request(url,data=data,method=method,headers={'Authorization':'Bearer '+self.token})
        try:
            with urllib.request.urlopen(req,timeout=40) as res:return json.load(res)
        except Exception:
            # Never expose request/response credentials; POST outcome may be unknown.
            raise RuntimeError('GRAPH_REQUEST_FAILED: reconcile destination before any write retry') from None

def validate(plan):
    if not re.fullmatch(r'v\d+\.\d+',plan.get('version','')):raise ValueError('Explicit Graph version required')
    if not re.fullmatch(r'\d+',str(plan.get('ig_id',''))):raise ValueError('Numeric IG ID required')
    if not plan.get('username'):raise ValueError('Expected destination username required')
    urls=plan.get('images',[])
    if not isinstance(urls,list) or not 2<=len(urls)<=10:raise ValueError('Carousel needs 2-10 images')
    for url in urls:
        u=urllib.parse.urlsplit(url)
        if u.scheme!='https' or not u.hostname or u.username or u.password:raise ValueError('Public HTTPS image URLs required')
    if not isinstance(plan.get('caption'),str):raise ValueError('Caption required')
    return plan

def preflight(graph,plan):
    result=graph.call('GET',plan['ig_id'],{'fields':'id,username'})
    if str(result.get('id'))!=plan['ig_id'] or result.get('username')!=plan['username']:raise ValueError('Destination identity mismatch')
    return result

def publish(graph,plan,record):
    # Identity validation is read-only and precedes first write.
    record({'stage':'identity','result':preflight(graph,plan)})
    children=[]
    for url in plan['images']:
        record({'stage':'child','state':'pending'})
        child=graph.call('POST',plan['ig_id']+'/media',{'image_url':url,'is_carousel_item':'true'})['id'];children.append(child)
        record({'stage':'child','id':child,'state':'created'})
    record({'stage':'parent','state':'pending'})
    parent=graph.call('POST',plan['ig_id']+'/media',{'media_type':'CAROUSEL','children':','.join(children),'caption':plan['caption']})['id']
    record({'stage':'parent','id':parent,'state':'created'})
    state=graph.call('GET',parent,{'fields':'status_code,status'})
    record({'stage':'parent_status','id':parent,'result':state})
    if state.get('status_code')!='FINISHED':raise RuntimeError('NOT_FINISHED: stop; do not recreate containers. Inspect receipt and reconcile manually')
    record({'stage':'publish','parent_id':parent,'state':'pending'})
    media=graph.call('POST',plan['ig_id']+'/media_publish',{'creation_id':parent})['id']
    record({'stage':'publish','id':media,'state':'accepted'})
    proof=graph.call('GET',media,{'fields':'id,permalink'})
    record({'stage':'verified','result':proof});return proof

def main():
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('mode',choices=['preview','preflight','publish']);p.add_argument('--plan',required=True,type=Path);p.add_argument('--receipt',type=Path);p.add_argument('--confirm-username');a=p.parse_args()
    try:
        plan=validate(json.loads(a.plan.read_text()));
        if a.mode=='preview':print(json.dumps(plan,ensure_ascii=False,indent=2));return 0
        token=os.environ.get('INSTAGRAM_ACCESS_TOKEN')
        if not token:raise ValueError('INSTAGRAM_ACCESS_TOKEN missing')
        graph=Graph(plan['version'],token)
        if a.mode=='preflight':print(json.dumps(preflight(graph,plan)));return 0
        if a.confirm_username!=plan['username']:raise ValueError('Explicit --confirm-username must match reviewed preview')
        if not a.receipt:raise ValueError('New receipt path required')
        with a.receipt.open('x',encoding='utf-8') as f:
            def record(item):f.write(json.dumps(item,ensure_ascii=False)+'\n');f.flush()
            record({'stage':'start','ig_id':plan['ig_id'],'username':plan['username']})
            try:print(json.dumps(publish(graph,plan,record)))
            except Exception:
                record({'stage':'stopped','state':'unknown_or_partial','instruction':'Reconcile existing IDs before retry; never rerun blindly'});raise
        return 0
    except Exception as e:print(str(e),file=sys.stderr);return 2
if __name__=='__main__':sys.exit(main())
