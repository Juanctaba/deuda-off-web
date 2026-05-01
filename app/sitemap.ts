import type { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://deudaoff.com'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/preguntas-frecuentes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/por-que-deuda-off`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/casos-de-exito`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/insolvencia-bogota`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/insolvencia-medellin`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/insolvencia-cali`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/insolvencia-barranquilla`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insolvencia-bucaramanga`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/terminos`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/privacidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/aviso-legal`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
