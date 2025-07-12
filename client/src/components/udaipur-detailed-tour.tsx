import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Star, Heart, Users, Phone } from "lucide-react";

export default function UdaipurDetailedTour() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Beautiful Udaipur City Palace overlooking Lake Pichola"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <div className="lg:order-1">
            <div className="flex items-center mb-4">
              <Heart className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-sm font-medium text-gray-600">Best Taxi Service and Tour Provider</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-primary italic">Udaipur</span> A Journey Through the City of Lakes and Royal Heritage
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The "City of Lakes," highlighting its royal heritage and scenic beauty. Begin with the majestic City Palace, 
              overlooking Lake Pichola, where intricate architecture and royal artifacts showcase Rajasthan's opulent past. 
              Enjoy a serene boat ride on Lake Pichola with stops at Jag Mandir Island, followed by a visit to the ornate 
              Jagdish Temple, known for its intricate carvings. Stroll through the lush gardens of Saheliyon Ki Bari, 
              a peaceful retreat once designed for royal ladies, and end the day at Bagore Ki Haveli with a lively folk dance performance.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  Tour Package
                </h4>
                <p className="text-sm text-gray-600">Complete Udaipur sightseeing with comfortable hotel rooms</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  One Way Taxi Service
                </h4>
                <p className="text-sm text-gray-600">Reliable and affordable taxi services across Rajasthan</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Experience Includes:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "City Palace complex tour",
                  "Lake Pichola boat ride",
                  "Jagdish Temple visit",
                  "Saheliyon Ki Bari gardens",
                  "Bagore Ki Haveli cultural show",
                  "Local markets exploration",
                  "Traditional Rajasthani cuisine",
                  "Professional photography assistance"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-blue-700 text-white"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20book%20Udaipur%20tour%20package">
                  Book Now
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a href="/udaipur-tour-package">
                  View More Details
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}