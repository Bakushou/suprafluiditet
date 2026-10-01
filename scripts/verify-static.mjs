import {readFile,stat,readdir} from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(process.argv[2]||'docs');
let checked=0;
for(const page of ['index.html','cornflower.html','physics.html','baiblem.html']){
 const html=await readFile(path.join(root,page),'utf8');
 const refs=[...html.matchAll(/(?:src|href)="(\.\/[^"#?]+)"/g)].map(m=>m[1]);
 if(!refs.some(ref=>ref.endsWith('.js')))throw new Error(page+' saknar ett programs skript.');
 for(const ref of refs){
  const target=path.resolve(root,ref);
  if(!target.startsWith(root+path.sep))throw new Error('Ogiltig sökväg: '+ref);
  const file=await stat(target).catch(()=>null);
  if(!file?.isFile()||!file.size)throw new Error(page+' hänvisar till saknad eller tom fil: '+ref);
  checked++;
 }
}
console.log('Publicerade HTML-filer har '+checked+' fungerande filreferenser.');
// HTML checks alone miss lazy modules: the previous cleanup deleted workspace.js
// even though the study and physics bundles still imported it.
const assets=path.join(root,'assets');
let chunkRefs=0;
for(const entry of await readdir(assets)){
 if(!entry.endsWith('.js'))continue;
 const js=await readFile(path.join(assets,entry),'utf8');
 for(const [,ref] of js.matchAll(/["'`]\.\/([A-Za-z0-9_-]+-[A-Za-z0-9_-]{8}\.(?:js|css))["'`]/g)){
  const file=await stat(path.join(assets,ref)).catch(()=>null);
  if(!file?.isFile()||!file.size)throw new Error(entry+' importerar saknad eller tom fil: '+ref);
  chunkRefs++;
 }
}
console.log('Dynamiska skript har '+chunkRefs+' fungerande filreferenser.');
