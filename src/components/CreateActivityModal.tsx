import { useState } from 'react';
import { X, Send, Calendar } from 'lucide-react';

interface CreateActivityModalProps {
  friendName: string;
  friendColor: string;
  theme: 'city' | 'garden' | 'desert';
  onClose: () => void;
  onSubmit: (title: string, date?: Date) => void;
}

const formatDatePreview = (dateStr: string): string => {
  const date = new Date(dateStr);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  today.setHours(0, 0, 0, 0);
  tomorrow.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  if (date.getTime() === today.getTime()) return 'Today';
  if (date.getTime() === tomorrow.getTime()) return 'Tomorrow';
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

export function CreateActivityModal({ friendName, friendColor, theme, onClose, onSubmit }: CreateActivityModalProps) {
  const [title, setTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const isCity = theme === 'city';
  const isDesert = theme === 'desert';

  const colors = {
    accent: isCity ? '#4A90E2' : isDesert ? '#4A7C59' : '#6B8E4E',
    accentGradient: isCity
      ? 'from-[#4A90E2] to-[#2E5C8A]'
      : isDesert
      ? 'from-[#4A7C59] to-[#5A9B6F]'
      : 'from-[#6B8E4E] to-[#5A7B3E]',
    text: isCity ? 'text-[#2E5C8A]' : 'text-[#5D4E37]',
    textLight: isCity ? 'text-[#2E7D9B]' : 'text-[#7C6F5B]',
    border: isCity ? 'border-[#B0D8E8]' : 'border-[#D4C5B0]',
    inputBg: isCity ? 'bg-[#E0F2F7]' : 'bg-[#F5F1E8]',
    focusBorder: isCity ? 'focus:border-[#4A90E2]' : 'focus:border-[#6B8E4E]',
  };

  const handleSubmit = () => {
    if (!title.trim()) return;
    onSubmit(title.trim(), taskDate ? new Date(taskDate) : undefined);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 pb-2">
          <div className="flex items-center justify-between mb-1">
            <h3 className={`text-lg font-semibold ${colors.text}`}>Create New Task</h3>
            <button onClick={onClose} className={colors.textLight}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: friendColor }} />
            <span className={`text-sm ${colors.textLight}`}>with {friendName}</span>
          </div>

          {/* Title Input */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(); }}
            placeholder="What do you want to do?"
            autoFocus
            className={`w-full p-3 border-2 ${colors.border} rounded-xl focus:outline-none ${colors.focusBorder} text-sm mb-4`}
          />

          {/* Date Picker */}
          <div className={`border-2 ${colors.border} rounded-xl p-4 mb-4`}>
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Calendar className={`w-5 h-5 ${colors.text}`} />
                <div className="text-left">
                  <p className={`text-sm font-medium ${colors.text}`}>Add Date (Optional)</p>
                  {taskDate && (
                    <p className="text-xs mt-0.5" style={{ color: colors.accent }}>
                      {formatDatePreview(taskDate)}
                    </p>
                  )}
                </div>
              </div>
              <svg
                className={`w-4 h-4 ${colors.textLight} transition-transform ${showDatePicker ? 'rotate-180' : ''}`}
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
                  <label className={`text-xs font-medium ${colors.textLight} block mb-1`}>Date</label>
                  <input
                    type="date"
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full p-2 border-2 ${colors.border} rounded-lg focus:outline-none ${colors.focusBorder} text-sm`}
                  />
                </div>
                {taskDate && (
                  <button
                    onClick={() => setTaskDate('')}
                    className="text-xs underline"
                    style={{ color: colors.accent }}
                  >
                    Clear date
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="p-6 pt-2">
          <button
            onClick={handleSubmit}
            disabled={!title.trim()}
            className={`w-full px-4 py-3 bg-gradient-to-r ${colors.accentGradient} text-white rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg active:scale-95`}
          >
            <Send className="w-4 h-4" />
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}
