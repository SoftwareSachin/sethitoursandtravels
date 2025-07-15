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
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-amber-50 relative overflow-hidden">
      {/* Haveli-style background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #dc2626 8px, transparent 8px),
                           radial-gradient(circle at 75% 75%, #ea580c 6px, transparent 6px),
                           radial-gradient(circle at 50% 50%, #d97706 4px, transparent 4px)`,
          backgroundSize: '150px 150px, 200px 200px, 100px 100px'
        }}></div>
      </div>
      
      {/* Traditional border decoration */}
      <div className="absolute top-0 left-0 w-full h-6 bg-repeat-x border-b-4 border-orange-600" style={{
        backgroundImage: `linear-gradient(90deg, #dc2626 0%, #ea580c 25%, #d97706 50%, #ca8a04 75%, #dc2626 100%)`,
        backgroundSize: '60px 24px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Haveli-style header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Traditional haveli entrance arch */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full border-4 border-orange-600 flex items-center justify-center shadow-xl">
                <Phone className="h-10 w-10 sm:h-12 sm:w-12 text-orange-600" />
              </div>
              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-600 rounded-full border-2 border-white"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-600 rounded-full border-2 border-white"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-600 rounded-full border-2 border-white"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-600 rounded-full border-2 border-white"></div>
            </div>
          </div>
          
          {/* Bilingual heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-700 mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
            Contact Us | संपर्क करें
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-2" style={{ fontFamily: "'Crimson Text', serif" }}>
            Get in touch for all your travel and taxi service needs. We're here to help you plan your perfect journey.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            हमसे जुड़ें अपनी यात्रा और टैक्सी सेवा की सभी जरूरतों के लिए। हम आपकी सपनों की यात्रा को सुंदर बनाने के लिए यहाँ हैं।
          </p>
          
          {/* Haveli-style statistics */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-orange-600 min-w-[120px]">
              <div className="text-2xl font-bold text-orange-700">24/7</div>
              <div className="text-sm text-gray-600">Service Available</div>
              <div className="text-xs text-gray-500">सेवा उपलब्ध</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-red-600 min-w-[120px]">
              <div className="text-2xl font-bold text-red-700">5min</div>
              <div className="text-sm text-gray-600">Response Time</div>
              <div className="text-xs text-gray-500">प्रतिक्रिया समय</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-yellow-600 min-w-[120px]">
              <div className="text-2xl font-bold text-yellow-700">100%</div>
              <div className="text-sm text-gray-600">Support</div>
              <div className="text-xs text-gray-500">सहायता</div>
            </div>
          </div>
        </div>

        {/* Haveli-style layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left side - Haveli contact information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-6 sm:mb-8" style={{ fontFamily: "'Cinzel', serif" }}>
                Get In Touch | संपर्क में रहें
              </h3>
              
              <div className="space-y-6">
                {/* Haveli-style address card */}
                <div className="group p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-orange-600 relative overflow-hidden">
                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-8 h-8 bg-red-600 transform rotate-45 translate-x-[-50%] translate-y-[-50%]"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-600 transform rotate-45 translate-x-[50%] translate-y-[-50%]"></div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 text-white p-4 rounded-xl flex-shrink-0 border-2 border-orange-800">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                        Office Address | कार्यालय का पता
                      </h4>
                      <p className="text-gray-700 leading-relaxed font-medium">S-147, 4S New Loha Mandi Road, Machada, Jaipur-302013</p>
                      <p className="text-gray-600 text-sm mt-1">मछाडा, जयपुर - राजस्थान</p>
                    </div>
                  </div>
                </div>

                {/* Haveli-style phone card */}
                <div className="group p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-red-600 relative overflow-hidden">
                  {/* Traditional pattern background */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-100 rounded-bl-full opacity-30"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-yellow-100 rounded-tr-full opacity-30"></div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white p-4 rounded-xl flex-shrink-0 border-2 border-red-800">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                        Phone Numbers | फोन नंबर
                      </h4>
                      <div className="space-y-2">
                        <p className="text-gray-700">
                          <button 
                            onClick={() => phone()}
                            className="hover:text-red-600 transition-colors font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded text-lg"
                          >
                            +91 {CONTACT_INFO.phone}
                          </button>
                        </p>
                        <p className="text-gray-600 text-sm">मुख्य संपर्क नंबर</p>
                        <p className="text-gray-700 mt-2">
                          <a 
                            href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=नमस्कार%20सेठी%20टूर%20एंड%20ट्रेवल्स%20में%20आपका%20स्वागत%20है।%20मैं%20राजस्थान%20टूर%20पैकेज%20के%20बारे%20में%20जानकारी%20चाहता%20हूँ।`}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="hover:text-emerald-600 transition-colors font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded flex items-center text-lg"
                          >
                            <FaWhatsapp className="h-5 w-5 mr-2" />
                            +91 {CONTACT_INFO.whatsapp}
                          </a>
                        </p>
                        <p className="text-gray-500 text-sm">व्हाट्सऐप नंबर</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Haveli-style email card */}
                <div className="group p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-yellow-600 relative overflow-hidden">
                  {/* Decorative patterns */}
                  <div className="absolute top-0 left-0 w-12 h-12 bg-yellow-100 rounded-br-full opacity-30"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-orange-100 rounded-tl-full opacity-30"></div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-600 text-white p-4 rounded-xl flex-shrink-0 border-2 border-yellow-800">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                        Email Address | ईमेल पता
                      </h4>
                      <p className="text-gray-700 break-all font-medium">
                        <button 
                          onClick={() => email()}
                          className="hover:text-yellow-700 transition-colors font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 rounded text-lg"
                        >
                          {CONTACT_INFO.email}
                        </button>
                      </p>
                      <p className="text-gray-600 text-sm mt-1">व्यावसायिक संपर्क</p>
                    </div>
                  </div>
                </div>

                {/* Haveli-style WhatsApp direct card */}
                <div className="group p-6 bg-emerald-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-emerald-800 relative overflow-hidden">
                  {/* Traditional decorative patterns */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-br-full opacity-10"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-emerald-400 rounded-tl-full opacity-20"></div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-4 rounded-xl flex-shrink-0 border-2 border-white/30">
                      <FaWhatsapp className="h-8 w-8" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-white text-xl mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                        WhatsApp Direct | व्हाट्सऐप चैट
                      </h4>
                      <p className="text-emerald-100 mb-3 font-medium">Get instant responses for bookings and inquiries</p>
                      <p className="text-emerald-200 text-sm mb-4">तुरंत बुकिंग और पूछताछ के लिए संपर्क करें</p>
                      <button 
                        onClick={() => whatsapp("मैं टूर बुक करना चाहता हूं। कृपया पैकेज और रेट्स की जानकारी दें।", 'rajasthani')}
                        className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg border-2 border-emerald-200"
                      >
                        Start WhatsApp Chat | चैट शुरू करें
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Haveli-style business owner card */}
            <div className="bg-orange-600 p-6 rounded-2xl text-white border-4 border-orange-800 relative overflow-hidden shadow-xl">
              {/* Traditional arch pattern */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-white rounded-b-full opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-red-600"></div>
              
              <div className="text-center">
                <h4 className="font-bold text-2xl mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
                  Business Owner | व्यवसाय स्वामी
                </h4>
                <p className="text-orange-100 text-xl mb-2 font-bold">Kuldeep Choudhary</p>
                <p className="text-orange-200 text-lg">कुलदीप चौधरी</p>
                <p className="text-orange-200 mt-3">Available 24/7 for your travel needs</p>
                <p className="text-orange-100 text-sm">आपकी यात्रा की जरूरतों के लिए 24/7 उपलब्ध</p>
              </div>
            </div>
          </div>

          {/* Haveli-style contact form */}
          <Card className="bg-white rounded-3xl shadow-2xl border-4 border-orange-600 overflow-hidden relative">
            {/* Traditional haveli header */}
            <div className="bg-orange-600 p-8 text-white relative overflow-hidden">
              {/* Decorative arches */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-0 left-1/4 w-16 h-16 bg-white rounded-full"></div>
                <div className="absolute top-0 right-1/4 w-12 h-12 bg-yellow-300 rounded-full"></div>
                <div className="absolute bottom-0 left-1/3 w-8 h-8 bg-red-300 rounded-full"></div>
              </div>
              
              <div className="relative text-center">
                <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                  Send us a Message | संदेश भेजें
                </h3>
                <p className="text-orange-100 text-lg">We'll get back to you within 5 minutes</p>
                <p className="text-orange-200 text-sm">हम 5 मिनट में आपको जवाब देंगे</p>
              </div>
              
              {/* Traditional border pattern */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-repeat-x" style={{
                backgroundImage: `linear-gradient(90deg, #dc2626 0%, #fbbf24 50%, #dc2626 100%)`,
                backgroundSize: '20px 4px'
              }}></div>
            </div>
            
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                      Full Name | पूरा नाम *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name | अपना पूरा नाम दर्ज करें"
                      className="w-full h-12 border-3 border-orange-300 rounded-xl focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition-all bg-amber-50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                      Phone Number | फोन नंबर *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="Enter your phone number | अपना फोन नंबर दर्ज करें"
                      className="w-full h-12 border-3 border-orange-300 rounded-xl focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition-all bg-amber-50"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service" className="block text-sm font-bold text-gray-800 mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                    Service Required | आवश्यक सेवा *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="w-full h-12 border-3 border-orange-300 rounded-xl focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition-all bg-amber-50">
                      <SelectValue placeholder="Select a service | एक सेवा चुनें" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="taxi">Taxi Service | टैक्सी सेवा</SelectItem>
                      <SelectItem value="tour">Tour Package | टूर पैकेज</SelectItem>
                      <SelectItem value="outstation">Outstation Travel | आउटस्टेशन यात्रा</SelectItem>
                      <SelectItem value="airport">Airport Transfer | एयरपोर्ट ट्रांसफर</SelectItem>
                      <SelectItem value="rental">Car Rental | कार किराया</SelectItem>
                      <SelectItem value="wedding">Wedding Transportation | शादी परिवहन</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                    Message | संदेश *
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your requirements, preferred dates, destinations, or any specific needs... | अपनी आवश्यकताओं, पसंदीदा तारीखों, गंतव्यों या किसी विशिष्ट जरूरत के बारे में बताएं..."
                    className="w-full border-3 border-orange-300 rounded-xl focus:border-orange-600 focus:ring-2 focus:ring-orange-200 transition-all resize-none bg-amber-50"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const message = `नमस्कार सेठी टूर एंड ट्रेवल्स में आपका स्वागत है।

नाम: ${formData.name}
फोन: ${formData.phone}
ईमेल: ${formData.email}
सेवा: ${formData.service}

संदेश: ${formData.message}

कृपया जल्दी से जवाब दें। धन्यवाद!`;
                    
                    const whatsappUrl = `https://wa.me/917727021780?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="w-full min-h-[56px] sm:min-h-[60px] bg-orange-600 hover:bg-orange-700 text-white font-bold text-base sm:text-lg rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all shadow-xl hover:shadow-2xl border-2 border-orange-800 hover:scale-105 flex items-center justify-center px-4 py-3 sm:py-4 mobile-btn-responsive"
                  style={{ fontFamily: "'Cinzel', serif", touchAction: 'manipulation' }}
                >
                  <FaWhatsapp className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  <span className="text-center leading-tight">
                    <span className="block sm:inline">Send Message via WhatsApp</span>
                    <span className="block sm:inline sm:ml-2">| व्हाट्सऐप से संदेश भेजें</span>
                  </span>
                </button>
              </div>
              
              <div className="mt-6 p-4 bg-orange-100 rounded-xl border-2 border-orange-300">
                <p className="text-sm text-gray-700 text-center">
                  <span className="font-bold">Quick Response | त्वरित उत्तर:</span> We typically respond within 5 minutes on WhatsApp (9 AM - 9 PM IST)
                </p>
                <p className="text-xs text-gray-600 text-center mt-1">
                  व्हाट्सऐप पर हम आमतौर पर 5 मिनट में जवाब देते हैं
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
