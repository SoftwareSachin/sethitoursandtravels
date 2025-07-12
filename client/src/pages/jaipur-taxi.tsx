import { useState, useEffect } from "react";
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
  Award,
  Mail,
  Globe
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCommunication } from "../components/communication-utils";

export default function JaipurTaxi() {
  const { whatsapp, phone } = useCommunication();
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "/attached_assets/image_1752330488177.png",
    "/attached_assets/image_1752330504538.png"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

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
      <section className="relative bg-gradient-to-br from-orange-600 via-pink-600 to-purple-800 text-white py-24 overflow-hidden">
        {/* Sliding Background Images */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-60' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Hawa Mahal Jaipur Palace ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/15 via-pink-600/15 to-purple-800/20"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Star className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Rajasthan's #1 Rated Taxi Service</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Jaipur Taxi Service
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-200">
              खम्मा गणी सा! Welcome to Pink City
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed">
              Experience royal comfort with our premium taxi services in Jaipur. 
              From Amber Fort to City Palace, explore the Pink City's heritage with 
              <span className="text-yellow-300 font-semibold"> 24/7 availability</span> and 
              <span className="text-yellow-300 font-semibold"> transparent pricing</span>.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-300">5000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-300">24/7</div>
                <div className="text-sm">Service Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-300">20+</div>
                <div className="text-sm">Destinations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-300">5★</div>
                <div className="text-sm">Customer Rating</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => whatsapp("खम्मा गणी सा! मुझे जयपुर टैक्सी सर्विस चाहिए।")}
              >
                <FaWhatsapp className="mr-3 h-6 w-6" />
                Book Instantly on WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-10 py-5 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => phone()}
              >
                <Phone className="mr-3 h-6 w-6" />
                Call: +91 97720 21780
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Phone className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">+91 97720 21780</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <FaWhatsapp className="h-5 w-5 text-green-300" />
              <span className="font-semibold">WhatsApp: 77270 21780</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <Mail className="h-5 w-5 text-blue-300" />
              <span className="font-semibold">sethitourstravels8888@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full px-6 py-2 mb-6">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Premium Service Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose Sethi Tour & Travels
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the best taxi service in Jaipur with our professional approach, 
              customer-first mindset, and commitment to excellence in every journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg group">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-2xl border border-gray-100">
              <button
                className={`px-8 py-4 rounded-xl transition-all duration-300 font-semibold ${
                  selectedVehicle === "sedan" 
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setSelectedVehicle("sedan")}
              >
                <Car className="inline h-5 w-5 mr-2" />
                Sedan (2-4 passengers)
              </button>
              <button
                className={`px-8 py-4 rounded-xl transition-all duration-300 font-semibold ${
                  selectedVehicle === "suv" 
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setSelectedVehicle("suv")}
              >
                <Users className="inline h-5 w-5 mr-2" />
                SUV (4-6 passengers)
              </button>
              <button
                className={`px-8 py-4 rounded-xl transition-all duration-300 font-semibold ${
                  selectedVehicle === "innova" 
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setSelectedVehicle("innova")}
              >
                <Users className="inline h-5 w-5 mr-2" />
                Innova Crysta (6-7 passengers)
              </button>
            </div>
          </div>

          {/* Popular Routes */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Popular Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {oneWayRates.map((rate, index) => (
                <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg group overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 h-1"></div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-lg text-gray-900">{rate.route}</h4>
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">One-Way</Badge>
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-6">
                      ₹{selectedVehicle === "sedan" ? rate.sedan : 
                         selectedVehicle === "suv" ? rate.suv : rate.innova}
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 shadow-lg transform group-hover:scale-105 transition-all duration-300"
                      onClick={() => whatsapp(`नमस्ते! मुझे ${rate.route} के लिए टैक्सी चाहिए।`)}
                    >
                      <FaWhatsapp className="mr-2 h-5 w-5" />
                      Book Instantly
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
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full px-6 py-2 mb-6">
              <Star className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Exclusive Savings Available</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Discounts & Special Offers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Save big with our exclusive deals and seasonal offers - more value for your journey!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {discounts.map((discount, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg group overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2"></div>
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <discount.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-green-800">{discount.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{discount.description}</p>
                  <div className="mt-4 text-2xl font-bold text-green-600">
                    {discount.title.includes("Early") ? "10%" : "15%"} OFF
                  </div>
                </CardContent>
              </Card>
            ))}
            {specialPackages.map((pkg, index) => (
              <Card key={index + 2} className="text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg group overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2"></div>
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-purple-800">{pkg.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
                  <div className="mt-4 text-lg font-semibold text-purple-600">
                    Special Rates
                  </div>
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
      <section className="py-24 bg-gradient-to-br from-orange-600 via-pink-600 to-purple-800 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
            <span className="text-sm font-medium">Trusted by 5000+ Happy Customers</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Ready to Explore Jaipur?
          </h2>
          <p className="text-2xl md:text-3xl font-semibold mb-8 text-yellow-200">
            खम्मा गणी सा! Let's Start Your Journey
          </p>
          <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Planning a trip around Jaipur or beyond? Sethi Tour & Travels is your go-to for safe, 
            reliable, and affordable taxi services. Book now and experience the Pink City like never before!
          </p>
          
          {/* Features highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Clock className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Instant Booking</h3>
              <p className="text-sm opacity-90">Book in 30 seconds via WhatsApp</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Shield className="h-8 w-8 text-green-300 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Safe & Secure</h3>
              <p className="text-sm opacity-90">Licensed drivers & insured vehicles</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Star className="h-8 w-8 text-orange-300 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Best Rates</h3>
              <p className="text-sm opacity-90">Transparent pricing, no hidden charges</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
              onClick={() => whatsapp("नमस्ते! मुझे जयपुर टैक्सी सर्विस बुक करनी है।")}
            >
              <FaWhatsapp className="mr-3 h-6 w-6" />
              Book on WhatsApp Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-12 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => phone()}
            >
              <Phone className="mr-3 h-6 w-6" />
              Call: +91 97720 21780
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-lg bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div>
              <span className="block font-semibold text-yellow-300">Email Us</span>
              <span>sethitourstravels8888@gmail.com</span>
            </div>
            <div>
              <span className="block font-semibold text-green-300">Website</span>
              <span>Contact: Kuldeep Choudhary</span>
            </div>
            <div>
              <span className="block font-semibold text-orange-300">Location</span>
              <span>S-147, 4S New Loha Mandi Road, Machada, Jaipur-302013</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Jal Mahal Image */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/attached_assets/image_1752329927206.png" 
            alt="Jal Mahal Water Palace Jaipur"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-blue-900/85 to-purple-900/85"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">Sethi Tour & Travels</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for exploring the magnificent Pink City of Jaipur. 
                Experience royal heritage with our premium taxi services.
              </p>
              <div className="flex space-x-4">
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => whatsapp("खम्मा गणी सा! मुझे जयपुर टैक्सी की जानकारी चाहिए।")}
                >
                  <FaWhatsapp className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                  onClick={() => phone()}
                >
                  <Phone className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-300">Our Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <Car className="h-4 w-4 mr-3 text-yellow-400" />
                  Local Jaipur City Tours
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-yellow-400" />
                  Airport Transfers
                </li>
                <li className="flex items-center">
                  <Navigation className="h-4 w-4 mr-3 text-yellow-400" />
                  One-Way & Round-Trip
                </li>
                <li className="flex items-center">
                  <Users className="h-4 w-4 mr-3 text-yellow-400" />
                  Group Travel Packages
                </li>
                <li className="flex items-center">
                  <Star className="h-4 w-4 mr-3 text-yellow-400" />
                  Heritage Site Visits
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-pink-300">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-green-400" />
                  <div>
                    <p className="font-semibold">+91 97720 21780</p>
                    <p>+91 77270 21780</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaWhatsapp className="h-5 w-5 mr-3 text-green-400" />
                  <p>WhatsApp: 77270 21780</p>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                  <p>sethitourstravels8888@gmail.com</p>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-red-400 mt-0.5" />
                  <p>S-147, 4S New Loha Mandi Road, Machada, Jaipur-302013</p>
                </div>
                <div className="flex items-start">
                  <Globe className="h-5 w-5 mr-3 text-purple-400 mt-0.5" />
                  <p>Contact: Kuldeep Choudhary</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Sethi Tour & Travels. Experience the Royal Heritage of Jaipur.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <Shield className="h-4 w-4 mr-1 text-green-400" />
                  Licensed & Insured
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-yellow-400" />
                  24/7 Service
                </span>
                <span className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-orange-400" />
                  5★ Rated
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}