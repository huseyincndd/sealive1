'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { translations } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {translations.about.badge}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {translations.about.title}
              <span className="text-yellow-500"> {translations.about.titleHighlight}</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {translations.about.description}
            </p>
            
            <Link href="/about">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg">
                {translations.hero.learnMore}
              </button>
            </Link>
          </div>
          
          {/* Right Image - Simple Left to Right Reveal */}
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://www.xeneta.com/hs-fs/hubfs/shipping-logistics-market.jpeg?width=1200&name=shipping-logistics-market.jpeg"
                alt="Sealive Lojistik - Freight forwarding and container logistics"
                className={`w-full h-full object-cover transition-all duration-1500 ease-out ${
                  isVisible 
                    ? 'clip-path-reveal-full' 
                    : 'clip-path-reveal-none'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for clip-path animation */}
      <style jsx>{`
        .clip-path-reveal-none {
          clip-path: inset(0 100% 0 0);
        }
        .clip-path-reveal-full {
          clip-path: inset(0 0% 0 0);
        }
      `}</style>
    </section>
  )
} 