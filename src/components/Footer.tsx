'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { translations } = useLanguage()

  const serviceLinks = [
    { name: translations.footer.links.oceanFreight, href: '/services/ocean-freight' },
    { name: translations.footer.links.airFreight, href: '/services/air-freight' },
    { name: translations.footer.links.roadFreight, href: '/services/land-transport' },
    { name: 'Gümrük İşlemleri', href: '/services/customs' },
    { name: translations.footer.links.warehousing, href: '/services/warehousing' },
    { name: 'Sigorta', href: '/services/insurance' }
  ]

  const companyLinks = [
    { name: translations.footer.links.about, href: '/about' },
    { name: 'Kariyer', href: '/careers' },
    { name: 'Haberler', href: '/news' },
    { name: 'Belgelerimiz', href: '/certificates' },
    { name: 'Sürdürülebilirlik', href: '/sustainability' },
    { name: 'Partnerlerimiz', href: '/partners' }
  ]

  const supportLinks = [
    { name: 'Kargo Takibi', href: '/tracking' },
    { name: 'Fiyat Hesapla', href: '/quote' },
    { name: 'Müşteri Desteği', href: '/support' },
    { name: 'SSS', href: '/faq' },
    { name: translations.footer.links.contact, href: '/contact' },
    { name: 'Şikayetler', href: '/complaints' }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/globefarer', name: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/globefarer', name: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/globefarer', name: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/globefarer', name: 'Instagram' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-yellow-400 rounded transform rotate-45"></div>
                <div className="absolute inset-0 w-10 h-10 bg-yellow-500 rounded transform rotate-12"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">GlobeFarer</h3>
                <p className="text-xs text-yellow-300">Worldwide Shipping Solutions</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {translations.footer.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Merkez Ofis:</p>
                  <p>Şişli Plaza, Kat 15</p>
                  <p>34394 Şişli/İstanbul</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">+90 212 555 0123</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">info@globefarer.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">7/24 Müşteri Desteği</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{translations.footer.services}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{translations.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{translations.footer.contact}</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Bülten Aboneliği</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-yellow-400"
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                  Abone Ol
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Sektör haberlerini ve özel tekliflerimizi kaçırmayın.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} {translations.header.logo}. {translations.footer.rights}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 mr-2">Bizi takip edin:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-colors group"
                    aria-label={social.name}
                  >
                    <IconComponent size={16} className="text-gray-400 group-hover:text-gray-900" />
                  </a>
                )
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-yellow-400 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="hover:text-yellow-400 transition-colors">
                Kullanım Şartları
              </Link>
              <Link href="/cookies" className="hover:text-yellow-400 transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            <div className="text-xs text-gray-500">ISO 9001:2015 Sertifikalı</div>
            <div className="text-xs text-gray-500">IATA Üyesi</div>
            <div className="text-xs text-gray-500">FIATA Sertifikalı</div>
            <div className="text-xs text-gray-500">C-TPAT Onaylı</div>
            <div className="text-xs text-gray-500">AEO Sertifikalı</div>
          </div>
        </div>
      </div>
    </footer>
  )
} 