import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '¿Califico para Insolvencia? — Calculadora Deuda OFF',
  description: 'Descubre en 2 minutos si calificas para eliminar tus deudas legalmente con la Ley de Insolvencia de Persona Natural (Ley 2445 de 2025). Gratuito y confidencial.',
  alternates: { canonical: 'https://deudaoff.com/calculadora' },
  robots: { index: false, follow: false },
  openGraph: {
    title: '¿Califico para eliminar mis deudas? — Deuda OFF',
    description: 'Responde 6 preguntas y en 2 minutos sabrás si calificas para acogerte a la Ley de Insolvencia.',
    url: 'https://deudaoff.com/calculadora',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function CalculadoraPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --navy:   #0B1F3A;
          --navy-2: #162F55;
          --red:    #E03131;
          --red-2:  #C92A2A;
          --gold:   #F59F00;
          --green:  #2F9E44;
          --white:  #FFFFFF;
          --off:    #F8F9FA;
          --muted:  #6C757D;
          --border: #DEE2E6;
          --text:   #212529;
          --font-d: 'Fraunces', serif;
          --font-b: 'Figtree', sans-serif;
          --r:      14px;
          --r-lg:   20px;
          --shadow: 0 4px 24px rgba(11,31,58,0.10);
          --shadow-lg: 0 16px 48px rgba(11,31,58,0.18);
        }
        html { scroll-behavior: smooth; }
        body { font-family: var(--font-b); background: #F0F4F8; color: var(--text); min-height: 100vh; -webkit-font-smoothing: antialiased; }
        .page { min-height: 100vh; display: grid; grid-template-rows: auto 1fr; }
        .topbar { background: var(--navy); padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 50; }
        .topbar-logo { font-family: var(--font-d); font-weight: 900; font-size: 1.3rem; color: #fff; text-decoration: none; letter-spacing: -0.3px; }
        .topbar-logo span { color: var(--gold); }
        .topbar-badge { font-size: 0.72rem; font-weight: 600; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.75); padding: 4px 12px; border-radius: 100px; letter-spacing: 0.3px; }
        .main { display: grid; grid-template-columns: 380px 1fr; min-height: calc(100vh - 52px); }
        .sidebar { background: var(--navy); padding: 40px 32px; display: flex; flex-direction: column; gap: 32px; position: sticky; top: 52px; height: calc(100vh - 52px); overflow-y: auto; }
        .sidebar-title { font-family: var(--font-d); font-size: 1.65rem; font-weight: 900; color: #fff; line-height: 1.2; margin-bottom: 8px; }
        .sidebar-title em { color: var(--gold); font-style: normal; }
        .sidebar-sub { font-size: 0.88rem; color: rgba(255,255,255,0.6); line-height: 1.65; }
        .steps-track { display: flex; flex-direction: column; gap: 0; }
        .step-track-item { display: flex; align-items: flex-start; gap: 14px; padding: 12px 0; position: relative; }
        .step-track-item:not(:last-child)::after { content: ''; position: absolute; left: 15px; top: 40px; bottom: -12px; width: 2px; background: rgba(255,255,255,0.1); transition: background 0.4s; }
        .step-track-item.done:not(:last-child)::after { background: var(--gold); }
        .step-dot { width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; background: rgba(255,255,255,0.08); border: 2px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.4); transition: all 0.3s ease; margin-top: 2px; }
        .step-track-item.active .step-dot { background: var(--red); border-color: var(--red); color: #fff; box-shadow: 0 0 0 5px rgba(224,49,49,0.25); }
        .step-track-item.done .step-dot { background: var(--gold); border-color: var(--gold); color: var(--navy); }
        .step-track-info { flex: 1; }
        .step-track-label { font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.4); transition: color 0.3s; line-height: 1.3; }
        .step-track-item.active .step-track-label { color: #fff; }
        .step-track-item.done .step-track-label { color: rgba(255,255,255,0.65); }
        .step-track-sub { font-size: 0.73rem; color: rgba(255,255,255,0.3); margin-top: 2px; }
        .step-track-item.active .step-track-sub { color: rgba(255,255,255,0.55); }
        .sidebar-footer { margin-top: auto; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.08); }
        .trust-row { display: flex; flex-direction: column; gap: 8px; }
        .trust-item { display: flex; align-items: center; gap: 10px; font-size: 0.8rem; color: rgba(255,255,255,0.5); }
        .content { padding: 40px; display: flex; flex-direction: column; align-items: center; }
        .card { background: var(--white); border-radius: var(--r-lg); box-shadow: var(--shadow); width: 100%; max-width: 640px; overflow: hidden; }
        .card-header { padding: 28px 36px 24px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .card-step-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: var(--red); }
        .card-step-title { font-family: var(--font-d); font-size: 1.25rem; font-weight: 700; color: var(--navy); margin-top: 4px; line-height: 1.25; }
        .card-step-num { font-family: var(--font-d); font-size: 2.5rem; font-weight: 900; color: var(--border); line-height: 1; user-select: none; }
        .card-body { padding: 32px 36px; }
        .card-footer { padding: 20px 36px 28px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .q-label { font-size: 1.05rem; font-weight: 600; color: var(--navy); margin-bottom: 6px; line-height: 1.45; }
        .q-hint { font-size: 0.82rem; color: var(--muted); margin-bottom: 16px; line-height: 1.5; }
        .options { display: flex; flex-direction: column; gap: 10px; }
        .opt { display: flex; align-items: flex-start; gap: 14px; padding: 16px 18px; border-radius: var(--r); border: 2px solid var(--border); cursor: pointer; transition: all 0.18s ease; background: var(--white); user-select: none; }
        .opt:hover { border-color: #adb5bd; background: var(--off); }
        .opt.selected { border-color: var(--navy); background: #EEF2FF; }
        .opt.selected .opt-radio { background: var(--navy); border-color: var(--navy); }
        .opt.selected .opt-radio::after { opacity: 1; }
        .opt-radio { width: 20px; height: 20px; border-radius: 50%; border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; transition: all 0.15s; position: relative; }
        .opt-radio::after { content: ''; width: 8px; height: 8px; border-radius: 50%; background: #fff; opacity: 0; transition: opacity 0.15s; }
        .opt-title { font-weight: 600; font-size: 0.93rem; color: var(--navy); }
        .opt-desc { font-size: 0.78rem; color: var(--muted); margin-top: 2px; line-height: 1.45; }
        .slider-display { font-family: var(--font-d); font-size: 2.2rem; font-weight: 900; color: var(--navy); margin-bottom: 8px; line-height: 1; }
        .slider-display span { font-size: 1rem; font-weight: 600; color: var(--muted); margin-left: 4px; }
        input[type=range] { width: 100%; -webkit-appearance: none; height: 6px; border-radius: 3px; background: var(--border); outline: none; cursor: pointer; margin: 8px 0 4px; }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 22px; height: 22px; border-radius: 50%; background: var(--navy); border: 3px solid #fff; box-shadow: 0 2px 8px rgba(11,31,58,0.25); transition: transform 0.15s; }
        input[type=range]::-webkit-slider-thumb:hover { transform: scale(1.15); }
        .slider-marks { display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--muted); margin-top: 2px; }
        .slider-threshold { display: flex; align-items: center; gap: 8px; margin-top: 12px; padding: 10px 14px; border-radius: 10px; font-size: 0.82rem; font-weight: 600; transition: all 0.3s; }
        .slider-threshold.ok { background: #D3F9D8; color: #2F9E44; }
        .slider-threshold.warn { background: #FFF3CD; color: #E67700; }
        .slider-threshold.bad { background: #FFE3E3; color: var(--red); }
        .checks { display: flex; flex-direction: column; gap: 10px; }
        .chk { display: flex; align-items: flex-start; gap: 14px; padding: 14px 18px; border-radius: var(--r); border: 2px solid var(--border); cursor: pointer; transition: all 0.18s; background: var(--white); user-select: none; }
        .chk:hover { border-color: #adb5bd; }
        .chk.checked { border-color: var(--navy); background: #EEF2FF; }
        .chk-box { width: 20px; height: 20px; border-radius: 5px; border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; transition: all 0.15s; background: #fff; }
        .chk.checked .chk-box { background: var(--navy); border-color: var(--navy); }
        .chk-box svg { opacity: 0; transition: opacity 0.15s; }
        .chk.checked .chk-box svg { opacity: 1; }
        .num-wrap { display: flex; gap: 12px; align-items: center; }
        .num-btn { width: 44px; height: 44px; border-radius: 10px; border: 2px solid var(--border); background: var(--off); font-size: 1.4rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; color: var(--navy); user-select: none; }
        .num-btn:hover { border-color: var(--navy); background: #EEF2FF; }
        .num-val { font-family: var(--font-d); font-size: 2rem; font-weight: 900; color: var(--navy); min-width: 60px; text-align: center; }
        .num-label { font-size: 0.85rem; color: var(--muted); margin-top: 12px; }
        .btn { display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-b); font-weight: 700; font-size: 0.92rem; padding: 13px 26px; border-radius: 10px; border: none; cursor: pointer; text-decoration: none; transition: all 0.18s ease; white-space: nowrap; }
        .btn--primary { background: var(--red); color: #fff; box-shadow: 0 4px 16px rgba(224,49,49,0.35); }
        .btn--primary:hover:not(:disabled) { background: var(--red-2); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(224,49,49,0.45); }
        .btn--primary:disabled { opacity: 0.45; cursor: not-allowed; transform: none; box-shadow: none; }
        .btn--ghost { background: transparent; color: var(--muted); border: 1.5px solid var(--border); }
        .btn--ghost:hover { border-color: #adb5bd; color: var(--text); }
        .btn--wa { background: #25D366; color: #fff; box-shadow: 0 4px 16px rgba(37,211,102,0.35); font-size: 1rem; padding: 16px 30px; }
        .btn--wa:hover { background: #1da851; transform: translateY(-1px); }
        .btn--full { width: 100%; justify-content: center; }
        .btn--lg { font-size: 1rem; padding: 17px 34px; }
        .progress-bar-wrap { height: 4px; background: var(--border); border-radius: 2px; overflow: hidden; margin: 0 36px 0; }
        .progress-bar-fill { height: 100%; background: linear-gradient(90deg, var(--red) 0%, var(--gold) 100%); border-radius: 2px; transition: width 0.5s cubic-bezier(0.4,0,0.2,1); }
        .result-card { background: var(--white); border-radius: var(--r-lg); box-shadow: var(--shadow-lg); width: 100%; max-width: 640px; overflow: hidden; animation: fadeInUp 0.5s ease forwards; }
        .result-header { padding: 40px 40px 32px; text-align: center; }
        .result-icon { width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; }
        .result-icon.qualify { background: #D3F9D8; }
        .result-icon.partial { background: #FFF3CD; }
        .result-icon.no { background: #FFE3E3; }
        .result-title { font-family: var(--font-d); font-size: 1.9rem; font-weight: 900; line-height: 1.15; margin-bottom: 10px; }
        .result-title.qualify { color: var(--green); }
        .result-title.partial { color: #E67700; }
        .result-title.no { color: var(--red); }
        .result-sub { font-size: 0.95rem; color: var(--muted); line-height: 1.65; max-width: 460px; margin: 0 auto; }
        .result-body { padding: 0 40px 32px; }
        .result-divider { height: 1px; background: var(--border); margin: 0 0 28px; }
        .criteria-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; }
        .criteria-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 10px; font-size: 0.88rem; font-weight: 500; }
        .criteria-item.pass { background: #D3F9D8; color: #1B5E2E; }
        .criteria-item.fail { background: #FFE3E3; color: #9B1C1C; }
        .criteria-item.warn { background: #FFF3CD; color: #7C4A00; }
        .score-bar-wrap { background: var(--off); border-radius: var(--r); padding: 20px 24px; margin-bottom: 24px; }
        .score-label { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .score-label-text { font-size: 0.85rem; font-weight: 600; color: var(--muted); }
        .score-val { font-family: var(--font-d); font-size: 1.5rem; font-weight: 900; color: var(--navy); }
        .score-track { height: 10px; background: var(--border); border-radius: 5px; overflow: hidden; }
        .score-fill { height: 100%; border-radius: 5px; transition: width 1s cubic-bezier(0.4,0,0.2,1) 0.3s; }
        .score-fill.qualify { background: linear-gradient(90deg, #40C057, #2F9E44); }
        .score-fill.partial { background: linear-gradient(90deg, #FCC419, #F59F00); }
        .score-fill.no { background: linear-gradient(90deg, #FA5252, #E03131); }
        .result-ctas { display: flex; flex-direction: column; gap: 12px; }
        .result-disclaimer { margin-top: 16px; font-size: 0.75rem; color: var(--muted); text-align: center; line-height: 1.5; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(24px); } to { opacity: 1; transform: translateX(0); } }
        .step-enter { animation: slideIn 0.32s ease forwards; }
        @media (max-width: 900px) {
          .main { grid-template-columns: 1fr; }
          .sidebar { position: static; height: auto; padding: 28px 24px; }
          .steps-track { flex-direction: row; overflow-x: auto; gap: 8px; }
          .step-track-item { flex-direction: column; align-items: center; text-align: center; min-width: 80px; padding: 8px 4px; }
          .step-track-item:not(:last-child)::after { display: none; }
          .sidebar-footer { display: none; }
          .content { padding: 24px 16px; }
          .card-header, .card-body, .card-footer { padding-left: 24px; padding-right: 24px; }
          .progress-bar-wrap { margin: 0 24px 0; }
          .result-header { padding: 32px 24px 24px; }
          .result-body { padding: 0 24px 28px; }
        }
        @media (max-width: 480px) {
          .sidebar { padding: 20px 16px; }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,400&family=Figtree:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

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
            <div className="steps-track" id="sidebarSteps"></div>
            <div className="sidebar-footer">
              <div className="trust-row">
                {[
                  'Proceso avalado por Ley 2445 de 2025',
                  'Tus datos son 100% confidenciales',
                  '+750 casos resueltos desde 2020',
                  'Sin costo, sin compromiso',
                ].map((t) => (
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
          <main className="content" id="contentArea"></main>
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
const STEPS = [
  {
    id: 'tipo', label: 'Tipo de persona', sublabel: '¿Eres persona natural?', type: 'options',
    question: '¿Cuál es tu situación laboral o económica?',
    hint: 'El proceso aplica para personas naturales. Si tienes empresa registrada como S.A.S. o similar, existe un proceso separado.',
    options: [
      { value: 'empleado',     title: 'Empleado',              desc: 'Tienes contrato laboral fijo o indefinido' },
      { value: 'independiente',title: 'Independiente',         desc: 'Trabajas por cuenta propia o prestación de servicios' },
      { value: 'pensionado',   title: 'Pensionado/rentista',   desc: 'Recibes pensión u otros ingresos fijos' },
      { value: 'comerciante',  title: 'Pequeño comerciante',   desc: 'Negocio no registrado como empresa (tendero, restaurante, taller)' },
      { value: 'empresa',      title: 'Empresa / Sociedad',    desc: 'SAS, LTDA, SA u otra figura jurídica registrada' },
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
    disqualify: function(v){ return v < 2; },
    disqualifyMsg: 'La Ley de Insolvencia requiere mínimo 2 acreedores diferentes. Con un solo acreedor te recomendamos negociar directamente o explorar otras opciones.',
  },
  {
    id: 'mora', label: 'Estado de mora', sublabel: '¿Cuánto llevas sin pagar?', type: 'options',
    question: '¿Cuál es tu situación de pago actual?',
    hint: 'Esta información es estrictamente confidencial y determina qué tipo de proceso es más adecuado para ti.',
    options: [
      { value: 'mas_90',   title: '+90 días en mora',              desc: 'Llevas más de 3 meses sin pagar al menos 2 deudas' },
      { value: 'entre_30', title: '30–90 días en mora',            desc: 'Estás en mora pero reciente' },
      { value: 'al_dia',   title: 'Al día pero sin poder pagar',   desc: 'Pagas con dificultad extrema o sabes que pararás pronto' },
      { value: 'pagando',  title: 'Pagando sin problema',          desc: 'Actualmente puedes cumplir tus obligaciones' },
    ],
    disqualify: ['pagando'],
    disqualifyMsg: 'Si actualmente puedes pagar tus deudas sin dificultad, no es el momento de acogerte a insolvencia. Si tu situación cambia, contáctanos.',
  },
  {
    id: 'deuda_tipos', label: 'Tipo de deudas', sublabel: '¿Qué tipo de deudas tienes?', type: 'multicheck',
    question: '¿Qué tipos de deudas tienes? (selecciona todas las que apliquen)',
    hint: 'Deudas de alimentos y multas judiciales no se incluyen. El resto generalmente sí aplica.',
    options: [
      { value: 'banco',        title: 'Créditos bancarios',     desc: 'Libre inversión, consumo, hipotecario' },
      { value: 'tarjeta',      title: 'Tarjetas de crédito',    desc: 'Cualquier banco o entidad' },
      { value: 'cooperativa',  title: 'Cooperativas / cajas',   desc: 'Ahorro y crédito, cajas de compensación' },
      { value: 'microcredito', title: 'Microcréditos',          desc: 'Rapicredit, Juancho, etc.' },
      { value: 'vehiculo',     title: 'Crédito vehicular',      desc: 'Leasing o crédito de carro/moto' },
      { value: 'particular',   title: 'Deudas con personas',    desc: 'Préstamos de familiares, amigos o conocidos' },
      { value: 'alimentos',    title: 'Cuotas de alimentos',    desc: 'Obligación alimentaria a hijos o cónyuge' },
      { value: 'multas',       title: 'Multas o sanciones',     desc: 'Impuestas por autoridades judiciales' },
    ],
    note: '⚠️ Las deudas de alimentos y multas NO se pueden incluir en el proceso, pero las demás sí.',
  },
  {
    id: 'proceso_activo', label: 'Procesos activos', sublabel: '¿Tienes juicios activos?', type: 'options',
    question: '¿Tienes actualmente alguno de estos procesos?',
    hint: 'Esta información nos ayuda a priorizar y definir la urgencia de tu caso.',
    options: [
      { value: 'embargo_sueldo', title: 'Embargo de salario activo', desc: 'Descuentan directamente de tu nómina' },
      { value: 'embargo_bien',   title: 'Embargo de cuenta o bien',  desc: 'Cuentas bloqueadas o bienes embargados' },
      { value: 'proceso_jud',    title: 'Proceso judicial en curso', desc: 'Hay demanda activa en tu contra' },
      { value: 'solo_cobros',    title: 'Solo llamadas de cobranza', desc: 'No hay procesos formales aún' },
      { value: 'nada',           title: 'Ninguno todavía',           desc: 'No hay procesos activos' },
    ],
  },
];

let currentStep = 0, answers = {}, disqualified = false, disqualifyMsg = '';

function fmtMoney(v){if(v>=1000)return'$'+(v/1000).toFixed(v%1000===0?0:1)+' B';return'$'+v+'M';}

function renderSidebar(){
  const el=document.getElementById('sidebarSteps');
  if(!el)return;
  el.innerHTML=STEPS.map((s,i)=>{
    const isDone=i<currentStep,isActive=i===currentStep;
    return '<div class="step-track-item'+(isDone?' done':'')+(isActive?' active':'')+'">'+
      '<div class="step-dot">'+(isDone?'✓':i+1)+'</div>'+
      '<div class="step-track-info">'+
        '<div class="step-track-label">'+s.label+'</div>'+
        '<div class="step-track-sub">'+s.sublabel+'</div>'+
      '</div></div>';
  }).join('');
}

function renderStep(){
  const step=STEPS[currentStep];
  const pct=Math.round((currentStep/STEPS.length)*100);
  const area=document.getElementById('contentArea');
  if(!area)return;
  let bodyHTML='';

  if(step.type==='options'){
    const sel=answers[step.id];
    bodyHTML='<div class="q-label">'+step.question+'</div><div class="q-hint">'+step.hint+'</div>'+
      '<div class="options">'+step.options.map(o=>
        '<div class="opt'+(sel===o.value?' selected':'')+'" onclick="selectOption(\\''+step.id+'\\',\\''+o.value+'\\')">'+
          '<div class="opt-radio"></div>'+
          '<div class="opt-info"><div class="opt-title">'+o.title+'</div><div class="opt-desc">'+o.desc+'</div></div>'+
        '</div>').join('')+'</div>';

  } else if(step.type==='slider'){
    const val=answers[step.id]??80;
    const pf=((val-step.min)/(step.max-step.min))*100;
    let tc='bad',tl='Menos de $30M: Difícil calificación';
    if(val>=60){tc='ok';tl='+ de $60M: Califica para Deuda OFF';}
    else if(val>=30){tc='warn';tl='+ de $30M: Puede calificar según el caso';}
    bodyHTML='<div class="q-label">'+step.question+'</div><div class="q-hint">'+step.hint+'</div>'+
      '<div class="slider-display" id="sliderDisplay">'+fmtMoney(val)+' <span>COP</span></div>'+
      '<input type="range" min="'+step.min+'" max="'+step.max+'" step="'+step.step+'" value="'+val+'" oninput="updateSlider(this.value)"'+
        ' style="background:linear-gradient(to right,#0B1F3A 0%,#0B1F3A '+pf+'%,#DEE2E6 '+pf+'%,#DEE2E6 100%)">'+
      '<div class="slider-marks"><span>'+fmtMoney(step.min)+'</span><span>'+fmtMoney(step.max)+'</span></div>'+
      '<div class="slider-threshold '+tc+'" id="sliderThreshold">'+
        '<span>'+(tc==='ok'?'✓':tc==='warn'?'~':'✗')+'</span><span>'+tl+'</span></div>';

  } else if(step.type==='counter'){
    const val=answers[step.id]??3;
    bodyHTML='<div class="q-label">'+step.question+'</div><div class="q-hint">'+step.hint+'</div>'+
      '<div class="num-wrap">'+
        '<button class="num-btn" onclick="changeCounter(-1)">−</button>'+
        '<div class="num-val" id="counterVal">'+val+'</div>'+
        '<button class="num-btn" onclick="changeCounter(1)">+</button>'+
      '</div>'+
      '<div class="num-label">'+(val<2?'⚠️ Se requieren mínimo 2 acreedores':val+' acreedores')+'</div>';

  } else if(step.type==='multicheck'){
    const sel=answers[step.id]??[];
    bodyHTML='<div class="q-label">'+step.question+'</div><div class="q-hint">'+step.hint+'</div>'+
      '<div class="checks">'+step.options.map(o=>
        '<div class="chk'+(sel.includes(o.value)?' checked':'')+'" onclick="toggleCheck(\\''+step.id+'\\',\\''+o.value+'\\')">'+
          '<div class="chk-box"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'+
          '<div class="opt-info"><div class="chk-title">'+o.title+'</div><div class="opt-desc">'+o.desc+'</div></div>'+
        '</div>').join('')+'</div>'+
      (step.note?'<p style="margin-top:14px;font-size:0.8rem;color:var(--muted);background:var(--off);padding:10px 14px;border-radius:8px;">'+step.note+'</p>':'');
  }

  const isLast=currentStep===STEPS.length-1;
  const hasAns=hasValidAnswer(step);
  area.innerHTML='<div class="card step-enter">'+
    '<div class="card-header">'+
      '<div><div class="card-step-label">Pregunta '+(currentStep+1)+' de '+STEPS.length+'</div>'+
        '<div class="card-step-title">'+step.label+'</div></div>'+
      '<div class="card-step-num">0'+(currentStep+1)+'</div>'+
    '</div>'+
    '<div style="padding:0 0 12px;"><div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:'+pct+'%"></div></div></div>'+
    '<div class="card-body">'+bodyHTML+'</div>'+
    '<div class="card-footer">'+
      (currentStep>0?'<button class="btn btn--ghost" onclick="prevStep()">← Anterior</button>':'<div></div>')+
      '<button class="btn btn--primary" id="nextBtn" onclick="nextStep()"'+(hasAns?'':' disabled')+'>'+
        (isLast?'Ver mi resultado →':'Continuar →')+'</button>'+
    '</div></div>';
}

function hasValidAnswer(step){
  if(step.type==='slider'||step.type==='counter')return true;
  if(step.type==='multicheck')return(answers[step.id]??[]).length>0;
  return!!answers[step.id];
}
function selectOption(id,value){answers[id]=value;renderStep();}
function updateSlider(val){
  val=parseInt(val);answers['deuda_total']=val;
  const d=document.getElementById('sliderDisplay');
  const t=document.getElementById('sliderThreshold');
  const i=document.querySelector('input[type=range]');
  const pct=((val-5)/(500-5))*100;
  if(d)d.innerHTML=fmtMoney(val)+' <span>COP</span>';
  if(i)i.style.background='linear-gradient(to right,#0B1F3A 0%,#0B1F3A '+pct+'%,#DEE2E6 '+pct+'%,#DEE2E6 100%)';
  if(t){t.className='slider-threshold';
    if(val>=60){t.classList.add('ok');t.innerHTML='<span>✓</span><span>+ de $60M: Califica para Deuda OFF</span>';}
    else if(val>=30){t.classList.add('warn');t.innerHTML='<span>~</span><span>+ de $30M: Puede calificar según el caso</span>';}
    else{t.classList.add('bad');t.innerHTML='<span>✗</span><span>Menos de $30M: Difícil calificación</span>';}}
}
function changeCounter(delta){
  const step=STEPS[currentStep];
  const nv=Math.max(step.min,Math.min(step.max,(answers[step.id]??3)+delta));
  answers[step.id]=nv;
  const el=document.getElementById('counterVal');
  const lb=document.querySelector('.num-label');
  if(el)el.textContent=nv;
  if(lb)lb.textContent=nv<2?'⚠️ Se requieren mínimo 2 acreedores':nv+' acreedores';
}
function toggleCheck(id,value){
  const arr=answers[id]??[];
  const idx=arr.indexOf(value);
  if(idx>=0)arr.splice(idx,1);else arr.push(value);
  answers[id]=arr;renderStep();
}
function nextStep(){
  const step=STEPS[currentStep];
  if(step.type==='slider'&&!answers[step.id])answers[step.id]=80;
  if(step.type==='counter'&&!answers[step.id])answers[step.id]=3;
  if(step.disqualify){
    let dq=typeof step.disqualify==='function'?step.disqualify(answers[step.id]):step.disqualify.includes(answers[step.id]);
    if(dq){disqualified=true;disqualifyMsg=step.disqualifyMsg;renderResult();return;}
  }
  if(currentStep<STEPS.length-1){currentStep++;renderSidebar();renderStep();window.scrollTo({top:0,behavior:'smooth'});}
  else renderResult();
}
function prevStep(){if(currentStep>0){currentStep--;renderSidebar();renderStep();}}

function calcScore(){
  let s=0;
  const dt=answers['deuda_total']??0;
  if(dt>=60)s+=40;else if(dt>=30)s+=20;else s+=5;
  const na=answers['num_acreedores']??0;
  if(na>=3)s+=20;else if(na===2)s+=15;
  const m=answers['mora'];
  if(m==='mas_90')s+=25;else if(m==='entre_30'||m==='al_dia')s+=15;
  const p=answers['proceso_activo'];
  if(p==='embargo_sueldo'||p==='embargo_bien')s+=15;
  else if(p==='proceso_jud')s+=10;
  else if(p==='solo_cobros')s+=7;else s+=3;
  return Math.min(s,100);
}
function getLevel(score){return score>=70?'qualify':score>=40?'partial':'no';}

function buildCriteria(){
  const items=[];
  const dt=answers['deuda_total']??0;
  const na=answers['num_acreedores']??0;
  const m=answers['mora'];
  const tipo=answers['tipo'];
  const dt2=answers['deuda_tipos']??[];
  items.push({status:tipo!=='empresa'?'pass':'fail',icon:tipo!=='empresa'?'✓':'✗',text:tipo!=='empresa'?'Eres persona natural — proceso aplica':'Persona jurídica — proceso no aplica'});
  items.push({status:dt>=60?'pass':dt>=30?'warn':'fail',icon:dt>=60?'✓':dt>=30?'~':'✗',text:dt>=60?'Deuda de '+fmtMoney(dt)+' — supera el umbral de $60M':dt>=30?'Deuda de '+fmtMoney(dt)+' — cerca del umbral, puede calificar':'Deuda de '+fmtMoney(dt)+' — bajo el umbral recomendado ($60M)'});
  items.push({status:na>=2?'pass':'fail',icon:na>=2?'✓':'✗',text:na>=2?na+' acreedores — cumple el mínimo legal (2+)':na+' acreedor — se necesitan al menos 2'});
  items.push({status:m==='mas_90'?'pass':m==='entre_30'||m==='al_dia'?'warn':'fail',icon:m==='mas_90'?'✓':m==='entre_30'||m==='al_dia'?'~':'✗',text:m==='mas_90'?'Mora mayor a 90 días — criterio legal cumplido':m==='entre_30'?'Mora de 30–90 días — criterio en desarrollo':m==='al_dia'?'Al día pero con dificultad — puede calificar por incumplimiento inminente':'Sin problemas de pago actuales'});
  if(dt2.some(d=>!['alimentos','multas'].includes(d)))items.push({status:'pass',icon:'✓',text:'Tiene deudas incluibles en el proceso (bancos, tarjetas, cooperativas)'});
  if(dt2.includes('alimentos')||dt2.includes('multas'))items.push({status:'warn',icon:'⚠',text:'Algunas deudas (alimentos/multas) no se incluyen, pero las demás sí'});
  const p=answers['proceso_activo'];
  if(p==='embargo_sueldo'||p==='embargo_bien')items.push({status:'warn',icon:'⚠',text:'URGENTE: Tiene embargo activo — la radicación detiene esto de inmediato'});
  else if(p==='proceso_jud')items.push({status:'warn',icon:'⚠',text:'Proceso judicial activo — se suspende al radicar insolvencia'});
  return items;
}

function renderResult(){
  const area=document.getElementById('contentArea');
  currentStep=STEPS.length;renderSidebar();
  if(disqualified){
    area.innerHTML='<div class="result-card"><div class="result-header">'+
      '<div class="result-icon no">🚫</div>'+
      '<div class="result-title no">No califica en este momento</div>'+
      '<p class="result-sub">'+disqualifyMsg+'</p></div>'+
      '<div class="result-body"><div class="result-divider"></div>'+
      '<div class="result-ctas">'+
        '<a href="https://wa.me/573052396052?text=Hola%2C%20tengo%20dudas%20sobre%20mi%20situaci%C3%B3n%20de%20deudas" class="btn btn--wa btn--full btn--lg" target="_blank">Hablar con un especialista</a>'+
        '<button class="btn btn--ghost btn--full" onclick="restart()">← Volver a intentar</button>'+
      '</div></div></div>';
    return;
  }
  const score=calcScore();const level=getLevel(score);const criteria=buildCriteria();
  const dt=answers['deuda_total']??0;
  const p=answers['proceso_activo'];
  const urgent=p==='embargo_sueldo'||p==='embargo_bien';
  const titles={qualify:'¡Muy probablemente calificas!',partial:'Posiblemente calificas — necesitas consulta',no:'En este momento es difícil calificar'};
  const subs={qualify:'Basado en tus respuestas, tu perfil cumple los criterios clave de la Ley 2445 de 2025.'+(urgent?' <strong style="color:#C92A2A">Tienes embargos activos — actúa hoy.</strong>':' El siguiente paso es una consulta gratuita para confirmar tu caso.'),partial:'Algunos criterios se cumplen pero hay puntos a revisar. Una consulta gratuita te dará claridad sobre tus opciones.',no:'Tu situación actual no cumple los criterios principales. Podemos orientarte hacia otras alternativas.'};
  const ctaText={qualify:urgent?'🚨 Agenda mi consulta urgente — GRATIS':'Quiero mi consulta gratuita →',partial:'Consultar mi caso gratis →',no:'Explorar otras opciones →'};
  const waMsg=encodeURIComponent(level==='qualify'?'Hola, hice la calculadora de Deuda OFF y califiqué. Tengo deudas por '+fmtMoney(dt)+' con '+answers['num_acreedores']+' acreedores. Quiero hablar con un especialista.':'Hola, hice la calculadora de Deuda OFF. Quiero consultar mi situación.');
  area.innerHTML='<div class="result-card">'+
    '<div class="result-header">'+
      '<div class="result-icon '+level+'">'+(level==='qualify'?'🎉':level==='partial'?'🔍':'💬')+'</div>'+
      '<div class="result-title '+level+'">'+titles[level]+'</div>'+
      '<p class="result-sub">'+subs[level]+'</p></div>'+
    '<div class="result-body">'+
      '<div class="result-divider"></div>'+
      '<div class="score-bar-wrap"><div class="score-label"><span class="score-label-text">Puntaje de calificación</span><span class="score-val" id="scoreVal">0</span></div>'+
        '<div class="score-track"><div class="score-fill '+level+'" id="scoreFill" style="width:0%"></div></div></div>'+
      '<div style="margin-bottom:8px;"><div style="font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:12px;">Análisis de criterios</div>'+
        '<div class="criteria-list">'+criteria.map(c=>'<div class="criteria-item '+c.status+'"><span>'+c.icon+'</span><span>'+c.text+'</span></div>').join('')+'</div></div>'+
      '<div class="result-ctas">'+
        '<a href="https://wa.me/573052396052?text='+waMsg+'" class="btn btn--wa btn--full btn--lg" target="_blank">'+ctaText[level]+'</a>'+
        '<a href="https://deudaoff.com#formulario" class="btn btn--ghost btn--full" style="justify-content:center;">Prefiero el formulario en línea</a>'+
      '</div>'+
      '<p class="result-disclaimer">Este análisis es orientativo, no constituye asesoría legal. Solo un abogado puede confirmar tu elegibilidad. Consulta gratuita y confidencial.</p>'+
    '</div></div>';
  setTimeout(()=>{
    const f=document.getElementById('scoreFill');
    const v=document.getElementById('scoreVal');
    if(f)f.style.width=score+'%';
    if(v){let cur=0;const t=setInterval(()=>{cur=Math.min(cur+2,score);v.textContent=cur+'/100';if(cur>=score)clearInterval(t);},16);}
  },100);
}
function restart(){currentStep=0;answers={};disqualified=false;disqualifyMsg='';renderSidebar();renderStep();}

renderSidebar();
renderStep();
          `,
        }}
      />
    </>
  )
}
