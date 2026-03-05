import { registerPage } from "@/lib/pages-store";
import { CITY_DATA } from "@/lib/cities";
import { PageContent } from "@/lib/types";

// ─────────────────────────────────────────────
// PILAR: /cercas-electricas-colombia/
// ─────────────────────────────────────────────
registerPage({
  slug: "cercas-electricas-colombia",
  type: "pilar",
  cluster: "cercas-electricas",
  focusKeyword: "cercas eléctricas colombia",
  title: "Cercas Eléctricas en Colombia 2026 | Instalación Certificada RETIE",
  h1: "Cercas Eléctricas en Colombia: Guía Completa e Instalación Certificada 2026",
  metaDescription:
    "Todo sobre cercas eléctricas en Colombia: tipos, precios, norma RETIE y cómo elegir la mejor instalación para su casa, empresa o finca. Cotización gratuita.",
  intro:
    "Las cercas eléctricas en Colombia son una de las soluciones de seguridad perimetral más efectivas y económicas del mercado. Disuaden al intruso antes de que ingrese, sin necesidad de confrontación y a un costo menor que la vigilancia humana. En esta guía encuentra todo lo que necesita saber sobre instalación, precios y normativa en Colombia.",
  body: `
<h2>¿Qué es una cerca eléctrica y cómo funciona?</h2>
<p>Una cerca eléctrica perimetral es un sistema de cables conductores energizados con pulsos de alto voltaje (entre 5.000 y 14.000 voltios) y bajo amperaje. La descarga es disuasiva e incómoda, pero no peligrosa para la vida humana ni animal. Al tocar los cables, el intruso recibe un impulso eléctrico que le impide continuar y activa la alarma del sistema.</p>
<p>A diferencia de las rejas comunes, la cerca eléctrica actúa como barrera activa: avisa en tiempo real cuando alguien intenta traspasar el perímetro, incluso antes de que ingrese a la propiedad.</p>

<h2>Tipos de cercas eléctricas disponibles en Colombia</h2>

<h3>Cerca eléctrica sobre muro o reja</h3>
<p>La más común en Colombia. Se instala sobre muros existentes, rejas o cerramientos, añadiendo 3 a 6 hileras de cable conductor tensado. Es la opción más económica y fácil de instalar en propiedades ya cerradas.</p>

<h3>Cerca eléctrica autoportante (desde el piso)</h3>
<p>Se instala sobre postes propios desde el piso, sin necesidad de muro previo. Ideal para fincas, lotes industriales y perímetros sin cerramiento previo.</p>

<h3>Cerca eléctrica para fincas y zonas rurales</h3>
<p>Sistemas de mayor voltaje y alcance para cercar perímetros extensos. Algunos sistemas protegen hasta varios kilómetros de lindero. Compatible con monitoreo remoto vía GSM o señal celular.</p>

<h3>Cerca eléctrica con alarma y monitoreo</h3>
<p>Los sistemas modernos integran la cerca eléctrica con central de alarma, sirena, iluminación automática y notificación al celular. Cuando alguien toca la cerca, usted recibe una alerta instantánea y la sirena se activa.</p>

<h2>Norma RETIE y legalidad en Colombia</h2>
<p>En Colombia, la instalación de cercas eléctricas está regulada por el <strong>Reglamento Técnico de Instalaciones Eléctricas (RETIE)</strong> y supervisada por la Superintendencia de Vigilancia y Seguridad Privada (Supervigilancia). Los requisitos principales son:</p>
<ul>
  <li>El equipo energizador debe estar certificado según la norma IEC 60335-2-76.</li>
  <li>Debe instalarse señalización visible de advertencia cada cierta distancia del perímetro.</li>
  <li>En zonas de propiedad horizontal se requiere aval de la asamblea de copropietarios.</li>
  <li>No se puede instalar en zonas accesibles por niños sin protección adicional.</li>
</ul>
<p>Todas nuestras instalaciones cumplen la normativa RETIE vigente y se realizan con equipos certificados.</p>

<h2>Precios de cercas eléctricas en Colombia (2026)</h2>
<table>
  <thead>
    <tr><th>Tipo de instalación</th><th>Precio aproximado</th><th>Incluye</th></tr>
  </thead>
  <tbody>
    <tr><td>Cerca básica residencial (hasta 80m)</td><td>$1.200.000 – $1.800.000</td><td>Energizador + cable + instalación</td></tr>
    <tr><td>Cerca residencial completa (hasta 150m)</td><td>$1.800.000 – $2.800.000</td><td>Energizador + cable + alarma + instalación</td></tr>
    <tr><td>Cerca con monitoreo remoto</td><td>$2.500.000 – $4.000.000</td><td>Sistema completo + app celular</td></tr>
    <tr><td>Cerca industrial / finca (200m+)</td><td>$3.000.000 +</td><td>Según perímetro exacto</td></tr>
  </tbody>
</table>
<p>El precio final depende del perímetro total en metros lineales, el tipo de soporte (muro, reja o autoportante) y si incluye alarma integrada.</p>

<h2>Marcas de cercas eléctricas que instalamos</h2>
<p>Trabajamos con las marcas líderes del sector, todas certificadas RETIE:</p>
<ul>
  <li><strong>Linseg:</strong> fabricante colombiano, líder del mercado nacional, garantía local, repuestos disponibles en todo el país.</li>
  <li><strong>Nemtek:</strong> marca sudafricana, muy robusta para instalaciones industriales y fincas extensas.</li>
  <li><strong>Gallagher:</strong> reconocida globalmente para aplicaciones agrícolas y de seguridad de alto nivel.</li>
</ul>

<h2>¿Cerca eléctrica o cámaras de seguridad?</h2>
<p>No son excluyentes: se complementan perfectamente. La cerca eléctrica protege el perímetro antes del ingreso. Las cámaras registran y permiten identificar a quien intenta ingresar. La combinación de ambos sistemas es la solución más completa para cualquier propiedad en Colombia.</p>
<p>Vea también: <a href="/camaras-de-seguridad-colombia/">Guía de cámaras de seguridad en Colombia</a>.</p>
`,
  faqs: [
    {
      q: "¿Es peligrosa la descarga de una cerca eléctrica?",
      a: "No. Los sistemas certificados funcionan con alto voltaje pero muy bajo amperaje. La descarga es incómoda y disuasiva, pero no causa daño permanente ni riesgo de muerte. Los equipos certificados cumplen la norma IEC 60335-2-76 que establece los límites seguros.",
    },
    {
      q: "¿Necesito permiso para instalar una cerca eléctrica en Colombia?",
      a: "No se requiere permiso gubernamental específico, pero la instalación debe cumplir la norma RETIE y contar con señalización visible. En conjuntos residenciales se necesita aprobación de la asamblea de copropietarios. Nuestras instalaciones cumplen todos los requisitos.",
    },
    {
      q: "¿Cuánto dura una cerca eléctrica?",
      a: "Con mantenimiento básico, el energizador dura entre 8 y 15 años. El cable conductor puede necesitar reemplazo cada 5–8 años según la exposición al clima. Ofrecemos contratos de mantenimiento preventivo anual.",
    },
    {
      q: "¿La cerca eléctrica funciona si se va la luz?",
      a: "Los sistemas modernos incluyen batería de respaldo que mantiene la cerca activa entre 8 y 24 horas adicionales sin energía eléctrica. Es recomendable para zonas con cortes frecuentes.",
    },
  ],
});

