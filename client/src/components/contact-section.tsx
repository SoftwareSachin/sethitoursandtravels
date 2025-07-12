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
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch for all your travel and taxi service needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-primary text-white p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Address</h4>
                  <p className="text-gray-600 text-sm sm:text-base">S-147, 4S New Loha Mandi Road, Machada, Jaipur-302013</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-primary text-white p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Phone Numbers</h4>
                  <div className="space-y-1">
                    <p className="text-gray-600 text-sm sm:text-base">
                      <button 
                        onClick={() => phone()}
                        className="hover:text-primary transition-colors underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      >
                        +91 {CONTACT_INFO.phone}
                      </button>
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <button 
                        onClick={() => window.location.href = 'tel:7727021780'}
                        className="hover:text-primary transition-colors underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                      >
                        +91 77270 21780
                      </button>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-primary text-white p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h4>
                  <p className="text-gray-600 text-sm sm:text-base break-all">
                    <button 
                      onClick={() => email()}
                      className="hover:text-primary transition-colors underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                    >
                      {CONTACT_INFO.email}
                    </button>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-emerald-600 text-white p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <FaWhatsapp className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">WhatsApp</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    <button 
                      onClick={() => whatsapp("मैं टूर बुक करना चाहता हूं। कृपया पैकेज और रेट्स की जानकारी दें।", 'rajasthani')}
                      className="hover:text-emerald-600 transition-colors underline focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                    >
                      Click to chat on WhatsApp
                    </button>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Business Owner</h4>
              <p className="text-gray-600 text-lg">Kuldeep Choudhary</p>
            </div>
          </div>

          <Card className="bg-white rounded-xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="taxi">Taxi Service</SelectItem>
                      <SelectItem value="tour">Tour Package</SelectItem>
                      <SelectItem value="outstation">Outstation Travel</SelectItem>
                      <SelectItem value="airport">Airport Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your requirements"
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-primary hover:bg-blue-700 text-white py-3 px-6 font-semibold"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
