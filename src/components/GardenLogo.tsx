export function GardenLogo() {
  return (
    <div className="flex items-center justify-center gap-2">
      {/* Decorative flower icons on sides */}
      <div className="relative w-8 h-8">
        {/* Left flower */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => {
            const angle = (i * 72 - 90) * (Math.PI / 180);
            const x = Math.cos(angle) * 8;
            const y = Math.sin(angle) * 8;
            
            return (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-[#E87EA1]"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.2)',
                }}
              />
            );
          })}
          <div className="absolute w-2 h-2 rounded-full bg-[#FCD34D] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#F59E0B]" />
        </div>
      </div>

      {/* Logo text */}
      <div className="text-center">
        <div className="flex items-center gap-1">
          <span className="text-2xl text-[#5D4E37]">Friendship</span>
        </div>
        <div className="flex items-center justify-center gap-1 -mt-1">
          <span className="text-2xl text-[#6B8E4E]">Garden</span>
        </div>
      </div>

      {/* Right decorative flower */}
      <div className="relative w-8 h-8">
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => {
            const angle = (i * 72 - 90) * (Math.PI / 180);
            const x = Math.cos(angle) * 8;
            const y = Math.sin(angle) * 8;
            
            return (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-[#A78BFA]"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.2)',
                }}
              />
            );
          })}
          <div className="absolute w-2 h-2 rounded-full bg-[#FCD34D] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#F59E0B]" />
        </div>
      </div>
    </div>
  );
}
