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
      ideal: "City Tours, Airport Transfers",
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
      ideal: "Family Tours, Group Travel",
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
      ideal: "Long Distance Tours, Premium Travel",
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
      ideal: "Large Groups, Corporate Tours",
      rating: 4.6
    }
  ];

  return (
    <section id="fleet" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Fleet</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our well-maintained, comfortable vehicles for your India tour. 
            All cars come with experienced drivers and comprehensive insurance coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Luggage className="h-4 w-4" />
                    <span className="text-sm">{vehicle.luggage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{vehicle.ideal}</span>
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

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">All Vehicles Include</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <span className="text-sm font-medium">Professional Driver</span>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <span className="text-sm font-medium">GPS Navigation</span>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Star className="h-6 w-6 text-secondary" />
                </div>
                <span className="text-sm font-medium">Insurance Coverage</span>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Luggage className="h-6 w-6 text-secondary" />
                </div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}