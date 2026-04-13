/**
 * South Florida service areas — used on /service-areas and /location.
 * Each card uses a unique image file under /public/service-areas/ (usually `{id}.jpg`).
 * Sources: Unsplash (Unsplash License) and Wikimedia Commons (see each asset).
 */

export type ServiceArea = {
  id: string;
  name: string;
  region: string;
  description: string;
  /** Path under public/ */
  imageSrc: string;
  imageAlt: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    id: "miami",
    name: "Miami",
    region: "Miami-Dade County",
    description:
      "From Brickell to Wynwood, Sovereign Roofing supports Miami homeowners with roof replacement, repairs, and inspections — shingle and metal systems, flashing, and storm documentation when you need it.",
    imageSrc: "/service-areas/miami.jpg",
    imageAlt:
      "Miami skyline by the water on a sunny day — Sovereign Roofing residential roofing in Miami, Florida",
  },
  {
    id: "miami-beach",
    name: "Miami Beach",
    region: "Miami-Dade County",
    description:
      "Condos and single-family homes across Miami Beach benefit from code-aware plans, condo board–friendly documentation, and high-end kitchen, bath, and tile work. We coordinate inspections and punch lists for South Florida coastal properties.",
    imageSrc: "/service-areas/miami-beach.jpg",
    imageAlt:
      "Ocean Drive, Miami Beach, Florida — palm-lined street and Art Deco district",
  },
  {
    id: "coral-gables",
    name: "Coral Gables",
    region: "Miami-Dade County",
    description:
      "Historic and Mediterranean-style homes in Coral Gables often need sensitive updates. We handle plans, permits, and remodels that respect neighborhood character while delivering modern kitchens, baths, tile, and drywall to a high standard.",
    imageSrc: "/service-areas/coral-gables.jpg",
    imageAlt:
      "Aerial view toward the Biltmore area — Coral Gables, Miami-Dade County, Florida",
  },
  {
    id: "kendall-pinecrest",
    name: "Kendall & Pinecrest",
    region: "Miami-Dade County",
    description:
      "Family-oriented suburbs from Kendall to Pinecrest: whole-home refreshes, kitchen and bath overhauls, and additions backed by clear drawings and municipal submissions. Licensed and insured remodeling with transparent communication.",
    imageSrc: "/service-areas/kendall-pinecrest.jpg",
    imageAlt:
      "Pinecrest Parkway (US 1) — Kendall on one side and Pinecrest on the other, Miami-Dade County, Florida",
  },
  {
    id: "aventura",
    name: "Aventura",
    region: "Miami-Dade County",
    description:
      "High-rise and garden-style residences in Aventura rely on us for interior renovations, waterproofing-adjacent bath work, tile installation, and drywall repair—aligned with association rules and South Florida building codes.",
    imageSrc: "/service-areas/aventura.jpg",
    imageAlt:
      "Haulover Inlet and coastal skyline — near Aventura and North Miami Beach, Florida",
  },
  {
    id: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    region: "Miami-Dade County",
    description:
      "Oceanfront towers and luxury condos: we deliver plans, permits, and finish-out work for kitchens, baths, and living spaces—tile, drywall, and detail-oriented craftsmanship for the Sunny Isles skyline.",
    imageSrc: "/service-areas/sunny-isles-beach.jpg",
    imageAlt:
      "Sunny Isles Beach, Florida — high-rises along the Atlantic shoreline (aerial)",
  },
  {
    id: "doral",
    name: "Doral",
    region: "Miami-Dade County",
    description:
      "Fast-growing Doral calls for dependable roofers. Sovereign Roofing provides residential re-roofs, leak repairs, and inspections—ideal for growing families and investment properties.",
    imageSrc: "/service-areas/doral.jpg",
    imageAlt:
      "Doral, Florida — DoubleTree by Hilton Miami Doral and surrounding development",
  },
  {
    id: "north-miami",
    name: "North Miami",
    region: "Miami-Dade County",
    description:
      "Affordable and mid-market housing stock across North Miami gets the same attention to plans, permits, and craft: kitchen and bath remodels, flooring and tile, and drywall you will not have to hide behind furniture.",
    imageSrc: "/service-areas/north-miami.jpg",
    imageAlt:
      "North Miami, Florida — city skyline and residential towers under blue sky",
  },
  {
    id: "hialeah",
    name: "Hialeah",
    region: "Miami-Dade County",
    description:
      "Dense, diverse Hialeah neighborhoods deserve clear estimates and honest timelines. We coordinate architectural plans, city permits, and interior work—Spanish-speaking friendly communication available on request.",
    imageSrc: "/service-areas/hialeah.jpg",
    imageAlt:
      "Flamingos at Hialeah Park — Hialeah, Miami-Dade County, Florida",
  },
  {
    id: "homestead",
    name: "Homestead & Florida City",
    region: "Miami-Dade County",
    description:
      "South Dade growth means more remodels and additions. We help Homestead and Florida City owners navigate permits, wind-related details, and interior scopes from kitchens and baths to tile and drywall.",
    imageSrc: "/service-areas/homestead.jpg",
    imageAlt:
      "Coral Castle — Homestead, Miami-Dade County, Florida",
  },
  {
    id: "key-biscayne",
    name: "Key Biscayne",
    region: "Miami-Dade County",
    description:
      "Island properties on Key Biscayne require precision and discretion. Our team delivers plans, permits, and luxury interior work—water-aware baths, premium tile, and finishes suited to coastal conditions.",
    imageSrc: "/service-areas/key-biscayne.jpg",
    imageAlt:
      "Rickenbacker Causeway — route to Key Biscayne, Miami-Dade County, Florida",
  },
  {
    id: "fort-lauderdale",
    name: "Fort Lauderdale",
    region: "Broward County",
    description:
      "Fort Lauderdale’s mix of waterfront estates and urban condos is a core service area. Architectural plans, permits, kitchen and bath remodeling, tile, and drywall—with crews that respect your home and your schedule.",
    imageSrc: "/service-areas/fort-lauderdale.jpg",
    imageAlt:
      "Downtown Fort Lauderdale, Florida — skyline over the New River and canals",
  },
  {
    id: "hollywood",
    name: "Hollywood",
    region: "Broward County",
    description:
      "Hollywood homeowners choose Sovereign Roofing for full replacements and targeted repairs. We coordinate permits when required, walk inspections with you, and install to manufacturer and code standards.",
    imageSrc: "/service-areas/hollywood.jpg",
    imageAlt:
      "Hollywood Beach, Hollywood, Florida — palms and Atlantic shoreline",
  },
  {
    id: "pompano-beach",
    name: "Pompano Beach",
    region: "Broward County",
    description:
      "Coastal and inland Pompano Beach properties: plans and permits for remodels, plus hands-on interior work. Kitchens, baths, tile layouts, and drywall—optimized for Florida humidity and salt air.",
    imageSrc: "/service-areas/pompano-beach.jpg",
    imageAlt:
      "Pompano Beach, Florida — golden hour over the Atlantic coast",
  },
  {
    id: "plantation",
    name: "Plantation",
    region: "Broward County",
    description:
      "Suburban Plantation homes often need kitchen and bath modernization and open-plan adjustments. We provide drawings, permit packages, and remodeling trades with minimal disruption to daily life.",
    imageSrc: "/service-areas/plantation.jpg",
    imageAlt:
      "American Heritage School — aerial, Plantation, Broward County, Florida",
  },
  {
    id: "coral-springs",
    name: "Coral Springs",
    region: "Broward County",
    description:
      "Family neighborhoods in Coral Springs trust us for additions, interior reconfigurations, and finish upgrades. Clear plans, timely permits, and quality tile and drywall installation.",
    imageSrc: "/service-areas/coral-springs.jpg",
    imageAlt:
      "Early aerial view — Coral Springs, Broward County, Florida",
  },
  {
    id: "weston",
    name: "Weston",
    region: "Broward County",
    description:
      "Weston’s planned communities expect polished results. Sovereign Roofing delivers coordinated roof systems—from architectural shingles to metal—with clean job sites and clear communication.",
    imageSrc: "/service-areas/weston.jpg",
    imageAlt:
      "Bonaventure Golf Club entrance — Weston, Broward County, Florida",
  },
  {
    id: "pembroke-pines",
    name: "Pembroke Pines",
    region: "Broward County",
    description:
      "Pembroke Pines continues to grow; we help owners remodel existing homes with compliant plans, city permits, and skilled interior work: cabinets, tile, flooring transitions, and drywall to code.",
    imageSrc: "/service-areas/pembroke-pines.jpg",
    imageAlt:
      "Franklin Academy entrance — Pembroke Pines, Broward County, Florida",
  },
  {
    id: "miramar",
    name: "Miramar",
    region: "Broward County",
    description:
      "Miramar’s residential boom means more renovation demand. We combine permit expertise with kitchen, bath, tile, and drywall execution—ideal for investors and owner-occupants alike.",
    imageSrc: "/service-areas/miramar.jpg",
    imageAlt:
      "Cathedral Church of the Resurrection — Miramar, Broward County, Florida",
  },
  {
    id: "davie",
    name: "Davie",
    region: "Broward County",
    description:
      "Equestrian estates and family homes in Davie get tailored remodel plans, Broward permit support, and interior scopes that balance lifestyle and resale value—tile, drywall, and finish details included.",
    imageSrc: "/service-areas/davie-town-hall.jpg",
    imageAlt:
      "Davie Town Hall — Broward County, Florida",
  },
  {
    id: "deerfield-beach",
    name: "Deerfield Beach",
    region: "Broward County",
    description:
      "North Broward coastal living in Deerfield Beach: we handle remodels with wind and flood considerations in mind, plus standard interior upgrades—plans, permits, kitchens, baths, and tile.",
    imageSrc: "/service-areas/deerfield-beach.jpg",
    imageAlt:
      "Deerfield Beach International Fishing Pier — Deerfield Beach, Broward County, Florida (aerial)",
  },
  {
    id: "hallandale-beach",
    name: "Hallandale Beach",
    region: "Broward County",
    description:
      "Condos and towers along Hallandale Beach benefit from our experience with association requirements, plans, permits, and high-rise–friendly interior work—tile, baths, kitchens, and drywall.",
    imageSrc: "/service-areas/hallandale-beach.jpg",
    imageAlt:
      "Hallandale Beach, Broward County, Florida — coastal street scene",
  },
  {
    id: "boca-raton",
    name: "Boca Raton",
    region: "Palm Beach County",
    description:
      "Boca Raton’s luxury market expects excellence. Architectural plans, permits, and remodeling for estates and condos—custom kitchens, primary baths, stone and tile, and meticulous drywall and paint prep.",
    imageSrc: "/service-areas/boca-raton.jpg",
    imageAlt:
      "Beach access sign — Boca Raton, Palm Beach County, Florida",
  },
  {
    id: "delray-beach",
    name: "Delray Beach",
    region: "Palm Beach County",
    description:
      "Atlantic Avenue corridor and inland Delray homes: interior renovations with Palm Beach County permit coordination, plus tile, kitchen and bath design-build support, and drywall to showroom quality.",
    imageSrc: "/service-areas/delray-beach.jpg",
    imageAlt:
      "Ocean Boulevard (A1A) along the Atlantic — Delray Beach, Palm Beach County, Florida",
  },
  {
    id: "boynton-beach",
    name: "Boynton Beach",
    region: "Palm Beach County",
    description:
      "Boynton Beach families and retirees rely on Sovereign Roofing for durable roofs, wind-rated materials, and honest assessments in Florida’s coastal climate.",
    imageSrc: "/service-areas/boynton-beach.jpg",
    imageAlt:
      "Boynton Beach Inlet — Boynton Beach, Palm Beach County, Florida",
  },
  {
    id: "west-palm-beach",
    name: "West Palm Beach",
    region: "Palm Beach County",
    description:
      "Urban lofts and suburban homes in West Palm Beach: full-service plans, permits, and interior remodeling. We align with local review processes and deliver craft you can see in kitchens, baths, and living spaces.",
    imageSrc: "/service-areas/west-palm-beach.jpg",
    imageAlt:
      "Downtown West Palm Beach, Florida — Clematis Street area at night",
  },
  {
    id: "palm-beach-gardens",
    name: "Palm Beach Gardens",
    region: "Palm Beach County",
    description:
      "Golf communities and gated neighborhoods in Palm Beach Gardens get detailed drawings, timely permits, and upscale interior work—cabinetry, tile, lighting coordination, and drywall perfection.",
    imageSrc: "/service-areas/palm-beach-gardens.jpg",
    imageAlt:
      "Downtown at the Gardens — Palm Beach Gardens, Palm Beach County, Florida",
  },
  {
    id: "jupiter",
    name: "Jupiter",
    region: "Palm Beach County",
    description:
      "Waterfront and inland Jupiter properties: remodeling with an eye for longevity. Plans, permits, kitchen and bath transformations, outdoor-adjacent tile, and interior drywall and finishes.",
    imageSrc: "/service-areas/jupiter.jpg",
    imageAlt:
      "Juno Beach Pier — Juno Beach, Florida (northern Palm Beach County near Jupiter)",
  },
  {
    id: "wellington",
    name: "Wellington",
    region: "Palm Beach County",
    description:
      "Equestrian properties and family homes in Wellington benefit from remodels that respect large lots and HOA guidelines—architectural support, permits, tile, drywall, and interior upgrades.",
    imageSrc: "/service-areas/wellington.jpg",
    imageAlt:
      "Equestrian scene — Wellington, Palm Beach County, Florida",
  },
  {
    id: "parkland",
    name: "Parkland",
    region: "Broward County",
    description:
      "Parkland’s residential enclaves demand careful planning. We provide plans, permits, and interior remodeling with minimal surprises—kitchens, baths, built-ins, tile, and drywall executed cleanly.",
    imageSrc: "/service-areas/parkland.jpg",
    imageAlt:
      "High-rise residential towers — Broward County, Florida (Parkland service area)",
  },
  {
    id: "palm-beach",
    name: "Palm Beach",
    region: "Palm Beach County",
    description:
      "Island estates on Palm Beach require discretion and precision. High-end interior renovations, permit navigation, and trades including stone tile, millwork coordination, and flawless drywall.",
    imageSrc: "/service-areas/palm-beach.jpg",
    imageAlt:
      "Palm-lined street — Palm Beach, Palm Beach County, Florida",
  },
  {
    id: "key-largo",
    name: "Key Largo",
    region: "Monroe County — Upper Keys",
    description:
      "Upper Keys properties face unique logistics; we coordinate plans, Monroe County–related permitting context, and interior remodels—moisture-smart baths, resilient finishes, tile, and drywall for island living.",
    imageSrc: "/service-areas/key-largo.jpg",
    imageAlt:
      "Key Largo marina at dusk — Upper Florida Keys, Monroe County",
  },
  {
    id: "miami-dade-county",
    name: "Miami-Dade County",
    region: "County-wide",
    description:
      "County-wide coverage for architectural plans, building permits, kitchen and bath remodeling, tile installation, and drywall across unincorporated pockets and municipalities not listed by name—ask about your address.",
    imageSrc: "/service-areas/miami-dade-county.jpg",
    imageAlt:
      "Miami skyline at sunrise — Miami-Dade County, Florida",
  },
  {
    id: "broward-palm-beach-counties",
    name: "Broward & Palm Beach Counties",
    region: "Regional",
    description:
      "Regional projects across Broward and Palm Beach: we route permits correctly by jurisdiction, align schedules with inspections, and deliver interior remodeling and finish trades at scale for South Florida homeowners.",
    imageSrc: "/service-areas/broward-palm-beach-counties.jpg",
    imageAlt:
      "Lake Worth Pier and coastline — Palm Beach County, Florida (regional Broward & Palm Beach service area)",
  },
];
