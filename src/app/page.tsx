import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { InstagramFeedSectionWrapper } from "@/components/InstagramFeedSectionWrapper";
import { Hero } from "@/components/Hero";
import { FloridaNumberOneSection } from "@/components/FloridaNumberOneSection";
import { OffersSection } from "@/components/OffersSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { TrustRatingsBanner } from "@/components/TrustRatingsBanner";
import { defaultTitle, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: defaultTitle,
  description:
    "Roof replacement, repairs, and inspections — Sovereign Roofing, South Florida.",
  alternates: { canonical: siteUrl },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustRatingsBanner />
      <FloridaNumberOneSection />
      <ProcessSection />
      <PortfolioSection />
      <OffersSection />
      <AboutSection />
      <GoogleReviewsSection />
      <InstagramFeedSectionWrapper />
    </>
  );
}
