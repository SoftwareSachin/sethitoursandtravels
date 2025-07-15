import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import image1 from "@assets/image_1752394391126.png";
import image2 from "@assets/image_1752394415933.png";
import image3 from "@assets/image_1752394440227.png";
import image4 from "@assets/image_1752394455855.png";
import image5 from "@assets/image_1752394475081.png";
import image6 from "@assets/image_1752394495002.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Excellent service from Sethi Tour & Travels! The Golden Triangle tour was perfectly organized. Our driver Ramesh was very knowledgeable and punctual. Hotel arrangements were great and all attractions were covered. Highly recommended!",
      tour: "Golden Triangle Tour",
      date: "November 2024",
      image: image1
    },
    {
      name: "Priya Sharma", 
      location: "Mumbai",
      rating: 5,
      text: "We booked a Rajasthan family tour and it exceeded our expectations. The vehicle was clean and comfortable, driver was professional, and the itinerary was well-planned. Kids enjoyed the desert safari in Jaisalmer. Will definitely book again!",
      tour: "Rajasthan Family Tour",
      date: "October 2024",
      image: image2
    },
    {
      name: "Michael Johnson",
      location: "USA",
      rating: 5,
      text: "As foreign tourists, we were concerned about language and cultural barriers. Sethi Tours made our Rajasthan trip seamless. Guide spoke excellent English, explained history beautifully, and took care of all arrangements. Wonderful experience!",
      tour: "Luxury Rajasthan Tour",
      date: "September 2024",
      image: image3
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "Booked last-minute taxi service for airport pickup. Driver arrived 15 minutes early, very courteous behavior, and clean AC car. Fair pricing and no hidden charges. This is how taxi service should be! Will use again for sure.",
      tour: "Airport Transfer",
      date: "December 2024",
      image: image4
    },
    {
      name: "Sneha & Rohit",
      location: "Bangalore",
      rating: 5,
      text: "Our honeymoon trip to Udaipur was magical thanks to Sethi Tours. The romantic hotel, boat ride arrangements, special dinner setup - everything was perfect. They made our special moments even more memorable. Thank you!",
      tour: "Honeymoon Package",
      date: "October 2024",
      image: image5
    },
    {
      name: "Dr. Suresh Gupta",
      location: "Jaipur",
      rating: 5,
      text: "Regular user of their local taxi service. Always on time, well-maintained vehicles, and reasonable rates. The drivers are trustworthy and know the city well. Great for medical practice emergency calls and family trips.",
      tour: "Local Taxi Service",
      date: "Ongoing",
      image: image6
    }
  ];

  return (
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Star className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 xs:mb-6 px-2">
            What Our Customers Say
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 xs:px-4">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experiences with Sethi Tour & Travels.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-gray-600">Return Rate</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 pb-4">
                  <div className="absolute top-4 right-4">
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-medium text-gray-700">({testimonial.rating}.0)</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic text-base line-clamp-4">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="p-6 pt-0">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.location}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-primary font-semibold text-sm">{testimonial.tour}</p>
                        <p className="text-gray-500 text-xs">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl shadow-lg p-8 text-white inline-block">
            <h3 className="text-2xl font-bold mb-4">Join 1000+ Happy Customers</h3>
            <p className="text-lg mb-6 max-w-2xl">
              Experience the difference with Sethi Tour & Travels. Quality service, fair pricing, and memorable journeys guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://api.whatsapp.com/send?phone=919772021780&text=Hello%20I%20want%20to%20book%20a%20tour" 
                 className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Your Tour Now
              </a>
              <a href="tel:9772021780" 
                 className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Call for Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}