import type { Metadata } from 'next'
import CityLandingPage from '@/components/CityLandingPage'

export const metadata: Metadata = {
  title: 'Insolvencia de Persona Natural en Medellín — Deuda OFF',
  description: 'Proceso de insolvencia de persona natural en Medellín y el área metropolitana. Protege tu salario, frena embargos y negocia tus deudas legalmente. Consulta gratuita.',
  alternates: { canonical: 'https://deudaoff.com/insolvencia-medellin' },
  keywords: 'insolvencia persona natural medellin, abogado insolvencia medellin, deudas medellin antioquia, proceso insolvencia medellin',
}

export default function InsolvenciaMedellin() {
  return (
    <CityLandingPage
      city="Medellín"
      department="Antioquia"
      slug="insolvencia-medellin"
      headline="¿Deudas sin salida en Medellín? La insolvencia de persona natural es tu solución legal"
      intro="En Medellín y el área metropolitana, miles de personas enfrentan deudas que superan su capacidad de pago. Con la Ley 2445 de 2025, puedes reorganizar tus obligaciones de forma legal: suspende embargos, detén el acoso cobratorio y logra un acuerdo de pago real con todos tus acreedores."
      localContext="Medellín y su área metropolitana — Bello, Itagüí, Envigado, Sabaneta, La Estrella — tienen una fuerte cultura financiera con alto uso de crédito de consumo y cooperativas. Las cooperativas financieras son especialmente activas en Antioquia, por lo que muchos deudores tienen obligaciones mixtas con bancos y cooperativas simultáneamente. Deuda OFF opera 100% virtual, lo que significa que podemos atender a cualquier persona en Medellín o el Valle de Aburrá sin importar su ubicación."
      cityFaqs={[
        {
          q: '¿Puedo incluir deudas con cooperativas de Antioquia en el proceso?',
          a: 'Sí. Las cooperativas de ahorro y crédito activas en Antioquia y Medellín (como Coomeva, Confiar, Cootrafa, entre otras) pueden ser incluidas en el proceso de insolvencia de persona natural.',
        },
        {
          q: '¿El proceso funciona también para personas en el área metropolitana (Bello, Itagüí, Envigado)?',
          a: 'Absolutamente. El proceso de insolvencia aplica para cualquier colombiano sin importar el municipio donde resida. Atendemos a personas en todo el Valle de Aburrá y Antioquia de forma virtual.',
        },
        {
          q: '¿Qué pasa si trabajo en una empresa en Medellín y me embargaron el salario?',
          a: 'Al radicar la solicitud de insolvencia, el embargo de salario queda suspendido de inmediato. Tu empleador recibe notificación legal y debe cesar los descuentos. Esto aplica para cualquier empresa en Medellín o el área metropolitana.',
        },
        {
          q: '¿Cuánto tiempo tarda el proceso desde Medellín?',
          a: 'El tiempo es similar al nacional: 2 a 4 semanas de preparación, y la audiencia de conciliación entre 1 y 3 meses después de la radicación. Todo se realiza virtualmente, así que la distancia no afecta los tiempos.',
        },
      ]}
    />
  )
}
