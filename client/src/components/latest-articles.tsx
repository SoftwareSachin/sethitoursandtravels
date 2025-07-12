import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, MessageCircle, Share2, Clock, Star, ArrowRight, Eye, Heart, TrendingUp } from "lucide-react";

export default function LatestArticles() {
  const articles = [
    {
      title: "Complete Guide to Rajasthan Heritage Tours",
      category: "Heritage Tours",
      date: "January 10, 2025",
      author: "Kuldeep Choudhary",
      comments: 24,
      views: 1250,
      likes: 89,
      readTime: "8 min read",
      excerpt: "Immerse yourself in the royal heritage of Rajasthan. From magnificent forts and palaces to vibrant culture and traditions, discover the complete essence of the Land of Kings with our comprehensive guide.",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      featured: true,
      trending: true,
      tags: ["Heritage", "Culture", "History", "Rajasthan"]
    },
    {
      title: "Golden Triangle Tour - Complete Itinerary",
      category: "Tour Packages",
      date: "January 8, 2025",
      author: "Kuldeep Choudhary",
      comments: 18,
      views: 980,
      likes: 67,
      readTime: "7 min read",
      excerpt: "Explore India's famous Golden Triangle covering Delhi, Agra, and Jaipur. Our detailed itinerary includes must-visit attractions, local experiences, and insider tips for the perfect journey.",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      featured: true,
      trending: false,
      tags: ["Golden Triangle", "Delhi", "Agra", "Jaipur"]
    },
    {
      title: "Best Time to Visit Rajasthan - Weather Guide",
      category: "Travel Tips",
      date: "January 5, 2025",
      author: "Kuldeep Choudhary",
      comments: 12,
      views: 756,
      likes: 45,
      readTime: "6 min read",
      excerpt: "Plan your Rajasthan trip with our comprehensive weather guide. Learn about the best months to visit, what to pack, and how to make the most of each season in the desert state.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      featured: false,
      trending: true,
      tags: ["Weather", "Planning", "Tips"]
    },
    {
      title: "Luxury Desert Safari in Jaisalmer",
      category: "Adventure Tours",
      date: "January 3, 2025",
      author: "Kuldeep Choudhary",
      comments: 31,
      views: 1450,
      likes: 112,
      readTime: "5 min read",
      excerpt: "Experience the magic of Thar Desert with our luxury desert safari packages. Camel rides, cultural performances, and starlit dinners await you in the golden city of Jaisalmer.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      featured: true,
      trending: false,
      tags: ["Desert", "Adventure", "Jaisalmer"]
    },
    {
      title: "Udaipur Lake Palace - A Royal Experience",
      category: "Luxury Travel",
      date: "December 28, 2024",
      author: "Kuldeep Choudhary",
      comments: 15,
      views: 892,
      likes: 78,
      readTime: "4 min read",
      excerpt: "Discover the romantic charm of Udaipur's Lake Palace. From boat rides on Lake Pichola to sunset views from City Palace, experience the Venice of the East in all its glory.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      featured: false,
      trending: false,
      tags: ["Udaipur", "Romance", "Luxury"]
    },
    {
      title: "Taxi Service Excellence in Rajasthan",
      category: "Service Updates",
      date: "December 25, 2024",
      author: "Kuldeep Choudhary",
      comments: 8,
      views: 634,
      likes: 34,
      readTime: "3 min read",
      excerpt: "Experience premium taxi services across Rajasthan with our fleet of well-maintained vehicles. From airport transfers to outstation trips, we ensure comfort and reliability.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      featured: false,
      trending: false,
      tags: ["Taxi", "Service", "Rajasthan"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            Travel Blog & Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Travel Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with expert travel insights, destination guides, and insider tips from 
            Rajasthan's most trusted travel service provider
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1 ${
              article.featured ? 'ring-2 ring-primary/20' : ''
            }`}>
              <div className="relative">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  {article.trending && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </span>
                  )}
                </div>
                
                {article.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-500 text-white p-2 rounded-full">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors cursor-pointer line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {article.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {article.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {article.comments}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Button 
                    asChild
                    variant="ghost" 
                    className="text-primary hover:text-blue-700 p-0 h-auto group/btn"
                  >
                    <a href={`https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(article.title)}`}>
                      <span className="mr-2">Continue Reading</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </a>
                  </Button>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Travel Insights
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Get the latest travel tips, destination guides, seasonal offers, and exclusive insights 
              from Rajasthan's premier travel experts. Join thousands of travelers who trust our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-primary hover:bg-blue-700 text-white px-8 py-3"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20subscribe%20to%20travel%20updates%20and%20latest%20articles">
                  Subscribe for Updates
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
              >
                <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20explore%20more%20travel%20articles%20and%20destination%20guides">
                  Explore More Articles
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}