import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, X, Heart } from 'lucide-react';
import { Friend, Memory } from '../App';

interface MemoriesViewProps {
  friends: Friend[];
  memories: Memory[];
  theme: 'city' | 'garden' | 'desert';
}

export function MemoriesView({ friends, memories, theme }: MemoriesViewProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 11)); // March 11, 2026 (today)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  // Helper functions
  const getMonthName = (date: Date) => {
    return date.toLocaleString('default', { month: 'long' });
  };

  const getYear = (date: Date) => {
    return date.getFullYear();
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  };

  const getMemoriesForDate = (date: Date) => {
    return memories.filter(memory => isSameDay(memory.date, date));
  };

  const hasMemoriesOnDate = (date: Date) => {
    return memories.some(memory => isSameDay(memory.date, date));
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dateMemories = getMemoriesForDate(clickedDate);
    
    if (dateMemories.length > 0) {
      setSelectedDate(clickedDate);
    }
  };

  const handleMemoryClick = (memory: Memory) => {
    setSelectedMemory(memory);
    setShowPhotoModal(true);
  };

  const getFriendsInMemory = (friendIds: string[]) => {
    return friends.filter(f => friendIds.includes(f.id));
  };

  // Generate calendar days
  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);
  const calendarDays = [];
  
  // Add empty cells for days before month starts
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  
  // Add actual days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const selectedDateMemories = selectedDate ? getMemoriesForDate(selectedDate) : [];
  const today = new Date(2026, 2, 11); // March 11, 2026

  // Theme-based colors
  const themeStyles = theme === 'city' ? {
    bgMain: 'bg-[#F5F1E8]',
    headerGradient: 'from-gray-900 to-gray-800',
    accentText: 'text-[#1B3A5F]',
    border: 'border-[#1B3A5F]',
    calendarDayActive: 'bg-[#1B3A5F] text-white',
    calendarDayHasMemory: 'bg-[#E0F2F7]',
    textPrimary: 'text-[#1B3A5F]',
    textSecondary: 'text-[#1B3A5F]/70',
    cardBg: 'bg-white',
    cardBgLight: 'bg-[#E0F2F7]',
  } : theme === 'desert' ? {
    bgMain: 'bg-[#FFF8E7]',
    headerGradient: 'from-[#DEB887] to-[#D2B48C]',
    accentText: 'text-[#4A7C59]',
    border: 'border-[#DEB887]',
    calendarDayActive: 'bg-[#4A7C59] text-white',
    calendarDayHasMemory: 'bg-[#FFF8E7]',
    textPrimary: 'text-[#5D4E37]',
    textSecondary: 'text-[#6B5A42]',
  } : {
    bgMain: 'bg-[#F5F1E8]',
    headerGradient: 'from-[#6B8E4E] to-[#5A7B3E]',
    accentText: 'text-[#6B8E4E]',
    border: 'border-[#D4C5B0]',
    calendarDayActive: 'bg-[#6B8E4E] text-white',
    calendarDayHasMemory: 'bg-[#F5F1E8]',
    textPrimary: 'text-[#5D4E37]',
    textSecondary: 'text-[#7C6F5B]',
  };

  return (
    <div className={`flex-1 flex flex-col overflow-hidden ${themeStyles.bgMain}`}>
      {/* Header */}
      <div className={`bg-gradient-to-br ${themeStyles.headerGradient} px-6 pt-8 pb-4 shadow-lg`}>
        <h1 className="text-2xl text-white mb-2">Memories</h1>
        <p className="text-sm text-white/80">Your moments with friends</p>
      </div>

      {/* Calendar Navigation */}
      <div className={`bg-white border-b-2 ${themeStyles.border} px-4 py-3`}>
        <div className="flex items-center justify-between">
          <button
            onClick={goToPreviousMonth}
            className={`p-2 rounded-lg transition-colors shadow-sm ${theme === 'city' ? 'hover:bg-[#E0F2F7]' : theme === 'desert' ? 'hover:bg-[#FFF8E7]' : 'hover:bg-[#F5F1E8]'}`}
          >
            <ChevronLeft className={`w-5 h-5 ${themeStyles.textPrimary}`} />
          </button>
          
          <div className="text-center">
            <h2 className={`text-lg font-medium ${themeStyles.textPrimary}`}>
              {getMonthName(currentDate)} {getYear(currentDate)}
            </h2>
          </div>
          
          <button
            onClick={goToNextMonth}
            className={`p-2 rounded-lg transition-colors shadow-sm ${theme === 'city' ? 'hover:bg-[#E0F2F7]' : theme === 'desert' ? 'hover:bg-[#FFF8E7]' : 'hover:bg-[#F5F1E8]'}`}
          >
            <ChevronRight className={`w-5 h-5 ${themeStyles.textPrimary}`} />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 overflow-y-auto px-4 py-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* Calendar */}
        <div className={`bg-white rounded-xl shadow-md border-2 ${themeStyles.border} p-4 mb-4`}>
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className={`text-center text-xs font-medium ${themeStyles.textSecondary} py-1`}>
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => {
              if (day === null) {
                return <div key={`empty-${index}`} className="aspect-square" />;
              }

              const currentCellDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
              const hasMemories = hasMemoriesOnDate(currentCellDate);
              const isToday = isSameDay(currentCellDate, today);
              const isSelected = selectedDate && isSameDay(currentCellDate, selectedDate);

              return (
                <button
                  key={day}
                  onClick={() => handleDateClick(day)}
                  className={`aspect-square rounded-lg text-sm font-medium transition-all relative ${
                    isSelected
                      ? `${themeStyles.calendarDayActive} shadow-md`
                      : isToday
                      ? `border-2 ${themeStyles.border} ${themeStyles.accentText}`
                      : hasMemories
                      ? `${themeStyles.calendarDayHasMemory} ${themeStyles.textPrimary} ${theme === 'city' ? 'hover:bg-[#B0D8E8]' : theme === 'desert' ? 'hover:bg-[#4A7C59]/10' : 'hover:bg-[#6B8E4E]/20'}`
                      : `${theme === 'city' ? 'text-[#1B3A5F]/40 hover:bg-[#E0F2F7]' : 'text-[#7A6D57] hover:bg-[#F5F1E8]'}`
                  } ${hasMemories ? 'cursor-pointer' : 'cursor-default'}`}
                  disabled={!hasMemories}
                >
                  {day}
                  {hasMemories && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                      {getMemoriesForDate(currentCellDate).slice(0, 3).map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 h-1 rounded-full ${
                            isSelected ? 'bg-white' : theme === 'city' ? 'bg-[#1B3A5F]' : theme === 'desert' ? 'bg-[#4A7C59]' : 'bg-[#6B8E4E]'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Date Memories */}
        {selectedDate && selectedDateMemories.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 px-2">
              <Calendar className={`w-5 h-5 ${themeStyles.accentText}`} />
              <h3 className={`text-lg font-medium ${themeStyles.textPrimary}`}>
                {selectedDate.toLocaleDateString('default', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h3>
            </div>

            {selectedDateMemories.map(memory => {
              const memoryFriends = getFriendsInMemory(memory.friendIds);
              
              return (
                <button
                  key={memory.id}
                  onClick={() => handleMemoryClick(memory)}
                  className={`w-full bg-white rounded-xl shadow-md border-2 ${themeStyles.border} overflow-hidden hover:shadow-lg transition-all`}
                >
                  {/* Photo */}
                  <div className={`relative w-full h-48 ${theme === 'city' ? 'bg-[#B0D8E8]' : theme === 'desert' ? 'bg-[#DEB887]' : 'bg-[#D4C5B0]'}`}>
                    <img
                      src={memory.photoUrl}
                      alt={memory.caption}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Friend badges */}
                    <div className="absolute top-2 right-2 flex gap-1">
                      {memoryFriends.slice(0, 3).map(friend => (
                        <div
                          key={friend.id}
                          className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                          style={{ backgroundColor: friend.color }}
                          title={friend.name}
                        />
                      ))}
                      {memoryFriends.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-[#5D4E37] border-2 border-white shadow-md flex items-center justify-center text-xs text-white font-medium">
                          +{memoryFriends.length - 3}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="p-4 text-left">
                    <p className={`text-sm ${themeStyles.textPrimary} font-medium mb-1`}>
                      {memory.caption}
                    </p>
                    {memory.location && (
                      <p className={`text-xs ${themeStyles.textSecondary}`}>📍 {memory.location}</p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-1">
                      {memoryFriends.map(friend => (
                        <span
                          key={friend.id}
                          className="text-xs px-2 py-1 bg-[#F5F1E8] text-[#5D4E37] rounded-full"
                        >
                          {friend.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* No Date Selected */}
        {!selectedDate && (
          <div className="flex flex-col items-center justify-center py-8 px-4">
            <Calendar className={`w-16 h-16 mb-3 ${themeStyles.textPrimary}`} />
            <p className={`text-sm text-center ${themeStyles.textPrimary}`}>
              Tap on a day with memories to view photos
            </p>
            <p className={`text-xs text-center mt-1 ${themeStyles.textPrimary}`}>
              Days with memories are highlighted
            </p>
          </div>
        )}
      </div>

      {/* Photo Modal */}
      {showPhotoModal && selectedMemory && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="relative w-full max-w-md">
            {/* Close Button */}
            <button
              onClick={() => {
                setShowPhotoModal(false);
                setSelectedMemory(null);
              }}
              className="absolute -top-12 right-0 p-2 text-white hover:bg-white/10 rounded-full transition-colors shadow-sm"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Photo */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className={`relative w-full h-96 ${theme === 'city' ? 'bg-[#B0D8E8]' : theme === 'desert' ? 'bg-[#DEB887]' : 'bg-[#D4C5B0]'}`}>
                <img
                  src={selectedMemory.photoUrl}
                  alt={selectedMemory.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Heart className={`w-5 h-5 mt-0.5 flex-shrink-0 ${themeStyles.accentText}`} />
                  <div className="flex-1">
                    <p className={`text-base font-medium mb-1 ${themeStyles.textPrimary}`}>
                      {selectedMemory.caption}
                    </p>
                    <p className={`text-sm ${themeStyles.textSecondary}`}>
                      {selectedMemory.date.toLocaleDateString('default', { 
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    {selectedMemory.location && (
                      <p className={`text-sm mt-1 ${themeStyles.textSecondary}`}>
                        📍 {selectedMemory.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Friends */}
                <div className={`pt-3 border-t ${themeStyles.border}`}>
                  <p className={`text-xs mb-2 ${themeStyles.textSecondary}`}>With:</p>
                  <div className="flex flex-wrap gap-2">
                    {getFriendsInMemory(selectedMemory.friendIds).map(friend => (
                      <div
                        key={friend.id}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${theme === 'city' ? 'bg-[#E0F2F7]' : theme === 'desert' ? 'bg-[#FFF8E7]' : 'bg-[#F5F1E8]'}`}
                      >
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: friend.color }}
                        />
                        <span className={`text-sm ${themeStyles.textPrimary}`}>{friend.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}