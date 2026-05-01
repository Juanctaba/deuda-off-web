import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso Legal — Deuda OFF',
  description: 'Aviso legal del sitio web deudaoff.com, operado por Núcleo Jurídico SAS, especialistas en insolvencia de persona natural en Colombia.',
  alternates: { canonical: 'https://deudaoff.com/aviso-legal' },
}

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-white px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-primary hover:underline mb-8 inline-block">← Volver al inicio</Link>
        <h1 className="font-manrope text-4xl font-bold text-primary mb-4">Aviso Legal</h1>
        <p className="text-sm text-on-surface-variant mb-10">Última actualización: mayo de 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-on-surface leading-relaxed">

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">Titularidad del sitio</h2>
            <p>
              El sitio web <strong>deudaoff.com</strong> es operado por <strong>Núcleo Jurídico SAS</strong>,
              sociedad por acciones simplificada constituida bajo las leyes de la República de Colombia,
              vigilada por la Superintendencia de Sociedades.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">Naturaleza de la información</h2>
            <p>
              Los contenidos publicados en este sitio tienen carácter exclusivamente informativo y
              divulgativo sobre la legislación de insolvencia de persona natural en Colombia.
              <strong> No constituyen asesoría legal individualizada</strong> ni establecen relación
              abogado–cliente. Para recibir asesoría personalizada, solicita tu consulta gratuita.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">Regulación profesional</h2>
            <p>
              Los abogados de Núcleo Jurídico SAS están inscritos en el Registro Nacional de Abogados
              del Ministerio de Justicia y del Derecho de Colombia y sujetos al Código Disciplinario
              del Abogado (Ley 1123 de 2007).
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">Marco normativo</h2>
            <p>
              Los servicios de insolvencia de persona natural se prestan conforme a:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Ley 2445 de 2025 — Régimen de insolvencia de persona natural no comerciante</li>
              <li>Constitución Política de Colombia, artículo 58 y concordantes</li>
              <li>Superintendencia de Sociedades como autoridad de supervisión</li>
            </ul>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">Exclusión de garantías</h2>
            <p>
              Núcleo Jurídico SAS no garantiza resultados específicos en ningún proceso legal.
              Los resultados dependen de las circunstancias particulares de cada caso. Los +750 casos
              resueltos exitosamente representan experiencia histórica, no garantía de resultado futuro.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">Contacto</h2>
            <p>
              Para consultas legales sobre este aviso:{' '}
              <a href="mailto:info@deudaoff.com" className="text-primary hover:underline">info@deudaoff.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
