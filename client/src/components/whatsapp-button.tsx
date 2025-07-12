import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20need%20assistance"
        className="bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
        <span className="ml-2 font-semibold hidden group-hover:inline-block transition-all">
          Chat with us
        </span>
      </a>
    </div>
  );
}
