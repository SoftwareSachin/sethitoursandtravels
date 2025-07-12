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

      {/* Hero Section with Background Image - No Overlay */}
      <div className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden pt-20">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${punjabImage})`,
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Premium Badge */}
          <div className="mb-6">
            <Badge className="bg-orange-600/90 backdrop-blur-sm text-white border-orange-400 text-lg px-6 py-2">
              Sacred Punjab Tours
            </Badge>
          </div>

          {/* Main Heading with Background */}
          <div className="mb-10">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white leading-tight">
                Punjab
                <span className="block text-5xl md:text-7xl text-white">
                  Taxi Services
                </span>
              </h1>
              <p className="text-xl md:text-3xl text-white/95 font-light">
                Discover the Land of Five Rivers and Sacred Gurudwaras
              </p>
            </div>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-gradient-to-r from-yellow-500/95 to-green-500/95 backdrop-blur-sm text-white px-8 py-4 rounded-full shadow-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-300" />
                <span className="font-bold text-lg">4.8★ Rating</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/95 to-purple-500/95 backdrop-blur-sm text-white px-8 py-4 rounded-full shadow-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <span className="font-bold text-lg">3,000+ Punjab Tours</span>
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
              className="bg-gradient-to-r from-yellow-600 to-green-600 hover:from-yellow-700 hover:to-green-700 text-white font-black px-12 py-5 text-2xl shadow-2xl border-2 border-yellow-500 hover:border-yellow-600 transition-all duration-300 rounded-full backdrop-blur-sm"
              onClick={() => window.open(`https://wa.me/917727021780?text=सत श्री अकाल! मुझे पंजाब टैक्सी सेवा की जानकारी चाहिए।`, '_blank')}
              style={{ color: 'white', fontWeight: '900' }}
            >
              <Phone className="w-6 h-6 mr-3 text-white" />
              <span className="text-white font-black">Get Punjab Tour Quote</span>
            </Button>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-gray-900 font-black border-3 border-white px-12 py-5 text-2xl shadow-2xl transition-all duration-300 rounded-full hover:scale-105"
              onClick={() => window.open(`tel:+919772021780`, '_blank')}
              style={{ color: '#1f2937', fontWeight: '900' }}
            >
              <Car className="w-6 h-6 mr-3 text-gray-900" />
              <span className="text-gray-900 font-black">Call for Instant Booking</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Services Grid */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-200">
              Our Popular Routes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Sacred Punjab
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover Punjab's rich spiritual heritage, vibrant culture, and historic sites with our premium taxi services. From the Golden Temple to cultural landmarks across the land of five rivers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {punjabTaxiServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-yellow-500 to-green-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Car className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-600">{service.price}</div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        Available
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 mb-2">
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
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-yellow-500 to-green-600 hover:from-yellow-600 hover:to-green-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(`https://wa.me/917727021780?text=सत श्री अकाल! मुझे ${service.name} की बुकिंग करनी है। कृपया दरें और उपलब्धता बताएं।`, '_blank')}
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

      {/* Enhanced Contact Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-yellow-500/20 text-yellow-300 border-yellow-400">
              Contact Sethi Tour & Travels
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Explore Sacred Punjab?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Contact us now for instant booking, best rates, and personalized Punjab tour packages. Our expert team is available 24/7 to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Direct</h3>
              <p className="text-gray-400 mb-4">Speak with our Punjab travel experts</p>
              <Button 
                variant="outline" 
                className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black"
                onClick={() => window.open(`tel:+919772021780`, '_blank')}
              >
                +91 97720 21780
              </Button>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp Chat</h3>
              <p className="text-gray-400 mb-4">Quick booking & instant response</p>
              <Button 
                variant="outline" 
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
                onClick={() => window.open(`https://wa.me/917727021780?text=सत श्री अकाल! मुझे पंजाब टूर की जानकारी चाहिए।`, '_blank')}
              >
                +91 77270 21780
              </Button>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Person</h3>
              <p className="text-gray-400 mb-4">Kuldeep Choudhary</p>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Punjab Specialist
              </Badge>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Available 24/7</h3>
              <p className="text-gray-400 mb-4">Round-the-clock support</p>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Always Online
              </Badge>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-green-600 hover:from-yellow-700 hover:to-green-700 text-white font-black px-10 py-4 text-xl shadow-2xl border-2 border-yellow-500 rounded-full backdrop-blur-sm"
                onClick={() => window.open(`https://wa.me/917727021780?text=सत श्री अकाल! मुझे पंजाब टूर पैकेज की पूरी जानकारी चाहिए। कृपया सभी विकल्प और रेट बताएं।`, '_blank')}
                style={{ color: 'white', fontWeight: '900' }}
              >
                <Phone className="w-6 h-6 mr-3 text-white" />
                <span className="text-white font-black">Get Punjab Tour Quote</span>
              </Button>
              <Button 
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 font-black border-2 border-white px-10 py-4 text-xl shadow-2xl rounded-full"
                onClick={() => window.open(`tel:+919772021780`, '_blank')}
                style={{ color: '#1f2937', fontWeight: '900' }}
              >
                <Car className="w-6 h-6 mr-3 text-gray-900" />
                <span className="text-gray-900 font-black">Call for Instant Booking</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}