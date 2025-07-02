'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { translations } = useLanguage()

  const serviceLinks = [
    { name: translations.footer.links.oceanFreight, href: '/services/ocean-freight' },
    { name: translations.footer.links.airFreight, href: '/services/air-freight' },
    { name: translations.footer.links.roadFreight, href: '/services/land-transport' },
    { name: 'Yat Taşımacılığı', href: '/services/yacht-transportation' }
  ]

  const companyLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: translations.footer.links.about, href: '/about' },
    { name: translations.footer.links.services, href: '/services' },
    { name: translations.footer.links.contact, href: '/contact' }
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center mb-6">
              <div className="h-12 w-auto relative">
                <Image
                  src="https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png"
                  alt="SeaLive Logo"
                  width={160}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {translations.footer.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>{translations.footer.address.title}</p>
                  <p>{translations.footer.address.line1}</p>
                  <p>{translations.footer.address.line2}</p>
                  <p>{translations.footer.address.city}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">+90 505 092 09 99</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">yusuf@sealive.net</span>
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
              <span className="text-sm text-gray-400 mr-2">{translations.footer.followUs}</span>
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
                {translations.footer.legal.privacy}
              </Link>
              <Link href="/terms" className="hover:text-yellow-400 transition-colors">
                {translations.footer.legal.terms}
              </Link>
              <Link href="/cookies" className="hover:text-yellow-400 transition-colors">
                {translations.footer.legal.cookies}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            {translations.footer.trustBadges.map((badge, index) => (
              <div key={index} className="text-xs text-gray-500">{badge}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 