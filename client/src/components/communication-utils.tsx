import { useToast } from "@/hooks/use-toast";

// Contact information constants
export const CONTACT_INFO = {
  phone: "9772021780",
  whatsapp: "919772021780",
  email: "sethitourstravels8888@gmail.com",
  address: "Jaipur, Rajasthan, India"
};

// Utility functions for communication
export const CommunicationUtils = {
  // WhatsApp with custom message
  openWhatsApp: (message?: string) => {
    const defaultMessage = "Hello! I need assistance with Sethi Tour & Travels services.";
    const finalMessage = message || defaultMessage;
    const encodedMessage = encodeURIComponent(finalMessage);
    const url = `https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=${encodedMessage}`;
    
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

  // Email with subject and body
  sendEmail: (subject?: string, body?: string) => {
    const defaultSubject = "Inquiry about Sethi Tour & Travels Services";
    const defaultBody = "Hello,\n\nI am interested in your services. Please provide more information.\n\nThank you!";
    
    const finalSubject = encodeURIComponent(subject || defaultSubject);
    const finalBody = encodeURIComponent(body || defaultBody);
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

  // Service-specific WhatsApp messages
  getServiceMessage: (serviceName: string, additionalInfo?: string) => {
    const baseMessage = `Hello! I'm interested in your ${serviceName} service.`;
    return additionalInfo ? `${baseMessage} ${additionalInfo}` : baseMessage;
  },

  // Booking-specific WhatsApp message
  getBookingMessage: (packageName: string, dates?: string) => {
    let message = `Hello! I want to book the ${packageName} package.`;
    if (dates) {
      message += ` Preferred dates: ${dates}.`;
    }
    message += " Please send me the details and availability.";
    return message;
  }
};

// Hook for communication actions with toast notifications
export const useCommunication = () => {
  const { toast } = useToast();

  const communicateWithToast = {
    whatsapp: (message?: string) => {
      CommunicationUtils.openWhatsApp(message);
      toast({
        title: "Opening WhatsApp",
        description: "Redirecting you to WhatsApp chat...",
        duration: 2000,
      });
    },

    phone: () => {
      CommunicationUtils.makePhoneCall();
      toast({
        title: "Calling",
        description: `Dialing +91${CONTACT_INFO.phone}...`,
        duration: 2000,
      });
    },

    email: (subject?: string, body?: string) => {
      CommunicationUtils.sendEmail(subject, body);
      toast({
        title: "Opening Email",
        description: "Redirecting you to email client...",
        duration: 2000,
      });
    }
  };

  return communicateWithToast;
};