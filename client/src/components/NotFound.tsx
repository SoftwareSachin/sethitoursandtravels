import React from 'react';
import { Link } from 'wouter';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 flex items-center justify-center px-4">
      {/* Traditional Indian pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(234, 179, 8, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.3) 0%, transparent 50%)
            `
          }}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-4 border-t-4 border-orange-400 opacity-30 animate-pulse"></div>
      <div className="absolute top-8 right-8 w-20 h-20 border-r-4 border-t-4 border-pink-400 opacity-30 animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-4 border-b-4 border-yellow-400 opacity-30 animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-4 border-b-4 border-red-400 opacity-30 animate-pulse"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Traditional Rajasthani architecture illustration */}
        <div className="mb-8">
          <svg viewBox="0 0 200 120" className="w-64 h-auto mx-auto mb-6">
            {/* Palace structure */}
            <g className="animate-pulse">
              {/* Main palace */}
              <rect x="50" y="80" width="100" height="30" fill="url(#palaceGradient)" opacity="0.8"/>
              
              {/* Palace domes */}
              <circle cx="70" cy="80" r="12" fill="url(#domeGradient)"/>
              <circle cx="100" cy="75" r="15" fill="url(#domeGradient)"/>
              <circle cx="130" cy="80" r="12" fill="url(#domeGradient)"/>
              
              {/* Palace minarets */}
              <rect x="40" y="50" width="8" height="40" fill="url(#minaretGradient)"/>
              <rect x="152" y="50" width="8" height="40" fill="url(#minaretGradient)"/>
              
              {/* Minaret tops */}
              <circle cx="44" cy="50" r="6" fill="url(#topGradient)"/>
              <circle cx="156" cy="50" r="6" fill="url(#topGradient)"/>
              
              {/* Palace windows */}
              <rect x="60" y="90" width="6" height="12" fill="#fbbf24" opacity="0.6"/>
              <rect x="80" y="90" width="6" height="12" fill="#fbbf24" opacity="0.6"/>
              <rect x="95" y="90" width="6" height="12" fill="#fbbf24" opacity="0.6"/>
              <rect x="115" y="90" width="6" height="12" fill="#fbbf24" opacity="0.6"/>
              <rect x="135" y="90" width="6" height="12" fill="#fbbf24" opacity="0.6"/>
              
              {/* Decorative elements */}
              <polygon points="100,20 90,40 110,40" fill="url(#flagGradient)"/>
              <line x1="100" y1="20" x2="100" y2="40" stroke="#dc2626" strokeWidth="2"/>
            </g>
            
            {/* Gradients */}
            <defs>
              <linearGradient id="palaceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316"/>
                <stop offset="100%" stopColor="#dc2626"/>
              </linearGradient>
              <linearGradient id="domeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24"/>
                <stop offset="100%" stopColor="#f97316"/>
              </linearGradient>
              <linearGradient id="minaretGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899"/>
                <stop offset="100%" stopColor="#dc2626"/>
              </linearGradient>
              <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#eab308"/>
                <stop offset="100%" stopColor="#fbbf24"/>
              </linearGradient>
              <linearGradient id="flagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b35"/>
                <stop offset="33%" stopColor="#ffffff"/>
                <stop offset="66%" stopColor="#138808"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* 404 Message */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-orange-600 mb-4 font-serif">
            ४०४
          </h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-2 font-serif">
            पृष्ठ नहीं मिला
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Page Not Found
          </p>
        </div>
        
        {/* Cultural message */}
        <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-orange-200">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold text-orange-600">खेद है!</span> आपके द्वारा खोजा गया पृष्ठ उपलब्ध नहीं है।
          </p>
          <p className="text-md text-gray-600 mb-4">
            Sorry! The page you're looking for seems to have wandered off like a camel in the Thar Desert.
          </p>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-orange-400 rounded"></div>
            <span className="text-orange-600 text-2xl">🐪</span>
            <div className="w-12 h-1 bg-pink-400 rounded"></div>
          </div>
          <p className="text-sm text-gray-500 italic">
            "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते" - Knowledge is the greatest purifier
          </p>
        </div>
        
        {/* Navigation options */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link href="/">
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 border-2 border-orange-300 shadow-lg">
                मुख्य पृष्ठ / Home
              </button>
            </Link>
            
            <Link href="/tour-packages">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all duration-200 border-2 border-pink-300 shadow-lg">
                टूर पैकेज / Tour Packages
              </button>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link href="/taxi-services">
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200 border-2 border-yellow-300 shadow-lg">
                टैक्सी सेवा / Taxi Services
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 border-2 border-red-300 shadow-lg">
                संपर्क करें / Contact Us
              </button>
            </Link>
          </div>
        </div>
        
        {/* Cultural footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            राजस्थान के रंगों में खो जाइए • Get lost in the colors of Rajasthan
          </p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <span className="text-orange-500">🏰</span>
            <span className="text-pink-500">🐘</span>
            <span className="text-yellow-500">🌅</span>
            <span className="text-red-500">🎭</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;