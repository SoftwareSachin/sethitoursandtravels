import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import logoGif from "@assets/fetchpik.com-iconscout-HXNPRTYJxe_1752324682347.gif";

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
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "packages", label: "Tour Packages" },
    { id: "vehicles", label: "Taxi Services" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center min-w-0 flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg overflow-hidden mr-2 sm:mr-3 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg border-2 border-primary/20 p-1 flex-shrink-0">
              <img 
                src={logoGif} 
                alt="Sethi Tour & Travels Logo" 
                className="w-full h-full object-contain rounded-md"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-sm sm:text-base md:text-xl font-bold text-primary truncate">Sethi Tour & Travels</h1>
              <p className="text-xs sm:text-xs md:text-sm text-gray-600 truncate">Premium Travel Services</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:9772021780" className="text-primary font-semibold flex items-center hover:text-primary/80 transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              <span className="text-sm lg:text-base">97720 21780</span>
            </a>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg border-2 border-primary/20 p-1">
                    <img 
                      src={logoGif} 
                      alt="Sethi Tour & Travels Logo" 
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-primary">Sethi Tour & Travels</h1>
                    <p className="text-xs text-gray-600">Premium Travel Services</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-gray-700 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 text-base font-medium"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <a href="tel:9772021780" className="text-primary font-semibold flex items-center py-3 px-4 rounded-lg hover:bg-gray-50 text-base">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 97720 21780
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
