'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Ship, Plane, Truck, Anchor, Shield, Globe, Clock, Award, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

export default function ServicesPage() {
  const { translations } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const mainServices = [
    {
      icon: Anchor,
      title: translations.servicesPage.mainServices[0].title,
      subtitle: translations.servicesPage.mainServices[0].subtitle,
      description: translations.servicesPage.mainServices[0].description,
      features: translations.servicesPage.mainServices[0].features,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      premium: true,
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: Ship,
      title: translations.servicesPage.mainServices[1].title,
      subtitle: translations.servicesPage.mainServices[1].subtitle,
      description: translations.servicesPage.mainServices[1].description,
      features: translations.servicesPage.mainServices[1].features,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      premium: false,
      gradient: "from-slate-600 to-slate-800"
    },
    {
      icon: Plane,
      title: translations.servicesPage.mainServices[2].title,
      subtitle: translations.servicesPage.mainServices[2].subtitle,
      description: translations.servicesPage.mainServices[2].description,
      features: translations.servicesPage.mainServices[2].features,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      premium: false,
      gradient: "from-slate-600 to-slate-800"
    },
    {
      icon: Truck,
      title: translations.servicesPage.mainServices[3].title,
      subtitle: translations.servicesPage.mainServices[3].subtitle,
      description: translations.servicesPage.mainServices[3].description,
      features: translations.servicesPage.mainServices[3].features,
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      premium: false,
      gradient: "from-slate-600 to-slate-800"
    }
  ]

  const additionalServices = [
    {
      icon: Shield,
      title: translations.servicesPage.additionalServices.services[0].title,
      description: translations.servicesPage.additionalServices.services[0].description,
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-600"
    },
    {
      icon: Globe,
      title: translations.servicesPage.additionalServices.services[1].title,
      description: translations.servicesPage.additionalServices.services[1].description,
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Clock,
      title: translations.servicesPage.additionalServices.services[2].title,
      description: translations.servicesPage.additionalServices.services[2].description,
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: Award,
      title: translations.servicesPage.additionalServices.services[3].title,
      description: translations.servicesPage.additionalServices.services[3].description,
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-600"
    }
  ]

  const processSteps = [
    { 
      step: "01", 
      title: translations.servicesPage.process.steps[0].title,
      description: translations.servicesPage.process.steps[0].description,
      icon: "📋"
    },
    { 
      step: "02", 
      title: translations.servicesPage.process.steps[1].title,
      description: translations.servicesPage.process.steps[1].description,
      icon: "🗺️"
    },
    { 
      step: "03", 
      title: translations.servicesPage.process.steps[2].title,
      description: translations.servicesPage.process.steps[2].description,
      icon: "🚢"
    },
    { 
      step: "04", 
      title: translations.servicesPage.process.steps[3].title,
      description: translations.servicesPage.process.steps[3].description,
      icon: "✅"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <img 
            src="https://villaqrmenu.b-cdn.net/sealive/ChatGPT%20Image%2029%20Haz%202025%2014_46_02.png"
            alt="SeaLive lojistik hizmetleri - deniz, hava, kara ve yat taşımacılığı"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-slate-900/70"></div>
          
          {/* Geometric Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rotate-12"></div>
            <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-white/20 rotate-45"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className={`inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium mb-8 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <Ship size={16} className="mr-2" />
              {translations.servicesPage.hero.badge}
            </div>
            
            {/* Main Title */}
            <h1 className={`text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {translations.servicesPage.hero.title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                {translations.servicesPage.hero.titleHighlight}
              </span>
            </h1>
            
            {/* Description */}
            <p className={`text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 transition-all duration-700 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {translations.servicesPage.hero.description}
            </p>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group transform hover:scale-105 cursor-pointer">
                {translations.servicesPage.hero.getQuote}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services">
                <button className="border border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105">
                  {translations.servicesPage.hero.viewPortfolio}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {translations.servicesPage.mainSection.badge}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {translations.servicesPage.mainSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {translations.servicesPage.mainSection.description}
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''} transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: `${300 + index * 200}ms` }}>
                  {/* Content */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} space-y-6`}>
                    {/* Premium Badge */}
                    {service.premium && (
                      <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-amber-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                        <Award size={14} className="mr-2" />
                        {translations.servicesPage.mainServices[0].premiumBadge}
                      </div>
                    )}
                    
                    {/* Service Header */}
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.premium ? 'from-yellow-400/20 to-amber-400/20 border border-yellow-400/30' : 'from-gray-100 to-gray-200'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent size={28} className={service.premium ? "text-yellow-600" : "text-gray-600"} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className={`text-lg font-medium ${service.premium ? 'text-yellow-600' : 'text-gray-500'}`}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle size={18} className={service.premium ? "text-yellow-500" : "text-green-500"} />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Link 
                      href={`/services/${service.title === "Yat Taşımacılığı" ? "yacht-transportation" : 
                             service.title === "Deniz Taşımacılığı" ? "ocean-freight" :
                             service.title === "Hava Taşımacılığı" ? "air-freight" :
                             service.title === "Kara Taşımacılığı" ? "land-transport" : ""}`}
                      className={`${service.premium 
                        ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                      } px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center group inline-flex transform hover:scale-105`}
                    >
                      {translations.servicesPage.mainServices[index].learnMore}
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Enhanced Image */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent rounded-2xl"></div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-2xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Overlay Badge */}
                      {service.premium && (
                        <div className="absolute top-6 right-6 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          ⭐ FLAGSHIP
                        </div>
                      )}
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${service.gradient} opacity-80 rounded-b-2xl flex items-end p-6`}>
                        <div className="text-white">
                          <p className="text-sm opacity-90 mb-1">{translations.servicesPage.mainServices[index].pricing.startingFrom}</p>
                          <p className="text-lg font-bold">{translations.servicesPage.mainServices[index].pricing.contactQuote}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Additional Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {translations.servicesPage.additionalServices.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.servicesPage.additionalServices.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className={`${service.color} rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 group cursor-pointer transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: `${500 + index * 100}ms` }}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} className={service.iconColor} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-20 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {translations.servicesPage.process.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.servicesPage.process.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className={`text-center group transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: `${700 + index * 100}ms` }}>
                {/* Step Circle */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 text-gray-900 rounded-full flex items-center justify-center mx-auto font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {process.icon}
                  </div>
                  
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              {translations.servicesPage.cta.title}
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {translations.servicesPage.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105">
                {translations.servicesPage.cta.getQuote}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                {translations.servicesPage.cta.phone}
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-400 mb-4">{translations.servicesPage.cta.trustText}</p>
              <div className="flex justify-center items-center space-x-8 text-white/60">
                {translations.servicesPage.cta.certifications.map((cert, index) => (
                  <span key={index} className="text-sm">{cert}</span>
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