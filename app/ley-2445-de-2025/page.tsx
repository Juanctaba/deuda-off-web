import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { WA_URL } from '@/lib/constants'

const CRMForm = dynamic(() => import('@/components/CRMForm'), { ssr: false })

const UPDATED = '2026-07-29'

export const metadata: Metadata = {
  title: 'Ley 2445 de 2025: qué cambió en la insolvencia de persona natural',
  description:
    'Guía de la Ley 2445 de 2025: a quién aplica, requisitos para acceder, los tres procedimientos de insolvencia y qué cambió frente al régimen anterior de la Ley 1564 de 2012.',
  alternates: { canonical: 'https://deudaoff.com/ley-2445-de-2025' },
  openGraph: {
    title: 'Ley 2445 de 2025 — Insolvencia de persona natural en Colombia',
    description:
      'Qué reformó la Ley 2445 de 2025, a quién aplica, requisitos de acceso y los tres procedimientos disponibles.',
    url: 'https://deudaoff.com/ley-2445-de-2025',
    locale: 'es_CO',
    type: 'article',
  },
}

/** Fuentes normativas oficiales — citadas al pie de la página. */
const FUENTES = [
  {
    label: 'Texto de la Ley 2445 de 2025 — SUIN-Juriscol (Ministerio de Justicia)',
    href: 'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30054512',
  },
  {
    label: 'Ley 2445 de 2025 — Secretaría del Senado de la República',
    href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2445_2025.html',
  },
  {
    label: 'Ley 2445 de 2025 — Rama Judicial de Colombia',
    href: 'https://sidn.ramajudicial.gov.co/SIDN/DOCTRINA/TEXTOS_COMPLETOS/infografias/Leyes/2025/Ley_2445_2025.html',
  },
  {
    label: 'Ley 1564 de 2012 (Código General del Proceso) — norma modificada',
    href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1564_2012.html',
  },
]

const APLICA = [
  {
    icon: 'person',
    title: 'Persona natural no comerciante',
    desc: 'El destinatario tradicional del régimen: empleados, pensionados, independientes y cualquier persona que no ejerza el comercio de forma profesional.',
  },
  {
    icon: 'storefront',
    title: 'Pequeño comerciante',
    desc: 'La gran novedad de la reforma. Se incorpora a la persona natural comerciante cuyos activos totales sean inferiores a 1.000 SMLMV, excluyendo del cálculo la vivienda familiar y el vehículo usado como herramienta de trabajo.',
  },
]

const REQUISITOS = [
  {
    n: '1',
    title: 'Mora superior a 90 días',
    desc: 'Estar en cesación de pagos frente a dos o más acreedores por más de noventa (90) días.',
  },
  {
    n: '2',
    title: 'O dos o más procesos en curso',
    desc: 'Alternativamente, tener en curso dos o más procesos de cobro o ejecución, o procesos de restitución de bien por mora en el pago de cánones de arrendamiento.',
  },
  {
    n: '3',
    title: 'Las deudas en mora superan el 30%',
    desc: 'El valor de las obligaciones en mora debe representar más del 30% del pasivo total a cargo del deudor. Este umbral era del 50% bajo el régimen anterior.',
  },
]

const PROCEDIMIENTOS = [
  {
    icon: 'handshake',
    title: 'Negociación de deudas',
    desc: 'El deudor presenta una propuesta de pago objetiva, construida sobre su situación económica real, su edad y el tipo de obligaciones que tiene. Se discute con los acreedores ante un conciliador y, de aprobarse, se convierte en un acuerdo vinculante.',
  },
  {
    icon: 'gavel',
    title: 'Convalidación de acuerdo privado',
    desc: 'Cuando el deudor ya logró un acuerdo por fuera del trámite con una mayoría calificada de sus acreedores, puede llevarlo a convalidación para que resulte obligatorio también para quienes no lo suscribieron.',
  },
  {
    icon: 'account_balance',
    title: 'Liquidación patrimonial',
    desc: 'La vía de cierre cuando no hay acuerdo posible. Los bienes embargables del deudor se adjudican a los acreedores hasta el monto del pasivo o del valor de los activos. Los saldos que queden sin cubrir se convierten en obligaciones naturales.',
  },
]

