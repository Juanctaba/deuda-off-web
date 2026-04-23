'use client'
import { useState } from 'react'

const WA_URL = 'https://wa.me/573003552751?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20proceso%20de%20insolvencia%20de%20persona%20natural'

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', monto: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch (_) {}
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10 px-6">
        <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined filled text-secondary text-3xl">check_circle</span>
        </div>
        <h3 className="font-manrope font-bold text-xl text-primary mb-2">¡Recibimos tu solicitud!</h3>
        <p className="text-on-surface-variant text-sm mb-6">Un especialista te contactará en menos de 2 horas hábiles.</p>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#20b558] transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.335-1.502A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.73.885.945-3.64-.234-.374A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
          </svg>
          Hablar por WhatsApp ahora
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-primary">Nombre Completo</label>
          <input name="nombre" value={form.nombre} onChange={handle} required
            placeholder="Ej. Juan Pérez" type="text"
            className="w-full h-12 px-4 rounded-xl border border-outline-variant text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-semibold text-primary">WhatsApp</label>
          <input name="telefono" value={form.telefono} onChange={handle} required
            placeholder="300 123 4567" type="tel"
            className="w-full h-12 px-4 rounded-xl border border-outline-variant text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className="block text-sm font-semibold text-primary">Correo Electrónico</label>
        <input name="email" value={form.email} onChange={handle} required
          placeholder="juan@ejemplo.com" type="email"
          className="w-full h-12 px-4 rounded-xl border border-outline-variant text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
      </div>
      <div className="space-y-1.5">
        <label className="block text-sm font-semibold text-primary">Monto de Deuda Aproximado</label>
        <select name="monto" value={form.monto} onChange={handle} required
          className="w-full h-12 px-4 rounded-xl border border-outline-variant text-sm bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface-variant">
          <option value="">Selecciona un rango</option>
          <option value="menos-20m">Menos de 20 Millones</option>
          <option value="20m-50m">Entre 20 y 50 Millones</option>
          <option value="50m-150m">Entre 50 y 150 Millones</option>
          <option value="mas-150m">Más de 150 Millones</option>
        </select>
      </div>
      <div className="pt-2">
        <button type="submit" disabled={status === 'loading'}
          className="w-full h-14 bg-primary text-white font-bold rounded-xl shadow-card-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60">
          {status === 'loading' ? 'Enviando...' : 'Solicitar Consulta Gratuita'}
          {status !== 'loading' && <span className="material-symbols-outlined text-xl">send</span>}
        </button>
        <p className="text-center text-xs text-outline mt-3">
          Al enviar, aceptas nuestra Política de Privacidad y Tratamiento de Datos.
        </p>
      </div>
    </form>
  )
}
