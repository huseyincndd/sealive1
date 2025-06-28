import tr from './tr.json'
import en from './en.json'

export const translations = {
  tr,
  en
}

export type Locale = 'tr' | 'en'

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.tr
}

// Helper function to get nested translation
export function getNestedTranslation(
  translations: any,
  path: string,
  fallback: string = ''
): string {
  return path.split('.').reduce((obj, key) => obj?.[key], translations) || fallback
}

 