// ─────────────────────────────────────────────
// SATÉLITE: /cerca-electrica-para-casa/
// ─────────────────────────────────────────────
registerPage({
  slug: "cerca-electrica-para-casa",
  type: "satellite",
  cluster: "cercas-electricas",
  focusKeyword: "cerca eléctrica para casa",
  title: "Cerca Eléctrica para Casa en Colombia 2026 | Instalación y Precios",
  h1: "Cerca Eléctrica para Casa: La Guía Definitiva para Colombia (2026)",
  metaDescription:
    "Cerca eléctrica para casa en Colombia: precios reales, tipos de instalación, qué marca elegir y cómo funciona. Visita técnica gratuita.",
  intro:
    "Una cerca eléctrica para casa en Colombia es la barrera perimetral más efectiva para proteger su familia y sus bienes. Con 320 búsquedas mensuales, es uno de los sistemas de seguridad más demandados en el país. Aquí encuentra todo lo que necesita saber antes de instalar.",
  body: `
<h2>¿Vale la pena instalar una cerca eléctrica en casa?</h2>
<p>Sí, y los números lo confirman. Las estadísticas de la Policía Nacional muestran que el 85% de los hurtos a residencias ocurren por superación del perímetro. Una cerca eléctrica detiene al intruso en ese primer punto. Además, el costo promedio de una instalación residencial ($1.200.000 – $2.000.000 COP) se recupera en menos de lo que cuesta un robo promedio en Colombia.</p>

<h2>¿Qué tipo de cerca eléctrica es mejor para una casa?</h2>

<h3>Casa con muro o reja existente</h3>
<p>La opción más económica: instalar las hileras de cable conductor directamente sobre el cerramiento existente. Se requieren entre 3 y 6 hileras según la altura del muro. El costo es menor porque no se necesitan postes adicionales.</p>

<h3>Casa sin cerramiento (lote abierto)</h3>
<p>Se instala una cerca autoportante con postes de acero galvanizado desde el piso. Es la solución para casas en zonas rurales, fincas o lotes sin muro. Mayor inversión inicial pero muy duradera.</p>

<h3>Casa en conjunto cerrado</h3>
<p>Requiere aprobación de la copropiedad. Generalmente se instala en el perímetro del conjunto, no en cada unidad individual. Consulte con la administración antes de cotizar.</p>

<h2>¿Cuántas hileras de cable necesita mi casa?</h2>
<table>
  <thead>
    <tr><th>Tipo de propiedad</th><th>Hileras recomendadas</th><th>Altura efectiva</th></tr>
  </thead>
  <tbody>
    <tr><td>Casa estrato 3–4</td><td>3–4 hileras</td><td>30–40 cm sobre el muro</td></tr>
    <tr><td>Casa estrato 5–6</td><td>5–6 hileras</td><td>50–60 cm sobre el muro</td></tr>
    <tr><td>Casa con riesgo alto</td><td>6–8 hileras</td><td>60–80 cm</td></tr>
  </tbody>
</table>

<h2>¿Se puede instalar cerca eléctrica en apartamento?</h2>
<p>En apartamentos individuales, no. Pero sí se puede instalar en el perímetro del conjunto residencial o edificio, previa aprobación de la asamblea de copropietarios. En ese caso, todos los residentes se benefician del sistema.</p>

<h2>Señalización obligatoria</h2>
<p>La norma colombiana exige señales de advertencia visibles. Nosotros incluimos las señales homologadas en toda instalación, cumpliendo la normativa RETIE sin costo adicional.</p>

<p>¿Quiere comparar con otros sistemas? Vea también <a href="/cercas-electricas-colombia/">guía completa de cercas eléctricas</a> o <a href="/camaras-de-seguridad-colombia/">cámaras de seguridad</a>.</p>
`,
  faqs: [
    {
      q: "¿Cuánto cuesta una cerca eléctrica para casa en Colombia?",
      a: "Para una casa residencial con perímetro de 60–100 metros lineales, el costo con instalación oscila entre $1.200.000 y $2.000.000 COP. Incluye energizador certificado, cable, soportes, señalización e instalación profesional.",
    },
    {
      q: "¿La cerca eléctrica asusta a las mascotas?",
      a: "La descarga es disuasiva para personas y animales. Para proteger a mascotas dentro del perímetro, la cerca se instala en el lado exterior del cerramiento, de modo que solo actúa si alguien intenta entrar desde afuera.",
    },
    {
      q: "¿Cuánto tiempo toma la instalación?",
      a: "Una instalación residencial estándar (perímetro de 80–120 metros) toma entre 4 y 8 horas de trabajo. Al final del día su sistema ya está activo y configurado.",
    },
  ],
});

