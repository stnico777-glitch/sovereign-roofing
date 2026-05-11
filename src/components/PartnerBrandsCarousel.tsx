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
 * Ported from keysconcrete `TrustedBy.tsx` (LogoRow + `kc-marquee`):
 * two sibling rows, `gap-0`, negative horizontal margins on slides, 44s duration.
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

      <div className="kc-marquee flex items-center gap-0 whitespace-nowrap [animation-duration:56s]">
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
      className="flex items-center gap-0 pr-0"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {items.map((it) => (
        <div
          key={it.name}
          className="flex items-center -mr-40 sm:-mr-48 lg:-mr-56"
        >
          {it.logoSrc ? (
            <span className="relative h-20 w-64 sm:h-24 sm:w-80 lg:h-28 lg:w-[26rem]">
              <Image
                src={it.logoSrc}
                alt={it.name}
                fill
                sizes="(min-width: 1024px) 416px, (min-width: 640px) 320px, 256px"
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
