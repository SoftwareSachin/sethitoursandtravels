import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCommunication } from "./communication-utils";

export default function CustomerSupport() {
  const { whatsapp, phone } = useCommunication();

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              24*7 Customer <span className="text-secondary italic">Support</span> Available
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Sethi Tour and Travels provides 24/7 cab service, ready to offer rides daily for a hassle-free experience. 
              With just a call or tap, one of our reliable drivers will be at your doorstep within minutes, whether it's 
              early morning or midnight. Say goodbye to the hassle of searching for transportation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => phone()}
                size="lg"
                className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 97720 21780
              </Button>
              <Button 
                onClick={() => whatsapp("मुझे टूर बुक करना है। कृपया सपोर्ट और गाइडेंस दें।", 'rajasthani')}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="24/7 Customer Support"
              className="rounded-xl shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
