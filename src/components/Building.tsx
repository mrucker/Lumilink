interface BuildingProps {
  color: string;
  height: number;
  relationshipStrength: number;
}

export function Building({ color, height, relationshipStrength }: BuildingProps) {
  // Determine building style based on relationship strength
  const getBuildingStyle = () => {
    if (relationshipStrength >= 80) {
      // Skyscraper - tall and modern
      return 'skyscraper';
    } else if (relationshipStrength >= 60) {
      // Office building - medium height
      return 'office';
    } else if (relationshipStrength >= 40) {
      // Small building - developing
      return 'small';
    } else {
      // Construction site - just starting
      return 'construction';
    }
  };

  const style = getBuildingStyle();
  const buildingHeight = Math.max(height, 30);

  // Darken the color based on relationship strength - weaker relationships are duller
  const adjustColor = (hex: string, strength: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // Higher strength = more vibrant (0.7-0.9 range)
    // Lower strength = duller (0.4-0.6 range)
    const vibrancy = strength >= 60 ? 0.7 + (strength / 100) * 0.2 : 0.4 + (strength / 100) * 0.3;
    
    return `rgb(${Math.floor(r * vibrancy)}, ${Math.floor(g * vibrancy)}, ${Math.floor(b * vibrancy)})`;
  };

  const darkenColor = (hex: string, strength: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    const darkness = strength >= 60 ? 0.6 : 0.35;
    return `rgb(${Math.floor(r * darkness)}, ${Math.floor(g * darkness)}, ${Math.floor(b * darkness)})`;
  };

  // Window brightness based on relationship strength
  const getWindowStyle = (strength: number) => {
    if (strength >= 80) {
      return {
        color: 'bg-amber-300',
        opacity: 'opacity-90',
        glow: true
      };
    } else if (strength >= 60) {
      return {
        color: 'bg-amber-200',
        opacity: 'opacity-70',
        glow: false
      };
    } else if (strength >= 40) {
      return {
        color: 'bg-amber-100',
        opacity: 'opacity-50',
        glow: false
      };
    } else {
      return {
        color: 'bg-gray-400',
        opacity: 'opacity-30',
        glow: false
      };
    }
  };

  const windowStyle = getWindowStyle(relationshipStrength);
  const mainColor = adjustColor(color, relationshipStrength);
  const accentColor = darkenColor(color, relationshipStrength);

  return (
    <div className="flex flex-col items-center">
      {/* Building structure */}
      <div
        className="relative"
        style={{
          width: '32px',
          height: `${buildingHeight}px`,
        }}
      >
        {/* Main building body */}
        <div
          className="absolute bottom-0 w-full rounded-t shadow-xl"
          style={{
            height: `${buildingHeight}px`,
            background: `linear-gradient(to right, ${accentColor}, ${mainColor})`,
            border: `1px solid ${accentColor}`,
            borderBottom: 'none',
            filter: relationshipStrength < 60 ? 'saturate(0.6)' : 'none',
          }}
        >
          {/* Windows pattern based on style */}
          {style === 'skyscraper' && (
            <div className="absolute inset-0 p-1 flex flex-col gap-1">
              {Array.from({ length: Math.floor(buildingHeight / 12) }).map((_, i) => (
                <div key={i} className="flex gap-1 justify-around">
                  <div 
                    className={`w-1.5 h-1.5 rounded-[1px] ${windowStyle.color} ${windowStyle.opacity}`}
                    style={{
                      boxShadow: windowStyle.glow ? '0 0 4px rgba(251, 191, 36, 0.6)' : 'none'
                    }}
                  />
                  <div 
                    className={`w-1.5 h-1.5 rounded-[1px] ${windowStyle.color} ${windowStyle.opacity}`}
                    style={{
                      boxShadow: windowStyle.glow ? '0 0 4px rgba(251, 191, 36, 0.6)' : 'none'
                    }}
                  />
                  <div 
                    className={`w-1.5 h-1.5 rounded-[1px] ${windowStyle.color} ${windowStyle.opacity}`}
                    style={{
                      boxShadow: windowStyle.glow ? '0 0 4px rgba(251, 191, 36, 0.6)' : 'none'
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {style === 'office' && (
            <div className="absolute inset-0 p-1 flex flex-col gap-1.5">
              {Array.from({ length: Math.floor(buildingHeight / 14) }).map((_, i) => (
                <div key={i} className="flex gap-2 justify-around">
                  <div className={`w-2 h-2 rounded-[1px] ${windowStyle.color} ${windowStyle.opacity}`} />
                  <div className={`w-2 h-2 rounded-[1px] ${windowStyle.color} ${windowStyle.opacity}`} />
                </div>
              ))}
            </div>
          )}

          {style === 'small' && (
            <div className="absolute inset-0 p-1 flex flex-col gap-2">
              {Array.from({ length: Math.floor(buildingHeight / 16) }).map((_, i) => (
                <div key={i} className="flex gap-2 justify-center">
                  <div className={`w-2.5 h-2.5 rounded-[1px] ${windowStyle.color} ${windowStyle.opacity}`} />
                </div>
              ))}
            </div>
          )}

          {style === 'construction' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full border-2 border-dashed border-white/30 rounded-t flex items-center justify-center">
                <div className="text-xs text-white/60">...</div>
              </div>
            </div>
          )}

          {/* Rooftop */}
          {style !== 'construction' && (
            <div
              className="absolute -top-1 left-0 right-0 h-1 rounded-t"
              style={{
                background: accentColor,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}