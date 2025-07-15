import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Luggage, MapPin, Star, Crown, Award, Sparkles } from "lucide-react";
import dzireImage from "@assets/steptodown.com267953_1752609994574.jpg";
import ertigaImage from "@assets/steptodown.com288680_1752610052347.jpg";
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
    <section id="fleet" className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Traditional Indian motifs background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, #f97316 8px, transparent 8px),
            radial-gradient(circle at 85% 75%, #dc2626 8px, transparent 8px),
            radial-gradient(circle at 45% 55%, #eab308 6px, transparent 6px),
            radial-gradient(circle at 75% 25%, #ec4899 6px, transparent 6px)
          `,
          backgroundSize: '180px 180px, 220px 220px, 140px 140px, 160px 160px'
        }}></div>
      </div>

      {/* Royal decorative borders */}
      <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-orange-600 via-red-600 via-yellow-600 to-orange-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-yellow-600 via-red-600 via-orange-600 to-yellow-600"></div>
      
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16">
          {/* Royal elephant silhouette decoration */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-400">
                <Crown className="h-12 w-12 text-yellow-100" />
              </div>
              {/* Decorative gems around the crown */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-purple-500 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-pink-500 rounded-full border-2 border-white shadow-lg"></div>
            </div>
          </div>

          {/* Royal badge with Hindi text - Mobile Responsive */}
          <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 xs:px-4 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 rounded-full text-xs xs:text-sm font-semibold mb-6 xs:mb-8 shadow-lg border-2 border-yellow-400">
            <Sparkles className="h-3 w-3 xs:h-4 xs:w-4 mr-1 xs:mr-2 animate-pulse" />
            <span className="text-xs xs:text-sm">महाराज का वाहन संग्रह</span>
            <Sparkles className="h-3 w-3 xs:h-4 xs:w-4 ml-1 xs:ml-2 animate-pulse" />
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text mb-4 xs:mb-6 sm:mb-8" style={{ fontFamily: "'Cinzel', serif" }}>
            Our Royal Travel Fleet
          </h2>
          
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium mb-4 xs:mb-6 px-2 xs:px-0" style={{ fontFamily: "'Crimson Text', serif" }}>
            Discover the splendor of India in unparalleled comfort with our carefully curated royal vehicles. From intimate darshan of ancient temples to grand heritage palace tours, each chariot comes with professional drivers who are custodians of every hidden gem and historic tale along the sacred paths of Rajasthan.
          </p>
          
          <p className="text-sm xs:text-base sm:text-lg text-orange-600 font-semibold mb-6 xs:mb-8" style={{ fontFamily: "'Crimson Text', serif" }}>
            "आपकी यात्रा, हमारी परंपरा" - Your Journey, Our Tradition
          </p>

          {/* Decorative lotus elements */}
          <div className="flex justify-center items-center space-x-6">
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-orange-500 shadow-lg"></div>
            <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-2 border-yellow-400 shadow-lg"></div>
            <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-orange-500 shadow-lg"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
          {fleetVehicles.map((vehicle, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-4 border-yellow-400/40 hover:border-yellow-400/70 rounded-2xl relative">
              {/* Royal corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 transform rotate-45 translate-x-[-50%] translate-y-[-50%] z-10 border-2 border-yellow-400"></div>
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 transform rotate-45 translate-x-[50%] translate-y-[-50%] z-10 border-2 border-yellow-400"></div>
              
              <div className="relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Royal gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category badge with royal styling */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider shadow-lg border border-yellow-400">
                    {vehicle.category}
                  </Badge>
                </div>
                
                {/* Royal rating with crown */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                  <Crown className="h-3 w-3 text-gray-900" />
                  <span className="text-xs font-bold text-gray-900">{vehicle.rating}</span>
                </div>
                
                {/* Royal status badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg border border-yellow-400">
                  ROYAL
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                {/* Traditional border pattern */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300" style={{ fontFamily: "'Cinzel', serif" }}>
                  {vehicle.name}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                      <Luggage className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">{vehicle.luggage}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">{vehicle.ideal}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {vehicle.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-gradient-to-r from-orange-100 to-red-100 border-orange-300 text-orange-800">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="border-t-2 border-gradient-to-r from-orange-200 to-red-200 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">₹{vehicle.pricePerKm}</span>
                    <span className="text-sm text-gray-500 font-medium">per km</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-2 border-yellow-400 hover:border-yellow-500"
                    asChild
                  >
                    <a href={`https://api.whatsapp.com/send?phone=919772021780&text=नमस्ते! मुझे ${vehicle.name} बुक करना है। कृपया रेट और उपलब्धता बताएं।`}>
                      <Crown className="mr-2 h-4 w-4" />
                      Book Royal {vehicle.category}
                    </a>
                  </Button>
                </div>
              </CardContent>
              
              {/* Royal bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden border-4 border-yellow-400">
            {/* Royal traditional patterns */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, #fbbf24 12px, transparent 12px),
                  radial-gradient(circle at 80% 70%, #fbbf24 8px, transparent 8px),
                  radial-gradient(circle at 50% 50%, #fbbf24 10px, transparent 10px)
                `,
                backgroundSize: '120px 120px, 150px 150px, 100px 100px'
              }}></div>
            </div>
            
            {/* Royal decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-400 transform rotate-45 translate-x-[-50%] translate-y-[-50%] border-4 border-white"></div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400 transform rotate-45 translate-x-[50%] translate-y-[-50%] border-4 border-white"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-400 transform rotate-45 translate-x-[-50%] translate-y-[50%] border-4 border-white"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-400 transform rotate-45 translate-x-[50%] translate-y-[50%] border-4 border-white"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-yellow-400/20 backdrop-blur-sm rounded-full border-2 border-yellow-400">
                <Crown className="h-5 w-5 text-yellow-400 animate-pulse" />
                <span className="text-yellow-200 font-bold text-sm uppercase tracking-wider">राजसी समावेश</span>
                <Crown className="h-5 w-5 text-yellow-400 animate-pulse" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                Every Royal Journey Includes
              </h3>
              <p className="text-yellow-100 mb-12 max-w-3xl mx-auto text-xl leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                Experience worry-free travel with our comprehensive royal service inclusions designed for your utmost comfort, safety, and spiritual fulfillment
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl border-4 border-white">
                    <Users className="h-9 w-9 text-gray-900" />
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-yellow-100" style={{ fontFamily: "'Cinzel', serif" }}>Royal Chauffeur</h4>
                  <p className="text-yellow-200 text-sm leading-relaxed">Licensed & experienced drivers with heritage knowledge</p>
                </div>
                
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl border-4 border-white">
                    <MapPin className="h-9 w-9 text-gray-900" />
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-yellow-100" style={{ fontFamily: "'Cinzel', serif" }}>Sacred Routes</h4>
                  <p className="text-yellow-200 text-sm leading-relaxed">GPS tracking & spiritual route optimization</p>
                </div>
                
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl border-4 border-white">
                    <Star className="h-9 w-9 text-gray-900" />
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-yellow-100" style={{ fontFamily: "'Cinzel', serif" }}>Royal Protection</h4>
                  <p className="text-yellow-200 text-sm leading-relaxed">Comprehensive insurance for complete peace of mind</p>
                </div>
                
                <div className="group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl border-4 border-white">
                    <Luggage className="h-9 w-9 text-gray-900" />
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-yellow-100" style={{ fontFamily: "'Cinzel', serif" }}>24/7 Seva</h4>
                  <p className="text-yellow-200 text-sm leading-relaxed">Round-the-clock assistance & emergency support</p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t-2 border-yellow-400/50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-2 border-yellow-400/30">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">AC</div>
                    <div className="text-yellow-200 text-sm font-medium">Royal Climate Control</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-2 border-yellow-400/30">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">Fuel</div>
                    <div className="text-yellow-200 text-sm font-medium">Included in Price</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-2 border-yellow-400/30">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">Tolls</div>
                    <div className="text-yellow-200 text-sm font-medium">No Extra Charges</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border-2 border-yellow-400/30">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">Pure</div>
                    <div className="text-yellow-200 text-sm font-medium">Sanitized Daily</div>
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