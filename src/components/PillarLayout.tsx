import Link from "next/link";
import { SITE } from "@/lib/constants";
import { PageContent } from "@/lib/types";
import { CITY_DATA } from "@/lib/cities";

interface Props {
  content: PageContent;
  relatedServices?: { name: string; slug: string; icon: string }[];
}

export default function PillarLayout({ content, relatedServices = [] }: Props) {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-[#F59E0B]">Inicio</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{content.title}</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            {content.h1}
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">{content.intro}</p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hola%2C%20quiero%20información%20sobre%20${encodeURIComponent(content.focusKeyword)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A1628] font-bold px-7 py-4 rounded-xl hover:bg-amber-400 transition-colors"
          >
            💬 Cotizar ahora — gratis
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
              Preguntas frecuentes
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

        {/* Cities grid */}
        <div className="mt-16 bg-[#0A1628] rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-black mb-2">
            {content.title} en las principales ciudades
          </h2>
          <p className="text-gray-400 mb-6 text-sm">
            Instalamos en las 12 ciudades más importantes de Colombia.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {CITY_DATA.map((city) => (
              <Link
                key={city.slug}
                href={`/${content.cluster}-${city.slug}/`}
                className="bg-white/5 hover:bg-[#F59E0B]/20 border border-white/10 hover:border-[#F59E0B]/50 rounded-lg px-4 py-3 text-sm font-medium transition-all text-center"
              >
                📍 {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Related services */}
        {relatedServices.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-[#0A1628] mb-5">
              Servicios relacionados
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/`}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#F59E0B]/50 transition-all group"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <span className="font-semibold text-[#0A1628] group-hover:text-[#1E40AF] transition-colors">
                    {s.name}
                  </span>
                  <span className="ml-auto text-[#F59E0B]">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* CTA bottom */}
      <section className="bg-[#F59E0B] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#0A1628] mb-3">
            ¿Listo para cotizar?
          </h2>
          <p className="text-[#0A1628]/70 mb-7">
            Visita técnica gratuita. Respondemos en menos de 2 horas.
          </p>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hola%2C%20quiero%20cotización%20de%20${encodeURIComponent(content.focusKeyword)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A1628] text-white font-bold px-10 py-5 rounded-xl text-lg hover:bg-[#0F2040] transition-colors"
          >
            💬 WhatsApp — Cotización gratis
          </a>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faqs.map((faq) => ({
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
