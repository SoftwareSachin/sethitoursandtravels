import { FaWhatsapp } from "react-icons/fa";
import { useCommunication } from "./communication-utils";

export default function WhatsAppButton() {
  const { whatsapp } = useCommunication();

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    whatsapp("मैं टूर बुक करना चाहता हूं। कृपया पैकेज और रेट्स की जानकारी दें।", 'rajasthani');
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 sm:p-4 md:p-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 touch-action-manipulation"
        aria-label="Chat on WhatsApp"
        style={{ 
          minHeight: '56px', 
          minWidth: '56px',
          fontSize: '16px',
          touchAction: 'manipulation'
        }}
      >
        <FaWhatsapp className="text-xl sm:text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-200" />
        <span className="ml-2 font-semibold hidden lg:group-hover:inline-block text-sm whitespace-nowrapk transition-all duration-200">
          Chat with us
        </span>
      </button>
    </div>
  );
}
