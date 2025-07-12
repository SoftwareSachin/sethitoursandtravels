import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ServiceCategories() {
  const services = [
    {
      title: "RAJASTHAN TOURS",
      category: "Tour Package",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#packages"
    },
    {
      title: "PREMIUM CABS",
      category: "Taxi Service", 
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#vehicles"
    },
    {
      title: "LOCAL SIGHTSEEING",
      category: "City Tour",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      link: "#packages"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Experience excellence with our comprehensive travel solutions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                    <span className="text-xs sm:text-sm uppercase tracking-wider text-secondary">
                      {service.category}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{service.title}</h3>
                    <Button
                      variant="link"
                      className="text-white hover:text-secondary p-0 h-auto mt-1 sm:mt-2 text-sm sm:text-base"
                      onClick={() => scrollToSection(service.link)}
                    >
                      View more <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
