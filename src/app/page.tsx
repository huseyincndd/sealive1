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
  title: 'Yat Taşımacılığı ve Uluslararası Denizyolu Lojistiği | SeaLive',
  description: 'SeaLive Lojistik: Yat taşımacılığı, uluslararası denizyolu ve havayolu nakliyatında lider çözümler. Proje ve parsiyel kargo için uzman ekibimizden teklif alın.',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* SEO Ana Başlık - Görsel olarak gizli ama SEO için kritik */}
      <h1 className="sr-only">
        SeaLive Lojistik - Yat Taşımacılığı ve Uluslararası Denizyolu Lojistiği Hizmetleri
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
