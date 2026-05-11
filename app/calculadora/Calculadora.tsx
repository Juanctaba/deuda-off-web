'use client'

import { useState, useEffect } from 'react'
import { WA_URL } from '@/lib/constants'

type StepOption = { value: string; title: string; desc: string }
type Step =
  | { id: string; label: string; sublabel: string; type: 'options'; question: string; hint: string; options: StepOption[]; disqualify?: string[]; disqualifyMsg?: string }
  | { id: string; label: string; sublabel: string; type: 'slider'; question: string; hint: string; min: number; max: number; step: number; unit: string }
  | { id: string; label: string; sublabel: string; type: 'counter'; question: string; hint: string; min: number; max: number; disqualify?: (v: number) => boolean; disqualifyMsg?: string }
  | { id: string; label: string; sublabel: string; type: 'multicheck'; question: string; hint: string; options: StepOption[]; note?: string }

const STEPS: Step[] = [
  {
    id: 'tipo', label: 'Tipo de persona', sublabel: '¿Eres persona natural?', type: 'options',
    question: '¿Cuál es tu situación laboral o económica?',
    hint: 'El proceso aplica para personas naturales. Si tienes empresa registrada como S.A.S. o similar, existe un proceso separado.',
    options: [
      { value: 'empleado', title: 'Empleado', desc: 'Tienes contrato laboral fijo o indefinido' },
      { value: 'independiente', title: 'Independiente', desc: 'Trabajas por cuenta propia o prestación de servicios' },
      { value: 'pensionado', title: 'Pensionado/rentista', desc: 'Recibes pensión u otros ingresos fijos' },
      { value: 'comerciante', title: 'Pequeño comerciante', desc: 'Negocio no registrado como empresa (tendero, restaurante, taller)' },
      { value: 'empresa', title: 'Empresa / Sociedad', desc: 'SAS, LTDA, SA u otra figura jurídica registrada' },
    ],
    disqualify: ['empresa'],
    disqualifyMsg: 'Este proceso es para personas naturales. Para empresas existe el régimen de insolvencia empresarial. Te recomendamos consultar con un especialista.',
  },
  {
    id: 'deuda_total', label: 'Monto de deuda', sublabel: '¿Cuánto debes en total?', type: 'slider',
    question: '¿Cuánto sumas en total entre todas tus deudas?',
    hint: 'Incluye tarjetas de crédito, créditos bancarios, microcréditos, deudas con cooperativas y personas particulares.',
    min: 5, max: 500, step: 5, unit: 'M COP',
  },
  {
    id: 'num_acreedores', label: 'Nº de acreedores', sublabel: '¿Cuántos acreedores tienes?', type: 'counter',
    question: '¿Con cuántos acreedores diferentes tienes deudas?',
    hint: 'Cuenta banco por banco, cooperativa por cooperativa. Para el proceso se necesitan mínimo 2 acreedores distintos.',
    min: 1, max: 20,
    disqualify: (v: number) => v < 2,
    disqualifyMsg: 'La Ley de Insolvencia requiere mínimo 2 acreedores diferentes. Con un solo acreedor te recomendamos negociar directamente o explorar otras opciones.',
  },
  {
    id: 'mora', label: 'Estado de mora', sublabel: '¿Cuánto llevas sin pagar?', type: 'options',
    question: '¿Cuál es tu situación de pago actual?',
    hint: 'Esta información es estrictamente confidencial y determina qué tipo de proceso es más adecuado para ti.',
    options: [
      { value: 'mas_90', title: '+90 días en mora', desc: 'Llevas más de 3 meses sin pagar al menos 2 deudas' },
      { value: 'entre_30', title: '30–90 días en mora', desc: 'Estás en mora pero reciente' },
      { value: 'al_dia', title: 'Al día pero sin poder pagar', desc: 'Pagas con dificultad extrema o sabes que pararás pronto' },
      { value: 'pagando', title: 'Pagando sin problema', desc: 'Actualmente puedes cumplir tus obligaciones' },
    ],
    disqualify: ['pagando'],
    disqualifyMsg: 'Si actualmente puedes pagar tus deudas sin dificultad, no es el momento de acogerte a insolvencia. Si tu situación cambia, contáctanos.',
  },
  {
    id: 'deuda_tipos', label: 'Tipo de deudas', sublabel: '¿Qué tipo de deudas tienes?', type: 'multicheck',
    question: '¿Qué tipos de deudas tienes? (selecciona todas las que apliquen)',
    hint: 'Deudas de alimentos y multas judiciales no se incluyen. El resto generalmente sí aplica.',
    options: [
      { value: 'banco', title: 'Créditos bancarios', desc: 'Libre inversión, consumo, hipotecario' },
      { value: 'tarjeta', title: 'Tarjetas de crédito', desc: 'Cualquier banco o entidad' },
      { value: 'cooperativa', title: 'Cooperativas / cajas', desc: 'Ahorro y crédito, cajas de compensación' },
      { value: 'microcredito', title: 'Microcréditos', desc: 'Rapicredit, Juancho, etc.' },
      { value: 'vehiculo', title: 'Crédito vehicular', desc: 'Leasing o crédito de carro/moto' },
      { value: 'particular', title: 'Deudas con personas', desc: 'Préstamos de familiares, amigos o conocidos' },
      { value: 'alimentos', title: 'Cuotas de alimentos', desc: 'Obligación alimentaria a hijos o cónyuge' },
      { value: 'multas', title: 'Multas o sanciones', desc: 'Impuestas por autoridades judiciales' },
    ],
    note: 'Las deudas de alimentos y multas NO se pueden incluir en el proceso, pero las demás sí.',
  },
  {
    id: 'proceso_activo', label: 'Procesos activos', sublabel: '¿Tienes juicios activos?', type: 'options',
    question: '¿Tienes actualmente alguno de estos procesos?',
    hint: 'Esta información nos ayuda a priorizar y definir la urgencia de tu caso.',
    options: [
      { value: 'embargo_sueldo', title: 'Embargo de salario activo', desc: 'Descuentan directamente de tu nómina' },
      { value: 'embargo_bien', title: 'Embargo de cuenta o bien', desc: 'Cuentas bloqueadas o bienes embargados' },
      { value: 'proceso_jud', title: 'Proceso judicial en curso', desc: 'Hay demanda activa en tu contra' },
      { value: 'solo_cobros', title: 'Solo llamadas de cobranza', desc: 'No hay procesos formales aún' },
      { value: 'nada', title: 'Ninguno todavía', desc: 'No hay procesos activos' },
    ],
  },
]

