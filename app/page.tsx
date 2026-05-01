import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

const WA_URL = 'https://wa.me/573003552751?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20insolvencia%20de%20persona%20natural'

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo acogerse a la insolvencia de persona natural en Colombia',
  description: 'Proceso paso a paso para reorganizar o liquidar deudas legalmente en Colombia bajo la Ley 2445 de 2025.',
  totalTime: 'P6M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Análisis de Deuda',
      text: 'Evaluamos tu situación financiera actual y requisitos legales sin costo inicial. Incluye diagnóstico de elegibilidad bajo la Ley 2445 de 2025.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Solicitud Legal',
      text: 'Radicamos formalmente tu solicitud de insolvencia ante Centros de Conciliación autorizados por el Ministerio de Justicia o la Superintendencia de Sociedades. Desde este momento, los embargos se suspenden.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Negociación con Acreedores',
      text: 'Mediamos con todos tus acreedores para lograr un acuerdo de pago acorde a tu capacidad real. Si la mayoría aprueba, el acuerdo es obligatorio para todos.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Fresh Start — Deudas Extinguidas',
      text: 'Cumplido el acuerdo o la liquidación patrimonial, tus deudas quedan legalmente extinguidas bajo la Ley 2445 de 2025.',
    },
  ],
}

const PAIN_POINTS = [
  { icon: 'call_end',     title: 'Acoso Cobratorio',      desc: 'Detenemos las llamadas incesantes de bancos y agencias de cobranza de inmediato.' },
  { icon: 'gavel',        title: 'Procesos Judiciales',   desc: 'Suspensión legal de procesos de embargo sobre tu salario, vivienda o vehículos.' },
  { icon: 'heart_broken', title: 'Estrés Familiar',       desc: 'Recupera la paz en tu hogar eliminando la carga psicológica de la insolvencia.' },
  { icon: 'block',        title: 'Reportes Negativos',    desc: 'Inicia el camino legal para limpiar tu historial en centrales de riesgo.' },
]

const STEPS = [
  { n: '1', title: 'Análisis de Deuda',  desc: 'Evaluamos tu situación financiera actual y requisitos legales sin costo inicial.' },
  { n: '2', title: 'Solicitud Legal',    desc: 'Radicamos formalmente tu intención de acogerte a la ley ante centros de conciliación.' },
  { n: '3', title: 'Negociación',        desc: 'Mediamos con tus acreedores para lograr un acuerdo de pago acorde a tu capacidad real.' },
  { n: '4', title: 'Fresh Start',        desc: 'Cumplido el acuerdo o la liquidación, tus deudas quedan legalmente extinguidas.', isLast: true },
]

const TESTIMONIALS = [
  {
    initials: 'CR',
    name: 'Carlos Rodriguez',
    city: 'Bogotá, D.C.',
    rating: 5,
    date: '2025-11-01',
    text: '"Debía más de 120 millones y los bancos me tenían desesperado. Con Deuda OFF logramos un acuerdo donde pago solo lo que puedo y recuperé mi casa. Gracias infinitas."',
  },
  {
    initials: 'MG',
    name: 'Martha Lucía Gomez',
    city: 'Medellín, Antioquia',
    rating: 5,
    date: '2025-09-15',
    text: '"Pensé que lo perdería todo por mi negocio. El equipo de Deuda OFF me guió con paciencia y profesionalismo. Hoy duermo tranquila sabiendo que estoy protegida."',
  },
]

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
  review: TESTIMONIALS.map(t => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: { '@type': 'Rating', ratingValue: String(t.rating), bestRating: '5' },
    datePublished: t.date,
    reviewBody: t.text.replace(/"/g, ''),
  })),
}

const BENEFITS = [
  { icon: 'balance',   title: 'Ley 2445 de 2025',      desc: 'Abogados especializados en la nueva Ley de Insolvencia de Persona Natural vigente desde 2025.' },
  { icon: 'verified',  title: '100% Legal',             desc: 'Procedimientos avalados por la Constitución y la Superintendencia de Sociedades.' },
  { icon: 'payments',  title: 'Sin Costo Inicial',      desc: 'Primera consultoría totalmente gratuita para diagnóstico de tu caso.' },
  { icon: 'public',    title: 'Atención Nacional',      desc: 'Cubrimos todo el territorio colombiano con atención 100% virtual.' },
]

