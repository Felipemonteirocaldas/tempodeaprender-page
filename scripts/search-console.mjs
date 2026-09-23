/**
 * Google Search Console pela API — verificação do domínio, cadastro da
 * propriedade e envio do sitemap, usando uma conta de serviço do Google Cloud.
 *
 * Sem dependências: autenticação via JWT assinado com node:crypto.
 *
 * Uso (a chave JSON NUNCA deve ficar dentro do repositório):
 *   set GOOGLE_KEY=C:\caminho\para\chave.json      (PowerShell: $env:GOOGLE_KEY = "...")
 *   node scripts/search-console.mjs token           1. mostra o registro TXT para o DNS
 *   node scripts/search-console.mjs check-dns       2. confere se o TXT já está publicado
 *   node scripts/search-console.mjs verify          3. verifica o domínio no Google
 *   node scripts/search-console.mjs add-owner a@b.com [c@d.com]   4. dá acesso a vocês
 *   node scripts/search-console.mjs submit          5. cadastra a propriedade e envia o sitemap
 *   node scripts/search-console.mjs status          situação da propriedade e do sitemap
 */
import fs from 'node:fs'
import crypto from 'node:crypto'
import dns from 'node:dns/promises'

const DOMAIN = 'escolatempodeaprender.com.br'
const PROPERTY = `sc-domain:${DOMAIN}`
const SITEMAP = `https://www.${DOMAIN}/sitemap.xml`
const RESOURCE_ID = `dns://${DOMAIN}`
const SCOPES = [
  'https://www.googleapis.com/auth/siteverification',
  'https://www.googleapis.com/auth/webmasters',
]
const SITE = { type: 'INET_DOMAIN', identifier: DOMAIN }

function loadKey() {
  const file = process.env.GOOGLE_KEY
  if (!file) fail('Defina GOOGLE_KEY com o caminho da chave JSON da conta de serviço.')
  if (!fs.existsSync(file)) fail(`Arquivo não encontrado: ${file}`)
  const key = JSON.parse(fs.readFileSync(file, 'utf-8'))
  if (key.type !== 'service_account') fail('O JSON não é de uma conta de serviço (type != service_account).')
  return key
}

async function getAccessToken(key) {
  const b64 = obj => Buffer.from(JSON.stringify(obj)).toString('base64url')
  const now = Math.floor(Date.now() / 1000)
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({
    iss: key.client_email,
    scope: SCOPES.join(' '),
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })}`
  const signature = crypto.sign('RSA-SHA256', Buffer.from(unsigned), key.private_key).toString('base64url')
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${unsigned}.${signature}`,
    }),
  })
  const data = await res.json()
  if (!res.ok) fail(`Falha na autenticação: ${data.error_description ?? data.error ?? res.status}`)
  return data.access_token
}

