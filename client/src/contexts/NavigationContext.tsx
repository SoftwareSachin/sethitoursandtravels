import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import FullScreenLoader from '@/components/FullScreenLoader';

interface NavigationContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  navigateWithLoader: (path: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();

  const navigateWithLoader = (path: string) => {
    setIsLoading(true);
    
    // Simulate loading time for smooth transition
    setTimeout(() => {
      setLocation(path);
      
      // Stop loading after a short delay to ensure page is rendered
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 300);
  };

  return (
    <NavigationContext.Provider value={{ isLoading, setIsLoading, navigateWithLoader }}>
      {children}
      {isLoading && (
        <FullScreenLoader 
          variant="mandala" 
          message="पृष्ठ लोड हो रहा है..."
        />
      )}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};