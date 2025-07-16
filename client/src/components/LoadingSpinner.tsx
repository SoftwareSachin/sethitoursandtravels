import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'mandala' | 'palace' | 'lotus';
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  variant = 'default',
  message = "राजस्थान यात्रा लोड हो रहा है..." 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const renderDefaultSpinner = () => (
    <div className={`${sizeClasses[size]} relative`}>
      {/* Outer ring with traditional Indian colors */}
      <div className="absolute inset-0 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
      
      {/* Middle ring */}
      <div className="absolute inset-2 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin animation-delay-150"></div>
      
      {/* Inner ring */}
      <div className="absolute inset-4 border-4 border-yellow-200 border-t-yellow-500 rounded-full animate-spin animation-delay-300"></div>
      
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
    </div>
  );

  const renderMandalaSpinner = () => (
    <div className={`${sizeClasses[size]} relative`}>
      {/* Mandala pattern spinner */}
      <div className="absolute inset-0 animate-spin">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Outer mandala ring */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="url(#gradient1)" strokeWidth="3" strokeDasharray="10,5" opacity="0.8"/>
          
          {/* Middle mandala ring */}
          <circle cx="50" cy="50" r="30" fill="none" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="5,3" opacity="0.6"/>
          
          {/* Inner mandala ring */}
          <circle cx="50" cy="50" r="15" fill="none" stroke="url(#gradient3)" strokeWidth="2" strokeDasharray="3,2" opacity="0.4"/>
          
          {/* Mandala petals */}
          <g className="animate-pulse">
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d={`M 50 10 Q 55 25 50 40 Q 45 25 50 10`}
                fill="url(#gradient4)"
                opacity="0.5"
                transform={`rotate(${i * 45} 50 50)`}
              />
            ))}
          </g>
          
          {/* Center Om symbol */}
          <circle cx="50" cy="50" r="8" fill="url(#gradient5)"/>
          <text x="50" y="55" textAnchor="middle" className="text-xs font-bold fill-white">ॐ</text>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316"/>
              <stop offset="100%" stopColor="#dc2626"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899"/>
              <stop offset="100%" stopColor="#f97316"/>
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eab308"/>
              <stop offset="100%" stopColor="#ec4899"/>
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#f97316"/>
            </linearGradient>
            <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc2626"/>
              <stop offset="100%" stopColor="#991b1b"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );

  const renderPalaceSpinner = () => (
    <div className={`${sizeClasses[size]} relative`}>
      {/* Palace silhouette spinner */}
      <div className="absolute inset-0 animate-spin">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Palace structure */}
          <g className="animate-pulse">
            {/* Main palace */}
            <rect x="25" y="60" width="50" height="30" fill="url(#palaceGradient)" opacity="0.8"/>
            
            {/* Palace domes */}
            <circle cx="35" cy="60" r="8" fill="url(#domeGradient)"/>
            <circle cx="50" cy="55" r="10" fill="url(#domeGradient)"/>
            <circle cx="65" cy="60" r="8" fill="url(#domeGradient)"/>
            
            {/* Palace minarets */}
            <rect x="20" y="40" width="6" height="30" fill="url(#minaretGradient)"/>
            <rect x="74" y="40" width="6" height="30" fill="url(#minaretGradient)"/>
            
            {/* Minaret tops */}
            <circle cx="23" cy="40" r="4" fill="url(#topGradient)"/>
            <circle cx="77" cy="40" r="4" fill="url(#topGradient)"/>
            
            {/* Palace windows */}
            <rect x="30" y="70" width="4" height="8" fill="#fbbf24" opacity="0.6"/>
            <rect x="45" y="70" width="4" height="8" fill="#fbbf24" opacity="0.6"/>
            <rect x="60" y="70" width="4" height="8" fill="#fbbf24" opacity="0.6"/>
          </g>
          
          {/* Rotating outer ring */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="url(#ringGradient)" strokeWidth="2" strokeDasharray="8,4" opacity="0.6"/>
          
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
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316"/>
              <stop offset="50%" stopColor="#ec4899"/>
              <stop offset="100%" stopColor="#eab308"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );

  const renderLotusSpinner = () => (
    <div className={`${sizeClasses[size]} relative`}>
      {/* Lotus flower spinner */}
      <div className="absolute inset-0 animate-spin">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Lotus petals */}
          <g className="animate-pulse">
            {[...Array(8)].map((_, i) => (
              <ellipse
                key={i}
                cx="50"
                cy="30"
                rx="6"
                ry="20"
                fill="url(#lotusGradient)"
                opacity="0.7"
                transform={`rotate(${i * 45} 50 50)`}
              />
            ))}
          </g>
          
          {/* Inner lotus petals */}
          <g className="animate-pulse animation-delay-150">
            {[...Array(6)].map((_, i) => (
              <ellipse
                key={i}
                cx="50"
                cy="35"
                rx="4"
                ry="15"
                fill="url(#lotusInnerGradient)"
                opacity="0.8"
                transform={`rotate(${i * 60} 50 50)`}
              />
            ))}
          </g>
          
          {/* Lotus center */}
          <circle cx="50" cy="50" r="8" fill="url(#lotusCenterGradient)"/>
          
          {/* Rotating outer ring */}
          <circle cx="50" cy="50" r="42" fill="none" stroke="url(#lotusRingGradient)" strokeWidth="2" strokeDasharray="6,3" opacity="0.5"/>
          
          {/* Gradients */}
          <defs>
            <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899"/>
              <stop offset="100%" stopColor="#f97316"/>
            </linearGradient>
            <linearGradient id="lotusInnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24"/>
              <stop offset="100%" stopColor="#ec4899"/>
            </linearGradient>
            <linearGradient id="lotusCenterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eab308"/>
              <stop offset="100%" stopColor="#dc2626"/>
            </linearGradient>
            <linearGradient id="lotusRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316"/>
              <stop offset="50%" stopColor="#ec4899"/>
              <stop offset="100%" stopColor="#eab308"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );

  const renderSpinner = () => {
    switch (variant) {
      case 'mandala':
        return renderMandalaSpinner();
      case 'palace':
        return renderPalaceSpinner();
      case 'lotus':
        return renderLotusSpinner();
      default:
        return renderDefaultSpinner();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {renderSpinner()}
      
      {message && (
        <div className="text-center">
          <p className="text-lg font-semibold text-orange-600 mb-1">{message}</p>
          <p className="text-sm text-gray-600">कृपया प्रतीक्षा करें...</p>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;