import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hizmet Şartları | SeaLive Lojistik Kullanım Koşulları',
  description: 'SeaLive Lojistik hizmet şartları ve kullanım koşulları. Taşımacılık hizmetlerimiz için geçerli yasal şartlar ve sorumluluklar hakkında bilgi.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 