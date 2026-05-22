import Image from "next/image";

export type PartnerBrand = {
  src: string;
  alt: string;
};

type PartnerBrandsCarouselProps = {
  partners: readonly PartnerBrand[];
  regionAriaLabel: string;
};

/**
 * Infinite marquee of partner logos — two sibling rows, `kc-marquee` animation.
 */
export function PartnerBrandsCarousel({
  partners,
  regionAriaLabel,
}: PartnerBrandsCarouselProps) {
  const items = partners.map((p) => ({ name: p.alt, logoSrc: p.src }));

  return (
    <div
      className="relative mt-10 overflow-hidden"
      role="region"
      aria-label={regionAriaLabel}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[color-mix(in_srgb,var(--background),transparent_0%)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[color-mix(in_srgb,var(--background),transparent_0%)] to-transparent" />

      <div className="kc-marquee flex items-center gap-10 whitespace-nowrap [animation-duration:56s] sm:gap-12 lg:gap-14">
        <LogoRow items={items} />
        <LogoRow items={items} ariaHidden />
      </div>
    </div>
  );
}

function LogoRow({
  items,
  ariaHidden,
}: {
  items: { name: string; logoSrc?: string }[];
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-12 sm:pr-12 lg:gap-14 lg:pr-14"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {items.map((it) => (
        <div key={it.name} className="flex shrink-0 items-center">
          {it.logoSrc ? (
            <span className="relative h-10 w-28 sm:h-11 sm:w-32 lg:h-12 lg:w-36">
              <Image
                src={it.logoSrc}
                alt={it.name}
                fill
                sizes="(min-width: 1024px) 144px, (min-width: 640px) 128px, 112px"
                className="object-contain"
              />
            </span>
          ) : (
            <span className="text-sm font-semibold text-muted">{it.name}</span>
          )}
        </div>
      ))}
    </div>
  );
}
