import { Metadata } from 'next'
import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import AboutSection from '@/components/AboutSection'
import ParallaxSection from '@/components/ParallaxSection'
import ServicesSection from '@/components/ServicesSection'
import TruckParallaxSection from '@/components/TruckParallaxSection'
import StatsSection from '@/components/StatsSection'
import YachtTabletScrollSection from '@/components/TabletScrollSection'
import YachtTransportSection from '@/components/YachtTransportSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Yat Taşımacılığı | Mersin İstanbul Antalya Yat Taşıma | SeaLive Lojistik',
  description: 'SeaLive ile profesyonel yat taşımacılığı ve tekne nakliyesi. Mersin, İstanbul, Antalya\'da güvenli yat taşıma hizmetleri. Uluslararası lojistik ve denizyolu taşımacılığı. ☎ +90 505 092 09 99',
  keywords: [
    'yat taşımacılığı',
    'yat taşıma',
    'tekne taşımacılığı',
    'tekne nakliyesi',
    'mersin yat taşımacılığı',
    'istanbul yat taşıma',
    'antalya yat nakliyesi',
    'uluslararası yat taşıma',
    'denizyolu taşımacılığı',
    'havayolu taşımacılığı',
    'kara taşımacılığı',
    'freight forwarding',
    'lojistik hizmetleri',
  ],
  openGraph: {
    title: 'Yat Taşımacılığı | SeaLive Profesyonel Yat Taşıma Hizmetleri',
    description: 'Türkiye\'nin lider yat taşımacılığı firması SeaLive. Mersin, İstanbul, Antalya ve tüm Türkiye\'de güvenilir yat taşıma ve tekne nakliyesi hizmetleri.',
    url: 'https://www.sealive.net',
    siteName: 'SeaLive Lojistik',
    locale: 'tr_TR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.sealive.net',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* SEO Ana Başlık - Görsel olarak gizli ama SEO için kritik */}
      <h1 className="sr-only">
        Yat Taşımacılığı - Mersin İstanbul Antalya Yat Taşıma ve Tekne Nakliyesi | SeaLive Lojistik
      </h1>
      
      <Header />
      <HeroSlider />
      <AboutSection />
      <ParallaxSection />
      <ServicesSection />
      <YachtTransportSection />
      <TruckParallaxSection />
      <StatsSection />
      <YachtTabletScrollSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
