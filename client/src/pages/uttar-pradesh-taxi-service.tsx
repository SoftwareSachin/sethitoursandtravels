import { Link } from "wouter";
import { Car, Phone, Clock, Users, Star, ArrowLeft, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import uttarPradeshImage from "@assets/image_1752345670377.png";

const upTaxiServices = [
  {
    name: "Agra Local Taxi Service",
    description: "Taj Mahal and Agra sightseeing tours",
    price: "₹12/KM",
    features: ["Taj Mahal", "Agra Fort", "Itimad-ud-Daulah", "Mehtab Bagh"]
  },
  {
    name: "Varanasi Taxi Service",
    description: "Spiritual city tours and Ganga Aarti",
    price: "₹10/KM",
    features: ["Ganga Aarti", "Kashi Vishwanath", "Sarnath", "Boat rides"]
  },
  {
    name: "Lucknow Taxi Service",
    description: "City of Nawabs tours and local transportation",
    price: "₹11/KM",
    features: ["Bara Imambara", "Chota Imambara", "Rumi Darwaza", "Hazratganj"]
  },
  {
    name: "Delhi to Agra Taxi",
    description: "Same day Taj Mahal tour from Delhi",
    price: "₹4,500",
    features: ["Same day return", "AC vehicle", "English guide", "All monuments"]
  },
  {
    name: "Mathura Vrindavan Taxi",
    description: "Krishna pilgrimage tours",
    price: "₹2,800",
    features: ["Krishna Janmabhoomi", "Banke Bihari", "ISKCON", "Govardhan"]
  }
];

export default function UttarPradeshTaxiService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/taxi-services" className="hover:text-blue-600 flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Taxi Services
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Uttar Pradesh taxi service</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={uttarPradeshImage} 
            alt="Uttar Pradesh Taj Mahal and Taxi Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Uttar Pradesh Taxi Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 drop-shadow-md">
              Explore India's Cultural Heritage with Premium Taxi Services
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base mb-8">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Users className="w-5 h-5" />
                <span className="font-semibold">8,000+ UP Tours</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24/7 Available</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold shadow-lg"
                onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे उत्तर प्रदेश टैक्सी सेवा की जानकारी चाहिए।`, '_blank')}
              >
                Book UP Tour
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
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
            Popular UP Destinations
          </h2>
          <p className="text-lg text-gray-600">
            Discover the cultural and spiritual heart of India with our reliable taxi services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upTaxiServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-800">{service.name}</CardTitle>
                      <div className="text-sm font-semibold text-blue-600">{service.price}</div>
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
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
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
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Uttar Pradesh?</h2>
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