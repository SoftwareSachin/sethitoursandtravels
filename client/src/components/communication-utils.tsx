import { useToast } from "@/hooks/use-toast";

// Contact information constants
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

// Premium Rajasthani greetings and messages
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

// Premium greeting messages in Rajasthani and Hindi (no emojis)
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

// Utility functions for communication
export const CommunicationUtils = {
  // WhatsApp with premium greeting and custom message (no emojis)
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
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedMessage}`;
    
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      // Fallback to direct link
      window.location.href = url;
    }
  },

  // Phone call with error handling
  makePhoneCall: () => {
    const phoneUrl = `tel:+91${CONTACT_INFO.phone}`;
    
    try {
      window.location.href = phoneUrl;
    } catch (error) {
      console.error('Error making phone call:', error);
      // Copy number to clipboard as fallback
      navigator.clipboard?.writeText(`+91${CONTACT_INFO.phone}`).then(() => {
        alert(`Phone number copied: +91${CONTACT_INFO.phone}`);
      });
    }
  },

  // Email with premium template (no emojis)
  sendEmail: (subject?: string, body?: string, language: 'rajasthani' | 'hindi' | 'english' = 'hindi') => {
    const greeting = getTimeBasedGreeting(language);
    const msgs = PREMIUM_MESSAGES[language];
    const defaultSubject = "प्रीमियम राजस्थान टूर पूछताछ - सेठी टूर एंड ट्रेवल्स";
    
    const premiumEmailBody = `${greeting}

${body || "मैं आपकी प्रीमियम राजस्थान टूर सेवाओं के बारे में जानकारी चाहता हूं।"}

सेवाएं जिनमें मुझे रुचि है:
• राजस्थान हेरिटेज टूर पैकेज
• गोल्डन ट्राइएंगल टूर (दिल्ली-आगरा-जयपुर)
• टैक्सी सर्विस (लोकल/आउटस्टेशन)
• एयरपोर्ट/रेलवे ट्रांसफर
• कॉर्पोरेट ट्रेवल सोल्यूशन
• अन्य (कृपया बताएं)

यात्रा की तिथि: ________________
कुल यात्री: ________________
संपर्क नंबर: ________________

धन्यवाद!
${msgs.businessContact}
${msgs.serviceTag}

विशेषताएं:
• प्रीमियम टूर एक्सपीरियंस
• राजस्थान की पूरी यात्रा का आनंद
• 24/7 कस्टमर सपोर्ट
• 1000+ खुश ग्राहक

संपर्क: +91${CONTACT_INFO.phone}
${CONTACT_INFO.businessHours}

${msgs.farewell}`;
    
    const finalSubject = encodeURIComponent(subject || defaultSubject);
    const finalBody = encodeURIComponent(premiumEmailBody);
    const emailUrl = `mailto:${CONTACT_INFO.email}?subject=${finalSubject}&body=${finalBody}`;
    
    try {
      window.location.href = emailUrl;
    } catch (error) {
      console.error('Error opening email:', error);
      // Copy email to clipboard as fallback
      navigator.clipboard?.writeText(CONTACT_INFO.email).then(() => {
        alert(`Email copied: ${CONTACT_INFO.email}`);
      });
    }
  },

  // Service-specific WhatsApp messages with Rajasthani touch (no emojis)
  getServiceMessage: (serviceName: string, additionalInfo?: string) => {
    const greeting = getTimeBasedGreeting('rajasthani');
    const msgs = PREMIUM_MESSAGES['rajasthani'];
    const baseMessage = `${greeting}

मैं आपकी ${serviceName} सेवा के बारे में जानकारी चाहता हूं।`;
    
    const footer = `

${msgs.businessContact}
${msgs.serviceTag}
राजस्थान की पूरी यात्रा का आनंद लें!

संपर्क: +91${CONTACT_INFO.phone}
${CONTACT_INFO.businessHours}

${msgs.farewell}`;
    
    return additionalInfo ? `${baseMessage}

