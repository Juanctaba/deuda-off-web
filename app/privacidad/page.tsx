import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad — Deuda OFF',
  description: 'Política de tratamiento de datos personales de Deuda OFF conforme a la Ley 1581 de 2012 de protección de datos en Colombia.',
  alternates: { canonical: 'https://deudaoff.com/privacidad' },
}

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-white px-5 py-20">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-primary hover:underline mb-8 inline-block">← Volver al inicio</Link>
        <h1 className="font-manrope text-4xl font-bold text-primary mb-4">Política de Privacidad</h1>
        <p className="text-sm text-on-surface-variant mb-10">Última actualización: mayo de 2026</p>

        <div className="prose prose-slate max-w-none space-y-8 text-on-surface leading-relaxed">

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">1. Responsable del tratamiento</h2>
            <p>
              <strong>Núcleo Jurídico SAS</strong> (Deuda OFF), sociedad colombiana vigilada por la
              Superintendencia de Sociedades, es responsable del tratamiento de los datos personales
              recopilados a través de <strong>deudaoff.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">2. Datos que recopilamos</h2>
            <p>Recopilamos los siguientes datos cuando completas nuestro formulario de contacto:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nombre completo</li>
              <li>Número de teléfono / WhatsApp</li>
              <li>Correo electrónico</li>
              <li>Información sobre tu situación de deudas (opcional, proporcionada voluntariamente)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">3. Finalidad del tratamiento</h2>
            <p>Tus datos se utilizan exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Contactarte para agendar tu consulta gratuita de insolvencia</li>
              <li>Prestar los servicios jurídicos contratados</li>
              <li>Enviarte información relevante sobre el proceso de insolvencia (con tu consentimiento)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">4. Base legal</h2>
            <p>
              El tratamiento se realiza con tu consentimiento expreso al enviar el formulario, conforme
              a la <strong>Ley 1581 de 2012</strong> y el Decreto 1377 de 2013 de protección de datos
              personales en Colombia.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">5. Conservación de datos</h2>
            <p>
              Conservamos tus datos durante el tiempo necesario para prestar el servicio y cumplir
              obligaciones legales. Puedes solicitar su eliminación en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">6. Tus derechos (ARCO)</h2>
            <p>
              Tienes derecho a <strong>Acceder, Rectificar, Cancelar y Oponerte</strong> al tratamiento
              de tus datos personales. Para ejercer estos derechos escríbenos a{' '}
              <a href="mailto:info@deudaoff.com" className="text-primary hover:underline">info@deudaoff.com</a>.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">7. Cookies y tecnologías de seguimiento</h2>
            <p>
              Utilizamos Google Tag Manager para análisis de navegación y mejora del servicio. Puedes
              deshabilitar las cookies desde la configuración de tu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-manrope text-xl font-bold text-primary mb-3">8. Contacto</h2>
            <p>
              Para cualquier consulta sobre esta política escríbenos a{' '}
              <a href="mailto:info@deudaoff.com" className="text-primary hover:underline">info@deudaoff.com</a>{' '}
              o por WhatsApp al +57 300 355 2751.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
