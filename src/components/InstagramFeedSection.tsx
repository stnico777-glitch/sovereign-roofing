"use client";

import { ElfsightWidget } from "react-elfsight-widget";
import { useLocale } from "@/context/LocaleContext";
import { instagramHandle } from "@/lib/site";

const IG_EMBED_SKELETON_CLASS =
  "instagram-embed-inner min-h-[380px] w-full rounded-lg border border-border/60 bg-surface-muted/50 md:min-h-[480px]";

export type InstagramFeedSectionProps = {
  elfsightWidgetId: string | null;
};

export function InstagramFeedSection({
  elfsightWidgetId,
}: InstagramFeedSectionProps) {
  const { copy } = useLocale();
  const { instagram: ig } = copy;
  const profileUrl = `https://www.instagram.com/${instagramHandle}/`;

  return (
    <section
      className="border-t border-border bg-footer px-[var(--container-pad)] py-[clamp(3rem,8vw,5rem)] text-foreground"
      aria-labelledby="instagram-feed-heading"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <p className="font-sans text-[0.7rem] font-semibold tracking-[0.28em] text-accent uppercase">
          {ig.eyebrow}
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2
            id="instagram-feed-heading"
            className="text-display max-w-xl text-2xl font-bold leading-tight md:text-3xl"
          >
            {ig.title}
          </h2>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-sans text-sm font-semibold tracking-wide text-accent transition hover:underline"
          >
            @{instagramHandle}
          </a>
        </div>
        <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
          {ig.description}
        </p>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent px-5 py-2.5 font-sans text-xs font-semibold tracking-[0.18em] text-white uppercase transition hover:bg-accent/90"
        >
          {ig.followCta}
        </a>

        {elfsightWidgetId ? (
          <div className="instagram-embed-mobile-scroll mt-8 overflow-hidden rounded-xl md:overflow-visible">
            <div className="instagram-embed-scroll-container flex max-h-[420px] overflow-x-auto overflow-y-hidden px-[calc((100vw-280px)/2)] -mx-[var(--container-pad)] scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:block md:max-h-none md:overflow-visible md:px-0">
              <div className={IG_EMBED_SKELETON_CLASS}>
                <ElfsightWidget
                  widgetId={elfsightWidgetId}
                  lazy="in-viewport"
                  className="w-full min-w-0"
                />
              </div>
            </div>
          </div>
        ) : (
          <p className="mt-8 rounded-xl border border-dashed border-border bg-background/60 px-4 py-6 text-center font-sans text-sm text-muted md:px-8">
            {ig.embedPlaceholder}
          </p>
        )}
      </div>
    </section>
  );
}
