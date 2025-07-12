import { useToast } from "@/hooks/use-toast";

// Contact information for Sethi Tour & Travels
export const CONTACT_INFO = {
  phone: "9772021780",
  whatsapp: "919772021780",
  email: "sethitourstravels8888@gmail.com",
  address: "S-147, 4S New Loha Mandi Road, Machada, Jaipur-302013, Rajasthan, India",
  businessOwner: "Kuldeep Choudhary",
  businessHours: "24/7 Service Available",
  languages: ["Hindi", "English", "Rajasthani"],
  specialties: ["Rajasthan Heritage Tours", "Golden Triangle", "Desert Safaris", "Royal Palace Tours"]
};

// Premium Rajasthani greetings and messages - NO EMOJIS
export const PREMIUM_MESSAGES = {
  rajasthani: {
    greeting: "खम्मा गणी सा! राजस्थान में आपका स्वागत है।",
    welcome: "पधारो म्हारे देश में! राजस्थान की रॉयल यात्रा का आनंद लें।",
    farewell: "फिर मिलेंगे, राम राम सा!",
    businessContact: "कुलदीप चौधरी जी की सेवा में",
    serviceTag: "प्रीमियम टूर एंड ट्रेवल सर्विसेज",
    experience: "राजस्थान की संपूर्ण यात्रा का आनंद"
  },
  hindi: {
    greeting: "नमस्कार! सेठी टूर एंड ट्रेवल्स में आपका स्वागत है।",
    welcome: "आपकी यात्रा को यादगार बनाने के लिए हम यहाँ हैं।",
    farewell: "धन्यवाद! आपकी सेवा में हमेशा तत्पर।",
    businessContact: "कुलदीप चौधरी जी की सेवा में",
    serviceTag: "प्रीमियम टूर एंड ट्रेवल सर्विसेज",
    experience: "राजस्थान की संपूर्ण यात्रा का आनंद"
  },
  english: {
    greeting: "Namaste! Welcome to Sethi Tour & Travels.",
    welcome: "Experience the Royal Heritage of Rajasthan with us.",
    farewell: "Thank you for choosing us. We're always at your service!",
    businessContact: "Kuldeep Choudhary - Premium Travel Services",
    serviceTag: "Premium Tour & Travel Services",
    experience: "Complete Rajasthan Travel Experience"
  }
};

// Premium greeting messages in Rajasthani and Hindi - NO EMOJIS
const PREMIUM_GREETINGS = {
  rajasthani: {
    morning: "राम राम सा! सुप्रभात! सेठी टूर एंड ट्रेवल्स में आपका स्वागत है।",
    afternoon: "राम राम सा! नमस्कार! सेठी टूर एंड ट्रेवल्स में आपका स्वागत है।",
    evening: "राम राम सा! शुभ संध्या! सेठी टूर एंड ट्रेवल्स में आपका स्वागत है।",
    night: "राम राम सा! शुभ रात्रि! सेठी टूर एंड ट्रेवल्स में आपका स्वागत है।"
  },
  hindi: {
    morning: "सुप्रभात! सेठी टूर एंड ट्रेवल्स में आपका हार्दिक स्वागत है।",
    afternoon: "नमस्ते! सेठी टूर एंड ट्रेवल्स में आपका हार्दिक स्वागत है।",
    evening: "शुभ संध्या! सेठी टूर एंड ट्रेवल्स में आपका हार्दिक स्वागत है।",
    night: "शुभ रात्रि! सेठी टूर एंड ट्रेवल्स में आपका हार्दिक स्वागत है।"
  },
  english: {
    morning: "Good Morning! Welcome to Sethi Tour & Travels.",
    afternoon: "Good Afternoon! Welcome to Sethi Tour & Travels.",
    evening: "Good Evening! Welcome to Sethi Tour & Travels.",
    night: "Good Night! Welcome to Sethi Tour & Travels."
  }
};

