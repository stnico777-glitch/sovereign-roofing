"use client";

import { useEffect, useRef, useState } from "react";
import { ElfsightWidget } from "react-elfsight-widget";
import { useLocale } from "@/context/LocaleContext";
import { instagramHandle } from "@/lib/site";

const EMBEDSOCIAL_SCRIPT_ID = "EmbedSocialHashtagScript";

const IG_EMBED_SKELETON_CLASS =
  "instagram-embed-inner min-h-[380px] w-full rounded-lg border border-border/60 bg-surface-muted/50 md:min-h-[480px]";

/** Preload feed before it enters view so EmbedSocial has time to paint */
const IG_LAZY_ROOT_MARGIN_PX = 900;

type EmbedSocialApi = {
  getEmbedData: (ref: string, node: Element) => void;
};

function isNearViewport(el: Element, marginPx: number): boolean {
  const r = el.getBoundingClientRect();
  const vh = typeof window !== "undefined" ? window.innerHeight : 0;
  return r.top < vh + marginPx && r.bottom > -marginPx;
}

function EmbedSocialWidget({ dataRef }: { dataRef: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dataRef || !containerRef.current) return;
    document.getElementById(EMBEDSOCIAL_SCRIPT_ID)?.remove();

    const runEmbedSocial = () => {
      const root = containerRef.current;
      if (!root) return;
      const el = root.querySelector(".embedsocial-hashtag");
      const api = (window as unknown as { EMBEDSOCIALHASHTAG?: EmbedSocialApi })
        .EMBEDSOCIALHASHTAG;
      if (el && api?.getEmbedData) {
        el.classList.add("embedsocial-widget-loading");
        api.getEmbedData(dataRef.trim(), el);
      }
    };

    const script = document.createElement("script");
    script.id = EMBEDSOCIAL_SCRIPT_ID;
    script.src = "https://embedsocial.com/cdn/ht.js";
    script.async = true;
    script.onload = () => {
      runEmbedSocial();
      requestAnimationFrame(runEmbedSocial);
    };
    document.head.appendChild(script);

    return () => {
      document.getElementById(EMBEDSOCIAL_SCRIPT_ID)?.remove();
    };
  }, [dataRef]);

  return (
    <div ref={containerRef} className={IG_EMBED_SKELETON_CLASS}>
      <div className="embedsocial-hashtag" data-ref={dataRef} />
    </div>
  );
}

function LazyInstagramFeedEmbed({
  embedIframeUrl,
  embedRef,
  iframeTitle,
}: {
  embedIframeUrl: string | null;
  embedRef: string | null;
  iframeTitle: string;
}) {
  const [sentinelEl, setSentinelEl] = useState<HTMLDivElement | null>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load || (!embedIframeUrl && !embedRef) || !sentinelEl) return;

    let cancelled = false;
    let io: IntersectionObserver | null = null;

    const activate = () => {
      if (cancelled) return;
      setLoad(true);
    };

    const trySyncNear = () => {
      if (isNearViewport(sentinelEl, IG_LAZY_ROOT_MARGIN_PX)) {
        activate();
        return true;
      }
      return false;
    };

    if (trySyncNear()) return;

    const raf = requestAnimationFrame(() => {
      if (cancelled || trySyncNear()) return;
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            io?.disconnect();
            io = null;
            activate();
          }
        },
        { rootMargin: `${IG_LAZY_ROOT_MARGIN_PX}px 0px`, threshold: 0 },
      );
      io.observe(sentinelEl);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [embedIframeUrl, embedRef, load, sentinelEl]);

  return (
    <div ref={setSentinelEl} className="w-full">
      {load && embedIframeUrl ? (
        <iframe
          src={embedIframeUrl}
          title={iframeTitle}
          className="h-[400px] min-w-full shrink-0 rounded-lg border border-border/60 md:h-[500px] md:min-w-0"
          loading="lazy"
        />
      ) : load && embedRef ? (
        <EmbedSocialWidget dataRef={embedRef} />
      ) : (
        <div className={IG_EMBED_SKELETON_CLASS} aria-hidden />
      )}
    </div>
  );
}

export type InstagramFeedSectionProps = {
  elfsightWidgetId: string | null;
  embedRef: string | null;
  embedIframeUrl: string | null;
};

export function InstagramFeedSection({
  elfsightWidgetId,
  embedRef,
  embedIframeUrl,
}: InstagramFeedSectionProps) {
  const { copy } = useLocale();
  const { instagram: ig, ui } = copy;
  const profileUrl = `https://www.instagram.com/${instagramHandle}/`;
  const hasEmbed = Boolean(
    elfsightWidgetId || embedIframeUrl || embedRef,
  );

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

        {hasEmbed ? (
          <div className="instagram-embed-mobile-scroll mt-8 overflow-hidden rounded-xl md:overflow-visible">
            <div className="instagram-embed-scroll-container flex max-h-[420px] overflow-x-auto overflow-y-hidden px-[calc((100vw-280px)/2)] -mx-[var(--container-pad)] scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:block md:max-h-none md:overflow-visible md:px-0">
              {elfsightWidgetId ? (
                <div className={IG_EMBED_SKELETON_CLASS}>
                  <ElfsightWidget
                    widgetId={elfsightWidgetId}
                    lazy="in-viewport"
                    className="w-full min-w-0"
                  />
                </div>
              ) : (
                <LazyInstagramFeedEmbed
                  embedIframeUrl={embedIframeUrl}
                  embedRef={embedRef}
                  iframeTitle={ui.instagramIframeTitle}
                />
              )}
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
