'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/language-context'

export default function CookiesPage() {
  const { translations } = useLanguage()

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 -mt-32 py-32 px-4 mb-16">
              <h1 className="text-4xl font-bold text-white mb-8 text-center">
                {translations.footer.legal.cookies}
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-600 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide useful information to website owners.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand how visitors use our site</li>
                <li>Preference cookies to remember your settings</li>
                <li>Marketing cookies to deliver relevant advertisements</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Preference Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies enable the website to remember choices you make (such as your language preference) and provide enhanced features.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Marketing Cookies</h3>
                <p className="text-gray-600 mb-4">
                  These cookies are used to track visitors across websites to enable us to display relevant advertisements.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Managing Cookies</h2>
              <p className="text-gray-600 mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Browser settings to block or delete cookies</li>
                <li>Third-party opt-out mechanisms</li>
                <li>Our cookie consent tool</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Contact Information</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about our Cookie Policy, please contact us at:
              </p>
              <ul className="list-none pl-6 mb-6 text-gray-600">
                <li>Email: {translations.header.contactInfo.email}</li>
                <li>Phone: {translations.header.contactInfo.phone}</li>
                <li>Address: {translations.footer.address.line1}, {translations.footer.address.line2}, {translations.footer.address.city}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 