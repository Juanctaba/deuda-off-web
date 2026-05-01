import type { Metadata } from 'next'
import CityLandingPage from '@/components/CityLandingPage'

export const metadata: Metadata = {
  title: 'Insolvencia de Persona Natural en Bucaramanga — Deuda OFF',
  description: 'Proceso de insolvencia de persona natural en Bucaramanga y Santander. Suspende embargos, negocia tus deudas con la Ley 2445 de 2025. Primera consulta gratis.',
  alternates: { canonical: 'https://deudaoff.com/insolvencia-bucaramanga' },
  keywords: 'insolvencia persona natural bucaramanga, abogado insolvencia bucaramanga, deudas bucaramanga santander, proceso insolvencia bucaramanga',
}

export default function InsolvenciaBucaramanga() {
  return (
    <CityLandingPage
      city="Bucaramanga"
      department="Santander"
      slug="insolvencia-bucaramanga"
      headline="¿Deudas que te ahogan en Bucaramanga? La ley colombiana tiene una solución"
      intro="Bucaramanga tiene una clase media activa con alto acceso al crédito — lo que también significa que muchos santandereanos enfrentan situaciones de sobreendeudamiento. Con la Ley 2445 de 2025, tienes el derecho legal de reorganizar tus deudas, suspender embargos y recuperar el control de tus finanzas."
      localContext="El área metropolitana de Bucaramanga — Girón, Floridablanca, Piedecuesta — es una de las zonas con mayor ingreso per cápita de Colombia, pero también con alto nivel de endeudamiento en consumo y vivienda. Muchos bumangueses tienen créditos con cooperativas santandereanas, bancos nacionales y entidades de libranza. Deuda OFF atiende a todas estas personas 100% de forma virtual, sin necesidad de acudir a oficinas en Bucaramanga ni desplazarse a Bogotá."
      cityFaqs={[
        {
          q: '¿El proceso aplica para personas en Floridablanca, Girón o Piedecuesta?',
          a: 'Sí. El proceso de insolvencia aplica para cualquier persona en el área metropolitana de Bucaramanga y en todo el departamento de Santander. Al ser virtual, no importa en qué municipio vivas.',
        },
        {
          q: '¿Puedo incluir un crédito hipotecario de vivienda en Bucaramanga?',
          a: 'Sí, los créditos hipotecarios pueden incluirse en el proceso. Esto permite renegociar las condiciones del crédito de vivienda. Tu abogado evaluará la estrategia más conveniente para proteger tu patrimonio.',
        },
        {
          q: '¿Qué pasa con las cooperativas de Santander, como Coofinansantander?',
          a: 'Las cooperativas de ahorro y crédito de Santander pueden incluirse en el proceso de insolvencia. Incluir todos los acreedores garantiza una negociación integral y evita que algunos credores queden por fuera del acuerdo.',
        },
        {
          q: '¿Tienen experiencia con casos de Bucaramanga?',
          a: 'Sí. Deuda OFF atiende casos en todo el país de forma virtual. Hemos acompañado a múltiples clientes del área metropolitana de Bucaramanga en su proceso de insolvencia con resultados exitosos.',
        },
      ]}
    />
  )
}
