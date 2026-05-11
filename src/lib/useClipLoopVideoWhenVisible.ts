"use client";

import { useEffect, useRef, type RefObject } from "react";

type UseClipLoopVideoWhenVisibleOptions = {
  /**
   * When set, keeps playback in `[0, clipDurationSec)` via a single rAF loop (no `ended` handler).
   * When omitted, only viewport + tab visibility (pair with native `loop` + `#t=` on `<source>`).
   */
  clipDurationSec?: number;
  rootMargin?: string;
  threshold?: number;
};

/**
 * Muted autoplay helper: plays while intersecting the viewport and the tab is visible.
 */
export function useClipLoopVideoWhenVisible(
  ref: RefObject<HTMLVideoElement | null>,
  {
    clipDurationSec,
    rootMargin = "80px",
    threshold = 0,
  }: UseClipLoopVideoWhenVisibleOptions,
) {
  const clipRef = useRef(clipDurationSec ?? 0);
  clipRef.current = clipDurationSec ?? 0;
  const hasClip =
    typeof clipDurationSec === "number" &&
    Number.isFinite(clipDurationSec) &&
    clipDurationSec > 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let intersecting = false;
    let rafId = 0;

    const cancelRaf = () => {
      if (rafId !== 0) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const rafLoop = () => {
      rafId = 0;
      if (!hasClip || !intersecting || document.hidden) return;

      const clip = clipRef.current;
      const t = el.currentTime;
      if (Number.isFinite(t) && t >= clip) {
        el.currentTime = 0;
        void el.play().catch(() => {});
      }

      rafId = requestAnimationFrame(rafLoop);
    };

    const startRaf = () => {
      if (!hasClip) return;
      cancelRaf();
      rafId = requestAnimationFrame(rafLoop);
    };

    const tryPlay = () => {
      if (!intersecting || document.hidden) return;
      if (hasClip && el.currentTime >= clipRef.current) el.currentTime = 0;
      startRaf();
      void el.play().catch(() => {});
    };

    const stop = () => {
      intersecting = false;
      cancelRaf();
      el.pause();
    };

    const start = () => {
      intersecting = true;
      tryPlay();
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelRaf();
        el.pause();
        return;
      }
      tryPlay();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) start();
        else stop();
      },
      { rootMargin, threshold },
    );

    io.observe(el);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      stop();
    };
  }, [clipDurationSec, hasClip, rootMargin, threshold]);
}
