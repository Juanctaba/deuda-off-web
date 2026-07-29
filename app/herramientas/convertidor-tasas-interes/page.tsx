import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { WA_URL } from '@/lib/constants'

const Convertidor = dynamic(() => import('./Convertidor'), { ssr: false })

export const metadata: Metadata = {
  title: 'Convertidor de tasas de interés: efectiva anual a mensual y viceversa',
  description:
    'Convierte tasas de interés efectivas entre periodos: de efectiva anual a mensual, de mensual a anual, trimestral, semestral o diaria. Calculadora gratuita con la fórmula explicada.',
  alternates: { canonical: 'https://deudaoff.com/herramientas/convertidor-tasas-interes' },
  openGraph: {
    title: 'Convertidor de tasas de interés — efectiva anual a mensual',
    description:
      'Calculadora gratuita para convertir tasas efectivas entre periodos, con la fórmula de capitalización compuesta explicada paso a paso.',
    url: 'https://deudaoff.com/herramientas/convertidor-tasas-interes',
    locale: 'es_CO',
    type: 'website',
  },
}

/** Equivalencias de referencia — tabla estática, indexable, para captura de fragmentos. */
const EQUIVALENCIAS = [
  { ea: '12%', mensual: '0,9489%', trimestral: '2,8737%', semestral: '5,8301%' },
  { ea: '18%', mensual: '1,3888%', trimestral: '4,2247%', semestral: '8,6278%' },
  { ea: '24%', mensual: '1,8088%', trimestral: '5,5250%', semestral: '11,3553%' },
  { ea: '28%', mensual: '2,0785%', trimestral: '6,3659%', semestral: '13,1371%' },
  { ea: '32%', mensual: '2,3406%', trimestral: '7,1873%', semestral: '14,8913%' },
  { ea: '40%', mensual: '2,8436%', trimestral: '8,7757%', semestral: '18,3216%' },
]

