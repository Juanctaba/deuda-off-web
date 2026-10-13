#!/usr/bin/env node
/**
 * IndexNow: envía a api.indexnow.org SOLO las URLs nuevas, con lastmod cambiado
 * o eliminadas del sitemap de producción, comparando contra el snapshot del
 * deploy anterior (lo guarda/restaura la GitHub Action con actions/cache).
 *
 * Sin dependencias (Node >= 20). Variables de entorno:
 *   SITE_HOST        host canónico, p. ej. "jtads.com" (obligatoria)
 *   SITEMAP_URL      por defecto https://$SITE_HOST/sitemap.xml
 *   SITEMAP_FILE     opcional: leer el sitemap de un archivo (pruebas)
 *   PREV_SNAPSHOT    JSON del deploy anterior (si no existe: primer run)
 *   NEW_SNAPSHOT     dónde escribir el snapshot nuevo
 *   EXCLUDE_REGEX    regex extra (separadas por "||") de URLs a excluir
 *   INDEXNOW_KEY     key (secreto). Sin key solo se permite DRY_RUN.
 *   DRY_RUN=1        no hace el POST; imprime lo que enviaría
 *   SUBMIT_ALL=1     envía todo el sitemap filtrado (solo manual, primer alta)
 *   SKIP_HTTP_CHECK=1 no comprueba status/noindex (solo pruebas offline)
 *
 * Nunca imprime la key.
 */
import { readFile, writeFile, access } from 'node:fs/promises'

const env = process.env
const HOST = (env.SITE_HOST || '').toLowerCase()
if (!HOST) fail('Falta SITE_HOST')
const SITEMAP_URL = env.SITEMAP_URL || `https://${HOST}/sitemap.xml`
const DRY = env.DRY_RUN === '1' || env.DRY_RUN === 'true'
const SUBMIT_ALL = env.SUBMIT_ALL === '1' || env.SUBMIT_ALL === 'true'
const KEY = env.INDEXNOW_KEY || ''
const UA = 'Mozilla/5.0 (compatible; IndexNowSubmitter/1.0; +https://www.indexnow.org)'

// Exclusiones fijas (spec SEO 13 oct 2026) + las del repo.
const EXCLUDES = [
  /\?post=/i,                       // URLs legadas /blog/recursos?post=
  /credenciales(-jtads)?\.html/i,  // jtads: nunca se envía
  /\.vercel\.app/i,                 // previews / copias en vercel.app
  /insolvencia\.nucleojuridico\.com\.co/i,
  ...(env.EXCLUDE_REGEX || '').split('||').filter(Boolean).map((r) => new RegExp(r, 'i')),
]

function fail(msg) { console.error(`ERROR: ${msg}`); process.exit(1) }

async function exists(p) { try { await access(p); return true } catch { return false } }

function decode(s) {
  return s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'").trim()
}

async function fetchText(url) {
  const r = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'follow' })
  if (!r.ok) fail(`${url} respondió ${r.status}`)
  return r.text()
}

/** Devuelve Map<loc, lastmod|''>. Soporta un nivel de sitemap index. */
async function loadSitemap() {
  const xml = env.SITEMAP_FILE ? await readFile(env.SITEMAP_FILE, 'utf8') : await fetchText(SITEMAP_URL)
  const out = new Map()
  const childSitemaps = [...xml.matchAll(/<sitemap>[\s\S]*?<loc>([\s\S]*?)<\/loc>[\s\S]*?<\/sitemap>/g)].map((m) => decode(m[1]))
  const parse = (x) => {
    for (const m of x.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
      const loc = m[1].match(/<loc>([\s\S]*?)<\/loc>/)
      if (!loc) continue
      const lm = m[1].match(/<lastmod>([\s\S]*?)<\/lastmod>/)
      out.set(decode(loc[1]), lm ? decode(lm[1]) : '')
    }
  }
  parse(xml)
  for (const s of childSitemaps) parse(await fetchText(s))
  return out
}

function allowed(url) {
  let u
  try { u = new URL(url) } catch { return false }
  if (u.protocol !== 'https:' || u.hostname.toLowerCase() !== HOST) return false
  return !EXCLUDES.some((re) => re.test(url))
}

