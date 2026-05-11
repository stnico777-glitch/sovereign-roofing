/** Canonical site URL — set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://sovereign-roofing.vercel.app) */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

/** Public inbox for forms and mailto links — override in Vercel with `NEXT_PUBLIC_CONTACT_EMAIL`. */
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
  "sfernandez@sovroof.com";

/** Instagram profile path (no @). Override with `NEXT_PUBLIC_INSTAGRAM_HANDLE`. */
export const instagramHandle =
  process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE?.trim().replace(/^@/, "") ||
  "sovereignroofing_";

export const routes = {
  home: "/",
  projects: "/projects",
  services: "/services",
  about: "/about",
  reviews: "/reviews",
  contact: "/contact",
  /** Service areas directory — primary URL (replaces legacy `/location`) */
  location: "/service-areas",
} as const;

export const defaultTitle =
  "Sovereign Roofing — Residential Roofing in South Florida";

export const defaultDescription =
  "Roof replacement, repairs, inspections, and storm-ready systems. Sovereign Roofing delivers honest estimates, clean job sites, and workmanship you can see from the curb.";

/** Homepage hero: loop first N seconds of `/hero.mp4` before restarting. */
export const heroOpeningClipDurationSec = 14;

/** Portfolio “On site” dual-strip reel: each clip loops its first N seconds (forward + reversed). */
export const portfolioReelClipDurationSec = 7;
