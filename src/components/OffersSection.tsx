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

const offerCardClass =
  "group relative aspect-[1024/571] w-full overflow-hidden rounded-2xl border border-border/50 shadow-[0_10px_36px_rgba(0,0,0,0.2)] outline-none ring-accent/30 transition-[box-shadow,transform] duration-200 ease-out focus-within:-translate-y-1 focus-within:shadow-[0_22px_52px_rgba(0,0,0,0.32)] focus-within:ring-2";

export function OffersSection() {
  const { copy } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-border bg-background px-[var(--container-pad)] py-[var(--section-y)]"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 text-center md:mb-12" from="up">
          <header>
            <p className="font-sans text-[0.75rem] font-medium tracking-[0.28em] text-accent uppercase">
              {copy.ui.offersEyebrow}
            </p>
            <h2
              id="services-heading"
              className="text-display mt-3 text-3xl font-bold text-foreground md:text-4xl"
            >
              {copy.offers.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
              {copy.offers.subtitle}
            </p>
          </header>
        </Reveal>

        {reduce ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {copy.offers.items.map((offer, i) => (
              <li key={offer.title} className={offerCardClass}>
                <div className="absolute inset-0 overflow-hidden rounded-2xl bg-background">
                  <Image
                    src="/services-envelope.png"
                    alt=""
                    fill
                    unoptimized
                    className="object-contain object-center scale-[1.28] transition duration-500 ease-out group-hover:opacity-90 group-focus-within:opacity-90 sm:scale-[1.32]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
                <span className="pointer-events-none absolute left-1/2 top-[14%] z-[1] -translate-x-1/2 font-mono text-xs font-semibold tabular-nums tracking-[0.26em] text-accent transition duration-500 group-hover:opacity-0 group-focus-within:opacity-0 sm:top-[15%] sm:text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pointer-events-none absolute inset-x-[6%] bottom-[9%] top-[33%] flex flex-col items-center justify-center px-2 text-center transition duration-500 group-hover:opacity-0 group-focus-within:opacity-0 sm:px-3">
                  <h3 className="max-w-[96%] font-sans text-base font-semibold leading-snug tracking-tight text-white sm:text-lg md:text-xl">
                    {offer.title}
                  </h3>
                </div>
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-background/92 p-4 opacity-0 transition duration-500 ease-out pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
                  <p className="max-h-[min(55%,11rem)] overflow-y-auto text-center text-sm leading-relaxed text-muted sm:max-h-[min(60%,12rem)] sm:text-[0.9375rem]">
                    {offer.description}
                  </p>
                  <Link
                    href={routes.contact}
                    className="inline-flex shrink-0 font-sans text-xs font-semibold tracking-[0.18em] text-accent underline-offset-4 transition hover:text-foreground hover:underline"
                  >
                    {offer.cta}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <motion.ul
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.38 }}
          >
            {copy.offers.items.map((offer, i) => (
              <motion.li
                key={offer.title}
                variants={staggerItemVariants}
                whileHover={{ y: -6 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 32,
                  mass: 0.9,
                }}
                className={offerCardClass}
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl bg-background">
                  <Image
                    src="/services-envelope.png"
                    alt=""
                    fill
                    unoptimized
                    className="object-contain object-center scale-[1.28] transition duration-500 ease-out group-hover:opacity-90 group-focus-within:opacity-90 sm:scale-[1.32]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                  />
                </div>

                <span className="pointer-events-none absolute left-1/2 top-[14%] z-[1] -translate-x-1/2 font-mono text-xs font-semibold tabular-nums tracking-[0.26em] text-accent transition duration-500 group-hover:opacity-0 group-focus-within:opacity-0 sm:top-[15%] sm:text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pointer-events-none absolute inset-x-[6%] bottom-[9%] top-[33%] flex flex-col items-center justify-center px-2 text-center transition duration-500 group-hover:opacity-0 group-focus-within:opacity-0 sm:px-3">
                  <h3 className="max-w-[96%] font-sans text-base font-semibold leading-snug tracking-tight text-white sm:text-lg md:text-xl">
                    {offer.title}
                  </h3>
                </div>

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-background/92 p-4 opacity-0 transition duration-500 ease-out pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
                  <p className="max-h-[min(55%,11rem)] overflow-y-auto text-center text-sm leading-relaxed text-muted sm:max-h-[min(60%,12rem)] sm:text-[0.9375rem]">
                    {offer.description}
                  </p>
                  <Link
                    href={routes.contact}
                    className="inline-flex shrink-0 font-sans text-xs font-semibold tracking-[0.18em] text-accent underline-offset-4 transition hover:text-foreground hover:underline"
                  >
                    {offer.cta}
                  </Link>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
}
