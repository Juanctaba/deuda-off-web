import type { Metadata } from 'next'
import Link from 'next/link'
import CRMForm from '@/components/CRMForm'
import { WA_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Casos de Éxito en Insolvencia de Persona Natural — +750 Casos Resueltos | Deuda OFF',
  description: 'Historias reales de colombianos que lograron salir de sus deudas legalmente con Deuda OFF. Más de 750 casos resueltos desde 2020 bajo la Ley de Insolvencia de Persona Natural.',
  alternates: { canonical: 'https://deudaoff.com/casos-de-exito' },
}

const CASES = [
  {
    initials: 'C.R.',
    city: 'Bogotá, D.C.',
    debtTotal: '$120 millones',
    debtType: 'Bancos + tarjetas de crédito',
    result: 'Acuerdo al 35% del saldo original',
    time: '5 meses',
    outcome: 'Salvó su vivienda y negoció cuotas que podía pagar.',
    quote: 'Los bancos me tenían desesperado. Con Deuda OFF logramos un acuerdo real. Hoy vivo tranquilo.',
    color: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    initials: 'M.G.',
    city: 'Medellín, Antioquia',
    debtTotal: '$85 millones',
    debtType: 'Cooperativa + crédito de consumo',
    result: 'Extinción por liquidación patrimonial',
    time: '6 meses',
    outcome: 'Liquidó sus activos de forma ordenada y quedó libre de toda deuda.',
    quote: 'Pensé que lo perdería todo. El equipo me guió con paciencia. Hoy duermo tranquila.',
    color: 'bg-green-50 border-green-200',
    badge: 'bg-green-100 text-green-700',
  },
  {
    initials: 'J.T.',
    city: 'Cali, Valle del Cauca',
    debtTotal: '$110 millones',
    debtType: 'Crédito hipotecario + libre inversión',
    result: 'Cuota mensual reducida en un 60%',
    time: '4 meses',
    outcome: 'Renegociación del crédito hipotecario. Conservó su apartamento.',
    quote: 'No sabía que podía renegociar la hipoteca. El proceso fue más rápido de lo que esperaba.',
    color: 'bg-purple-50 border-purple-200',
    badge: 'bg-purple-100 text-purple-700',
  },
  {
    initials: 'A.P.',
    city: 'Barranquilla, Atlántico',
    debtTotal: '$82 millones',
    debtType: 'Tarjetas de crédito + Rapicredit',
    result: 'Suspensión de embargos + acuerdo de pago',
    time: '3 meses',
    outcome: 'Frenó el embargo de salario desde el primer día. Acordó cuota razonable.',
    quote: 'Me descontaban el sueldo y ya no podía ni comer. La insolvencia me salvó literalmente.',
    color: 'bg-amber-50 border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
  },
  {
    initials: 'L.M.',
    city: 'Bucaramanga, Santander',
    debtTotal: '$95 millones',
    debtType: 'Deudas personales de negocio quebrado',
    result: 'Fresh start total — deudas extinguidas',
    time: '7 meses',
    outcome: 'Cerró las deudas de su empresa anterior sin afectar su patrimonio personal futuro.',
    quote: 'Mi negocio quebró y pensé que eso me hundiría para siempre. La insolvencia me dio una segunda oportunidad.',
    color: 'bg-teal-50 border-teal-200',
    badge: 'bg-teal-100 text-teal-700',
  },
  {
    initials: 'R.V.',
    city: 'Bogotá, D.C.',
    debtTotal: '$88 millones',
    debtType: 'Préstamos gota a gota + banco',
    result: 'Acuerdo + inicio proceso limpieza Datacrédito',
    time: '4 meses',
    outcome: 'Salió del ciclo de deudas informales y acordó condiciones sostenibles con el banco.',
    quote: 'Estaba atrapado entre el gota a gota y el banco. Deuda OFF me ayudó a salir de los dos a la vez.',
    color: 'bg-rose-50 border-rose-200',
    badge: 'bg-rose-100 text-rose-700',
  },
]

const STATS = [
  { value: '+750', label: 'Casos resueltos', icon: 'check_circle' },
  { value: '+$80M', label: 'Deuda promedio negociada', icon: 'payments' },
  { value: '4–6 meses', label: 'Tiempo promedio de proceso', icon: 'schedule' },
  { value: '5 ciudades', label: 'Atención directa + todo Colombia virtual', icon: 'location_on' },
]

const FAQS = [
  {
    q: '¿Los casos mostrados son reales?',
    a: 'Los casos reflejan situaciones reales de clientes de Deuda OFF — Núcleo Jurídico SAS, con datos modificados para proteger la identidad de los involucrados. Los montos, tipos de deuda, resultados y tiempos son representativos de los procesos que gestionamos desde 2020.',
  },
  {
    q: '¿Mi caso puede tener el mismo resultado?',
    a: 'Cada caso es único. El resultado depende del monto total de deudas, el tipo de acreedores, los activos disponibles y la capacidad de pago actual. En la consulta gratuita hacemos un diagnóstico real de tu situación y te explicamos qué resultado es razonable esperar en tu caso específico.',
  },
  {
    q: '¿Qué pasa si mi deuda es mayor o menor que los casos mostrados?',
    a: 'El proceso de insolvencia de persona natural aplica independientemente del monto total de deudas, siempre que el deudor sea persona natural no comerciante y esté en cesación de pagos. Hemos resuelto casos desde $15 millones hasta más de $200 millones. El tamaño de la deuda no determina si aplicas — la situación de pago sí.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://deudaoff.com' },
    { '@type': 'ListItem', position: 2, name: 'Casos de Éxito', item: 'https://deudaoff.com/casos-de-exito' },
  ],
}

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://deudaoff.com/#legalservice',
  name: 'Deuda OFF — Insolvencia de Persona Natural',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '750',
    bestRating: '5',
    worstRating: '1',
  },
  review: CASES.map(c => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: c.initials },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: c.quote,
    locationCreated: { '@type': 'City', name: c.city.split(',')[0] },
  })),
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

