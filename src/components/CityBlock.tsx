import { Friend } from '../App';
import { Building } from './Building';

interface CityBlockProps {
  title: string;
  friends: Friend[];
  onBuildingClick: (friend: Friend) => void;
}

export function CityBlock({ title, friends, onBuildingClick }: CityBlockProps) {
  return (
    <div className="mb-12 w-full max-w-[340px]">
      {/* City block container */}
      <div className="relative rounded-xl shadow-xl overflow-visible">
        {/* Street sign label */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <div className="relative">
            {/* Modern street sign */}
            <div 
              className="relative px-6 py-2.5 rounded-lg shadow-lg flex items-center justify-center backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Street name text */}
              <span 
                className="relative text-sm font-medium tracking-wide text-center text-white"
              >
                {title}
              </span>
            </div>
          </div>
        </div>

        {/* Modern street base */}
        <div 
          className="relative p-6 pt-14 pb-10 rounded-xl"
          style={{
            background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Sidewalk inner area */}
          <div className="relative bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl p-4 pt-6 shadow-inner">
            {/* Buildings grid - without individual labels */}
            <div className="relative z-10 grid grid-cols-4 gap-2 items-end justify-items-center pb-4 pt-4">
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  className="flex flex-col items-center cursor-pointer transform transition-all active:scale-95 hover:scale-105"
                  onClick={() => onBuildingClick(friend)}
                >
                  <Building
                    color={friend.color}
                    height={friend.height * 0.6}
                    relationshipStrength={friend.relationshipStrength}
                  />
                  <div className="mt-1.5 px-2 py-0.5 rounded-md bg-gray-900/90 shadow-sm flex items-center justify-center">
                    <span className="text-[10px] leading-tight text-white font-medium whitespace-nowrap">{friend.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}