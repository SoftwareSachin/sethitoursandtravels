import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock, Shield, Users, MapPin } from "lucide-react";
import { useCommunication } from "./communication-utils";

export default function EnhancedCustomerSupport() {
  const { whatsapp, phone } = useCommunication();

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-white mb-6">
              <span className="text-orange-400 text-sm font-medium uppercase tracking-wide">Best Taxi Service and Tour Provider</span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                24×7 Customer <span className="text-orange-400">Support</span> Available
              </h2>
            </div>
            
            <p className="text-white text-lg mb-8 leading-relaxed">
              Sethi Tour and Travels provides 24/7 cab service, ready to offer rides daily for a hassle-free experience. 
              With just a call or tap, one of our reliable drivers will be at your doorstep within minutes, whether it's 
              early morning or midnight. Say goodbye to the hassle of searching for autos; our taxis are trackable, 
              ensuring you know their exact location in Jaipur at all times. No need to travel across town—our cabs are 
              nearby, ready to take you to your destination whenever you need.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">Round-the-Clock Service</h3>
                <p className="text-white/80 text-sm">Available 24 hours a day, 7 days a week for all your travel needs</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">GPS Tracking</h3>
                <p className="text-white/80 text-sm">Real-time vehicle tracking for enhanced safety and convenience</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">Professional Drivers</h3>
                <p className="text-white/80 text-sm">Experienced and licensed chauffeurs for comfortable journeys</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-lg">Safety First</h3>
                <p className="text-white/80 text-sm">Comprehensive insurance and safety protocols for peace of mind</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => phone()}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 font-semibold"
              >
                Contact Now
              </Button>
              <Button 
                onClick={() => whatsapp("मुझे टूर बुक करना है। कृपया सपोर्ट दें।", 'rajasthani')}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 font-semibold"
              >
                Get Quote
              </Button>
            </div>
          </div>
          
          <div className="text-center">
            <img 
              src="/attached_assets/image_1752400302716.png"
              alt="24/7 Customer Support"
              className="rounded-xl shadow-lg mx-auto w-full max-w-md"
            />
          </div>
        </div>

        {/* Emergency Contact Information Section */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Emergency Contact Information</h3>
            <p className="text-white/80 text-lg">
              For immediate assistance, emergency situations, or urgent travel requirements, contact us through any of these channels. We're always here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Call Directly</h4>
              <p className="text-white/80 mb-4">Immediate response for urgent needs</p>
              <p className="text-orange-400 font-bold text-lg">+91 977 202 1780</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">WhatsApp Chat</h4>
              <p className="text-white/80 mb-4">Quick messaging for bookings</p>
              <p className="text-orange-400 font-bold text-lg">Chat on WhatsApp</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Response Time</h4>
              <p className="text-white/80 mb-4">Average response within</p>
              <p className="text-orange-400 font-bold text-lg">2-5 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}