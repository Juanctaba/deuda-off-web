import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import Script from 'next/script'
import ConditionalHeader from '@/components/ConditionalHeader'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Deuda OFF — Elimina tus Deudas Legalmente en Colombia',
  description: 'Acógete a la Ley de Insolvencia de Persona Natural. Protege tu patrimonio, frena embargos y recupera tu tranquilidad financiera. +750 casos resueltos desde 2020. Núcleo Jurídico.',
  keywords: 'insolvencia persona natural colombia, eliminar deudas legalmente, proceso insolvencia colombia, ley 2445 de 2025, ley insolvencia colombia, no puedo pagar mis deudas, abogado insolvencia colombia',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
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
    telephone: '+57-305-239-6052',
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
  telephone: '+57-305-239-6052',
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
    <html lang="es" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect para dominios externos críticos */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://api.deudaoff.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Material Symbols — carga no bloqueante con rango restringido */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0&display=swap"
          />
        </noscript>

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
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKN72FRX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ConditionalHeader>{children}</ConditionalHeader>
      </body>
    </html>
  )
}
