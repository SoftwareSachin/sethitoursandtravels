import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Phone, 
  MapPin, 
  Clock, 
  Users, 
  Shield, 
  Star,
  CheckCircle,
  Calendar,
  CreditCard,
  Navigation,
  Award
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCommunication } from "../components/communication-utils";

export default function JaipurTaxi() {
  const { whatsapp, phone } = useCommunication();
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");

  const oneWayRates = [
    { route: "Jaipur to Delhi", sedan: "3,500", suv: "4,500", innova: "6,000" },
    { route: "Jaipur to Ahmedabad", sedan: "8,000", suv: "10,000", innova: "13,000" },
    { route: "Jaipur to Ajmer", sedan: "2,200", suv: "2,800", innova: "4,000" },
    { route: "Jaipur to Bikaner", sedan: "4,500", suv: "7,000", innova: "9,000" },
    { route: "Jaipur to Jodhpur", sedan: "4,500", suv: "5,500", innova: "7,500" },
    { route: "Jaipur to Udaipur", sedan: "5,000", suv: "6,500", innova: "9,000" },
    { route: "Jaipur to Haridwar", sedan: "7,000", suv: "10,000", innova: "13,000" },
    { route: "Jaipur to Rishikesh", sedan: "7,000", suv: "10,000", innova: "13,000" },
    { route: "Jaipur to Pushkar", sedan: "2,500", suv: "3,500", innova: "4,500" },
    { route: "Jaipur to Agra", sedan: "3,500", suv: "4,500", innova: "6,500" }
  ];

  const additionalRates = [
    { route: "Jaipur to Kota", sedan: "3,500", suv: "4,500", innova: "7,000" },
    { route: "Jaipur to Bhilwara", sedan: "3,500", suv: "4,500", innova: "7,000" },
    { route: "Jaipur to Lucknow", sedan: "8,000", suv: "12,000", innova: "17,500" },
    { route: "Jaipur to Chandigarh", sedan: "7,000", suv: "9,500", innova: "13,000" },
    { route: "Jaipur to Dehradun", sedan: "7,000", suv: "10,000", innova: "14,000" },
    { route: "Jaipur to Khatu Shyam Ji", sedan: "2,000", suv: "3,000", innova: "4,000" },
    { route: "Jaipur to Churu", sedan: "3,000", suv: "4,500", innova: "6,500" },
    { route: "Jaipur to Gurugram", sedan: "3,500", suv: "4,500", innova: "6,000" },
    { route: "Jaipur to Noida", sedan: "4,500", suv: "5,500", innova: "7,500" },
    { route: "Jaipur to Ghaziabad", sedan: "4,500", suv: "5,500", innova: "7,500" }
  ];

  const services = [
    {
      title: "Local Jaipur Taxi Hire",
      description: "Explore Jaipur's famous attractions like City Palace, Amer Fort, and Hawa Mahal with our full-day taxi hire.",
      icon: MapPin
    },
    {
      title: "Airport Transfers",
      description: "On-time pick-up and drop services to Jaipur Airport.",
      icon: Navigation
    },
    {
      title: "One-Way Taxi Service",
      description: "Convenient one-way rides from Jaipur to cities across Rajasthan and neighboring states.",
      icon: Car
    },
    {
      title: "Outstation Taxi Service",
      description: "Plan your trip to nearby cities with our comfortable outstation taxi service.",
      icon: MapPin
    },
    {
      title: "Corporate and Event Travel",
      description: "Reliable transportation for business clients and special events.",
      icon: Users
    }
  ];

  const discounts = [
    {
      title: "Early Bird Discount",
      description: "Book at least 7 days in advance and receive a 10% discount.",
      icon: Calendar
    },
    {
      title: "Group Booking",
      description: "Book for 4 or more passengers and receive a 15% discount on total fare.",
      icon: Users
    }
  ];

  const specialPackages = [
    {
      title: "Weekend Getaway",
      description: "Special rates for round trips on weekends for popular destinations."
    },
    {
      title: "Festival Specials",
      description: "Discounts during festivals for selected routes."
    }
  ];

  const features = [
    {
      title: "Experienced Drivers",
      description: "Highly trained drivers familiar with routes in and around Jaipur",
      icon: Award
    },
    {
      title: "Clean & Well-Maintained Vehicles",
      description: "Regular vehicle checks ensuring top condition and comfort",
      icon: Shield
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock service for all your travel needs",
      icon: Clock
    },
    {
      title: "Affordable Rates",
      description: "Competitive pricing with transparent rates and no hidden charges",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Jaipur Taxi Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your Trusted Travel Companion in the Pink City - Reliable, Comfortable, and Affordable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                onClick={() => whatsapp("खम्मा गणी सा! मुझे जयपुर टैक्सी सर्विस चाहिए।")}
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Book Now on WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
                onClick={() => phone()}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: +91 7737017755
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-secondary text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>📞 +91 7737017755, 7014913953</span>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp className="h-5 w-5" />
              <span>💬 WhatsApp: 7737017755</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📧 mukeshtourandtravelsjaipur@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Mukesh Tour and Travels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best taxi service in Jaipur with our professional approach and customer-first mindset
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive taxi solutions for all your travel needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <service.icon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* One-Way Taxi Rates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">One-Way Taxi Rates</h2>
            <p className="text-xl text-gray-600">Transparent pricing for popular destinations from Jaipur</p>
          </div>
          
          {/* Vehicle Type Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-md">
              <button
                className={`px-6 py-2 rounded-md transition-colors ${
                  selectedVehicle === "sedan" ? "bg-secondary text-white" : "text-gray-600"
                }`}
                onClick={() => setSelectedVehicle("sedan")}
              >
                Sedan (2-4 passengers)
              </button>
              <button
                className={`px-6 py-2 rounded-md transition-colors ${
                  selectedVehicle === "suv" ? "bg-secondary text-white" : "text-gray-600"
                }`}
                onClick={() => setSelectedVehicle("suv")}
              >
                SUV (4-6 passengers)
              </button>
              <button
                className={`px-6 py-2 rounded-md transition-colors ${
                  selectedVehicle === "innova" ? "bg-secondary text-white" : "text-gray-600"
                }`}
                onClick={() => setSelectedVehicle("innova")}
              >
                Innova Crysta (6-7 passengers)
              </button>
            </div>
          </div>

          {/* Popular Routes */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Popular Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {oneWayRates.map((rate, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-lg">{rate.route}</h4>
                      <Badge variant="secondary">One-Way</Badge>
                    </div>
                    <div className="text-2xl font-bold text-secondary mb-4">
                      ₹{selectedVehicle === "sedan" ? rate.sedan : 
                         selectedVehicle === "suv" ? rate.suv : rate.innova}
                    </div>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => whatsapp(`नमस्ते! मुझे ${rate.route} के लिए टैक्सी चाहिए।`)}
                    >
                      <FaWhatsapp className="mr-2 h-4 w-4" />
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Routes */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Additional Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalRates.map((rate, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-semibold text-lg">{rate.route}</h4>
                      <Badge variant="secondary">One-Way</Badge>
                    </div>
                    <div className="text-2xl font-bold text-secondary mb-4">
                      ₹{selectedVehicle === "sedan" ? rate.sedan : 
                         selectedVehicle === "suv" ? rate.suv : rate.innova}
                    </div>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => whatsapp(`नमस्ते! मुझे ${rate.route} के लिए टैक्सी चाहिए।`)}
                    >
                      <FaWhatsapp className="mr-2 h-4 w-4" />
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Discounts & Offers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Discounts & Special Offers</h2>
            <p className="text-xl text-gray-600">Save more with our exclusive deals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {discounts.map((discount, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2 border-green-200">
                <CardContent className="p-6">
                  <discount.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-green-800">{discount.title}</h3>
                  <p className="text-gray-600">{discount.description}</p>
                </CardContent>
              </Card>
            ))}
            {specialPackages.map((pkg, index) => (
              <Card key={index + 2} className="text-center hover:shadow-lg transition-shadow border-2 border-purple-200">
                <CardContent className="p-6">
                  <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-purple-800">{pkg.title}</h3>
                  <p className="text-gray-600">{pkg.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600">All rates include the following services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fuel Charges</h3>
                <p className="text-gray-600">All rates include fuel charges for the journey</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Driver Charges</h3>
                <p className="text-gray-600">Professional and courteous drivers included</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Tolls & Taxes</h3>
                <p className="text-gray-600">All applicable tolls and taxes included</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amber Fort Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Amber Fort with Our Taxi Service</h2>
              <p className="text-lg text-gray-600 mb-6">
                Amber Fort, nestled in the rugged hills just outside Jaipur, is a timeless masterpiece of Rajputana architecture. 
                Built in 1592 by Raja Man Singh I, this majestic fortress stands as a symbol of royal grandeur and historical significance.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Crafted from red sandstone and white marble, Amber Fort glows like a jewel in the sunlight, overlooking the serene Maota Lake below. 
                The fort is adorned with intricate carvings, majestic courtyards, and breathtaking palaces like the Sheesh Mahal.
              </p>
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => whatsapp("नमस्ते! मुझे आमेर फोर्ट जाने के लिए टैक्सी चाहिए।")}
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Book Amber Fort Tour
              </Button>
            </div>
            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Popular Jaipur Attractions</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" /> City Palace</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" /> Hawa Mahal</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" /> Amber Fort</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" /> Jantar Mantar</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" /> Nahargarh Fort</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-600 mr-2" /> Jaigarh Fort</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Easy Booking Process</h2>
            <p className="text-xl">Book your ride in just a few simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">24/7 Availability</h3>
                <p>Our taxi services are available 24/7 for your travel needs</p>
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Easy Booking</h3>
                <p>Call us or WhatsApp to book your taxi service instantly</p>
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6 text-center">
                <CreditCard className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Flexible Payment</h3>
                <p>Cash, credit/debit cards, and online payments accepted</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Ride Today!</h2>
          <p className="text-xl mb-8">
            Planning a trip around Jaipur or beyond? Mukesh Tour and Travels is your go-to for safe, 
            reliable, and affordable taxi services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => whatsapp("नमस्ते! मुझे जयपुर टैक्सी सर्विस बुक करनी है।")}
            >
              <FaWhatsapp className="mr-2 h-5 w-5" />
              WhatsApp: 7737017755
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
              onClick={() => phone()}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 7737017755
            </Button>
          </div>
          <p className="mt-6 text-lg">
            📧 mukeshtourandtravelsjaipur@gmail.com<br />
            🌐 https://mukeshtourandtravels.com/<br />
            📍 Jaipur, Rajasthan
          </p>
        </div>
      </section>
    </div>
  );
}