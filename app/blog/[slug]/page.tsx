import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { BLOG_POSTS, getBlogPost } from '@/lib/blog-posts'
import { BlogContent } from '@/components/BlogContent'

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
      locale: 'es_CO',
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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Núcleo Jurídico SAS — Deuda OFF',
      url: 'https://deudaoff.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Deuda OFF',
      logo: { '@type': 'ImageObject', url: 'https://deudaoff.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://deudaoff.com/blog/${post.slug}` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="min-h-screen bg-surface">
        {/* Header */}
        <div className="bg-primary text-white py-16 px-5">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-white/60 hover:text-white text-sm mb-6 inline-block">← Blog</Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-secondary text-primary">
                {post.category}
              </span>
              <span className="text-blue-200 text-xs">{formatDate(post.date)}</span>
              <span className="text-blue-200 text-xs">· {post.readTime} lectura</span>
            </div>
            <h1 className="font-manrope text-3xl md:text-4xl font-bold leading-tight">{post.title}</h1>
            <p className="text-blue-200 mt-4 text-lg leading-relaxed">{post.description}</p>
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
                href="https://wa.me/573003552751?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20insolvencia%20de%20persona%20natural"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-secondary text-secondary px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-secondary/5 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-12">
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
