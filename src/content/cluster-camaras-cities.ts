import { registerPage } from "@/lib/pages-store";
import { CITY_DATA } from "@/lib/cities";
import { PageContent } from "@/lib/types";

function generateCamerasCityPage(city: (typeof CITY_DATA)[0]): PageContent {
  const cityName = city.name;
  const zones = city.neighborhoods.join(", ");
  const coastal = city.isCoastal;

  const coastalParagraph = coastal
    ? `<p class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-900 text-sm"><strong>🌊 Nota importante para ${cityName}:</strong> Por el ambiente marino y la alta humedad salina de la costa Caribe, en ${cityName} utilizamos exclusivamente cámaras con clasificación IP67 y recubrimiento anticorrosivo certificado. Esto garantiza que su sistema funcione correctamente incluso a metros del mar, sin oxidación prematura ni fallas por salinidad.</p>`
    : "";

  return {
    slug: `camaras-de-seguridad-${city.slug}`,
    type: "city",
    cluster: "camaras-de-seguridad",
    city: cityName,
    citySlug: city.slug,
    isCoastal: coastal,
    focusKeyword: `cámaras de seguridad ${cityName}`,
    title: `Cámaras de Seguridad en ${cityName} 2026 | Instalación Profesional`,
    h1: `Cámaras de Seguridad en ${cityName}: Instalación Profesional 2026`,
    metaDescription: `Instalamos cámaras de seguridad en ${cityName} con garantía. Hikvision y Dahua. Visita técnica gratuita. Cotización en menos de 2 horas. ☎ Llame ahora.`,
    intro: `Las cámaras de seguridad en ${cityName} son hoy la solución más efectiva para proteger su hogar, negocio o conjunto residencial. ${city.context} Instalamos sistemas profesionales Hikvision y Dahua con garantía y soporte técnico local.`,
    body: `
${coastalParagraph}

<h2>Instalación de cámaras de seguridad en ${cityName}</h2>
<p>Nuestro equipo técnico en ${cityName} realiza instalaciones completas de videovigilancia para todos los tipos de propiedad: casas, apartamentos, negocios, conjuntos residenciales y bodegas. Cada instalación incluye visita técnica previa sin costo, donde evaluamos los puntos vulnerables y diseñamos el sistema más adecuado para su propiedad.</p>

<h2>Zonas con mayor demanda en ${cityName}</h2>
<p>Atendemos toda el área urbana y periférica de ${cityName}, con mayor concentración de instalaciones en barrios como ${zones}. Si su propiedad está en otra zona de ${city.department}, también hacemos visita técnica sin costo adicional.</p>

<h2>¿Qué sistema de cámaras necesita en ${cityName}?</h2>

<h3>Para casas y apartamentos</h3>
<p>Un sistema de 3 a 6 cámaras HD cubre todos los puntos críticos de una vivienda en ${cityName}: entrada principal, garaje, patio trasero y áreas comunes. Precio desde $1.200.000 COP con instalación incluida.</p>

<h3>Para negocios y locales comerciales</h3>
<p>Locales en ${cityName} requieren cobertura de mostradores, cajas, bodegas y fachada. Un sistema de 4 a 8 cámaras con grabación 24/7 y acceso remoto es el estándar para comercios medianos.</p>

<h3>Para conjuntos residenciales</h3>
<p>Los conjuntos residenciales en ${cityName} necesitan cobertura de entradas vehiculares, peatonales, zonas de parqueo y áreas comunes. Integramos cámaras con control de acceso y citófono para una solución completa de seguridad.</p>

<h2>Marcas que instalamos en ${cityName}</h2>
<p>Trabajamos exclusivamente con equipos certificados:</p>
<ul>
  <li><strong>Hikvision:</strong> líder mundial, garantía oficial 3 años, app Hik-Connect para celular.</li>
  <li><strong>Dahua:</strong> tecnología ColorVu (color nocturno), excelente relación calidad-precio.</li>
</ul>
<p>Todos los equipos vienen con factura, garantía por escrito y soporte técnico posterior.</p>

<h2>Proceso de instalación en ${cityName}</h2>
<ol>
  <li><strong>Solicite la visita técnica</strong> por WhatsApp — coordinamos en menos de 24 horas.</li>
  <li><strong>Diagnóstico gratuito:</strong> evaluamos su propiedad y definimos número y ubicación de cámaras.</li>
  <li><strong>Cotización clara:</strong> precio fijo por escrito, sin sorpresas. Incluye equipos, cableado e instalación.</li>
  <li><strong>Instalación profesional:</strong> nuestros técnicos instalan, configuran el grabador y el acceso remoto desde su celular.</li>
  <li><strong>Capacitación:</strong> le enseñamos a usar el sistema, ver grabaciones y configurar alertas.</li>
  <li><strong>Soporte continuo:</strong> disponibles para mantenimiento y soporte técnico posterior.</li>
</ol>

<h2>Precios de instalación de cámaras en ${cityName}</h2>
<table>
  <thead>
    <tr><th>Sistema</th><th>Precio estimado</th><th>Ideal para</th></tr>
  </thead>
  <tbody>
    <tr><td>2 cámaras + DVR</td><td>$650.000 – $900.000</td><td>Apartamento, local pequeño</td></tr>
    <tr><td>4 cámaras + DVR</td><td>$1.200.000 – $1.800.000</td><td>Casa, negocio mediano</td></tr>
    <tr><td>8 cámaras + DVR</td><td>$2.500.000 – $3.800.000</td><td>Conjunto, bodega, empresa</td></tr>
    <tr><td>Sistema IP + NVR</td><td>$2.200.000 +</td><td>Alta resolución, empresarial</td></tr>
  </tbody>
</table>
<p>Los precios incluyen equipos, instalación, configuración y acceso remoto. Para cotización exacta según su caso específico, solicite la visita técnica gratuita.</p>

<p>¿Quiere comparar opciones? Vea nuestra <a href="/camaras-de-seguridad-colombia/">guía completa de cámaras de seguridad en Colombia</a> o compare <a href="/hikvision-vs-dahua/">Hikvision vs Dahua</a> antes de decidir.</p>
`,
    faqs: [
      {
        q: `¿Cuánto cuesta instalar cámaras de seguridad en ${cityName}?`,
        a: `Un sistema básico de 4 cámaras con instalación en ${cityName} cuesta entre $1.200.000 y $1.800.000 COP. El precio final depende del número de puntos a cubrir y el tipo de cableado requerido. Ofrecemos cotización gratuita con visita técnica.`,
      },
      {
        q: `¿Tienen técnicos disponibles en ${cityName}?`,
        a: `Sí, contamos con técnicos certificados disponibles en ${cityName} y toda el área metropolitana de ${city.department}. Coordinamos la visita técnica en menos de 24 horas después de su solicitud.`,
      },
      {
        q: `¿Qué incluye la instalación de cámaras en ${cityName}?`,
        a: `Nuestra instalación en ${cityName} incluye: equipos originales con garantía, cableado estructurado, configuración del grabador, configuración del acceso remoto desde su celular, capacitación básica y garantía de mano de obra.`,
      },
    ],
  };
}

// Registrar las 12 ciudades
CITY_DATA.forEach((city) => {
  registerPage(generateCamerasCityPage(city));
});
