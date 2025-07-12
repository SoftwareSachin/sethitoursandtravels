import { FaWhatsapp } from "react-icons/fa";
import { useCommunication } from "./communication-utils";

export default function WhatsAppButton() {
  const { whatsapp } = useCommunication();

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    whatsapp("मैं सेठी टूर एंड ट्रेवल्स की सेवाओं के बारे में जानकारी चाहता हूं।", 'rajasthani');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform duration-200" />
        <span className="ml-2 font-semibold hidden group-hover:inline-block transition-all duration-200">
          Chat with us
        </span>
      </button>
    </div>
  );
}
