"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";

type TrustItem = {
  label: string;
  sublabel?: string;
  logoSrc?: string;
};

/**
 * Ported from keysconcrete `ScrollingBanner.tsx` — same `kc-marquee` row pair,
 * title + divider + platform chips (logo + label + sublabel).
 */
function MarqueeRow({
  title,
  items,
  ariaHidden,
}: {
  title: string;
  items: readonly TrustItem[];
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-6 pr-6"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {title}
      </div>
      <div className="h-4 w-px bg-border" />
      {items.map((it) => (
        <div key={it.label} className="flex items-center gap-2">
          {it.logoSrc ? (
            <span className="relative h-7 w-7">
              <Image
                src={it.logoSrc}
                alt=""
                fill
                sizes="28px"
                className="object-contain"
              />
            </span>
          ) : null}
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
            {it.label}
          </span>
          {it.sublabel ? (
            <span className="text-xs font-medium text-muted">{it.sublabel}</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function TrustRatingsBanner() {
  const { copy } = useLocale();
  const { title, items } = copy.trustBanner;

  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden py-4"
          role="region"
          aria-label={copy.ui.trustBannerAria}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent" />

          <div className="kc-marquee group flex items-center gap-6 whitespace-nowrap">
            <MarqueeRow title={title} items={items} />
            <MarqueeRow title={title} items={items} ariaHidden />
          </div>
        </div>
      </div>
    </div>
  );
}
