import { Expand } from "lucide-react";

export default function PhotoGallery() {
  const galleryImages = [
    {
      src: "https://pixabay.com/get/g4ca2d92d039cd8ce2cdb3cec3e40668a48a85841a1980423f41ed651234386526f848e78dc031205834a014952f9b10bdf165c2311db3a5a85fd85cb394d59ed_1280.jpg",
      alt: "Hawa Mahal Jaipur"
    },
    {
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Luxury Car Fleet"
    },
    {
      src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Rajasthani Culture"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Jaisalmer Fort"
    },
    {
      src: "https://pixabay.com/get/g68d2798818de3ed6c3b2d8853bfad0b26e39b7f12f4a538d741b69417051f95ce27caf29ea234ab4e88c95e35139be36ebcda1962ca1dde96a62fc86f7fbfb1f_1280.jpg",
      alt: "Desert Safari"
    },
    {
      src: "https://pixabay.com/get/g4c5b3685e661c7df6a138ff3d7e57284da6ddf2663c6c80886fb254361e381b422fd96608603296eda9f83c0af74f1dfa746a688b76f68e3a0836f8e7e4e8374_1280.jpg",
      alt: "Udaipur Lake"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <p className="text-xl text-gray-600">
            Explore our beautiful destinations and premium services
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
