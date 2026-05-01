import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

const WA_URL = 'https://wa.me/573003552751?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20insolvencia%20de%20persona%20natural'

const STEPS = [
  { n: '1', title: 'Diagnóstico Gratuito', desc: 'Evaluamos tu situación financiera sin costo y sin compromiso desde cualquier ciudad.' },
  { n: '2', title: 'Solicitud Legal', desc: 'Radicamos formalmente ante el Centro de Conciliación autorizado correspondiente.' },
  { n: '3', title: 'Negociación', desc: 'Mediamos con todos tus acreedores para lograr un acuerdo ajustado a tu capacidad real.' },
  { n: '4', title: 'Fresh Start', desc: 'Cumplido el acuerdo, tus deudas quedan legalmente extinguidas.' },
]

interface Props {
  city: string
  department: string
  slug: string
  headline: string
  intro: string
  localContext: string
  cityFaqs: Array<{ q: string; a: string }>
}

export default function CityLandingPage({ city, department, slug, headline, intro, localContext, cityFaqs }: Props) {
  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `Deuda OFF — Insolvencia de Persona Natural en ${city}`,
    description: intro,
    url: `https://deudaoff.com/${slug}`,
    telephone: '+57-300-355-2751',
    areaServed: { '@type': 'City', name: city, containedInPlace: { '@type': 'State', name: department } },
    serviceType: 'Insolvencia de Persona Natural',
    priceRange: 'Consulta gratuita',
    provider: { '@type': 'Organization', name: 'Núcleo Jurídico SAS' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cityFaqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-outline-variant/40 px-5 flex justify-between items-center h-16">
        <Link href="/" className="flex flex-col">
          <span className="font-manrope font-bold text-primary text-xl">Deuda OFF</span>
          <span className="text-[10px] uppercase tracking-wider text-outline font-bold">Una marca de Núcleo Jurídico</span>
        </Link>
        <a href="#formulario" className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all">
          Consulta Gratis
        </a>
      </header>

      <main className="pt-16">

        {/* Hero */}
        <section className="min-h-[70vh] flex items-center px-5 py-16 max-w-5xl mx-auto">
          <div className="space-y-6 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-[#00522f] text-xs font-bold uppercase tracking-wider">
              Atención 100% Virtual — {city}, {department}
            </span>
            <h1 className="font-manrope text-4xl md:text-5xl font-bold text-primary leading-tight">
              {headline}
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#formulario"
                className="h-14 px-8 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-card-lg hover:opacity-90 transition-all">
                Quiero mi Consulta Gratuita
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="h-14 px-8 border-2 border-secondary text-secondary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-secondary/5 transition-all">
                WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-on-surface-variant">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block" /> +750 casos resueltos
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block" /> Primera consulta gratis
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block" /> 100% virtual
              </span>
            </div>
          </div>
        </section>

        {/* Local context */}
        <section className="bg-surface-container py-14 px-5">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-card border border-outline-variant/30">
              <h2 className="font-manrope text-2xl font-bold text-primary mb-4">
                Insolvencia de persona natural en {city}
              </h2>
              <p className="text-on-surface-variant leading-relaxed">{localContext}</p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 px-5 max-w-5xl mx-auto">
          <h2 className="font-manrope text-3xl font-bold text-primary mb-10 text-center">
            Cómo funciona el proceso en {city}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(s => (
              <div key={s.n}>
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-card-lg font-manrope">
                  {s.n}
                </div>
                <h3 className="font-manrope font-semibold text-lg text-primary mb-2">{s.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section id="formulario" className="py-16 px-5 bg-surface-container-low">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-manrope text-3xl font-bold text-primary mb-4 leading-tight">
                Empieza hoy — sin salir de {city}
              </h2>
              <p className="text-on-surface-variant text-lg mb-6 leading-relaxed">
                Nuestro servicio es 100% virtual. No necesitas desplazarte. Atendemos todo por videollamada y canales digitales.
              </p>
              <div className="space-y-4 text-sm text-on-surface-variant">
                {[
                  'Diagnóstico gratuito y confidencial.',
                  'Suspensión de embargos desde el primer día.',
                  'Abogados especializados en Ley 2445 de 2025.',
                  'Atención en toda Colombia.',
                ].map(item => (
                  <div key={item} className="flex gap-2 items-start">
                    <span className="text-secondary mt-0.5">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-form border border-outline-variant/30">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-manrope text-2xl font-bold text-primary mb-8 text-center">
              Preguntas frecuentes en {city}
            </h2>
            <div className="space-y-4">
              {cityFaqs.map(f => (
                <div key={f.q} className="bg-white rounded-xl p-6 border border-outline-variant/40 shadow-card">
                  <h3 className="font-manrope font-semibold text-primary mb-2">{f.q}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-inverse-surface py-8 px-5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-xs text-white/50">© 2025 Deuda OFF — Núcleo Jurídico SAS. Todos los derechos reservados.</p>
            <p className="text-xs text-white/40 mt-1">Vigilado por la Superintendencia de Sociedades.</p>
          </div>
          <div className="flex gap-6 text-xs text-white/50">
            <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
          </div>
        </div>
      </footer>

      {/* WhatsApp flotante */}
      <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp">
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.335-1.502A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.73.885.945-3.64-.234-.374A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
        </svg>
      </a>
    </>
  )
}
