import { readFile, access } from 'node:fs/promises';
import ts from 'typescript';
const source = await readFile('src/data/projects.ts', 'utf8');
const compiled = ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {PROJECTS} = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const base = process.env.SITE_URL || 'http://127.0.0.1:3000';
const routes = ['/', '/work', '/our-story', '/the-craft', '/shop', '/start-a-project', ...PROJECTS.map(p=>`/work/${p.slug}`)];
const assets=new Set(); const links=new Set();
for(const route of routes){
 const response=await fetch(base+route,{redirect:'manual'});
 if(response.status!==200) throw new Error(`${route}: HTTP ${response.status}`);
 const html=await response.text();
 if((html.match(/<h1[ >]/g)||[]).length!==1)throw new Error(`${route}: expected one h1`);
 for(const match of html.matchAll(/<img[^>]+src="([^"]+)"/g)){
  const url=new URL(match[1].replaceAll('&amp;','&'),base);const path=url.searchParams.get('url') || url.pathname;
  if(path.startsWith('/'))assets.add(path);
 }
 for(const match of html.matchAll(/href="(\/[^"?#]*)/g))if(!match[1].startsWith('/_next')&&!match[1].endsWith('.ico'))links.add(match[1]);
}
for(const path of assets)await access('public'+path);
for(const link of links)if(!routes.includes(link))throw new Error(`Unexpected internal link: ${link}`);
const missing=await fetch(base+'/work/not-a-real-project');if(missing.status!==404)throw new Error('Missing project should return 404');
if(PROJECTS.find(p=>p.slug==='herringbone-heirloom-crib').photos.some(p=>p.endsWith('crib-01.jpg')))throw new Error('Removed crib image still present');
if(PROJECTS.find(p=>p.slug==='massive-gathering-table').photos.some(p=>p.includes('p23-01')))throw new Error('Unblurred workshop source referenced');
console.log(`PASS: ${routes.length} routes, ${assets.size} image files, ${links.size} internal links, 404, revised crib gallery and privacy-safe workshop reference.`);
