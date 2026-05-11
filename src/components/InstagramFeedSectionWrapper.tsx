import { getInstagramEmbedConfig } from "@/lib/instagram-embed";
import { InstagramFeedSection } from "@/components/InstagramFeedSection";

/** Server: reads embed env; client child uses locale for copy. */
export function InstagramFeedSectionWrapper() {
  const { elfsightWidgetId, embedRef, embedIframeUrl } =
    getInstagramEmbedConfig();
  return (
    <InstagramFeedSection
      elfsightWidgetId={elfsightWidgetId}
      embedRef={embedRef}
      embedIframeUrl={embedIframeUrl}
    />
  );
}
