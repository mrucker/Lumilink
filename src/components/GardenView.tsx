import { Friend } from '../App';
import { Planter } from './Planter';
import { GardenLogo } from './GardenLogo';
import { Plus } from 'lucide-react';

interface GardenViewProps {
  friends: Friend[];
  onFlowerClick: (friend: Friend) => void;
  onAddFriendClick: () => void;
}

export function GardenView({ friends, onFlowerClick, onAddFriendClick }: GardenViewProps) {
  const friendsGroup = friends.filter(f => f.category === 'friends');
  const workGroup = friends.filter(f => f.category === 'work');

  return (
    <div className="flex-1 relative flex flex-col overflow-hidden">
      {/* Sky gradient transitioning to grass texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#B8D4C8] via-[#D4E4D8] to-[#7FB896]" />
      
      {/* Grass texture overlay for bottom half */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, 
              transparent 0%, 
              transparent 30%,
              rgba(107, 168, 79, 0.3) 50%,
              rgba(107, 168, 79, 0.5) 100%
            )
          `,
        }}
      >
        {/* Grass blade texture pattern */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[70%] opacity-40"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 3px,
                rgba(85, 139, 47, 0.3) 3px,
                rgba(85, 139, 47, 0.3) 4px
              ),
              repeating-linear-gradient(
                180deg,
                rgba(106, 168, 79, 0.2) 0px,
                rgba(85, 139, 47, 0.3) 10px,
                rgba(75, 120, 55, 0.2) 20px,
                rgba(106, 168, 79, 0.2) 30px
              )
            `,
            backgroundSize: '100% 100%',
          }}
        />
        
        {/* Grass tuft details - subtle organic shapes */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] opacity-25">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 60 + 30}px`,
                background: `radial-gradient(ellipse, 
                  rgba(85, 139, 47, 0.4) 0%, 
                  rgba(75, 120, 55, 0.2) 60%,
                  transparent 100%
                )`,
                left: `${(i * 7) % 100}%`,
                bottom: `${Math.random() * 40}%`,
                borderRadius: '50% 50% 40% 60%',
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative clouds */}
      <div className="absolute top-8 left-4 w-16 h-6 bg-white/40 rounded-full blur-sm z-10" />
      <div className="absolute top-12 right-8 w-20 h-7 bg-white/30 rounded-full blur-sm z-10" />
      <div className="absolute top-20 left-1/3 w-12 h-5 bg-white/35 rounded-full blur-sm z-10" />
      
      {/* Header with logo */}
      <div className="relative z-10 pt-10 pb-4 px-4 flex flex-col items-center">
        <GardenLogo />
        <p className="text-sm text-[#7C6F5B] text-center mt-2">Nurture your relationships 🌱</p>
      </div>

      {/* Scrollable garden container - NO SCROLLBAR */}
      <div className="relative z-10 flex-1 overflow-y-scroll px-4 pb-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex flex-col items-center">
          <Planter title="Friends & Family" friends={friendsGroup} onFlowerClick={onFlowerClick} />
          <Planter title="Work Connections" friends={workGroup} onFlowerClick={onFlowerClick} />
          
          {/* Add New Friend Button at bottom */}
          <div className="mt-6 mb-24 flex flex-col items-center">
            <button
              onClick={onAddFriendClick}
              className="flex items-center gap-2 bg-gradient-to-br from-[#6B8E4E] to-[#5A7B3E] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              aria-label="Add new relationship"
            >
              <Plus className="w-5 h-5" />
              <span className="text-sm font-medium">Add New Relationship</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}