import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Users, Plane, Car } from "lucide-react";

export default function ComprehensivePackages() {
  const allPackages = [
    {
      name: "Rajasthan Heritage Circuit",
      duration: "8 Days / 7 Nights",
      destinations: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
      price: "₹28,999",
      originalPrice: "₹35,999",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Tour Package Collection</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of tour packages designed for every traveler. From spiritual journeys 
            to adventure trips, domestic heritage tours to international experiences - we have something special for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPackages.map((pkg, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/70 text-white px-2 py-1 rounded flex items-center">
                    <Star className="h-3 w-3 mr-1 text-yellow-500" />
                    <span className="text-sm">{pkg.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {pkg.duration}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {pkg.name}
                </h3>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{pkg.destinations.join(" → ")}</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  <span className="text-sm text-gray-600">per person</span>
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
                
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-blue-700 text-white group-hover:bg-secondary transition-colors"
                >
                  <a href={`https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20book%20${encodeURIComponent(pkg.name)}%20package`}>
                    Book This Package
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Package Design Service</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Don't see exactly what you're looking for? We specialize in creating personalized tour packages 
              based on your specific interests, budget, time frame, and group size. Our travel experts will 
              design the perfect itinerary just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-secondary hover:bg-orange-600 text-white"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20a%20custom%20tour%20package%20designed%20for%20my%20requirements">
                  Design Custom Package
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a href="tel:9772021780">
                  Speak to Travel Expert
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}