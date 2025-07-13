import { cn } from "@/lib/utils";

interface RajasthaniLoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function RajasthaniLoadingSpinner({ 
  size = "md", 
  className 
}: RajasthaniLoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        {/* Outer rotating ring with Rajasthani pattern */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 border-r-pink-500 animate-spin"></div>
        
        {/* Inner rotating ring */}
        <div className="absolute inset-2 rounded-full border-3 border-transparent border-b-red-500 border-l-yellow-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        
        {/* Center decorative element */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full animate-pulse"></div>
        </div>
        
        {/* Decorative dots around the spinner */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 45}deg) translateX(${size === 'xl' ? '20px' : size === 'lg' ? '16px' : size === 'md' ? '12px' : '8px'}) translateY(-50%)`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function RajasthaniMandalaaSpinner({ 
  size = "md", 
  className 
}: RajasthaniLoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
    xl: "w-28 h-28"
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        {/* Outer mandala pattern */}
        <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '3s' }}>
          <circle
            cx="50%"
            cy="50%"
            r="40%"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="2"
            strokeDasharray="8 4"
            strokeLinecap="round"
          />
          <circle
            cx="50%"
            cy="50%"
            r="30%"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            strokeDasharray="5 3"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Inner rotating elements */}
        <svg className="absolute inset-2 w-full h-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
          {[...Array(6)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 60} 50 50)`}>
              <circle
                cx="50%"
                cy="20%"
                r="1.5"
                fill="#f97316"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            </g>
          ))}
        </svg>
        
        {/* Center lotus-like pattern */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full animate-pulse border-2 border-white shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}

export function RajasthaniPalaceSpinner({ 
  size = "md", 
  className 
}: RajasthaniLoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-16 h-12",
    md: "w-20 h-16",
    lg: "w-24 h-20",
    xl: "w-32 h-24"
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        {/* Palace silhouette animation */}
        <svg className="w-full h-full" viewBox="0 0 100 60">
          {/* Palace domes */}
          <ellipse cx="20" cy="15" rx="8" ry="6" fill="#f97316" className="animate-pulse" style={{ animationDelay: '0s' }} />
          <ellipse cx="50" cy="12" rx="10" ry="8" fill="#ec4899" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          <ellipse cx="80" cy="15" rx="8" ry="6" fill="#ef4444" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
          
          {/* Palace walls */}
          <rect x="15" y="21" width="10" height="25" fill="#f97316" opacity="0.8" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
          <rect x="42" y="20" width="16" height="26" fill="#ec4899" opacity="0.8" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
          <rect x="75" y="21" width="10" height="25" fill="#ef4444" opacity="0.8" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
          
          {/* Decorative elements */}
          <circle cx="20" cy="33" r="2" fill="#fbbf24" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
          <circle cx="50" cy="32" r="2.5" fill="#fbbf24" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="80" cy="33" r="2" fill="#fbbf24" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
          
          {/* Base */}
          <rect x="10" y="46" width="80" height="4" fill="#92400e" opacity="0.6" />
        </svg>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-bounce"
              style={{
                top: `${20 + i * 10}%`,
                left: `${30 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function RajasthaniTextSpinner({ 
  text = "Loading...", 
  className 
}: { text?: string; className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
      <RajasthaniMandalaaSpinner size="lg" />
      <div className="text-center">
        <p className="text-lg font-semibold text-orange-600 mb-1">{text}</p>
        <p className="text-sm text-gray-600 font-medium">राजस्थान यात्रा लोड हो रहा है...</p>
        <div className="flex justify-center space-x-1 mt-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}