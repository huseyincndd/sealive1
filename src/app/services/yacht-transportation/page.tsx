'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Anchor, Globe, CheckCircle, ArrowRight, Award, Star, Phone, Ship, TrendingUp, Shield, MapPin } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

// Enhanced Service Schema with more detailed information
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Yat Taşımacılığı - Profesyonel Yat Taşıma Hizmetleri",
  "description": "Türkiye'nin lider yat taşımacılığı firması SeaLive ile yat taşıma, tekne nakliyesi ve uluslararası yat lojistiği hizmetleri. Mersin, İstanbul, Antalya ve tüm Türkiye'de güvenilir yat taşımacılığı.",
  "provider": {
    "@type": "Organization",
    "name": "SeaLive Lojistik & Taşımacılık",
    "url": "https://www.sealive.net",
    "logo": "https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png",
    "image": "https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png",
    "telephone": "+90-505-092-09-99",
    "email": "yusuf@sealive.net",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR",
      "addressRegion": "Mersin",
      "addressLocality": "Mersin"
    },
    "sameAs": [
      "https://www.sealive.net"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Mersin"
    },
    {
      "@type": "City",
      "name": "İstanbul"
    },
    {
      "@type": "City",
      "name": "Antalya"
    },
    {
      "@type": "City",
      "name": "İzmir"
    },
    {
      "@type": "City",
      "name": "Bodrum"
    },
    {
      "@type": "City",
      "name": "Marmaris"
    },
    {
      "@type": "Country",
      "name": "Türkiye"
    },
    {
      "@type": "Country",
      "name": "Worldwide"
    }
  ],
  "serviceType": "Yat Taşımacılığı, Yat Taşıma, Tekne Nakliyesi, Yacht Transportation",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Yat Taşıma Hizmetleri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mersin Yat Taşımacılığı",
          "description": "Mersin'de profesyonel yat taşıma ve tekne nakliyesi hizmetleri. 7/24 güvenli yat taşımacılığı."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Uluslararası Yat Taşıma",
          "description": "Dünya çapında yat taşımacılığı ve tekne nakliyesi. Sigortalı ve güvenli yat taşıma hizmeti."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Süperyat Taşımacılığı",
          "description": "200+ metre lüks yatlar için özel taşıma ve lojistik çözümleri. Premium yat taşıma hizmeti."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tekne Nakliyesi",
          "description": "Her boyutta tekne için güvenli nakliye ve taşıma çözümleri. Uygun fiyatlı tekne taşıma."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Yat Taşıma Fiyatları",
          "description": "Şeffaf ve rekabetçi yat taşıma fiyatları. Ücretsiz yat taşımacılığı teklifi."
        }
      }
    ]
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Maksimum Yat Boyu",
      "value": "200+ metre"
    },
    {
      "@type": "PropertyValue",
      "name": "Ağırlık Kapasitesi", 
      "value": "2000 ton'a kadar"
    },
    {
      "@type": "PropertyValue",
      "name": "Sigorta Kapsamı",
      "value": "50 Milyon USD'ye kadar"
    },
    {
      "@type": "PropertyValue",
      "name": "Global Destinasyon",
      "value": "500+ Liman"
    },
    {
      "@type": "PropertyValue",
      "name": "Deneyim",
      "value": "15+ Yıl"
    },
    {
      "@type": "PropertyValue",
      "name": "Taşınan Yat Sayısı",
      "value": "1000+ Yat"
    }
  ],
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Ahmet Yılmaz"
      },
      "reviewBody": "Mersin'de yat taşımacılığı konusunda en iyi firma. Yatımı güvenli bir şekilde taşıdılar, çok memnun kaldım.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      }
    },
    {
      "@type": "Review", 
      "author": {
        "@type": "Person",
        "name": "Mehmet Demir"
      },
      "reviewBody": "Yat taşıma fiyatları çok uygun ve hizmet kalitesi mükemmel. Kesinlikle tavsiye ederim.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Ayşe Kaya"
      },
      "reviewBody": "Tekne taşımacılığı için SeaLive'ı tercih ettik. Profesyonel ekip ve güvenli taşıma için teşekkürler.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": 5,
        "bestRating": 5
      }
    }
  ]
};

