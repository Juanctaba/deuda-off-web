import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_URL_FAQ } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes sobre Insolvencia de Persona Natural | Deuda OFF',
  description: 'Resuelve todas tus dudas sobre el proceso de insolvencia de persona natural en Colombia: costos, tiempos, bienes, deudas y más.',
  alternates: { canonical: 'https://deudaoff.com/preguntas-frecuentes' },
}

const FAQS = [
  {
    category: 'Sobre el proceso',
    items: [
      {
        q: '¿Qué es el Procedimiento de Insolvencia de Persona Natural?',
        a: 'Es un mecanismo legal establecido en Colombia que permite a personas naturales no comerciantes reorganizar o liquidar sus deudas de forma oficial. Bajo la Ley 2445 de 2025, puedes negociar con todos tus acreedores a la vez, protegido por la ley, y lograr un acuerdo de pago ajustado a tu capacidad real.',
      },
      {
        q: '¿Cuánto tiempo tarda el proceso?',
        a: 'La fase de preparación y radicación toma entre 2 y 4 semanas. La audiencia de negociación con los acreedores se realiza entre 1 y 3 meses después de la radicación. La ejecución del acuerdo (pago de las cuotas) puede durar de 1 a 5 años según lo pactado. Lo importante: desde el día de la radicación tienes protección legal inmediata contra embargos y cobros coercitivos.',
      },
      {
        q: '¿Tengo que ir a un juzgado?',
        a: 'No necesariamente. La mayoría de los procesos se tramitan ante Centros de Conciliación autorizados por el Ministerio de Justicia, sin necesidad de ir a un juzgado. Además, en Deuda OFF manejamos todo 100% de forma virtual — videollamadas, firma electrónica y canales digitales. Atendemos a colombianos en todo el país.',
      },
      {
        q: '¿Qué pasa si un acreedor no acepta el acuerdo?',
        a: 'Si la mayoría de los acreedores (en valor de deuda) aprueba el acuerdo, este se vuelve obligatorio para todos, incluyendo los que votaron en contra. No es necesaria la aprobación unánime.',
      },
      {
        q: '¿Puedo seguir trabajando durante el proceso?',
        a: 'Sí. El proceso de insolvencia no afecta tu contrato laboral ni tu capacidad de trabajar. Tu empleador no recibe notificación del proceso a menos que exista un embargo de salario activo que deba suspenderse.',
      },
    ],
  },
  {
    category: 'Costos y pagos',
    items: [
      {
        q: '¿Cuánto cuesta el proceso de insolvencia?',
        a: 'La primera consulta de diagnóstico es completamente gratuita y sin compromiso. Los honorarios del proceso se pactan según las características de cada caso — generalmente como un porcentaje del valor de las deudas o una cuota mensual incluida dentro del plan de pagos. En Deuda OFF no cobramos grandes sumas por adelantado.',
      },
      {
        q: '¿Puedo incluir el costo del abogado en el plan de pagos?',
        a: 'En muchos casos sí. Estructuramos los honorarios de forma que no representen una carga adicional insostenible. Esto es parte de lo que evaluamos en la consulta gratuita inicial.',
      },
      {
        q: '¿Qué pasa si no puedo cumplir con las cuotas del acuerdo?',
        a: 'Si cambias tu situación económica durante la ejecución del acuerdo, es posible solicitar una modificación del plan ante el conciliador o juez. Tu abogado te acompaña en este proceso. Por eso es fundamental que el acuerdo inicial sea realista desde el principio.',
      },
    ],
  },
  {
    category: 'Deudas y bienes',
    items: [
      {
        q: '¿Qué deudas puedo incluir?',
        a: 'Puedes incluir créditos bancarios, tarjetas de crédito, préstamos con cooperativas, créditos de consumo, microcréditos, créditos vehiculares, deudas cedidas a empresas de cartera y obligaciones con personas naturales. Hay excepciones: las cuotas alimentarias y algunas obligaciones tributarias no pueden incluirse.',
      },
      {
        q: '¿Qué pasa con mi casa durante el proceso?',
        a: 'Si tienes una hipoteca, la deuda hipotecaria puede incluirse en el proceso y renegociarse. Mientras el proceso esté activo, no pueden rematar tu vivienda por las deudas incluidas. Si tu vivienda tiene afectación a vivienda de familia, tiene protecciones adicionales.',
      },
      {
        q: '¿Pueden embargarme el salario?',
        a: 'Si ya tienes un embargo de salario, este se suspende desde el momento en que se radica la solicitud de insolvencia. Si el salario mínimo es tu único ingreso, en muchos casos no pueden descontarte nada. A partir de un salario mínimo, solo pueden embargar hasta el 50% del excedente.',
      },
      {
        q: '¿El proceso aplica para deudas con cooperativas?',
        a: 'Sí. Las deudas con cooperativas de ahorro y crédito pueden incluirse en el proceso de insolvencia de persona natural, siempre que la cooperativa sea tu acreedor en calidad de entidad financiera y no en una relación comercial o laboral.',
      },
      {
        q: '¿Qué pasa con las deudas de tarjeta de crédito?',
        a: 'Las tarjetas de crédito son una de las deudas más comunes en los procesos de insolvencia. Se incluyen en el proceso con su saldo total a la fecha de radicación, y los intereses moratorios futuros se suspenden.',
      },
    ],
  },
  {
    category: 'Después del proceso',
    items: [
      {
        q: '¿Qué pasa con mi historial en Datacrédito después?',
        a: 'Durante el proceso, el historial refleja la situación de insolvencia. Al cumplir el acuerdo, las deudas incluidas quedan extintas y el historial debe actualizarse para reflejar el cumplimiento. La Ley 2445 de 2025 establece plazos razonables para la normalización del historial crediticio.',
      },
      {
        q: '¿Cuánto dura el reporte negativo después de pagar?',
        a: 'Una vez cumplido el acuerdo y extinguidas las deudas, el reporte negativo no puede mantenerse indefinidamente. La Ley establece que el período máximo es el doble del tiempo de mora, con un tope máximo. Tu abogado puede ayudarte a gestionar la actualización del historial.',
      },
      {
        q: '¿Puedo pedir créditos nuevamente después del proceso?',
        a: 'Sí. Una vez concluido el proceso y actualizado el historial, puedes acceder a créditos nuevamente. Muchos de nuestros clientes logran reconstruir su perfil crediticio en 2 a 3 años después del proceso.',
      },
    ],
  },
]

