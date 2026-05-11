/**
 * Instagram feed on the homepage — pick one:
 *
 * 1) **Elfsight** (recommended): `NEXT_PUBLIC_ELFSIGHT_INSTAGRAM_WIDGET_ID` — UUID from the
 *    widget URL (`dash.elfsight.com/widget/<uuid>`) or install code (`elfsight-app-<uuid>`).
 *
 * 2) **EmbedSocial**: `NEXT_PUBLIC_INSTAGRAM_EMBED_REF` and/or `NEXT_PUBLIC_INSTAGRAM_EMBED_IFRAME_URL`.
 *
 * If Elfsight is set, it takes priority over the EmbedSocial vars.
 */
export function getInstagramEmbedConfig() {
  const elfsightWidgetId =
    process.env.NEXT_PUBLIC_ELFSIGHT_INSTAGRAM_WIDGET_ID?.trim() || null;
  const embedIframeUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_EMBED_IFRAME_URL?.trim() || null;
  const rawRef = process.env.NEXT_PUBLIC_INSTAGRAM_EMBED_REF?.trim();
  const embedRef = rawRef ? rawRef : null;
  return { elfsightWidgetId, embedRef, embedIframeUrl };
}
