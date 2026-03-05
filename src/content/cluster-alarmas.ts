import { registerPage } from "@/lib/pages-store";
import { CITY_DATA } from "@/lib/cities";
import { PageContent } from "@/lib/types";

// ─────────────────────────────────────────────
// PILAR: /alarmas-colombia/
// ─────────────────────────────────────────────
registerPage({
  slug: "alarmas-colombia",
  type: "pilar",
  cluster: "alarmas",
  focusKeyword: "alarmas colombia",
  title: "Alarmas de Seguridad en Colombia 2026 | Guía Completa e Instalación",
  h1: "Alarmas de Seguridad en Colombia: Guía Completa 2026",
  metaDescription:
    "Todo sobre alarmas de seguridad en Colombia: tipos, precios, monitoreo y cómo elegir la mejor para su hogar o empresa. Instalación profesional con garantía.",
  intro:
    "Las alarmas de seguridad en Colombia son el complemento indispensable de cualquier sistema de protección. Detectan intrusiones, incendios y emergencias antes de que el daño ocurra, y alertan a los ocupantes y servicios de emergencia en segundos. En esta guía encuentra todo lo que necesita saber para elegir e instalar la alarma correcta.",
  body: `
<h2>Tipos de alarmas de seguridad en Colombia</h2>

<h3>Alarmas anti-intrusión para hogar</h3>
<p>Las más comunes. Combinan sensores de movimiento (PIR), sensores de apertura en puertas y ventanas, y sirena exterior. Cuando se activan, suenan durante un tiempo configurable y pueden notificar al celular del propietario o a una central de monitoreo.</p>

<h3>Alarmas monitoreadas con central</h3>
<p>El sistema envía la alerta no solo al propietario, sino a una central de monitoreo que opera 24/7. Ante una intrusión, la central verifica, notifica a la policía y despacha guardas si es necesario. Es el nivel de protección más alto disponible para residencias y empresas.</p>

<h3>Alarmas para negocio y empresa</h3>
<p>Sistemas más robustos con múltiples zonas, teclados, tarjetas o biometría para armar/desarmar. Se integran con CCTV, control de acceso e iluminación automática para una respuesta coordinada ante cualquier evento.</p>

<h3>Alarmas contra incendio</h3>
<p>Detectan humo, calor o gases. Obligatorias en edificios comerciales e industriales bajo la norma NSR-10 y el RETIE. Incluyen detectores, central de alarma contra incendio y sirena de evacuación.</p>

<h3>Alarmas inalámbricas (WiFi/GSM)</h3>
<p>No requieren cableado. Se instalan en pocas horas, son ideales para arrendatarios y propiedades donde el cableado es difícil. Funcionan por WiFi o señal GSM/4G como respaldo cuando se va internet.</p>

<h2>¿Cómo funciona una alarma de seguridad?</h2>
<ol>
  <li><strong>Sensores detectan el evento</strong> (movimiento, apertura, vibración, humo).</li>
  <li><strong>La central de alarma procesa la señal</strong> y verifica si el sistema está armado.</li>
  <li><strong>Si está armado:</strong> activa la sirena, envía notificación push al celular y (si tiene monitoreo) alerta a la central.</li>
  <li><strong>La central de monitoreo responde:</strong> llama al propietario, y si no contesta, despacha guardia y notifica a la policía.</li>
</ol>

<h2>Precios de alarmas de seguridad en Colombia (2026)</h2>
<table>
  <thead>
    <tr><th>Tipo</th><th>Precio instalado</th><th>Monitoreo mensual</th></tr>
  </thead>
  <tbody>
    <tr><td>Alarma básica hogar (sin monitoreo)</td><td>$600.000 – $1.200.000</td><td>No aplica</td></tr>
    <tr><td>Alarma hogar + app celular</td><td>$900.000 – $1.800.000</td><td>No aplica</td></tr>
    <tr><td>Alarma monitoreada residencial</td><td>$1.200.000 – $2.500.000</td><td>$50.000 – $90.000/mes</td></tr>
    <tr><td>Alarma empresarial (multi-zona)</td><td>$2.500.000 – $6.000.000</td><td>$90.000 – $200.000/mes</td></tr>
    <tr><td>Alarma contra incendio</td><td>$3.000.000 +</td><td>Opcional</td></tr>
  </tbody>
</table>

<h2>¿Con o sin monitoreo?</h2>
<p>Una alarma sin monitoreo avisa al propietario, pero si este no responde (está dormido, sin señal, de viaje), nadie actúa. Con monitoreo, una central responde independientemente. Para propiedades desocupadas durante horas laborales o de noche, el monitoreo es muy recomendable.</p>

<h2>Marcas que instalamos</h2>
<ul>
  <li><strong>DSC (Digital Security Controls):</strong> estándar de la industria, robusta y confiable. La más instalada en Colombia.</li>
  <li><strong>Paradox:</strong> canadiense, excelente relación calidad-precio, app gratuita para celular.</li>
  <li><strong>Bosch:</strong> para instalaciones empresariales de alta gama.</li>
  <li><strong>Ajax Systems:</strong> inalámbrica europea, diseño moderno, instalación sin cables en 2-4 horas.</li>
</ul>

<p>¿Quiere proteger también el perímetro? Combine su alarma con <a href="/cercas-electricas-colombia/">cercas eléctricas</a> o <a href="/camaras-de-seguridad-colombia/">cámaras de seguridad</a> para una solución completa.</p>
`,
  faqs: [
    {
      q: "¿Cuánto cuesta una alarma de seguridad en Colombia?",
      a: "Una alarma residencial básica con instalación cuesta entre $600.000 y $1.200.000 COP. Los sistemas con monitoreo profesional arrancan desde $1.200.000 más una cuota mensual de $50.000 a $90.000. El precio final depende del tamaño de la propiedad y el número de sensores.",
    },
    {
      q: "¿Qué tan efectivas son las alarmas en Colombia?",
      a: "Muy efectivas como disuasión. Estudios internacionales muestran que las propiedades con alarma visible tienen entre 3 y 5 veces menos probabilidad de ser objeto de hurto. En Colombia, la combinación de alarma + cámara + cerca eléctrica es la solución más completa.",
    },
    {
      q: "¿Necesito contratar monitoreo o puedo manejarlo yo mismo?",
      a: "Puede manejarlo usted mismo vía app celular si prefiere. Sin embargo, para propiedades desocupadas durante el día o de noche, el monitoreo profesional 24/7 garantiza una respuesta aunque usted no esté disponible o no escuche la notificación.",
    },
    {
      q: "¿Las alarmas inalámbricas son tan confiables como las cableadas?",
      a: "Los sistemas inalámbricos modernos (Ajax, DSC PowerSeries Neo inalámbrico) son muy confiables. Usan cifrado y comunicación encriptada. La ventaja: instalación en horas sin obras. La desventaja: dependen de baterías en sensores (duran 2-5 años) y pueden ser bloqueadas por interferencia, aunque los buenos sistemas detectan el bloqueo y lo reportan.",
    },
  ],
});

