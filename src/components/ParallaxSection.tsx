'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

export default function ParallaxSection() {
  const [offsetY, setOffsetY] = useState(0)
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
        const rate = scrolled * (isMobile ? 0.1 : 0.3)
        setOffsetY(rate)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  return (
    <section 
      ref={sectionRef}
      className="relative h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-[130%]"
        style={{
          transform: isMobile 
            ? `translateY(${offsetY - 200}px)` 
            : `translateY(${offsetY - 500}px)`,
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Uluslararası konteyner limanı ve kargo gemileri - deniz taşımacılığı lojistik merkezi"
          className="w-full h-full object-cover"
          style={{
            objectPosition: isMobile ? 'center 20%' : 'center center'
          }}
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          {translations.parallax.title}
        </h2>
        
        <p className="text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
          {translations.parallax.subtitle}
        </p>
        
        <Link href="/contact">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
            {translations.hero.getQuote}
          </button>
        </Link>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
} 