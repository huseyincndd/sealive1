import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uluslararası Yat Taşımacılığı ve Lojistik Hizmetleri',
  description: 'Profesyonel yat taşıma, tekne nakliyesi ve denizaşırı transfer çözümleri. SeaLive ile lüks yatlarınız sigortalı ve güvenli bir şekilde dünya çapında seyahat etsin.',
  alternates: {
    canonical: '/services/yacht-transportation',
  },
}

export default function YachtTransportationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 