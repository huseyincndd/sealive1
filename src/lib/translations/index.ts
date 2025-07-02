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
      home: string
      about: string
      services: string
      contact: string
    }
    cta: string
    contactInfo: {
      phone: string
      email: string
    }
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
  heroSlider: {
    slides: {
      title: string
      description: string
    }[]
    labels: string[]
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
    yachtTransport: {
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
      descriptions: string[]
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
    cards: {
      name: string
      company: string
      position: string
      text: string
    }[]
  }
  cta: {
    title: string
    description: string
    getQuote: string
    contactExpert: string
    badge: string
    infoCards: {
      quotes: string
      support: string
      office: string
    }
    bottomText: string
    bottomTextHighlight: string
  }
  footer: {
    logo: {
      name: string
      tagline: string
    }
    description: string
    quickLinks: string
    services: string
    support: string
    contactInfo: string
    address: {
      title: string
      line1: string
      line2: string
      city: string
    }
    newsletter: {
      title: string
      placeholder: string
      subscribe: string
      description: string
    }
    rights: string
    followUs: string
    links: {
      "about": string,
      "services": string,
      "contact": string,
      "oceanFreight": string,
      "airFreight": string,
      "roadFreight": string,
      "yachtTransport": string
    },
    legal: {
      privacy: string,
      terms: string,
      cookies: string
    },
    trustBadges: string[]
  }
  yachtTransport: {
    badge: string
    title: string
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
    cta: string
  }
  contact: {
    hero: {
      title: string
      subtitle: string
      description: string
      badge: string
      getQuote: string
      callNow: string
    }
    section: {
      title: string
      subtitle: string
    }
    form: {
      title: string
      subtitle: string
      fields: {
        name: string
        email: string
        phone: string
        company: string
        service: string
        message: string
      }
      placeholders: {
        name: string
        email: string
        phone: string
        company: string
        message: string
        service: string
      }
      services: {
        ocean: string
        air: string
        land: string
        yacht: string
        other: string
      }
      submit: string
      sending: string
      success: string
      error: string
    }
    info: {
      title: string
      subtitle: string
      phone: string
      email: string
      address: {
        title: string
        line1: string
        line2: string
        line3: string
        line4: string
      }
      hours: {
        title: string
        weekdays: string
        saturday: string
        sunday: string
      }
    }
    whyChoose: {
      title: string
      experience: string
      network: string
      support: string
      pricing: string
    }
    emergency: {
      title: string
      subtitle: string
      button: string
    }
    map: {
      title: string
    }
  }
  aboutPage: {
    hero: {
      badge: string
      title: string
      description: string
    }
    story: {
      title: string
      paragraph1: string
      paragraph2: string
      paragraph3: string
    }
    values: {
      title: string
      description: string
      security: {
        title: string
        description: string
      }
      network: {
        title: string
        description: string
      }
      handling: {
        title: string
        description: string
      }
      team: {
        title: string
        description: string
      }
    }
    mission: {
      title: string
      quote: string
      description: string
    }
    cta: {
      title: string
      description: string
      getQuote: string
      contactUs: string
    }
  }
  servicesPage: {
    hero: {
      badge: string
      title: string
      titleHighlight: string
      description: string
      getQuote: string
      viewPortfolio: string
    }
    mainSection: {
      badge: string
      title: string
      description: string
    }
    mainServices: {
      title: string
      subtitle: string
      description: string
      features: string[]
      premiumBadge?: string
      learnMore: string
      pricing: {
        startingFrom: string
        contactQuote: string
      }
    }[]
    additionalServices: {
      title: string
      description: string
      services: {
        title: string
        description: string
      }[]
    }
    process: {
      title: string
      description: string
      steps: {
        title: string
        description: string
      }[]
    }
    cta: {
      title: string
      description: string
      getQuote: string
      phone: string
      trustText: string
      certifications: string[]
    }
  }
  yachtTransportPage: {
    hero: {
      badge: string
      title: string
      titleHighlight: string
      description: string
      getQuote: string
      viewPortfolio: string
    }
    specifications: {
      label: string
      value: string
    }[]
    servicesSection: {
      title: string
      description: string
      services: {
        title: string
        description: string
        features: string[]
      }[]
    }
    process: {
      title: string
      description: string
      steps: {
        title: string
        description: string
      }[]
    }
    testimonials: {
      title: string
      description: string
      reviews: {
        name: string
        title: string
        content: string
        rating: number
      }[]
    }
    cta: {
      title: string
      description: string
      getQuote: string
      phone: string
      trustText: string
      features: string[]
    }
  }
  oceanFreightPage: {
    hero: {
      badge: string
      title: string
      titleHighlight: string
      description: string
      getQuote: string
      trackShipment: string
    }
    specifications: {
      label: string
      value: string
    }[]
    servicesSection: {
      title: string
      description: string
      services: {
        title: string
        description: string
        features: string[]
      }[]
    }
    routesSection: {
      title: string
      description: string
      routes: {
        from: string
        to: string
        time: string
        frequency: string
      }[]
    }
    advantagesSection: {
      title: string
      description: string
      advantages: {
        title: string
        description: string
      }[]
    }
    processSection: {
      title: string
      description: string
      steps: {
        title: string
        description: string
      }[]
    }
    cta: {
      title: string
      description: string
      getQuote: string
      trackShipment: string
      phone: string
      features: string[]
    }
  }
  airFreightPage: {
    hero: {
      badge: string
      title: string
      titleHighlight: string
      description: string
      getQuote: string
      trackShipment: string
    }
    specifications: {
      label: string
      value: string
    }[]
    servicesSection: {
      title: string
      description: string
      services: {
        title: string
        description: string
        features: string[]
      }[]
    }
    destinationsSection: {
      title: string
      description: string
      destinations: {
        region: string
        airports: string
        time: string
        frequency: string
      }[]
    }
    advantagesSection: {
      title: string
      description: string
      advantages: {
        title: string
        description: string
      }[]
    }
    cargoTypesSection: {
      title: string
      description: string
      types: {
        type: string
        description: string
        examples: string[]
      }[]
    }
    cta: {
      title: string
      description: string
      getQuote: string
      trackShipment: string
      phone: string
      features: string[]
    }
  }
  landTransportPage: {
    hero: {
      badge: string
      title: string
      titleHighlight: string
      description: string
      getQuote: string
      trackVehicle: string
    }
    specifications: {
      label: string
      value: string
    }[]
    servicesSection: {
      title: string
      description: string
      services: {
        title: string
        description: string
        features: string[]
      }[]
    }
    routesSection: {
      title: string
      description: string
      routes: {
        from: string
        to: string
        time: string
        distance: string
        frequency: string
      }[]
    }
    advantagesSection: {
      title: string
      description: string
      advantages: {
        title: string
        description: string
      }[]
    }
    vehicleTypesSection: {
      title: string
      description: string
      types: {
        type: string
        description: string
        capacity: string
        dimensions: string
        suitable: string[]
      }[]
    }
    cta: {
      title: string
      description: string
      getQuote: string
      trackVehicle: string
      phone: string
      features: string[]
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
  let result: unknown = translations
  const keys = path.split('.')
  
  for (const key of keys) {
    if (typeof result === 'object' && result !== null && key in result) {
      result = (result as Record<string, unknown>)[key]
    } else {
      return fallback
    }
  }
  
  return typeof result === 'string' ? result : fallback
}

 