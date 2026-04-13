import type { Locale } from "@/lib/locale";
import type { ServiceArea } from "@/content/serviceAreas";
import { serviceAreas } from "@/content/serviceAreas";

/** Visible region labels in Spanish (matches `region` strings in `serviceAreas`). */
const regionEs: Record<string, string> = {
  "Miami-Dade County": "Condado de Miami-Dade",
  "Broward County": "Condado de Broward",
  "Palm Beach County": "Condado de Palm Beach",
  "Monroe County — Upper Keys": "Condado de Monroe — Upper Keys",
  "County-wide": "Todo el condado",
  Regional: "Regional",
};

/** Spanish copy for each service area (visible descriptions). */
const descriptionEs: Record<string, string> = {
  miami:
    "De Brickell a Wynwood, Sovereign Roofing apoya a propietarios en Miami con reemplazo y reparación de techos, inspecciones y sistemas de teja o metal, con cronogramas claros.",
  "miami-beach":
    "Apartamentos y casas en Miami Beach se benefician de planos alineados al código, documentación para la administración y acabados de cocina, baño y azulejo. Coordinamos inspecciones y listas de pendientes en la costa del Sur de Florida.",
  "coral-gables":
    "Las casas históricas y de estilo mediterráneo en Coral Gables suelen requerir actualizaciones sensibles. Gestionamos planos, permisos y remodelaciones que respetan el barrio con cocinas, baños, azulejo y yeso de alto nivel.",
  "kendall-pinecrest":
    "Desde Kendall hasta Pinecrest: renovaciones de vivienda completa, cocinas y baños, y ampliaciones con dibujos claros y trámites municipales. Remodelación licenciada y asegurada con comunicación transparente.",
  aventura:
    "Residencias en torre y estilo jardín en Aventura confían en nosotros para interiores, baños con buena impermeabilización, azulejo y yeso, alineados con normas de la asociación y códigos del Sur de Florida.",
  "sunny-isles-beach":
    "Torres frente al mar y condominios de lujo: planos, permisos y acabado de cocinas, baños y salas — azulejo, yeso y detalle para el horizonte de Sunny Isles.",
  doral:
    "El crecimiento de Doral exige techadores confiables. Sovereign Roofing ofrece techos residenciales, reparaciones de goteras e inspecciones, ideal para familias e inversiones.",
  "north-miami":
    "Vivienda asequible y de gama media en North Miami recibe la misma atención en planos, permisos y oficio: cocinas y baños, pisos y azulejo, y yeso del que no tendrás que esconder los muebles.",
  hialeah:
    "Barrios densos y diversos en Hialeah merecen presupuestos claros y plazos honestos. Coordinamos planos, permisos municipales e interiores; comunicación en español disponible si lo solicitan.",
  homestead:
    "El crecimiento del sur del condado implica más remodelaciones y ampliaciones. Ayudamos en Homestead y Florida City con permisos, detalles de viento e interiores: cocinas, baños, azulejo y yeso.",
  "key-biscayne":
    "Las propiedades en la isla requieren precisión y discreción. Entregamos planos, permisos y obra interior de lujo: baños conscientes del agua, azulejo premium y acabados para ambiente costero.",
  "fort-lauderdale":
    "Casas frente al agua y condominios urbanos: planos, permisos, cocinas y baños, azulejo y yeso, con equipos que respetan tu hogar y tu agenda.",
  hollywood:
    "Propietarios en Hollywood eligen a Sovereign Roofing para reemplazos completos o reparaciones puntuales. Tramitamos permisos cuando aplica, coordinamos inspecciones y ejecutamos según norma del fabricante.",
  "pompano-beach":
    "Propiedades costeras e interiores en Pompano Beach: planos y permisos para remodelaciones más obra interior. Cocinas, baños, distribución de azulejo y yeso, pensados para humedad y salitre de Florida.",
  plantation:
    "Casas suburbanas en Plantation suelen necesitar cocinas y baños modernos y planos más abiertos. Ofrecemos dibujos, paquetes de permisos y oficios con mínima interrupción al día a día.",
  "coral-springs":
    "Vecindarios familiares en Coral Springs confían en nosotros para ampliaciones, reconfiguraciones y acabados. Planos claros, permisos a tiempo y azulejo y yeso de calidad.",
  weston:
    "Las comunidades planificadas de Weston esperan resultados pulidos. Coordinación arquitectónica, permisos y remodelación: desde cocinas gourmet hasta baños tipo spa y renovación integral.",
  "pembroke-pines":
    "Pembroke Pines sigue creciendo; ayudamos a remodelar con planos conformes, permisos de ciudad y oficio interior: gabinetes, azulejo, transiciones de piso y yeso según código.",
  miramar:
    "El auge residencial en Miramar genera más demanda de renovación. Combinamos experiencia en permisos con ejecución en cocina, baño, azulejo y yeso, para inversionistas y residentes.",
  davie:
    "Fincas ecuestres y casas familiares en Davie reciben planos de remodelación adaptados, permisos en Broward e interiores que equilibran estilo de vida y valor de reventa: azulejo, yeso y detalles de acabado.",
  "deerfield-beach":
    "Vida costera en el norte de Broward: remodelaciones con viento e inundación en mente, más mejoras interiores habituales: planos, permisos, cocinas, baños y azulejo.",
  "hallandale-beach":
    "Torres en Hallandale Beach se benefician de nuestra experiencia con reglas de la asociación, planos, permisos e interiores adecuados a torres: azulejo, baños, cocinas y yeso.",
  "boca-raton":
    "El mercado de lujo de Boca Raton exige excelencia. Planos, permisos y remodelación para fincas y condominios: cocinas a medida, baños principales, piedra y azulejo, y yeso y preparación de pintura impecables.",
  "delray-beach":
    "Corredor de Atlantic Avenue e interiores: renovaciones con permisos del condado de Palm Beach, apoyo en cocina y baño, y yeso de calidad exposición.",
  "boynton-beach":
    "Familias y jubilados en Boynton Beach confían en remodelaciones accesibles, cocinas abiertas, baños mejorados y azulejo y yeso duraderos frente al clima costero de Florida.",
  "west-palm-beach":
    "Lofts urbanos y casas suburbanas: servicio integral de planos, permisos y remodelación interior. Nos alineamos con los procesos locales y entregamos oficio visible en cocinas, baños y salas.",
  "palm-beach-gardens":
    "Comunidades de golf y barrios cerrados: dibujos detallados, permisos puntuales y interiores de gama alta: gabinetes, azulejo, iluminación y yeso impecable.",
  jupiter:
    "Propiedades frente al agua e interiores en Jupiter: remodelación pensada para durar. Planos, permisos, transformaciones de cocina y baño, azulejo hacia exteriores y acabados interiores.",
  wellington:
    "Fincas ecuestres y casas familiares en Wellington se benefician de remodelaciones que respetan lotes grandes y normas de HOA: apoyo arquitectónico, permisos, azulejo, yeso y mejoras interiores.",
  parkland:
    "Los enclaves residenciales en Parkland exigen planificación cuidadosa. Planos, permisos y remodelación interior con pocas sorpresas: cocinas, baños, empotrados, azulejo y yeso limpio.",
  "palm-beach":
    "Fincas en la isla de Palm Beach requieren discreción y precisión. Renovaciones de alto nivel, permisos y oficios: piedra, carpintería coordinada y yeso impecable.",
  "key-largo":
    "Las propiedades en los Upper Keys implican logística única; coordinamos planos, contexto de permisos del condado de Monroe e interiores: baños ante humedad, acabados resilientes, azulejo y yeso para vida en la isla.",
  "miami-dade-county":
    "Cobertura en todo el condado: planos arquitectónicos, permisos de construcción, remodelación de cocina y baño, azulejo y yeso en zonas no incorporadas y municipios no listados por nombre — pregunta por tu dirección.",
  "broward-palm-beach-counties":
    "Proyectos regionales en Broward y Palm Beach: dirigimos permisos según jurisdicción, alineamos cronogramas con inspecciones y entregamos remodelación interior y acabados a escala para propietarios del Sur de Florida.",
};

