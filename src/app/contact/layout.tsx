import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim ve Teklif Al | SeaLive Lojistik Danışmanlığı',
  description: 'SeaLive Lojistik ile iletişime geçin. Yat taşımacılığı, deniz-hava-kara lojistiği için ücretsiz teklif alın. Uzman ekibimizden 7/24 destek.',
  keywords: [
    'lojistik teklifi',
    'taşımacılık fiyatı',
    'SeaLive iletişim',
    'lojistik danışmanlığı',
    'nakliye teklifi',
    'ücretsiz fiyat teklifi',
  ],
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 