import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, Calendar } from "lucide-react";

export default function PricingPackages() {
  const packages = [
    {
      name: "Golden Triangle Tour",
      duration: "5 Days / 4 Nights",
      destinations: ["Delhi", "Agra", "Jaipur"],
      price: "₹12,999",
      originalPrice: "₹15,999",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "AC Transportation",
        "3-Star Hotel Accommodation",
        "Daily Breakfast",
        "Professional Guide",
        "All Entry Tickets",
        "Airport/Railway Transfer"
      ],
      popular: true
    },
    {
      name: "Rajasthan Royal Tour",
      duration: "8 Days / 7 Nights",
      destinations: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
      price: "₹24,999",
      originalPrice: "₹29,999",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "AC Transportation",
        "4-Star Hotel Accommodation",
        "All Meals Included",
        "Desert Safari",
        "Cultural Programs",
        "Photography Assistance"
      ],
      popular: false
    },
    {
      name: "Weekend Getaway",
      duration: "2 Days / 1 Night",
      destinations: ["Jaipur City Tour"],
      price: "₹4,999",
      originalPrice: "₹6,999",
      rating: "4.7",
      image: "https://pixabay.com/get/g4ca2d92d039cd8ce2cdb3cec3e40668a48a85841a1980423f41ed651234386526f848e78dc031205834a014952f9b10bdf165c2311db3a5a85fd85cb394d59ed_1280.jpg",
      features: [
        "AC Car for 2 Days",
        "3-Star Hotel Stay",
        "Breakfast Included",
        "Local Guide",
        "Major Attractions",
        "Shopping Assistance"
      ],
      popular: false
    },
    {
      name: "Luxury Rajasthan",
      duration: "10 Days / 9 Nights",
      destinations: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar"],
      price: "₹49,999",
      originalPrice: "₹59,999",
      rating: "5.0",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "Luxury Transportation",
        "5-Star Hotel & Palaces",
        "Premium Dining",
        "Private Guide",
        "Helicopter Ride",
        "Spa & Wellness"
      ],
      popular: false
    },
    {
      name: "Budget Rajasthan",
      duration: "6 Days / 5 Nights",
      destinations: ["Jaipur", "Jodhpur", "Udaipur"],
      price: "₹9,999",
      originalPrice: "₹12,999",
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "AC Transportation",
        "Budget Hotel Stay",
        "Breakfast Included",
        "Group Guide",
        "Entry Tickets",
        "Basic Amenities"
      ],
      popular: false
    },
    {
      name: "Honeymoon Special",
      duration: "7 Days / 6 Nights",
      destinations: ["Udaipur", "Jaisalmer", "Mount Abu"],
      price: "₹34,999",
      originalPrice: "₹39,999",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      features: [
        "Luxury AC Transportation",
        "Romantic Hotel Stays",
        "Candlelight Dinners",
        "Couple Photography",
        "Desert Camping",
        "Special Decorations"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Tour Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted tour packages designed to give you the best Rajasthan experience. 
            All packages include accommodation, transportation, and guided tours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group relative ${
              pkg.popular ? 'ring-2 ring-primary' : ''
            }`}>
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </span>
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {pkg.duration}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Users className="h-4 w-4 mr-1" />
                    Destinations: {pkg.destinations.join(", ")}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                    <span className="text-sm text-gray-600 ml-2">per person</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Package Includes:</h4>
                  <ul className="space-y-1">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Check className="h-3 w-3 text-emerald-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  asChild
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-secondary hover:bg-orange-600' 
                      : 'bg-primary hover:bg-blue-700'
                  } text-white`}
                >
                  <a href={`https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20book%20${encodeURIComponent(pkg.name)}%20package`}>
                    Book This Package
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-gray-600 mb-6">
              We create custom tour packages tailored to your preferences, budget, and schedule. 
              Tell us your requirements and we'll design the perfect Rajasthan experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-blue-700 text-white"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20a%20custom%20tour%20package">
                  Request Custom Package
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a href="tel:9772021780">
                  Call for Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}