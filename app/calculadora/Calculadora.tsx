'use client'

import { useState, useEffect, FormEvent } from 'react'
import { WA_URL } from '@/lib/constants'

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/lRtKBuPMTNYmQnYj81H6/webhook-trigger/b183ec9a-1657-48df-9204-e5fc41998747'

const COUNTRIES = [
  { code: '+57', name: 'Colombia' },
  { code: '+52', name: 'México' },
  { code: '+54', name: 'Argentina' },
  { code: '+56', name: 'Chile' },
  { code: '+51', name: 'Perú' },
  { code: '+593', name: 'Ecuador' },
  { code: '+58', name: 'Venezuela' },
  { code: '+591', name: 'Bolivia' },
  { code: '+595', name: 'Paraguay' },
  { code: '+598', name: 'Uruguay' },
  { code: '+34', name: 'España' },
  { code: '+1', name: 'EE.UU. / Canadá' },
]

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
  return score >= 70 ? 'qualify' : score >= 50 ? 'partial' : 'no'
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
  no: { ring: 'bg-red-50 text-red-700', title: 'text-red-700', fill: 'bg-red-500', icon: 'block' },
}

const TITLES = {
  qualify: '¡Muy probablemente calificas!',
  partial: 'Tu caso necesita una revisión a detalle',
  no: 'En este momento no calificas',
}

function moraLabel(v: unknown) {
  switch (v) {
    case 'mas_90': return '+90 días en mora'
    case 'entre_30': return '30–90 días en mora'
    case 'al_dia': return 'Al día pero sin poder pagar'
    case 'pagando': return 'Pagando sin problema'
    default: return ''
  }
}
function tipoLabel(v: unknown) {
  switch (v) {
    case 'empleado': return 'Empleado'
    case 'independiente': return 'Independiente'
    case 'pensionado': return 'Pensionado/rentista'
    case 'comerciante': return 'Pequeño comerciante'
    case 'empresa': return 'Empresa / Sociedad'
    default: return ''
  }
}
function procesoLabel(v: unknown) {
  switch (v) {
    case 'embargo_sueldo': return 'Embargo de salario activo'
    case 'embargo_bien': return 'Embargo de cuenta o bien'
    case 'proceso_jud': return 'Proceso judicial en curso'
    case 'solo_cobros': return 'Solo llamadas de cobranza'
    case 'nada': return 'Ninguno todavía'
    default: return ''
  }
}

