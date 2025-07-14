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
  name: "SeaLive Lojistik & Taşımacılık",
  description: "SeaLive ile yat taşımacılığı, uluslararası deniz ve hava yolu kargo hizmetleri. Proje kargo, parsiyel ve komple yükleriniz için güvenilir lojistik çözümleri.",
  url: "https://www.sealive.net",
  ogImage: "https://www.sealive.net/og-image.jpg",
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
    "tekne nakliyesi",
    "deniz taşımacılığı",
    "hava taşımacılığı",
    "kara taşımacılığı",
    "uluslararası lojistik",
    "freight forwarding",
    "proje kargo",
    "komple yük taşımacılığı",
    "parsiyel yük taşımacılığı",
    "uluslararası nakliye",
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
            "name": "SeaLive Lojistik & Taşımacılık",
            "url": "https://www.sealive.net",
            "logo": "https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-505-092-09-99",
              "contactType": "customer service"
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
