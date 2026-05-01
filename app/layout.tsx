import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deuda OFF — Elimina tus Deudas Legalmente en Colombia',
  description: 'Acógete a la Ley de Insolvencia de Persona Natural. Protege tu patrimonio, frena embargos y recupera tu tranquilidad financiera. +750 casos resueltos desde 2020. Núcleo Jurídico.',
  keywords: 'insolvencia persona natural colombia, eliminar deudas legalmente, proceso insolvencia colombia, ley 2445 de 2025, ley insolvencia colombia, no puedo pagar mis deudas, abogado insolvencia colombia',
  alternates: {
    canonical: 'https://deudaoff.com',
    languages: { 'es-CO': 'https://deudaoff.com' },
  },
  openGraph: {
    title: 'Deuda OFF — Elimina tus Deudas Legalmente',
    description: '+750 casos resueltos desde 2020. Primera consulta gratuita. Respaldados por Núcleo Jurídico.',
    url: 'https://deudaoff.com',
    siteName: 'Deuda OFF',
    locale: 'es_CO',
    type: 'website',
  },
}

const schemaWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Deuda OFF',
  url: 'https://deudaoff.com',
  description: 'Servicio legal especializado en insolvencia de persona natural en Colombia bajo la Ley 2445 de 2025.',
  inLanguage: 'es-CO',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://deudaoff.com/blog?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://deudaoff.com/#organization',
  name: 'Núcleo Jurídico SAS',
  brand: {
    '@type': 'Brand',
    name: 'Deuda OFF',
    description: 'Línea de negocio especializada en insolvencia de persona natural en Colombia.',
  },
  url: 'https://deudaoff.com',
  logo: 'https://deudaoff.com/logo.png',
  foundingDate: '2020',
  description: 'Firma jurídica colombiana especializada en el procedimiento de insolvencia de persona natural no comerciante, con más de 750 casos resueltos desde 2020.',
  knowsAbout: [
    'Insolvencia de persona natural Colombia',
    'Ley 2445 de 2025',
    'Procedimiento de negociación de deudas',
    'Liquidación patrimonial persona natural',
    'Superintendencia de Sociedades Colombia',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+57-300-355-2751',
    contactType: 'customer service',
    areaServed: 'CO',
    availableLanguage: 'Spanish',
    contactOption: 'TollFree',
  },
  areaServed: [
    { '@type': 'City', name: 'Bogotá' },
    { '@type': 'City', name: 'Medellín' },
    { '@type': 'City', name: 'Cali' },
    { '@type': 'City', name: 'Barranquilla' },
    { '@type': 'City', name: 'Bucaramanga' },
    { '@type': 'Country', name: 'Colombia' },
  ],
  sameAs: [],
}

const schemaLegalService = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': 'https://deudaoff.com/#legalservice',
  name: 'Deuda OFF — Insolvencia de Persona Natural en Colombia',
  description: 'Servicio legal especializado en insolvencia de persona natural en Colombia. Acógete a la Ley 2445 de 2025: suspende embargos, negocia tus deudas y empieza de nuevo.',
  url: 'https://deudaoff.com',
  telephone: '+57-300-355-2751',
  priceRange: 'Consulta gratuita — honorarios según el caso',
  currenciesAccepted: 'COP',
  paymentAccepted: 'Efectivo, transferencia bancaria',
  areaServed: [
    { '@type': 'Country', name: 'Colombia' },
    { '@type': 'City', name: 'Bogotá' },
    { '@type': 'City', name: 'Medellín' },
    { '@type': 'City', name: 'Cali' },
    { '@type': 'City', name: 'Barranquilla' },
    { '@type': 'City', name: 'Bucaramanga' },
  ],
  serviceType: 'Insolvencia de Persona Natural',
  knowsAbout: [
    'Ley 2445 de 2025 — Insolvencia persona natural Colombia',
    'Procedimiento de negociación de deudas',
    'Liquidación patrimonial persona natural',
    'Suspensión de embargos de salario',
    'Acoso de cobranza — derechos del deudor',
    'Centrales de riesgo Datacrédito Colombia',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Insolvencia de Persona Natural',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consulta gratuita de diagnóstico',
          description: 'Evaluación sin costo de tu situación financiera y elegibilidad para el proceso de insolvencia.',
        },
        price: '0',
        priceCurrency: 'COP',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Procedimiento de negociación de deudas',
          description: 'Proceso legal bajo la Ley 2445 de 2025 para reorganizar tus deudas con todos los acreedores.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Liquidación patrimonial',
          description: 'Proceso de liquidación ordenada de activos para deudores sin capacidad de pago.',
        },
      },
    ],
  },
  provider: {
    '@type': 'Organization',
    '@id': 'https://deudaoff.com/#organization',
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLegalService) }} />
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
