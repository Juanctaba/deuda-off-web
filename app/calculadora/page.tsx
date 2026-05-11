import type { Metadata } from 'next'
import Calculadora from './Calculadora'

export const metadata: Metadata = {
  title: '¿Califico para Insolvencia? — Calculadora Deuda OFF',
  description: 'Descubre en 2 minutos si calificas para eliminar tus deudas legalmente con la Ley de Insolvencia de Persona Natural (Ley 2445 de 2025). Gratuito y confidencial.',
  alternates: { canonical: 'https://deudaoff.com/calculadora' },
  robots: { index: false, follow: false },
  openGraph: {
    title: '¿Califico para eliminar mis deudas? — Deuda OFF',
    description: 'Responde 6 preguntas y en 2 minutos sabrás si calificas para acogerte a la Ley de Insolvencia.',
    url: 'https://deudaoff.com/calculadora',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function CalculadoraPage() {
  return <Calculadora />
}
