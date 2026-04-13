import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "About Sovereign Roofing",
  "Learn how Sovereign Roofing approaches roof replacement, repairs, and inspections with clear communication from estimate to final walkthrough.",
  routes.about,
);

export default function AboutPage() {
  return (
    <PageShell>
      <AboutSection />
    </PageShell>
  );
}
