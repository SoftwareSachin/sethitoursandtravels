import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Camera } from "lucide-react";

export default function DestinationHighlights() {
  const destinations = [
    {
      name: "Jaipur - The Pink City",
      duration: "1-2 Days",
      rating: "4.8",
      image: "https://pixabay.com/get/g4ca2d92d039cd8ce2cdb3cec3e40668a48a85841a1980423f41ed651234386526f848e78dc031205834a014952f9b10bdf165c2311db3a5a85fd85cb394d59ed_1280.jpg",
      highlights: [
        "Hawa Mahal - Palace of Winds",
        "City Palace Complex",
        "Amber Fort & Palace",
        "Jantar Mantar Observatory",
        "Local Markets & Shopping"
      ],
      description: "Explore the royal heritage of Rajasthan's capital city. From magnificent forts to bustling bazaars, Jaipur offers a perfect blend of history and modernity."
    },
    {
      name: "Udaipur - City of Lakes",
      duration: "2-3 Days", 
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      highlights: [
        "City Palace overlooking Lake Pichola",
        "Jagdish Temple",
        "Saheliyon Ki Bari Gardens",
        "Boat Ride on Lake Pichola",
        "Bagore Ki Haveli Cultural Show"
      ],
      description: "The most romantic city in India, known for its stunning lakes, magnificent palaces, and rich cultural heritage. Perfect for honeymoons and family trips."
    },
    {
      name: "Jodhpur - The Blue City",
      duration: "1-2 Days",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      highlights: [
        "Mehrangarh Fort",
        "Jaswant Thada",
        "Clock Tower Market",
        "Blue City Walking Tour",
        "Umaid Bhawan Palace"
      ],
      description: "Famous for its blue-painted houses and the mighty Mehrangarh Fort. Experience the royal grandeur and vibrant culture of the Marwar region."
    },
    {
      name: "Jaisalmer - The Golden City",
      duration: "2-3 Days",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      highlights: [
        "Jaisalmer Fort (Living Fort)",
        "Patwon Ki Haveli",
        "Sam Sand Dunes",
        "Desert Safari & Camel Ride",
        "Cultural Evening in Desert"
      ],
      description: "The golden city rising from the Thar Desert. Experience desert life, magnificent havelis, and unforgettable sunsets in the sand dunes."
    },
    {
      name: "Pushkar - Holy City",
      duration: "1 Day",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      highlights: [
        "Brahma Temple",
        "Pushkar Lake",
        "Local Markets",
        "Savitri Temple Trek",
        "Camel Fair (Seasonal)"
      ],
      description: "Sacred pilgrimage site with the world's only Brahma temple. Experience spiritual tranquility and vibrant local culture around the holy lake."
    },
    {
      name: "Mount Abu - Hill Station",
      duration: "2 Days",
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      highlights: [
        "Dilwara Jain Temples",
        "Nakki Lake",
        "Guru Shikhar Peak",
        "Sunset Point",
        "Mount Abu Wildlife Sanctuary"
      ],
      description: "Rajasthan's only hill station offering cool weather and lush greenery. Perfect escape from desert heat with stunning marble temples."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Rajasthan Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the magnificent cities of Rajasthan, each with its unique character, history, and attractions. 
            From royal palaces to desert adventures, create memories that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {destination.duration}
                  </span>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    {destination.rating}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{destination.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Camera className="h-4 w-4 mr-2" />
                    Must Visit Places:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {destination.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <MapPin className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                    {destination.highlights.length > 3 && (
                      <li className="text-primary text-xs">
                        +{destination.highlights.length - 3} more attractions
                      </li>
                    )}
                  </ul>
                </div>
                
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-blue-700 text-white group-hover:bg-secondary transition-colors"
                >
                  <a href={`https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20visit%20${encodeURIComponent(destination.name)}`}>
                    Plan Your Trip
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Custom Rajasthan Tours</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Want to visit multiple cities? We create customized itineraries combining your favorite destinations 
              with comfortable transportation and expert local guides.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20a%20custom%20Rajasthan%20tour%20package">
                Create Custom Tour
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}