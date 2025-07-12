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

      {/* Hero Section with Background Image - No Overlay */}
      <div className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden pt-20">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${delhiImage})`,
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Premium Badge */}
          <div className="mb-6">
            <Badge className="bg-red-600/90 backdrop-blur-sm text-white border-red-400 text-lg px-6 py-2">
              Capital Delhi Tours
            </Badge>
          </div>

          {/* Main Heading with Background */}
          <div className="mb-10">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white leading-tight">
                Delhi
                <span className="block text-5xl md:text-7xl text-white">
                  Taxi Services
                </span>
              </h1>
              <p className="text-xl md:text-3xl text-white/95 font-light">
                Explore India's Capital City with Premium Taxi Services
              </p>
            </div>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-gradient-to-r from-red-500/95 to-orange-500/95 backdrop-blur-sm text-white px-8 py-4 rounded-full shadow-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-300" />
                <span className="font-bold text-lg">4.8★ Rating</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/95 to-yellow-500/95 backdrop-blur-sm text-white px-8 py-4 rounded-full shadow-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <span className="font-bold text-lg">12,000+ Delhi Tours</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500/95 to-emerald-500/95 backdrop-blur-sm text-white px-8 py-4 rounded-full shadow-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6" />
                <span className="font-bold text-lg">24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-black px-12 py-5 text-2xl shadow-2xl border-2 border-red-500 hover:border-red-600 transition-all duration-300 rounded-full backdrop-blur-sm"
              onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे दिल्ली टैक्सी सेवा की जानकारी चाहिए।`, '_blank')}
              style={{ color: 'white', fontWeight: '900' }}
            >
              <Phone className="w-6 h-6 mr-3 text-white" />
              <span className="text-white font-black">Book Delhi Tour</span>
            </Button>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-gray-900 font-black border-3 border-white px-12 py-5 text-2xl shadow-2xl transition-all duration-300 rounded-full hover:scale-105"
              onClick={() => window.open(`tel:+919772021780`, '_blank')}
              style={{ color: '#1f2937', fontWeight: '900' }}
            >
              <Car className="w-6 h-6 mr-3 text-gray-900" />
              <span className="text-gray-900 font-black">Call Now</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Services Grid */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
              Our Popular Routes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Capital Delhi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate India's capital with our premium taxi services. From iconic monuments to bustling markets, experience the heart of India with comfort and convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {delhiTaxiServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Car className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">{service.price}</div>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800 text-xs">
                        Available
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-2">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे ${service.name} की बुकिंग करनी है। कृपया दरें और उपलब्धता बताएं।`, '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Book This Route
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
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