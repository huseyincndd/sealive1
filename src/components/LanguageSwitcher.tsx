'use client'

import { useState } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { Locale } from '@/lib/translations'

interface LanguageSwitcherProps {
  isScrolled?: boolean
}

export default function LanguageSwitcher({ isScrolled = false }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { locale: currentLocale, setLocale } = useLanguage()

  const handleLanguageChange = (locale: Locale) => {
    setLocale(locale)
    setIsOpen(false)
  }
  const locales = [
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]

  const currentLanguage = locales.find(lang => lang.code === currentLocale)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 backdrop-blur-sm border rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
          isScrolled 
            ? 'bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-700' 
            : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
        }`}
      >
        <Globe size={18} className="text-yellow-500" />
        <span className="text-sm font-semibold">
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          } ${isScrolled ? 'text-gray-600' : 'text-white'}`}
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-3 w-44 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl z-20 overflow-hidden">
            {locales.map((locale) => (
              <button
                key={locale.code}
                onClick={() => handleLanguageChange(locale.code as Locale)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 hover:bg-yellow-50 ${
                  currentLocale === locale.code
                    ? 'bg-yellow-50 text-yellow-700 border-l-4 border-yellow-400'
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                <span className="text-lg">{locale.flag}</span>
                <div className="flex-1">
                  <div className="text-sm font-semibold">{locale.name}</div>
                  <div className="text-xs opacity-60">{locale.code.toUpperCase()}</div>
                </div>
                {currentLocale === locale.code && (
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
} 