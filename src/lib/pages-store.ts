/**
 * Pages store — NO cluster imports here (avoids circular deps).
 * Cluster files import registerPage from THIS file.
 * registry.ts imports cluster files + re-exports from here.
 */
import { PageContent } from "./types";

const store = new Map<string, PageContent>();

export function registerPage(content: PageContent) {
  store.set(content.slug, content);
}

export function getPage(slug: string): PageContent | undefined {
  return store.get(slug);
}

export function getAllSlugs(): string[] {
  return Array.from(store.keys());
}
