import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteConfig = {
  name: "SeaLive Yat Taşımacılığı & Lojistik",
  description: "Türkiye'nin lider yat taşımacılığı firması SeaLive. Mersin, İstanbul, Antalya'da profesyonel yat taşıma, tekne nakliyesi ve uluslararası lojistik hizmetleri. 15+ yıl deneyim.",
  url: "https://www.sealive.net",
  ogImage: "https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "yat taşımacılığı",
    "yat taşıma",
    "tekne taşımacılığı",
    "tekne nakliyesi",
    "mersin yat taşımacılığı",
    "istanbul yat taşıma",
    "antalya yat nakliyesi",
    "bodrum yat taşımacılığı",
    "uluslararası yat taşıma",
    "süperyat taşımacılığı",
    "yat taşıma fiyatları",
    "deniz taşımacılığı",
    "hava taşımacılığı",
    "kara taşımacılığı",
    "uluslararası lojistik",
    "freight forwarding",
    "SeaLive",
  ],
  authors: [{ name: "SeaLive" }],
  creator: "SeaLive",
  
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@sealivenet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SeaLive Yat Taşımacılığı & Lojistik",
            "alternateName": "SeaLive Lojistik",
            "url": "https://www.sealive.net",
            "logo": "https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png",
            "image": "https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png",
            "description": "Türkiye'nin lider yat taşımacılığı ve tekne nakliyesi firması. Mersin, İstanbul, Antalya'da profesyonel yat taşıma hizmetleri.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mersin",
              "addressRegion": "Mersin",
              "addressCountry": "TR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-505-092-09-99",
              "contactType": "customer service",
              "email": "yusuf@sealive.net",
              "areaServed": ["TR", "International"],
              "availableLanguage": ["Turkish", "English"]
            },
            "sameAs": [
              "https://www.sealive.net"
            ],
            "service": {
              "@type": "Service",
              "serviceType": "Yat Taşımacılığı, Tekne Nakliyesi, Uluslararası Lojistik",
              "provider": {
                "@type": "Organization",
                "name": "SeaLive Yat Taşımacılığı"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127",
              "bestRating": "5",
              "worstRating": "1"
            }
          }) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
