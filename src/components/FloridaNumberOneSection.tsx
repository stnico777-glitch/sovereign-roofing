"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { PartnerBrandsCarousel } from "@/components/PartnerBrandsCarousel";
import { useLocale } from "@/context/LocaleContext";
import { contractorLicenseNumber, routes } from "@/lib/site";

function ChevronCircleIcon() {
  return (
    <span
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white text-base font-light leading-none"
      aria-hidden
    >
      ›
    </span>
  );
}

export function FloridaNumberOneSection() {
  const { copy } = useLocale();
  const n = copy.floridaNumberOne;

  return (
    <section
      className="scroll-mt-24 border-t border-border bg-background px-[var(--container-pad)] py-[clamp(3rem,8vw,5rem)]"
      aria-labelledby="florida-number-one-heading"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center" from="up">
          <h2
            id="florida-number-one-heading"
            className="text-display text-[clamp(1.5rem,4.2vw,2.75rem)] font-bold uppercase leading-[1.12] tracking-[0.02em] text-foreground"
          >
            <span className="block">{n.headlineLead}</span>
            <span className="mt-1 block text-accent md:mt-1.5">
              {n.headlineAccent}
            </span>
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto max-w-7xl">
        <PartnerBrandsCarousel
          partners={n.partners}
          regionAriaLabel={copy.ui.partnerBrandsCarouselRegion}
        />
      </div>

      <div className="mx-auto max-w-5xl">
        <Reveal className="mt-10 flex justify-center md:mt-12" from="up">
          <Link
            href={routes.contact}
            className="group relative inline-flex -skew-x-[14deg] items-stretch overflow-hidden border border-accent/90 bg-accent px-1 py-1 font-sans text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_12px_44px_rgba(178,30,41,0.42)] transition hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-sm"
          >
            <span className="skew-x-[14deg] inline-flex items-center gap-3 px-8 py-3.5 pr-5">
              <span>{n.cta}</span>
              <ChevronCircleIcon />
            </span>
          </Link>
        </Reveal>

        <Reveal className="mt-10 text-center md:mt-12" from="up">
          <p className="mx-auto max-w-3xl font-sans text-sm leading-relaxed text-foreground/80 md:text-base">
            {n.body}
          </p>
          <p className="mt-6 font-sans text-xs font-medium tracking-[0.2em] text-muted uppercase md:mt-8">
            {copy.footer.licenseLabel}{" "}
            <span className="text-foreground/75">{contractorLicenseNumber}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
