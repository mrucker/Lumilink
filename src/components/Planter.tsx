import { Friend } from '../App';
import { Flower } from './Flower';

interface PlanterProps {
  title: string;
  friends: Friend[];
  onFlowerClick: (friend: Friend) => void;
}

export function Planter({ title, friends, onFlowerClick }: PlanterProps) {
  return (
    <div className="mb-12 w-full max-w-[340px]">
      {/* Planter container with wood texture */}
      <div className="relative rounded-3xl shadow-2xl overflow-visible">
        {/* Metal Plaque Label - positioned on top of planter */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
          <div className="relative">
            {/* Stainless steel plaque */}
            <div 
              className="relative px-8 py-2 rounded-md shadow-lg flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, 
                  #E8E8E8 0%, 
                  #F5F5F5 15%, 
                  #D4D4D4 30%, 
                  #EFEFEF 45%, 
                  #C8C8C8 60%, 
                  #F0F0F0 75%, 
                  #D8D8D8 90%, 
                  #E8E8E8 100%)`,
                border: '2px solid #B0B0B0',
                boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.8), inset 0 -1px 2px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.3)',
              }}
            >
              {/* Metal texture overlay */}
              <div 
                className="absolute inset-0 rounded-md opacity-20"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 1px,
                      rgba(0,0,0,0.03) 1px,
                      rgba(0,0,0,0.03) 2px
                    ),
                    repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 1px,
                      rgba(255,255,255,0.03) 1px,
                      rgba(255,255,255,0.03) 2px
                    )
                  `,
                }}
              />
              
              {/* Nail screws in corners - inside plaque bounds */}
              <div className="absolute top-1 left-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-[#A8A8A8] to-[#6B6B6B] shadow-inner">
                <div className="absolute inset-0.5 rounded-full border border-[#8B8B8B]" />
                <div className="absolute inset-1 w-0.5 h-0.5 bg-[#5A5A5A] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute top-1 right-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-[#A8A8A8] to-[#6B6B6B] shadow-inner">
                <div className="absolute inset-0.5 rounded-full border border-[#8B8B8B]" />
                <div className="absolute inset-1 w-0.5 h-0.5 bg-[#5A5A5A] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute bottom-1 left-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-[#A8A8A8] to-[#6B6B6B] shadow-inner">
                <div className="absolute inset-0.5 rounded-full border border-[#8B8B8B]" />
                <div className="absolute inset-1 w-0.5 h-0.5 bg-[#5A5A5A] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="absolute bottom-1 right-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-[#A8A8A8] to-[#6B6B6B] shadow-inner">
                <div className="absolute inset-0.5 rounded-full border border-[#8B8B8B]" />
                <div className="absolute inset-1 w-0.5 h-0.5 bg-[#5A5A5A] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              
              {/* Engraved text - centered */}
              <span 
                className="relative text-sm font-medium tracking-wide text-center"
                style={{
                  color: '#4A4A4A',
                  textShadow: '0 1px 0 rgba(255,255,255,0.8), 0 -1px 0 rgba(0,0,0,0.3)',
                }}
              >
                {title}
              </span>
            </div>
          </div>
        </div>

        {/* Wood texture front panel - extended top for plaque */}
        <div 
          className="relative p-6 pt-14 pb-10"
          style={{
            background: `
              linear-gradient(90deg, 
                #8B7355 0%, 
                #A0836D 10%, 
                #8B7355 20%,
                #7A6B5D 30%,
                #8B7355 40%,
                #9B8269 50%,
                #8B7355 60%,
                #7A6B5D 70%,
                #8B7355 80%,
                #A0836D 90%,
                #8B7355 100%
              )
            `,
            backgroundSize: '200px 100%',
            borderTop: '6px solid #6B5744',
            borderBottom: '8px solid #5A4735',
            borderLeft: '4px solid #6B5744',
            borderRight: '4px solid #6B5744',
            borderTopLeftRadius: '1.5rem',
            borderTopRightRadius: '1.5rem',
            borderBottomLeftRadius: '1.5rem',
            borderBottomRightRadius: '1.5rem',
          }}
        >
          {/* Wood grain overlay */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0,0,0,0.1) 2px,
                rgba(0,0,0,0.1) 4px
              )`
            }}
          />
          
          {/* Wood knots decoration */}
          <div className="absolute top-8 left-12 w-4 h-6 rounded-full bg-[#6B5744] opacity-30" />
          <div className="absolute top-16 right-16 w-5 h-7 rounded-full bg-[#5A4735] opacity-25" />
          <div className="absolute bottom-16 left-20 w-3 h-5 rounded-full bg-[#6B5744] opacity-30" />

          {/* Metal corner accents */}
          <div className="absolute top-2 left-2 w-3 h-3 bg-gradient-to-br from-[#8B8B8B] to-[#5A5A5A] rounded-sm shadow-md" />
          <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-[#8B8B8B] to-[#5A5A5A] rounded-sm shadow-md" />
          <div className="absolute bottom-2 left-2 w-3 h-3 bg-gradient-to-br from-[#8B8B8B] to-[#5A5A5A] rounded-sm shadow-md" />
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-gradient-to-br from-[#8B8B8B] to-[#5A5A5A] rounded-sm shadow-md" />

          {/* Inner soil area */}
          <div className="relative bg-gradient-to-b from-[#6B5744] to-[#5A4735] rounded-2xl p-4 pt-6 shadow-inner">
            {/* Soil texture */}
            <div className="absolute inset-0 rounded-2xl opacity-30" style={{
              backgroundImage: 'radial-gradient(circle, #4A3829 1px, transparent 1px)',
              backgroundSize: '8px 8px'
            }} />

            {/* Flowers grid */}
            <div className="relative z-10 grid grid-cols-4 gap-2 items-end justify-items-center pb-4 pt-4">
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  className="flex flex-col items-center cursor-pointer transform transition-all active:scale-95"
                  onClick={() => onFlowerClick(friend)}
                >
                  <Flower
                    color={friend.color}
                    height={friend.height * 0.6}
                    relationshipStrength={friend.relationshipStrength}
                  />
                  <div className="mt-1 px-1.5 py-px rounded-md bg-[#F5F1E8]/90 shadow-sm flex items-center justify-center">
                    <span className="text-[10px] leading-tight text-[#5D4E37] font-medium whitespace-nowrap">{friend.name}</span>
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