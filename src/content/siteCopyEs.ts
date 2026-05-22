import type { SiteCopy } from "@/content/siteCopy";
import { contactEmail, routes } from "@/lib/site";

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
  phoneDisplay: "+1 (754) 329-4412",
  phoneTel: "+17543294412",
  heroLeadingMark: "",
  hero: {
    subhead:
      "DESDE INSPECCIONES Y REPARACIONES HASTA REEMPLAZOS COMPLETOS — TEJA, METAL Y SISTEMAS LISTOS PARA TORMENTAS.",
    ctaPrimary: "VER PROYECTOS",
    ctaSecondary: "SOLICITAR PRESUPUESTO",
  },
  trustBanner: {
    title: "Los más valorados en el Sur de Florida",
    items: [
      {
        label: "Google",
        sublabel: "5/5 • Más de 200 reseñas",
        logoSrc: "/brands/google.png",
      },
      {
        label: "Yelp",
        sublabel: "5/5 • Más de 50 reseñas",
        logoSrc: "/brands/yelp.png",
      },
      {
        label: "Facebook",
        sublabel: "5/5 • Más de 50 reseñas",
        logoSrc: "/brands/facebook-circle.png",
      },
      {
        label: "BBB",
        sublabel: "Calificación A+",
        logoSrc: "/brands/bbb.png",
      },
    ],
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
  },
  offers: {
    title: "Servicios",
    subtitle:
      "Techado residencial: reemplazo, reparación y sistemas listos para tormentas.",
    items: [
      {
        title: "Re-techados y reemplazo",
        description:
          "Desmontaje completo y techo nuevo con base, regletas y ventilación según especificación del fabricante y código local.",
        cta: "Hablar de reemplazo",
        imageSrc: "/portfolio/project-07-suburban-reroof.png",
        imageAlt: "Reemplazo de techo residencial terminado en una casa del Sur de Florida",
      },
      {
        title: "Reparaciones de emergencia y goteras",
        description:
          "Ayuda rápida para goteras activas, daño por tormenta, valles gastados, fallas de regleta y penetraciones — con fotos y alcance claro antes de empezar.",
        cta: "Solicitar reparación",
        imageSrc: "/portfolio/project-10-valley-shingles.png",
        imageAlt: "Detalle de valle de techo con tejas arquitectónicas después de reparación",
      },
      {
        title: "Teja asfáltica",
        description:
          "Tejas arquitectónicas y de diseño con calificaciones de viento para exposición costera — color y garantía explicados al inicio.",
        cta: "Ver opciones de teja",
        imageSrc: "/portfolio/project-05-architectural-shingles.png",
        imageAlt: "Tejas asfálticas arquitectónicas en un techo residencial",
      },
      {
        title: "Techo metálico",
        description:
          "Paneles y costuras para durabilidad y líneas limpias — ideal si buscas larga vida y poco mantenimiento.",
        cta: "Preguntar por metal",
        imageSrc: "/portfolio/project-04-metal-roof.png",
        imageAlt: "Techo metálico gris moderno en una vivienda contemporánea",
      },
      {
        title: "Inspecciones",
        description:
          "Evaluaciones honestas para compraventa, seguro o tranquilidad — qué es urgente, qué puede esperar y qué presupuestar.",
        cta: "Agendar inspección",
        imageSrc: "/portfolio/project-09-aerial-shingle-detail.png",
        imageAlt: "Vista aérea de inspección de techo con tejas arquitectónicas",
      },
      {
        title: "Reclamos de seguro y daño por tormenta",
        description:
          "Documentación y apoyo de coordinación tras viento o granizo — te ayudamos a entender el alcance junto a tu ajustador.",
        cta: "Apoyo con reclamos",
        imageSrc: "/service-areas/areas-we-serve-roofing-crew.jpg",
        imageAlt: "Cuadrilla de techado preparando reparación por daño de tormenta",
      },
      {
        title: "Techo de teja",
        description:
          "Servicio para techos de teja de concreto y barril en viviendas mediterráneas y costeras: reparación, reemplazo y planificación de base.",
        cta: "Preguntar por teja",
        imageSrc: "/portfolio/project-11-barrel-tile.png",
        imageAlt: "Casa mediterránea con techo de teja barril gris",
      },
      {
        title: "Sistemas de techo plano",
        description:
          "Membranas para techos planos o de baja pendiente en adiciones, comercios y sol de Florida: costuras, drenaje y regletas detalladas.",
        cta: "Planear techo plano",
        imageSrc: "/portfolio/project-02-commercial-membrane.png",
        imageAlt: "Techo plano comercial con sistema de membrana blanca",
      },
      {
        title: "Instalación de gutters",
        description:
          "Instalación de gutters y planificación de drenaje para alejar la lluvia de Florida de fascia, cimientos, entradas y jardinería.",
        cta: "Planear gutters",
        imageSrc: "/portfolio/project-03-mediterranean-estate.png",
        imageAlt: "Exterior de vivienda del Sur de Florida adecuado para instalación de gutters",
      },
    ],
  },
  servicesSpotlight: {
    eyebrow: "Donde nos especializamos",
    title: "Servicios de techado para el Sur de Florida",
    subtitle:
      "Desde re-techados y reparaciones de emergencia hasta mantenimiento, gutters y apoyo con reclamos de seguro — misma agenda y estándares de obra Sovereign.",
    cta: "Ver",
    items: [
      {
        category: "Re-techados",
        title: "Reemplazo completo de techo",
        alt: "Re-techado residencial terminado en una casa del Sur de Florida",
        imageSrc: "/portfolio/project-07-suburban-reroof.png",
      },
      {
        category: "Reparaciones de emergencia",
        title: "Goteras, valles y daño por tormenta",
        alt: "Detalle de valle de techo usado para servicio de reparación urgente de goteras",
        imageSrc: "/portfolio/project-10-valley-shingles.png",
      },
      {
        category: "Mantenimiento",
        title: "Cuidado preventivo del techo",
        alt: "Vista aérea de techos del Sur de Florida para planificación de mantenimiento",
        imageSrc: "/portfolio/project-06-community-overview.png",
      },
      {
        category: "Gutters",
        title: "Instalación de gutters",
        alt: "Exterior de vivienda del Sur de Florida adecuado para instalación de gutters y drenaje",
        imageSrc: "/portfolio/project-03-mediterranean-estate.png",
      },
      {
        category: "Reclamos de seguro",
        title: "Fotos, documentación y alcance",
        alt: "Cuadrilla de techado preparando documentación y apoyo de reparación en una obra",
        imageSrc: "/service-areas/areas-we-serve-roofing-crew.jpg",
      },
      {
        category: "Sistemas especiales",
        title: "Techo de teja y metal",
        alt: "Techo metálico moderno y sistema especial en una vivienda del Sur de Florida",
        imageSrc: "/portfolio/project-04-metal-roof.png",
      },
    ],
  },
  floridaNumberOne: {
    headlineLead: "LA OPCIÓN #1 DEL SUR DE FLORIDA",
    headlineAccent: "PARA TECHADO",
    body:
      "En Sovereign Roofing apoyamos proyectos comerciales y residenciales con cronogramas confiables y cuadrillas constantes. Ningún trabajo es demasiado grande o pequeño: cuéntanos qué proteges y te ayudamos a elegir el sistema y el calendario adecuados.",
    cta: "RESERVA UNA COTIZACIÓN GRATIS",
    partners: [
      { src: "/brands/gaf.png", alt: "GAF" },
      { src: "/brands/polyglass.png", alt: "Polyglass" },
      { src: "/brands/mule-hide.png", alt: "Mule-Hide Products" },
      { src: "/brands/tremco.webp", alt: "TREMCO Roofing & Building Maintenance" },
      { src: "/brands/soprema.png", alt: "SOPREMA" },
    ],
  },
  about: {
    title: "Nosotros",
    body: [
      "Sovereign Roofing es una compañía de techado de propiedad minoritaria que atiende a propietarios y negocios del Sur de Florida con re-techados, reparaciones de emergencia, mantenimiento, instalación de gutters y apoyo con reclamos de seguro.",
      "Nuestro equipo mantiene el proceso claro desde la inspección hasta la entrega final, con alcances directos, documentación con fotos y obras limpias.",
    ],
    credentials:
      "Propiedad minoritaria · Licenciados y asegurados · Licencia de contratista CCC1336048 · Sur de Florida",
    cta: "Trabajar con Sovereign",
    quote: "Techado local, cuadrillas responsables y comunicación con la que puedes planificar.",
    onSiteTitle: "En obra",
    reelVideoSrc: "/selected-work-reel-top.mp4",
    reelVideoSrc2: "/selected-work-reel-reversed.mp4",
  },
  contact: {
    title: "Contacto",
    body:
      "Cuéntanos sobre tu techo — reemplazo, gotera, inspección o reclamo por tormenta: te responderemos con los siguientes pasos.",
    quoteLead:
      "Proyecto o duda sobre el techo: respondemos con los siguientes pasos.",
    email: contactEmail,
  },
  locationPage: {
    heroEyebrow: "Dónde trabajamos",
    expansionRibbon: "Expansión · Naples · Orlando",
    expansionCardTitle: "Nuevos mercados",
    expansionCardBody:
      "Estamos incorporando proyectos en Naples y Orlando junto a nuestra base en el Sur de Florida — indica tu dirección para disponibilidad.",
    heroDirectoryStat: "{count} ciudades y condados en el directorio",
    heroContactCta: "Consultar disponibilidad para tu dirección",
    title: "Ubicación y zona de servicio",
    lead:
      "Sovereign Roofing trabaja con propietarios en todo el Sur de Florida: reemplazo de techo, reparaciones, inspecciones y apoyo por tormentas. Estamos ampliando cobertura a Naples y Orlando; comparte tu dirección y confirmamos disponibilidad.",
    body: [
      "Coordinamos visitas al sitio, trámites municipales y cronogramas de producción para que tu proyecto siga avanzando.",
      "Escríbenos desde la página de contacto para hablar de tu dirección, plazo y alcance.",
    ],
    mapEmbedSrc:
      "https://www.openstreetmap.org/export/embed.html?bbox=-87.65%2C24.45%2C-79.95%2C31.05&layer=mapnik&marker=25.7617%2C-80.1918",
    mapCaption: "Sur de Florida — área metropolitana de Miami y condados cercanos",
    serviceAreasHeading: "Zonas que atendemos",
    serviceAreasFootnote:
      "Expansión a Naples y Orlando — pregúntanos por la agenda en esas zonas. ¿No ves tu ciudad en la lista? Contáctanos: a menudo coordinamos proyectos entre condados cuando el alcance lo amerita.",
    schemaItemListName: "Sovereign Roofing — Zonas de servicio en el Sur de Florida",
    schemaItemListDescription:
      "Ciudades y condados donde Sovereign Roofing ofrece techado residencial, reparaciones e inspecciones.",
  },
  instagram: {
    eyebrow: "Instagram",
    title: "Trabajos recientes en el feed",
    description:
      "Fotos de proyectos, reels desde la obra y novedades mientras avanzamos por el Sur de Florida — desliza en el móvil.",
    followCta: "Seguir en Instagram",
    embedPlaceholder:
      "Usa Seguir arriba para ver toda la galería. Un feed en vivo puede mostrarse aquí tras configurar el embed una sola vez en el hosting.",
  },
  footer: {
    rights: "Sovereign Roofing",
    licenseLabel: "Licencia de contratista",
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
    themeToggleToDark: "Cambiar a modo oscuro",
    themeToggleToLight: "Cambiar a modo claro",
    mapIframeTitle: "Mapa de Florida — zona de servicio de Sovereign Roofing",
    offersEyebrow: "Lo que hacemos",
    aboutEyebrow: "Quiénes somos",
    aboutOnSiteClipsAria: "Videos de obra en sitio",
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
    floridaNumberOneAria: "Por qué los propietarios eligen Sovereign Roofing",
    partnerBrandsCarouselRegion: "Marcas asociadas",
    trustBannerAria: "Calificaciones en plataformas de reseñas",
    reviewsEmptyHint: "Añade reseñas en",
    reviewsEmptyCode: "siteCopy.googleReviews.reviews",
    locationDetailParagraph:
      "Sovereign Roofing ofrece reemplazo y reparación de techos residenciales, inspecciones y apoyo con documentación por tormentas en Miami-Dade, Broward, Palm Beach y comunidades selectas del condado de Monroe, con expansión en marcha hacia Naples y Orlando. Usa el directorio siguiente para encontrar tu ciudad o condado.",
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
    quoteEmailInbox: "Bandeja",
    quoteSubmitting: "Enviando…",
    quoteSubmitLoadingHint: "Enviando tu solicitud",
    quoteSubmitSuccess: "Nos pondremos en contacto en breve.",
    quoteSubmitError:
      "No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos por correo.",
  },
};

export const portfolioCardsEs = [
  {
    src: "/portfolio/project-01.jpg",
    alt: "Instalación de techo residencial completada por Sovereign Roofing en el sur de Florida",
    category: "Residencial",
    title: "Techo terminado",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/project-02.jpg",
    alt: "Primer plano de trabajo de techo y materiales en una casa del sur de Florida",
    category: "Detalle",
    title: "Detalle de techo",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/project-04.jpg",
    alt: "Techo de teja de concreto marrón con vecindario y palmeras al fondo",
    category: "Teja",
    title: "Techo de teja de concreto",
    cta: "Ver",
    href: contactHref,
  },
  {
    src: "/portfolio/project-05.jpg",
    alt: "Foto en obra de un trabajo de Sovereign Roofing en el sur de Florida",
    category: "En obra",
    title: "Obra reciente",
    cta: "Ver",
    href: contactHref,
  },
];
