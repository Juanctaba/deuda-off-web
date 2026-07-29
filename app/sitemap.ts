import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-posts'

const BASE = 'https://deudaoff.com'

/**
 * Fecha real de última modificación de cada ruta estática, en formato ISO.
 *
 * IMPORTANTE: no usar `new Date()` aquí. Si el lastmod sale del momento del
 * build, cada deploy reescribe la fecha de todas las URLs y Google termina
 * ignorando la señal. Actualiza la entrada correspondiente solo cuando el
 * contenido de esa página cambie de verdad.
 */
const LAST_MODIFIED: Record<string, string> = {
  '/': '2026-07-29',
  '/consulta-gratuita': '2026-07-29',
  '/blog': '2026-07-29',
  '/herramientas/convertidor-tasas-interes': '2026-07-29',
  '/calculadora': '2026-07-29',
  '/preguntas-frecuentes': '2026-07-29',
  '/por-que-deuda-off': '2026-07-29',
  '/insolvencia-barranquilla': '2026-07-29',
  '/recursos': '2026-05-15',
  '/insolvencia-bogota': '2026-05-04',
  '/insolvencia-medellin': '2026-05-04',
  '/casos-de-exito': '2026-05-01',
  '/insolvencia-cali': '2026-05-01',
  '/insolvencia-bucaramanga': '2026-05-01',
  '/terminos': '2026-05-01',
  '/privacidad': '2026-05-01',
  '/aviso-legal': '2026-05-01',
}

type StaticRoute = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const STATIC_ROUTES: StaticRoute[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/consulta-gratuita', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/herramientas/convertidor-tasas-interes', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/recursos', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/calculadora', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/preguntas-frecuentes', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/por-que-deuda-off', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/casos-de-exito', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/insolvencia-bogota', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/insolvencia-medellin', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/insolvencia-cali', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/insolvencia-barranquilla', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/insolvencia-bucaramanga', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/terminos', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacidad', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/aviso-legal', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map(route => ({
    // La home se declara con barra final para coincidir con su canonical.
    url: route.path === '/' ? `${BASE}/` : `${BASE}${route.path}`,
    lastModified: new Date(LAST_MODIFIED[route.path]),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    // dateModified refleja la última revisión real del artículo; date es la publicación.
    lastModified: new Date(post.dateModified ?? post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
