import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { WA_URL } from '@/lib/constants'

const CRMForm = dynamic(() => import('@/components/CRMForm'), { ssr: false })

export const metadata: Metadata = {
  title: 'Insolvencia de persona natural en Colombia — abogados especializados',
  description:
    'Procedimiento de insolvencia de persona natural no comerciante: quién califica, qué pasa con tus bienes, cómo es el proceso paso a paso, cuánto cuesta y cuánto tarda. Consulta gratuita.',
  alternates: { canonical: 'https://deudaoff.com/insolvencia-persona-natural' },
  openGraph: {
    title: 'Insolvencia de persona natural — cómo declararse insolvente en Colombia',
    description:
      'Todo sobre el procedimiento de insolvencia de persona natural no comerciante bajo la Ley 2445 de 2025. +750 casos resueltos.',
    url: 'https://deudaoff.com/insolvencia-persona-natural',
    locale: 'es_CO',
    type: 'website',
  },
}

const CALIFICA = [
  {
    icon: 'schedule',
    title: 'Llevas más de 90 días en mora',
    desc: 'Estás en cesación de pagos frente a dos o más acreedores por más de noventa días.',
  },
  {
    icon: 'gavel',
    title: 'O tienes procesos de cobro en curso',
    desc: 'Dos o más procesos ejecutivos o de cobro en tu contra, o procesos de restitución del inmueble por mora en el arriendo.',
  },
  {
    icon: 'percent',
    title: 'Tus deudas en mora superan el 30%',
    desc: 'Lo que debes en mora representa más del 30% de tu pasivo total. Antes de la reforma de 2025 el umbral era del 50%.',
  },
  {
    icon: 'person',
    title: 'Eres persona natural',
    desc: 'No comerciante, o pequeño comerciante con activos por debajo de 1.000 SMLMV sin contar la vivienda familiar ni el vehículo de trabajo.',
  },
]

const PROCESO = [
  {
    n: '1',
    title: 'Diagnóstico y análisis de viabilidad',
    desc: 'Revisamos tu situación completa: cuánto debes, a quiénes, desde cuándo y qué bienes tienes. De ahí sale la respuesta a la única pregunta que importa al principio: si calificas y cuál de los tres caminos te conviene. Este análisis no tiene costo.',
  },
  {
    n: '2',
    title: 'Preparación del expediente',
    desc: 'Se arma el inventario de activos y pasivos, la relación de acreedores y la propuesta de acuerdo de pago. Es la parte más técnica del proceso y donde más solicitudes se caen: un inventario mal elaborado o una propuesta inviable llevan al rechazo.',
  },
  {
    n: '3',
    title: 'Radicación ante el centro de conciliación',
    desc: 'Se presenta formalmente la solicitud ante un centro de conciliación autorizado o notaría con conciliador inscrito. Desde la admisión operan las protecciones: se suspenden embargos, procesos ejecutivos y descuentos de libranza.',
  },
  {
    n: '4',
    title: 'Audiencias de negociación',
    desc: 'Se convoca a los acreedores y se discute la propuesta ante el conciliador. Entre la notificación y la primera audiencia median 10 días. Aquí es donde se define el acuerdo: plazos, montos e intereses ajustados a tu capacidad real de pago.',
  },
  {
    n: '5',
    title: 'Acuerdo, convalidación o liquidación',
    desc: 'Si hay acuerdo, queda vinculante y empiezas a cumplirlo. Si ya tenías uno privado con mayoría calificada, se convalida para que obligue a todos. Si no hay margen de acuerdo, se abre la liquidación patrimonial.',
  },
  {
    n: '6',
    title: 'Cierre y normalización',
    desc: 'Cumplido el acuerdo —o adjudicados los bienes en la liquidación— tus relaciones crediticias quedan normalizadas. En la liquidación, los saldos que no alcanzaron a cubrirse se convierten en obligaciones naturales: dejan de ser judicialmente exigibles.',
    isLast: true,
  },
]

const BIENES = [
  {
    icon: 'home',
    title: 'Tu vivienda familiar',
    desc: 'La vivienda familiar recibe protección expresa: queda excluida del cálculo del umbral de activos que define si el pequeño comerciante puede acceder al régimen. En la negociación de deudas, el objetivo es precisamente conservarla mediante un acuerdo de pago viable.',
  },
  {
    icon: 'directions_car',
    title: 'El vehículo que usas para trabajar',
    desc: 'El vehículo empleado como herramienta de trabajo también se excluye de ese cálculo. La lógica de la ley es no destruir tu capacidad de generar ingresos, porque de esa capacidad depende que puedas cumplir el acuerdo.',
  },
  {
    icon: 'inventory_2',
    title: 'En liquidación patrimonial',
    desc: 'Solo se adjudican los bienes embargables, hasta el monto del pasivo o del valor de los activos. Los bienes inembargables por ley quedan fuera. No es que «pierdas todo»: es una adjudicación acotada y reglada.',
  },
]

