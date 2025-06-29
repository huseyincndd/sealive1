import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Plane, Clock, Shield, Globe, Thermometer, ArrowRight, CheckCircle, Zap, Package, AlertTriangle } from 'lucide-react'

export default function AirFreightPage() {
  const airServices = [
    {
      title: "Express Air Freight",
      description: "Priority air cargo services for time-critical shipments with guaranteed delivery times and premium handling.",
      features: ["24-48 Hour Delivery", "Priority Handling", "Real-Time Tracking", "Door-to-Door Service"],
      icon: Zap,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Standard Air Cargo",
      description: "Cost-effective air freight solutions for regular shipments with reliable transit times and competitive rates.",
      features: ["3-7 Day Transit", "Competitive Rates", "Consolidation Options", "Global Coverage"],
      icon: Plane,
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Specialized Cargo",
      description: "Expert handling for temperature-sensitive, dangerous goods, and oversized cargo with specialized equipment.",
      features: ["Temperature Control", "Dangerous Goods", "Oversized Cargo", "Pharmaceutical Grade"],
      icon: Package,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const destinations = [
    { region: "Europe", airports: "50+", time: "4-6 hours", frequency: "Daily" },
    { region: "Asia Pacific", airports: "80+", time: "8-12 hours", frequency: "Daily" },
    { region: "North America", airports: "60+", time: "10-14 hours", frequency: "Daily" },
    { region: "Middle East", airports: "25+", time: "2-4 hours", frequency: "Multiple Daily" }
  ]

  const specifications = [
    { label: "Global Airports", value: "200+" },
    { label: "Daily Flights", value: "500+" },
    { label: "Max Weight", value: "Up to 100 tons" },
    { label: "Express Delivery", value: "24-48 hrs" }
  ]

  const advantages = [
    {
      icon: Clock,
      title: "Speed & Reliability",
      description: "Fastest transit times with guaranteed delivery schedules and on-time performance.",
      color: "bg-red-50 border-red-200",
      iconColor: "text-red-600"
    },
    {
      icon: Shield,
      title: "Cargo Security",
      description: "Advanced security protocols and handling procedures for high-value shipments.",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Thermometer,
      title: "Temperature Control",
      description: "Climate-controlled transport for pharmaceuticals, perishables, and sensitive goods.",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive airline partnerships and airport facilities across six continents.",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    }
  ]

  const cargoTypes = [
    {
      type: "General Cargo",
      description: "Standard commercial goods and merchandise",
      examples: ["Electronics", "Textiles", "Machinery", "Documents"]
    },
    {
      type: "Perishables",
      description: "Temperature-sensitive and time-critical goods",
      examples: ["Fresh Produce", "Flowers", "Seafood", "Pharmaceuticals"]
    },
    {
      type: "Dangerous Goods",
      description: "Hazardous materials requiring special handling",
      examples: ["Chemicals", "Batteries", "Medical Samples", "Flammable Goods"]
    },
    {
      type: "High Value",
      description: "Valuable cargo requiring enhanced security",
      examples: ["Jewelry", "Electronics", "Artwork", "Precious Metals"]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-orange-800/70 to-yellow-700/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Plane size={16} className="mr-2" />
              Express Air Freight Services
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Fast & Reliable
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Air Freight
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Time-critical air cargo solutions with express delivery, temperature control, and specialized handling. 
              Connecting 200+ airports worldwide with guaranteed transit times.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                Get Air Quote
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Track Shipment
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
              Air Freight Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive air cargo solutions for every shipping requirement and timeline.
            </p>
          </div>

          <div className="space-y-16">
            {airServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} space-y-6`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-400/20 to-orange-400/20 border border-red-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent size={28} className="text-red-600" />
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
                          <CheckCircle size={18} className="text-red-500" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center group">
                      Learn More
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
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

      {/* Destinations Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Global Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Direct flights and connections to major airports worldwide with competitive transit times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((dest, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Plane size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{dest.region}</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Airports</div>
                    <div className="text-lg font-semibold text-gray-900">{dest.airports}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Transit Time</div>
                    <div className="text-lg font-semibold text-gray-900">{dest.time}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Frequency</div>
                    <div className="text-lg font-semibold text-gray-900">{dest.frequency}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Air Freight
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced air cargo solutions with specialized handling and guaranteed performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <div key={index} className={`${advantage.color} rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 group cursor-pointer`}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} className={advantage.iconColor} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cargo Types Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cargo Types We Handle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized handling for all types of air cargo with appropriate equipment and procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cargoTypes.map((cargo, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{cargo.type}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cargo.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700 mb-3">Examples:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {cargo.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Air Freight Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined air cargo process ensuring fast, secure, and reliable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Quote & Booking", description: "Instant air freight quotes and booking confirmation", icon: "📋" },
              { step: "02", title: "Collection", description: "Professional cargo pickup and preparation", icon: "📦" },
              { step: "03", title: "Airport Processing", description: "Security screening and flight loading", icon: "✈️" },
              { step: "04", title: "Flight Transit", description: "Secure air transport with tracking", icon: "🛫" },
              { step: "05", title: "Delivery", description: "Final delivery and proof of receipt", icon: "✅" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {process.icon}
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-red-600/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Need Fast Air Freight?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Get instant air freight quotes and guaranteed delivery times. 
              Our specialists are available 24/7 for urgent shipments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center group">
                Get Instant Quote
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                📞 +90 (212) 555-0123
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-400 mb-4">Trusted for time-critical shipments worldwide</p>
              <div className="flex justify-center items-center space-x-8 text-white/60">
                <span className="text-sm">⚡ 24-48 Hour Express</span>
                <span className="text-sm">🌡️ Temperature Control</span>
                <span className="text-sm">🛡️ Secure Handling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 