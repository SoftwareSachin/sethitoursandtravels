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

      {/* Hero Section with Background Image - No Overlay */}
      <div className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden pt-20">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${uttarPradeshImage})`,
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Premium Badge */}
          <div className="mb-6">
            <Badge className="bg-blue-600/90 backdrop-blur-sm text-white border-blue-400 text-lg px-6 py-2">
              Heritage Uttar Pradesh Tours
            </Badge>
          </div>

          {/* Main Heading with Background */}
          <div className="mb-10">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white leading-tight">
                Uttar Pradesh
                <span className="block text-5xl md:text-7xl text-white">
                  Taxi Services
                </span>
              </h1>
              <p className="text-xl md:text-3xl text-white/95 font-light">
                Explore the Heart of India - From Taj Mahal to Spiritual Varanasi
              </p>
            </div>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-gradient-to-r from-blue-500/95 to-purple-500/95 backdrop-blur-sm text-white px-8 py-4 rounded-full shadow-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-300" />
                <span className="font-bold text-lg">4.9★ Rating</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/95 to-pink-500/95 backdrop-blur-sm text-white px-8 py-4 rounded-full shadow-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <span className="font-bold text-lg">8,000+ UP Tours</span>
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black px-12 py-5 text-2xl shadow-2xl border-2 border-blue-500 hover:border-blue-600 transition-all duration-300 rounded-full backdrop-blur-sm"
              onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे उत्तर प्रदेश टैक्सी सेवा की जानकारी चाहिए।`, '_blank')}
              style={{ color: 'white', fontWeight: '900' }}
            >
              <Phone className="w-6 h-6 mr-3 text-white" />
              <span className="text-white font-black">Book UP Tour</span>
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
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              Our Popular Routes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Heritage Uttar Pradesh
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover India's cultural and spiritual heart with our premium taxi services. From the iconic Taj Mahal to the spiritual ghats of Varanasi, experience the soul of India.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upTaxiServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Car className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-xs">
                        Available
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
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
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Enhanced Contact Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400">
              Contact Sethi Tour & Travels
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Explore Uttar Pradesh?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Contact us now for instant booking, best rates, and personalized Uttar Pradesh tour packages. From Taj Mahal to Varanasi ghats, we'll create your perfect journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Direct</h3>
              <p className="text-gray-400 mb-4">Speak with our UP travel experts</p>
              <Button 
                variant="outline" 
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black"
                onClick={() => window.open(`tel:+919772021780`, '_blank')}
              >
                +91 97720 21780
              </Button>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp Chat</h3>
              <p className="text-gray-400 mb-4">Quick booking & instant response</p>
              <Button 
                variant="outline" 
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-black"
                onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे उत्तर प्रदेश टूर की जानकारी चाहिए।`, '_blank')}
              >
                +91 77270 21780
              </Button>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Person</h3>
              <p className="text-gray-400 mb-4">Kuldeep Choudhary</p>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                UP Specialist
              </Badge>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Available 24/7</h3>
              <p className="text-gray-400 mb-4">Round-the-clock support</p>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                Always Online
              </Badge>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-black px-10 py-4 text-xl shadow-2xl border-2 border-blue-500 rounded-full backdrop-blur-sm"
                onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे उत्तर प्रदेश टूर पैकेज की पूरी जानकारी चाहिए। कृपया सभी विकल्प और रेट बताएं।`, '_blank')}
                style={{ color: 'white', fontWeight: '900' }}
              >
                <Phone className="w-6 h-6 mr-3 text-white" />
                <span className="text-white font-black">Get UP Tour Quote</span>
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