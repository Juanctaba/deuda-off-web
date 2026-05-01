import type { Metadata } from 'next'
import Link from 'next/link'
import CRMForm from '@/components/CRMForm'
import { WA_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: '¿Por qué Deuda OFF? Comparativa de opciones para salir de deudas en Colombia',
  description: 'Descubre por qué Deuda OFF es la opción más completa para el proceso de insolvencia de persona natural. Comparamos alternativas: hacerlo solo, gestores sin aval y abogados especializados.',
  alternates: { canonical: 'https://deudaoff.com/por-que-deuda-off' },
}

const COMPARISON_ROWS = [
  { feature: 'Proceso legal certificado bajo Ley 2445 de 2025', deudaOff: true, solo: false, otros: null },
  { feature: 'Suspensión inmediata de embargos desde la radicación', deudaOff: true, solo: false, otros: false },
  { feature: 'Respaldo firma jurídica (Núcleo Jurídico SAS)', deudaOff: true, solo: false, otros: false },
  { feature: '+750 casos resueltos desde 2020', deudaOff: true, solo: null, otros: false },
  { feature: 'Primera consulta gratuita y sin compromiso', deudaOff: true, solo: null, otros: null },
  { feature: 'Sin grandes pagos anticipados', deudaOff: true, solo: null, otros: null },
  { feature: 'Acompañamiento completo hasta el acuerdo final', deudaOff: true, solo: false, otros: null },
  { feature: 'Atención 100% virtual — sin desplazarse', deudaOff: true, solo: null, otros: null },
  { feature: 'Vigilado por la Superintendencia de Sociedades', deudaOff: true, solo: false, otros: false },
]

const DIFFERENTIATORS = [
  {
    icon: 'gavel',
    title: 'Especialización exclusiva en insolvencia',
    desc: 'No somos un bufete generalista. Deuda OFF — Núcleo Jurídico SAS trabaja exclusivamente en insolvencia de persona natural. Eso significa más experiencia, mejores resultados y menos errores.',
  },
  {
    icon: 'verified',
    title: 'Respaldo legal real y verificable',
    desc: 'Somos Núcleo Jurídico SAS, firma jurídica colombiana con más de 750 casos resueltos desde 2020, vigilada por la Superintendencia de Sociedades. Puedes verificar nuestra trayectoria.',
  },
  {
    icon: 'laptop',
    title: 'Proceso 100% virtual — sin filas ni juzgados',
    desc: 'Toda la asesoría, preparación de documentos y seguimiento se hace por videollamada y canales digitales. Atendemos en todo el territorio colombiano sin que tengas que desplazarte.',
  },
]

const TESTIMONIALS = [
  {
    initials: 'CR',
    name: 'Carlos Rodriguez',
    city: 'Bogotá, D.C.',
    text: '"Debía más de 120 millones y los bancos me tenían desesperado. Con Deuda OFF logramos un acuerdo donde pago solo lo que puedo y recuperé mi casa. Gracias infinitas."',
  },
  {
    initials: 'MG',
    name: 'Martha Lucía Gomez',
    city: 'Medellín, Antioquia',
    text: '"Pensé que lo perdería todo por mi negocio. El equipo de Deuda OFF me guió con paciencia y profesionalismo. Hoy duermo tranquila sabiendo que estoy protegida."',
  },
]

const FAQS = [
  {
    q: '¿Puedo hacer el proceso de insolvencia yo solo sin abogado?',
    a: 'Técnicamente es posible presentar una solicitud de insolvencia sin abogado, pero en la práctica es muy difícil. El proceso requiere la elaboración de un inventario preciso de activos y pasivos, la redacción de una propuesta de acuerdo viable, y la representación en audiencias de negociación con los acreedores. Un error en la radicación puede generar el rechazo de la solicitud y perder la protección legal. Con Deuda OFF tienes abogados especializados que han gestionado más de 750 casos.',
  },
  {
    q: '¿Qué riesgos tiene contratar un gestor de deudas que no sea abogado?',
    a: 'Los gestores de deudas sin título de abogado no pueden representarte legalmente ante Centros de Conciliación ni la Superintendencia de Sociedades. En muchos casos cobran honorarios elevados por servicios que no tienen validez legal. El proceso de insolvencia es un procedimiento jurídico formal que requiere asesoría y representación por parte de abogados certificados.',
  },
  {
    q: '¿Cuánto cuesta Deuda OFF comparado con seguir pagando mis deudas?',
    a: 'Seguir pagando solo los intereses de una deuda de $50 millones puede costar más de $2 millones mensuales indefinidamente, sin reducir el capital. El costo del proceso de insolvencia con Deuda OFF se pacta según tu caso y generalmente se incluye dentro del plan de pagos acordado, sin grandes desembolsos iniciales. La consulta inicial es completamente gratuita.',
  },
  {
    q: '¿Qué diferencia concretamente a Deuda OFF de otras firmas de insolvencia?',
    a: 'La diferencia principal es la especialización. Deuda OFF — Núcleo Jurídico SAS trabaja exclusivamente en insolvencia de persona natural desde 2020, con más de 750 casos resueltos. No somos una firma generalista que hace insolvencias como un servicio más entre muchos. Esa especialización se traduce en mayor conocimiento de los criterios de cada conciliador, mejores propuestas de acuerdo y mayor tasa de éxito.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://deudaoff.com' },
    { '@type': 'ListItem', position: 2, name: '¿Por qué Deuda OFF?', item: 'https://deudaoff.com/por-que-deuda-off' },
  ],
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

