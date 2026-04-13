import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ContactSection } from "@/components/ContactSection";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { HtmlLangSync, LocaleProvider } from "@/context/LocaleContext";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = rootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="font-sans flex min-h-full flex-col overflow-x-hidden bg-background text-foreground">
        <LocaleProvider>
          <HtmlLangSync />
          <JsonLd />
          <SiteHeader />
          {children}
          <ContactSection />
        </LocaleProvider>
      </body>
    </html>
  );
}
