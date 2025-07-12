import { Link } from "wouter";
import { Car, Phone, Clock, Users, Star, ArrowLeft, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const charDhamTaxiServices = [
  {
    name: "Kedarnath Taxi Service",
    description: "Sacred journey to Lord Shiva's abode",
    price: "₹8,500",
    features: ["Helicopter booking", "Trek arrangements", "Accommodation", "Darshan tickets"]
  },
  {
    name: "Badrinath Taxi Service",
    description: "Pilgrimage to Lord Vishnu's temple",
    price: "₹9,200",
    features: ["Valley of Flowers", "Mana Village", "Tapt Kund", "Temple darshan"]
  },
  {
    name: "Gangotri Taxi Service",
    description: "Source of holy river Ganga",
    price: "₹7,800",
    features: ["Gaumukh trek", "Gangotri temple", "Bhojwasa", "River origin"]
  },
  {
    name: "Yamunotri Taxi Service",
    description: "Origin of river Yamuna",
    price: "₹7,200",
    features: ["Yamunotri temple", "Surya Kund", "Divya Shila", "Hot springs"]
  },
  {
    name: "Complete Char Dham Yatra",
    description: "All four sacred sites in one package",
    price: "₹25,000",
    features: ["12-day package", "All accommodations", "Meals included", "Experienced driver"]
  }
];

export default function CharDhamTaxiService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/taxi-services" className="hover:text-blue-600 flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Taxi Services
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Char Dham Taxi Service</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Char Dham Taxi Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Sacred pilgrimage to the four holy shrines with our premium taxi services
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>2,000+ Pilgrims</span>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5" />
                <span>Mountain Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Char Dham Yatra Services
          </h2>
          <p className="text-lg text-gray-600">
            Complete spiritual journey to the four sacred shrines with experienced drivers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {charDhamTaxiServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg text-white">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-800">{service.name}</CardTitle>
                      <div className="text-sm font-semibold text-blue-600">{service.price}</div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-gradient-to-r from-orange-100 to-red-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Important Notice</h3>
            <p className="text-lg text-gray-600 mb-6">
              Char Dham Yatra is seasonal and depends on weather conditions. Please check temple opening dates before booking.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Best Time to Visit</h4>
                <p className="text-gray-600">May to October (temples remain closed in winter)</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">What to Carry</h4>
                <p className="text-gray-600">Warm clothes, rain gear, comfortable shoes, medicines</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Char Dham Yatra?</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us now for sacred journey planning and booking
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919772021780" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
              <span>Call: +91 97720 21780</span>
            </a>
            <a href="https://wa.me/917727021780" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
              <span>WhatsApp: +91 77270 21780</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}