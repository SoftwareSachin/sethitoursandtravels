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
    <div className="whatsapp-msg-bar">
      <div className="flex items-center space-x-3">
        <FaWhatsapp className="text-2xl" />
        <div>
          <div className="font-semibold text-sm">व्हाट्सऐप से संदेश भेजें</div>
          <div className="text-xs opacity-90">SEND MESSAGE VIA WHATSAPP</div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleWhatsAppClick}
          className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          style={{ minHeight: '40px', minWidth: '80px' }}
        >
          <span className="hidden sm:inline">Message</span>
          <span className="sm:hidden">Send</span>
        </button>
        <button
          onClick={handleClose}
          className="p-2 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}