// LocalBusiness Schema for better local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SeaLive Yat Taşımacılığı",
  "image": "https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png",
  "description": "Mersin ve Türkiye genelinde profesyonel yat taşımacılığı ve tekne nakliyesi hizmetleri",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mersin",
    "addressRegion": "Mersin",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.8121,
    "longitude": 34.6415
  },
  "url": "https://www.sealive.net/services/yacht-transportation",
  "telephone": "+90-505-092-09-99",
  "email": "yusuf@sealive.net",
  "priceRange": "$$-$$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
};

// FAQ Schema for rich snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Yat taşıma fiyatları ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yat taşıma fiyatları yatın boyutuna, ağırlığına, taşıma mesafesine ve hedefe göre değişmektedir. Ücretsiz teklif almak için bizimle iletişime geçebilirsiniz. SeaLive olarak şeffaf ve rekabetçi fiyatlar sunuyoruz."
      }
    },
    {
      "@type": "Question",
      "name": "Yat taşımacılığı nasıl yapılır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yat taşımacılığı profesyonel ekipman ve deneyimli ekiple yapılır. Önce yatınız özel taşıma ekipmanlarıyla güvenli şekilde kaldırılır, ardından deniz veya kara yoluyla hedef noktaya taşınır. Tüm süreç boyunca 7/24 takip ve sigorta ile korunursunuz."
      }
    },
    {
      "@type": "Question",
      "name": "Mersin yat taşımacılığı hizmeti veriyor musunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, Mersin'de profesyonel yat taşımacılığı hizmeti veriyoruz. Mersin limanından ve marinalarından yat taşıma işlemlerini güvenli ve hızlı şekilde gerçekleştiriyoruz. Mersin yat taşımacılığı konusunda 15 yılı aşkın deneyimimiz vardır."
      }
    },
    {
      "@type": "Question",
      "name": "Uluslararası yat taşıma yapıyor musunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, dünya çapında 500'den fazla limana uluslararası yat taşımacılığı hizmeti sunuyoruz. Yatınızı Türkiye'den herhangi bir ülkeye veya uluslararası destinasyonlar arasında güvenle taşıyoruz."
      }
    },
    {
      "@type": "Question",
      "name": "Yat taşımada sigorta var mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, tüm yat taşıma hizmetlerimiz 50 Milyon USD'ye kadar sigorta kapsamındadır. Yatınız taşıma sürecinde tam koruma altında olur ve olası her türlü hasar için güvence altındasınızdır."
      }
    },
    {
      "@type": "Question",
      "name": "Hangi boyutlarda yat taşıyorsunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Küçük teknelerden 200 metre uzunluğundaki süperyatlara kadar her boyutta yat taşımacılığı hizmeti veriyoruz. 2000 ton'a kadar ağırlık kapasitemiz bulunmaktadır."
      }
    },
    {
      "@type": "Question",
      "name": "Yat taşıma süresi ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yat taşıma süresi mesafeye ve taşıma yöntemine göre değişir. Kısa mesafeli kara taşımalarında 1-3 gün, uluslararası deniz taşımalarında ise 7-30 gün sürebilir. Detaylı bilgi için bizimle iletişime geçebilirsiniz."
      }
    },
    {
      "@type": "Question",
      "name": "Tekne taşımacılığı da yapıyor musunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, her türlü tekne taşımacılığı ve nakliyesi hizmeti veriyoruz. Yelkenli tekneler, motorlu tekneler, balıkçı tekneleri ve özel tekneler için profesyonel taşıma çözümleri sunuyoruz."
      }
    }
  ]
};

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://www.sealive.net"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Hizmetler",
      "item": "https://www.sealive.net/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Yat Taşımacılığı",
      "item": "https://www.sealive.net/services/yacht-transportation"
    }
  ]
};

