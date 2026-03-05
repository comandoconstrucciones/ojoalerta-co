/**
 * registry.ts — imports all cluster content files (side effects: registerPage calls)
 * then re-exports store helpers.
 * [slug]/page.tsx imports from HERE to ensure all clusters are loaded.
 */

// Cluster content (each file calls registerPage on import)
import "@/content/cluster-camaras";
import "@/content/cluster-camaras-cities";
// future clusters:
// import "@/content/cluster-cercas";
// import "@/content/cluster-alarmas";
// import "@/content/cluster-acceso";
// import "@/content/cluster-domotica";

// Re-export store helpers
export { getPage, getAllSlugs } from "./pages-store";
