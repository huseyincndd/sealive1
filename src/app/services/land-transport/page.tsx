'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Truck, Clock, Shield, Globe, CheckCircle, ArrowRight, PackageCheck } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Karayolu Nakliyesi ve TIR Taşımacılığı",
  "description": "Türkiye ve Avrupa genelinde komple ve parsiyel karayolu nakliyesi, TIR taşımacılığı ve özel araç çözümleri. 50+ ülkeye güvenilir kara lojistiği hizmetleri.",
  "provider": {
    "@type": "Organization",
    "name": "SeaLive Lojistik & Taşımacılık",
    "url": "https://www.sealive.net"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Turkey"
    },
    {
      "@type": "Place",
      "name": "Europe"
    },
    {
      "@type": "Place",
      "name": "Central Asia"
    }
  ],
  "serviceType": "Land Transport",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kara Taşımacılığı Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Komple Yük (FTL) Taşımacılığı",
          "description": "Tam araç kapasitesi ile ekonomik ve hızlı karayolu taşımacılığı"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Parsiyel Yük (LTL) Taşımacılığı",
          "description": "Konsolide yükler için uygun maliyetli karayolu lojistiği"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "TIR ve Uluslararası Taşımacılık",
          "description": "TIR karnesi ile gümrük avantajlı uluslararası kara nakliyesi"
        }
      }
    ]
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Rota Kapsamı",
      "value": "50+ Ülke"
    },
    {
      "@type": "PropertyValue",
      "name": "Filo Büyüklüğü",
      "value": "500+ Araç"
    },
    {
      "@type": "PropertyValue",
      "name": "Maksimum Kapasite",
      "value": "40 ton'a kadar"
    },
    {
      "@type": "PropertyValue",
      "name": "TIR Sertifikası",
      "value": "%100 Sertifikalı"
    }
  ]
};

