import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import FullScreenLoader from './FullScreenLoader';

const NavigationLoader: React.FC = () => {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [previousLocation, setPreviousLocation] = useState(location);

  useEffect(() => {
    if (location !== previousLocation) {
      setIsLoading(true);
      
      // Show loading for a brief moment during navigation
      const timer = setTimeout(() => {
        setIsLoading(false);
        setPreviousLocation(location);
      }, 800); // Adjusted for better UX

      return () => clearTimeout(timer);
    }
  }, [location, previousLocation]);

  if (!isLoading) return null;

  // Different loading messages and variants for different pages
  const getLoadingConfig = () => {
    switch (location) {
      case '/':
        return { 
          variant: 'mandala' as const, 
          message: 'मुख्य पृष्ठ लोड हो रहा है...' 
        };
      case '/rajasthan-tour':
        return { 
          variant: 'palace' as const, 
          message: 'राजस्थान यात्रा लोड हो रहा है...' 
        };
      case '/jaipur-city-tour':
        return { 
          variant: 'palace' as const, 
          message: 'जयपुर शहर यात्रा लोड हो रहा है...' 
        };
      case '/jaipur-taxi':
        return { 
          variant: 'lotus' as const, 
          message: 'जयपुर टैक्सी सेवा लोड हो रहा है...' 
        };
      case '/taxi-services':
        return { 
          variant: 'lotus' as const, 
          message: 'टैक्सी सेवाएं लोड हो रहा है...' 
        };
      case '/loading-demo':
        return { 
          variant: 'default' as const, 
          message: 'लोडिंग डेमो लोड हो रहा है...' 
        };
      default:
        if (location.includes('taxi-services')) {
          return { 
            variant: 'lotus' as const, 
            message: 'टैक्सी सेवा लोड हो रहा है...' 
          };
        }
        return { 
          variant: 'mandala' as const, 
          message: 'पृष्ठ लोड हो रहा है...' 
        };
    }
  };

  const { variant, message } = getLoadingConfig();

  return (
    <FullScreenLoader 
      variant={variant}
      message={message}
    />
  );
};

export default NavigationLoader;