import { contactEmail, routes } from "@/lib/site";

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
  /** keysconcrete `ScrollingBanner` — live kc-marquee trust strip below hero */
  trustBanner: {
    title: "Top rated across South Florida",
    items: [
      {
        label: "Google",
        sublabel: "5/5 • 200+ reviews",
        logoSrc: "/brands/google.png",
      },
      {
        label: "Yelp",
        sublabel: "5/5 • 50+ reviews",
        logoSrc: "/brands/yelp.png",
      },
      {
        label: "Facebook",
        sublabel: "5/5 • 50+ reviews",
        logoSrc: "/brands/facebook-circle.png",
      },
      {
        label: "BBB",
        sublabel: "A+ rating",
        logoSrc: "/brands/bbb.png",
      },
    ],
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
    reelVideoSrc: "/selected-work-reel-top.mp4",
    reelVideoSrc2: "/selected-work-reel-reversed.mp4",
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
  /** Hero duo on /services — residential vs commercial (matches portfolio photography). */
  servicesSpotlight: {
    eyebrow: "Where we specialize",
    title: "Residential & commercial",
    subtitle:
      "Steep-slope shingles for homes and reflective membrane systems for low-slope buildings — same Sovereign scheduling and site standards.",
    cta: "View",
    items: [
      {
        category: "Residential",
        title: "Expert shingle installation",
        alt: "Roofers installing asphalt shingles on a steep residential roof under a clear sky",
        imageSrc: "/portfolio/project-01-residential-shingles.png",
      },
      {
        category: "Commercial",
        title: "Cool roof membrane system",
        alt: "Commercial flat roof crew installing a white cool-roof membrane system",
        imageSrc: "/portfolio/project-02-commercial-membrane.png",
      },
    ],
  },
  /** Keys-style trust strip: headline, supplier row, gradient quote CTA, supporting copy */
  floridaNumberOne: {
    headlineLead: "SOUTH FLORIDA'S #1 CHOICE",
    headlineAccent: "FOR ROOFING",
    body:
      "At Sovereign Roofing, we support both commercial and residential projects with dependable scheduling and consistent crews. No job is too big or too small — tell us what you're protecting and we'll help match the right system and timeline.",
    cta: "BOOK A FREE QUOTE",
    partners: [
      { src: "/brands/home-depot.png", alt: "The Home Depot" },
      { src: "/brands/sherwin-williams.png", alt: "Sherwin-Williams" },
      { src: "/brands/behr.png", alt: "BEHR" },
      { src: "/brands/floor-decor.png", alt: "Floor & Decor" },
      { src: "/brands/wayfair.png", alt: "Wayfair" },
      { src: "/brands/ace.png", alt: "Ace Hardware" },
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
    email: contactEmail,
  },
  locationPage: {
    heroEyebrow: "Where we work",
    expansionRibbon: "Expanding · Naples · Orlando",
    expansionCardTitle: "Growth markets",
    expansionCardBody:
      "We’re onboarding projects in Naples and Orlando alongside our South Florida base — share your address for availability.",
    heroDirectoryStat: "{count} cities & counties listed",
    heroContactCta: "Check availability for your address",
    title: "Location & service area",
    lead:
      "Sovereign Roofing works with homeowners across South Florida — roof replacement, repair, inspections, and storm support. We’re expanding into Naples and Orlando; share your address and we’ll confirm availability.",
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
      "Expanding into Naples and Orlando — ask us about scheduling in those markets. Don’t see your area listed? Contact us — we often coordinate projects across county lines for the right scope.",
    /** JSON-LD ItemList for /location */
    schemaItemListName: "Sovereign Roofing — South Florida service areas",
    schemaItemListDescription:
      "Cities and counties where Sovereign Roofing provides residential roofing, repairs, and inspections.",
  },
  instagram: {
    eyebrow: "Instagram",
    title: "Recent work on the feed",
    description:
      "Project photos, reels from site, and updates as we move across South Florida — tap through on mobile.",
    followCta: "Follow on Instagram",
    embedPlaceholder:
      "Use Follow above for the full gallery. A live project feed can load in this space after a one-time embed setup on hosting.",
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
    themeToggleToDark: "Switch to dark mode",
    themeToggleToLight: "Switch to light mode",
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
    floridaNumberOneAria: "Why homeowners choose Sovereign Roofing",
    partnerBrandsCarouselRegion: "Partner brands",
    trustBannerAria: "Ratings on review platforms",
    reviewsEmptyHint: "Add reviews in",
    reviewsEmptyCode: "siteCopy.googleReviews.reviews",
    locationDetailParagraph:
      "Sovereign Roofing provides residential roof replacement, repairs, inspections, and storm documentation support across Miami-Dade, Broward, Palm Beach, and select Monroe County communities, with expansion underway to Naples and Orlando. Use the directory below to find your city or county.",
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
    instagramIframeTitle: "Sovereign Roofing — Instagram feed",
  },
};

export type SiteCopy = typeof siteCopy;

const contactHref = routes.contact;

export const portfolioCards = [
  {
    src: "/portfolio/project-03-mediterranean-estate.png",
    alt: "Luxury Mediterranean-style home with terracotta tile roof and landscaped grounds",
    category: "Residential",
    title: "Mediterranean curb appeal",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/project-04-metal-roof.png",
    alt: "Grey corrugated metal hip roof on a contemporary white exterior",
    category: "Metal roofing",
    title: "Modern corrugated install",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/project-05-architectural-shingles.png",
    alt: "Architectural asphalt shingles with stone veneer siding and crisp white trim",
    category: "Exterior",
    title: "Shingles & stone veneer",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/project-06-community-overview.png",
    alt: "Aerial view of a suburban neighborhood with tile and shingle roofs at golden hour",
    category: "Aerial",
    title: "Neighborhood re-roofs",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/project-01-residential-shingles.png",
    alt: "Crew installing architectural shingles on a steep residential roof replacement project",
    category: "Residential",
    title: "Full roof replacement",
    cta: "View",
    href: contactHref,
  },
];

export const portfolioCardsRow2 = [
  {
    src: "/portfolio/project-08-standing-seam-estate.png",
    alt: "Aerial front and rear views of an estate with dark standing seam metal roofing",
    category: "Metal",
    title: "Standing seam estate",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/project-09-aerial-shingle-detail.png",
    alt: "Bird's-eye view of a complex residential roof with architectural shingles",
    category: "Detail",
    title: "Complex roof geometry",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/project-10-valley-shingles.png",
    alt: "Roof valley detail with architectural grey shingles against an overcast sky",
    category: "Detail",
    title: "Weather-tight valleys",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/project-11-barrel-tile.png",
    alt: "Mediterranean home with grey barrel tile roof, stone veneer, and blue sky",
    category: "Tile",
    title: "Barrel tile roofline",
    cta: "View",
    href: contactHref,
  },
];
