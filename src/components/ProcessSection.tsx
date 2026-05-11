"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  IconCalendarCheck,
  IconCompass,
  IconDoorOpen,
  IconPenLine,
  IconWrench,
} from "@/components/icons/ThemeIcons";
import {
  Reveal,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/motion/Reveal";
import { useLocale } from "@/context/LocaleContext";
import { routes } from "@/lib/site";

const processIcons = [
  IconCompass,
  IconPenLine,
  IconCalendarCheck,
  IconWrench,
  IconDoorOpen,
] as const;

const stepCardClass =
  "flex flex-col gap-3 rounded-2xl border border-border/80 bg-pill-bg/40 p-6 shadow-sm transition-[box-shadow,transform,border-color,background-color] duration-200 hover:border-accent/25 hover:bg-pill-bg/70 hover:shadow-[0_14px_36px_rgba(0,0,0,0.22)] lg:pt-8";

export function ProcessSection() {
  const { copy } = useLocale();
  const { process: p } = copy;
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      className="scroll-mt-24 border-t border-border bg-background px-[var(--container-pad)] py-[var(--section-y)]"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-4 md:mb-6">
          <div className="relative mx-auto flex min-h-[13rem] min-w-0 flex-col items-center justify-center overflow-visible px-2 py-3 sm:min-h-[15rem] md:min-h-[16rem]">
            {reduce ? (
              <Image
                src="/process-hardhat.png?v=2"
                alt=""
                width={1152}
                height={928}
                unoptimized
                className="pointer-events-none absolute left-1/2 top-[4%] z-0 h-[min(10rem,52vw)] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 bg-transparent object-contain opacity-90 sm:h-[min(11rem,48vw)] md:top-[3%] md:h-[min(12.5rem,38vw)]"
                sizes="(max-width: 768px) 52vw, 38vw"
                priority
              />
            ) : (
              <motion.div
                className="pointer-events-none absolute left-1/2 top-[4%] z-0 h-[min(10rem,52vw)] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 sm:h-[min(11rem,48vw)] md:top-[3%] md:h-[min(12.5rem,38vw)]"
                initial={{ opacity: 0, y: 48, rotate: -14, scale: 0.82 }}
                whileInView={{
                  opacity: 0.9,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.42 }}
                transition={{
                  duration: 1.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Image
                  src="/process-hardhat.png?v=2"
                  alt=""
                  width={1152}
                  height={928}
                  unoptimized
                  className="h-full w-auto max-w-none bg-transparent object-contain"
                  sizes="(max-width: 768px) 52vw, 38vw"
                  priority
                />
              </motion.div>
            )}
            <Reveal
              className="relative z-10 flex w-full max-w-2xl flex-col items-center pt-8 text-center sm:pt-9 md:pt-10"
              from="up"
              viewportAmount={0.42}
            >
              <p className="font-sans text-[0.75rem] font-medium tracking-[0.28em] text-accent uppercase">
                {p.eyebrow}
              </p>
              <h2
                id="process-heading"
                className="text-display mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl"
              >
                {p.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl rounded-lg bg-background/80 px-3 py-2 font-sans text-sm leading-relaxed text-muted-light md:bg-background/70 md:text-base">
                {p.subtitle}
              </p>
            </Reveal>
          </div>
        </header>

        <div className="relative">
          <div
            className="pointer-events-none absolute left-4 right-4 top-[1.35rem] hidden h-px lg:block lg:left-[6%] lg:right-[6%] lg:top-10"
            aria-hidden
          >
            <div className="h-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>

          {reduce ? (
            <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
              {p.steps.map((step, i) => {
                const StepIcon = processIcons[i] ?? IconCompass;
                return (
                  <li key={step.title} className={stepCardClass}>
                    <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-background text-accent shadow-[0_0_0_1px_rgba(0,0,0,0.2)]"
                        aria-hidden
                      >
                        <StepIcon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1 lg:text-left">
                        <p className="font-mono text-[0.65rem] font-semibold tabular-nums text-muted">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <h3 className="text-display mt-1 text-lg font-semibold leading-snug text-foreground">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="font-sans text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </li>
                );
              })}
            </ol>
          ) : (
            <motion.ol
              className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-4"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {p.steps.map((step, i) => {
                const StepIcon = processIcons[i] ?? IconCompass;
                return (
                  <motion.li
                    key={step.title}
                    variants={staggerItemVariants}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 34,
                      mass: 0.85,
                    }}
                    className={stepCardClass}
                  >
                    <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-background text-accent shadow-[0_0_0_1px_rgba(0,0,0,0.2)]"
                        aria-hidden
                      >
                        <StepIcon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1 lg:text-left">
                        <p className="font-mono text-[0.65rem] font-semibold tabular-nums text-muted">
                          {String(i + 1).padStart(2, "0")}
                        </p>
                        <h3 className="text-display mt-1 text-lg font-semibold leading-snug text-foreground">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="font-sans text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </motion.li>
                );
              })}
            </motion.ol>
          )}
        </div>

        <Reveal
          className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-border/60 pt-10 text-center md:flex-row md:gap-10 md:text-left"
          from="up"
          delay={0.08}
          viewportAmount={0.45}
        >
          <p className="max-w-xl font-sans text-xs font-medium tracking-[0.18em] text-muted-light uppercase">
            {p.trustLine}
          </p>
          <Link
            href={routes.contact}
            className="shrink-0 rounded-full border border-accent/40 bg-accent px-6 py-2.5 font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase transition hover:bg-accent/90"
          >
            {copy.ui.processCta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
