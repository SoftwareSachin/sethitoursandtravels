import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Phone, MapPin, Star, Clock } from "lucide-react";

export default function SafetyFeatures() {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Verified Drivers",
      description: "All our drivers are thoroughly background-checked, licensed, and trained for professional service. Regular health checkups and driving assessments ensure passenger safety."
    },
    {
      icon: <Phone className="h-12 w-12 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support and emergency assistance. GPS tracking of all vehicles ensures we can help you anytime, anywhere during your journey."
    },
    {
      icon: <MapPin className="h-12 w-12 text-primary" />,
      title: "GPS Tracking",
      description: "Real-time vehicle tracking for enhanced security. Share your trip details with family and track your journey live through our tracking system."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Insurance Coverage",
      description: "Comprehensive insurance coverage for all passengers and vehicles. Your safety and security are our top priority with full coverage protection."
    },
    {
      icon: <Star className="h-12 w-12 text-primary" />,
      title: "Regular Maintenance",
      description: "All vehicles undergo regular safety inspections and maintenance. PUC certificates, fitness certificates, and safety equipment checks ensure reliable service."
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Emergency Response",
      description: "Quick emergency response team available 24/7. Breakdown assistance, medical emergency support, and immediate replacement vehicle service when needed."
    }
  ];

  const statistics = [
    { number: "5000+", label: "Safe Trips Completed" },
    { number: "99.8%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "0", label: "Major Incidents" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Safety is Our Priority</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We implement comprehensive safety measures and maintain the highest standards to ensure every journey 
            with Sethi Tour & Travels is secure, comfortable, and worry-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Safety Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Safety Commitment</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            At Sethi Tour & Travels, we don't just transport you to your destination - we ensure you arrive safely, 
            comfortably, and with peace of mind. Our commitment to safety is unwavering and absolute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20know%20about%20safety%20measures" 
               className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More About Safety
            </a>
            <a href="tel:9772021780" 
               className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Emergency Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}