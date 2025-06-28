'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/language-context'

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { translations } = useLanguage()

  const stats = [
    {
      number: 15,
      suffix: '+',
      label: translations.stats.stats.years,
      backgroundImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      color: 'from-blue-600 to-blue-800',
      lightColor: 'from-blue-50 to-blue-100'
    },
    {
      number: 40,
      suffix: '+',
      label: translations.stats.stats.shippingLines,
      backgroundImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      color: 'from-navy-600 to-slate-800',
      lightColor: 'from-slate-50 to-slate-100'
    },
    {
      number: 500,
      suffix: 'K+',
      label: translations.stats.stats.teu,
      backgroundImage: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      color: 'from-gray-600 to-gray-800',
      lightColor: 'from-gray-50 to-gray-100'
    },
    {
      number: 98.5,
      suffix: '%',
      label: translations.stats.stats.onTime,
      backgroundImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      color: 'from-yellow-600 to-amber-700',
      lightColor: 'from-yellow-50 to-amber-50'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  const AnimatedNumber = ({ number, suffix, isVisible, delay }: { 
    number: number, 
    suffix: string, 
    isVisible: boolean,
    delay: number 
  }) => {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)

    useEffect(() => {
      if (!isVisible || hasStarted) return

      setHasStarted(true)
      const timer = setTimeout(() => {
        const duration = 2000
        const steps = 50
        const increment = number / steps
        let current = 0

        const counter = setInterval(() => {
          current += increment
          if (current >= number) {
            setCount(number)
            clearInterval(counter)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(counter)
      }, delay)

      return () => clearTimeout(timer)
    }, [isVisible, number, delay, hasStarted])

    return (
      <span className="inline-block">
        {suffix === '%' ? count.toFixed(1) : count.toLocaleString()}{suffix}
      </span>
    )
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-white border border-gray-200 text-gray-600 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
            <span className="relative">
              {translations.stats.badge}
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {translations.stats.title}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-800"> {translations.stats.titleHighlight}</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translations.stats.description}
          </p>
        </div>

        {/* Professional Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`group transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Main Card */}
              <div className={`relative bg-white border border-gray-200 rounded-xl overflow-hidden text-center shadow-sm hover:shadow-lg transition-all duration-500 group-hover:border-gray-300 ${
                hoveredIndex === index ? 'transform -translate-y-2' : ''
              }`}>
                
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={stat.backgroundImage}
                    alt={`${stat.label} background`}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Subtle Top Accent */}
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r ${stat.color} rounded-b-full transition-all duration-300 ${
                    hoveredIndex === index ? 'w-24' : ''
                  }`}></div>

                  {/* Number Display */}
                  <div className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-3 mt-6`}>
                    <AnimatedNumber 
                      number={stat.number} 
                      suffix={stat.suffix} 
                      isVisible={isVisible}
                      delay={index * 200 + 500}
                    />
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-base font-semibold text-gray-700 mb-4">
                    {stat.label}
                  </h3>

                  {/* Subtle Description Line */}
                  <div className={`w-8 h-px bg-gradient-to-r ${stat.color} mx-auto transition-all duration-300 ${
                    hoveredIndex === index ? 'w-16' : ''
                  }`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative bg-white border border-gray-200 rounded-lg px-8 py-4 shadow-sm hover:shadow-md transition-all duration-300 max-w-3xl mx-auto">
            
            <div className="relative z-10">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                {translations.stats.cta.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm max-w-2xl mx-auto">
                {translations.stats.cta.description}
              </p>
              <div className="flex flex-row gap-3 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                  {translations.stats.cta.requestQuote}
                </button>
                <button className="border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                  {translations.stats.cta.viewServices}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 