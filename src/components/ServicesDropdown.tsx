'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface ServicesDropdownProps {
  isScrolled?: boolean
}

export default function ServicesDropdown({ isScrolled = false }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { translations, locale } = useLanguage()

  const services = [
    {
      href: '/services/ocean-freight',
      title: 'Ocean Freight',
      titleTr: 'Deniz Taşımacılığı'
    },
    {
      href: '/services/air-freight',
      title: 'Air Freight',
      titleTr: 'Hava Taşımacılığı'
    },
    {
      href: '/services/land-transport',
      title: 'Land Transport',
      titleTr: 'Kara Taşımacılığı'
    },
    {
      href: '/services/yacht-transportation',
      title: 'Yacht Transportation',
      titleTr: 'Yat Taşımacılığı'
    }
  ]

  return (
    <div className="relative">
      <div className="flex items-center">
        <Link 
          href="/services" 
          className={`font-semibold text-lg transition-all duration-300 ${
            isScrolled 
              ? 'text-gray-700 hover:text-yellow-600' 
              : 'text-white hover:text-yellow-300 drop-shadow-sm'
          }`}
        >
          {translations.header.nav.services}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`ml-1 p-1 rounded transition-all duration-300 ${
            isScrolled 
              ? 'text-gray-700 hover:text-yellow-600 hover:bg-gray-100' 
              : 'text-white hover:text-yellow-300 hover:bg-white/10'
          }`}
        >
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute left-0 top-full mt-3 w-64 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl z-20 overflow-hidden">
            <div className="p-2">
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 rounded-lg transition-all duration-200 font-semibold border-b border-gray-100 mb-2"
              >
                {locale === 'tr' ? 'Tüm Hizmetler' : 'All Services'}
              </Link>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 rounded-lg transition-all duration-200"
                >
                  <div className="font-medium">
                    {locale === 'tr' ? service.titleTr : service.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
} 