const EFECTOS = [
  {
    icon: 'block',
    title: 'Se suspenden los procesos ejecutivos',
    desc: 'Admitida la solicitud, quedan suspendidos los procesos de cobro y ejecución en curso contra el deudor.',
  },
  {
    icon: 'lock',
    title: 'Se frenan embargos y medidas cautelares',
    desc: 'La suspensión alcanza la ejecución aún no practicada de medidas cautelares ya decretadas sobre bienes, derechos, cuentas bancarias y demás productos financieros del deudor, junto con los actos preparatorios de esas medidas.',
  },
  {
    icon: 'payments',
    title: 'Se suspenden los descuentos de libranza',
    desc: 'Cesan los descuentos automáticos de nómina y de productos financieros desde el inicio del proceso. La única excepción son las obligaciones alimentarias del deudor. El descuento que se practique pese a la suspensión es nulo.',
  },
  {
    icon: 'work',
    title: 'Protección frente a tu empleador',
    desc: 'La ley prohíbe de forma expresa que empleadores o contratantes usen el hecho de estar en insolvencia como criterio de vinculación o de despido.',
  },
  {
    icon: 'gpp_maybe',
    title: 'Sanción al acreedor que insista en cobrar',
    desc: 'La reforma introdujo sanciones para los acreedores que realicen cobros indebidos después de haber sido notificados del trámite de insolvencia.',
  },
]

const CAMBIOS = [
  {
    antes: 'Solo cubría a la persona natural no comerciante.',
    ahora: 'Se amplía al pequeño comerciante con activos inferiores a 1.000 SMLMV. El Título IV del CGP pasó a llamarse «Insolvencia de la persona natural no comerciante y de la pequeña comerciante».',
  },
  {
    antes: 'Se exigía que al menos el 50% del capital adeudado estuviera en mora.',
    ahora: 'Basta con que las obligaciones en mora superen el 30% del pasivo total. Es el cambio que más amplía el acceso al régimen.',
  },
  {
    antes: 'Los descuentos por libranza continuaban durante el trámite.',
    ahora: 'Se suspenden desde el inicio del proceso, salvo obligaciones alimentarias, y el descuento practicado es nulo.',
  },
  {
    antes: 'Sin protección laboral expresa para el deudor en insolvencia.',
    ahora: 'Prohibición expresa de usar la insolvencia como criterio de vinculación o despido.',
  },
  {
    antes: 'Entre la notificación y la primera audiencia mediaban 20 días.',
    ahora: 'El término se redujo a 10 días, junto con otros ajustes que agilizan la negociación y refuerzan las facultades del conciliador.',
  },
  {
    antes: 'Trámite fundamentalmente presencial.',
    ahora: 'Se habilita expresamente el trámite virtual de negociación de deudas y de convalidación ante centros de conciliación autorizados y notarías con conciliadores inscritos.',
  },
]

const NO_CUBRE = [
  'Las obligaciones alimentarias, que se excluyen de la suspensión de descuentos y siguen su curso.',
  'Los créditos posteriores a la admisión de la solicitud, que quedan fuera del acuerdo.',
  'La insolvencia de sociedades y de comerciantes de mayor tamaño, que se rige por la Ley 1116 de 2006 ante la Superintendencia de Sociedades.',
  'La eliminación automática de tu reporte en centrales de riesgo: el proceso normaliza la deuda, pero el historial crediticio tiene sus propias reglas de permanencia.',
]

