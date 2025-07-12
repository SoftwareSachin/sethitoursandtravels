import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Star, Phone, MessageCircle } from "lucide-react";

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
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
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
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      rating: "4.9"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Service Information</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get comprehensive information about our taxi services, including vehicle options, 
            pricing details, and service features to help you make the best choice for your travel needs.
          </p>
        </div>

        <div className="space-y-16">
          {detailedServices.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              <div className="flex-1">
                <div className="max-w-2xl">
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-lg font-semibold text-primary">{service.rating} Rating</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-xl text-secondary mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Service Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Available Vehicles:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.vehicles.map((vehicle, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {vehicle}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pricing:</h4>
                      <p className="text-primary text-lg font-semibold">{service.pricing}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-blue-700 text-white"
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
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <a href="tel:9772021780">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <Card className="overflow-hidden shadow-xl">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}