import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Fuel, Shield, Star } from "lucide-react";

export default function VehicleFleet() {
  const vehicles = [
    {
      name: "Maruti Swift Dzire",
      category: "Sedan",
      capacity: "4+1",
      features: ["AC", "Music System", "GPS"],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "Perfect for city tours and airport transfers. Comfortable sedan with modern amenities."
    },
    {
      name: "Toyota Innova",
      category: "SUV",
      capacity: "7+1",
      features: ["AC", "Music System", "Extra Luggage"],
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "Spacious SUV ideal for family trips and group travel. Premium comfort for longer journeys."
    },
    {
      name: "Maruti Ertiga",
      category: "MPV",
      capacity: "6+1",
      features: ["AC", "Music System", "Comfortable Seating"],
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "Multi-purpose vehicle perfect for medium-sized groups and family outings."
    },
    {
      name: "Tempo Traveller",
      category: "Mini Bus",
      capacity: "12+1",
      features: ["AC", "Push Back Seats", "Music System"],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "Perfect for group tours and corporate travel. Comfortable seating with ample luggage space."
    },
    {
      name: "Force Urbania",
      category: "Luxury Van",
      capacity: "9+1",
      features: ["AC", "Luxury Interiors", "Entertainment System"],
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "Premium luxury van for VIP travel and special occasions. Top-class comfort and amenities."
    },
    {
      name: "Mahindra Scorpio",
      category: "SUV",
      capacity: "7+1",
      features: ["4WD", "AC", "High Ground Clearance"],
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      description: "Rugged SUV perfect for desert safaris and adventure trips. Excellent for rough terrain."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vehicle Fleet</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of well-maintained vehicles. From compact sedans to luxury coaches, 
            we have the perfect vehicle for every journey and group size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {vehicle.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{vehicle.description}</p>
                
                <div className="flex items-center mb-4">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">Capacity: {vehicle.capacity}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm text-gray-600">Well Maintained</span>
                  </div>
                  <Button 
                    asChild
                    size="sm"
                    className="bg-primary hover:bg-blue-700 text-white"
                  >
                    <a href={`https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20need%20${encodeURIComponent(vehicle.name)}`}>
                      Book Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Fleet?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Safety First</h4>
                <p className="text-gray-600 text-sm">All vehicles undergo regular safety checks and maintenance</p>
              </div>
              <div>
                <Fuel className="h-12 w-12 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Fuel Efficient</h4>
                <p className="text-gray-600 text-sm">Modern vehicles with excellent fuel efficiency for cost-effective travel</p>
              </div>
              <div>
                <Star className="h-12 w-12 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Premium Service</h4>
                <p className="text-gray-600 text-sm">Professional drivers and premium amenities for comfortable journeys</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}