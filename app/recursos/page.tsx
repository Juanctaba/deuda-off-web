import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Recursos sobre Insolvencia de Persona Natural en Colombia | Deuda OFF',
  description: 'Artículos, guías y recursos prácticos sobre insolvencia de persona natural en Colombia, Ley 2445 de 2025 y cómo proteger tu patrimonio.',
  alternates: { canonical: 'https://deudaoff.com/recursos' },
  openGraph: {
    title: 'Recursos sobre Insolvencia de Persona Natural en Colombia',
    description: 'Artículos, guías y recursos prácticos sobre la Ley 2445 de 2025 y cómo proteger tu patrimonio.',
    url: 'https://deudaoff.com/recursos',
    siteName: 'Deuda OFF',
    locale: 'es_CO',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://deudaoff.com' },
    { '@type': 'ListItem', position: 2, name: 'Recursos', item: 'https://deudaoff.com/recursos' },
  ],
}

export default function RecursosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-surface">
        <div className="bg-primary text-white py-20 px-5">
          <div className="max-w-5xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-xs mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>›</span>
              <span className="text-white/70">Recursos</span>
            </nav>
            <h1 className="font-manrope text-4xl md:text-5xl font-bold mb-4">Recursos</h1>
            <p className="text-blue-200 text-lg max-w-2xl">
              Artículos, guías y novedades sobre insolvencia de persona natural en Colombia.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-5 py-16">
          <div id="soro-blog" />
        </div>
      </div>

      <Script
        src="https://app.trysoro.com/api/embed/e8016fb6-24c7-4925-a78d-73af8f0cde17"
        strategy="afterInteractive"
      />
    </>
  )
}
