import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { InstagramFeedSectionWrapper } from "@/components/InstagramFeedSectionWrapper";
import { Hero } from "@/components/Hero";
import { FloridaNumberOneSection } from "@/components/FloridaNumberOneSection";
import { OffersSection } from "@/components/OffersSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioReel } from "@/components/PortfolioReel";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PortfolioSectionRow2 } from "@/components/PortfolioSectionRow2";
import { TrustRatingsBanner } from "@/components/TrustRatingsBanner";
import { VisionSection } from "@/components/VisionSection";
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
      <VisionSection />
      <ProcessSection />
      <PortfolioSection />
      <PortfolioReel />
      <PortfolioSectionRow2 />
      <OffersSection />
      <FloridaNumberOneSection />
      <AboutSection />
      <GoogleReviewsSection />
      <InstagramFeedSectionWrapper />
    </>
  );
}
