"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { useLocale } from "@/context/LocaleContext";
import { routes } from "@/lib/site";

export function AboutSection() {
  const { copy } = useLocale();
  return (
    <section
      id="about"
      className="scroll-mt-24 px-[var(--container-pad)] py-[clamp(2.75rem,6vw,4.5rem)]"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex min-w-0 flex-col gap-8 lg:flex-row lg:items-center lg:gap-8 xl:gap-10">
          <Reveal
            className="relative flex aspect-[4/3] min-w-0 w-full max-w-[28rem] shrink-0 overflow-hidden rounded-3xl border border-border bg-surface-muted shadow-[0_16px_48px_rgba(0,0,0,0.18)] sm:max-w-[30rem] lg:max-w-[min(100%,440px)] lg:-translate-x-2 xl:max-w-[460px] xl:-translate-x-3 dark:shadow-[0_16px_54px_rgba(0,0,0,0.42)]"
            from="left"
          >
            <Image
              src={copy.about.imageSrc}
              alt={copy.about.imageAlt}
              fill
              sizes="(max-width: 1024px) min(100vw, 30rem), 440px"
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
              aria-hidden
            />
          </Reveal>

          <Reveal className="min-w-0 flex-1" from="right" delay={0.08}>
            <p className="font-sans text-[0.75rem] font-medium tracking-[0.28em] text-accent uppercase">
              {copy.ui.aboutEyebrow}
            </p>
            <h2
              id="about-heading"
              className="text-display mt-2 text-3xl font-bold text-foreground md:text-4xl"
            >
              {copy.about.title}
            </h2>
            <blockquote className="text-display mt-5 border-l-2 border-accent/50 pl-4 text-lg font-medium leading-snug text-foreground/95 md:mt-6 md:pl-5 md:text-xl">
              {copy.about.quote}
            </blockquote>
            <div className="mt-5 space-y-3 font-sans text-sm leading-relaxed text-muted md:mt-6 md:space-y-3.5 md:text-base">
              {copy.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-4 font-sans text-xs font-medium tracking-[0.22em] text-muted-light uppercase">
              {copy.about.credentials}
            </p>
            <Link
              href={routes.contact}
              className="mt-6 inline-flex rounded-full border border-accent/40 bg-accent px-8 py-3 font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase transition hover:bg-accent/90 hover:ring-1 hover:ring-accent/50 md:mt-7"
            >
              {copy.about.cta}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
