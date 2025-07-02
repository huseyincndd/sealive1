'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

export default function TruckParallaxSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { translations } = useLanguage()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY
        // Mobile için daha yavaş parallax efekti
        const rate = scrolled * (isMobile ? 0.08 : 0.2)
        setScrollY(rate)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  return (
    <section 
      ref={sectionRef}
      className="relative h-[500px] flex items-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-[110%]"
        style={{
          transform: isMobile 
            ? `translateY(${scrollY - 460}px)` 
            : `translateY(${scrollY - 700}px)`,
        }}
      >
        <img 
          src="https://villaqrmenu.b-cdn.net/sealive/sealivetruck.png"
          alt="SeaLive lojistik kamyonu - karayolu taşımacılığı ve kara nakliyesi hizmetleri"
          className="w-full h-full object-cover"
          style={{
            objectPosition: isMobile ? 'right center' : 'center center'
          }}
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content - Sol tarafa yerleştirildi */}
      <div className="relative z-10 text-white px-4 max-w-6xl mx-auto w-full">
        <div className="max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {translations.truckParallax.title}
          </h2>
          
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            {translations.truckParallax.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
                {translations.hero.getQuote}
              </button>
            </Link>
            <Link href="/services">
              <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 cursor-pointer">
                {translations.hero.learnMore}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 