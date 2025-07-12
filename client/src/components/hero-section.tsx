import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCommunication } from "./communication-utils";

export default function HeroSection() {
  const { whatsapp, phone } = useCommunication();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://pixabay.com/get/g9be0342e43efa79697b15219f66e73196e7c0b87c3827d596a4a699f31d35637c7104ec607da0aa7e93484cdb0601daee643a040b742934b6d34cf2df079efda_1280.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 py-8 sm:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          HEAVENLY PLACE ON EARTH
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary mb-6 sm:mb-8">
          RAJASTHAN
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
          Discover the royal heritage of Rajasthan with Sethi Tour and Travels. 
          Explore majestic palaces, ancient forts, vibrant markets, thrilling desert safaris, and rich cultural experiences. 
          From the Pink City of Jaipur to the romantic lakes of Udaipur, the golden sands of Jaisalmer to the blue city of Jodhpur, 
          experience the complete essence of the Land of Kings with our expert guidance and premium services.
        </p>
        <div className="mb-6 sm:mb-8 space-y-4">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto">
            <span className="text-secondary font-semibold block sm:inline mb-2 sm:mb-0">Complete Travel Solutions:</span> 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-1 text-center sm:text-left mt-2 sm:mt-0">
              <span className="block sm:inline">• Local & Outstation Taxi</span>
              <span className="block sm:inline">• Heritage Tours</span>
              <span className="block sm:inline">• Golden Triangle</span>
              <span className="block sm:inline">• International Tours</span>
              <span className="block sm:inline">• Airport Transfers</span>
              <span className="block sm:inline">• Corporate Travel</span>
              <span className="block sm:inline">• Wedding Transport</span>
              <span className="block sm:inline">• Adventure Tours</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">1000+</div>
              <div className="text-xs sm:text-sm text-gray-200">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">24/7</div>
              <div className="text-xs sm:text-sm text-gray-200">Service Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">15+</div>
              <div className="text-xs sm:text-sm text-gray-200">Destinations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">5★</div>
              <div className="text-xs sm:text-sm text-gray-200">Customer Rating</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <Button 
            onClick={() => whatsapp("मैं टूर बुक करना चाहता हूं। कृपया AC कार का रेट और पैकेज डिटेल्स दें।", 'rajasthani')}
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 w-full sm:w-auto"
          >
            <FaWhatsapp className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Book on WhatsApp
          </Button>
          <Button 
            onClick={() => phone()}
            size="lg"
            className="bg-secondary hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 w-full sm:w-auto"
          >
            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
