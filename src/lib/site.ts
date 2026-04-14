/** Canonical site URL — set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://sovereign-roofing.vercel.app) */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

/** Public inbox for forms and mailto links — override in Vercel with `NEXT_PUBLIC_CONTACT_EMAIL`. */
export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
  "sovereignroofing.miami@gmail.com";

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