export default function LandTransportPage() {
  const { translations } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const landServices = [
    {
      title: translations.landTransportPage.servicesSection.services[0].title,
      description: translations.landTransportPage.servicesSection.services[0].description,
      features: translations.landTransportPage.servicesSection.services[0].features,
      icon: Truck,
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: translations.landTransportPage.servicesSection.services[1].title,
      description: translations.landTransportPage.servicesSection.services[1].description,
      features: translations.landTransportPage.servicesSection.services[1].features,
      icon: PackageCheck,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: translations.landTransportPage.servicesSection.services[2].title,
      description: translations.landTransportPage.servicesSection.services[2].description,
      features: translations.landTransportPage.servicesSection.services[2].features,
      icon: Globe,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const routes = [
    { from: "Turkey", to: "Europe", time: "3-5 days", distance: "2,500 km", frequency: "Daily" },
    { from: "Europe", to: "Central Asia", time: "7-10 days", distance: "4,000 km", frequency: "3x/week" },
    { from: "Middle East", to: "Caucasus", time: "2-4 days", distance: "1,500 km", frequency: "Daily" },
    { from: "Turkey", to: "Russia", time: "5-7 days", distance: "3,200 km", frequency: "2x/week" }
  ]

  const specifications = [
    { label: "Route Coverage", value: "50+ Countries" },
    { label: "Fleet Size", value: "500+ Vehicles" },
    { label: "Max Capacity", value: "Up to 40 tons" },
    { label: "TIR Certified", value: "100%" }
  ]

  const advantages = [
    {
      icon: Globe,
      title: translations.landTransportPage.advantagesSection.advantages[0].title,
      description: translations.landTransportPage.advantagesSection.advantages[0].description,
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: Shield,
      title: translations.landTransportPage.advantagesSection.advantages[1].title,
      description: translations.landTransportPage.advantagesSection.advantages[1].description,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Clock,
      title: translations.landTransportPage.advantagesSection.advantages[2].title,
      description: translations.landTransportPage.advantagesSection.advantages[2].description,
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600"
    },
    {
      icon: Globe,
      title: translations.landTransportPage.advantagesSection.advantages[3].title,
      description: translations.landTransportPage.advantagesSection.advantages[3].description,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    }
  ]

  const vehicleTypes = [
    {
      type: "Standard Trucks",
      description: "Regular cargo transport with standard trailers",
      capacity: "Up to 24 tons",
      dimensions: "13.6m x 2.5m x 3m",
      suitable: ["General Cargo", "Palletized Goods", "Dry Goods", "Consumer Products"]
    },
    {
      type: "Refrigerated Trucks",
      description: "Temperature-controlled transport for perishables",
      capacity: "Up to 22 tons",
      dimensions: "13.6m x 2.5m x 2.8m",
      suitable: ["Fresh Produce", "Pharmaceuticals", "Frozen Foods", "Chemicals"]
    },
    {
      type: "Flatbed Trailers",
      description: "Open trailers for oversized and heavy cargo",
      capacity: "Up to 40 tons",
      dimensions: "13.6m x 2.5m (open)",
      suitable: ["Machinery", "Construction Materials", "Steel Products", "Industrial Equipment"]
    },
    {
      type: "Specialized Vehicles",
      description: "Custom solutions for unique transport requirements",
      capacity: "Variable",
      dimensions: "Custom",
      suitable: ["Dangerous Goods", "Oversized Cargo", "High Value Items", "Project Cargo"]
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
      <section className="pt-32 pb-24 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Karayolu kamyon taşımacılığı - kara nakliyesi ve TIR hizmetleri"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-emerald-800/70 to-teal-700/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium mb-8 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <Truck size={16} className="mr-2" />
              {translations.landTransportPage.hero.badge}
            </div>
            
            <h1 className={`text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {translations.landTransportPage.hero.title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                {translations.landTransportPage.hero.titleHighlight}
              </span>
            </h1>
            
            <p className={`text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 transition-all duration-700 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {translations.landTransportPage.hero.description}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group transform hover:scale-105">
                {translations.landTransportPage.hero.getQuote}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                {translations.landTransportPage.hero.trackVehicle}
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
            {translations.landTransportPage.specifications.map((spec, index) => (
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
              {translations.landTransportPage.servicesSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.landTransportPage.servicesSection.description}
            </p>
          </div>

          <div className="space-y-16">
            {landServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''} transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: `${500 + index * 200}ms` }}>
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} space-y-6`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 border border-green-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent size={28} className="text-green-600" />
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
                          <CheckCircle size={18} className="text-green-500" />
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
              {translations.landTransportPage.routesSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.landTransportPage.routesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <div key={index} className={`bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: `${700 + index * 100}ms` }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {route.from.charAt(0)}
                    </div>
                    <div className="text-gray-400">
                      <ArrowRight size={20} />
                    </div>
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {route.to.charAt(0)}
                    </div>
                  </div>
                  <div className="text-green-600 font-bold text-lg">{route.frequency}</div>
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
                    <span className="font-semibold text-green-600">{route.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Distance:</span>
                    <span className="font-semibold">{route.distance}</span>
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
              {translations.landTransportPage.advantagesSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.landTransportPage.advantagesSection.description}
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

      {/* Vehicle Types Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-20 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {translations.landTransportPage.vehicleTypesSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.landTransportPage.vehicleTypesSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className={`bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: `${900 + index * 100}ms` }}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{vehicle.type}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-500 font-medium">Capacity:</span>
                      <div className="text-green-600 font-semibold">{vehicle.capacity}</div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 font-medium">Dimensions:</span>
                      <div className="text-green-600 font-semibold">{vehicle.dimensions}</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Suitable for:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.suitable.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle size={14} className="text-green-500" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              {translations.landTransportPage.cta.title}
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {translations.landTransportPage.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105">
                {translations.landTransportPage.cta.getQuote}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                {translations.landTransportPage.cta.trackVehicle}
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-400 mb-4">Sealive Lojistik - {translations.landTransportPage.cta.phone}</p>
              <div className="flex justify-center items-center space-x-8 text-white/60">
                {translations.landTransportPage.cta.features.map((feature, index) => (
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