"use client";
import Link from "next/link";
import { useState } from "react";
import { SITE, SERVICES } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0A1628] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#F59E0B] text-2xl font-black tracking-tight">
              👁 OjoAlerta
            </span>
            <span className="hidden sm:block text-xs text-gray-400 leading-tight">
              Seguridad Electrónica
              <br />
              Colombia
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                className="text-gray-300 hover:text-[#F59E0B] transition-colors"
              >
                {s.name}
              </Link>
            ))}
            <Link
              href="/blog/"
              className="text-gray-300 hover:text-[#F59E0B] transition-colors"
            >
              Blog
            </Link>
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=Hola%2C%20quiero%20una%20cotización%20de%20seguridad`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#F59E0B] text-[#0A1628] font-bold px-4 py-2 rounded-lg text-sm hover:bg-amber-400 transition-colors"
          >
            <span>💬</span> Cotizar ahora
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <div className="w-5 h-0.5 bg-white mb-1" />
            <div className="w-5 h-0.5 bg-white mb-1" />
            <div className="w-5 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4 flex flex-col gap-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                className="text-gray-300 hover:text-[#F59E0B] text-sm"
                onClick={() => setOpen(false)}
              >
                {s.icon} {s.name}
              </Link>
            ))}
            <Link
              href="/blog/"
              className="text-gray-300 hover:text-[#F59E0B] text-sm"
              onClick={() => setOpen(false)}
            >
              Blog
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Hola%2C%20quiero%20una%20cotización`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F59E0B] text-[#0A1628] font-bold px-4 py-2 rounded-lg text-sm text-center"
            >
              💬 Cotizar ahora
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
