interface DesertPlantProps {
  color: string;
  height: number;
  relationshipStrength: number;
  showShadow?: boolean;
}

export function DesertPlant({ color, height, relationshipStrength, showShadow = true }: DesertPlantProps) {
  // Plant type based on color for variety
  const getPlantType = (color: string) => {
    const colorValue = parseInt(color.replace('#', ''), 16);
    const typeIndex = colorValue % 3;
    if (typeIndex === 0) return 'cactus';
    if (typeIndex === 1) return 'palm';
    return 'tropical';
  };

  const plantType = getPlantType(color);
  const plantHeight = Math.min(Math.max(height, 40), 70);

  // Neutral at 50%, dimmer/muted below, vibrant/bright above
  const saturation = relationshipStrength <= 50
    ? 0.3 + (relationshipStrength / 50) * 0.4
    : 0.7 + ((relationshipStrength - 50) / 50) * 0.3;
  const brightnessVal = relationshipStrength <= 50
    ? 0.5 + (relationshipStrength / 50) * 0.25
    : 0.75 + ((relationshipStrength - 50) / 50) * 0.25;
  const haloIntensity = relationshipStrength > 50
    ? (relationshipStrength - 50) / 50
    : 0;
  const filterStyle = `saturate(${saturation}) brightness(${brightnessVal})`;

  // CACTUS: grows taller, gains arms and flowers incrementally
  if (plantType === 'cactus') {
    const cactusWidth = 12 + Math.floor(relationshipStrength / 15); // 12 to 18
    const totalBuds = Math.min(5, Math.max(0, Math.floor((relationshipStrength - 20) / 12)));
    const totalArms = Math.min(2, Math.max(0, Math.floor((relationshipStrength - 50) / 20)));

    return (
      <div className="flex flex-col items-center" style={{ filter: filterStyle, transition: 'all 0.8s ease-out' }}>
        <div className="relative" style={{ width: '40px', height: `${plantHeight}px`, transition: 'height 0.8s ease-out' }}>
          {/* Main cactus trunk */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-full"
            style={{
              width: `${cactusWidth}px`,
              height: `${plantHeight}px`,
              background: 'linear-gradient(to right, #4A7C59 0%, #5A9B6F 50%, #4A7C59 100%)',
              boxShadow: haloIntensity > 0
                ? `inset -2px 0 4px rgba(0,0,0,0.2), 0 0 ${4 + haloIntensity * 12}px rgba(90,155,111,${haloIntensity * 0.5})`
                : 'inset -2px 0 4px rgba(0,0,0,0.2)',
              transition: 'width 0.8s ease-out, height 0.8s ease-out',
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

          {/* Arms appear incrementally */}
          {totalArms >= 1 && (
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
                transition: 'all 0.8s ease-out',
              }}
            />
          )}
          {totalArms >= 2 && (
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
                transition: 'all 0.8s ease-out',
              }}
            />
          )}

          {/* Buds sit on the cactus trunk surface — glow pulses around outline */}
          {totalBuds >= 1 && (
            <div className="absolute w-2.5 h-2.5 rounded-full cactus-bud-pulse"
              style={{ left: '50%', top: '8%', transform: 'translateX(-50%)', backgroundColor: '#C4A6E8', color: '#C4A6E8', zIndex: 5, animationDelay: '0s' }} />
          )}
          {totalBuds >= 2 && (
            <div className="absolute w-2.5 h-2.5 rounded-full cactus-bud-pulse"
              style={{ left: `calc(50% - ${cactusWidth / 2 + 2}px)`, top: '25%', backgroundColor: '#8DC8F0', color: '#8DC8F0', zIndex: 5, animationDelay: '0.4s' }} />
          )}
          {totalBuds >= 3 && (
            <div className="absolute w-2.5 h-2.5 rounded-full cactus-bud-pulse"
              style={{ left: `calc(50% + ${cactusWidth / 2 - 4}px)`, top: '18%', backgroundColor: '#C4A6E8', color: '#C4A6E8', zIndex: 5, animationDelay: '0.8s' }} />
          )}
          {totalBuds >= 4 && (
            <div className="absolute w-2.5 h-2.5 rounded-full cactus-bud-pulse"
              style={{ left: `calc(50% - ${cactusWidth / 2 + 2}px)`, top: '42%', backgroundColor: '#8DC8F0', color: '#8DC8F0', zIndex: 5, animationDelay: '1.2s' }} />
          )}
          {totalBuds >= 5 && (
            <div className="absolute w-2.5 h-2.5 rounded-full cactus-bud-pulse"
              style={{ left: `calc(50% + ${cactusWidth / 2 - 4}px)`, top: '35%', backgroundColor: '#C4A6E8', color: '#C4A6E8', zIndex: 5, animationDelay: '1.6s' }} />
          )}
        </div>

        {/* Sand mound */}
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

  // PALM: grows taller, gains coconuts and fronds incrementally
  if (plantType === 'palm') {
    const palmScale = 0.8 + (relationshipStrength / 100) * 0.5; // 0.8 to 1.3
    const totalCoconuts = Math.min(4, Math.max(0, Math.floor((relationshipStrength - 20) / 15)));
    const totalFronds = Math.min(8, Math.max(3, Math.floor((relationshipStrength - 10) / 8)));

    const frondAngles = [
      { angle: -70, length: 38 },
      { angle: -45, length: 42 },
      { angle: -20, length: 46 },
      { angle: 0, length: 48 },
      { angle: 20, length: 46 },
      { angle: 45, length: 42 },
      { angle: 70, length: 38 },
      { angle: -90, length: 34 },
    ];

    return (
      <div className="flex flex-col items-center" style={{ filter: filterStyle, transition: 'all 0.8s ease-out' }}>
        <div className="relative" style={{ width: '50px', height: `${plantHeight * palmScale}px`, transition: 'height 0.8s ease-out' }}>
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
            {Array.from({ length: Math.floor(plantHeight / 20) }).map((_, i) => (
              <div key={i} className="absolute w-full h-px bg-black/20" style={{ top: `${i * 20}px` }} />
            ))}
          </div>

          {/* Fronds added incrementally */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            {frondAngles.slice(0, totalFronds).map((frond, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: '0',
                  top: '4px',
                  transformOrigin: '0 0',
                  transform: `rotate(${frond.angle}deg)`,
                  zIndex: i < 4 ? 1 : 3,
                  transition: 'all 0.8s ease-out',
                }}
              >
                <div
                  style={{
                    width: '2px',
                    height: `${frond.length}px`,
                    background: 'linear-gradient(to bottom, #5A9B6F, #4A7C59)',
                    borderRadius: '1px',
                    position: 'relative',
                  }}
                >
                  {Array.from({ length: 10 }).map((_, leafIdx) => {
                    const leafY = (leafIdx + 1) * 4;
                    const leafW = 10 - leafIdx * 0.6;
                    return (
                      <div key={leafIdx}>
                        <div
                          className="absolute"
                          style={{
                            width: `${leafW}px`,
                            height: '2px',
                            background: 'linear-gradient(to left, #5A9B6F, transparent)',
                            top: `${leafY}px`,
                            left: '1px',
                            transformOrigin: 'right center',
                            transform: 'rotate(-40deg)',
                            borderRadius: '0 2px 2px 0',
                          }}
                        />
                        <div
                          className="absolute"
                          style={{
                            width: `${leafW}px`,
                            height: '2px',
                            background: 'linear-gradient(to right, #5A9B6F, transparent)',
                            top: `${leafY}px`,
                            right: '1px',
                            transformOrigin: 'left center',
                            transform: 'rotate(40deg)',
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

          {/* Coconuts added one at a time */}
          {totalCoconuts > 0 && (
            <div className="absolute left-1/2 -translate-x-1/2 flex gap-0.5" style={{ top: '-2px', zIndex: 2 }}>
              {Array.from({ length: totalCoconuts }).map((_, i) => (
                <div
                  key={i}
                  className="w-2.5 h-3 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #8B6F47 0%, #6B5435 100%)',
                    boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.3)',
                    transition: 'all 0.8s ease-out',
                  }}
                />
              ))}
            </div>
          )}
        </div>

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

  // TROPICAL FLOWER: petals and leaves grow incrementally
  const totalPetals = Math.min(7, Math.max(0, Math.floor((relationshipStrength - 20) / 10)));
  const totalLeaves = Math.min(4, Math.max(0, Math.floor((relationshipStrength - 15) / 12)));
  const flowerScale = 0.8 + (relationshipStrength / 100) * 0.5;
  const leafWidth = 10 + Math.floor(relationshipStrength / 12);

  return (
    <div className="flex flex-col items-center" style={{ filter: filterStyle, transition: 'all 0.8s ease-out' }}>
      <div className="relative" style={{ width: '40px', height: `${plantHeight * 0.85}px`, transition: 'height 0.8s ease-out' }}>
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

        {/* Leaves added incrementally */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ bottom: '35%' }}>
          {totalLeaves >= 1 && (
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
                transition: 'all 0.8s ease-out',
              }}
            />
          )}
          {totalLeaves >= 2 && (
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
                transition: 'all 0.8s ease-out',
              }}
            />
          )}
          {totalLeaves >= 3 && (
            <div
              className="absolute"
              style={{
                width: `${leafWidth * 0.8}px`,
                height: `${leafWidth * 1.2}px`,
                background: 'radial-gradient(ellipse at center, #5A9B6F, #4A7C59)',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                left: '-16px',
                top: '-12px',
                transform: 'rotate(-40deg)',
                boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2)',
                transition: 'all 0.8s ease-out',
              }}
            />
          )}
          {totalLeaves >= 4 && (
            <div
              className="absolute"
              style={{
                width: `${leafWidth * 0.8}px`,
                height: `${leafWidth * 1.2}px`,
                background: 'radial-gradient(ellipse at center, #5A9B6F, #4A7C59)',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                right: '-16px',
                top: '-12px',
                transform: 'rotate(40deg)',
                boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2)',
                transition: 'all 0.8s ease-out',
              }}
            />
          )}
        </div>

        {/* Flower head with petals added one at a time */}
        {totalPetals > 0 && (
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: 0,
              width: `${20 * flowerScale}px`,
              height: `${20 * flowerScale}px`,
            }}
          >
            {Array.from({ length: totalPetals }).map((_, i) => {
              const angle = (360 / Math.max(totalPetals, 3)) * i;
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
                    boxShadow: haloIntensity > 0
                      ? `0 0 ${6 + haloIntensity * 10}px ${color}${Math.round(40 + haloIntensity * 100).toString(16).padStart(2, '0')}`
                      : `0 0 4px ${color}33`,
                    transition: 'all 0.8s ease-out',
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
                boxShadow: haloIntensity > 0
                  ? `inset 0 0 3px rgba(0,0,0,0.3), 0 0 ${4 + haloIntensity * 10}px rgba(253,180,98,${0.2 + haloIntensity * 0.5})`
                  : 'inset 0 0 3px rgba(0,0,0,0.3)',
                transition: 'all 0.8s ease-out',
              }}
            />
          </div>
        )}
      </div>

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
