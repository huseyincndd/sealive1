'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Ship, Clock, Shield, Globe, CheckCircle, ArrowRight, Package, Truck } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Uluslararası Denizyolu Taşımacılığı ve Konteyner Lojistiği",
  "description": "FCL (Tam Konteyner Yükü) ve LCL (Parsiyel Konteyner Yükü) dahil olmak üzere kapsamlı deniz yolu kargo ve lojistik hizmetleri. Dünya çapında 500+ limana güvenli ve ekonomik taşımacılık.",
  "provider": {
    "@type": "Organization",
    "name": "SeaLive Lojistik & Taşımacılık",
    "url": "https://www.sealive.net"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  },
  "serviceType": "Ocean Freight",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Denizyolu Taşımacılık Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "FCL (Full Container Load) Taşımacılığı",
          "description": "Tam konteyner yükü ile ekonomik ve güvenli uluslararası taşımacılık"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LCL (Less than Container Load) Taşımacılığı",
          "description": "Parsiyel yükler için konsolide deniz taşımacılığı hizmetleri"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Proje Kargo Taşımacılığı",
          "description": "Ağır ve büyük boyutlu yükler için özel deniz taşımacılığı çözümleri"
        }
      }
    ]
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Servis Kapsamı",
      "value": "500+ Global Liman"
    },
    {
      "@type": "PropertyValue", 
      "name": "Konteyner Tipleri",
      "value": "20ft, 40ft, 40ft HC, Özel Konteynerler"
    },
    {
      "@type": "PropertyValue",
      "name": "Haftalık Sefer",
      "value": "1000+ Sefer"
    }
  ]
};

export default function OceanFreightPage() {
  const { translations } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const oceanServices = [
    {
      title: translations.oceanFreightPage.servicesSection.services[0].title,
      description: translations.oceanFreightPage.servicesSection.services[0].description,
      features: translations.oceanFreightPage.servicesSection.services[0].features,
      icon: Package,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: translations.oceanFreightPage.servicesSection.services[1].title,
      description: translations.oceanFreightPage.servicesSection.services[1].description,
      features: translations.oceanFreightPage.servicesSection.services[1].features,
      icon: Ship,
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: translations.oceanFreightPage.servicesSection.services[2].title,
      description: translations.oceanFreightPage.servicesSection.services[2].description,
      features: translations.oceanFreightPage.servicesSection.services[2].features,
      icon: Globe,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const routes = [
    { from: "Europe", to: "Middle East", time: "7-10 days", frequency: "Daily" },
    { from: "Asia", to: "Europe", time: "14-21 days", frequency: "Daily" },
    { from: "North America", to: "Asia", time: "12-18 days", frequency: "Daily" },
    { from: "Middle East", to: "Africa", time: "5-8 days", frequency: "3x/week" }
  ]

  const specifications = [
    { label: "Global Ports", value: "500+" },
    { label: "Container Types", value: "All Sizes" },
    { label: "Weekly Departures", value: "1000+" },
    { label: "Transit Coverage", value: "Worldwide" }
  ]

  const advantages = [
    {
      icon: Shield,
      title: translations.oceanFreightPage.advantagesSection.advantages[0].title,
      description: translations.oceanFreightPage.advantagesSection.advantages[0].description
    },
    {
      icon: Clock,
      title: translations.oceanFreightPage.advantagesSection.advantages[1].title,
      description: translations.oceanFreightPage.advantagesSection.advantages[1].description
    },
    {
      icon: Globe,
      title: translations.oceanFreightPage.advantagesSection.advantages[2].title,
      description: translations.oceanFreightPage.advantagesSection.advantages[2].description
    },
    {
      icon: Truck,
      title: translations.oceanFreightPage.advantagesSection.advantages[3].title,
      description: translations.oceanFreightPage.advantagesSection.advantages[3].description
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Konteyner limanı ve kargo gemileri - deniz taşımacılığı hizmetleri"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-800/70 to-gray-900/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium mb-8 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <Ship size={16} className="mr-2" />
              {translations.oceanFreightPage.hero.badge}
            </div>
            
            <h1 className={`text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {translations.oceanFreightPage.hero.title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                {translations.oceanFreightPage.hero.titleHighlight}
              </span>
            </h1>
            
            <p className={`text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 transition-all duration-700 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {translations.oceanFreightPage.hero.description}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group transform hover:scale-105">
                {translations.oceanFreightPage.hero.getQuote}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                {translations.oceanFreightPage.hero.trackShipment}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {translations.oceanFreightPage.specifications.map((spec, index) => (
              <div key={index} className="text-center" style={{ transitionDelay: `${300 + index * 100}ms` }}>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{spec.value}</div>
                <div className="text-gray-600 font-medium">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-20 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {translations.oceanFreightPage.servicesSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.oceanFreightPage.servicesSection.description}
            </p>
          </div>

          <div className="space-y-16">
            {oceanServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''} transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: `${500 + index * 200}ms` }}>
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} space-y-6`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-slate-400/20 border border-blue-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent size={28} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle size={18} className="text-blue-500" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-2xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-20 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {translations.oceanFreightPage.routesSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.oceanFreightPage.routesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <div key={index} className={`bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: `${700 + index * 100}ms` }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {route.from.charAt(0)}
                    </div>
                    <div className="text-gray-400">
                      <ArrowRight size={20} />
                    </div>
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {route.to.charAt(0)}
                    </div>
                  </div>
                  <div className="text-blue-600 font-bold text-lg">{route.frequency}</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">From:</span>
                    <span className="font-semibold">{route.from}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">To:</span>
                    <span className="font-semibold">{route.to}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transit Time:</span>
                    <span className="font-semibold text-blue-600">{route.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-20 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {translations.oceanFreightPage.advantagesSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.oceanFreightPage.advantagesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              const colors = [
                { bg: "bg-emerald-50 border-emerald-200", icon: "text-emerald-600" },
                { bg: "bg-blue-50 border-blue-200", icon: "text-blue-600" },
                { bg: "bg-purple-50 border-purple-200", icon: "text-purple-600" },
                { bg: "bg-orange-50 border-orange-200", icon: "text-orange-600" }
              ]
              
              return (
                <div key={index} className={`${colors[index].bg} rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 group cursor-pointer transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: `${800 + index * 100}ms` }}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} className={colors[index].icon} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-20 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {translations.oceanFreightPage.processSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.oceanFreightPage.processSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {translations.oceanFreightPage.processSection.steps.map((step, index) => (
              <div key={index} className={`text-center group transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: `${900 + index * 100}ms` }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {['💰', '📋', '📦', '🚢', '✅'][index]}
                  </div>
                  
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              {translations.oceanFreightPage.cta.title}
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {translations.oceanFreightPage.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105">
                {translations.oceanFreightPage.cta.getQuote}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                  {translations.oceanFreightPage.cta.trackShipment}
                </button>
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-400 mb-4">Sealive Lojistik - {translations.oceanFreightPage.cta.phone}</p>
              <div className="flex justify-center items-center space-x-8 text-white/60">
                {translations.oceanFreightPage.cta.features.map((feature, index) => (
                  <span key={index} className="text-sm">{feature}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 