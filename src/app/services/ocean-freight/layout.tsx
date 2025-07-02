import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uluslararası Denizyolu Taşımacılığı ve Konteyner Lojistiği',
  description: 'FCL ve LCL konteyner taşımacılığı, uluslararası deniz yolu kargo ve lojistik hizmetleri. SeaLive ile dünya çapında güvenilir ve ekonomik deniz taşımacılığı çözümleri.',
  keywords: [
    'denizyolu taşımacılığı',
    'konteyner taşımacılığı',
    'FCL taşımacılığı',
    'LCL taşımacılığı',
    'uluslararası deniz kargo',
    'deniz yolu lojistik',
    'konteyner nakliyesi',
  ],
  alternates: {
    canonical: '/services/ocean-freight',
  },
}

export default function OceanFreightLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 