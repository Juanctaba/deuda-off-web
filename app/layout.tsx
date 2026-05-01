import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deuda OFF — Elimina tus Deudas Legalmente en Colombia',
  description: 'Acógete a la Ley de Insolvencia de Persona Natural. Protege tu patrimonio, frena embargos y recupera tu tranquilidad financiera. +750 casos resueltos. Núcleo Jurídico.',
  keywords: 'insolvencia persona natural colombia, eliminar deudas legalmente, proceso insolvencia colombia, ley 2445 de 2025, ley insolvencia colombia, no puedo pagar mis deudas, abogado insolvencia colombia',
  alternates: {
    canonical: 'https://deudaoff.com',
    languages: {
      'es-CO': 'https://deudaoff.com',
    },
  },
  openGraph: {
    title: 'Deuda OFF — Elimina tus Deudas Legalmente',
    description: '+750 casos resueltos. Primera consulta gratuita. Respaldados por Núcleo Jurídico.',
    url: 'https://deudaoff.com',
    siteName: 'Deuda OFF',
    locale: 'es_CO',
    type: 'website',
  },
}

const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Deuda OFF — Núcleo Jurídico SAS',
  url: 'https://deudaoff.com',
  logo: 'https://deudaoff.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+57-300-355-2751',
    contactType: 'customer service',
    areaServed: 'CO',
    availableLanguage: 'Spanish',
  },
  sameAs: [],
}

const schemaLegalService = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Deuda OFF — Insolvencia de Persona Natural',
  description: 'Servicio legal especializado en insolvencia de persona natural en Colombia. Acógete a la Ley 2445 de 2025. Protege tu patrimonio y frena embargos.',
  url: 'https://deudaoff.com',
  telephone: '+57-300-355-2751',
  priceRange: 'Consulta gratuita',
  areaServed: {
    '@type': 'Country',
    name: 'Colombia',
  },
  serviceType: 'Insolvencia de Persona Natural',
  provider: {
    '@type': 'Organization',
    name: 'Núcleo Jurídico SAS',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KKN72FRX');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLegalService) }}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKN72FRX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
