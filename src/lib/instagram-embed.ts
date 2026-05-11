/**
 * Homepage Instagram feed via **Elfsight** only.
 *
 * Set `NEXT_PUBLIC_ELFSIGHT_INSTAGRAM_WIDGET_ID` to the widget UUID from
 * `dash.elfsight.com/widget/<uuid>` or the install snippet (`elfsight-app-<uuid>`).
 * Connect your production domain in the Elfsight dashboard so the widget loads on the live site.
 */
export function getInstagramEmbedConfig() {
  const elfsightWidgetId =
    process.env.NEXT_PUBLIC_ELFSIGHT_INSTAGRAM_WIDGET_ID?.trim() || null;
  return { elfsightWidgetId };
}
