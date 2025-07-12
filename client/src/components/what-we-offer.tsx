import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Route, ArrowRight, Briefcase } from "lucide-react";

export default function WhatWeOffer() {
  const offerings = [
    {
      icon: <MapPin className="h-12 w-12 text-primary" />,
      title: "Local and Outstation Travel",
      description: "Convenient options for both short local trips within cities and longer outstation journeys across Rajasthan and neighboring states with experienced drivers.",
      link: "vehicles"
    },
    {
      icon: <Route className="h-12 w-12 text-primary" />,
      title: "Airport and Railway Station Transfers",
      description: "Timely pick-up and drop-off services to major airports and railway stations for hassle-free travel connections. 24/7 availability with flight tracking.",
      link: "vehicles"
    },
    {
      icon: <ArrowRight className="h-12 w-12 text-primary" />,
      title: "One-Way and Round-Trip Services",
      description: "Flexible taxi options tailored for one-way or round trips to fit any travel plan or schedule. Perfect for business trips and family visits.",
      link: "vehicles"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-primary" />,
      title: "Customizable Tour Packages",
      description: "Vehicles of various types to suit solo travelers, families, or groups, with options for customization based on travel needs and budget requirements.",
      link: "packages"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reliable Taxi Services and tour packages for Every Destination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {offering.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{offering.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{offering.description}</p>
                <Button 
                  variant="link"
                  className="text-primary hover:text-blue-700 p-0 h-auto group-hover:underline"
                  onClick={() => scrollToSection(offering.link)}
                >
                  View more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}