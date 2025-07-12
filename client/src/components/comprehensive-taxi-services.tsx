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
      startingPrice: "₹12/km"
    },
    {
      icon: <Route className="h-8 w-8 text-primary" />,
      title: "Outstation Taxi",
      description: "Need to travel out of town? Book a comfortable ride with Outstation Taxi Services with Sethi Tour and Travels. We cover all major destinations across Rajasthan and neighboring states with experienced drivers and well-planned routes.",
      features: ["Long distance travel", "Multi-city tours", "Highway expertise", "Rest stop planning"],
      vehicles: ["Toyota Innova", "Mahindra Scorpio", "Force Urbania"],
      startingPrice: "₹10/km"
    },
    {
      icon: <ArrowRight className="h-8 w-8 text-primary" />,
      title: "One-Way Cabs",
      description: "With a wide selection of vehicles, Sethi Tour and Travels is the perfect choice for One-Way Taxi Services. Perfect for airport transfers, railway station pickups, and intercity travel without the hassle of round-trip charges.",
      features: ["No return charges", "Fixed pricing", "Airport specialists", "Station pickups"],
      vehicles: ["Swift Dzire", "Toyota Innova", "Maruti Ertiga"],
      startingPrice: "₹8/km"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Corporate Car Rental",
      description: "By booking a car with Sethi Tour and Travels, your clients can come comfortably for meetings. We provide professional chauffeur services for business executives, corporate events, and client transportation with premium vehicles.",
      features: ["Professional chauffeurs", "Business etiquette", "Punctuality guaranteed", "Corporate billing"],
      vehicles: ["Honda City", "Toyota Camry", "BMW 3 Series"],
      startingPrice: "₹15/km"
    },
    {
      icon: <Plane className="h-8 w-8 text-primary" />,
      title: "Airport Taxi",
      description: "Airport taxis are a convenient transportation option for travelers arriving at or departing from an airport. Our drivers track flight schedules and provide timely pickups and drops with luggage assistance and meet-and-greet services.",
      features: ["Flight tracking", "Meet & greet", "Luggage assistance", "24/7 availability"],
      vehicles: ["Swift Dzire", "Toyota Innova", "Honda City"],
      startingPrice: "Fixed ₹800"
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-primary" />,
      title: "Round Trip Cabs",
      description: "The premium roundtrip service from your doorstep & back will pamper you with absolute comfort. Ideal for day trips, business meetings, shopping excursions, and sightseeing tours with guaranteed return transportation.",
      features: ["Round trip convenience", "Waiting time included", "Flexible timings", "Day trip packages"],
      vehicles: ["Toyota Innova", "Maruti Ertiga", "Mahindra Scorpio"],
      startingPrice: "₹2000/day"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Tempo Traveller",
      description: "The billing system of Sethi Tour and Travels is more transparent than that of taxis or car apartments in Jaipur. Our tempo travellers are perfect for group travel, family outings, and corporate transportation with comfortable seating.",
      features: ["Group transportation", "Push-back seats", "AC comfort", "Luggage space"],
      vehicles: ["12-Seater Tempo", "15-Seater Tempo", "20-Seater Tempo"],
      startingPrice: "₹18/km"
    },
    {
      icon: <Bus className="h-8 w-8 text-primary" />,
      title: "Bus Rental",
      description: "Whether you need a bus rental for a group or family trip, Sethi Tour and Travels has your back. Our fleet includes luxury coaches and mini buses for large groups, weddings, corporate events, and educational tours.",
      features: ["Large group capacity", "Event transportation", "Wedding parties", "Educational tours"],
      vehicles: ["35-Seater Bus", "45-Seater Coach", "Luxury Bus"],
      startingPrice: "₹25/km"
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Sightseeing Taxi",
      description: "We ensure you take advantage of all the sightseeing and let you cherish your life in the future. Our specialized sightseeing packages cover all major attractions with knowledgeable guides and flexible itineraries.",
      features: ["Local expertise", "Flexible itineraries", "Photography stops", "Cultural insights"],
      vehicles: ["Swift Dzire", "Toyota Innova", "Mahindra Scorpio"],
      startingPrice: "₹1500/day"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Affordable Taxi Services In Jaipur
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a passionate cab service provider, we can provide you with the best car rental services in Jaipur and across Rajasthan. 
            Choose from our comprehensive range of taxi services designed for every travel need and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {taxiServices.map((service, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border-t-4 border-primary">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-600">Highly Rated</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Service Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Available Vehicles:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.vehicles.map((vehicle, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {vehicle}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-sm text-gray-600">Starting from</span>
                    <div className="text-lg font-bold text-primary">{service.startingPrice}</div>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Shield className="h-3 w-3 mr-1" />
                    Insured
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-blue-700 text-white group-hover:bg-secondary transition-colors"
                >
                  <a href={`https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20need%20${encodeURIComponent(service.title)}%20service`}>
                    Book This Service
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Why Choose Our Taxi Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
                <h4 className="font-semibold mb-2">24/7 Availability</h4>
                <p className="text-sm text-gray-200">Round-the-clock service for all your travel needs</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
                <h4 className="font-semibold mb-2">Safety First</h4>
                <p className="text-sm text-gray-200">All vehicles regularly maintained and insured</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
                <h4 className="font-semibold mb-2">Quality Service</h4>
                <p className="text-sm text-gray-200">Professional drivers and premium vehicles</p>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-3 text-yellow-300" />
                <h4 className="font-semibold mb-2">Local Expertise</h4>
                <p className="text-sm text-gray-200">Drivers with extensive local knowledge</p>
              </div>
            </div>
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20know%20about%20all%20taxi%20services">
                Get Complete Service Information
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}