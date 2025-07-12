import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, Shield, Users, MapPin } from "lucide-react";
import { useCommunication } from "./communication-utils";

export default function EnhancedCustomerSupport() {
  const { whatsapp, phone } = useCommunication();

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-white mb-6">
              <span className="text-secondary text-sm font-medium">Best Taxi Service and Tour Provider</span>
              <h2 className="text-4xl font-bold mb-4">
                24×7 Customer <span className="text-secondary italic">Support</span> Available
              </h2>
            </div>
            
            <p className="text-white text-lg mb-8 leading-relaxed">
              Sethi Tour and Travels provides 24/7 cab service, ready to offer rides daily for a hassle-free experience. 
              With just a call or tap, one of our reliable drivers will be at your doorstep within minutes, whether it's 
              early morning or midnight. Say goodbye to the hassle of searching for autos; our taxis are trackable, 
              ensuring you know their exact location in Jaipur at all times. No need to travel across town—our cabs are 
              nearby, ready to take you to your destination whenever you need.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="h-8 w-8 text-secondary mb-3" />
                <h3 className="text-white font-semibold mb-2">Round-the-Clock Service</h3>
                <p className="text-gray-200 text-sm">Available 24 hours a day, 7 days a week for all your travel needs</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="h-8 w-8 text-secondary mb-3" />
                <h3 className="text-white font-semibold mb-2">GPS Tracking</h3>
                <p className="text-gray-200 text-sm">Real-time vehicle tracking for enhanced safety and convenience</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Users className="h-8 w-8 text-secondary mb-3" />
                <h3 className="text-white font-semibold mb-2">Professional Drivers</h3>
                <p className="text-gray-200 text-sm">Experienced and courteous drivers with city knowledge</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Shield className="h-8 w-8 text-secondary mb-3" />
                <h3 className="text-white font-semibold mb-2">Safety First</h3>
                <p className="text-gray-200 text-sm">All vehicles regularly maintained with safety protocols</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => whatsapp("Hello! I need immediate taxi service from Sethi Tour & Travels.")}
                size="lg"
                className="bg-secondary hover:bg-orange-600 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Now
              </Button>
              <Button 
                onClick={() => phone()}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency
              </Button>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="24/7 Customer Support Available"
              className="w-full h-96 object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>
        
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Emergency Contact Information</h3>
            <p className="text-gray-200 max-w-2xl mx-auto">
              For immediate assistance, emergency situations, or urgent travel requirements, 
              contact us through any of these channels. We're always here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Phone className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Call Directly</h4>
              <p className="text-gray-200 mb-3">Immediate response for urgent needs</p>
              <a href="tel:9772021780" className="text-secondary font-medium hover:underline">
                +91 977-202-1780
              </a>
            </div>
            
            <div>
              <MessageCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">WhatsApp Chat</h4>
              <p className="text-gray-200 mb-3">Quick messaging for bookings</p>
              <a href="https://api.whatsapp.com/send?phone=919772021780" className="text-secondary font-medium hover:underline">
                Chat on WhatsApp
              </a>
            </div>
            
            <div>
              <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Response Time</h4>
              <p className="text-gray-200 mb-3">Average response within</p>
              <span className="text-secondary font-medium">2-5 Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}