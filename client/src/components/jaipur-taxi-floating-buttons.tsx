import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { useCommunication } from "./communication-utils";

export default function JaipurTaxiFloatingButtons() {
  const { whatsapp, phone } = useCommunication();

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    whatsapp("नमस्कार! मुझे जयपुर टैक्सी सर्विस चाहिए। कृपया रेट्स और अवेलेबिलिटी की जानकारी दें।", 'rajasthani');
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    phone();
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 min-w-[48px] min-h-[48px] sm:min-w-[56px] sm:min-h-[56px]"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-base sm:text-lg md:text-2xl group-hover:scale-110 transition-transform duration-200" />
        <span className="ml-2 font-semibold hidden md:group-hover:inline-block transition-all duration-200 text-sm">
          WhatsApp
        </span>
      </button>

      {/* Phone Button */}
      <button
        onClick={handlePhoneClick}
        className="bg-orange-600 hover:bg-orange-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 min-w-[48px] min-h-[48px] sm:min-w-[56px] sm:min-h-[56px]"
        aria-label="Call Now"
      >
        <Phone className="text-base sm:text-lg md:text-2xl group-hover:scale-110 transition-transform duration-200" />
        <span className="ml-2 font-semibold hidden md:group-hover:inline-block transition-all duration-200 text-sm">
          Call Now
        </span>
      </button>
    </div>
  );
}