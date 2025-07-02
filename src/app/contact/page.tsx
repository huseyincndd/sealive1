'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const { translations } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Professional Hero Section with Animation */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" 
            alt="SeaLive lojistik iletişim merkezi - profesyonel ofis binası"
            className="w-full h-full object-cover transform scale-105 transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-blue-900/75 to-gray-800/80"></div>
        </div>

        <div className={`relative z-10 container mx-auto px-4 text-center text-white transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="max-w-4xl mx-auto">
            <div className={`inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 mb-8 transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <span className="text-white font-medium">{translations.contact.hero.badge}</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-700 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {translations.contact.hero.title}
            </h1>
            
            <p className={`text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-3xl mx-auto transition-all duration-700 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {translations.contact.hero.description}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-900 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <a href="#contact-form" className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>{translations.contact.hero.getQuote}</span>
                <ArrowRight size={20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href={`tel:${translations.header.contactInfo.phone}`} className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 hover:border-white/50">
                <Phone size={20} className="mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span>{translations.contact.hero.callNow}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Contact Section with Animations */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {translations.contact.section.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {translations.contact.section.subtitle}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Contact Form with Staggered Animation */}
              <div className={`lg:col-span-2 transition-all duration-700 delay-300 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 lg:p-12 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {translations.contact.form.title}
                    </h3>
                    <p className="text-gray-600">
                      {translations.contact.form.subtitle}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-800 mb-2 transition-colors group-focus-within:text-blue-600">
                          {translations.contact.form.fields.name} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={translations.contact.form.placeholders.name}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 hover:border-gray-400 transform focus:scale-[1.02]"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-800 mb-2 transition-colors group-focus-within:text-blue-600">
                          {translations.contact.form.fields.email} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={translations.contact.form.placeholders.email}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 hover:border-gray-400 transform focus:scale-[1.02]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-800 mb-2 transition-colors group-focus-within:text-blue-600">
                          {translations.contact.form.fields.phone}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={translations.contact.form.placeholders.phone}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 hover:border-gray-400 transform focus:scale-[1.02]"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-800 mb-2 transition-colors group-focus-within:text-blue-600">
                          {translations.contact.form.fields.company}
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder={translations.contact.form.placeholders.company}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 hover:border-gray-400 transform focus:scale-[1.02]"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-800 mb-2 transition-colors group-focus-within:text-blue-600">
                        {translations.contact.form.fields.service}
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 hover:border-gray-400 transform focus:scale-[1.02] appearance-none"
                      >
                        <option value="" className="text-gray-900">{translations.contact.form.placeholders.service}</option>
                        <option value="ocean" className="text-gray-900">{translations.contact.form.services.ocean}</option>
                        <option value="air" className="text-gray-900">{translations.contact.form.services.air}</option>
                        <option value="land" className="text-gray-900">{translations.contact.form.services.land}</option>
                        <option value="yacht" className="text-gray-900">{translations.contact.form.services.yacht}</option>
                        <option value="other" className="text-gray-900">{translations.contact.form.services.other}</option>
                      </select>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-800 mb-2 transition-colors group-focus-within:text-blue-600">
                        {translations.contact.form.fields.message} *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={translations.contact.form.placeholders.message}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none bg-white text-gray-900 hover:border-gray-400 transform focus:scale-[1.02]"
                      />
                    </div>

                    {/* Submit Status with Animation */}
                    {submitStatus === 'success' && (
                      <div className="flex items-center space-x-3 text-green-700 bg-green-50 p-4 rounded-lg border border-green-200 animate-pulse">
                        <CheckCircle size={20} className="animate-bounce" />
                        <span className="font-medium">{translations.contact.form.success}</span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="flex items-center space-x-3 text-red-700 bg-red-50 p-4 rounded-lg border border-red-200 animate-pulse">
                        <AlertCircle size={20} className="animate-bounce" />
                        <span className="font-medium">{translations.contact.form.error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>{translations.contact.form.sending}</span>
                        </>
                      ) : (
                        <>
                          <Send size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                          <span>{translations.contact.form.submit}</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Information Sidebar with Animation */}
              <div className={`space-y-8 transition-all duration-700 delay-500 transform ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                
                {/* Contact Details */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {translations.contact.info.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="group flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                        <Phone className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{translations.contact.info.phone}</h4>
                        <a href={`tel:${translations.header.contactInfo.phone}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                          {translations.header.contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                        <Mail className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{translations.contact.info.email}</h4>
                        <a href={`mailto:${translations.header.contactInfo.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                          {translations.header.contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                        <MapPin className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{translations.contact.info.address.title}</h4>
                        <div className="text-gray-600 text-sm space-y-1">
                          <p>{translations.contact.info.address.line1}</p>
                          <p>{translations.contact.info.address.line2}</p>
                          <p>{translations.contact.info.address.line3}</p>
                          <p>{translations.contact.info.address.line4}</p>
                        </div>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                        <Clock className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{translations.contact.info.hours.title}</h4>
                        <div className="text-gray-600 text-sm space-y-1">
                          <p>{translations.contact.info.hours.weekdays}</p>
                          <p>{translations.contact.info.hours.saturday}</p>
                          <p>{translations.contact.info.hours.sunday}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Stats with Staggered Animation */}
                <div className="bg-blue-50 rounded-lg border border-blue-100 p-6 hover:bg-blue-100 transition-all duration-300 transform hover:scale-[1.02]">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{translations.contact.whyChoose.title}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">{translations.contact.whyChoose.experience}</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300 delay-100">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">{translations.contact.whyChoose.network}</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300 delay-200">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">{translations.contact.whyChoose.support}</span>
                    </div>
                    <div className="flex items-center space-x-3 hover:translate-x-2 transition-transform duration-300 delay-300">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">{translations.contact.whyChoose.pricing}</span>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact with Pulse Animation */}
                <div className="bg-gray-900 rounded-lg p-6 text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02]">
                  <h3 className="text-lg font-bold mb-3">{translations.contact.emergency.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{translations.contact.emergency.subtitle}</p>
                  <a 
                    href={`tel:${translations.header.contactInfo.phone}`}
                    className="group inline-flex items-center w-full justify-center px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    <Phone size={18} className="mr-2 animate-pulse group-hover:animate-bounce" />
                    {translations.contact.emergency.button}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 