"use client";

import { useCallback, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLocale } from "@/context/LocaleContext";
import type { Locale } from "@/lib/locale";

type ReviewItem = {
  id: string;
  rating: number;
  text: string;
  publishTime: string;
  authorName: string;
};

const PAGE_SIZE = 3;
const SNIPPET_LEN = 200;

function StarRow({
  rating,
  size = "md",
}: {
  rating: number;
  size?: "sm" | "md";
}) {
  const full = Math.round(rating);
  const dim = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  return (
    <div className="flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`${dim} ${i < full ? "text-accent" : "text-border"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleGLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase() || "??";
}

function formatReviewDate(iso: string, locale: Locale) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat(locale === "es" ? "es" : "en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(d);
}

function ReviewCard({
  review,
  writeReviewUrl,
  expandLess,
  expandMore,
  googleAria,
  locale,
}: {
  review: ReviewItem;
  writeReviewUrl: string;
  expandLess: string;
  expandMore: string;
  googleAria: string;
  locale: Locale;
}) {
  const [expanded, setExpanded] = useState(false);
  const long = review.text.length > SNIPPET_LEN;
  const shown =
    expanded || !long
      ? review.text
      : `${review.text.slice(0, SNIPPET_LEN).trim()}…`;

  return (
    <article className="flex h-full min-w-0 flex-col rounded-lg border border-border bg-pill-bg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-sans text-sm font-semibold text-foreground">
            {review.rating}
          </span>
          <StarRow rating={review.rating} size="sm" />
        </div>
        <time
          className="shrink-0 font-sans text-xs text-muted"
          dateTime={review.publishTime}
        >
          {formatReviewDate(review.publishTime, locale)}
        </time>
      </div>
      <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted">
        {shown}
        {long && (
          <button
            type="button"
            className="ml-1 font-semibold text-accent hover:underline"
            onClick={() => setExpanded((e) => !e)}
          >
            {expanded ? expandLess : expandMore}
          </button>
        )}
      </p>
      <div className="mt-4 flex items-end justify-between gap-2 border-t border-border pt-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-muted font-sans text-[11px] font-semibold text-foreground">
            {initialsFromName(review.authorName)}
          </span>
          <span className="truncate font-sans text-sm font-medium text-foreground">
            {review.authorName}
          </span>
        </div>
        <a
          href={writeReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 opacity-90 hover:opacity-100"
          aria-label={googleAria}
        >
          <GoogleGLogo />
        </a>
      </div>
    </article>
  );
}

export function GoogleReviewsSection() {
  const { locale, copy } = useLocale();
  const gr = copy.googleReviews;
  const reduce = useReducedMotion();
  const reviews: ReviewItem[] = gr.reviews.map((r) => ({
    id: r.id,
    rating: r.rating,
    text: r.text,
    publishTime: r.publishTime,
    authorName: r.authorName,
  }));

  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(reviews.length / PAGE_SIZE));

  const pageReviews = useMemo(() => {
    const start = page * PAGE_SIZE;
    return reviews.slice(start, start + PAGE_SIZE);
  }, [reviews, page]);

  const goPrev = useCallback(() => {
    setPage((p) => Math.max(0, p - 1));
  }, []);

  const goNext = useCallback(() => {
    setPage((p) => Math.min(totalPages - 1, p + 1));
  }, [totalPages]);

  const ratingDisplay = gr.aggregateRating.toFixed(2);
  const writeUrl = gr.businessProfileUrl;

  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-t border-border bg-background px-[var(--container-pad)] py-[var(--section-y)]"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <h2
              id="reviews-heading"
              className="text-display text-2xl font-bold tracking-tight text-foreground md:text-3xl"
            >
              {gr.title}
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:gap-8">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <p className="text-display text-4xl font-bold text-foreground md:text-5xl">
                {ratingDisplay}
              </p>
              <div className="flex flex-col justify-center gap-1">
                <StarRow rating={Math.round(gr.aggregateRating)} />
              </div>
            </div>
            <a
              href={writeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-accent/45 bg-accent px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition hover:border-accent/60 hover:bg-accent/90"
            >
              {gr.writeReviewCta}
            </a>
          </div>
        </div>

        {pageReviews.length > 0 ? (
          <>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {pageReviews.map((r) => (
                <ReviewCard
                  key={r.id}
                  review={r}
                  writeReviewUrl={writeUrl}
                  expandLess={copy.ui.reviewExpandLess}
                  expandMore={copy.ui.reviewExpandMore}
                  googleAria={copy.ui.googleBusinessAria}
                  locale={locale}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <nav
                className="mt-10 flex items-center justify-center gap-2"
                aria-label={copy.ui.reviewPagesNav}
              >
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={page === 0}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition hover:border-accent/25 hover:bg-surface-muted disabled:opacity-40"
                  aria-label={copy.ui.reviewPagesPrev}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18l-6-6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="flex items-center gap-2 px-2 font-sans text-sm text-muted">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setPage(i)}
                      className={`min-w-[1.75rem] rounded px-1 py-0.5 font-medium ${
                        i === page
                          ? "text-foreground"
                          : "text-muted-light hover:text-foreground"
                      }`}
                      aria-current={i === page ? "page" : undefined}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={page >= totalPages - 1}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition hover:border-accent/25 hover:bg-surface-muted disabled:opacity-40"
                  aria-label={copy.ui.reviewPagesNext}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </nav>
            )}
          </>
        ) : (
          <p className="mt-10 font-sans text-sm text-muted">
            {copy.ui.reviewsEmptyHint}{" "}
            <code className="rounded bg-surface-muted px-1 text-xs text-foreground">
              {copy.ui.reviewsEmptyCode}
            </code>
            .
          </p>
        )}
      </div>
    </section>
  );
}