// ─────────────────────────────────────────────
// SATÉLITE: /alarma-para-casa/
// ─────────────────────────────────────────────
registerPage({
  slug: "alarma-para-casa",
  type: "satellite",
  cluster: "alarmas",
  focusKeyword: "alarma para casa colombia",
  title: "Alarma para Casa en Colombia 2026 | Tipos, Precios e Instalación",
  h1: "Alarma para Casa en Colombia: Todo lo que Necesita Saber (2026)",
  metaDescription:
    "Alarma para casa en Colombia: tipos, precios reales, qué marca elegir y si necesita monitoreo. Instalación profesional con garantía. Cotice gratis.",
  intro:
    "Una alarma para casa en Colombia puede marcar la diferencia entre un intento fallido de robo y una pérdida material dolorosa. Con más de 400 búsquedas mensuales, es uno de los sistemas más consultados. Aquí le explicamos qué tipos existen, cuánto cuestan y cuál es la mejor opción para su hogar.",
  body: `
<h2>¿Qué alarma para casa es la mejor en Colombia?</h2>
<p>No existe una respuesta única — depende del tipo de propiedad, si está en un conjunto cerrado o es casa independiente, si tiene vigilancia del conjunto y cuánto quiere gastar en mantenimiento mensual. Estas son las opciones más populares:</p>

<h3>Opción 1: Alarma básica con app (la más popular)</h3>
<p>Central de alarma WiFi + 2-4 sensores de movimiento + sensores de puertas/ventanas + sirena. Notificación en tiempo real al celular. Sin cuota mensual. Ideal para casas con propietario presente la mayor parte del tiempo. Costo: $800.000 – $1.400.000 COP instalado.</p>

<h3>Opción 2: Alarma monitoreada (la más segura)</h3>
<p>Igual que la anterior pero conectada a una central de monitoreo 24/7. Cuando se activa, la central llama al propietario y si no responde, despacha guardia y notifica a la policía. Costo: $1.200.000 – $2.000.000 + $60.000/mes de monitoreo.</p>

<h3>Opción 3: Alarma inalámbrica (la más rápida de instalar)</h3>
<p>Sin cables. Instalación en 2-4 horas sin perforar paredes. Ideal para apartamentos en arriendo o propiedades donde no se pueden hacer obras. Costo: $900.000 – $1.600.000 instalado.</p>

<h2>Sensores esenciales para una casa</h2>
<table>
  <thead>
    <tr><th>Sensor</th><th>Función</th><th>Dónde instalar</th></tr>
  </thead>
  <tbody>
    <tr><td>Detector de movimiento PIR</td><td>Detecta calor humano en movimiento</td><td>Sala, pasillos, escaleras</td></tr>
    <tr><td>Sensor magnético</td><td>Detecta apertura de puertas/ventanas</td><td>Puertas y ventanas principales</td></tr>
    <tr><td>Detector de vibración</td><td>Detecta golpes en vidrios/paredes</td><td>Ventanas grandes</td></tr>
    <tr><td>Sirena exterior</td><td>Alerta visual y sonora</td><td>Fachada visible desde la calle</td></tr>
    <tr><td>Pánico</td><td>Activación manual de emergencia</td><td>Habitación principal</td></tr>
  </tbody>
</table>

<h2>¿Vale la pena combinar alarma y cámaras?</h2>
<p>Absolutamente. La alarma detecta y disuade. Las cámaras graban y documentan. La combinación permite: (1) verificar visualmente si la alarma fue real o una falsa alarma, (2) tener evidencia para denuncias y seguros, (3) monitorear en tiempo real desde cualquier lugar. Vea <a href="/camaras-de-seguridad-para-casas/">cámaras para casas</a> para más información.</p>
`,
  faqs: [
    {
      q: "¿Cuántos sensores necesita una casa en Colombia?",
      a: "Una casa promedio necesita entre 4 y 8 sensores: 2-3 detectores de movimiento en áreas comunes, sensores magnéticos en puertas y ventanas principales (3-4), y sirena exterior. Para mayor seguridad, se añaden detectores de vibración en ventanas grandes.",
    },
    {
      q: "¿Las alarmas tienen muchas falsas alarmas?",
      a: "Los sistemas modernos bien configurados tienen muy pocas falsas alarmas. Se minimizan ajustando la sensibilidad de los sensores PIR, evitando colocarlos donde pasen mascotas y configurando correctamente el tiempo de entrada/salida.",
    },
  ],
});

