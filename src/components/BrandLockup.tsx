import { BrandLogoImage } from "@/components/BrandLogoImage";

type BrandLockupProps = {
  /** Larger lockup for hero (over video). */
  size?: "default" | "hero";
  className?: string;
};

export function BrandLockup({
  size = "default",
  className = "",
}: BrandLockupProps) {
  const imgClass =
    size === "hero"
      ? "h-auto max-h-[min(56vh,480px)] w-[min(94vw,26rem)] object-contain object-left sm:w-[28rem] md:w-[30rem]"
      : "h-auto w-[min(100%,14rem)] sm:w-[15rem] md:w-[17rem]";

  return (
    <div className={`inline-block max-w-full bg-transparent ${className}`}>
      <BrandLogoImage
        alt="Sovereign Roofing"
        width={1200}
        height={600}
        className={`pointer-events-none select-none ${imgClass}`}
        priority={size === "hero"}
      />
    </div>
  );
}
