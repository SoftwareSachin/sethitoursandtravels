import { Link } from "wouter";
import { Car, Phone, Clock, Users, Star, ArrowLeft, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import punjabImage from "@assets/image_1752345647931.png";

const punjabTaxiServices = [
  {
    name: "Amritsar Local Taxi Service",
    description: "Golden Temple and local sightseeing tours",
    price: "₹10/KM",
    features: ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Local markets"]
  },
  {
    name: "Amritsar to Chandigarh Taxi",
    description: "Direct taxi service from Amritsar to Chandigarh",
    price: "₹3,500",
    features: ["Rock Garden", "Sukhna Lake", "Rose Garden", "Sector 17"]
  },
  {
    name: "Ludhiana Taxi Service",
    description: "Industrial city taxi services and tours",
    price: "₹12/KM",
    features: ["Business trips", "Local sightseeing", "Airport transfers", "Shopping tours"]
  },
  {
    name: "Patiala Taxi Service",
    description: "Heritage city tours and local transportation",
    price: "₹11/KM",
    features: ["Qila Mubarak", "Sheesh Mahal", "Baradari Gardens", "Local culture"]
  }
];

export default function PunjabTaxiService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/taxi-services" className="hover:text-yellow-600 flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Taxi Services
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Punjab</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-yellow-600/90 to-green-600/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={punjabImage} 
            alt="Punjab Golden Temple and Taxi Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/80 to-green-600/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Punjab Taxi Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 drop-shadow-md">
              Discover the Land of Five Rivers with Premium Taxi Services
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base mb-8">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">4.8/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Users className="w-5 h-5" />
                <span className="font-semibold">3,000+ Punjab Tours</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24/7 Available</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-3 text-lg font-semibold shadow-lg"
                onClick={() => window.open(`https://wa.me/917727021780?text=सत श्री अकाल! मुझे पंजाब टैक्सी सेवा की जानकारी चाहिए।`, '_blank')}
              >
                Book Punjab Tour
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 text-lg font-semibold"
                onClick={() => window.open(`tel:+919772021780`, '_blank')}
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Punjab Taxi Services
          </h2>
          <p className="text-lg text-gray-600">
            Explore Punjab's rich culture and heritage with our reliable taxi services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {punjabTaxiServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-yellow-500 to-green-500 rounded-lg text-white">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-800">{service.name}</CardTitle>
                      <div className="text-sm font-semibold text-yellow-600">{service.price}</div>
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
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Punjab?</h2>
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

      {/* Website Footer */}
      <Footer />
    </div>
  );
}