/** PNG in `public/` — served as-is (alpha preserved). */
const LOGO_SRC = "/sovereign.png";

const FILTER_OVER_VIDEO =
  "drop-shadow(0 0 10px rgba(255,255,255,0.65)) drop-shadow(0 0 28px rgba(255,255,255,0.4)) drop-shadow(0 0 48px rgba(255,255,255,0.2))";

const FILTER_ON_LIGHT =
  "drop-shadow(0 1px 2px rgba(0,0,0,0.12)) drop-shadow(0 0 16px rgba(0,0,0,0.06))";

type BrandLogoImageProps = {
  /** Defaults to full wordmark `sovereign.png` (e.g. hero). */
  src?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  /** `over-video`: white glow. `on-light`: subtle shadow on white header. */
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
    appearance === "on-light" ? FILTER_ON_LIGHT : FILTER_OVER_VIDEO;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- intentional: exact raster asset from /public
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={`bg-transparent ${className ?? ""}`}
      style={{
        backgroundColor: "transparent",
        filter,
      }}
    />
  );
}
