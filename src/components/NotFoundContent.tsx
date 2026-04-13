"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { routes } from "@/lib/site";

export function NotFoundContent() {
  const { copy } = useLocale();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-[var(--container-pad)] pt-28 text-center">
      <h1 className="text-display text-3xl font-bold text-foreground">
        {copy.ui.notFoundTitle}
      </h1>
      <p className="mt-4 max-w-md font-sans text-muted">{copy.ui.notFoundBody}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href={routes.home}
          className="rounded-full border border-accent/40 bg-accent px-6 py-2.5 font-sans text-xs font-semibold tracking-[0.18em] text-white uppercase transition hover:bg-accent/90"
        >
          {copy.ui.notFoundHome}
        </Link>
        <Link
          href={routes.contact}
          className="rounded-full border border-border px-6 py-2.5 font-sans text-xs font-semibold tracking-[0.18em] text-foreground uppercase transition hover:border-accent/35"
        >
          {copy.ui.notFoundContact}
        </Link>
      </div>
    </div>
  );
}
