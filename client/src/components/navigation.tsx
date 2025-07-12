import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Search, User, MapPin, Home } from "lucide-react";
import { Link } from "wouter";
import rajasthanLogo from "@assets/orange-logo_1752335072563.png";

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
    { id: "home", label: "HOME", icon: Home },
    { id: "packages", label: "DISCOVER" },
    { id: "services", label: "EXPERIENCE" },
    { id: "destinations", label: "PLAN" },
    { id: "gallery", label: "GALLERY" },
    { id: "contact", label: "CONTACT" },
  ];

  const rightNavItems = [
    { id: "about", label: "ABOUT US" },
    { id: "testimonials", label: "REVIEWS" },
    { href: "/jaipur-taxi", label: "TAXI SERVICES" }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-pink-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="hidden sm:flex items-center space-x-6">
            <span className="text-xs">SKIP TO MAIN CONTENT</span>
            <span className="text-xs">SCREEN READER</span>
            <div className="flex items-center space-x-2">
              <span className="text-xs">A-</span>
              <span className="text-xs">A</span>
              <span className="text-xs">A+</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <span>हिन्दी</span>
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-gray-300"></div>
              <div className="w-4 h-4 bg-black"></div>
              <div className="w-4 h-4 bg-green-600"></div>
              <div className="w-4 h-4 bg-yellow-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gradient-to-b from-yellow-50 to-orange-50 border-b-2 border-pink-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Left Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-sm tracking-wide"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Central Logo */}
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-full p-2 shadow-lg border-2 border-orange-200">
                <img 
                  src={rajasthanLogo} 
                  alt="Rajasthan - The Incredible State of India" 
                  className="h-16 w-auto"
                />
              </div>
            </div>

            {/* Right Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {rightNavItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-sm tracking-wide"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-700 hover:text-pink-600 transition-colors font-medium text-sm tracking-wide"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center space-x-4">
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
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg border-2 border-orange-200 p-1">
                    <img 
                      src={rajasthanLogo} 
                      alt="Rajasthan Tourism Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-pink-600">Rajasthan Tours</h1>
                    <p className="text-xs text-gray-600">Incredible State of India</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-gray-700 hover:text-pink-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 text-base font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                  {rightNavItems.map((item) => (
                    item.href ? (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-left text-gray-700 hover:text-pink-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 text-base font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left text-gray-700 hover:text-pink-600 transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 text-base font-medium"
                      >
                        {item.label}
                      </button>
                    )
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
