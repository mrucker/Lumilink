import { Friend } from '../App';
import { DesertPlant } from './DesertPlant';
import { DesertSign } from './DesertSign';

interface DesertPlanterProps {
  title: string;
  friends: Friend[];
  onPlantClick: (friend: Friend) => void;
}

export function DesertPlanter({ title, friends, onPlantClick }: DesertPlanterProps) {
  return (
    <div className="mb-16 w-full max-w-[340px]">
      {/* Desert sign */}
      <DesertSign title={title} />

      {/* Desert ground with plants */}
      <div className="relative">
        {/* Plants grid - directly on the desert ground */}
        <div className="relative z-10 grid grid-cols-4 gap-4 items-end justify-items-center px-4">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex flex-col items-center cursor-pointer transform transition-all active:scale-95 hover:scale-105"
              onClick={() => onPlantClick(friend)}
            >
              <DesertPlant
                color={friend.color}
                height={friend.height * 0.6}
                relationshipStrength={friend.relationshipStrength}
              />
              <div className="mt-2 px-2 py-1 rounded-md bg-[#4A7C59]/90 shadow-md flex items-center justify-center backdrop-blur-sm">
                <span className="text-[10px] leading-tight text-white font-medium whitespace-nowrap">{friend.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}