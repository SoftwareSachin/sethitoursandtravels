import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCommunication, CONTACT_INFO } from "./communication-utils";
import type { InsertContactInquiry } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { whatsapp, phone, email } = useCommunication();

  const mutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: "", phone: "", service: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contact-inquiries"] });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    mutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Phone className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch for all your travel and taxi service needs. We're here to help you plan your perfect journey.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-600">Service Available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5min</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-xl flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Office Address</h4>
                      <p className="text-gray-600 leading-relaxed">S-147, 4S New Loha Mandi Road, Machada, Jaipur-302013</p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-xl flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Phone Numbers</h4>
                      <div className="space-y-2">
                        <p className="text-gray-600">
                          <button 
                            onClick={() => phone()}
                            className="hover:text-green-600 transition-colors font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                          >
                            +91 {CONTACT_INFO.phone}
                          </button>
                          <span className="text-gray-400 ml-2">(Primary)</span>
                        </p>
                        <p className="text-gray-600">
                          <button 
                            onClick={() => window.location.href = 'tel:7727021780'}
                            className="hover:text-green-600 transition-colors font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                          >
                            +91 77270 21780
                          </button>
                          <span className="text-gray-400 ml-2">(WhatsApp)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 rounded-xl flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Email Address</h4>
                      <p className="text-gray-600 break-all">
                        <button 
                          onClick={() => email()}
                          className="hover:text-red-600 transition-colors font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded"
                        >
                          {CONTACT_INFO.email}
                        </button>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group p-6 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                      <FaWhatsapp className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-white text-lg mb-2">WhatsApp Direct</h4>
                      <p className="text-emerald-100 mb-3">Get instant responses for bookings and inquiries</p>
                      <button 
                        onClick={() => whatsapp("मैं टूर बुक करना चाहता हूं। कृपया पैकेज और रेट्स की जानकारी दें।", 'rajasthani')}
                        className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                      >
                        Start WhatsApp Chat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl text-white">
              <h4 className="font-bold text-xl mb-4">Business Owner</h4>
              <p className="text-gray-300 text-lg mb-2">Kuldeep Choudhary</p>
              <p className="text-gray-400">Available 24/7 for your travel needs</p>
            </div>
          </div>

          <Card className="bg-white rounded-3xl shadow-2xl border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-purple-600 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Send us a Message</h3>
              <p className="text-blue-100">We'll get back to you within 5 minutes</p>
            </div>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-3">
                    Service Required *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="taxi">Taxi Service</SelectItem>
                      <SelectItem value="tour">Tour Package</SelectItem>
                      <SelectItem value="outstation">Outstation Travel</SelectItem>
                      <SelectItem value="airport">Airport Transfer</SelectItem>
                      <SelectItem value="rental">Car Rental</SelectItem>
                      <SelectItem value="wedding">Wedding Transportation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your requirements, preferred dates, destinations, or any specific needs..."
                    className="w-full border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white py-4 px-8 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {mutation.isPending ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-semibold">Quick Response:</span> We typically respond within 5 minutes during business hours (9 AM - 9 PM IST)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
