import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
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
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover the royal heritage of Rajasthan with Sethi Tour and Travels. 
          Explore Jaipur, Udaipur, and more on a seamless, unforgettable journey through the Land of Kings
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg"
          >
            <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20need%20a%20taxi%20booking">
              <FaWhatsapp className="mr-2 h-5 w-5" />
              Book on WhatsApp
            </a>
          </Button>
          <Button 
            asChild
            size="lg"
            className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 text-lg"
          >
            <a href="tel:9772021780">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
