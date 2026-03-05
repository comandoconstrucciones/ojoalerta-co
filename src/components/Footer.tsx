import Link from "next/link";
import { SITE, SERVICES, CITIES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#060E1A] text-gray-400 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-[#F59E0B] text-xl font-black">
              👁 OjoAlerta
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Empresa especializada en seguridad electrónica en Colombia.
              Instalación de cámaras, alarmas, cercas eléctricas y control de acceso.
            </p>
            <div className="mt-4 flex flex-col gap-1 text-sm">
              <span>📞 {SITE.phone}</span>
              <span>✉️ {SITE.email}</span>
              <span>📍 {SITE.address}</span>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} className="hover:text-[#F59E0B] transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog/" className="hover:text-[#F59E0B] transition-colors">
                  Blog de Seguridad
                </Link>
              </li>
            </ul>
          </div>

          {/* Ciudades */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Ciudades
            </h3>
            <ul className="space-y-2 text-sm columns-2">
              {CITIES.map((city) => (
                <li key={city}>
                  <Link
                    href={`/camaras-de-seguridad-${city
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/\s+/g, "-")}/`}
                    className="hover:text-[#F59E0B] transition-colors"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Cotización gratuita
            </h3>
            <p className="text-sm mb-4">
              Visita técnica sin costo. Le decimos exactamente qué necesita y cuánto cuesta.
            </p>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Hola%2C%20quiero%20una%20cotización%20de%20seguridad`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F59E0B] text-[#0A1628] font-bold px-5 py-3 rounded-lg text-sm hover:bg-amber-400 transition-colors"
            >
              💬 WhatsApp ahora
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} OjoAlerta — Seguridad Electrónica Colombia. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/politica-de-privacidad/" className="hover:text-white">Política de privacidad</Link>
            <Link href="/terminos/" className="hover:text-white">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
