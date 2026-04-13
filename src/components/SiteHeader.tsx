"use client";

import Link from "next/link";
import { BrandLogoImage } from "@/components/BrandLogoImage";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { routes } from "@/lib/site";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale, copy } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onHero = pathname === routes.home;
  const heroBarClear = onHero && !scrolled;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fg = heroBarClear ? "text-hero-fg" : "";

  const navInactive = heroBarClear
    ? "text-white/90 hover:text-white"
    : "text-foreground/80 hover:text-foreground";

  const brandClass = heroBarClear
    ? "text-white text-hero-fg"
    : "text-foreground";

  const headerShell = heroBarClear
    ? "border-b border-transparent bg-transparent"
    : "border-b border-border bg-background/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-background/90";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-[var(--container-pad)] pt-4 pb-3 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 md:pt-5 md:pb-4 ${headerShell}`}
      >
        <div className="pointer-events-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex items-center justify-between gap-4 md:block">
            <Link
              href={routes.home}
              className={`inline-flex items-center gap-2 transition-opacity hover:opacity-90 ${brandClass}`}
              aria-label={copy.ui.headerBrandHomeAria}
            >
              <BrandLogoImage
                src="/sovereign-nav-logo.png"
                alt=""
                width={512}
                height={512}
                className="h-16 w-auto max-w-[min(100%,30rem)] shrink-0 object-contain object-left sm:h-[4.25rem] md:h-[5.25rem]"
                priority
                appearance={heroBarClear ? "over-video" : "on-light"}
              />
              <span className="sr-only">{copy.headerBrand}</span>
            </Link>
            <button
              type="button"
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-xl font-light transition md:hidden ${
                heroBarClear
                  ? "border-white/35 text-white hover:border-white/55"
                  : "border-border text-foreground hover:border-accent/35"
              } ${fg}`}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? "×" : "+"}
            </button>
          </div>

          <nav
            className="hidden flex-wrap items-center gap-x-7 gap-y-2 md:flex md:pt-px"
            aria-label={copy.ui.navAriaPrimary}
          >
            {copy.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-caps font-sans font-medium transition ${navInactive} ${
                    active ? "text-accent" : ""
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex md:items-center md:pt-px">
            <div className="flex items-center gap-4 md:gap-5">
              <div
                className={`flex items-center gap-1.5 font-sans text-xs font-medium tracking-[0.2em] ${
                  heroBarClear ? "text-white/90" : "text-muted"
                } ${fg}`}
              >
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`transition hover:opacity-100 ${
                    heroBarClear
                      ? locale === "en"
                        ? "text-white"
                        : "text-white/45"
                      : locale === "en"
                        ? "text-foreground"
                        : "text-muted"
                  }`}
                >
                  EN
                </button>
                <span
                  className={
                    heroBarClear ? "text-white/35" : "text-border"
                  }
                >
                  /
                </span>
                <button
                  type="button"
                  onClick={() => setLocale("es")}
                  className={`transition hover:opacity-100 ${
                    heroBarClear
                      ? locale === "es"
                        ? "text-white"
                        : "text-white/45"
                      : locale === "es"
                        ? "text-foreground"
                        : "text-muted"
                  }`}
                >
                  ES
                </button>
              </div>
              <a
                href={`tel:${copy.phoneTel}`}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-sm font-semibold leading-none tracking-wide shadow-sm backdrop-blur-md transition ${
                  heroBarClear
                    ? "border-white/35 bg-black/25 text-white shadow-[0_2px_24px_rgba(0,0,0,0.35)] hover:border-white/50 hover:bg-black/35"
                    : "border-border bg-background text-foreground hover:border-accent/40 hover:bg-surface-muted/80"
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <PhoneIcon className="h-4 w-4" />
                </span>
                <span className="pr-0.5">{copy.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 flex flex-col bg-background px-[var(--container-pad)] pt-24 transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-6" aria-label={copy.ui.navAriaMobile}>
          {copy.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-display text-2xl font-semibold transition hover:opacity-80 ${
                  active ? "text-accent" : "text-foreground/85"
                }`}
                aria-current={active ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8">
          <div className="flex gap-4 font-sans text-sm tracking-[0.2em] text-muted">
            <button
              type="button"
              className={locale === "en" ? "text-foreground" : ""}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
            <span className="text-border">/</span>
            <button
              type="button"
              className={locale === "es" ? "text-foreground" : ""}
              onClick={() => setLocale("es")}
            >
              ES
            </button>
          </div>
          <a
            href={`tel:${copy.phoneTel}`}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/35 bg-pill-bg px-5 py-3 font-sans text-sm font-semibold text-foreground"
            onClick={() => setMenuOpen(false)}
          >
            <PhoneIcon className="h-4 w-4 text-foreground" />
            {copy.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
