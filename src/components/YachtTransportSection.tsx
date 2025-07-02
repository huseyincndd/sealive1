'use client'

import { useEffect, useRef, useState } from 'react'
import { Anchor, Shield, Globe } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

export default function YachtTransportSection() {
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

  if (!translations.yachtTransport) {
    return null
  }

  const { badge, title, description, feature1, feature2, feature3, cta } = translations.yachtTransport

  return (
    <section ref={sectionRef} className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Split Background Images */}
      <div className="absolute inset-0">
        {/* Left Half - Yacht in marina */}
        <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden">
          <img 
            src="https://image.yachtcharterfleet.com/w700/h700/q90/ca/kc7230c62/article/content/1685412.jpg"
            alt="Marina'da bekleyen lüks yat - profesyonel yat taşımacılığı hizmetleri"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        {/* Right Half - Yacht transport/shipping */}
        <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Yat taşımacılığı ve deniz nakliyesi - uluslararası tekne lojistiği"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`transform transition-all duration-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Anchor size={14} className="mr-2" />
              {badge}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {title}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield size={20} className="text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature1.title}</h3>
              <p className="text-gray-400 text-sm">{feature1.description}</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe size={20} className="text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature2.title}</h3>
              <p className="text-gray-400 text-sm">{feature2.description}</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Anchor size={20} className="text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature3.title}</h3>
              <p className="text-gray-400 text-sm">{feature3.description}</p>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/contact">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg">
                {cta}
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
} 