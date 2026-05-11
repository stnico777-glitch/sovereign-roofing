"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import type { ResolvedTheme } from "@/lib/theme";
import { THEME_STORAGE_KEY } from "@/lib/theme";

type ThemeContextValue = {
  setTheme: (next: ResolvedTheme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyDomTheme(next: ResolvedTheme) {
  const root = document.documentElement;
  if (next === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const setTheme = useCallback((next: ResolvedTheme) => {
    applyDomTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const next: ResolvedTheme = document.documentElement.classList.contains(
      "dark",
    )
      ? "light"
      : "dark";
    setTheme(next);
  }, [setTheme]);

  const value = useMemo<ThemeContextValue>(
    () => ({ setTheme, toggleTheme }),
    [setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
