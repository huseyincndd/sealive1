'use client'

import { useState, useEffect, useRef } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { translations } = useLanguage()

  const staticData = [
    {
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      color: 'from-blue-400 to-cyan-600'
    },
    {
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b191?w=100&h=100&fit=crop&crop=face',
      color: 'from-purple-400 to-pink-600'
    },
    {
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      color: 'from-green-400 to-emerald-600'
    },
    {
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      color: 'from-orange-400 to-red-600'
    },
    {
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      color: 'from-teal-400 to-blue-600'
    }
  ]

  const testimonials = translations.testimonials.cards.map((card, index) => ({
    ...card,
    ...staticData[index]
  }))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [testimonials.length, isHovered])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getCardPosition = (index: number) => {
    const diff = index - currentTestimonial
    if (diff === 0) return 'translate-x-0 scale-100 z-20 opacity-100'
    if (diff === 1 || (diff === -(testimonials.length - 1))) return 'translate-x-[120%] scale-90 z-10 opacity-70'
    if (diff === -1 || (diff === testimonials.length - 1)) return 'translate-x-[-120%] scale-90 z-10 opacity-70'
    if (diff === 2 || (diff === -(testimonials.length - 2))) return 'translate-x-[240%] scale-75 z-0 opacity-40'
    return 'translate-x-[-240%] scale-75 z-0 opacity-40'
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-600 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <span className="relative">
              {translations.testimonials.title}
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {translations.testimonials.title}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translations.testimonials.description}
          </p>
        </div>

        {/* Testimonials Slider */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Cards Container */}
          <div className="relative h-[400px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-80 h-80 transition-all duration-700 ease-in-out transform ${getCardPosition(index)} ${
                  isVisible ? 'translate-y-0' : 'translate-y-20'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                {/* Floating Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} opacity-10 rounded-3xl blur-xl transition-all duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white/95 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className={`absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center`}>
                    <Quote size={20} className="text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Text */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm font-medium flex-grow">
                    &quot;{testimonial.text}&quot;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center mt-auto">
                    <div className={`w-14 h-14 rounded-full mr-4 p-0.5 bg-gradient-to-r ${testimonial.color}`}>
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-yellow-600 font-medium text-sm">
                        {testimonial.position}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-30 group"
          >
            <ChevronLeft size={20} className="text-gray-600 group-hover:text-yellow-600 transition-colors" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-30 group"
          >
            <ChevronRight size={20} className="text-gray-600 group-hover:text-yellow-600 transition-colors" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className={`flex justify-center space-x-3 mt-12 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mt-8">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentTestimonial + 1) / testimonials.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
} 