export default function CasosDeExito() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-surface">

        {/* Hero */}
        <div className="bg-primary text-white py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-xs mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>›</span>
              <span className="text-white/70">Casos de Éxito</span>
            </nav>
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
              +750 casos resueltos desde 2020
            </div>
            <h1 className="font-manrope text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Más de 750 colombianos ya están libres de deudas
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl leading-relaxed mb-8">
              Historias reales de personas que decidieron actuar y recuperaron su tranquilidad financiera con la Ley de Insolvencia de Persona Natural.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                { label: '750+ casos', icon: 'check_circle' },
                { label: 'Desde 2020', icon: 'calendar_today' },
                { label: '5★ promedio', icon: 'star' },
              ].map(pill => (
                <div key={pill.label} className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full">
                  <span className="material-symbols-outlined filled text-secondary text-sm">{pill.icon}</span>
                  <span className="font-semibold">{pill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-5 py-16 space-y-20">

          {/* Stats */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-6 shadow-card border border-outline-variant/30 text-center">
                <span className="material-symbols-outlined text-secondary text-3xl mb-2 block">{s.icon}</span>
                <p className="font-manrope text-2xl font-bold text-primary mb-1">{s.value}</p>
                <p className="text-on-surface-variant text-xs leading-snug">{s.label}</p>
              </div>
            ))}
          </section>

          {/* Casos */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-3">Casos representativos</h2>
            <p className="text-on-surface-variant mb-10">
              Datos modificados para proteger la identidad. Resultados representativos de procesos gestionados por Núcleo Jurídico SAS.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {CASES.map(c => (
                <div key={c.initials + c.city} className={`rounded-2xl border p-7 ${c.color}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-sm">{c.initials}</span>
                      </div>
                      <div>
                        <p className="font-bold text-primary">{c.initials}</p>
                        <p className="text-xs text-on-surface-variant">{c.city}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.badge}`}>{c.time}</span>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex gap-2">
                      <span className="text-on-surface-variant w-24 shrink-0">Deuda total:</span>
                      <span className="font-bold text-primary">{c.debtTotal}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-on-surface-variant w-24 shrink-0">Tipo:</span>
                      <span className="text-on-surface">{c.debtType}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-on-surface-variant w-24 shrink-0">Resultado:</span>
                      <span className="font-semibold text-secondary">{c.result}</span>
                    </div>
                  </div>

                  <p className="text-on-surface text-sm mb-3">{c.outcome}</p>
                  <blockquote className="italic text-on-surface-variant text-sm border-l-2 border-secondary/40 pl-3">
                    "{c.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </section>

          {/* Process summary */}
          <section className="bg-primary rounded-3xl p-10 md:p-14 text-white">
            <h2 className="font-manrope text-2xl font-bold mb-8 text-center">¿Cómo logramos estos resultados?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { n: '1', title: 'Diagnóstico preciso', desc: 'Analizamos cada caso en detalle para identificar la estrategia legal más conveniente — reorganización o liquidación.' },
                { n: '2', title: 'Negociación experta', desc: 'Con +750 casos, conocemos los criterios de cada conciliador y los patrones de cada tipo de acreedor. Eso se traduce en mejores acuerdos.' },
                { n: '3', title: 'Acompañamiento total', desc: 'No te dejamos solo en la audiencia. Estamos contigo desde el diagnóstico hasta que el acuerdo queda firmado y las deudas extinguidas.' },
              ].map(s => (
                <div key={s.n} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-lg shrink-0 font-manrope">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold mb-2">{s.title}</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary text-center mb-10">Preguntas sobre los casos</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {FAQS.map(f => (
                <details key={f.q} className="group bg-white rounded-xl border border-outline-variant/40 shadow-card overflow-hidden">
                  <summary className="flex justify-between items-start gap-4 p-6 cursor-pointer select-none list-none">
                    <h3 className="font-manrope font-semibold text-primary leading-snug">{f.q}</h3>
                    <span className="text-secondary shrink-0 mt-0.5 group-open:rotate-180 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-on-surface-variant leading-relaxed">{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section id="formulario" className="bg-surface-container-low rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-manrope text-3xl font-bold text-primary mb-4 leading-tight">
                  Tu historia de éxito empieza con una consulta gratuita
                </h2>
                <p className="text-on-surface-variant text-lg mb-6 leading-relaxed">
                  Únete a los más de 750 colombianos que recuperaron su tranquilidad financiera con la Ley de Insolvencia de Persona Natural.
                </p>
                <div className="space-y-3 text-sm text-on-surface-variant mb-6">
                  {[
                    'Diagnóstico gratuito y confidencial.',
                    'Suspensión de embargos desde el primer día.',
                    'Abogados especializados en Ley 2445 de 2025.',
                  ].map(item => (
                    <div key={item} className="flex gap-2 items-start">
                      <span className="text-secondary mt-0.5">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-secondary text-secondary px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-secondary/5 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.335-1.502A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.73.885.945-3.64-.234-.374A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
                  </svg>
                  Consultar por WhatsApp
                </a>
              </div>
              <div className="bg-white rounded-2xl shadow-card p-6 border border-outline-variant/30">
                <CRMForm />
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
