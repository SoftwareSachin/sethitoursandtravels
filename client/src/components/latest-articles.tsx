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
      image: "/attached_assets/steptodown.com608599_1752609444647.jpg",
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
      image: "/attached_assets/steptodown.com284521_1752609502035.jpg",
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
      image: "/attached_assets/steptodown.com780855_1752609602940.jpg",
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
      image: "/attached_assets/steptodown.com396501_1752609668664.jpg",
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
      image: "/attached_assets/steptodown.com766766_1752609734764.jpg",
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
      image: "/attached_assets/steptodown.com840584_1752609781715.jpg",
      featured: false,
      trending: false,
      tags: ["Taxi", "Service", "Rajasthan"]
    }
  ];

  return (
    <section className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 relative overflow-hidden">
      {/* Traditional Indian Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.3'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          {/* Traditional Indian Border Design */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            <div className="mx-4 p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
          </div>
          
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            यात्रा लेख और अंतर्दृष्टि | Travel Blog & Insights
          </div>
          
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 xs:mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            Latest Travel Articles
          </h2>
          <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-orange-700 mb-3 xs:mb-4">
            नवीनतम यात्रा लेख
          </div>
          
          <p className="text-sm xs:text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed px-2 xs:px-0">
            Stay updated with expert travel insights, destination guides, and insider tips from 
            Rajasthan's most trusted travel service provider. Discover the incredible heritage, 
            culture, and beauty of India through our curated articles.
          </p>
          
          {/* Traditional Indian Decorative Elements */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
            <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}} />
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.8s'}} />
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <Card key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 border-2 ${
              article.featured ? 'border-orange-300 bg-gradient-to-b from-orange-50 to-white' : 'border-gray-100'
            }`}>
              <div className="relative">
                {/* Traditional Indian Border Top */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500" />
                
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-6 left-4 flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {article.category}
                  </span>
                  {article.trending && (
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </span>
                  )}
                </div>
                
                {article.featured && (
                  <div className="absolute top-6 right-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-2 rounded-full shadow-lg">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                )}
                
                {/* Traditional Indian Corner Decoration */}
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <div className="w-8 h-8 border-2 border-orange-400 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-orange-400 rounded-full" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                {/* Traditional Indian Pattern Background */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-400 rounded-bl-3xl" />
                </div>
                
                <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                  <div className="flex items-center bg-orange-50 px-3 py-1 rounded-full">
                    <Calendar className="h-4 w-4 mr-1 text-orange-600" />
                    <span className="font-medium">{article.date}</span>
                  </div>
                  <div className="flex items-center bg-red-50 px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4 mr-1 text-red-600" />
                    <span className="font-medium">{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors cursor-pointer line-clamp-2 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium hover:from-orange-200 hover:to-red-200 transition-all cursor-pointer border border-orange-200">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4 bg-gradient-to-r from-orange-50 to-red-50 p-3 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-orange-600">
                      <Eye className="h-4 w-4 mr-1" />
                      <span className="font-medium">{article.views}</span>
                    </div>
                    <div className="flex items-center text-red-600">
                      <Heart className="h-4 w-4 mr-1" />
                      <span className="font-medium">{article.likes}</span>
                    </div>
                    <div className="flex items-center text-yellow-600">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span className="font-medium">{article.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <User className="h-4 w-4 mr-1" />
                    <span className="font-medium">{article.author}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  >
                    <a href={`https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(article.title)}`}>
                      <span className="mr-2">पढ़ना जारी रखें | Continue Reading</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </a>
                  </Button>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="p-2 hover:bg-orange-100 rounded-full">
                      <Share2 className="h-4 w-4 text-orange-600" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto border-4 border-yellow-300 relative overflow-hidden">
            {/* Traditional Indian Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Stay Updated with Travel Insights
              </h3>
              <div className="text-xl font-bold text-yellow-200 mb-6">
                यात्रा अंतर्दृष्टि के साथ अपडेट रहें
              </div>
              
              <p className="text-white/90 mb-8 leading-relaxed text-lg max-w-2xl mx-auto">
                Get the latest travel tips, destination guides, seasonal offers, and exclusive insights 
                from Rajasthan's premier travel experts. Join thousands of travelers who trust our expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-yellow-100 hover:text-red-600 px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20subscribe%20to%20travel%20updates%20and%20latest%20articles">
                    Subscribe for Updates
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20explore%20more%20travel%20articles%20and%20destination%20guides">
                    Explore More Articles
                  </a>
                </Button>
              </div>
              
              {/* Traditional Indian Bottom Border */}
              <div className="flex items-center justify-center mt-8 space-x-2">
                <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.3s'}} />
                <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce" style={{animationDelay: '0.4s'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}