import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Users, Plane, Car, Award, Globe, Heart, TrendingUp, Calendar, Shield } from "lucide-react";
import { useCommunication, CommunicationUtils } from "./communication-utils";

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
        "Punjabi Cultural Show",
        "Traditional Langar Experience", 
        "Rock Garden Chandigarh",
        "Local Punjabi Cuisine",
        "Folk Music Performances"
      ],
      inclusions: [
        "3 Nights Hotel Stay",
        "All Meals Included",
        "AC Transportation",
        "Local Guide Services",
        "Cultural Program Tickets",
        "Religious Site Visits"
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
        "Bungee Jumping Experience",
        "Yoga & Meditation Sessions",
        "Mountain Trekking",
        "Cable Car Rides",
        "Temple Visits",
        "Himalayan Sunrise Views"
      ],
      inclusions: [
        "5 Nights Hill Station Hotels",
        "Adventure Activity Packages",
        "Daily Breakfast & Dinner",
        "Mountain Transportation",
        "Activity Instructors",
        "Safety Equipment Included"
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
        "Hadimba Temple Visit",
        "Apple Orchard Tours",
        "Toy Train Ride",
        "Local Himachali Culture",
        "Mountain Photography"
      ],
      inclusions: [
        "6 Nights Mountain Resorts",
        "All Meals & Snacks",
        "Hill Station Transportation",
        "Adventure Activities",
        "Local Sightseeing",
        "Cultural Performances"
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
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Globe className="h-5 w-5 mr-2" />
            Complete Tour Package Collection
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Explore Our Tour Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive range of tour packages designed for every traveler. From spiritual journeys 
            to adventure trips, domestic heritage tours to international experiences - we have something special for everyone.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <Award className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-sm font-medium">Experiences</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <Shield className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm font-medium">Trusted Service</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <Users className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium">Expert Guides</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allPackages.map((pkg, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    {pkg.category}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-full flex items-center shadow-lg">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm flex items-center shadow-lg">
                    <Clock className="h-4 w-4 mr-1" />
                    {pkg.duration}
                  </span>
                </div>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                
                {index === 0 && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                    Heritage Experience
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-gray-600 ml-1">{pkg.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {pkg.name}
                </h3>
                
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1 text-purple-600" />
                  <span>{pkg.destinations.join(" → ")}</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">per person</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Save {Math.round(((parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))) / parseInt(pkg.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Package Highlights:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {pkg.highlights.slice(0, 4).map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                    {pkg.highlights.length > 4 && (
                      <li className="text-primary text-xs">
                        +{pkg.highlights.length - 4} more experiences
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {pkg.inclusions.slice(0, 3).map((inclusion, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2 flex-shrink-0"></div>
                        {inclusion}
                      </li>
                    ))}
                    {pkg.inclusions.length > 3 && (
                      <li className="text-emerald-600 text-xs">
                        +{pkg.inclusions.length - 3} more inclusions
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    onClick={() => whatsapp(CommunicationUtils.getBookingMessage(pkg.name))}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Book This Package
                  </Button>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Free Cancellation</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      <span>Secure Booking</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto text-white">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-6">
              Custom Package Design Service
            </h3>
            <p className="text-purple-100 mb-8 text-lg max-w-3xl mx-auto leading-relaxed">
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
    </section>
  );
}