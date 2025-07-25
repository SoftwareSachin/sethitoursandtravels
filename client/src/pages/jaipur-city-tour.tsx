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
import Navigation from '@/components/navigation';
import { useCommunication } from '@/components/communication-utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

// Import city images
import jaipurCityImage from '@assets/image_1752338074515.png';
import hawamahalImage from '@assets/steptodown.com453852_1752616893437.jpg';
import heroImage from '@assets/steptodown.com917609_1752616667933.jpg';
import cityPalaceImage from '@assets/steptodown.com914321_1752616946393.jpg';
import amberFortImage from '@assets/steptodown.com208043_1752616840661.jpg';
import jalMahalImage from '@assets/steptodown.com609558_1752617060867.jpg';
import jantarMantarImage from '@assets/steptodown.com732208_1752617007114.jpg';
import albertHallImage from '@assets/steptodown.com674527_1752617120687.jpg';
import jaipurMarketImage from '@assets/steptodown.com189918_1752617316639.jpg';
import photoOpportunityImage from '@assets/steptodown.com756295_1752617365178.jpg';
import rajasthaniWelcomeImage from '@assets/image_1752342637765.png';
import dzireImage from '@assets/steptodown.com267953_1752609994574.jpg';
import ertigaImage from '@assets/steptodown.com288680_1752610052347.jpg';
import innovaImage from '@assets/image_1752328589553.png';
import birlaMandirImage from '@assets/steptodown.com824357_1752617410251.jpg';

