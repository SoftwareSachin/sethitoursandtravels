import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, MessageCircle, Share2 } from "lucide-react";

export default function LatestArticles() {
  const articles = [
    {
      title: "Explore the Best of Shimla and Manali",
      category: "Best Cars Available",
      date: "September 17, 2024",
      author: "Kuldeep Choudhary",
      comments: 0,
      excerpt: "Discover the breathtaking beauty of Himachal Pradesh with our exclusive Shimla and Manali tour packages. Experience snow-capped mountains, colonial architecture, and adventure sports.",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      featured: true
    },
    {
      title: "Special Offers for Honeymoon Trips",
      category: "Rental Car Issues",
      date: "October 8, 2024", 
      author: "Kuldeep Choudhary",
      comments: 0,
      excerpt: "Planning your dream honeymoon? Our romantic getaway packages to Udaipur, Goa, and Kerala offer the perfect blend of luxury, privacy, and unforgettable experiences.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Taxi Service with Sethi Tour and Travels",
      category: "International Car Rent",
      date: "September 25, 2024",
      author: "Kuldeep Choudhary", 
      comments: 0,
      excerpt: "Experience premium taxi services across Rajasthan with our fleet of well-maintained vehicles. From airport transfers to outstation trips, we ensure comfort and reliability.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
          <p className="text-xl text-gray-600">
            Why Sethi Tour and Travels is Rajasthan's Preferred Taxi Service and Tour Package Provider
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                {article.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </h3>
                
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {article.comments} comments
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <Button 
                    asChild
                    variant="link" 
                    className="text-primary hover:text-blue-700 p-0 h-auto"
                  >
                    <a href={`https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(article.title)}`}>
                      Continue reading
                    </a>
                  </Button>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="p-1">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}