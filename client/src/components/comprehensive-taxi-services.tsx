import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, Route, ArrowRight, Briefcase, Plane, RotateCcw, 
  Users, Bus, Eye, Clock, Shield, Star 
} from "lucide-react";

export default function ComprehensiveTaxiServices() {
  const taxiServices = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Local Car Rentals",
      description: "Looking for reliable Local Car Rentals services in town? Look no further than Sethi Tour and Travels. We provide comfortable and well-maintained vehicles for your local transportation needs with professional drivers who know every corner of the city.",
      features: ["Hourly rentals available", "City tour packages", "Shopping assistance", "Restaurant recommendations"],
      vehicles: ["Swift Dzire", "Honda City", "Toyota Etios"],
      startingPrice: "₹12/km",
      image: "/attached_assets/steptodown.com545478_1752607526906.jpg"
    },
    {
      icon: <Route className="h-8 w-8 text-primary" />,
      title: "Outstation Taxi",
      description: "Need to travel out of town? Book a comfortable ride with Outstation Taxi Services with Sethi Tour and Travels. We cover all major destinations across Rajasthan and neighboring states with experienced drivers and well-planned routes.",
      features: ["Long distance travel", "Multi-city tours", "Highway expertise", "Rest stop planning"],
      vehicles: ["Toyota Innova", "Mahindra Scorpio", "Force Urbania"],
      startingPrice: "₹10/km",
      image: "/attached_assets/steptodown.com171780_1752607701522.jpg"
    },
    {
      icon: <ArrowRight className="h-8 w-8 text-primary" />,
      title: "One-Way Cabs",
      description: "With a wide selection of vehicles, Sethi Tour and Travels is the perfect choice for One-Way Taxi Services. Perfect for airport transfers, railway station pickups, and intercity travel without the hassle of round-trip charges.",
      features: ["No return charges", "Fixed pricing", "Airport specialists", "Station pickups"],
      vehicles: ["Swift Dzire", "Toyota Innova", "Maruti Ertiga"],
      startingPrice: "₹8/km",
      image: "/attached_assets/steptodown.com541106_1752607770653.jpg"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Corporate Car Rental",
      description: "By booking a car with Sethi Tour and Travels, your clients can come comfortably for meetings. We provide professional chauffeur services for business executives, corporate events, and client transportation with premium vehicles.",
      features: ["Professional chauffeurs", "Business etiquette", "Punctuality guaranteed", "Corporate billing"],
      vehicles: ["Honda City", "Toyota Camry", "BMW 3 Series"],
      startingPrice: "₹15/km",
      image: "/attached_assets/steptodown.com394506_1752607818803.jpg"
    },
    {
      icon: <Plane className="h-8 w-8 text-primary" />,
      title: "Airport Taxi",
      description: "Airport taxis are a convenient transportation option for travelers arriving at or departing from an airport. Our drivers track flight schedules and provide timely pickups and drops with luggage assistance and meet-and-greet services.",
      features: ["Flight tracking", "Meet & greet", "Luggage assistance", "24/7 availability"],
      vehicles: ["Swift Dzire", "Toyota Innova", "Honda City"],
      startingPrice: "Fixed ₹800",
      image: "/attached_assets/steptodown.com977442_1752607860799.jpg"
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-primary" />,
      title: "Round Trip Cabs",
      description: "The premium roundtrip service from your doorstep & back will pamper you with absolute comfort. Ideal for day trips, business meetings, shopping excursions, and sightseeing tours with guaranteed return transportation.",
      features: ["Round trip convenience", "Waiting time included", "Flexible timings", "Day trip packages"],
      vehicles: ["Toyota Innova", "Maruti Ertiga", "Mahindra Scorpio"],
      startingPrice: "₹2000/day",
      image: "/attached_assets/steptodown.com645137_1752607921230.jpg"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Tempo Traveller",
      description: "The billing system of Sethi Tour and Travels is more transparent than that of taxis or car apartments in Jaipur. Our tempo travellers are perfect for group travel, family outings, and corporate transportation with comfortable seating.",
      features: ["Group transportation", "Push-back seats", "AC comfort", "Luggage space"],
      vehicles: ["12-Seater Tempo", "15-Seater Tempo", "20-Seater Tempo"],
      startingPrice: "₹18/km",
      image: "/attached_assets/steptodown.com690504_1752607992383.jpg"
    },
    {
      icon: <Bus className="h-8 w-8 text-primary" />,
      title: "Bus Rental",
      description: "Whether you need a bus rental for a group or family trip, Sethi Tour and Travels has your back. Our fleet includes luxury coaches and mini buses for large groups, weddings, corporate events, and educational tours.",
      features: ["Large group capacity", "Event transportation", "Wedding parties", "Educational tours"],
      vehicles: ["35-Seater Bus", "45-Seater Coach", "Luxury Bus"],
      startingPrice: "₹25/km",
      image: "/attached_assets/steptodown.com102051_1752608059594.jpg"
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Sightseeing Taxi",
      description: "We ensure you take advantage of all the sightseeing and let you cherish your life in the future. Our specialized sightseeing packages cover all major attractions with knowledgeable guides and flexible itineraries.",
      features: ["Local expertise", "Flexible itineraries", "Photography stops", "Cultural insights"],
      vehicles: ["Swift Dzire", "Toyota Innova", "Mahindra Scorpio"],
      startingPrice: "₹1500/day",
      image: "/attached_assets/steptodown.com323948_1752608119429.jpg"
    }
  ];

  return (
    <section className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <div className="relative mb-6 sm:mb-8">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-pink-800 bg-clip-text mb-3 xs:mb-4 sm:mb-6 tracking-wide leading-tight px-2 xs:px-0" 
                style={{ fontFamily: "'Cinzel', serif" }}>
              Get Affordable Taxi Services In Jaipur
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 rounded-lg blur opacity-20 animate-pulse"></div>
          </div>
          <div className="relative">
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium px-3 xs:px-2" 
               style={{ fontFamily: "'Crimson Text', serif" }}>
              As a passionate cab service provider, we can provide you with the best car rental services in Jaipur and across Rajasthan. 
              Choose from our comprehensive range of taxi services designed for every travel need and budget.
            </p>
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {taxiServices.map((service, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group border-2 border-pink-200 hover:border-pink-400 overflow-hidden">
              <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                    <div className="text-pink-600">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                    {service.title}
                  </h3>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-white/90 ml-2">Premium Service</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="relative">
                  <div className="absolute -top-3 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 rounded-full"></div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg" style={{ fontFamily: "'Cinzel', serif" }}>
                    Premium Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700 bg-pink-50 rounded-lg p-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg" style={{ fontFamily: "'Cinzel', serif" }}>
                    Fleet Options
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.vehicles.map((vehicle, idx) => (
                      <span key={idx} className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 px-3 py-2 rounded-full text-sm font-medium border border-pink-200">
                        {vehicle}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200">
                  <div>
                    <span className="text-sm text-gray-600" style={{ fontFamily: "'Crimson Text', serif" }}>Starting from</span>
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text" 
                         style={{ fontFamily: "'Cinzel', serif" }}>
                      {service.startingPrice}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-pink-700 bg-white/70 px-3 py-2 rounded-full">
                    <Shield className="h-4 w-4 mr-2" />
                    Fully Insured
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 hover:from-pink-700 hover:via-purple-700 hover:to-pink-800 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    <a href={`https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20need%20${encodeURIComponent(service.title)}%20service`}>
                      Book This Service
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-2 border-pink-300 text-pink-700 hover:bg-pink-50 font-semibold py-3 rounded-xl transition-all duration-300"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  >
                    <a href="tel:+919772021780">
                      Call Now: +91 97720 21780
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 rounded-2xl shadow-2xl p-12 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-yellow-200 to-pink-100 bg-clip-text" 
                  style={{ fontFamily: "'Cinzel', serif" }}>
                Why Choose Sethi Tour & Travels?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                <div className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <Clock className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                    <h4 className="font-bold mb-3 text-xl" style={{ fontFamily: "'Cinzel', serif" }}>
                      24/7 Availability
                    </h4>
                    <p className="text-pink-100 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                      Round-the-clock service for all your travel needs across Rajasthan
                    </p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <Shield className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                    <h4 className="font-bold mb-3 text-xl" style={{ fontFamily: "'Cinzel', serif" }}>
                      Safety First
                    </h4>
                    <p className="text-pink-100 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                      All vehicles regularly maintained, fully insured and GPS tracked
                    </p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <Star className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                    <h4 className="font-bold mb-3 text-xl" style={{ fontFamily: "'Cinzel', serif" }}>
                      Quality Service
                    </h4>
                    <p className="text-pink-100 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                      Professional drivers with extensive local knowledge and experience
                    </p>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/30 transition-all duration-300">
                    <MapPin className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                    <h4 className="font-bold mb-3 text-xl" style={{ fontFamily: "'Cinzel', serif" }}>
                      Local Expertise
                    </h4>
                    <p className="text-pink-100 leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                      Born and raised in Rajasthan with deep cultural understanding
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-pink-700 hover:bg-pink-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20know%20about%20all%20taxi%20services">
                    Get Complete Service Information
                  </a>
                </Button>
                <p className="text-pink-100 text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
                  Join thousands of satisfied customers who trust us for their Rajasthan journeys
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}