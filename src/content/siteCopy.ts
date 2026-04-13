import { routes } from "@/lib/site";

export const siteCopy = {
  brand: "Sovereign",
  headerBrand: "Sovereign Roofing",
  /** Primary navigation — each item is a real route for SEO */
  nav: [
    { label: "Projects", href: routes.projects },
    { label: "Services", href: routes.services },
    { label: "About", href: routes.about },
    { label: "Service areas", href: routes.location },
    { label: "Contact", href: routes.contact },
  ],
  googleReviews: {
    title: "What our clients say about us",
    writeReviewCta: "Write a review",
    businessProfileUrl: "https://share.google/Ku5vR3nY224CqZ3PF",
    aggregateRating: 5,
    reviews: [
      {
        id: "1",
        rating: 5,
        text: "They handled our plans and permits, then knocked out the kitchen and bath tile. Crew was tidy, timeline was honest, and the finishes look sharp.",
        publishTime: "2025-02-14T12:00:00.000Z",
        authorName: "Guillermo Vega",
      },
      {
        id: "2",
        rating: 5,
        text: "We’ve used several roofers — Sovereign’s communication was the best. Crew was on time, cleanup was thorough, and the new roof looks sharp.",
        publishTime: "2025-01-08T10:00:00.000Z",
        authorName: "Sarah Chen",
      },
      {
        id: "3",
        rating: 5,
        text: "Full bath gut: waterproofing, tile, fixtures — everything passed inspection the first time. Would call them again for the next room.",
        publishTime: "2024-11-28T15:30:00.000Z",
        authorName: "Marcus Williams",
      },
      {
        id: "4",
        rating: 5,
        text: "Honest estimating up front. When we changed the scope on the kitchen, they gave options and costs the same day — no surprises on the invoice.",
        publishTime: "2024-10-03T09:00:00.000Z",
        authorName: "Elena Ruiz",
      },
      {
        id: "5",
        rating: 5,
        text: "Living through a remodel isn’t fun, but they kept dust down and the drywall finish is perfect. Paint went on smooth.",
        publishTime: "2024-08-19T14:00:00.000Z",
        authorName: "David Park",
      },
    ],
  },
  phoneDisplay: "+1 (305) 205-4016",
  phoneTel: "+13052054016",
  heroLeadingMark: "",
  hero: {
    subhead:
      "FROM INSPECTIONS AND REPAIRS TO FULL REPLACEMENTS — SHINGLE, METAL, AND STORM-READY SYSTEMS.",
    ctaPrimary: "VIEW PROJECTS",
    ctaSecondary: "REQUEST A BID",
  },
  review: {
    stat: "+150",
    body: "renovations and interiors completed with owners who come back for the next room.",
    initials: ["SR", "JM", "RK", "AL", "TP"],
  },
  vision: {
    eyebrow: "Partnership",
    headlineBefore: "Where your roof",
    headlineAfter: "gets the protection it deserves.",
    body:
      "We walk you through inspection findings, material options, and a clear timeline — from leak repairs and partial replacements to full re-roofs built for South Florida wind and rain.",
    quoteFormTitle: "Get your quote",
    quoteFields: {
      name: "Your name",
      email: "Your email",
      phone: "Your phone",
      zip: "Your ZIP code",
    },
    quoteProjectTypeLabel: "Project type",
    quoteProjectTypes: [
      { value: "", label: "Select project type" },
      { value: "replacement", label: "Full roof replacement" },
      { value: "repair", label: "Repair / leak" },
      { value: "inspection", label: "Inspection / estimate" },
      { value: "storm", label: "Storm or insurance claim" },
      { value: "metal", label: "Metal or specialty roofing" },
      { value: "gutters", label: "Gutters / flashing" },
      { value: "other", label: "Other — describe in email" },
    ],
    quoteCta: "Get quote",
  },
  /** Industry-standard “how we work” — sets expectations before portfolio (trust + clarity). */
  process: {
    eyebrow: "How we work",
    title: "From first call to final walkthrough",
    subtitle:
      "A roof is a system: deck, underlayment, flashing, and ventilation. Here’s how we keep scope, safety, and communication clear from estimate to completion.",
    steps: [
      {
        title: "Inspection & scope",
        description:
          "We assess the roof deck, penetrations, and drainage, then document what needs repair versus full replacement — with photos you can reference.",
      },
      {
        title: "Estimate & materials",
        description:
          "You get options for shingle or metal systems, underlayment ratings, and warranty tiers so the proposal matches your budget and storm exposure.",
      },
      {
        title: "Permits & scheduling",
        description:
          "We coordinate municipality requirements and production dates so tear-off and dry-in happen in the right order.",
      },
      {
        title: "Installation",
        description:
          "Crews follow manufacturer specs for nailing patterns, flashing, and ventilation — with daily site respect and debris control.",
      },
      {
        title: "Final inspection & handoff",
        description:
          "We walk the finished roof with you, confirm clean-up, and leave warranty and care notes so you know what to expect next.",
      },
    ],
    trustLine:
      "Licensed & insured · Written updates you can plan around · Clean, respectful job sites",
  },
  portfolio: {
    title: "Selected projects",
    subtitle:
      "Replacements, repairs, and re-roofs we’ve completed across South Florida.",
    row2Subtitle:
      "More roofing and exterior work from recent jobs.",
    reelVideoSrc: "/hero.mp4",
    reelVideoSrc2: "/hero-reversed.mp4",
    reelBridgeTitle: "On site",
  },
  offers: {
    title: "Services",
    subtitle:
      "Residential roofing — replacement, repair, and storm-ready systems.",
    items: [
      {
        title: "Roof replacement",
        description:
          "Full tear-off and re-roof with quality underlayment, flashing, and ventilation — built to manufacturer specs and local code.",
        cta: "Discuss replacement",
      },
      {
        title: "Repairs & leaks",
        description:
          "Targeted fixes for storm damage, worn valleys, flashing failures, and penetrations — with clear photos and scope before we start.",
        cta: "Request a repair",
      },
      {
        title: "Shingle roofing",
        description:
          "Architectural and designer shingles with wind ratings suited to coastal exposure — color and warranty options explained up front.",
        cta: "See shingle options",
      },
      {
        title: "Metal roofing",
        description:
          "Standing seam and panel systems for durability and clean lines — ideal when you want long life and low maintenance.",
        cta: "Ask about metal",
      },
      {
        title: "Inspections",
        description:
          "Honest assessments for real estate, insurance, or peace of mind — what’s urgent, what can wait, and what to budget for.",
        cta: "Schedule inspection",
      },
      {
        title: "Storm & insurance",
        description:
          "Documentation and coordination support after wind or hail — we help you understand scope alongside your adjuster.",
        cta: "Storm help",
      },
    ],
  },
  about: {
    title: "About",
    body: [
      "Sovereign Roofing focuses on residential roofs — replacement, repair, and storm recovery — with clear communication from inspection to final walkthrough.",
    ],
    credentials: "Licensed & insured · South Florida",
    cta: "Work with Sovereign",
    quote: "Honest schedules. Finish work you notice every day.",
  },
  contact: {
    title: "Contact",
    body:
      "Tell us about your roof — replacement, leak, inspection, or storm claim — we’ll follow up with next steps.",
    quoteLead:
      "Roof project or question — we reply with next steps.",
    email: "Centricgroup.us@gmail.com",
  },
  locationPage: {
    title: "Location & service area",
    lead:
      "Sovereign Roofing works with homeowners across South Florida — roof replacement, repair, inspections, and storm support.",
    body: [
      "We coordinate site visits, municipal submissions, and production schedules so your project stays moving.",
      "Reach out through the contact page to discuss your address, timeline, and scope.",
    ],
    /** Whole-state view so Florida is unmistakable on the map (OpenStreetMap embed). */
    mapEmbedSrc:
      "https://www.openstreetmap.org/export/embed.html?bbox=-87.65%2C24.45%2C-79.95%2C31.05&layer=mapnik&marker=25.7617%2C-80.1918",
    mapCaption: "South Florida — Miami metro and surrounding counties",
    serviceAreasHeading: "Areas we serve",
    serviceAreasFootnote:
      "Don’t see your area listed? Contact us — we often coordinate projects across county lines for the right scope.",
    /** JSON-LD ItemList for /location */
    schemaItemListName: "Sovereign Roofing — South Florida service areas",
    schemaItemListDescription:
      "Cities and counties where Sovereign Roofing provides residential roofing, repairs, and inspections.",
  },
  footer: {
    rights: "Sovereign Roofing",
    location: "Miami · South Florida",
    mapHeading: "Service area",
    mapLinkLabel: "Location page",
  },
  /** Misc UI strings not tied to a single section (nav aria, hardcoded labels, etc.) */
  ui: {
    navAriaPrimary: "Primary",
    navAriaMobile: "Mobile primary",
    footerNavAria: "Footer",
    introAria: "Introduction",
    headerBrandHomeAria: "Sovereign Roofing home",
    mapIframeTitle: "Map of Florida — Sovereign Roofing service area",
    offersEyebrow: "What we do",
    aboutEyebrow: "Who we are",
    processCta: "Start a conversation",
    reviewExpandLess: "Less",
    reviewExpandMore: "More",
    reviewPagesNav: "Review pages",
    reviewPagesPrev: "Previous page",
    reviewPagesNext: "Next page",
    googleBusinessAria: "Google Business Profile",
    portfolioCarouselRegion: "Project gallery carousel",
    portfolioCarouselPrev: "Scroll portfolio left",
    portfolioCarouselNext: "Scroll portfolio right",
    portfolioRow2Region: "More projects carousel",
    portfolioRow2Prev: "Scroll projects row left",
    portfolioRow2Next: "Scroll projects row right",
    /** `{count}` is replaced with the number of service areas */
    serviceAreasPreviewBlurb:
      "Miami and all of South Florida — {count} cities and counties. A sample below; see the full directory for every area we cover.",
    /** After location + link: “for the coverage map and more detail.” */
    serviceAreasCoverageSuffix: "for the coverage map and more detail.",
    reviewsEmptyHint: "Add reviews in",
    reviewsEmptyCode: "siteCopy.googleReviews.reviews",
    locationDetailParagraph:
      "Sovereign Roofing provides residential roof replacement, repairs, inspections, and storm documentation support across Miami-Dade, Broward, Palm Beach, and select Monroe County communities. Use the directory below to find your city or county.",
    /** `{count}` replaced */
    locationDirectoryIntro:
      "{count} cities and counties across South Florida—each with local context for homeowners searching remodeling contractors, permit help, and interior construction near you.",
    locationPhotoCredit:
      "Area photos are South Florida location stock (e.g. Miami Beach, Hollywood FL, Boynton Beach, Keys) from",
    locationPhotoCreditSuffix:
      ", saved on-site; ask us for photos of completed Sovereign Roofing projects in your city.",
    locationCoverageMapHeading: "Coverage map",
    locationContactLine: "Contact us",
    locationContactSuffix: "with your project address.",
    notFoundTitle: "404",
    notFoundBody:
      "This page doesn’t exist. Return home or explore services and projects.",
    notFoundHome: "Home",
    notFoundContact: "Contact",
    quoteEmailSubject: "Quote request — Sovereign Roofing",
    quoteEmailName: "Name",
    quoteEmailEmail: "Email",
    quoteEmailPhone: "Phone",
    quoteEmailZip: "ZIP",
    quoteEmailProjectType: "Project type",
    quoteEmailNotSelected: "(not selected)",
    quoteSubmitting: "Sending…",
    quoteSubmitLoadingHint: "Sending your request",
    quoteSubmitSuccess: "We will be in contact shortly.",
    quoteSubmitError:
      "We couldn’t send that just now. Please try again or email us directly.",
  },
};

