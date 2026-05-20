import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { WA_URL } from '@/lib/constants'

const CRMForm = dynamic(() => import('@/components/CRMForm'), { ssr: false })

export const metadata: Metadata = {
  title: 'Consulta Gratuita — Insolvencia de Persona Natural | Deuda OFF',
  description: 'Accede al Procedimiento de Insolvencia de Persona Natural y empieza de cero. Suspende embargos, frena las llamadas de cobranza y negocia tus deudas. Primera consulta GRATIS.',
  alternates: { canonical: 'https://deudaoff.com/consulta-gratuita' },
  openGraph: {
    title: '¿Deudas que no puedes pagar? La ley colombiana te protege',
    description: 'Procedimiento de Insolvencia de Persona Natural. Primera consulta gratuita. +750 casos resueltos.',
    url: 'https://deudaoff.com/consulta-gratuita',
    locale: 'es_CO',
    type: 'website',
  },
}

const PROBLEMS = [
  { icon: 'call_end',       text: 'Llamadas incesantes de cobranza que no paran' },
  { icon: 'gavel',          text: 'Amenazas de embargo de tu sueldo o bienes' },
  { icon: 'credit_card_off', text: 'Deudas con bancos, tarjetas o créditos que no puedes pagar' },
  { icon: 'mood_bad',       text: 'Miedo a lo que puede pasar si no haces nada' },
]

const STEPS = [
  { n: '1', title: 'Consulta gratuita',    desc: 'Evaluamos tu caso sin costo y verificamos si calificas para el proceso.' },
  { n: '2', title: 'Preparamos tu expediente', desc: 'Reunimos toda la documentación y armamos tu solicitud formal.' },
  { n: '3', title: 'Radicación legal',     desc: 'Presentamos ante el Centro de Conciliación o autoridad competente.' },
  { n: '4', title: 'Empiezas de nuevo',    desc: 'Comienzas a vivir sin el peso de las deudas, con un plan a tu medida.' },
]

const TESTIMONIALS = [
  {
    initials: 'CR',
    name: 'Carlos Rodríguez',
    city: 'Bogotá, D.C.',
    text: 'Debía más de 120 millones y los bancos me tenían desesperado. Con Deuda OFF logramos un acuerdo donde pago solo lo que puedo y recuperé mi tranquilidad.',
  },
  {
    initials: 'ML',
    name: 'Martha Lucía Gómez',
    city: 'Medellín, Antioquia',
    text: 'Pensé que lo perdería todo por mi negocio. El equipo me guió con paciencia. Hoy duermo tranquila sabiendo que estoy protegida.',
  },
  {
    initials: 'JF',
    name: 'Juan Felipe Ortiz',
    city: 'Cali, Valle del Cauca',
    text: 'Tenía 95 millones en tarjetas y libranzas. En 4 meses ya tenía un acuerdo de pago real. Volví a respirar.',
  },
]

const BENEFITS = [
  { icon: 'verified',           text: 'Expertos en la Ley de Insolvencia (Ley 1564 de 2012 y Ley 2445 de 2025)' },
  { icon: 'shield_lock',        text: 'Proceso 100% legal y transparente' },
  { icon: 'savings',            text: 'Primera consulta sin costo' },
  { icon: 'public',             text: 'Atención virtual en toda Colombia' },
  { icon: 'workspace_premium',  text: '+750 casos exitosos con deudas superiores a $80M COP' },
]

