import {
  defaultDescription,
  defaultTitle,
  siteUrl,
} from "@/lib/site";

export function JsonLd() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Sovereign Roofing",
      description: defaultDescription,
      url: siteUrl,
      telephone: "+1-754-329-4412",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Florida",
      },
      knowsAbout: [
        "Roof replacement",
        "Roof repair",
        "Shingle roofing",
        "Metal roofing",
        "Roof inspections",
        "Storm damage restoration",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: defaultTitle,
      description: defaultDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "RoofingContractor",
      "@id": `${siteUrl}/#business`,
      name: "Sovereign Roofing",
      url: siteUrl,
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      serviceType: [
        "Residential roofing",
        "Roof replacement",
        "Roof repair",
        "Roof inspections",
      ],
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
