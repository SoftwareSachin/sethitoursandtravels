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
    <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Taj Mahal Agra Tour"
              className="relative rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              🏛️ UNESCO Heritage
            </div>
          </div>
          <div>
            <div className="mb-6">
              <h3 className="text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-pink-800 bg-clip-text mb-4 tracking-wide" 
                  style={{ fontFamily: "'Cinzel', serif" }}>
                <span className="text-orange-500 italic">Taj Mahal</span> Agra: UNESCO World Heritage Wonder
              </h3>
              <div className="h-1 w-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6"></div>
            </div>
            <p className="text-gray-700 text-lg lg:text-xl mb-8 leading-relaxed font-medium" 
               style={{ fontFamily: "'Crimson Text', serif" }}>
              💎 Experience the eternal symbol of love - the magnificent Taj Mahal! Built by Emperor Shah Jahan for his beloved wife Mumtaz, 
              this ivory-white marble mausoleum changes colors throughout the day. Visit at sunrise for magical golden hues, 
              explore Agra Fort's red sandstone architecture, and shop for authentic marble inlay work in local artisan workshops. ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=नमस्ते! मुझे ताज महल आगरा टूर बुक करना है। कृपया रेट और डिटेल्स भेजें।">
                  🎫 BOOK TAJ MAHAL TOUR
                </a>
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('packages');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <h3 className="text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-800 bg-clip-text mb-4 tracking-wide" 
                  style={{ fontFamily: "'Cinzel', serif" }}>
                <span className="text-blue-500 italic">Udaipur</span> Venice of the East - City of Lakes
              </h3>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"></div>
            </div>
            <p className="text-gray-700 text-lg lg:text-xl mb-8 leading-relaxed font-medium" 
               style={{ fontFamily: "'Crimson Text', serif" }}>
              🌅 Discover the most romantic city in India! Udaipur's pristine lakes, magnificent palaces, and fairy-tale setting 
              make it perfect for couples and culture lovers. Take sunset boat rides on Lake Pichola, explore the massive City Palace complex, 
              visit the famous Jag Mandir island palace, and enjoy traditional Rajasthani cultural performances in royal havelis. 💝
            </p>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-8 border border-pink-200 shadow-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center" style={{ fontFamily: "'Cinzel', serif" }}>
                <span className="text-pink-600">🏰</span> Royal Experience Includes:
              </h4>
              <ul className="text-gray-700 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=नमस्ते! मुझे उदयपुर लेक सिटी टूर चाहिए। कृपया पैकेज डिटेल्स दें।">
                  🌊 BOOK UDAIPUR TOUR
                </a>
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('packages');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <img 
              src="/attached_assets/image_1752391017047.png"
              alt="Udaipur City of Lakes Tour Package"
              className="relative rounded-2xl shadow-2xl w-full transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              🏰 Royal City
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
