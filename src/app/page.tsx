import Link from "next/link";
import { SITE, SERVICES, WHY_US, CITIES } from "@/lib/constants";

const STATS = [
  { value: "500+", label: "Instalaciones realizadas" },
  { value: "12", label: "Ciudades en Colombia" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "24/7", label: "Soporte técnico" },
];

const FAQS = [
  {
    q: "¿Cuánto cuesta instalar cámaras de seguridad en Colombia?",
    a: "El costo varía según el número de cámaras y el tipo de instalación. Un kit básico de 4 cámaras HD con instalación parte desde $800.000 COP. Ofrecemos cotización gratuita sin compromiso.",
  },
  {
    q: "¿Qué marcas de cámaras instalan?",
    a: "Trabajamos exclusivamente con marcas certificadas: Hikvision y Dahua son las principales. Ambas ofrecen garantía oficial y repuestos disponibles en Colombia.",
  },
  {
    q: "¿Instalamos cámaras en todo Colombia?",
    a: "Sí. Tenemos cobertura en Bogotá, Medellín, Cali, Barranquilla, Cartagena, Bucaramanga, Pereira, Manizales, Cúcuta, Ibagué, Santa Marta y Villavicencio.",
  },
  {
    q: "¿Necesito permiso para instalar una cerca eléctrica?",
    a: "No se requiere permiso especial, pero la instalación debe cumplir la norma RETIE y contar con señalización adecuada. Todos nuestros trabajos cumplen la normativa vigente.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#0F2040] to-[#1E3A5F] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              ⚡ Cotización gratuita — Respuesta en menos de 2 horas
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Seguridad electrónica
              <br />
              <span className="text-[#F59E0B]">que realmente funciona</span>
              <br />
              en Colombia
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Instalamos cámaras de seguridad, alarmas, cercas eléctricas y control de acceso
              en las 12 principales ciudades de Colombia. Técnicos certificados, marcas garantizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Hola%2C%20quiero%20una%20cotización%20de%20seguridad`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F59E0B] text-[#0A1628] font-bold px-8 py-4 rounded-xl text-base hover:bg-amber-400 transition-colors text-center"
              >
                💬 Cotizar por WhatsApp
              </a>
              <Link
                href="/camaras-de-seguridad-colombia/"
                className="border border-white/30 text-white px-8 py-4 rounded-xl text-base hover:bg-white/10 transition-colors text-center"
              >
                Ver servicios →
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-black text-[#F59E0B] mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] mb-4">
              Nuestros servicios de seguridad
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Soluciones integrales de seguridad electrónica para hogares, empresas, conjuntos residenciales y fincas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#F59E0B]/30 transition-all"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-[#0A1628] mb-2 group-hover:text-[#1E40AF] transition-colors">
                  {s.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.shortDesc}</p>
                <div className="mt-5 text-[#F59E0B] font-semibold text-sm">
                  Ver más →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] mb-4">
              ¿Por qué elegir Ojo Alerta?
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              No vendemos equipos. Diseñamos soluciones a medida y las respaldamos con garantía real.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#0A1628] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIUDADES */}
      <section className="py-20 px-4 bg-[#0A1628] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Cobertura en <span className="text-[#F59E0B]">12 ciudades</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Instalamos y damos mantenimiento en las principales ciudades de Colombia.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {CITIES.map((city) => (
              <Link
                key={city}
                href={`/camaras-de-seguridad-${city
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/\s+/g, "-")}/`}
                className="bg-white/5 hover:bg-[#F59E0B]/20 border border-white/10 hover:border-[#F59E0B]/50 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              >
                📍 {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0A1628] mb-4">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="space-y-5">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-[#0A1628] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-[#F59E0B]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1628] mb-4">
            ¿Listo para proteger su propiedad?
          </h2>
          <p className="text-[#0A1628]/70 text-lg mb-8">
            Cotización gratuita, sin compromiso. Le respondemos en menos de 2 horas por WhatsApp.
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hola%2C%20quiero%20una%20cotización%20de%20seguridad`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0A1628] text-white font-bold px-10 py-5 rounded-xl text-lg hover:bg-[#0F2040] transition-colors"
          >
            💬 Cotizar por WhatsApp
          </a>
        </div>
      </section>

      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}
