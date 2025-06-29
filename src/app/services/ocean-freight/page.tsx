import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Ship, Clock, Shield, Globe, CheckCircle, ArrowRight, Package, Truck } from 'lucide-react'

export default function OceanFreightPage() {
  const oceanServices = [
    {
      title: "FCL (Full Container Load)",
      description: "Complete container shipping solutions for large cargo volumes with dedicated container space and competitive rates.",
      features: ["20ft & 40ft Containers", "Direct Port-to-Port", "Customs Clearance", "Door-to-Door Options"],
      icon: Package,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "LCL (Less Container Load)",
      description: "Cost-effective consolidation services for smaller shipments sharing container space with other cargo.",
      features: ["Flexible Volume", "Weekly Departures", "Consolidation Services", "Competitive Rates"],
      icon: Ship,
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Break Bulk & Project Cargo",
      description: "Specialized handling for oversized, heavy, or unconventional cargo requiring special equipment and expertise.",
      features: ["Heavy Lift Capability", "Project Management", "Special Equipment", "Route Planning"],
      icon: Globe,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const routes = [
    { from: "Europe", to: "Middle East", time: "7-10 days", frequency: "Daily" },
    { from: "Asia", to: "Europe", time: "14-21 days", frequency: "Daily" },
    { from: "North America", to: "Asia", time: "12-18 days", frequency: "Daily" },
    { from: "Middle East", to: "Africa", time: "5-8 days", frequency: "3x/week" }
  ]

  const specifications = [
    { label: "Global Ports", value: "500+" },
    { label: "Container Types", value: "All Sizes" },
    { label: "Weekly Departures", value: "1000+" },
    { label: "Transit Coverage", value: "Worldwide" }
  ]

  const advantages = [
    {
      icon: Shield,
      title: "Comprehensive Insurance",
      description: "Full cargo protection with marine insurance coverage and claims support."
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Advanced tracking systems providing real-time visibility of your shipments."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive network of partners and agents in major ports worldwide."
    },
    {
      icon: Truck,
      title: "Intermodal Solutions",
      description: "Seamless integration with land and air transport for complete logistics."
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-800/70 to-gray-900/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Ship size={16} className="mr-2" />
              Ocean Freight Services
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Global Ocean
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Freight Solutions
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Comprehensive ocean freight services connecting major ports worldwide with FCL, LCL, and project cargo solutions. 
              Reliable, cost-effective, and fully tracked shipments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                Get Shipping Quote
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
              Ocean Freight Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible ocean freight solutions tailored to your cargo requirements and budget.
            </p>
          </div>

          <div className="space-y-16">
            {oceanServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} space-y-6`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-slate-400/20 border border-blue-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent size={28} className="text-blue-600" />
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
                          <CheckCircle size={18} className="text-blue-500" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center group">
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

      {/* Routes Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Major Shipping Routes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular services on major trade routes with competitive transit times and frequencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-200/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Ship size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{route.from} → {route.to}</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Transit Time</div>
                    <div className="text-lg font-semibold text-gray-900">{route.time}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Frequency</div>
                    <div className="text-lg font-semibold text-gray-900">{route.frequency}</div>
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
              Why Choose Our Ocean Freight
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ocean freight solutions with added value services and global coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
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
              Shipping Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined ocean freight process ensuring efficient and reliable cargo delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Quote Request", description: "Submit cargo details for competitive pricing", icon: "📋" },
              { step: "02", title: "Booking", description: "Confirm booking and prepare documentation", icon: "📝" },
              { step: "03", title: "Pickup", description: "Cargo collection and container loading", icon: "🚛" },
              { step: "04", title: "Transit", description: "Ocean transport with tracking updates", icon: "🚢" },
              { step: "05", title: "Delivery", description: "Port arrival and final delivery", icon: "✅" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-slate-700 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {process.icon}
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-600/50 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Required Documentation
              </h2>
              <p className="text-xl text-gray-600">
                Essential documents for smooth ocean freight operations and customs clearance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Commercial Invoice",
                "Packing List",
                "Bill of Lading",
                "Certificate of Origin",
                "Export/Import Licenses",
                "Insurance Certificate",
                "Customs Declaration",
                "Inspection Certificates",
                "Dangerous Goods Declaration"
              ].map((doc, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 flex items-center space-x-3">
                  <CheckCircle size={18} className="text-blue-500" />
                  <span className="text-gray-700 font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Ship Your Cargo?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Get competitive ocean freight rates and reliable shipping solutions. 
              Contact our specialists for a detailed quote and consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center group">
                Get Shipping Quote
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                📞 +90 (212) 555-0123
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-400 mb-4">Trusted by importers and exporters worldwide</p>
              <div className="flex justify-center items-center space-x-8 text-white/60">
                <span className="text-sm">🚢 FCL & LCL</span>
                <span className="text-sm">🌍 Global Network</span>
                <span className="text-sm">📱 Real-Time Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 