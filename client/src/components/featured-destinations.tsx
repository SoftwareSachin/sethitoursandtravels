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
              🕌 <span className="text-secondary italic">Taj Mahal</span> Agra: UNESCO World Heritage Wonder
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Experience the eternal symbol of love - the magnificent Taj Mahal! Built by Emperor Shah Jahan for his beloved wife Mumtaz, 
              this ivory-white marble mausoleum changes colors throughout the day. Visit at sunrise for magical golden hues, 
              explore Agra Fort's red sandstone architecture, and shop for authentic marble inlay work in local artisan workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-secondary hover:bg-orange-600 text-white"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=नमस्ते! मुझे ताज महल आगरा टूर बुक करना है। कृपया रेट और डिटेल्स भेजें।">
                  🕌 BOOK TAJ MAHAL TOUR
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
              💕 <span className="text-secondary italic">Udaipur</span> Venice of the East - City of Lakes
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Discover the most romantic city in India! Udaipur's pristine lakes, magnificent palaces, and fairy-tale setting 
              make it perfect for couples and culture lovers. Take sunset boat rides on Lake Pichola, explore the massive City Palace complex, 
              visit the famous Jag Mandir island palace, and enjoy traditional Rajasthani cultural performances in royal havelis.
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
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=नमस्ते! मुझे उदयपुर लेक सिटी टूर चाहिए। कृपया पैकेज डिटेल्स दें।">
                  💕 BOOK UDAIPUR TOUR
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
