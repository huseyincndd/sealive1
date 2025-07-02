'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Plane, Clock, Shield, Globe, Thermometer, ArrowRight, CheckCircle, Zap, Package } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Uluslararası Havayolu Kargo ve Express Lojistik",
  "description": "Express ve standart havayolu kargo hizmetleri ile kritik yükleriniz için hızlı, güvenli ve global ulaştırma çözümleri. 24-48 saat express teslimat ve özel kargo taşımacılığı.",
  "provider": {
    "@type": "Organization",
    "name": "SeaLive Lojistik & Taşımacılık",
    "url": "https://www.sealive.net"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  },
  "serviceType": "Air Freight",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Havayolu Kargo Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Express Hava Kargo",
          "description": "24-48 saat kritik yükler için ultra hızlı havayolu taşımacılığı"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Standart Hava Taşımacılığı",
          "description": "Ekonomik ve güvenilir uluslararası havayolu kargo hizmetleri"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Özel Kargo Taşımacılığı",
          "description": "Tehlikeli maddeler, değerli eşyalar ve sıcaklık kontrollü yükler için özel çözümler"
        }
      }
    ]
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Global Havaalanları",
      "value": "200+ Havaalanı"
    },
    {
      "@type": "PropertyValue",
      "name": "Günlük Uçuş",
      "value": "500+ Sefer"
    },
    {
      "@type": "PropertyValue",
      "name": "Maksimum Ağırlık",
      "value": "100 ton'a kadar"
    },
    {
      "@type": "PropertyValue",
      "name": "Express Teslimat",
      "value": "24-48 saat"
    }
  ]
};

export default function AirFreightPage() {
  const { translations } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const airServices = [
    {
      title: translations.airFreightPage.servicesSection.services[0].title,
      description: translations.airFreightPage.servicesSection.services[0].description,
      features: translations.airFreightPage.servicesSection.services[0].features,
      icon: Zap,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: translations.airFreightPage.servicesSection.services[1].title,
      description: translations.airFreightPage.servicesSection.services[1].description,
      features: translations.airFreightPage.servicesSection.services[1].features,
      icon: Plane,
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: translations.airFreightPage.servicesSection.services[2].title,
      description: translations.airFreightPage.servicesSection.services[2].description,
      features: translations.airFreightPage.servicesSection.services[2].features,
      icon: Package,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const advantages = [
    {
      icon: Clock,
      title: translations.airFreightPage.advantagesSection.advantages[0].title,
      description: translations.airFreightPage.advantagesSection.advantages[0].description,
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600"
    },
    {
      icon: Shield,
      title: translations.airFreightPage.advantagesSection.advantages[1].title,
      description: translations.airFreightPage.advantagesSection.advantages[1].description,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Thermometer,
      title: translations.airFreightPage.advantagesSection.advantages[2].title,
      description: translations.airFreightPage.advantagesSection.advantages[2].description,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: Globe,
      title: translations.airFreightPage.advantagesSection.advantages[3].title,
      description: translations.airFreightPage.advantagesSection.advantages[3].description,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
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
      <section className="pt-32 pb-24 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Havayolu kargo uçağı - hava taşımacılığı ve ekspres kargo hizmetleri"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-orange-800/70 to-yellow-700/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium mb-8 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <Plane size={16} className="mr-2" />
              {translations.airFreightPage.hero.badge}
            </div>
            
            <h1 className={`text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {translations.airFreightPage.hero.title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                {translations.airFreightPage.hero.titleHighlight}
              </span>
            </h1>
            
            <p className={`text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 transition-all duration-700 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {translations.airFreightPage.hero.description}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group transform hover:scale-105">
                {translations.airFreightPage.hero.getQuote}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                {translations.airFreightPage.hero.trackShipment}
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
            {translations.airFreightPage.specifications.map((spec, index) => (
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
              {translations.airFreightPage.servicesSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.airFreightPage.servicesSection.description}
            </p>
          </div>

          <div className="space-y-16">
            {airServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''} transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: `${500 + index * 200}ms` }}>
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} space-y-6`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-400/20 border border-red-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent size={28} className="text-red-600" />
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
                          <CheckCircle size={18} className="text-red-500" />
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

      {/* Destinations Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-20 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {translations.airFreightPage.destinationsSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.airFreightPage.destinationsSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {translations.airFreightPage.destinationsSection.destinations.map((destination, index) => (
              <div key={index} className={`bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: `${700 + index * 100}ms` }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                      ✈️
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{destination.region}</h3>
                      <div className="text-gray-600">{destination.airports} Airports</div>
                    </div>
                  </div>
                  <div className="text-red-600 font-bold text-lg">{destination.frequency}</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Airports:</span>
                    <span className="font-semibold">{destination.airports}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Transit Time:</span>
                    <span className="font-semibold text-red-600">{destination.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frequency:</span>
                    <span className="font-semibold">{destination.frequency}</span>
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
              {translations.airFreightPage.advantagesSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.airFreightPage.advantagesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              
              return (
                <div key={index} className={`${advantage.color} rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 group cursor-pointer transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: `${800 + index * 100}ms` }}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} className={advantage.iconColor} />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              {translations.airFreightPage.cta.title}
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {translations.airFreightPage.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105">
                {translations.airFreightPage.cta.getQuote}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                  {translations.airFreightPage.cta.trackShipment}
                </button>
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-400 mb-4">Sealive Lojistik - {translations.airFreightPage.cta.phone}</p>
              <div className="flex justify-center items-center space-x-8 text-white/60">
                {translations.airFreightPage.cta.features.map((feature, index) => (
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