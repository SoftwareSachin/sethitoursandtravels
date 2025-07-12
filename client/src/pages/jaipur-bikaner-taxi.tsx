import { Link } from "wouter";
import { Car, Phone, Clock, Users, Star, ArrowLeft, MapPin, Route, Shield, Luggage } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/footer";
import heroImage from "@assets/image_1752344666560.png";
import nagaurFortImage from "@assets/image_1752344804650.png";
import karniMataImage from "@assets/image_1752344824068.png";
import dzireImage from "@assets/image_1752328537540.png";
import ertigaImage from "@assets/image_1752328561242.png";
import innovaImage from "@assets/image_1752328589553.png";

const fleetVehicles = [
  {
    name: "Sedan",
    model: "Maruti Suzuki Dzire",
    image: dzireImage,
    price: "₹4,500",
    capacity: "4 Passengers",
    luggage: "2 Large Bags",
    features: ["AC", "Music System", "GPS"],
    ideal: "Comfortable travel for couples and small families",
    rating: 4.8
  },
  {
    name: "SUV",
    model: "Maruti Suzuki Ertiga",
    image: ertigaImage,
    price: "₹6,500",
    capacity: "6 Passengers",
    luggage: "3 Large Bags",
    features: ["AC", "Captain Seats", "Entertainment"],
    ideal: "Perfect for family trips and group travel",
    rating: 4.7
  },
  {
    name: "Innova Crysta",
    model: "Toyota Innova Crysta",
    image: innovaImage,
    price: "₹9,000",
    capacity: "7 Passengers",
    luggage: "4 Large Bags",
    features: ["Luxury AC", "Premium Interiors", "Extra Comfort"],
    ideal: "Premium comfort for luxury travel experience",
    rating: 4.9
  }
];

const attractions = [
  {
    name: "Nagaur Fort",
    description: "A great stop for exploring history and heritage",
    icon: <MapPin className="w-5 h-5" />,
    image: nagaurFortImage
  },
  {
    name: "Deshnok Karni Mata Temple",
    description: "Famous for its unique rat temple experience",
    icon: <MapPin className="w-5 h-5" />,
    image: karniMataImage
  }
];

const services = [
  {
    title: "One-Way Taxi",
    description: "Convenient, door-to-door service for one-way trips",
    icon: <Route className="w-6 h-6" />
  },
  {
    title: "Round Trip",
    description: "Plan a round trip and explore Bikaner's top sights like Junagarh Fort, Lalgarh Palace, and Camel Breeding Farm",
    icon: <Car className="w-6 h-6" />
  },
  {
    title: "Customizable Tours",
    description: "Create personalized tours that suit your travel itinerary",
    icon: <Shield className="w-6 h-6" />
  }
];

export default function JaipurBikanerTaxi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/taxi-services" className="hover:text-orange-600">
              Taxi Services
            </Link>
            <span>/</span>
            <Link href="/taxi-services/rajasthan" className="hover:text-orange-600">
              Rajasthan
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Jaipur to Bikaner Taxi Service</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Jaipur to Bikaner Route - Historical Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-yellow-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Jaipur to Bikaner Taxi Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md">
              Experience a smooth and reliable journey with Sethi Tour & Travels
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Route className="w-5 h-5" />
                <span>335 KM Distance</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span>6 Hours Journey</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Description */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Premium Jaipur to Bikaner Taxi Service
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience a smooth and reliable Jaipur to Bikaner taxi service with Sethi Tour and Travels. 
            Whether you're traveling for business, sightseeing, or a family trip, we ensure a hassle-free 
            journey in comfortable vehicles. Our professional drivers are well-versed with the route, 
            ensuring timely and safe travel.
          </p>
        </div>

        {/* Fleet Showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Choose Your Vehicle for Jaipur to Bikaner (335 KM)
            </h3>
            <p className="text-lg text-gray-600">
              Select from our premium fleet of well-maintained vehicles for your journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {fleetVehicles.map((vehicle, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <div className="relative">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.model}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-orange-500 text-white">
                    {vehicle.name}
                  </Badge>
                  <div className="absolute bottom-3 left-3 bg-white/90 rounded-lg px-2 py-1 flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{vehicle.rating}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{vehicle.model}</h4>
                      <p className="text-sm text-gray-600 mt-1">{vehicle.ideal}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600">{vehicle.price}</div>
                      <div className="text-sm text-gray-500">Total Fare</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Luggage className="h-4 w-4" />
                      <span className="text-sm">{vehicle.luggage}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {vehicle.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                      onClick={() => window.open(`https://wa.me/917727021780?text=मुझे जयपुर से बीकानेर के लिए ${vehicle.model} बुक करना है। कृपया विस्तृत जानकारी दें।`, '_blank')}
                    >
                      Book Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-orange-500 text-orange-500 hover:bg-orange-50"
                      onClick={() => window.open(`tel:+919772021780`, '_blank')}
                    >
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Attractions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Popular Attractions Along the Jaipur to Bikaner Route
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg text-white">
                      {attraction.icon}
                    </div>
                    <CardTitle className="text-lg text-gray-800">{attraction.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Our Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg text-white">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Book Your Jaipur to Bikaner Taxi?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Contact us now for instant booking and competitive rates
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919772021780" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors text-white">
                <Phone className="w-5 h-5" />
                <span>Call: +91 97720 21780</span>
              </a>
              <a href="https://wa.me/917727021780" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg transition-colors text-white">
                <Phone className="w-5 h-5" />
                <span>WhatsApp: +91 77270 21780</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}