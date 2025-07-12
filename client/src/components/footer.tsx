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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Trust Indicators */}
      <div className="bg-gradient-to-r from-orange-600 to-pink-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-bold">5000+</h4>
              <p className="text-xs sm:text-sm text-white/90">Happy Travelers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-bold">15+</h4>
              <p className="text-xs sm:text-sm text-white/90">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-bold">100%</h4>
              <p className="text-xs sm:text-sm text-white/90">Safe & Secure</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-bold">24/7</h4>
              <p className="text-xs sm:text-sm text-white/90">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-white shadow-lg border-2 border-orange-200 p-2">
                  <img 
                    src={companyLogo} 
                    alt="Sethi Tour & Travels" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                    Sethi Tour & Travels
                  </h3>
                  <p className="text-gray-400 font-medium">Journey Beyond Boundaries</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Discover the enchanting beauty of Rajasthan with our expertly crafted tours. From majestic palaces to golden deserts, 
                from royal heritage to cultural treasures - we create unforgettable journeys that showcase the true essence of incredible India.
              </p>
              <div className="bg-gradient-to-r from-orange-600/10 to-pink-600/10 rounded-lg p-4 mb-6">
                <p className="text-orange-400 font-semibold mb-2">Ready to Start Your Adventure?</p>
                <p className="text-gray-300 text-sm">Contact Kuldeep Choudhary for personalized travel experiences across Rajasthan</p>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/917727021780?text=नमस्कार%20सेठी%20टूर%20एंड%20ट्रेवल्स%20में%20आपका%20स्वागत%20है।%20मैं%20राजस्थान%20टूर%20पैकेज%20के%20बारे%20में%20जानकारी%20चाहता%20हूँ।"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-6 w-6" />
                </a>
                <a 
                  href="tel:+919772021780" 
                  className="bg-orange-600 hover:bg-orange-700 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Call"
                >
                  <Phone className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:sethitourstravels8888@gmail.com?subject=Rajasthan%20Tour%20Inquiry&body=नमस्कार%20कुलदीप%20जी,%0A%0Aमैं%20राजस्थान%20टूर%20पैकेज%20के%20बारे%20में%20जानकारी%20चाहता%20हूँ।" 
                  className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-orange-400">Popular Destinations</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a 
                    href="/rajasthan-tour"
                    className="hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Jaipur - The Pink City
                  </a>
                </li>
                <li>
                  <a 
                    href="/rajasthan-tour"
                    className="hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Udaipur - City of Lakes
                  </a>
                </li>
                <li>
                  <a 
                    href="/rajasthan-tour"
                    className="hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Jodhpur - The Blue City
                  </a>
                </li>
                <li>
                  <a 
                    href="/rajasthan-tour"
                    className="hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Jaisalmer - Golden City
                  </a>
                </li>
                <li>
                  <a 
                    href="/jaipur-taxi"
                    className="hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Jaipur Taxi Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-pink-400">Travel Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <button 
                    onClick={() => scrollToSection('packages')}
                    className="hover:text-pink-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Heritage Tour Packages
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('vehicles')}
                    className="hover:text-pink-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Premium Car Rentals
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('vehicles')}
                    className="hover:text-pink-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Airport Transfers
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('vehicles')}
                    className="hover:text-pink-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Desert Safari Tours
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('vehicles')}
                    className="hover:text-pink-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                    Wedding Transportation
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-blue-400">Get In Touch</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start group">
                  <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-white">Visit Our Office</p>
                    <p className="text-sm">S-147, 4S New Loha Mandi Road</p>
                    <p className="text-sm">Machada, Jaipur-302013</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-white">Call Us</p>
                    <a href="tel:+919772021780" className="hover:text-blue-400 transition-colors text-sm">+91 97720 21780</a>
                  </div>
                </div>
                <div className="flex items-center group">
                  <FaWhatsapp className="h-5 w-5 mr-3 flex-shrink-0 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <a href="https://wa.me/917727021780" className="hover:text-emerald-400 transition-colors text-sm">+91 77270 21780</a>
                  </div>
                </div>
                <div className="flex items-start group">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-white">Email Us</p>
                    <a href="mailto:sethitourstravels8888@gmail.com" className="hover:text-blue-400 transition-colors text-sm break-all">
                      sethitourstravels8888@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">
                  © 2024 Sethi Tour & Travels. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Owned & Operated by <span className="text-orange-400 font-semibold">Kuldeep Choudhary</span>
                </p>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">Proudly serving travelers since 2009</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-yellow-400 font-semibold">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}