export default function JaipurCityTour() {
  const { toast } = useToast();
  const { phone, whatsapp } = useCommunication();
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');
  const [isPhoneDialogOpen, setIsPhoneDialogOpen] = useState(false);

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
      image: albertHallImage,
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
      image: dzireImage
    },
    {
      type: "SUV (Ertiga, Xylo)",
      price: "₹3,200",
      extraKm: "₹16/km",
      extraHour: "₹300/hour",
      capacity: "6-7 Passengers",
      image: ertigaImage
    },
    {
      type: "Innova Crysta",
      price: "₹4,000",
      extraKm: "₹18/km",
      extraHour: "₹350/hour",
      capacity: "7-8 Passengers",
      image: innovaImage
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
      <Navigation />
      {/* Hero Section */}
      <div 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-24 sm:pt-28 lg:pt-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 text-center text-white">
          <div className="max-w-5xl mx-auto">
            {/* Rajasthani Welcome Image */}
            <div className="mb-8 flex justify-center">
              <img 
                src={rajasthaniWelcomeImage} 
                alt="Rajasthani Welcome" 
                className="w-48 h-auto md:w-56 object-contain drop-shadow-lg"
                style={{ 
                  imageRendering: 'auto',
                  filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
                }}
              />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-orange-300">
                Jaipur City Tour
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-orange-100">
              Experience the Royal Heritage of the Pink City
            </h2>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto text-gray-100">
              Discover the magnificent palaces, ancient forts, and vibrant culture of Jaipur with our expert-guided city tour. 
              From the iconic Hawa Mahal to the majestic Amber Fort, explore the treasures that make Jaipur the jewel of Rajasthan.
            </p>

            {/* Tour Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-orange-300">6+</div>
                <div className="text-sm text-gray-200">Major Attractions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-pink-300">8</div>
                <div className="text-sm text-gray-200">Hours Duration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-orange-300">100%</div>
                <div className="text-sm text-gray-200">Heritage Sites</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-pink-300">5★</div>
                <div className="text-sm text-gray-200">Customer Rating</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 border-2 border-white/20"
                onClick={() => whatsapp("नमस्कार! मुझे जयपुर सिटी टूर बुक करना है। कृपया विस्तृत जानकारी और दरें भेजें।", 'rajasthani')}
              >
                <Car className="mr-2 h-5 w-5" />
                Book Your Tour Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10"
                onClick={() => document.getElementById('attractions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Explore Attractions
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-300" />
                <span>+91 97720 21780</span>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4 text-green-400" />
                <span>Quick WhatsApp Booking</span>
              </div>
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
      <div id="attractions" className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Heritage Destinations
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
                Discover Jaipur's
              </span>
              <br />
              Royal Heritage
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Journey through centuries of royal grandeur, architectural marvels, and cultural treasures that define the Pink City's majestic legacy.
            </p>
          </div>

          <div className="space-y-12">
            {attractions.map((attraction, index) => (
              <Card key={index} className="group overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0">
                <div className={`grid lg:grid-cols-5 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative lg:col-span-3 h-80 lg:h-96 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      style={{ 
                        imageRendering: 'auto',
                        filter: 'contrast(1.1) brightness(1.05)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-500"></div>
                    
                    {/* Attraction Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        {attraction.icon}
                        <span className="text-sm font-semibold text-gray-800">Heritage Site</span>
                      </div>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-6 right-6">
                      <div className="flex items-center gap-1 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        <Star className="w-4 h-4 fill-current" />
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                          {attraction.name}
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-6"></div>
                      </div>

                      <p className="text-gray-600 leading-relaxed text-lg">
                        {attraction.description}
                      </p>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-800 text-lg">Experience Highlights:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {attraction.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <span className="text-gray-700 text-sm font-medium">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-4">
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg"
                          onClick={() => handleBooking('टूर बुकिंग')}
                        >
                          <Camera className="w-4 h-4 mr-2" />
                          Book This Tour
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-orange-300 text-orange-600 hover:bg-orange-50"
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          View Location
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>


        </div>
      </div>

      {/* Additional Attractions */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Camera className="w-4 h-4" />
              Cultural Experiences
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Complete Your Jaipur Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond the monuments, discover the vibrant culture, bustling markets, and perfect photo spots that make Jaipur unforgettable.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64">
                <img 
                  src={jaipurMarketImage} 
                  alt="Jaipur Markets" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ 
                    imageRendering: 'auto',
                    filter: 'contrast(1.1) brightness(1.05)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Shopping
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <ShoppingBag className="w-5 h-5 text-pink-500" />
                  <h3 className="text-xl font-bold text-gray-800">Jaipur Markets</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Explore vibrant bazaars filled with traditional jewelry, colorful textiles, handicrafts, and authentic Rajasthani souvenirs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-pink-50 text-pink-700 px-2 py-1 rounded-full">Johari Bazaar</span>
                  <span className="text-xs bg-pink-50 text-pink-700 px-2 py-1 rounded-full">Bapu Bazaar</span>
                  <span className="text-xs bg-pink-50 text-pink-700 px-2 py-1 rounded-full">Nehru Bazaar</span>
                </div>
                <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white">
                  Explore Markets
                </Button>
              </div>
            </Card>

            <Card className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64">
                <img 
                  src={photoOpportunityImage} 
                  alt="Photo Opportunities" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ 
                    imageRendering: 'auto',
                    filter: 'contrast(1.1) brightness(1.05)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Photography
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Camera className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl font-bold text-gray-800">Photo Opportunities</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Capture stunning photos at iconic locations, royal gardens, and architectural marvels throughout the Pink City.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Royal Gardens</span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Architecture</span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">Scenic Views</span>
                </div>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                  Best Photo Spots
                </Button>
              </div>
            </Card>

            <Card className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64">
                <img 
                  src={birlaMandirImage} 
                  alt="Birla Mandir" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ 
                    imageRendering: 'auto',
                    filter: 'contrast(1.1) brightness(1.05)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Temple
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-orange-500" />
                  <h3 className="text-xl font-bold text-gray-800">Birla Mandir</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Beautiful white marble temple dedicated to Lord Vishnu and Goddess Laxmi, offering spiritual tranquility and architectural beauty.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-full">White Marble</span>
                  <span className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-full">Spiritual</span>
                  <span className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-full">Architecture</span>
                </div>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Visit Temple
                </Button>
              </div>
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
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardHeader className="text-center pb-2">
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
          <h2 className="text-4xl font-bold mb-4">Book Your Jaipur Adventure</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact Sethi Tour & Travels today for an unforgettable journey through Rajasthan's royal heritage and majestic palaces.
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

      {/* Phone Popup Dialog */}
      <Dialog open={isPhoneDialogOpen} onOpenChange={setIsPhoneDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold text-orange-600">
              कॉल करें - Sethi Tour & Travels
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                तुरंत संपर्क करें
              </h3>
              <p className="text-gray-600 mb-4">
                जयपुर सिटी टूर की जानकारी और बुकिंग के लिए अभी कॉल करें
              </p>
            </div>
            
            <div className="space-y-3">
              <a
                href="tel:+919772021780"
                onClick={() => setIsPhoneDialogOpen(false)}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg hover:from-orange-100 hover:to-pink-100 transition-colors border border-orange-200"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">मुख्य नंबर</h4>
                  <p className="text-orange-600 font-bold">+91 97720 21780</p>
                  <p className="text-sm text-gray-600">कुलदीप चौधरी जी</p>
                </div>
                <div className="text-orange-600">
                  <span className="text-lg">→</span>
                </div>
              </a>
              
              <a
                href="tel:+917727021780"
                onClick={() => setIsPhoneDialogOpen(false)}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-colors border border-green-200"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">WhatsApp नंबर</h4>
                  <p className="text-green-600 font-bold">+91 77270 21780</p>
                  <p className="text-sm text-gray-600">चैट और कॉल दोनों</p>
                </div>
                <div className="text-green-600">
                  <span className="text-lg">→</span>
                </div>
              </a>
            </div>
            
            <div className="text-center pt-4 border-t">
              <p className="text-sm text-gray-600">
                <Clock className="w-4 h-4 inline mr-1" />
                24/7 सेवा उपलब्ध
              </p>
              <p className="text-xs text-gray-500 mt-1">
                तुरंत बुकिंग और जानकारी के लिए कॉल करें
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <WhatsAppButton />
        <Button
          className="group flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
          onClick={() => setIsPhoneDialogOpen(true)}
        >
          <Phone className="text-lg sm:text-2xl group-hover:scale-110 transition-transform duration-200" />
          <span className="ml-2 font-semibold hidden sm:group-hover:inline-block transition-all duration-200">
            Call Now
          </span>
        </Button>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}