'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const { translations } = useLanguage()

  const SLIDE_DURATION = 5000 // 5 seconds per slide

  const slides = [
    {
      image: "https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-rev-slide-1-1.jpg",
      ...translations.heroSlider.slides[0]
    },
    {
      image: "https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-rev-slide-2.jpg",
      ...translations.heroSlider.slides[1]
    },
    {
      image: "https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-rev-slide-3.jpg",
      ...translations.heroSlider.slides[2]
    },
    {
      image: "https://villaqrmenu.b-cdn.net/sealive/ChatGPT%20Image%2029%20Haz%202025%2014_46_02.png",
      ...translations.heroSlider.slides[3]
    }
  ]

  // Auto slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current)
      }
      
      slideIntervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, SLIDE_DURATION)
    }

    startAutoSlide()

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current)
      }
    }
  }, [currentSlide, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={slide.image}
              alt={`${slide.title} - SeaLive lojistik ve taşımacılık hizmetleri`}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Overlay for 4th slide (Yacht Transport) */}
          {index === 3 && (
            <div className="absolute inset-0 bg-black/40" />
          )}
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
            <div className="max-w-7xl mx-auto w-full">
              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center justify-between">
                {/* Left Side - Logo */}
                <div className="flex-1 flex justify-start animate-fade-in-left">
                  <img 
                    src="https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png"
                    alt="GlobeFarer Logo"
                    className="h-32 lg:h-40 w-auto object-contain"
                  />
                </div>
                
                {/* Right Side - Slogan */}
                <div className="flex-1 flex justify-end text-left">
                  <div className="max-w-3xl">
                    <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-right">
                      {slide.title}
                    </h2>
                    
                    <p className="text-lg lg:text-xl leading-relaxed opacity-90 animate-fade-in-right delay-200">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden flex flex-col items-center justify-center h-full text-center space-y-8">
                {/* Logo on Top */}
                <div className="animate-fade-in-up">
                  <img 
                    src="https://villaqrmenu.b-cdn.net/sealive/Sealive-logo.png"
                    alt="GlobeFarer Logo"
                    className="h-24 w-auto object-contain mx-auto"
                  />
                </div>
                
                {/* Slogan Below */}
                <div className="max-w-sm mx-auto px-4">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight animate-fade-in-up delay-200">
                    {slide.title}
                  </h2>
                  
                  <p className="text-sm sm:text-base leading-relaxed opacity-90 animate-fade-in-up delay-400">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress Indicators - Completely Independent */}
      <ProgressIndicators 
        totalSlides={slides.length}
        currentSlide={currentSlide}
        onSlideClick={goToSlide}
        slideDuration={SLIDE_DURATION}
      />

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  )
}

// Separate component for progress indicators - completely isolated
function ProgressIndicators({ 
  totalSlides, 
  currentSlide, 
  onSlideClick, 
  slideDuration 
}: {
  totalSlides: number
  currentSlide: number
  onSlideClick: (index: number) => void
  slideDuration: number
}) {
  const [animationProgress, setAnimationProgress] = useState(0)
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef<number>(0)
  const { translations } = useLanguage()

  // Start animation for current slide
  useEffect(() => {
    startTimeRef.current = performance.now()
    setAnimationProgress(0)

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTimeRef.current
      const progress = Math.min((elapsed / slideDuration) * 100, 100)
      
      setAnimationProgress(progress)
      
      if (progress < 100) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [currentSlide, slideDuration])

  const slideLabels = translations.heroSlider.labels

  return (
    <div className="absolute bottom-8 left-0 right-0 z-20 px-4 sm:px-8">
      {/* Desktop Layout - Side by side */}
      <div className="hidden sm:flex gap-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className="relative cursor-pointer group flex-1"
            onClick={() => onSlideClick(index)}
          >
            {/* Background Line */}
            <div className="w-full h-1 bg-white/30 overflow-hidden rounded-full">
              {/* Progress Fill */}
              <div 
                className={`h-full rounded-full transition-colors duration-300 ${
                  index === currentSlide 
                    ? 'bg-yellow-400' 
                    : index < currentSlide 
                      ? 'bg-white/70' 
                      : 'bg-transparent'
                }`}
                style={{
                  width: index === currentSlide 
                    ? `${animationProgress}%` 
                    : index < currentSlide 
                      ? '100%' 
                      : '0%',
                  transition: index === currentSlide ? 'none' : 'width 0.3s ease'
                }}
              />
            </div>
            
            {/* Hover Effect */}
            <div className="absolute -top-1 -left-1 -right-1 h-3 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            
            {/* Slide Label - Always Visible */}
            <div className="absolute -top-10 left-0 text-sm lg:text-base text-white font-bold transition-all duration-200 whitespace-nowrap group-hover:text-yellow-400">
              {slideLabels[index] || `Slide ${index + 1}`}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Layout - Stacked 2x2 grid */}
      <div className="sm:hidden grid grid-cols-2 gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className="relative cursor-pointer group"
            onClick={() => onSlideClick(index)}
          >
            {/* Background Line */}
            <div className="w-full h-1 bg-white/30 overflow-hidden rounded-full">
              {/* Progress Fill */}
              <div 
                className={`h-full rounded-full transition-colors duration-300 ${
                  index === currentSlide 
                    ? 'bg-yellow-400' 
                    : index < currentSlide 
                      ? 'bg-white/70' 
                      : 'bg-transparent'
                }`}
                style={{
                  width: index === currentSlide 
                    ? `${animationProgress}%` 
                    : index < currentSlide 
                      ? '100%' 
                      : '0%',
                  transition: index === currentSlide ? 'none' : 'width 0.3s ease'
                }}
              />
            </div>
            
            {/* Slide Label - Always Visible */}
            <div className="mt-2 text-xs text-white font-bold text-center group-hover:text-yellow-400 transition-colors duration-200">
              {slideLabels[index] || `Slide ${index + 1}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 