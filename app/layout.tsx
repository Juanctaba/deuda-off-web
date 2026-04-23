import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deuda OFF — Elimina tus Deudas Legalmente en Colombia',
  description: 'Acógete a la Ley de Insolvencia de Persona Natural. Protege tu patrimonio, frena embargos y recupera tu tranquilidad financiera. +750 casos resueltos. Núcleo Jurídico.',
  keywords: 'insolvencia persona natural colombia, eliminar deudas legalmente, proceso insolvencia colombia, ley 1564, no puedo pagar mis deudas',
  openGraph: {
    title: 'Deuda OFF — Elimina tus Deudas Legalmente',
    description: '+750 casos resueltos. Primera consulta gratuita. Respaldados por Núcleo Jurídico.',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
