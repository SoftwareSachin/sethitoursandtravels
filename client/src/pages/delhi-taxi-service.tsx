import { Link } from "wouter";
import { Car, Phone, Clock, Users, Star, ArrowLeft, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import delhiImage from "@assets/steptodown.com122922_1752620654272.jpg";

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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-red-200">
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

      {/* Hero Section with Traditional Indian Delhi Theme */}
      <div className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${delhiImage})`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Traditional Delhi Badge */}
          <div className="mb-8">
            <div className="inline-block bg-red-600 text-white border-2 border-yellow-400 px-8 py-3 text-lg font-serif">
              राजधानी दिल्ली यात्रा सेवा
            </div>
          </div>

          {/* Main Heading with Traditional Background */}
          <div className="mb-12">
            <div className="bg-black/70 border-4 border-yellow-400 p-10 mb-8">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white leading-tight">
                दिल्ली
                <span className="block text-4xl md:text-6xl text-yellow-400">
                  टैक्सी सेवा
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white font-serif">
                भारत की राजधानी में प्रीमियम टैक्सी सेवाएं
              </p>
            </div>
          </div>

          {/* Traditional Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-red-600 text-white px-8 py-4 border-2 border-yellow-400">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="font-bold text-lg font-serif">4.8 रेटिंग</span>
              </div>
            </div>
            <div className="bg-orange-600 text-white px-8 py-4 border-2 border-yellow-400">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <span className="font-bold text-lg font-serif">12,000+ दिल्ली टूर</span>
              </div>
            </div>
            <div className="bg-green-600 text-white px-8 py-4 border-2 border-yellow-400">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6" />
                <span className="font-bold text-lg font-serif">24/7 उपलब्ध</span>
              </div>
            </div>
          </div>

          {/* Traditional Action Buttons */}
          <div className="flex flex-wrap justify-center gap-8">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-6 text-xl border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 font-serif"
              onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे दिल्ली टैक्सी सेवा की जानकारी चाहिए।`, '_blank')}
            >
              <Phone className="w-6 h-6 mr-3" />
              <span>दिल्ली टूर बुक करें</span>
            </Button>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-red-600 font-bold border-2 border-red-600 px-12 py-6 text-xl transition-all duration-300 font-serif"
              onClick={() => window.open(`tel:+919772021780`, '_blank')}
            >
              <Car className="w-6 h-6 mr-3" />
              <span>अभी कॉल करें</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Traditional Services Grid */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-600 text-white border-2 border-yellow-400 px-8 py-3 text-lg font-serif mb-6">
              हमारे लोकप्रिय मार्ग
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              राजधानी दिल्ली की खोज करें
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-serif">
              भारत की राजधानी में हमारी प्रीमियम टैक्सी सेवाओं के साथ यात्रा करें। प्रतिष्ठित स्मारकों से लेकर हलचल भरे बाजारों तक, आराम और सुविधा के साथ भारत के दिल का अनुभव करें।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {delhiTaxiServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 border-red-200 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-red-600 border-2 border-yellow-400 text-white">
                      <Car className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600 font-serif">{service.price}</div>
                      <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 border border-orange-300 font-serif">
                        उपलब्ध
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300 mb-2 font-serif">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed font-serif">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-red-600 border border-yellow-400"></div>
                        <span className="font-medium font-serif">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 border-2 border-yellow-400 transition-all duration-300 font-serif"
                    onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे ${service.name} की बुकिंग करनी है। कृपया दरें और उपलब्धता बताएं।`, '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    इस मार्ग को बुक करें
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Traditional Contact Section */}
      <div className="bg-red-600 text-white py-16 border-t-4 border-yellow-400">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">दिल्ली की खोज के लिए तैयार हैं?</h2>
          <p className="text-lg mb-8 font-serif">
            तुरंत बुकिंग और सबसे अच्छी दरों के लिए अभी संपर्क करें
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919772021780" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 border-2 border-yellow-400 transition-colors font-serif">
              <Phone className="w-5 h-5" />
              <span>कॉल करें: +91 97720 21780</span>
            </a>
            <a href="https://wa.me/917727021780" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 border-2 border-yellow-400 transition-colors font-serif">
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