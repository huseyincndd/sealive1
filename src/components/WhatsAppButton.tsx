'use client'

import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function WhatsAppButton() {
  const { translations } = useLanguage()
  
  const handleWhatsAppClick = () => {
    const message = translations.whatsapp.message
    const phoneNumber = '+905050920999' // SeaLive telefon numarası
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
      aria-label="WhatsApp ile iletişim"
    >
      <MessageCircle size={24} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {translations.whatsapp.tooltip}
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></span>
    </button>
  )
} 