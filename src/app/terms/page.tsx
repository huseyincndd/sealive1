'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/language-context'

export default function TermsPage() {
  const { translations } = useLanguage()

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 -mt-32 py-32 px-4 mb-16">
              <h1 className="text-4xl font-bold text-white mb-8 text-center">
                {translations.footer.legal.terms}
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Services</h2>
              <p className="text-gray-600 mb-4">
                We provide the following shipping and logistics services:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Ocean freight shipping</li>
                <li>Air freight services</li>
                <li>Land transport</li>
                <li>Yacht transportation</li>
                <li>Customs clearance</li>
                <li>Freight forwarding</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Obligations</h2>
              <p className="text-gray-600 mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Provide accurate and complete information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use the services only for lawful purposes</li>
                <li>Pay all charges associated with your shipments</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Liability</h2>
              <p className="text-gray-600 mb-6">
                Our liability is limited to the extent permitted by applicable law. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Delays caused by customs or other authorities</li>
                <li>Force majeure events</li>
                <li>Indirect or consequential losses</li>
                <li>Loss or damage due to improper packaging</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Information</h2>
              <p className="text-gray-600 mb-6">
                For questions about these Terms of Use, please contact us at:
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