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
    <div className="fixed bottom-2 right-2 xs:bottom-3 xs:right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-2 xs:gap-3 sm:gap-4">
      {/* WhatsApp Button - Enhanced Mobile */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 xs:p-3 sm:p-4 md:p-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 touch-action-manipulation"
        aria-label="Chat on WhatsApp"
        style={{ 
          minWidth: '48px', 
          minHeight: '48px',
          touchAction: 'manipulation'
        }}
      >
        <FaWhatsapp className="text-lg xs:text-xl sm:text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-200" />
        <span className="ml-1 xs:ml-2 font-semibold hidden lg:group-hover:inline-block transition-all duration-200 text-xs sm:text-sm">
          WhatsApp
        </span>
      </button>

      {/* Phone Button - Enhanced Mobile */}
      <button
        onClick={handlePhoneClick}
        className="bg-orange-600 hover:bg-orange-700 text-white p-2 xs:p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        aria-label="Call Now"
        style={{ 
          minWidth: '48px', 
          minHeight: '48px',
          touchAction: 'manipulation'
        }}
      >
        <Phone className="text-sm xs:text-base sm:text-lg md:text-2xl group-hover:scale-110 transition-transform duration-200" />
        <span className="ml-1 xs:ml-2 font-semibold hidden lg:group-hover:inline-block transition-all duration-200 text-xs sm:text-sm">
          Call
        </span>
      </button>
    </div>
  );
}