type Answers = Record<string, string | number | string[]>

function fmtMoney(v: number) {
  if (v >= 1000) return '$' + (v / 1000).toFixed(v % 1000 === 0 ? 0 : 1) + ' B'
  return '$' + v + 'M'
}

function hasValidAnswer(step: Step, answers: Answers) {
  if (step.type === 'slider' || step.type === 'counter') return true
  if (step.type === 'multicheck') return ((answers[step.id] as string[]) ?? []).length > 0
  return !!answers[step.id]
}

function calcScore(answers: Answers) {
  let s = 0
  const dt = (answers['deuda_total'] as number) ?? 0
  if (dt >= 60) s += 40
  else if (dt >= 30) s += 20
  else s += 5
  const na = (answers['num_acreedores'] as number) ?? 0
  if (na >= 3) s += 20
  else if (na === 2) s += 15
  const m = answers['mora']
  if (m === 'mas_90') s += 25
  else if (m === 'entre_30' || m === 'al_dia') s += 15
  const p = answers['proceso_activo']
  if (p === 'embargo_sueldo' || p === 'embargo_bien') s += 15
  else if (p === 'proceso_jud') s += 10
  else if (p === 'solo_cobros') s += 7
  else s += 3
  return Math.min(s, 100)
}

function getLevel(score: number): 'qualify' | 'partial' | 'no' {
  return score >= 70 ? 'qualify' : score >= 40 ? 'partial' : 'no'
}

type Criterion = { status: 'pass' | 'fail' | 'warn'; text: string }

