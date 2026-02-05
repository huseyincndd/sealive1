import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Denizyolu Taşımacılığı | FCL & LCL Konteyner Lojistiği | SeaLive',
  description: 'FCL ve LCL konteyner taşımacılığı, uluslararası deniz yolu kargo ve lojistik hizmetleri. SeaLive ile dünya çapında güvenilir ve ekonomik deniz taşımacılığı çözümleri.',
  keywords: [
    'denizyolu taşımacılığı',
    'konteyner taşımacılığı',
    'FCL taşımacılığı',
    'LCL taşımacılığı',
    'uluslararası deniz kargo',
    'deniz yolu lojistik',
    'konteyner nakliyesi',
    'ocean freight',
    'sea cargo',
  ],
  alternates: {
    canonical: 'https://www.sealive.net/services/ocean-freight',
  },
}

export default function OceanFreightLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 