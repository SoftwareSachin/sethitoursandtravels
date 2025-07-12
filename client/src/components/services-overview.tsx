import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  RotateCcw, 
  MapPin, 
  Hotel, 
  Camera, 
  Settings,
  ArrowRight,
  Clock,
  Shield,
  Users
} from "lucide-react";
import dzireTaxiImage from "@assets/image_1752329180785.png";
import indiaLandmarksImage from "@assets/image_1752329328612.png";

export default function ServicesOverview() {
  const services = [
    {
      icon: Car,
      title: "One-Way Taxi",
      description: "Comfortable one-way travel to your destination with professional drivers",
      features: ["Airport Transfers", "Intercity Travel", "Local Sightseeing", "Business Travel"],
      startingPrice: "₹8/km",
      image: dzireTaxiImage,
      whatsappText: "हाय! मुझे वन-वे टैक्सी चाहिए। कृपया रेट बताएं।"
    },
    {
      icon: RotateCcw,
      title: "Round-Trip Taxi",
      description: "Complete round-trip packages with waiting time and return journey included",
      features: ["Multi-day Tours", "Wedding Functions", "Corporate Events", "Family Trips"],
      startingPrice: "₹12/km",
      image: dzireTaxiImage,
      whatsappText: "नमस्ते! मुझे राउंड ट्रिप टैक्सी बुक करनी है।"
    },
    {
      icon: MapPin,
      title: "All India / Rajasthan Tours",
      description: "Comprehensive tour packages covering India's most beautiful destinations",
      features: ["Golden Triangle", "Desert Safari", "Wildlife Tours", "Pilgrimage Tours"],
      startingPrice: "₹15,000",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      whatsappText: "राम राम सा! मुझे राजस्थान टूर पैकेज चाहिए।"
    },
    {
      icon: Hotel,
      title: "Hotel & Resort Packages",
      description: "Complete stay packages with accommodation and transport included",
      features: ["Heritage Hotels", "Luxury Resorts", "Budget Stays", "Group Bookings"],
      startingPrice: "₹3,500/night",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      whatsappText: "नमस्ते! मुझे होटल के साथ टूर पैकेज चाहिए।"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Special tours designed for photography enthusiasts and professionals",
      features: ["Sunrise/Sunset Tours", "Heritage Photography", "Wildlife Photography", "Cultural Events"],
      startingPrice: "₹8,500",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      whatsappText: "हैलो! मुझे फोटोग्राफी टूर बुक करना है।"
    },
    {
      icon: Settings,
      title: "Custom Tour Packages",
      description: "Personalized tours designed according to your preferences and budget",
      features: ["Flexible Itinerary", "Choice of Hotels", "Custom Activities", "Group Discounts"],
      startingPrice: "On Request",
      image: indiaLandmarksImage,
      whatsappText: "नमस्कार! मुझे कस्टम टूर पैकेज बनवाना है।"
    }
  ];

  const whyChooseUs = [
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock support and emergency assistance"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Fully insured vehicles with verified professional drivers"
    },
    {
      icon: Users,
      title: "Expert Guides",
      description: "Local experts with deep knowledge of destinations"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-secondary rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-secondary rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-secondary/10 rounded-full">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Discover India</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From ancient palaces to golden deserts, embark on extraordinary journeys across India's most magnificent destinations. 
            Experience the royal heritage, vibrant culture, and timeless beauty with our expertly crafted travel services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-white border-0 shadow-lg transform hover:-translate-y-2">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-gradient-to-r from-secondary to-primary backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold">
                      From {service.startingPrice}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg px-3 py-2 hover:from-secondary/10 hover:to-primary/10 transition-colors">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
                        <span className="text-xs text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-secondary to-primary hover:from-orange-600 hover:to-blue-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <a href={`https://api.whatsapp.com/send?phone=919772021780&text=${encodeURIComponent(service.whatsappText)}`}>
                      Book Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-4">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Sethi Tour & Travels</span>?</h3>
            <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">Experience the difference with our premium travel services</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-8">
            <Button 
              size="lg"
              className="bg-secondary hover:bg-orange-600 text-white px-8"
              asChild
            >
              <a href="https://api.whatsapp.com/send?phone=919772021780&text=नमस्ते! मुझे आपकी सभी सर्विसेज के बारे में जानकारी चाहिए।">
                Get Complete Service Details
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}