import type { Metadata } from 'next'
import CityLandingPage from '@/components/CityLandingPage'

export const metadata: Metadata = {
  title: 'Insolvencia de Persona Natural en Bogotá — Deuda OFF',
  description: 'Proceso de insolvencia de persona natural en Bogotá. Suspende embargos, negocia tus deudas y empieza de nuevo con la Ley 2445 de 2025. Consulta gratuita.',
  alternates: { canonical: 'https://deudaoff.com/insolvencia-bogota' },
  keywords: 'insolvencia persona natural bogota, abogado insolvencia bogota, deudas bogota colombia, proceso insolvencia bogota',
}

export default function InsolvenciaBogota() {
  return (
    <CityLandingPage
      city="Bogotá"
      department="D.C."
      slug="insolvencia-bogota"
      headline="¿Deudas que no puedes pagar en Bogotá? La ley colombiana te protege"
      intro="Si vives en Bogotá y estás abrumado por deudas con bancos, cooperativas o tarjetas de crédito, puedes acogerte a la Ley de Insolvencia de Persona Natural. Suspendemos embargos, frenamos el acoso cobratorio y negociamos un acuerdo de pago que sí puedas cumplir."
      localContext="Bogotá concentra el mayor volumen de crédito de consumo en Colombia, lo que convierte a sus habitantes en los más expuestos a situaciones de sobreendeudamiento. Muchos bogotanos enfrentan deudas con múltiples bancos, cooperativas del sur y oeste de la ciudad, y entidades de microcrédito. La buena noticia: el proceso de insolvencia de persona natural bajo la Ley 2445 de 2025 está disponible para todos los bogotanos y se gestiona 100% de forma virtual — sin necesidad de acudir a ninguna oficina en la ciudad."
      cityFaqs={[
        {
          q: '¿Dónde se tramita la insolvencia en Bogotá?',
          a: 'El proceso puede tramitarse ante Centros de Conciliación autorizados por el Ministerio de Justicia ubicados en Bogotá, o ante la Superintendencia de Sociedades (con sede principal en Bogotá). Con Deuda OFF, todo el proceso es virtual: no necesitas desplazarte por la ciudad.',
        },
        {
          q: '¿Puedo incluir deudas con bancos como Bancolombia, Davivienda o Banco de Bogotá?',
          a: 'Sí. Los créditos con cualquier banco del sistema financiero colombiano pueden incluirse en el proceso de insolvencia, incluyendo Bancolombia, Davivienda, Banco de Bogotá, BBVA, Colpatria y todos los demás.',
        },
        {
          q: '¿Qué pasa si me embargaron el salario en Bogotá?',
          a: 'Si tienes un embargo de salario activo, desde el momento en que radicamos la solicitud de insolvencia el embargo queda suspendido por mandato legal. Esto aplica sin importar en qué empresa trabajes en Bogotá.',
        },
        {
          q: '¿Atienden a personas en toda Bogotá, incluyendo localidades periféricas?',
          a: 'Sí. Al ser un servicio 100% virtual, atendemos a personas en todas las localidades de Bogotá — Kennedy, Suba, Engativá, Ciudad Bolívar, Bosa, Usme y el resto — sin necesidad de trasladarse.',
        },
      ]}
    />
  )
}
