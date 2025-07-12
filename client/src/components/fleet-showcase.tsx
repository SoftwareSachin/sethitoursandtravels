import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Luggage, MapPin, Star } from "lucide-react";
import dzireImage from "@assets/image_1752328537540.png";
import ertigaImage from "@assets/image_1752328561242.png";
import innovaImage from "@assets/image_1752328589553.png";
import tempoImage from "@assets/image_1752328614332.png";

export default function FleetShowcase() {
  const fleetVehicles = [
    {
      name: "Maruti Suzuki Dzire",
      category: "Sedan",
      image: dzireImage,
      capacity: "4 Passengers",
      luggage: "2 Large Bags",
      features: ["AC", "Music System", "GPS"],
      pricePerKm: 12,
      ideal: "Heritage City Tours, Palace Visits",
      rating: 4.8
    },
    {
      name: "Maruti Suzuki Ertiga",
      category: "MUV",
      image: ertigaImage,
      capacity: "6 Passengers",
      luggage: "3 Large Bags",
      features: ["AC", "Captain Seats", "Entertainment"],
      pricePerKm: 14,
      ideal: "Royal Family Tours, Cultural Journeys",
      rating: 4.7
    },
    {
      name: "Toyota Innova Crysta",
      category: "Premium MUV",
      image: innovaImage,
      capacity: "7 Passengers",
      luggage: "4 Large Bags",
      features: ["Luxury AC", "Premium Interiors", "Extra Comfort"],
      pricePerKm: 18,
      ideal: "Golden Triangle Tours, Luxury Heritage",
      rating: 4.9
    },
    {
      name: "Tempo Traveller",
      category: "Mini Bus",
      image: tempoImage,
      capacity: "12-17 Passengers",
      luggage: "8+ Large Bags",
      features: ["AC", "Reclining Seats", "Ample Space"],
      pricePerKm: 25,
      ideal: "Group Heritage Tours, Desert Safari",
      rating: 4.6
    }
  ];

  return (
    <section id="fleet" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Travel Fleet</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover India in comfort with our carefully selected vehicles. From intimate city tours to grand heritage journeys, 
            each vehicle comes with professional drivers who know every hidden gem and historic tale along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {fleetVehicles.map((vehicle, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-secondary text-white">
                  {vehicle.category}
                </Badge>
                <div className="absolute bottom-3 left-3 bg-white/90 rounded-lg px-2 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{vehicle.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                
                <div className="space-y-2 sm:space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="text-xs sm:text-sm">{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Luggage className="h-4 w-4" />
                    <span className="text-xs sm:text-sm">{vehicle.luggage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs sm:text-sm">{vehicle.ideal}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {vehicle.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-2xl font-bold text-secondary">₹{vehicle.pricePerKm}</span>
                    <span className="text-sm text-gray-500">per km</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-secondary hover:bg-orange-600 text-white"
                    asChild
                  >
                    <a href={`https://api.whatsapp.com/send?phone=919772021780&text=नमस्ते! मुझे ${vehicle.name} बुक करना है। कृपया रेट और उपलब्धता बताएं।`}>
                      Book {vehicle.name}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <Star className="h-4 w-4 text-white" />
                <span className="text-white font-semibold text-sm uppercase tracking-wider">Premium Inclusions</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-3">Every Journey Includes</h3>
              <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
                Experience worry-free travel with our comprehensive service inclusions designed for your comfort and safety
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                <div className="group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Expert Driver</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">Licensed & experienced drivers with local knowledge</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">GPS Tracking</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">Real-time navigation & route optimization</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">Full Insurance</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">Comprehensive coverage for complete peace of mind</p>
                </div>
                
                <div className="group">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Luggage className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
                  <p className="text-blue-100 text-sm leading-relaxed">Round-the-clock assistance & emergency help</p>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">AC</div>
                    <div className="text-blue-100 text-sm">Climate Control</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">Fuel</div>
                    <div className="text-blue-100 text-sm">Included in Price</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">Tolls</div>
                    <div className="text-blue-100 text-sm">No Extra Charges</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">Clean</div>
                    <div className="text-blue-100 text-sm">Sanitized Daily</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}