'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Quote, Mail, Phone } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import LanguageSwitcher from './LanguageSwitcher'
import ServicesDropdown from './ServicesDropdown'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { translations, locale } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-12 w-auto relative flex items-center">
              <Image
                src={isScrolled 
                  ? "https://villaqrmenu.b-cdn.net/sealive/Sealive-logo-dark.png"
                  : "https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png"
                }
                alt="Sealive Lojistik"
                width={160}
                height={48}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Optimized for medium screens */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <nav className="flex items-center space-x-4 xl:space-x-6">
              <Link href="/" className={`font-semibold text-base xl:text-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-600' 
                  : 'text-white hover:text-yellow-300 drop-shadow-sm'
              }`}>
                {translations.header.nav.home}
              </Link>
              <Link href="/about" className={`font-semibold text-base xl:text-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-600' 
                  : 'text-white hover:text-yellow-300 drop-shadow-sm'
              }`}>
                {translations.header.nav.about}
              </Link>
              <ServicesDropdown isScrolled={isScrolled} />
              <Link href="/contact" className={`font-semibold text-base xl:text-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-600' 
                  : 'text-white hover:text-yellow-300 drop-shadow-sm'
              }`}>
                {translations.header.nav.contact}
              </Link>
            </nav>

            {/* Contact Info - Hidden on lg, shown on xl+ */}
            <div className="hidden xl:flex items-center space-x-1 border-l border-yellow-400/30 pl-3">
              <a href={`tel:${translations.header.contactInfo.phone}`} 
                 className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                   isScrolled 
                     ? 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 border border-transparent hover:border-yellow-200' 
                     : 'text-white hover:bg-white/10 hover:text-yellow-300 border border-white/20 hover:border-yellow-300/50'
                 }`}>
                <Phone size={16} className="text-yellow-500" />
                <span className="text-sm font-medium">{translations.header.contactInfo.phone}</span>
              </a>
              <a href={`mailto:${translations.header.contactInfo.email}`} 
                 className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                   isScrolled 
                     ? 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 border border-transparent hover:border-yellow-200' 
                     : 'text-white hover:bg-white/10 hover:text-yellow-300 border border-white/20 hover:border-yellow-300/50'
                 }`}>
                <Mail size={16} className="text-yellow-500" />
                <span className="text-sm font-medium">{translations.header.contactInfo.email}</span>
              </a>
            </div>

            {/* Compact Contact Info - Only on lg screens */}
            <div className="xl:hidden flex items-center space-x-1 border-l border-yellow-400/30 pl-3">
              <a href={`tel:${translations.header.contactInfo.phone}`} 
                 className={`flex items-center px-2 py-2 rounded-lg transition-all duration-300 ${
                   isScrolled 
                     ? 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-700' 
                     : 'text-white hover:bg-white/10 hover:text-yellow-300'
                 }`}>
                <Phone size={16} className="text-yellow-500" />
              </a>
              <a href={`mailto:${translations.header.contactInfo.email}`} 
                 className={`flex items-center px-2 py-2 rounded-lg transition-all duration-300 ${
                   isScrolled 
                     ? 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-700' 
                     : 'text-white hover:bg-white/10 hover:text-yellow-300'
                 }`}>
                <Mail size={16} className="text-yellow-500" />
              </a>
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-2 xl:space-x-4">
            {/* Language Switcher */}
            <div className="hidden lg:block">
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
            
            {/* Freight Quote Button - Responsive sizing */}
            <Link href="/contact" className="hidden lg:flex">
              <button className="flex items-center space-x-1 xl:space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 xl:px-6 py-2 xl:py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <Quote size={16} className="xl:hidden" />
                <Quote size={18} className="hidden xl:block" />
                <span className="text-sm xl:text-base">{translations.header.cta}</span>
              </button>
            </Link>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`lg:hidden mt-6 p-6 rounded-2xl transition-all duration-300 ${
            isScrolled 
              ? 'bg-white border border-gray-200 shadow-xl' 
              : 'bg-white/10 backdrop-blur-xl border border-white/20'
          }`}>
            <nav className="flex flex-col space-y-4">
              <Link href="/" className={`font-semibold text-lg transition-all duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-500`}>
                {translations.header.nav.home}
              </Link>
              <Link href="/about" className={`font-semibold text-lg transition-all duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-500`}>
                {translations.header.nav.about}
              </Link>
              <Link href="/services" className={`font-semibold text-lg transition-all duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-500`}>
                {translations.header.nav.services}
              </Link>
              <Link href="/contact" className={`font-semibold text-lg transition-all duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-yellow-500`}>
                {translations.header.nav.contact}
              </Link>
            </nav>

            {/* Mobile Contact Info */}
            <div className={`mt-6 pt-6 border-t ${isScrolled ? 'border-gray-200' : 'border-white/20'}`}>
              <div className="grid grid-cols-1 gap-3">
                <a href={`tel:${translations.header.contactInfo.phone}`} 
                   className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                     isScrolled 
                       ? 'bg-gray-50 text-gray-700 hover:bg-yellow-50' 
                       : 'bg-white/5 text-white hover:bg-white/10'
                   }`}>
                  <Phone size={18} className="text-yellow-500" />
                  <span className="font-medium">{translations.header.contactInfo.phone}</span>
                </a>
                <a href={`mailto:${translations.header.contactInfo.email}`} 
                   className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                     isScrolled 
                       ? 'bg-gray-50 text-gray-700 hover:bg-yellow-50' 
                       : 'bg-white/5 text-white hover:bg-white/10'
                   }`}>
                  <Mail size={18} className="text-yellow-500" />
                  <span className="font-medium">{translations.header.contactInfo.email}</span>
                </a>
              </div>
            </div>
              
            {/* Mobile Language Switcher */}
            <div className={`pt-6 border-t ${isScrolled ? 'border-gray-200' : 'border-white/20'} mt-6`}>
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>
            
            <Link href="/contact" className="block mt-6">
              <button className="flex items-center justify-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-xl font-bold transition-all duration-300 w-full">
                <Quote size={18} />
                <span>{translations.header.cta}</span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
} 