import type { SiteCopy } from "@/content/siteCopy";
import { routes } from "@/lib/site";

const contactHref = routes.contact;

/** Spanish site copy — structure mirrors `siteCopy` (English). */
export const siteCopyEs: SiteCopy = {
  brand: "Sovereign",
  headerBrand: "Sovereign Roofing",
  nav: [
    { label: "Proyectos", href: routes.projects },
    { label: "Servicios", href: routes.services },
    { label: "Nosotros", href: routes.about },
    { label: "Zonas de servicio", href: routes.location },
    { label: "Contacto", href: routes.contact },
  ],
  googleReviews: {
    title: "Lo que dicen nuestros clientes",
    writeReviewCta: "Escribir una reseña",
    businessProfileUrl: "https://share.google/Ku5vR3nY224CqZ3PF",
    aggregateRating: 5,
    reviews: [
      {
        id: "1",
        rating: 5,
        text: "Se encargaron de nuestros planos y permisos, y luego dejaron impecables la cocina y el baño con el azulejo. El equipo fue ordenado, los plazos fueron realistas y los acabados quedaron excelentes.",
        publishTime: "2025-02-14T12:00:00.000Z",
        authorName: "Guillermo Vega",
      },
      {
        id: "2",
        rating: 5,
        text: "Hemos trabajado con varios techadores: la comunicación de Sovereign fue la mejor. El equipo llegó a tiempo, la limpieza fue impecable y el techo nuevo se ve excelente.",
        publishTime: "2025-01-08T10:00:00.000Z",
        authorName: "Sarah Chen",
      },
      {
        id: "3",
        rating: 5,
        text: "Renovación completa del baño: impermeabilización, azulejo, grifería: todo pasó inspección a la primera. Los llamaría de nuevo para la próxima habitación.",
        publishTime: "2024-11-28T15:30:00.000Z",
        authorName: "Marcus Williams",
      },
      {
        id: "4",
        rating: 5,
        text: "Presupuestos honestos desde el inicio. Cuando cambiamos el alcance de la cocina, nos dieron opciones y costos el mismo día: sin sorpresas en la factura.",
        publishTime: "2024-10-03T09:00:00.000Z",
        authorName: "Elena Ruiz",
      },
      {
        id: "5",
        rating: 5,
        text: "Vivir una remodelación no es fácil, pero mantuvieron el polvo bajo control y el acabado del yeso quedó perfecto. La pintura se aplicó sin problemas.",
        publishTime: "2024-08-19T14:30:00.000Z",
        authorName: "David Park",
      },
    ],
  },
  phoneDisplay: "+1 (305) 205-4016",
  phoneTel: "+13052054016",
  heroLeadingMark: "",
  hero: {
    subhead:
      "DESDE INSPECCIONES Y REPARACIONES HASTA REEMPLAZOS COMPLETOS — TEJA, METAL Y SISTEMAS LISTOS PARA TORMENTAS.",
    ctaPrimary: "VER PROYECTOS",
    ctaSecondary: "SOLICITAR PRESUPUESTO",
  },
  review: {
    stat: "+150",
    body: "renovaciones e interiores completados con propietarios que vuelven para la siguiente habitación.",
    initials: ["SR", "JM", "RK", "AL", "TP"],
  },
  vision: {
    eyebrow: "Colaboración",
    headlineBefore: "Donde tu techo",
    headlineAfter: "recibe la protección que merece.",
    body:
      "Te guiamos por hallazgos de inspección, opciones de materiales y un cronograma claro — desde goteras y reemplazos parciales hasta techos completos pensados para viento y lluvia del Sur de Florida.",
    quoteFormTitle: "Solicita tu presupuesto",
    quoteFields: {
      name: "Tu nombre",
      email: "Tu correo",
      phone: "Tu teléfono",
      zip: "Tu código postal",
    },
    quoteProjectTypeLabel: "Tipo de proyecto",
    quoteProjectTypes: [
      { value: "", label: "Selecciona el tipo de proyecto" },
      { value: "replacement", label: "Reemplazo completo de techo" },
      { value: "repair", label: "Reparación / gotera" },
      { value: "inspection", label: "Inspección / presupuesto" },
      { value: "storm", label: "Tormenta o seguro" },
      { value: "metal", label: "Techo metálico o especial" },
      { value: "gutters", label: "Canaletas / regletas" },
      { value: "other", label: "Otro — descríbelo en el correo" },
    ],
    quoteCta: "Obtener presupuesto",
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "De la primera llamada a la entrega final",
    subtitle:
      "Un techo es un sistema: cubierta, base, regletas y ventilación. Así mantenemos claro el alcance, la seguridad y la comunicación del presupuesto al cierre.",
    steps: [
      {
        title: "Inspección y alcance",
        description:
          "Evaluamos la cubierta, penetraciones y drenaje; documentamos qué repara frente a qué reemplaza — con fotos que puedes revisar.",
      },
      {
        title: "Presupuesto y materiales",
        description:
          "Opciones de teja o metal, bases y garantías para que la propuesta coincida con tu presupuesto y exposición a tormentas.",
      },
      {
        title: "Permisos y agenda",
        description:
          "Coordinamos requisitos municipales y fechas de obra para que el desmontaje y el cierre al seco sigan el orden correcto.",
      },
      {
        title: "Instalación",
        description:
          "Cuadrillas siguiendo especificaciones del fabricante en clavado, regletas y ventilación — con control de escombros cada día.",
      },
      {
        title: "Inspección final y entrega",
        description:
          "Recorremos el techo terminado contigo, confirmamos la limpieza y dejamos notas de garantía y cuidado.",
      },
    ],
    trustLine:
      "Licenciados y asegurados · Actualizaciones por escrito con las que puedes planificar · Obras limpias y respetuosas",
  },
  portfolio: {
    title: "Proyectos seleccionados",
    subtitle:
      "Reemplazos, reparaciones y techos nuevos que hemos completado en el Sur de Florida.",
    row2Subtitle: "Más trabajos de techado y exterior recientes.",
    reelVideoSrc: "/hero.mp4",
    reelVideoSrc2: "/hero-reversed.mp4",
    reelBridgeTitle: "En obra",
  },
  offers: {
    title: "Servicios",
    subtitle:
      "Techado residencial: reemplazo, reparación y sistemas listos para tormentas.",
    items: [
      {
        title: "Reemplazo de techo",
        description:
          "Desmontaje completo y techo nuevo con base, regletas y ventilación según especificación del fabricante y código local.",
        cta: "Hablar de reemplazo",
      },
      {
        title: "Reparaciones y goteras",
        description:
          "Arreglos puntuales por tormenta, valles gastados, fallas de regleta y penetraciones — con fotos y alcance claro antes de empezar.",
        cta: "Solicitar reparación",
      },
      {
        title: "Teja asfáltica",
        description:
          "Tejas arquitectónicas y de diseño con calificaciones de viento para exposición costera — color y garantía explicados al inicio.",
        cta: "Ver opciones de teja",
      },
      {
        title: "Techo metálico",
        description:
          "Paneles y costuras para durabilidad y líneas limpias — ideal si buscas larga vida y poco mantenimiento.",
        cta: "Preguntar por metal",
      },
      {
        title: "Inspecciones",
        description:
          "Evaluaciones honestas para compraventa, seguro o tranquilidad — qué es urgente, qué puede esperar y qué presupuestar.",
        cta: "Agendar inspección",
      },
      {
        title: "Tormenta y seguro",
        description:
          "Documentación y apoyo de coordinación tras viento o granizo — te ayudamos a entender el alcance junto a tu ajustador.",
        cta: "Ayuda por tormenta",
      },
    ],
  },
  about: {
    title: "Nosotros",
    body: [
      "Sovereign Roofing se enfoca en techos residenciales — reemplazo, reparación y recuperación por tormentas — con comunicación clara de la inspección a la entrega final.",
    ],
    credentials: "Licenciados y asegurados · Sur de Florida",
    cta: "Trabajar con Sovereign",
    quote: "Plazos honestos. Acabados que notas cada día.",
  },
  contact: {
    title: "Contacto",
    body:
      "Cuéntanos sobre tu techo — reemplazo, gotera, inspección o reclamo por tormenta: te responderemos con los siguientes pasos.",
    quoteLead:
      "Proyecto o duda sobre el techo: respondemos con los siguientes pasos.",
    email: "Centricgroup.us@gmail.com",
  },
  locationPage: {
    title: "Ubicación y zona de servicio",
    lead:
      "Sovereign Roofing trabaja con propietarios en todo el Sur de Florida: reemplazo de techo, reparaciones, inspecciones y apoyo por tormentas.",
    body: [
      "Coordinamos visitas al sitio, trámites municipales y cronogramas de producción para que tu proyecto siga avanzando.",
      "Escríbenos desde la página de contacto para hablar de tu dirección, plazo y alcance.",
    ],
    mapEmbedSrc:
      "https://www.openstreetmap.org/export/embed.html?bbox=-87.65%2C24.45%2C-79.95%2C31.05&layer=mapnik&marker=25.7617%2C-80.1918",
    mapCaption: "Sur de Florida — área metropolitana de Miami y condados cercanos",
    serviceAreasHeading: "Zonas que atendemos",
    serviceAreasFootnote:
      "¿No ves tu zona? Contáctanos: a menudo coordinamos proyectos entre condados cuando el alcance lo amerita.",
    schemaItemListName: "Sovereign Roofing — Zonas de servicio en el Sur de Florida",
    schemaItemListDescription:
      "Ciudades y condados donde Sovereign Roofing ofrece techado residencial, reparaciones e inspecciones.",
  },
  footer: {
    rights: "Sovereign Roofing",
    location: "Miami · Sur de Florida",
    mapHeading: "Zona de servicio",
    mapLinkLabel: "Página de ubicación",
  },
  ui: {
    navAriaPrimary: "Principal",
    navAriaMobile: "Principal (móvil)",
    footerNavAria: "Pie de página",
    introAria: "Introducción",
    headerBrandHomeAria: "Inicio de Sovereign Roofing",
    mapIframeTitle: "Mapa de Florida — zona de servicio de Sovereign Roofing",
    offersEyebrow: "Lo que hacemos",
    aboutEyebrow: "Quiénes somos",
    processCta: "Iniciar una conversación",
    reviewExpandLess: "Menos",
    reviewExpandMore: "Más",
    reviewPagesNav: "Páginas de reseñas",
    reviewPagesPrev: "Página anterior",
    reviewPagesNext: "Página siguiente",
    googleBusinessAria: "Perfil de Google Business",
    portfolioCarouselRegion: "Carrusel de galería de proyectos",
    portfolioCarouselPrev: "Desplazar carrusel a la izquierda",
    portfolioCarouselNext: "Desplazar carrusel a la derecha",
    portfolioRow2Region: "Carrusel de más proyectos",
    portfolioRow2Prev: "Desplazar fila de proyectos a la izquierda",
    portfolioRow2Next: "Desplazar fila de proyectos a la derecha",
    serviceAreasPreviewBlurb:
      "Miami y todo el Sur de Florida — {count} ciudades y condados. Una muestra abajo; consulta el directorio completo de cada zona que cubrimos.",
    serviceAreasCoverageSuffix: "para el mapa de cobertura y más detalle.",
    reviewsEmptyHint: "Añade reseñas en",
    reviewsEmptyCode: "siteCopy.googleReviews.reviews",
    locationDetailParagraph:
      "Sovereign Roofing ofrece reemplazo y reparación de techos residenciales, inspecciones y apoyo con documentación por tormentas en Miami-Dade, Broward, Palm Beach y comunidades selectas del condado de Monroe. Usa el directorio siguiente para encontrar tu ciudad o condado.",
    locationDirectoryIntro:
      "{count} ciudades y condados en el Sur de Florida: cada una con contexto local para quienes buscan contratistas de remodelación, ayuda con permisos y obra interior cerca de ti.",
    locationPhotoCredit:
      "Las fotos de zona son stock del Sur de Florida (p. ej. Miami Beach, Hollywood FL, Boynton Beach, Keys) de",
    locationPhotoCreditSuffix:
      ", guardadas en el sitio; pide fotos de proyectos Sovereign Roofing terminados en tu ciudad.",
    locationCoverageMapHeading: "Mapa de cobertura",
    locationContactLine: "Contáctanos",
    locationContactSuffix: "con la dirección de tu proyecto.",
    notFoundTitle: "404",
    notFoundBody:
      "Esta página no existe. Vuelve al inicio o explora servicios y proyectos.",
    notFoundHome: "Inicio",
    notFoundContact: "Contacto",
    quoteEmailSubject: "Solicitud de presupuesto — Sovereign Roofing",
    quoteEmailName: "Nombre",
    quoteEmailEmail: "Correo",
    quoteEmailPhone: "Teléfono",
    quoteEmailZip: "CP",
    quoteEmailProjectType: "Tipo de proyecto",
    quoteEmailNotSelected: "(no seleccionado)",
    quoteSubmitting: "Enviando…",
    quoteSubmitLoadingHint: "Enviando tu solicitud",
    quoteSubmitSuccess: "Nos pondremos en contacto en breve.",
    quoteSubmitError:
      "No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos por correo.",
  },
};

