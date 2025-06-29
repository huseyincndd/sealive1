import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Truck, Clock, Shield, Globe, CheckCircle, ArrowRight, PackageCheck, BarChart3 } from 'lucide-react'

export default function LandTransportPage() {
  const landServices = [
    {
      title: "Full Truck Load (FTL)",
      description: "Dedicated truck services for large shipments requiring exclusive use of the entire trailer capacity.",
      features: ["Dedicated Vehicle", "Direct Route", "Faster Transit", "Secure Transport"],
      icon: Truck,
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Less Than Truck Load (LTL)",
      description: "Cost-effective consolidation services for smaller shipments sharing truck space with other cargo.",
      features: ["Cost Effective", "Regular Schedules", "Flexible Volumes", "Terminal Networks"],
      icon: PackageCheck,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cross-Border Transport",
      description: "International road transport with TIR and customs clearance services across European and Asian corridors.",
      features: ["TIR Operations", "Customs Clearance", "Border Expertise", "Documentation Support"],
      icon: Globe,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  const routes = [
    { from: "Turkey", to: "Europe", time: "3-5 days", distance: "2,500 km", frequency: "Daily" },
    { from: "Europe", to: "Central Asia", time: "7-10 days", distance: "4,000 km", frequency: "3x/week" },
    { from: "Middle East", to: "Caucasus", time: "2-4 days", distance: "1,500 km", frequency: "Daily" },
    { from: "Turkey", to: "Russia", time: "5-7 days", distance: "3,200 km", frequency: "2x/week" }
  ]

  const specifications = [
    { label: "Route Coverage", value: "50+ Countries" },
    { label: "Fleet Size", value: "500+ Vehicles" },
    { label: "Max Capacity", value: "Up to 40 tons" },
    { label: "TIR Certified", value: "100%" }
  ]

  const advantages = [
    {
      icon: Globe,
      title: "Door-to-Door Service",
      description: "Complete logistics solutions from pickup to final delivery with single point of contact.",
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: Shield,
      title: "Cargo Security",
      description: "GPS tracking, secure loading, and comprehensive insurance for complete peace of mind.",
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Adaptable pickup and delivery times to meet your specific operational requirements.",
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600"
    },
    {
      icon: Globe,
      title: "Route Optimization",
      description: "Advanced route planning and traffic management for efficient and timely deliveries.",
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    }
  ]

  const vehicleTypes = [
    {
      type: "Standard Trucks",
      description: "Regular cargo transport with standard trailers",
      capacity: "Up to 24 tons",
      dimensions: "13.6m x 2.5m x 3m",
      suitable: ["General Cargo", "Palletized Goods", "Dry Goods", "Consumer Products"]
    },
    {
      type: "Refrigerated Trucks",
      description: "Temperature-controlled transport for perishables",
      capacity: "Up to 22 tons",
      dimensions: "13.6m x 2.5m x 2.8m",
      suitable: ["Fresh Produce", "Pharmaceuticals", "Frozen Foods", "Chemicals"]
    },
    {
      type: "Flatbed Trailers",
      description: "Open trailers for oversized and heavy cargo",
      capacity: "Up to 40 tons",
      dimensions: "13.6m x 2.5m (open)",
      suitable: ["Machinery", "Construction Materials", "Steel Products", "Industrial Equipment"]
    },
    {
      type: "Specialized Vehicles",
      description: "Custom solutions for unique transport requirements",
      capacity: "Variable",
      dimensions: "Custom",
      suitable: ["Dangerous Goods", "Oversized Cargo", "High Value Items", "Project Cargo"]
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-emerald-800/70 to-teal-700/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Truck size={16} className="mr-2" />
              Professional Land Transport
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Reliable Road
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Transport Solutions
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Door-to-door land transport services across Europe, Asia, and Middle East corridors. 
              TIR-certified operations with real-time tracking and customs clearance support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                Get Transport Quote
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Track Vehicle
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
              Land Transport Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive road transport solutions for all cargo types and destinations.
            </p>
          </div>

          <div className="space-y-16">
            {landServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${!isEven ? 'lg:col-start-2' : ''} space-y-6`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 border border-green-400/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent size={28} className="text-green-600" />
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
                          <CheckCircle size={18} className="text-green-500" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center group">
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
              Major Transport Routes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular services on key international corridors with reliable transit times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {routes.map((route, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200/50">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <Truck size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{route.from} → {route.to}</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Transit Time</div>
                    <div className="text-lg font-semibold text-gray-900">{route.time}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Distance</div>
                    <div className="text-lg font-semibold text-gray-900">{route.distance}</div>
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
              Why Choose Our Land Transport
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional road transport with advanced tracking, security, and customer service.
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

      {/* Vehicle Types Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Vehicle Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern fleet of specialized vehicles to handle all types of cargo requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{vehicle.type}</h3>
                    <p className="text-gray-600 leading-relaxed">{vehicle.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">Capacity</div>
                    <div className="text-lg font-semibold text-gray-900">{vehicle.capacity}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-1">Dimensions</div>
                    <div className="text-lg font-semibold text-gray-900">{vehicle.dimensions}</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-3">Suitable For:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.suitable.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
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
              Transport Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Efficient land transport process ensuring secure and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Route Planning", description: "Optimal route selection and scheduling", icon: "🗺️" },
              { step: "02", title: "Pickup", description: "Professional cargo collection and loading", icon: "📦" },
              { step: "03", title: "Documentation", description: "Customs and border documentation", icon: "📋" },
              { step: "04", title: "Transit", description: "Secure transport with GPS tracking", icon: "🚛" },
              { step: "05", title: "Delivery", description: "Final delivery and confirmation", icon: "✅" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {process.icon}
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-600/50 to-transparent"></div>
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
      <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready for Land Transport?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Get competitive land transport rates with door-to-door service. 
              Our specialists provide custom solutions for your specific requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center group">
                Get Transport Quote
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                📞 +90 (212) 555-0123
              </button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-400 mb-4">Trusted for cross-border transport across continents</p>
              <div className="flex justify-center items-center space-x-8 text-white/60">
                <span className="text-sm">🚛 TIR Certified</span>
                <span className="text-sm">📍 GPS Tracking</span>
                <span className="text-sm">🛡️ Fully Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 