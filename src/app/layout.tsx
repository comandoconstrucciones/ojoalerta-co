import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Seguridad Electrónica en Colombia`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "cámaras de seguridad colombia",
    "instalación cámaras seguridad bogotá",
    "cercas eléctricas colombia",
    "alarmas para casas colombia",
    "control de acceso colombia",
    "seguridad electrónica colombia",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Seguridad Electrónica en Colombia`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE.url,
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  areaServed: [
    "Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena",
    "Bucaramanga", "Pereira", "Manizales", "Cúcuta", "Ibagué",
    "Santa Marta", "Villavicencio",
  ],
  serviceType: [
    "Instalación de cámaras de seguridad",
    "Cercas eléctricas",
    "Sistemas de alarma",
    "Control de acceso biométrico",
    "Domótica",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    opens: "07:00",
    closes: "19:00",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-color-scheme="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
