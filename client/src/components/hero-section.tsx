import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCommunication } from "./communication-utils";
import rajasthanLogo from "@assets/orange-logo_1752335072563.png";
import neemranaFortImage from "@assets/steptodown.com731037_1752610855716.jpg";
import udaipurCityPalaceImage from "@assets/steptodown.com722270_1752610889983.jpg";
import amberFortCorridorImage from "@assets/steptodown.com923143_1752610926660.jpg";
import jalMahalImage from "@assets/steptodown.com898011_1752610967750.jpg";
import hawaMahalImage from "@assets/steptodown.com462150_1752611002313.jpg";
import udaipurPalaceViewImage from "@assets/steptodown.com216656_1752611053036.jpg";

export default function HeroSection() {
  const { whatsapp, phone } = useCommunication();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    {
      src: neemranaFortImage,
      alt: "Neemrana Fort Palace - Heritage Hotel Architecture Rajasthan",
      title: "Heritage Fort Palace Experience"
    },
    {
      src: udaipurCityPalaceImage,
      alt: "Udaipur City Palace - Lake Pichola Royal Architecture",
      title: "Venice of the East - Udaipur"
    },
    {
      src: amberFortCorridorImage,
      alt: "Amber Fort Corridor - Traditional Rajasthani Architecture",
      title: "Amber Fort Heritage Walkway"
    },
    {
      src: jalMahalImage,
      alt: "Jal Mahal Water Palace - Jaipur Royal Architecture",
      title: "Floating Palace of Jaipur"
    },
    {
      src: hawaMahalImage,
      alt: "Hawa Mahal Jaipur - Palace of Winds Pink City",
      title: "Iconic Pink City Architecture"
    },
    {
      src: udaipurPalaceViewImage,
      alt: "Udaipur Palace Lake View - Romantic City Architecture",
      title: "Udaipur Romantic Lake Palace"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Dynamic Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image.src} 
            alt={image.alt}
            className="hero-bg-image"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}
      
      {/* Image Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-secondary scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Current Image Title */}
      <div className="absolute top-20 right-2 sm:right-4 md:right-6 z-20 bg-black/20 backdrop-blur-sm rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-2">
        <p className="text-white text-xs sm:text-sm font-medium">
          {backgroundImages[currentImageIndex].title}
        </p>
      </div>
      
      {/* Central Logo and Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-8 sm:py-16">
        {/* Rajasthan Logo */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <img 
            src={rajasthanLogo} 
            alt="Rajasthan - The Incredible State of India" 
            className="h-16 sm:h-20 md:h-24 w-auto"
          />
        </div>
        
        {/* Main Heading - Fully Mobile Optimized */}
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 tracking-wider leading-tight px-2">
          RAJASTHAN
        </h1>
        
        {/* Elegant Subtitle - Fully Mobile Optimized */}
        <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-italic text-secondary mb-3 xs:mb-4 sm:mb-6 md:mb-8 leading-tight px-2" style={{ fontFamily: 'serif' }}>
          The Land of Kings
        </h2>
        
        {/* Service Description - Fully Mobile Optimized */}
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-3 xs:mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed text-white px-3 xs:px-4 sm:px-6">
          Discover the royal grandeur of India's most magnificent state. Journey through ancient palaces of Jaipur, 
          serene lakes of Udaipur, golden dunes of Jaisalmer, and the majestic blue city of Jodhpur. From the 
          world-famous Taj Mahal to the iconic Hawa Mahal, experience India's rich heritage, vibrant traditions, 
          and legendary hospitality with our expert guides and premium services.
        </p>
        
        {/* Complete India Tourism Solutions */}
        <div className="mb-6 sm:mb-8 space-y-4">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto">
            <span className="text-secondary font-semibold block mb-4">India Tourism Experiences</span> 
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                <span className="text-white font-medium text-xs sm:text-sm">Golden Triangle</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                <span className="text-white font-medium text-xs sm:text-sm">Royal Palaces</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                <span className="text-white font-medium text-xs sm:text-sm">Desert Safari</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                <span className="text-white font-medium text-xs sm:text-sm">Heritage Tours</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                <span className="text-white font-medium text-xs sm:text-sm">Lake City Udaipur</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                <span className="text-white font-medium text-xs sm:text-sm">Pink City Jaipur</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                <span className="text-white font-medium text-xs sm:text-sm">Cultural Immersion</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2">
                <span className="text-white font-medium">Luxury Experiences</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons - Enhanced Mobile Responsiveness */}
        <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center items-center mb-4 xs:mb-6 sm:mb-8 px-2 xs:px-4">
          <Button 
            onClick={() => whatsapp("मैं टूर बुक करना चाहता हूं। कृपया AC कार का रेट और पैकेज डिटेल्स दें।", 'rajasthani')}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 xs:px-6 sm:px-8 py-3 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 w-full xs:w-auto min-h-[48px]"
          >
            <FaWhatsapp className="mr-1 xs:mr-2 h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
            <span className="hidden xs:inline">Book on WhatsApp</span>
            <span className="xs:hidden">WhatsApp</span>
          </Button>
          <Button 
            onClick={() => phone()}
            size="lg"
            className="bg-secondary hover:bg-orange-600 text-white px-4 xs:px-6 sm:px-8 py-3 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 w-full xs:w-auto min-h-[48px]"
          >
            <Phone className="mr-1 xs:mr-2 h-4 w-4 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
            <span className="hidden xs:inline">Call Now</span>
            <span className="xs:hidden">Call</span>
          </Button>
        </div>
        
        {/* Service Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">2500+</div>
            <div className="text-xs sm:text-sm text-gray-200">Foreign Tourists</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">24/7</div>
            <div className="text-xs sm:text-sm text-gray-200">India Tours</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">25+</div>
            <div className="text-xs sm:text-sm text-gray-200">Heritage Sites</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">5★</div>
            <div className="text-xs sm:text-sm text-gray-200">TripAdvisor Rating</div>
          </div>
        </div>
      </div>
      

    </section>
  );
}
