import { Phone, Mail, MapPin, Star, Award, Shield, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import companyLogo from "@assets/{EA6D6F7F-DEEC-4D98-9B5B-CD04F5567A36}_1752336151486.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-amber-50 text-gray-800 border-t-8 border-orange-600">
      {/* Traditional Rajasthani Pattern Header */}
      <div className="bg-orange-600 py-6 sm:py-8 relative overflow-hidden">
        {/* Traditional Indian Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #fff 8px, transparent 8px),
                             radial-gradient(circle at 75% 75%, #fff 6px, transparent 6px),
                             radial-gradient(circle at 50% 50%, #fff 4px, transparent 4px)`,
            backgroundSize: '80px 80px, 120px 120px, 60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-2 border-2 border-amber-200">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">5000+</h4>
              <p className="text-xs sm:text-sm text-orange-100">Happy Travelers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-2 border-2 border-amber-200">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">15+</h4>
              <p className="text-xs sm:text-sm text-orange-100">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-2 border-2 border-amber-200">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">100%</h4>
              <p className="text-xs sm:text-sm text-orange-100">Safe & Secure</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mb-2 border-2 border-amber-200">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">24/7</h4>
              <p className="text-xs sm:text-sm text-orange-100">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 sm:py-16 relative">
        {/* Traditional Border Pattern */}
        <div className="absolute top-0 left-0 w-full h-2 bg-repeat-x" style={{
          backgroundImage: `linear-gradient(90deg, #dc2626 0%, #ea580c 25%, #d97706 50%, #ca8a04 75%, #dc2626 100%)`,
          backgroundSize: '40px 8px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-white shadow-lg border-4 border-orange-600 p-2">
                  <img 
                    src={companyLogo} 
                    alt="Sethi Tour & Travels" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-orange-700" style={{ fontFamily: "'Cinzel', serif" }}>
                    Sethi Tour & Travels
                  </h3>
                  <p className="text-red-600 font-semibold" style={{ fontFamily: "'Crimson Text', serif" }}>यात्रा की शुरुआत यहाँ से</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg" style={{ fontFamily: "'Crimson Text', serif" }}>
                राजस्थान की अनमोल धरोहर और संस्कृति का अनुभव करें। हमारे विशेषज्ञ गाइड आपको ले जाएंगे राजाओं के शहरों में, 
                जहाँ हर पत्थर में इतिहास छुपा है और हर महल में कहानियाँ बसी हैं।
              </p>
              <div className="bg-orange-100 border-l-4 border-orange-600 rounded-lg p-4 mb-6">
                <p className="text-orange-800 font-bold mb-2" style={{ fontFamily: "'Cinzel', serif" }}>राजस्थान यात्रा की तैयारी</p>
                <p className="text-gray-700 text-sm">संपर्क करें कुलदीप चौधरी से - आपकी सपनों की यात्रा के लिए</p>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/917727021780?text=नमस्कार%20सेठी%20टूर%20एंड%20ट्रेवल्स%20में%20आपका%20स्वागत%20है।%20मैं%20राजस्थान%20टूर%20पैकेज%20के%20बारे%20में%20जानकारी%20चाहता%20हूँ।"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white p-4 rounded-lg border-2 border-emerald-800 transition-all duration-300 hover:scale-105 shadow-lg"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-6 w-6" />
                </a>
                <a 
                  href="tel:+919772021780" 
                  className="bg-orange-700 hover:bg-orange-800 text-white p-4 rounded-lg border-2 border-orange-800 transition-all duration-300 hover:scale-105 shadow-lg"
                  aria-label="Call"
                >
                  <Phone className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:sethitourstravels8888@gmail.com?subject=Rajasthan%20Tour%20Inquiry&body=नमस्कार%20कुलदीप%20जी,%0A%0Aमैं%20राजस्थान%20टूर%20पैकेज%20के%20बारे%20में%20जानकारी%20चाहता%20हूँ।" 
                  className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-lg border-2 border-blue-800 transition-all duration-300 hover:scale-105 shadow-lg"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-700" style={{ fontFamily: "'Cinzel', serif" }}>राजस्थान के प्रमुख गंतव्य</h4>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <a 
                    href="/rajasthan-tour"
                    className="hover:text-orange-700 transition-colors flex items-center group"
                  >
                    <span className="w-3 h-3 bg-orange-600 rounded-full mr-3 group-hover:scale-125 transition-transform border border-orange-800"></span>
                    जयपुर - गुलाबी शहर
                  </a>
                </li>
                <li>
                  <a 
                    href="/rajasthan-tour"
                    className="hover:text-orange-700 transition-colors flex items-center group"
                  >
                    <span className="w-3 h-3 bg-orange-600 rounded-full mr-3 group-hover:scale-125 transition-transform border border-orange-800"></span>
                    उदयपुर - झीलों का शहर
                  </a>
                </li>
                <li>
                  <a 
                    href="/rajasthan-tour"
                    className="hover:text-orange-700 transition-colors flex items-center group"
                  >
                    <span className="w-3 h-3 bg-orange-600 rounded-full mr-3 group-hover:scale-125 transition-transform border border-orange-800"></span>
                    जोधपुर - नीला शहर
                  </a>
                </li>
                <li>
                  <a 
                    href="/rajasthan-tour"
                    className="hover:text-orange-700 transition-colors flex items-center group"
                  >
                    <span className="w-3 h-3 bg-orange-600 rounded-full mr-3 group-hover:scale-125 transition-transform border border-orange-800"></span>
                    जैसलमेर - स्वर्ण नगरी
                  </a>
                </li>
                <li>
                  <a 
                    href="/jaipur-taxi"
                    className="hover:text-orange-700 transition-colors flex items-center group"
                  >
                    <span className="w-3 h-3 bg-orange-600 rounded-full mr-3 group-hover:scale-125 transition-transform border border-orange-800"></span>
                    जयपुर टैक्सी सेवा
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-700" style={{ fontFamily: "'Cinzel', serif" }}>यात्रा सेवाएं</h4>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <button 
                    onClick={() => scrollToSection('packages')}
                    className="hover:text-orange-700 transition-colors flex items-center group text-left"
                  >
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3 group-hover:scale-125 transition-transform border border-red-800"></span>
                    विरासत टूर पैकेज
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('vehicles')}
                    className="hover:text-orange-700 transition-colors flex items-center group text-left"
                  >
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3 group-hover:scale-125 transition-transform border border-red-800"></span>
                    प्रीमियम कार किराया
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('vehicles')}
                    className="hover:text-orange-700 transition-colors flex items-center group text-left"
                  >
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3 group-hover:scale-125 transition-transform border border-red-800"></span>
                    हवाई अड्डा स्थानांतरण
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('vehicles')}
                    className="hover:text-orange-700 transition-colors flex items-center group text-left"
                  >
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3 group-hover:scale-125 transition-transform border border-red-800"></span>
                    रेगिस्तान सफारी टूर
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('vehicles')}
                    className="hover:text-orange-700 transition-colors flex items-center group text-left"
                  >
                    <span className="w-3 h-3 bg-red-600 rounded-full mr-3 group-hover:scale-125 transition-transform border border-red-800"></span>
                    विवाह परिवहन सेवा
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-700" style={{ fontFamily: "'Cinzel', serif" }}>संपर्क करें</h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start group">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-orange-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-bold text-gray-800">हमारे कार्यालय आएं</p>
                    <p className="text-sm">S-147, 4S न्यू लोहा मंडी रोड</p>
                    <p className="text-sm">मछाडा, जयपुर-302013</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-orange-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-bold text-gray-800">फोन करें</p>
                    <a href="tel:+919772021780" className="hover:text-orange-700 transition-colors text-sm font-medium">+91 977 202 1780</a>
                  </div>
                </div>
                <div className="flex items-center group">
                  <FaWhatsapp className="h-5 w-5 mr-3 flex-shrink-0 text-emerald-700 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-bold text-gray-800">व्हाट्सऐप</p>
                    <a href="https://wa.me/917727021780" className="hover:text-emerald-700 transition-colors text-sm font-medium">+91 772 702 1780</a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-orange-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-bold text-gray-800">ईमेल करें</p>
                    <a href="mailto:sethitourstravels8888@gmail.com" className="hover:text-orange-700 transition-colors text-sm break-all">
                      sethitourstravels8888@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Traditional Rajasthani Bottom Bar */}
          <div className="border-t-4 border-orange-600 mt-16 pt-8 bg-orange-100 rounded-t-lg relative overflow-hidden">
            {/* Traditional Pattern Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, #dc2626 6px, transparent 6px),
                                 radial-gradient(circle at 70% 70%, #ea580c 4px, transparent 4px)`,
                backgroundSize: '100px 100px, 80px 80px'
              }}></div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center text-center relative">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-700 font-semibold" style={{ fontFamily: "'Crimson Text', serif" }}>
                  © 2024 सेठी टूर एंड ट्रेवल्स। सभी अधिकार सुरक्षित।
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  स्वामित्व और संचालन: <span className="text-orange-700 font-bold">कुलदीप चौधरी</span>
                </p>
                <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "'Devanagari', serif" }}>
                  "अतिथि देवो भवः" - मेहमान ही हमारे देवता हैं
                </p>
              </div>
              <div className="flex flex-col items-center text-sm text-gray-700">
                <span className="mb-2 font-semibold">2009 से यात्रियों की सेवा में</span>
                <div className="flex items-center bg-white rounded-full px-4 py-2 border-2 border-orange-600">
                  <Star className="h-4 w-4 text-yellow-600 fill-current mx-0.5" />
                  <Star className="h-4 w-4 text-yellow-600 fill-current mx-0.5" />
                  <Star className="h-4 w-4 text-yellow-600 fill-current mx-0.5" />
                  <Star className="h-4 w-4 text-yellow-600 fill-current mx-0.5" />
                  <Star className="h-4 w-4 text-yellow-600 fill-current mx-0.5" />
                  <span className="ml-2 text-orange-700 font-bold">4.9/5</span>
                </div>
              </div>
            </div>
            
            {/* Traditional Border Pattern */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-repeat-x" style={{
              backgroundImage: `linear-gradient(90deg, #dc2626 0%, #ea580c 25%, #d97706 50%, #ca8a04 75%, #dc2626 100%)`,
              backgroundSize: '20px 4px'
            }}></div>
          </div>
        </div>
      </div>
    </footer>
  );
}