import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Star, Camera, Users, Phone } from "lucide-react";

export default function DetailedAgraTour() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Beautiful Taj Mahal at sunrise"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm font-medium text-gray-600">Jaipur to Agra Same Day Tour</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore Agra <span className="text-primary italic">Taj Mahal</span>: A Journey Through Love and Legacy
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Explore the grand Mughal architecture of Agra Fort, followed by serene views of the Taj from Mehtab Bagh. 
              Discover the "Baby Taj" and its intricate marble work, and finish the tour in local markets and marble workshops, 
              where Agra's rich artistry and vibrant culture come to life.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-600">12-14 Hours Tour</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-600">All Group Sizes</span>
              </div>
              <div className="flex items-center">
                <Camera className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-600">Photography Allowed</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm text-gray-600">UNESCO Heritage</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tour Highlights:</h3>
              <ul className="space-y-2">
                {[
                  "Taj Mahal at sunrise or sunset for best photography",
                  "Agra Fort - Mughal architectural masterpiece",
                  "Mehtab Bagh - Perfect Taj Mahal viewing point",
                  "Itimad-ud-Daulah (Baby Taj) - Intricate marble inlay work",
                  "Local marble workshop visit and shopping",
                  "Traditional Mughlai lunch at heritage restaurant"
                ].map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-blue-700 text-white"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20book%20Agra%20Same%20Day%20Tour">
                  Book Now
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a href="/agra-tour-details">
                  View More Details
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}