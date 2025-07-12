import { Expand } from "lucide-react";

export default function PhotoGallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Taj Mahal Agra - UNESCO World Heritage Monument"
    },
    {
      src: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Hawa Mahal Jaipur - Palace of Winds Architecture"
    },
    {
      src: "https://images.unsplash.com/photo-1599661046827-dacde645fe26?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Udaipur City Palace - Lake Pichola Rajasthan"
    },
    {
      src: "https://images.unsplash.com/photo-1539066764756-e0dd9537928c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Jaisalmer Fort - Golden Fort Thar Desert"
    },
    {
      src: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Jodhpur Blue City - Mehrangarh Fort Views"
    },
    {
      src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Amber Fort Jaipur - Rajput Heritage Architecture"
    },
    {
      src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Red Fort Delhi - Mughal Empire Heritage"
    },
    {
      src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Ranthambore National Park - Bengal Tiger Safari"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Rajasthan Aravalli Hills - Desert Landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Taj Mahal Dawn - Golden Hour Photography"
    },
    {
      src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Luxury Car Fleet - India Tour Vehicles"
    },
    {
      src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Rajasthani Cultural Dance - Folk Performance"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Incredible India Photo Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the authentic beauty of India and Rajasthan through real destinations! From UNESCO World Heritage sites like Taj Mahal 
            to magnificent Rajasthan palaces, desert safaris, and cultural experiences - see what awaits you on our genuine India tours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <Expand className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
