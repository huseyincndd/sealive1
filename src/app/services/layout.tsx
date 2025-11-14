import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yat Taşımacılığı ve Lojistik Hizmetleri | Deniz, Hava, Kara Taşıma',
  description: 'SeaLive ile yat taşımacılığı, tekne nakliyesi, denizyolu, havayolu ve karayolu taşımacılığı hizmetleri. Mersin, İstanbul, Antalya\'da profesyonel lojistik çözümleri. ☎ +90 505 092 09 99',
  keywords: [
    'yat taşımacılığı',
    'yat taşıma',
    'tekne nakliyesi',
    'tekne taşımacılığı',
    'denizyolu taşımacılığı',
    'havayolu taşımacılığı',
    'kara taşımacılığı',
    'lojistik hizmetleri',
    'uluslararası taşımacılık',
    'freight forwarding',
    'mersin yat taşımacılığı',
    'istanbul yat taşıma',
  ],
  openGraph: {
    title: 'Yat Taşımacılığı ve Lojistik Hizmetleri | SeaLive',
    description: 'Profesyonel yat taşımacılığı, tekne nakliyesi ve uluslararası lojistik hizmetleri. Türkiye ve dünya genelinde güvenilir taşımacılık çözümleri.',
    url: 'https://www.sealive.net/services',
    siteName: 'SeaLive Lojistik',
    locale: 'tr_TR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.sealive.net/services',
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

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 