import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog — Insolvencia de Persona Natural en Colombia | Deuda OFF',
  description: 'Guías, artículos y recursos sobre insolvencia de persona natural, Ley 2445 de 2025 y cómo salir de deudas legalmente en Colombia.',
  alternates: { canonical: 'https://deudaoff.com/blog' },
}

const CATEGORY_COLORS: Record<string, string> = {
  'Legislación': 'bg-blue-50 text-blue-700',
  'Guías': 'bg-secondary-container text-[#00522f]',
  'Educación Financiera': 'bg-amber-50 text-amber-700',
  'Derechos del Deudor': 'bg-purple-50 text-purple-700',
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogIndex() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-primary text-white py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="text-white/60 hover:text-white text-sm mb-6 inline-block">← Deuda OFF</Link>
          <h1 className="font-manrope text-4xl md:text-5xl font-bold mb-4">Blog & Recursos</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Todo lo que necesitas saber sobre insolvencia de persona natural, la Ley 2445 de 2025 y tus derechos como deudor en Colombia.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-16">

        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="block group mb-16">
          <div className="bg-white rounded-2xl shadow-card-lg border border-outline-variant/30 p-8 md:p-10 hover:shadow-form transition-shadow">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${CATEGORY_COLORS[featured.category] ?? 'bg-surface-container text-on-surface-variant'}`}>
                {featured.category}
              </span>
              <span className="text-xs text-on-surface-variant">{formatDate(featured.date)}</span>
              <span className="text-xs text-on-surface-variant">· {featured.readTime} lectura</span>
            </div>
            <h2 className="font-manrope text-2xl md:text-3xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">
              {featured.title}
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">{featured.description}</p>
            <span className="text-secondary font-bold text-sm flex items-center gap-1">
              Leer artículo completo →
            </span>
          </div>
        </Link>

        {/* Rest of posts */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <div className="bg-white rounded-xl shadow-card border border-outline-variant/30 p-6 h-full hover:shadow-card-lg transition-shadow">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${CATEGORY_COLORS[post.category] ?? 'bg-surface-container text-on-surface-variant'}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-on-surface-variant">{post.readTime} lectura</span>
                </div>
                <h2 className="font-manrope text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4 line-clamp-3">{post.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-on-surface-variant">{formatDate(post.date)}</span>
                  <span className="text-secondary font-bold text-sm">Leer →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-10 text-white text-center">
          <h2 className="font-manrope text-2xl font-bold mb-3">¿Necesitas asesoría personalizada?</h2>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto">
            Cada situación es única. Habla con un especialista en insolvencia y descubre qué opciones tienes.
          </p>
          <Link
            href="/#formulario"
            className="inline-block bg-secondary text-primary px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
          >
            Consulta Gratuita
          </Link>
        </div>
      </div>
    </div>
  )
}