const COSTOS = [
  'La primera consulta y el análisis de viabilidad son gratuitos y sin compromiso.',
  'Los honorarios se pactan según las características de tu caso, normalmente como un porcentaje del valor de la deuda gestionada.',
  'No exigimos grandes desembolsos iniciales: el esquema se ajusta a que estás precisamente en una situación de falta de liquidez.',
  'Existen además costos propios del trámite ante el centro de conciliación, que se explican con transparencia desde el comienzo.',
]

const FAQS = [
  {
    q: '¿Qué es la insolvencia de persona natural?',
    a: 'Es el procedimiento legal que permite a una persona natural no comerciante —y, desde la Ley 2445 de 2025, también al pequeño comerciante— reorganizar o liquidar sus deudas de forma oficial ante un conciliador. Está regulado en el Título IV de la Sección Tercera del Libro Tercero de la Ley 1564 de 2012, el Código General del Proceso, reformado por la Ley 2445 de 2025. En el lenguaje corriente mucha gente lo llama «declararse en quiebra» o «declararse en bancarrota», pero el nombre técnico en Colombia es procedimiento de insolvencia de persona natural.',
  },
  {
    q: '¿Es lo mismo insolvencia que quiebra o bancarrota?',
    a: 'En la conversación cotidiana se usan como sinónimos, pero jurídicamente en Colombia no existe una figura llamada «quiebra» para personas naturales. Lo que existe es el procedimiento de insolvencia, que ofrece tres vías: negociación de deudas, convalidación de acuerdo privado y liquidación patrimonial. Si buscas cómo declararte en bancarrota siendo persona natural, este es el mecanismo que la ley colombiana te da.',
  },
  {
    q: '¿Cómo puedo declararme insolvente?',
    a: 'Se presenta una solicitud ante un centro de conciliación autorizado o una notaría con conciliador inscrito, acompañada del inventario de activos y pasivos, la relación de acreedores y una propuesta de acuerdo de pago. Debes acreditar la cesación de pagos: mora superior a 90 días con dos o más acreedores —o dos o más procesos de cobro en curso— y que las obligaciones en mora superen el 30% de tu pasivo total.',
  },
  {
    q: '¿Qué diferencia hay entre reorganización y liquidación patrimonial?',
    a: 'La reorganización —vía negociación de deudas o convalidación de un acuerdo privado— busca que conserves tu patrimonio y pagues bajo condiciones nuevas ajustadas a tu capacidad real. La liquidación patrimonial es la salida cuando no hay acuerdo posible: se adjudican los bienes embargables a los acreedores y los saldos no cubiertos se convierten en obligaciones naturales, es decir, dejan de ser judicialmente exigibles.',
  },
  {
    q: '¿Voy a perder mi casa?',
    a: 'No necesariamente, y de hecho el objetivo de la negociación de deudas es justamente evitarlo. La ley protege expresamente la vivienda familiar excluyéndola del cálculo del umbral de activos. En liquidación patrimonial solo se adjudican bienes embargables. Cada caso exige un análisis concreto, y es lo primero que revisamos en la consulta gratuita.',
  },
  {
    q: '¿Cuánto cuesta el proceso?',
    a: 'La primera consulta y el análisis de viabilidad son gratuitos. Los honorarios se pactan según las características del caso, generalmente como un porcentaje del valor de la deuda gestionada, sin grandes desembolsos iniciales. A eso se suman los costos propios del trámite ante el centro de conciliación, que se explican desde el comienzo.',
  },
  {
    q: '¿Mi empleador se entera y puede despedirme?',
    a: 'La Ley 2445 de 2025 prohíbe expresamente que empleadores o contratantes tomen un procedimiento de insolvencia tramitado por un empleado o contratista como regla de vinculación o de despido. Además, durante el proceso se suspenden los descuentos automáticos de nómina y por libranza, con excepción de las obligaciones alimentarias.',
  },
  {
    q: '¿Necesito abogado para el proceso de insolvencia?',
    a: 'La parte crítica es técnica: el inventario de activos y pasivos, la calificación de los créditos y la construcción de una propuesta de acuerdo que los acreedores acepten y que tú puedas cumplir. Un error en la radicación puede llevar al rechazo de la solicitud y a perder la protección legal que ya habías activado. Por eso conviene asesoría especializada.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://deudaoff.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Insolvencia de persona natural',
      item: 'https://deudaoff.com/insolvencia-persona-natural',
    },
  ],
}

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': 'https://deudaoff.com/insolvencia-persona-natural#legalservice',
  name: 'Deuda OFF — Insolvencia de Persona Natural',
  description:
    'Asesoría y representación legal en procedimientos de insolvencia de persona natural no comerciante y pequeño comerciante en Colombia, bajo la Ley 2445 de 2025.',
  url: 'https://deudaoff.com/insolvencia-persona-natural',
  areaServed: { '@type': 'Country', name: 'Colombia' },
  availableLanguage: 'es',
  parentOrganization: { '@type': 'Organization', name: 'Núcleo Jurídico SAS' },
  serviceType: [
    'Insolvencia de persona natural no comerciante',
    'Negociación de deudas',
    'Convalidación de acuerdo privado',
    'Liquidación patrimonial',
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

export default function InsolvenciaPersonaNatural() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-surface">

        {/* ── HERO ─────────────────────────────────────── */}
        <div className="bg-primary text-white py-16 sm:py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-xs mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>›</span>
              <span className="text-white/70">Insolvencia de persona natural</span>
            </nav>
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
              +750 casos resueltos desde 2020
            </div>
            <h1 className="font-manrope text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Procedimiento de insolvencia de persona natural no comerciante
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl leading-relaxed mb-8">
              Si no puedes pagar tus deudas, la ley colombiana te da una salida formal para reorganizarlas o liquidarlas
              y empezar de nuevo. Te explicamos quién califica, qué pasa con tus bienes y cómo funciona el proceso.
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
                <strong>Qué es:</strong> la insolvencia de persona natural es el procedimiento legal que te permite
                reorganizar o liquidar tus deudas de forma oficial ante un conciliador, con protección frente a
                embargos y cobros mientras dura el trámite. Es lo que en el lenguaje corriente se llama
                «declararse en quiebra» o «declararse en bancarrota», aunque el nombre técnico en Colombia es otro.
              </p>
            </div>

            <h2 className="font-manrope text-3xl font-bold text-primary mb-4">Qué es y en qué consiste</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Mucha gente llega buscando cómo <strong>declararse insolvente</strong>, cómo declararse en{' '}
                <strong>quiebra</strong> o qué pasa si se declara en <strong>bancarrota</strong>. En Colombia no existe
                una figura llamada quiebra para personas naturales: lo que existe es el{' '}
                <strong>procedimiento de insolvencia de persona natural no comerciante</strong>, regulado en el Código
                General del Proceso y reformado por la{' '}
                <Link href="/ley-2445-de-2025" className="text-secondary font-semibold hover:underline">
                  Ley 2445 de 2025
                </Link>
                .
              </p>
              <p>
                El procedimiento parte de un reconocimiento simple: cuando una persona entra en cesación de pagos,
                seguir acumulando intereses y procesos ejecutivos no beneficia a nadie —ni al deudor, que se hunde, ni
                a los acreedores, que terminan cobrando menos—. La ley abre entonces un espacio formal para
                <strong> reorganizar</strong> la deuda bajo condiciones que el deudor sí pueda cumplir, o para{' '}
                <strong>liquidar</strong> su patrimonio de forma ordenada y cerrar el capítulo.
              </p>
              <p>
                Son tres las vías posibles: la negociación de deudas, la convalidación de un acuerdo privado que ya
                lograste con tus acreedores, y la <strong>liquidación patrimonial</strong>. Cuál corresponde depende de
                tu situación patrimonial y de si existe o no margen real de acuerdo.
              </p>
            </div>
          </section>

          {/* ── QUIÉN CALIFICA ─────────────────────────── */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-3">Quién califica</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              La ley exige acreditar una cesación de pagos con características concretas. Estos son los criterios:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {CALIFICA.map(c => (
                <div key={c.title} className="bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-card">
                  <div className="w-11 h-11 rounded-xl bg-secondary-container flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-[#00522f]">{c.icon}</span>
                  </div>
                  <h3 className="font-manrope font-bold text-primary mb-1.5">{c.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-surface-container rounded-2xl p-6 border border-outline-variant/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-sm text-on-surface leading-relaxed">
                <strong className="text-primary">¿No estás seguro de si cumples?</strong> La calculadora te da una
                respuesta orientativa en dos minutos, sin dar datos de contacto para empezar.
              </p>
              <a
                href="https://deudaoff.com/calculadora"
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all"
              >
                <span className="material-symbols-outlined text-base">calculate</span>
                Usar la calculadora
              </a>
            </div>
          </section>

          {/* ── QUÉ PASA CON TUS BIENES ────────────────── */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-3">Qué pasa con tus bienes</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Es la pregunta que más angustia genera, y la que más malentendidos acumula.
            </p>
            <div className="space-y-4">
              {BIENES.map(b => (
                <div key={b.title} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-card">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">{b.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-manrope font-bold text-primary mb-1.5">{b.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PROCESO PASO A PASO ────────────────────── */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-3">Cómo es el proceso paso a paso</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Desde el primer análisis hasta el cierre, esto es lo que ocurre y en qué orden.
            </p>
            <div className="space-y-4">
              {PROCESO.map(s => (
                <div key={s.n} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-card">
                  <div
                    className={`shrink-0 w-11 h-11 rounded-xl ${s.isLast ? 'bg-secondary' : 'bg-primary'} text-white font-manrope font-bold flex items-center justify-center`}
                  >
                    {s.isLast ? <span className="material-symbols-outlined filled text-xl">celebration</span> : s.n}
                  </div>
                  <div>
                    <h3 className={`font-manrope font-bold mb-1.5 ${s.isLast ? 'text-secondary' : 'text-primary'}`}>
                      {s.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
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
                Desde la radicación, los embargos se detienen
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6 max-w-2xl">
                No tienes que esperar a que termine el proceso para respirar. La protección legal —suspensión de
                embargos, procesos ejecutivos y descuentos de libranza— empieza cuando se admite la solicitud.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#formulario"
                  className="px-7 py-3 bg-secondary text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-95 transition-all"
                >
                  Empezar con la consulta gratuita
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

          {/* ── COSTOS ─────────────────────────────────── */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-3">Cuánto cuesta y cómo se cobra</h2>
            <p className="text-on-surface-variant leading-relaxed mb-5">
              Hablar de dinero con alguien que no tiene liquidez exige claridad desde el primer minuto.
            </p>
            <ul className="space-y-3">
              {COSTOS.map(c => (
                <li key={c} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">check_circle</span>
                  <span className="text-on-surface-variant text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── CUÁNTO TARDA ───────────────────────────── */}
          <section>
            <h2 className="font-manrope text-3xl font-bold text-primary mb-4">Cuánto tarda</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                La Ley 2445 de 2025 acortó plazos de forma expresa: entre la notificación y la primera audiencia el
                término bajó de 20 a 10 días, y se reforzaron las facultades del conciliador para conducir la
                negociación con agilidad.
              </p>
              <p>
                La duración total depende de cuántos acreedores haya, de si presentan objeciones, de la complejidad del
                inventario y de cuál de los tres procedimientos corresponda. Pero el dato que de verdad importa es
                otro: la protección legal no llega al final del proceso, sino al principio. Desde que se admite la
                solicitud se suspenden los embargos, los procesos ejecutivos y los descuentos automáticos de nómina.
              </p>
            </div>
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
                href="/ley-2445-de-2025"
                className="group bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-card hover:border-secondary/50 transition-colors"
              >
                <p className="font-manrope font-bold text-primary mb-1 flex items-center gap-2">
                  Ley 2445 de 2025
                  <span className="material-symbols-outlined text-base text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Qué reformó la norma, a quién aplica y qué cambió frente al régimen anterior.
                </p>
              </Link>
              <Link
                href="/casos-de-exito"
                className="group bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-card hover:border-secondary/50 transition-colors"
              >
                <p className="font-manrope font-bold text-primary mb-1 flex items-center gap-2">
                  Casos de éxito
                  <span className="material-symbols-outlined text-base text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Casos reales de personas que salieron de deudas con el procedimiento de insolvencia.
                </p>
              </Link>
            </div>
          </section>

          {/* ── FORMULARIO ─────────────────────────────── */}
          <section id="formulario" className="scroll-mt-20">
            <div className="text-center mb-8">
              <h2 className="font-manrope text-3xl font-bold text-primary mb-3">
                Revisemos si calificas — sin costo
              </h2>
              <p className="text-on-surface-variant leading-relaxed max-w-xl mx-auto">
                Un especialista revisa tu caso y te dice con claridad si el procedimiento de insolvencia es tu salida.
                Confidencial y sin compromiso.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-form border border-outline-variant/30 p-5 sm:p-8">
              <CRMForm />
            </div>
          </section>

          {/* ── NOTA LEGAL ─────────────────────────────── */}
          <section className="border-t border-outline-variant/40 pt-10">
            <div className="bg-surface-container rounded-2xl p-6 border border-outline-variant/40">
              <p className="text-sm text-on-surface leading-relaxed mb-3">
                <strong className="text-primary">Revisión jurídica:</strong> contenido elaborado y revisado por el
                equipo jurídico de Núcleo Jurídico SAS, firma especializada en insolvencia de persona natural, con
                fundamento en la Ley 1564 de 2012 y la Ley 2445 de 2025.
              </p>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Última actualización: 29 de julio de 2026. Esta página tiene fines informativos y no sustituye la
                asesoría jurídica sobre un caso concreto. Los resultados varían según las circunstancias particulares
                de cada deudor.
              </p>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