const FAQS = [
  {
    q: '¿Cómo convertir una tasa efectiva anual a mensual?',
    a: 'Se usa la fórmula de capitalización compuesta: tasa mensual = (1 + tasa efectiva anual) elevado a (1/12), menos 1. No se divide entre 12. Por ejemplo, una tasa efectiva anual del 28% equivale a 2,0785% efectivo mensual, no al 2,33% que daría la división simple.',
  },
  {
    q: '¿Por qué no puedo simplemente dividir la tasa anual entre 12?',
    a: 'Porque las tasas efectivas incorporan el efecto del interés compuesto: los intereses de cada periodo generan intereses en los siguientes. Dividir entre 12 da la tasa nominal, no la efectiva, y siempre arroja un valor mayor al real. La diferencia crece a medida que sube la tasa.',
  },
  {
    q: '¿Cuál es la diferencia entre tasa nominal y tasa efectiva?',
    a: 'La tasa nominal es una tasa anual que se expresa junto con su periodicidad de capitalización y se reparte proporcionalmente entre los periodos. La tasa efectiva ya incorpora el efecto de la capitalización y refleja el costo real. En Colombia, la Superintendencia Financiera publica el interés bancario corriente en términos efectivos anuales.',
  },
  {
    q: '¿Cómo convertir de mensual a efectiva anual?',
    a: 'Se aplica la fórmula inversa: tasa efectiva anual = (1 + tasa mensual) elevado a 12, menos 1. Una tasa del 2% efectivo mensual equivale a 26,8242% efectivo anual.',
  },
  {
    q: '¿Qué es la tasa efectiva anual (E.A.)?',
    a: 'Es la tasa que expresa el rendimiento o costo real de una operación financiera en un año, incorporando el efecto de la capitalización de intereses. Es la referencia estándar en Colombia para comparar productos financieros, porque permite comparar créditos con distintas periodicidades de pago sobre una misma base.',
  },
  {
    q: '¿Para qué me sirve convertir tasas si tengo deudas?',
    a: 'Para saber cuánto te está costando realmente cada obligación y compararlas entre sí. Un crédito al 2,5% mensual y otro al 32% anual parecen distintos, pero el primero equivale a 34,49% efectivo anual: es más caro. Ese cálculo es el punto de partida para decidir qué deuda atacar primero o si tu situación ya requiere un proceso de insolvencia.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://deudaoff.com' },
    { '@type': 'ListItem', position: 2, name: 'Herramientas', item: 'https://deudaoff.com/herramientas/convertidor-tasas-interes' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Convertidor de tasas de interés',
      item: 'https://deudaoff.com/herramientas/convertidor-tasas-interes',
    },
  ],
}

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Convertidor de tasas de interés',
  url: 'https://deudaoff.com/herramientas/convertidor-tasas-interes',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web',
  inLanguage: 'es-CO',
  description:
    'Calculadora gratuita para convertir tasas de interés efectivas entre periodos: anual, semestral, cuatrimestral, trimestral, bimestral, mensual y diaria.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'COP' },
  publisher: { '@type': 'Organization', name: 'Deuda OFF — Núcleo Jurídico SAS' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function ConvertidorTasas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-surface">
        {/* Hero */}
        <div className="bg-primary text-white py-14 px-5">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-xs mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>›</span>
              <span className="text-white/70">Convertidor de tasas</span>
            </nav>
            <h1 className="font-manrope text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Convertidor de tasas de interés
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Convierte una tasa efectiva entre periodos —de anual a mensual, de mensual a anual, trimestral,
              semestral o diaria— con la fórmula de capitalización compuesta. Gratis y sin registro.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 py-12">
          <Convertidor />

          {/* Contenido indexable */}
          <div
            className="
              mt-14
              [&_h2]:font-manrope [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:font-manrope [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mt-6 [&_h3]:mb-2
              [&_p]:text-on-surface [&_p]:leading-relaxed [&_p]:mb-4
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_li]:text-on-surface-variant
              [&_strong]:text-on-surface [&_strong]:font-semibold
            "
          >
            <div className="bg-secondary-container border-l-4 border-secondary px-5 py-4 rounded-r-xl mb-6">
              <p className="text-on-surface leading-relaxed !mb-0">
                <strong className="text-secondary font-bold">Respuesta directa:</strong> para convertir una tasa
                efectiva anual a mensual se aplica la fórmula (1 + E.A.)<sup>1/12</sup> − 1. No se divide entre 12. Una
                tasa efectiva anual del 28% equivale a <strong>2,0785% efectivo mensual</strong>.
              </p>
            </div>

            <h2>Cómo convertir una tasa efectiva anual a mensual</h2>
            <p>
              El error más común en finanzas personales es dividir la tasa anual entre 12. Eso da la{' '}
              <strong>tasa nominal</strong>, no la efectiva, y siempre arroja un número mayor al costo real del
              periodo. La conversión correcta usa capitalización compuesta:
            </p>
            <p className="font-mono text-sm bg-surface-container rounded-xl p-4 border border-outline-variant/40 overflow-x-auto">
              i<sub>mensual</sub> = (1 + E.A.)<sup>1/12</sup> − 1
            </p>
            <p>
              Con una efectiva anual del 28%: (1 + 0,28)<sup>1/12</sup> − 1 = 0,020785, es decir{' '}
              <strong>2,0785% efectivo mensual</strong>. La división simple habría dado 2,33%, un 12% por encima del
              valor real.
            </p>

            <h2>Cómo convertir de mensual a efectiva anual</h2>
            <p>La fórmula inversa eleva a 12 en lugar de sacar la raíz:</p>
            <p className="font-mono text-sm bg-surface-container rounded-xl p-4 border border-outline-variant/40 overflow-x-auto">
              E.A. = (1 + i<sub>mensual</sub>)<sup>12</sup> − 1
            </p>
            <p>
              Una tasa del 2% efectivo mensual equivale a <strong>26,8242% efectivo anual</strong>. Es el cálculo que
              conviene hacer antes de aceptar cualquier crédito que se ofrezca «al 2% mensual».
            </p>

            <h2>Tasa nominal y tasa efectiva: la diferencia que cuesta dinero</h2>
            <p>
              La <strong>tasa nominal</strong> es una tasa anual que se reparte proporcionalmente entre los periodos de
              capitalización. La <strong>tasa efectiva</strong> ya incorpora ese efecto y refleja el costo real. En
              Colombia, la Superintendencia Financiera publica el interés bancario corriente en términos efectivos
              anuales, precisamente para que las comparaciones sean sobre la misma base.
            </p>
            <p>
              Regla práctica: cuando alguien te ofrece una tasa, pregunta siempre si es <strong>nominal o efectiva</strong>{' '}
              y con qué periodicidad. Sin esos dos datos, el número no significa nada.
            </p>

            <h2>Tabla de equivalencias de referencia</h2>
            <p>Conversiones frecuentes a partir de la tasa efectiva anual:</p>
            <div className="overflow-x-auto my-6 rounded-xl border border-outline-variant/50">
              <table className="w-full text-sm border-collapse min-w-[420px]">
                <thead className="bg-primary">
                  <tr>
                    <th className="text-white font-manrope font-bold text-left px-4 py-3 text-xs uppercase tracking-wider">Efectiva anual</th>
                    <th className="text-white font-manrope font-bold text-left px-4 py-3 text-xs uppercase tracking-wider">Mensual</th>
                    <th className="text-white font-manrope font-bold text-left px-4 py-3 text-xs uppercase tracking-wider">Trimestral</th>
                    <th className="text-white font-manrope font-bold text-left px-4 py-3 text-xs uppercase tracking-wider">Semestral</th>
                  </tr>
                </thead>
                <tbody>
                  {EQUIVALENCIAS.map((e, i) => (
                    <tr key={e.ea} className={i % 2 === 1 ? 'bg-surface-container/60' : ''}>
                      <td className="px-4 py-3 border-t border-outline-variant/40 font-bold text-primary">{e.ea}</td>
                      <td className="px-4 py-3 border-t border-outline-variant/40 text-on-surface-variant">{e.mensual}</td>
                      <td className="px-4 py-3 border-t border-outline-variant/40 text-on-surface-variant">{e.trimestral}</td>
                      <td className="px-4 py-3 border-t border-outline-variant/40 text-on-surface-variant">{e.semestral}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Por qué esto importa si tienes deudas</h2>
            <p>
              Convertir tasas no es un ejercicio académico: es lo que te permite ver qué obligación te está costando
              más. Un crédito «al 2,5% mensual» equivale a 34,49% efectivo anual, más caro que uno al 32% anual aunque
              a primera vista parezca lo contrario.
            </p>
            <p>
              Cuando el costo financiero supera de forma sostenida tu capacidad de pago, ninguna reorganización del
              presupuesto alcanza. Ahí es donde entra el marco legal: si acumulas mora superior a 90 días con dos o más
              acreedores y esas obligaciones representan al menos el 30% de tu pasivo, cumples el presupuesto del
              artículo 538 del Código General del Proceso y puedes acogerte al{' '}
              <Link href="/blog/ley-2445-de-2025-insolvencia-colombia" className="text-secondary font-semibold hover:underline">
                procedimiento de insolvencia de la Ley 2445 de 2025
              </Link>
              .
            </p>

            <h2>Preguntas frecuentes</h2>
            <div className="space-y-4 not-prose">
              {FAQS.map(f => (
                <div key={f.q} className="bg-white rounded-xl p-5 border border-outline-variant/40 shadow-card">
                  <h3 className="font-manrope font-semibold text-primary mb-2 !mt-0">{f.q}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed !mb-0">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-56 h-56 bg-secondary/20 rounded-full blur-3xl -mr-28 -mt-28" />
            <div className="relative z-10">
              <h2 className="font-manrope text-2xl font-bold mb-3">
                ¿Los intereses ya crecen más rápido de lo que puedes pagar?
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                Si tus deudas superaron tu capacidad real de pago, la ley colombiana tiene una salida. Revisamos tu
                caso sin costo y te decimos si calificas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://deudaoff.com/calculadora"
                  className="px-7 py-3 bg-secondary text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-95 transition-all"
                >
                  <span className="material-symbols-outlined text-base">calculate</span>
                  Ver si califico
                </a>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 border-2 border-white/30 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  <span className="material-symbols-outlined text-xl">chat</span>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