const FAQS = [
  {
    q: '¿Qué es la Ley 2445 de 2025?',
    a: 'Es la ley, sancionada el 11 de febrero de 2025, que modificó el Título IV de la Sección Tercera del Libro Tercero de la Ley 1564 de 2012 (Código General del Proceso), donde está regulado el procedimiento de insolvencia de la persona natural. Su efecto principal fue ampliar el ámbito de aplicación del régimen, flexibilizar los requisitos de acceso y reforzar las protecciones del deudor durante el trámite.',
  },
  {
    q: '¿Desde cuándo está vigente la Ley 2445 de 2025?',
    a: 'La ley fue sancionada el 11 de febrero de 2025. Para confirmar el régimen de transición aplicable a un proceso concreto —especialmente si tu trámite se inició bajo las reglas anteriores— conviene revisarlo con un abogado, porque de ello depende qué requisitos y términos rigen tu caso.',
  },
  {
    q: '¿La Ley 2445 de 2025 borra mis deudas?',
    a: 'No de forma automática. La ley ofrece tres caminos: negociar un acuerdo de pago ajustado a tu capacidad real, convalidar un acuerdo privado que ya lograste, o liquidar tu patrimonio. En la liquidación patrimonial, los saldos que no alcanzan a cubrirse con los bienes adjudicados se convierten en obligaciones naturales, lo que significa que dejan de ser judicialmente exigibles.',
  },
  {
    q: '¿Puedo acceder si soy comerciante?',
    a: 'Con la Ley 2445 de 2025, sí, siempre que seas persona natural comerciante y tus activos totales sean inferiores a 1.000 salarios mínimos mensuales legales vigentes. Para ese cálculo se excluyen el valor de la vivienda familiar y el del vehículo que uses como herramienta de trabajo. Antes de la reforma, este grupo quedaba fuera del régimen.',
  },
  {
    q: '¿Qué pasa con los descuentos de mi nómina durante el proceso?',
    a: 'Se suspenden desde el inicio del proceso los descuentos automáticos de nómina y de productos financieros, incluidos los pagos por libranza. La excepción son las obligaciones alimentarias. Si pese a la suspensión se practica un descuento, la ley lo considera nulo.',
  },
  {
    q: '¿Mi empleador puede despedirme por estar en insolvencia?',
    a: 'No. La Ley 2445 de 2025 prohíbe expresamente que los empleadores o contratantes tomen un procedimiento de insolvencia tramitado por un empleado o contratista como regla de vinculación o de despido.',
  },
  {
    q: '¿Ante quién se tramita el proceso?',
    a: 'Ante centros de conciliación autorizados y notarías con conciliadores inscritos. La reforma habilitó de forma expresa el trámite virtual tanto para la negociación de deudas como para la convalidación de acuerdos privados, lo que permite adelantar el proceso sin desplazarse.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://deudaoff.com' },
    { '@type': 'ListItem', position: 2, name: 'Ley 2445 de 2025', item: 'https://deudaoff.com/ley-2445-de-2025' },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ley 2445 de 2025: qué cambió en la insolvencia de persona natural',
  description:
    'Guía de la Ley 2445 de 2025: ámbito de aplicación, requisitos de acceso, procedimientos disponibles y cambios frente al régimen anterior.',
  inLanguage: 'es-CO',
  dateModified: UPDATED,
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://deudaoff.com/ley-2445-de-2025' },
  author: {
    '@type': 'Organization',
    name: 'Núcleo Jurídico SAS',
    url: 'https://deudaoff.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Deuda OFF — Núcleo Jurídico SAS',
    url: 'https://deudaoff.com',
  },
  citation: FUENTES.map(f => f.href),
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

export default function Ley2445() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-surface">

        {/* ── HERO ─────────────────────────────────────── */}
        <div className="bg-primary text-white py-16 sm:py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-xs mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>›</span>
              <span className="text-white/70">Ley 2445 de 2025</span>
            </nav>
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
              Guía normativa actualizada
            </div>
            <h1 className="font-manrope text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Ley 2445 de 2025 — insolvencia de persona natural en Colombia
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl leading-relaxed mb-8">
              Qué reformó, a quién aplica, qué requisitos exige y qué protecciones activa desde el momento en que se admite tu solicitud.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#formulario" className="bg-secondary text-primary px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all">
                Consulta Gratuita
              </a>
              <a
                href="https://deudaoff.com/calculadora"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-base">calculate</span>
                Ver si califico
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-5 py-16 space-y-16">

          {/* ── QUÉ ES ─────────────────────────────────── */}
          <section>
            <div className="bg-secondary-container border-l-4 border-secondary px-6 py-5 rounded-r-xl mb-8">
              <p className="text-on-surface leading-relaxed">
                <strong>En una frase:</strong> la Ley 2445 de 2025, sancionada el 11 de febrero de 2025, reformó el
                régimen de insolvencia de persona natural del Código General del Proceso para ampliar quién puede
                acceder, bajar el umbral de mora exigido y reforzar la protección del deudor mientras dura el trámite.
              </p>
            </div>

            <h2 className="font-manrope text-3xl font-bold text-primary mb-4">Qué es la Ley 2445 y qué reformó</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                La Ley 2445 de 2025 no creó un régimen nuevo desde cero: modificó el que ya existía. Concretamente,
                reformó el Título IV de la Sección Tercera del Libro Tercero de la{' '}
                <a
                  href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1564_2012.html"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-secondary font-semibold hover:underline"
                >
                  Ley 1564 de 2012
                </a>
                , el Código General del Proceso, que es donde está regulado el procedimiento de insolvencia de la
                persona natural.
              </p>
              <p>
                El cambio empieza por el nombre. Ese título del Código pasó a llamarse{' '}
                <em>«Insolvencia de la persona natural no comerciante y de la pequeña comerciante»</em>, y ese solo
                ajuste anticipa la reforma de fondo: un grupo que antes quedaba por fuera ahora tiene acceso.
              </p>
              <p>
                El propósito declarado de la norma es dar una segunda oportunidad a quien, por circunstancias adversas,
                dejó de poder cumplir sus obligaciones económicas, y reintegrarlo al sistema productivo mediante la
                normalización de sus relaciones crediticias. Buena parte de los ajustes responden a que la aplicación
                del régimen anterior venía produciendo decisiones contradictorias entre jueces, y a la necesidad de
                flexibilizar el acceso tras la crisis económica derivada de la pandemia.
              </p>
            </div>
          </section>

          {/* ── A QUIÉN APLICA ─────────────────────────── */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-6">A quién aplica</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {APLICA.map(a => (
                <div key={a.title} className="bg-white p-6 rounded-2xl border border-outline-variant/30 shadow-card">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[#00522f]">{a.icon}</span>
                  </div>
                  <h3 className="font-manrope font-bold text-primary text-lg mb-2">{a.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mt-5">
              El umbral de 1.000 SMLMV se calcula sobre los activos totales, pero excluyendo dos bienes que la ley
              protege de forma deliberada: la vivienda familiar y el vehículo que uses como herramienta de trabajo.
              Esa exclusión es la que permite que un pequeño comerciante con una casa y un vehículo productivo siga
              cabiendo dentro del régimen.
            </p>
          </section>

          {/* ── REQUISITOS ─────────────────────────────── */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-3">Requisitos para acceder</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              No basta con estar endeudado: la ley exige acreditar una situación de cesación de pagos con
              características concretas.
            </p>
            <div className="space-y-4">
              {REQUISITOS.map(r => (
                <div key={r.n} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-card">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white font-manrope font-bold flex items-center justify-center">
                    {r.n}
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold text-primary mb-1">{r.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-surface-container rounded-2xl p-6 border border-outline-variant/40">
              <p className="text-sm text-on-surface leading-relaxed">
                <strong className="text-primary">El punto que más cambia el acceso:</strong> bajo el régimen anterior
                se exigía que no menos del 50% del capital adeudado estuviera en mora por más de 90 días. La Ley 2445
                bajó ese umbral al 30% del total de las deudas. Mucha gente que no calificaba antes, califica ahora.
              </p>
              <a
                href="https://deudaoff.com/calculadora"
                className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-secondary hover:text-primary transition-colors group"
              >
                <span className="material-symbols-outlined text-base">calculate</span>
                Verificar si cumples los requisitos
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </section>

          {/* ── PROCEDIMIENTOS ─────────────────────────── */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-3">Los tres procedimientos disponibles</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              La ley no ofrece un camino único. Cuál corresponde depende de tu situación patrimonial y de si hay o no
              margen de acuerdo con los acreedores.
            </p>
            <div className="space-y-5">
              {PROCEDIMIENTOS.map(p => (
                <div key={p.title} className="flex items-start gap-5 bg-white p-6 rounded-2xl border border-outline-variant/30 shadow-card">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">{p.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold text-primary text-lg mb-2">{p.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── EFECTOS ────────────────────────────────── */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-3">
              Qué pasa cuando se admite tu solicitud
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Este es el punto que más importa en la práctica. La admisión de la solicitud produce efectos inmediatos
              que cambian tu situación desde ese mismo día.
            </p>
            <div className="space-y-4">
              {EFECTOS.map(e => (
                <div key={e.title} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-card">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#00522f] text-xl">{e.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold text-primary mb-1">{e.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA INTERMEDIO ─────────────────────────── */}
          <section className="bg-primary rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="font-manrope text-2xl sm:text-3xl font-bold mb-3">
                ¿Tu situación encaja con lo que exige la ley?
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6 max-w-2xl">
                Revisar los requisitos en abstracto es una cosa; saber si tu caso concreto califica es otra. La primera
                consulta es gratuita y sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#formulario"
                  className="h-13 px-7 py-3 bg-secondary text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-95 transition-all"
                >
                  Quiero mi consulta gratuita
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
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
          </section>

          {/* ── QUÉ CAMBIÓ ─────────────────────────────── */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-6">
              Qué cambió frente al régimen anterior
            </h2>
            <div className="space-y-4">
              {CAMBIOS.map(c => (
                <div key={c.antes} className="grid sm:grid-cols-2 gap-px bg-outline-variant/40 rounded-2xl overflow-hidden border border-outline-variant/40">
                  <div className="bg-surface-container p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                      Antes — Ley 1564 de 2012
                    </p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{c.antes}</p>
                  </div>
                  <div className="bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                      Ahora — Ley 2445 de 2025
                    </p>
                    <p className="text-sm text-on-surface leading-relaxed">{c.ahora}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CUÁNTO TARDA ───────────────────────────── */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-4">Cuánto tarda el proceso</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                La reforma acortó tiempos de forma explícita: entre la notificación y la primera audiencia el término
                pasó de 20 a 10 días, y se ajustaron otros plazos del trámite de negociación además de reforzarse las
                facultades del conciliador para conducirlo.
              </p>
              <p>
                La duración total, en cambio, no es un número fijo que la ley establezca de antemano. Depende de
                cuántos acreedores haya, de si presentan objeciones, de la complejidad del inventario de bienes y de
                cuál de los tres procedimientos corresponda. Lo relevante para tu tranquilidad no es la duración total,
                sino que la protección legal —suspensión de embargos, de procesos ejecutivos y de descuentos de
                libranza— empieza a operar desde que se admite la solicitud, no cuando termina el proceso.
              </p>
            </div>
          </section>

          {/* ── QUÉ NO CUBRE ───────────────────────────── */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-3">Qué NO cubre la ley</h2>
            <p className="text-on-surface-variant leading-relaxed mb-5">
              Ser claro con los límites del régimen evita expectativas que después no se cumplen.
            </p>
            <ul className="space-y-3">
              {NO_CUBRE.map(item => (
                <li key={item} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-outline-variant/30">
                  <span className="material-symbols-outlined text-error text-xl shrink-0 mt-0.5">cancel</span>
                  <span className="text-on-surface-variant text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── FAQ ────────────────────────────────────── */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-6">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {FAQS.map(f => (
                <div key={f.q} className="bg-white rounded-xl p-6 border border-outline-variant/40 shadow-card">
                  <h3 className="font-manrope font-semibold text-primary mb-2">{f.q}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── ENLACES RELACIONADOS ───────────────────── */}
          <section>
            <h2 className="font-manrope text-2xl font-bold text-primary mb-5">Sigue leyendo</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/insolvencia-persona-natural"
                className="group bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-card hover:border-secondary/50 transition-colors"
              >
                <p className="font-manrope font-bold text-primary mb-1 flex items-center gap-2">
                  Insolvencia de persona natural
                  <span className="material-symbols-outlined text-base text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Cómo funciona el procedimiento en la práctica: quién califica, qué pasa con tus bienes y cuánto cuesta.
                </p>
              </Link>
              <Link
                href="/preguntas-frecuentes"
                className="group bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-card hover:border-secondary/50 transition-colors"
              >
                <p className="font-manrope font-bold text-primary mb-1 flex items-center gap-2">
                  Preguntas frecuentes
                  <span className="material-symbols-outlined text-base text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Las dudas más comunes sobre costos, tiempos, bienes y reportes en centrales de riesgo.
                </p>
              </Link>
            </div>
          </section>

          {/* ── FORMULARIO ─────────────────────────────── */}
          <section id="formulario" className="scroll-mt-20">
            <div className="text-center mb-8">
              <h2 className="font-manrope text-3xl font-bold text-primary mb-3">
                Revisemos tu caso concreto — es gratis
              </h2>
              <p className="text-on-surface-variant leading-relaxed max-w-xl mx-auto">
                Un especialista en insolvencia revisa tu situación y te dice con claridad si calificas bajo la Ley 2445
                de 2025. Sin costo y sin compromiso.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-form border border-outline-variant/30 p-5 sm:p-8">
              <CRMForm />
            </div>
          </section>

          {/* ── FUENTES Y AUTORÍA ──────────────────────── */}
          <section className="border-t border-outline-variant/40 pt-10">
            <h2 className="font-manrope text-xl font-bold text-primary mb-4">Fuentes normativas</h2>
            <ul className="space-y-2 mb-8">
              {FUENTES.map(f => (
                <li key={f.href} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-base shrink-0 mt-0.5">link</span>
                  <a
                    href={f.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sm text-on-surface-variant hover:text-secondary transition-colors underline decoration-outline-variant underline-offset-2"
                  >
                    {f.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/40">
              <p className="text-sm text-on-surface leading-relaxed mb-3">
                <strong className="text-primary">Revisión jurídica:</strong> contenido elaborado y revisado por el
                equipo jurídico de Núcleo Jurídico SAS, firma especializada en insolvencia de persona natural.
              </p>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Última actualización: 29 de julio de 2026. Esta guía tiene fines informativos y no sustituye la
                asesoría jurídica sobre un caso concreto. La aplicación de la Ley 2445 de 2025 depende de las
                circunstancias particulares de cada deudor.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
