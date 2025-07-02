import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | SeaLive Lojistik Veri Korunması',
  description: 'SeaLive Lojistik gizlilik politikası ve kişisel veri korunması uygulamaları. KVKK ve GDPR uyumlu veri işleme süreçlerimiz hakkında bilgi alın.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 