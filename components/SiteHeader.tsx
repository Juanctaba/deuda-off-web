'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { WA_URL } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Cómo Funciona', href: '/#como-funciona' },
  { label: 'Ley de Insolvencia', href: '/#ley-insolvencia' },
  { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Casos de Éxito', href: '/casos-de-exito' },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-outline-variant/40 px-5 flex justify-between items-center h-16">
      <Link href="/" className="flex flex-col" onClick={() => setOpen(false)}>
        <Image src="/logo.png" alt="Deuda OFF" width={130} height={50} className="h-8 w-auto object-contain" priority />
        <span className="text-[10px] uppercase tracking-wider text-outline font-bold">Una marca de Núcleo Jurídico</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map(item => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-secondary border border-secondary px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-secondary/5 transition-all"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.335-1.502A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.73.885.945-3.64-.234-.374A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
          </svg>
          WhatsApp
        </a>
        <a
          href="#formulario"
          className="hidden sm:inline-block bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all"
        >
          Consulta Gratis
        </a>
        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-on-surface hover:bg-surface-variant/60 transition-colors"
        >
          <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-white transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col px-5 py-6 gap-1 overflow-y-auto h-full">
          {NAV_LINKS.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 px-2 text-base font-semibold text-on-surface border-b border-outline-variant/40 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-6">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 text-secondary border border-secondary px-4 py-3 rounded-lg text-sm font-bold hover:bg-secondary/5 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.335-1.502A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.73.885.945-3.64-.234-.374A9.817 9.817 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href="#formulario"
              onClick={() => setOpen(false)}
              className="bg-primary text-white px-5 py-3 rounded-lg text-sm font-bold hover:opacity-90 transition-all text-center"
            >
              Consulta Gratis
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