// ─────────────────────────────────────────────
// SATÉLITE: /alarmas-monitoreadas-colombia/
// ─────────────────────────────────────────────
registerPage({
  slug: "alarmas-monitoreadas-colombia",
  type: "satellite",
  cluster: "alarmas",
  focusKeyword: "alarmas monitoreadas colombia",
  title: "Alarmas Monitoreadas Colombia 2026 | Monitoreo 24/7 con Respuesta",
  h1: "Alarmas Monitoreadas en Colombia: Monitoreo 24/7 con Respuesta a Emergencias",
  metaDescription:
    "Alarmas monitoreadas en Colombia: qué es el monitoreo, cuánto cuesta y por qué es la opción más segura para su hogar o negocio. Cotización gratuita.",
  intro:
    "Las alarmas monitoreadas en Colombia ofrecen el nivel de protección más alto: cuando se activa la alarma, una central profesional responde 24 horas al día, 7 días a la semana — incluso cuando usted está dormido, sin señal o de viaje.",
  body: `
<h2>¿Cómo funciona el monitoreo de alarmas?</h2>
<ol>
  <li>Su alarma se activa (sensor de movimiento, apertura de puerta, pánico manual).</li>
  <li>La central de alarma envía la señal a la empresa de monitoreo en segundos.</li>
  <li>Un operador intenta comunicarse con usted (llamada telefónica + WhatsApp).</li>
  <li>Si no hay respuesta o confirma la emergencia: despacha guardia de respuesta y notifica a la Policía.</li>
  <li>El guardia llega típicamente en 5-15 minutos en zonas urbanas.</li>
</ol>

<h2>¿Vale la pena pagar el monitoreo mensual?</h2>
<p>Depende de su perfil. El monitoreo vale la pena si:</p>
<ul>
  <li>Su propiedad está sola durante horas largas (casa de dos pisos, oficina, bodega).</li>
  <li>Viaja frecuentemente o tiene propiedades de recreo.</li>
  <li>Necesita evidencia para reclamar a su seguro de hogar (muchas aseguradoras exigen monitoreo para cubrir hurtos).</li>
  <li>La zona tiene historial de robos frecuentes.</li>
</ul>

<h2>Costo del monitoreo en Colombia (2026)</h2>
<table>
  <thead>
    <tr><th>Servicio</th><th>Costo mensual</th><th>Incluye</th></tr>
  </thead>
  <tbody>
    <tr><td>Monitoreo básico residencial</td><td>$50.000 – $70.000</td><td>Central 24/7, notificación celular</td></tr>
    <tr><td>Monitoreo con respuesta (guardia)</td><td>$70.000 – $120.000</td><td>Central + despacho de guardia</td></tr>
    <tr><td>Monitoreo empresarial</td><td>$100.000 – $250.000</td><td>Multi-zona, reportes, guardia prioritario</td></tr>
  </tbody>
</table>
<p>Nosotros instalamos el sistema y le conectamos con la central de monitoreo de su preferencia, o puede contratar el servicio de monitoreo directamente con nosotros.</p>

<p>¿Quiere ver todas las opciones? Vea la <a href="/alarmas-colombia/">guía completa de alarmas de seguridad en Colombia</a>.</p>
`,
  faqs: [
    {
      q: "¿Puedo cambiar de empresa de monitoreo si no me queda?",
      a: "Sí. Los sistemas DSC y Paradox son compatibles con la mayoría de centrales de monitoreo en Colombia. No está atado a una sola empresa. Si la central actual no le satisface, puede migrar el servicio sin cambiar el equipo instalado.",
    },
    {
      q: "¿Qué pasa si se va la luz o internet?",
      a: "Los buenos sistemas tienen batería de respaldo (4-8 horas) y comunicación dual: WiFi principal + señal GSM/4G de respaldo. Si se va la luz y el internet, el sistema sigue funcionando y comunicándose con la central por 4G.",
    },
  ],
});

