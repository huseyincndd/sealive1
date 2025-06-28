'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { getTranslation, Locale } from './translations'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  translations: any
  t: (path: string, fallback?: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('tr')

  useEffect(() => {
    // Get locale from localStorage or browser language on mount
    const savedLocale = localStorage.getItem('preferred-language') as Locale
    const browserLocale = navigator.language.startsWith('en') ? 'en' : 'tr'
    const initialLocale = savedLocale || browserLocale
    setLocaleState(initialLocale)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('preferred-language', newLocale)
  }

  const translations = getTranslation(locale)
  
  const t = (path: string, fallback: string = '') => {
    const result = path.split('.').reduce((obj: any, key) => obj?.[key], translations)
    return typeof result === 'string' ? result : fallback
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, translations, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 