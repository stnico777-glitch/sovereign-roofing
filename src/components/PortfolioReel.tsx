"use client";

import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { useLocale } from "@/context/LocaleContext";
import { portfolioReelClipDurationSec } from "@/lib/site";
import { useClipLoopVideoWhenVisible } from "@/lib/useClipLoopVideoWhenVisible";

function ReelClipVideo({
  src,
  clipDurationSec,
  className,
}: {
  src: string;
  clipDurationSec: number;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useClipLoopVideoWhenVisible(ref, {
    clipDurationSec,
    rootMargin: "160px",
    threshold: 0,
  });

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      playsInline
      loop={false}
      preload="auto"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

/**
 * Two-strip reel: top `reelVideoSrc`, bottom `reelVideoSrc2` (reversed encode).
 * Both loop the first `portfolioReelClipDurationSec` seconds (see `src/lib/site.ts`).
 */
export function PortfolioReel() {
  const { copy } = useLocale();
  const src1 = copy.portfolio.reelVideoSrc;
  const src2 = copy.portfolio.reelVideoSrc2;
  const clip = portfolioReelClipDurationSec;

  return (
    <section
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden"
      aria-labelledby="portfolio-reel-heading"
    >
      <div className="bg-background px-[var(--container-pad)] pb-1 pt-0 text-center md:pb-1.5">
        <Reveal from="up">
          <h3
            id="portfolio-reel-heading"
            className="text-display text-2xl font-semibold tracking-[-0.02em] text-foreground md:text-3xl lg:text-[2.125rem]"
          >
            {copy.portfolio.reelBridgeTitle}
          </h3>
        </Reveal>
      </div>
      <div className="bg-reel-chrome">
        <div className="relative flex aspect-video w-full flex-col">
          <div className="relative min-h-0 flex-1 overflow-hidden">
            <ReelClipVideo
              key={src1}
              src={src1}
              clipDurationSec={clip}
              className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            />
            <div
              className="absolute inset-0 hidden bg-gradient-to-br from-reel-chrome via-[#e4e4e7] to-background motion-reduce:block"
              aria-hidden
            />
          </div>
          <div className="relative min-h-0 flex-1 overflow-hidden border-t border-accent/12">
            <ReelClipVideo
              key={src2}
              src={src2}
              clipDurationSec={clip}
              className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            />
            <div
              className="absolute inset-0 hidden bg-gradient-to-br from-[#e4e4e7] via-reel-chrome to-background motion-reduce:block"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