export default function Calculadora() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [disqualified, setDisqualified] = useState(false)
  const [disqualifyMsg, setDisqualifyMsg] = useState('')

  // Form / lead capture
  const [nombre, setNombre] = useState('')
  const [pais, setPais] = useState('+57')
  const [telefono, setTelefono] = useState('')
  const [caso, setCaso] = useState('')
  const [formError, setFormError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Empresa branch (early disqualification, captured as lead)
  const [empresaFlow, setEmpresaFlow] = useState(false)
  const [empresaSubmitted, setEmpresaSubmitted] = useState(false)

  // Attribution
  const [utm, setUtm] = useState<Record<string, string>>({})
  const [pageMeta, setPageMeta] = useState<{ url?: string; referrer?: string }>({})

  const [animatedScore, setAnimatedScore] = useState(0)

  const quizDone = currentStep === STEPS.length && !disqualified && !empresaFlow
  const score = quizDone ? calcScore(answers) : 0
  const level = getLevel(score)
  const needsForm = quizDone && level === 'qualify' && !formSubmitted
  const showResult = quizDone && (level !== 'qualify' || formSubmitted)
  const isQuiz = !disqualified && !empresaFlow && !quizDone
  const step = isQuiz ? STEPS[currentStep] : null

  const dt = (answers['deuda_total'] as number) ?? 0
  const na = (answers['num_acreedores'] as number) ?? 0
  const urgent = answers['proceso_activo'] === 'embargo_sueldo' || answers['proceso_activo'] === 'embargo_bien'

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const captured: Record<string, string> = {}
    params.forEach((v, k) => {
      if (k.startsWith('utm_') || ['gclid', 'fbclid', 'msclkid', 'ttclid', 'wbraid', 'gbraid'].includes(k)) {
        captured[k] = v
      }
    })
    setUtm(captured)
    setPageMeta({ url: window.location.href, referrer: document.referrer || '' })
  }, [])

  useEffect(() => {
    if (!showResult) return
    setAnimatedScore(0)
    let cur = 0
    const t = setInterval(() => {
      cur = Math.min(cur + 2, score)
      setAnimatedScore(cur)
      if (cur >= score) clearInterval(t)
    }, 16)
    return () => clearInterval(t)
  }, [showResult, score])

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
      if (step.id === 'tipo' && a[step.id] === 'empresa') {
        setEmpresaFlow(true)
        if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      setDisqualified(true); setDisqualifyMsg(step.disqualifyMsg ?? ''); return
    }
    if (step.type === 'counter' && step.disqualify && step.disqualify(a[step.id] as number)) {
      setDisqualified(true); setDisqualifyMsg(step.disqualifyMsg ?? ''); return
    }
    setCurrentStep(currentStep + 1)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  function prevStep() { if (currentStep > 0) setCurrentStep(currentStep - 1) }
  function restart() {
    setCurrentStep(0); setAnswers({}); setDisqualified(false); setDisqualifyMsg('')
    setNombre(''); setTelefono(''); setPais('+57'); setCaso('')
    setFormSubmitted(false); setFormError(null)
    setEmpresaFlow(false); setEmpresaSubmitted(false)
  }

  async function sendToWebhook(payload: Record<string, unknown>) {
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (err) {
      // Fire-and-forget — don't block the user if the webhook fails
      // (CORS / network); the lead UX continues.
      console.warn('Webhook envío falló:', err)
    }
  }

  async function submitEmpresaForm(e: FormEvent) {
    e.preventDefault()
    const cleanName = nombre.trim()
    const cleanPhone = telefono.replace(/[^\d]/g, '')
    const cleanCaso = caso.trim()
    if (cleanName.length < 2) { setFormError('Ingresa tu nombre completo'); return }
    if (cleanPhone.length < 7) { setFormError('Ingresa un teléfono válido'); return }
    if (cleanCaso.length < 10) { setFormError('Cuéntanos brevemente tu caso (mínimo 10 caracteres)'); return }
    setFormError(null)
    setSubmitting(true)
    await sendToWebhook({
      nombre: cleanName,
      codigo_pais: pais,
      telefono_local: cleanPhone,
      telefono_e164: `${pais}${cleanPhone}`,
      whatsapp: `${pais.replace('+', '')}${cleanPhone}`,
      caso: cleanCaso,
      nivel: 'empresa',
      tipo: 'empresa',
      tipo_label: 'Empresa / Sociedad',
      respuestas: answers,
      utm,
      url: pageMeta.url,
      referrer: pageMeta.referrer,
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      fecha: new Date().toISOString(),
    })
    setSubmitting(false)
    setEmpresaSubmitted(true)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function submitForm(e: FormEvent) {
    e.preventDefault()
    const cleanName = nombre.trim()
    const cleanPhone = telefono.replace(/[^\d]/g, '')
    if (cleanName.length < 2) { setFormError('Ingresa tu nombre completo'); return }
    if (cleanPhone.length < 7) { setFormError('Ingresa un teléfono válido'); return }
    setFormError(null)
    setSubmitting(true)

    await sendToWebhook({
      nombre: cleanName,
      codigo_pais: pais,
      telefono_local: cleanPhone,
      telefono_e164: `${pais}${cleanPhone}`,
      whatsapp: `${pais.replace('+', '')}${cleanPhone}`,
      score,
      nivel: level,
      urgente: urgent,
      deuda_total_millones: dt,
      deuda_formato: fmtMoney(dt),
      num_acreedores: na,
      mora: answers['mora'] ?? null,
      mora_label: moraLabel(answers['mora']),
      tipo: answers['tipo'] ?? null,
      tipo_label: tipoLabel(answers['tipo']),
      proceso_activo: answers['proceso_activo'] ?? null,
      proceso_label: procesoLabel(answers['proceso_activo']),
      tipos_deuda: answers['deuda_tipos'] ?? [],
      respuestas: answers,
      criterios: buildCriteria(answers),
      utm,
      url: pageMeta.url,
      referrer: pageMeta.referrer,
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      fecha: new Date().toISOString(),
    })
    setSubmitting(false)
    setFormSubmitted(true)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const waBase = WA_URL.split('?')[0]
  const waMsgPartial = encodeURIComponent(
    `Hola, hice la calculadora de Deuda OFF y mi caso necesita revisión a detalle.\n\n` +
    `• Deudas: ${fmtMoney(dt)} COP\n` +
    `• Acreedores: ${na}\n` +
    `• Mora: ${moraLabel(answers['mora'])}\n` +
    `• Procesos: ${procesoLabel(answers['proceso_activo'])}\n\n` +
    `Quiero que revisen mi caso.`
  )
  const waMsgQualify = encodeURIComponent(
    `Hola${nombre ? ', soy ' + nombre.trim() : ''}. Hice la calculadora de Deuda OFF y califiqué (puntaje ${score}/100).\n\n` +
    `• Deudas: ${fmtMoney(dt)} COP\n` +
    `• Acreedores: ${na}\n` +
    `• Mora: ${moraLabel(answers['mora'])}\n\n` +
    `Quiero hablar con un especialista.`
  )

  const pct = Math.round((currentStep / STEPS.length) * 100)

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

            <ol className="relative flex lg:flex-col gap-1 lg:gap-0 overflow-x-auto lg:overflow-visible -mx-2 px-2 lg:mx-0 lg:px-0">
              {STEPS.map((s, i) => {
                const isDone = i < currentStep || quizDone
                const isActive = i === currentStep && isQuiz
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
            {/* === Disqualified (early bail) === */}
            {disqualified && (
              <div className="bg-white rounded-3xl shadow-card-lg border border-outline-variant/30 overflow-hidden">
                <div className="px-6 sm:px-10 pt-10 pb-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-5">
                    <span className="material-symbols-outlined text-4xl">block</span>
                  </div>
                  <h2 className="font-manrope text-2xl sm:text-3xl font-bold text-red-700 leading-tight mb-3">No califica en este momento</h2>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-md mx-auto">{disqualifyMsg}</p>
                </div>
                <div className="border-t border-outline-variant/30 px-6 sm:px-10 py-6">
                  <button onClick={restart} className="h-12 w-full border border-outline-variant text-on-surface-variant rounded-xl font-semibold hover:bg-surface-container transition-colors">
                    ← Volver a intentar
                  </button>
                  <p className="text-xs text-on-surface-variant text-center mt-4 leading-relaxed">
                    Este análisis es orientativo, no constituye asesoría legal. Solo un abogado puede confirmar tu elegibilidad.
                  </p>
                </div>
              </div>
            )}

            {/* === Empresa branch — capture lead and route to specialists === */}
            {empresaFlow && !empresaSubmitted && (
              <div className="bg-white rounded-3xl shadow-card-lg border border-outline-variant/30 overflow-hidden">
                <div className="px-6 sm:px-10 pt-8 pb-5 border-b border-outline-variant/30">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold uppercase tracking-wider mb-3">
                    <span className="material-symbols-outlined text-sm">info</span> Asesoría especializada
                  </span>
                  <h2 className="font-manrope text-2xl sm:text-3xl font-bold text-primary leading-tight">
                    Tu caso no aplica al proceso de insolvencia de persona natural
                  </h2>
                  <p className="text-on-surface-variant text-sm sm:text-base mt-2 leading-relaxed">
                    Para empresas y sociedades existe un régimen de insolvencia separado. Déjanos tus datos y cuéntanos brevemente tu situación — un especialista te contactará.
                  </p>
                </div>
                <form onSubmit={submitEmpresaForm} className="px-6 sm:px-10 py-7 flex flex-col gap-4">
                  <div>
                    <label htmlFor="empresa-nombre" className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">Nombre completo</label>
                    <input
                      id="empresa-nombre"
                      type="text"
                      autoComplete="name"
                      value={nombre}
                      onChange={e => setNombre(e.target.value)}
                      placeholder="Ej. Juan Pérez"
                      className="w-full h-12 px-4 rounded-xl border-2 border-outline-variant/40 bg-white text-on-surface placeholder:text-outline focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa-telefono" className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">Teléfono (WhatsApp)</label>
                    <div className="flex gap-2">
                      <select
                        aria-label="País"
                        value={pais}
                        onChange={e => setPais(e.target.value)}
                        className="h-12 px-3 rounded-xl border-2 border-outline-variant/40 bg-white text-on-surface focus:border-primary focus:outline-none transition-colors min-w-[110px]"
                      >
                        {COUNTRIES.map(c => (
                          <option key={c.code} value={c.code}>{c.code} {c.name}</option>
                        ))}
                      </select>
                      <input
                        id="empresa-telefono"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                        placeholder="3052396052"
                        className="flex-1 h-12 px-4 rounded-xl border-2 border-outline-variant/40 bg-white text-on-surface placeholder:text-outline focus:border-primary focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="empresa-caso" className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">Cuéntanos tu caso</label>
                    <textarea
                      id="empresa-caso"
                      value={caso}
                      onChange={e => setCaso(e.target.value)}
                      placeholder="Tipo de sociedad, monto aproximado, situación actual, urgencia..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-outline-variant/40 bg-white text-on-surface placeholder:text-outline focus:border-primary focus:outline-none transition-colors resize-y"
                      required
                    />
                  </div>

                  {formError && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-3 py-2.5">
                      <span className="material-symbols-outlined text-base shrink-0 mt-px">error</span>
                      <p>{formError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="h-14 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-card flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar a un especialista
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-on-surface-variant text-center leading-relaxed">
                    <span className="material-symbols-outlined text-sm align-middle text-secondary">lock</span>{' '}
                    Tu información es confidencial y solo será usada para tu consulta.
                  </p>
                </form>
              </div>
            )}

            {empresaFlow && empresaSubmitted && (
              <div className="bg-white rounded-3xl shadow-card-lg border border-outline-variant/30 overflow-hidden">
                <div className="px-6 sm:px-10 pt-10 pb-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-secondary-container text-[#00522f] flex items-center justify-center mx-auto mb-5">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                  </div>
                  <h2 className="font-manrope text-2xl sm:text-3xl font-bold text-secondary leading-tight mb-3">
                    ¡Gracias! Te contactaremos pronto
                  </h2>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                    Nuestro grupo de especialistas revisará tu caso y se pondrá en contacto contigo en menos de 24 horas.
                  </p>
                </div>
                <div className="border-t border-outline-variant/30 px-6 sm:px-10 py-5">
                  <p className="text-xs text-on-surface-variant text-center leading-relaxed">
                    Este análisis es orientativo, no constituye asesoría legal. Solo un abogado puede confirmar tu elegibilidad.
                  </p>
                </div>
              </div>
            )}

            {/* === Lead form (only for qualify, before showing result) === */}
            {needsForm && (
              <div className="bg-white rounded-3xl shadow-card-lg border border-outline-variant/30 overflow-hidden">
                <div className="px-6 sm:px-10 pt-8 pb-5 border-b border-outline-variant/30">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-[#00522f] text-[11px] font-bold uppercase tracking-wider mb-3">
                    <span className="material-symbols-outlined text-sm">check_circle</span> Tu perfil califica
                  </span>
                  <h2 className="font-manrope text-2xl sm:text-3xl font-bold text-primary leading-tight">
                    Un último paso para ver tu resultado
                  </h2>
                  <p className="text-on-surface-variant text-sm sm:text-base mt-2 leading-relaxed">
                    Déjanos tus datos y un especialista en insolvencia revisará tu caso. Sin costo y sin compromiso.
                  </p>
                </div>
                <form onSubmit={submitForm} className="px-6 sm:px-10 py-7 flex flex-col gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">Nombre completo</label>
                    <input
                      id="nombre"
                      type="text"
                      autoComplete="name"
                      value={nombre}
                      onChange={e => setNombre(e.target.value)}
                      placeholder="Ej. Juan Pérez"
                      className="w-full h-12 px-4 rounded-xl border-2 border-outline-variant/40 bg-white text-on-surface placeholder:text-outline focus:border-primary focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">Teléfono (WhatsApp)</label>
                    <div className="flex gap-2">
                      <select
                        aria-label="País"
                        value={pais}
                        onChange={e => setPais(e.target.value)}
                        className="h-12 px-3 rounded-xl border-2 border-outline-variant/40 bg-white text-on-surface focus:border-primary focus:outline-none transition-colors min-w-[110px]"
                      >
                        {COUNTRIES.map(c => (
                          <option key={c.code} value={c.code}>{c.code} {c.name}</option>
                        ))}
                      </select>
                      <input
                        id="telefono"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                        placeholder="3052396052"
                        className="flex-1 h-12 px-4 rounded-xl border-2 border-outline-variant/40 bg-white text-on-surface placeholder:text-outline focus:border-primary focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                      Usa el número con el que recibes WhatsApp. Te contactaremos en menos de 24 horas.
                    </p>
                  </div>

                  {formError && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-3 py-2.5">
                      <span className="material-symbols-outlined text-base shrink-0 mt-px">error</span>
                      <p>{formError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="h-14 bg-primary text-white rounded-xl font-bold hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-card flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Ver mi resultado
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-on-surface-variant text-center leading-relaxed">
                    <span className="material-symbols-outlined text-sm align-middle text-secondary">lock</span>{' '}
                    Tu información es confidencial y solo será usada para tu consulta.
                  </p>
                </form>
              </div>
            )}

            {/* === Result (qualify post-form OR partial OR no) === */}
            {showResult && (
              <div className="bg-white rounded-3xl shadow-card-lg border border-outline-variant/30 overflow-hidden">
                <div className="px-6 sm:px-10 pt-10 pb-6 text-center">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 ${RESULT_THEME[level].ring}`}>
                    <span className="material-symbols-outlined text-4xl">{RESULT_THEME[level].icon}</span>
                  </div>
                  <h2 className={`font-manrope text-2xl sm:text-3xl font-bold leading-tight mb-3 ${RESULT_THEME[level].title}`}>{TITLES[level]}</h2>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                    {level === 'qualify' ? (
                      <>
                        Basado en tus respuestas, tu perfil cumple los criterios clave de la Ley 2445 de 2025.{' '}
                        {urgent
                          ? <strong className="text-red-600">Tienes embargos activos — actúa hoy.</strong>
                          : 'Un especialista te contactará pronto para confirmar tu caso.'}
                      </>
                    ) : level === 'partial' ? (
                      'Tu situación cumple algunos criterios pero hay puntos que un especialista debe revisar uno a uno antes de confirmar tu elegibilidad. Escríbenos para hacer ese análisis a detalle.'
                    ) : (
                      'Basado en tus respuestas, tu perfil no cumple los criterios mínimos del proceso de insolvencia en este momento.'
                    )}
                  </p>
                </div>

                {level !== 'no' && (
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
                  </div>
                )}

                <div className={`${level === 'no' ? 'border-t' : ''} border-outline-variant/30 px-6 sm:px-10 ${level === 'no' ? 'py-6' : 'pt-0 pb-6'}`}>
                  <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3">
                    {level === 'no' ? 'Criterios que no se cumplen' : 'Análisis de criterios'}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {(level === 'no'
                      ? buildCriteria(answers).filter(c => c.status === 'fail')
                      : buildCriteria(answers)
                    ).map((c, i) => (
                      <li key={i} className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${STATUS_BADGE[c.status].bg} ${STATUS_BADGE[c.status].text}`}>
                        <span className="material-symbols-outlined text-lg shrink-0">{STATUS_BADGE[c.status].icon}</span>
                        <span>{c.text}</span>
                      </li>
                    ))}
                  </ul>

                  {level === 'qualify' && (
                    <a
                      href={`${waBase}?text=${waMsgQualify}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-14 bg-[#25D366] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all text-base"
                    >
                      <span className="material-symbols-outlined">chat</span>
                      {urgent ? 'Escríbenos ahora — caso urgente' : 'Hablar con un especialista por WhatsApp'}
                    </a>
                  )}

                  {level === 'partial' && (
                    <a
                      href={`${waBase}?text=${waMsgPartial}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-14 bg-[#25D366] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all text-base"
                    >
                      <span className="material-symbols-outlined">chat</span>
                      Escríbenos por WhatsApp para revisar tu caso
                    </a>
                  )}

                  <p className="text-xs text-on-surface-variant text-center mt-4 leading-relaxed">
                    Este análisis es orientativo, no constituye asesoría legal. Solo un abogado puede confirmar tu elegibilidad.
                  </p>
                </div>
              </div>
            )}

            {/* === Quiz === */}
            {isQuiz && step && (
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
