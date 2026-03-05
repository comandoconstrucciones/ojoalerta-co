import { CityData } from "./types";

export const CITY_DATA: CityData[] = [
  {
    name: "Bogotá",
    slug: "bogota",
    isCoastal: false,
    department: "Cundinamarca",
    neighborhoods: ["Chapinero", "Usaquén", "Kennedy"],
    context:
      "Bogotá concentra el mayor índice de hurtos del país, con zonas de alto riesgo en todas sus localidades.",
  },
  {
    name: "Medellín",
    slug: "medellin",
    isCoastal: false,
    department: "Antioquia",
    neighborhoods: ["El Poblado", "Laureles", "Envigado"],
    context:
      "Medellín ha reducido sus índices de violencia, pero el hurto a residencias y establecimientos sigue siendo una prioridad de seguridad.",
  },
  {
    name: "Cali",
    slug: "cali",
    isCoastal: false,
    department: "Valle del Cauca",
    neighborhoods: ["Granada", "Ciudad Jardín", "Chipichape"],
    context:
      "Cali presenta uno de los índices de inseguridad más altos del país, lo que hace de la seguridad electrónica una inversión esencial.",
  },
  {
    name: "Barranquilla",
    slug: "barranquilla",
    isCoastal: true,
    department: "Atlántico",
    neighborhoods: ["El Prado", "Riomar", "Buenavista"],
    context:
      "Barranquilla, por su clima costero y humedad marina, requiere equipos con protección anticorrosiva especial.",
  },
  {
    name: "Cartagena",
    slug: "cartagena",
    isCoastal: true,
    department: "Bolívar",
    neighborhoods: ["Bocagrande", "El Laguito", "Manga"],
    context:
      "Cartagena combina la alta frecuencia turística con riesgos de seguridad propios del ambiente costero y salino.",
  },
  {
    name: "Bucaramanga",
    slug: "bucaramanga",
    isCoastal: false,
    department: "Santander",
    neighborhoods: ["Cabecera", "Sotomayor", "La Rosita"],
    context:
      "Bucaramanga ha registrado un aumento sostenido en hurtos a residencias y negocios en los últimos años.",
  },
  {
    name: "Pereira",
    slug: "pereira",
    isCoastal: false,
    department: "Risaralda",
    neighborhoods: ["Pinares", "Álamos", "Cuba"],
    context:
      "Pereira, centro del Eje Cafetero, requiere soluciones de seguridad adaptadas tanto a zonas urbanas como a fincas y propiedades rurales.",
  },
  {
    name: "Manizales",
    slug: "manizales",
    isCoastal: false,
    department: "Caldas",
    neighborhoods: ["Chipre", "El Cable", "La Enea"],
    context:
      "Manizales combina alta densidad residencial con zonas comerciales activas que demandan vigilancia 24/7.",
  },
  {
    name: "Cúcuta",
    slug: "cucuta",
    isCoastal: false,
    department: "Norte de Santander",
    neighborhoods: ["La Riviera", "El Centro", "Quinta Orientales"],
    context:
      "Cúcuta, ciudad fronteriza, presenta desafíos únicos de seguridad que hacen crítica la vigilancia electrónica en hogares y negocios.",
  },
  {
    name: "Ibagué",
    slug: "ibague",
    isCoastal: false,
    department: "Tolima",
    neighborhoods: ["Ambala", "La Pola", "El Jordán"],
    context:
      "Ibagué ha registrado incremento en hurtos a residencias, impulsando la demanda de sistemas de seguridad electrónica.",
  },
  {
    name: "Santa Marta",
    slug: "santa-marta",
    isCoastal: true,
    department: "Magdalena",
    neighborhoods: ["El Rodadero", "Bello Horizonte", "Centro Histórico"],
    context:
      "Santa Marta, destino turístico costero, requiere equipos con protección marina contra la salinidad y la humedad del Caribe.",
  },
  {
    name: "Villavicencio",
    slug: "villavicencio",
    isCoastal: false,
    department: "Meta",
    neighborhoods: ["Barzal", "La Rosita", "Siete de Agosto"],
    context:
      "Villavicencio, puerta de entrada a los llanos, concentra actividad agroindustrial y comercial que demanda seguridad perimetral robusta.",
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITY_DATA.find((c) => c.slug === slug);
}
