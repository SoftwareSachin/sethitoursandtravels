import { Link } from "wouter";
import { Car, Phone, Clock, Users, Star, ArrowLeft, MapPin, Route, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@assets/image_1752344666560.png";
import nagaurFortImage from "@assets/image_1752344804650.png";
import karniMataImage from "@assets/image_1752344824068.png";

const taxiRates = [
  {
    route: "Jaipur to Bikaner",
    distance: "335 km",
    sedan: "₹4,500",
    suv: "₹6,500",
    innova: "₹9,000"
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

        {/* Taxi Rates Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Taxi Rates from Jaipur to Bikaner
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Route</th>
                  <th className="px-6 py-4 text-left font-semibold">Distance (km)</th>
                  <th className="px-6 py-4 text-left font-semibold">Sedan (Approx. Rate)</th>
                  <th className="px-6 py-4 text-left font-semibold">SUV (Approx. Rate)</th>
                  <th className="px-6 py-4 text-left font-semibold">Innova Crysta (Approx. Rate)</th>
                </tr>
              </thead>
              <tbody>
                {taxiRates.map((rate, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{rate.route}</td>
                    <td className="px-6 py-4 text-gray-700">{rate.distance}</td>
                    <td className="px-6 py-4 text-orange-600 font-semibold">{rate.sedan}</td>
                    <td className="px-6 py-4 text-orange-600 font-semibold">{rate.suv}</td>
                    <td className="px-6 py-4 text-orange-600 font-semibold">{rate.innova}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {/* Footer Contact */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Professional Jaipur to Bikaner Taxi Service</h2>
          <p className="text-lg mb-8 opacity-90">
            Trusted by thousands of travelers for reliable and comfortable journeys
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Contact Person</h4>
              <p className="opacity-90">Kuldeep Choudhary</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="opacity-90">sethitourstravels8888@gmail.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="opacity-90">S-147, 4S New Loha Mandi Road, Machada, Jaipur-302013</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}