import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Clock, 
  Star, 
  Users, 
  Phone, 
  Mail, 
  MessageCircle,
  Crown,
  Camera,
  Mountain,
  Waves,
  Building2,
  Palmtree,
  ChevronRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import WhatsAppButton from '@/components/whatsapp-button';
import rajasthanImage1 from '@assets/image_1752337890653.png';
import rajasthanImage2 from '@assets/image_1752337943946.png';
import rajasthanImage3 from '@assets/image_1752337963821.png';

export default function RajasthanTour() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { toast } = useToast();

  const heroImages = [
    rajasthanImage1,
    rajasthanImage2,
    rajasthanImage3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Inquiry Sent!",
      description: "We'll contact you soon with tour details.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const destinations = [
    {
      name: "Jaipur – The Pink City",
      description: "Begin your journey in Jaipur, famous for its stunning palaces and forts. Explore the grand Amber Fort, the beautiful City Palace, and the iconic Hawa Mahal. Stroll through vibrant markets and enjoy the rich cultural heritage of Rajasthan's capital.",
      icon: <Crown className="w-6 h-6" />,
      highlights: ["Amber Fort", "City Palace", "Hawa Mahal", "Vibrant Markets"]
    },
    {
      name: "Udaipur – The City of Lakes",
      description: "Udaipur enchants with its romantic lakes and opulent palaces. Visit the majestic City Palace, take a serene boat ride on Lake Pichola, and soak in the beauty of Jag Mandir and Saheliyon ki Bari.",
      icon: <Waves className="w-6 h-6" />,
      highlights: ["City Palace", "Lake Pichola", "Jag Mandir", "Saheliyon ki Bari"]
    },
    {
      name: "Jodhpur – The Blue City",
      description: "Explore the magnificent Mehrangarh Fort, one of India's largest forts, and admire the blue hues of Jodhpur's old city. Visit the beautiful Umaid Bhawan Palace and enjoy the bustling life of Jodhpur's markets.",
      icon: <Building2 className="w-6 h-6" />,
      highlights: ["Mehrangarh Fort", "Umaid Bhawan Palace", "Blue City", "Local Markets"]
    },
    {
      name: "Jaisalmer – The Golden City",
      description: "Journey into the heart of the Thar Desert to the golden city of Jaisalmer. Visit the stunning Jaisalmer Fort, marvel at the intricate Patwon ki Haveli, and enjoy a camel ride over the shimmering Sam Sand Dunes.",
      icon: <Mountain className="w-6 h-6" />,
      highlights: ["Jaisalmer Fort", "Patwon ki Haveli", "Sam Sand Dunes", "Camel Ride"]
    },
    {
      name: "Pushkar & Ajmer",
      description: "Visit the holy city of Pushkar, home to the famous Brahma Temple and the sacred Pushkar Lake. In nearby Ajmer, offer your prayers at the revered Ajmer Sharif Dargah.",
      icon: <Palmtree className="w-6 h-6" />,
      highlights: ["Brahma Temple", "Pushkar Lake", "Ajmer Sharif Dargah", "Spiritual Sites"]
    }
  ];

  const packageHighlights = [
    "Rajasthan Tour Package 10 days",
    "Jaipur local sightseeing itinerary 1 day",
    "Flexible itineraries to match your pace and preferences",
    "Jaipur to Ajmer Pushkar itinerary 1 day",
    "Jaipur to Chittorgarh and Udaipur tour itinerary for 3 days 2 nights",
    "Jaipur to Khatu Shyam Ji and Salasar Balaji itinerary 1 day",
    "Jaipur to Ranthambore tour itinerary for 2 days 1 night",
    "Jaisalmer tour itinerary for 3 days 2 nights",
    "Rajasthan tour itinerary 7 days 6 nights",
    "Udaipur tour itinerary 4 days 3 nights"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Hero Section with Sliding Background */}
      <div className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Rajasthan destination ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
              Journey Through the Land of Kings
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto drop-shadow-md">
              Embark on an unforgettable adventure through Rajasthan, a land steeped in history, culture, and grandeur
            </p>
            <div className="flex justify-center items-center gap-8 text-sm md:text-base lg:text-lg bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mx-auto w-fit">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>5000+ Happy Travelers</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>10 Days Journey</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tour Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What to Expect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every fort, palace, and market tells a story of royalty and valor. Discover the most iconic cities of Rajasthan.
          </p>
        </div>

        {/* Destinations */}
        <div className="grid gap-8 md:gap-12">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/20 rounded-full">
                    {destination.icon}
                  </div>
                  <CardTitle className="text-2xl">{destination.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="text-lg mb-6 text-gray-700">
                  {destination.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Sethi Tour & Travels?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With Sethi Tour & Travels, your journey through Rajasthan is smooth, comfortable, and truly memorable. Our experienced drivers and well-maintained vehicles ensure a hassle-free experience, while our customized itineraries cater to your interests. From luxury stays to budget-friendly options, we offer packages that suit every traveler's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Guides</h3>
              <p className="text-gray-600">Professional drivers and local guides with years of experience</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customized Itineraries</h3>
              <p className="text-gray-600">Flexible packages tailored to your interests and preferences</p>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
              <p className="text-gray-600">Luxury stays to budget-friendly options for every traveler</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Package Highlights */}
      <div className="bg-gradient-to-br from-orange-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Package Highlights
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our carefully crafted itineraries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {packageHighlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <ChevronRight className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <span className="text-gray-700 capitalize">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Sethi Tour & Travels
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to embark on your Rajasthan adventure? Contact Kuldeep Choudhary for personalized tour packages and bookings across India and Rajasthan.
              </p>

              <div className="space-y-4">
                <a 
                  href="tel:+919772021780" 
                  className="flex items-center gap-4 hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Phone</h3>
                    <p className="text-gray-600 group-hover:text-orange-500 transition-colors">+91 97720 21780</p>
                  </div>
                </a>
                <a 
                  href="https://wa.me/917727021780?text=नमस्कार%20सेठी%20टूर%20एंड%20ट्रेवल्स%20में%20आपका%20स्वागत%20है।%20मैं%20राजस्थान%20टूर%20पैकेज%20के%20बारे%20में%20जानकारी%20चाहता%20हूँ।" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">WhatsApp</h3>
                    <p className="text-gray-600 group-hover:text-green-500 transition-colors">+91 77270 21780</p>
                  </div>
                </a>
                <a 
                  href="mailto:sethitourstravels8888@gmail.com?subject=Rajasthan%20Tour%20Package%20Inquiry&body=नमस्कार%20कुलदीप%20जी,%0A%0Aमैं%20राजस्थान%20टूर%20पैकेज%20के%20बारे%20में%20जानकारी%20चाहता%20हूँ।%20कृपया%20मुझे%20विस्तृत%20जानकारी%20भेजें।%0A%0Aधन्यवाद"
                  className="flex items-center gap-4 hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Email</h3>
                    <p className="text-gray-600 group-hover:text-blue-500 transition-colors">sethitourstravels8888@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">S-147, 4S New Loha Mandi Road<br />Machada, Jaipur-302013</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Contact Person</h3>
                    <p className="text-gray-600">Kuldeep Choudhary</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Get Tour Information</CardTitle>
                <CardDescription>
                  Send us your details and we'll get back to you with a customized itinerary
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your travel preferences, group size, and preferred dates..."
                      rows={4}
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1 bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700">
                      Send Inquiry
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => window.open('https://wa.me/917727021780?text=नमस्कार%20सेठी%20टूर%20एंड%20ट्रेवल्स%20में%20आपका%20स्वागत%20है।%20मैं%20राजस्थान%20टूर%20पैकेज%20के%20बारे%20में%20जानकारी%20चाहता%20हूँ।', '_blank')}
                      className="flex items-center gap-2 border-green-500 text-green-600 hover:bg-green-50"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
      
      {/* Floating Call Button */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
        <a
          href="tel:+919772021780"
          className="bg-orange-600 hover:bg-orange-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          aria-label="Call us"
        >
          <Phone className="text-lg sm:text-2xl group-hover:scale-110 transition-transform duration-200" />
          <span className="ml-2 font-semibold hidden sm:group-hover:inline-block transition-all duration-200">
            Call Now
          </span>
        </a>
      </div>
    </div>
  );
}