/** Para URLs nuevas/cambiadas: 200 directo y sin noindex (header o meta). */
async function isIndexable(url) {
  if (env.SKIP_HTTP_CHECK === '1') return { ok: true, why: 'sin check (offline)' }
  const r = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'manual' })
  if (r.status !== 200) return { ok: false, why: `status ${r.status}` }
  if (/noindex/i.test(r.headers.get('x-robots-tag') || '')) return { ok: false, why: 'X-Robots-Tag noindex' }
  const html = (await r.text()).slice(0, 200_000)
  const metas = html.match(/<meta[^>]+name=["'](robots|bingbot)["'][^>]*>/gi) || []
  if (metas.some((m) => /noindex/i.test(m))) return { ok: false, why: 'meta robots noindex' }
  return { ok: true, why: '200 indexable' }
}

/** Para URLs eliminadas: solo se notifican si ya no responden 200 (404/410/301/308). */
async function isGone(url) {
  if (env.SKIP_HTTP_CHECK === '1') return { ok: true, why: 'sin check (offline)' }
  const r = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'manual' })
  return [404, 410, 301, 308].includes(r.status) ? { ok: true, why: `status ${r.status}` } : { ok: false, why: `aún responde ${r.status}` }
}

async function main() {
  const current = await loadSitemap()
  const curr = new Map([...current].filter(([u]) => allowed(u)))
  console.log(`Sitemap ${env.SITEMAP_FILE || SITEMAP_URL}: ${current.size} URLs, ${curr.size} tras exclusiones`)

  let prev = null
  if (env.PREV_SNAPSHOT && (await exists(env.PREV_SNAPSHOT))) {
    prev = new Map(Object.entries(JSON.parse(await readFile(env.PREV_SNAPSHOT, 'utf8')).urls || {}))
    console.log(`Snapshot anterior: ${prev.size} URLs`)
  } else {
    console.log('Sin snapshot anterior (primer run).')
  }

  const candidates = [] // [url, motivo]
  if (SUBMIT_ALL) {
    for (const u of curr.keys()) candidates.push([u, 'submit_all'])
  } else if (prev) {
    for (const [u, lm] of curr) {
      if (!prev.has(u)) candidates.push([u, 'nueva'])
      else if (prev.get(u) !== lm) candidates.push([u, `lastmod ${prev.get(u) || '-'} -> ${lm || '-'}`])
    }
    for (const u of prev.keys()) if (!curr.has(u) && allowed(u)) candidates.push([u, 'eliminada'])
  } else {
    console.log('Primer run: solo se guarda la línea base; no se envía nada (usar SUBMIT_ALL=1 a mano para el alta inicial).')
  }

  const urlList = []
  for (const [u, why] of candidates) {
    const check = why === 'eliminada' ? await isGone(u) : await isIndexable(u)
    console.log(`${check.ok ? 'ENVIAR ' : 'OMITIR '} ${u}  [${why}; ${check.why}]`)
    if (check.ok) urlList.push(u)
  }

  if (env.NEW_SNAPSHOT) {
    await writeFile(env.NEW_SNAPSHOT, JSON.stringify({ host: HOST, savedAt: new Date().toISOString(), urls: Object.fromEntries(curr) }, null, 2))
    console.log(`Snapshot nuevo guardado: ${curr.size} URLs`)
  }

  console.log(`Total a enviar: ${urlList.length}`)
  if (!urlList.length) return
  if (DRY) { console.log('DRY_RUN: no se envía nada.'); return }
  if (!/^[a-zA-Z0-9-]{8,128}$/.test(KEY)) fail('INDEXNOW_KEY ausente o con formato inválido (8-128, [a-zA-Z0-9-])')

  for (let i = 0; i < urlList.length; i += 10000) {
    const batch = urlList.slice(i, i + 10000)
    const r = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: batch }),
    })
    console.log(`IndexNow respondió ${r.status} para ${batch.length} URLs`)
    // 200 OK, 202 aceptado (key pendiente de validar). Sin reintentos (429 incluido).
    if (r.status !== 200 && r.status !== 202) fail(`IndexNow ${r.status}: ${(await r.text()).slice(0, 300)}`)
  }
}

main().catch((e) => fail(e?.stack || String(e)))
