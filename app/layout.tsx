import type { Metadata } from "next";
import { Outfit, Montserrat } from "next/font/google";
import "./globals.css";
import { BUSINESS, SITE_URL, localBusinessJsonLd } from "../lib/business";
import { Header } from "./components/Header";
import { BookNowBanner } from "./components/BookNowBanner";
import { Footer } from "./components/Footer";
import { TaglineBanner } from "./components/TaglineBanner";
import { ChromeGate } from "./components/ChromeGate";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: BUSINESS.name,
    template: `%s | ${BUSINESS.name}`,
  },
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name, url: SITE_URL }],
  publisher: BUSINESS.name,
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <ChromeGate>
          <Header />
        </ChromeGate>
        {children}
        <ChromeGate>
          <TaglineBanner />
          <Footer />
          <BookNowBanner />
        </ChromeGate>
      </body>
    </html>
  );
}
