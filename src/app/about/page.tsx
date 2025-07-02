'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, Globe, Award, Users, Anchor } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'

export default function AboutPage() {
  const { translations } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: Shield,
      title: translations.aboutPage.values.security.title,
      description: translations.aboutPage.values.security.description
    },
    {
      icon: Globe,
      title: translations.aboutPage.values.network.title,
      description: translations.aboutPage.values.network.description
    },
    {
      icon: Award,
      title: translations.aboutPage.values.handling.title,
      description: translations.aboutPage.values.handling.description
    },
    {
      icon: Users,
      title: translations.aboutPage.values.team.title,
      description: translations.aboutPage.values.team.description
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-900 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://www.bedirhan.com/wp-content/uploads/2024/01/lojistik-nedir-1024x575.jpg"
            alt="Lojistik ve taşımacılık sektörü - SeaLive şirket hikayesi"
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`inline-flex items-center bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-8 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <Anchor size={14} className="mr-2" />
              {translations.aboutPage.hero.badge}
            </div>
            <h1 className={`text-4xl lg:text-5xl font-bold text-white mb-8 transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {translations.aboutPage.hero.title}
            </h1>
            <p className={`text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {translations.aboutPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className={`transition-all duration-700 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {translations.aboutPage.story.title}
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>{translations.aboutPage.story.paragraph1}</p>
                <p>{translations.aboutPage.story.paragraph2}</p>
                <p>{translations.aboutPage.story.paragraph3}</p>
              </div>
            </div>

            {/* Right - Image */}
            <div className={`relative transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <img
                src="https://www.safezonejournal.com/wp-content/uploads/2024/05/transportation-logistics-container-cargo-ship-cargo-plane-3d-rendering-illustration-1024x545.jpg"
                alt="Global Lojistik Ağı"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {translations.aboutPage.values.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {translations.aboutPage.values.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg p-6 shadow-sm border border-gray-200 transition-all duration-700 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent size={20} className="text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              {translations.aboutPage.mission.title}
            </h2>
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                &quot;{translations.aboutPage.mission.quote}&quot;
              </p>
              <p className="text-gray-600">
                {translations.aboutPage.mission.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-3xl font-bold text-white mb-6">
              {translations.aboutPage.cta.title}
            </h2>
            <p className="text-gray-300 mb-8">
              {translations.aboutPage.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer">
                {translations.aboutPage.cta.getQuote}
              </Link>
              <Link href="/contact">
                <button className="border border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer transform hover:scale-105">
                  {translations.aboutPage.cta.contactUs}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 