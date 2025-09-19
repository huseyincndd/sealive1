'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/language-context'
import { LegalSection } from '@/types/legal'
import Image from 'next/image'

export default function CookiesPage() {
  const { translations } = useLanguage()
  const sections: LegalSection[] = (translations as { legal?: { cookies?: { sections?: LegalSection[] } } }).legal?.cookies?.sections || []

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop"
            alt="Çerez politikası ve site kullanımı"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {translations.footer.legal.cookies}
            </h1>
            <p className="text-gray-300">{(translations as { legal?: { lastUpdated?: string } }).legal?.lastUpdated} {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">{(translations as { legal?: { lastUpdated?: string } }).legal?.lastUpdated} {new Date().toLocaleDateString()}</p>

              {sections.map((section: LegalSection, idx: number) => (
                <div key={idx} className="mb-8">
                  {section.title && (
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{section.title}</h2>
                  )}
                  {section.intro && (
                    <p className="text-gray-600 mb-4">{section.intro}</p>
                  )}
                  {Array.isArray(section.items) && section.items.length > 0 && (
                    <ul className="list-disc pl-6 mb-6 text-gray-600">
                      {section.items.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="mt-10">
                <ul className="list-none pl-0 mb-6 text-gray-600">
                  <li>Email: {translations.header.contactInfo.email}</li>
                  <li>Phone: {translations.header.contactInfo.phone}</li>
                  <li>Address: {translations.footer.address.line1}, {translations.footer.address.line2}, {translations.footer.address.city}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 