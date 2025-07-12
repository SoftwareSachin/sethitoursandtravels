import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  Star, 
  Phone, 
  Users, 
  Camera,
  Castle,
  Building2,
  Mountain,
  Palmtree,
  Crown,
  Eye,
  Telescope,
  Waves,
  ShoppingBag,
  Car,
  Shield
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';
import WhatsAppButton from '@/components/whatsapp-button';
import Footer from '@/components/footer';

// Import city images
import jaipurCityImage from '@assets/image_1752338074515.png';
import hawamahalImage from '@assets/image_1752338428906.png';
import cityPalaceImage from '@assets/image_1752338463592.png';
import amberFortImage from '@assets/image_1752338490127.png';
import jalMahalImage from '@assets/image_1752338516875.png';
import jantarMantarImage from '@assets/image_1752338545455.png';

export default function JaipurCityTour() {
  const { toast } = useToast();
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');

  const attractions = [
    {
      name: "Amber Fort",
      description: "Begin your journey with the majestic Amber Fort, located on a hill overlooking Maota Lake. This UNESCO World Heritage site is a stunning example of Rajput architecture and offers spectacular views of the surrounding countryside.",
      image: amberFortImage,
      icon: <Castle className="w-6 h-6" />,
      highlights: ["UNESCO World Heritage Site", "Rajput Architecture", "Spectacular Views", "Maota Lake"]
    },
    {
      name: "Hawa Mahal (Palace of Winds)",
      description: "Visit the iconic Hawa Mahal, a pink sandstone palace with intricate latticework. Known for its unique design, it was built so royal women could observe the bustling street life without being seen.",
      image: hawamahalImage,
      icon: <Eye className="w-6 h-6" />,
      highlights: ["Pink Sandstone Palace", "Intricate Latticework", "Unique Design", "Royal Heritage"]
    },
    {
      name: "City Palace",
      description: "The City Palace is a beautiful blend of Mughal and Rajasthani architecture. The complex houses museums, courtyards, and royal residences, offering a glimpse into the opulence of Jaipur's royal family.",
      image: cityPalaceImage,
      icon: <Crown className="w-6 h-6" />,
      highlights: ["Mughal & Rajasthani Architecture", "Museums & Courtyards", "Royal Residences", "Royal Opulence"]
    },
    {
      name: "Jantar Mantar",
      description: "Explore the Jantar Mantar, a UNESCO World Heritage site and one of the largest astronomical observatories in the world. It features massive instruments used for tracking celestial bodies and time.",
      image: jantarMantarImage,
      icon: <Telescope className="w-6 h-6" />,
      highlights: ["UNESCO World Heritage Site", "Astronomical Observatory", "Massive Instruments", "Celestial Tracking"]
    },
    {
      name: "Jal Mahal (Water Palace)",
      description: "Take in the beauty of the Jal Mahal, a palace located in the middle of Man Sagar Lake. Though visitors can't enter the palace, it's a popular spot for photography and evening strolls.",
      image: jalMahalImage,
      icon: <Waves className="w-6 h-6" />,
      highlights: ["Man Sagar Lake", "Photography Spot", "Evening Strolls", "Architectural Beauty"]
    },
    {
      name: "Albert Hall Museum",
      description: "Delve into Jaipur's rich history and culture at the Albert Hall Museum, which houses an impressive collection of artifacts, paintings, and sculptures.",
      image: jaipurCityImage,
      icon: <Building2 className="w-6 h-6" />,
      highlights: ["Rich History", "Cultural Artifacts", "Paintings & Sculptures", "Impressive Collection"]
    }
  ];

  const vehiclePricing = [
    {
      type: "Sedan (Dzire, Etios)",
      price: "₹2,500",
      extraKm: "₹12/km",
      extraHour: "₹200/hour",
      capacity: "4 Passengers",
      image: "/api/placeholder/200/120"
    },
    {
      type: "SUV (Ertiga, Xylo)",
      price: "₹3,200",
      extraKm: "₹16/km",
      extraHour: "₹300/hour",
      capacity: "6-7 Passengers",
      image: "/api/placeholder/200/120"
    },
    {
      type: "Innova Crysta",
      price: "₹4,000",
      extraKm: "₹18/km",
      extraHour: "₹350/hour",
      capacity: "7-8 Passengers",
      image: "/api/placeholder/200/120"
    }
  ];

  const handleBooking = (vehicleType: string) => {
    const message = `नमस्कार सेठी टूर एंड ट्रेवल्स! मैं जयपुर सिटी टूर के लिए ${vehicleType} बुक करना चाहता हूँ। कृपया विस्तृत जानकारी भेजें।`;
    const whatsappUrl = `https://wa.me/917727021780?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "बुकिंग अनुरोध भेजा गया",
      description: `आपका ${vehicleType} का बुकिंग अनुरोध WhatsApp पर भेज दिया गया है।`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${jaipurCityImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/60 to-pink-900/60"></div>
        <div className="relative z-10 container mx-auto px-4 py-32 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                Discover the Pink City
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Jaipur City Tour with Sethi Tour & Travels
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Experience the royal heritage of Jaipur with our comprehensive city tour. 
              From magnificent palaces to vibrant markets, discover the authentic charm of Rajasthan's capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Car className="mr-2 h-5 w-5" />
                Book Your Tour
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('attractions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Explore Attractions
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Highlights */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Why Choose Sethi Tour & Travels?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience Jaipur with reliable service, comfortable vehicles, and experienced drivers who know the Pink City inside out.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Safe & Reliable</h3>
              <p className="text-gray-600">Well-maintained vehicles with experienced drivers</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Timing</h3>
              <p className="text-gray-600">8-hour tour with customizable itinerary</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Knowledgeable drivers with local expertise</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Value</h3>
              <p className="text-gray-600">Competitive pricing with all-inclusive packages</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attractions Section */}
      <div id="attractions" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Key Attractions in Jaipur City Tour
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the magnificent heritage sites and cultural treasures that make Jaipur the Pink City of India.
            </p>
          </div>

          <div className="grid gap-8">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`relative h-64 md:h-80 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'crisp-edges' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                        {attraction.icon}
                      </div>
                    </div>
                  </div>
                  <div className={`p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                      {attraction.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {attraction.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {attraction.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Attractions */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">More Attractions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Birla Mandir</h3>
              <p className="text-gray-600">Beautiful white marble temple dedicated to Lord Vishnu and Goddess Laxmi</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jaipur Markets</h3>
              <p className="text-gray-600">Shop for traditional jewelry, textiles, and handicrafts in vibrant bazaars</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Photo Opportunities</h3>
              <p className="text-gray-600">Capture stunning photos at iconic locations throughout the Pink City</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Jaipur City Tour Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of comfortable vehicles for your 8-hour/80km Jaipur city tour experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {vehiclePricing.map((vehicle, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-2">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Car className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{vehicle.type}</CardTitle>
                  <p className="text-gray-600">{vehicle.capacity}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-4">{vehicle.price}</div>
                  <div className="text-sm text-gray-600 mb-4">8 Hours / 80 KM</div>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span>Extra KM:</span>
                      <span className="font-semibold">{vehicle.extraKm}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Extra Hour:</span>
                      <span className="font-semibold">{vehicle.extraHour}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-semibold py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
                    onClick={() => handleBooking(vehicle.type)}
                  >
                    <FaWhatsapp className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-green-800">Inclusions</h3>
              <ul className="space-y-2 text-green-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Air-conditioned vehicle
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Professional driver
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Fuel, tolls, and parking fees
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Pickup and drop-off within Jaipur city limits
                </li>
              </ul>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <h3 className="text-2xl font-bold mb-4 text-red-800">Exclusions</h3>
              <ul className="space-y-2 text-red-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Monument entry fees
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Meals and personal expenses
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Extra km or hours beyond the package
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Guide services (driver provides basic information)
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-r from-orange-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore the Pink City?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your Jaipur City Tour with Sethi Tour & Travels for an unforgettable journey through Rajasthan's royal heritage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917727021780?text=नमस्कार%20सेठी%20टूर%20एंड%20ट्रेवल्स!%20मैं%20जयपुर%20सिटी%20टूर%20के%20बारे%20में%20जानकारी%20चाहता%20हूँ।"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <FaWhatsapp className="mr-2 h-5 w-5" />
              WhatsApp: +91 77270 21780
            </a>
            <a
              href="tel:+919772021780"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 97720 21780
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-white/90">
              Contact: <span className="font-semibold">Kuldeep Choudhary</span>
            </p>
            <p className="text-white/90">
              Email: sethitourstravels8888@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <WhatsAppButton />
        <a
          href="tel:+919772021780"
          className="group flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
        >
          <Phone className="text-lg sm:text-2xl group-hover:scale-110 transition-transform duration-200" />
          <span className="ml-2 font-semibold hidden sm:group-hover:inline-block transition-all duration-200">
            Call Now
          </span>
        </a>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}