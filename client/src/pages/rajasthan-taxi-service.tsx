import { Link } from "wouter";
import { Car, MapPin, Phone, Clock, Users, Star, ArrowLeft, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import rajasthanImage from "@assets/steptodown.com544967_1752619388732.jpg";

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
    <div className="min-h-screen bg-orange-50">
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

      {/* Hero Section with Traditional Rajasthani Theme */}
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${rajasthanImage})`,
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Traditional Pattern Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Traditional Badge */}
          <div className="mb-8">
            <div className="inline-block bg-orange-600 text-white border-4 border-yellow-500 px-8 py-3 text-lg font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
              राजस्थान यात्रा सेवा - Royal Rajasthan Tours
            </div>
          </div>

          {/* Main Heading with Traditional Design */}
          <div className="mb-12">
            <div className="bg-white bg-opacity-90 border-8 border-orange-600 p-10 shadow-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-orange-800 leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>
                राजस्थान
                <span className="block text-4xl md:text-6xl text-red-700">
                  Taxi Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 font-semibold" style={{ fontFamily: "'Crimson Text', serif" }}>
                Experience the Royal Heritage of the Land of Kings
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
            <div className="bg-white text-red-800 px-8 py-4 border-4 border-red-600 shadow-lg">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-red-600" />
                <span className="font-bold text-lg">8,000+ Heritage Tours</span>
              </div>
            </div>
            <div className="bg-white text-green-800 px-8 py-4 border-4 border-green-600 shadow-lg">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-green-600" />
                <span className="font-bold text-lg">24/7 Royal Service</span>
              </div>
            </div>
          </div>

          {/* Traditional Action Buttons */}
          <div className="flex flex-wrap justify-center gap-8">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-5 text-xl font-bold shadow-lg border-4 border-yellow-500 hover:border-yellow-400 transition-all duration-300"
              onClick={() => window.open(`https://wa.me/917727021780?text=नमस्कार! मुझे राजस्थान टैक्सी सेवा की जानकारी चाहिए।`, '_blank')}
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <Phone className="w-6 h-6 mr-3" />
              Book Rajasthan Tour
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-orange-800 hover:bg-orange-50 border-4 border-orange-600 hover:border-orange-700 px-12 py-5 text-xl font-bold shadow-lg transition-all duration-300"
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
            <div className="inline-block mb-6 bg-red-600 text-white px-8 py-3 border-4 border-yellow-500 text-lg font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
              हमारे लोकप्रिय मार्ग - Our Popular Routes
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
              Royal Rajasthan Heritage Tours
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto" style={{ fontFamily: "'Crimson Text', serif" }}>
              Experience authentic Rajasthani culture through our premium taxi services. From majestic desert safaris to royal palace tours, discover the true essence of the Land of Kings.
            </p>
            <div className="mt-6 w-32 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rajasthanTaxiServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 border-4 border-orange-300 shadow-lg hover:-translate-y-2 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-orange-600 border-4 border-yellow-500 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Car className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600" style={{ fontFamily: "'Cinzel', serif" }}>{service.price}</div>
                      <div className="bg-green-600 text-white text-xs px-2 py-1 border-2 border-green-800 font-bold">
                        Available
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-orange-800 group-hover:text-red-600 transition-colors duration-300 mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
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
                        <div className="w-3 h-3 bg-orange-600 border border-red-600"></div>
                        <span className="font-medium" style={{ fontFamily: "'Crimson Text', serif" }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 border-4 border-yellow-500 hover:border-yellow-400 shadow-lg hover:shadow-xl transition-all duration-300"
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
      <div className="bg-red-800 text-white py-20 border-t-8 border-yellow-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 bg-orange-600 text-white px-8 py-3 border-4 border-yellow-500 text-lg font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
              संपर्क करें - Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
              Ready to Explore Royal Rajasthan?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ fontFamily: "'Crimson Text', serif" }}>
              Contact our experienced travel guides for authentic Rajasthani experiences, traditional heritage tours, and the best royal hospitality across the desert state.
            </p>
            <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a 
              href="tel:+919772021780" 
              className="group bg-orange-600 hover:bg-orange-700 p-8 border-4 border-yellow-500 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-yellow-500 border-4 border-white flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                  <Phone className="w-8 h-8 text-orange-800" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Call Now</h3>
                  <p className="text-white text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>+91 97720 21780</p>
                </div>
              </div>
            </a>
            
            <a 
              href="https://wa.me/917727021780" 
              className="group bg-green-600 hover:bg-green-700 p-8 border-4 border-yellow-500 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-yellow-500 border-4 border-white flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                  <Phone className="w-8 h-8 text-green-800" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Cinzel', serif" }}>WhatsApp</h3>
                  <p className="text-white text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>+91 77270 21780</p>
                </div>
              </div>
            </a>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-yellow-200 text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
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