export type SiteCopy = typeof siteCopy;

const contactHref = routes.contact;

export const portfolioCards = [
  {
    src: "/portfolio/01.jpg",
    alt: "Interior remodel in Sunny Isles Beach",
    category: "Sunny Isles Beach",
    title: "Residential interior",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/02.jpg",
    alt: "Finish and millwork detail",
    category: "Sunny Isles Beach",
    title: "Cabinetry & finishes",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/03.jpg",
    alt: "Aventura project — living space",
    category: "Aventura",
    title: "Turnberry residence",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/04.jpg",
    alt: "Aventura project — interior view",
    category: "Aventura",
    title: "Open layout & lighting",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/05.jpg",
    alt: "Aventura remodel in progress",
    category: "Aventura",
    title: "Kitchen & living flow",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/06.jpg",
    alt: "On-site interior work",
    category: "Residential",
    title: "Tile & detail work",
    cta: "View",
    href: contactHref,
  },
];

export const portfolioCardsRow2 = [
  {
    src: "/portfolio/07.jpg",
    alt: "Kitchen and interior renovation",
    category: "Kitchen",
    title: "Cabinet & counter update",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/08.jpg",
    alt: "Bathroom and tile installation",
    category: "Bath",
    title: "Vanity & tile surround",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/09.jpg",
    alt: "Interior drywall and trim",
    category: "Drywall",
    title: "Walls & openings",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/10.jpg",
    alt: "Tile layout and flooring",
    category: "Tile",
    title: "Floor & wall layout",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/11.jpg",
    alt: "Residential interior detail",
    category: "Residential",
    title: "Finish carpentry",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/12.jpg",
    alt: "Living space remodel",
    category: "Interiors",
    title: "Lighting & millwork",
    cta: "View",
    href: contactHref,
  },
];
