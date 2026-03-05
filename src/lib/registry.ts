/**
 * Central registry of all pages.
 * Each cluster registers its pages here.
 * The dynamic route [slug]/page.tsx looks up content from this registry.
 */

import { PageContent } from "./types";

const registry = new Map<string, PageContent>();

export function registerPage(content: PageContent) {
  registry.set(content.slug, content);
}

export function getPage(slug: string): PageContent | undefined {
  return registry.get(slug);
}

export function getAllSlugs(): string[] {
  return Array.from(registry.keys());
}

// ── Auto-import all cluster content ──────────────────────────
// Each cluster file calls registerPage() on import.
// Import them all here so the registry is populated at build time.
import "@/content/cluster-camaras";
// future clusters:
// import "@/content/cluster-cercas";
// import "@/content/cluster-alarmas";
// import "@/content/cluster-acceso";
// import "@/content/cluster-domotica";
