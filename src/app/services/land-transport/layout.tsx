import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karayolu Nakliyesi | TIR Taşımacılığı | SeaLive',
  description: 'Komple ve parsiyel karayolu nakliyesi, TIR taşımacılığı ve kara lojistiği çözümleri. SeaLive ile Türkiye ve Avrupa genelinde güvenilir kara taşımacılığı.',
  keywords: [
    'karayolu nakliyesi',
    'kara taşımacılığı',
    'TIR taşımacılığı',
    'komple yük taşıma',
    'parsiyel yük taşıma',
    'kamyon taşımacılığı',
    'kara lojistiği',
    'overland transport',
    'land freight',
  ],
  alternates: {
    canonical: 'https://www.sealive.net/services/land-transport',
  },
}

export default function LandTransportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 