function buildCriteria(answers: Answers): Criterion[] {
  const items: Criterion[] = []
  const dt = (answers['deuda_total'] as number) ?? 0
  const na = (answers['num_acreedores'] as number) ?? 0
  const m = answers['mora']
  const tipo = answers['tipo']
  const dt2 = (answers['deuda_tipos'] as string[]) ?? []
  items.push({ status: tipo !== 'empresa' ? 'pass' : 'fail', text: tipo !== 'empresa' ? 'Eres persona natural — proceso aplica' : 'Persona jurídica — proceso no aplica' })
  items.push({
    status: dt >= 60 ? 'pass' : dt >= 30 ? 'warn' : 'fail',
    text:
      dt >= 60
        ? `Deuda de ${fmtMoney(dt)} — supera el umbral de $60M`
        : dt >= 30
        ? `Deuda de ${fmtMoney(dt)} — cerca del umbral, puede calificar`
        : `Deuda de ${fmtMoney(dt)} — bajo el umbral recomendado ($60M)`,
  })
  items.push({ status: na >= 2 ? 'pass' : 'fail', text: na >= 2 ? `${na} acreedores — cumple el mínimo legal (2+)` : `${na} acreedor — se necesitan al menos 2` })
  items.push({
    status: m === 'mas_90' ? 'pass' : m === 'entre_30' || m === 'al_dia' ? 'warn' : 'fail',
    text:
      m === 'mas_90'
        ? 'Mora mayor a 90 días — criterio legal cumplido'
        : m === 'entre_30'
        ? 'Mora de 30–90 días — criterio en desarrollo'
        : m === 'al_dia'
        ? 'Al día pero con dificultad — puede calificar por incumplimiento inminente'
        : 'Sin problemas de pago actuales',
  })
  if (dt2.some(d => !['alimentos', 'multas'].includes(d))) items.push({ status: 'pass', text: 'Tiene deudas incluibles en el proceso (bancos, tarjetas, cooperativas)' })
  if (dt2.includes('alimentos') || dt2.includes('multas')) items.push({ status: 'warn', text: 'Algunas deudas (alimentos/multas) no se incluyen, pero las demás sí' })
  const p = answers['proceso_activo']
  if (p === 'embargo_sueldo' || p === 'embargo_bien') items.push({ status: 'warn', text: 'URGENTE: Tiene embargo activo — la radicación detiene esto de inmediato' })
  else if (p === 'proceso_jud') items.push({ status: 'warn', text: 'Proceso judicial activo — se suspende al radicar insolvencia' })
  return items
}

const STATUS_BADGE: Record<Criterion['status'], { bg: string; text: string; icon: string }> = {
  pass: { bg: 'bg-secondary-container', text: 'text-[#00522f]', icon: 'check_circle' },
  warn: { bg: 'bg-amber-100', text: 'text-amber-800', icon: 'error' },
  fail: { bg: 'bg-red-50', text: 'text-red-700', icon: 'cancel' },
}

const RESULT_THEME = {
  qualify: { ring: 'bg-secondary-container text-[#00522f]', title: 'text-secondary', fill: 'bg-secondary', icon: 'celebration' },
  partial: { ring: 'bg-amber-100 text-amber-800', title: 'text-amber-700', fill: 'bg-amber-500', icon: 'search' },
  no: { ring: 'bg-red-50 text-red-700', title: 'text-red-700', fill: 'bg-red-500', icon: 'chat' },
}