async function api(token, method, url, body) {
  const res = await fetch(url, {
    method,
    headers: { authorization: `Bearer ${token}`, ...(body ? { 'content-type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  const data = text ? JSON.parse(text) : {}
  if (!res.ok) {
    const msg = data.error?.message ?? text
    if (/has not been used|is disabled/i.test(msg)) {
      fail(`A API não está ativada no projeto do Google Cloud.\n${msg}`)
    }
    fail(`${method} ${url}\n→ ${res.status}: ${msg}`)
  }
  return data
}

const SV = 'https://www.googleapis.com/siteVerification/v1'
const WM = 'https://www.googleapis.com/webmasters/v3'
const enc = encodeURIComponent

async function requestTxtToken(token) {
  const { token: txt } = await api(token, 'POST', `${SV}/token`, { verificationMethod: 'DNS_TXT', site: SITE })
  return txt
}

const commands = {
  async token(token) {
    const txt = await requestTxtToken(token)
    console.log(`Adicione este registro no DNS da Hostinger (zona ${DOMAIN}):\n`)
    console.log(`  Tipo:  TXT`)
    console.log(`  Nome:  @`)
    console.log(`  Valor: ${txt}`)
    console.log(`  TTL:   padrão (3600)\n`)
    console.log('Depois rode: node scripts/search-console.mjs check-dns')
  },

  async 'check-dns'(token) {
    const expected = await requestTxtToken(token)
    let records = []
    try { records = (await dns.resolveTxt(DOMAIN)).map(r => r.join('')) } catch { /* sem TXT ainda */ }
    if (records.includes(expected)) {
      console.log('✓ Registro TXT encontrado no DNS. Rode: node scripts/search-console.mjs verify')
    } else {
      console.log('✗ Registro ainda não visível. A propagação pode levar de minutos a algumas horas.')
      console.log(`  Esperado: ${expected}`)
      console.log(`  TXT atuais: ${records.length ? records.join(' | ') : '(nenhum)'}`)
      process.exitCode = 1
    }
  },

  async verify(token) {
    const res = await api(token, 'POST', `${SV}/webResource?verificationMethod=DNS_TXT`, { site: SITE })
    console.log(`✓ Domínio verificado. Proprietários: ${res.owners.join(', ')}`)
    console.log('Próximo: node scripts/search-console.mjs add-owner seu@email.com')
  },

  async 'add-owner'(token, emails) {
    if (!emails.length) fail('Informe ao menos um e-mail: add-owner voce@gmail.com')
    const current = await api(token, 'GET', `${SV}/webResource/${enc(RESOURCE_ID)}`)
    const owners = [...new Set([...current.owners, ...emails])]
    const res = await api(token, 'PUT', `${SV}/webResource/${enc(RESOURCE_ID)}`, { site: SITE, owners })
    console.log(`✓ Proprietários: ${res.owners.join(', ')}`)
  },

  async submit(token) {
    await api(token, 'PUT', `${WM}/sites/${enc(PROPERTY)}`)
    console.log(`✓ Propriedade ${PROPERTY} cadastrada no Search Console`)
    await api(token, 'PUT', `${WM}/sites/${enc(PROPERTY)}/sitemaps/${enc(SITEMAP)}`)
    console.log(`✓ Sitemap enviado: ${SITEMAP}`)
  },

  async status(token) {
    const { siteEntry = [] } = await api(token, 'GET', `${WM}/sites`)
    const site = siteEntry.find(s => s.siteUrl === PROPERTY)
    console.log(site ? `Propriedade: ${site.siteUrl} (${site.permissionLevel})` : `Propriedade ${PROPERTY} ainda não cadastrada.`)
    if (!site) return
    const { sitemap = [] } = await api(token, 'GET', `${WM}/sites/${enc(PROPERTY)}/sitemaps`)
    if (!sitemap.length) console.log('Nenhum sitemap enviado.')
    for (const s of sitemap) {
      const urls = s.contents?.map(c => `${c.submitted} enviadas / ${c.indexed ?? '?'} indexadas`).join(', ')
      console.log(`Sitemap: ${s.path}`)
      console.log(`  último envio: ${s.lastSubmitted ?? '-'} | último download pelo Google: ${s.lastDownloaded ?? 'ainda não'}`)
      console.log(`  pendente: ${s.isPending} | erros: ${s.errors ?? 0} | avisos: ${s.warnings ?? 0}${urls ? ` | ${urls}` : ''}`)
    }
  },
}

class CliError extends Error {}

function fail(msg) {
  throw new CliError(msg)
}

const [cmd, ...args] = process.argv.slice(2)
if (!commands[cmd]) {
  console.log(`Comandos: ${Object.keys(commands).join(', ')}`)
  process.exit(cmd ? 1 : 0)
}
/* Sem process.exit() após rede: no Windows ele aborta o Node com conexões HTTP ainda abertas */
try {
  const key = loadKey()
  console.log(`Conta de serviço: ${key.client_email}\n`)
  await commands[cmd](await getAccessToken(key), args)
} catch (err) {
  console.error(`Erro: ${err instanceof CliError ? err.message : err.stack}`)
  process.exitCode = 1
}
