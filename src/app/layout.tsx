import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CinematicLoader } from "@/components/intro/CinematicLoader";
import { company } from "@/data/company";
import "./globals.css";

/**
 * Decides, before first paint, whether the cinematic loader plays this tab
 * session and which motion profile to use. Rendered as a plain <script> tag
 * (not next/script) so it is genuinely parser-blocking, executed by the
 * browser while streaming the server HTML -- next/script's `beforeInteractive`
 * strategy still routes through Next's client script-loader, which only runs
 * once hydration starts and does not guarantee execution before first paint.
 * `<html data-hw-intro>` must be set ahead of any hydration -- the loader
 * overlay and the homepage hero's ignite CSS (globals.css) both key off this
 * attribute, so there is no flash of the wrong state.
 */
const hwIntroInitScript = `(function () {
  try {
    var KEY = "hiswayIntroPlayed";
    if (sessionStorage.getItem(KEY) === "1") {
      document.documentElement.setAttribute("data-hw-intro", "none");
      return;
    }
    sessionStorage.setItem(KEY, "1");
    var reduced = false;
    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {}
    document.documentElement.setAttribute("data-hw-intro", reduced ? "reduced" : "full");
  } catch (e) {
    document.documentElement.setAttribute("data-hw-intro", "none");
  }
})();`;

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.name} | Custom Signs, Apparel & Promotional Products`,
    template: `%s | ${company.name}`,
  },
  description:
    "Custom signs, screen printing, embroidery, vehicle graphics, and promotional products for San Antonio businesses. Personal service from concept through completion.",
  robots: company.isConceptSite
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#161512",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${barlow.variable} ${barlowCondensed.variable} ${plexMono.variable} flex min-h-dvh flex-col antialiased`}
      >
        <script id="hw-intro-init" dangerouslySetInnerHTML={{ __html: hwIntroInitScript }} />
        <CinematicLoader />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
