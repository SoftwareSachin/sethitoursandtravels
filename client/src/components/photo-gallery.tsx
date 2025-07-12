import { Expand } from "lucide-react";

export default function PhotoGallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "🕌 Taj Mahal Agra - World Wonder UNESCO Heritage Site"
    },
    {
      src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "🌸 Hawa Mahal Jaipur - Palace of Winds Pink City"
    },
    {
      src: "https://images.unsplash.com/photo-1599661046827-dacde645fe26?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "💕 Udaipur City Palace - Lake Pichola Venice of East"
    },
    {
      src: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "🐪 Jaisalmer Desert Safari - Thar Desert Golden City"
    },
    {
      src: "https://images.unsplash.com/photo-1608321672966-0dbb87c832c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "🔵 Jodhpur Mehrangarh Fort - Blue City Rajasthan"
    },
    {
      src: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "🏰 Amber Fort Jaipur - Rajput Architecture Heritage"
    },
    {
      src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "🏛️ Red Fort Delhi - Mughal Architecture UNESCO Site"
    },
    {
      src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "🐅 Ranthambore Tiger Safari - Wildlife National Park"
    },
    {
      src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "💃 Rajasthani Folk Dance - Traditional Cultural Performance"
    },
    {
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "🌅 Taj Mahal Sunrise - Golden Hour Photography Tour"
    },
    {
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "🚗 Premium AC Car Fleet - Comfortable India Tours"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "🌄 Rajasthan Desert Landscape - Golden Sand Dunes"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🇮🇳 Incredible India Photo Gallery</h2>
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
