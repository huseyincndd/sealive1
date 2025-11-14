import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yat Taşımacılığı | Profesyonel Yat Taşıma & Tekne Nakliyesi | SeaLive',
  description: 'Türkiye\'nin lider yat taşımacılığı firması SeaLive. Mersin, İstanbul, Antalya\'da güvenli yat taşıma ve tekne nakliyesi. Uygun fiyat, 7/24 hizmet, sigortalı taşıma. ☎ +90 505 092 09 99',
  keywords: [
    'yat taşımacılığı',
    'yat taşıma',
    'tekne taşımacılığı',
    'tekne nakliyesi',
    'mersin yat taşımacılığı',
    'istanbul yat taşıma',
    'antalya yat nakliyesi',
    'yat taşıma fiyatları',
    'uluslararası yat taşıma',
    'süperyat taşımacılığı',
    'yacht transportation turkey',
    'tekne taşıma',
    'yat lojistik',
    'güvenli yat taşıma',
    'sigortalı yat taşımacılığı',
  ],
  openGraph: {
    title: 'Yat Taşımacılığı | Profesyonel Yat Taşıma Hizmetleri',
    description: 'Türkiye\'nin en güvenilir yat taşımacılığı firması. Mersin, İstanbul, Antalya\'da profesyonel yat taşıma ve tekne nakliyesi hizmetleri.',
    url: 'https://www.sealive.net/services/yacht-transportation',
    siteName: 'SeaLive Lojistik',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png',
        width: 1200,
        height: 630,
        alt: 'SeaLive Yat Taşımacılığı',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yat Taşımacılığı - SeaLive',
    description: 'Profesyonel yat taşıma ve tekne nakliyesi hizmetleri. Güvenli, sigortalı, uygun fiyat.',
    images: ['https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png'],
  },
  alternates: {
    canonical: 'https://www.sealive.net/services/yacht-transportation',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function YachtTransportationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 