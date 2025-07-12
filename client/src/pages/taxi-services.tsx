import { Link } from "wouter";
import { Car, MapPin, Phone, Clock, Users, Star, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import heroImage from "@assets/image_1752346718122.png";
import rajasthanImage from "@assets/image_1752347005342.png";
import punjabImage from "@assets/image_1752347021738.png";
import upImage from "@assets/image_1752347043356.png";
import delhiImage from "@assets/image_1752347093543.png";
import charDhamImage from "@assets/image_1752347107343.png";

const taxiServices = [
  {
    name: "Rajasthan taxi service",
    path: "/taxi-services/rajasthan",
    icon: <Car className="w-5 h-5" />,
    description: "Complete Rajasthan tour taxi services with experienced drivers",
    features: ["All major cities", "Heritage tours", "Desert safaris"],
    image: rajasthanImage
  },
  {
    name: "Punjab",
    path: "/taxi-services/punjab",
    icon: <Car className="w-5 h-5" />,
    description: "Punjab taxi services for Golden Temple and cultural tours",
    features: ["Amritsar tours", "Cultural sites", "Religious places"],
    image: punjabImage
  },
  {
    name: "Uttar pradesh taxi service",
    path: "/taxi-services/uttar-pradesh",
    icon: <Car className="w-5 h-5" />,
    description: "UP taxi services covering Agra, Varanasi, and more",
    features: ["Taj Mahal tours", "Varanasi trips", "Lucknow visits"],
    image: upImage
  },
  {
    name: "Delhi Taxi Service",
    path: "/taxi-services/delhi",
    icon: <Car className="w-5 h-5" />,
    description: "Delhi NCR taxi services for city tours and airport transfers",
    features: ["Airport transfers", "City tours", "Outstation trips"],
    image: delhiImage
  },
  {
    name: "Char Dham Taxi Service",
    path: "/taxi-services/char-dham",
    icon: <Car className="w-5 h-5" />,
    description: "Sacred Char Dham yatra taxi services with comfort",
    features: ["Spiritual tours", "Mountain routes", "Safe journey"],
    image: charDhamImage
  }
];

export default function TaxiServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50">
      <Navigation />
      
      {/* Hero Section with Hawa Mahal Background - No Overlay */}
      <div className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Premium Badge */}
          <div className="mb-6">
            <Badge className="bg-orange-600/90 backdrop-blur-sm text-white border-orange-400 text-lg px-6 py-2">
              Premium Travel Services
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="mb-10">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-tight">
              Rajasthan Taxi
              <span className="block text-5xl md:text-7xl bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-2xl md:text-4xl mb-8 text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] font-light">
              Discover the Royal Heritage with Premium Comfort
            </p>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-gradient-to-r from-orange-500/95 to-pink-500/95 backdrop-blur-sm text-white px-8 py-4 rounded-full shadow-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-300" />
                <span className="font-bold text-lg">4.9★ Rating</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/95 to-purple-500/95 backdrop-blur-sm text-white px-8 py-4 rounded-full shadow-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <span className="font-bold text-lg">15,000+ Customers</span>
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
              className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-12 py-5 text-2xl font-bold shadow-2xl border-2 border-orange-500 hover:border-orange-600 transition-all duration-300 rounded-full"
              onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे टैक्सी सेवा की जानकारी चाहिए।`, '_blank')}
            >
              <Phone className="w-6 h-6 mr-3" />
              Book Now
            </Button>
            <Button 
              size="lg" 
              className="bg-white/95 backdrop-blur-sm text-gray-900 hover:bg-white border-3 border-white px-12 py-5 text-2xl font-bold shadow-2xl transition-all duration-300 rounded-full hover:scale-105"
              onClick={() => window.open(`tel:+919772021780`, '_blank')}
            >
              <Car className="w-6 h-6 mr-3" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Trust Indicators Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Sethi Tour & Travels?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner for premium travel experiences across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600 font-semibold">Safe & Secure Journey</p>
            </div>
            
            <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600 font-semibold">Years of Excellence</p>
            </div>
            
            <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl">
                <Car className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600 font-semibold">Premium Fleet</p>
            </div>
            
            <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600 font-semibold">Customer Support</p>
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
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white overflow-hidden">
                {/* Destination Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={`${service.name} destination`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 right-4 bg-green-500 text-white border-0">
                    Available
                  </Badge>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {service.name}
                    </CardTitle>
                  </div>
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

      {/* Enhanced Contact Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-orange-600 text-white border-orange-400 text-lg px-6 py-2">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Custom Taxi Service?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contact us for personalized taxi services tailored to your specific travel requirements. 
              Our expert team is available 24/7 to assist you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a 
              href="tel:+919772021780" 
              className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2">Call Now</h3>
                  <p className="text-blue-100 text-lg">+91 97720 21780</p>
                </div>
              </div>
            </a>
            
            <a 
              href="https://wa.me/917727021780" 
              className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Phone className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                  <p className="text-green-100 text-lg">+91 77270 21780</p>
                </div>
              </div>
            </a>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg">
              <MapPin className="w-5 h-5 inline mr-2" />
              S-147, 4S New Loha Mandi Road, Machada, Jaipur-302013
            </p>
          </div>
        </div>
      </div>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}