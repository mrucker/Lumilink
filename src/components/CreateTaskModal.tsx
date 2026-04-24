import { useState } from 'react';
import { X, Send, Users, Calendar, Search, Check } from 'lucide-react';
import { Friend } from '../App';

const formatDate = (date: Date): string => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateObj = new Date(date);
  today.setHours(0, 0, 0, 0);
  tomorrow.setHours(0, 0, 0, 0);
  dateObj.setHours(0, 0, 0, 0);

  if (dateObj.getTime() === today.getTime()) return 'Today';
  if (dateObj.getTime() === tomorrow.getTime()) return 'Tomorrow';
  return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

interface ThemeStyles {
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  accentBg: string;
  accentText: string;
  border: string;
  focusBorder: string;
  cardBgLight: string;
  cardBgHover: string;
  buttonGradient: string;
  buttonGradientHover: string;
}

interface CreateTaskModalProps {
  friends: Friend[];
  themeStyles: ThemeStyles;
  initialSelectedFriends?: Set<string>;
  initialTitle?: string;
  onClose: () => void;
  onCreateTask: (data: {
    title: string;
    date?: Date;
    selectedFriendIds: string[];
    isGroup: boolean;
    groupName?: string;
  }) => void;
}

export function CreateTaskModal({
  friends,
  themeStyles,
  initialSelectedFriends,
  initialTitle = '',
  onClose,
  onCreateTask,
}: CreateTaskModalProps) {
  const [newTaskTitle, setNewTaskTitle] = useState(initialTitle);
  const [selectedFriendsForTask, setSelectedFriendsForTask] = useState<Set<string>>(
    initialSelectedFriends || new Set()
  );
  const [isGroupActivity, setIsGroupActivity] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [showGroupNameInput, setShowGroupNameInput] = useState(false);
  const [taskDate, setTaskDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [friendSearchQuery, setFriendSearchQuery] = useState('');

  const toggleFriendSelection = (friendId: string) => {
    const newSelected = new Set(selectedFriendsForTask);
    if (newSelected.has(friendId)) {
      newSelected.delete(friendId);
    } else {
      newSelected.add(friendId);
    }
    setSelectedFriendsForTask(newSelected);
  };

  const selectAll = () => setSelectedFriendsForTask(new Set(friends.map(f => f.id)));
  const deselectAll = () => setSelectedFriendsForTask(new Set());

  const handleSubmit = () => {
    if (!newTaskTitle.trim() || selectedFriendsForTask.size === 0) return;

    if (isGroupActivity && !showGroupNameInput) {
      setShowGroupNameInput(true);
      return;
    }

    onCreateTask({
      title: newTaskTitle.trim(),
      date: taskDate ? new Date(taskDate) : undefined,
      selectedFriendIds: Array.from(selectedFriendsForTask),
      isGroup: isGroupActivity,
      groupName: groupName.trim() || undefined,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl max-h-[80vh] flex flex-col overflow-hidden relative">
        {/* Header Section - Fixed */}
        <div className="p-6 pb-4 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-semibold ${themeStyles.textPrimary}`}>Create New Task</h3>
            <button onClick={onClose} className={themeStyles.textSecondary}>
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Task Title Input */}
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter task title..."
            autoFocus
            className={`w-full p-3 border-2 ${themeStyles.border} rounded-xl focus:outline-none ${themeStyles.focusBorder} text-sm mb-4`}
          />

          {/* Group Activity Toggle */}
          <div className={`flex items-center justify-between p-3 border-2 ${themeStyles.border} rounded-xl mb-4`}>
            <div className="flex items-center gap-2">
              <Users className={`w-5 h-5 ${themeStyles.textPrimary}`} />
              <div>
                <p className={`text-sm font-medium ${themeStyles.textPrimary}`}>Group Activity</p>
                <p className={`text-xs ${themeStyles.textSecondary}`}>Do this with all selected friends together</p>
              </div>
            </div>
            <button
              onClick={() => setIsGroupActivity(!isGroupActivity)}
              className={`w-12 h-6 rounded-full transition-all relative ${
                isGroupActivity ? themeStyles.accentBg : 'bg-gray-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
                isGroupActivity ? 'right-0.5' : 'left-0.5'
              }`} />
            </button>
          </div>

          {/* Group Name Input */}
          {isGroupActivity && (
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name (e.g., 'Weekend Squad', 'Book Club')..."
              className={`w-full p-3 border-2 ${themeStyles.border} rounded-xl focus:outline-none ${themeStyles.focusBorder} text-sm mb-4`}
            />
          )}

          <p className={`text-sm mb-4 ${themeStyles.textSecondary}`}>
            {isGroupActivity
              ? 'This will send ONE group request to all selected friends'
              : 'Select friends to send individual requests to'}
          </p>

          {/* Date Picker Section */}
          <div className={`border-2 ${themeStyles.border} rounded-xl p-4 mb-4`}>
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Calendar className={`w-5 h-5 ${themeStyles.textPrimary}`} />
                <div className="text-left">
                  <p className={`text-sm font-medium ${themeStyles.textPrimary}`}>Add Date (Optional)</p>
                  {taskDate && (
                    <p className={`text-xs ${themeStyles.accentText} mt-0.5`}>
                      {formatDate(new Date(taskDate))}
                    </p>
                  )}
                </div>
              </div>
              <svg
                className={`w-4 h-4 ${themeStyles.textSecondary} transition-transform ${showDatePicker ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showDatePicker && (
              <div className="mt-4 space-y-3">
                <div>
                  <label className={`text-xs font-medium ${themeStyles.textSecondary} block mb-1`}>Date</label>
                  <input
                    type="date"
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full p-2 border-2 ${themeStyles.border} rounded-lg focus:outline-none ${themeStyles.focusBorder} text-sm`}
                  />
                </div>
                {taskDate && (
                  <button
                    onClick={() => setTaskDate('')}
                    className={`text-xs ${themeStyles.accentText} underline`}
                  >
                    Clear date
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Select All / Deselect All */}
          <div className="flex gap-2 mb-3">
            <button
              onClick={selectAll}
              className={`flex-1 px-3 py-2 text-xs rounded-lg border-2 ${themeStyles.border} ${themeStyles.textPrimary} ${themeStyles.cardBgHover} transition-all shadow-sm`}
            >
              Select All
            </button>
            <button
              onClick={deselectAll}
              className={`flex-1 px-3 py-2 text-xs rounded-lg border-2 ${themeStyles.border} ${themeStyles.textPrimary} ${themeStyles.cardBgHover} transition-all shadow-sm`}
            >
              Deselect All
            </button>
          </div>

          {/* Friend Search Bar */}
          <div className="relative">
            <Search className={`w-4 h-4 ${themeStyles.textSecondary} absolute left-3 top-1/2 transform -translate-y-1/2`} />
            <input
              type="text"
              value={friendSearchQuery}
              onChange={(e) => setFriendSearchQuery(e.target.value)}
              placeholder="Search friends..."
              className={`w-full pl-10 pr-3 py-2.5 border-2 ${themeStyles.border} rounded-xl focus:outline-none ${themeStyles.focusBorder} text-sm`}
            />
            {friendSearchQuery && (
              <button
                onClick={() => setFriendSearchQuery('')}
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${themeStyles.textSecondary}`}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Friends List - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 pb-24" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
          <div className="space-y-2 hide-scrollbar">
            {friends
              .filter(friend => friend.name.toLowerCase().includes(friendSearchQuery.toLowerCase()))
              .map(friend => {
                const isSelected = selectedFriendsForTask.has(friend.id);
                return (
                  <button
                    key={friend.id}
                    onClick={() => toggleFriendSelection(friend.id)}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all flex items-center gap-3 shadow-sm ${
                      isSelected
                        ? `${themeStyles.border} ${themeStyles.cardBgLight}`
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: friend.color }}
                    />
                    <span className={`flex-1 text-left text-sm font-medium ${themeStyles.textPrimary}`}>
                      {friend.name}
                    </span>
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      isSelected
                        ? `${themeStyles.accentBg} border-transparent`
                        : 'border-gray-300'
                    }`}>
                      {isSelected && <Check className="w-3 h-3 text-white" />}
                    </div>
                  </button>
                );
              })}
          </div>
        </div>

        {/* Floating Button at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
          <button
            onClick={handleSubmit}
            disabled={!newTaskTitle.trim() || selectedFriendsForTask.size === 0}
            className={`w-full px-4 py-3 bg-gradient-to-r ${themeStyles.buttonGradient} text-white rounded-xl text-sm font-medium ${themeStyles.buttonGradientHover} transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg pointer-events-auto`}
          >
            <Send className="w-4 h-4" />
            Create Task
            {selectedFriendsForTask.size > 0 && ` for ${selectedFriendsForTask.size} friend${selectedFriendsForTask.size !== 1 ? 's' : ''}`}
          </button>
        </div>
      </div>
    </div>
  );
}
