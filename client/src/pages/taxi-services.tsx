import { Link } from "wouter";
import { Car, MapPin, Phone, Clock, Users, Star, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import heroImage from "@assets/image_1752345572318.png";

const taxiServices = [
  {
    name: "Rajasthan taxi service",
    path: "/taxi-services/rajasthan",
    icon: <Car className="w-5 h-5" />,
    description: "Complete Rajasthan tour taxi services with experienced drivers",
    features: ["All major cities", "Heritage tours", "Desert safaris"]
  },
  {
    name: "Punjab",
    path: "/taxi-services/punjab",
    icon: <Car className="w-5 h-5" />,
    description: "Punjab taxi services for Golden Temple and cultural tours",
    features: ["Amritsar tours", "Cultural sites", "Religious places"]
  },
  {
    name: "Uttar pradesh taxi service",
    path: "/taxi-services/uttar-pradesh",
    icon: <Car className="w-5 h-5" />,
    description: "UP taxi services covering Agra, Varanasi, and more",
    features: ["Taj Mahal tours", "Varanasi trips", "Lucknow visits"]
  },
  {
    name: "Delhi Taxi Service",
    path: "/taxi-services/delhi",
    icon: <Car className="w-5 h-5" />,
    description: "Delhi NCR taxi services for city tours and airport transfers",
    features: ["Airport transfers", "City tours", "Outstation trips"]
  },
  {
    name: "Char Dham Taxi Service",
    path: "/taxi-services/char-dham",
    icon: <Car className="w-5 h-5" />,
    description: "Sacred Char Dham yatra taxi services with comfort",
    features: ["Spiritual tours", "Mountain routes", "Safe journey"]
  }
];

export default function TaxiServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-orange-600/90 to-pink-600/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Taxi Services Across India" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-pink-600/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Premium Taxi Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 drop-shadow-md">
              Reliable & Comfortable Travel Across India
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base mb-8">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Users className="w-5 h-5" />
                <span className="font-semibold">15,000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24/7 Service</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold shadow-lg"
                onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे टैक्सी सेवा की जानकारी चाहिए।`, '_blank')}
              >
                Book Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold"
                onClick={() => window.open(`tel:+919772021780`, '_blank')}
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">100%</h3>
              <p className="text-gray-600">Safe & Secure</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600">Premium Vehicles</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">24/7</h3>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Destination
          </h2>
          <p className="text-lg text-gray-600">
            Select from our wide range of taxi services across different states
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {taxiServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg text-white">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg text-gray-800">{service.name}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={service.path}>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white">
                    View Services
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Custom Taxi Service?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us for personalized taxi services for your specific requirements
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