export default function ConsultaGratuita() {
  return (
    <div className="bg-surface">
      <main>
        {/* ── 1. HERO ────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#001530]" />
          <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-secondary/20 rounded-full blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-5 py-16 sm:py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="text-white space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-secondary" /> Consulta 100% Gratuita
                </span>
                <h1 className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  ¿Deudas que no puedes pagar? <span className="text-secondary">La ley colombiana te protege</span>
                </h1>
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-xl">
                  Accede al Procedimiento de Insolvencia para Persona Natural y empieza de cero.
                  Primera consulta <strong className="text-white">GRATIS</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="#formulario"
                    className="h-14 px-7 bg-secondary text-primary font-bold rounded-xl flex items-center justify-center gap-2 shadow-card-lg hover:opacity-95 transition-all text-base"
                  >
                    Quiero mi Consulta Gratuita
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </a>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 px-7 border-2 border-white/30 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all text-base"
                  >
                    <span className="material-symbols-outlined text-xl">chat</span>
                    WhatsApp
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 text-sm text-blue-100">
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> +750 casos resueltos</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Atención 100% virtual</span>
                  <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Sin compromiso</span>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-3xl" />
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=720&h=620&fit=crop&crop=faces"
                  alt="Persona aliviada tras resolver sus deudas"
                  width={720}
                  height={520}
                  className="relative w-full h-[520px] object-cover rounded-3xl shadow-form border-8 border-white/10"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-card-lg flex items-center gap-3">
                  <div className="bg-secondary p-3 rounded-full">
                    <span className="material-symbols-outlined text-white">verified_user</span>
                  </div>
                  <div>
                    <p className="text-primary font-bold">Respaldo Legal</p>
                    <p className="text-on-surface-variant text-xs">Núcleo Jurídico SAS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. PROBLEMA ────────────────────────────────── */}
        <section className="py-16 sm:py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-primary leading-tight">
                Si estás viviendo esto, tenemos la solución
              </h2>
              <p className="text-on-surface-variant mt-3 text-base sm:text-lg">
                Sabemos lo que se siente. No estás solo y hay una salida legal.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROBLEMS.map(p => (
                <div
                  key={p.text}
                  className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-outline-variant/30 shadow-card"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#00522f]">{p.icon}</span>
                  </div>
                  <p className="text-on-surface text-base leading-snug pt-1.5">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. SOLUCIÓN ────────────────────────────────── */}
        <section className="bg-surface-container py-16 sm:py-20 px-5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-[#00522f] text-xs font-bold uppercase tracking-wider mb-3">
                La Salida Legal
              </span>
              <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-primary leading-tight">
                El Procedimiento de Insolvencia es tu camino
              </h2>
              <p className="text-on-surface-variant mt-3 text-base sm:text-lg">
                Cuatro pasos para recuperar el control de tu vida financiera.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {STEPS.map(s => (
                <div key={s.n} className="bg-white rounded-2xl p-6 border border-outline-variant/30 shadow-card relative">
                  <div className="w-12 h-12 rounded-full bg-primary text-white font-manrope font-bold text-xl flex items-center justify-center mb-4">
                    {s.n}
                  </div>
                  <h3 className="font-manrope font-bold text-primary text-lg mb-2">{s.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="#formulario"
                className="inline-flex h-14 px-8 bg-primary text-white font-bold rounded-xl items-center justify-center gap-2 shadow-card-lg hover:opacity-90 transition-all"
              >
                Quiero mi Consulta Gratuita
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. PRUEBA SOCIAL ───────────────────────────── */}
        <section className="py-16 sm:py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-primary leading-tight">
                Lo que dicen nuestros clientes
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3 text-on-surface-variant">
                <div className="flex text-amber-400 text-lg">
                  {[1, 2, 3, 4, 5].map(i => (
                    <span key={i} className="material-symbols-outlined filled text-xl">star</span>
                  ))}
                </div>
                <span className="text-sm font-semibold">+750 casos resueltos desde 2020</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {TESTIMONIALS.map(t => (
                <div key={t.name} className="bg-white rounded-2xl p-6 border border-outline-variant/30 shadow-card flex flex-col">
                  <div className="flex text-amber-400 mb-3">
                    {[1, 2, 3, 4, 5].map(i => (
                      <span key={i} className="material-symbols-outlined filled text-lg">star</span>
                    ))}
                  </div>
                  <p className="text-on-surface text-sm leading-relaxed flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-3 mt-5 pt-5 border-t border-outline-variant/30">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-[#00522f] font-bold text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm">{t.name}</p>
                      <p className="text-on-surface-variant text-xs">{t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. POR QUÉ DEUDA OFF ───────────────────────── */}
        <section className="py-16 sm:py-20 px-5">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary rounded-3xl p-6 sm:p-10 lg:p-14 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h2 className="font-manrope text-3xl sm:text-4xl font-bold leading-tight">
                    Por qué elegir Deuda OFF
                  </h2>
                  <p className="text-blue-100 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
                    Una marca de Núcleo Jurídico SAS, con experiencia comprobada en insolvencia de persona natural.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {BENEFITS.map(b => (
                    <div key={b.text} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-secondary">{b.icon}</span>
                      </div>
                      <p className="text-white text-sm sm:text-base leading-snug pt-1.5">{b.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. CTA FINAL CON FORMULARIO ────────────────── */}
        <section id="formulario" className="bg-surface-container-low py-16 sm:py-20 px-5 scroll-mt-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wider mb-3">
                Empieza Hoy
              </span>
              <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-primary leading-tight">
                Da el primer paso hoy — es gratis
              </h2>
              <p className="text-on-surface-variant mt-3 text-base sm:text-lg">
                Completa el formulario y un especialista en insolvencia se pondrá en contacto contigo.
                Sin costo, sin compromiso, 100% confidencial.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-form border border-outline-variant/30 p-5 sm:p-8 lg:p-10">
              <CRMForm />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 text-sm text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">lock</span>
                <span>Información confidencial</span>
              </div>
              <span className="hidden sm:inline text-outline-variant">·</span>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">schedule</span>
                <span>Respuesta en menos de 24h</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER LEGAL ───────────────────────────────── */}
        <footer className="bg-inverse-surface py-10 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Deuda OFF presta servicios de asesoría legal en procedimientos de insolvencia conforme a la
              Ley 1564 de 2012 y la Ley 2445 de 2025. Los resultados pueden variar según cada caso particular.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-5 text-xs text-white/50">
              <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
              <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
              <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            </div>
            <p className="text-xs text-white/40 mt-5">
              © 2025 Deuda OFF — Una marca de Núcleo Jurídico SAS.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
