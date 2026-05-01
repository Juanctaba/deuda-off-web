import type { Metadata } from 'next'
import CityLandingPage from '@/components/CityLandingPage'

export const metadata: Metadata = {
  title: 'Insolvencia de Persona Natural en Barranquilla — Deuda OFF',
  description: 'Proceso de insolvencia de persona natural en Barranquilla y el Atlántico. Frena embargos, negocia tus deudas legalmente. Primera consulta gratis.',
  alternates: { canonical: 'https://deudaoff.com/insolvencia-barranquilla' },
  keywords: 'insolvencia persona natural barranquilla, abogado insolvencia barranquilla, deudas barranquilla atlantico, proceso insolvencia barranquilla',
}

export default function InsolvenciaBarranquilla() {
  return (
    <CityLandingPage
      city="Barranquilla"
      department="Atlántico"
      slug="insolvencia-barranquilla"
      headline="¿Deudas en Barranquilla? Protege tu patrimonio con la Ley de Insolvencia"
      intro="En Barranquilla, las deudas con bancos, cooperativas y entidades de crédito pueden escalar rápidamente. La Ley 2445 de 2025 te da el derecho a reorganizar tus obligaciones de forma legal. En Deuda OFF te acompañamos en todo el proceso de forma virtual: sin salir de Barranquilla ni del Atlántico."
      localContext="Barranquilla, como polo comercial del Caribe colombiano, tiene una economía dinámica pero también altos índices de sobreendeudamiento en hogares de clase media y trabajadores independientes. La Costa Atlántica cuenta con numerosas entidades financieras cooperativas y populares. Deuda OFF atiende a personas en Barranquilla, Soledad, Malambo, Puerto Colombia y todo el departamento del Atlántico de manera completamente virtual."
      cityFaqs={[
        {
          q: '¿El proceso de insolvencia aplica para personas en Soledad o Malambo (Atlántico)?',
          a: 'Sí. El proceso aplica para cualquier colombiano en cualquier municipio del departamento del Atlántico. Al ser virtual, Deuda OFF atiende a personas en Barranquilla y todos los municipios del departamento.',
        },
        {
          q: '¿Puedo incluir deudas con cooperativas de la Costa Caribe?',
          a: 'Sí. Las cooperativas de ahorro y crédito de la región Caribe pueden incluirse en el proceso de insolvencia de persona natural, siempre que la deuda sea de naturaleza financiera.',
        },
        {
          q: '¿Qué pasa si soy trabajador independiente en Barranquilla y tengo deudas?',
          a: 'Los trabajadores independientes (con ingresos por honorarios, comisiones o negocio propio no registrado como empresa) también pueden acogerse al proceso de insolvencia. Evaluamos tu caso en la consulta gratuita.',
        },
        {
          q: '¿Cuánto cuesta iniciar el proceso desde Barranquilla?',
          a: 'La primera consulta es completamente gratuita. Los honorarios del proceso se pactan según tu caso y generalmente se integran dentro del plan de pagos acordado, sin grandes sumas por adelantado.',
        },
      ]}
    />
  )
}
