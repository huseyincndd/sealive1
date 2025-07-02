import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Çerez Politikası | SeaLive Lojistik Website Kullanımı',
  description: 'SeaLive Lojistik web sitesi çerez kullanımı ve politikası. Website deneyiminizi iyileştirmek için kullandığımız çerezler hakkında detaylı bilgi.',
  alternates: {
    canonical: '/cookies',
  },
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 