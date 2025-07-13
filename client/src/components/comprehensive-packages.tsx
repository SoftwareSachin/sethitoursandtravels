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
      image: "/attached_assets/image_1752355776665.png",
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
      name: "Golden Triangle Deluxe",
      duration: "5 Days / 4 Nights", 
      destinations: ["Delhi", "Agra", "Jaipur"],
      price: "₹22,999",
      originalPrice: "₹28,999",
      rating: "4.8",
      image: "/attached_assets/image_1752355900853.png",
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
      name: "Punjab Spiritual Journey",
      duration: "4 Days / 3 Nights",
      destinations: ["Amritsar", "Chandigarh"],
      price: "₹16,999",
      originalPrice: "₹21,999", 
      rating: "4.7",
      image: "/attached_assets/image_1752355931356.png",
      category: "Spiritual",
      highlights: [
        "Golden Temple Early Morning Visit",
        "Wagah Border Ceremony",
        "Jallianwala Bagh Memorial",
        "Langar Hall Experience",
        "Rock Garden Chandigarh",
        "Gurudwara Baba Atal Rai",
        "Traditional Punjabi Cuisine",
        "Spiritual & Cultural Immersion"
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
      name: "Uttarakhand Adventure",
      duration: "6 Days / 5 Nights",
      destinations: ["Dehradun", "Mussoorie", "Rishikesh"],
      price: "₹24,999",
      originalPrice: "₹30,999",
      rating: "4.8",
      image: "/attached_assets/image_1752355954390.png",
      category: "Adventure",
      highlights: [
        "Ganga Aarti at Har Ki Pauri",
        "White Water Rafting",
        "Yoga & Meditation Sessions",
        "Kempty Falls Visit",
        "Beatles Ashram Tour",
        "Adventure Sports in Rishikesh",
        "Mountain Trekking",
        "Spiritual Retreat Experience"
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
      name: "Himachal Hill Stations",
      duration: "7 Days / 6 Nights",
      destinations: ["Shimla", "Manali", "Dharamshala"],
      price: "₹26,999",
      originalPrice: "₹33,999",
      rating: "4.9",
      image: "/attached_assets/image_1752355972172.png",
      category: "Hill Station",
      highlights: [
        "Rohtang Pass Snow Experience",
        "Solang Valley Adventure Sports",
        "Mall Road Shopping",
        "Hadimba Devi Temple",
        "Toy Train Ride",
        "Apple Orchards Visit",
        "Tibetan Culture Experience",
        "Mountain Photography"
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
      name: "Thailand International",
      duration: "6 Days / 5 Nights",
      destinations: ["Bangkok", "Pattaya"],
      price: "₹55,999",
      originalPrice: "₹69,999",
      rating: "4.8",
      image: "/attached_assets/image_1752356016796.png",
      category: "International",
      highlights: [
        "Grand Palace & Wat Pho",
        "Floating Market Experience",
        "Coral Island Day Trip",
        "Thai Cultural Shows",
        "Traditional Thai Massage",
        "Shopping at MBK & Chatuchak",
        "Thai Cooking Classes",
        "Elephant Sanctuary Visit"
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
    <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Traditional Indian patterns background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, #f97316 3px, transparent 3px),
                           radial-gradient(circle at 80% 80%, #dc2626 3px, transparent 3px),
                           radial-gradient(circle at 60% 40%, #eab308 2px, transparent 2px)`,
          backgroundSize: '100px 100px, 120px 120px, 80px 80px'
        }}></div>
      </div>
      
      {/* Traditional Indian border patterns */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500"></div>
      
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
          
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-bold mb-8 shadow-lg relative">
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white"></div>
            Complete Tour Package Collection
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text mb-8 leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>
            Complete Tour Packages
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8" style={{ fontFamily: "'Crimson Text', serif" }}>
            Choose from our carefully crafted tour packages designed to give you the best Rajasthan experience. All packages include accommodation, transportation, and guided tours.
          </p>
          
          {/* Traditional Indian feature badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border-2 border-orange-200 hover:border-orange-400 transition-all duration-300">
              <Award className="h-5 w-5 text-orange-600 mr-2" />
              <span className="text-sm font-medium text-gray-800">Authentic Experiences</span>
            </div>
            <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border-2 border-red-200 hover:border-red-400 transition-all duration-300">
              <Shield className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-sm font-medium text-gray-800">Trusted Service</span>
            </div>
            <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300">
              <Users className="h-5 w-5 text-yellow-600 mr-2" />
              <span className="text-sm font-medium text-gray-800">Expert Guides</span>
            </div>
          </div>
          
          {/* Traditional Indian decorative border */}
          <div className="flex justify-center mt-8">
            <div className="h-1 w-40 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allPackages.map((pkg, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 border-2 border-orange-100 hover:border-orange-300">
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Traditional Indian decorative corner */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 opacity-20 rounded-br-full"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-500 to-orange-500 opacity-20 rounded-bl-full"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg border-2 border-white">
                    {pkg.category}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center shadow-lg border-2 border-orange-200">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-sm font-medium text-gray-900">{pkg.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300" style={{ fontFamily: "'Crimson Text', serif" }}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Users className="h-4 w-4 mr-2 text-orange-500" />
                    <span className="text-sm font-medium">Destinations: {pkg.destinations.join(", ")}</span>
                  </div>
                </div>
                
                {/* Pricing Section */}
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                    <span className="text-sm text-gray-600">per person</span>
                  </div>
                </div>
                
                {/* Package Includes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Package Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {pkg.inclusions.slice(0, 4).map((inclusion, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 flex-shrink-0"></div>
                        {inclusion}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  onClick={() => whatsapp(`Hello, I'm interested in the ${pkg.name} package. Could you provide more details about pricing and availability?`)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  BOOK NOW
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
                  className="bg-white text-purple-600 hover:bg-purple-50 font-medium transform hover:scale-105 transition-all duration-300"
                >
                  Design Custom Package
                </Button>
                <Button 
                  onClick={() => whatsapp("Hello, I want to speak with a travel expert about tour packages")}
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600 font-medium transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Speak to Travel Expert
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}