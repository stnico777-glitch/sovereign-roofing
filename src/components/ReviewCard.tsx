"use client";

import { useLocale } from "@/context/LocaleContext";

type ReviewCardProps = {
  /** Tighter type and padding for the hero corner card. */
  variant?: "default" | "hero";
};

export function ReviewCard({ variant = "default" }: ReviewCardProps) {
  const { copy } = useLocale();
  const hero = variant === "hero";

  return (
    <div
      className={
        hero
          ? "review-card-surface rounded-xl border border-border bg-background p-3.5 md:p-4"
          : "review-card-surface rounded-2xl border border-border bg-background p-5 md:p-6"
      }
    >
      <p
        className={
          hero
            ? "text-display text-2xl font-bold leading-none tracking-tight text-foreground md:text-3xl"
            : "text-display text-4xl font-bold text-foreground md:text-5xl"
        }
      >
        {copy.review.stat}
      </p>
      <p
        className={
          hero
            ? "mt-1.5 font-sans text-[0.65rem] leading-snug text-foreground/75 md:text-[0.7rem]"
            : "mt-2 font-sans text-xs leading-relaxed text-foreground/75"
        }
      >
        {copy.review.body}
      </p>
      <div className={hero ? "mt-3 flex -space-x-1.5" : "mt-4 flex -space-x-2"}>
        {copy.review.initials.map((initials, i) => (
          <span
            key={initials + i}
            className={
              hero
                ? "flex h-7 w-7 items-center justify-center rounded-full border-2 border-accent/35 bg-pill-bg text-[9px] font-semibold text-foreground md:h-8 md:w-8 md:text-[10px]"
                : "flex h-9 w-9 items-center justify-center rounded-full border-2 border-accent/35 bg-pill-bg text-[10px] font-semibold text-foreground"
            }
          >
            {initials}
          </span>
        ))}
      </div>
    </div>
  );
}
