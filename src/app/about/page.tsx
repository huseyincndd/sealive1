import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, Globe, Award, Users, Calendar, Anchor } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Security & Insurance",
      description: "Full coverage protection up to $50M with comprehensive marine insurance policies."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Specialized marine terminals and logistics partners across 50+ countries worldwide."
    },
    {
      icon: Award,
      title: "Expert Handling",
      description: "Dedicated yacht transport specialists with decades of marine logistics experience."
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Certified marine transport professionals ensuring white-glove service standards."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-900 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')" }}
          />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Anchor size={14} className="mr-2" />
              About Modern Sea Live
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Leading Yacht Transportation Specialists
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              With over 15 years of experience in marine logistics, we specialize in secure, 
              professional yacht transportation services for luxury vessels worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, Modern Sea Live began as a specialized freight forwarding company 
                  with a vision to revolutionize yacht transportation services. What started as a 
                  small operation has grown into a globally recognized leader in marine logistics.
                </p>
                <p>
                  Our expertise in luxury vessel transportation has made us the preferred choice 
                  for yacht owners, brokers, and manufacturers worldwide. We understand that each 
                  yacht represents significant investment and emotional value to its owner.
                </p>
                <p>
                  Today, we operate through a network of specialized marine terminals across 50+ countries, 
                  ensuring your vessel receives the same level of professional care regardless of destination.
                </p>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Professional yacht transportation"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every aspect of our yacht transportation services, 
              ensuring excellence in every shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent size={20} className="text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                "To provide the world's most reliable and professional yacht transportation services, 
                ensuring every luxury vessel reaches its destination safely, securely, and on time."
              </p>
              <p className="text-gray-600">
                We combine decades of marine logistics expertise with cutting-edge technology and 
                an unwavering commitment to excellence, making us the trusted choice for yacht 
                transportation worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transport Your Yacht?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact our team of yacht transportation specialists for a personalized consultation 
              and detailed quote for your vessel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Get Quote
              </button>
              <button className="border border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 