type LocationMapProps = {
  /** OpenStreetMap embed URL (bbox + layer). */
  src: string;
  title: string;
  caption?: string;
  className?: string;
};

/**
 * OpenStreetMap with a light brand frame (non-interactive).
 */
export function LocationMap({ src, title, caption, className = "" }: LocationMapProps) {
  return (
    <figure
      className={`relative overflow-hidden rounded-2xl border border-border bg-surface-muted ring-1 ring-accent/15 ${className}`}
      aria-label={caption ?? title}
    >
      <div className="relative aspect-[16/9] w-full min-h-[220px] max-h-[min(48vh,420px)] md:aspect-[2.1/1] md:min-h-[260px]">
        {/* Base map — slightly cooled so the overlay reads as one palette */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <iframe
            title={title}
            src={src}
            className="pointer-events-none absolute inset-0 h-full w-full border-0 select-none opacity-[0.92] [touch-action:none]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={-1}
            aria-hidden
          />
        </div>

        {/* Light wash — subtle accent warmth */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.06] via-transparent to-accent/[0.04]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_68%_58%_at_70%_58%,rgba(178,30,41,0.08),transparent_58%)]"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent/25"
          aria-hidden
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-border bg-background px-4 py-2.5 text-center font-sans text-xs text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
