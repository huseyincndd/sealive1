'use client'

import { useEffect, useRef, useState } from 'react'
import { Ship, Plane, Truck, Anchor } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { translations } = useLanguage()

  const services = [
    {
      icon: Ship,
      title: translations.services.oceanFreight.title,
      description: translations.services.oceanFreight.description,
      backgroundImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Plane,
      title: translations.services.airFreight.title,
      description: translations.services.airFreight.description,
      backgroundImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      color: 'from-sky-600 to-blue-700'
    },
    {
      icon: Truck,
      title: translations.services.roadFreight.title,
      description: translations.services.roadFreight.description,
      backgroundImage: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      color: 'from-green-600 to-emerald-700'
    },
    {
      icon: Anchor,
      title: "Luxury Yacht Transportation",
      subtitle: "Premium Marine Services",
      description: "Specialized yacht shipping with white-glove service, global coverage, and complete insurance protection for luxury vessels.",
      backgroundImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      color: 'from-purple-600 to-indigo-700'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
                      <div className="inline-flex items-center bg-yellow-100 text-yellow-600 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <span className="relative">
                {translations.services.badge}
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-500 rounded-full"></span>
              </span>
            </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {translations.services.title}
            <span className="text-yellow-500"> {translations.services.titleHighlight}</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translations.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className={`group relative transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Main Card */}
                <div className={`relative h-80 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group-hover:border-gray-300 ${
                  hoveredCard === index ? 'transform -translate-y-2' : ''
                }`}>
                  
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.backgroundImage}
                      alt={`${service.title} background`}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/20"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    {/* Top Section */}
                    <div>
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg mb-4 transition-all duration-300 ${
                        hoveredCard === index ? 'scale-110' : ''
                      }`}>
                        <IconComponent size={24} className="text-gray-700" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Bottom Section */}
                    <div>
                      {/* Description */}
                      <p className="text-gray-100 text-sm leading-relaxed mb-4 drop-shadow">
                        {service.description}
                      </p>
                      
                      {/* CTA Button */}
                      <button className="inline-flex items-center text-white font-semibold text-sm group-hover:text-yellow-300 transition-colors duration-300">
                        {translations.services.learnMore}
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Accent Line */}
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} transition-all duration-300 ${
                      hoveredCard === index ? 'w-full' : 'w-16'
                    }`}></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Professional CTA */}
        <div className={`text-center transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative bg-white border border-gray-200 rounded-lg px-8 py-4 shadow-sm hover:shadow-md transition-all duration-300 max-w-3xl mx-auto">
            <div className="relative z-10">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                {translations.services.cta.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm max-w-2xl mx-auto">
                {translations.services.cta.description}
              </p>
              <div className="flex flex-row gap-3 justify-center">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                  {translations.services.cta.customQuote}
                </button>
                <button className="border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                  {translations.services.cta.consultation}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 