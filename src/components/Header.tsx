'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Quote } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { translations } = useLanguage()

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
          <Link href="/" className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? 'bg-yellow-400 text-gray-900' 
                : 'bg-white/20 backdrop-blur-sm text-white'
            }`}>
              <span className="font-bold text-xl">ML</span>
            </div>
            <div className={`transition-all duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
            }`}>
              <div className="font-bold text-xl">{translations.header.logo}</div>
              <div className="text-sm opacity-80">{translations.header.tagline}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link href="/" className={`font-semibold text-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-yellow-600' 
                : 'text-white hover:text-yellow-300 drop-shadow-sm'
            }`}>
              Ana Sayfa
            </Link>
            <Link href="/about" className={`font-semibold text-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-yellow-600' 
                : 'text-white hover:text-yellow-300 drop-shadow-sm'
            }`}>
              {translations.header.nav.about}
            </Link>
            <Link href="/services" className={`font-semibold text-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-yellow-600' 
                : 'text-white hover:text-yellow-300 drop-shadow-sm'
            }`}>
              {translations.header.nav.services}
            </Link>
            <Link href="/contact" className={`font-semibold text-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-yellow-600' 
                : 'text-white hover:text-yellow-300 drop-shadow-sm'
            }`}>
              {translations.header.nav.contact}
            </Link>
          </nav>

          {/* Language Switcher, Freight Quote Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>
            
            {/* Freight Quote Button */}
            <button className="hidden lg:flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Quote size={18} />
              <span>{translations.header.cta}</span>
            </button>

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
              <Link href="/" className={`font-semibold text-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-600' 
                  : 'text-white hover:text-yellow-300'
              }`}>
                Ana Sayfa
              </Link>
              <Link href="/about" className={`font-semibold text-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-600' 
                  : 'text-white hover:text-yellow-300'
              }`}>
                {translations.header.nav.about}
              </Link>
              <Link href="/services" className={`font-semibold text-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-600' 
                  : 'text-white hover:text-yellow-300'
              }`}>
                {translations.header.nav.services}
              </Link>
              <Link href="/contact" className={`font-semibold text-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-yellow-600' 
                  : 'text-white hover:text-yellow-300'
              }`}>
                {translations.header.nav.contact}
              </Link>
              
              {/* Mobile Language Switcher */}
              <div className="pt-2 border-t border-gray-200 mt-4">
                <LanguageSwitcher />
              </div>
              
              <button className="mt-4 flex items-center justify-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-xl font-bold transition-all duration-300 w-full">
                <Quote size={18} />
                <span>{translations.header.cta}</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 