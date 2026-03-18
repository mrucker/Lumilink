import { Building2, CheckSquare, Heart, User, Flower2, Palmtree } from 'lucide-react';

interface BottomNavProps {
  currentView: 'garden' | 'tasks' | 'memories' | 'profile';
  onNavigate: (view: 'garden' | 'tasks' | 'memories' | 'profile') => void;
  theme?: 'city' | 'garden' | 'desert';
}

export function BottomNav({ currentView, onNavigate, theme = 'city' }: BottomNavProps) {
  // Theme-specific styling
  const themeStyles = {
    city: {
      bg: 'bg-gray-900',
      border: 'border-gray-800',
      activeBg: 'bg-gray-800',
      activeText: 'text-white',
      inactiveText: 'text-gray-400 hover:text-white',
      label: 'City',
      icon: Building2,
    },
    garden: {
      bg: 'bg-[#5D4E37]',
      border: 'border-[#7C6F5B]',
      activeBg: 'bg-[#4A3B28]',
      activeText: 'text-[#D4C5A9]',
      inactiveText: 'text-[#9B8B6F] hover:text-[#D4C5A9]',
      label: 'Garden',
      icon: Flower2,
    },
    desert: {
      bg: 'bg-[#E67E22]',
      border: 'border-[#D35400]',
      activeBg: 'bg-[#D35400]',
      activeText: 'text-white',
      inactiveText: 'text-[#FADBD8] hover:text-white',
      label: 'Beach Oasis',
      icon: Palmtree,
    },
  };

  const currentTheme = themeStyles[theme];
  const HomeIcon = currentTheme.icon;

  const navItems = [
    { id: 'garden' as const, label: currentTheme.label, icon: HomeIcon },
    { id: 'tasks' as const, label: 'Tasks', icon: CheckSquare },
    { id: 'memories' as const, label: 'Memories', icon: Heart },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <nav className={`sticky bottom-0 z-20 ${currentTheme.bg} border-t ${currentTheme.border} shadow-lg`}>
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
                isActive
                  ? `${currentTheme.activeBg} ${currentTheme.activeText}`
                  : currentTheme.inactiveText
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}