export const portfolioCardsEs = [
  {
    src: "/portfolio/01.jpg",
    alt: "Remodelación interior en Sunny Isles Beach",
    category: "Sunny Isles Beach",
    title: "Interior residencial",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/02.jpg",
    alt: "Detalle de acabado y carpintería",
    category: "Sunny Isles Beach",
    title: "Gabinetes y acabados",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/03.jpg",
    alt: "Proyecto en Aventura — sala",
    category: "Aventura",
    title: "Residencia Turnberry",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/04.jpg",
    alt: "Proyecto en Aventura — interior",
    category: "Aventura",
    title: "Plano abierto e iluminación",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/05.jpg",
    alt: "Remodelación en Aventura en curso",
    category: "Aventura",
    title: "Cocina y flujo con la sala",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/06.jpg",
    alt: "Trabajo interior en obra",
    category: "Residencial",
    title: "Azulejo y detalle",
    cta: "Ver",
    href: contactHref,
  },
];

export const portfolioCardsRow2Es = [
  {
    src: "/portfolio/07.jpg",
    alt: "Renovación de cocina e interior",
    category: "Cocina",
    title: "Actualización de gabinetes y encimera",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/08.jpg",
    alt: "Baño e instalación de azulejo",
    category: "Baño",
    title: "Tocador y muro de azulejo",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/09.jpg",
    alt: "Yeso interior y molduras",
    category: "Yeso",
    title: "Muros y vanos",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/10.jpg",
    alt: "Distribución de azulejo y piso",
    category: "Azulejo",
    title: "Piso y muro",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/11.jpg",
    alt: "Detalle interior residencial",
    category: "Residencial",
    title: "Carpintería de acabado",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/12.jpg",
    alt: "Remodelación de espacio habitable",
    category: "Interiores",
    title: "Iluminación y carpintería",
    cta: "Ver",
    href: contactHref,
  },
];
