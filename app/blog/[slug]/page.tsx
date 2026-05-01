import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BLOG_POSTS, getBlogPost } from '@/lib/blog-posts'
import { BlogContent } from '@/components/BlogContent'
import { WA_URL } from '@/lib/constants'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Deuda OFF`,
    description: post.description,
    alternates: { canonical: `https://deudaoff.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://deudaoff.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      locale: 'es_CO',
      authors: ['Equipo Legal — Núcleo Jurídico SAS'],
      tags: post.about,
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPost({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://deudaoff.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://deudaoff.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://deudaoff.com/blog/${post.slug}` },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://deudaoff.com/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.dateModified,
    inLanguage: 'es-CO',
    author: {
      '@type': 'Organization',
      '@id': 'https://deudaoff.com/#organization',
      name: 'Equipo Legal — Núcleo Jurídico SAS',
      description: 'Equipo de abogados especializados en insolvencia de persona natural en Colombia con más de 750 casos resueltos desde 2020.',
      url: 'https://deudaoff.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Deuda OFF — Núcleo Jurídico SAS',
      logo: { '@type': 'ImageObject', url: 'https://deudaoff.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://deudaoff.com/blog/${post.slug}` },
    about: post.about.map(topic => ({ '@type': 'Thing', name: topic })),
    mentions: post.mentions.map(entity => ({ '@type': 'Organization', name: entity })),
    keywords: [...post.about, ...post.mentions].join(', '),
    isPartOf: { '@type': 'Blog', '@id': 'https://deudaoff.com/blog' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="min-h-screen bg-surface">
        {/* Header */}
        <div className="bg-primary text-white py-16 px-5">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-xs mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>›</span>
              <span className="text-white/70 truncate max-w-[200px]">{post.category}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-secondary text-primary">
                {post.category}
              </span>
              <span className="text-blue-200 text-xs">{formatDate(post.date)}</span>
              <span className="text-blue-200 text-xs">· {post.readTime} lectura</span>
            </div>
            <h1 className="font-manrope text-3xl md:text-4xl font-bold leading-tight">{post.title}</h1>
            <p className="text-blue-200 mt-4 text-lg leading-relaxed">{post.description}</p>
            {/* Author byline */}
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center">
                <span className="text-secondary text-xs font-bold">NJ</span>
              </div>
              <div>
                <p className="text-white text-xs font-semibold">Equipo Legal — Núcleo Jurídico SAS</p>
                <p className="text-blue-300 text-xs">Especialistas en insolvencia de persona natural · +750 casos desde 2020</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-5 py-12">
          <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 border border-outline-variant/30">
            <BlogContent html={post.content} />
          </div>

          {/* CTA mid-article */}
          <div className="my-10 bg-secondary-container rounded-2xl p-7 border border-secondary/20">
            <h3 className="font-manrope font-bold text-primary text-lg mb-2">¿Esta situación aplica a tu caso?</h3>
            <p className="text-on-surface-variant text-sm mb-4">
              Habla con un especialista en insolvencia de persona natural. La consulta inicial es gratuita y confidencial.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#formulario" className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all">
                Consulta Gratuita
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-secondary text-secondary px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-secondary/5 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Temas cubiertos */}
          <div className="mb-10 flex flex-wrap gap-2">
            {post.about.map(topic => (
              <span key={topic} className="text-xs bg-surface-container text-on-surface-variant px-3 py-1 rounded-full border border-outline-variant/40">
                {topic}
              </span>
            ))}
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-4">
              <h2 className="font-manrope text-xl font-bold text-primary mb-6">Artículos relacionados</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {related.map(r => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="block bg-white rounded-xl p-5 shadow-card border border-outline-variant/30 hover:shadow-card-lg transition-shadow">
                    <span className="text-xs text-on-surface-variant block mb-2">{r.category}</span>
                    <h3 className="font-manrope font-semibold text-primary text-sm leading-snug hover:text-secondary transition-colors">{r.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
