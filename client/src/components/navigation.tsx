import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Search, User, MapPin, Home, Car, Settings, Package, Mail } from "lucide-react";
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
    { id: "home", label: "Home", href: "/", icon: Home },
    { id: "fleet", label: "Fleet", icon: Car },
    { id: "services", label: "Services", icon: Settings },
    { id: "packages", label: "Tour Packages", icon: Package },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const specialNavItems = [
    { href: "/jaipur-taxi", label: "Jaipur Taxi" },
    { href: "/jaipur-city-tour", label: "Jaipur City Tour" },
    { href: "/rajasthan-tour", label: "Rajasthan Tour" },
    { href: "/taxi-services", label: "Taxi Services" }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Main Navigation */}
      <div className="bg-gradient-to-b from-yellow-50 to-orange-50 border-b-2 border-pink-600">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-14">
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
              <Link href="/">
                <button className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-xs xl:text-sm whitespace-nowrap touch-target min-h-[44px] px-2 xl:px-3 py-2 rounded-md flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </button>
              </Link>
              <button
                onClick={() => scrollToSection("fleet")}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-xs xl:text-sm whitespace-nowrap touch-target min-h-[44px] px-2 xl:px-3 py-2 rounded-md flex items-center"
              >
                <Car className="w-4 h-4 mr-1" />
                Fleet
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-xs xl:text-sm whitespace-nowrap touch-target min-h-[44px] px-2 xl:px-3 py-2 rounded-md flex items-center"
              >
                <Settings className="w-4 h-4 mr-1" />
                Services
              </button>
            </div>

            {/* Central Logo - Desktop Only */}
            <div className="hidden lg:flex justify-center items-center mx-2 xl:mx-4 flex-shrink-0">
              <Link href="/">
                <div className="bg-white rounded-lg p-1 shadow-lg border border-orange-200 cursor-pointer hover:shadow-xl transition-shadow">
                  <img 
                    src={companyLogo} 
                    alt="Sethi Tour & Travels - Premium Travel Services" 
                    className="h-8 w-auto"
                  />
                </div>
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 justify-end flex-shrink-0">
              <button
                onClick={() => scrollToSection("packages")}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-xs xl:text-sm whitespace-nowrap touch-target min-h-[44px] px-2 xl:px-3 py-2 rounded-md flex items-center"
              >
                <Package className="w-4 h-4 mr-1" />
                Tour Packages
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-xs xl:text-sm whitespace-nowrap touch-target min-h-[44px] px-2 xl:px-3 py-2 rounded-md flex items-center"
              >
                <Mail className="w-4 h-4 mr-1" />
                Contact
              </button>
            </div>

            {/* Mobile Logo and Title - Enhanced Mobile Responsiveness */}
            <div className="lg:hidden flex items-center min-w-0 flex-1">
              <Link href="/" className="flex items-center min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg overflow-hidden mr-2 sm:mr-3 bg-white shadow-lg border-2 border-orange-200 p-0.5 sm:p-1 flex-shrink-0">
                  <img 
                    src={companyLogo} 
                    alt="Sethi Tour & Travels" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-sm sm:text-base md:text-lg font-bold text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text truncate leading-tight" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>
                    Sethi Tour & Travels
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 truncate leading-tight">India Tours</p>
                </div>
              </Link>
            </div>




            <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
              <a href="tel:9772021780" className="text-pink-600 font-semibold flex items-center min-h-[48px] min-w-[48px] justify-center rounded-lg hover:bg-pink-50 transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
                <span className="text-sm hidden sm:inline">Call</span>
              </a>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden min-h-[48px] min-w-[48px] rounded-lg hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px] xs:w-[280px] sm:w-[320px]">
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
                    <h1 className="text-lg font-bold text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.5px' }}>
                      Sethi Tour & Travels
                    </h1>
                    <p className="text-xs text-gray-600">Authentic India Tours</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    item.href ? (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="text-left text-gray-700 hover:text-pink-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 text-base font-medium flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        <Home className="w-4 h-4 mr-2" />
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-gray-700 hover:text-pink-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 text-base font-medium flex items-center"
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.label}
                      </button>
                    )
                  ))}
                  {specialNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-left text-gray-700 hover:text-pink-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 text-base font-medium"
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
      
      {/* Second Navigation Row - Special Pages */}
      <div className="hidden lg:block bg-gradient-to-r from-pink-600 to-orange-600 border-b border-pink-700">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-center items-center h-10 space-x-6 xl:space-x-8">
            {specialNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-yellow-200 transition-colors duration-200 font-medium text-sm whitespace-nowrap touch-target min-h-[40px] px-3 py-2 rounded-md hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
