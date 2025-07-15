import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import { useState } from "react";
import { useCommunication } from "./communication-utils";

export default function WhatsAppMessageBar() {
  const { whatsapp } = useCommunication();
  const [isVisible, setIsVisible] = useState(true);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    whatsapp("नमस्कार! मुझे टूर और ट्रेवल सर्विस की जानकारी चाहिए। कृपया पैकेज और रेट्स की जानकारी दें।", 'rajasthani');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-3 sm:p-4 z-50 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <FaWhatsapp className="text-xl sm:text-2xl" />
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-sm sm:text-base">व्हाट्सऐप से संदेश भेजें</div>
            <div className="text-xs sm:text-sm opacity-90">SEND MESSAGE VIA WHATSAPP</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleWhatsAppClick}
            className="bg-white/20 hover:bg-white/30 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-colors flex items-center justify-center"
            style={{ minHeight: '44px', minWidth: '80px', touchAction: 'manipulation' }}
          >
            <span className="hidden sm:inline">Message</span>
            <span className="sm:hidden">Send</span>
          </button>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors flex items-center justify-center"
            aria-label="Close"
            style={{ minHeight: '44px', minWidth: '44px', touchAction: 'manipulation' }}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}