import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Anchor, Shield, Globe, Clock, Award, ArrowRight, CheckCircle, Star, Users, MapPin, Phone } from 'lucide-react'

export default function YachtTransportationPage() {
  const yachtServices = [
    {
      title: "Luxury Yacht Shipping",
      description: "Premium white-glove service for luxury yachts up to 200 feet with complete insurance coverage.",
      features: ["Full Insurance Coverage", "Climate-Controlled Transport", "24/7 Monitoring", "Expert Handling"],
      icon: Anchor,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mega Yacht Transport",
      description: "Specialized transport solutions for mega yachts and superyachts with custom engineering support.",
      features: ["Custom Engineering", "Route Planning", "Port Coordination", "Regulatory Compliance"],
      icon: Award,
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Yacht Delivery Services",
      description: "Professional yacht delivery with experienced captains and crew for safe passage worldwide.",
      features: ["Experienced Crew", "Global Coverage", "Weather Routing", "Progress Updates"],
      icon: Globe,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const specifications = [
    { label: "Maximum Length", value: "200+ feet" },
    { label: "Weight Capacity", value: "Up to 500 tons" },
    { label: "Insurance Coverage", value: "Up to $50M" },
    { label: "Global Ports", value: "500+ destinations" }
  ]

  const testimonials = [
    {
      name: "Marcus Whitfield",
      title: "Yacht Owner",
      content: "Exceptional service from start to finish. My 150-foot yacht was handled with utmost care and professionalism.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Isabella Rodriguez",
      title: "Yacht Broker",
      content: "Modern Sea Live consistently delivers premium yacht transport services. Highly recommended for luxury vessels.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-800/70 to-blue-900/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Anchor size={16} className="mr-2" />
              Premium Yacht Transportation
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Luxury Yacht
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Transportation
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              World-class yacht transportation services with white-glove handling, complete insurance coverage, 
              and specialized expertise for luxury vessels up to $50M value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                Get Quote
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{spec.value}</div>
                <div className="text-gray-600 font-medium">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive yacht transportation solutions tailored to your vessel's specific requirements.
            </p>
          </div>

          <div className="space-y-16">
            {yachtServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} space-y-6`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 border border-yellow-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent size={28} className="text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle size={18} className="text-yellow-500" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-2xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A meticulous approach to yacht transportation ensuring safety, security, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Detailed yacht inspection and transport planning", icon: "🔍" },
              { step: "02", title: "Preparation", description: "Professional preparation and documentation", icon: "📋" },
              { step: "03", title: "Transport", description: "Secure transport with real-time monitoring", icon: "🚢" },
              { step: "04", title: "Delivery", description: "Safe delivery and condition verification", icon: "✅" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 text-gray-900 rounded-full flex items-center justify-center mx-auto font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {process.icon}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by yacht owners and brokers worldwide for premium transportation services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Transport Your Yacht?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Contact our yacht transportation specialists for a personalized quote and consultation. 
              Available 24/7 for urgent requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center group">
                Get Free Quote
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center">
                <Phone size={18} className="mr-2" />
                +90 (212) 555-0123
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-400 mb-4">Trusted by luxury yacht owners worldwide</p>
              <div className="flex justify-center items-center space-x-8 text-white/60">
                <span className="text-sm">⭐ Premium Service</span>
                <span className="text-sm">🛡️ $50M Insurance</span>
                <span className="text-sm">🌍 Global Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 