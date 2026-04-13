import type { Metadata } from "next";
import { PortfolioReel } from "@/components/PortfolioReel";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PortfolioSectionRow2 } from "@/components/PortfolioSectionRow2";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Projects — gallery & on-site work",
  "See roof projects from Sovereign Roofing — replacements, repairs, and re-roofs across South Florida.",
  routes.projects,
);

export default function ProjectsPage() {
  return (
    <PageShell>
      <PortfolioSection />
      <PortfolioReel />
      <PortfolioSectionRow2 />
    </PageShell>
  );
}
