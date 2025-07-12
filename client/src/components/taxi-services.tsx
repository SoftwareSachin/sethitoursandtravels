import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { TaxiService } from "@shared/schema";

export default function TaxiServices() {
  const { data: services, isLoading } = useQuery<TaxiService[]>({
    queryKey: ["/api/taxi-services"],
  });

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent ? <IconComponent className="text-4xl text-secondary" /> : <Icons.Car className="text-4xl text-secondary" />;
  };

  if (isLoading) {
    return (
      <section id="vehicles" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Affordable Taxi Services In Jaipur</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a passionate cab service provider, we can provide you with the best car rental solutions for all your travel needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <Skeleton className="h-16 w-16 mb-4" />
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-16 w-full mb-4" />
                  <Skeleton className="h-4 w-20" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="vehicles" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Affordable Taxi Services In Jaipur</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As a passionate cab service provider, we can provide you with the best car rental solutions for all your travel needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => (
            <Card key={service.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-secondary text-4xl mb-4">
                  {getIcon(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button 
                  asChild
                  variant="link"
                  className="text-primary hover:text-blue-700 p-0 h-auto"
                >
                  <a href={`https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20need%20${encodeURIComponent(service.name)}`}>
                    Book Now <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
