import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, Camera } from "lucide-react";

export default function DestinationHighlights() {
  const destinations = [
    {
      name: "Jaipur - The Pink City",
      duration: "1-2 Days",
      rating: "4.8",
      image: "/attached_assets/steptodown.com493365_1752606412100.jpg",
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
      image: "/attached_assets/steptodown.com681563_1752606474297.jpg",
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
      image: "/attached_assets/steptodown.com488820_1752606544987.jpg",
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
      image: "/attached_assets/steptodown.com165350_1752606632111.jpg",
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
      image: "/attached_assets/steptodown.com859665_1752606684788.jpg",
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
      image: "/attached_assets/steptodown.com130446_1752606745142.jpg",
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
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-pink-800 bg-clip-text mb-6 tracking-wide" 
                style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}>
              Popular Rajasthan Destinations
            </h2>
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 rounded-lg blur opacity-20 animate-pulse"></div>
          </div>
          <div className="relative">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto px-4 leading-relaxed font-medium" 
               style={{ fontFamily: "'Crimson Text', serif" }}>
              Discover the magnificent cities of Rajasthan, each with its unique character, history, and attractions. 
              From royal palaces to desert adventures, create memories that last a lifetime.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group border-2 border-pink-100 hover:border-pink-300">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-1 sm:gap-2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center shadow-lg">
                    <Clock className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                    {destination.duration}
                  </span>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center shadow-lg">
                    <Star className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                    {destination.rating}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6 bg-gradient-to-br from-white to-pink-50/30">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300" 
                    style={{ fontFamily: "'Cinzel', serif" }}>
                  {destination.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{destination.description}</p>
                
                <div className="mb-3 sm:mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                    <Camera className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Must Visit Places:
                  </h4>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                    {destination.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-center">
                        <MapPin className="h-2 w-2 sm:h-3 sm:w-3 mr-2 text-primary flex-shrink-0" />
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
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <a href={`https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20visit%20${encodeURIComponent(destination.name)}`}>
                    Plan Your Trip
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-white">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Custom Rajasthan Tours</h3>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto">
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