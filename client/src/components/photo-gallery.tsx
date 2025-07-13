import { Expand, Camera, MapPin, Star, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PhotoGallery() {
  const galleryImages = [
    {
      src: "/attached_assets/image_1752354760799.png",
      alt: "Himalayan Mountain Breakfast - Scenic Valley View with Traditional Indian Cuisine",
      category: "Nature & Culture"
    },
    {
      src: "/attached_assets/image_1752354769126.png",
      alt: "Varanasi Ghats - Sacred Ganges River with Traditional Boats and Ancient Temples",
      category: "Spiritual India"
    },
    {
      src: "/attached_assets/image_1752354774776.png",
      alt: "Jodhpur Blue City - Traditional Rajasthani Woman in Heritage Architecture",
      category: "Cultural Heritage"
    },
    {
      src: "/attached_assets/image_1752354781087.png",
      alt: "Spiritual Meditation - Sadhu at Sunset in Traditional India",
      category: "Spirituality"
    },
    {
      src: "/attached_assets/image_1752354787593.png",
      alt: "South Indian Temple - Magnificent Colorful Gopuram Architecture",
      category: "Temple Architecture"
    },
    {
      src: "/attached_assets/image_1752354794992.png",
      alt: "Thrissur Pooram Festival - Grand Cultural Celebration with Thousands of Devotees",
      category: "Festivals & Culture"
    },
    {
      src: "/attached_assets/image_1752354799864.png",
      alt: "Adalaj Stepwell - Ancient Architectural Marvel with Intricate Stone Carvings",
      category: "Historical Architecture"
    },
    {
      src: "/attached_assets/image_1752354804609.png",
      alt: "Murudeshwar Temple - Majestic Shiva Statue at Sunset with Traditional Boats",
      category: "Coastal Temples"
    },
    {
      src: "/attached_assets/image_1752354809832.png",
      alt: "Western Ghats Train Journey - Scenic Mountain Railway through Lush Forests",
      category: "Adventure Travel"
    },
    {
      src: "/attached_assets/image_1752354817723.png",
      alt: "Rajasthan Fort Romance - Couple at Historic Watchtower with Valley Views",
      category: "Heritage Romance"
    },
    {
      src: "/attached_assets/image_1752354830755.png",
      alt: "Adiyogi Statue - Colossal Shiva Sculpture in Natural Landscape",
      category: "Modern Monuments"
    },
    {
      src: "/attached_assets/image_1752354841317.png",
      alt: "Theyyam Performance - Traditional Kerala Fire Dance Cultural Ritual",
      category: "Folk Traditions"
    }
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="h-4 w-4 mr-2" />
            Authentic India Photography
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Incredible India Photo Gallery
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
            Experience the authentic beauty of India through our exclusive photography collection. From the spiritual ghats of Varanasi 
            to the majestic temples of South India, from Himalayan serenity to Rajasthani culture - witness the incredible diversity 
            that awaits you on our genuine India tours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              <span className="text-sm font-medium">Premium Photography</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <MapPin className="h-4 w-4 text-red-500 mr-2" />
              <span className="text-sm font-medium">Authentic Locations</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <Heart className="h-4 w-4 text-pink-500 mr-2" />
              <span className="text-sm font-medium">Cultural Experiences</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {image.category}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="bg-white/20 hover:bg-white/30 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="bg-white/20 hover:bg-white/30 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    <Expand className="h-5 w-5 mr-2" />
                    View Full Size
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {image.alt}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    India
                  </span>
                  <span className="flex items-center">
                    <Star className="h-3 w-3 mr-1 text-yellow-500" />
                    4.9
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-orange-100">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-orange-100 p-4 rounded-full">
                <Camera className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Capture Your Own Incredible India Moments
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              These authentic photographs represent the real experiences you'll have on our tours. From spiritual 
              journeys to cultural celebrations, from architectural marvels to natural wonders - every image tells 
              a story of India's incredible diversity and beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20book%20a%20photography%20tour%20of%20India%20and%20capture%20these%20incredible%20moments">
                  Book Photography Tour
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20explore%20more%20destinations%20and%20cultural%20experiences%20in%20India">
                  Explore More Destinations
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
