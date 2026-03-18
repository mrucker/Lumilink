import { useState } from 'react';
import { Menu, Building2, Flower2, Waves, X } from 'lucide-react';

interface SettingsMenuProps {
  theme: 'city' | 'garden' | 'desert';
  onThemeChange: (theme: 'city' | 'garden' | 'desert') => void;
}

export function SettingsMenu({ theme, onThemeChange }: SettingsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-10 right-4 z-50 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg text-gray-700 hover:bg-white transition-all hover:scale-105 active:scale-95"
        aria-label="Settings menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Menu Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-20 right-4 z-50 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 min-w-[200px]">
            {/* Theme Options */}
            <div className="p-3 border-b border-gray-100">
              <p className="text-xs font-medium text-gray-500 mb-2 px-2">Theme</p>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    onThemeChange('city');
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    theme === 'city'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm font-medium">City</span>
                </button>
                <button
                  onClick={() => {
                    onThemeChange('garden');
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    theme === 'garden'
                      ? 'bg-[#6B8E4E] text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Flower2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Garden View</span>
                </button>
                <button
                  onClick={() => {
                    onThemeChange('desert');
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    theme === 'desert'
                      ? 'bg-[#4A7C59] text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Waves className="w-4 h-4" />
                  <span className="text-sm font-medium">Beach Oasis</span>
                </button>
              </div>
            </div>

            {/* Additional Menu Options */}
            <div className="p-2">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-all"
              >
                Settings
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-all"
              >
                About
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-all"
              >
                Help & Support
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}