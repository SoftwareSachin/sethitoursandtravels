import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Route, ArrowRight, Briefcase, Star, Crown, Shield, Clock } from "lucide-react";

export default function WhatWeOffer() {
  const offerings = [
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "Royal Local & Outstation Travel",
      description: "Experience premium comfort for both intimate city explorations and grand journeys across the majestic landscapes of Rajasthan and neighboring kingdoms.",
      features: ["Professional Chauffeurs", "Premium Vehicles", "Local Expertise"],
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      link: "vehicles"
    },
    {
      icon: <Route className="h-12 w-12" />,
      title: "Royal Airport & Station Transfers",
      description: "Arrive in style with our punctual and luxurious transfer services. Flight tracking, meet & greet, and royal treatment from arrival to destination.",
      features: ["Flight Tracking", "Meet & Greet", "24/7 Availability"],
      color: "from-blue-500 to-purple-600",
      bgColor: "from-blue-50 to-purple-50",
      link: "vehicles"
    },
    {
      icon: <Crown className="h-12 w-12" />,
      title: "Premium Journey Options",
      description: "Flexible royal services tailored for one-way adventures or round-trip expeditions. Every journey crafted to perfection for discerning travelers.",
      features: ["One-Way Journeys", "Round Trips", "Custom Routes"],
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      link: "vehicles"
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Bespoke Royal Tour Packages",
      description: "Curated experiences for solo adventurers, royal families, or grand groups. Each package designed with authentic Rajasthani hospitality and cultural immersion.",
      features: ["Custom Itineraries", "Cultural Experiences", "Heritage Tours"],
      color: "from-green-500 to-teal-600",
      bgColor: "from-green-50 to-teal-50",
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
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text mb-6 tracking-wide" 
                style={{ fontFamily: "'Cinzel', serif" }}>
              What We Offer
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 rounded-lg blur opacity-20 animate-pulse"></div>
          </div>
          <div className="relative">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium mb-4" 
               style={{ fontFamily: "'Crimson Text', serif" }}>
              Royal Taxi Services and Bespoke Tour Packages for Every Majestic Destination
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" 
               style={{ fontFamily: "'Crimson Text', serif" }}>
              Experience the grandeur of Rajasthan with our premium transportation and carefully curated cultural experiences
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group border-2 border-purple-200 hover:border-purple-400 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${offering.color}`}></div>
              <CardContent className="p-8">
                <div className="relative">
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${offering.bgColor} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className="mb-6 flex items-center">
                      <div className={`p-4 bg-gradient-to-r ${offering.color} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {offering.icon}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 font-medium">Premium Service</span>
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
          <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 rounded-2xl shadow-2xl p-12 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <Crown className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
              <h3 className="text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-yellow-200 to-purple-100 bg-clip-text" 
                  style={{ fontFamily: "'Cinzel', serif" }}>
                Experience Royal Hospitality
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Shield className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
                  <h4 className="font-bold mb-2 text-lg" style={{ fontFamily: "'Cinzel', serif" }}>
                    Safety Assured
                  </h4>
                  <p className="text-purple-100" style={{ fontFamily: "'Crimson Text', serif" }}>
                    Every vehicle and driver meets royal safety standards
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
                  <h4 className="font-bold mb-2 text-lg" style={{ fontFamily: "'Cinzel', serif" }}>
                    Always Available
                  </h4>
                  <p className="text-purple-100" style={{ fontFamily: "'Crimson Text', serif" }}>
                    24/7 service across Rajasthan and beyond
                  </p>
                </div>
                <div className="text-center">
                  <Star className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
                  <h4 className="font-bold mb-2 text-lg" style={{ fontFamily: "'Cinzel', serif" }}>
                    Excellence Guaranteed
                  </h4>
                  <p className="text-purple-100" style={{ fontFamily: "'Crimson Text', serif" }}>
                    Premium service worthy of royalty
                  </p>
                </div>
              </div>
              <Button 
                asChild
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20know%20about%20your%20royal%20services">
                  Book Your Royal Experience
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}