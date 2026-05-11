'use client'

import { useState, useEffect } from 'react'

type StepOption = { value: string; title: string; desc: string }
type Step =
  | {
      id: string
      label: string
      sublabel: string
      type: 'options'
      question: string
      hint: string
      options: StepOption[]
      disqualify?: string[]
      disqualifyMsg?: string
    }
  | {
      id: string
      label: string
      sublabel: string
      type: 'slider'
      question: string
      hint: string
      min: number
      max: number
      step: number
      unit: string
    }
  | {
      id: string
      label: string
      sublabel: string
      type: 'counter'
      question: string
      hint: string
      min: number
      max: number
      disqualify?: (v: number) => boolean
      disqualifyMsg?: string
    }
  | {
      id: string
      label: string
      sublabel: string
      type: 'multicheck'
      question: string
      hint: string
      options: StepOption[]
      note?: string
    }

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
    note: '⚠️ Las deudas de alimentos y multas NO se pueden incluir en el proceso, pero las demás sí.',
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

type Criterion = { status: 'pass' | 'fail' | 'warn'; icon: string; text: string }

function buildCriteria(answers: Answers): Criterion[] {
  const items: Criterion[] = []
  const dt = (answers['deuda_total'] as number) ?? 0
  const na = (answers['num_acreedores'] as number) ?? 0
  const m = answers['mora']
  const tipo = answers['tipo']
  const dt2 = (answers['deuda_tipos'] as string[]) ?? []
  items.push({
    status: tipo !== 'empresa' ? 'pass' : 'fail',
    icon: tipo !== 'empresa' ? '✓' : '✗',
    text: tipo !== 'empresa' ? 'Eres persona natural — proceso aplica' : 'Persona jurídica — proceso no aplica',
  })
  items.push({
    status: dt >= 60 ? 'pass' : dt >= 30 ? 'warn' : 'fail',
    icon: dt >= 60 ? '✓' : dt >= 30 ? '~' : '✗',
    text:
      dt >= 60
        ? 'Deuda de ' + fmtMoney(dt) + ' — supera el umbral de $60M'
        : dt >= 30
        ? 'Deuda de ' + fmtMoney(dt) + ' — cerca del umbral, puede calificar'
        : 'Deuda de ' + fmtMoney(dt) + ' — bajo el umbral recomendado ($60M)',
  })
  items.push({
    status: na >= 2 ? 'pass' : 'fail',
    icon: na >= 2 ? '✓' : '✗',
    text: na >= 2 ? na + ' acreedores — cumple el mínimo legal (2+)' : na + ' acreedor — se necesitan al menos 2',
  })
  items.push({
    status: m === 'mas_90' ? 'pass' : m === 'entre_30' || m === 'al_dia' ? 'warn' : 'fail',
    icon: m === 'mas_90' ? '✓' : m === 'entre_30' || m === 'al_dia' ? '~' : '✗',
    text:
      m === 'mas_90'
        ? 'Mora mayor a 90 días — criterio legal cumplido'
        : m === 'entre_30'
        ? 'Mora de 30–90 días — criterio en desarrollo'
        : m === 'al_dia'
        ? 'Al día pero con dificultad — puede calificar por incumplimiento inminente'
        : 'Sin problemas de pago actuales',
  })
  if (dt2.some(d => !['alimentos', 'multas'].includes(d))) {
    items.push({ status: 'pass', icon: '✓', text: 'Tiene deudas incluibles en el proceso (bancos, tarjetas, cooperativas)' })
  }
  if (dt2.includes('alimentos') || dt2.includes('multas')) {
    items.push({ status: 'warn', icon: '⚠', text: 'Algunas deudas (alimentos/multas) no se incluyen, pero las demás sí' })
  }
  const p = answers['proceso_activo']
  if (p === 'embargo_sueldo' || p === 'embargo_bien') {
    items.push({ status: 'warn', icon: '⚠', text: 'URGENTE: Tiene embargo activo — la radicación detiene esto de inmediato' })
  } else if (p === 'proceso_jud') {
    items.push({ status: 'warn', icon: '⚠', text: 'Proceso judicial activo — se suspende al radicar insolvencia' })
  }
  return items
}

