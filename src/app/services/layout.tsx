import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lojistik Hizmetlerimiz | Deniz, Hava, Kara Taşımacılığı | SeaLive',
  description: 'SeaLive lojistik hizmetleri: Denizyolu, havayolu, karayolu taşımacılığı ve özel yat nakliye çözümleri. Türkiye genelinde ve uluslararası freight forwarding hizmetleri. ☎ +90 505 092 09 99',
  keywords: [
    'lojistik hizmetleri',
    'freight forwarding',
    'denizyolu taşımacılığı',
    'havayolu taşımacılığı',
    'kara taşımacılığı',
    'uluslararası taşımacılık',
    'lojistik çözümleri',
    'cargo services',
    'ocean freight',
    'air freight',
    'land transport',
    'türkiye lojistik',
  ],
  openGraph: {
    title: 'Lojistik Hizmetlerimiz | Deniz, Hava, Kara Taşımacılığı',
    description: 'SeaLive profesyonel lojistik hizmetleri: Denizyolu, havayolu, karayolu taşımacılığı. Türkiye ve dünya genelinde güvenilir taşımacılık çözümleri.',
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