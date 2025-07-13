import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Route, ArrowRight, Briefcase, Star, Crown, Shield, Clock } from "lucide-react";

export default function WhatWeOffer() {
  const offerings = [
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "स्थानीय और आउटस्टेशन यात्रा | Local & Outstation Travel",
      description: "Experience authentic Indian hospitality with premium comfort for both intimate city explorations and grand journeys across the vibrant landscapes of India's cultural heartland.",
      features: ["Professional Chauffeurs", "Premium Vehicles", "Local Expertise"],
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      link: "vehicles"
    },
    {
      icon: <Route className="h-12 w-12" />,
      title: "एयरपोर्ट और स्टेशन ट्रांसफर | Airport & Station Transfers",
      description: "Arrive in traditional Indian style with our punctual and luxurious transfer services. Flight tracking, warm welcome, and authentic hospitality from arrival to destination.",
      features: ["Flight Tracking", "Traditional Welcome", "24/7 Availability"],
      color: "from-red-500 to-pink-600",
      bgColor: "from-red-50 to-pink-50",
      link: "vehicles"
    },
    {
      icon: <Crown className="h-12 w-12" />,
      title: "प्रीमियम यात्रा विकल्प | Premium Journey Options",
      description: "Flexible authentic services tailored for one-way adventures or round-trip expeditions. Every journey crafted with traditional Indian hospitality and cultural immersion.",
      features: ["One-Way Journeys", "Round Trips", "Custom Routes"],
      color: "from-yellow-500 to-orange-600",
      bgColor: "from-yellow-50 to-orange-50",
      link: "vehicles"
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "सांस्कृतिक टूर पैकेज | Cultural Tour Packages",
      description: "Curated experiences for solo adventurers, families, or groups. Each package designed with authentic Indian hospitality and deep cultural immersion in India's rich heritage.",
      features: ["Custom Itineraries", "Cultural Experiences", "Heritage Tours"],
      color: "from-pink-500 to-red-600",
      bgColor: "from-pink-50 to-red-50",
      link: "packages"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Traditional Indian patterns background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #f97316 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #dc2626 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          {/* Traditional Indian decorative elements */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-4 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </div>
          
          {/* Hindi/English header badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            हमारी सेवाएं | Our Services
          </div>
          
          <div className="relative mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text mb-4 sm:mb-6 tracking-wide leading-tight" 
                style={{ fontFamily: "'Cinzel', serif" }}>
              What We Offer
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 rounded-lg blur opacity-20 animate-pulse"></div>
          </div>
          
          <div className="relative">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium mb-3 sm:mb-4 px-2" 
               style={{ fontFamily: "'Crimson Text', serif" }}>
              Authentic Indian Travel Services and Heritage Tour Packages
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-2" 
               style={{ fontFamily: "'Crimson Text', serif" }}>
              Experience the vibrant culture of India with our premium transportation and culturally immersive experiences
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {offerings.map((offering, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group border-2 border-orange-200 hover:border-orange-400 overflow-hidden relative">
              {/* Traditional Indian border pattern */}
              <div className="absolute inset-0 rounded-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500"></div>
              </div>
              
              <div className={`h-2 bg-gradient-to-r ${offering.color}`}></div>
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="relative">
                  {/* Traditional Indian decorative circle */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${offering.bgColor} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}>
                    <div className="absolute inset-2 border-2 border-orange-300 rounded-full opacity-50"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="mb-6 flex items-center">
                      <div className={`p-4 bg-gradient-to-r ${offering.color} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}>
                        {/* Traditional Indian icon decoration */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white"></div>
                        {offering.icon}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 font-medium">प्रीमियम सेवा | Premium Service</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                      {offering.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                      {offering.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 text-lg" style={{ fontFamily: "'Cinzel', serif" }}>
                        Key Features
                      </h4>
                      <div className="space-y-2">
                        {offering.features.map((feature, idx) => (
                          <div key={idx} className={`flex items-center text-sm text-gray-700 bg-gradient-to-r ${offering.bgColor} rounded-lg p-3`}>
                            <div className={`w-2 h-2 bg-gradient-to-r ${offering.color} rounded-full mr-3 flex-shrink-0`}></div>
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className={`w-full bg-gradient-to-r ${offering.color} hover:opacity-90 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                      style={{ fontFamily: "'Cinzel', serif" }}
                      onClick={() => scrollToSection(offering.link)}
                    >
                      Explore This Service <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl shadow-2xl p-12 text-white overflow-hidden">
            {/* Traditional Indian patterns overlay */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, #fbbf24 2px, transparent 2px),
                                 radial-gradient(circle at 80% 80%, #fbbf24 2px, transparent 2px)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              {/* Traditional Indian decorative elements */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                <Crown className="h-16 w-16 mx-6 text-yellow-300" />
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
              </div>
              
              <h3 className="text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-200 to-orange-100 bg-clip-text" 
                  style={{ fontFamily: "'Cinzel', serif" }}>
                भारतीय आतिथ्य अनुभव करें | Experience Indian Hospitality
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="relative inline-block mb-3">
                    <Shield className="h-12 w-12 mx-auto text-yellow-300" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-white"></div>
                  </div>
                  <h4 className="font-bold mb-2 text-lg" style={{ fontFamily: "'Cinzel', serif" }}>
                    सुरक्षा गारंटी | Safety Assured
                  </h4>
                  <p className="text-orange-100" style={{ fontFamily: "'Crimson Text', serif" }}>
                    Every vehicle and driver meets traditional Indian safety standards
                  </p>
                </div>
                <div className="text-center">
                  <div className="relative inline-block mb-3">
                    <Clock className="h-12 w-12 mx-auto text-yellow-300" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full border-2 border-white"></div>
                  </div>
                  <h4 className="font-bold mb-2 text-lg" style={{ fontFamily: "'Cinzel', serif" }}>
                    हमेशा उपलब्ध | Always Available
                  </h4>
                  <p className="text-orange-100" style={{ fontFamily: "'Crimson Text', serif" }}>
                    24/7 service across India with authentic hospitality
                  </p>
                </div>
                <div className="text-center">
                  <div className="relative inline-block mb-3">
                    <Star className="h-12 w-12 mx-auto text-yellow-300" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
                  </div>
                  <h4 className="font-bold mb-2 text-lg" style={{ fontFamily: "'Cinzel', serif" }}>
                    उत्कृष्टता की गारंटी | Excellence Guaranteed
                  </h4>
                  <p className="text-orange-100" style={{ fontFamily: "'Crimson Text', serif" }}>
                    Premium service with traditional Indian warmth
                  </p>
                </div>
              </div>
              
              <Button 
                asChild
                size="lg"
                className="bg-white text-orange-700 hover:bg-orange-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20know%20about%20your%20authentic%20Indian%20services">
                  अपना अनुभव बुक करें | Book Your Experience
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}