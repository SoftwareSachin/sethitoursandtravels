import { useState } from 'react';
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

export default function RajasthanTour() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

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
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Journey Through the Land of Kings
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Embark on an unforgettable adventure through Rajasthan, a land steeped in history, culture, and grandeur
            </p>
            <div className="flex justify-center items-center gap-8 text-sm md:text-base">
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
                Ready to embark on your Rajasthan adventure? Get in touch with us for personalized tour packages and bookings.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 9829155015 | +91 9829155016</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                    <p className="text-gray-600">+91 9829155015</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@sethitourandtravels.com</p>
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
                  <Button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}