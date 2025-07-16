import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useCommunication, CommunicationUtils } from "./communication-utils";
import { MapPin, Clock, Star, Users, Calendar, Award, TrendingUp, Heart } from "lucide-react";
import type { TourPackage } from "@shared/schema";

export default function TourPackages() {
  const { data: packages, isLoading } = useQuery<TourPackage[]>({
    queryKey: ["/api/tour-packages"],
  });

  const { whatsapp } = useCommunication();

  if (isLoading) {
    return (
      <section id="packages" className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Tour Packages</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore incredible destinations with our expertly crafted tour packages
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner 
              variant="mandala" 
              size="xl" 
              message="टूर पैकेज लोड हो रहे हैं..." 
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="packages" className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Traditional Indian patterns background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #f97316 4px, transparent 4px),
                           radial-gradient(circle at 75% 75%, #dc2626 4px, transparent 4px),
                           radial-gradient(circle at 50% 50%, #eab308 3px, transparent 3px)`,
          backgroundSize: '150px 150px, 180px 180px, 120px 120px'
        }}></div>
      </div>
      
      {/* Traditional Indian border patterns */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500"></div>
      
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          {/* Traditional Indian decorative elements */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-4 flex items-center justify-center relative">
              <Award className="h-5 w-5 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </div>
          
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg relative">
            <div className="absolute -top-1 -left-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
            <Award className="h-4 w-4 mr-2" />
            Tour Packages
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
            India & Rajasthan Tour Packages
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8" style={{ fontFamily: "'Crimson Text', serif" }}>
            Discover the incredible heritage, culture, and beauty of India with our expertly crafted tour experiences. 
            From the iconic Taj Mahal to Rajasthan's royal palaces - explore real India with local expert guides and create 
            unforgettable memories that will last a lifetime.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border-2 border-orange-200 hover:border-orange-400 transition-all duration-300">
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              <span className="text-sm font-medium">4.9★ Rated Tours</span>
            </div>
            <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border-2 border-red-200 hover:border-red-400 transition-all duration-300">
              <Users className="h-4 w-4 text-red-500 mr-2" />
              <span className="text-sm font-medium">10,000+ Happy Travelers</span>
            </div>
            <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300">
              <MapPin className="h-4 w-4 text-yellow-600 mr-2" />
              <span className="text-sm font-medium">Authentic Destinations</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
          {packages?.map((pkg, index) => (
            <Card key={pkg.id} className={`bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 border-2 border-orange-100 hover:border-orange-300 relative ${
              index === 0 ? 'ring-2 ring-orange-200' : ''
            }`}>
              {/* Traditional Indian corner decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-2 border-white z-20"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full border-2 border-white z-20"></div>
              
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Traditional Indian decorative corners on image */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 opacity-20 rounded-br-full"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-500 to-orange-500 opacity-20 rounded-bl-full"></div>
                
                {/* Duration badge with Indian styling */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs font-medium shadow-lg border border-orange-300 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {pkg.duration || "Multiple Days"}
                  </div>
                </div>
                
                {index === 0 && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center border-2 border-white">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      ⭐ Popular
                    </span>
                  </div>
                )}
                
                {/* Rating badge */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>4.9</span>
                    </div>
                    <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Users className="h-4 w-4 mr-1" />
                      <span>2-8 People</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                {/* Traditional Indian decorative border at top */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full"></div>
                
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium border border-orange-200">
                      Heritage Tour
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium text-gray-600 ml-1">4.9</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2" style={{ fontFamily: "'Crimson Text', serif" }}>
                    {pkg.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {pkg.description}
                  </p>
                  
                  {pkg.duration && (
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-orange-500" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-red-500" />
                        <span>Daily Departure</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Enhanced pricing section with Indian styling */}
                  <div className="mb-4 bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-lg border border-orange-200">
                    <div className="flex items-center justify-between">
                      {pkg.price && (
                        <div>
                          <div className="text-2xl font-bold text-blue-600">₹{pkg.price}</div>
                          <div className="text-xs text-gray-500">Per Person</div>
                        </div>
                      )}
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1 text-green-500" />
                        <span>All-Inclusive</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Traditional Indian decorative separator */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  </div>
                  
                  <Button 
                    onClick={() => whatsapp(CommunicationUtils.getBookingMessage(pkg.name))}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white group-hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 border-2 border-orange-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 animate-pulse"></div>
                    <div className="relative flex items-center justify-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      BOOK NOW
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-primary/10">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Award className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Our India Tours?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Experience the real India with our expert local guides, cultural experiences, and carefully curated 
              itineraries. From UNESCO World Heritage sites to hidden gems, we ensure every moment of your journey is 
              meaningful and memorable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Local Guides</h4>
                <p className="text-sm text-gray-600">Professional guides with deep local knowledge</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Cultural Experiences</h4>
                <p className="text-sm text-gray-600">Real cultural immersion and local interactions</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Premium Service</h4>
                <p className="text-sm text-gray-600">5-star rated service with complete peace of mind</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => whatsapp("Hello, I want to explore all available tour packages and create a custom itinerary for my India trip")}
                size="lg"
                className="bg-primary hover:bg-blue-700 text-white px-8 py-3"
              >
                Explore All Packages
              </Button>
              <Button 
                onClick={() => whatsapp("Hello, I want to create a custom tour package based on my specific interests and requirements")}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
              >
                Create Custom Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
