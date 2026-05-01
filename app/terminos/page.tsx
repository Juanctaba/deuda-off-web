import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos y Condiciones — Deuda OFF',
  description: 'Términos y condiciones del servicio de asesoría en insolvencia de persona natural de Deuda OFF, marca de Núcleo Jurídico SAS.',
  alternates: { canonical: 'https://deudaoff.com/terminos' },
}

export default function Terminos() {
  return (
    <div className="min-h-screen bg-white px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-primary hover:underline mb-8 inline-block">← Volver al inicio</Link>
        <h1 className="font-manrope text-4xl font-bold text-primary mb-4">Términos y Condiciones</h1>
        <p className="text-sm text-on-surface-variant mb-10">Última actualización: mayo de 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-on-surface leading-relaxed">

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">1. Identificación del prestador</h2>
            <p>
              Deuda OFF es una línea de negocio de <strong>Núcleo Jurídico SAS</strong>, sociedad colombiana
              vigilada por la Superintendencia de Sociedades, con domicilio en Colombia.
              Correo de contacto: <a href="mailto:info@deudaoff.com" className="text-primary hover:underline">info@deudaoff.com</a>.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">2. Objeto del servicio</h2>
            <p>
              Deuda OFF presta servicios de asesoría jurídica especializada en procesos de insolvencia
              de persona natural no comerciante conforme a la Ley 2445 de 2025 y demás normas
              concordantes del ordenamiento jurídico colombiano.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">3. Consulta gratuita</h2>
            <p>
              La primera consulta de diagnóstico es gratuita y sin compromiso. El usuario entiende que
              dicha consulta no constituye contratación de servicios legales ni crea relación
              abogado–cliente hasta que se suscriba contrato de prestación de servicios por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">4. Uso del sitio web</h2>
            <p>
              El usuario se compromete a usar el sitio <strong>deudaoff.com</strong> de forma lícita,
              absteniéndose de introducir datos falsos, realizar actividades que dañen sistemas
              informáticos o vulneren derechos de terceros.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">5. Propiedad intelectual</h2>
            <p>
              Todos los contenidos del sitio (textos, logotipos, diseño) son propiedad de Núcleo
              Jurídico SAS o se usan con licencia. Queda prohibida su reproducción sin autorización escrita.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">6. Limitación de responsabilidad</h2>
            <p>
              La información publicada en este sitio tiene carácter divulgativo y no constituye asesoría
              legal individualizada. Núcleo Jurídico SAS no se responsabiliza por decisiones tomadas con
              base exclusiva en el contenido del sitio web.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">7. Ley aplicable y jurisdicción</h2>
            <p>
              Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia
              se someterá a los jueces competentes de la ciudad de Bogotá D.C.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
