"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LocationMap } from "@/components/LocationMap";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { IconMail, IconMapPin, IconPhone } from "@/components/icons/ThemeIcons";
import { useLocale } from "@/context/LocaleContext";
import { contractorLicenseNumber, routes } from "@/lib/site";

export function ContactSection() {
  const { copy } = useLocale();
  const pathname = usePathname();
  const isContactPage = pathname === routes.contact;

  return (
    <footer
      id="footer"
      className="scroll-mt-24 border-t border-border bg-footer px-[var(--container-pad)] py-[var(--section-y)] text-foreground"
    >
      <div className="mx-auto max-w-6xl">
        {!isContactPage && (
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-10 lg:items-start">
            <div>
              <h2 className="text-display text-2xl font-bold md:text-3xl">
                {copy.contact.title}
              </h2>
              <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-foreground/80">
                {copy.contact.body}
              </p>
              <p
                id="location"
                className="mt-6 flex scroll-mt-24 items-center gap-2 font-sans text-sm text-foreground/65"
              >
                <IconMapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                <span className="font-semibold text-foreground">
                  {copy.footer.location}
                </span>
              </p>
              <div className="mt-8 flex flex-col gap-4">
                <a
                  href={`mailto:${copy.contact.email}`}
                  className="inline-flex items-center gap-2 font-sans text-lg font-medium tracking-tight text-foreground transition hover:opacity-80"
                >
                  <IconMail className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                  {copy.contact.email}
                </a>
                <a
                  href={`tel:${copy.phoneTel}`}
                  className="inline-flex items-center gap-2 font-sans text-sm tracking-wide text-foreground/80 transition hover:text-foreground"
                >
                  <IconPhone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {copy.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <QuoteRequestForm variant="vision" idPrefix="footer-quote" />
            </div>
          </div>
        )}

        <nav
          className={`flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-10 font-sans text-xs tracking-[0.2em] text-foreground/55 ${isContactPage ? "" : "mt-12"}`}
          aria-label={copy.ui.footerNavAria}
        >
          {copy.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-14 border-t border-border pt-12 md:mt-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="flex items-center gap-2 text-display text-lg font-semibold text-foreground md:text-xl">
              <IconMapPin className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              {copy.footer.mapHeading}
            </h2>
            <Link
              href={routes.location}
              className="font-sans text-xs font-medium tracking-[0.18em] text-accent transition hover:underline"
            >
              {copy.footer.mapLinkLabel}
            </Link>
          </div>
          <div className="mt-5">
            <LocationMap
              src={copy.locationPage.mapEmbedSrc}
              title={copy.ui.mapIframeTitle}
              caption={copy.locationPage.mapCaption}
              className="border-border bg-surface-muted ring-border"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-accent/15 pt-8 font-sans text-xs text-foreground/50 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {copy.footer.rights}</span>
          <span className="tracking-wide">
            {copy.footer.licenseLabel}{" "}
            <span className="font-medium text-foreground/65">
              {contractorLicenseNumber}
            </span>
          </span>
          <span className="tracking-wide">{copy.footer.location}</span>
        </div>
      </div>
    </footer>
  );
}
