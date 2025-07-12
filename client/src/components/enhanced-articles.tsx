import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, MessageSquare, ArrowRight, Star } from "lucide-react";

export default function EnhancedArticles() {
  const articles = [
    {
      title: "Explore the Best of Shimla and Manali",
      excerpt: "Discover the breathtaking beauty of Himachal Pradesh's most popular hill stations. From the colonial charm of Shimla to the adventure paradise of Manali, explore snow-capped mountains, apple orchards, and thrilling activities.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Best Cars Available",
      date: "September 17, 2024",
      author: "Travel Expert",
      featured: true,
      readTime: "5 min read",
      tags: ["Hill Station", "Adventure", "Himachal"]
    },
    {
      title: "Special Offers for Honeymoon Trips",
      excerpt: "Planning your dream honeymoon? Discover our exclusive romantic packages for couples. From palace hotels in Udaipur to desert camps in Jaisalmer, create unforgettable memories with your loved one.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Rental Car Issues",
      date: "October 8, 2024",
      author: "Romance Specialist",
      featured: false,
      readTime: "4 min read",
      tags: ["Honeymoon", "Romance", "Luxury"]
    },
    {
      title: "Taxi Service with Sethi Tour and Travels",
      excerpt: "Experience premium taxi services in Rajasthan. Our fleet of well-maintained vehicles and professional drivers ensure comfortable and safe journeys for all your travel needs across the state.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "International Car Rent",
      date: "September 25, 2024",
      author: "Service Manager",
      featured: false,
      readTime: "3 min read",
      tags: ["Taxi", "Service", "Rajasthan"]
    },
    {
      title: "Complete Guide to Rajasthan Heritage Tours",
      excerpt: "Immerse yourself in the royal heritage of Rajasthan. From magnificent forts and palaces to vibrant culture and traditions, discover the complete essence of the Land of Kings with our comprehensive guide.",
      image: "https://pixabay.com/get/g4ca2d92d039cd8ce2cdb3cec3e40668a48a85841a1980423f41ed651234386526f848e78dc031205834a014952f9b10bdf165c2311db3a5a85fd85cb394d59ed_1280.jpg",
      category: "Heritage Tours",
      date: "November 15, 2024",
      author: "Heritage Guide",
      featured: true,
      readTime: "8 min read",
      tags: ["Heritage", "Culture", "History"]
    },
    {
      title: "Best Time to Visit Rajasthan - Weather Guide",
      excerpt: "Plan your Rajasthan trip with our comprehensive weather guide. Learn about the best months to visit, what to pack, and how to make the most of each season in the desert state.",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Travel Tips",
      date: "October 22, 2024",
      author: "Travel Advisor",
      featured: false,
      readTime: "6 min read",
      tags: ["Weather", "Planning", "Tips"]
    },
    {
      title: "Golden Triangle Tour - Complete Itinerary",
      excerpt: "Explore India's famous Golden Triangle covering Delhi, Agra, and Jaipur. Our detailed itinerary includes must-visit attractions, local experiences, and insider tips for the perfect journey.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      category: "Tour Packages",
      date: "November 5, 2024",
      author: "Tour Specialist",
      featured: true,
      readTime: "7 min read",
      tags: ["Golden Triangle", "Delhi", "Agra", "Jaipur"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Travel Articles</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why Sethi Tour and Travels is Rajasthan's Preferred Taxi Service and Tour Package Provider. 
            Stay updated with the latest travel insights, destination guides, and expert tips for your perfect journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${
              article.featured ? 'ring-2 ring-secondary' : ''
            }`}>
              {article.featured && (
                <div className="bg-secondary text-white text-center py-2 text-sm font-medium">
                  Featured Article
                </div>
              )}
              
              <div className="relative">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
                {article.featured && (
                  <div className="absolute top-4 right-4">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{article.author}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-blue-700 p-0"
                  >
                    Continue Reading
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Travel Blog & Updates</h3>
            <p className="text-gray-600 mb-6">
              Stay connected with our travel blog for the latest destination updates, travel tips, 
              seasonal offers, and insider guides to make your journeys more memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-blue-700 text-white"
              >
                <a href="/blog">
                  View All Articles
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20subscribe%20to%20travel%20updates">
                  Subscribe for Updates
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}