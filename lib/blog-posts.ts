export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  dateModified: string
  category: string
  readTime: string
  about: string[]
  mentions: string[]
  content: string
  /** Preguntas frecuentes — se emiten como schema FAQPage y se renderizan al final del artículo. */
  faqs?: { q: string; a: string }[]
  /** Fuentes normativas oficiales citadas en el artículo (señal E-E-A-T para contenido YMYL). */
  sources?: { label: string; href: string }[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ley-2445-de-2025-insolvencia-colombia',
    title: 'Ley 2445 de 2025: la nueva Ley de Insolvencia en Colombia explicada',
    description: 'Vigente desde febrero de 2025. Qué cambió, quiénes pueden acogerse, cuánto tarda y cómo frena embargos. Guía con el articulado citado, actualizada 2026.',
    date: '2026-04-10',
    dateModified: '2026-07-29',
    category: 'Legislación',
    readTime: '14 min',
    about: ['Ley 2445 de 2025', 'Insolvencia de persona natural', 'Derecho concursal Colombia', 'Liquidación patrimonial'],
    mentions: ['Ministerio de Justicia y del Derecho', 'Superintendencia de Sociedades', 'Superintendencia Financiera de Colombia', 'Núcleo Jurídico SAS'],
    sources: [
      { label: 'Ley 2445 de 2025 — texto oficial, Secretaría del Senado de la República', href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2445_2025.html' },
      { label: 'Ley 2445 de 2025 — SUIN-Juriscol, Ministerio de Justicia y del Derecho', href: 'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30054512' },
      { label: 'Ley 1564 de 2012 (Código General del Proceso) — norma modificada', href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1564_2012.html' },
      { label: 'Ley 1116 de 2006 — régimen de insolvencia empresarial', href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1116_2006.html' },
    ],
    faqs: [
      {
        q: '¿Qué es la Ley 2445 de 2025?',
        a: 'Es la ley sancionada el 11 de febrero de 2025 que modificó el Título IV de la Sección Tercera del Libro Tercero de la Ley 1564 de 2012 (Código General del Proceso), donde se regula la insolvencia de persona natural. Según su artículo 1, sus objetivos son incorporar a pequeños comerciantes al régimen, corregir normas que generaban decisiones judiciales contradictorias, flexibilizar el proceso tras la crisis del Covid-19 y agilizar la liquidación patrimonial.',
      },
      {
        q: '¿Cuáles son los requisitos exactos para acogerse a la insolvencia?',
        a: 'El artículo 538 del CGP, modificado por el artículo 9 de la Ley 2445 de 2025, exige estar en cesación de pagos: incumplir dos o más obligaciones con dos o más acreedores por más de 90 días, o tener en curso dos o más procesos de cobro, de ejecución especial o de restitución de bienes por mora en cánones. Además, esas obligaciones deben representar no menos del 30% del pasivo total, sin contar los créditos que se estén pagando por libranza o descuento de nómina. Basta la declaración del deudor bajo la gravedad del juramento.',
      },
      {
        q: '¿Cuánto cuesta el proceso de insolvencia de persona natural?',
        a: 'Hay que distinguir tres conceptos. El trámite: el artículo 535 del CGP, modificado por el artículo 7 de la Ley 2445 de 2025, establece que los procedimientos de negociación de deudas y de convalidación de acuerdos son GRATUITOS ante centros de conciliación de consultorios jurídicos de facultades de derecho y de entidades públicas, servicio que debía implementarse a más tardar el 1 de enero de 2026. Las expensas: comunicaciones, remisión de expedientes y gastos secretariales, a cargo del solicitante; si no se pagan, se entiende desistida la solicitud. Y los honorarios de abogado, que son aparte y se pactan libremente: en Deuda OFF parten del 10% del total de la deuda, porcentaje que es la base y varía según las características de cada caso.',
      },
      {
        q: '¿Cuánto dura el proceso de negociación de deudas?',
        a: 'El artículo 544 del CGP, modificado por el artículo 15 de la Ley 2445 de 2025, fija 60 días contados desde que queda en firme la aceptación de la solicitud. Puede prorrogarse 30 días más a solicitud conjunta del deudor y de los acreedores con quienes ya se conciliaron derechos, y para el deudor comerciante hasta 90 días adicionales con voto favorable de la mayoría. El término se suspende mientras la jurisdicción ordinaria civil resuelve controversias.',
      },
      {
        q: '¿Puedo perder el trabajo por estar en insolvencia?',
        a: 'No. El parágrafo tercero del artículo 532 del CGP prohíbe que un empleador o contratante tenga en cuenta negativamente que un empleado, contratista o aspirante esté tramitando un procedimiento de insolvencia o se haya acogido a uno en el pasado, al decidir sobre su vinculación o desvinculación laboral, civil o administrativa. Tratándose de servidores públicos, hacerlo es causal de mala conducta.',
      },
      {
        q: '¿Qué pasa si un banco me sigue cobrando después de radicar?',
        a: 'El numeral 1 del artículo 545 establece sanciones escalonadas para el acreedor ya notificado que insista en diligencias de cobranza: llamado de atención la primera vez, amonestación la segunda y postergación del pago de todas sus obligaciones calificadas la tercera. A partir de la cuarta, el conciliador o el juez remite la queja a la Superintendencia Financiera o a la de Industria y Comercio para que se imponga una multa equivalente al 10% del monto de los créditos cobrados, incluidos los intereses.',
      },
      {
        q: '¿Me pueden cortar los servicios públicos durante el proceso?',
        a: 'No por deudas anteriores. El numeral 3 del artículo 545 prohíbe suspender los servicios públicos domiciliarios en la casa de habitación ni en el lugar de trabajo del deudor por mora en obligaciones anteriores a la aceptación. Si ya estaban suspendidos, deben restablecerse. La misma regla aplica a contratos de tracto sucesivo como arrendamiento, educación, salud y administración de propiedad horizontal.',
      },
      {
        q: '¿Las deudas quedan realmente extinguidas?',
        a: 'En la liquidación patrimonial, el numeral 1 del artículo 571 dispone que los saldos totales o parciales no cubiertos mutan a obligaciones naturales, es decir, dejan de ser judicialmente exigibles. Pero el beneficio se pierde si el deudor omitió dolosamente información relevante, ocultó o simuló bienes, o deterioró con dolo o culpa grave los activos a adjudicar. Tampoco cobija los saldos insolutos por obligaciones alimentarias.',
      },
      {
        q: '¿Puedo volver a acogerme a la insolvencia más adelante?',
        a: 'Sí, pero con plazos de espera. El artículo 574 establece 5 años desde el cumplimiento total del acuerdo anterior, o desde la aceptación del desistimiento. Quien se benefició de la conversión a obligaciones naturales debe esperar 10 años desde el inicio de la liquidación anterior; quien cubrió con sus bienes el total reconocido, 5 años. A quien se le negó ese beneficio debe esperar 15 años desde la apertura de la liquidación.',
      },
      {
        q: '¿Toda mi familia puede tramitar la insolvencia junta?',
        a: 'El artículo 539A, adicionado por el artículo 11 de la Ley 2445 de 2025, permite que un mismo conciliador tramite coordinadamente la insolvencia de varios deudores del mismo núcleo familiar que lo pidan, siempre que cada uno cumpla los presupuestos del artículo 538. El valor de los servicios del conciliador no puede exceder el 50% adicional al del caso de mayor pasivo y complejidad. Se entienden del mismo núcleo los cónyuges, compañeros permanentes y parientes dentro del segundo grado de consanguinidad y único civil.',
      },
    ],
    content: `
<p class="definicion"><strong>Definición:</strong> La Ley 2445 de 2025 es la ley colombiana, sancionada el 11 de febrero de 2025, que reformó el régimen de insolvencia de persona natural del Código General del Proceso. Amplió el acceso a pequeños comerciantes, bajó del 50% al 30% el umbral de deuda en mora exigido y reforzó las protecciones del deudor durante el trámite.</p>

<p>Si estás buscando cómo salir de deudas que ya no puedes pagar, esta es la norma que te aplica. A diferencia de la mayoría de resúmenes que circulan, esta guía cita el articulado concreto para que puedas verificar cada afirmación en el <a href="http://www.secretariasenado.gov.co/senado/basedoc/ley_2445_2025.html" target="_blank" rel="noopener noreferrer nofollow">texto oficial de la ley</a>.</p>

<h2>Qué es la Ley 2445 de 2025 y qué reformó</h2>

<p>La Ley 2445 de 2025 no creó un régimen nuevo: modificó el que ya existía. Su artículo 1 declara que el objeto es modificar el Título IV de la Sección Tercera del Libro Tercero de la Ley 1564 de 2012 (Código General del Proceso) con cuatro finalidades concretas:</p>

<ul>
  <li>Incorporar a algunas personas naturales comerciantes al régimen de insolvencia de las no comerciantes.</li>
  <li>Modificar normas cuya aplicación venía generando decisiones contradictorias entre jueces y estancamiento de los procesos liquidatorios.</li>
  <li>Flexibilizar el proceso tras la crisis económica generada por la pandemia de Covid-19.</li>
  <li>Agilizar la liquidación patrimonial y garantizar la entrega de los bienes a sus adjudicatarios.</li>
</ul>

<p>El artículo 2 cambió incluso el nombre del Título IV, que pasó a llamarse <strong>Insolvencia de la persona natural no comerciante y de la pequeña comerciante</strong>. Ese solo ajuste anticipa la reforma de fondo.</p>

<p>El artículo 531, modificado por el artículo 3 de la ley, define la finalidad del régimen: el reintegro a la actividad productiva nacional de quien ha sufrido un quebranto económico, mediante la normalización de sus relaciones crediticias.</p>

<h2>Qué cambió frente al régimen anterior</h2>

<p>Esta es la comparación concreta entre el régimen previo y el vigente:</p>

<div class="tabla-wrap">
<table>
  <thead>
    <tr><th>Aspecto</th><th>Antes (Ley 1564 de 2012)</th><th>Ahora (Ley 2445 de 2025)</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Quién puede acceder</strong></td>
      <td>Solo la persona natural no comerciante.</td>
      <td>También el pequeño comerciante con activos inferiores a 1.000 SMLMV, excluida la vivienda familiar y el vehículo de trabajo (art. 532).</td>
    </tr>
    <tr>
      <td><strong>Umbral de mora</strong></td>
      <td>No menos del 50% del capital adeudado en mora.</td>
      <td>No menos del <strong>30%</strong> del pasivo total, sin contar créditos pagados por libranza (art. 538).</td>
    </tr>
    <tr>
      <td><strong>Costo del trámite</strong></td>
      <td>Sin gratuidad generalizada.</td>
      <td><strong>Gratuito</strong> en centros de conciliación de consultorios jurídicos y entidades públicas, desde el 1 de enero de 2026 (art. 535).</td>
    </tr>
    <tr>
      <td><strong>Descuentos de libranza</strong></td>
      <td>Continuaban durante el trámite.</td>
      <td>Se suspenden desde la aceptación; los actos en contravención son ineficaces de pleno derecho (art. 545 num. 2).</td>
    </tr>
    <tr>
      <td><strong>Servicios públicos</strong></td>
      <td>Sin protección expresa.</td>
      <td>No pueden suspenderse por deudas anteriores; si ya lo estaban, deben restablecerse (art. 545 num. 3).</td>
    </tr>
    <tr>
      <td><strong>Protección laboral</strong></td>
      <td>Sin norma expresa.</td>
      <td>Prohibido usar la insolvencia como criterio de vinculación o despido; en servidores públicos es causal de mala conducta (art. 532, par. 3).</td>
    </tr>
    <tr>
      <td><strong>Acreedor que sigue cobrando</strong></td>
      <td>Sin sanción específica.</td>
      <td>Sanciones escalonadas y multa del 10% de lo cobrado ante la Superintendencia competente (art. 545 num. 1).</td>
    </tr>
    <tr>
      <td><strong>Trámite virtual</strong></td>
      <td>Fundamentalmente presencial.</td>
      <td>Competencia nacional virtual para centros y notarías, incluso con deudor domiciliado en el exterior (art. 533).</td>
    </tr>
  </tbody>
</table>
</div>

<h2>Quién puede acogerse: los requisitos exactos</h2>

<p>Para acogerse a la insolvencia hay que estar en <strong>cesación de pagos</strong>. El artículo 538 del CGP, modificado por el artículo 9 de la Ley 2445 de 2025, define exactamente cuándo se configura.</p>

<p class="cita-norma"><strong>Artículo 538 CGP.</strong> Estará en cesación de pagos la persona natural que como deudor o garante incumpla el pago de dos (2) o más obligaciones a favor de dos (2) o más acreedores por más de noventa (90) días, o contra el cual se hayan iniciado dos (2) o más procedimientos públicos o privados de cobro de obligaciones dinerarias, de ejecución especial o de restitución de bienes por mora en el pago de cánones. En cualquier caso, el valor porcentual de las obligaciones deberá representar no menos del treinta por ciento (30%) del pasivo total a su cargo.</p>

<p>Desglosado en criterios verificables, necesitas cumplir <strong>una</strong> de las dos primeras condiciones <strong>más</strong> la tercera:</p>

<ol>
  <li><strong>Mora superior a 90 días</strong> en dos o más obligaciones frente a dos o más acreedores; o</li>
  <li><strong>Dos o más procesos de cobro</strong> en curso: ejecutivos, de jurisdicción coactiva, de ejecución especial o de restitución del inmueble por mora en el arriendo.</li>
  <li><strong>Y que esas obligaciones representen al menos el 30%</strong> de tu pasivo total.</li>
</ol>

<p>Hay un detalle técnico que casi nadie menciona y que puede decidir tu caso: para ese cálculo del 30% <strong>no se cuentan los créditos que se estén pagando por libranza o descuento de nómina</strong>, a menos que hayan dejado de abonarse efectivamente. Si buena parte de tu deuda se descuenta automáticamente del sueldo, el porcentaje se calcula sobre el resto, lo que suele facilitar que califiques.</p>

<p>El mismo artículo aclara que para verificar la situación <strong>basta la declaración del deudor</strong>, entendida bajo la gravedad del juramento. No hay que probar la insolvencia con un dictamen previo.</p>

<h3>Y si eres pequeño comerciante</h3>

<p>El artículo 532 incorporó a la persona natural comerciante con activos totales inferiores a 1.000 salarios mínimos mensuales legales vigentes, <strong>excluido el valor de la vivienda de su familia y del vehículo que usa como instrumento de trabajo</strong>. La ley los denomina pequeños comerciantes. Puede acceder aunque no esté cumpliendo los deberes del artículo 19 del Código de Comercio, salvo el primero, que debe acreditar con la solicitud.</p>

<p>Es una de las novedades de mayor alcance de la reforma: un grupo entero que antes quedaba fuera del régimen hoy tiene acceso. Lo desarrollamos en detalle en la guía sobre <a href="/blog/insolvencia-pequeno-comerciante-colombia-2025">insolvencia para pequeños comerciantes</a>.</p>

<p>Quedan por fuera, según el parágrafo primero del artículo 532, las personas naturales controlantes de sociedades mercantiles que estén en insolvencia empresarial ante la Superintendencia de Sociedades: a ellas se les aplica la <a href="http://www.secretariasenado.gov.co/senado/basedoc/ley_1116_2006.html" target="_blank" rel="noopener noreferrer nofollow">Ley 1116 de 2006</a>.</p>

<h2>Los tres procedimientos que ofrece la ley</h2>

<p>El artículo 531 establece que la normalización de las relaciones crediticias puede lograrse por tres vías. No son dos: son tres, y confundirlas lleva a elegir mal.</p>

<h3>1. Negociación de deudas</h3>
<p>El camino más común. El deudor presenta una propuesta de pago clara, expresa y objetiva (art. 539 num. 2) y la discute con sus acreedores ante un conciliador. Aprobado el acuerdo, vincula a todos.</p>

<h3>2. Convalidación de acuerdo privado</h3>
<p>Cuando el deudor ya logró un acuerdo por fuera del trámite con una mayoría calificada de acreedores, el artículo 562 le permite llevarlo a convalidación para que resulte obligatorio también frente a quienes no lo suscribieron. Es la vía que más se pasa por alto.</p>

<h3>3. Liquidación patrimonial</h3>
<p>La salida cuando no hay acuerdo posible. Se adjudican a los acreedores los bienes embargables. Según el numeral 1 del artículo 571, los saldos no cubiertos <strong>mutan a obligaciones naturales</strong>: subsisten como deber moral pero dejan de ser judicialmente exigibles. Además, salvo en procesos de alimentos, los acreedores insatisfechos no podrán perseguir los bienes que el deudor adquiera después del inicio de la liquidación.</p>

<h2>Qué pasa desde que aceptan tu solicitud</h2>

<p>Este es el punto que más importa en la práctica: la protección no llega al final del proceso, sino al principio. El artículo 545 enumera los efectos que se producen <strong>a partir de la aceptación de la solicitud</strong>.</p>

<div class="tabla-wrap">
<table>
  <thead>
    <tr><th>Efecto</th><th>Qué significa</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Se frenan los procesos</strong></td>
      <td>No pueden iniciarse nuevos procesos de ejecución, jurisdicción coactiva, cobro, ejecución especial ni restitución por mora en cánones, y se suspenden los que estuvieran en curso (num. 1).</td>
    </tr>
    <tr>
      <td><strong>Se detienen las medidas cautelares</strong></td>
      <td>La suspensión incluye la ejecución aún no practicada de embargos ya decretados sobre bienes, derechos, emolumentos, cuentas bancarias y cualquier producto financiero, y los actos preparatorios de esas medidas (num. 1).</td>
    </tr>
    <tr>
      <td><strong>Cesan los descuentos de nómina</strong></td>
      <td>Se suspenden descuentos de nómina, de productos financieros y pagos por libranza, salvo obligaciones alimentarias. Lo que se descuente pese a ello es ineficaz de pleno derecho, con devolución inmediata y responsabilidad solidaria del pagador y del acreedor (num. 2).</td>
    </tr>
    <tr>
      <td><strong>No te cortan los servicios</strong></td>
      <td>No pueden suspenderse los servicios públicos domiciliarios en tu casa ni en tu lugar de trabajo por deudas anteriores; si ya estaban cortados, deben restablecerse. Aplica también a arrendamiento, educación, salud y administración de propiedad horizontal (num. 3).</td>
    </tr>
    <tr>
      <td><strong>Se interrumpe la prescripción</strong></td>
      <td>Se interrumpe el término de prescripción y no opera la caducidad de las acciones respecto de los créditos exigibles antes del inicio (num. 6).</td>
    </tr>
    <tr>
      <td><strong>Paz y salvo acotado</strong></td>
      <td>Impuestos, administración, servicios públicos y demás tasas para obtener paz y salvo solo pueden exigirse respecto de lo causado después de la aceptación (num. 7).</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Qué pasa si el acreedor sigue llamando</h3>

<p>La Ley 2445 puso dientes a la protección. Según el numeral 1 del artículo 545, el acreedor que ya fue comunicado y aun así adelanta diligencias de cobranza recibe: <strong>llamado de atención</strong> la primera vez, <strong>amonestación</strong> la segunda y <strong>postergación del pago</strong> de todas sus obligaciones calificadas la tercera. A partir de la cuarta, el conciliador o el juez envía la queja a la Superintendencia Financiera o a la de Industria y Comercio, conforme a la Ley 2300 de 2023, para que se imponga una <strong>multa del 10% del monto de los créditos cobrados</strong>, incluidos los intereses, por cada vez.</p>

<h2>Cuánto cuesta el proceso</h2>

<p>Es la pregunta que más se hace y la que casi nadie responde. La ley sí la responde.</p>

<p class="cita-norma"><strong>Artículo 535 CGP — Gratuidad.</strong> Los procedimientos de negociación de deudas y de convalidación de acuerdo ante centros de conciliación de consultorios jurídicos de facultades de derecho y de las entidades públicas serán gratuitos y la prestación de este servicio se implementará a más tardar el 1 de enero de 2026 en todos los centros de conciliación de dichas entidades.</p>

<p>En concreto, hay tres conceptos distintos que conviene no mezclar:</p>

<ul>
  <li><strong>El trámite ante el centro de conciliación.</strong> Es gratuito en los centros de consultorios jurídicos de facultades de derecho y de entidades públicas. En centros privados y notarías se cobran las tarifas autorizadas.</li>
  <li><strong>Las expensas.</strong> Las asume el solicitante: comunicaciones, remisión de expedientes y gastos secretariales. Si no se pagan, se entiende desistida la solicitud.</li>
  <li><strong>Los honorarios de abogado.</strong> Son aparte y se pactan libremente. El artículo 539 exige asistencia con apoderado judicial cuando el pasivo supera la mínima cuantía. Por debajo de esa cuantía, el parágrafo del artículo 535 permite que los consultorios jurídicos de las facultades de derecho representen o acompañen al deudor.</li>
</ul>

<p>Si varios miembros de un mismo núcleo familiar tramitan a la vez, el artículo 539A limita el valor de los servicios del conciliador: no puede exceder el 50% adicional al del caso de mayor pasivo y complejidad.</p>

<h3>Cuánto cobramos en Deuda OFF</h3>

<p>Como casi nadie publica esta cifra, la dejamos explícita: nuestros honorarios parten del <strong>10% del total de la deuda</strong>. Ese porcentaje es la base y varía según las características de cada caso.</p>

<p>Tampoco exigimos grandes desembolsos iniciales: el esquema reconoce que estás precisamente en una situación de falta de liquidez, y los honorarios se estructuran dentro del plan de pagos acordado.</p>

<div class="tabla-wrap">
<table>
  <thead>
    <tr><th>Total de la deuda</th><th>Honorarios de referencia (10% base)</th></tr>
  </thead>
  <tbody>
    <tr><td>$60.000.000</td><td>$6.000.000</td></tr>
    <tr><td>$80.000.000</td><td>$8.000.000</td></tr>
    <tr><td>$100.000.000</td><td>$10.000.000</td></tr>
    <tr><td>$120.000.000</td><td>$12.000.000</td></tr>
    <tr><td>$150.000.000</td><td>$15.000.000</td></tr>
  </tbody>
</table>
</div>

<p>Son valores de referencia calculados sobre el 10% base. El porcentaje aplicable a tu caso se define en la consulta inicial, que no tiene costo.</p>

<h2>Cuánto dura el proceso</h2>

<p>El artículo 544 fija un término concreto: <strong>60 días</strong> contados desde que queda en firme la aceptación de la solicitud. Puede prorrogarse por 30 días más a solicitud conjunta del deudor y de los acreedores con quienes ya se conciliaron definitivamente sus derechos; tratándose de deudor comerciante, hasta 90 días adicionales con voto favorable de la mayoría.</p>

<p>Ese término se suspende mientras la jurisdicción ordinaria civil resuelve controversias, y también durante la vacancia judicial. Antes, el artículo 543 obliga a fijar la audiencia de negociación <strong>dentro de los diez (10) días siguientes a la aceptación</strong>.</p>

<h2>Qué NO cubre la ley</h2>

<p>Ser claro con los límites evita expectativas que después no se cumplen.</p>

<ul>
  <li><strong>Obligaciones alimentarias.</strong> Quedan excluidas de la suspensión de descuentos (art. 545 num. 2) y sus saldos insolutos no mutan a obligaciones naturales (art. 571 num. 1).</li>
  <li><strong>Si ocultaste información.</strong> El artículo 571 niega la conversión a obligaciones naturales a quien omitió dolosamente información relevante sobre ingresos, bienes o créditos, la ocultó o simuló, o deterioró con dolo o culpa grave los activos a adjudicar.</li>
  <li><strong>Controlantes de sociedades en insolvencia empresarial.</strong> Se rigen por la Ley 1116 de 2006 (art. 532, par. 1).</li>
  <li><strong>Volver a empezar de inmediato.</strong> El artículo 574 impone plazos de espera: 5 años tras cumplir un acuerdo, 10 años para quien se benefició de la conversión a obligaciones naturales, y 15 años para quien tuvo ese beneficio negado.</li>
  <li><strong>Borrar automáticamente el reporte en centrales de riesgo.</strong> El proceso normaliza la deuda, pero la permanencia del dato negativo se rige por la Ley 1266 de 2008.</li>
</ul>

<h2>Ante quién se tramita</h2>

<p>El artículo 533 asigna la competencia a los <strong>centros de conciliación autorizados por el Ministerio de Justicia y del Derecho</strong> del domicilio del deudor, a través de conciliadores inscritos en sus listas, y a las <strong>notarías</strong> con conciliadores inscritos. Los abogados conciliadores no pueden conocer directamente: solo por designación del centro.</p>

<p>Conviene precisar un error frecuente: la Superintendencia de Sociedades <strong>no</strong> tramita la insolvencia de persona natural. Su competencia es la insolvencia empresarial de la Ley 1116 de 2006. Para la liquidación patrimonial y las controversias, el artículo 534 asigna competencia al juez civil municipal o del circuito según la cuantía.</p>

<p>Además, los centros y notarías con la infraestructura tecnológica adecuada tienen <strong>competencia nacional para tramitar virtualmente</strong>, cualquiera que sea el domicilio del deudor, incluso si reside en el exterior.</p>

<h2>Cómo iniciar el proceso</h2>

<p>El artículo 539 exige que la solicitud la presente directamente el deudor e incluya diez elementos: el informe de causas de la cesación de pagos, la propuesta de negociación, la relación completa de acreedores en orden de prelación, la relación detallada de bienes con sus gravámenes, los procesos en curso, la certificación de ingresos, los recursos disponibles tras gastos de subsistencia, la información sobre sociedad conyugal, la discriminación de obligaciones alimentarias con certificado del REDAM y, si es pequeño comerciante, la constancia de matrícula mercantil.</p>

<p>Todo se entiende rendido bajo la gravedad del juramento. Un inventario impreciso o una propuesta inviable llevan al rechazo, y con él a perder la protección que ya se había activado. Por eso conviene asesoría especializada desde la preparación del expediente.</p>

<p>En Deuda OFF evaluamos tu situación sin costo: verificamos si cumples los presupuestos del artículo 538, qué obligaciones puedes incluir y cuál sería tu capacidad real de pago. Más de 750 casos resueltos desde 2020, con atención 100% virtual en todo el país.</p>

<p>La insolvencia no es un fracaso personal: es el mecanismo que la ley colombiana diseñó para que quien sufrió un quebranto económico vuelva a la actividad productiva.</p>
    `,
  },
  {
    slug: 'proceso-insolvencia-persona-natural-paso-a-paso',
    title: 'Proceso de Insolvencia Persona Natural: Guía Paso a Paso 2026',
    description: 'Conoce cada etapa del proceso de insolvencia de persona natural en Colombia: desde el diagnóstico inicial hasta el fresh start. Tiempos, costos y qué esperar.',
    date: '2026-04-15',
    dateModified: '2026-07-29',
    category: 'Guías',
    readTime: '7 min',
    about: ['Proceso de insolvencia persona natural', 'Negociación de deudas Colombia', 'Ley 2445 de 2025'],
    mentions: ['Superintendencia de Sociedades', 'Ministerio de Justicia Colombia', 'Centros de Conciliación Colombia'],
    content: `
<p class="definicion"><strong>Respuesta directa:</strong> El proceso de insolvencia de persona natural en Colombia tiene 6 etapas: (1) diagnóstico gratuito, (2) recopilación de documentos y radicación, (3) notificación a acreedores, (4) audiencia de negociación, (5) ejecución del acuerdo y (6) extinción de deudas. Desde la radicación, tienes protección legal inmediata contra embargos y cobros coercitivos.</p>

<p class="pilar-link">📘 <strong>Guía normativa:</strong> consulta la <a href="/blog/ley-2445-de-2025-insolvencia-colombia">guía completa de la Ley 2445 de 2025</a>, con el articulado citado: requisitos del artículo 538, efectos del artículo 545, gratuidad del artículo 535 y duración del artículo 544.</p>

<p>El proceso de insolvencia de persona natural bajo la Ley 2445 de 2025 está diseñado para ser claro y predecible. A continuación, cada etapa con sus tiempos y efectos concretos.</p>

<h2>Paso 1: Diagnóstico financiero gratuito</h2>

<p>Todo comienza con una consulta sin costo. Un abogado especializado revisará contigo:</p>

<ul>
  <li>El listado completo de tus deudas (montos, acreedores, estado de mora).</li>
  <li>Tus ingresos actuales y capacidad de pago real.</li>
  <li>Si aplicas para reorganización o liquidación patrimonial.</li>
  <li>Una estimación de la cuota mensual bajo un acuerdo.</li>
</ul>

<p>Esta etapa es confidencial y está protegida por el secreto profesional.</p>

<h2>Paso 2: Recopilación de documentos y radicación</h2>

<p>Con la elegibilidad confirmada, se recopilan los documentos necesarios:</p>

<ul>
  <li>Cédula de ciudadanía vigente.</li>
  <li>Certificados laborales o constancias de ingresos de los últimos 3 meses.</li>
  <li>Extractos bancarios recientes.</li>
  <li>Documentos de las deudas (extractos, cartas de cobro, contratos).</li>
  <li>Inventario de bienes (vivienda, vehículos, cuentas).</li>
</ul>

<p>El abogado elabora la solicitud formal y la radica ante un <strong>Centro de Conciliación autorizado por el Ministerio de Justicia</strong> o ante la Superintendencia de Sociedades.</p>

<p><strong>Efecto inmediato:</strong> desde la radicación, todos los procesos ejecutivos, embargos y cobros coercitivos quedan suspendidos por mandato de ley.</p>

<h2>Paso 3: Notificación oficial a los acreedores</h2>

<p>El conciliador o juez notifica a todos tus acreedores. Las agencias de cobranza deben cesar toda presión. Se convoca la audiencia de conciliación.</p>

<h2>Paso 4: Audiencia de negociación y propuesta de acuerdo</h2>

<p>En la audiencia presentas una <strong>propuesta de pago</strong> ajustada a tu capacidad económica real. Tu abogado te acompaña en toda la negociación. Si la mayoría de los acreedores (en valor de deuda) aprueba el acuerdo, este se vuelve obligatorio para <em>todos</em>, incluidos los que votaron en contra.</p>

<h2>Paso 5: Ejecución del acuerdo</h2>

<p>Con el acuerdo aprobado, pagas la cuota mensual pactada. Los acreedores no pueden cobrar montos adicionales a los acordados. Tu abogado monitorea el cumplimiento.</p>

<h2>Paso 6: Fresh Start — deudas extinguidas legalmente</h2>

<p>Al cumplir el plan de pagos, las deudas incluidas quedan <strong>legalmente extintas</strong>. Recibes certificación legal y puedes comenzar tu nueva vida financiera.</p>

<h2>¿Cuánto tiempo tarda el proceso?</h2>

<ul>
  <li><strong>Preparación y radicación:</strong> 2 a 4 semanas.</li>
  <li><strong>Audiencia de conciliación:</strong> 1 a 3 meses desde la radicación.</li>
  <li><strong>Ejecución del acuerdo:</strong> 1 a 5 años (según el plan pactado).</li>
</ul>

<p>La protección legal aplica desde la radicación — no hay que esperar la audiencia para que los embargos se suspendan.</p>

<h2>¿Cuánto cuesta?</h2>

<p>La primera consulta es completamente gratuita. Los honorarios se pactan según las características del caso, generalmente como porcentaje del valor de las deudas o cuota mensual incluida dentro del plan de pagos. En Deuda OFF nunca pedimos grandes sumas por adelantado. <strong>Más de 750 colombianos han resuelto sus deudas con nosotros desde 2020.</strong></p>
    `,
  },
  {
    slug: 'requisitos-insolvencia-persona-natural-colombia',
    title: 'Requisitos para Acogerte a la Insolvencia de Persona Natural en Colombia',
    description: '¿Cumples los requisitos para la insolvencia de persona natural? Conoce quién puede aplicar, qué documentos necesitas y qué deudas se pueden incluir.',
    date: '2026-04-20',
    dateModified: '2026-07-29',
    category: 'Guías',
    readTime: '6 min',
    about: ['Requisitos insolvencia persona natural Colombia', 'Ley 2445 de 2025', 'Elegibilidad insolvencia Colombia'],
    mentions: ['Superintendencia de Sociedades', 'Registro Mercantil Colombia', 'DIAN Colombia'],
    content: `
<p class="definicion"><strong>Respuesta directa:</strong> Pueden acogerse a la insolvencia de persona natural en Colombia las personas naturales no comerciantes que no pueden pagar sus deudas con al menos dos acreedores diferentes. No se requiere un monto mínimo de deuda específico bajo la Ley 2445 de 2025, y el proceso aplica para empleados, independientes, pensionados y desempleados con bienes.</p>

<p class="pilar-link">📘 <strong>Los requisitos exactos, con la norma citada:</strong> el artículo 538 del CGP —modificado por la Ley 2445 de 2025— exige mora de más de 90 días con dos o más acreedores y que las obligaciones representen al menos el 30% del pasivo total. Ver la <a href="/blog/ley-2445-de-2025-insolvencia-colombia">guía completa de la Ley 2445 de 2025</a>.</p>

<p>La mayoría de colombianos con deudas que no pueden pagar califican para el proceso. A continuación, los criterios exactos de elegibilidad y los documentos necesarios.</p>

<h2>¿Quién puede acogerse a la insolvencia de persona natural?</h2>

<p>El proceso aplica para <strong>personas naturales no comerciantes</strong>, incluyendo:</p>

<ul>
  <li>Empleados con contrato laboral (fijo o indefinido).</li>
  <li>Trabajadores independientes o por prestación de servicios.</li>
  <li>Pensionados o personas con ingresos fijos por rentas.</li>
  <li>Desempleados con bienes o en búsqueda activa de trabajo.</li>
  <li>Amas de casa con deudas adquiridas en nombre propio.</li>
</ul>

<p><strong>No aplica para:</strong> comerciantes inscritos en el Registro Mercantil (tienen un régimen de insolvencia empresarial separado). Si tienes negocio pero no está registrado como empresa, probablemente sí aplicas — consúltalo.</p>

<h2>Condiciones de elegibilidad</h2>

<ul>
  <li><strong>Incumplimiento actual:</strong> más de 90 días sin poder pagar al menos dos deudas con diferentes acreedores.</li>
  <li><strong>Incumplimiento inminente:</strong> puedes demostrar que en los próximos meses no podrás seguir pagando.</li>
  <li><strong>Sobreendeudamiento:</strong> el total de tus deudas supera significativamente tu capacidad de pago, aunque aún no estés en mora.</li>
</ul>

<h2>Documentos que necesitas</h2>

<ul>
  <li>Cédula de ciudadanía vigente.</li>
  <li>Comprobantes de ingresos: desprendibles de nómina, certificado laboral, extractos bancarios de los últimos 3 meses.</li>
  <li>Listado de todas las deudas con sus montos y estados de cuenta.</li>
  <li>Inventario de bienes: escrituras o impuesto predial de inmuebles, tarjeta de propiedad de vehículos, cuentas bancarias.</li>
  <li>Registro civil de matrimonio o declaración de unión marital, si aplica.</li>
</ul>

<h2>¿Qué deudas se pueden incluir?</h2>

<ul>
  <li>Créditos bancarios (consumo, libre inversión, hipotecarios).</li>
  <li>Tarjetas de crédito.</li>
  <li>Créditos con cooperativas y cajas de compensación.</li>
  <li>Microcréditos (Rapicredit, Juancho te presta, etc.).</li>
  <li>Créditos vehiculares.</li>
  <li>Deudas cedidas a empresas de gestión de cartera.</li>
  <li>Obligaciones con personas naturales (préstamos entre conocidos).</li>
</ul>

<h2>¿Qué deudas NO se pueden incluir?</h2>

<ul>
  <li><strong>Cuotas alimentarias</strong> (obligaciones de alimentos a hijos o cónyuge).</li>
  <li>Multas y sanciones impuestas por autoridades judiciales o administrativas.</li>
  <li>Obligaciones tributarias con la DIAN (tienen sus propios mecanismos de alivio).</li>
</ul>

<h2>¿Cuántas deudas mínimo necesitas?</h2>

<p>En general, el proceso requiere <strong>al menos dos acreedores diferentes</strong>. Si debes exclusivamente a un solo banco o entidad, existen otras alternativas que también podemos explorar.</p>

<h2>¿Y si ya tengo un embargo activo?</h2>

<p>Puedes iniciar el proceso aunque ya tengas embargos activos. Una vez radicada la solicitud, los embargos quedan <strong>suspendidos por ley</strong>. Actuar rápido puede salvar tu patrimonio antes de que el embargo se consolide.</p>

<blockquote>Si dudas si calificas, la única manera de saberlo con certeza es a través de una consulta con un especialista. En Deuda OFF la primera evaluación es completamente gratuita y sin compromiso.</blockquote>
    `,
  },
  {
    slug: 'que-pasa-si-no-pago-mis-deudas-colombia',
    title: '¿Qué Pasa si No Pago Mis Deudas en Colombia? Consecuencias y Salida Legal',
    description: 'Conoce las consecuencias reales de no pagar deudas en Colombia: reportes en centrales de riesgo, embargos, procesos judiciales — y cómo evitarlos legalmente.',
    date: '2026-04-25',
    dateModified: '2026-05-01',
    category: 'Educación Financiera',
    readTime: '6 min',
    about: ['Consecuencias no pagar deudas Colombia', 'Embargo de salario Colombia', 'Datacrédito Colombia'],
    mentions: ['Datacrédito TransUnion Colombia', 'Cifin Experian Colombia', 'Superintendencia de Industria y Comercio'],
    content: `
<p class="definicion"><strong>Respuesta directa:</strong> Si no pagas tus deudas en Colombia, las consecuencias progresan en 5 fases: (1) llamadas de cobranza, (2) reporte a Datacrédito y Cifin, (3) cesión de cartera a empresa cobradora, (4) demanda ejecutiva ante juzgado civil y (5) embargo de salario, cuentas o bienes. Este proceso puede tomar de 6 a 18 meses. La salida legal es acogerse al proceso de insolvencia de persona natural bajo la <a href="/blog/ley-2445-de-2025-insolvencia-colombia">Ley 2445 de 2025</a>.</p>

<p>Si estás considerando simplemente dejar de pagar y esperar que pase, este artículo te explica exactamente lo que ocurre en Colombia — y por qué existe una alternativa legal mucho mejor.</p>

<h2>Fase 1: Llamadas y mensajes (0 a 30 días)</h2>

<p>Al dejar de pagar, el banco activa sus protocolos de cobranza. En los primeros días recibirás llamadas automáticas, mensajes de texto y correos recordatorios. Los intereses moratorios comienzan a acumularse — en Colombia pueden superar el 30% efectivo anual en algunas entidades.</p>

<h2>Fase 2: Reporte a centrales de riesgo (30 a 90 días)</h2>

<p>Entre los 30 y 60 días de mora, la entidad te reporta a <strong>Datacrédito (TransUnion)</strong> y <strong>Cifin (Experian)</strong>. Las consecuencias son inmediatas:</p>

<ul>
  <li>Quedarás clasificado como deudor moroso en tu historial crediticio.</li>
  <li>No podrás acceder a nuevos créditos, arrendamientos ni financiaciones.</li>
  <li>Algunos empleadores consultan el historial antes de contratar.</li>
</ul>

<p>El reporte permanece en tu historial durante el doble del tiempo que duró la mora (máximo 8 años), incluso si pagas después.</p>

<h2>Fase 3: Cesión a empresa cobradora (3 a 6 meses)</h2>

<p>Sin respuesta del deudor, el banco vende o cede la cartera a empresas de gestión de cobranza, que son más agresivas: llamadas frecuentes, contacto con referencias y ofertas de acuerdos que generalmente no son convenientes. Estas empresas <strong>no pueden amenazarte, insultarte ni contactar a tus familiares</strong> para presionarte — hacerlo es ilegal y denunciable ante la SIC (Superintendencia de Industria y Comercio).</p>

<h2>Fase 4: Demanda ejecutiva ante juzgado civil (6 a 18 meses)</h2>

<p>Si la deuda es significativa, el acreedor puede interponer una demanda ejecutiva. Las etapas son:</p>

<ol>
  <li>El juzgado admite la demanda y notifica al deudor.</li>
  <li>El deudor tiene plazo para pagar o proponer un acuerdo.</li>
  <li>Si no hay respuesta, el juzgado dicta mandamiento de pago.</li>
  <li>Se ordenan medidas cautelares: embargo de cuentas, salario o bienes.</li>
</ol>

<h2>Fase 5: Embargo — el punto más crítico</h2>

<p>En Colombia pueden embargar:</p>

<ul>
  <li><strong>Tu salario:</strong> hasta el 50% del monto que excede el salario mínimo legal.</li>
  <li><strong>Tus cuentas bancarias:</strong> el dinero depositado queda congelado.</li>
  <li><strong>Bienes inmuebles:</strong> tu casa puede ser embargada y rematada.</li>
  <li><strong>Vehículos:</strong> pueden ser inmovilizados y subastados.</li>
</ul>

<h2>La salida legal: acogerte a la insolvencia ANTES de llegar a esto</h2>

<p>La diferencia entre quien enfrenta un embargo y quien logra un acuerdo manejable muchas veces es <strong>la velocidad de reacción</strong>. Al acogerse a la Ley 2445 de 2025:</p>

<ul>
  <li>Los embargos existentes se suspenden de inmediato desde la radicación.</li>
  <li>Los procesos judiciales se pausan.</li>
  <li>Negocias un acuerdo que puedes cumplir de verdad.</li>
  <li>Al finalizar, las deudas quedan extinguidas legalmente.</li>
</ul>

<blockquote>No esperes a que te embarguen. Cuanto antes actúes, más opciones tienes sobre la mesa. La primera consulta con Deuda OFF es gratuita y confidencial.</blockquote>
    `,
  },
  {
    slug: 'como-evitar-un-embargo-colombia',
    title: 'Cómo evitar un embargo en Colombia: qué pueden y qué NO pueden embargarte',
    description: 'Tu salario mínimo, tu vivienda familiar y tus enseres están protegidos por ley. Conoce los límites del embargo en Colombia y cómo frenarlo legalmente.',
    date: '2026-04-28',
    dateModified: '2026-05-01',
    category: 'Educación Financiera',
    readTime: '5 min',
    about: ['Embargo de bienes Colombia', 'Embargo de salario Colombia', 'Bienes inembargables Colombia'],
    mentions: ['Superintendencia de Sociedades', 'Código General del Proceso Colombia', 'Ministerio de Justicia Colombia'],
    content: `
<p class="definicion"><strong>Definición:</strong> Un embargo en Colombia es una medida cautelar ordenada por un juez civil que bloquea o retiene bienes del deudor para garantizar el pago de una deuda. No ocurre automáticamente por estar en mora — requiere un proceso judicial previo. El mecanismo legal más efectivo para evitar o suspender un embargo es el proceso de insolvencia de persona natural bajo la Ley 2445 de 2025.</p>

<p>El embargo es una de las consecuencias más temidas del sobreendeudamiento en Colombia. Pero hay buenas noticias: existen mecanismos legales para evitarlo — y la insolvencia de persona natural es el más poderoso.</p>

<h2>¿Cómo funciona el proceso de embargo en Colombia?</h2>

<p>Para que te puedan embargar, el acreedor debe:</p>

<ol>
  <li>Interponer una demanda ejecutiva ante un juzgado civil.</li>
  <li>Notificarte formalmente de la demanda.</li>
  <li>Esperar el proceso judicial (puede tomar meses).</li>
  <li>Obtener autorización judicial para las medidas cautelares.</li>
</ol>

<p>Esto significa que tienes tiempo para actuar antes de que el embargo se materialice.</p>

<h2>¿Qué pueden embargar en Colombia?</h2>

<ul>
  <li><strong>Salario:</strong> hasta el 50% del monto que excede el salario mínimo mensual legal vigente (SMMLV).</li>
  <li><strong>Cuentas de ahorros y corriente:</strong> saldos depositados en entidades financieras.</li>
  <li><strong>Bienes inmuebles:</strong> casas, apartamentos, lotes (pueden ser secuestrados y rematados).</li>
  <li><strong>Vehículos:</strong> pueden ser inmovilizados y embargados.</li>
  <li><strong>Derechos en sociedades:</strong> participaciones en empresas o negocios.</li>
</ul>

<h2>¿Qué NO pueden embargar? Bienes inembargables en Colombia</h2>

<ul>
  <li><strong>El salario mínimo completo:</strong> si ganas exactamente un SMMLV, no pueden descontarte nada por embargo de salario.</li>
  <li><strong>Vivienda de familia:</strong> si el inmueble tiene afectación a vivienda de familia registrada, está protegido de embargos por créditos distintos al hipotecario.</li>
  <li><strong>Utensilios de trabajo:</strong> herramientas o equipos necesarios para ganarte la vida.</li>
  <li><strong>Ropa y elementos básicos del hogar.</strong></li>
  <li><strong>Pensiones:</strong> las mesadas pensionales están parcialmente protegidas.</li>
</ul>

<h2>La insolvencia: el escudo legal más poderoso contra embargos</h2>

<p>Desde el momento en que se radica formalmente la solicitud de insolvencia ante el Centro de Conciliación autorizado por el Ministerio de Justicia o ante la Superintendencia de Sociedades, la ley activa una protección automática:</p>

<ul>
  <li>Cualquier embargo en curso queda suspendido de inmediato.</li>
  <li>No pueden iniciarse nuevos embargos mientras el proceso esté activo.</li>
  <li>Las demandas ejecutivas en trámite quedan paralizadas.</li>
</ul>

<h2>¿Ya tengo un embargo? Aún puedes actuar</h2>

<p>Si ya te embargaron el salario o una cuenta bancaria, todavía no es tarde. Al iniciar el proceso de insolvencia, el juez o conciliador puede ordenar la suspensión del embargo. <strong>Cada día sin actuar aumenta el riesgo de que el embargo se consolide.</strong></p>

<h2>Pasos concretos si temes un embargo</h2>

<ol>
  <li>Agenda una consulta gratuita con un abogado especializado en insolvencia.</li>
  <li>Evalúa si tienes los requisitos para iniciar el proceso formal.</li>
  <li>Radica la solicitud cuanto antes — la protección aplica desde ese momento.</li>
  <li>Notifica a tus acreedores sobre el proceso iniciado.</li>
</ol>

<p>Todo lo anterior se rige por <a href="/blog/ley-2445-de-2025-insolvencia-colombia">la nueva ley de insolvencia</a>, cuyos requisitos y efectos explicamos en detalle.</p>

<blockquote>En Deuda OFF hemos ayudado a más de 750 colombianos a proteger su salario, su casa y su tranquilidad desde 2020. La consulta inicial no tiene ningún costo.</blockquote>
    `,
  },
  {
    slug: 'acoso-de-cobranza-colombia-ley',
    title: '¿Hasta qué hora pueden llamarte a cobrar? Ley de acoso de cobranza en Colombia',
    description: 'Solo pueden llamarte de lunes a sábado, de 7 a.m. a 7 p.m., y no pueden contactar a tus familiares. Conoce tus derechos y cómo denunciar el acoso ante la SIC.',
    date: '2026-05-01',
    dateModified: '2026-05-01',
    category: 'Derechos del Deudor',
    readTime: '5 min',
    about: ['Acoso de cobranza Colombia', 'Derechos del deudor Colombia', 'Ley 1480 de 2011 Estatuto del Consumidor'],
    mentions: ['Superintendencia de Industria y Comercio SIC', 'Superintendencia Financiera Colombia', 'Defensoría del Consumidor Financiero Colombia'],
    content: `
<p class="definicion"><strong>Definición:</strong> El acoso de cobranza en Colombia ocurre cuando bancos, entidades financieras o empresas de gestión de cartera usan métodos prohibidos para presionar al deudor: llamadas fuera del horario permitido (lunes a sábado 7am–7pm), contacto con familiares para ejercer presión, amenazas o divulgación de la deuda a terceros. Estas prácticas son ilegales y sancionables por la Superintendencia de Industria y Comercio (SIC).</p>

<p>Llamadas a las 6 de la mañana, mensajes a tus familiares, amenazas veladas. El acoso cobratorio es una realidad que viven miles de colombianos endeudados — y es también una violación de derechos sancionada por ley.</p>

<h2>Lo que la ley colombiana prohíbe a los cobradores</h2>

<p>El <strong>Estatuto del Consumidor (Ley 1480 de 2011)</strong> y las circulares de la Superintendencia de Industria y Comercio (SIC) establecen prohibiciones concretas:</p>

<ul>
  <li><strong>Llamadas en horarios no permitidos:</strong> solo pueden llamarte de lunes a sábado entre las 7:00 a.m. y las 7:00 p.m. Domingos y festivos están prohibidos.</li>
  <li><strong>Contactar a terceros para presionarte:</strong> no pueden llamar a familiares, amigos, vecinos o compañeros de trabajo para informarles de tu deuda.</li>
  <li><strong>Amenazas e intimidación:</strong> no pueden amenazarte con acciones que no tienen facultad de ejecutar.</li>
  <li><strong>Divulgar tu deuda a terceros:</strong> tu situación financiera es información privada.</li>
  <li><strong>Hostigamiento telefónico:</strong> múltiples llamadas al día con fines de presión están prohibidas.</li>
  <li><strong>Visitas intimidatorias al trabajo:</strong> las visitas que generen presión pública son ilegales.</li>
</ul>

<h2>Lo que sí pueden hacer legalmente</h2>

<ul>
  <li>Contactarte en horarios permitidos para informarte del estado de la deuda.</li>
  <li>Ofrecerte acuerdos de pago o refinanciación.</li>
  <li>Reportarte a Datacrédito (TransUnion) y Cifin (Experian).</li>
  <li>Iniciar un proceso judicial ejecutivo para cobrar la deuda.</li>
  <li>Enviarte comunicaciones escritas o por correo electrónico.</li>
</ul>

<h2>Cómo denunciar el acoso ante la SIC</h2>

<ol>
  <li><strong>SIC (Superintendencia de Industria y Comercio):</strong> queja en línea en el portal de la SIC. Es gratuito y puedes hacerlo sin abogado. La SIC puede imponer multas significativas a las entidades infractoras.</li>
  <li><strong>Superintendencia Financiera de Colombia:</strong> si es un banco o compañía de financiamiento.</li>
  <li><strong>Defensoría del Consumidor Financiero:</strong> cada entidad financiera debe tener uno; es de libre acceso.</li>
</ol>

<p>Guarda evidencias: capturas de pantalla de mensajes, registros de llamadas con fecha y hora. En Colombia es legal grabar llamadas en las que participas.</p>

<h2>La solución definitiva: el proceso de insolvencia</h2>

<p>Una denuncia ante la SIC puede frenar el acoso temporalmente, pero la deuda sigue creciendo. El <strong>proceso de insolvencia de persona natural bajo la Ley 2445 de 2025</strong> resuelve ambos problemas a la vez:</p>

<ul>
  <li>El acoso cobratorio cesa desde la radicación, por mandato legal — no por buena voluntad del cobrador.</li>
  <li>Negocias la deuda a condiciones que puedas cumplir.</li>
  <li>Al finalizar el acuerdo, las deudas quedan extintas.</li>
</ul>

<p>Si quieres el detalle normativo, revisa nuestra guía sobre la <a href="/blog/ley-2445-de-2025-insolvencia-colombia">ley de insolvencia en Colombia</a>, con el articulado citado.</p>

<blockquote>No tienes que aguantar el acoso. Tienes derechos como deudor y la ley colombiana te protege. En Deuda OFF te explicamos cómo ejercerlos sin costo en tu primera consulta.</blockquote>
    `,
  },
  {
    slug: 'deudas-cooperativas-insolvencia-colombia',
    title: 'Deudas con cooperativas en Colombia: ¿se pueden incluir en insolvencia?',
    description: 'Sí, las deudas con cooperativas de ahorro y crédito pueden incluirse en el proceso de insolvencia de persona natural. Te explicamos cómo funciona y qué condiciones aplican bajo la Ley 2445 de 2025.',
    date: '2026-05-01',
    dateModified: '2026-05-01',
    category: 'Guías',
    readTime: '6 min',
    about: ['Deudas cooperativas insolvencia', 'Insolvencia persona natural Colombia', 'Ley 2445 de 2025'],
    mentions: ['Superintendencia de la Economía Solidaria', 'Superintendencia de Sociedades', 'Ministerio de Justicia Colombia', 'Núcleo Jurídico SAS'],
    content: `
<p class="definicion"><strong>Respuesta directa:</strong> Sí. Las deudas con cooperativas de ahorro y crédito pueden incluirse en el proceso de insolvencia de persona natural bajo la Ley 2445 de 2025, siempre que la cooperativa actúe como tu acreedor financiero. Esto significa que los intereses se congelan, el cobro coercitivo se suspende y la deuda entra en la negociación colectiva.</p>

<p>Muchos colombianos tienen deudas con cooperativas y creen erróneamente que el proceso de insolvencia no aplica para ellas. La realidad es que las cooperativas de ahorro y crédito están incluidas en el régimen legal de insolvencia de persona natural, y sus deudas se tratan de la misma forma que las deudas bancarias.</p>

<h2>¿Qué tipos de deudas con cooperativas se pueden incluir?</h2>

<p>Las deudas con cooperativas que pueden ingresar al proceso de insolvencia incluyen:</p>

<ul>
  <li><strong>Créditos de consumo:</strong> préstamos personales otorgados por la cooperativa.</li>
  <li><strong>Créditos de libre inversión:</strong> montos desembolsados sin destinación específica.</li>
  <li><strong>Créditos de vivienda:</strong> financiaciones para compra o mejora de inmueble.</li>
  <li><strong>Créditos solidarios o de emergencia:</strong> préstamos especiales para asociados en dificultad.</li>
  <li><strong>Líneas de crédito rotativo:</strong> similares a tarjetas de crédito que ofrecen algunas cooperativas.</li>
</ul>

<p>Lo que <strong>no puede incluirse</strong> en insolvencia son las cuotas de sostenimiento o aportes sociales a la cooperativa como entidad asociativa — esos son obligaciones de membresía, no deudas financieras.</p>

<h2>¿Qué pasa con mis ahorros en la cooperativa durante el proceso?</h2>

<p>Este es el punto que más genera dudas. Cuando tienes una deuda con una cooperativa y también tienes ahorros depositados en ella, la cooperativa puede haber retenido o embargado esos ahorros como garantía. Al iniciar el proceso de insolvencia:</p>

<ul>
  <li>Los embargos sobre tus ahorros en la cooperativa quedan suspendidos desde la radicación.</li>
  <li>La retención previa de ahorros que ya ocurrió antes de la radicación es más compleja y depende del momento exacto y los estatutos de la cooperativa.</li>
  <li>Tu abogado puede evaluar si existe compensación indebida y cómo reclamarla dentro del proceso.</li>
</ul>

<h2>¿Las cooperativas asisten a la audiencia de negociación?</h2>

<p>Sí. La Ley 2445 de 2025 obliga a todos los acreedores incluidos en el proceso — incluyendo cooperativas — a participar en la audiencia de conciliación. Si la mayoría de los acreedores (en valor de deuda) aprueba el acuerdo, este es obligatorio para todos, incluyendo la cooperativa, aunque esta haya votado en contra.</p>

<p>En la práctica, las cooperativas suelen ser más flexibles que los bancos en la negociación, porque sus estructuras internas las incentivan a llegar a acuerdos que protejan a sus asociados.</p>

<h2>¿Qué ocurre con mi membresía en la cooperativa?</h2>

<p>El proceso de insolvencia no cancela automáticamente tu condición de asociado. Sin embargo, algunos estatutos cooperativos prevén la exclusión por mora grave. Tu abogado puede revisar los estatutos específicos de tu cooperativa y asesorarte sobre cómo proteger tu membresía durante el proceso.</p>

<h2>Cooperativas más comunes en procesos de insolvencia en Colombia</h2>

<p>Entre las cooperativas cuyos asociados acuden frecuentemente al proceso de insolvencia están Cotrafa, Coogranada, Coofinanacoop, JFK Cooperativa, Fincomercio, entre otras. Todas ellas participan regularmente en procesos de negociación de deudas ante los Centros de Conciliación autorizados por el Ministerio de Justicia y la Superintendencia de Sociedades.</p>

<h2>Pasos para incluir una deuda cooperativa en insolvencia</h2>

<ol>
  <li><strong>Diagnóstico:</strong> identifica el saldo exacto de tu deuda con la cooperativa a la fecha de solicitud. Solicita un extracto actualizado.</li>
  <li><strong>Listado de acreedores:</strong> tu abogado elabora el inventario completo de deudas — bancos, cooperativas, personas naturales, etc.</li>
  <li><strong>Radicación:</strong> se presenta la solicitud formal ante el Centro de Conciliación. Desde este momento, la cooperativa no puede seguir cobrando ni embargando.</li>
  <li><strong>Audiencia de negociación:</strong> la cooperativa recibe citación oficial y debe asistir o designar apoderado.</li>
  <li><strong>Acuerdo:</strong> se pactan las nuevas condiciones de pago con todos los acreedores simultáneamente.</li>
</ol>

<p>Para entender el alcance completo de <a href="/blog/ley-2445-de-2025-insolvencia-colombia">el régimen de insolvencia vigente</a>, consulta nuestra guía de la Ley 2445 de 2025.</p>

<blockquote>Si tienes deudas con cooperativas y estás siendo presionado para pagar, la insolvencia de persona natural te da protección legal inmediata desde el primer día. No es necesario esperar a que te embargen para actuar.</blockquote>
    `,
  },
  {
    slug: 'deudas-bancarias-insolvencia-davivienda-bancolombia',
    title: 'Deudas con Davivienda, Bancolombia o Banco de Bogotá: cómo funciona la insolvencia',
    description: 'Los bancos son los principales acreedores en los procesos de insolvencia. Aprende cómo se negocian créditos hipotecarios, tarjetas y préstamos de consumo bancario bajo la Ley 2445 de 2025.',
    date: '2026-05-01',
    dateModified: '2026-05-01',
    category: 'Guías',
    readTime: '7 min',
    about: ['Deudas bancarias insolvencia Colombia', 'Negociación con bancos insolvencia', 'Ley 2445 de 2025'],
    mentions: ['Davivienda', 'Bancolombia', 'Banco de Bogotá', 'Superintendencia Financiera de Colombia', 'Superintendencia de Sociedades'],
    content: `
<p class="definicion"><strong>Respuesta directa:</strong> Las deudas con bancos como Davivienda, Bancolombia o Banco de Bogotá se pueden incluir en el proceso de insolvencia de persona natural bajo la <a href="/blog/ley-2445-de-2025-insolvencia-colombia">Ley 2445 de 2025</a>. Esto incluye tarjetas de crédito, créditos de consumo, préstamos de libre inversión y créditos hipotecarios. Desde la radicación, los bancos no pueden seguir cobrando ni ejecutar nuevos embargos.</p>

<p>Los bancos son el tipo de acreedor más frecuente en los procesos de insolvencia en Colombia. Davivienda, Bancolombia, Banco de Bogotá, BBVA, Scotiabank Colpatria y otros participan regularmente en audiencias de negociación ante la Superintendencia de Sociedades y Centros de Conciliación autorizados por el Ministerio de Justicia.</p>

<h2>¿Qué deudas bancarias se pueden incluir?</h2>

<ul>
  <li><strong>Tarjetas de crédito:</strong> saldo total a la fecha de radicación, incluyendo capital, intereses corrientes y mora. Los intereses futuros se congelan.</li>
  <li><strong>Créditos de libre inversión:</strong> préstamos personales sin destinación específica.</li>
  <li><strong>Créditos de consumo:</strong> incluyendo créditos para electrodomésticos, vehículos (si no tienen prenda activa) y educación.</li>
  <li><strong>Créditos hipotecarios:</strong> pueden incluirse; esto no significa que pierdas tu vivienda — significa que la deuda entra a negociarse.</li>
  <li><strong>Cartera cedida o vendida:</strong> si el banco vendió tu deuda a una empresa de cartera o agencia de cobro, esa empresa hereda la posición de acreedor y debe participar en el proceso.</li>
</ul>

<h2>¿Qué pasa con mi crédito hipotecario?</h2>

<p>Este es el punto más sensible para la mayoría de personas. Al incluir una hipoteca en el proceso de insolvencia:</p>

<ul>
  <li>El banco no puede iniciar ni continuar el proceso de remate de tu vivienda mientras el proceso esté activo.</li>
  <li>Puedes negociar un plan de pago ajustado a tu capacidad real, incluyendo una posible reducción de intereses de mora.</li>
  <li>Si tienes <em>afectación a vivienda de familia</em> registrada, tu inmueble tiene protecciones adicionales.</li>
  <li>Si la deuda hipotecaria es impagable incluso con acuerdo, existe la figura de dación en pago dentro del proceso, que te permite entregar el inmueble al banco y que la deuda quede saldada.</li>
</ul>

<h2>¿Cómo reaccionan los bancos ante el proceso?</h2>

<p>Los bancos grandes tienen apoderados legales especializados en procesos de insolvencia. En general:</p>

<ul>
  <li><strong>Participan en la audiencia</strong> a través de sus apoderados, generalmente sin presencia física del cliente bancario.</li>
  <li><strong>Evalúan el plan de pagos propuesto</strong> en función del saldo adeudado, la capacidad de pago demostrada y las garantías existentes.</li>
  <li><strong>Votan el acuerdo</strong> con base en el valor de su acreencia. Si su voto es positivo y suma mayoría, el acuerdo es aprobado.</li>
  <li>Si votan en contra pero la mayoría aprueba, el acuerdo igualmente les es oponible.</li>
</ul>

<p>En la práctica, bancos como Davivienda y Bancolombia tienen equipos de gestión de cartera que prefieren un acuerdo viable a un proceso de liquidación prolongado.</p>

<h2>¿Qué pasa con mi historial en Datacrédito durante el proceso?</h2>

<p>Al momento de radicar la solicitud de insolvencia, tu estado en Datacrédito y Cifin refleja la situación de insolvencia — esto es normal y esperado. Al cumplir el acuerdo y extinguir las deudas, la Ley 2445 de 2025 establece plazos para la normalización del historial. El proceso de insolvencia no te deja reportado indefinidamente: al finalizar, puedes reconstruir tu perfil crediticio.</p>

<h2>¿Qué pasa si el banco ya cedió mi deuda a una agencia de cobro?</h2>

<p>Si tu deuda fue vendida o cedida a una empresa de cartera (como Recuperaciones Universal, Cartera Activa u otras), esa empresa pasa a ser tu acreedor. Debes incluirla en el proceso de insolvencia, no al banco original. Tu abogado verificará quién tiene hoy la titularidad legal de cada deuda a través de la documentación requerida en la radicación.</p>

<h2>¿Puedo incluir deudas con varios bancos al mismo tiempo?</h2>

<p>Sí, y esa es precisamente una de las ventajas del proceso de insolvencia: todos los acreedores bancarios se negocian en <strong>una sola audiencia</strong>, de forma simultánea. No tienes que negociar con Davivienda, luego con Bancolombia, luego con Banco de Bogotá por separado. El conciliador convoca a todos al mismo tiempo, y el acuerdo que se logra aplica para todos.</p>

<blockquote>Los bancos hacen parte del sistema legal colombiano y deben respetar el proceso de insolvencia. Desde la radicación, ningún banco puede continuar cobros coercitivos, embargos ni procesos ejecutivos contra ti. Eso es un derecho constitucional.</blockquote>
    `,
  },
  {
    slug: 'rapicredit-prestamos-alto-costo-insolvencia',
    title: '¿Rapicredit puede embargar tu sueldo? Qué dice la ley colombiana',
    description: 'Rapicredit y los prestamistas de alto costo sí pueden iniciar cobro judicial, pero hay límites legales sobre tu salario. Conoce qué pueden embargar y cómo protegerte.',
    date: '2026-05-01',
    dateModified: '2026-05-01',
    category: 'Derechos del Deudor',
    readTime: '6 min',
    about: ['Rapicredit insolvencia', 'Préstamos alto costo Colombia', 'Acoso cobranza derechos deudor'],
    mentions: ['Rapicredit', 'Superintendencia de Industria y Comercio', 'Superintendencia de Sociedades', 'Defensoría del Consumidor Financiero'],
    content: `
<p class="definicion"><strong>Respuesta directa:</strong> Sí, los créditos de Rapicredit y otros prestamistas de alto costo pueden incluirse en el proceso de insolvencia de persona natural bajo la Ley 2445 de 2025. Desde la radicación, el acoso de cobranza cesa por mandato legal y los intereses de mora se congelan, sin importar la tasa que te estén cobrando.</p>

<p>En Colombia, los créditos de Rapicredit, FGA (Fondo de Garantías de Antioquia), Liberate, Lineru y empresas similares se han multiplicado en los últimos años. Ofrecen dinero rápido con tasas de interés muy elevadas, lo que puede convertir una deuda pequeña en una carga impagable en pocos meses. Muchos deudores terminan en un ciclo de refinanciación permanente.</p>

<h2>¿Qué son los préstamos de alto costo?</h2>

<p>Se consideran préstamos de alto costo aquellos cuya tasa de interés efectiva anual supera significativamente la tasa de usura certificada por la Superintendencia Financiera de Colombia. En Colombia, la tasa de usura se certifica mensualmente: cobrar por encima de ella es un delito penal.</p>

<p>Si alguna de tus deudas fue otorgada a una tasa que supera la tasa de usura vigente al momento del desembolso, tu abogado puede solicitar la reliquidación de esa deuda dentro del proceso de insolvencia, eliminando los intereses cobrados en exceso.</p>

<h2>¿Rapicredit puede participar en el proceso de insolvencia?</h2>

<p>Sí. Rapicredit es una entidad financiera regulada en Colombia. Al igual que cualquier otro acreedor, debe:</p>

<ul>
  <li>Recibir la notificación oficial del proceso de insolvencia.</li>
  <li>Presentarse a la audiencia de negociación o enviar apoderado.</li>
  <li>Acatar el acuerdo de pago que apruebe la mayoría de acreedores.</li>
  <li>Suspender inmediatamente cualquier cobro coercitivo desde la radicación.</li>
</ul>

<p>Si Rapicredit o cualquier empresa de cobro continúa llamándote o contactando a tus referencias después de la radicación del proceso, eso constituye una violación legal que puede denunciarse ante la Superintendencia de Industria y Comercio (SIC).</p>

<h2>El ciclo de la deuda de alto costo</h2>

<p>El problema con Rapicredit y similares no es solo la tasa: es la dinámica de refinanciación. Cuando no puedes pagar, te ofrecen "renovar" el crédito — pero cada renovación suma nuevos intereses y comisiones. En 6 meses, una deuda de $2 millones puede crecer a $6 o $7 millones sin que hayas recibido dinero nuevo.</p>

<p>El proceso de insolvencia interrumpe este ciclo definitivamente:</p>

<ul>
  <li>La deuda se congela a su valor a la fecha de radicación.</li>
  <li>No se acumulan más intereses de mora.</li>
  <li>Se negocia el saldo real, no el saldo inflado por refinanciaciones abusivas.</li>
</ul>

<h2>¿Qué pasa con los "gota a gota" y prestamistas informales?</h2>

<p>Los préstamos informales — conocidos como "gota a gota" — son ilegales en Colombia. Si tienes deudas con prestamistas informales, estas también pueden declararse en el proceso de insolvencia. Sin embargo, dado que estos créditos no tienen respaldo legal formal, la situación es más compleja y requiere asesoría especializada.</p>

<p>Lo más importante: si un "gota a gota" te amenaza o ejerce violencia o intimidación para cobrar, eso es un delito de extorsión. Debes denunciarlo ante la Fiscalía General de la Nación. El proceso de insolvencia no protege frente a amenazas penales, pero sí elimina la obligación civil de pagar esas deudas.</p>

<h2>Tus derechos frente al acoso de cobranza</h2>

<p>La Ley colombiana y la normativa de la SIC prohíben expresamente:</p>

<ul>
  <li>Llamar a tu trabajo o a tus familiares para cobrar.</li>
  <li>Enviarte mensajes amenazantes o humillantes.</li>
  <li>Llamarte más de 3 veces al día.</li>
  <li>Publicar información sobre tu deuda en redes sociales.</li>
  <li>Contactar a tus referencias personales con fines de presión.</li>
</ul>

<p>Si Rapicredit o cualquier empresa de cobro viola estas normas, puedes presentar queja ante la SIC en línea, de forma gratuita. La SIC puede imponer multas millonarias a las entidades infractoras.</p>

<h2>Cómo salir del ciclo definitivamente</h2>

<p>La denuncia ante la SIC es un remedio temporal. La solución definitiva es el proceso de insolvencia de persona natural, que:</p>

<ul>
  <li>Extingue legalmente la deuda al cumplir el acuerdo.</li>
  <li>Protege tu salario de embargos desde el primer día.</li>
  <li>Negocia todas tus deudas — bancos, cooperativas, Rapicredit — en un solo proceso.</li>
  <li>Te da un nuevo comienzo financiero respaldado por la ley.</li>
</ul>

<p>Todo lo anterior se rige por <a href="/blog/ley-2445-de-2025-insolvencia-colombia">la nueva ley de insolvencia</a>, cuyos requisitos y efectos explicamos en detalle.</p>

<blockquote>Si tienes deudas con Rapicredit u otros prestamistas de alto costo y el acoso no te deja vivir, tienes derechos. La Ley 2445 de 2025 fue diseñada exactamente para situaciones como la tuya. En Deuda OFF la primera consulta es gratuita.</blockquote>
    `,
  },
  {
    slug: 'insolvencia-pequeno-comerciante-colombia-2025',
    title: 'Insolvencia para pequeños comerciantes en Colombia: lo que cambió con la Ley 2445 de 2025',
    description: 'Desde 2025, los pequeños comerciantes en Colombia pueden acogerse al proceso de insolvencia. Descubre si calificas, qué activos se protegen y cómo funciona el proceso. Consulta gratuita.',
    date: '2026-05-01',
    dateModified: '2026-07-29',
    category: 'Legislación',
    readTime: '7 min',
    about: ['Insolvencia pequeño comerciante Colombia', 'Ley 2445 de 2025', 'Insolvencia persona natural comerciante'],
    mentions: ['Superintendencia de Sociedades', 'Ministerio de Justicia Colombia', 'DIAN', 'Núcleo Jurídico SAS'],
    content: `
<p class="definicion"><strong>Respuesta directa:</strong> Desde 2025, los pequeños comerciantes con activos totales menores a 1.000 SMMLV (aproximadamente $1.160 millones COP) pueden acogerse al proceso de insolvencia de persona natural bajo la Ley 2445 de 2025. Antes de esta ley, este segmento estaba completamente excluido. Si tienes un negocio pequeño con deudas que no puedes pagar, hoy tienes opciones legales que antes no existían.</p>

<p>Durante años, los comerciantes —tenderos, dueños de restaurantes, talleristas, microempresarios— quedaban en un limbo legal cuando sus negocios colapsaban: no podían acceder al régimen de insolvencia de persona natural (reservado para no comerciantes) ni al régimen empresarial (diseñado para sociedades formales y grandes empresas). La Ley 2445 de 2025 cerró esa brecha por primera vez en la historia jurídica colombiana.</p>

<h2>¿Qué es un pequeño comerciante según la Ley 2445?</h2>

<p>La ley define al pequeño comerciante como la persona natural que ejerce actividad mercantil de forma habitual y cuyos activos totales no superan los <strong>1.000 salarios mínimos mensuales legales vigentes</strong> (SMMLV). A 2025, esto equivale aproximadamente a $1.160 millones de pesos colombianos.</p>

<p>Para ese cálculo de activos se excluyen expresamente:</p>
<ul>
  <li>La vivienda de habitación principal (aunque sea de propiedad del comerciante).</li>
  <li>El vehículo de trabajo indispensable para la actividad económica (moto de domicilios, camión de carga, etc.).</li>
</ul>

<p>Esto significa que un tendero que tiene su local en arriendo y una moto para distribución puede calificar aunque su negocio tenga mercancía y equipos por valor considerable, siempre que el total —sin contar vivienda y vehículo— esté por debajo del límite.</p>

<p><strong>Ejemplos de pequeños comerciantes que pueden acceder:</strong></p>
<ul>
  <li>Tendero o propietario de minimercado.</li>
  <li>Dueño de restaurante, cafetería o negocio de comidas.</li>
  <li>Propietario de taller de mecánica, modistería o servicios técnicos.</li>
  <li>Vendedor informal con registro de actividad comercial.</li>
  <li>Microempresario o emprendedor con negocio unipersonal.</li>
</ul>

<h2>¿Cuáles son los requisitos para acogerse?</h2>

<p>Además de ser pequeño comerciante según la definición anterior, debes cumplir:</p>

<ul>
  <li><strong>Mora con dos o más acreedores</strong> por más de 90 días.</li>
  <li><strong>Deuda en mora igual o superior al 30%</strong> del total de tu pasivo.</li>
  <li>Ser persona natural —no una sociedad ni empresa constituida como persona jurídica.</li>
  <li>No tener en curso otro proceso de insolvencia activo.</li>
</ul>

<h3>¿Qué deudas cuentan?</h3>
<p>Pueden incluirse deudas con bancos, cooperativas de ahorro y crédito, proveedores de mercancía, obligaciones de leasing, créditos de fomento empresarial (Bancóldex, Fondo Nacional de Garantías), arrendamientos comerciales vencidos y deudas con personas naturales. Las cuotas alimentarias y ciertas obligaciones tributarias tienen restricciones específicas.</p>

<h3>¿Qué pasa con las deudas de la empresa vs. las personales?</h3>
<p>En una persona natural comerciante no hay separación patrimonial — el dueño responde con todo su patrimonio, tanto el del negocio como el personal. Eso significa que las deudas comerciales (con proveedores, arrendador del local) y las personales (tarjeta de crédito del banco, cooperativa) entran todas al mismo proceso de insolvencia.</p>

<h2>¿Qué procedimientos aplican para el pequeño comerciante?</h2>

<p>La Ley 2445 ofrece tres vías:</p>

<ul>
  <li><strong>Negociación de deudas:</strong> el camino más común. Un conciliador convoca a todos los acreedores, se propone un plan de pagos ajustado a la capacidad real y, si la mayoría aprueba, el acuerdo es obligatorio para todos.</li>
  <li><strong>Convalidación de acuerdo privado:</strong> si ya llegaste a un arreglo informal con tus acreedores, este procedimiento le da validez legal para que sea oponible a todos.</li>
  <li><strong>Liquidación patrimonial:</strong> cuando los activos no alcanzan para ningún acuerdo viable. Se liquida el patrimonio de forma ordenada y las deudas restantes quedan extinguidas.</li>
</ul>

<h3>¿Hay diferencias con el proceso de persona natural no comerciante?</h3>
<p>El procedimiento es sustancialmente el mismo. La principal diferencia es que el pequeño comerciante puede incluir deudas derivadas de su actividad mercantil (proveedores, arriendo comercial, leasing) que antes solo tenían acceso al régimen empresarial. Los plazos y la estructura de audiencias son equivalentes.</p>

<h2>Beneficios inmediatos al iniciar el proceso</h2>

<p>Desde el momento en que se radica la solicitud ante el Centro de Conciliación autorizado:</p>

<ul>
  <li><strong>Suspensión de embargos</strong> — incluyendo cuentas bancarias del negocio y personales.</li>
  <li><strong>Cese del acoso cobratorio</strong> — bancos, proveedores y agencias de cobro deben dejar de presionarte.</li>
  <li><strong>Protección frente a procesos ejecutivos</strong> — ningún acreedor puede iniciar ni continuar demandas de cobro.</li>
  <li><strong>Congelamiento de intereses de mora</strong> — la deuda no sigue creciendo.</li>
  <li>Puedes <strong>seguir operando tu negocio</strong>: el proceso no obliga a cerrarlo ni cancela tu matrícula mercantil. Eso sí, el parágrafo primero del artículo 543 dispone que al aceptarse la negociación de deudas de una persona natural comerciante se ordena su <strong>inscripción inmediata en el registro mercantil</strong> de la cámara de comercio del domicilio.</li>
</ul>

<h2>¿Cuánto tiempo tarda y cuánto cuesta?</h2>

<p>El artículo 544 fija un término legal de <strong>60 días</strong> contados desde que queda en firme la aceptación de la solicitud, prorrogable por 30 días más a solicitud conjunta del deudor y de los acreedores con derechos ya conciliados; tratándose de deudor comerciante, hasta 90 días adicionales con voto favorable de la mayoría. En la práctica, con la preparación previa y la gestión del conciliador, el proceso completo —desde diagnóstico hasta acuerdo firmado— suele tomar entre 3 y 6 meses.</p>

<p>Nuestros honorarios parten del <strong>10% del total de la deuda</strong>; ese porcentaje es la base y varía según las características de cada caso. Se estructuran dentro del mismo plan de pagos acordado. <strong>La primera consulta con Deuda OFF es completamente gratuita.</strong> El proceso es 100% virtual: no necesitas ir a ningún juzgado ni desplazarte.</p>

<h2>Caso tipo: Daniel, propietario de una papelería en Bogotá</h2>

<p>Daniel tiene una papelería y útiles escolares en el barrio Chapinero que abrió en 2019. Durante la pandemia acumuló deudas con su proveedor de papelería ($18 millones), un banco por crédito de capital de trabajo ($45 millones) y la cooperativa de su barrio ($22 millones). En total: $85 millones que no puede pagar con las ventas actuales.</p>

<p>Al acogerse al proceso de insolvencia bajo la Ley 2445 de 2025, Daniel logró suspender el embargo que el banco había iniciado sobre su cuenta corriente, y en la audiencia de negociación acordó pagar el 40% de su deuda total en cuotas mensuales durante 4 años —un monto compatible con sus ventas reales. Hoy su papelería sigue abierta y sus deudas están bajo control legal.</p>

<h2>Preguntas frecuentes del pequeño comerciante</h2>

<p><strong>¿Puedo seguir operando mi negocio durante el proceso?</strong><br/>Sí. El proceso de insolvencia no obliga a cerrar el negocio. Puedes continuar tu actividad comercial mientras se desarrolla la negociación con los acreedores.</p>

<p><strong>¿Los proveedores pueden demandarme mientras estoy en insolvencia?</strong><br/>No. Desde la radicación, queda suspendido cualquier proceso ejecutivo o de cobro contra ti, incluyendo demandas de proveedores. Si alguno intenta demandar, tu abogado puede solicitar la suspensión inmediata.</p>

<p><strong>¿Afecta el proceso a mi historial en centrales de riesgo?</strong><br/>Durante el proceso tu estado en Datacrédito refleja la situación de insolvencia. Al cumplir el acuerdo y extinguirse las deudas, el historial se actualiza. La Ley 2445 establece plazos razonables para la normalización.</p>

<p><strong>¿Puedo incluir deudas con la DIAN?</strong><br/>Las obligaciones tributarias tienen un tratamiento especial en insolvencia. Algunas pueden incluirse, otras tienen prioridad de pago garantizada por ley. Tu abogado debe revisar el estado exacto de tus obligaciones con la DIAN antes de la radicación.</p>

<p>Si quieres el detalle normativo, revisa nuestra guía sobre la <a href="/blog/ley-2445-de-2025-insolvencia-colombia">ley de insolvencia en Colombia</a>, con el articulado citado.</p>

<blockquote>Si tienes un negocio pequeño con deudas que no puedes pagar, la Ley 2445 de 2025 te reconoce por primera vez el mismo derecho que siempre tuvieron los asalariados: un proceso legal para reorganizar tus deudas y proteger tu patrimonio. En Deuda OFF — Núcleo Jurídico SAS, la primera consulta es gratuita.</blockquote>
    `,
  },
  {
    slug: 'insolvencia-familiar-conjunta-colombia-ley-2445',
    title: 'Insolvencia familiar conjunta en Colombia: cómo funciona y cuánto ahorran',
    description: '¿Tú y tu pareja tienen deudas? La Ley 2445 de 2025 permite iniciar el proceso de insolvencia en familia. El segundo proceso cuesta 50% menos. Consulta gratuita.',
    date: '2026-05-01',
    dateModified: '2026-07-29',
    category: 'Guías',
    readTime: '6 min',
    about: ['Insolvencia familiar conjunta Colombia', 'Insolvencia pareja Colombia', 'Ley 2445 de 2025'],
    mentions: ['Superintendencia de Sociedades', 'Ministerio de Justicia Colombia', 'Núcleo Jurídico SAS'],
    content: `
<p class="definicion"><strong>Respuesta directa:</strong> La Ley 2445 de 2025 introdujo por primera vez en Colombia la posibilidad de que cónyuges, compañeros permanentes y parientes hasta segundo grado de consanguineidad del mismo núcleo familiar inicien el proceso de insolvencia de forma conjunta. El segundo proceso cuesta el 50% del primero. Si tú y tu pareja tienen deudas que no pueden pagar, pueden acogerse juntos en una sola solicitud, con una sola audiencia y un solo acuerdo.</p>

<p>En muchos hogares colombianos las deudas no son de una sola persona: son del hogar. Un crédito de vivienda firmado por los dos, tarjetas de crédito individuales que pagaban con el mismo ingreso familiar, un negocio que ambos respaldaban como codeudores. La Ley 2445 reconoce esta realidad y crea un mecanismo legal diseñado específicamente para ella.</p>

<h2>¿Qué es la insolvencia familiar conjunta?</h2>

<p>Es la posibilidad de que dos o más miembros del mismo núcleo familiar presenten una sola solicitud de insolvencia, compartan la audiencia de negociación y lleguen a un acuerdo unificado con sus acreedores. Pueden solicitarla conjuntamente:</p>

<ul>
  <li><strong>Cónyuges</strong> — casados por lo civil o por matrimonio religioso con efectos civiles.</li>
  <li><strong>Compañeros permanentes</strong> — unión marital de hecho debidamente reconocida.</li>
  <li><strong>Parientes hasta segundo grado de consanguineidad del mismo núcleo familiar</strong> — padres e hijos, hermanos que conviven juntos.</li>
</ul>

<p>Requisito fundamental: cada miembro del grupo familiar debe cumplir <strong>individualmente</strong> los criterios de cesación de pagos (mora con dos o más acreedores por más de 90 días, deuda en mora ≥ 30% del pasivo total).</p>

<h2>¿Cuánto se ahorra con el proceso conjunto?</h2>

<p>El ahorro está en la ley. El artículo 539A dispone que, cuando un mismo conciliador tramita coordinadamente los casos de varios deudores del mismo núcleo familiar, <strong>el valor de sus servicios no podrá exceder del 50% adicional</strong> al que corresponda al caso de mayor pasivo y complejidad. Es decir: dos procesos no cuestan el doble.</p>

<p>Ejemplo numérico con nuestra tarifa. Si tú debes $80 millones y tu pareja $60 millones, los honorarios de Deuda OFF sobre el 10% base serían $8 millones y $6 millones por separado, es decir <strong>$14 millones</strong>. Tramitados de forma conjunta, el tope del artículo 539A aplicado a los servicios del conciliador reduce de forma significativa el costo total del trámite frente a llevarlos por separado.</p>

<p>El porcentaje concreto de honorarios se define en la consulta inicial y puede ser menor según las características de cada caso.</p>

<p>Además del ahorro económico, el proceso conjunto tiene ventajas operativas significativas:</p>
<ul>
  <li>Un solo conciliador gestiona ambos casos.</li>
  <li>Una sola audiencia con los acreedores comunes.</li>
  <li>Un solo acuerdo de pago que contempla la capacidad económica real del hogar como unidad.</li>
  <li>Menor carga administrativa y de documentación.</li>
</ul>

<h2>¿Cuándo conviene hacerlo de forma conjunta?</h2>

<h3>Cuando tienen acreedores en común</h3>
<p>Si ambos firmaron como titulares o codeudores de un crédito de vivienda, un préstamo vehicular o una tarjeta de crédito, ese acreedor será parte de ambos procesos. Gestionarlo de forma conjunta evita duplicar la negociación y asegura que el acuerdo sea consistente para los dos.</p>

<h3>Cuando los ingresos del hogar son insuficientes para los pagos de ambos</h3>
<p>Si el plan de pagos de cualquiera de los dos depende del ingreso conjunto del hogar, tiene sentido que el proceso refleje esa realidad económica. Un conciliador que ve los dos casos juntos puede diseñar un acuerdo más realista y sostenible.</p>

<h3>Cuando uno es fiador o codeudor del otro</h3>
<p>Si firmaste como codeudor de la deuda de tu pareja, eres legalmente responsable de esa obligación. Al incluirla en el proceso conjunto, ambos quedan protegidos por el acuerdo.</p>

<h3>Cuándo NO conviene hacerlo de forma conjunta</h3>
<p>Si uno de los dos tiene capacidad real de pago y el otro no, puede ser más eficiente que solo el que necesita protección inicie el proceso. Hacer un proceso innecesario puede afectar el historial crediticio del que sí podía pagar. En la consulta gratuita evaluamos cuál es la estrategia correcta para cada caso.</p>

<h2>¿Cómo funciona el proceso paso a paso para una familia?</h2>

<ol>
  <li><strong>Diagnóstico conjunto gratuito:</strong> revisamos la situación de cada uno, identificamos las deudas individuales y compartidas, y determinamos si ambos califican.</li>
  <li><strong>Revisión de elegibilidad individual:</strong> cada miembro debe cumplir independientemente los requisitos de cesación de pagos.</li>
  <li><strong>Preparación de la solicitud:</strong> inventario completo de activos, pasivos e ingresos del núcleo familiar.</li>
  <li><strong>Radicación única:</strong> se presenta una sola solicitud ante el Centro de Conciliación o la Superintendencia de Sociedades.</li>
  <li><strong>Audiencia conjunta:</strong> los acreedores de ambos son convocados a la misma audiencia. Los comunes negocian una sola vez.</li>
  <li><strong>Acuerdo unificado:</strong> se pactan condiciones de pago que reflejan la capacidad económica real del hogar.</li>
  <li><strong>Fresh start:</strong> al cumplir el acuerdo, las deudas de ambos quedan legalmente extintas.</li>
</ol>

<h2>¿Qué pasa con las deudas que son solo de uno?</h2>

<p>Las deudas que son exclusivamente de uno de los miembros van al proceso del titular. Los acreedores de esas deudas no pueden perseguir al otro cónyuge o compañero por obligaciones que no firmó. Las deudas compartidas se negocian en conjunto. El acuerdo final distingue claramente qué obligaciones corresponden a cada titular.</p>

<h2>Caso real: Claudia y Rodrigo, Medellín</h2>

<p>Claudia y Rodrigo llevan 8 años de unión marital de hecho. Entre los dos acumularon $160 millones en deudas: $95 millones en el crédito de vivienda que firmaron juntos, $38 millones en tarjetas individuales de cada uno, y $27 millones en un préstamo de libre inversión que Rodrigo usó para el negocio que después cerró.</p>

<p>Al iniciar el proceso de insolvencia familiar conjunta bajo la Ley 2445, lograron negociar las tres deudas en una sola audiencia. El banco del crédito hipotecario acordó una reestructuración a 10 años con cuota reducida. Las tarjetas se negociaron al 45% del saldo. Rodrigo quedó libre del préstamo a través de la liquidación de un activo del negocio cerrado. Total: un solo proceso, un solo acuerdo, y un ahorro del 25% en honorarios frente a hacerlo por separado.</p>

<h2>Preguntas frecuentes sobre insolvencia familiar</h2>

<p><strong>¿Qué pasa si estamos separados de hecho pero no de derecho?</strong><br/>La separación de hecho no disuelve la sociedad conyugal ni la unión marital. Si aún existe vínculo legal, pueden acceder al proceso conjunto. Si ya se formalizó la separación, cada uno debe iniciar su proceso individualmente.</p>

<p><strong>¿Pueden los hijos adultos incluirse en el proceso familiar?</strong><br/>Sí, si son parientes hasta segundo grado de consanguineidad del mismo núcleo familiar (esto incluye hijos que conviven con los padres) y cumplen individualmente los requisitos de cesación de pagos.</p>

<p><strong>¿El proceso afecta la custodia de menores de edad?</strong><br/>No. El proceso de insolvencia es un procedimiento civil-comercial que no tiene ninguna implicación sobre la custodia ni los derechos de los hijos menores. Las cuotas alimentarias tampoco pueden incluirse en el proceso.</p>

<p><strong>¿Podemos hacer el proceso si uno está reportado en Datacrédito y el otro no?</strong><br/>Sí. El estado en centrales de riesgo no es un requisito de elegibilidad para el proceso. Lo que determina si calificas es la situación de mora con los acreedores, no el reporte en Datacrédito.</p>

<p>Para entender el alcance completo de <a href="/blog/ley-2445-de-2025-insolvencia-colombia">el régimen de insolvencia vigente</a>, consulta nuestra guía de la Ley 2445 de 2025.</p>

<blockquote>Si en tu hogar las deudas superan la capacidad de pago de toda la familia, la insolvencia conjunta puede ser la salida más eficiente: un solo proceso, un solo acuerdo y un ahorro real en honorarios. En Deuda OFF la primera consulta es gratuita y sin compromiso.</blockquote>
    `,
  },
  {
    slug: 'como-salir-de-datacredito-despues-insolvencia-colombia',
    title: '¿Cómo salir de Datacrédito después de la insolvencia? Guía 2025',
    description: 'Después de la insolvencia en Colombia, tu historial en Datacrédito se actualiza. Conoce los plazos exactos, tus derechos y qué hacer para recuperar tu puntaje crediticio.',
    date: '2026-05-01',
    dateModified: '2026-05-01',
    category: 'Educación Financiera',
    readTime: '8 min',
    about: ['Salir de Datacrédito Colombia', 'Historial crediticio insolvencia', 'Limpiar historial crediticio Colombia'],
    mentions: ['Datacrédito', 'TransUnion Colombia', 'CIFIN', 'Superintendencia de Industria y Comercio', 'Superintendencia de Sociedades'],
    content: `
<p class="definicion"><strong>Respuesta directa:</strong> Después de completar un proceso de insolvencia en Colombia, el reporte negativo en Datacrédito no puede mantenerse indefinidamente. La Ley 1266 de 2008 (Habeas Data) establece que el período máximo de permanencia es el doble del tiempo que estuviste en mora, con un tope de 4 años desde que la deuda quedó extinta o pagada. Una vez extinguidas tus deudas por el proceso de insolvencia, el reloj de esos plazos empieza a correr.</p>

<p>Uno de los mayores miedos al declararse insolvente es quedar "marcado para siempre" en Datacrédito. Es un temor comprensible pero que no corresponde a la realidad legal. Colombia tiene una ley específica que establece plazos máximos, derechos de corrección y un proceso claro para la actualización del historial. En esta guía te explicamos todo lo que necesitas saber.</p>

<h2>¿Qué es Datacrédito y cómo funciona el reporte negativo?</h2>

<p>En Colombia existen dos grandes centrales de riesgo crediticio:</p>
<ul>
  <li><strong>Datacrédito Experian</strong> — la más utilizada por bancos y entidades financieras.</li>
  <li><strong>CIFIN / TransUnion Colombia</strong> — también consultada por muchas entidades del sistema financiero.</li>
</ul>

<p>Cuando no pagas una obligación financiera, el acreedor reporta la mora a estas centrales. El reporte negativo afecta tu score crediticio y puede impedir que accedas a nuevos créditos, arriendos o incluso algunos empleos.</p>

<p>La regla general de permanencia del reporte negativo, según la Ley 1266 de 2008, es:</p>
<ul>
  <li><strong>Tiempo en mora de 0 a 2 años:</strong> el reporte negativo permanece el doble de ese tiempo desde que se paga o extingue la deuda (máximo 4 años).</li>
  <li><strong>Tiempo en mora superior a 2 años:</strong> el reporte negativo permanece máximo 4 años desde que se paga o extingue la deuda, independientemente de cuánto tiempo lleves en mora.</li>
  <li><strong>Regla de oro:</strong> ningún reporte negativo puede permanecer más de 4 años después de extinguida la obligación.</li>
</ul>

<h3>¿Qué información reportan los bancos y cooperativas?</h3>
<p>Reportan el tipo de obligación, el monto, el número de cuotas en mora, la fecha de vencimiento y el estado de la deuda. Durante el proceso de insolvencia, el estado cambia a "proceso de reestructuración" o similar, lo que detiene la acumulación de mora adicional.</p>

<h2>¿Qué le pasa a tu reporte durante el proceso de insolvencia?</h2>

<p>El proceso de insolvencia tiene un efecto directo sobre tus reportes en centrales de riesgo en cada etapa:</p>

<ul>
  <li><strong>Al iniciar el proceso (radicación):</strong> los acreedores reciben notificación oficial. A partir de ese momento no pueden continuar reportando mora adicional. El estado de la deuda cambia.</li>
  <li><strong>Durante la negociación:</strong> las deudas quedan "congeladas" en el monto a la fecha de radicación. Los intereses de mora se suspenden y no se suman nuevas moras.</li>
  <li><strong>Al firmar el acuerdo:</strong> la deuda pasa a estado "reestructurada" o "en acuerdo de pago". Esto es diferente de un reporte negativo activo.</li>
  <li><strong>Al cumplir el acuerdo o completar la liquidación:</strong> la deuda queda legalmente extinta. Es desde este momento que empiezan a correr los plazos de permanencia del reporte.</li>
</ul>

<h3>¿Pueden seguir reportándome negativamente mientras estoy en el proceso?</h3>
<p>No. Desde la radicación de la solicitud de insolvencia, los acreedores incluidos en el proceso no pueden continuar reportando moras crecientes. Si algún acreedor lo hace, constituye una violación que puedes denunciar ante la Superintendencia de Industria y Comercio (SIC).</p>

<h2>¿Cuánto tiempo tarda en borrarse el reporte después del proceso?</h2>

<p>Una vez que el acuerdo de pago queda cumplido y las deudas se extinguen legalmente, aplican los plazos de la Ley 1266 de 2008:</p>

<ul>
  <li>Si estuviste en mora <strong>menos de 1 año</strong> antes de iniciar el proceso → el reporte negativo puede permanecer máximo <strong>2 años</strong> desde la extinción.</li>
  <li>Si estuviste en mora <strong>entre 1 y 2 años</strong> → el reporte puede permanecer máximo <strong>el doble de ese tiempo</strong> desde la extinción (entre 2 y 4 años).</li>
  <li>Si estuviste en mora <strong>más de 2 años</strong> → el reporte puede permanecer máximo <strong>4 años</strong> desde la extinción, sin importar cuánto tiempo lleves en mora.</li>
</ul>

<p><strong>Caso práctico:</strong> si acumulaste 18 meses de mora antes de iniciar el proceso de insolvencia, y el proceso tardó 5 meses (durante los cuales la mora se congeló), al extinguirse la deuda el reporte negativo puede permanecer máximo 36 meses (el doble de los 18 meses de mora real). Después de esos 36 meses, el dato debe borrarse automáticamente.</p>

<h3>¿Puedo pedir que me borren antes del plazo?</h3>
<p>Puedes solicitarlo si el dato es incorrecto o si el plazo legal ya venció. No puedes exigir la eliminación antes de que venza el plazo si el dato es correcto. Sin embargo, sí puedes pedir que se actualice el estado de la deuda (de "en mora" a "extinta por insolvencia") en cualquier momento después de que se complete el proceso.</p>

<h2>Tus derechos frente a Datacrédito — lo que la ley te garantiza</h2>

<ul>
  <li><strong>Derecho de consulta gratuita:</strong> puedes consultar tu reporte completo en Datacrédito una vez al mes sin costo en el portal oficial.</li>
  <li><strong>Derecho de corrección:</strong> si el dato es incorrecto (monto equivocado, fecha de extinción no registrada), puedes solicitar corrección y el acreedor tiene 15 días hábiles para responder.</li>
  <li><strong>Derecho de actualización:</strong> una vez extinguida la deuda por insolvencia, tienes derecho a que el estado de la obligación se actualice en el reporte.</li>
  <li><strong>Derecho de caducidad:</strong> una vez vencidos los plazos legales, el dato negativo debe eliminarse automáticamente, sin necesidad de que lo solicites.</li>
</ul>

<h3>¿Qué hacer si el banco no actualiza tu reporte después del proceso?</h3>
<ol>
  <li>Reúne la documentación del proceso: acta de acuerdo, certificación de cumplimiento o sentencia de liquidación.</li>
  <li>Presenta una solicitud formal de actualización ante el acreedor (banco, cooperativa), aportando esa documentación.</li>
  <li>Si en 15 días hábiles no hay respuesta, presenta queja ante la SIC a través de su portal en línea.</li>
  <li>La SIC puede ordenar la corrección y sancionar al acreedor que no cumpla.</li>
</ol>

<h2>¿Cómo reconstruir tu historial crediticio después de la insolvencia?</h2>

<p>Durante el período de transición —mientras el reporte negativo aún está vigente— puedes empezar a construir historial positivo con productos diseñados para ese propósito:</p>

<ul>
  <li><strong>Tarjeta de crédito garantizada:</strong> depositas un monto como garantía y recibes una tarjeta con ese cupo. Cada pago a tiempo mejora tu score.</li>
  <li><strong>Microcrédito en cooperativa:</strong> algunas cooperativas de ahorro y crédito otorgan créditos pequeños a personas con historial negativo, especialmente si demuestras capacidad de pago actual.</li>
  <li><strong>Cuenta de ahorros activa:</strong> mantener movimientos regulares en cuenta de ahorros crea historial positivo en el sistema financiero.</li>
  <li><strong>Pagar todo en fecha:</strong> cualquier obligación nueva —arriendo, servicios públicos en modalidad de crédito— que pagues puntualmente contribuye a reconstruir el perfil.</li>
</ul>

<h3>¿Cuándo podré pedir un crédito normal de nuevo?</h3>
<p>Muchos de nuestros clientes logran acceder a créditos formales nuevamente entre 2 y 3 años después de completar el proceso de insolvencia. El momento exacto depende de cuánto tiempo permanezca el reporte negativo (según los plazos de mora descritos arriba) y qué tan activamente trabajes en reconstruir tu historial durante ese período.</p>

<h2>Preguntas frecuentes — Datacrédito e insolvencia</h2>

<p><strong>¿Me afecta el reporte para conseguir trabajo?</strong><br/>Algunos empleadores, especialmente en cargos financieros o de manejo de dinero, consultan las centrales de riesgo. Sin embargo, la ley colombiana prohíbe discriminar laboralmente por reporte negativo en la mayoría de cargos. Si el cargo no implica manejo de recursos, el reporte en Datacrédito no puede ser motivo de rechazo.</p>

<p><strong>¿Mi codeudor también queda reportado?</strong><br/>Si eres codeudor de una deuda que entra al proceso de insolvencia del titular, tu reporte como codeudor también se actualiza en función del estado de la obligación. Si el proceso extingue la deuda, el reporte del codeudor también debe actualizarse en los mismos plazos.</p>

<p><strong>¿Puedo abrir cuenta de ahorros mientras estoy reportado?</strong><br/>Sí. Estar reportado en Datacrédito no impide abrir una cuenta de ahorros básica. Lo que puede afectarse es el acceso a créditos, tarjetas o productos financieros que requieren consulta de centrales de riesgo como requisito.</p>

<p><strong>¿Qué pasa con el reporte si la insolvencia no llega a acuerdo?</strong><br/>Si el proceso de insolvencia termina sin acuerdo (fracaso de la negociación), el deudor puede pasar directamente a liquidación patrimonial. Al completarse la liquidación y extinguirse las deudas, los plazos de caducidad del reporte empiezan a correr de la misma forma.</p>

<p>El marco normativo completo está en la <a href="/blog/ley-2445-de-2025-insolvencia-colombia">Ley 2445 de 2025</a>, que analizamos artículo por artículo en nuestra guía.</p>

<blockquote>Declararse insolvente no significa quedar marcado de por vida. La ley colombiana establece plazos claros, derechos concretos y un camino real para recuperar tu historial crediticio. El primer paso es extinguir la deuda legalmente — y eso es exactamente lo que hace el proceso de insolvencia. En Deuda OFF la primera consulta es gratuita.</blockquote>
    `,
  },
  {
    slug: 'desventajas-ley-de-insolvencia',
    title: 'Desventajas de la Ley de Insolvencia: lo que nadie te cuenta antes de radicar',
    description: 'Las desventajas reales del proceso de insolvencia de persona natural en Colombia, con el articulado citado: qué pasa si fracasa la negociación, cuánto tiempo debes esperar para volver a acogerte y en qué casos no conviene.',
    date: '2026-07-29',
    dateModified: '2026-07-29',
    category: 'Análisis',
    readTime: '11 min',
    about: ['Desventajas de la insolvencia', 'Liquidación patrimonial', 'Ley 2445 de 2025', 'Centrales de riesgo'],
    mentions: ['Ministerio de Justicia y del Derecho', 'Superintendencia Financiera de Colombia', 'Datacrédito', 'Núcleo Jurídico SAS'],
    sources: [
      { label: 'Ley 2445 de 2025 — texto oficial, Secretaría del Senado de la República', href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2445_2025.html' },
      { label: 'Ley 2445 de 2025 — SUIN-Juriscol, Ministerio de Justicia y del Derecho', href: 'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30054512' },
      { label: 'Ley 1564 de 2012 (Código General del Proceso)', href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1564_2012.html' },
    ],
    faqs: [
      {
        q: '¿Cuál es la mayor desventaja del proceso de insolvencia?',
        a: 'Que si la negociación fracasa, el camino no se detiene ahí. Según los artículos 559 y 561 del Código General del Proceso, vencido el término de 60 días sin acuerdo, el conciliador declara el fracaso y remite de inmediato las diligencias al juez civil para que decrete la apertura de la liquidación patrimonial. No es opcional ni requiere una nueva decisión del deudor: es la consecuencia automática de no llegar a acuerdo.',
      },
      {
        q: '¿Pierdo mi casa si entro en insolvencia?',
        a: 'No necesariamente. El numeral 4 del artículo 565 excluye expresamente de la masa de la liquidación los bienes sobre los que se haya constituido patrimonio de familia inembargable, los afectados a vivienda familiar, los que sean inembargables por ley y los bienes del cónyuge o compañero permanente. Ahora bien, un acreedor puede pedir por incidente que se embarguen inmuebles afectados a vivienda familiar si alega tener derecho a perseguirlos, y el juez de la liquidación lo resuelve.',
      },
      {
        q: '¿Cuánto tiempo debo esperar para volver a acogerme a la insolvencia?',
        a: 'El artículo 574 fija plazos largos: 5 años desde el cumplimiento total del acuerdo anterior o desde que se aceptó el desistimiento; 10 años desde el inicio de la liquidación anterior si te beneficiaste de la conversión de saldos a obligaciones naturales; 5 años si cubriste con tus bienes el total reconocido; y 15 años desde la apertura de la liquidación si se te negó ese beneficio. Es la razón por la que no conviene radicar sin estar seguro.',
      },
      {
        q: '¿El proceso de insolvencia es público?',
        a: 'El parágrafo segundo del artículo 565 dispone que el decreto de medidas cautelares no impide la publicidad del proceso, y que el juez debe garantizar el acceso al expediente de las partes. Además, cuando se acepta la negociación de deudas de una persona natural comerciante, el parágrafo primero del artículo 543 ordena su inscripción inmediata en el registro mercantil de la cámara de comercio del domicilio.',
      },
      {
        q: '¿La insolvencia borra mi reporte en Datacrédito?',
        a: 'No de forma automática ni inmediata. El proceso normaliza o extingue la obligación, pero la permanencia del dato negativo en centrales de riesgo se rige por la Ley 1266 de 2008, que tiene sus propias reglas de caducidad. Extinguir la deuda es el requisito para que el reporte empiece a caducar, no un borrado instantáneo.',
      },
      {
        q: '¿Puedo perder el beneficio de que mis deudas se extingan?',
        a: 'Sí. El numeral 1 del artículo 571 niega la conversión de saldos a obligaciones naturales a quien dolosamente omitió información relevante sobre ingresos, bienes o créditos, la ocultó o simuló, se abstuvo de actualizar su información conforme al numeral 4 del artículo 545, o deterioró con dolo o culpa grave los activos a adjudicar. También se pierde si prosperan acciones revocatorias o de simulación.',
      },
      {
        q: '¿Qué obligaciones no desaparecen nunca?',
        a: 'Las alimentarias. El numeral 2 del artículo 545 las excluye de la suspensión de descuentos, el numeral 3 del artículo 565 les da prelación sobre todas las demás, y el artículo 571 aclara que los saldos insolutos por obligaciones alimentarias no mutan a obligaciones naturales. Además, los procesos ejecutivos de alimentos pueden perseguir incluso los bienes que adquieras después del inicio de la liquidación.',
      },
    ],
    content: `
<p class="definicion"><strong>Respuesta directa:</strong> Las principales desventajas del proceso de insolvencia en Colombia son que el fracaso de la negociación lleva automáticamente a liquidación patrimonial (arts. 559 y 561), que debes esperar entre 5 y 15 años para volver a acogerte (art. 574), que el proceso es público y que el reporte en centrales de riesgo no se borra de inmediato. No es un mecanismo gratuito de borrón y cuenta nueva.</p>

<p>Casi todo lo que se publica sobre la Ley de Insolvencia habla de beneficios. Esta guía hace lo contrario: expone lo que puede salir mal, con el articulado citado, para que decidas con información completa. Si después de leerla el proceso te sigue conviniendo, sabrás exactamente a qué te expones.</p>

<h2>1. Si no hay acuerdo, sigue la liquidación — automáticamente</h2>

<p>Esta es la desventaja que más sorprende a quien radica sin asesoría. Mucha gente cree que si la negociación no prospera, simplemente vuelve a su situación anterior. No es así.</p>

<p class="cita-norma"><strong>Artículo 559 CGP.</strong> Si transcurrido el término previsto en el artículo 544 no se celebra el acuerdo de pago, el conciliador declarará el fracaso de la negociación e inmediatamente remitirá las diligencias al juez civil de conocimiento, para que decrete la apertura del proceso de liquidación patrimonial.</p>

<p>El artículo 561 lo confirma: el fracaso de la negociación, la nulidad del acuerdo o su incumplimiento no subsanado <strong>dan lugar a la apertura de la liquidación patrimonial</strong>. El conciliador también puede declarar el fracaso si en la audiencia hubo votación formal que no alcanzó la mayoría, salvo que el deudor manifieste que mejorará su propuesta y el término del artículo 544 no haya vencido.</p>

<p>Traducido: si entras al proceso con una propuesta que los acreedores no van a aceptar, no estás ganando tiempo. Estás encaminando tu patrimonio hacia una liquidación.</p>

<h2>2. El incumplimiento del acuerdo tiene una sola segunda oportunidad</h2>

<p>Firmar el acuerdo no es el final. El artículo 560 regula qué pasa si dejas de cumplirlo: cualquier acreedor o tú mismo informan al conciliador, que dentro de los 10 días hábiles siguientes cita a audiencia para revisar <strong>por una sola vez</strong> la reforma del acuerdo.</p>

<p>Si en esa audiencia no se modifica el acuerdo, el proceso va al juez para que decrete la liquidación. Y si pactada la modificación incumples de nuevo, el juez decreta la apertura de la liquidación en el mismo auto que declara el incumplimiento. No hay tercera oportunidad.</p>

<p>Hay un costo adicional poco conocido: los gastos en que incurran los acreedores para activar la actuación del centro de conciliación por tu incumplimiento <strong>se incluyen en el acuerdo reformado o en la liquidación en primer orden de pago</strong>, después de alimentos y créditos laborales.</p>

<h2>3. En liquidación, tus bienes quedan embargados y secuestrados</h2>

<p>El artículo 565 describe los efectos de la providencia de apertura de la liquidación, y son severos:</p>

<div class="tabla-wrap">
<table>
  <thead>
    <tr><th>Efecto</th><th>Qué implica para ti</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Pierdes la administración</strong></td>
      <td>Prohibición de hacer pagos, compensaciones, daciones en pago, arreglos, desistimientos, allanamientos, conciliaciones o transacciones sobre obligaciones anteriores (num. 1).</td>
    </tr>
    <tr>
      <td><strong>Embargo y secuestro</strong></td>
      <td>El auto de apertura dispone el embargo y secuestro de los bienes que integran la masa, aunque el juez los deja en depósito gratuito en tus manos (num. 4).</td>
    </tr>
    <tr>
      <td><strong>Rendición periódica de cuentas</strong></td>
      <td>Si eres el propio liquidador, debes aportar constancia detallada del estado de los bienes con fotos o videos y actualizarla trimestralmente, so pena de perder la calidad de depositario (num. 4).</td>
    </tr>
    <tr>
      <td><strong>Todo tu patrimonio se destina al pasivo</strong></td>
      <td>Los bienes que poseas a la fecha se destinan exclusivamente a pagar obligaciones anteriores (num. 2).</td>
    </tr>
  </tbody>
</table>
</div>

<p>Conviene el matiz honesto: el mismo numeral 4 <strong>excluye de la masa</strong> los bienes del cónyuge o compañero permanente, los constituidos como patrimonio de familia inembargable, los afectados a vivienda familiar y los inembargables por ley. No es cierto que "pierdas todo". Pero sí es cierto que un acreedor puede pedir por incidente que se embarguen inmuebles afectados a vivienda familiar, y que el juez lo resuelva.</p>

<h2>4. Tendrás que esperar años para volver a acogerte</h2>

<p>El artículo 574 impone plazos de espera que hacen del proceso una decisión difícilmente reversible:</p>

<div class="tabla-wrap">
<table>
  <thead>
    <tr><th>Situación</th><th>Espera antes de un nuevo proceso</th></tr>
  </thead>
  <tbody>
    <tr><td>Cumpliste totalmente el acuerdo de pago</td><td><strong>5 años</strong> desde el cumplimiento</td></tr>
    <tr><td>Desististe del procedimiento de negociación</td><td><strong>5 años</strong> desde que se aceptó el desistimiento</td></tr>
    <tr><td>Cubriste con tus bienes el total reconocido</td><td><strong>5 años</strong></td></tr>
    <tr><td>Te beneficiaste de la conversión a obligaciones naturales</td><td><strong>10 años</strong> desde el inicio de la liquidación anterior</td></tr>
    <tr><td>Se te negó ese beneficio</td><td><strong>15 años</strong> desde la apertura de la liquidación</td></tr>
  </tbody>
</table>
</div>

<p>Esto tiene una consecuencia práctica: si tu situación económica todavía puede mejorar por sí sola en el corto plazo, quemar el recurso ahora te deja sin él durante años.</p>

<h2>5. El proceso es público, y para comerciantes queda en el registro mercantil</h2>

<p>El parágrafo segundo del artículo 565 establece que el decreto de medidas cautelares no impide la publicidad del proceso: el juez debe garantizar el acceso al expediente. Y si eres persona natural comerciante, el parágrafo primero del artículo 543 ordena la <strong>inscripción inmediata en el registro mercantil</strong> de la cámara de comercio de tu domicilio al aceptarse la negociación.</p>

<p>Para quien tiene un negocio y relaciones comerciales activas, esa visibilidad puede tener un costo reputacional real que conviene anticipar.</p>

<h2>6. Puedes perder el beneficio de la extinción</h2>

<p>La conversión de los saldos insolutos a obligaciones naturales —el efecto que hace valioso todo el proceso— no está garantizada. El numeral 1 del artículo 571 la niega cuando el juez encuentra que el deudor:</p>

<ul>
  <li>Omitió dolosamente información relevante sobre ingresos, bienes o créditos, o los ocultó o simuló.</li>
  <li>Se abstuvo de actualizar su información sobre la crisis económica y las direcciones de notificación, conforme al numeral 4 del artículo 545.</li>
  <li>Realizó conductas que impidieron o dificultaron la venta de un activo prevista en el artículo 570A.</li>
  <li>Ocasionó con dolo o culpa grave el deterioro de los activos a adjudicar, o lo permitió pudiendo evitarlo.</li>
</ul>

<p>Tampoco procede si prosperan acciones revocatorias o de simulación. Y quien pierde el beneficio cae en la espera de 15 años del artículo 574.</p>

<h2>7. Las obligaciones alimentarias no se tocan</h2>

<p>Si tu carga principal son alimentos, el proceso te ayudará poco:</p>

<ul>
  <li>El numeral 2 del artículo 545 <strong>excluye</strong> las obligaciones alimentarias de la suspensión de descuentos de nómina y libranza.</li>
  <li>El numeral 3 del artículo 565 les da <strong>prelación sobre todas las demás</strong> obligaciones.</li>
  <li>El artículo 571 aclara que los saldos insolutos por alimentos <strong>no mutan</strong> a obligaciones naturales.</li>
  <li>Los acreedores de alimentos pueden perseguir incluso los bienes que adquieras <strong>después</strong> del inicio de la liquidación.</li>
</ul>

<p>La solicitud además exige, según el numeral 9 del artículo 539, discriminar las obligaciones alimentarias a tu cargo y anexar el certificado del REDAM.</p>

<h2>8. El reporte en centrales de riesgo no se borra de inmediato</h2>

<p>Es la expectativa que más decepciona. El proceso de insolvencia normaliza o extingue la obligación, pero la permanencia del dato negativo se rige por la Ley 1266 de 2008, con sus propias reglas de caducidad. Extinguir la deuda es lo que hace que el reloj del reporte empiece a correr, no un borrado instantáneo.</p>

<h2>9. Hay costos, aunque el trámite pueda ser gratuito</h2>

<p>El artículo 535 estableció la gratuidad del trámite en centros de conciliación de consultorios jurídicos de facultades de derecho y de entidades públicas. Pero conviene no confundir gratuidad del trámite con gratuidad total:</p>

<ul>
  <li><strong>Las expensas las asumes tú</strong>: comunicaciones, remisión de expedientes y gastos secretariales. Si no las pagas, <strong>se entiende desistida la solicitud</strong> (art. 535).</li>
  <li><strong>Los honorarios de abogado son aparte.</strong> El artículo 539 exige apoderado judicial cuando el pasivo supera la mínima cuantía.</li>
  <li><strong>Los gastos de administración del procedimiento</strong> se pagan con preferencia sobre las acreencias incorporadas (art. 565 num. 3).</li>
</ul>

<h2>10. Contratos de leasing: los procesos de restitución continúan</h2>

<p>El parágrafo tercero del artículo 565 es explícito: los procesos de restitución de tenencia de bienes entregados en leasing <strong>continúan su curso</strong>, y los créditos insolutos que los originaron se sujetan a las reglas de la liquidación. Si tu vehículo o equipo productivo está en leasing, la insolvencia no lo blinda.</p>

<h2>Entonces, ¿cuándo NO conviene la insolvencia?</h2>

<p>Con todo lo anterior sobre la mesa, hay perfiles a los que el proceso les sirve poco:</p>

<ul>
  <li><strong>Si tu crisis es transitoria</strong> y tienes expectativa razonable de recuperar ingresos pronto: quemarías el recurso y quedarías bloqueado por años.</li>
  <li><strong>Si tu deuda principal es alimentaria</strong>: no se suspende, no se extingue y tiene prelación.</li>
  <li><strong>Si no cumples los presupuestos del artículo 538</strong>: mora superior a 90 días con dos o más acreedores, o dos o más procesos de cobro, y que esas obligaciones representen al menos el 30% del pasivo total.</li>
  <li><strong>Si tu propuesta de pago no es viable</strong>: una propuesta que los acreedores rechazarán te lleva derecho a la liquidación.</li>
  <li><strong>Si tu patrimonio es mayor que tu pasivo</strong> y puedes resolver vendiendo un activo: la liquidación sería un costo innecesario.</li>
</ul>

<h2>Y cuándo sí conviene</h2>

<p>La otra cara: el proceso es la mejor herramienta disponible cuando la cesación de pagos es estructural y no transitoria. Desde la aceptación se suspenden los procesos ejecutivos y los embargos, cesan los descuentos de libranza, no pueden cortarte los servicios públicos domiciliarios y tu empleador no puede usar la insolvencia en tu contra (arts. 545 y 532). Si la deuda ya no es pagable con tu flujo real, ninguna de las desventajas anteriores pesa más que seguir acumulando intereses y procesos.</p>

<p>La decisión correcta depende de números concretos: cuánto debes, a quiénes, desde cuándo y qué capacidad de pago real tienes. Esa es exactamente la evaluación que hacemos sin costo en la consulta inicial.</p>

<p>Todo lo anterior se rige por <a href="/blog/ley-2445-de-2025-insolvencia-colombia">la nueva ley de insolvencia</a>, cuyos requisitos y efectos explicamos en detalle.</p>

<blockquote>Ningún proceso legal es gratis en términos de consecuencias. La diferencia entre que la insolvencia sea una solución o un problema está en el diagnóstico previo, no en el trámite.</blockquote>
    `,
  },
  {
    slug: 'que-es-la-insolvencia',
    title: 'Qué es la insolvencia: definición legal, tipos y cómo funciona en Colombia',
    description: 'Qué es la insolvencia económica, qué dice la ley colombiana, en qué se diferencia de la quiebra y la bancarrota, y cuándo una persona se considera legalmente en cesación de pagos.',
    date: '2026-07-29',
    dateModified: '2026-07-29',
    category: 'Conceptos',
    readTime: '9 min',
    about: ['Insolvencia económica', 'Cesación de pagos', 'Ley 2445 de 2025', 'Insolvencia de persona natural'],
    mentions: ['Ministerio de Justicia y del Derecho', 'Superintendencia de Sociedades', 'Núcleo Jurídico SAS'],
    sources: [
      { label: 'Ley 2445 de 2025 — texto oficial, Secretaría del Senado de la República', href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2445_2025.html' },
      { label: 'Ley 2445 de 2025 — SUIN-Juriscol, Ministerio de Justicia y del Derecho', href: 'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30054512' },
      { label: 'Ley 1564 de 2012 (Código General del Proceso)', href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1564_2012.html' },
    ],
    faqs: [
      {
        q: '¿Qué es la insolvencia en términos simples?',
        a: 'La insolvencia es la situación en la que una persona o empresa no puede pagar sus deudas con los recursos de que dispone. En Colombia no es solo una situación de hecho: la ley la define técnicamente como cesación de pagos y le da efectos jurídicos concretos. El artículo 538 del Código General del Proceso establece cuándo se configura para una persona natural.',
      },
      {
        q: '¿Cuál es la diferencia entre insolvencia, quiebra y bancarrota?',
        a: 'En el lenguaje corriente se usan como sinónimos, pero en Colombia no existe una figura legal llamada quiebra ni bancarrota para personas naturales. El término técnico es procedimiento de insolvencia. Quiebra y bancarrota son expresiones heredadas de otras legislaciones y del cine, y quien las busca normalmente está buscando el procedimiento de insolvencia de persona natural.',
      },
      {
        q: '¿Qué es la insolvencia económica de una persona natural?',
        a: 'Es la cesación de pagos de alguien que no ejerce el comercio de forma profesional, o de un pequeño comerciante con activos inferiores a 1.000 SMLMV. Según el artículo 538, se configura cuando se incumplen dos o más obligaciones con dos o más acreedores por más de 90 días, o cuando hay dos o más procesos de cobro en curso, y esas obligaciones representan al menos el 30% del pasivo total.',
      },
      {
        q: '¿La insolvencia es lo mismo para personas y para empresas?',
        a: 'No. Las personas naturales no comerciantes y los pequeños comerciantes se rigen por el Título IV de la Sección Tercera del Libro Tercero del Código General del Proceso, reformado por la Ley 2445 de 2025, y su trámite se surte ante centros de conciliación y notarías. Las sociedades y los comerciantes de mayor tamaño se rigen por la Ley 1116 de 2006 ante la Superintendencia de Sociedades.',
      },
      {
        q: '¿Estar insolvente es ilegal?',
        a: 'No. La insolvencia no es una infracción ni un delito: es una situación económica que la ley reconoce y regula. El artículo 531 del CGP define la finalidad del régimen como el reintegro a la actividad productiva nacional de quien sufrió un quebranto económico, partiendo de la presunción de buena fe de las partes.',
      },
      {
        q: '¿Qué es la cesación de pagos?',
        a: 'Es el concepto técnico con el que la ley colombiana identifica la insolvencia de una persona natural. El artículo 538 la define objetivamente: incumplimiento de dos o más obligaciones frente a dos o más acreedores por más de 90 días, o dos o más procedimientos de cobro en curso, siempre que esas obligaciones representen no menos del 30% del pasivo total. Para verificarla basta la declaración del deudor bajo juramento.',
      },
    ],
    content: `
<p class="definicion"><strong>Definición:</strong> La insolvencia es la situación en la que una persona no puede pagar sus deudas con los recursos de que dispone. En Colombia la ley la denomina técnicamente cesación de pagos y la define en el artículo 538 del Código General del Proceso: incumplir dos o más obligaciones con dos o más acreedores por más de 90 días, siempre que representen al menos el 30% del pasivo total.</p>

<p>La palabra insolvencia se usa de forma imprecisa todos los días. Esta guía separa el uso coloquial del concepto jurídico, porque de esa diferencia depende que puedas o no acceder a la protección que da la ley.</p>

<h2>Qué es la insolvencia según la ley colombiana</h2>

<p>En el uso corriente, alguien insolvente es simplemente alguien sin dinero. En derecho la definición es mucho más precisa, y esa precisión importa: solo quien encaja en ella puede acogerse al procedimiento.</p>

<p class="cita-norma"><strong>Artículo 538 CGP.</strong> Estará en cesación de pagos la persona natural que como deudor o garante incumpla el pago de dos (2) o más obligaciones a favor de dos (2) o más acreedores por más de noventa (90) días, o contra el cual se hayan iniciado dos (2) o más procedimientos públicos o privados de cobro (...). En cualquier caso, el valor porcentual de las obligaciones deberá representar no menos del treinta por ciento (30%) del pasivo total a su cargo.</p>

<p>Tres elementos definen entonces la insolvencia legal de una persona natural: <strong>pluralidad de acreedores</strong> (dos o más), <strong>permanencia</strong> (más de 90 días) y <strong>magnitud</strong> (al menos el 30% del pasivo). Deber mucho a un solo acreedor, o deber poco a varios, no configura cesación de pagos.</p>

<h2>Insolvencia, quiebra y bancarrota: por qué no son lo mismo</h2>

<p>Mucha gente busca cómo "declararse en quiebra" o qué pasa si se "declara en bancarrota". Conviene aclararlo: <strong>en Colombia no existe una figura legal llamada quiebra ni bancarrota para personas naturales</strong>. Son expresiones heredadas de otras legislaciones y de la cultura popular.</p>

<div class="tabla-wrap">
<table>
  <thead>
    <tr><th>Término</th><th>Estatus en Colombia</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Insolvencia</strong></td><td>Concepto legal vigente. Es el nombre del régimen y del procedimiento.</td></tr>
    <tr><td><strong>Cesación de pagos</strong></td><td>El presupuesto técnico que debe acreditarse (art. 538).</td></tr>
    <tr><td><strong>Quiebra</strong></td><td>Sin equivalente legal actual para persona natural. Uso coloquial.</td></tr>
    <tr><td><strong>Bancarrota</strong></td><td>Sin equivalente legal. Traducción informal del "bankruptcy" estadounidense.</td></tr>
    <tr><td><strong>Liquidación patrimonial</strong></td><td>El procedimiento que más se parece a lo que la gente imagina como quiebra.</td></tr>
  </tbody>
</table>
</div>

<p>Si buscabas cómo declararte en quiebra, lo que necesitas es el procedimiento de insolvencia de persona natural.</p>

<h2>Tipos de insolvencia en Colombia</h2>

<h3>Insolvencia de persona natural no comerciante</h3>
<p>Aplica a quien no ejerce el comercio de forma profesional: empleados, pensionados, independientes, desempleados con bienes. Se rige por el Título IV de la Sección Tercera del Libro Tercero del Código General del Proceso, reformado por la Ley 2445 de 2025.</p>

<h3>Insolvencia del pequeño comerciante</h3>
<p>La novedad de la Ley 2445 de 2025. El artículo 532 incorporó a la persona natural comerciante con activos totales inferiores a <strong>1.000 salarios mínimos mensuales legales vigentes</strong>, excluido el valor de la vivienda familiar y del vehículo usado como instrumento de trabajo.</p>

<h3>Insolvencia empresarial</h3>
<p>Para sociedades y comerciantes de mayor tamaño. Se rige por la Ley 1116 de 2006 y se tramita ante la Superintendencia de Sociedades. El parágrafo primero del artículo 532 excluye del régimen de persona natural a quienes controlan sociedades que estén en insolvencia empresarial.</p>

<h2>Para qué sirve declararse en insolvencia</h2>

<p>El artículo 531 define la finalidad del régimen: el reintegro de la persona natural que ha sufrido un quebranto económico a la actividad productiva nacional, mediante la normalización de sus relaciones crediticias. La ley contempla tres vías para lograrlo:</p>

<ol>
  <li><strong>Un acuerdo con los acreedores</strong> — la negociación de deudas.</li>
  <li><strong>La convalidación de acuerdos privados</strong> obtenidos con algunos de ellos.</li>
  <li><strong>La liquidación de su patrimonio</strong>.</li>
</ol>

<p>Todo ello, dice el mismo artículo, bajo la presunción de buena fe de las partes. La insolvencia no se trata como una falta: se trata como una situación económica que conviene resolver de forma ordenada.</p>

<h2>Qué protección activa la insolvencia</h2>

<p>Desde que se acepta la solicitud, y según el artículo 545, se suspenden los procesos ejecutivos y los embargos en curso, cesan los descuentos de nómina y libranza (salvo alimentos), no pueden cortarte los servicios públicos domiciliarios por deudas anteriores y se interrumpe la prescripción. Además, el parágrafo tercero del artículo 532 prohíbe que un empleador use la insolvencia como criterio de vinculación o despido.</p>

<p>Esa protección es la razón práctica por la que existe el procedimiento: detener el deterioro mientras se busca una salida.</p>

<h2>Cómo saber si estás legalmente en insolvencia</h2>

<p>Revisa tres cosas concretas:</p>

<ul>
  <li>¿Tienes <strong>dos o más obligaciones vencidas</strong> con <strong>dos o más acreedores</strong> distintos?</li>
  <li>¿Alguna lleva <strong>más de 90 días</strong> en mora, o tienes dos o más procesos de cobro en curso?</li>
  <li>¿Esas obligaciones suman al menos el <strong>30% de todo lo que debes</strong>?</li>
</ul>

<p>Un detalle técnico que puede inclinar la balanza: para ese cálculo del 30% <strong>no se cuentan los créditos que se estén pagando por libranza o descuento de nómina</strong>, salvo que hayan dejado de abonarse. Si buena parte de tu deuda se descuenta del sueldo automáticamente, el porcentaje se calcula sobre el resto.</p>

<p>Para entender el alcance completo de <a href="/blog/ley-2445-de-2025-insolvencia-colombia">el régimen de insolvencia vigente</a>, consulta nuestra guía de la Ley 2445 de 2025.</p>

<p>Si los tres se cumplen, estás en cesación de pagos en el sentido del artículo 538 y puedes solicitar el procedimiento. Verificarlo con precisión es el primer paso, y es gratuito en nuestra consulta inicial.</p>
    `,
  },
  {
    slug: 'como-declararse-en-insolvencia',
    title: 'Cómo declararse en insolvencia en Colombia: requisitos, documentos y pasos',
    description: 'Guía práctica para declararse en insolvencia como persona natural en Colombia: los diez documentos que exige el artículo 539, ante quién se radica, qué pasa después y cuánto tarda.',
    date: '2026-07-29',
    dateModified: '2026-07-29',
    category: 'Guías',
    readTime: '10 min',
    about: ['Cómo declararse en insolvencia', 'Requisitos de la solicitud', 'Ley 2445 de 2025', 'Centros de conciliación'],
    mentions: ['Ministerio de Justicia y del Derecho', 'REDAM', 'Núcleo Jurídico SAS'],
    sources: [
      { label: 'Ley 2445 de 2025 — texto oficial, Secretaría del Senado de la República', href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2445_2025.html' },
      { label: 'Ley 2445 de 2025 — SUIN-Juriscol, Ministerio de Justicia y del Derecho', href: 'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/30054512' },
      { label: 'Ley 1564 de 2012 (Código General del Proceso)', href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1564_2012.html' },
    ],
    faqs: [
      {
        q: '¿Cómo me declaro en insolvencia en Colombia?',
        a: 'Se presenta una solicitud de trámite de negociación de deudas ante un centro de conciliación autorizado por el Ministerio de Justicia y del Derecho o ante una notaría con conciliadores inscritos. Según el artículo 539, la solicitud debe presentarla directamente el deudor e incluir diez elementos, entre ellos el informe de causas, la propuesta de pago, la relación de acreedores en orden de prelación y la relación detallada de bienes.',
      },
      {
        q: '¿Necesito abogado para declararme en insolvencia?',
        a: 'El artículo 539 permite que el deudor comparezca acompañado o representado por apoderado judicial, y lo hace obligatorio cuando el pasivo supera la mínima cuantía. Por debajo de esa cuantía, el parágrafo del artículo 535 permite que los consultorios jurídicos de las facultades de derecho representen o acompañen al deudor.',
      },
      {
        q: '¿Ante quién se radica la solicitud de insolvencia?',
        a: 'Ante los centros de conciliación del domicilio del deudor expresamente autorizados por el Ministerio de Justicia y del Derecho, a través de conciliadores inscritos en sus listas, o ante notarías con listas de conciliadores. Si en tu municipio no hay ninguno, el artículo 533 te permite acudir a cualquier centro o notaría del mismo circuito judicial o notarial.',
      },
      {
        q: '¿Puedo hacer el trámite virtualmente?',
        a: 'Sí. El artículo 533 otorga competencia nacional a los centros de conciliación y notarías que cuenten con la infraestructura tecnológica adecuada para adelantar virtualmente los procedimientos de negociación de deudas y convalidación de acuerdos, cualquiera que sea el domicilio del deudor, incluso si reside en el exterior. En ese último caso solo se incorporan las obligaciones sujetas a la ley colombiana.',
      },
      {
        q: '¿Qué pasa después de radicar la solicitud?',
        a: 'Al día siguiente de la presentación el centro designa conciliador, que debe aceptar dentro de los dos días siguientes (art. 541). Verificados los requisitos, el conciliador da inicio al procedimiento y fija la audiencia de negociación dentro de los diez días siguientes a la aceptación (art. 543). Desde la aceptación operan los efectos protectores del artículo 545.',
      },
      {
        q: '¿Puedo retirar la solicitud si me arrepiento?',
        a: 'El parágrafo del artículo 545 permite retirar la solicitud mientras no se haya hecho efectivo ninguno de los efectos de los numerales 1 y 2, y desistir expresamente mientras no se haya aprobado el acuerdo. La aceptación del desistimiento reanuda de inmediato los procesos de ejecución suspendidos, y activa el plazo de espera de 5 años del artículo 574.',
      },
      {
        q: '¿Mi pareja y yo podemos radicar juntos?',
        a: 'El artículo 539A permite que un mismo conciliador tramite coordinadamente la insolvencia de varios deudores del mismo núcleo familiar, siempre que cada uno cumpla los presupuestos del artículo 538 y su solicitud los requisitos del 539. No es una negociación conjunta: cada trámite se aprueba individualmente, aunque el conciliador puede hacer audiencias simultáneas con actas separadas.',
      },
    ],
    content: `
<p class="definicion"><strong>Respuesta directa:</strong> Para declararte en insolvencia en Colombia debes presentar una solicitud de negociación de deudas ante un centro de conciliación autorizado por el Ministerio de Justicia o una notaría con conciliadores inscritos. La solicitud la presenta directamente el deudor y debe contener los diez elementos del artículo 539 del Código General del Proceso, incluidos el informe de causas, la propuesta de pago y la relación completa de acreedores y bienes.</p>

<p>Esta guía recorre el trámite tal como está en la norma, sin generalidades. Si quieres primero verificar si calificas, el requisito de fondo está en el artículo 538 y lo explicamos en la <a href="/blog/ley-2445-de-2025-insolvencia-colombia">guía de la Ley 2445 de 2025</a>.</p>

<h2>Paso 1 — Verifica que estás en cesación de pagos</h2>

<p>Antes de reunir un solo documento, confirma que cumples el presupuesto del artículo 538: incumplimiento de dos o más obligaciones frente a dos o más acreedores por más de 90 días —o dos o más procesos de cobro en curso— y que esas obligaciones representen <strong>al menos el 30% de tu pasivo total</strong>.</p>

<p>Recuerda el matiz: para ese porcentaje no se cuentan los créditos que se estén pagando por libranza o descuento de nómina, salvo que hayan dejado de abonarse.</p>

<h2>Paso 2 — Reúne los diez elementos del artículo 539</h2>

<p>La solicitud debe presentarla <strong>directamente el deudor</strong>, quien puede comparecer acompañado o representado por apoderado judicial. Es obligatorio el apoderado cuando se supera la mínima cuantía. Esto es lo que la norma exige:</p>

<div class="tabla-wrap">
<table>
  <thead>
    <tr><th>#</th><th>Qué debes aportar</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Informe preciso de las causas que te llevaron a la cesación de pagos.</td></tr>
    <tr><td>2</td><td>La propuesta para la negociación de deudas: <strong>clara, expresa y objetiva</strong>.</td></tr>
    <tr><td>3</td><td>Relación completa y actualizada de todos los acreedores, en el orden de prelación de créditos de los artículos 2488 y siguientes del Código Civil, con nombre, domicilio, correo, cuantía diferenciando capital e intereses, naturaleza del crédito, tasas, documentos, fechas y datos de codeudores, fiadores o avalistas.</td></tr>
    <tr><td>4</td><td>Relación completa y detallada de tus bienes, con valores estimados, gravámenes, afectaciones y medidas cautelares, indicando cuáles están afectados a vivienda familiar y cuáles son patrimonio de familia inembargable, con documentos que acrediten la información.</td></tr>
    <tr><td>5</td><td>Relación de los procesos judiciales y de cualquier actuación administrativa o privada de carácter patrimonial, con juzgado u oficina y estado actual.</td></tr>
    <tr><td>6</td><td>Certificación de ingresos expedida por el empleador o fondo de pensiones; si eres independiente, una declaración de los mismos.</td></tr>
    <tr><td>7</td><td>Monto de los recursos disponibles para pago, descontados los gastos necesarios de subsistencia tuyos y de tu familia.</td></tr>
    <tr><td>8</td><td>Información sobre si tienes o tuviste sociedad conyugal o patrimonial vigente, con copia de la escritura o sentencia de liquidación si ocurrió en los dos años anteriores.</td></tr>
    <tr><td>9</td><td>Discriminación de las obligaciones alimentarias a tu cargo, con cuantía, beneficiarios y certificado del <strong>REDAM</strong>.</td></tr>
    <tr><td>10</td><td>Constancia de matrícula mercantil, si eres pequeño comerciante.</td></tr>
  </tbody>
</table>
</div>

<p>Dos advertencias que están en los parágrafos del mismo artículo. Primera: <strong>todo se entiende rendido bajo la gravedad del juramento</strong>, y debes manifestar expresamente que no incurriste en omisiones o imprecisiones que impidan conocer tu verdadera situación económica. Segunda: la relación de acreedores y bienes debe hacerse <strong>con corte al último día del mes inmediatamente anterior</strong> a la presentación.</p>

<p>Vale la pena tomarse en serio la exactitud: el artículo 571 le niega la extinción de saldos a quien omitió dolosamente información relevante.</p>

<h2>Paso 3 — Radica ante el centro de conciliación o la notaría</h2>

<p>El artículo 533 asigna la competencia a los centros de conciliación del domicilio del deudor <strong>expresamente autorizados por el Ministerio de Justicia y del Derecho</strong>, y a las notarías con conciliadores inscritos. Los abogados conciliadores no pueden conocer directamente: solo por designación del centro.</p>

<p>Si en tu municipio no hay centro autorizado ni notaría con lista de conciliadores, puedes presentar la solicitud ante cualquiera que sí lo esté dentro del mismo circuito judicial o notarial. Y si el centro tiene la infraestructura tecnológica adecuada, puede tramitarlo <strong>virtualmente con competencia nacional</strong>, incluso si vives en el exterior.</p>

<p>Un dato útil: el parágrafo cuarto del artículo 539 prohíbe que los centros o notarías impongan a los deudores <strong>modelos inmodificables de solicitud</strong>.</p>

<h2>Paso 4 — Designación del conciliador y aceptación</h2>

<p>Según el artículo 541, <strong>al día siguiente</strong> de presentada la solicitud el centro designa al conciliador, que debe manifestar su aceptación dentro de los dos días siguientes a la notificación del encargo, so pena de ser excluido de la lista.</p>

<p>Verificado el cumplimiento de los requisitos, el artículo 543 ordena dar inicio al procedimiento y fijar fecha para la audiencia de negociación <strong>dentro de los diez días siguientes a la aceptación</strong>. Si eres comerciante, en ese mismo acto se dispone tu inscripción en el registro mercantil.</p>

<h2>Paso 5 — Los efectos empiezan de inmediato</h2>

<p>Desde la aceptación operan las protecciones del artículo 545: se suspenden procesos ejecutivos y embargos, cesan los descuentos de nómina y libranza salvo alimentos, no pueden cortarte los servicios públicos domiciliarios por deudas anteriores y se interrumpe la prescripción.</p>

<p>Ojo con una carga que aparece aquí: dentro de los <strong>cinco días siguientes</strong> a la aceptación debes presentar una relación actualizada de tus obligaciones y procesos. Si no la presentas, se entiende que la relación inicial no varió.</p>

<h2>Paso 6 — La audiencia de negociación</h2>

<p>El procedimiento tiene un plazo de <strong>60 días</strong> desde que queda en firme la aceptación (art. 544), prorrogable por 30 días más a solicitud conjunta del deudor y de acreedores con derechos ya conciliados, y hasta 90 días adicionales para el deudor comerciante con voto favorable de la mayoría.</p>

<p>Si vencido el término no se celebra acuerdo, el artículo 559 obliga al conciliador a declarar el fracaso y remitir de inmediato las diligencias al juez civil para que decrete la liquidación patrimonial. Por eso la calidad de la propuesta del numeral 2 del artículo 539 es determinante: no es un trámite formal, es lo que decide el resultado.</p>

<h2>¿Y si me arrepiento?</h2>

<p>El parágrafo del artículo 545 permite <strong>retirar</strong> la solicitud mientras no se haya hecho efectivo ninguno de los efectos de los numerales 1 y 2, y <strong>desistir</strong> mientras no se haya aprobado el acuerdo. La aceptación del desistimiento reanuda de inmediato los procesos de ejecución suspendidos, y el conciliador oficia a los funcionarios correspondientes al día siguiente.</p>

<p>Conviene saber el costo: desistir activa el plazo de espera de <strong>cinco años</strong> del artículo 574 antes de poder solicitar un nuevo procedimiento.</p>

<h2>El error que más solicitudes tumba</h2>

<p>No es el desconocimiento de la ley: es el inventario. Una relación de acreedores mal ordenada según la prelación del Código Civil, bienes sin documentos de respaldo, o una propuesta de pago que no resiste el análisis de flujo de caja llevan al rechazo o al fracaso de la negociación. Y el fracaso, como vimos, no devuelve las cosas a su lugar: abre la liquidación.</p>

<p>En Deuda OFF preparamos el expediente completo y evaluamos la viabilidad antes de radicar. La consulta inicial es gratuita y confidencial.</p>
    `,
  },
  {
    slug: 'como-saber-si-tengo-un-embargo',
    title: 'Cómo saber si tengo un embargo en Colombia: 5 formas de verificarlo',
    description: 'Cómo consultar si tienes un embargo sobre tu salario, cuenta bancaria o bienes en Colombia, qué señales lo anticipan y cómo suspenderlo legalmente con el proceso de insolvencia.',
    date: '2026-07-29',
    dateModified: '2026-07-29',
    category: 'Guías',
    readTime: '8 min',
    about: ['Embargo en Colombia', 'Consulta de procesos judiciales', 'Suspensión de embargos', 'Ley 2445 de 2025'],
    mentions: ['Rama Judicial de Colombia', 'Superintendencia de Notariado y Registro', 'Núcleo Jurídico SAS'],
    sources: [
      { label: 'Consulta de Procesos Nacional Unificada — Rama Judicial de Colombia', href: 'https://consultaprocesos.ramajudicial.gov.co/' },
      { label: 'Ley 2445 de 2025 — texto oficial, Secretaría del Senado de la República', href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_2445_2025.html' },
      { label: 'Ley 1564 de 2012 (Código General del Proceso)', href: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1564_2012.html' },
    ],
    faqs: [
      {
        q: '¿Cómo puedo saber si tengo un embargo?',
        a: 'Hay cinco vías: consultar tu nombre o cédula en el portal de Consulta de Procesos de la Rama Judicial, revisar el desprendible de nómina en busca de descuentos judiciales, revisar los extractos y saldos de tus cuentas bancarias, pedir el certificado de tradición y libertad de tus inmuebles ante la Oficina de Registro de Instrumentos Públicos, y consultar el registro del vehículo en el RUNT o la secretaría de tránsito.',
      },
      {
        q: '¿Me pueden embargar sin avisarme?',
        a: 'El embargo se decreta dentro de un proceso ejecutivo en el que debe notificarse al demandado. En la práctica, muchas personas se enteran cuando ven el descuento en la nómina o la cuenta bloqueada, porque la notificación se surtió en una dirección desactualizada o mediante emplazamiento. Que no te hayas enterado no significa que el proceso no exista: por eso conviene consultar directamente en la Rama Judicial.',
      },
      {
        q: '¿Cuánto me pueden embargar del salario?',
        a: 'Como regla general en Colombia el salario mínimo legal es inembargable, y del excedente puede embargarse hasta la quinta parte. La excepción son las obligaciones alimentarias y las deudas con cooperativas, donde el límite es hasta el 50%. Verificar que el descuento respeta esos topes es uno de los primeros puntos a revisar.',
      },
      {
        q: '¿Cómo puedo detener un embargo legalmente?',
        a: 'El artículo 545 del Código General del Proceso establece que desde la aceptación de la solicitud de negociación de deudas se suspenden los procesos de ejecución en curso, y esa suspensión incluye la ejecución aún no practicada de medidas cautelares ya decretadas sobre bienes, derechos, cuentas bancarias y emolumentos. También cesan los descuentos de nómina y libranza, salvo obligaciones alimentarias.',
      },
      {
        q: '¿Qué pasa si me descuentan de la nómina después de radicar la insolvencia?',
        a: 'El numeral 2 del artículo 545 dispone que los actos ejecutados en contravención de la suspensión son ineficaces de pleno derecho. El conciliador pone la sanción en conocimiento del pagador y del acreedor, junto con la orden de devolución inmediata de las sumas descontadas, y ambos responden solidariamente desde que recibieron la comunicación.',
      },
      {
        q: '¿El embargo caduca solo con el tiempo?',
        a: 'No. Una medida cautelar se levanta por orden del juez que la decretó, sea porque se pagó la obligación, prosperó una excepción, se declaró la nulidad, o porque opera la protección de un procedimiento de insolvencia. Esperar no resuelve el embargo, y mientras tanto los intereses siguen corriendo.',
      },
    ],
    content: `
<p class="definicion"><strong>Respuesta directa:</strong> Para saber si tienes un embargo en Colombia puedes consultar tu cédula en el portal de Consulta de Procesos de la Rama Judicial, revisar tu desprendible de nómina buscando descuentos judiciales, verificar el estado de tus cuentas bancarias, pedir el certificado de tradición y libertad de tus inmuebles y consultar el registro de tu vehículo. Las cinco vías son gratuitas o de bajo costo.</p>

<p>La mayoría de personas descubre un embargo por sorpresa: un descuento inesperado en el sueldo o una cuenta bloqueada. Esta guía te muestra cómo verificarlo antes de que ocurra, y qué puedes hacer si ya ocurrió.</p>

<h2>1. Consulta de Procesos de la Rama Judicial</h2>

<p>Es la vía más directa. El portal de <a href="https://consultaprocesos.ramajudicial.gov.co/" target="_blank" rel="noopener noreferrer nofollow">Consulta de Procesos Nacional Unificada</a> permite buscar procesos por nombre o número de documento de las partes.</p>

<ul>
  <li>Busca por <strong>tu número de cédula</strong> y también por tu nombre completo, con y sin tildes: los registros no siempre son consistentes.</li>
  <li>Revisa procesos en los que figures como <strong>demandado</strong>, especialmente ejecutivos singulares, hipotecarios o prendarios.</li>
  <li>Abre las actuaciones para ver si hay auto que decrete medidas cautelares.</li>
</ul>

<p>Ten presente que no todos los despachos actualizan con la misma oportunidad, y que los procesos de cobro coactivo de entidades públicas —DIAN, secretarías de tránsito, municipios— no siempre aparecen ahí, porque no son procesos judiciales.</p>

<h2>2. Revisa tu desprendible de nómina</h2>

<p>Si el embargo recayó sobre tu salario, aparecerá como un descuento identificado con expresiones como <em>embargo judicial</em>, <em>descuento por orden judicial</em> o el número del proceso.</p>

<p>Dos cosas para verificar de inmediato:</p>

<ul>
  <li><strong>Que respeten los topes legales.</strong> Como regla general el salario mínimo es inembargable y del excedente puede embargarse hasta la quinta parte. La excepción son las obligaciones alimentarias y las deudas con cooperativas, donde el límite llega al 50%.</li>
  <li><strong>Que no haya doble descuento</strong> por la misma obligación, algo más común de lo que parece cuando conviven una libranza y un embargo.</li>
</ul>

<p>Tu pagador está obligado a informarte el origen del descuento si se lo solicitas.</p>

<h2>3. Verifica tus cuentas bancarias</h2>

<p>Un embargo de cuentas se manifiesta como saldo retenido o imposibilidad de disponer de los fondos. Consulta el detalle en tu banca en línea o pide en la sucursal la constancia del oficio que originó la retención: ahí figura el juzgado y el número de proceso, que es lo que necesitas para rastrearlo.</p>

<p>Recuerda que hay montos protegidos: los depósitos en cuentas de ahorro tienen un tope legal de inembargabilidad, y las cuentas marcadas como cuenta de ahorro para el fomento de la construcción o similares tienen reglas propias.</p>

<h2>4. Pide el certificado de tradición y libertad</h2>

<p>Para inmuebles, el certificado de tradición y libertad que expide la Oficina de Registro de Instrumentos Públicos muestra en sus anotaciones cualquier embargo inscrito, con la fecha y el despacho que lo ordenó. Se solicita en línea y tiene un costo bajo.</p>

<p>Es la verificación más confiable, porque un embargo sobre inmueble solo produce efectos si está inscrito.</p>

<h2>5. Consulta el registro de tu vehículo</h2>

<p>Para vehículos, la consulta ante el RUNT o la secretaría de tránsito donde esté matriculado revela limitaciones a la propiedad, incluidos embargos. También aparecerán prendas y otras afectaciones.</p>

<h2>Señales de que un embargo viene en camino</h2>

<p>Antes del embargo casi siempre hay avisos. Si estás viendo esto, conviene actuar antes de que la medida se materialice:</p>

<ul>
  <li>Llamadas de cobranza que pasan de la entidad original a una firma de abogados o casa de cobranza.</li>
  <li>Comunicaciones que anuncian el "inicio de acciones judiciales" o mencionan un proceso ejecutivo.</li>
  <li>Notificaciones por correo certificado a tu dirección registrada, o avisos de emplazamiento.</li>
  <li>Mora superior a 90 días en obligaciones con garantía o con pagaré firmado.</li>
</ul>

<h2>Cómo suspender un embargo legalmente</h2>

<p>Aquí está la parte útil. El procedimiento de insolvencia de persona natural no solo negocia la deuda: <strong>detiene la ejecución</strong>. El artículo 545 del Código General del Proceso es explícito.</p>

<p class="cita-norma"><strong>Artículo 545 CGP, numeral 1.</strong> No podrán iniciarse contra el deudor nuevos procesos o trámites públicos o privados de ejecución (...) y se suspenderán los que estuvieren en curso al momento de la aceptación. La suspensión incluirá la ejecución aún no totalmente practicada de medidas cautelares ya decretadas respecto de bienes o derechos pertenecientes al deudor y emolumentos que este tenga por recibir por cualquier causa, personalmente o en cuentas bancarias o por medio de cualquier producto financiero.</p>

<p>En concreto, desde la aceptación de la solicitud:</p>

<ul>
  <li><strong>Se suspenden los procesos ejecutivos</strong> en curso y no pueden iniciarse nuevos.</li>
  <li><strong>Se frena la ejecución de embargos</strong> ya decretados pero no practicados del todo, incluidos los de cuentas bancarias y emolumentos.</li>
  <li><strong>Cesan los descuentos de nómina y libranza</strong>, salvo obligaciones alimentarias. Lo que se descuente pese a ello es <strong>ineficaz de pleno derecho</strong>, con orden de devolución inmediata y responsabilidad solidaria del pagador y del acreedor.</li>
  <li><strong>No pueden cortarte los servicios públicos domiciliarios</strong> por deudas anteriores, y si ya estaban cortados deben restablecerse.</li>
</ul>

<p>El mismo numeral 1 añade una herramienta práctica: para alegar la nulidad del proceso ante el juez, el funcionario o el particular encargado del cobro, <strong>basta presentar copia de la certificación que expida el conciliador</strong> sobre la aceptación al procedimiento.</p>

<h2>Y si el acreedor sigue cobrando</h2>

<p>La Ley 2445 de 2025 puso sanciones concretas. Al acreedor ya notificado que insista en diligencias de cobranza le corresponde llamado de atención la primera vez, amonestación la segunda y postergación del pago de todas sus obligaciones calificadas la tercera. Desde la cuarta, el conciliador o el juez remite la queja a la Superintendencia Financiera o a la de Industria y Comercio para que se imponga una <strong>multa del 10% del monto de los créditos cobrados</strong>, incluidos intereses.</p>

<h2>Qué hacer ahora</h2>

<p>Si confirmaste que tienes un embargo, el orden razonable es: identificar el proceso y el despacho, verificar que los descuentos respetan los topes legales, y evaluar si tu situación configura la cesación de pagos del artículo 538 —mora superior a 90 días con dos o más acreedores y al menos el 30% del pasivo en mora—. Si la configura, el procedimiento de insolvencia es la vía para suspender la ejecución y renegociar.</p>

<p>Si quieres el detalle normativo, revisa nuestra guía sobre la <a href="/blog/ley-2445-de-2025-insolvencia-colombia">ley de insolvencia en Colombia</a>, con el articulado citado.</p>

<p>Un embargo no se resuelve esperando. En Deuda OFF revisamos tu caso sin costo y te decimos con claridad qué protección puedes activar y en cuánto tiempo.</p>
    `,
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug)
}
