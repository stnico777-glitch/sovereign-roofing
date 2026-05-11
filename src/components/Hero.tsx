"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { BrandLockup } from "@/components/BrandLockup";
import { Reveal } from "@/components/motion/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { useLocale } from "@/context/LocaleContext";
import { useClipLoopVideoWhenVisible } from "@/lib/useClipLoopVideoWhenVisible";
import { heroOpeningClipDurationSec, routes } from "@/lib/site";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
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

const heroLogoEase = [0.22, 1, 0.36, 1] as const;

function HeroClipVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  useClipLoopVideoWhenVisible(ref, {
    clipDurationSec: heroOpeningClipDurationSec,
    rootMargin: "80px",
    threshold: 0.01,
  });

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover object-center"
      autoPlay
      muted
      playsInline
      loop={false}
      preload="auto"
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  );
}

export function Hero() {
  const { copy } = useLocale();
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="hero-viewport-h relative overflow-hidden bg-reel-chrome"
      aria-label={copy.ui.introAria}
    >
      <div className="absolute inset-0 overflow-hidden motion-reduce:hidden">
        <HeroClipVideo />
      </div>

      <div
        className="absolute inset-0 hidden bg-gradient-to-br from-reel-chrome via-[#e4e4e7] to-background motion-reduce:block"
        aria-hidden
      />

      <div className="relative z-10 flex h-full min-h-0 flex-col px-[var(--container-pad)] pb-36 pt-24 md:pb-12 md:pt-20">
        {reduceMotion ? (
          <div className="absolute left-[var(--container-pad)] top-[5.75rem] z-20 sm:top-28 md:top-[7.25rem]">
            <BrandLockup size="hero" />
          </div>
        ) : (
          <motion.div
            className="absolute left-[var(--container-pad)] top-[5.75rem] z-20 sm:top-28 md:top-[7.25rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.95, ease: heroLogoEase }}
          >
            <BrandLockup size="hero" />
          </motion.div>
        )}

        <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col justify-center gap-10 pt-[min(46vw,15rem)] sm:pt-[min(40vw,13rem)] md:pt-[min(34vh,12rem)] lg:flex-row lg:items-center lg:justify-end lg:gap-16 lg:pt-4 xl:gap-20">
          <Reveal
            className="max-w-md space-y-6 lg:max-w-sm xl:max-w-md"
            from="right"
            trigger="mount"
            delay={0.12}
          >
            <p className="text-hero-sub font-sans font-semibold">
              {copy.hero.subhead}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={routes.projects}
                className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-6 py-3 font-sans text-xs font-semibold tracking-[0.2em] text-white shadow-[0_2px_24px_rgba(0,0,0,0.35)] transition hover:translate-x-0.5 hover:bg-accent/90"
              >
                {copy.hero.ctaPrimary}
                <ArrowIcon />
              </Link>
              <Link
                href={routes.contact}
                className="inline-flex items-center rounded-full border border-white/45 bg-black/35 px-5 py-3 font-sans text-xs font-semibold tracking-[0.18em] text-white shadow-[0_2px_20px_rgba(0,0,0,0.2)] transition hover:border-white/65 hover:bg-black/45"
              >
                {copy.hero.ctaSecondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal
        from="right"
        trigger="mount"
        delay={0.24}
        className="absolute bottom-6 right-[var(--container-pad)] z-20 w-[min(100%,14rem)] md:bottom-10 md:w-[15.5rem]"
      >
        <ReviewCard variant="hero" />
      </Reveal>
    </section>
  );
}
