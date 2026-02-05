import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Havayolu Kargo | Express Hava Taşımacılığı | SeaLive',
  description: 'Express havayolu kargo, uluslararası hava taşımacılığı ve hızlı lojistik çözümleri. SeaLive ile kritik yüklerinizi dünya çapında güvenli ve hızlı ulaştırın.',
  keywords: [
    'havayolu kargo',
    'hava taşımacılığı',
    'express kargo',
    'uluslararası hava yolu',
    'hızlı lojistik',
    'havayolu lojistik',
    'air freight',
    'cargo uçağı',
    'air cargo',
  ],
  alternates: {
    canonical: 'https://www.sealive.net/services/air-freight',
  },
}

export default function AirFreightLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 