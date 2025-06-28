'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/language-context'

export default function StatsSection() {
  const [inView, setInView] = useState(false)
  const [animationsComplete, setAnimationsComplete] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { translations } = useLanguage()

  // Professional istatistik verileri
  const statsData = [
    {
      id: 'experience',
      value: 15,
      suffix: '+',
      label: translations.stats.stats.years,
      backgroundImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Years of Excellence'
    },
    {
      id: 'partners',
      value: 40,
      suffix: '+',
      label: translations.stats.stats.shippingLines,
      backgroundImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Global Partners'
    },
    {
      id: 'volume',
      value: 500,
      suffix: 'K+',
      label: translations.stats.stats.teu,
      backgroundImage: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'TEU Processed'
    },
    {
      id: 'performance',
      value: 98.5,
      suffix: '%',
      label: translations.stats.stats.onTime,
      backgroundImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Success Rate'
    }
  ]

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationsComplete) {
          setInView(true)
          setTimeout(() => setAnimationsComplete(true), 3000)
        }
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [animationsComplete])

  // Counter Component
  const Counter = ({ target, suffix, duration = 2000 }: { 
    target: number
    suffix: string
    duration?: number
  }) => {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)

    useEffect(() => {
      if (!inView || hasStarted) return
      
      setHasStarted(true)
      let startTime: number | null = null
      
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Smooth easing
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = target * easeOutQuart
        
        setCount(currentValue)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(target)
        }
      }
      
      requestAnimationFrame(animate)
    }, [inView, target, duration, hasStarted])

    return (
      <span className="font-bold text-4xl lg:text-5xl">
        {suffix === '%' ? count.toFixed(1) : Math.floor(count).toLocaleString()}{suffix}
      </span>
    )
  }

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="professional-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#professional-grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center bg-yellow-100 text-yellow-600 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <span className="relative">
              {translations.stats.badge}
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full"></span>
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {translations.stats.title}
            <br />
            <span className="text-yellow-500">
              {translations.stats.titleHighlight}
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {translations.stats.description}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`group relative transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Main Card */}
              <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={stat.backgroundImage}
                    alt={`${stat.label} background`}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-15 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/90"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 text-center">
                  {/* Top Accent */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-500 rounded-b-full transition-all duration-300 group-hover:w-24"></div>

                  {/* Number */}
                  <div className="mb-4 mt-6">
                    <div className="text-gray-900">
                      <Counter 
                        target={stat.value} 
                        suffix={stat.suffix}
                        duration={2000 + index * 200}
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500">
                    {stat.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-yellow-500 rounded-b-2xl transition-all duration-300 group-hover:w-full w-0"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {translations.stats.cta.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {translations.stats.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                <span className="flex items-center justify-center gap-2">
                  {translations.stats.cta.requestQuote}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
              
              <button className="group bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-gray-300 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md">
                <span className="flex items-center justify-center gap-2">
                  {translations.stats.cta.viewServices}
                  <svg className="w-4 h-4 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