// ─────────────────────────────────────────────
// SATÉLITE: /precio-cerca-electrica-colombia/
// ─────────────────────────────────────────────
registerPage({
  slug: "precio-cerca-electrica-colombia",
  type: "satellite",
  cluster: "cercas-electricas",
  focusKeyword: "precio cerca eléctrica colombia",
  title: "Precio Cerca Eléctrica Colombia 2026 | Costos Reales por Metro",
  h1: "¿Cuánto Cuesta una Cerca Eléctrica en Colombia? Precios Reales 2026",
  metaDescription:
    "Precios reales de cercas eléctricas en Colombia 2026: por metro lineal, tipo de instalación y marca. Cotización gratuita en 24 horas.",
  intro:
    "El precio de una cerca eléctrica en Colombia varía entre $8.000 y $25.000 COP por metro lineal instalado, dependiendo del tipo de sistema, la marca y la complejidad de la instalación. En esta guía le explicamos todos los factores que afectan el costo y cómo obtener el mejor precio.",
  body: `
<h2>Precio por metro lineal de cerca eléctrica en Colombia</h2>
<table>
  <thead>
    <tr><th>Tipo</th><th>Precio por metro lineal</th><th>Incluye</th></tr>
  </thead>
  <tbody>
    <tr><td>Básica sobre muro (3 hileras)</td><td>$8.000 – $12.000/m</td><td>Cable + soportes + instalación</td></tr>
    <tr><td>Estándar sobre muro (5 hileras)</td><td>$12.000 – $18.000/m</td><td>Cable + soportes + postes + instalación</td></tr>
    <tr><td>Con alarma integrada</td><td>$15.000 – $22.000/m</td><td>Sistema completo + central + instalación</td></tr>
    <tr><td>Autoportante (desde piso)</td><td>$18.000 – $30.000/m</td><td>Postes + cable + energizador + instalación</td></tr>
  </tbody>
</table>
<p><em>* A estos valores se suma el costo del energizador: $350.000 – $900.000 COP según capacidad.</em></p>

<h2>Costo total por tamaño de propiedad</h2>
<table>
  <thead>
    <tr><th>Perímetro aproximado</th><th>Tipo de propiedad</th><th>Costo total estimado</th></tr>
  </thead>
  <tbody>
    <tr><td>50–80 metros</td><td>Casa interior barrio</td><td>$1.200.000 – $1.800.000</td></tr>
    <tr><td>80–150 metros</td><td>Casa esquinera, local</td><td>$1.800.000 – $2.800.000</td></tr>
    <tr><td>150–300 metros</td><td>Empresa, bodega pequeña</td><td>$2.800.000 – $5.000.000</td></tr>
    <tr><td>300–1.000 metros</td><td>Conjunto residencial, finca</td><td>$5.000.000 – $15.000.000</td></tr>
  </tbody>
</table>

<h2>¿Qué NO debe incluirse en una cotización engañosa?</h2>
<ul>
  <li>Energizadores sin marca ni certificación (los más baratos del mercado son peligrosos).</li>
  <li>Cable de cobre delgado que se rompe con el primer jalón.</li>
  <li>Instalación sin señalización (ilegal en Colombia).</li>
  <li>Sin garantía por escrito.</li>
</ul>
<p>Si una cotización le parece demasiado barata, probablemente estén usando materiales de inferior calidad. Siempre exija especificaciones técnicas del energizador y el calibre del cable.</p>

<p>Vea la <a href="/cercas-electricas-colombia/">guía completa de cercas eléctricas</a> para más información.</p>
`,
  faqs: [
    {
      q: "¿El precio incluye el energizador?",
      a: "En nuestras cotizaciones sí incluye todo: energizador, cable, postes o soportes, señalización e instalación. Siempre exija una cotización detallada ítem por ítem antes de aceptar.",
    },
    {
      q: "¿Hay mantenimiento anual con costo?",
      a: "El mantenimiento preventivo anual (limpieza, tensión del cable, verificación del energizador) cuesta entre $150.000 y $300.000 COP dependiendo del perímetro. No es obligatorio pero se recomienda para prolongar la vida del sistema.",
    },
  ],
});

