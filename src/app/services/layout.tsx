import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lojistik Hizmetlerimiz | Yat, Deniz, Hava ve Kara Taşımacılığı',
  description: 'SeaLive Lojistik ile yat taşımacılığı, denizyolu kargo, havayolu express ve karayolu nakliyesi hizmetleri. Türkiye ve dünya genelinde profesyonel lojistik çözümleriniz.',
  keywords: [
    'lojistik hizmetleri',
    'taşımacılık çözümleri',
    'uluslararası nakliye',
    'freight forwarding',
    'SeaLive services',
    'kombine taşımacılık',
  ],
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 