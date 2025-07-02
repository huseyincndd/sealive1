import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fiyat Teklifi Al | SeaLive Lojistik Ücretsiz Hesaplama',
  description: 'SeaLive Lojistik hizmetleri için anında fiyat teklifi alın. Yat taşımacılığı, deniz-hava-kara nakliyesi için ücretsiz maliyet hesaplaması ve detaylı teklif.',
  keywords: [
    'lojistik fiyat teklifi',
    'nakliye ücreti hesaplama',
    'taşımacılık maliyeti',
    'SeaLive teklif',
    'freight quote',
    'lojistik fiyat hesaplama',
  ],
  alternates: {
    canonical: '/quote',
  },
}

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 