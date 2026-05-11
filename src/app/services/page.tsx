import type { Metadata } from "next";
import { OffersSection } from "@/components/OffersSection";
import { PageShell } from "@/components/layout/PageShell";
import { ServicesSpotlight } from "@/components/ServicesSpotlight";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Services — residential & commercial roofing",
  "Residential shingles and commercial membrane roofing, plus replacement, repairs, inspections, and storm support — Sovereign Roofing, South Florida.",
  routes.services,
);

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesSpotlight />
      <OffersSection />
    </PageShell>
  );
}
