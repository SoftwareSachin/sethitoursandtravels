import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, Star, Award } from "lucide-react";

export default function ServiceCategories() {
  const services = [
    {
      title: "RAJASTHAN TOURS",
      category: "Tour Package",
      subtitle: "राजस्थान की रानी यात्रा",
      description: "Explore the royal heritage of Rajasthan with our premium tour packages",
      image: "/attached_assets/image_1752400675384.png",
      link: "#packages",
      color: "from-orange-600 to-red-600",
      accent: "orange"
    },
    {
      title: "PREMIUM CABS",
      category: "Taxi Service", 
      subtitle: "शाही वाहन सेवा",
      description: "Experience luxury travel with our premium cab services",
      image: "/attached_assets/steptodown.com203575_1752603311916.jpg",
      link: "#vehicles",
      color: "from-purple-600 to-pink-600",
      accent: "purple"
    },
    {
      title: "LOCAL SIGHTSEEING",
      category: "City Tour",
      subtitle: "स्थानीय दर्शनीय स्थल",
      description: "Discover hidden gems and iconic landmarks of Jaipur",
      image: "/attached_assets/image_1752400722337.png",
      link: "#packages",
      color: "from-blue-600 to-indigo-600",
      accent: "blue"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Traditional Indian pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, #f97316 6px, transparent 6px),
                           radial-gradient(circle at 80% 80%, #dc2626 6px, transparent 6px),
                           radial-gradient(circle at 40% 60%, #eab308 4px, transparent 4px)`,
          backgroundSize: '200px 200px, 250px 250px, 150px 150px'
        }}></div>
      </div>
      
      {/* Royal border elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-yellow-600 via-red-600 to-orange-600"></div>
      
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          {/* Royal crown decoration */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-400">
                <Crown className="h-10 w-10 text-yellow-100" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-white flex items-center justify-center">
                <Star className="h-4 w-4 text-orange-600" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-yellow-400 rounded-full border-4 border-white flex items-center justify-center">
                <Star className="h-4 w-4 text-orange-600" />
              </div>
            </div>
          </div>
          
          {/* Royal badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg border-2 border-yellow-400">
            <Award className="h-4 w-4 mr-2" />
            <span>रॉयल प्रीमियम सेवाएं</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
            Our Premium Services
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium" style={{ fontFamily: "'Crimson Text', serif" }}>
            Experience excellence with our comprehensive travel solutions inspired by the grandeur of Rajasthan
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full border-2 border-orange-500"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-4 border-yellow-400/30 hover:border-yellow-400/60 bg-white">
              {/* Royal corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 transform rotate-45 translate-x-[-50%] translate-y-[-50%] z-10"></div>
              <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-red-500 to-orange-500 transform rotate-45 translate-x-[50%] translate-y-[-50%] z-10"></div>
              
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Royal gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70`}>
                  {/* Service category badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg border border-yellow-400/50`}>
                      {service.category}
                    </div>
                  </div>
                  
                  {/* Rating stars */}
                  <div className="absolute top-4 right-4 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Service content */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300" style={{ fontFamily: "'Cinzel', serif" }}>
                      {service.title}
                    </h3>
                    <p className="text-lg font-medium mb-2 text-yellow-200" style={{ fontFamily: "'Crimson Text', serif" }}>
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-white/90 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Button
                      variant="outline"
                      className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 border-2 border-yellow-400 hover:border-yellow-500 font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 group-hover:scale-105"
                      onClick={() => scrollToSection(service.link)}
                    >
                      <span className="flex items-center">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Royal border decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
            </Card>
          ))}
        </div>
        
        {/* Bottom decorative elements */}
        <div className="text-center mt-16">
          <div className="flex justify-center items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
