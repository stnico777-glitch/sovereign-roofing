"use client";

import { useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { onSiteClipDurationSec } from "@/lib/site";
import { useClipLoopVideoWhenVisible } from "@/lib/useClipLoopVideoWhenVisible";

/** Outer mat — matches offer cards / about portrait treatment */
const frameOuter =
  "rounded-3xl border border-border/80 bg-background p-1.5 shadow-[0_16px_48px_rgba(0,0,0,0.14)] ring-1 ring-border/60 transition-[box-shadow,border-color] duration-300 hover:border-accent/30 hover:shadow-[0_20px_52px_rgba(178,30,41,0.14)] dark:shadow-[0_16px_54px_rgba(0,0,0,0.42)] dark:hover:shadow-[0_22px_58px_rgba(178,30,41,0.18)]";

const frameInner =
  "relative aspect-[9/16] overflow-hidden rounded-2xl bg-reel-chrome ring-1 ring-inset ring-black/8 dark:ring-white/10";

function Clip({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useClipLoopVideoWhenVisible(ref, {
    clipDurationSec: onSiteClipDurationSec,
    rootMargin: "120px",
    threshold: 0.08,
  });

  return (
    <figure className="min-w-0">
      <div className={frameOuter}>
        <div className={frameInner}>
          <video
            ref={ref}
            src={src}
            className="absolute inset-0 h-full w-full object-contain"
            autoPlay
            muted
            playsInline
            loop={false}
            preload="auto"
            aria-label={label}
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/20 to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </figure>
  );
}

export function AboutOnSiteClips() {
  const { copy } = useLocale();
  const { onSiteTitle, reelVideoSrc, reelVideoSrc2 } = copy.about;

  return (
    <div className="rounded-3xl border border-border/60 bg-pill-bg/30 p-4 shadow-sm sm:p-5">
      <p className="font-sans text-[0.75rem] font-medium tracking-[0.28em] text-accent uppercase">
        {onSiteTitle}
      </p>
      <div
        className="mt-4 grid grid-cols-2 gap-3 sm:gap-4"
        role="group"
        aria-label={copy.ui.aboutOnSiteClipsAria}
      >
        <Clip src={reelVideoSrc} label={`${onSiteTitle} 1`} />
        <Clip src={reelVideoSrc2} label={`${onSiteTitle} 2`} />
      </div>
    </div>
  );
}
