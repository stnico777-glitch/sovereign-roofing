"use client";

import { Reveal } from "@/components/motion/Reveal";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { useLocale } from "@/context/LocaleContext";

export function VisionSection() {
  const { copy } = useLocale();
  const v = copy.vision;

  return (
    <section
      className="relative isolate z-10 overflow-hidden border-b border-border/60 bg-background px-[var(--container-pad)] pt-[calc(var(--section-y)+1rem)]"
      aria-labelledby="vision-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_80%_0%,rgba(178,30,41,0.08),transparent_45%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-2 pb-[var(--section-y)] lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
        <Reveal
          className="flex w-full min-w-0 flex-1 flex-col items-center text-center lg:max-w-xl"
          from="left"
        >
          <p className="font-sans text-[0.8125rem] font-medium tracking-[0.32em] text-accent uppercase">
            {v.eyebrow}
          </p>
          <h2
            id="vision-heading"
            className="text-display mt-3 text-3xl font-semibold leading-[1.15] text-foreground md:mt-4 md:text-4xl lg:text-[2.85rem]"
          >
            {v.headlineBefore} {v.headlineAfter}
          </h2>
          <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-muted md:mt-6 md:text-[1.05rem]">
            {v.body}
          </p>
        </Reveal>

        <Reveal from="right" delay={0.1}>
          <QuoteRequestForm variant="vision" idPrefix="vision-quote" />
        </Reveal>
      </div>
    </section>
  );
}