// Get time-based greeting
const getTimeBasedGreeting = (language: 'rajasthani' | 'hindi' | 'english' = 'rajasthani') => {
  const hour = new Date().getHours();
  let timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
  
  if (hour >= 5 && hour < 12) timeOfDay = 'morning';
  else if (hour >= 12 && hour < 17) timeOfDay = 'afternoon';
  else if (hour >= 17 && hour < 21) timeOfDay = 'evening';
  else timeOfDay = 'night';
  
  return PREMIUM_GREETINGS[language][timeOfDay];
};

// Utility functions for communication - NO EMOJIS
export const CommunicationUtils = {
  // WhatsApp with premium greeting and custom message
  openWhatsApp: (message?: string, language: 'rajasthani' | 'hindi' | 'english' = 'rajasthani') => {
    const greeting = getTimeBasedGreeting(language);
    const msgs = PREMIUM_MESSAGES[language];
    const baseMessage = message || "मैं आपकी सेवाओं के बारे में जानकारी चाहता हूं।";
    
    const finalMessage = `${greeting}

${baseMessage}

${msgs.businessContact}
${msgs.serviceTag}
${msgs.experience}

संपर्क: +91${CONTACT_INFO.phone}
${CONTACT_INFO.businessHours}

${msgs.farewell}`;
    
    const encodedMessage = encodeURIComponent(finalMessage);
    const whatsappNumber = CONTACT_INFO.whatsapp;
    const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    console.log('WhatsApp URL:', url);
    console.log('WhatsApp Number:', whatsappNumber);
    
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      // Fallback to a simpler message if the complex one fails
      const simpleMessage = encodeURIComponent(`राम राम सा! मैं सेठी टूर एंड ट्रेवल्स की सेवाओं के बारे में जानकारी चाहता हूं। संपर्क: +91${CONTACT_INFO.phone}`);
      const simpleUrl = `https://wa.me/${whatsappNumber}?text=${simpleMessage}`;
      window.open(simpleUrl, '_blank', 'noopener,noreferrer');
    }
  },

  // Phone call function
  makeCall: () => {
    const phoneUrl = `tel:+91${CONTACT_INFO.phone}`;
    try {
      window.location.href = phoneUrl;
    } catch (error) {
      console.error('Error making phone call:', error);
      alert(`Please call: +91${CONTACT_INFO.phone}`);
    }
  },

  // Email function with premium template
  sendEmail: (subject?: string, body?: string, language: 'rajasthani' | 'hindi' | 'english' = 'hindi') => {
    const greeting = getTimeBasedGreeting(language);
    const msgs = PREMIUM_MESSAGES[language];
    
    const defaultSubject = language === 'rajasthani' ? 
      "राजस्थान टूर की जानकारी" : 
      language === 'hindi' ? 
      "सेठी टूर एंड ट्रेवल्स - सेवा की जानकारी" : 
      "Sethi Tour & Travels - Service Inquiry";
    
    const defaultBody = `${greeting}

${body || "मैं आपकी सेवाओं के बारे में विस्तार से जानना चाहता हूं।"}

${msgs.businessContact}
${msgs.serviceTag}
${msgs.experience}

संपर्क विवरण:
फोन: +91${CONTACT_INFO.phone}
व्हाट्सएप: +91${CONTACT_INFO.phone}
सेवा समय: ${CONTACT_INFO.businessHours}

${msgs.farewell}`;
    
    const emailUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject || defaultSubject)}&body=${encodeURIComponent(defaultBody)}`;
    
    try {
      window.open(emailUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening email:', error);
      window.location.href = emailUrl;
    }
  },

  // Booking specific message
  getBookingMessage: (packageName: string, dates?: string, travelers?: number) => {
    const greeting = getTimeBasedGreeting('rajasthani');
    const datesInfo = dates ? `\nयात्रा की तारीख: ${dates}` : '';
    const travelersInfo = travelers ? `\nयात्रियों की संख्या: ${travelers}` : '';
    
    return `${greeting}

मैं ${packageName} के लिए बुकिंग करना चाहता हूं।${datesInfo}${travelersInfo}

कृपया विस्तृत जानकारी और दरें भेजें।

