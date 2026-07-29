'use client'

import { useState, useMemo } from 'react'

/**
 * Periodicidades soportadas, con su número de periodos por año.
 * `label` se usa en los selects y en el texto del resultado.
 */
const PERIODOS = [
  { key: 'anual', label: 'Anual', n: 1 },
  { key: 'semestral', label: 'Semestral', n: 2 },
  { key: 'cuatrimestral', label: 'Cuatrimestral', n: 3 },
  { key: 'trimestral', label: 'Trimestral', n: 4 },
  { key: 'bimestral', label: 'Bimestral', n: 6 },
  { key: 'mensual', label: 'Mensual', n: 12 },
  { key: 'diaria', label: 'Diaria', n: 365 },
] as const

type PeriodoKey = (typeof PERIODOS)[number]['key']

const nOf = (k: PeriodoKey) => PERIODOS.find(p => p.key === k)!.n
const labelOf = (k: PeriodoKey) => PERIODOS.find(p => p.key === k)!.label.toLowerCase()

/** Formatea un porcentaje con la precisión pedida, en formato colombiano. */
function pct(value: number, decimals = 4) {
  if (!isFinite(value)) return '—'
  return value.toLocaleString('es-CO', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export default function Convertidor() {
  const [tasa, setTasa] = useState('28')
  const [origen, setOrigen] = useState<PeriodoKey>('anual')
  const [destino, setDestino] = useState<PeriodoKey>('mensual')

  const parsed = parseFloat(tasa.replace(',', '.'))
  const valida = !isNaN(parsed) && parsed >= 0

  const r = useMemo(() => {
    if (!valida) return null

    const i = parsed / 100
    const nO = nOf(origen)
    const nD = nOf(destino)

    // Efectiva de origen -> efectiva anual -> efectiva de destino.
    const ea = Math.pow(1 + i, nO) - 1
    const efectivaDestino = Math.pow(1 + ea, 1 / nD) - 1

    // Nominal del periodo de destino, capitalizable en ese mismo periodo.
    const nominalDestino = efectivaDestino * nD

    return {
      ea: ea * 100,
      efectivaDestino: efectivaDestino * 100,
      nominalDestino: nominalDestino * 100,
    }
  }, [parsed, valida, origen, destino])

  const swap = () => {
    setOrigen(destino)
    setDestino(origen)
  }

  return (
    <div className="bg-white rounded-3xl shadow-form border border-outline-variant/30 p-5 sm:p-8">
      {/* Entradas */}
      <div className="space-y-5">
        <div>
          <label htmlFor="tasa" className="block text-sm font-bold text-primary mb-2">
            Tasa efectiva conocida (%)
          </label>
          <div className="relative">
            <input
              id="tasa"
              type="text"
              inputMode="decimal"
              value={tasa}
              onChange={e => setTasa(e.target.value)}
              placeholder="28"
              aria-describedby="tasa-ayuda"
              className={`w-full h-14 px-4 pr-10 rounded-xl border-2 text-lg font-semibold text-on-surface bg-surface outline-none transition-colors ${
                valida || tasa === ''
                  ? 'border-outline-variant focus:border-primary'
                  : 'border-error focus:border-error'
              }`}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-semibold">%</span>
          </div>
          <p id="tasa-ayuda" className="text-xs text-on-surface-variant mt-1.5">
            Usa punto o coma para decimales. Ejemplo: 28,5
          </p>
          {!valida && tasa !== '' && (
            <p className="text-xs text-error mt-1 font-semibold">Ingresa un número válido mayor o igual a cero.</p>
          )}
        </div>

        <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-3 items-end">
          <div>
            <label htmlFor="origen" className="block text-sm font-bold text-primary mb-2">
              La tasa que tengo es
            </label>
            <select
              id="origen"
              value={origen}
              onChange={e => setOrigen(e.target.value as PeriodoKey)}
              className="w-full h-14 px-4 rounded-xl border-2 border-outline-variant bg-surface text-on-surface font-semibold outline-none focus:border-primary transition-colors"
            >
              {PERIODOS.map(p => (
                <option key={p.key} value={p.key}>
                  Efectiva {p.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={swap}
            aria-label="Intercambiar periodicidades"
            className="h-14 w-14 shrink-0 rounded-xl border-2 border-outline-variant hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-center mx-auto"
          >
            <span className="material-symbols-outlined text-primary">swap_horiz</span>
          </button>

          <div>
            <label htmlFor="destino" className="block text-sm font-bold text-primary mb-2">
              Quiero convertirla a
            </label>
            <select
              id="destino"
              value={destino}
              onChange={e => setDestino(e.target.value as PeriodoKey)}
              className="w-full h-14 px-4 rounded-xl border-2 border-outline-variant bg-surface text-on-surface font-semibold outline-none focus:border-primary transition-colors"
            >
              {PERIODOS.map(p => (
                <option key={p.key} value={p.key}>
                  Efectiva {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Resultado */}
      {r && (
        <div className="mt-8">
          <div className="bg-primary rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl -mr-24 -mt-24" />
            <div className="relative z-10">
              <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">
                Tasa efectiva {labelOf(destino)}
              </p>
              <p className="font-manrope text-4xl sm:text-5xl font-bold mb-1">{pct(r.efectivaDestino)}%</p>
              <p className="text-blue-100 text-sm">
                equivalente a {pct(parsed, 2)}% efectivo {labelOf(origen)}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            <div className="bg-surface-container rounded-xl p-4 border border-outline-variant/40">
              <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                Efectiva anual (E.A.)
              </p>
              <p className="font-manrope text-2xl font-bold text-primary">{pct(r.ea)}%</p>
              <p className="text-xs text-on-surface-variant mt-1">
                La referencia que usan bancos y la Superintendencia Financiera.
              </p>
            </div>
            <div className="bg-surface-container rounded-xl p-4 border border-outline-variant/40">
              <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                Nominal {labelOf(destino)}
              </p>
              <p className="font-manrope text-2xl font-bold text-primary">{pct(r.nominalDestino)}%</p>
              <p className="text-xs text-on-surface-variant mt-1">
                Capitalizable {labelOf(destino)}. No confundir con la efectiva.
              </p>
            </div>
          </div>

          <details className="mt-4 bg-surface-container-low rounded-xl border border-outline-variant/40 overflow-hidden">
            <summary className="px-5 py-3 cursor-pointer text-sm font-bold text-primary hover:bg-surface-container transition-colors">
              Ver cómo se calcula
            </summary>
            <div className="px-5 pb-4 pt-1 text-sm text-on-surface-variant leading-relaxed space-y-2">
              <p>
                La conversión entre tasas efectivas nunca es una simple división: hay que pasar por la tasa efectiva
                anual usando capitalización compuesta.
              </p>
              <p className="font-mono text-xs bg-white rounded-lg p-3 border border-outline-variant/40 overflow-x-auto">
                E.A. = (1 + i)<sup>n</sup> − 1 = (1 + {pct(parsed / 100, 6)})<sup>{nOf(origen)}</sup> − 1 ={' '}
                {pct(r.ea / 100, 6)}
                <br />
                i<sub>destino</sub> = (1 + E.A.)<sup>1/{nOf(destino)}</sup> − 1 = {pct(r.efectivaDestino / 100, 6)}
              </p>
              <p>
                Donde <strong>i</strong> es la tasa del periodo de origen y <strong>n</strong> el número de periodos de
                ese tipo que hay en un año.
              </p>
            </div>
          </details>
        </div>
      )}
    </div>
  )
}
