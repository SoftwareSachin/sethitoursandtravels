import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Users, Plane, Car, Award, Globe, Heart, TrendingUp, Calendar, Shield } from "lucide-react";
import { useCommunication } from "./communication-utils";

export default function ComprehensivePackages() {
  const { whatsapp } = useCommunication();
  
  const allPackages = [
    {
      name: "Rajasthan Heritage Circuit",
      duration: "8 Days / 7 Nights",
      destinations: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
      price: "₹28,999",
      originalPrice: "₹35,999",
      rating: "4.9",
      image: "/attached_assets/steptodown.com829502_1752605835373.jpg",
      category: "Premium",
      highlights: [
        "Desert Safari in Jaisalmer",
        "Palace Hotel Stays",
        "Cultural Folk Performances", 
        "Heritage Walking Tours",
        "Traditional Rajasthani Cuisine",
        "Camel Cart Rides",
        "Local Market Exploration",
        "Professional Photography"
      ],
      inclusions: [
        "7 Nights Hotel Accommodation",
        "Daily Breakfast & Dinner",
        "AC Transportation",
        "Professional Guide",
        "All Entry Tickets",
        "Airport Transfers"
      ]
    },
    {
      name: "Golden Triangle Tour",
      duration: "5 Days / 4 Nights", 
      destinations: ["Delhi", "Agra", "Jaipur"],
      price: "₹22,999",
      originalPrice: "₹28,999",
      rating: "4.8",
      image: "/attached_assets/steptodown.com335145_1752611872320.jpg",
      category: "Classic",
      highlights: [
        "Taj Mahal Sunrise Visit",
        "Red Fort & India Gate",
        "Hawa Mahal & Amber Fort",
        "Rickshaw Ride in Old Delhi",
        "Agra Fort & Mehtab Bagh",
        "Local Shopping Tours",
        "Mughlai Food Experience",
        "Heritage Site Expert Guides"
      ],
      inclusions: [
        "4 Nights 4-Star Hotels",
        "Daily Breakfast",
        "AC Car with Driver",
        "English Speaking Guide",
        "Monument Entry Fees",
        "Same Day Agra Return"
      ]
    },
    {
      name: "Weekend Getaway",
      duration: "4 Days / 3 Nights",
      destinations: ["Jaipur", "Udaipur"],
      price: "₹16,999",
      originalPrice: "₹21,999", 
      rating: "4.7",
      image: "/attached_assets/steptodown.com315243_1752612080227.jpg",
      category: "Weekend",
      highlights: [
        "Pink City Jaipur Exploration",
        "City Palace & Hawa Mahal",
        "Lake Pichola Boat Ride",
        "Sunset at Lake Fateh Sagar",
        "Local Market Shopping",
        "Rajasthani Cultural Show",
        "Heritage Hotel Stay",
        "Traditional Cuisine Experience"
      ],
      inclusions: [
        "3 Nights Hotel Stay",
        "Daily Breakfast & Dinner",
        "AC Transportation",
        "Local Guide Services",
        "Temple Entry Permissions",
        "Cultural Program Access"
      ]
    },
    {
      name: "Luxury Rajasthan",
      duration: "6 Days / 5 Nights",
      destinations: ["Jaipur", "Jodhpur", "Udaipur"],
      price: "₹24,999",
      originalPrice: "₹30,999",
      rating: "4.8",
      image: "/attached_assets/steptodown.com697217_1752612125900.jpg",
      category: "Luxury",
      highlights: [
        "5-Star Palace Hotels",
        "Private Heritage Tours",
        "Luxury Desert Camp",
        "Royal Dining Experiences",
        "Premium Transportation",
        "Personal Butler Service",
        "Exclusive Cultural Shows",
        "VIP Monument Access"
      ],
      inclusions: [
        "5 Nights Accommodation",
        "All Meals Included",
        "Adventure Activities",
        "Professional Guide",
        "Safety Equipment",
        "Medical Support"
      ]
    },
    {
      name: "Budget Rajasthan",
      duration: "7 Days / 6 Nights",
      destinations: ["Jaipur", "Jodhpur", "Jaisalmer"],
      price: "₹26,999",
      originalPrice: "₹33,999",
      rating: "4.9",
      image: "/attached_assets/steptodown.com346993_1752612175890.jpg",
      category: "Budget",
      highlights: [
        "Essential Rajasthan Sights",
        "Budget-Friendly Hotels",
        "Shared Transportation",
        "Group Tours & Activities",
        "Local Food Experiences",
        "Basic Desert Safari",
        "City Walking Tours",
        "Cultural Heritage Sites"
      ],
      inclusions: [
        "6 Nights Mountain Resorts",
        "Daily Breakfast & Dinner",
        "Volvo Bus Transportation",
        "Local Sightseeing",
        "Adventure Activities",
        "Mountain Guide Services"
      ]
    },
    {
      name: "Honeymoon Special",
      duration: "6 Days / 5 Nights",
      destinations: ["Udaipur", "Mount Abu"],
      price: "₹55,999",
      originalPrice: "₹69,999",
      rating: "4.8",
      image: "/attached_assets/steptodown.com546240_1752612283716.jpg",
      category: "Honeymoon",
      highlights: [
        "Romantic Lake Palace Views",
        "Couple's Spa Treatments",
        "Private Sunset Boat Rides",
        "Candlelight Dinners",
        "Luxury Suite Accommodations",
        "Mount Abu Hill Station",
        "Photography Sessions",
        "Romantic Heritage Tours"
      ],
      inclusions: [
        "Round Trip Flights",
        "5 Nights 4-Star Hotels",
        "Daily Breakfast",
        "Airport Transfers",
        "Visa Assistance",
        "Tour Manager Support"
      ]
    }
  ];

  return (
    <section className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50 relative overflow-hidden">
      {/* Enhanced Traditional Indian patterns background */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 15% 25%, #f97316 4px, transparent 4px),
                           radial-gradient(circle at 85% 75%, #ec4899 4px, transparent 4px),
                           radial-gradient(circle at 65% 35%, #dc2626 3px, transparent 3px),
                           radial-gradient(circle at 35% 85%, #eab308 2px, transparent 2px)`,
          backgroundSize: '120px 120px, 140px 140px, 100px 100px, 80px 80px'
        }}></div>
      </div>
      
      {/* Enhanced Traditional Indian border patterns */}
      <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-500 via-pink-500 via-red-500 to-yellow-500 shadow-lg"></div>
      <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-yellow-500 via-red-500 via-pink-500 to-orange-500 shadow-lg"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          {/* Traditional Indian decorative elements */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-6 flex items-center justify-center relative">
              <Globe className="h-6 w-6 text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </div>
          
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-bold mb-8 shadow-lg relative animate-pulse">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white animate-bounce"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-300 rounded-full border border-white animate-ping"></div>
            <Globe className="h-5 w-5 mr-2" />
            Complete Tour Package Collection
          </div>
          
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-pink-600 via-red-600 to-rose-600 bg-clip-text mb-6 xs:mb-8 leading-tight drop-shadow-lg px-2" style={{ fontFamily: "'Cinzel', serif" }}>
            Complete Tour Packages
          </h2>
          
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 xs:mb-8 px-2 xs:px-4" style={{ fontFamily: "'Crimson Text', serif" }}>
            Choose from our carefully crafted tour packages designed to give you the best Rajasthan experience. All packages include accommodation, transportation, and guided tours.
          </p>
          
          {/* Enhanced Hindi/Rajasthani greeting */}
          <div className="mb-8">
            <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
              🙏 राजस्थान में आपका स्वागत है! 🙏
            </p>
            <p className="text-lg text-gray-600 italic">
              (Welcome to Rajasthan! Experience the royal heritage of the Land of Kings)
            </p>
          </div>
          
          {/* Enhanced Traditional Indian feature badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center bg-gradient-to-r from-orange-100 to-pink-100 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border-2 border-orange-300 hover:border-orange-500 transition-all duration-300 transform hover:scale-105">
              <Award className="h-5 w-5 text-orange-600 mr-2" />
              <span className="text-sm font-medium text-gray-800">Authentic Experiences</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-pink-100 to-red-100 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border-2 border-pink-300 hover:border-pink-500 transition-all duration-300 transform hover:scale-105">
              <Shield className="h-5 w-5 text-pink-600 mr-2" />
              <span className="text-sm font-medium text-gray-800">Trusted Service</span>
            </div>
            <div className="flex items-center bg-gradient-to-r from-red-100 to-yellow-100 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border-2 border-red-300 hover:border-red-500 transition-all duration-300 transform hover:scale-105">
              <Users className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-sm font-medium text-gray-800">Expert Guides</span>
            </div>
          </div>
          
          {/* Enhanced Traditional Indian decorative border */}
          <div className="flex justify-center mt-8">
            <div className="h-1 w-40 bg-gradient-to-r from-orange-500 via-pink-500 to-red-600 rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Traditional Indian decorative pattern above cards */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center relative">
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-orange-400 rounded-full"></div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
          {allPackages.map((pkg, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 border-2 border-gradient-to-r from-orange-200 to-pink-200 hover:from-orange-300 hover:to-pink-300 relative">
              {/* Enhanced Traditional Indian corner decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full border-2 border-white z-10 animate-pulse"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full border-2 border-white z-10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full border-2 border-white z-10"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full border-2 border-white z-10"></div>
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Enhanced Traditional Indian decorative corner */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 opacity-25 rounded-br-full"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pink-500 to-red-500 opacity-25 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-red-500 to-yellow-500 opacity-20 rounded-tr-full"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-yellow-500 to-orange-500 opacity-20 rounded-tl-full"></div>
                
                {/* Duration badge with Indian styling */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg border border-orange-300 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {pkg.duration}
                  </div>
                </div>
                
                {/* Category badge with enhanced traditional styling */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border-2 border-white animate-pulse">
                    ⭐ {pkg.category}
                  </span>
                </div>
                
                {/* Rating badge positioned below category */}
                <div className="absolute top-16 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-lg border-2 border-pink-200">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-gray-900">{pkg.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                {/* Enhanced Traditional Indian decorative border */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-orange-500 via-pink-500 via-red-500 to-yellow-500 rounded-full shadow-lg"></div>
                
                <div className="mb-4 pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300" style={{ fontFamily: "'Crimson Text', serif" }}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Users className="h-4 w-4 mr-2 text-orange-500" />
                    <span className="text-sm font-medium">Destinations: {pkg.destinations.join(", ")}</span>
                  </div>
                </div>
                
                {/* Enhanced Pricing Section with Indian currency styling */}
                <div className="mb-6 bg-gradient-to-r from-orange-50 via-pink-50 to-red-50 p-4 rounded-lg border-2 border-gradient-to-r from-orange-300 to-pink-300 shadow-lg">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                    <span className="text-sm text-gray-600">per person</span>
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    💰 Save {Math.round((1 - parseInt(pkg.price.replace(/[^\d]/g, '')) / parseInt(pkg.originalPrice.replace(/[^\d]/g, ''))) * 100)}%
                  </div>
                </div>
                
                {/* Enhanced Package Includes with Indian styling */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full mr-3 flex items-center justify-center">
                      <Heart className="h-3 w-3 text-white" />
                    </div>
                    Package Includes:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {pkg.inclusions.slice(0, 4).map((inclusion, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full mr-3 flex-shrink-0"></div>
                        {inclusion}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Enhanced Traditional Indian decorative separator */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full shadow-lg"></div>
                </div>
                
                <Button 
                  onClick={() => whatsapp(`Hello, I'm interested in the ${pkg.name} package. Could you provide more details about pricing and availability?`)}
                  className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 hover:from-orange-600 hover:via-pink-600 hover:to-red-600 text-white font-medium py-3 sm:py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-pink-300 relative overflow-hidden min-h-[56px] mobile-btn-responsive"
                  style={{ touchAction: 'manipulation' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-pink-400/20 to-orange-400/20 animate-pulse"></div>
                  <div className="relative flex items-center justify-center">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-semibold">BOOK NOW</span>
                  </div>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Custom Package Design Service */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Custom Package Design Service
              </h3>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Don't see exactly what you're looking for? We specialize in creating personalized tour packages 
                based on your specific interests, budget, time frame, and group size. Our travel experts will 
                design the perfect itinerary just for you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Personalized Planning</h4>
                  <p className="text-sm text-purple-100">Tailored to your preferences and budget</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Expert Guidance</h4>
                  <p className="text-sm text-purple-100">Professional travel consultants</p>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Guaranteed Quality</h4>
                  <p className="text-sm text-purple-100">Premium service with 100% satisfaction</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => whatsapp("Hello, I want a custom tour package designed for my specific requirements and preferences")}
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-purple-50 font-medium transform hover:scale-105 transition-all duration-300 min-h-[56px] mobile-btn-responsive"
                  style={{ touchAction: 'manipulation' }}
                >
                  <span className="text-sm sm:text-base font-semibold">Design Custom Package</span>
                </Button>
                <Button 
                  onClick={() => whatsapp("Hello, I want to speak with a travel expert about tour packages")}
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 font-medium transform hover:scale-105 transition-all duration-300 bg-transparent min-h-[56px] mobile-btn-responsive"
                  style={{ touchAction: 'manipulation' }}
                >
                  <span className="text-sm sm:text-base font-semibold">Speak to Travel Expert</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}