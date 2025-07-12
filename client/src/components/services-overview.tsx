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

export default function ServicesOverview() {
  const services = [
    {
      icon: Car,
      title: "One-Way Taxi",
      description: "Comfortable one-way travel to your destination with professional drivers",
      features: ["Airport Transfers", "Intercity Travel", "Local Sightseeing", "Business Travel"],
      startingPrice: "₹8/km",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      whatsappText: "हाय! मुझे वन-वे टैक्सी चाहिए। कृपया रेट बताएं।"
    },
    {
      icon: RotateCcw,
      title: "Round-Trip Taxi",
      description: "Complete round-trip packages with waiting time and return journey included",
      features: ["Multi-day Tours", "Wedding Functions", "Corporate Events", "Family Trips"],
      startingPrice: "₹12/km",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
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
      image: "https://images.unsplash.com/photo-1599661046827-dacde645fe26?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      whatsappText: "खम्मा गणी सा! मुझे कस्टम टूर पैकेज बनवाना है।"
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
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From taxi services to complete tour packages, we provide comprehensive travel solutions 
            for your India journey with authentic experiences and professional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white/90 rounded-full p-2">
                    <IconComponent className="h-6 w-6 text-secondary" />
                  </div>
                  <Badge className="absolute top-4 right-4 bg-secondary text-white">
                    {service.startingPrice}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-secondary" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-secondary hover:bg-orange-600 text-white"
                    asChild
                  >
                    <a href={`https://api.whatsapp.com/send?phone=919772021780&text=${encodeURIComponent(service.whatsappText)}`}>
                      Book {service.title}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Sethi Tour & Travels?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
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