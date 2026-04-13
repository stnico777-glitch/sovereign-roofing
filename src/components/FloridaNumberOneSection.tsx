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

function QuoteArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14m-4-6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function isLogoAsset(src: string) {
  return src.includes("sovereign");
}

export function FloridaNumberOneSection() {
  const { copy } = useLocale();
  const reduce = useReducedMotion();
  const n = copy.numberOne;

  return (
    <section
      className="relative overflow-hidden bg-[#0a0f1a] px-[var(--container-pad)] py-[clamp(3rem,8vw,5.5rem)] text-white"
      aria-label={copy.ui.numberOneAria}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_-20%,rgba(178,30,41,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,26,0.2)_0%,#0a0f1a_100%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="text-center" from="up">
          <p className="font-sans text-[0.7rem] font-semibold tracking-[0.35em] text-white/75 md:text-[0.75rem]">
            {n.eyebrow}
          </p>
          <h2
            id="number-one-heading"
            className="text-display mt-4 max-w-5xl mx-auto text-[clamp(1.75rem,5.5vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.02em] md:mt-5"
          >
            <span className="text-accent">{n.headlineLead}</span>{" "}
            <span className="text-white">{n.headlineRest}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-[0.68rem] font-semibold tracking-[0.28em] text-white/88 md:text-[0.72rem] md:tracking-[0.32em]">
            {n.subhead}
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href={routes.contact}
              className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-8 py-3.5 font-sans text-xs font-semibold tracking-[0.22em] text-white shadow-[0_8px_40px_rgba(178,30,41,0.45)] transition hover:bg-accent/90 hover:translate-x-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {n.cta}
              <QuoteArrowIcon />
            </Link>
          </div>
        </Reveal>

        {reduce ? (
          <ul
            className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-3"
            aria-labelledby="number-one-heading"
          >
            {n.tiles.map((tile) => (
              <li key={tile.label}>
                <TileCard tile={tile} />
              </li>
            ))}
          </ul>
        ) : (
          <motion.ul
            className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-3"
            aria-labelledby="number-one-heading"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {n.tiles.map((tile) => (
              <motion.li key={tile.label} variants={staggerItemVariants}>
                <TileCard tile={tile} />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </section>
  );
}

function TileCard({
  tile,
}: {
  tile: {
    label: string;
    imageSrc: string;
    href: string;
  };
}) {
  const logo = isLogoAsset(tile.imageSrc);

  return (
    <Link
      href={tile.href}
      className="group relative block aspect-[5/4] overflow-hidden rounded-xl border border-white/10 bg-zinc-900/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)] outline-none ring-accent/0 transition hover:border-white/25 hover:ring-2 hover:ring-accent/40 focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="absolute inset-0">
        {logo ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800/95 to-zinc-950 p-6 md:p-8">
            <Image
              src={tile.imageSrc}
              alt=""
              width={320}
              height={200}
              unoptimized
              className="max-h-[min(55%,7rem)] w-auto max-w-[88%] object-contain opacity-95 transition duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <Image
            src={tile.imageSrc}
            alt=""
            fill
            unoptimized
            sizes="(max-width: 640px) 50vw, 25vw"
            className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-transparent"
          aria-hidden
        />
      </div>
      <span className="absolute inset-x-0 bottom-0 z-[1] px-2 py-3 text-center font-sans text-[0.62rem] font-bold leading-tight tracking-[0.18em] text-white sm:text-[0.65rem] sm:tracking-[0.2em] md:py-4 md:text-[0.68rem]">
        {tile.label}
      </span>
    </Link>
  );
}
