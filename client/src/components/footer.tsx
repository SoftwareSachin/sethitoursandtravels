import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl font-bold">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Sethi Tour & Travels</h3>
                <p className="text-gray-400">Premium Travel Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for memorable travel experiences across Rajasthan and beyond. 
              We provide premium taxi services and expertly crafted tour packages.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://api.whatsapp.com/send?phone=919772021780" 
                className="bg-emerald-600 hover:bg-emerald-700 p-3 rounded-full transition-colors"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a 
                href="tel:9772021780" 
                className="bg-primary hover:bg-blue-700 p-3 rounded-full transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="mailto:sethitourstravels8888@gmail.com" 
                className="bg-secondary hover:bg-orange-600 p-3 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Taxi Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('packages')}
                  className="hover:text-white transition-colors"
                >
                  Tour Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Airport Transfer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Outstation Travel
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Corporate Rental
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>S-147, 4S New Loha Mandi Road, Machada, Jaipur-302013</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:9772021780" className="hover:text-white transition-colors">97720 21780</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:7727021780" className="hover:text-white transition-colors">77270 21780</a>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:sethitourstravels8888@gmail.com" className="hover:text-white transition-colors break-all">
                  sethitourstravels8888@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Sethi Tour & Travels. All rights reserved. | Owner: Kuldeep Choudhary
          </p>
        </div>
      </div>
    </footer>
  );
}
