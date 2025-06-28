import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import AboutSection from '@/components/AboutSection'
import ParallaxSection from '@/components/ParallaxSection'
import ServicesSection from '@/components/ServicesSection'
import TruckParallaxSection from '@/components/TruckParallaxSection'
import StatsSection from '@/components/StatsSection'
import TabletScrollSection from '@/components/TabletScrollSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ParallaxSection />
      <ServicesSection />
      <TruckParallaxSection />
      <StatsSection />
      <TabletScrollSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
