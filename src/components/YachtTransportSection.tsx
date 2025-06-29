'use client'

import { useEffect, useRef, useState } from 'react'
import { Anchor, Shield, Globe } from 'lucide-react'

export default function YachtTransportSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Split Background Images */}
      <div className="absolute inset-0">
        {/* Left Half - Yacht in marina */}
        <div className="absolute left-0 top-0 w-1/2 h-full">
          <div 
            className="w-full h-full bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')" }}
          />
        </div>
        
        {/* Right Half - Yacht transport/shipping */}
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <div 
            className="w-full h-full bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')" }}
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
              Specialized Marine Transport
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Professional Yacht Transportation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Secure, insured, and specialized transport services for luxury vessels worldwide.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield size={20} className="text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Full Insurance</h3>
              <p className="text-gray-400 text-sm">Comprehensive coverage up to $50M vessel value</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe size={20} className="text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global Network</h3>
              <p className="text-gray-400 text-sm">Specialized marine terminals in 50+ countries</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Anchor size={20} className="text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Handling</h3>
              <p className="text-gray-400 text-sm">Dedicated yacht transport specialists</p>
            </div>

          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Request Yacht Quote
            </button>
          </div>

        </div>
      </div>
    </section>
  )
} 