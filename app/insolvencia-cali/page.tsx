import type { Metadata } from 'next'
import CityLandingPage from '@/components/CityLandingPage'

export const metadata: Metadata = {
  title: 'Insolvencia de Persona Natural en Cali — Deuda OFF',
  description: 'Proceso de insolvencia de persona natural en Cali y el Valle del Cauca. Suspende embargos y negocia tus deudas con la Ley 2445 de 2025. Consulta gratuita.',
  alternates: { canonical: 'https://deudaoff.com/insolvencia-cali' },
  keywords: 'insolvencia persona natural cali, abogado insolvencia cali, deudas cali valle del cauca, proceso insolvencia cali',
}

export default function InsolvenciaCali() {
  return (
    <CityLandingPage
      city="Cali"
      department="Valle del Cauca"
      slug="insolvencia-cali"
      headline="¿Agobiado por deudas en Cali? La ley te da una segunda oportunidad"
      intro="Si vives en Cali y las deudas con bancos, tarjetas o empresas de cobranza están controlando tu vida, la Ley de Insolvencia de Persona Natural es tu herramienta legal. En Deuda OFF te ayudamos a suspender embargos, frenar el acoso y llegar a un acuerdo de pago que puedas cumplir — todo sin salir de Cali."
      localContext="Cali es la tercera ciudad más grande de Colombia y su población enfrenta desafíos financieros relacionados con la informalidad laboral y el acceso a créditos de consumo de alto costo. Muchos caleños tienen deudas con entidades financieras locales, nacionales y prestamistas informales. El proceso de insolvencia de persona natural puede incluir la mayoría de estas obligaciones, y al ser 100% virtual, Deuda OFF puede atenderte desde cualquier barrio de Cali o del departamento del Valle del Cauca."
      cityFaqs={[
        {
          q: '¿Puedo hacer el proceso desde Cali sin ir a Bogotá?',
          a: 'Sí, completamente. El proceso es 100% virtual con Deuda OFF. Todo se gestiona por videollamada y canales digitales. No necesitas viajar a ningún lugar ni acudir a oficinas en Bogotá.',
        },
        {
          q: '¿Qué pasa con las deudas informales o préstamos con personas naturales en Cali?',
          a: 'Las deudas con personas naturales (amigos, familiares, prestamistas) también pueden incluirse en el proceso de insolvencia, siempre que exista algún documento que acredite la obligación.',
        },
        {
          q: '¿Puedo incluir deudas con empresas de libranza en Cali?',
          a: 'Sí. Los créditos por libranza (descontados directamente del salario) pueden incluirse en el proceso, y una vez radicada la solicitud, los descuentos por concepto de ese crédito deben suspenderse.',
        },
        {
          q: '¿El proceso aplica si estoy desempleado en Cali?',
          a: 'Sí. El proceso de liquidación patrimonial está diseñado precisamente para personas sin ingresos suficientes. Evaluamos tu caso en la consulta gratuita para determinar qué procedimiento aplica mejor.',
        },
      ]}
    />
  )
}
