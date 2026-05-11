"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/** Slightly shorter travel + longer tween reads smoother on scroll */
const OFFSET = 26;

const ease = [0.22, 1, 0.36, 1] as const;

export type RevealFrom = "left" | "right" | "up";

function hiddenState(from: RevealFrom) {
  switch (from) {
    case "left":
      return { opacity: 0, x: -OFFSET, y: 0 };
    case "right":
      return { opacity: 0, x: OFFSET, y: 0 };
    case "up":
      return { opacity: 0, x: 0, y: OFFSET };
    default:
      return { opacity: 0, x: 0, y: OFFSET };
  }
}

const shownState = { opacity: 1, x: 0, y: 0 };

type RevealProps = {
  children: ReactNode;
  className?: string;
  from?: RevealFrom;
  /** Seconds */
  delay?: number;
  /** Hero: animate on mount. Sections: animate when scrolled into view. */
  trigger?: "mount" | "view";
  /** Fraction of the element that must be visible before animating; higher needs more scroll. */
  viewportAmount?: number | "some" | "all";
};

export function Reveal({
  children,
  className,
  from = "up",
  delay = 0,
  trigger = "view",
  viewportAmount = 0.48,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const initial = hiddenState(from);

  if (trigger === "mount") {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={shownState}
        transition={{ duration: 1.12, delay, ease }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={shownState}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: 1.12, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Parent for staggered children (each child uses `variants={staggerItemVariants}`). */
export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.18 },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.98, ease },
  },
};

export const staggerItemFromLeftVariants = {
  hidden: { opacity: 0, x: -20, y: 0 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.98, ease },
  },
};