export default function Calculadora() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [disqualified, setDisqualified] = useState(false)
  const [disqualifyMsg, setDisqualifyMsg] = useState('')
  const [animatedScore, setAnimatedScore] = useState(0)

  const isResult = currentStep === STEPS.length || disqualified
  const step = !isResult ? STEPS[currentStep] : null
  const pct = Math.round((currentStep / STEPS.length) * 100)
  const score = !disqualified && isResult ? calcScore(answers) : 0
  const level = getLevel(score)
  const criteria = !disqualified && isResult ? buildCriteria(answers) : []
  const urgent = answers['proceso_activo'] === 'embargo_sueldo' || answers['proceso_activo'] === 'embargo_bien'
  const dt = (answers['deuda_total'] as number) ?? 0

  useEffect(() => {
    if (!isResult || disqualified) return
    const target = calcScore(answers)
    setAnimatedScore(0)
    let cur = 0
    const t = setInterval(() => {
      cur = Math.min(cur + 2, target)
      setAnimatedScore(cur)
      if (cur >= target) clearInterval(t)
    }, 16)
    return () => clearInterval(t)
  }, [isResult, disqualified, answers])

  function selectOption(id: string, value: string) {
    setAnswers(a => ({ ...a, [id]: value }))
  }
  function updateSlider(value: number) {
    setAnswers(a => ({ ...a, deuda_total: value }))
  }
  function changeCounter(delta: number) {
    if (!step || step.type !== 'counter') return
    setAnswers(a => {
      const cur = (a[step.id] as number) ?? 3
      const nv = Math.max(step.min, Math.min(step.max, cur + delta))
      return { ...a, [step.id]: nv }
    })
  }
  function toggleCheck(id: string, value: string) {
    setAnswers(a => {
      const arr = ((a[id] as string[]) ?? []).slice()
      const idx = arr.indexOf(value)
      if (idx >= 0) arr.splice(idx, 1)
      else arr.push(value)
      return { ...a, [id]: arr }
    })
  }
  function nextStep() {
    if (!step) return
    const a = { ...answers }
    if (step.type === 'slider' && a[step.id] == null) a[step.id] = 80
    if (step.type === 'counter' && a[step.id] == null) a[step.id] = 3
    setAnswers(a)
    if (step.type === 'options' && step.disqualify && step.disqualify.includes(a[step.id] as string)) {
      setDisqualified(true); setDisqualifyMsg(step.disqualifyMsg ?? ''); return
    }
    if (step.type === 'counter' && step.disqualify && step.disqualify(a[step.id] as number)) {
      setDisqualified(true); setDisqualifyMsg(step.disqualifyMsg ?? ''); return
    }
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setCurrentStep(STEPS.length)
    }
  }
  function prevStep() { if (currentStep > 0) setCurrentStep(currentStep - 1) }
  function restart() {
    setCurrentStep(0); setAnswers({}); setDisqualified(false); setDisqualifyMsg('')
  }

  const titles = {
    qualify: '¡Muy probablemente calificas!',
    partial: 'Posiblemente calificas — necesitas consulta',
    no: 'En este momento es difícil calificar',
  }
  const ctaText = {
    qualify: urgent ? 'Agenda mi consulta urgente — GRATIS' : 'Quiero mi consulta gratuita',
    partial: 'Consultar mi caso gratis',
    no: 'Explorar otras opciones',
  }
  const waMsg = encodeURIComponent(
    level === 'qualify'
      ? `Hola, hice la calculadora de Deuda OFF y califiqué. Tengo deudas por ${fmtMoney(dt)} con ${answers['num_acreedores']} acreedores. Quiero hablar con un especialista.`
      : 'Hola, hice la calculadora de Deuda OFF. Quiero consultar mi situación.'
  )
  const waBase = WA_URL.split('?')[0]

  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <div className="grid lg:grid-cols-[340px_1fr] gap-6 lg:gap-10">
          {/* Sidebar */}
          <aside className="bg-primary text-white rounded-3xl p-6 sm:p-8 lg:sticky lg:top-24 lg:self-start flex flex-col gap-6 overflow-hidden relative">
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-[10px] font-bold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Verificación confidencial
              </span>
              <h1 className="font-manrope text-2xl sm:text-3xl font-bold leading-tight">
                ¿Puedo eliminar mis deudas <span className="text-secondary-fixed-dim">legalmente?</span>
              </h1>
              <p className="text-sm text-blue-100/80 leading-relaxed mt-3">
                Responde 6 preguntas y en 2 minutos sabrás si calificas para acogerte a la Ley 2445 de 2025.
              </p>
            </div>

            {/* Steps tracker */}
            <ol className="relative flex lg:flex-col gap-1 lg:gap-0 overflow-x-auto lg:overflow-visible -mx-2 px-2 lg:mx-0 lg:px-0">
              {STEPS.map((s, i) => {
                const isDone = i < currentStep
                const isActive = i === currentStep && !disqualified
                return (
                  <li key={s.id} className="flex lg:flex-row flex-col items-center lg:items-start gap-3 lg:gap-3 min-w-[90px] lg:min-w-0 lg:py-3 relative">
                    {i !== STEPS.length - 1 && (
                      <span className={`hidden lg:block absolute left-[15px] top-10 h-[calc(100%-8px)] w-0.5 ${isDone ? 'bg-secondary' : 'bg-white/10'}`} />
                    )}
                    <span
                      className={[
                        'shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all',
                        isDone ? 'bg-secondary border-secondary text-primary' :
                        isActive ? 'bg-white border-white text-primary ring-4 ring-white/20' :
                        'bg-white/5 border-white/20 text-white/40',
                      ].join(' ')}
                    >
                      {isDone ? '✓' : i + 1}
                    </span>
                    <div className="hidden lg:block flex-1 pt-1">
                      <p className={`text-sm font-semibold ${isActive ? 'text-white' : isDone ? 'text-white/70' : 'text-white/40'}`}>{s.label}</p>
                      <p className={`text-xs ${isActive ? 'text-white/60' : 'text-white/30'}`}>{s.sublabel}</p>
                    </div>
                    <p className={`lg:hidden text-[10px] text-center leading-tight ${isActive ? 'text-white' : isDone ? 'text-white/70' : 'text-white/40'}`}>{s.label}</p>
                  </li>
                )
              })}
            </ol>

            <div className="hidden lg:block mt-auto pt-4 border-t border-white/10 space-y-2.5">
              {[
                'Proceso avalado por Ley 2445 de 2025',
                'Tus datos son 100% confidenciales',
                '+750 casos resueltos desde 2020',
                'Sin costo, sin compromiso',
              ].map(t => (
                <div key={t} className="flex items-center gap-2 text-xs text-white/60">
                  <span className="material-symbols-outlined text-sm text-secondary">check_circle</span>
                  {t}
                </div>
              ))}
            </div>
          </aside>

          {/* Content */}
          <main className="flex flex-col">
            {disqualified ? (
              <div className="bg-white rounded-3xl shadow-card-lg border border-outline-variant/30 overflow-hidden">
                <div className="px-6 sm:px-10 pt-10 pb-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-5">
                    <span className="material-symbols-outlined text-4xl">block</span>
                  </div>
                  <h2 className="font-manrope text-2xl sm:text-3xl font-bold text-red-700 leading-tight mb-3">No califica en este momento</h2>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-md mx-auto">{disqualifyMsg}</p>
                </div>
                <div className="border-t border-outline-variant/30 px-6 sm:px-10 py-6 flex flex-col gap-3">
                  <a
                    href={`${waBase}?text=Hola%2C%20tengo%20dudas%20sobre%20mi%20situaci%C3%B3n%20de%20deudas`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-14 bg-[#25D366] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    Hablar con un especialista
                  </a>
                  <button onClick={restart} className="h-12 border border-outline-variant text-on-surface-variant rounded-xl font-semibold hover:bg-surface-container transition-colors">
                    ← Volver a intentar
                  </button>
                </div>
              </div>
            ) : isResult ? (
              <div className="bg-white rounded-3xl shadow-card-lg border border-outline-variant/30 overflow-hidden">
                <div className="px-6 sm:px-10 pt-10 pb-6 text-center">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 ${RESULT_THEME[level].ring}`}>
                    <span className="material-symbols-outlined text-4xl">{RESULT_THEME[level].icon}</span>
                  </div>
                  <h2 className={`font-manrope text-2xl sm:text-3xl font-bold leading-tight mb-3 ${RESULT_THEME[level].title}`}>{titles[level]}</h2>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                    {level === 'qualify' ? (
                      <>
                        Basado en tus respuestas, tu perfil cumple los criterios clave de la Ley 2445 de 2025.{' '}
                        {urgent
                          ? <strong className="text-red-600">Tienes embargos activos — actúa hoy.</strong>
                          : 'El siguiente paso es una consulta gratuita para confirmar tu caso.'}
                      </>
                    ) : level === 'partial' ? (
                      'Algunos criterios se cumplen pero hay puntos a revisar. Una consulta gratuita te dará claridad sobre tus opciones.'
                    ) : (
                      'Tu situación actual no cumple los criterios principales. Podemos orientarte hacia otras alternativas.'
                    )}
                  </p>
                </div>
                <div className="border-t border-outline-variant/30 px-6 sm:px-10 py-6">
                  <div className="bg-surface-container-low rounded-2xl p-5 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Puntaje de calificación</span>
                      <span className="font-manrope text-xl font-bold text-primary">{animatedScore}/100</span>
                    </div>
                    <div className="h-2.5 bg-outline-variant/30 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-300 ease-out ${RESULT_THEME[level].fill}`} style={{ width: `${animatedScore}%` }} />
                    </div>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3">Análisis de criterios</p>
                  <ul className="space-y-2 mb-6">
                    {criteria.map((c, i) => (
                      <li key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${STATUS_BADGE[c.status].bg} ${STATUS_BADGE[c.status].text}`}>
                        <span className="material-symbols-outlined text-lg shrink-0">{STATUS_BADGE[c.status].icon}</span>
                        <span>{c.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3">
                    <a
                      href={`${waBase}?text=${waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-14 bg-[#25D366] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all text-base"
                    >
                      <span className="material-symbols-outlined">chat</span>
                      {ctaText[level]}
                    </a>
                    <a
                      href="https://deudaoff.com/#formulario"
                      className="h-12 border border-outline-variant text-on-surface-variant rounded-xl font-semibold flex items-center justify-center hover:bg-surface-container transition-colors"
                    >
                      Prefiero el formulario en línea
                    </a>
                  </div>
                  <p className="text-xs text-on-surface-variant text-center mt-4 leading-relaxed">
                    Este análisis es orientativo, no constituye asesoría legal. Solo un abogado puede confirmar tu elegibilidad. Consulta gratuita y confidencial.
                  </p>
                </div>
              </div>
            ) : step && (
              <div className="bg-white rounded-3xl shadow-card border border-outline-variant/30 overflow-hidden">
                <div className="px-6 sm:px-10 pt-7 pb-5 border-b border-outline-variant/30 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-secondary">Pregunta {currentStep + 1} de {STEPS.length}</p>
                    <h2 className="font-manrope text-xl sm:text-2xl font-bold text-primary mt-1 leading-tight">{step.label}</h2>
                  </div>
                  <span className="font-manrope text-3xl sm:text-4xl font-bold text-outline-variant select-none">0{currentStep + 1}</span>
                </div>
                <div className="h-1 bg-outline-variant/30">
                  <div className="h-full bg-secondary transition-all duration-500" style={{ width: `${pct}%` }} />
                </div>
                <div className="px-6 sm:px-10 py-7">
                  <p className="text-base sm:text-lg font-semibold text-primary leading-snug">{step.question}</p>
                  <p className="text-sm text-on-surface-variant mt-1.5 mb-5 leading-relaxed">{step.hint}</p>

                  {step.type === 'options' && (
                    <div className="flex flex-col gap-2.5">
                      {step.options.map(o => {
                        const selected = answers[step.id] === o.value
                        return (
                          <button
                            key={o.value}
                            type="button"
                            onClick={() => selectOption(step.id, o.value)}
                            className={[
                              'text-left w-full flex items-start gap-3 p-4 rounded-xl border-2 transition-colors',
                              selected ? 'border-primary bg-primary/5' : 'border-outline-variant/40 hover:border-outline bg-white',
                            ].join(' ')}
                          >
                            <span className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 transition-colors ${selected ? 'border-primary bg-primary' : 'border-outline-variant'}`}>
                              {selected && <span className="w-2 h-2 rounded-full bg-white" />}
                            </span>
                            <span>
                              <span className="block font-semibold text-primary text-sm">{o.title}</span>
                              <span className="block text-xs text-on-surface-variant mt-0.5 leading-relaxed">{o.desc}</span>
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  )}

                  {step.type === 'slider' && (() => {
                    const val = (answers[step.id] as number) ?? 80
                    let tone: 'ok' | 'warn' | 'bad' = 'bad'
                    let tl = 'Menos de $30M: difícil calificación'
                    if (val >= 60) { tone = 'ok'; tl = '+ de $60M: califica para Deuda OFF' }
                    else if (val >= 30) { tone = 'warn'; tl = '+ de $30M: puede calificar según el caso' }
                    const toneClasses = {
                      ok: 'bg-secondary-container text-[#00522f]',
                      warn: 'bg-amber-100 text-amber-800',
                      bad: 'bg-red-50 text-red-700',
                    }[tone]
                    return (
                      <>
                        <p className="font-manrope text-3xl sm:text-4xl font-bold text-primary leading-none">
                          {fmtMoney(val)} <span className="text-base font-semibold text-on-surface-variant ml-1">COP</span>
                        </p>
                        <input
                          type="range"
                          min={step.min}
                          max={step.max}
                          step={step.step}
                          value={val}
                          onChange={e => updateSlider(parseInt(e.target.value))}
                          className="w-full mt-4 accent-primary cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-on-surface-variant mt-1">
                          <span>{fmtMoney(step.min)}</span>
                          <span>{fmtMoney(step.max)}</span>
                        </div>
                        <div className={`flex items-center gap-2 mt-4 px-4 py-2.5 rounded-xl text-sm font-semibold ${toneClasses}`}>
                          <span className="material-symbols-outlined text-lg">{tone === 'ok' ? 'check_circle' : tone === 'warn' ? 'error' : 'cancel'}</span>
                          {tl}
                        </div>
                      </>
                    )
                  })()}

                  {step.type === 'counter' && (() => {
                    const val = (answers[step.id] as number) ?? 3
                    return (
                      <>
                        <div className="flex items-center gap-4">
                          <button type="button" onClick={() => changeCounter(-1)} className="w-12 h-12 rounded-xl border-2 border-outline-variant text-primary text-2xl font-semibold hover:border-primary hover:bg-primary/5 transition-colors">−</button>
                          <span className="font-manrope text-3xl font-bold text-primary min-w-[60px] text-center">{val}</span>
                          <button type="button" onClick={() => changeCounter(1)} className="w-12 h-12 rounded-xl border-2 border-outline-variant text-primary text-2xl font-semibold hover:border-primary hover:bg-primary/5 transition-colors">+</button>
                        </div>
                        <p className={`text-sm mt-3 ${val < 2 ? 'text-red-700 font-semibold' : 'text-on-surface-variant'}`}>
                          {val < 2 ? 'Se requieren mínimo 2 acreedores' : `${val} acreedores`}
                        </p>
                      </>
                    )
                  })()}

                  {step.type === 'multicheck' && (
                    <>
                      <div className="flex flex-col gap-2.5">
                        {step.options.map(o => {
                          const sel = ((answers[step.id] as string[]) ?? []).includes(o.value)
                          return (
                            <button
                              key={o.value}
                              type="button"
                              onClick={() => toggleCheck(step.id, o.value)}
                              className={[
                                'text-left w-full flex items-start gap-3 p-4 rounded-xl border-2 transition-colors',
                                sel ? 'border-primary bg-primary/5' : 'border-outline-variant/40 hover:border-outline bg-white',
                              ].join(' ')}
                            >
                              <span className={`shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 transition-colors ${sel ? 'border-primary bg-primary' : 'border-outline-variant'}`}>
                                {sel && (
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                )}
                              </span>
                              <span>
                                <span className="block font-semibold text-primary text-sm">{o.title}</span>
                                <span className="block text-xs text-on-surface-variant mt-0.5 leading-relaxed">{o.desc}</span>
                              </span>
                            </button>
                          )
                        })}
                      </div>
                      {step.note && (
                        <div className="mt-4 flex items-start gap-2 bg-amber-50 border border-amber-200 text-amber-900 text-xs rounded-xl px-3 py-2.5 leading-relaxed">
                          <span className="material-symbols-outlined text-base shrink-0 mt-px">error</span>
                          <p>{step.note}</p>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div className="px-6 sm:px-10 pb-7 pt-2 flex items-center justify-between gap-3">
                  {currentStep > 0 ? (
                    <button type="button" onClick={prevStep} className="px-5 h-12 border border-outline-variant text-on-surface-variant rounded-xl font-semibold hover:bg-surface-container transition-colors">
                      ← Anterior
                    </button>
                  ) : <span />}
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!hasValidAnswer(step, answers)}
                    className="px-6 h-12 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-card flex items-center gap-2"
                  >
                    {currentStep === STEPS.length - 1 ? 'Ver mi resultado' : 'Continuar'}
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
