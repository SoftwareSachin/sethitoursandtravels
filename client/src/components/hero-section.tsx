import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCommunication } from "./communication-utils";
import rajasthanLogo from "@assets/orange-logo_1752335072563.png";
import tigerSafariImage from "@assets/image_1752328934514.png";
import hawaMahalImage from "@assets/image_1752328950240.png";
import jaisalmerImage from "@assets/image_1752328960163.png";
import jodhpurPalaceImage from "@assets/image_1752328968915.png";
import jaipurPalaceImage from "@assets/image_1752328975745.png";
import jaipurFortImage from "@assets/image_1752328985310.png";

export default function HeroSection() {
  const { whatsapp, phone } = useCommunication();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    {
      src: tigerSafariImage,
      alt: "Ranthambore Tiger Safari - Wildlife Adventure Tours",
      title: "Wildlife Safari Experience"
    },
    {
      src: hawaMahalImage,
      alt: "Hawa Mahal Jaipur - Palace of Winds Architecture",
      title: "Jaipur Pink City Heritage"
    },
    {
      src: jaisalmerImage,
      alt: "Jaisalmer Golden Architecture - Desert City Rajasthan",
      title: "Jaisalmer Golden City"
    },
    {
      src: jodhpurPalaceImage,
      alt: "Jodhpur Palace Architecture - Royal Heritage",
      title: "Jodhpur Royal Palace"
    },
    {
      src: jaipurPalaceImage,
      alt: "Jaipur City Palace - Rajput Architecture",
      title: "Royal Jaipur Heritage"
    },
    {
      src: jaipurFortImage,
      alt: "Jaipur Fort Sunset View - Amber Fort Heritage",
      title: "Majestic Rajasthan Forts"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image.src})`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ))}
      
      {/* Image Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-secondary scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Current Image Title */}
      <div className="absolute top-20 right-6 z-20 bg-black/20 backdrop-blur-sm rounded-lg px-4 py-2">
        <p className="text-white text-sm font-medium">
          {backgroundImages[currentImageIndex].title}
        </p>
      </div>
      
      {/* Central Logo and Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-16">
        {/* Rajasthan Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={rajasthanLogo} 
            alt="Rajasthan - The Incredible State of India" 
            className="h-24 w-auto"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
          RAJASTHAN
        </h1>
        
        {/* Elegant Subtitle */}
        <h2 className="text-3xl md:text-4xl font-italic text-gray-200 mb-8" style={{ fontFamily: 'serif' }}>
          Incredibly majestic!
        </h2>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button 
            onClick={() => whatsapp("मैं राजस्थान टूर बुक करना चाहता हूं। कृपया AC कार का रेट और पैकेज डिटेल्स दें।", 'rajasthani')}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            <FaWhatsapp className="mr-2 h-5 w-5" />
            Book Tour on WhatsApp
          </Button>
          <Button 
            onClick={() => phone()}
            size="lg"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </div>
        
        {/* Service Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
          <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-secondary">2500+</div>
            <div className="text-sm text-gray-200">Happy Tourists</div>
          </div>
          <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-secondary">24/7</div>
            <div className="text-sm text-gray-200">Service</div>
          </div>
          <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-secondary">25+</div>
            <div className="text-sm text-gray-200">Heritage Sites</div>
          </div>
          <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-secondary">5★</div>
            <div className="text-sm text-gray-200">Rating</div>
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation Hint */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-10">
        <p className="text-gray-200 text-sm">Scroll down to explore our incredible tours</p>
        <div className="animate-bounce mt-2">
          <svg className="w-6 h-6 mx-auto text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
