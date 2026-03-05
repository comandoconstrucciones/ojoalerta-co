import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPage, getAllSlugs } from "@/lib/registry";
import PillarLayout from "@/components/PillarLayout";
import CityLayout from "@/components/CityLayout";
import { SERVICES } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-generate all registered pages at build time
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Dynamic metadata per page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: [page.focusKeyword],
    alternates: {
      canonical: `https://ojoalerta.co/${slug}/`,
    },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: `https://ojoalerta.co/${slug}/`,
    },
  };
}

// Cluster → pilar info map (for CityLayout breadcrumb + back-link)
const CLUSTER_META: Record<
  string,
  { pilarSlug: string; pilarName: string; cityPrefix: string }
> = {
  "camaras-de-seguridad": {
    pilarSlug: "camaras-de-seguridad-colombia",
    pilarName: "Cámaras de Seguridad",
    cityPrefix: "camaras-de-seguridad-",
  },
  "cercas-electricas": {
    pilarSlug: "cercas-electricas-colombia",
    pilarName: "Cercas Eléctricas",
    cityPrefix: "cerca-electrica-",
  },
  alarmas: {
    pilarSlug: "alarmas-colombia",
    pilarName: "Alarmas",
    cityPrefix: "alarma-para-casa-",
  },
  "control-de-acceso": {
    pilarSlug: "control-de-acceso-colombia",
    pilarName: "Control de Acceso",
    cityPrefix: "control-de-acceso-",
  },
  domotica: {
    pilarSlug: "domotica-colombia",
    pilarName: "Domótica",
    cityPrefix: "domotica-",
  },
};

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  const clusterMeta = CLUSTER_META[page.cluster];

  // Related services (exclude current cluster)
  const related = SERVICES.filter((s) => !s.slug.startsWith(page.cluster)).slice(0, 3);

  if (page.type === "city" && clusterMeta) {
    return (
      <CityLayout
        content={page}
        pilarSlug={clusterMeta.pilarSlug}
        pilarName={clusterMeta.pilarName}
        clusterCityPrefix={clusterMeta.cityPrefix}
      />
    );
  }

  return (
    <PillarLayout
      content={page}
      relatedServices={related.map((s) => ({
        name: s.name,
        slug: s.slug,
        icon: s.icon,
      }))}
    />
  );
}