export default function YachtTransportationPage() {
  const { translations } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const yachtServices = [
    {
      title: translations.yachtTransportPage.servicesSection.services[0].title,
      description: translations.yachtTransportPage.servicesSection.services[0].description,
      features: translations.yachtTransportPage.servicesSection.services[0].features,
      icon: Anchor,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: translations.yachtTransportPage.servicesSection.services[1].title,
      description: translations.yachtTransportPage.servicesSection.services[1].description,
      features: translations.yachtTransportPage.servicesSection.services[1].features,
      icon: Award,
      image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: translations.yachtTransportPage.servicesSection.services[2].title,
      description: translations.yachtTransportPage.servicesSection.services[2].description,
      features: translations.yachtTransportPage.servicesSection.services[2].features,
      icon: Globe,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Enhanced SEO Meta Tags */}
      <Head>
        <title>Yat Taşımacılığı | Profesyonel Yat Taşıma Hizmetleri | SeaLive</title>
        <meta name="description" content="Türkiye'nin lider yat taşımacılığı firması SeaLive. Mersin, İstanbul, Antalya'da güvenli yat taşıma ve tekne nakliyesi hizmetleri. Uygun fiyatlarla 7/24 hizmet. ☎ +90 505 092 09 99" />
        <meta name="keywords" content="yat taşımacılığı, yat taşıma, tekne taşımacılığı, tekne nakliyesi, mersin yat taşımacılığı, yat taşıma fiyatları, uluslararası yat taşıma, süperyat taşımacılığı, yat lojistik, tekne taşıma, istanbul yat taşımacılığı, antalya yat taşıma, bodrum yat nakliyesi, yacht transportation turkey" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="SeaLive Lojistik" />
        <link rel="canonical" href="https://www.sealive.net/services/yacht-transportation" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yat Taşımacılığı | Profesyonel Yat Taşıma Hizmetleri" />
        <meta property="og:description" content="Türkiye'nin en güvenilir yat taşımacılığı firması. Mersin, İstanbul, Antalya'da profesyonel yat taşıma hizmetleri. Uygun fiyatlar, sigortalı taşıma." />
        <meta property="og:url" content="https://www.sealive.net/services/yacht-transportation" />
        <meta property="og:image" content="https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yat Taşımacılığı - SeaLive" />
        <meta name="twitter:description" content="Profesyonel yat taşıma ve tekne nakliyesi hizmetleri. Güvenli, sigortalı, uygun fiyat." />
        <meta name="twitter:image" content="https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="TR-MER" />
        <meta name="geo.placename" content="Mersin" />
        <meta name="geo.position" content="36.8121;34.6415" />
        <meta name="ICBM" content="36.8121, 34.6415" />
      </Head>

      {/* All Schema Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <Header />
      
      {/* Breadcrumb Navigation for SEO */}
      <nav className="bg-gray-50 py-3 border-b border-gray-200 mt-20">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">Ana Sayfa</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/services" className="text-blue-600 hover:text-blue-800 hover:underline">Hizmetler</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 font-medium">Yat Taşımacılığı</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section - Optimized for "yat taşımacılığı" keyword */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Profesyonel yat taşımacılığı hizmetleri - SeaLive yat taşıma ve tekne nakliyesi - Mersin İstanbul Antalya"
            title="Yat Taşımacılığı ve Tekne Nakliyesi Hizmetleri"
            fill
            priority
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-800/70 to-blue-900/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`inline-flex items-center bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-400 px-6 py-3 rounded-full text-sm font-medium mb-8 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <Ship size={16} className="mr-2" />
              Türkiye&apos;nin Lider Yat Taşımacılığı Firması
            </div>
            
            <h1 className={`text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <span className="block">Profesyonel Yat Taşımacılığı</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                ve Tekne Nakliyesi Hizmetleri
              </span>
            </h1>
            
            <p className={`text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 transition-all duration-700 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Mersin, İstanbul, Antalya ve tüm Türkiye&apos;de <strong className="text-yellow-400">güvenli yat taşıma</strong> hizmetleri. 
              Uluslararası <strong className="text-yellow-400">yat taşımacılığı</strong> ve <strong className="text-yellow-400">tekne nakliyesi</strong> konusunda 
              15 yılı aşkın deneyimimizle yanınızdayız. Sigortalı, hızlı ve uygun fiyatlı yat taşıma çözümleri.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group transform hover:scale-105">
                {translations.yachtTransportPage.hero.getQuote}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                {translations.yachtTransportPage.hero.viewPortfolio}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {translations.yachtTransportPage.specifications.map((spec, index) => (
              <div key={index} className="text-center" style={{ transitionDelay: `${300 + index * 100}ms` }}>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{spec.value}</div>
                <div className="text-gray-600 font-medium">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section - SEO Optimized */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-400">
              <div className="flex items-center mb-3">
                <Shield className="text-yellow-500 mr-3" size={32} />
                <div>
                  <div className="text-2xl font-bold text-gray-900">Sigortalı</div>
                  <div className="text-sm text-gray-600">Yat Taşıma</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">50M USD&apos;ye kadar sigorta kapsamı</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-400">
              <div className="flex items-center mb-3">
                <MapPin className="text-blue-500 mr-3" size={32} />
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Global Liman</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Dünya çapında yat taşımacılığı</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-400">
              <div className="flex items-center mb-3">
                <TrendingUp className="text-green-500 mr-3" size={32} />
                <div>
                  <div className="text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Yıl Deneyim</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Profesyonel yat taşıma tecrübesi</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-400">
              <div className="flex items-center mb-3">
                <Award className="text-purple-500 mr-3" size={32} />
                <div>
                  <div className="text-2xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600">Taşınan Yat</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">Başarılı tekne nakliyesi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Keyword Optimized */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-20 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Yat Taşıma ve Tekne Nakliyesi Çözümlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her boyutta yat için profesyonel taşımacılık hizmetleri. Mersin yat taşımacılığı, 
              uluslararası yat taşıma ve tekne nakliyesi konusunda uzman ekibimizle güvenli çözümler sunuyoruz.
            </p>
          </div>

          <div className="space-y-16">
            {yachtServices.map((service, index) => {
              const IconComponent = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''} transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: `${500 + index * 200}ms` }}>
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
                        alt={`${service.title} - Profesyonel yat taşımacılığı ve tekne nakliyesi hizmetleri SeaLive`}
                        title={`${service.title} | Yat Taşıma Çözümleri`}
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

      {/* Process Section - Keyword Optimized */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-20 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Yat Taşımacılığı Nasıl Yapılır?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesyonel yat taşıma sürecimiz 4 aşamadan oluşur. Her adımda güvenlik, 
              kalite ve müşteri memnuniyeti odaklı çalışırız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {translations.yachtTransportPage.process.steps.map((process, index) => (
              <div key={index} className={`text-center group transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: `${700 + index * 100}ms` }}>
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 text-gray-900 rounded-full flex items-center justify-center mx-auto font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">
                    {['🔍', '📋', '🚢', '✅'][index]}
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

      {/* FAQ Section - Critical for SEO and Rich Snippets */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sıkça Sorulan Sorular - Yat Taşımacılığı
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Yat taşıma ve tekne nakliyesi hizmetlerimiz hakkında merak ettiğiniz her şey
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <details className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex justify-between items-center">
                <span className="flex items-center">
                  <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm">1</span>
                  Yat taşıma fiyatları ne kadar?
                </span>
                <ArrowRight className="transform group-open:rotate-90 transition-transform text-yellow-500" size={20} />
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p className="mb-3">
                  <strong>Yat taşıma fiyatları</strong> yatın boyutuna, ağırlığına, taşıma mesafesine ve hedefe göre değişmektedir. 
                  Örneğin, 30 metrelik bir yatın Mersin&apos;den İstanbul&apos;a taşınması ile 50 metrelik bir süperyatın uluslararası 
                  taşımacılığı farklı ücretlendirmeler gerektirir.
                </p>
                <p className="mb-3">
                  <strong>Fiyatlandırmamızda etkili faktörler:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Yatın uzunluğu, genişliği ve ağırlığı</li>
                  <li>Taşıma mesafesi (yerel/uluslararası)</li>
                  <li>Taşıma yöntemi (deniz/kara yolu)</li>
                  <li>Sigorta kapsamı</li>
                  <li>Özel ekipman gereksinimleri</li>
                </ul>
                <p className="mt-3 bg-yellow-50 p-3 rounded-lg">
                  💡 <strong>Ücretsiz teklif almak için</strong> bizimle iletişime geçebilirsiniz. 
                  SeaLive olarak şeffaf ve rekabetçi <strong>yat taşımacılığı fiyatları</strong> sunuyoruz.
                </p>
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex justify-between items-center">
                <span className="flex items-center">
                  <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm">2</span>
                  Yat taşımacılığı nasıl yapılır?
                </span>
                <ArrowRight className="transform group-open:rotate-90 transition-transform text-yellow-500" size={20} />
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p className="mb-3">
                  <strong>Profesyonel yat taşımacılığı</strong> özel ekipman ve deneyimli ekiple yapılır. 
                  İşte adım adım yat taşıma süreci:
                </p>
                <ol className="list-decimal list-inside space-y-3 ml-4">
                  <li><strong>Keşif ve Planlama:</strong> Yatınızın boyutları, ağırlığı ve özellikleri değerlendirilir. 
                  En uygun taşıma yöntemi belirlenir.</li>
                  <li><strong>Hazırlık:</strong> Yat taşımaya hazırlanır, gerekli koruma önlemleri alınır. 
                  Tüm yasal dokümantasyon tamamlanır.</li>
                  <li><strong>Kaldırma:</strong> Profesyonel vinç ve kaldırma ekipmanlarıyla yatınız güvenli 
                  şekilde kaldırılır ve özel taşıma platformuna yerleştirilir.</li>
                  <li><strong>Taşıma:</strong> Deniz veya kara yoluyla, 7/24 takip sistemiyle yatınız hedef 
                  noktaya güvenle taşınır.</li>
                  <li><strong>Teslimat:</strong> Hedef lokasyonda yatınız güvenli şekilde suya indirilir 
                  ve teslim edilir.</li>
                </ol>
                <p className="mt-3 bg-blue-50 p-3 rounded-lg">
                  🛡️ Tüm süreç boyunca <strong>7/24 takip</strong> ve <strong>50M USD&apos;ye kadar sigorta</strong> ile korunursunuz.
                </p>
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex justify-between items-center">
                <span className="flex items-center">
                  <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm">3</span>
                  Mersin yat taşımacılığı hizmeti veriyor musunuz?
                </span>
                <ArrowRight className="transform group-open:rotate-90 transition-transform text-yellow-500" size={20} />
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p className="mb-3">
                  Evet, <strong>Mersin&apos;de profesyonel yat taşımacılığı</strong> hizmeti veriyoruz. 
                  Mersin limanından ve marinalarından yat taşıma işlemlerini güvenli ve hızlı şekilde gerçekleştiriyoruz.
                </p>
                <p className="mb-3">
                  <strong>Mersin yat taşımacılığı</strong> konusunda 15 yılı aşkın deneyimimiz vardır. Hizmet verdiğimiz noktalar:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mersin Uluslararası Limanı</li>
                  <li>Mersin Marina ve Yat Limanları</li>
                  <li>Taşucu Limanı</li>
                  <li>Özel marinalar ve yat çekek yerleri</li>
                </ul>
                <p className="mt-3 bg-green-50 p-3 rounded-lg">
                  📍 Mersin&apos;den Türkiye&apos;nin her yerine ve uluslararası destinasyonlara <strong>yat taşıma</strong> hizmeti sunuyoruz.
                </p>
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex justify-between items-center">
                <span className="flex items-center">
                  <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm">4</span>
                  Uluslararası yat taşıma yapıyor musunuz?
                </span>
                <ArrowRight className="transform group-open:rotate-90 transition-transform text-yellow-500" size={20} />
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p className="mb-3">
                  Evet, dünya çapında <strong>500&apos;den fazla limana uluslararası yat taşımacılığı</strong> hizmeti sunuyoruz. 
                  Yatınızı Türkiye&apos;den herhangi bir ülkeye veya uluslararası destinasyonlar arasında güvenle taşıyoruz.
                </p>
                <p className="mb-3">
                  <strong>Popüler uluslararası yat taşıma rotalarımız:</strong>
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4 mb-3">
                  <li>🇹🇷 Türkiye → Akdeniz Ülkeleri</li>
                  <li>🇹🇷 Türkiye → Karayipler</li>
                  <li>🇹🇷 Türkiye → Amerika</li>
                  <li>🇹🇷 Türkiye → Orta Doğu</li>
                  <li>🇬🇷 Yunanistan → Türkiye</li>
                  <li>🇮🇹 İtalya → Türkiye</li>
                </ul>
                <p className="mt-3 bg-purple-50 p-3 rounded-lg">
                  🌍 Tüm <strong>uluslararası yat taşıma</strong> operasyonlarında gümrük işlemleri, sigorta ve dokümantasyon desteği sağlıyoruz.
                </p>
              </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex justify-between items-center">
                <span className="flex items-center">
                  <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm">5</span>
                  Yat taşımada sigorta var mı?
                </span>
                <ArrowRight className="transform group-open:rotate-90 transition-transform text-yellow-500" size={20} />
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p className="mb-3">
                  Evet, tüm <strong>yat taşıma hizmetlerimiz 50 Milyon USD&apos;ye kadar sigorta kapsamındadır</strong>. 
                  Yatınız taşıma sürecinde tam koruma altında olur ve olası her türlü hasar için güvence altındasınızdır.
                </p>
                <p className="mb-3">
                  <strong>Sigorta kapsamımız:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Taşıma sırasında oluşabilecek fiziksel hasarlar</li>
                  <li>Hırsızlık ve kaybolma</li>
                  <li>Doğal afetler</li>
                  <li>Üçüncü şahıs hasarları</li>
                  <li>Kaldırma ve indirme operasyonları</li>
                </ul>
                <p className="mt-3 bg-red-50 p-3 rounded-lg">
                  🛡️ <strong>Yat taşıma sigortası</strong> uluslararası standartlarda ve güvenilir sigorta şirketleriyle yapılmaktadır.
                </p>
              </div>
            </details>

            {/* FAQ Item 6 */}
            <details className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex justify-between items-center">
                <span className="flex items-center">
                  <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm">6</span>
                  Hangi boyutlarda yat taşıyorsunuz?
                </span>
                <ArrowRight className="transform group-open:rotate-90 transition-transform text-yellow-500" size={20} />
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p className="mb-3">
                  Küçük teknelerden <strong>200 metre uzunluğundaki süperyatlara</strong> kadar her boyutta 
                  yat taşımacılığı hizmeti veriyoruz. 2000 ton&apos;a kadar ağırlık kapasitemiz bulunmaktadır.
                </p>
                <p className="mb-3">
                  <strong>Taşıdığımız yat kategorileri:</strong>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-bold text-gray-900 mb-2">Küçük Tekneler (5-15m)</h4>
                    <p className="text-sm text-gray-600">Yelkenliler, sürat tekneleri, balıkçı tekneleri</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-bold text-gray-900 mb-2">Orta Boy Yatlar (15-40m)</h4>
                    <p className="text-sm text-gray-600">Motor yatlar, yelkenli yatlar, katamaranlar</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="font-bold text-gray-900 mb-2">Büyük Yatlar (40-100m)</h4>
                    <p className="text-sm text-gray-600">Lüks motor yatlar, megayatlar</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400">
                    <h4 className="font-bold text-gray-900 mb-2">Süperyatlar (100m+)</h4>
                    <p className="text-sm text-gray-600">Mega süperyatlar, özel yatlar</p>
                  </div>
                </div>
              </div>
            </details>

            {/* FAQ Item 7 */}
            <details className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex justify-between items-center">
                <span className="flex items-center">
                  <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm">7</span>
                  Yat taşıma süresi ne kadar?
                </span>
                <ArrowRight className="transform group-open:rotate-90 transition-transform text-yellow-500" size={20} />
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p className="mb-3">
                  <strong>Yat taşıma süresi</strong> mesafeye ve taşıma yöntemine göre değişir:
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-bold text-gray-900 mb-1">Yerel Kara Taşıması (Türkiye içi)</h4>
                    <p className="text-gray-700">⏱️ 1-3 gün - Mersin-İstanbul, Antalya-İzmir gibi rotalar</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-bold text-gray-900 mb-1">Akdeniz Bölgesi Deniz Taşıması</h4>
                    <p className="text-gray-700">⏱️ 5-10 gün - Yunanistan, İtalya, Fransa rotaları</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-400">
                    <h4 className="font-bold text-gray-900 mb-1">Avrupa Deniz Taşıması</h4>
                    <p className="text-gray-700">⏱️ 10-15 gün - Kuzey Avrupa limanları</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400">
                    <h4 className="font-bold text-gray-900 mb-1">Transatlantik/Uzun Mesafe</h4>
                    <p className="text-gray-700">⏱️ 15-30 gün - Amerika, Karayipler, Asya</p>
                  </div>
                </div>
                <p className="mt-3 bg-blue-50 p-3 rounded-lg">
                  💬 Detaylı süre bilgisi için rotanıza özel teklif alabilirsiniz.
                </p>
              </div>
            </details>

            {/* FAQ Item 8 */}
            <details className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
              <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex justify-between items-center">
                <span className="flex items-center">
                  <span className="bg-yellow-400 text-gray-900 w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm">8</span>
                  Tekne taşımacılığı da yapıyor musunuz?
                </span>
                <ArrowRight className="transform group-open:rotate-90 transition-transform text-yellow-500" size={20} />
              </summary>
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                <p className="mb-3">
                  Evet, her türlü <strong>tekne taşımacılığı ve nakliyesi</strong> hizmeti veriyoruz. 
                  Profesyonel <strong>tekne taşıma</strong> çözümlerimiz:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Yelkenli tekneler:</strong> Her boyutta yelkenli tekne nakliyesi</li>
                  <li><strong>Motorlu tekneler:</strong> Sürat tekneleri, kabin kruvaziyer</li>
                  <li><strong>Balıkçı tekneleri:</strong> Ticari ve özel balıkçı gemileri</li>
                  <li><strong>Katamaranlar:</strong> Çok gövdeli tekneler için özel taşıma</li>
                  <li><strong>Jet ski ve deniz araçları:</strong> Küçük deniz araçları taşıma</li>
                  <li><strong>Özel tekneler:</strong> Yarış tekneleri, özel tasarım tekneler</li>
                </ul>
                <p className="mt-3 bg-yellow-50 p-3 rounded-lg">
                  ⚓ <strong>Tekne nakliyesi</strong> için yat taşımacılığı ile aynı profesyonel hizmet ve güvenceyi sunuyoruz.
                </p>
              </div>
            </details>
          </div>

          {/* CTA After FAQ */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Başka Sorularınız mı Var?</h3>
            <p className="mb-6 text-blue-100">
              Yat taşımacılığı ve tekne nakliyesi hizmetlerimiz hakkında daha fazla bilgi almak için 
              bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold transition-all duration-300">
                Teklif Al
              </Link>
              <a href="tel:+905050920999" className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300">
                📞 +90 505 092 09 99
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {translations.yachtTransportPage.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.yachtTransportPage.testimonials.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {translations.yachtTransportPage.testimonials.reviews.map((testimonial, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-200 transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: `${800 + index * 200}ms` }}>
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={`https://images.unsplash.com/${index === 0 ? 'photo-1507003211169-0a1dd7228f2d' : 'photo-1494790108755-2616b612b786'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
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

      {/* Location Coverage Section - Local SEO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Yat Taşımacılığı Hizmet Bölgelerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Türkiye&apos;nin tüm önemli liman şehirlerinde profesyonel yat taşıma ve tekne nakliyesi hizmetleri veriyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { city: 'Mersin', icon: '⚓', tag: 'Mersin yat taşımacılığı' },
              { city: 'İstanbul', icon: '🚢', tag: 'İstanbul yat taşıma' },
              { city: 'Antalya', icon: '⛵', tag: 'Antalya tekne nakliyesi' },
              { city: 'İzmir', icon: '🛥️', tag: 'İzmir yat taşımacılığı' },
              { city: 'Bodrum', icon: '⚓', tag: 'Bodrum yat taşıma' },
              { city: 'Marmaris', icon: '🚢', tag: 'Marmaris tekne taşıma' },
              { city: 'Fethiye', icon: '⛵', tag: 'Fethiye yat nakliyesi' },
              { city: 'Çeşme', icon: '🛥️', tag: 'Çeşme yat taşımacılığı' },
              { city: 'Ayvalık', icon: '⚓', tag: 'Ayvalık tekne taşıma' },
              { city: 'Kaş', icon: '🚢', tag: 'Kaş yat taşıma' },
              { city: 'Kuşadası', icon: '⛵', tag: 'Kuşadası yat taşımacılığı' },
              { city: 'Göcek', icon: '🛥️', tag: 'Göcek tekne nakliyesi' }
            ].map((location, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 border border-blue-100 text-center group">
                <div className="text-3xl mb-2">{location.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{location.city}</h3>
                <p className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors">{location.tag}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              <strong className="text-blue-600">SeaLive Yat Taşımacılığı</strong> olarak Türkiye&apos;nin tüm liman şehirlerinde 
              profesyonel <strong>yat taşıma</strong>, <strong>tekne nakliyesi</strong> ve <strong>süperyat taşımacılığı</strong> hizmetleri sunuyoruz. 
              15 yılı aşkın tecrübemiz ve uzman ekibimizle, yatınızı güvenli bir şekilde istediğiniz hedefe ulaştırıyoruz. 
              Mersin&apos;den başlayarak tüm Akdeniz, Ege ve Marmara bölgelerinde <strong>uygun fiyatlı yat taşımacılığı</strong> çözümleri sağlıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Optimized */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Profesyonel Yat Taşımacılığı İçin Hemen Teklif Alın
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Yat taşıma fiyatları ve detaylı bilgi için uzman ekibimizle iletişime geçin. 
              Mersin, İstanbul, Antalya ve tüm Türkiye&apos;de güvenilir yat taşımacılığı hizmetleri. 
              Ücretsiz keşif ve şeffaf fiyatlandırma garantisi!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105">
                {translations.yachtTransportPage.cta.getQuote}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center">
                  <Phone size={18} className="mr-2" />
                  {translations.yachtTransportPage.cta.phone}
                </button>
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-gray-400 mb-4">{translations.yachtTransportPage.cta.trustText}</p>
              <div className="flex justify-center items-center space-x-8 text-white/60">
                {translations.yachtTransportPage.cta.features.map((feature, index) => (
                  <span key={index} className="text-sm">{feature}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 