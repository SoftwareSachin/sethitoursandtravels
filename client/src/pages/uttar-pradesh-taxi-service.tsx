import { Link } from "wouter";
import { Car, Phone, Clock, Users, Star, ArrowLeft, Shield, Award, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import uttarPradeshImage from "@assets/steptodown.com346819_1752620009031.jpg";

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
    <div className="min-h-screen bg-orange-50">
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

      {/* Hero Section with Traditional Uttar Pradesh Theme */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${uttarPradeshImage})`,
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Traditional Pattern Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Traditional UP Badge */}
          <div className="mb-8">
            <div className="inline-block bg-orange-600 text-white border-4 border-yellow-500 px-8 py-3 text-lg font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
              उत्तर प्रदेश यात्रा सेवा - Sacred UP Tours
            </div>
          </div>

          {/* Main Heading with Traditional Design */}
          <div className="mb-12">
            <div className="bg-white bg-opacity-90 border-8 border-orange-600 p-10 shadow-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-orange-800 leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>
                उत्तर प्रदेश
                <span className="block text-4xl md:text-6xl text-yellow-700">
                  Uttar Pradesh Taxi Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 font-semibold" style={{ fontFamily: "'Crimson Text', serif" }}>
                Experience the Sacred Heart of India - From Taj Mahal to Spiritual Varanasi
              </p>
              <div className="mt-4 w-32 h-1 bg-orange-600 mx-auto"></div>
            </div>
          </div>

          {/* Traditional Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-white text-orange-800 px-8 py-4 border-4 border-orange-600 shadow-lg">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-600" />
                <span className="font-bold text-lg">4.9 Star Rating</span>
              </div>
            </div>
            <div className="bg-white text-yellow-800 px-8 py-4 border-4 border-yellow-600 shadow-lg">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-yellow-600" />
                <span className="font-bold text-lg">8,000+ Heritage Tours</span>
              </div>
            </div>
            <div className="bg-white text-green-800 px-8 py-4 border-4 border-green-600 shadow-lg">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-green-600" />
                <span className="font-bold text-lg">24/7 Sacred Service</span>
              </div>
            </div>
          </div>

          {/* Traditional Action Buttons */}
          <div className="flex flex-wrap justify-center gap-8">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-5 text-xl font-bold shadow-lg border-4 border-yellow-500 hover:border-yellow-400 transition-all duration-300"
              onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे उत्तर प्रदेश टैक्सी सेवा की जानकारी चाहिए।`, '_blank')}
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <Phone className="w-6 h-6 mr-3" />
              Book UP Tour
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-orange-800 hover:bg-yellow-50 border-4 border-orange-600 hover:border-orange-700 px-12 py-5 text-xl font-bold shadow-lg transition-all duration-300"
              onClick={() => window.open(`tel:+919772021780`, '_blank')}
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <Car className="w-6 h-6 mr-3" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Traditional Services Section */}
      <div className="bg-orange-50 py-20 border-t-8 border-orange-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 bg-orange-600 text-white px-8 py-3 border-4 border-yellow-500 text-lg font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
              हमारे पवित्र मार्ग - Our Sacred Routes
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
              Sacred UP Heritage Tours
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto" style={{ fontFamily: "'Crimson Text', serif" }}>
              Journey through India's spiritual heartland with our authentic taxi services. From the magnificent Taj Mahal to the sacred ghats of Varanasi, experience the divine heritage and ancient wisdom of Uttar Pradesh.
            </p>
            <div className="mt-6 w-32 h-1 bg-orange-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upTaxiServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-4 border-orange-300 shadow-lg hover:-translate-y-2 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-orange-600 border-4 border-yellow-500 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Car className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600" style={{ fontFamily: "'Cinzel', serif" }}>{service.price}</div>
                      <div className="bg-green-600 text-white text-xs px-2 py-1 border-2 border-green-800 font-bold">
                        Available
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-orange-800 group-hover:text-yellow-600 transition-colors duration-300 mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-800">
                        <div className="w-3 h-3 bg-orange-600 border border-yellow-600"></div>
                        <span className="font-medium" style={{ fontFamily: "'Crimson Text', serif" }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 border-4 border-yellow-500 hover:border-yellow-400 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे ${service.name} की बुकिंग करनी है। कृपया दरें और उपलब्धता बताएं।`, '_blank')}
                    style={{ fontFamily: "'Cinzel', serif" }}
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

      {/* Traditional Contact Section */}
      <div className="bg-orange-800 text-white py-20 border-t-8 border-yellow-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 bg-yellow-600 text-white px-8 py-3 border-4 border-orange-500 text-lg font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
              संपर्क करें - Contact Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
              Ready to Explore Sacred Uttar Pradesh?
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
              Connect with our heritage specialists for authentic spiritual experiences across Uttar Pradesh. From the divine Taj Mahal to sacred Varanasi ghats, discover India's spiritual heartland with traditional hospitality.
            </p>
            <div className="w-32 h-1 bg-yellow-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 border-4 border-white flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Phone className="w-8 h-8 text-orange-800" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Call Direct</h3>
              <p className="text-orange-100 mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>Speak with our UP heritage experts</p>
              <Button 
                className="bg-yellow-600 hover:bg-yellow-700 text-white border-4 border-orange-500 hover:border-orange-400 px-8 py-3 font-bold shadow-lg"
                onClick={() => window.open(`tel:+919772021780`, '_blank')}
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                +91 97720 21780
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 border-4 border-white flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Cinzel', serif" }}>WhatsApp Chat</h3>
              <p className="text-orange-100 mb-4" style={{ fontFamily: "'Crimson Text', serif" }}>Quick booking & instant response</p>
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white border-4 border-yellow-500 hover:border-yellow-400 px-8 py-3 font-bold shadow-lg"
                onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे उत्तर प्रदेश टूर की जानकारी चाहिए।`, '_blank')}
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                +91 77270 21780
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-yellow-200 text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
              <MapPin className="w-5 h-5 inline mr-2" />
              S-147, 4S New Loha Mandi Road, Machada, Jaipur-302013
            </p>
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