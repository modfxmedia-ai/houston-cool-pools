import type { Metadata } from "next";
import Script from "next/script";
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
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Google tag (gtag.js) */}
        <Script
          id="ga4-gtag-js"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZV23BE77HG"
          strategy="afterInteractive"
        />
        <Script id="ga4-gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZV23BE77HG');
          `}
        </Script>
        <Script
          id="cometly-pixel"
          src="https://js.comet-serve.com/script.js?uid=6678fb-6755399442000000-d2fba5-s"
          strategy="afterInteractive"
        />
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1350205399658487');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1350205399658487&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
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
          {/* LeadConnector chat widget - hidden on standalone landing pages via ChromeGate */}
          <Script
            id="leadconnector-chat-widget"
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id="6a3ede17af23a3deea23eb8c"
            strategy="afterInteractive"
          />
        </ChromeGate>
      </body>
    </html>
  );
}
