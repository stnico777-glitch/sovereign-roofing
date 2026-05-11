"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { useTheme } from "@/context/ThemeContext";

function MoonIcon({ className }: { className?: string }) {
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
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.65" />
      <path
        d="M12 1.75v2.5M12 19.75v2.5M23.25 12h-2.5M3.25 12H.75M19.07 4.93 17.3 6.7M6.7 17.3 4.93 19.07M19.07 19.07 17.3 17.3M6.7 6.7 4.93 4.93"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
      />
    </svg>
  );
}

type ThemeToggleProps = {
  /** Transparent / light header over hero video */
  heroBarClear?: boolean;
  className?: string;
};

export function ThemeToggle({ heroBarClear, className }: ThemeToggleProps) {
  const { copy } = useLocale();
  const { toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
      setMounted(true);
    });
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setIsDark(document.documentElement.classList.contains("dark"));
  };

  const styles = heroBarClear
    ? "border-white/35 text-white hover:border-white/55 hover:bg-white/10"
    : "border-border text-foreground hover:border-accent/35 hover:bg-pill-bg";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={mounted ? isDark : undefined}
      aria-label={
        isDark ? copy.ui.themeToggleToLight : copy.ui.themeToggleToDark
      }
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${styles} ${className ?? ""}`}
    >
      {!mounted ? (
        <span className="h-[18px] w-[18px] rounded-full bg-current opacity-20" />
      ) : isDark ? (
        <SunIcon className="opacity-95" />
      ) : (
        <MoonIcon className="opacity-95" />
      )}
    </button>
  );
}
