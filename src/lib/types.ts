export type PageType = "pilar" | "satellite" | "city" | "blog";

export interface FAQ {
  q: string;
  a: string;
}

export interface PageContent {
  slug: string;
  type: PageType;
  cluster: string;
  title: string;
  h1: string;
  metaDescription: string;
  focusKeyword: string;
  intro: string;        // first paragraph, keyword in first 100 chars
  body: string;         // HTML string with H2s, H3s, lists, tables
  faqs: FAQ[];
  city?: string;        // if type === "city"
  citySlug?: string;
  isCoastal?: boolean;
}

export interface CityData {
  name: string;
  slug: string;        // e.g. "bogota"
  isCoastal: boolean;
  neighborhoods: string[];   // 3 barrios/zonas conocidas
  context: string;     // 1 sentence about security context
  department: string;
}

export interface ClusterDef {
  id: string;                   // e.g. "camaras"
  pilarSlug: string;            // e.g. "camaras-de-seguridad-colombia"
  name: string;                 // "Cámaras de Seguridad"
  citySlugPrefix: string;       // "camaras-de-seguridad-"
  citySlugSuffix: string;       // "" or "-colombia" (appended after city slug)
  focusKeywordTemplate: string; // "cámaras de seguridad {city}"
  serviceName: string;          // for body copy
  icon: string;
}