const FAQS = [
  {
    q: '¿Qué es el Procedimiento de Insolvencia de Persona Natural?',
    a: 'Es un proceso legal que permite a personas naturales no comerciantes reorganizar o liquidar sus deudas de forma oficial, con respaldo de un juez o conciliador. La Ley 2445 de 2025 modernizó y amplió este derecho para todos los colombianos.',
  },
  {
    q: '¿Cuánto cuesta el proceso?',
    a: 'El valor se pacta según las características de tu caso, generalmente como un porcentaje del valor de la deuda. La primera consulta es completamente gratuita y sin compromiso.',
  },
  {
    q: '¿Cuánto tiempo tarda?',
    a: 'El proceso de reorganización puede tardar entre 3 y 8 meses. Lo importante es que desde el momento en que se radica, tienes protección legal frente a los acreedores.',
  },
  {
    q: '¿Tengo que ir a un juzgado?',
    a: 'No. Manejamos el proceso 100% virtual. Toda la asesoría y gestión se realiza por videollamada y canales digitales. Atendemos en todo Colombia.',
  },
]

export default function Home() {
  return (
    <>
      {/* ── HEADER ──────────────────────────────────── */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-outline-variant/40 px-5 flex justify-between items-center h-16">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Deuda OFF" width={120} height={36} className="h-8 w-auto" priority />
          </div>
          <span className="text-[10px] uppercase tracking-wider text-outline font-bold">Una marca de Núcleo Jurídico</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Cómo Funciona', href: '#como-funciona' },
            { label: 'Ley de Insolvencia', href: '#ley-insolvencia' },
            { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
            { label: 'Blog', href: '/blog' },
          ].map(item => (
            <a key={item.label} href={item.href} className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">{item.label}</a>
          ))}
        </nav>
        <a href={`#formulario`}
          className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all">
          Consulta Gratis
        </a>
      </header>

      <main className="pt-16">

        {/* ── HERO ────────────────────────────────────── */}
        <section className="min-h-[85vh] flex items-center px-5 py-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left */}
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-[#00522f] text-xs font-bold uppercase tracking-wider">
                Liderazgo Legal en Colombia
              </span>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">verified</span>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Respaldo Legal de Núcleo Jurídico</span>
              </div>
              <h1 className="font-manrope text-4xl md:text-5xl font-bold text-primary leading-tight">
                ¿Deudas que no puedes pagar? La ley colombiana te protege
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
                Acógete a la Ley de Insolvencia de Persona Natural. Protege tu patrimonio, frena embargos y recupera tu tranquilidad financiera con expertos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="#formulario"
                  className="h-14 px-8 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-card-lg hover:opacity-90 transition-all">
                  Quiero mi Consulta Gratuita
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </a>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="h-14 px-8 border-2 border-secondary text-secondary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-secondary/5 transition-all">
                  <span className="material-symbols-outlined text-xl">chat</span>
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            {/* Right — image + badge */}
            <div className="relative hidden md:block">
              <div className="absolute -z-10 -top-6 -right-6 w-full h-full bg-secondary-container/30 rounded-2xl blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=640&h=520&fit=crop&crop=faces"
                alt="Abogado especialista en insolvencia de persona natural en Colombia asesorando a cliente"
                className="w-full h-[500px] object-cover rounded-2xl shadow-form border-8 border-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-card-lg flex items-center gap-4">
                <div className="bg-secondary p-3 rounded-full">
                  <span className="material-symbols-outlined text-white filled">verified_user</span>
                </div>
                <div>
                  <p className="text-primary font-bold text-lg">+750 Casos</p>
                  <p className="text-on-surface-variant text-sm">Resueltos desde 2020</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEMAS ───────────────────────────────── */}
        <section className="bg-surface-container py-20 px-5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-manrope text-3xl font-bold text-primary">Si estás viviendo esto, tenemos la solución</h2>
              <p className="text-on-surface-variant mt-2">No dejes que las deudas controlen tu vida un día más.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PAIN_POINTS.map(p => (
                <div key={p.title} className="bg-white p-8 rounded-xl shadow-card border border-white">
                  <span className="material-symbols-outlined text-error text-4xl mb-4 block">{p.icon}</span>
                  <h3 className="font-manrope font-semibold text-primary text-lg mb-2">{p.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESO ─────────────────────────────────── */}
        <section id="como-funciona" className="py-20 px-5 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-manrope text-3xl font-bold text-primary">
                El Procedimiento de Insolvencia Persona Natural es tu salida legal
              </h2>
              <p className="text-on-surface-variant mt-3 text-lg">
                Un proceso estructurado bajo la Ley 2445 de 2025 para que vuelvas a empezar de cero.
              </p>
            </div>
            <span className="text-secondary font-bold flex items-center gap-2 shrink-0">
              <span className="material-symbols-outlined">verified</span> Ley 2445 de 2025
            </span>
          </div>
          <div className="relative">
            <div className="absolute top-10 left-0 w-full h-0.5 bg-outline-variant -z-10 hidden md:block" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {STEPS.map(s => (
                <div key={s.n}>
                  <div className={`w-20 h-20 rounded-2xl ${s.isLast ? 'bg-secondary' : 'bg-primary'} text-white flex items-center justify-center text-3xl font-bold mb-5 shadow-card-lg font-manrope`}>
                    {s.isLast
                      ? <span className="material-symbols-outlined filled" style={{ fontSize: 40 }}>celebration</span>
                      : s.n}
                  </div>
                  <h4 className={`font-manrope font-semibold text-lg mb-2 ${s.isLast ? 'text-secondary' : 'text-primary'}`}>{s.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIOS ─────────────────────────────── */}
        <section className="bg-surface-container-low py-20 px-5">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-manrope text-3xl font-bold text-primary text-center mb-12">Lo que dicen nuestros clientes</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {TESTIMONIALS.map(t => (
                <div key={t.name} className="bg-[#F0FFF4] p-8 rounded-2xl shadow-sm border border-secondary/10 relative">
                  <span className="material-symbols-outlined filled text-secondary/20 text-6xl absolute top-4 right-4">format_quote</span>
                  <div className="flex gap-1 text-secondary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined filled text-xl">star</span>
                    ))}
                  </div>
                  <p className="text-on-surface text-sm leading-relaxed italic mb-6">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-sm">{t.initials}</span>
                    </div>
                    <div>
                      <p className="font-bold text-primary">{t.name}</p>
                      <p className="text-xs text-on-surface-variant">{t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFICIOS (dark) ────────────────────────── */}
        <section id="ley-insolvencia" className="py-20 px-5">
          <div className="max-w-7xl mx-auto">
            <div className="bg-primary rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {BENEFITS.map(b => (
                  <div key={b.title} className="space-y-3">
                    <span className="material-symbols-outlined text-secondary text-5xl block">{b.icon}</span>
                    <h4 className="font-manrope font-bold text-xl">{b.title}</h4>
                    <p className="text-blue-100 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="bg-secondary px-4 py-2 rounded-lg font-bold text-lg">+750 Casos desde 2020</div>
                  <span className="text-white/40 hidden md:inline">|</span>
                  <p className="text-blue-200 text-sm">Vigilado por la Superintendencia de Sociedades</p>
                  <span className="text-white/40 hidden md:inline">|</span>
                  <p className="text-blue-100 font-semibold text-sm">Firma Núcleo Jurídico SAS</p>
                </div>
                <a href="#formulario"
                  className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shrink-0">
                  Verificar mi Caso
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FORMULARIO ──────────────────────────────── */}
        <section id="formulario" className="py-20 px-5 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* Left */}
            <div>
              <h2 className="font-manrope text-4xl font-bold text-primary mb-5 leading-tight">
                Da el primer paso hoy hacia tu libertad financiera
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Completa el formulario y un especialista se pondrá en contacto contigo en menos de 24 horas para una evaluación confidencial.
              </p>
              <div className="space-y-5">
                {[
                  'Tu información está 100% protegida y es confidencial.',
                  'Análisis detallado de tu situación actual.',
                  'Plan de acción inmediato para frenar embargos.',
                ].map(item => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-secondary mt-0.5">check_circle</span>
                    <p className="text-on-surface text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-surface-container rounded-2xl border border-outline-variant/50">
                <p className="text-sm font-bold text-primary mb-1">¿Tienes dudas rápidas?</p>
                <p className="text-sm text-on-surface-variant">
                  Escríbenos por{' '}
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-secondary hover:underline">
                    WhatsApp
                  </a>{' '}
                  para atención inmediata.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-form border border-outline-variant/30">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────── */}
        <section id="preguntas-frecuentes" className="bg-surface-container-low py-20 px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-manrope text-3xl font-bold text-primary text-center mb-10">Preguntas Frecuentes</h2>
            <div className="space-y-5">
              {FAQS.map(f => (
                <div key={f.q} className="bg-white rounded-xl p-6 border border-outline-variant/40 shadow-card">
                  <h3 className="font-manrope font-semibold text-primary mb-2">{f.q}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer className="bg-inverse-surface border-t border-white/10 py-16 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Top section — 4 columns */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Column 1: Logo & Description */}
            <div className="flex flex-col gap-4">
              <Image src="/logo.png" alt="Deuda OFF" width={120} height={36} className="h-8 w-auto brightness-0 invert opacity-80" />
              <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">Una marca de Núcleo Jurídico</p>
              <p className="text-sm text-white/60 leading-relaxed">
                Líderes en Derecho de Insolvencia. Más de 750 casos resueltos exitosamente.
              </p>
              <div className="flex gap-2 text-white/50">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-lg">chat</span>
                </a>
              </div>
            </div>

            {/* Column 2: Navegación */}
            <div className="flex flex-col gap-4">
              <p className="font-bold text-white text-sm uppercase tracking-wider">Navegación</p>
              <nav className="flex flex-col gap-2">
                {[
                  { label: 'Cómo Funciona', href: '#como-funciona' },
                  { label: 'Ley de Insolvencia', href: '#ley-insolvencia' },
                  { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
                  { label: 'Blog', href: '/blog' },
                ].map(item => (
                  <a key={item.label} href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3: Legal */}
            <div className="flex flex-col gap-4">
              <p className="font-bold text-white text-sm uppercase tracking-wider">Legal</p>
              <nav className="flex flex-col gap-2">
                {[
                  { label: 'Términos y Condiciones', href: '/terminos' },
                  { label: 'Política de Privacidad', href: '/privacidad' },
                  { label: 'Aviso Legal', href: '/aviso-legal' },
                ].map(item => (
                  <a key={item.label} href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 4: Contact & CTA */}
            <div className="flex flex-col gap-4">
              <p className="font-bold text-white text-sm uppercase tracking-wider">Contacto</p>
              <p className="text-sm text-white/60">
                <strong className="text-white">WhatsApp:</strong> +57 300 355 2751
              </p>
              <a href="#formulario"
                className="bg-secondary text-primary px-4 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-all text-center">
                Consulta Gratuita
              </a>
              <p className="text-xs text-white/40 mt-2">
                Disponible de Lunes a Viernes, 9 AM a 6 PM
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8" />

          {/* Bottom section — Copyright & Compliance */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs text-white/50 leading-relaxed">
                © 2025 Deuda OFF. Todos los derechos reservados.
              </p>
              <p className="text-xs text-white/40 leading-relaxed max-w-lg">
                Deuda OFF es una línea de negocio de Núcleo Jurídico SAS. Vigilado por la Superintendencia de Sociedades.
                La Ley de Insolvencia es un derecho constitucional para todos los colombianos.
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs text-white/40 shrink-0 bg-white/5 px-4 py-2 rounded-lg">
              <span className="material-symbols-outlined text-sm">verified</span>
              Derechos Protegidos
            </div>
          </div>
        </div>
      </footer>

      {/* ── Schema FAQPage ──────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
      {/* ── Schema HowTo ────────────────────────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {/* ── Schema Review / AggregateRating ─────────── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* ── WhatsApp flotante ────────────────────────── */}
      <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.335-1.502A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.73.885.945-3.64-.234-.374A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
        </svg>
      </a>
    </>
  )
}
