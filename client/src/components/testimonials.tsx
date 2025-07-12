import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Excellent service from Sethi Tour & Travels! The Golden Triangle tour was perfectly organized. Our driver Ramesh was very knowledgeable and punctual. Hotel arrangements were great and all attractions were covered. Highly recommended!",
      tour: "Golden Triangle Tour",
      date: "November 2024"
    },
    {
      name: "Priya Sharma", 
      location: "Mumbai",
      rating: 5,
      text: "We booked a Rajasthan family tour and it exceeded our expectations. The vehicle was clean and comfortable, driver was professional, and the itinerary was well-planned. Kids enjoyed the desert safari in Jaisalmer. Will definitely book again!",
      tour: "Rajasthan Family Tour",
      date: "October 2024"
    },
    {
      name: "Michael Johnson",
      location: "USA",
      rating: 5,
      text: "As foreign tourists, we were concerned about language and cultural barriers. Sethi Tours made our Rajasthan trip seamless. Guide spoke excellent English, explained history beautifully, and took care of all arrangements. Wonderful experience!",
      tour: "Luxury Rajasthan Tour",
      date: "September 2024"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "Booked last-minute taxi service for airport pickup. Driver arrived 15 minutes early, very courteous behavior, and clean AC car. Fair pricing and no hidden charges. This is how taxi service should be! Will use again for sure.",
      tour: "Airport Transfer",
      date: "December 2024"
    },
    {
      name: "Sneha & Rohit",
      location: "Bangalore",
      rating: 5,
      text: "Our honeymoon trip to Udaipur was magical thanks to Sethi Tours. The romantic hotel, boat ride arrangements, special dinner setup - everything was perfect. They made our special moments even more memorable. Thank you!",
      tour: "Honeymoon Package",
      date: "October 2024"
    },
    {
      name: "Dr. Suresh Gupta",
      location: "Jaipur",
      rating: 5,
      text: "Regular user of their local taxi service. Always on time, well-maintained vehicles, and reasonable rates. The drivers are trustworthy and know the city well. Great for medical practice emergency calls and family trips.",
      tour: "Local Taxi Service",
      date: "Ongoing"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experiences with Sethi Tour & Travels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({testimonial.rating}.0)</span>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">{testimonial.tour}</p>
                      <p className="text-xs text-gray-500">{testimonial.date}</p>
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