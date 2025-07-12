import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCommunication } from "./communication-utils";
import rajasthanLogo from "@assets/orange-logo_1752335072563.png";

export default function HeroSection() {
  const { whatsapp, phone } = useCommunication();

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden mt-16">
      {/* Beautiful Gradient Background similar to Rajasthan Tourism */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-200 via-orange-200 to-purple-300"></div>
      
      {/* Top Navigation Bar similar to Rajasthan Tourism */}
      <div className="absolute top-0 left-0 right-0 bg-pink-600 text-white py-2 z-20">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>DISCOVER</span>
            <span>EXPERIENCE</span>
            <span>PLAN</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>ABOUT US</span>
            <span>STAY</span>
            <span>E-TICKETING</span>
            <span>हिन्दी</span>
          </div>
        </div>
      </div>

      {/* Pink Decorative Border */}
      <div className="absolute top-12 left-0 right-0 h-2 bg-pink-600 z-10"></div>
      
      {/* Central Logo and Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-8">
        {/* Rajasthan Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={rajasthanLogo} 
            alt="Rajasthan - The Incredible State of India" 
            className="h-24 w-auto"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4 tracking-wider">
          RAJASTHAN
        </h1>
        
        {/* Elegant Subtitle */}
        <h2 className="text-3xl md:text-4xl font-italic text-gray-700 mb-8" style={{ fontFamily: 'serif' }}>
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
            <div className="text-2xl font-bold text-pink-600">2500+</div>
            <div className="text-sm text-gray-700">Happy Tourists</div>
          </div>
          <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-pink-600">24/7</div>
            <div className="text-sm text-gray-700">Service</div>
          </div>
          <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-pink-600">25+</div>
            <div className="text-sm text-gray-700">Heritage Sites</div>
          </div>
          <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold text-pink-600">5★</div>
            <div className="text-sm text-gray-700">Rating</div>
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <p className="text-gray-600 text-sm">Scroll down to explore our incredible tours</p>
        <div className="animate-bounce mt-2">
          <svg className="w-6 h-6 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
