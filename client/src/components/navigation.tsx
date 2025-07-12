import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Search, User, MapPin, Home } from "lucide-react";
import { Link } from "wouter";
import companyLogo from "@assets/{EA6D6F7F-DEEC-4D98-9B5B-CD04F5567A36}_1752336151486.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "fleet", label: "Fleet" },
    { id: "services", label: "Services" },
    { id: "packages", label: "Tour Packages" },
    { id: "destinations", label: "Destinations" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  const specialNavItems = [
    { href: "/jaipur-taxi", label: "Jaipur Taxi" }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Main Navigation */}
      <div className="bg-gradient-to-b from-yellow-50 to-orange-50 border-b-2 border-pink-600">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center space-x-8 flex-1">
              {navItems.slice(0, 3).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-800 hover:text-pink-600 transition-all duration-300 font-serif text-sm tracking-wider uppercase font-semibold hover:scale-105 relative group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
                </button>
              ))}
            </div>

            {/* Central Logo */}
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-lg p-2 shadow-lg border border-orange-200">
                <img 
                  src={companyLogo} 
                  alt="Sethi Tour & Travels - Premium Travel Services" 
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
              {navItems.slice(3).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-800 hover:text-pink-600 transition-all duration-300 font-serif text-sm tracking-wider uppercase font-semibold hover:scale-105 relative group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
                </button>
              ))}
              {specialNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-800 hover:text-pink-600 transition-all duration-300 font-serif text-sm tracking-wider uppercase font-semibold hover:scale-105 relative group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-2"></div>
                </Link>
              ))}
            </div>

            {/* Mobile Logo and Title */}
            <div className="lg:hidden flex items-center min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden mr-2 sm:mr-3 bg-white shadow-lg border-2 border-orange-200 p-1 flex-shrink-0">
                <img 
                  src={companyLogo} 
                  alt="Sethi Tour & Travels" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-sm sm:text-base font-bold text-pink-600 truncate font-serif tracking-wide">𝕾𝖊𝖙𝖍𝖎 𝕿𝖔𝖚𝖗 & 𝕿𝖗𝖆𝖛𝖊𝖑𝖘</h1>
                <p className="text-xs text-gray-600 truncate font-serif italic tracking-wider">𝒜𝓊𝓉𝒽𝑒𝓃𝓉𝒾𝒸 ℐ𝓃𝒹𝒾𝒶 𝒯𝑜𝓊𝓇𝓈</p>
              </div>
            </div>




            <div className="md:hidden flex items-center space-x-4">
              <a href="tel:9772021780" className="text-pink-600 font-semibold flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span className="text-sm">Call</span>
              </a>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white shadow-lg border-2 border-orange-200 p-1">
                    <img 
                      src={companyLogo} 
                      alt="Sethi Tour & Travels" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-pink-600 font-serif tracking-wide">𝕾𝖊𝖙𝖍𝖎 𝕿𝖔𝖚𝖗 & 𝕿𝖗𝖆𝖛𝖊𝖑𝖘</h1>
                    <p className="text-xs text-gray-600 font-serif italic tracking-wider">𝒜𝓊𝓉𝒽𝑒𝓃𝓉𝒾𝒸 ℐ𝓃𝒹𝒾𝒶 𝒯𝑜𝓊𝓇𝓈</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-gray-800 hover:text-pink-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50 text-base font-serif font-semibold tracking-wide uppercase hover:scale-105"
                    >
                      {item.label}
                    </button>
                  ))}
                  {specialNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-left text-gray-800 hover:text-pink-600 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50 text-base font-serif font-semibold tracking-wide uppercase hover:scale-105"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <a href="tel:9772021780" className="text-pink-600 font-semibold flex items-center py-3 px-4 rounded-lg hover:bg-gray-50 text-base">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 97720 21780
                  </a>
                </div>
              </div>
            </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
