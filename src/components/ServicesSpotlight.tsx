"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  Reveal,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/motion/Reveal";
import { useLocale } from "@/context/LocaleContext";
import { routes } from "@/lib/site";

type SpotlightItem = {
  category: string;
  title: string;
  alt: string;
  imageSrc: string;
};

function SpotlightCardBody({
  item,
  cta,
  priority,
}: {
  item: SpotlightItem;
  cta: string;
  priority?: boolean;
}) {
  return (
    <>
      <Image
        src={item.imageSrc}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) min(100vw, 18rem), (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        priority={priority}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/78 via-black/28 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-3 sm:p-4 md:p-5">
        <p className="font-sans text-[0.55rem] font-semibold tracking-[0.2em] text-white/90 uppercase sm:text-[0.6rem]">
          {item.category}
        </p>
        <h3 className="text-display mt-1 text-base font-bold leading-snug text-white sm:text-lg md:text-xl">
          {item.title}
        </h3>
        <Link
          href={routes.contact}
          className="mt-3 inline-flex items-center justify-center rounded-full border border-accent/55 bg-black/45 px-3.5 py-2 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition hover:border-accent/75 hover:bg-black/55 sm:mt-3.5 sm:px-4 sm:text-[0.65rem] sm:tracking-[0.2em]"
        >
          {cta}
        </Link>
      </div>
    </>
  );
}

const cardShell =
  "relative aspect-[4/5] mx-auto w-full max-w-[min(100%,18rem)] overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-[0_8px_28px_rgba(0,0,0,0.18)] sm:max-w-[min(100%,19rem)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)]";

const gridClass =
  "mx-auto grid w-full max-w-6xl justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3";

export function ServicesSpotlight() {
  const { copy } = useLocale();
  const sp = copy.servicesSpotlight;
  const reduce = useReducedMotion();

  return (
    <section
      className="scroll-mt-24 border-b border-border bg-background px-[var(--container-pad)] pb-[var(--section-y)] pt-2 md:pt-4"
      aria-labelledby="services-spotlight-heading"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 text-center md:mb-12" from="up">
          <header>
            <p className="font-sans text-[0.75rem] font-medium tracking-[0.28em] text-accent uppercase">
              {sp.eyebrow}
            </p>
            <h2
              id="services-spotlight-heading"
              className="text-display mt-3 text-3xl font-bold text-foreground md:text-4xl"
            >
              {sp.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              {sp.subtitle}
            </p>
          </header>
        </Reveal>

        {reduce ? (
          <div className={gridClass}>
            {sp.items.map((item, index) => (
              <article className={cardShell} key={item.title}>
                <SpotlightCardBody
                  item={item}
                  cta={sp.cta}
                  priority={index < 3}
                />
              </article>
            ))}
          </div>
        ) : (
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.38 }}
            className={gridClass}
          >
            {sp.items.map((item, index) => (
              <motion.article
                key={item.title}
                variants={staggerItemVariants}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 32,
                  mass: 0.9,
                }}
                className={cardShell}
              >
                <SpotlightCardBody
                  item={item}
                  cta={sp.cta}
                  priority={index < 3}
                />
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