export default function Calculadora() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [disqualified, setDisqualified] = useState(false)
  const [disqualifyMsg, setDisqualifyMsg] = useState('')
  const [animatedScore, setAnimatedScore] = useState(0)

  const isResult = currentStep === STEPS.length || disqualified
  const step = !isResult ? STEPS[currentStep] : null

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

    if (step.type === 'options' && step.disqualify) {
      if (step.disqualify.includes(a[step.id] as string)) {
        setDisqualified(true)
        setDisqualifyMsg(step.disqualifyMsg ?? '')
        return
      }
    }
    if (step.type === 'counter' && step.disqualify) {
      if (step.disqualify(a[step.id] as number)) {
        setDisqualified(true)
        setDisqualifyMsg(step.disqualifyMsg ?? '')
        return
      }
    }
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setCurrentStep(STEPS.length)
    }
  }

  function prevStep() {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  function restart() {
    setCurrentStep(0)
    setAnswers({})
    setDisqualified(false)
    setDisqualifyMsg('')
  }

  const pct = Math.round((currentStep / STEPS.length) * 100)
  const score = !disqualified && isResult ? calcScore(answers) : 0
  const level = getLevel(score)
  const criteria = !disqualified && isResult ? buildCriteria(answers) : []
  const urgent = answers['proceso_activo'] === 'embargo_sueldo' || answers['proceso_activo'] === 'embargo_bien'
  const dt = (answers['deuda_total'] as number) ?? 0
  const titles = {
    qualify: '¡Muy probablemente calificas!',
    partial: 'Posiblemente calificas — necesitas consulta',
    no: 'En este momento es difícil calificar',
  }
  const ctaText = {
    qualify: urgent ? '🚨 Agenda mi consulta urgente — GRATIS' : 'Quiero mi consulta gratuita →',
    partial: 'Consultar mi caso gratis →',
    no: 'Explorar otras opciones →',
  }
  const waMsg = encodeURIComponent(
    level === 'qualify'
      ? `Hola, hice la calculadora de Deuda OFF y califiqué. Tengo deudas por ${fmtMoney(dt)} con ${answers['num_acreedores']} acreedores. Quiero hablar con un especialista.`
      : 'Hola, hice la calculadora de Deuda OFF. Quiero consultar mi situación.'
  )

  return (
    <div className="page" id="calc-root">
      <header className="topbar">
        <a href="https://deudaoff.com" className="topbar-logo">Deuda<span>OFF</span></a>
        <span className="topbar-badge">Verificación confidencial · Ley 2445 de 2025</span>
      </header>

      <div className="main">
        <aside className="sidebar">
          <div>
            <h1 className="sidebar-title">¿Puedo eliminar mis deudas <em>legalmente?</em></h1>
            <p className="sidebar-sub">Responde 6 preguntas y en 2 minutos sabrás si calificas para acogerte a la Ley de Insolvencia.</p>
          </div>
          <div className="steps-track">
            {STEPS.map((s, i) => {
              const isDone = i < currentStep
              const isActive = i === currentStep
              return (
                <div key={s.id} className={'step-track-item' + (isDone ? ' done' : '') + (isActive ? ' active' : '')}>
                  <div className="step-dot">{isDone ? '✓' : i + 1}</div>
                  <div className="step-track-info">
                    <div className="step-track-label">{s.label}</div>
                    <div className="step-track-sub">{s.sublabel}</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="sidebar-footer">
            <div className="trust-row">
              {[
                'Proceso avalado por Ley 2445 de 2025',
                'Tus datos son 100% confidenciales',
                '+750 casos resueltos desde 2020',
                'Sin costo, sin compromiso',
              ].map(t => (
                <div key={t} className="trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="content">
          {disqualified && (
            <div className="result-card">
              <div className="result-header">
                <div className="result-icon no">🚫</div>
                <div className="result-title no">No califica en este momento</div>
                <p className="result-sub">{disqualifyMsg}</p>
              </div>
              <div className="result-body">
                <div className="result-divider" />
                <div className="result-ctas">
                  <a
                    href="https://wa.me/573052396052?text=Hola%2C%20tengo%20dudas%20sobre%20mi%20situaci%C3%B3n%20de%20deudas"
                    className="btn btn--wa btn--full btn--lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hablar con un especialista
                  </a>
                  <button className="btn btn--ghost btn--full" onClick={restart}>← Volver a intentar</button>
                </div>
              </div>
            </div>
          )}

          {!disqualified && isResult && (
            <div className="result-card">
              <div className="result-header">
                <div className={'result-icon ' + level}>{level === 'qualify' ? '🎉' : level === 'partial' ? '🔍' : '💬'}</div>
                <div className={'result-title ' + level}>{titles[level]}</div>
                <p className="result-sub">
                  {level === 'qualify' ? (
                    <>
                      Basado en tus respuestas, tu perfil cumple los criterios clave de la Ley 2445 de 2025.{' '}
                      {urgent ? (
                        <strong style={{ color: '#C92A2A' }}>Tienes embargos activos — actúa hoy.</strong>
                      ) : (
                        'El siguiente paso es una consulta gratuita para confirmar tu caso.'
                      )}
                    </>
                  ) : level === 'partial' ? (
                    'Algunos criterios se cumplen pero hay puntos a revisar. Una consulta gratuita te dará claridad sobre tus opciones.'
                  ) : (
                    'Tu situación actual no cumple los criterios principales. Podemos orientarte hacia otras alternativas.'
                  )}
                </p>
              </div>
              <div className="result-body">
                <div className="result-divider" />
                <div className="score-bar-wrap">
                  <div className="score-label">
                    <span className="score-label-text">Puntaje de calificación</span>
                    <span className="score-val">{animatedScore}/100</span>
                  </div>
                  <div className="score-track">
                    <div className={'score-fill ' + level} style={{ width: animatedScore + '%' }} />
                  </div>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--muted)', marginBottom: 12 }}>
                    Análisis de criterios
                  </div>
                  <div className="criteria-list">
                    {criteria.map((c, i) => (
                      <div key={i} className={'criteria-item ' + c.status}>
                        <span>{c.icon}</span>
                        <span>{c.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="result-ctas">
                  <a
                    href={`https://wa.me/573052396052?text=${waMsg}`}
                    className="btn btn--wa btn--full btn--lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ctaText[level]}
                  </a>
                  <a href="https://deudaoff.com#formulario" className="btn btn--ghost btn--full" style={{ justifyContent: 'center' }}>
                    Prefiero el formulario en línea
                  </a>
                </div>
                <p className="result-disclaimer">
                  Este análisis es orientativo, no constituye asesoría legal. Solo un abogado puede confirmar tu elegibilidad. Consulta gratuita y confidencial.
                </p>
              </div>
            </div>
          )}

          {step && (
            <div className="card step-enter">
              <div className="card-header">
                <div>
                  <div className="card-step-label">Pregunta {currentStep + 1} de {STEPS.length}</div>
                  <div className="card-step-title">{step.label}</div>
                </div>
                <div className="card-step-num">0{currentStep + 1}</div>
              </div>
              <div style={{ padding: '0 0 12px' }}>
                <div className="progress-bar-wrap">
                  <div className="progress-bar-fill" style={{ width: pct + '%' }} />
                </div>
              </div>
              <div className="card-body">
                <div className="q-label">{step.question}</div>
                <div className="q-hint">{step.hint}</div>

                {step.type === 'options' && (
                  <div className="options">
                    {step.options.map(o => {
                      const selected = answers[step.id] === o.value
                      return (
                        <div
                          key={o.value}
                          className={'opt' + (selected ? ' selected' : '')}
                          onClick={() => selectOption(step.id, o.value)}
                        >
                          <div className="opt-radio" />
                          <div className="opt-info">
                            <div className="opt-title">{o.title}</div>
                            <div className="opt-desc">{o.desc}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}

                {step.type === 'slider' && (() => {
                  const val = ((answers[step.id] as number) ?? 80)
                  const pf = ((val - step.min) / (step.max - step.min)) * 100
                  let tc: 'ok' | 'warn' | 'bad' = 'bad'
                  let tl = 'Menos de $30M: Difícil calificación'
                  let icon = '✗'
                  if (val >= 60) { tc = 'ok'; tl = '+ de $60M: Califica para Deuda OFF'; icon = '✓' }
                  else if (val >= 30) { tc = 'warn'; tl = '+ de $30M: Puede calificar según el caso'; icon = '~' }
                  return (
                    <>
                      <div className="slider-display">{fmtMoney(val)} <span>COP</span></div>
                      <input
                        type="range"
                        min={step.min}
                        max={step.max}
                        step={step.step}
                        value={val}
                        onChange={e => updateSlider(parseInt(e.target.value))}
                        style={{ background: `linear-gradient(to right,#0B1F3A 0%,#0B1F3A ${pf}%,#DEE2E6 ${pf}%,#DEE2E6 100%)` }}
                      />
                      <div className="slider-marks">
                        <span>{fmtMoney(step.min)}</span>
                        <span>{fmtMoney(step.max)}</span>
                      </div>
                      <div className={'slider-threshold ' + tc}>
                        <span>{icon}</span>
                        <span>{tl}</span>
                      </div>
                    </>
                  )
                })()}

                {step.type === 'counter' && (() => {
                  const val = (answers[step.id] as number) ?? 3
                  return (
                    <>
                      <div className="num-wrap">
                        <button type="button" className="num-btn" onClick={() => changeCounter(-1)}>−</button>
                        <div className="num-val">{val}</div>
                        <button type="button" className="num-btn" onClick={() => changeCounter(1)}>+</button>
                      </div>
                      <div className="num-label">{val < 2 ? '⚠️ Se requieren mínimo 2 acreedores' : `${val} acreedores`}</div>
                    </>
                  )
                })()}

                {step.type === 'multicheck' && (
                  <>
                    <div className="checks">
                      {step.options.map(o => {
                        const sel = ((answers[step.id] as string[]) ?? []).includes(o.value)
                        return (
                          <div
                            key={o.value}
                            className={'chk' + (sel ? ' checked' : '')}
                            onClick={() => toggleCheck(step.id, o.value)}
                          >
                            <div className="chk-box">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div className="opt-info">
                              <div className="chk-title">{o.title}</div>
                              <div className="opt-desc">{o.desc}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    {step.note && (
                      <p style={{ marginTop: 14, fontSize: '0.8rem', color: 'var(--muted)', background: 'var(--off)', padding: '10px 14px', borderRadius: 8 }}>
                        {step.note}
                      </p>
                    )}
                  </>
                )}
              </div>
              <div className="card-footer">
                {currentStep > 0 ? (
                  <button type="button" className="btn btn--ghost" onClick={prevStep}>← Anterior</button>
                ) : (
                  <div />
                )}
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={nextStep}
                  disabled={!hasValidAnswer(step, answers)}
                >
                  {currentStep === STEPS.length - 1 ? 'Ver mi resultado →' : 'Continuar →'}
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
