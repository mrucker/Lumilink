import { Friend } from '../App';
import { DesertPlanter } from './DesertPlanter';
import { DesertLogo } from './DesertLogo';
import { Plus } from 'lucide-react';
import { useRef } from 'react';

interface DesertViewProps {
  friends: Friend[];
  onPlantClick: (friend: Friend) => void;
  onAddFriendClick: () => void;
}

export function DesertView({ friends, onPlantClick, onAddFriendClick }: DesertViewProps) {
  const friendsGroup = friends.filter(f => f.category === 'friends');
  const workGroup = friends.filter(f => f.category === 'work');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex-1 relative flex flex-col overflow-hidden">
      {/* Header with logo - fixed at top */}
      <div className="relative z-10 pt-10 pb-6 px-4 flex flex-col items-center bg-gradient-to-b from-[#87CEEB] to-transparent">
        <DesertLogo />
      </div>

      {/* Scrollable desert container - background scrolls with content */}
      <div 
        ref={scrollContainerRef}
        className="relative flex-1 overflow-y-scroll scrollbar-hide bg-[#D2B48C]" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Desert sky gradient with animated water waves - scrolls with content */}
        <div className="absolute top-0 left-0 right-0 h-[150%] bg-gradient-to-b from-[#87CEEB] via-[#DEB887] to-[#D2B48C] pointer-events-none">
          {/* Animated water waves in sky area */}
          <svg className="absolute top-0 left-0 w-full h-[300px]" viewBox="0 0 1200 300" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waterGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#4A90E2', stopOpacity: 0.15 }} />
                <stop offset="100%" style={{ stopColor: '#6BA5CC', stopOpacity: 0.25 }} />
              </linearGradient>
              <linearGradient id="waterGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#5B9FD5', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: '#4A90E2', stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>
            
            {/* Wave layer 1 (back) */}
            <path d="M0,80 Q200,60 400,80 T800,80 T1200,80 L1200,300 L0,300 Z" fill="url(#waterGradient1)">
              <animate
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values="
                  M0,80 Q200,60 400,80 T800,80 T1200,80 L1200,300 L0,300 Z;
                  M0,85 Q200,65 400,85 T800,85 T1200,85 L1200,300 L0,300 Z;
                  M0,80 Q200,60 400,80 T800,80 T1200,80 L1200,300 L0,300 Z
                "
              />
            </path>
            
            {/* Wave layer 2 (middle) */}
            <path d="M0,120 Q250,100 500,120 T1000,120 T1200,120 L1200,300 L0,300 Z" fill="url(#waterGradient2)">
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
                  M0,120 Q250,100 500,120 T1000,120 T1200,120 L1200,300 L0,300 Z;
                  M0,115 Q250,95 500,115 T1000,115 T1200,115 L1200,300 L0,300 Z;
                  M0,120 Q250,100 500,120 T1000,120 T1200,120 L1200,300 L0,300 Z
                "
              />
            </path>
            
            {/* Wave layer 3 (front) */}
            <path d="M0,160 Q300,140 600,160 T1200,160 L1200,300 L0,300 Z" fill="#4A90E2" opacity="0.15">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
                  M0,160 Q300,140 600,160 T1200,160 L1200,300 L0,300 Z;
                  M0,155 Q300,135 600,155 T1200,155 L1200,300 L0,300 Z;
                  M0,160 Q300,140 600,160 T1200,160 L1200,300 L0,300 Z
                "
              />
            </path>
            
            {/* White foam highlights */}
            <circle cx="200" cy="85" r="3" fill="white" opacity="0.3">
              <animate attributeName="cy" dur="8s" repeatCount="indefinite" values="85;90;85" />
            </circle>
            <circle cx="600" cy="85" r="2.5" fill="white" opacity="0.3">
              <animate attributeName="cy" dur="6s" repeatCount="indefinite" values="85;88;85" />
            </circle>
            <circle cx="1000" cy="85" r="3" fill="white" opacity="0.25">
              <animate attributeName="cy" dur="10s" repeatCount="indefinite" values="85;92;85" />
            </circle>
            <circle cx="350" cy="125" r="2" fill="white" opacity="0.2">
              <animate attributeName="cy" dur="7s" repeatCount="indefinite" values="125;130;125" />
            </circle>
            <circle cx="800" cy="125" r="2.5" fill="white" opacity="0.25">
              <animate attributeName="cy" dur="9s" repeatCount="indefinite" values="125;128;125" />
            </circle>
          </svg>
        </div>
        
        {/* Sand dunes pattern - scrolls with content */}
        <div className="absolute top-0 left-0 right-0 h-[150%] pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 2000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="sandGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#E8D5B7', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#D2B48C', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            {/* Multiple dune layers for depth */}
            <path 
              d="M0,400 Q300,350 600,400 T1200,400 L1200,2000 L0,2000 Z" 
              fill="url(#sandGradient)" 
              opacity="0.6"
            />
            <path 
              d="M0,500 Q400,450 800,500 T1200,500 L1200,2000 L0,2000 Z" 
              fill="#C9AE8F" 
              opacity="0.5"
            />
            <path 
              d="M0,600 Q350,550 700,600 T1200,600 L1200,2000 L0,2000 Z" 
              fill="#D2B48C" 
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Scattered rocks throughout the scene - scrolls with content */}
        <div className="absolute top-40 left-8 w-6 h-3 rounded-full bg-[#8B7D6B] opacity-60 pointer-events-none" />
        <div className="absolute top-60 right-12 w-4 h-2 rounded-full bg-[#8B7D6B] opacity-60 pointer-events-none" />
        <div className="absolute top-96 left-16 w-5 h-2.5 rounded-full bg-[#8B7D6B] opacity-60 pointer-events-none" />
        <div className="absolute top-[500px] right-20 w-6 h-3 rounded-full bg-[#8B7D6B] opacity-50 pointer-events-none" />
        <div className="absolute top-[650px] left-10 w-4 h-2 rounded-full bg-[#8B7D6B] opacity-55 pointer-events-none" />
        <div className="absolute top-[800px] right-16 w-5 h-2.5 rounded-full bg-[#8B7D6B] opacity-60 pointer-events-none" />

        {/* Content container */}
        <div className="relative z-10 px-4 pb-24 pt-4">
          <div className="flex flex-col items-center">
            <DesertPlanter title="Friends & Family" friends={friendsGroup} onPlantClick={onPlantClick} />
            <DesertPlanter title="Work Connections" friends={workGroup} onPlantClick={onPlantClick} />
            
            {/* Add New Friend Button */}
            <div className="mt-8 flex flex-col items-center">
              <button
                onClick={onAddFriendClick}
                className="flex items-center gap-2 bg-gradient-to-r from-[#4A7C59] to-[#5A9B6F] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                aria-label="Add new friend"
              >
                <Plus className="w-5 h-5" />
                <span className="text-sm font-medium">Add Connection</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}