${PREMIUM_MESSAGES.rajasthani.businessContact}
${PREMIUM_MESSAGES.rajasthani.serviceTag}`;
  },

  // Service specific message
  getServiceMessage: (serviceName: string, additionalInfo?: string) => {
    const greeting = getTimeBasedGreeting('rajasthani');
    const info = additionalInfo ? `\n${additionalInfo}` : '';
    
    return `${greeting}

मुझे ${serviceName} की सेवा चाहिए।${info}

कृपया दरें और उपलब्धता की जानकारी दें।

${PREMIUM_MESSAGES.rajasthani.businessContact}
${PREMIUM_MESSAGES.rajasthani.serviceTag}`;
  },

  // Emergency message
  getEmergencyMessage: (location?: string) => {
    const greeting = getTimeBasedGreeting('rajasthani');
    const baseMessage = `${greeting}

मुझे तत्काल टैक्सी सेवा चाहिए।`;
    const locationInfo = location ? `\nस्थान: ${location}` : '';
    return `${baseMessage}${locationInfo}

कृपया जल्दी भेजें।
धन्यवाद!`;
  },

  // Corporate booking message
  getCorporateMessage: (companyName: string, requirement: string) => {
    const greeting = getTimeBasedGreeting('english');
    return `${greeting}

Company: ${companyName}
Requirement: ${requirement}

Please contact for corporate rates and services.

Best regards,
Sethi Tour & Travels`;
  }
};

// Premium communication hook with enhanced features - NO EMOJIS
export const useCommunication = () => {
  const { toast } = useToast();

  const communicateWithToast = {
    whatsapp: (message?: string, language: 'rajasthani' | 'hindi' | 'english' = 'rajasthani') => {
      CommunicationUtils.openWhatsApp(message, language);
      toast({
        title: "WhatsApp पर जा रहे हैं",
        description: "आपको WhatsApp चैट पर भेजा जा रहा है... राम राम सा!",
        duration: 3000,
      });
    },

    phone: () => {
      CommunicationUtils.makePhoneCall();
      toast({
        title: "कॉल कर रहे हैं",
        description: `कुलदीप चौधरी जी को डायल कर रहे हैं: +91${CONTACT_INFO.phone}`,
        duration: 3000,
      });
    },

    email: (subject?: string, body?: string, language: 'rajasthani' | 'hindi' | 'english' = 'hindi') => {
      CommunicationUtils.sendEmail(subject, body, language);
      toast({
        title: "ईमेल खोल रहे हैं",
        description: "आपको ईमेल क्लाइंट पर भेजा जा रहा है...",
        duration: 3000,
      });
    },

    // Premium service-specific communications
    bookingWhatsApp: (packageName: string, dates?: string, travelers?: number) => {
      const message = CommunicationUtils.getBookingMessage(packageName, dates, travelers);
      CommunicationUtils.openWhatsApp(message);
      toast({
        title: "बुकिंग के लिए भेजा जा रहा है",
        description: `${packageName} के लिए WhatsApp पर जा रहे हैं`,
        duration: 3000,
      });
    },

    serviceWhatsApp: (serviceName: string, additionalInfo?: string) => {
      const message = CommunicationUtils.getServiceMessage(serviceName, additionalInfo);
      CommunicationUtils.openWhatsApp(message);
      toast({
        title: "सेवा के लिए भेजा जा रहा है",
        description: `${serviceName} के लिए WhatsApp पर जा रहे हैं`,
        duration: 3000,
      });
    },

    emergencyWhatsApp: (location?: string) => {
      const message = CommunicationUtils.getEmergencyMessage(location);
      CommunicationUtils.openWhatsApp(message);
      toast({
        title: "आपातकालीन सेवा",
        description: "तत्काल सहायता के लिए WhatsApp पर जा रहे हैं",
        duration: 3000,
      });
    },

    corporateWhatsApp: (companyName: string, requirement: string) => {
      const message = CommunicationUtils.getCorporateMessage(companyName, requirement);
      CommunicationUtils.openWhatsApp(message);
      toast({
        title: "कॉर्पोरेट पूछताछ",
        description: `${companyName} के लिए WhatsApp पर जा रहे हैं`,
        duration: 3000,
      });
    }
  };

  return communicateWithToast;
};