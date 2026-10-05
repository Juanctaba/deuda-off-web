import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const Calculadora = dynamic(() => import('./Calculadora'), { ssr: false })

export const metadata: Metadata = {
  title: '¿Califico para Insolvencia? — Calculadora Deuda OFF',
  description: 'Descubre en 2 minutos si calificas para el Procedimiento de Insolvencia de Persona Natural bajo la Ley 2445 de 2025. Gratuito y confidencial.',
  alternates: { canonical: 'https://deudaoff.com/calculadora' },
  openGraph: {
    title: 'Calculadora de insolvencia: ¿califico? — Deuda OFF',
    description: 'Responde 6 preguntas y en 2 minutos sabrás si calificas para acogerte a la Ley de Insolvencia.',
    url: 'https://deudaoff.com/calculadora',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function CalculadoraPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Shell SSR: H1 + intro indexables aunque el widget sea client-only */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 lg:pt-12 pb-2">
        <h1 className="font-manrope text-2xl sm:text-3xl font-bold text-primary leading-tight max-w-3xl">
          ¿Puedo eliminar mis deudas legalmente?
        </h1>
        <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mt-3 max-w-2xl">
          Calculadora gratuita de insolvencia de persona natural (Ley 2445 de 2025).
          Responde 6 preguntas y en 2 minutos sabrás si calificas. Confidencial y sin compromiso.
        </p>
      </header>
      <Calculadora />
    </div>
  )
}
