'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

export default function CTASection() {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className={`mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <span className="relative">
                {translations.cta.badge}
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {translations.cta.title}
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {translations.cta.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col md:flex-row gap-6 justify-center mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Link href="/contact" className="group bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center justify-center">
                {translations.cta.getQuote}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link href="/contact">
              <button className="group border-2 border-gray-300 hover:border-yellow-400 hover:bg-yellow-400/10 text-gray-300 hover:text-yellow-400 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                <span className="flex items-center justify-center">
                  {translations.cta.contactExpert}
                  <Phone size={20} className="ml-2 group-hover:scale-110 transition-transform" />
                </span>
              </button>
            </Link>
          </div>

          {/* Contact Information */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Email */}
            <div className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail size={20} className="text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{translations.cta.infoCards.quotes}</h3>
              <p className="text-gray-400 text-sm">yusuf@sealive.net</p>
            </div>

            {/* Phone */}
            <div className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone size={20} className="text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{translations.cta.infoCards.support}</h3>
              <p className="text-gray-400 text-sm">+90 505 092 09 99</p>
            </div>

            {/* Office */}
            <div className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin size={20} className="text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{translations.cta.infoCards.office}</h3>
              <p className="text-gray-400 text-sm">Kuzeykent Mah. 31168 Sok. Ritim Ofis B Blok Kat:5 D:19</p>
              <p className="text-gray-400 text-sm">{translations.footer.address.city}</p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className={`mt-12 transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-gray-400 text-sm">
              {translations.cta.bottomText}
              <span className="text-yellow-400">{translations.cta.bottomTextHighlight}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 