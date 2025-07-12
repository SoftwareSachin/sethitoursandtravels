import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export default function FeaturedDestinations() {
  const features = [
    "Comfortable hotel accommodations",
    "Professional guided tours", 
    "Reliable taxi services",
    "Local attraction excursions"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Taj Mahal Agra Tour"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Agra <span className="text-secondary italic">Taj Mahal</span>: A Journey Through Love and Legacy
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Explore the grand Mughal architecture of Agra Fort, followed by serene views of the Taj from Mehtab Bagh. 
              Discover the "Baby Taj" and its intricate marble work, and finish the tour in local markets and marble workshops, 
              where Agra's rich artistry and vibrant culture come to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-secondary hover:bg-orange-600 text-white"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20need%20Agra%20Tour%20Package">
                  BOOK NOW
                </a>
              </Button>
              <Button 
                variant="link"
                className="text-primary hover:text-blue-700 p-0"
                onClick={() => {
                  const element = document.getElementById('packages');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View more <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-secondary italic">Udaipur</span> A Journey Through the City of Lakes and Royal Heritage
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              The "City of Lakes," highlighting its royal heritage and scenic beauty. Begin with the majestic City Palace, 
              overlooking Lake Pichola, where intricate architecture and royal artifacts showcase Rajasthan's opulent past. 
              Enjoy a serene boat ride on Lake Pichola with stops at Jag Mandir Island.
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-emerald-600 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-secondary hover:bg-orange-600 text-white"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20need%20Udaipur%20Tour%20Package">
                  Book Now
                </a>
              </Button>
              <Button 
                variant="link"
                className="text-primary hover:text-blue-700 p-0"
                onClick={() => {
                  const element = document.getElementById('packages');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View more <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Udaipur Tour Package"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
