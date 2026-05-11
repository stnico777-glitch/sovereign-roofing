import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ContactSection } from "@/components/ContactSection";
import { SiteHeader } from "@/components/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { HtmlLangSync, LocaleProvider } from "@/context/LocaleContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { rootMetadata } from "@/lib/metadata";
import { getThemeBootstrapScript } from "@/lib/theme";
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
      suppressHydrationWarning
    >
      <head>
        <script
          // Apply saved theme before first paint — see `THEME_STORAGE_KEY` in `@/lib/theme`
          dangerouslySetInnerHTML={{
            __html: getThemeBootstrapScript(),
          }}
        />
      </head>
      <body className="font-sans flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>
          <LocaleProvider>
            <HtmlLangSync />
            <JsonLd />
            <SiteHeader />
            {/* `overflow-x-hidden` on `body` forces non-visible overflow-y and clips fixed header paint (e.g. scaled logo + drop-shadow). */}
            <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-x-hidden">
              {children}
              <ContactSection />
            </div>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
