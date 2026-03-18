export function DesertLogo() {
  return (
    <div className="flex flex-col items-center">
      {/* Simple wave logo */}
      <div className="mb-3">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#87CEEB', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#4A90E2', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#6BA5CC', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3A7BC8', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          
          {/* Back wave */}
          <path
            d="M 0,50 Q 20,35 40,50 T 80,50 L 80,80 L 0,80 Z"
            fill="url(#waveGradient1)"
            opacity="0.7"
          />
          
          {/* Front wave */}
          <path
            d="M 0,60 Q 20,45 40,60 T 80,60 L 80,80 L 0,80 Z"
            fill="url(#waveGradient2)"
          />
          
          {/* Wave foam/highlights */}
          <circle cx="20" cy="50" r="2" fill="white" opacity="0.6" />
          <circle cx="60" cy="50" r="2" fill="white" opacity="0.6" />
          <circle cx="25" cy="60" r="1.5" fill="white" opacity="0.5" />
          <circle cx="55" cy="60" r="1.5" fill="white" opacity="0.5" />
        </svg>
      </div>
      
      <h1 className="text-3xl font-semibold text-gray-900 tracking-tight">Tropical Oasis</h1>
      <p className="text-sm text-gray-600 mt-1">Cultivate meaningful relationships</p>
    </div>
  );
}