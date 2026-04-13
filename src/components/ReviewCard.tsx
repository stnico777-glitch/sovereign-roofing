"use client";

import { useLocale } from "@/context/LocaleContext";

export function ReviewCard() {
  const { copy } = useLocale();
  return (
    <div className="rounded-2xl border border-border bg-white/95 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-md md:p-6">
      <p className="text-display text-4xl font-bold text-foreground md:text-5xl">
        {copy.review.stat}
      </p>
      <p className="mt-2 font-sans text-xs leading-relaxed text-foreground/75">
        {copy.review.body}
      </p>
      <div className="mt-4 flex -space-x-2">
        {copy.review.initials.map((initials, i) => (
          <span
            key={initials + i}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-accent/35 bg-pill-bg text-[10px] font-semibold text-foreground"
          >
            {initials}
          </span>
        ))}
      </div>
    </div>
  );
}
