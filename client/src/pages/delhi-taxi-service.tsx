import { Link } from "wouter";
import { Car, Phone, Clock, Users, Star, ArrowLeft, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import delhiImage from "@assets/image_1752345690035.png";

const delhiTaxiServices = [
  {
    name: "Delhi Local Taxi Service",
    description: "Complete Delhi city tours and local transportation",
    price: "₹14/KM",
    features: ["Red Fort", "India Gate", "Qutub Minar", "Lotus Temple"]
  },
  {
    name: "Delhi Airport Taxi",
    description: "IGI Airport pickup and drop services",
    price: "₹800",
    features: ["24/7 service", "Flight tracking", "Meet & greet", "All terminals"]
  },
  {
    name: "Delhi to Agra Taxi",
    description: "Same day Taj Mahal tour from Delhi",
    price: "₹4,200",
    features: ["Same day return", "AC vehicle", "Taj Mahal tour", "Professional driver"]
  },
  {
    name: "Delhi to Jaipur Taxi",
    description: "Golden Triangle tour taxi service",
    price: "₹3,800",
    features: ["Pink City tour", "One-way/Round trip", "Palace visits", "Heritage sites"]
  },
  {
    name: "Delhi NCR Taxi Service",
    description: "Gurgaon, Noida, Faridabad taxi services",
    price: "₹12/KM",
    features: ["Business travel", "Corporate trips", "Metro connectivity", "Mall visits"]
  }
];

export default function DelhiTaxiService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/taxi-services" className="hover:text-red-600 flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Taxi Services
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Delhi Taxi Service</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-red-600/90 to-orange-600/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={delhiImage} 
            alt="Delhi India Gate and Taxi Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/80 to-orange-600/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Delhi Taxi Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 drop-shadow-md">
              Explore India's Capital with Premium Taxi Services
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base mb-8">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">4.8/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Users className="w-5 h-5" />
                <span className="font-semibold">12,000+ Delhi Tours</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24/7 Available</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-red-50 px-8 py-3 text-lg font-semibold shadow-lg"
                onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे दिल्ली टैक्सी सेवा की जानकारी चाहिए।`, '_blank')}
              >
                Book Delhi Tour
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg font-semibold"
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
            Delhi Taxi Services
          </h2>
          <p className="text-lg text-gray-600">
            Navigate India's capital with our reliable and comfortable taxi services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {delhiTaxiServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg text-white">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-800">{service.name}</CardTitle>
                      <div className="text-sm font-semibold text-red-600">{service.price}</div>
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
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white">
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
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Delhi?</h2>
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