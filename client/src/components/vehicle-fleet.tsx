import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Fuel, Shield, Star } from "lucide-react";

export default function VehicleFleet() {
  const vehicles = [
    {
      name: "Maruti Swift Dzire",
      category: "Premium Sedan",
      capacity: "4+1",
      features: ["AC", "Music System", "GPS", "Premium Interiors"],
      image: "/attached_assets/image_1752392441625.png",
      description: "Perfect for city tours and airport transfers. Comfortable sedan with modern amenities and premium styling.",
      price: "₹12/km",
      rating: 4.8
    },
    {
      name: "Toyota Innova",
      category: "Premium SUV",
      capacity: "7+1",
      features: ["AC", "Music System", "Extra Luggage", "Spacious Interiors"],
      image: "/attached_assets/image_1752392458750.png",
      description: "Spacious SUV ideal for family trips and group travel. Premium comfort for longer journeys across Rajasthan.",
      price: "₹15/km",
      rating: 4.9
    },
    {
      name: "Maruti Ertiga",
      category: "Premium MPV",
      capacity: "6+1",
      features: ["AC", "Music System", "Comfortable Seating", "Modern Design"],
      image: "/attached_assets/image_1752392472437.png",
      description: "Multi-purpose vehicle perfect for medium-sized groups and family outings with superior comfort.",
      price: "₹13/km",
      rating: 4.7
    },
    {
      name: "Tempo Traveller",
      category: "Luxury Mini Bus",
      capacity: "12+1",
      features: ["AC", "Push Back Seats", "Music System", "Ample Luggage"],
      image: "/attached_assets/image_1752392492935.png",
      description: "Perfect for group tours and corporate travel. Comfortable seating with ample luggage space for extended journeys.",
      price: "₹18/km",
      rating: 4.6
    },
    {
      name: "Force Urbania",
      category: "Luxury Van",
      capacity: "9+1",
      features: ["AC", "Luxury Interiors", "Entertainment System", "Premium Comfort"],
      image: "/attached_assets/image_1752392514968.png",
      description: "Premium luxury van for VIP travel and special occasions. Top-class comfort and amenities for discerning travelers.",
      price: "₹20/km",
      rating: 4.9
    },
    {
      name: "Mahindra Scorpio",
      category: "Adventure SUV",
      capacity: "7+1",
      features: ["4WD", "AC", "High Ground Clearance", "Rugged Design"],
      image: "/attached_assets/image_1752392533418.png",
      description: "Rugged SUV perfect for desert safaris and adventure trips. Excellent for rough terrain and off-road exploration.",
      price: "₹16/km",
      rating: 4.8
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-orange-600 via-amber-600 to-orange-800 bg-clip-text mb-6 tracking-wide" 
                style={{ fontFamily: "'Cinzel', serif" }}>
              Our Premium Vehicle Fleet
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 rounded-lg blur opacity-20 animate-pulse"></div>
          </div>
          <div className="relative">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium" 
               style={{ fontFamily: "'Crimson Text', serif" }}>
              Choose from our diverse range of meticulously maintained vehicles. From premium sedans to luxury coaches, 
              we have the perfect vehicle for every royal journey across the majestic landscapes of Rajasthan.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group border-2 border-orange-200 hover:border-orange-400 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-contain bg-gradient-to-br from-orange-50 to-amber-50 group-hover:scale-105 transition-transform duration-500 p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {vehicle.category}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < Math.floor(vehicle.rating) ? 'text-orange-500 fill-current' : 'text-gray-300'}`} />
                      ))}
                      <span className="ml-2 text-sm font-bold text-orange-700">{vehicle.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="relative">
                  <div className="absolute -top-3 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-full"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                  {vehicle.name}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                  {vehicle.description}
                </p>
                
                <div className="flex items-center mb-4 bg-orange-50 rounded-xl p-3">
                  <Users className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="font-semibold text-orange-800">Capacity: {vehicle.capacity}</span>
                  <div className="ml-auto">
                    <span className="text-sm text-gray-600" style={{ fontFamily: "'Crimson Text', serif" }}>Starting</span>
                    <div className="text-lg font-bold text-transparent bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text" 
                         style={{ fontFamily: "'Cinzel', serif" }}>
                      {vehicle.price}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg" style={{ fontFamily: "'Cinzel', serif" }}>
                    Premium Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700 bg-orange-50 rounded-lg p-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-700 hover:via-amber-700 hover:to-orange-800 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    <a href={`https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20need%20${encodeURIComponent(vehicle.name)}%20for%20my%20Rajasthan%20journey`}>
                      Book This Vehicle
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-2 border-orange-300 text-orange-700 hover:bg-orange-50 font-semibold py-3 rounded-xl transition-all duration-300"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  >
                    <a href="tel:+919772021780">
                      Call for Details: +91 97720 21780
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 rounded-2xl shadow-2xl p-12 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-yellow-200 to-orange-100 bg-clip-text" 
                  style={{ fontFamily: "'Cinzel', serif" }}>
                Why Choose Our Royal Fleet?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <Shield className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                    <h4 className="font-bold mb-3 text-xl" style={{ fontFamily: "'Cinzel', serif" }}>
                      Royal Safety Standards
                    </h4>
                    <p className="text-orange-100 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                      All vehicles undergo rigorous safety checks and premium maintenance for your peace of mind
                    </p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <Fuel className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                    <h4 className="font-bold mb-3 text-xl" style={{ fontFamily: "'Cinzel', serif" }}>
                      Eco-Friendly Excellence
                    </h4>
                    <p className="text-orange-100 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                      Modern fuel-efficient vehicles ensuring cost-effective and environmentally conscious travel
                    </p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <Star className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                    <h4 className="font-bold mb-3 text-xl" style={{ fontFamily: "'Cinzel', serif" }}>
                      Luxury Service
                    </h4>
                    <p className="text-orange-100 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                      Professional chauffeurs and premium amenities for an unforgettable royal journey
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-orange-700 hover:bg-orange-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20see%20your%20complete%20vehicle%20fleet%20options">
                    Explore Complete Fleet
                  </a>
                </Button>
                <p className="text-orange-100 text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
                  Experience the royal treatment with our premium vehicle collection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}