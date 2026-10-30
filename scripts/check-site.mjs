import { readFile, access } from 'node:fs/promises';
import ts from 'typescript';
const source = await readFile('src/data/projects.ts', 'utf8');
const compiled = ts.transpileModule(source, {compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {PROJECTS, FEATURED_PROJECT_SLUGS} = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const aliases = JSON.parse(await readFile('src/data/photo-aliases.json', 'utf8'));
const covers = new Map();
for (const project of PROJECTS) {
  const cover = aliases[project.cover ?? project.photos[0]] ?? (project.cover ?? project.photos[0]);
  if (covers.has(cover)) throw new Error(`Duplicate project cover: ${covers.get(cover)} and ${project.slug}`);
  covers.set(cover, project.slug);
  if (!project.photos.length || project.photos.length > 3) throw new Error(`Uncurated gallery: ${project.slug}`);
}
if (PROJECTS.some(p => p.slug === 'dietl-family-kitchen-table')) throw new Error('Duplicate Dietl project remains');
if (!FEATURED_PROJECT_SLUGS.includes('massive-gathering-table')) throw new Error('Gathering table not featured');
const base = process.env.SITE_URL || 'http://127.0.0.1:3000';
const routes = ['/', '/work', '/our-story', '/the-craft', '/shop', '/start-a-project', ...PROJECTS.map(p=>`/work/${p.slug}`)];
const assets=new Set(); const links=new Set();
for(const route of routes){
 const response=await fetch(base+route,{redirect:'manual'});
 if(response.status!==200) throw new Error(`${route}: HTTP ${response.status}`);
 const html=await response.text();
 if(html.includes("The Dietl Family Kitchen Table")) throw new Error(`${route}: duplicate project name remains`);
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
const oldProject=await fetch(base+'/work/dietl-family-kitchen-table',{redirect:'manual'});
if(oldProject.status !== 308 || !oldProject.headers.get('location')?.endsWith('/work/massive-gathering-table')) throw new Error('Old Dietl link must redirect to Gathering Table');
const home=await(await fetch(base+'/')).text();
if(!home.includes('Massive Gathering Table') || !home.includes('href="/work/massive-gathering-table"')) throw new Error('Home feature name/link mismatch');
for(const removed of ['p06-03.jpg','p16-02.jpg','boards-hero.webp']) if(home.includes(removed)) throw new Error(`Removed soft photo on Home: ${removed}`);
const shop=await(await fetch(base+'/shop')).text();
if(shop.includes('p66-01.jpg')) throw new Error('Soft cutting board close-up remains in Shop');
if(!home.includes('p61-01.jpg')) throw new Error('Home should use the original overhead photo');
const sitemap=await(await fetch(base+'/sitemap.xml')).text();
if(sitemap.includes('dietl-family-kitchen-table')) throw new Error('Duplicate project still in sitemap');
console.log(`PASS: ${routes.length} routes, ${assets.size} image files, ${links.size} internal links, unique project covers, canonical naming, legacy redirect, sitemap, 404 and curated galleries.`);