अतिरिक्त जानकारी: ${additionalInfo}${footer}` : `${baseMessage}${footer}`;
  },

  // Premium booking message with cultural elements (no emojis)
  getBookingMessage: (packageName: string, dates?: string, travelers?: number) => {
    const greeting = getTimeBasedGreeting('rajasthani');
    const msgs = PREMIUM_MESSAGES['rajasthani'];
    let message = `${greeting}

मैं ${packageName} बुक करना चाहता हूं।`;
    
    if (dates) {
      message += `\nपसंदीदा तिथि: ${dates}`;
    }
    if (travelers) {
      message += `\nकुल यात्री: ${travelers} व्यक्ति`;
    }
    
    message += `

कृपया भेजें:
• पूरा टूर प्रोग्राम
• कीमत की जानकारी
• होटल की विकल्प
• गाड़ी की सुविधा
• बुकिंग की प्रक्रिया

${msgs.businessContact}
${msgs.serviceTag}
राजस्थान की पूरी यात्रा का आनंद लें!

संपर्क: +91${CONTACT_INFO.phone}
${CONTACT_INFO.businessHours}

धन्यवाद!
${msgs.farewell}`;
    
    return message;
  },

  // Emergency service message (no emojis)
  getEmergencyMessage: (location?: string) => {
    const greeting = getTimeBasedGreeting('rajasthani');
    const msgs = PREMIUM_MESSAGES['rajasthani'];
    const baseMessage = `${greeting}

आपातकालीन सेवा - मुझे तत्काल टैक्सी सेवा चाहिए।`;
    const locationInfo = location ? `\nवर्तमान स्थान: ${location}` : '';
    return `${baseMessage}${locationInfo}

कृपया जल्दी भेजें।
समय: ${new Date().toLocaleString('hi-IN')}

${msgs.businessContact}
आपातकालीन संपर्क: +91${CONTACT_INFO.phone}

धन्यवाद!`;
  },

  // Corporate booking message (no emojis)
  getCorporateMessage: (companyName: string, requirement: string) => {
    const greeting = getTimeBasedGreeting('english');
    const msgs = PREMIUM_MESSAGES['english'];
    return `${greeting}

Company: ${companyName}
Requirement: ${requirement}

Please contact for corporate rates and services.

${msgs.businessContact}
${msgs.serviceTag}
Contact: +91${CONTACT_INFO.phone}
${CONTACT_INFO.businessHours}

${msgs.farewell}`;
  }
};

// Hook for premium communication actions with toast notifications
export const useCommunication = () => {
  const { toast } = useToast();

  const communicateWithToast = {
    whatsapp: (message?: string, language: 'rajasthani' | 'hindi' | 'english' = 'rajasthani') => {
      CommunicationUtils.openWhatsApp(message, language);
      toast({
        title: language === 'rajasthani' ? "खम्मा गणी सा!" : language === 'hindi' ? "WhatsApp खुल रहा है" : "Opening WhatsApp",
        description: language === 'rajasthani' ? "राजस्थानी में बातचीत करने के लिए..." : language === 'hindi' ? "WhatsApp चैट में भेजा जा रहा है..." : "Redirecting you to WhatsApp chat...",
        duration: 2000,
      });
    },

    phone: () => {
      CommunicationUtils.makeCall();
      toast({
        title: "कॉल कर रहे हैं...",
        description: `कुलदीप चौधरी जी को कॉल: +91${CONTACT_INFO.phone}`,
        duration: 2000,
      });
    },

    email: (subject?: string, body?: string, language: 'rajasthani' | 'hindi' | 'english' = 'hindi') => {
      CommunicationUtils.sendEmail(subject, body, language);
      toast({
        title: "ईमेल खुल रहा है...",
        description: "प्रीमियम टेम्प्लेट के साथ ईमेल भेजने के लिए...",
        duration: 2000,
      });
    },

    emergency: (location?: string) => {
      CommunicationUtils.openWhatsApp(CommunicationUtils.getEmergencyMessage(location));
      toast({
        title: "आपातकालीन सेवा",
        description: "तत्काल सहायता के लिए WhatsApp खुल रहा है...",
        duration: 2000,
      });
    }
  };

  return communicateWithToast;
};