import { Link } from "wouter";
import { Car, MapPin, Phone, Clock, Users, Star, ArrowLeft, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import rajasthanImage from "@assets/image_1752345633694.png";

const rajasthanTaxiServices = [
  {
    name: "Jaipur Taxi Service",
    path: "/taxi-services/rajasthan/jaipur",
    description: "Complete Jaipur city tours and local taxi services",
    price: "₹12/KM",
    features: ["City Palace tours", "Hawa Mahal visits", "Amber Fort trips", "Local sightseeing"]
  },
  {
    name: "Jaipur to Bikaner Taxi Service",
    path: "/taxi-services/rajasthan/jaipur-bikaner",
    description: "Direct taxi service from Jaipur to Bikaner",
    price: "₹4,500",
    features: ["One-way trip", "Round trip available", "Camel Safari tours", "Desert experience"]
  },
  {
    name: "Jaipur to Jodhpur Taxi Service",
    path: "/taxi-services/rajasthan/jaipur-jodhpur",
    description: "Comfortable taxi service from Jaipur to Jodhpur",
    price: "₹3,800",
    features: ["Mehrangarh Fort", "Blue City tours", "One-way/Round trip", "AC vehicles"]
  },
  {
    name: "Jaipur to Haridwar Taxi Service",
    path: "/taxi-services/rajasthan/jaipur-haridwar",
    description: "Spiritual journey from Jaipur to Haridwar",
    price: "₹5,200",
    features: ["Ganga Aarti", "Temple visits", "Rishikesh combo", "Comfortable journey"]
  },
  {
    name: "Jaipur to Ahmedabad Taxi Service",
    path: "/taxi-services/rajasthan/jaipur-ahmedabad",
    description: "Long distance taxi service to Ahmedabad",
    price: "₹6,800",
    features: ["Gujarat tours", "Business trips", "Tourist packages", "Reliable service"]
  },
  {
    name: "Jaipur to Agra Taxi Service",
    path: "/taxi-services/rajasthan/jaipur-agra",
    description: "Popular Golden Triangle route taxi service",
    price: "₹3,200",
    features: ["Taj Mahal tours", "Same day return", "Multi-day packages", "English speaking driver"]
  },
  {
    name: "Jaipur to Kota taxi service",
    path: "/taxi-services/rajasthan/jaipur-kota",
    description: "Convenient taxi service from Jaipur to Kota",
    price: "₹2,800",
    features: ["Educational city", "Coaching hub", "Family visits", "Student transportation"]
  },
  {
    name: "Jaipur Delhi Taxi Service",
    path: "/taxi-services/rajasthan/jaipur-delhi",
    description: "Direct taxi service between Jaipur and Delhi",
    price: "₹3,500",
    features: ["Airport transfers", "Business travel", "Tourist packages", "24/7 service"]
  },
  {
    name: "Kota to Udaipur Taxi Service",
    path: "/taxi-services/rajasthan/kota-udaipur",
    description: "Scenic route from Kota to City of Lakes",
    price: "₹4,200",
    features: ["Lake Pichola", "City Palace", "Romantic getaway", "Wedding destinations"]
  },
  {
    name: "Dausa Taxi Service",
    path: "/taxi-services/rajasthan/dausa",
    description: "Local taxi services in Dausa district",
    price: "₹10/KM",
    features: ["Chand Baori", "Nilkanth Mahadev", "Local sightseeing", "Religious tours"]
  },
  {
    name: "Pilani Taxi Service",
    path: "/taxi-services/rajasthan/pilani",
    description: "Educational hub taxi services",
    price: "₹11/KM",
    features: ["BITS Pilani", "Campus visits", "Student transportation", "Local tours"]
  },
  {
    name: "Ajmer Taxi Service",
    path: "/taxi-services/rajasthan/ajmer",
    description: "Holy city taxi services and tours",
    price: "₹12/KM",
    features: ["Ajmer Sharif", "Pushkar Lake", "Religious tours", "Camel fair"]
  },
  {
    name: "Ajmer to Udaipur Taxi Service",
    path: "/taxi-services/rajasthan/ajmer-udaipur",
    description: "Direct taxi service from Ajmer to Udaipur",
    price: "₹3,800",
    features: ["Lake City tours", "Palace visits", "Romantic getaway", "Heritage sites"]
  },
  {
    name: "Bhilwara Taxi Service",
    path: "/taxi-services/rajasthan/bhilwara",
    description: "Textile city taxi services",
    price: "₹10/KM",
    features: ["Industrial tours", "Business travel", "Local sightseeing", "Temple visits"]
  },
  {
    name: "Kota taxi service",
    path: "/taxi-services/rajasthan/kota",
    description: "Education city taxi services",
    price: "₹11/KM",
    features: ["Coaching institutes", "Student services", "City Palace", "Chambal gardens"]
  },
  {
    name: "Jaipur to Udaipur Taxi Service",
    path: "/taxi-services/rajasthan/jaipur-udaipur",
    description: "Pink City to City of Lakes taxi service",
    price: "₹4,500",
    features: ["Lake Pichola", "City Palace", "Jagdish Temple", "Saheliyon ki Bari"]
  },
  {
    name: "Churu Taxi Service",
    path: "/taxi-services/rajasthan/churu",
    description: "Desert town taxi services",
    price: "₹9/KM",
    features: ["Havelis tours", "Desert experience", "Local culture", "Historical sites"]
  },
  {
    name: "Udaipur taxi service",
    path: "/taxi-services/rajasthan/udaipur",
    description: "City of Lakes comprehensive taxi services",
    price: "₹13/KM",
    features: ["Lake tours", "Palace visits", "Romantic tours", "Heritage walks"]
  },
  {
    name: "Khatu Shyam Taxi Service",
    path: "/taxi-services/rajasthan/khatu-shyam",
    description: "Religious pilgrimage taxi services",
    price: "₹8/KM",
    features: ["Khatu Shyam Temple", "Religious tours", "Pilgrimage packages", "Festival visits"]
  },
  {
    name: "Jodhpur Taxi Service",
    path: "/taxi-services/rajasthan/jodhpur",
    description: "Blue City comprehensive taxi services",
    price: "₹12/KM",
    features: ["Mehrangarh Fort", "Umaid Bhawan", "Blue City tours", "Desert safaris"]
  },
  {
    name: "Jaisalmer Taxi Service",
    path: "/taxi-services/rajasthan/jaisalmer",
    description: "Golden City desert taxi services",
    price: "₹14/KM",
    features: ["Jaisalmer Fort", "Desert safaris", "Camel rides", "Sand dunes"]
  },
  {
    name: "Bikaner Taxi Service",
    path: "/taxi-services/rajasthan/bikaner",
    description: "Desert city taxi services and tours",
    price: "₹11/KM",
    features: ["Junagarh Fort", "Camel farm", "Desert tours", "Local cuisine"]
  }
];

export default function RajasthanTaxiService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/taxi-services" className="hover:text-orange-600 flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Taxi Services
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Rajasthan taxi service</span>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image - No Overlay */}
      <div className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${rajasthanImage})`,
            backgroundAttachment: 'fixed'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Premium Badge */}
          <div className="mb-6">
            <Badge className="bg-orange-600/90 backdrop-blur-sm text-white border-orange-400 text-lg px-6 py-2">
              Royal Rajasthan Tours
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="mb-10">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-tight">
              Rajasthan
              <span className="block text-5xl md:text-7xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Taxi Services
              </span>
            </h1>
            <p className="text-2xl md:text-4xl mb-8 text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] font-light">
              Discover the Royal Heritage of the Land of Kings
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
                <span className="font-bold text-lg">8,000+ Rajasthan Tours</span>
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
              onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे राजस्थान टैक्सी सेवा की जानकारी चाहिए।`, '_blank')}
            >
              <Phone className="w-6 h-6 mr-3" />
              Book Rajasthan Tour
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

      {/* Enhanced Services Grid */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-100 text-pink-800 border-pink-200">
              Our Popular Routes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Royal Rajasthan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our extensive network of premium taxi services across the majestic state of Rajasthan. From desert safaris to palace tours, we cover every royal destination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rajasthanTaxiServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-pink-500 to-orange-600 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Car className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-pink-600">{service.price}</div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                        Available
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300 mb-2">
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
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={service.path}>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-600 hover:from-pink-600 hover:to-orange-700 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      Book This Route
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Special Features */}
      <div className="bg-gradient-to-br from-pink-600 via-purple-600 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Premium Rajasthan Experience
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover why thousands of travelers trust us for their royal Rajasthan journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:bg-white/30">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Safe & Secure</h3>
              <p className="text-white/80 leading-relaxed">
                GPS tracking, verified drivers, and 24/7 support for your complete safety
              </p>
            </div>
            
            <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:bg-white/30">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Guides</h3>
              <p className="text-white/80 leading-relaxed">
                Local expertise and cultural insights to make your trip truly memorable
              </p>
            </div>
            
            <div className="group text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:bg-white/30">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Fleet</h3>
              <p className="text-white/80 leading-relaxed">
                Well-maintained AC vehicles for comfortable travel across Rajasthan
              </p>
            </div>
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
              Ready to Explore Royal Rajasthan?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contact our travel experts for instant booking, custom itineraries, and best rates across Rajasthan. Available 24/7 for your convenience.
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