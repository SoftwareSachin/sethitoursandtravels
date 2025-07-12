import { Link } from "wouter";
import { Car, MapPin, Phone, Clock, Users, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const rajasthanTaxiServices = [
  {
    name: "Jaipur Taxi Service",
    path: "/taxi-services/rajasthan/jaipur",
    description: "Complete Jaipur city tours and local taxi services",
    price: "₹12/KM",
    features: ["City Palace tours", "Hawa Mahal visits", "Amber Fort trips", "Local sightseeing"]
  },
  {
    name: "Jaipur to Bikaner Taxi Service",
    path: "/taxi-services/rajasthan/jaipur-bikaner",
    description: "Direct taxi service from Jaipur to Bikaner",
    price: "₹4,500",
    features: ["One-way trip", "Round trip available", "Camel Safari tours", "Desert experience"]
  },
  {
    name: "Jaipur to Jodhpur Taxi Service",
    path: "/taxi-services/rajasthan/jaipur-jodhpur",
    description: "Comfortable taxi service from Jaipur to Jodhpur",
    price: "₹3,800",
    features: ["Mehrangarh Fort", "Blue City tours", "One-way/Round trip", "AC vehicles"]
  },
  {
    name: "Jaipur to Haridwar Taxi Service",
    path: "/taxi-services/rajasthan/jaipur-haridwar",
    description: "Spiritual journey from Jaipur to Haridwar",
    price: "₹5,200",
    features: ["Ganga Aarti", "Temple visits", "Rishikesh combo", "Comfortable journey"]
  },
  {
    name: "Jaipur to Ahmedabad Taxi Service",
    path: "/taxi-services/rajasthan/jaipur-ahmedabad",
    description: "Long distance taxi service to Ahmedabad",
    price: "₹6,800",
    features: ["Gujarat tours", "Business trips", "Tourist packages", "Reliable service"]
  },
  {
    name: "Jaipur to Agra Taxi Service",
    path: "/taxi-services/rajasthan/jaipur-agra",
    description: "Popular Golden Triangle route taxi service",
    price: "₹3,200",
    features: ["Taj Mahal tours", "Same day return", "Multi-day packages", "English speaking driver"]
  },
  {
    name: "Jaipur to Kota taxi service",
    path: "/taxi-services/rajasthan/jaipur-kota",
    description: "Convenient taxi service from Jaipur to Kota",
    price: "₹2,800",
    features: ["Educational city", "Coaching hub", "Family visits", "Student transportation"]
  },
  {
    name: "Jaipur Delhi Taxi Service",
    path: "/taxi-services/rajasthan/jaipur-delhi",
    description: "Direct taxi service between Jaipur and Delhi",
    price: "₹3,500",
    features: ["Airport transfers", "Business travel", "Tourist packages", "24/7 service"]
  },
  {
    name: "Kota to Udaipur Taxi Service",
    path: "/taxi-services/rajasthan/kota-udaipur",
    description: "Scenic route from Kota to City of Lakes",
    price: "₹4,200",
    features: ["Lake Pichola", "City Palace", "Romantic getaway", "Wedding destinations"]
  }
];

export default function RajasthanTaxiService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/taxi-services" className="hover:text-orange-600 flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Taxi Services
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Rajasthan taxi service</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-orange-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rajasthan Taxi Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Explore the Royal Heritage of Rajasthan with our premium taxi services
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>5,000+ Rajasthan Tours</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Popular Rajasthan Routes
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our extensive network of taxi services across Rajasthan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rajasthanTaxiServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg text-white">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-800">{service.name}</CardTitle>
                      <div className="text-sm font-semibold text-pink-600">{service.price}</div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={service.path}>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Special Offers */}
      <div className="bg-gradient-to-r from-pink-100 to-orange-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Offers</h2>
            <p className="text-lg text-gray-600">Save more on your Rajasthan journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-pink-600 mb-2">Book in Advance</h3>
              <p className="text-gray-600 mb-4">Book your taxi 48 hours in advance and receive a 10% discount</p>
              <div className="text-2xl font-bold text-orange-600">10% OFF</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-pink-600 mb-2">Round Trip Discount</h3>
              <p className="text-gray-600 mb-4">Book round trip taxi services and receive a 15% discount on total fare</p>
              <div className="text-2xl font-bold text-orange-600">15% OFF</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Rajasthan?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us now for instant booking and best rates
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919772021780" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
              <span>Call: +91 97720 21780</span>
            </a>
            <a href="https://wa.me/917727021780" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
              <span>WhatsApp: +91 77270 21780</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}