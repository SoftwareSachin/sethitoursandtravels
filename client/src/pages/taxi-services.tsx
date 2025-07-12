import { Link } from "wouter";
import { Car, MapPin, Phone, Clock, Users, Star, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import heroImage from "@assets/image_1752346718122.png";

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
      
      {/* Hero Section with Hawa Mahal Background */}
      <div className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
        <img 
          src={heroImage}
          alt="Premium Taxi Services with Hawa Mahal"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{
            imageRendering: 'auto',
            filter: 'none',
            transform: 'translateZ(0)'
          }}
          loading="eager"
          decoding="sync"
        />
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-2xl">
              Premium Taxi Services
            </h1>
            <p className="text-xl md:text-3xl mb-8 text-white/95 drop-shadow-lg font-light">
              Travel Across India with Comfort & Style
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">15,000+ Happy Customers</span>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span className="font-semibold">24/7 Service</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 text-xl font-semibold shadow-2xl border-2 border-orange-600 hover:border-orange-700 transition-all duration-300"
              onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे टैक्सी सेवा की जानकारी चाहिए।`, '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/90 backdrop-blur-sm text-gray-800 hover:bg-white border-2 border-white px-10 py-4 text-xl font-semibold shadow-2xl transition-all duration-300"
              onClick={() => window.open(`tel:+919772021780`, '_blank')}
            >
              <Car className="w-5 h-5 mr-2" />
              Call Now
            </Button>
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
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
              Our Destinations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore India with Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our premium taxi services across different states and discover the incredible beauty of India with professional drivers and comfortable vehicles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {taxiServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Available
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
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
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={service.path}>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      Explore Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
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