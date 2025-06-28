import tr from './tr.json'
import en from './en.json'

export const translations = {
  tr,
  en
}

export type Locale = 'tr' | 'en'

// Specific interface that matches the translation structure
export interface TranslationStructure {
  header: {
    logo: string
    tagline: string
    nav: {
      about: string
      services: string
      contact: string
    }
    cta: string
  }
  hero: {
    slide1: {
      title: string
      subtitle: string
      description: string
    }
    slide2: {
      title: string
      subtitle: string
      description: string
    }
    slide3: {
      title: string
      subtitle: string
      description: string
    }
    getQuote: string
    learnMore: string
  }
  about: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    feature1: {
      title: string
      description: string
    }
    feature2: {
      title: string
      description: string
    }
    feature3: {
      title: string
      description: string
    }
  }
  parallax: {
    title: string
    subtitle: string
  }
  services: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    oceanFreight: {
      title: string
      description: string
    }
    airFreight: {
      title: string
      description: string
    }
    roadFreight: {
      title: string
      description: string
    }
    warehousing: {
      title: string
      description: string
    }
    learnMore: string
    cta: {
      title: string
      description: string
      customQuote: string
      consultation: string
    }
  }
  truckParallax: {
    title: string
    subtitle: string
  }
  stats: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    stats: {
      years: string
      shippingLines: string
      teu: string
      onTime: string
    }
    cta: {
      title: string
      description: string
      requestQuote: string
      viewServices: string
    }
  }
  testimonials: {
    title: string
    description: string
  }
  cta: {
    title: string
    description: string
    getQuote: string
    phone: string
    email: string
    address: string
  }
  footer: {
    description: string
    quickLinks: string
    services: string
    contact: string
    rights: string
    links: {
      about: string
      services: string
      contact: string
      oceanFreight: string
      airFreight: string
      roadFreight: string
      warehousing: string
    }
  }
}

export function getTranslation(locale: Locale): TranslationStructure {
  return translations[locale] || translations.tr
}

// Helper function to get nested translation
export function getNestedTranslation(
  translations: TranslationStructure,
  path: string,
  fallback: string = ''
): string {
  let result: any = translations
  const keys = path.split('.')
  
  for (const key of keys) {
    if (typeof result === 'object' && result !== null && key in result) {
      result = result[key]
    } else {
      return fallback
    }
  }
  
  return typeof result === 'string' ? result : fallback
}

 