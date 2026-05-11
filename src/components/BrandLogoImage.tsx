/** PNG in `public/` — served as-is (alpha preserved). */
const LOGO_SRC = "/sovereign.png";

/** Single soft halo — fewer filter passes than stacked drop-shadows. */
const FILTER_OVER_VIDEO =
  "drop-shadow(0 0 12px rgba(255,255,255,0.55)) drop-shadow(0 2px 8px rgba(0,0,0,0.35))";

type BrandLogoImageProps = {
  /** Defaults to full wordmark `sovereign.png` (e.g. hero). */
  src?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  /**
   * `over-video`: white glow (hero). `on-light`: tuned for headers;
   * `globals.css` adds a brighter treatment when `html.dark`.
   */
  appearance?: "over-video" | "on-light";
};

/**
 * Plain `<img>` so the PNG is served exactly from `/public` without re-encoding.
 */
export function BrandLogoImage({
  src = LOGO_SRC,
  alt,
  width,
  height,
  className,
  priority,
  appearance = "over-video",
}: BrandLogoImageProps) {
  const filter =
    appearance === "on-light" ? undefined : FILTER_OVER_VIDEO;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- intentional: exact raster asset from /public
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      data-brand-appearance={appearance === "on-light" ? "on-light" : undefined}
      className={`bg-transparent ${className ?? ""}`}
      style={{
        backgroundColor: "transparent",
        ...(filter ? { filter } : {}),
      }}
    />
  );
}
