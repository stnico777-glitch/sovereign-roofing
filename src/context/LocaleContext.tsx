"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { SiteCopy } from "@/content/siteCopy";
import { portfolioCards, portfolioCardsRow2, siteCopy } from "@/content/siteCopy";
import {
  portfolioCardsEs,
  portfolioCardsRow2Es,
  siteCopyEs,
} from "@/content/siteCopyEs";
import type { Locale } from "@/lib/locale";
import { isLocale, LOCALE_STORAGE_KEY } from "@/lib/locale";

export type { Locale } from "@/lib/locale";

type PortfolioCardItem = (typeof portfolioCards)[number];

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: SiteCopy;
  portfolioCards: readonly PortfolioCardItem[];
  portfolioCardsRow2: readonly PortfolioCardItem[];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (!isLocale(stored)) return;
      queueMicrotask(() => setLocaleState(stored));
    } catch {
      /* ignore */
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      copy: locale === "es" ? siteCopyEs : siteCopy,
      portfolioCards: locale === "es" ? portfolioCardsEs : portfolioCards,
      portfolioCardsRow2:
        locale === "es" ? portfolioCardsRow2Es : portfolioCardsRow2,
    }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

/** Sets `<html lang>` from the active locale (place inside `LocaleProvider`). */
export function HtmlLangSync() {
  const { locale } = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale === "es" ? "es" : "en";
  }, [locale]);
  return null;
}
