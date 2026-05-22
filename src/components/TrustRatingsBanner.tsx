"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { Reveal } from "@/components/motion/Reveal";

type TrustItem = {
  label: string;
  sublabel?: string;
  logoSrc?: string;
};

function TrustChip({ item }: { item: TrustItem }) {
  return (
    <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
      {item.logoSrc ? (
        <span className="relative h-7 w-7 shrink-0">
          <Image
            src={item.logoSrc}
            alt=""
            fill
            sizes="28px"
            className="object-contain"
          />
        </span>
      ) : null}
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
        {item.label}
      </span>
      {item.sublabel ? (
        <span className="text-xs font-medium text-muted">{item.sublabel}</span>
      ) : null}
    </div>
  );
}

export function TrustRatingsBanner() {
  const { copy } = useLocale();
  const { title, items } = copy.trustBanner;

  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="py-4" from="up" viewportAmount={0.4}>
          <div
            role="region"
            aria-label={copy.ui.trustBannerAria}
            className="flex flex-nowrap items-center justify-center gap-4 overflow-x-auto sm:gap-6 sm:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <p className="shrink-0 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {title}
            </p>
            <div className="h-4 w-px shrink-0 bg-border" aria-hidden />
            {items.map((item) => (
              <TrustChip key={item.label} item={item} />
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
