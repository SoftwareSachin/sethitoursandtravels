import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { useCommunication } from "./communication-utils";

export default function HomeFloatingButtons() {
  const { whatsapp, phone } = useCommunication();

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    whatsapp("नमस्कार! मुझे टूर और ट्रेवल सर्विस की जानकारी चाहिए। कृपया पैकेज और रेट्स की जानकारी दें।", 'rajasthani');
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    phone();
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button - Mobile Optimized */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
        style={{ 
          minWidth: '56px', 
          minHeight: '56px',
          touchAction: 'manipulation'
        }}
      >
        <FaWhatsapp className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-200" />
        <span className="ml-2 font-semibold hidden lg:group-hover:inline-block transition-all duration-200 text-sm">
          WhatsApp
        </span>
      </button>

      {/* Phone Button - Mobile Optimized */}
      <button
        onClick={handlePhoneClick}
        className="bg-orange-600 hover:bg-orange-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label="Call Now"
        style={{ 
          minWidth: '56px', 
          minHeight: '56px',
          touchAction: 'manipulation'
        }}
      >
        <Phone className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-200" />
        <span className="ml-2 font-semibold hidden lg:group-hover:inline-block transition-all duration-200 text-sm">
          Call
        </span>
      </button>
    </div>
  );
}