// ─────────────────────────────────────────────
// 12 PÁGINAS DE CIUDAD
// ─────────────────────────────────────────────
function generateCercasCityPage(city: (typeof CITY_DATA)[0]): PageContent {
  const cityName = city.name;
  const zones = city.neighborhoods.join(", ");
  const coastal = city.isCoastal;

  const coastalNote = coastal
    ? `<p class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-900 text-sm"><strong>🌊 Nota para ${cityName}:</strong> En zonas costeras como ${cityName} usamos cable de acero inoxidable y energizadores con carcasa sellada resistente a la salinidad y la humedad marina. Esto garantiza que su cerca eléctrica funcione correctamente sin oxidación prematura.</p>`
    : "";

  return {
    slug: `cerca-electrica-${city.slug}`,
    type: "city",
    cluster: "cercas-electricas",
    city: cityName,
    citySlug: city.slug,
    isCoastal: coastal,
    focusKeyword: `cerca eléctrica ${cityName}`,
    title: `Cerca Eléctrica en ${cityName} 2026 | Instalación Certificada RETIE`,
    h1: `Cerca Eléctrica en ${cityName}: Instalación Profesional Certificada 2026`,
    metaDescription: `Instalamos cercas eléctricas en ${cityName} con certificación RETIE. Energizadores garantizados, señalización incluida. Cotización gratuita en 24 horas.`,
    intro: `La cerca eléctrica en ${cityName} es la solución perimetral más efectiva para proteger casas, negocios y fincas. ${city.context} Instalamos sistemas certificados RETIE con garantía y soporte técnico local en ${city.department}.`,
    body: `
${coastalNote}

<h2>Instalación de cercas eléctricas en ${cityName}</h2>
<p>Nuestro equipo técnico en ${cityName} instala cercas eléctricas perimetrales para todo tipo de propiedad: casas, locales comerciales, empresas, bodegas y fincas. Cada instalación incluye visita técnica gratuita, donde medimos el perímetro y definimos el sistema más adecuado.</p>

<h2>Zonas de instalación en ${cityName}</h2>
<p>Instalamos en toda el área urbana y rural de ${cityName} y ${city.department}. Mayor demanda en sectores como ${zones}, aunque atendemos cualquier zona sin costo adicional de desplazamiento dentro del área metropolitana.</p>

<h2>Tipos de cerca eléctrica disponibles en ${cityName}</h2>
<ul>
  <li><strong>Sobre muro o reja existente:</strong> la opción más económica para casas y locales en ${cityName}. Se instala directamente sobre el cerramiento existente.</li>
  <li><strong>Autoportante desde el piso:</strong> para lotes sin muro, fincas y perímetros industriales en los alrededores de ${cityName}.</li>
  <li><strong>Con alarma integrada:</strong> el sistema más completo — avisa al celular cuando alguien toca el perímetro.</li>
</ul>

<h2>Precio de cerca eléctrica en ${cityName}</h2>
<table>
  <thead>
    <tr><th>Sistema</th><th>Precio estimado</th><th>Perímetro cubierto</th></tr>
  </thead>
  <tbody>
    <tr><td>Básica residencial</td><td>$1.200.000 – $1.800.000</td><td>Hasta 80m lineales</td></tr>
    <tr><td>Estándar con alarma</td><td>$1.800.000 – $2.800.000</td><td>Hasta 150m lineales</td></tr>
    <tr><td>Empresarial / Bodega</td><td>$2.800.000 – $5.000.000</td><td>Hasta 300m lineales</td></tr>
    <tr><td>Industrial / Finca</td><td>Según perímetro</td><td>+300m lineales</td></tr>
  </tbody>
</table>

<h2>Normativa RETIE en ${cityName}</h2>
<p>Todas nuestras instalaciones en ${cityName} cumplen la norma RETIE vigente: equipos certificados, señalización homologada y documentación técnica. Esto le garantiza tranquilidad legal y que su instalación no tendrá problemas con las autoridades de ${city.department}.</p>

<p>¿Quiere más información? Vea nuestra <a href="/cercas-electricas-colombia/">guía completa de cercas eléctricas en Colombia</a> o consulte los <a href="/precio-cerca-electrica-colombia/">precios detallados por metro lineal</a>.</p>
`,
    faqs: [
      {
        q: `¿Cuánto cuesta instalar una cerca eléctrica en ${cityName}?`,
        a: `Para una propiedad residencial en ${cityName} con perímetro de 60–100 metros, el costo total con instalación oscila entre $1.200.000 y $2.000.000 COP. Hacemos visita técnica gratuita para dar un precio exacto según su caso.`,
      },
      {
        q: `¿Instalan cercas eléctricas en fincas cerca de ${cityName}?`,
        a: `Sí. Instalamos en ${cityName} y toda la región de ${city.department}. Para fincas y propiedades rurales ofrecemos sistemas autoportantes de mayor alcance. Contáctenos para coordinar la visita técnica.`,
      },
      {
        q: `¿La instalación cumple la norma RETIE en ${cityName}?`,
        a: `Sí. Todas nuestras instalaciones en ${cityName} se realizan con equipos certificados según la norma RETIE y la normativa de Supervigilancia. Incluimos señalización homologada y le entregamos documentación técnica de la instalación.`,
      },
    ],
  };
}

CITY_DATA.forEach((city) => {
  registerPage(generateCercasCityPage(city));
});
