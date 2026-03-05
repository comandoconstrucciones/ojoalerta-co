import Link from "next/link";
import { SITE } from "@/lib/constants";
import { PageContent } from "@/lib/types";
import { CITY_DATA } from "@/lib/cities";

interface Props {
  content: PageContent;
  pilarSlug: string;
  pilarName: string;
  clusterCityPrefix: string;
}

export default function CityLayout({ content, pilarSlug, pilarName, clusterCityPrefix }: Props) {
  const otherCities = CITY_DATA.filter((c) => c.slug !== content.citySlug);

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-5">
            <Link href="/" className="hover:text-[#F59E0B]">Inicio</Link>
            <span className="mx-2">›</span>
            <Link href={`/${pilarSlug}/`} className="hover:text-[#F59E0B]">{pilarName}</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{content.city}</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-5">
            {content.h1}
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-7 max-w-2xl">
            {content.intro}
          </p>

          {/* Coastal warning */}
          {content.isCoastal && (
            <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-400/30 text-blue-200 text-sm px-4 py-2 rounded-lg mb-6">
              🌊 Usamos equipos anticorrosivos certificados para ambientes marinos y costeros
            </div>
          )}

          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hola%2C%20necesito%20${encodeURIComponent(content.focusKeyword)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A1628] font-bold px-7 py-4 rounded-xl hover:bg-amber-400 transition-colors"
          >
            💬 Cotizar en {content.city}
          </a>
        </div>
      </section>

      {/* BODY */}
      <article className="max-w-4xl mx-auto px-4 py-14">
        <div
          className="prose prose-lg prose-headings:text-[#0A1628] prose-headings:font-bold max-w-none"
          dangerouslySetInnerHTML={{ __html: content.body }}
        />

        {/* FAQ */}
        {content.faqs.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-black text-[#0A1628] mb-6">
              Preguntas frecuentes — {content.city}
            </h2>
            <div className="space-y-5">
              {content.faqs.map((faq) => (
                <div key={faq.q} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-[#0A1628] mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other cities */}
        <div className="mt-14 bg-gray-50 rounded-2xl p-7 border border-gray-100">
          <h2 className="text-lg font-bold text-[#0A1628] mb-4">
            También instalamos en otras ciudades
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${clusterCityPrefix}${city.slug}/`}
                className="bg-white hover:bg-[#F59E0B]/10 border border-gray-200 hover:border-[#F59E0B]/50 text-gray-700 hover:text-[#0A1628] px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <Link
            href={`/${pilarSlug}/`}
            className="inline-block mt-5 text-[#1E40AF] hover:text-[#F59E0B] text-sm font-semibold transition-colors"
          >
            ← Ver guía completa de {pilarName}
          </Link>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#F59E0B] py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#0A1628] mb-3">
            ¿Necesita instalación en {content.city}?
          </h2>
          <p className="text-[#0A1628]/70 mb-7">
            Visita técnica gratuita en {content.city}. Le respondemos hoy mismo.
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hola%2C%20necesito%20${encodeURIComponent(content.focusKeyword)}%20en%20${encodeURIComponent(content.city ?? "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A1628] text-white font-bold px-10 py-5 rounded-xl text-lg hover:bg-[#0F2040] transition-colors"
          >
            💬 WhatsApp — Cotización en {content.city}
          </a>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: content.title,
            description: content.metaDescription,
            provider: {
              "@type": "LocalBusiness",
              name: "Ojo Alerta",
              url: SITE.url,
            },
            areaServed: {
              "@type": "City",
              name: content.city,
              addressCountry: "CO",
            },
            ...(content.faqs.length > 0
              ? {
                  mainEntity: {
                    "@type": "FAQPage",
                    mainEntity: content.faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.q,
                      acceptedAnswer: { "@type": "Answer", text: faq.a },
                    })),
                  },
                }
              : {}),
          }),
        }}
      />
    </>
  );
}
