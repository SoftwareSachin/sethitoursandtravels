import { Link } from "wouter";
import { Car, Phone, Clock, Users, Star, ArrowLeft, Mountain, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import charDhamImage from "@assets/steptodown.com707890_1752620797269.jpg";

const charDhamTaxiServices = [
  {
    name: "Kedarnath Taxi Service",
    description: "Sacred journey to Lord Shiva's abode",
    price: "₹8,500",
    features: ["Helicopter booking", "Trek arrangements", "Accommodation", "Darshan tickets"]
  },
  {
    name: "Badrinath Taxi Service",
    description: "Pilgrimage to Lord Vishnu's temple",
    price: "₹9,200",
    features: ["Valley of Flowers", "Mana Village", "Tapt Kund", "Temple darshan"]
  },
  {
    name: "Gangotri Taxi Service",
    description: "Source of holy river Ganga",
    price: "₹7,800",
    features: ["Gaumukh trek", "Gangotri temple", "Bhojwasa", "River origin"]
  },
  {
    name: "Yamunotri Taxi Service",
    description: "Origin of river Yamuna",
    price: "₹7,200",
    features: ["Yamunotri temple", "Surya Kund", "Divya Shila", "Hot springs"]
  },
  {
    name: "Complete Char Dham Yatra",
    description: "All four sacred sites in one package",
    price: "₹25,000",
    features: ["12-day package", "All accommodations", "Meals included", "Experienced driver"]
  }
];

export default function CharDhamTaxiService() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-orange-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/taxi-services" className="hover:text-orange-600 flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Taxi Services
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Char Dham Taxi Service</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Traditional Indian Char Dham Theme */}
      <div className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${charDhamImage})`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Traditional Sacred Badge */}
          <div className="mb-8">
            <div className="inline-block bg-orange-600 text-white border-2 border-yellow-400 px-8 py-3 text-lg font-serif">
              पवित्र चार धाम यात्रा
            </div>
          </div>

          {/* Main Heading with Traditional Background */}
          <div className="mb-12">
            <div className="bg-black/70 border-4 border-yellow-400 p-10 mb-8">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white leading-tight">
                चार धाम
                <span className="block text-4xl md:text-6xl text-yellow-400">
                  यात्रा सेवा
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white font-serif">
                चार पवित्र धामों की दिव्य यात्रा
              </p>
            </div>
          </div>

          {/* Traditional Sacred Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="bg-orange-600 text-white px-8 py-4 border-2 border-yellow-400">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="font-bold text-lg font-serif">4.9 रेटिंग</span>
              </div>
            </div>
            <div className="bg-blue-600 text-white px-8 py-4 border-2 border-yellow-400">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <span className="font-bold text-lg font-serif">2,000+ श्रद्धालु</span>
              </div>
            </div>
            <div className="bg-green-600 text-white px-8 py-4 border-2 border-yellow-400">
              <div className="flex items-center gap-3">
                <Mountain className="w-6 h-6" />
                <span className="font-bold text-lg font-serif">पर्वतीय विशेषज्ञ</span>
              </div>
            </div>
          </div>

          {/* Traditional Sacred Action Buttons */}
          <div className="flex flex-wrap justify-center gap-8">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-12 py-6 text-xl border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 font-serif"
              onClick={() => window.open(`https://wa.me/917727021780?text=हर हर महादेव! मुझे चार धाम यात्रा की जानकारी चाहिए।`, '_blank')}
            >
              <Phone className="w-6 h-6 mr-3" />
              <span>चार धाम यात्रा बुक करें</span>
            </Button>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-orange-600 font-bold border-2 border-orange-600 px-12 py-6 text-xl transition-all duration-300 font-serif"
              onClick={() => window.open(`tel:+919772021780`, '_blank')}
            >
              <Car className="w-6 h-6 mr-3" />
              <span>अभी कॉल करें</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Traditional Sacred Services Grid */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-600 text-white border-2 border-yellow-400 px-8 py-3 text-lg font-serif mb-6">
              हमारे पवित्र मार्ग
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              दिव्य चार धाम यात्रा
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-serif">
              अनुभवी चालकों के साथ चार पवित्र धामों की संपूर्ण आध्यात्मिक यात्रा। केदारनाथ से बदरीनाथ तक, हमारी प्रीमियम तीर्थयात्रा सेवाओं के साथ दिव्य आशीर्वाद का अनुभव करें।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {charDhamTaxiServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 border-orange-200 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-orange-600 border-2 border-yellow-400 text-white">
                      <Mountain className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600 font-serif">{service.price}</div>
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 border border-green-300 font-serif">
                        उपलब्ध
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-2 font-serif">
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
                        <div className="w-2 h-2 bg-orange-600 border border-yellow-400"></div>
                        <span className="font-medium font-serif">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 border-2 border-yellow-400 transition-all duration-300 font-serif"
                    onClick={() => window.open(`https://wa.me/917727021780?text=हर हर महादेव! मुझे ${service.name} की बुकिंग करनी है। कृपया दरें और उपलब्धता बताएं।`, '_blank')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    इस यात्रा को बुक करें
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Traditional Important Notice */}
      <div className="bg-orange-100 py-12 border-t-4 border-orange-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">महत्वपूर्ण सूचना</h3>
            <p className="text-lg text-gray-600 mb-6 font-serif">
              चार धाम यात्रा मौसमी है और मौसम की स्थिति पर निर्भर करती है। बुकिंग से पहले मंदिर खुलने की तारीखें जांच लें।
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-4 border-2 border-orange-300">
                <h4 className="font-semibold text-gray-800 mb-2 font-serif">यात्रा का सबसे अच्छा समय</h4>
                <p className="text-gray-600 font-serif">मई से अक्टूबर (सर्दियों में मंदिर बंद रहते हैं)</p>
              </div>
              <div className="bg-white p-4 border-2 border-orange-300">
                <h4 className="font-semibold text-gray-800 mb-2 font-serif">साथ ले जाने वाली चीजें</h4>
                <p className="text-gray-600 font-serif">गर्म कपड़े, बारिश का गियर, आरामदायक जूते, दवाइयां</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Contact Section */}
      <div className="bg-orange-600 text-white py-16 border-t-4 border-yellow-400">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">चार धाम यात्रा के लिए तैयार हैं?</h2>
          <p className="text-lg mb-8 font-serif">
            पवित्र यात्रा की योजना और बुकिंग के लिए अभी संपर्क करें
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