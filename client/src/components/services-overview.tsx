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
  Users,
  Crown,
  Star,
  Sparkles,
  Award,
  Heart
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
      image: "/attached_assets/steptodown.com521500_1752610333642.jpg",
      whatsappText: "हाय! मुझे वन-वे टैक्सी चाहिए। कृपया रेट बताएं।"
    },
    {
      icon: RotateCcw,
      title: "Round-Trip Taxi",
      description: "Complete round-trip packages with waiting time and return journey included",
      features: ["Multi-day Tours", "Wedding Functions", "Corporate Events", "Family Trips"],
      startingPrice: "₹12/km",
      image: "/attached_assets/steptodown.com146599_1752610406505.jpg",
      whatsappText: "नमस्ते! मुझे राउंड ट्रिप टैक्सी बुक करनी है।"
    },
    {
      icon: MapPin,
      title: "All India / Rajasthan Tours",
      description: "Comprehensive tour packages covering India's most beautiful destinations",
      features: ["Golden Triangle", "Desert Safari", "Wildlife Tours", "Pilgrimage Tours"],
      startingPrice: "₹15,000",
      image: "/attached_assets/steptodown.com537953_1752610490492.jpg",
      whatsappText: "राम राम सा! मुझे राजस्थान टूर पैकेज चाहिए।"
    },
    {
      icon: Hotel,
      title: "Hotel & Resort Packages",
      description: "Complete stay packages with accommodation and transport included",
      features: ["Heritage Hotels", "Luxury Resorts", "Budget Stays", "Group Bookings"],
      startingPrice: "₹3,500/night",
      image: "/attached_assets/steptodown.com339408_1752610568470.jpg",
      whatsappText: "नमस्ते! मुझे होटल के साथ टूर पैकेज चाहिए।"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Special tours designed for photography enthusiasts and professionals",
      features: ["Sunrise/Sunset Tours", "Heritage Photography", "Wildlife Photography", "Cultural Events"],
      startingPrice: "₹8,500",
      image: "/attached_assets/steptodown.com483413_1752610629859.jpg",
      whatsappText: "हैलो! मुझे फोटोग्राफी टूर बुक करना है।"
    },
    {
      icon: Settings,
      title: "Custom Tour Packages",
      description: "Personalized tours designed according to your preferences and budget",
      features: ["Flexible Itinerary", "Choice of Hotels", "Custom Activities", "Group Discounts"],
      startingPrice: "On Request",
      image: "/attached_assets/steptodown.com949221_1752610677290.jpg",
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
    <section id="services" className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 via-red-50 via-yellow-50 to-pink-50 relative overflow-hidden">
      {/* Multi-state Traditional Pattern Background */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, #f97316 6px, transparent 6px),
            radial-gradient(circle at 90% 80%, #dc2626 6px, transparent 6px),
            radial-gradient(circle at 30% 60%, #eab308 4px, transparent 4px),
            radial-gradient(circle at 70% 40%, #ec4899 4px, transparent 4px),
            radial-gradient(circle at 50% 10%, #8b5cf6 4px, transparent 4px),
            radial-gradient(circle at 20% 90%, #06b6d4 4px, transparent 4px)
          `,
          backgroundSize: '180px 180px, 220px 220px, 140px 140px, 160px 160px, 200px 200px, 170px 170px'
        }}></div>
      </div>

      {/* Traditional Indian state borders */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-orange-600 via-red-600 via-yellow-600 via-green-600 via-blue-600 to-purple-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-purple-600 via-blue-600 via-green-600 via-yellow-600 via-red-600 to-orange-600"></div>
      
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16 md:mb-20">
          {/* Royal Indian Crown with State Gems */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-400">
                <Crown className="h-14 w-14 text-yellow-100" />
              </div>
              {/* State representation gems around crown */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 rounded-full border-2 border-white shadow-lg" title="Rajasthan"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-blue-500 rounded-full border-2 border-white shadow-lg" title="Maharashtra"></div>
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-green-500 rounded-full border-2 border-white shadow-lg" title="Kerala"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-purple-500 rounded-full border-2 border-white shadow-lg" title="Punjab"></div>
              <div className="absolute top-0 -left-6 w-6 h-6 bg-yellow-500 rounded-full border-2 border-white shadow-lg" title="Gujarat"></div>
              <div className="absolute top-0 -right-6 w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg" title="Tamil Nadu"></div>
              <div className="absolute bottom-0 -left-6 w-6 h-6 bg-pink-500 rounded-full border-2 border-white shadow-lg" title="West Bengal"></div>
              <div className="absolute bottom-0 -right-6 w-6 h-6 bg-indigo-500 rounded-full border-2 border-white shadow-lg" title="Uttar Pradesh"></div>
            </div>
          </div>

          {/* Multi-state cultural badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white px-10 py-4 rounded-full text-sm font-bold mb-10 shadow-lg border-2 border-yellow-400">
            <Sparkles className="h-5 w-5 mr-2 animate-pulse" />
            <span>भारत की संस्कृति और परंपरा</span>
            <Sparkles className="h-5 w-5 ml-2 animate-pulse" />
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-red-600 via-yellow-600 to-pink-600 bg-clip-text mb-10" style={{ fontFamily: "'Cinzel', serif" }}>
            Our Royal Travel Experiences
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium mb-8" style={{ fontFamily: "'Crimson Text', serif" }}>
            From the ancient palaces of Rajasthan to the golden deserts of Thar, from Kerala's serene backwaters to Punjab's vibrant fields, from Maharashtra's heritage forts to Tamil Nadu's sacred temples - embark on extraordinary journeys across India's most magnificent destinations. Experience the royal heritage, vibrant culture, and timeless beauty with our expertly crafted travel services.
          </p>
          
          <p className="text-lg text-orange-600 font-bold mb-8" style={{ fontFamily: "'Crimson Text', serif" }}>
            "वसुधैव कुटुम्बकम् - The World is One Family"
          </p>

          {/* Traditional state symbols */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full shadow-md"></div>
              <span className="text-sm text-gray-600 font-medium">Rajasthan</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full shadow-md"></div>
              <span className="text-sm text-gray-600 font-medium">Kerala</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full shadow-md"></div>
              <span className="text-sm text-gray-600 font-medium">Maharashtra</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-500 rounded-full shadow-md"></div>
              <span className="text-sm text-gray-600 font-medium">Punjab</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-md"></div>
              <span className="text-sm text-gray-600 font-medium">Gujarat</span>
            </div>
          </div>

          {/* Decorative lotus and traditional elements */}
          <div className="flex justify-center items-center space-x-8">
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <div className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-orange-500 shadow-lg"></div>
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full border-2 border-yellow-400 shadow-lg flex items-center justify-center">
              <Heart className="h-4 w-4 text-yellow-100" />
            </div>
            <div className="w-6 h-6 bg-yellow-400 rounded-full border-2 border-orange-500 shadow-lg"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 md:gap-10 mb-12 xs:mb-16 sm:mb-20 md:mb-24">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const stateColors = [
              'from-orange-600 to-red-600', // Rajasthan
              'from-green-600 to-teal-600', // Kerala
              'from-blue-600 to-indigo-600', // Maharashtra
              'from-purple-600 to-pink-600', // Punjab
              'from-yellow-600 to-orange-600', // Gujarat
              'from-red-600 to-pink-600' // Tamil Nadu
            ];
            const stateColor = stateColors[index % stateColors.length];
            
            return (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-4 border-yellow-400/50 hover:border-yellow-400/80 rounded-3xl transform hover:-translate-y-3 relative">
                {/* Royal corner decorations */}
                <div className="absolute top-0 left-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 transform rotate-45 translate-x-[-50%] translate-y-[-50%] z-20 border-2 border-yellow-400"></div>
                <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 transform rotate-45 translate-x-[50%] translate-y-[-50%] z-20 border-2 border-yellow-400"></div>
                
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                  
                  {/* Traditional state-themed badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`bg-gradient-to-r ${stateColor} backdrop-blur-sm rounded-full p-3 shadow-lg border-2 border-yellow-400`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Royal rating with traditional elements */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full px-3 py-1 flex items-center gap-1 shadow-lg border border-white">
                    <Star className="h-3 w-3 text-gray-900 fill-current" />
                    <span className="text-xs font-bold text-gray-900">5.0</span>
                  </div>
                  
                  {/* Traditional "Om" symbol or cultural indicator */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-400">
                    <Sparkles className="h-4 w-4 text-yellow-400" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className={`bg-gradient-to-r ${stateColor} backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-yellow-400`}>
                      From {service.startingPrice}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 relative">
                  {/* Traditional border pattern */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 via-yellow-500 to-pink-500"></div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors" style={{ fontFamily: "'Cinzel', serif" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg px-3 py-2 hover:from-orange-100 hover:to-red-100 transition-colors border border-orange-200">
                        <div className={`w-2 h-2 bg-gradient-to-r ${stateColor} rounded-full`}></div>
                        <span className="text-xs text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full bg-gradient-to-r ${stateColor} hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-yellow-400 hover:border-yellow-500`}
                    asChild
                  >
                    <a href={`https://api.whatsapp.com/send?phone=919772021780&text=${encodeURIComponent(service.whatsappText)}`}>
                      <Crown className="mr-2 h-5 w-5" />
                      Book Royal Experience
                    </a>
                  </Button>
                </CardContent>
                
                {/* Royal bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-600 via-red-600 via-yellow-600 to-pink-600 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden border-4 border-yellow-400">
          {/* Royal traditional patterns */}
          <div className="absolute inset-0 opacity-8">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #fbbf24 10px, transparent 10px),
                radial-gradient(circle at 75% 75%, #fbbf24 8px, transparent 8px),
                radial-gradient(circle at 50% 50%, #fbbf24 6px, transparent 6px)
              `,
              backgroundSize: '100px 100px, 120px 120px, 80px 80px'
            }}></div>
          </div>
          
          {/* Royal decorative corners with state symbols */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-yellow-400 transform rotate-45 translate-x-[-50%] translate-y-[-50%] border-4 border-white shadow-lg"></div>
          <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 transform rotate-45 translate-x-[50%] translate-y-[-50%] border-4 border-white shadow-lg"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-yellow-400 transform rotate-45 translate-x-[-50%] translate-y-[50%] border-4 border-white shadow-lg"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-yellow-400 transform rotate-45 translate-x-[50%] translate-y-[50%] border-4 border-white shadow-lg"></div>
          
          <div className="relative z-10">
            {/* Royal badge with multi-state text */}
            <div className="inline-flex items-center gap-2 mb-6 px-8 py-3 bg-yellow-400/20 backdrop-blur-sm rounded-full border-2 border-yellow-400 mx-auto">
              <Crown className="h-6 w-6 text-yellow-400 animate-pulse" />
              <span className="text-yellow-200 font-bold text-sm uppercase tracking-wider">राजसी सेवा उत्कृष्टता</span>
              <Crown className="h-6 w-6 text-yellow-400 animate-pulse" />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
              Why Choose <span className="text-yellow-400">Sethi Tour & Travels</span>?
            </h3>
            <p className="text-center text-yellow-100 mb-12 max-w-3xl mx-auto text-xl leading-relaxed" style={{ fontFamily: "'Crimson Text', serif" }}>
              Experience the difference with our premium travel services that blend traditional Indian hospitality with modern luxury
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                const stateAccents = [
                  'from-orange-400 to-red-400', // Rajasthan
                  'from-green-400 to-teal-400', // Kerala  
                  'from-blue-400 to-indigo-400' // Maharashtra
                ];
                const accentColor = stateAccents[index % stateAccents.length];
                
                return (
                  <div key={index} className="text-center group">
                    <div className={`w-24 h-24 bg-gradient-to-r ${accentColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl border-4 border-white`}>
                      <IconComponent className="h-12 w-12 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-yellow-100" style={{ fontFamily: "'Cinzel', serif" }}>
                      {item.title}
                    </h4>
                    <p className="text-yellow-200 leading-relaxed text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t-2 border-yellow-400/50">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white"
              asChild
            >
              <a href="https://api.whatsapp.com/send?phone=919772021780&text=नमस्ते! मुझे आपकी सभी सर्विसेज के बारे में जानकारी चाहिए।">
                <Award className="mr-3 h-6 w-6" />
                Get Complete Royal Service Details
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}