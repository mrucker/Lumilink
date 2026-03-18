interface DesertSignProps {
  title: string;
}

export function DesertSign({ title }: DesertSignProps) {
  return (
    <div className="flex flex-col items-center mb-8">
      {/* Wooden sign post */}
      <div className="relative">
        {/* Sign board */}
        <div 
          className="relative px-8 py-4 rounded-lg shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #8B6F47 0%, #6B5435 50%, #8B6F47 100%)',
            border: '3px solid #5A4426',
            borderRadius: '8px',
          }}
        >
          {/* Wood grain texture */}
          <div className="absolute inset-0 opacity-20 rounded-lg overflow-hidden">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.1) 2px,
                rgba(0,0,0,0.1) 4px
              )`
            }} />
          </div>
          
          {/* Sign text */}
          <span className="relative text-lg font-bold text-[#F5DEB3] tracking-wide drop-shadow-lg" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            {title}
          </span>
          
          {/* Corner details */}
          <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-[#5A4426]" />
          <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#5A4426]" />
          <div className="absolute bottom-1 left-1 w-2 h-2 rounded-full bg-[#5A4426]" />
          <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-[#5A4426]" />
        </div>
        
        {/* Wooden post */}
        <div 
          className="mx-auto w-3 rounded-b-sm shadow-lg"
          style={{
            height: '60px',
            background: 'linear-gradient(to right, #6B5435 0%, #8B6F47 50%, #6B5435 100%)',
          }}
        >
          {/* Post grain */}
          <div className="w-px h-full mx-auto bg-black/20" />
        </div>
      </div>
    </div>
  );
}
