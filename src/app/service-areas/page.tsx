import type { Metadata } from "next";
import { ServiceAreasView } from "@/components/ServiceAreasView";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Service areas — South Florida cities & counties",
  "Sovereign Roofing serves 30+ South Florida cities and counties with residential roof replacement, repairs, inspections, and storm documentation support. Miami-Dade, Broward, Palm Beach, and the Keys.",
  routes.location,
);

export default function ServiceAreasPage() {
  return (
    <PageShell>
      <ServiceAreasView />
    </PageShell>
  );
}
