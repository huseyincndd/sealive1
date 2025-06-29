import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Ship, Plane, Truck, Anchor, Shield, Globe, Clock, Award, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Anchor,
      title: "Yacht Transportation",
      subtitle: "Premium Marine Services",
      description: "Specialized yacht shipping with white-glove service, global coverage, and complete insurance protection for luxury vessels up to $50M value.",
      features: ["Full Insurance Coverage", "Climate-Controlled Transport", "Real-Time Tracking", "White-Glove Handling"],
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      premium: true,
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      subtitle: "Global Sea Transport",
      description: "Comprehensive ocean freight services with FCL and LCL options, connecting major ports worldwide with reliable scheduling and competitive rates.",
      features: ["FCL & LCL Options", "Port-to-Port Service", "Customs Clearance", "Documentation Support"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      premium: false,
      gradient: "from-slate-600 to-slate-800"
    },
    {
      icon: Plane,
      title: "Air Freight",
      subtitle: "Express Air Cargo",
      description: "Fast and secure air freight services for time-sensitive shipments with comprehensive tracking, temperature control, and specialized handling.",
      features: ["Express Delivery", "Temperature Control", "Dangerous Goods", "Charter Services"],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      premium: false,
      gradient: "from-slate-600 to-slate-800"
    },
    {
      icon: Truck,
      title: "Land Transport",
      subtitle: "Road & Rail Logistics",
      description: "Door-to-door land transport solutions across continents with specialized equipment, experienced drivers, and real-time tracking systems.",
      features: ["Door-to-Door Service", "Specialized Equipment", "Cross-Border Transport", "Real-Time Updates"],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      premium: false,
      gradient: "from-slate-600 to-slate-800"
    }
  ]

  const additionalServices = [
    {
      icon: Shield,
      title: "Marine Insurance",
      description: "Comprehensive marine and cargo insurance coverage with global protection and instant claims processing.",
      color: "bg-emerald-50 border-emerald-200",
      iconColor: "text-emerald-600"
    },
    {
      icon: Globe,
      title: "Customs Clearance",
      description: "Expert customs brokerage and documentation services with expedited processing and compliance assurance.",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Project Logistics",
      description: "Complex project cargo and heavy lift solutions with specialized equipment and engineering support.",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: Award,
      title: "Supply Chain Consulting",
      description: "Strategic logistics consulting and supply chain optimization with cost reduction and efficiency improvements.",
      color: "bg-amber-50 border-amber-200",
      iconColor: "text-amber-600"
    }
  ]

  const processSteps = [
    { 
      step: "01", 
      title: "Initial Consultation", 
      description: "Detailed assessment of your shipping requirements and customized solution planning.",
      icon: "📋"
    },
    { 
      step: "02", 
      title: "Route Planning", 
      description: "Optimal route selection, documentation preparation, and regulatory compliance verification.",
      icon: "🗺️"
    },
    { 
      step: "03", 
      title: "Professional Execution", 
      description: "Expert handling, secure transport, and continuous monitoring throughout the journey.",
      icon: "🚢"
    },
    { 
      step: "04", 
      title: "Safe Delivery", 
      description: "Timely delivery confirmation, completion documentation, and post-delivery support.",
      icon: "✅"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('https://villaqrmenu.b-cdn.net/sealive/ChatGPT%20Image%2029%20Haz%202025%2014_46_02.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-slate-900/70"></div>
          
          {/* Geometric Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rotate-12"></div>
            <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-white/20 rotate-45"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Ship size={16} className="mr-2" />
              Professional Freight Services
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Global Logistics
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Excellence
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Comprehensive freight forwarding solutions with specialized expertise in yacht transportation, 
              ocean freight, air cargo, and land transport services across six continents.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                Get Free Quote
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Main Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Core Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional freight forwarding solutions tailored to your specific requirements, 
              with industry-leading expertise and global reach.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} space-y-6`}>
                    {/* Premium Badge */}
                    {service.premium && (
                      <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-amber-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                        <Award size={14} className="mr-2" />
                        Premium Flagship Service
                      </div>
                    )}
                    
                    {/* Service Header */}
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.premium ? 'from-yellow-400/20 to-amber-400/20 border border-yellow-400/30' : 'from-gray-100 to-gray-200'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent size={28} className={service.premium ? "text-yellow-600" : "text-gray-600"} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className={`text-lg font-medium ${service.premium ? 'text-yellow-600' : 'text-gray-500'}`}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle size={18} className={service.premium ? "text-yellow-500" : "text-green-500"} />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Link 
                      href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}
                      className={`${service.premium 
                        ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                      } px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center group inline-flex`}
                    >
                      Learn More
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Enhanced Image */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent rounded-2xl"></div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-2xl w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Overlay Badge */}
                      {service.premium && (
                        <div className="absolute top-6 right-6 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          ⭐ FLAGSHIP
                        </div>
                      )}
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${service.gradient} opacity-80 rounded-b-2xl flex items-end p-6`}>
                        <div className="text-white">
                          <p className="text-sm opacity-90 mb-1">Starting from</p>
                          <p className="text-lg font-bold">Contact for Quote</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Additional Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to complement your freight forwarding needs and ensure seamless operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className={`${service.color} rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 group cursor-pointer`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} className={service.iconColor} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined, transparent, and professional approach to freight forwarding that ensures excellence at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center group">
                {/* Step Circle */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 text-gray-900 rounded-full flex items-center justify-center mx-auto font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {process.icon}
                  </div>
                  
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
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

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Ship Your Cargo?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Contact our freight forwarding specialists for a detailed quote and consultation 
              tailored to your specific shipping requirements. Available 24/7 worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center group">
                Get Free Quote
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                📞 +90 (212) 555-0123
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-400 mb-4">Trusted by 500+ companies worldwide</p>
              <div className="flex justify-center items-center space-x-8 text-white/60">
                <span className="text-sm">🏆 ISO 9001 Certified</span>
                <span className="text-sm">🛡️ Fully Insured</span>
                <span className="text-sm">🌍 Global Network</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 