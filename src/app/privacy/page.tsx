'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/language-context'

export default function PrivacyPage() {
  const { translations } = useLanguage()

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 -mt-32 py-32 px-4 mb-16">
              <h1 className="text-4xl font-bold text-white mb-8 text-center">
                {translations.footer.legal.privacy}
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including when you:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Fill out forms on our website</li>
                <li>Create an account</li>
                <li>Request a quote</li>
                <li>Contact us for support</li>
                <li>Subscribe to our newsletter</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Provide and improve our services</li>
                <li>Process your shipping requests</li>
                <li>Send you updates about your shipments</li>
                <li>Respond to your inquiries</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Service providers who assist in our operations</li>
                <li>Partners involved in your shipment</li>
                <li>Law enforcement when required by law</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
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