// ─────────────────────────────────────────────
// 12 PÁGINAS DE CIUDAD
// ─────────────────────────────────────────────
function generateAlarmasCityPage(city: (typeof CITY_DATA)[0]): PageContent {
  const cityName = city.name;
  const zones = city.neighborhoods.join(", ");
  const coastal = city.isCoastal;

  const coastalNote = coastal
    ? `<p class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-900 text-sm"><strong>🌊 Nota para ${cityName}:</strong> En ciudades costeras como ${cityName}, recomendamos sistemas inalámbricos Ajax o centrales con carcasa sellada IP44, resistentes a la humedad salina del ambiente marino.</p>`
    : "";

  return {
    slug: `alarma-para-casa-${city.slug}`,
    type: "city",
    cluster: "alarmas",
    city: cityName,
    citySlug: city.slug,
    isCoastal: coastal,
    focusKeyword: `alarma de seguridad ${cityName}`,
    title: `Alarma de Seguridad en ${cityName} 2026 | Instalación y Monitoreo`,
    h1: `Alarma de Seguridad en ${cityName}: Instalación Profesional 2026`,
    metaDescription: `Instalamos alarmas de seguridad en ${cityName} para hogares y empresas. Con o sin monitoreo 24/7. Visita técnica gratuita. Cotice ahora.`,
    intro: `Las alarmas de seguridad en ${cityName} son la primera línea de defensa para proteger su hogar o negocio. ${city.context} Instalamos sistemas profesionales DSC, Paradox y Ajax con garantía y soporte técnico en ${city.department}.`,
    body: `
${coastalNote}

<h2>Instalación de alarmas en ${cityName}</h2>
<p>Nuestro equipo en ${cityName} instala sistemas completos de alarma anti-intrusión para casas, apartamentos, locales y empresas. La instalación incluye visita técnica gratuita donde evaluamos la propiedad, definimos las zonas a cubrir y le presentamos un sistema a la medida de su presupuesto.</p>

<h2>Zonas con mayor demanda en ${cityName}</h2>
<p>Atendemos toda el área urbana de ${cityName} con mayor demanda en sectores como ${zones}. También cubrimos zonas periféricas y municipios de ${city.department} sin costo adicional de desplazamiento.</p>

<h2>Opciones disponibles en ${cityName}</h2>
<ul>
  <li><strong>Alarma básica con app:</strong> notificación en tiempo real al celular, sin cuota mensual. Desde $800.000 COP instalada.</li>
  <li><strong>Alarma monitoreada:</strong> central 24/7 con respuesta de guardia. Desde $1.200.000 + $60.000/mes.</li>
  <li><strong>Alarma inalámbrica Ajax:</strong> instalación sin cables en 2-4 horas. Ideal para apartamentos en arriendo.</li>
  <li><strong>Sistema empresarial multi-zona:</strong> para negocios, bodegas y empresas en ${cityName}.</li>
</ul>

<h2>Precio de alarmas en ${cityName}</h2>
<table>
  <thead>
    <tr><th>Sistema</th><th>Precio instalado</th><th>Monitoreo</th></tr>
  </thead>
  <tbody>
    <tr><td>Hogar básico (4 sensores)</td><td>$700.000 – $1.200.000</td><td>Opcional</td></tr>
    <tr><td>Hogar completo (6-8 sensores)</td><td>$1.200.000 – $2.000.000</td><td>Opcional</td></tr>
    <tr><td>Negocio / local</td><td>$1.500.000 – $3.000.000</td><td>Recomendado</td></tr>
    <tr><td>Inalámbrica Ajax</td><td>$900.000 – $1.800.000</td><td>Opcional</td></tr>
  </tbody>
</table>

<h2>Proceso de instalación en ${cityName}</h2>
<ol>
  <li>Solicite visita técnica gratuita por WhatsApp.</li>
  <li>Evaluamos su propiedad y definimos el sistema.</li>
  <li>Cotización por escrito con precio fijo.</li>
  <li>Instalación en 1 día (sistemas cableados) o 2-4 horas (inalámbricos).</li>
  <li>Configuramos el acceso remoto desde su celular.</li>
  <li>Le enseñamos a armar, desarmar y revisar eventos.</li>
</ol>

<p>Ver también: <a href="/alarmas-colombia/">guía completa de alarmas en Colombia</a> y <a href="/camaras-de-seguridad-${city.slug}/">cámaras de seguridad en ${cityName}</a>.</p>
`,
    faqs: [
      {
        q: `¿Cuánto cuesta instalar una alarma en ${cityName}?`,
        a: `Una alarma residencial completa en ${cityName} con 4-6 sensores cuesta entre $700.000 y $1.500.000 COP instalada. El monitoreo profesional es opcional y cuesta $50.000 – $90.000/mes adicionales. Hacemos visita técnica gratuita para cotizar exacto.`,
      },
      {
        q: `¿Tienen técnicos de alarmas disponibles en ${cityName}?`,
        a: `Sí, contamos con técnicos certificados en ${cityName} y toda el área de ${city.department}. Coordinamos la visita técnica en menos de 24 horas. También ofrecemos mantenimiento preventivo y soporte técnico posterior a la instalación.`,
      },
      {
        q: `¿Sirve la misma alarma para casa y negocio en ${cityName}?`,
        a: `Los sistemas básicos pueden adaptarse, pero los negocios generalmente necesitan más zonas, control de acceso por tarjeta y monitoreo más robusto. Le recomendamos el sistema adecuado para cada caso durante la visita técnica gratuita en ${cityName}.`,
      },
    ],
  };
}

CITY_DATA.forEach((city) => {
  registerPage(generateAlarmasCityPage(city));
});
