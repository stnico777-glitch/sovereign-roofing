export type Locale = "en" | "es";

export const LOCALE_STORAGE_KEY = "sovereign-roofing.locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "es";
}
