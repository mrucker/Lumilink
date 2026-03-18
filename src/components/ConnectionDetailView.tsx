import { useState } from 'react';
import { ArrowLeft, CheckCircle2, Circle, Lightbulb, Camera, ListChecks, Activity, Compass } from 'lucide-react';
import { Friend, Task } from '../App';
import { Building } from './Building';

interface ConnectionDetailViewProps {
  friend: Friend;
  onBack: () => void;
}

export function ConnectionDetailView({ friend, onBack }: ConnectionDetailViewProps) {
  const [tasks, setTasks] = useState<Task[]>(friend.tasks);
  const [activeTab, setActiveTab] = useState<'tasks' | 'photos' | 'bucket' | 'activity'>('tasks');

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const recommendations = [
    'Send a thoughtful message',
    'Share a memory or inside joke',
    'Plan a video call or meetup',
    'Recommend a book, movie, or podcast',
    'Celebrate their recent achievements',
    'Ask about their current interests',
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header with back button */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 pt-8 pb-4 shadow-lg">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-3 bg-white/10 pl-3 pr-4 py-1.5 rounded-lg -ml-3"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to City</span>
        </button>
        <h1 className="text-2xl text-white font-medium">{friend.name}</h1>
        
        {/* Building and progress bar container */}
        <div className="mt-3 flex items-center gap-3">
          {/* Small building display */}
          <div className="flex-shrink-0">
            <Building
              color={friend.color}
              height={friend.height * 0.35}
              relationshipStrength={friend.relationshipStrength}
            />
          </div>
          
          {/* Progress bar */}
          <div className="flex-1 flex items-center gap-3">
            <div className="flex-1 h-3 bg-gray-700 rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full rounded-full transition-all shadow-lg"
                style={{
                  width: `${friend.relationshipStrength}%`,
                  background: `linear-gradient(90deg, ${friend.color} 0%, ${friend.color}dd 100%)`,
                }}
              />
            </div>
            <span className="text-sm text-white font-medium px-2.5 py-1 bg-white/10 rounded-full">
              {friend.relationshipStrength}%
            </span>
          </div>
        </div>
        
        {/* Relationship status indicator */}
        <div className="mt-2 text-xs text-gray-300">
          {friend.relationshipStrength >= 80 && 'Strong connection'}
          {friend.relationshipStrength >= 60 && friend.relationshipStrength < 80 && 'Needs attention'}
          {friend.relationshipStrength >= 40 && friend.relationshipStrength < 60 && 'Growing connection'}
          {friend.relationshipStrength < 40 && 'Building connection'}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="px-6 pt-4 pb-2 bg-gradient-to-b from-[#E0F2F7] to-[#F5F1E8]">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('tasks')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl transition-all ${
              activeTab === 'tasks'
                ? 'bg-gradient-to-br from-[#4A90E2] to-[#2E5C8A] text-white shadow-lg'
                : 'bg-white text-[#2E5C8A] border-2 border-[#B0D8E8]'
            }`}
          >
            <ListChecks className="w-5 h-5" />
            <span className="text-sm font-medium">Tasks</span>
          </button>
          
          <button
            onClick={() => setActiveTab('photos')}
            className={`flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl transition-all ${
              activeTab === 'photos'
                ? 'bg-gradient-to-br from-[#4A90E2] to-[#2E5C8A] text-white shadow-lg'
                : 'bg-white text-[#2E5C8A] border-2 border-[#B0D8E8]'
            }`}
          >
            <Camera className="w-5 h-5" />
            <span className="text-sm font-medium">Photos</span>
          </button>
          
          <button
            onClick={() => setActiveTab('bucket')}
            className={`flex-1 flex items-center justify-center gap-0.5 py-3 rounded-xl transition-all ${
              activeTab === 'bucket'
                ? 'bg-gradient-to-br from-[#4A90E2] to-[#2E5C8A] text-white shadow-lg'
                : 'bg-white text-[#2E5C8A] border-2 border-[#B0D8E8]'
            }`}
          >
            <Compass className="w-5 h-5" />
            <span className="text-sm font-medium">Bucket List</span>
          </button>
        </div>
        
        {/* Activity Report Button - Full Width Below */}
        <button
          onClick={() => setActiveTab('activity')}
          className={`w-full flex items-center justify-center gap-1.5 py-3 rounded-xl transition-all mt-2 ${
            activeTab === 'activity'
              ? 'bg-gradient-to-br from-[#4A90E2] to-[#2E5C8A] text-white shadow-lg'
              : 'bg-white text-[#2E5C8A] border-2 border-[#B0D8E8]'
          }`}
        >
          <Activity className="w-5 h-5" />
          <span className="text-sm font-medium">Activity Report</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-4 pb-6 space-y-6 bg-[#F5F1E8] scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* Tasks Section */}
        {activeTab === 'tasks' && (
          <>
            <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-[#B0D8E8]">
              <h2 className="text-xl text-[#2E5C8A] mb-4">Tasks & To-Dos</h2>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#E0F2F7] hover:bg-[#B0D8E8] transition-colors cursor-pointer"
                  >
                    {task.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-[#4A90E2] flex-shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#87CEEB] flex-shrink-0" />
                    )}
                    <span
                      className={`flex-1 ${
                        task.completed
                          ? 'text-[#2E5C8A]/60 line-through'
                          : 'text-[#2E5C8A]'
                      }`}
                    >
                      {task.title}
                    </span>
                  </div>
                ))}
              </div>
              
              {tasks.length === 0 && (
                <p className="text-[#87CEEB] text-center py-4">
                  No tasks yet. Add some to strengthen your connection!
                </p>
              )}
            </div>

            {/* Recommendations Section */}
            <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-[#B0D8E8]">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-[#F59E0B]" />
                <h2 className="text-xl text-[#2E5C8A]">Recommendations</h2>
              </div>
              <div className="space-y-2">
                {recommendations.slice(0, 4).map((rec, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#E0F2F7]"
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: friend.color }}
                    />
                    <span className="text-[#2E5C8A] flex-1">{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 text-center shadow-lg border-2 border-[#B0D8E8]">
                <div className="text-3xl mb-1" style={{ color: friend.color }}>
                  {tasks.filter(t => t.completed).length}
                </div>
                <div className="text-sm text-[#87CEEB]">Completed</div>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center shadow-lg border-2 border-[#B0D8E8]">
                <div className="text-3xl text-[#2E5C8A] mb-1">
                  {tasks.filter(t => !t.completed).length}
                </div>
                <div className="text-sm text-[#87CEEB]">Pending</div>
              </div>
            </div>
          </>
        )}

        {/* Photo Wall Section */}
        {activeTab === 'photos' && (
          <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-[#B0D8E8]">
            <h2 className="text-xl text-[#2E5C8A] mb-4 text-center">Photo Wall</h2>
            <div className="text-center py-8">
              <Camera className="w-16 h-16 text-[#87CEEB] mx-auto mb-4" />
              <p className="text-[#87CEEB] mb-4">
                No photos yet. Start building your memory wall together!
              </p>
              <button className="bg-gradient-to-br from-[#4A90E2] to-[#2E5C8A] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                Add Photo
              </button>
            </div>
          </div>
        )}

        {/* Bucket List Section */}
        {activeTab === 'bucket' && (
          <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-[#B0D8E8]">
            <h2 className="text-xl text-[#2E5C8A] mb-4 text-center">Bucket List</h2>
            <div className="text-center py-8">
              <Compass className="w-16 h-16 text-[#87CEEB] mx-auto mb-4" />
              <p className="text-[#87CEEB] mb-4">
                No bucket list items yet. Start dreaming up adventures!
              </p>
              <button className="bg-gradient-to-br from-[#4A90E2] to-[#2E5C8A] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                Add Activity
              </button>
            </div>
          </div>
        )}

        {/* Activity Report Section */}
        {activeTab === 'activity' && (
          <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-[#B0D8E8]">
            <h2 className="text-xl text-[#2E5C8A] mb-4 text-center">Activity Report</h2>
            <div className="text-center py-8">
              <Activity className="w-16 h-16 text-[#87CEEB] mx-auto mb-4" />
              <p className="text-[#87CEEB] mb-4">
                Track and report shared activities to keep your connection thriving!
              </p>
              <button className="bg-gradient-to-br from-[#4A90E2] to-[#2E5C8A] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
                Report Activity
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}