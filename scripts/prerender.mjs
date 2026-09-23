/**
 * Pré-renderiza cada rota em HTML estático depois do `vite build`.
 *
 * - Google e prévias de link (WhatsApp, Facebook) recebem conteúdo e meta tags
 *   corretos por página, sem depender de JavaScript.
 * - Gera `sobre.html`, `contato.html`… que a Vercel serve em `/sobre`, `/contato`
 *   (cleanUrls em vercel.json), e `404.html` para endereços inexistentes.
 * - Gera o `sitemap.xml` com as mesmas rotas.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, getPageMeta, renderHeadTags, ROUTES, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
const HEAD_BLOCK = /<!--head-meta-->[\s\S]*?<!--\/head-meta-->/

if (!HEAD_BLOCK.test(template) || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html sem os marcadores esperados para a pré-renderização')
}

function renderPage(url) {
  return template
    .replace(HEAD_BLOCK, renderHeadTags(url))
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`)
}

for (const url of ROUTES) {
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`
  fs.writeFileSync(path.join(distDir, file), renderPage(url))
  console.log(`  prerender  ${url.padEnd(14)} → dist/${file}`)
}

fs.writeFileSync(path.join(distDir, '404.html'), renderPage('/404'))
console.log(`  prerender  ${'(404)'.padEnd(14)} → dist/404.html`)

/* Sitemap gerado a partir das mesmas rotas (exceto noindex) — nunca fica desatualizado */
const indexable = ROUTES.filter(url => !getPageMeta(url).noindex)
const lastmod = new Date().toISOString().slice(0, 10)
const urls = indexable.map(url => `  <url>\n    <loc>${SITE_URL}${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
fs.writeFileSync(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
)
console.log(`  sitemap    ${indexable.length} URLs → dist/sitemap.xml`)

fs.rmSync(ssrDir, { recursive: true, force: true })