function Cell({ value }: { value: boolean | null }) {
  if (value === true) return <span className="text-secondary font-bold text-xl">✓</span>
  if (value === false) return <span className="text-error font-bold text-xl">✗</span>
  return <span className="text-on-surface-variant text-sm">—</span>
}

export default function PorQueDeudaOff() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-surface">

        {/* Hero */}
        <div className="bg-primary text-white py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-xs mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>›</span>
              <span className="text-white/70">¿Por qué Deuda OFF?</span>
            </nav>
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
              Comparativa objetiva
            </div>
            <h1 className="font-manrope text-4xl md:text-5xl font-bold mb-5 leading-tight">
              ¿Por qué elegir Deuda OFF para tu proceso de insolvencia?
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl leading-relaxed mb-8">
              Cuando estás en deuda, cada decisión cuenta. Te explicamos qué nos diferencia y por qué +750 colombianos nos eligieron desde 2020.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#formulario" className="bg-secondary text-primary px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all">
                Consulta Gratuita
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-5 py-16 space-y-20">

          {/* Definicion directa */}
          <div className="bg-secondary-container border-l-4 border-secondary px-6 py-5 rounded-r-xl">
            <p className="text-on-surface leading-relaxed">
              <strong>¿Qué es Deuda OFF?</strong> Deuda OFF es la línea especializada de Núcleo Jurídico SAS, firma jurídica colombiana con más de 750 casos de insolvencia de persona natural resueltos exitosamente desde 2020. Nos dedicamos exclusivamente a este proceso bajo la Ley 2445 de 2025, con atención 100% virtual para todo Colombia.
            </p>
          </div>

          {/* Tabla comparativa */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-3 text-center">Comparativa de opciones</h2>
            <p className="text-on-surface-variant text-center mb-10">Así se compara Deuda OFF frente a las alternativas más comunes</p>
            <div className="overflow-x-auto rounded-2xl border border-outline-variant/30 shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-6 py-4 font-semibold w-1/2">Característica</th>
                    <th className="text-center px-4 py-4 font-semibold">
                      <span className="block text-secondary">Deuda OFF</span>
                      <span className="text-xs text-blue-200 font-normal">Núcleo Jurídico SAS</span>
                    </th>
                    <th className="text-center px-4 py-4 font-semibold text-blue-200">Hacerlo solo</th>
                    <th className="text-center px-4 py-4 font-semibold text-blue-200">Otras asesorías</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                      <td className="px-6 py-4 text-on-surface">{row.feature}</td>
                      <td className="px-4 py-4 text-center"><Cell value={row.deudaOff} /></td>
                      <td className="px-4 py-4 text-center"><Cell value={row.solo} /></td>
                      <td className="px-4 py-4 text-center"><Cell value={row.otros} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-on-surface-variant mt-3 text-center">✓ Sí aplica · ✗ No aplica · — Varía según el caso</p>
          </section>

          {/* Diferenciadores */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-3 text-center">Lo que nos hace diferentes</h2>
            <p className="text-on-surface-variant text-center mb-10 max-w-2xl mx-auto">
              No somos una firma más. Somos el equipo con mayor experiencia documentada en insolvencia de persona natural en Colombia.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {DIFFERENTIATORS.map(d => (
                <div key={d.title} className="bg-white rounded-2xl p-8 shadow-card border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary text-5xl mb-4 block">{d.icon}</span>
                  <h3 className="font-manrope font-bold text-primary text-lg mb-3">{d.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats bar */}
          <section className="bg-primary rounded-3xl p-10 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '+750', label: 'Casos resueltos' },
                { value: 'Desde 2020', label: 'Años de experiencia' },
                { value: '100%', label: 'Virtual — todo Colombia' },
                { value: 'Gratis', label: 'Primera consulta' },
              ].map(s => (
                <div key={s.label}>
                  <p className="font-manrope text-3xl font-bold text-secondary mb-1">{s.value}</p>
                  <p className="text-blue-200 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonios */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary text-center mb-10">Lo que dicen quienes nos eligieron</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {TESTIMONIALS.map(t => (
                <div key={t.name} className="bg-[#F0FFF4] p-8 rounded-2xl border border-secondary/10">
                  <div className="flex gap-1 text-secondary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined filled text-xl">star</span>
                    ))}
                  </div>
                  <p className="text-on-surface text-sm leading-relaxed italic mb-6">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xs">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm">{t.name}</p>
                      <p className="text-xs text-on-surface-variant">{t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/casos-de-exito" className="text-secondary font-bold hover:underline">
                Ver más casos de éxito →
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary text-center mb-10">Preguntas frecuentes sobre la elección</h2>
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

          {/* CTA + Form */}
          <section id="formulario" className="bg-surface-container-low rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-manrope text-3xl font-bold text-primary mb-4 leading-tight">
                  Da el primer paso hoy — la consulta es gratuita
                </h2>
                <p className="text-on-surface-variant text-lg mb-6 leading-relaxed">
                  Cuéntanos tu situación y un especialista de Deuda OFF te explica si aplicas para el proceso de insolvencia y qué resultado puedes esperar.
                </p>
                <div className="space-y-3 text-sm text-on-surface-variant">
                  {[
                    'Consulta confidencial y sin compromiso.',
                    'Respuesta en menos de 24 horas.',
                    'Abogados especializados en Ley 2445 de 2025.',
                  ].map(item => (
                    <div key={item} className="flex gap-2 items-start">
                      <span className="text-secondary mt-0.5">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
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
