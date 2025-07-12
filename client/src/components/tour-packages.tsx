import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useCommunication, CommunicationUtils } from "./communication-utils";
import type { TourPackage } from "@shared/schema";

export default function TourPackages() {
  const { data: packages, isLoading } = useQuery<TourPackage[]>({
    queryKey: ["/api/tour-packages"],
  });

  const { whatsapp } = useCommunication();

  if (isLoading) {
    return (
      <section id="packages" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Tour Packages</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore incredible destinations with our expertly crafted tour packages
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index}>
                <Skeleton className="w-full h-36 sm:h-48" />
                <CardContent className="p-4 sm:p-6">
                  <Skeleton className="h-5 sm:h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <Skeleton className="h-9 sm:h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="packages" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Tour Packages</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore incredible destinations with our expertly crafted tour packages
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {packages?.map((pkg) => (
            <Card key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-36 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{pkg.description}</p>
                {pkg.duration && (
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>Duration: {pkg.duration}</span>
                    {pkg.price && <span className="font-semibold text-primary">₹{pkg.price}</span>}
                  </div>
                )}
                <Button 
                  onClick={() => whatsapp(CommunicationUtils.getBookingMessage(pkg.name))}
                  className="w-full bg-primary hover:bg-blue-700 text-white group-hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  BOOK NOW
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
