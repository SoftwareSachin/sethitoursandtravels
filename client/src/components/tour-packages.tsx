import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
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
      <section id="packages" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Tour Packages</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore incredible destinations with our expertly crafted tour packages
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index}>
                <Skeleton className="w-full h-36 sm:h-48" />
                <CardContent className="p-4 sm:p-6">
                  <Skeleton className="h-5 sm:h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <Skeleton className="h-9 sm:h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="packages" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="h-4 w-4 mr-2" />
            Premium Tour Packages
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Authentic India & Rajasthan Tour Packages
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the incredible heritage, culture, and beauty of India with our expertly crafted authentic tour experiences. 
            From the iconic Taj Mahal to Rajasthan's royal palaces - explore real India with local expert guides and create 
            unforgettable memories that will last a lifetime.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              <span className="text-sm font-medium">4.9★ Rated Tours</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <Users className="h-4 w-4 text-blue-500 mr-2" />
              <span className="text-sm font-medium">10,000+ Happy Travelers</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <MapPin className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm font-medium">Authentic Destinations</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages?.map((pkg, index) => (
            <Card key={pkg.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2 ${
              index === 0 ? 'ring-2 ring-primary/20' : ''
            }`}>
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {index === 0 && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="absolute top-4 right-4">
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-white text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>4.9</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>2-8 People</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                    Heritage Tour
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-gray-600 ml-1">4.9</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {pkg.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {pkg.description}
                </p>
                
                {pkg.duration && (
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Daily Departure</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  {pkg.price && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">₹{pkg.price}</div>
                      <div className="text-xs text-gray-500">Per Person</div>
                    </div>
                  )}
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>All-Inclusive</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    onClick={() => whatsapp(CommunicationUtils.getBookingMessage(pkg.name))}
                    className="w-full bg-primary hover:bg-blue-700 text-white group-hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    BOOK NOW
                  </Button>
                  <Button 
                    onClick={() => whatsapp(`Hello, I want to know more details about ${pkg.name} tour package`)}
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    View Details
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
              Why Choose Our Authentic India Tours?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Experience the real India with our expert local guides, authentic cultural experiences, and carefully curated 
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
                <h4 className="font-semibold text-gray-900 mb-2">Authentic Experiences</h4>
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
