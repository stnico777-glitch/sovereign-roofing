import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Contact Sovereign Roofing",
  "Request a bid or ask about roof replacement, repairs, and inspections — email or call Sovereign Roofing for next steps.",
  routes.contact,
);

export default function ContactPage() {
  return (
    <PageShell>
      <ContactPageContent />
    </PageShell>
  );
}
