import React from 'react';
import LoadingSpinner from './LoadingSpinner';

interface FullScreenLoaderProps {
  message?: string;
  variant?: 'default' | 'mandala' | 'palace' | 'lotus';
}

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({ 
  message = "राजस्थान यात्रा लोड हो रहा है...",
  variant = 'mandala'
}) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 flex items-center justify-center z-50">
      {/* Traditional Indian pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 25%, rgba(234, 179, 8, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 25% 75%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)
            `
          }}
        />
      </div>
      
      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-orange-400 opacity-30"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-pink-400 opacity-30"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-yellow-400 opacity-30"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-red-400 opacity-30"></div>
      
      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Traditional greeting */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-orange-600 mb-2 font-serif">
            नमस्ते
          </h1>
          <p className="text-lg text-gray-700">
            सेठी टूर एंड ट्रेवल्स में आपका स्वागत है
          </p>
        </div>
        
        {/* Loading spinner */}
        <LoadingSpinner 
          size="xl" 
          variant={variant}
          message={message}
        />
        
        {/* Additional cultural elements */}
        <div className="mt-8 space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-1 bg-orange-400 rounded"></div>
            <span className="text-orange-600 text-xl">🕉️</span>
            <div className="w-8 h-1 bg-pink-400 rounded"></div>
          </div>
          <p className="text-sm text-gray-600 italic">
            "वसुधैव कुटुम्बकम्" - The World is One Family
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullScreenLoader;