interface DesertPlantProps {
  color: string;
  height: number;
  relationshipStrength: number;
  showShadow?: boolean;
}

export function DesertPlant({ color, height, relationshipStrength, showShadow = true }: DesertPlantProps) {
  // Determine plant type based on friend ID/color for variety
  const getPlantType = (color: string) => {
    // Use color to create variety - distribute plants across types
    const colorValue = parseInt(color.replace('#', ''), 16);
    const typeIndex = colorValue % 3;
    
    if (typeIndex === 0) return 'cactus';
    if (typeIndex === 1) return 'palm';
    return 'tropical';
  };

  const plantType = getPlantType(color);
  const plantHeight = Math.max(height, 40);
  
  // Cactus - grows larger with purple/blue budding flowers
  if (plantType === 'cactus') {
    const cactusSize = relationshipStrength >= 70 ? 'large' : relationshipStrength >= 45 ? 'medium' : 'small';
    const cactusWidth = cactusSize === 'large' ? 18 : cactusSize === 'medium' ? 14 : 10;
    const hasArms = relationshipStrength >= 70;
    const flowerCount = relationshipStrength >= 70 ? 3 : relationshipStrength >= 45 ? 2 : 1;
    
    return (
      <div className="flex flex-col items-center">
        <div className="relative" style={{ width: '40px', height: `${plantHeight}px` }}>
          {/* Main cactus trunk */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-full"
            style={{
              width: `${cactusWidth}px`,
              height: `${plantHeight}px`,
              background: 'linear-gradient(to right, #4A7C59 0%, #5A9B6F 50%, #4A7C59 100%)',
              boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.2)',
            }}
          >
            {/* Vertical ridge lines */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute h-full w-px bg-black/10"
                style={{ left: `${(i + 1) * 25}%` }}
              />
            ))}
          </div>

          {/* Arms for strong relationships */}
          {hasArms && (
            <>
              <div
                className="absolute rounded-t-full"
                style={{
                  width: '12px',
                  height: '28px',
                  background: 'linear-gradient(to right, #4A7C59 0%, #5A9B6F 50%, #4A7C59 100%)',
                  left: '-6px',
                  bottom: '45%',
                  transform: 'rotate(-15deg)',
                  transformOrigin: 'bottom center',
                  boxShadow: 'inset -2px 0 3px rgba(0,0,0,0.2)',
                }}
              />
              <div
                className="absolute rounded-t-full"
                style={{
                  width: '12px',
                  height: '32px',
                  background: 'linear-gradient(to right, #4A7C59 0%, #5A9B6F 50%, #4A7C59 100%)',
                  right: '-6px',
                  bottom: '50%',
                  transform: 'rotate(15deg)',
                  transformOrigin: 'bottom center',
                  boxShadow: 'inset -2px 0 3px rgba(0,0,0,0.2)',
                }}
              />
            </>
          )}

          {/* Purple/blue budding flowers */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
            {Array.from({ length: flowerCount }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  backgroundColor: i % 2 === 0 ? '#8B7FB8' : '#6B9BD1',
                  boxShadow: `0 0 6px ${i % 2 === 0 ? '#8B7FB8' : '#6B9BD1'}`,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Sand mound at base */}
        {showShadow && (
          <div 
            className="w-10 h-3 rounded-full -mt-1"
            style={{
              background: 'radial-gradient(ellipse at center, #C9AE8F 0%, #B8956F 60%, transparent 100%)',
              filter: 'blur(1px)',
            }}
          />
        )}
      </div>
    );
  }

  // Palm tree - grows taller with coconuts
  if (plantType === 'palm') {
    const palmScale = relationshipStrength >= 70 ? 1.2 : relationshipStrength >= 45 ? 1 : 0.8;
    const coconutCount = relationshipStrength >= 70 ? 3 : relationshipStrength >= 45 ? 2 : 1;
    
    return (
      <div className="flex flex-col items-center">
        <div className="relative" style={{ width: '50px', height: `${plantHeight * palmScale}px` }}>
          {/* Palm trunk */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            style={{
              width: '10px',
              height: `${plantHeight * palmScale}px`,
              background: 'linear-gradient(to right, #8B6F47 0%, #A0826D 50%, #8B6F47 100%)',
              borderRadius: '5px',
              boxShadow: 'inset -1px 0 3px rgba(0,0,0,0.3)',
            }}
          >
            {/* Trunk texture lines */}
            {Array.from({ length: Math.floor(plantHeight / 20) }).map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-black/20"
                style={{ top: `${i * 20}px` }}
              />
            ))}
          </div>

          {/* Palm fronds - simple curved leaves */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            {/* 8 fronds radiating outward */}
            {[
              { angle: -70, length: 38 },
              { angle: -50, length: 42 },
              { angle: -30, length: 45 },
              { angle: -10, length: 48 },
              { angle: 10, length: 48 },
              { angle: 30, length: 45 },
              { angle: 50, length: 42 },
              { angle: 70, length: 38 },
            ].map((frond, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: '0',
                  top: '4px',
                  transformOrigin: '0 0',
                  transform: `rotate(${frond.angle}deg)`,
                  zIndex: i < 4 ? 1 : 3, // Back fronds behind, front fronds in front
                }}
              >
                {/* Main frond stem */}
                <div
                  style={{
                    width: '2px',
                    height: `${frond.length}px`,
                    background: 'linear-gradient(to bottom, #5A9B6F, #4A7C59)',
                    borderRadius: '1px',
                    position: 'relative',
                  }}
                >
                  {/* Leaflets along the stem */}
                  {Array.from({ length: 10 }).map((_, leafIdx) => {
                    const leafY = (leafIdx + 1) * 4;
                    const leafWidth = 10 - leafIdx * 0.6; // Smaller at tip
                    return (
                      <div key={leafIdx}>
                        {/* Left leaflet */}
                        <div
                          className="absolute"
                          style={{
                            width: `${leafWidth}px`,
                            height: '2px',
                            background: 'linear-gradient(to left, #5A9B6F, transparent)',
                            top: `${leafY}px`,
                            left: '1px',
                            transformOrigin: 'right center',
                            transform: `rotate(-40deg)`,
                            borderRadius: '0 2px 2px 0',
                          }}
                        />
                        {/* Right leaflet */}
                        <div
                          className="absolute"
                          style={{
                            width: `${leafWidth}px`,
                            height: '2px',
                            background: 'linear-gradient(to right, #5A9B6F, transparent)',
                            top: `${leafY}px`,
                            right: '1px',
                            transformOrigin: 'left center',
                            transform: `rotate(40deg)`,
                            borderRadius: '2px 0 0 2px',
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Coconuts cluster at top */}
          <div className="absolute left-1/2 -translate-x-1/2 flex gap-0.5" style={{ top: '-2px', zIndex: 2 }}>
            {Array.from({ length: coconutCount }).map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-3 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #8B6F47 0%, #6B5435 100%)',
                  boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.3)',
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Sand mound at base */}
        {showShadow && (
          <div 
            className="w-11 h-3 rounded-full -mt-1"
            style={{
              background: 'radial-gradient(ellipse at center, #C9AE8F 0%, #B8956F 60%, transparent 100%)',
              filter: 'blur(1px)',
            }}
          />
        )}
      </div>
    );
  }

  // Tropical flower - vibrant colors, larger with strength
  const flowerScale = relationshipStrength >= 70 ? 1.3 : relationshipStrength >= 45 ? 1.1 : 0.9;
  const petalCount = relationshipStrength >= 70 ? 6 : relationshipStrength >= 45 ? 5 : 4;
  const leafSize = relationshipStrength >= 70 ? 'large' : relationshipStrength >= 45 ? 'medium' : 'small';
  const leafWidth = leafSize === 'large' ? 16 : leafSize === 'medium' ? 12 : 8;
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: '40px', height: `${plantHeight * 0.85}px` }}>
        {/* Stem */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '4px',
            height: `${plantHeight * 0.6}px`,
            background: 'linear-gradient(to top, #4A7C59, #5A9B6F)',
            borderRadius: '2px',
          }}
        />

        {/* Large leaves */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: '40%' }}>
          <div
            className="absolute"
            style={{
              width: `${leafWidth}px`,
              height: `${leafWidth * 1.5}px`,
              background: 'radial-gradient(ellipse at center, #5A9B6F, #4A7C59)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              left: '-20px',
              transform: 'rotate(-25deg)',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2)',
            }}
          />
          <div
            className="absolute"
            style={{
              width: `${leafWidth}px`,
              height: `${leafWidth * 1.5}px`,
              background: 'radial-gradient(ellipse at center, #5A9B6F, #4A7C59)',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              right: '-20px',
              transform: 'rotate(25deg)',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2)',
            }}
          />
        </div>

        {/* Vibrant tropical flower */}
        <div 
          className="absolute left-1/2 -translate-x-1/2"
          style={{ 
            top: 0,
            width: `${20 * flowerScale}px`,
            height: `${20 * flowerScale}px`,
          }}
        >
          {/* Petals */}
          {Array.from({ length: petalCount }).map((_, i) => {
            const angle = (360 / petalCount) * i;
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  width: `${8 * flowerScale}px`,
                  height: `${12 * flowerScale}px`,
                  background: `linear-gradient(to top, ${color}, ${color}dd)`,
                  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                  transformOrigin: 'center center',
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${6 * flowerScale}px)`,
                  boxShadow: `0 0 8px ${color}88`,
                }}
              />
            );
          })}
          
          {/* Flower center */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: `${6 * flowerScale}px`,
              height: `${6 * flowerScale}px`,
              background: 'radial-gradient(circle, #FDB462, #FB8B24)',
              boxShadow: 'inset 0 0 3px rgba(0,0,0,0.3)',
            }}
          />
        </div>
      </div>
      
      {/* Sand mound at base */}
      {showShadow && (
        <div 
          className="w-8 h-2.5 rounded-full -mt-1"
          style={{
            background: 'radial-gradient(ellipse at center, #C9AE8F 0%, #B8956F 60%, transparent 100%)',
            filter: 'blur(1px)',
          }}
        />
      )}
    </div>
  );
}