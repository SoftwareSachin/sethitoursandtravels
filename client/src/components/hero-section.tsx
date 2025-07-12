import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCommunication } from "./communication-utils";

export default function HeroSection() {
  const { whatsapp, phone } = useCommunication();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://pixabay.com/get/g9be0342e43efa79697b15219f66e73196e7c0b87c3827d596a4a699f31d35637c7104ec607da0aa7e93484cdb0601daee643a040b742934b6d34cf2df079efda_1280.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          HEAVENLY PLACE ON EARTH
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-secondary mb-8">
          RAJASTHAN
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          Discover the royal heritage of Rajasthan with Sethi Tour and Travels. 
          Explore majestic palaces, ancient forts, vibrant markets, thrilling desert safaris, and rich cultural experiences. 
          From the Pink City of Jaipur to the romantic lakes of Udaipur, the golden sands of Jaisalmer to the blue city of Jodhpur, 
          experience the complete essence of the Land of Kings with our expert guidance and premium services.
        </p>
        <div className="mb-8 space-y-4">
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto">
            <span className="text-secondary font-semibold">Complete Travel Solutions:</span> 
            <span className="mx-2">•</span> Local & Outstation Taxi Services 
            <span className="mx-2">•</span> Complete Rajasthan Heritage Tours
            <span className="mx-2">•</span> Golden Triangle Packages <span className="mx-2">•</span> International Tour Packages 
            <span className="mx-2">•</span> Airport & Railway Transfers <span className="mx-2">•</span> Corporate Travel Solutions
            <span className="mx-2">•</span> Wedding & Event Transportation <span className="mx-2">•</span> Adventure & Spiritual Tours
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="text-2xl font-bold text-secondary">1000+</div>
              <div className="text-sm text-gray-200">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="text-2xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-gray-200">Service Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="text-2xl font-bold text-secondary">15+</div>
              <div className="text-sm text-gray-200">Destinations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <div className="text-2xl font-bold text-secondary">5★</div>
              <div className="text-sm text-gray-200">Customer Rating</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => whatsapp("Hello! I need a taxi booking for Rajasthan tour with Sethi Tour & Travels.")}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <FaWhatsapp className="mr-2 h-5 w-5" />
            Book on WhatsApp
          </Button>
          <Button 
            onClick={() => phone()}
            size="lg"
            className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
