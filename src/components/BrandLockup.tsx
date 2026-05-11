import { BrandLogoImage } from "@/components/BrandLogoImage";

type BrandLockupProps = {
  /** Larger lockup for hero (over video). */
  size?: "default" | "hero" | "nav";
  className?: string;
  /** Empty string when an ancestor provides `aria-label` (e.g. header home link). */
  alt?: string;
  /** When `size="nav"`: white glow over video vs crisp wordmark on solid header (same asset as hero). */
  logoAppearance?: "over-video" | "on-light";
};

export function BrandLockup({
  size = "default",
  className = "",
  alt = "Sovereign Roofing",
  logoAppearance,
}: BrandLockupProps) {
  /** Nav: small layout box + scale so the bar stays short; `pe` reserves horizontal bleed past the layout width. */
  if (size === "nav") {
    /* Slightly wider layout + start padding so the mark (and drop-shadow) are not clipped by `overflow-x-hidden` on `body`. */
    const navImgClass =
      "h-[2.25rem] w-auto max-w-[5rem] object-contain object-left sm:h-[2.5rem] sm:max-w-[5.5rem] md:h-[2.75rem] md:max-w-[6rem]";
    return (
      <div
        className={`inline-flex shrink-0 items-center ps-2.5 sm:ps-3 md:ps-3.5 pe-[10rem] sm:pe-[11rem] md:pe-[12rem] ${className}`}
      >
        <span className="inline-block origin-[left_40%] overflow-visible scale-[3]">
          <BrandLogoImage
            alt={alt}
            width={1200}
            height={600}
            className={`pointer-events-none select-none ${navImgClass}`}
            priority
            appearance={logoAppearance ?? "on-light"}
          />
        </span>
      </div>
    );
  }

  const imgClass =
    size === "hero"
      ? "h-auto max-h-[min(56vh,480px)] w-[min(94vw,26rem)] object-contain object-left sm:w-[28rem] md:w-[30rem]"
      : "h-auto w-[min(100%,14rem)] sm:w-[15rem] md:w-[17rem]";

  return (
    <div className={`inline-block max-w-full bg-transparent ${className}`}>
      <BrandLogoImage
        alt={alt}
        width={1200}
        height={600}
        className={`pointer-events-none select-none ${imgClass}`}
        priority={size === "hero"}
        appearance="over-video"
      />
    </div>
  );
}
