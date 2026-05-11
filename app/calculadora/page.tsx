import type { Metadata } from 'next'
import Calculadora from './Calculadora'

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
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,400&family=Figtree:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
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
        .chk-title { font-weight: 600; font-size: 0.93rem; color: var(--navy); }
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
        .score-fill { height: 100%; border-radius: 5px; transition: width 0.4s cubic-bezier(0.4,0,0.2,1); }
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
      <Calculadora />
    </>
  )
}
