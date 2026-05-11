"use client";

import Image from "next/image";
import Link from "next/link";
import { LocationMap } from "@/components/LocationMap";
import { getServiceAreasForLocale } from "@/content/serviceAreasLocale";
import { useLocale } from "@/context/LocaleContext";
import { routes, siteUrl } from "@/lib/site";

export function ServiceAreasView() {
  const { locale, copy } = useLocale();
  const lp = copy.locationPage;
  const serviceAreas = getServiceAreasForLocale(locale);
  const listUrl = `${siteUrl}${routes.location}`;
  const directoryStat = lp.heroDirectoryStat.replace(
    "{count}",
    String(serviceAreas.length),
  );

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: lp.schemaItemListName,
    description: lp.schemaItemListDescription,
    numberOfItems: serviceAreas.length,
    itemListElement: serviceAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: area.name,
      description: area.description.slice(0, 220),
      url: `${listUrl}#${area.id}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <div className="relative border-b border-border bg-gradient-to-b from-pill-bg/70 via-background to-background pb-[var(--section-y)] dark:from-[rgba(255,255,255,0.04)] dark:via-background dark:to-background">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/[0.07] blur-3xl dark:bg-accent/[0.09]" />
          <div className="absolute -left-24 top-1/3 h-[22rem] w-[22rem] rounded-full bg-accent/[0.045] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-[var(--container-pad)] pt-8 md:pt-12">
          <article className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start">
            <div className="lg:col-span-7">
              <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-accent">
                {lp.heroEyebrow}
              </p>
              <h1 className="text-display mt-3 max-w-xl text-3xl font-bold tracking-[0.03em] text-foreground md:text-4xl lg:text-[2.65rem] lg:leading-tight">
                {lp.title}
              </h1>

              <div className="mt-8 space-y-4">
                <div className="flex justify-center sm:justify-start">
                  <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/[0.09] px-5 py-2.5 font-sans text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] md:text-xs md:tracking-[0.22em]">
                    {lp.expansionRibbon}
                  </span>
                </div>
                <div className="rounded-2xl border border-border bg-gradient-to-br from-background to-pill-bg/80 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:from-background dark:to-pill-bg/30 dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                  <p className="font-sans text-sm font-semibold text-foreground md:text-base">
                    {lp.expansionCardTitle}
                  </p>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-muted md:text-[0.9375rem]">
                    {lp.expansionCardBody}
                  </p>
                </div>
              </div>

              <p className="mt-8 font-sans text-base leading-relaxed text-foreground/92 md:text-lg md:leading-relaxed">
                {lp.lead}
              </p>

              <div className="mt-8 space-y-4 rounded-2xl border border-border/80 bg-background/85 p-6 dark:bg-background/75">
                {lp.body.map((p, i) => (
                  <p
                    key={i}
                    className="flex gap-3 font-sans text-sm leading-relaxed text-foreground/85 md:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{p}</span>
                  </p>
                ))}
              </div>

              <p className="mt-8 font-sans text-sm leading-relaxed text-foreground/88 md:text-base">
                {copy.ui.locationDetailParagraph}
              </p>

              <Link
                href={routes.contact}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_rgba(178,30,41,0.38)] transition hover:bg-accent-muted hover:shadow-[0_14px_34px_rgba(178,30,41,0.48)] active:scale-[0.98] dark:shadow-[0_10px_32px_rgba(0,0,0,0.45)]"
              >
                {lp.heroContactCta}
              </Link>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <LocationMap
                src={lp.mapEmbedSrc}
                title={copy.ui.mapIframeTitle}
                caption={lp.mapCaption}
                className="shadow-[0_24px_56px_rgba(0,0,0,0.14)] ring-accent/20 dark:shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
              />
              <p className="mt-4 rounded-2xl border border-border bg-pill-bg/70 px-4 py-3 text-center font-sans text-sm font-semibold text-foreground dark:bg-pill-bg/40">
                {directoryStat}
              </p>
            </div>
          </article>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-[var(--container-pad)] pb-[var(--section-y)] pt-12 md:pt-16">
        <section aria-labelledby="service-areas-heading">
          <div className="flex flex-col gap-4 border-l-4 border-accent pl-5 md:flex-row md:items-end md:justify-between md:pl-6">
            <div>
              <h2
                id="service-areas-heading"
                className="text-display text-2xl font-bold text-foreground md:text-3xl lg:text-[2.15rem]"
              >
                {lp.serviceAreasHeading}
              </h2>
              <p className="mt-3 max-w-3xl font-sans text-sm leading-relaxed text-foreground/80 md:text-base">
                {copy.ui.locationDirectoryIntro.replace(
                  "{count}",
                  String(serviceAreas.length),
                )}
              </p>
            </div>
          </div>

          <ul className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {serviceAreas.map((area) => (
              <li
                key={area.id}
                id={area.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-pill-bg/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_16px_44px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.45)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-muted">
                  <Image
                    src={area.imageSrc}
                    alt={area.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-accent">
                    {area.region}
                  </p>
                  <h3 className="text-display mt-1 text-lg font-semibold text-foreground md:text-xl">
                    {area.name}
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-foreground/78 md:text-[0.9375rem]">
                    {area.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-2xl rounded-2xl border border-border bg-pill-bg/50 px-5 py-4 font-sans text-sm leading-relaxed text-foreground/85 dark:bg-pill-bg/25">
            {lp.serviceAreasFootnote}
          </p>

          <p className="mt-8 text-center font-sans text-xs text-muted">
            {copy.ui.locationPhotoCredit}{" "}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-2 hover:underline"
            >
              Pexels
            </a>
            {copy.ui.locationPhotoCreditSuffix}
          </p>

          <p className="mt-10 font-sans text-sm text-foreground/88">
            <span className="font-semibold text-foreground">{copy.footer.location}</span>{" "}
            —{" "}
            <Link
              href={routes.contact}
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              {copy.ui.locationContactLine}
            </Link>{" "}
            {copy.ui.locationContactSuffix}
          </p>
        </section>
      </div>
    </>
  );
}
