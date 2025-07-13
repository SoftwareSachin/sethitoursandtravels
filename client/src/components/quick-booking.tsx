import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, MapPin, Phone, Car } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function QuickBooking() {
  const [formData, setFormData] = useState({
    service: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    vehicle: "",
    phone: ""
  });

  const { toast } = useToast();

  const services = [
    "One-Way Taxi",
    "Round-Trip Taxi", 
    "Golden Triangle Tour",
    "Rajasthan Desert Safari",
    "Taj Mahal Day Tour",
    "Wildlife Safari Tour",
    "Custom Tour Package"
  ];

  const vehicles = [
    "Maruti Suzuki Dzire (4 Seater)",
    "Maruti Suzuki Ertiga (6 Seater)",
    "Toyota Innova Crysta (7 Seater)",
    "Tempo Traveller (12-17 Seater)"
  ];

  const handleBooking = () => {
    if (!formData.service || !formData.pickup || !formData.date || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in service, pickup location, date, and phone number",
        variant: "destructive"
      });
      return;
    }

    const message = `नमस्ते! मुझे बुकिंग करनी है:

सेवा: ${formData.service}
पिकअप: ${formData.pickup}
${formData.dropoff ? `ड्रॉप: ${formData.dropoff}` : ''}
तारीख: ${formData.date}
${formData.time ? `समय: ${formData.time}` : ''}
${formData.vehicle ? `गाड़ी: ${formData.vehicle}` : ''}
फोन: ${formData.phone}

कृपया रेट और उपलब्धता बताएं।`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919772021780&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "राम राम सा!",
      description: "आपकी बुकिंग रिक्वेस्ट WhatsApp पर भेजी गई है। हम जल्दी रिप्लाई करेंगे।"
    });
  };

  return (
    <section className="py-8 xs:py-12 sm:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <Card className="shadow-xl border-0 bg-gradient-to-br from-orange-50 to-white">
          <CardContent className="p-4 xs:p-6 sm:p-8">
            <div className="text-center mb-6 xs:mb-8">
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Quick Book Now</h2>
              <p className="text-sm xs:text-base text-gray-600">Get instant quotes for your India tour and taxi needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                    Select Service *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose your service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>{service}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="pickup" className="text-sm font-medium text-gray-700">
                    Pickup Location *
                  </Label>
                  <div className="relative mt-1">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="pickup"
                      value={formData.pickup}
                      onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                      placeholder="Enter pickup location"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dropoff" className="text-sm font-medium text-gray-700">
                    Drop Location
                  </Label>
                  <div className="relative mt-1">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="dropoff"
                      value={formData.dropoff}
                      onChange={(e) => setFormData({...formData, dropoff: e.target.value})}
                      placeholder="Enter drop location (optional)"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="Your contact number"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="date" className="text-sm font-medium text-gray-700">
                    Travel Date *
                  </Label>
                  <div className="relative mt-1">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="pl-10"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="time" className="text-sm font-medium text-gray-700">
                    Preferred Time
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="vehicle" className="text-sm font-medium text-gray-700">
                    Preferred Vehicle
                  </Label>
                  <Select value={formData.vehicle} onValueChange={(value) => setFormData({...formData, vehicle: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose vehicle (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicles.map((vehicle) => (
                        <SelectItem key={vehicle} value={vehicle}>{vehicle}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={handleBooking}
                    className="w-full bg-secondary hover:bg-orange-600 text-white py-6 text-lg font-semibold"
                  >
                    <Car className="mr-2 h-5 w-5" />
                    Get Instant Quote on WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                * Required fields | We'll respond within 5 minutes during business hours
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}