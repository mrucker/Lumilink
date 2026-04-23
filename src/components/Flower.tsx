interface FlowerProps {
  color: string;
  height: number;
  relationshipStrength: number;
}

export function Flower({ color, height, relationshipStrength }: FlowerProps) {
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

  // Incremental growth: leaves and petals added one at a time
  const totalLeaves = Math.min(8, Math.max(0, Math.floor((relationshipStrength - 10) / 5)));
  const totalPetals = Math.min(6, Math.max(0, Math.floor((relationshipStrength - 30) / 10)));

  // Continuous sizing — capped to fit in grid cells
  const stemHeight = Math.min(Math.max(height * 0.5, 20), 55);
  const stemWidth = 3 + Math.floor(relationshipStrength / 30); // 3 to 6
  const leafWidth = Math.min(8 + Math.floor(relationshipStrength / 20), 12);
  const leafHeight = Math.round(leafWidth * 0.6);

  // Flower head scales continuously — capped so it doesn't overflow
  const petalSize = totalPetals > 0 ? Math.min(12 + Math.floor(relationshipStrength / 6), 24) : 0;
  const petalSpread = totalPetals > 0 ? Math.min(6 + Math.floor(relationshipStrength / 8), 16) : 0;
  const centerSize = totalPetals > 0 ? Math.min(8 + Math.floor(relationshipStrength / 14), 14) : 0;

  // Glow on center starts at 50%, intensifies upward
  const showGlow = relationshipStrength > 50;

  return (
    <div className="relative flex flex-col items-center" style={{ filter: filterStyle, transition: 'all 0.8s ease-out' }}>
      {/* Flower head */}
      {totalPetals > 0 && (
        <div className="relative z-10 mb-[-8px]" style={{ width: '60px', height: `${petalSpread * 2 + petalSize}px`, transition: 'all 0.8s ease-out' }}>
          {Array.from({ length: totalPetals }).map((_, i) => {
            const angle = (360 / Math.max(totalPetals, 3)) * i - 90;
            const rad = angle * (Math.PI / 180);
            const x = Math.cos(rad) * petalSpread;
            const y = Math.sin(rad) * petalSpread;

            return (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${petalSize}px`,
                  height: `${petalSize}px`,
                  backgroundColor: color,
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  boxShadow: haloIntensity > 0
                    ? `inset -2px -2px 4px rgba(0,0,0,0.15), 0 0 ${4 + haloIntensity * 10}px ${color}${Math.round(haloIntensity * 100).toString(16).padStart(2, '0')}`
                    : 'inset -2px -2px 4px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'all 0.8s ease-out',
                }}
              />
            );
          })}

          {/* Center of flower */}
          <div
            className="absolute rounded-full"
            style={{
              width: `${centerSize}px`,
              height: `${centerSize}px`,
              backgroundColor: '#FCD34D',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              border: '2px solid #F59E0B',
              boxShadow: showGlow
                ? `inset -1px -1px 3px rgba(0,0,0,0.2), 0 0 ${6 + haloIntensity * 14}px rgba(252,211,77,${0.2 + haloIntensity * 0.6})`
                : 'inset -1px -1px 3px rgba(0,0,0,0.2)',
              transition: 'all 0.8s ease-out',
            }}
          />
        </div>
      )}

      {/* Small bud when no petals yet but some leaves */}
      {totalPetals === 0 && totalLeaves > 0 && (
        <div className="relative z-10 mb-[-4px]" style={{ width: '20px', height: '20px' }}>
          <div
            className="absolute rounded-full"
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: color,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.7,
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.25)',
              transition: 'all 0.8s ease-out',
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#6B8E4E',
              left: '50%',
              top: '0',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      )}

      {/* Stem with leaves */}
      <div className="relative" style={{ width: `${stemWidth}px`, height: `${stemHeight}px`, transition: 'all 0.8s ease-out' }}>
        <div
          className="absolute left-0 w-full rounded-full"
          style={{
            height: '100%',
            backgroundColor: '#6B8E4E',
            boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.2)',
            transition: 'all 0.8s ease-out',
          }}
        />

        {/* Leaves grow one at a time, spread along the stem */}
        {Array.from({ length: totalLeaves }).map((_, i) => {
          const isLeft = i % 2 === 0;
          const position = ((i + 1) / (totalLeaves + 1)) * 80 + 10;

          return (
            <div
              key={i}
              className="absolute"
              style={{
                [isLeft ? 'right' : 'left']: `${stemWidth}px`,
                top: `${position}%`,
                transition: 'all 0.8s ease-out',
              }}
            >
              <div
                className="rounded-full"
                style={{
                  width: `${leafWidth}px`,
                  height: `${leafHeight}px`,
                  backgroundColor: '#7BA05B',
                  transform: isLeft ? 'rotate(-30deg)' : 'rotate(30deg)',
                  boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.15)',
                  transition: 'all 0.8s ease-out',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
