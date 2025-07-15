import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Star, Phone, MessageCircle, Crown, Shield, Award, Car } from "lucide-react";

export default function ServiceDetails() {
  const detailedServices = [
    {
      title: "Local Car Rentals in Jaipur",
      subtitle: "Best Local Car Rental Service Provider",
      description: "Looking for reliable Local Car Rentals services in town? Look no further than Sethi Tour and Travels. We provide the most comprehensive local transportation solutions in Jaipur with a fleet of well-maintained vehicles and professional drivers who know every corner of the Pink City.",
      features: [
        "Hourly and daily rental options available",
        "All vehicles are sanitized and well-maintained",
        "Professional drivers with city knowledge",
        "24/7 customer support and assistance",
        "Transparent pricing with no hidden charges",
        "GPS tracking for enhanced safety"
      ],
      vehicles: ["Maruti Swift Dzire", "Toyota Etios", "Honda City", "Hyundai Xcent"],
      pricing: "Starting from ₹12/km",
      image: "/attached_assets/steptodown.com988844_1752608340200.jpg",
      rating: "4.8"
    },
    {
      title: "Outstation Taxi Services",
      subtitle: "Comfortable Long Distance Travel",
      description: "Need to travel out of town? Book a comfortable ride with Outstation Taxi Services with Sethi Tour and Travels. We cover all major destinations across Rajasthan and neighboring states including Delhi, UP, Haryana, Gujarat, and Madhya Pradesh with experienced drivers and reliable vehicles.",
      features: [
        "One-way and round-trip options available",
        "Experienced drivers familiar with highways",
        "Rest stops and meal breaks included",
        "24/7 roadside assistance",
        "Fuel charges included in package",
        "Multiple payment options accepted"
      ],
      vehicles: ["Toyota Innova", "Mahindra Scorpio", "Maruti Ertiga", "Force Urbania"],
      pricing: "Starting from ₹10/km",
      image: "/attached_assets/steptodown.com688577_1752608422757.jpg",
      rating: "4.9"
    },
    {
      title: "Airport Transfer Services",
      subtitle: "Timely and Reliable Airport Pickup/Drop",
      description: "Airport taxis are a convenient transportation option for travelers arriving at or departing from Jaipur International Airport. Our professional drivers track your flight timings and ensure you never miss your flight or wait unnecessarily after landing.",
      features: [
        "Flight tracking for timely pickups",
        "Meet and greet service available",
        "Luggage assistance provided",
        "Clean and comfortable vehicles",
        "Fixed rates with no surge pricing",
        "Available 24/7 throughout the year"
      ],
      vehicles: ["Maruti Swift Dzire", "Toyota Innova", "Honda City", "Mahindra Scorpio"],
      pricing: "Fixed rates starting ₹800",
      image: "/attached_assets/steptodown.com446075_1752608480866.jpg",
      rating: "4.9"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Traditional Indian patterns background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #f97316 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #dc2626 2px, transparent 2px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          {/* Traditional Indian decorative elements */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-4 flex items-center justify-center">
              <Crown className="h-4 w-4 text-white" />
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
            Detailed Service Information
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
            Discover our comprehensive travel services with authentic Indian hospitality, featuring premium vehicles, 
            experienced drivers, and royal treatment for your journey through India's magnificent destinations.
          </p>
          
          {/* Traditional Indian border decoration */}
          <div className="flex justify-center mt-8">
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-20">
          {detailedServices.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1">
                <div className="max-w-2xl bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 relative overflow-hidden">
                  {/* Traditional Indian corner decorations */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-br-full opacity-10"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-red-500 to-orange-500 rounded-tl-full opacity-10"></div>
                  
                  {/* Traditional Indian pattern border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-3 shadow-lg">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                        <span className="text-lg font-semibold text-orange-600">{service.rating} Premium Rating</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                      {service.title}
                    </h3>
                    <p className="text-xl text-orange-600 mb-4 font-semibold" style={{ fontFamily: "'Crimson Text', serif" }}>
                      {service.subtitle}
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6" style={{ fontFamily: "'Crimson Text', serif" }}>
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center" style={{ fontFamily: "'Cinzel', serif" }}>
                        <Award className="h-5 w-5 text-orange-600 mr-2" />
                        Premium Service Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-xl border border-orange-200">
                            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-xl border border-orange-200">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center" style={{ fontFamily: "'Cinzel', serif" }}>
                          <Car className="h-5 w-5 text-orange-600 mr-2" />
                          Available Vehicles
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.vehicles.map((vehicle, idx) => (
                            <span key={idx} className="bg-white text-orange-700 px-3 py-2 rounded-full text-sm font-medium border border-orange-200 shadow-sm">
                              {vehicle}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl border border-red-200">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center" style={{ fontFamily: "'Cinzel', serif" }}>
                          <Shield className="h-5 w-5 text-red-600 mr-2" />
                          Transparent Pricing
                        </h4>
                        <p className="text-red-600 text-xl font-bold" style={{ fontFamily: "'Cinzel', serif" }}>
                          {service.pricing}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        <a href={`https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20need%20information%20about%20${encodeURIComponent(service.title)}`}>
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Book on WhatsApp
                        </a>
                      </Button>
                      <Button 
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        <a href="tel:9772021780">
                          <Phone className="mr-2 h-5 w-5" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <Card className="overflow-hidden shadow-2xl rounded-3xl border-4 border-orange-200 hover:border-orange-400 transition-all duration-300 relative">
                  {/* Traditional Indian image frame decorations */}
                  <div className="absolute top-0 left-0 w-full h-full border-4 border-gradient-to-r from-orange-500 to-red-500 rounded-3xl opacity-20 z-10"></div>
                  <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center z-20">
                    <Crown className="h-4 w-4 text-white" />
                  </div>
                  
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Traditional Indian bottom decoration */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}