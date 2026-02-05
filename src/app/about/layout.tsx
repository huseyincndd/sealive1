import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hakkımızda | SeaLive Lojistik ve Taşımacılık Şirketi',
  description: 'SeaLive Lojistik olarak uluslararası taşımacılık sektöründeki deneyimimiz, vizyonumuz ve değerlerimiz. Güvenilir lojistik ortağınız olarak hizmetinizdeyiz.',
  keywords: [
    'SeaLive hakkında',
    'lojistik şirketi',
    'taşımacılık deneyimi',
    'uluslararası lojistik',
    'güvenilir taşımacılık',
    'lojistik çözümleri',
  ],
  alternates: {
    canonical: 'https://www.sealive.net/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 