const imageAltEs: Record<string, string> = {
  miami:
    "Perfil urbano de Miami junto al agua en día soleado — techado residencial Sovereign Roofing en Miami, Florida",
  "miami-beach":
    "Ocean Drive, Miami Beach, Florida — calle con palmeras y distrito Art Decó",
  "coral-gables":
    "Vista aérea hacia la zona del Biltmore — Coral Gables, condado de Miami-Dade, Florida",
  "kendall-pinecrest":
    "Pinecrest Parkway (US 1) — Kendall a un lado y Pinecrest al otro, condado de Miami-Dade, Florida",
  aventura:
    "Haulover Inlet y perfil costero — cerca de Aventura y North Miami Beach, Florida",
  "sunny-isles-beach":
    "Sunny Isles Beach, Florida — torres a lo largo del Atlántico (vista aérea)",
  doral:
    "Doral, Florida — DoubleTree by Hilton Miami Doral y desarrollo circundante",
  "north-miami":
    "North Miami, Florida — perfil urbano y torres residenciales bajo cielo azul",
  hialeah:
    "Flamencos en Hialeah Park — Hialeah, condado de Miami-Dade, Florida",
  homestead:
    "Coral Castle — Homestead, condado de Miami-Dade, Florida",
  "key-biscayne":
    "Rickenbacker Causeway — ruta a Key Biscayne, condado de Miami-Dade, Florida",
  "fort-lauderdale":
    "Centro de Fort Lauderdale, Florida — perfil sobre el New River y canales",
  hollywood:
    "Hollywood Beach, Hollywood, Florida — palmeras y costa atlántica",
  "pompano-beach":
    "Pompano Beach, Florida — hora dorada sobre la costa atlántica",
  plantation:
    "American Heritage School — vista aérea, Plantation, condado de Broward, Florida",
  "coral-springs":
    "Vista aérea temprana — Coral Springs, condado de Broward, Florida",
  weston:
    "Entrada del Bonaventure Golf Club — Weston, condado de Broward, Florida",
  "pembroke-pines":
    "Entrada de Franklin Academy — Pembroke Pines, condado de Broward, Florida",
  miramar:
    "Cathedral Church of the Resurrection — Miramar, condado de Broward, Florida",
  davie:
    "Vecindario arbolado en Davie — condado de Broward, Florida",
  "deerfield-beach":
    "Muelle internacional de Deerfield Beach — Deerfield Beach, condado de Broward, Florida (aérea)",
  "hallandale-beach":
    "Hallandale Beach, condado de Broward, Florida — escena costera",
  "boca-raton":
    "Señal de acceso a la playa — Boca Ratón, condado de Palm Beach, Florida",
  "delray-beach":
    "Ocean Boulevard (A1A) a lo largo del Atlántico — Delray Beach, condado de Palm Beach, Florida",
  "boynton-beach":
    "Boynton Beach Inlet — Boynton Beach, condado de Palm Beach, Florida",
  "west-palm-beach":
    "Centro de West Palm Beach, Florida — zona Clematis Street de noche",
  "palm-beach-gardens":
    "Downtown at the Gardens — Palm Beach Gardens, condado de Palm Beach, Florida",
  jupiter:
    "Muelle de Juno Beach — Juno Beach, Florida (norte del condado de Palm Beach, cerca de Jupiter)",
  wellington:
    "Escena ecuestre — Wellington, condado de Palm Beach, Florida",
  parkland:
    "Torres residenciales altas — condado de Broward, Florida (zona de servicio Parkland)",
  "palm-beach":
    "Calle con palmeras — Palm Beach, condado de Palm Beach, Florida",
  "key-largo":
    "Marina de Key Largo al atardecer — Upper Keys, condado de Monroe",
  "miami-dade-county":
    "Perfil de Miami al amanecer — condado de Miami-Dade, Florida",
  "broward-palm-beach-counties":
    "Muelle de Lake Worth y costa — condado de Palm Beach, Florida (zona regional Broward y Palm Beach)",
};

export function getServiceAreasForLocale(locale: Locale): ServiceArea[] {
  if (locale === "en") return serviceAreas;
  return serviceAreas.map((a) => ({
    ...a,
    region: regionEs[a.region] ?? a.region,
    description: descriptionEs[a.id] ?? a.description,
    imageAlt: imageAltEs[a.id] ?? a.imageAlt,
  }));
}
