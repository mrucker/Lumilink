interface FlowerProps {
  color: string;
  height: number;
  relationshipStrength: number;
}

export function Flower({ color, height, relationshipStrength }: FlowerProps) {
  // Determine flower stage based on relationship strength
  // 80-100: Full bloom
  // 60-79: Full bloom but drooping (needs attention)
  // 40-59: Budding (partially open)
  // 0-39: Small bud (needs significant attention)
  
  const getFlowerStage = () => {
    if (relationshipStrength >= 80) return 'full-bloom';
    if (relationshipStrength >= 60) return 'drooping';
    if (relationshipStrength >= 40) return 'budding';
    return 'small-bud';
  };

  const stage = getFlowerStage();
  const leafCount = Math.floor((relationshipStrength / 100) * 6) + 2;

  // Full bloom flower
  if (stage === 'full-bloom') {
    return (
      <div className="relative flex flex-col items-center">
        {/* Flower head */}
        <div className="relative animate-bounce-subtle" style={{ width: '60px', height: '60px', animationDuration: '3s' }}>
          {/* Petals */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const x = Math.cos(angle) * 18;
            const y = Math.sin(angle) * 18;
            
            return (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: '28px',
                  height: '28px',
                  backgroundColor: color,
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)',
                }}
              />
            );
          })}
          
          {/* Center of flower */}
          <div
            className="absolute rounded-full"
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: '#FCD34D',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              border: '2px solid #F59E0B',
              boxShadow: 'inset -1px -1px 3px rgba(0,0,0,0.2), 0 2px 3px rgba(0,0,0,0.15)',
            }}
          />
        </div>

        {/* Stem with leaves */}
        <div className="relative" style={{ width: '6px', height: `${height}px` }}>
          <div
            className="absolute left-0 w-full rounded-full"
            style={{
              height: '100%',
              backgroundColor: '#6B8E4E',
              boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.2)',
            }}
          />
          
          {/* Leaves along stem */}
          {Array.from({ length: leafCount }).map((_, i) => {
            const isLeft = i % 2 === 0;
            const position = (i / leafCount) * 70 + 15;
            
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  [isLeft ? 'right' : 'left']: '6px',
                  top: `${position}%`,
                }}
              >
                <div
                  className="rounded-full"
                  style={{
                    width: '16px',
                    height: '10px',
                    backgroundColor: '#7BA05B',
                    transform: isLeft ? 'rotate(-30deg)' : 'rotate(30deg)',
                    boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.15)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Drooping flower (needs attention)
  if (stage === 'drooping') {
    return (
      <div className="relative flex flex-col items-center">
        {/* Drooping flower head - tilted and wilted */}
        <div className="relative" style={{ width: '60px', height: '60px', transform: 'rotate(25deg) translateX(8px)' }}>
          {/* Petals - wilted and faded */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const x = Math.cos(angle) * 14;
            const y = Math.sin(angle) * 14;
            
            return (
              <div
                key={i}
                className="absolute rounded-full opacity-75"
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: color,
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${i * 15}deg)`,
                  boxShadow: 'inset -2px -2px 5px rgba(0,0,0,0.3)',
                  filter: 'brightness(0.85) saturate(0.7)',
                }}
              />
            );
          })}
          
          {/* Center - darker, showing stress */}
          <div
            className="absolute rounded-full"
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#D4A574',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              border: '2px solid #B8860B',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.3)',
            }}
          />
        </div>

        {/* Stem - slightly curved */}
        <div className="relative" style={{ width: '6px', height: `${height}px` }}>
          <div
            className="absolute left-0 w-full rounded-full"
            style={{
              height: '100%',
              backgroundColor: '#6B8E4E',
              boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.2)',
              transform: 'skewX(-3deg)',
            }}
          />
          
          {/* Fewer, slightly drooping leaves */}
          {Array.from({ length: Math.max(3, leafCount - 2) }).map((_, i) => {
            const isLeft = i % 2 === 0;
            const position = (i / leafCount) * 70 + 15;
            
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  [isLeft ? 'right' : 'left']: '6px',
                  top: `${position}%`,
                }}
              >
                <div
                  className="rounded-full opacity-80"
                  style={{
                    width: '13px',
                    height: '8px',
                    backgroundColor: '#7BA05B',
                    transform: isLeft ? 'rotate(-45deg)' : 'rotate(45deg)',
                    boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.15)',
                    filter: 'brightness(0.9)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Budding flower (partially open)
  if (stage === 'budding') {
    return (
      <div className="relative flex flex-col items-center">
        {/* Small bud */}
        <div className="relative" style={{ width: '40px', height: '40px' }}>
          {/* 3 petals starting to open */}
          {Array.from({ length: 4 }).map((_, i) => {
            const angle = (i * 90 - 90) * (Math.PI / 180);
            const x = Math.cos(angle) * 8;
            const y = Math.sin(angle) * 8;
            
            return (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: '18px',
                  height: '18px',
                  backgroundColor: color,
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  boxShadow: 'inset -1px -1px 3px rgba(0,0,0,0.2)',
                  opacity: 0.85,
                }}
              />
            );
          })}
          
          {/* Center */}
          <div
            className="absolute rounded-full"
            style={{
              width: '14px',
              height: '14px',
              backgroundColor: '#FCD34D',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              border: '2px solid #F59E0B',
            }}
          />
        </div>

        {/* Stem */}
        <div className="relative" style={{ width: '5px', height: `${height * 0.8}px` }}>
          <div
            className="absolute left-0 w-full rounded-full"
            style={{
              height: '100%',
              backgroundColor: '#6B8E4E',
              boxShadow: 'inset -2px 0 3px rgba(0,0,0,0.2)',
            }}
          />
          
          {Array.from({ length: Math.max(2, leafCount - 2) }).map((_, i) => {
            const isLeft = i % 2 === 0;
            const position = (i / 3) * 60 + 20;
            
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  [isLeft ? 'right' : 'left']: '5px',
                  top: `${position}%`,
                }}
              >
                <div
                  className="rounded-full"
                  style={{
                    width: '10px',
                    height: '7px',
                    backgroundColor: '#7BA05B',
                    transform: isLeft ? 'rotate(-25deg)' : 'rotate(25deg)',
                    boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.15)',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Small bud (needs significant attention)
  return (
    <div className="relative flex flex-col items-center">
      {/* Tiny closed bud */}
      <div className="relative" style={{ width: '24px', height: '24px' }}>
        <div
          className="absolute rounded-full"
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: color,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.2)',
            opacity: 0.75,
          }}
        />
        {/* Small green tip */}
        <div
          className="absolute rounded-full"
          style={{
            width: '10px',
            height: '10px',
            backgroundColor: '#6B8E4E',
            left: '50%',
            top: '0',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Short stem */}
      <div className="relative" style={{ width: '4px', height: `${height * 0.5}px` }}>
        <div
          className="absolute left-0 w-full rounded-full"
          style={{
            height: '100%',
            backgroundColor: '#6B8E4E',
            boxShadow: 'inset -1px 0 2px rgba(0,0,0,0.2)',
          }}
        />
        
        {/* Just 1-2 small leaves */}
        {Array.from({ length: 2 }).map((_, i) => {
          const isLeft = i % 2 === 0;
          const position = 30 + (i * 30);
          
          return (
            <div
              key={i}
              className="absolute"
              style={{
                [isLeft ? 'right' : 'left']: '4px',
                top: `${position}%`,
              }}
            >
              <div
                className="rounded-full"
                style={{
                  width: '8px',
                  height: '5px',
                  backgroundColor: '#7BA05B',
                  transform: isLeft ? 'rotate(-20deg)' : 'rotate(20deg)',
                  boxShadow: 'inset -1px -1px 1px rgba(0,0,0,0.15)',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}