export default function PreguntasFrecuentes() {
  const allFaqs = FAQS.flatMap(cat => cat.items)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://deudaoff.com' },
      { '@type': 'ListItem', position: 2, name: 'Preguntas Frecuentes sobre Insolvencia en Colombia', item: 'https://deudaoff.com/preguntas-frecuentes' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-surface">
        {/* Header */}
        <div className="bg-primary text-white py-16 px-5">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/50 text-xs mb-6">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>›</span>
              <span className="text-white/70">Preguntas Frecuentes</span>
            </nav>
            <h1 className="font-manrope text-4xl font-bold mb-3">Preguntas Frecuentes sobre Insolvencia de Persona Natural en Colombia</h1>
            <p className="text-blue-200 text-lg">
              Respuestas claras y directas sobre el proceso de insolvencia, la Ley 2445 de 2025, costos, tiempos y tus derechos como deudor.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 py-14">
          <div className="space-y-14">
            {FAQS.map(cat => (
              <div key={cat.category}>
                <h2 className="font-manrope text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-secondary rounded-full inline-block" />
                  {cat.category}
                </h2>
                <div className="space-y-4">
                  {cat.items.map(faq => (
                    <details
                      key={faq.q}
                      className="group bg-white rounded-xl border border-outline-variant/40 shadow-card overflow-hidden"
                    >
                      <summary className="flex justify-between items-start gap-4 p-6 cursor-pointer select-none list-none">
                        <h3 className="font-manrope font-semibold text-primary leading-snug">{faq.q}</h3>
                        <span className="text-secondary shrink-0 mt-0.5 group-open:rotate-180 transition-transform">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </summary>
                      <div className="px-6 pb-6">
                        <p className="text-on-surface-variant leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-primary rounded-2xl p-8 text-white text-center">
            <h2 className="font-manrope text-2xl font-bold mb-3">¿Tu pregunta no está aquí?</h2>
            <p className="text-blue-200 mb-6">
              Habla directamente con un especialista. La consulta es gratuita y confidencial.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/#formulario" className="bg-secondary text-primary px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all">
                Consulta Gratuita
              </Link>
              <a
                href={WA_URL_FAQ}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/40 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
