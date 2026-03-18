import { Friend } from '../App';
import { CityBlock } from './CityBlock';
import { CityLogo } from './CityLogo';
import { Plus } from 'lucide-react';

interface CityViewProps {
  friends: Friend[];
  onBuildingClick: (friend: Friend) => void;
  onAddFriendClick: () => void;
}

export function CityView({ friends, onBuildingClick, onAddFriendClick }: CityViewProps) {
  const friendsGroup = friends.filter(f => f.category === 'friends');
  const workGroup = friends.filter(f => f.category === 'work');

  return (
    <div className="flex-1 relative flex flex-col overflow-hidden">
      {/* Sky gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB] via-[#B0C4DE] to-[#E8EEF2]" />
      
      {/* Distant cityscape silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20 pointer-events-none">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="citySilhouette" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#4A5568', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#2D3748', stopOpacity: 0.9 }} />
            </linearGradient>
          </defs>
          {/* Background buildings silhouette */}
          <rect x="0" y="120" width="80" height="80" fill="url(#citySilhouette)" />
          <rect x="85" y="100" width="60" height="100" fill="url(#citySilhouette)" />
          <rect x="150" y="130" width="70" height="70" fill="url(#citySilhouette)" />
          <rect x="225" y="90" width="55" height="110" fill="url(#citySilhouette)" />
          <rect x="285" y="110" width="75" height="90" fill="url(#citySilhouette)" />
          <rect x="365" y="125" width="50" height="75" fill="url(#citySilhouette)" />
          <rect x="420" y="95" width="65" height="105" fill="url(#citySilhouette)" />
          <rect x="490" y="115" width="80" height="85" fill="url(#citySilhouette)" />
          <rect x="575" y="105" width="60" height="95" fill="url(#citySilhouette)" />
          <rect x="640" y="130" width="70" height="70" fill="url(#citySilhouette)" />
          <rect x="715" y="100" width="55" height="100" fill="url(#citySilhouette)" />
          <rect x="775" y="120" width="75" height="80" fill="url(#citySilhouette)" />
          <rect x="855" y="110" width="65" height="90" fill="url(#citySilhouette)" />
          <rect x="925" y="95" width="60" height="105" fill="url(#citySilhouette)" />
          <rect x="990" y="125" width="70" height="75" fill="url(#citySilhouette)" />
          <rect x="1065" y="105" width="55" height="95" fill="url(#citySilhouette)" />
          <rect x="1125" y="115" width="75" height="85" fill="url(#citySilhouette)" />
        </svg>
      </div>
      
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(71 85 105 / 0.15) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />
      
      {/* Header with logo */}
      <div className="relative z-10 pt-10 pb-6 px-4 flex flex-col items-center">
        <CityLogo />
      </div>

      {/* Scrollable city container - NO SCROLLBAR */}
      <div className="relative z-10 flex-1 overflow-y-scroll px-4 pb-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex flex-col items-center">
          <CityBlock title="Friends & Family" friends={friendsGroup} onBuildingClick={onBuildingClick} />
          <CityBlock title="Work District" friends={workGroup} onBuildingClick={onBuildingClick} />
          
          {/* Add New Connection Button at bottom */}
          <div className="mt-8 mb-24 flex flex-col items-center">
            <button
              onClick={onAddFriendClick}
              className="flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              aria-label="Add new connection"
            >
              <Plus className="w-5 h-5" />
              <span className="text-sm font-medium">Add Connection</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}