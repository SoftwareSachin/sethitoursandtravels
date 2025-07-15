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
  Award,
  Mail,
  Globe
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCommunication } from "../components/communication-utils";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import JaipurTaxiFloatingButtons from "../components/jaipur-taxi-floating-buttons";
import rajasthaniWelcomeImage from '@assets/image_1752342637765.png';
import dzireImage from "@assets/steptodown.com267953_1752609994574.jpg";
import ertigaImage from "@assets/steptodown.com288680_1752610052347.jpg";
import innovaImage from "@assets/image_1752328589553.png";
import tempoImage from "@assets/image_1752328614332.png";

export default function JaipurTaxi() {
  const { whatsapp, phone } = useCommunication();
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    "/attached_assets/steptodown.com577031_1752617562634.jpg",
    "/attached_assets/steptodown.com577031_1752617562634.jpg",
    "/attached_assets/steptodown.com577031_1752617562634.jpg", // Amber Fort
    "/attached_assets/steptodown.com577031_1752617562634.jpg", // Amber Fort
    "/attached_assets/steptodown.com577031_1752617562634.jpg"  // Amber Fort
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
      icon: MapPin,
      price: "₹1,500-2,500/day",
      features: ["8-10 hours", "Expert driver", "Fuel included", "All major attractions"]
    },
    {
      title: "Airport Transfers",
      description: "On-time pick-up and drop services to Jaipur Airport.",
      icon: Car,
      price: "₹500-800",
      features: ["24/7 service", "Flight tracking", "Meet & greet", "Luggage assistance"]
    },
    {
      title: "One-Way Taxi Service",
      description: "Convenient one-way rides from Jaipur to cities across Rajasthan and neighboring states.",
      icon: Car,
      price: "₹8-12/km",
      features: ["All destinations", "Professional drivers", "Well-maintained cars", "Competitive rates"]
    },
    {
      title: "Outstation Taxi Service",
      description: "Plan your trip to nearby cities with our comfortable outstation taxi service.",
      icon: MapPin,
      price: "₹2,000-4,000/day",
      features: ["Multi-city tours", "Flexible itinerary", "Overnight stays", "Local guidance"]
    },
    {
      title: "Corporate and Event Travel",
      description: "Reliable transportation for business clients and special events.",
      icon: Users,
      price: "₹15-20/km",
      features: ["Corporate billing", "Premium vehicles", "Executive service", "Group bookings"]
    },
    {
      title: "Wedding & Special Events",
      description: "Luxury vehicles for weddings, parties, and special occasions.",
      icon: Award,
      price: "₹3,000-8,000/day",
      features: ["Decorated cars", "Premium fleet", "Professional chauffeur", "Special packages"]
    }
  ];

  const vehicles = [
    {
      name: "Maruti Dzire",
      type: "Sedan",
      passengers: "4+1",
      price: "₹8/km",
      image: dzireImage,
      features: ["AC", "Music System", "Comfortable Seats", "Spacious"],
      popular: true
    },
    {
      name: "Maruti Ertiga",
      type: "SUV",
      passengers: "6+1",
      price: "₹12/km",
      image: ertigaImage,
      features: ["AC", "Music System", "Extra Luggage", "Family Friendly"],
      popular: false
    },
    {
      name: "Toyota Innova",
      type: "Premium SUV",
      passengers: "7+1",
      price: "₹16/km",
      image: innovaImage,
      features: ["Premium AC", "Push-back Seats", "Extra Comfort", "Luxury Travel"],
      popular: true
    },
    {
      name: "Tempo Traveller",
      type: "Mini Bus",
      passengers: "12+1",
      price: "₹20/km",
      image: tempoImage,
      features: ["Group Travel", "AC", "Luggage Space", "Comfortable Journey"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      comment: "Excellent service from Sethi Tour & Travels. The driver was very courteous and knowledgeable about all the places in Jaipur. Highly recommended!",
      service: "Local Jaipur Tour"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      comment: "Perfect service for our family trip. Clean vehicle, professional driver, and very reasonable rates. Will definitely book again!",
      service: "Delhi to Jaipur"
    },
    {
      name: "Anjali Patel",
      location: "Ahmedabad",
      rating: 5,
      comment: "Kuldeep ji provided excellent service. The car was clean and comfortable. Driver was very helpful and showed us the best places to visit.",
      service: "Jaipur Sightseeing"
    },
    {
      name: "Vikram Singh",
      location: "Jodhpur",
      rating: 5,
      comment: "Great experience with Sethi Tour & Travels. On-time pickup, safe driving, and very affordable rates. Thank you for making our trip memorable!",
      service: "Jodhpur to Jaipur"
    }
  ];

  const tourPackages = [
    {
      name: "Golden Triangle Tour",
      duration: "3 Days",
      places: ["Delhi", "Agra", "Jaipur"],
      price: "₹15,000",
      image: "/attached_assets/image_1752331571103.png",
      highlights: ["Taj Mahal", "Red Fort", "City Palace", "Hawa Mahal"]
    },
    {
      name: "Rajasthan Heritage Tour",
      duration: "5 Days",
      places: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
      price: "₹25,000",
      image: "/attached_assets/image_1752331579972.png",
      highlights: ["City Palace", "Lake Pichola", "Mehrangarh Fort", "Desert Safari"]
    },
    {
      name: "Jaipur Day Tour",
      duration: "1 Day",
      places: ["Jaipur City"],
      price: "₹2,500",
      image: "/attached_assets/image_1752331584537.png",
      highlights: ["Amber Fort", "City Palace", "Jantar Mantar", "Hawa Mahal"]
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
      <Navigation />
      {/* Hero Section - Traditional Indian Theme */}
      <section className="relative bg-orange-100 border-t-4 border-orange-600 text-gray-800 py-24 overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        {/* Traditional Indian Border Pattern */}
        <div className="absolute inset-0 bg-orange-50">
          <div className="absolute top-0 left-0 w-full h-2 bg-orange-600"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-600"></div>
          <div className="absolute top-4 left-4 w-8 h-8 border-4 border-orange-600 rounded-full"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-4 border-orange-600 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-4 border-orange-600 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-4 border-orange-600 rounded-full"></div>
        </div>
        
        {/* Sliding Background Images */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Amber Fort Jaipur Palace ${index + 1}`}
                className="hero-bg-image"
                loading="lazy"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-orange-50/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Traditional Badge */}
            <div className="inline-flex items-center bg-orange-600 text-white border-4 border-orange-700 px-6 py-3 mb-6 shadow-lg">
              <Star className="h-4 w-4 text-yellow-300 mr-2" />
              <span className="text-sm font-bold">राजस्थान की नंबर 1 टैक्सी सेवा</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-orange-800 px-4" style={{ fontFamily: "'Cinzel', serif" }}>
              जयपुर टैक्सी सेवा
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-orange-700 px-4">
              Jaipur Taxi Service
            </h2>
            
            <div className="mb-6 flex justify-center">
              <img 
                src={rajasthaniWelcomeImage} 
                alt="Rajasthani Welcome" 
                className="w-48 h-auto md:w-56 object-contain drop-shadow-lg border-4 border-orange-600 rounded-lg bg-white p-2"
                style={{ 
                  imageRendering: 'auto',
                  filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
                }}
              />
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed px-4 text-gray-700">
              गुलाबी शहर जयपुर की शाही विरासत का अनुभव करें। आमेर किला से सिटी पैलेस तक,
              <span className="text-orange-700 font-bold"> 24/7 उपलब्धता</span> और 
              <span className="text-orange-700 font-bold"> पारदर्शी मूल्य निर्धारण</span> के साथ।
            </p>
            
            {/* Stats - Traditional Style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 max-w-3xl mx-auto px-4">
              <div className="bg-white border-4 border-orange-600 p-3 sm:p-4 text-center shadow-lg">
                <div className="text-xl sm:text-2xl font-bold text-orange-700">5000+</div>
                <div className="text-xs sm:text-sm text-gray-600">खुश ग्राहक</div>
              </div>
              <div className="bg-white border-4 border-orange-600 p-3 sm:p-4 text-center shadow-lg">
                <div className="text-xl sm:text-2xl font-bold text-orange-700">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">सेवा उपलब्ध</div>
              </div>
              <div className="bg-white border-4 border-orange-600 p-3 sm:p-4 text-center shadow-lg">
                <div className="text-xl sm:text-2xl font-bold text-orange-700">20+</div>
                <div className="text-xs sm:text-sm text-gray-600">गंतव्य</div>
              </div>
              <div className="bg-white border-4 border-orange-600 p-3 sm:p-4 text-center shadow-lg">
                <div className="text-xl sm:text-2xl font-bold text-orange-700">5★</div>
                <div className="text-xs sm:text-sm text-gray-600">रेटिंग</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-sm sm:text-base md:text-lg font-bold shadow-lg border-4 border-green-700 hover:border-green-800 w-full sm:w-auto"
                onClick={() => whatsapp("नमस्कार! मुझे जयपुर टैक्सी सर्विस चाहिए।")}
              >
                <FaWhatsapp className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                <span className="hidden sm:inline">तुरंत बुक करें व्हाट्सएप पर</span>
                <span className="sm:hidden">व्हाट्सएप</span>
              </Button>
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-sm sm:text-base md:text-lg font-bold shadow-lg border-4 border-orange-700 hover:border-orange-800 w-full sm:w-auto"
                onClick={() => phone()}
              >
                <Phone className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                <span className="hidden sm:inline">कॉल करें: +91 97720 21780</span>
                <span className="sm:hidden">कॉल करें</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar - Traditional Style */}
      <section className="bg-orange-600 text-white py-4 sm:py-6 shadow-lg border-b-4 border-orange-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-6">
            <div className="flex items-center gap-2 sm:gap-3 bg-white/20 border-2 border-white/30 px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto justify-center">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
              <span className="font-bold text-sm sm:text-base">+91 97720 21780</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/20 border-2 border-white/30 px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto justify-center">
              <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 text-green-300" />
              <span className="font-bold text-sm sm:text-base">WhatsApp: 77270 21780</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-white/20 border-2 border-white/30 px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto justify-center">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-300" />
              <span className="font-bold text-sm sm:text-base hidden md:inline">sethitourstravels8888@gmail.com</span>
              <span className="font-bold text-sm sm:text-base md:hidden">Email Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Traditional Indian Style */}
      <section className="py-20 bg-orange-50 border-t-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-600 text-white border-4 border-orange-700 px-6 py-3 mb-6 shadow-lg">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm font-bold">प्रीमियम सेवा उत्कृष्टता</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-800 mb-6 px-4 text-center" style={{ fontFamily: "'Cinzel', serif" }}>
              क्यों चुनें सेठी टूर एंड ट्रेवल्स
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-700 mb-4 px-4 text-center">
              Why Choose Sethi Tour & Travels
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
              हमारी पेशेवर सेवा, ग्राहक-केंद्रित दृष्टिकोण और हर यात्रा में उत्कृष्टता के प्रति प्रतिबद्धता के साथ जयपुर में सर्वोत्तम टैक्सी सेवा का अनुभव करें।
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 bg-white border-4 border-orange-600 shadow-lg">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="bg-orange-600 border-4 border-orange-700 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-orange-800">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services - Traditional Indian Style */}
      <section className="py-16 bg-white border-t-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4" style={{ fontFamily: "'Cinzel', serif" }}>हमारी सेवाएं</h2>
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">Our Services</h3>
            <p className="text-xl text-gray-700">आपकी सभी यात्रा आवश्यकताओं के लिए व्यापक टैक्सी समाधान</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-4 border-orange-600 bg-orange-50">
                <CardContent className="p-6">
                  <div className="bg-orange-600 border-4 border-orange-700 w-12 h-12 flex items-center justify-center mb-4 shadow-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-orange-800">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div className="bg-orange-600 text-white px-4 py-2 font-bold text-center border-2 border-orange-700 shadow-lg">
                    {service.price}
                  </div>
                  <div className="mt-4 space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* One-Way Taxi Rates - Traditional Indian Style */}
      <section className="py-16 bg-orange-50 border-t-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4" style={{ fontFamily: "'Cinzel', serif" }}>एक तरफा टैक्सी दरें</h2>
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">One-Way Taxi Rates</h3>
            <p className="text-xl text-gray-700">जयपुर से लोकप्रिय गंतव्यों के लिए पारदर्शी मूल्य निर्धारण</p>
          </div>
          
          {/* Vehicle Type Selector - Traditional Style */}
          <div className="flex justify-center mb-12">
            <div className="bg-white border-4 border-orange-600 p-2 shadow-lg">
              <button
                className={`px-8 py-4 transition-all duration-300 font-bold border-2 ${
                  selectedVehicle === "sedan" 
                    ? "bg-orange-600 text-white border-orange-700 shadow-lg" 
                    : "text-gray-700 hover:bg-gray-50 border-transparent"
                }`}
                onClick={() => setSelectedVehicle("sedan")}
              >
                <Car className="inline h-5 w-5 mr-2" />
                Sedan (2-4 passengers)
              </button>
              <button
                className={`px-8 py-4 transition-all duration-300 font-bold border-2 ${
                  selectedVehicle === "suv" 
                    ? "bg-orange-600 text-white border-orange-700 shadow-lg" 
                    : "text-gray-700 hover:bg-gray-50 border-transparent"
                }`}
                onClick={() => setSelectedVehicle("suv")}
              >
                <Users className="inline h-5 w-5 mr-2" />
                SUV (4-6 passengers)
              </button>
              <button
                className={`px-8 py-4 transition-all duration-300 font-bold border-2 ${
                  selectedVehicle === "innova" 
                    ? "bg-orange-600 text-white border-orange-700 shadow-lg" 
                    : "text-gray-700 hover:bg-gray-50 border-transparent"
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
            <h3 className="text-2xl font-bold text-center mb-8 text-orange-800">लोकप्रिय मार्ग - Popular Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {oneWayRates.map((rate, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white border-4 border-orange-600 shadow-lg">
                  <div className="bg-orange-600 h-2"></div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-lg text-orange-800">{rate.route}</h4>
                      <Badge className="bg-green-600 text-white border-2 border-green-700">One-Way</Badge>
                    </div>
                    <div className="text-3xl font-bold text-orange-700 mb-6">
                      ₹{selectedVehicle === "sedan" ? rate.sedan : 
                         selectedVehicle === "suv" ? rate.suv : rate.innova}
                    </div>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 shadow-lg border-2 border-green-700"
                      onClick={() => whatsapp(`नमस्ते! मुझे ${rate.route} के लिए टैक्सी चाहिए।`)}
                    >
                      <FaWhatsapp className="mr-2 h-5 w-5" />
                      तुरंत बुक करें
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Routes */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-orange-800">अतिरिक्त मार्ग - Additional Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalRates.map((rate, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-4 border-orange-600 bg-orange-50">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-lg text-orange-800">{rate.route}</h4>
                      <Badge className="bg-orange-600 text-white border-2 border-orange-700">One-Way</Badge>
                    </div>
                    <div className="text-2xl font-bold text-orange-700 mb-4">
                      ₹{selectedVehicle === "sedan" ? rate.sedan : 
                         selectedVehicle === "suv" ? rate.suv : rate.innova}
                    </div>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold border-2 border-green-700"
                      onClick={() => whatsapp(`नमस्ते! मुझे ${rate.route} के लिए टैक्सी चाहिए।`)}
                    >
                      <FaWhatsapp className="mr-2 h-4 w-4" />
                      अब बुक करें
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Inclusions - Traditional Indian Style */}
      <section className="py-16 bg-white border-t-4 border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-800 mb-4" style={{ fontFamily: "'Cinzel', serif" }}>क्या शामिल है</h2>
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">What's Included</h3>
            <p className="text-xl text-gray-700">सभी दरों में निम्नलिखित सेवाएं शामिल हैं</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-4 border-orange-600 bg-orange-50">
              <CardContent className="p-6">
                <div className="bg-orange-600 border-4 border-orange-700 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-orange-800">Fuel Charges</h3>
                <p className="text-gray-700">सभी दरों में यात्रा के लिए ईंधन शुल्क शामिल है</p>
              </CardContent>
            </Card>
            <Card className="text-center border-4 border-orange-600 bg-orange-50">
              <CardContent className="p-6">
                <div className="bg-orange-600 border-4 border-orange-700 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-orange-800">Driver Charges</h3>
                <p className="text-gray-700">पेशेवर और विनम्र ड्राइवर शामिल</p>
              </CardContent>
            </Card>
            <Card className="text-center border-4 border-orange-600 bg-orange-50">
              <CardContent className="p-6">
                <div className="bg-orange-600 border-4 border-orange-700 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-orange-800">Tolls & Taxes</h3>
                <p className="text-gray-700">सभी लागू टोल और कर शामिल</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Destinations Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Jaipur's Magnificent Heritage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the timeless beauty and royal grandeur of Jaipur's iconic landmarks with our premium taxi services
            </p>
          </div>
          
          {/* Featured Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Amber Fort */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 shimmer-effect">
              <div className="relative h-80">
                <img 
                  src="/attached_assets/image_1752331548623.png" 
                  alt="Amber Fort Jaipur at Night"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Amber Fort</h3>
                  <p className="text-sm opacity-90 mb-4">Majestic hilltop fortress with stunning architecture and panoramic views</p>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold border-0 shadow-lg"
                    onClick={() => whatsapp("नमस्ते! मुझे आमेर फोर्ट जाने के लिए टैक्सी चाहिए।")}
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>

            {/* City Palace */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 shimmer-effect">
              <div className="relative h-80">
                <img 
                  src="/attached_assets/image_1752331554106.png" 
                  alt="City Palace Jaipur"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">City Palace</h3>
                  <p className="text-sm opacity-90 mb-4">Pink City's crown jewel with royal museums and breathtaking courtyards</p>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold border-0 shadow-lg"
                    onClick={() => whatsapp("नमस्ते! मुझे सिटी पैलेस जाने के लिए टैक्सी चाहिए।")}
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Jantar Mantar */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 shimmer-effect">
              <div className="relative h-80">
                <img 
                  src="/attached_assets/image_1752331562660.png" 
                  alt="Jantar Mantar Jaipur"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Jantar Mantar</h3>
                  <p className="text-sm opacity-90 mb-4">UNESCO World Heritage astronomical observatory with ancient instruments</p>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold border-0 shadow-lg"
                    onClick={() => whatsapp("नमस्ते! मुझे जंतर मंतर जाने के लिए टैक्सी चाहिए।")}
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Albert Hall Museum */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 shimmer-effect">
              <div className="relative h-80">
                <img 
                  src="/attached_assets/image_1752331571103.png" 
                  alt="Albert Hall Museum Jaipur"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Albert Hall Museum</h3>
                  <p className="text-sm opacity-90 mb-4">Stunning Indo-Saracenic architecture with rare artifacts and collections</p>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold border-0 shadow-lg"
                    onClick={() => whatsapp("नमस्ते! मुझे अल्बर्ट हॉल संग्रहालय जाने के लिए टैक्सी चाहिए।")}
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Jaigarh Fort */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 shimmer-effect">
              <div className="relative h-80">
                <img 
                  src="/attached_assets/image_1752331579972.png" 
                  alt="Jaigarh Fort Jaipur"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Jaigarh Fort</h3>
                  <p className="text-sm opacity-90 mb-4">Victory Fort with the world's largest cannon and spectacular valley views</p>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold border-0 shadow-lg"
                    onClick={() => whatsapp("नमस्ते! मुझे जयगढ़ फोर्ट जाने के लिए टैक्सी चाहिए।")}
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Birla Mandir */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 shimmer-effect">
              <div className="relative h-80">
                <img 
                  src="/attached_assets/image_1752331584537.png" 
                  alt="Birla Mandir Jaipur"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Birla Mandir</h3>
                  <p className="text-sm opacity-90 mb-4">Magnificent white marble temple with intricate carvings and peaceful ambiance</p>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold border-0 shadow-lg"
                    onClick={() => whatsapp("नमस्ते! मुझे बिड़ला मंदिर जाने के लिए टैक्सी चाहिए।")}
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Features */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Local Guides</h3>
                <p className="text-gray-600">Our drivers are knowledgeable about Jaipur's history and hidden gems</p>
              </div>
              <div>
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Safe & Comfortable</h3>
                <p className="text-gray-600">Well-maintained vehicles with professional drivers for your safety</p>
              </div>
              <div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Available</h3>
                <p className="text-gray-600">Round-the-clock service for all your travel needs in Jaipur</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full px-6 py-2 mb-6">
              <Star className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Customer Reviews</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read genuine reviews from travelers who experienced the royal treatment with Sethi Tour & Travels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-500"></div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                    "{testimonial.comment}"
                  </blockquote>
                  <div className="inline-flex items-center bg-orange-50 rounded-full px-4 py-2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0">
                      {testimonial.service}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tour Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-6 py-2 mb-6">
              <Globe className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Complete Tour Packages</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Popular Tour Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore Rajasthan with our specially curated tour packages. From the Pink City to the Golden City, experience royal grandeur like never before.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPackages.map((tour, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-xl group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg">
                      {tour.duration}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                    <div className="flex items-center text-sm opacity-90">
                      <MapPin className="h-4 w-4 mr-1" />
                      {tour.places.join(" • ")}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                      {tour.price}
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">4.9</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tour.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg transform group-hover:scale-105 transition-all duration-300"
                      onClick={() => whatsapp(`नमस्ते! मुझे ${tour.name} टूर पैकेज की जानकारी चाहिए।`)}
                    >
                      <FaWhatsapp className="mr-2 h-4 w-4" />
                      Book Tour
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold"
                      onClick={() => phone()}
                    >
                      <Phone className="mr-2 h-3 w-3" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-2 mb-6">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Premium Service Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Comprehensive Taxi Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From airport transfers to royal city tours, we provide premium taxi services 
              tailored to meet all your transportation needs in Jaipur and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg group bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-500"></div>
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    {service.price}
                  </div>
                  <ul className="text-sm text-gray-600 mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg transform group-hover:scale-105 transition-all duration-300"
                      onClick={() => whatsapp(`नमस्ते! मुझे ${service.title} की जानकारी चाहिए।`)}
                    >
                      <FaWhatsapp className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold"
                      onClick={() => phone()}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Fleet Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vehicle Fleet</h2>
            <p className="text-xl text-gray-600">Choose from our premium collection of well-maintained vehicles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg group relative">
                {vehicle.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-2">{vehicle.type}</p>
                  <p className="text-sm text-gray-500 mb-4">Capacity: {vehicle.passengers} passengers</p>
                  <div className="text-2xl font-bold text-orange-600 mb-4">{vehicle.price}</div>
                  <ul className="text-sm text-gray-500 mb-6 space-y-1">
                    {vehicle.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-lg transform group-hover:scale-105 transition-all duration-300"
                      onClick={() => whatsapp(`नमस्ते! मुझे ${vehicle.name} बुक करनी है।`)}
                    >
                      <FaWhatsapp className="mr-2 h-4 w-4" />
                      Book Now
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-50"
                      onClick={() => phone()}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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

      {/* Premium Call to Action Section */}
      <section className="py-32 bg-gradient-to-br from-amber-800 via-orange-700 to-red-800 text-white relative overflow-hidden">
        {/* Premium Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/30 via-orange-500/30 to-red-600/30"></div>
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>

        {/* Floating Premium Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-16 w-40 h-40 bg-yellow-400 rounded-full mix-blend-soft-light filter blur-2xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-16 w-40 h-40 bg-orange-400 rounded-full mix-blend-soft-light filter blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-red-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full px-8 py-3 mb-8 shadow-2xl border border-yellow-400/30">
            <Award className="h-5 w-5 text-yellow-200 mr-3" />
            <span className="text-sm font-bold tracking-wide text-yellow-100">RAJASTHAN'S PREMIER LUXURY TAXI SERVICE</span>
          </div>
          
          {/* Premium Heading */}
          <div className="mb-8">
            <h2 className="text-6xl md:text-8xl font-black mb-4 leading-relaxed">
              <span className="block bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 bg-clip-text text-transparent drop-shadow-2xl mb-4">
                Ready to Experience
              </span>
              <span className="block bg-gradient-to-r from-orange-200 via-red-200 to-pink-200 bg-clip-text text-transparent drop-shadow-2xl">
                Magnificent Jaipur?
              </span>
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Premium Welcome Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full filter blur-xl opacity-50 scale-110"></div>
              <img 
                src={rajasthaniWelcomeImage} 
                alt="Rajasthani Heritage Welcome" 
                className="relative w-56 h-auto md:w-64 object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                style={{ 
                  imageRendering: 'auto',
                  filter: 'contrast(1.2) brightness(1.1) saturate(1.2) drop-shadow(0 10px 30px rgba(0,0,0,0.3))'
                }}
              />
            </div>
          </div>

          {/* Premium Description */}
          <div className="mb-16 max-w-5xl mx-auto">
            <p className="text-2xl md:text-3xl mb-8 leading-relaxed font-light text-yellow-100">
              Embark on a <span className="font-bold text-yellow-300">majestic journey</span> through the Pink City's heritage. 
              From the grandeur of <span className="font-semibold text-amber-300">Amber Fort</span> to the elegance of 
              <span className="font-semibold text-orange-300"> City Palace</span>, discover Jaipur's timeless beauty.
            </p>
            <p className="text-lg text-amber-200 font-medium">
              Sethi Tour & Travels - Where every journey becomes a premium expedition
            </p>
          </div>
          
          {/* Premium Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-600/20 to-amber-700/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-500/30 shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Clock className="h-8 w-8 text-amber-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-yellow-200">Instant Booking</h3>
              <p className="text-amber-200 leading-relaxed">Book your premium taxi in seconds via WhatsApp</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-700/20 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/30 shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Shield className="h-8 w-8 text-red-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-orange-200">Premium Security</h3>
              <p className="text-orange-200 leading-relaxed">Licensed chauffeurs & premium insured vehicles</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-600/20 to-yellow-700/20 backdrop-blur-lg rounded-2xl p-8 border border-amber-500/30 shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Star className="h-8 w-8 text-yellow-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-200">Best Pricing</h3>
              <p className="text-amber-200 leading-relaxed">Transparent premium rates, no hidden charges</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-600/20 to-pink-700/20 backdrop-blur-lg rounded-2xl p-8 border border-red-500/30 shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Award className="h-8 w-8 text-pink-900" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-200">Premium Experience</h3>
              <p className="text-red-200 leading-relaxed">5-star heritage tourism experience</p>
            </div>
          </div>
          
          {/* Premium Booking Buttons */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 hover:from-green-700 hover:via-emerald-700 hover:to-green-800 text-white px-16 py-8 text-2xl font-black shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-green-400/50 rounded-2xl"
              onClick={() => whatsapp("नमस्कार! मुझे जयपुर में प्रीमियम टैक्सी सर्विस चाहिए।")}
            >
              <FaWhatsapp className="mr-4 h-8 w-8" />
              Book Premium Ride on WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-4 border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-amber-900 px-16 py-8 text-2xl font-black shadow-2xl transform hover:scale-110 transition-all duration-300 bg-transparent backdrop-blur-sm rounded-2xl"
              onClick={() => phone()}
            >
              <Phone className="mr-4 h-8 w-8" />
              Call Premium Helpline
            </Button>
          </div>
          
          {/* Premium Contact Information */}
          <div className="bg-gradient-to-r from-yellow-600/10 via-amber-600/10 to-orange-600/10 backdrop-blur-lg rounded-3xl p-12 border border-yellow-500/20 shadow-2xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-amber-900" />
                </div>
                <span className="block font-bold text-yellow-300 mb-2">Premium Email Service</span>
                <span className="text-amber-200">sethitourstravels8888@gmail.com</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-red-900" />
                </div>
                <span className="block font-bold text-orange-300 mb-2">Contact Person</span>
                <span className="text-orange-200">Kuldeep Choudhary</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-pink-900" />
                </div>
                <span className="block font-bold text-red-300 mb-2">Office Address</span>
                <span className="text-red-200">S-147, 4S New Loha Mandi Road, Machada, Jaipur-302013</span>
              </div>
            </div>
            
            {/* Premium Phone Numbers */}
            <div className="mt-8 pt-8 border-t border-yellow-500/20 text-center">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="flex items-center bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full px-8 py-4 border border-green-500/30">
                  <Phone className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-xl font-bold text-green-300">+91 97720 21780</span>
                </div>
                <div className="flex items-center bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full px-8 py-4 border border-green-500/30">
                  <FaWhatsapp className="h-6 w-6 text-green-400 mr-3" />
                  <span className="text-xl font-bold text-green-300">+91 77270 21780</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Website Footer */}
      <Footer />
      
      {/* Floating WhatsApp and Phone Buttons */}
      <JaipurTaxiFloatingButtons />
    </div>
  );
}