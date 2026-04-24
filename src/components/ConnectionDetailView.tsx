import { useState } from 'react';
import { ArrowLeft, CheckCircle2, Circle, Camera, ListChecks, Compass, Heart, Plus, ChevronDown, Calendar } from 'lucide-react';
import { Friend, RelationshipNature, Task, BucketListItem, Memory, getRelationshipTrend } from '../App';
import { Building } from './Building';
import { AiRecommendations } from './AiRecommendations';
import { RelationshipInfoTab } from './RelationshipInfoTab';
import { CreateTaskModal } from './CreateTaskModal';

const formatTaskDate = (date: Date): string => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const d = new Date(date);
  today.setHours(0, 0, 0, 0);
  tomorrow.setHours(0, 0, 0, 0);
  d.setHours(0, 0, 0, 0);
  if (d.getTime() === today.getTime()) return 'Today';
  if (d.getTime() === tomorrow.getTime()) return 'Tomorrow';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const getDateColor = (date: Date): string => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const diff = Math.ceil((d.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  if (diff <= 1) return 'text-red-500';
  if (diff <= 3) return 'text-orange-500';
  return 'text-[#2E7D9B]';
};

interface ConnectionDetailViewProps {
  friend: Friend;
  allFriends: Friend[];
  memories: Memory[];
  onBack: () => void;
  onToggleTask: (friendId: string, taskId: string) => void;
  onUpdateRelationshipNature: (friendId: string, nature: RelationshipNature) => void;
  onToggleBucketItem: (friendId: string, itemId: string) => void;
  onAddTaskToFriend: (friendId: string, task: Task) => void;
  onCreateTaskFromRecommendation: (title: string, friendId: string, isGroup?: boolean, groupFriendIds?: string[]) => void;
}

export function ConnectionDetailView({ friend, allFriends, memories, onBack, onToggleTask, onUpdateRelationshipNature, onToggleBucketItem, onAddTaskToFriend, onCreateTaskFromRecommendation }: ConnectionDetailViewProps) {
  const [activeTab, setActiveTab] = useState<'tasks' | 'photos' | 'bucket' | 'about'>('tasks');
  const [showCompleted, setShowCompleted] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const tasks = friend.tasks;
  const pendingTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);
  const bucketList = friend.bucketList || [];

  const toggleTask = (taskId: string) => {
    onToggleTask(friend.id, taskId);
  };

  const handleRecommendationClick = (suggestion: string, isGroup?: boolean, groupFriendIds?: string[]) => {
    onCreateTaskFromRecommendation(suggestion, friend.id, isGroup, groupFriendIds);
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header with back button */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 pt-8 pb-4 shadow-lg">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-3 bg-white/10 pl-3 pr-4 py-1.5 rounded-lg shadow-sm -ml-3"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to City</span>
        </button>
        <div className="flex items-end justify-between mt-1">
          {/* Left side: name + trend nudge */}
          <div className="flex flex-col gap-1.5 pb-2">
            <h1 className="text-2xl text-white font-medium">{friend.name}</h1>
            {(() => {
              const trend = getRelationshipTrend(friend.id, friend.relationshipNature?.type, memories);
              return (
                <span className={`text-xs font-medium ${
                  trend.isHealthy ? 'text-green-400' : 'text-red-400'
                }`}>
                  {trend.count} task{trend.count !== 1 ? 's' : ''} completed {trend.windowLabel}
                </span>
              );
            })()}
          </div>

          {/* Right side: large building */}
          <div className="flex-shrink-0 mb-2 mr-6" style={{ transform: 'scale(1.5)', transformOrigin: 'bottom center' }}>
            <Building
              color={friend.color}
              height={friend.height * 0.6}
              relationshipStrength={friend.relationshipStrength}
            />
          </div>
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
                : 'bg-white text-[#2E5C8A] border-2 border-[#B0D8E8] shadow-sm'
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
                : 'bg-white text-[#2E5C8A] border-2 border-[#B0D8E8] shadow-sm'
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
                : 'bg-white text-[#2E5C8A] border-2 border-[#B0D8E8] shadow-sm'
            }`}
          >
            <Compass className="w-5 h-5" />
            <span className="text-sm font-medium">Bucket List</span>
          </button>
        </div>

        {/* About Button - Full Width Below */}
        <button
          onClick={() => setActiveTab('about')}
          className={`w-full flex items-center justify-center gap-1.5 py-3 rounded-xl transition-all mt-2 ${
            activeTab === 'about'
              ? 'bg-gradient-to-br from-[#4A90E2] to-[#2E5C8A] text-white shadow-lg'
              : 'bg-white text-[#2E5C8A] border-2 border-[#B0D8E8]'
          }`}
        >
          <Heart className="w-5 h-5" />
          <span className="text-sm font-medium">About</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-4 pb-6 space-y-6 bg-[#F5F1E8] scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {/* Tasks Section */}
        {activeTab === 'tasks' && (
          <>
            <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-[#B0D8E8]">
              <h2 className="text-xl text-[#2E5C8A] mb-4">Tasks & To-Dos</h2>
              <div className="space-y-3">
                {pendingTasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#E0F2F7] hover:bg-[#B0D8E8] transition-colors cursor-pointer"
                  >
                    <Circle className="w-6 h-6 text-[#2E7D9B] flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <span className="text-[#2E5C8A]">{task.title}</span>
                      {task.date && (
                        <div className={`flex items-center gap-1 mt-1 ${getDateColor(task.date)}`}>
                          <Calendar className="w-3 h-3" />
                          <span className="text-xs font-medium">{formatTaskDate(task.date)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {pendingTasks.length === 0 && completedTasks.length === 0 && (
                <p className="text-[#2E7D9B] text-center py-4">
                  No tasks yet. Add some to strengthen your connection!
                </p>
              )}

              {pendingTasks.length === 0 && completedTasks.length > 0 && (
                <p className="text-[#2E7D9B] text-center py-2 text-sm">
                  All caught up! Plan something new below.
                </p>
              )}

              {/* Completed tasks - collapsible */}
              {completedTasks.length > 0 && (
                <div className="mt-4">
                  <button
                    onClick={() => setShowCompleted(!showCompleted)}
                    className="flex items-center gap-2 text-sm text-[#2E7D9B] hover:text-[#2E5C8A] transition-colors"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${showCompleted ? 'rotate-180' : ''}`} />
                    {completedTasks.length} completed task{completedTasks.length !== 1 ? 's' : ''}
                  </button>
                  {showCompleted && (
                    <div className="space-y-2 mt-3">
                      {completedTasks.map((task) => (
                        <div
                          key={task.id}
                          onClick={() => toggleTask(task.id)}
                          className="flex items-center gap-3 p-3 rounded-xl bg-[#E0F2F7]/50 hover:bg-[#B0D8E8]/50 transition-colors cursor-pointer"
                        >
                          <CheckCircle2 className="w-6 h-6 text-[#4A90E2] flex-shrink-0" />
                          <span className="flex-1 text-[#2E5C8A]/60 line-through">{task.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Create New Task Button */}
              <button
                onClick={() => setShowCreateModal(true)}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-br from-[#4A90E2] to-[#2E5C8A] text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <Plus className="w-4 h-4" />
                Create New Task
              </button>
            </div>

            {/* Lumilink Recommendations */}
            <AiRecommendations friend={friend} allFriends={allFriends} theme="city" onSuggestionClick={handleRecommendationClick} />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 text-center shadow-lg border-2 border-[#B0D8E8]">
                <div className="text-3xl mb-1" style={{ color: friend.color }}>
                  {tasks.filter(t => t.completed).length}
                </div>
                <div className="text-sm text-[#2E7D9B]">Completed</div>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center shadow-lg border-2 border-[#B0D8E8]">
                <div className="text-3xl text-[#2E5C8A] mb-1">
                  {tasks.filter(t => !t.completed).length}
                </div>
                <div className="text-sm text-[#2E7D9B]">Pending</div>
              </div>
            </div>
          </>
        )}

        {/* Photo Wall Section */}
        {activeTab === 'photos' && (
          <div className="bg-white rounded-2xl p-5 shadow-lg border-2 border-[#B0D8E8]">
            <h2 className="text-xl text-[#2E5C8A] mb-4 text-center">Photo Wall</h2>
            <div className="text-center py-8">
              <Camera className="w-16 h-16 text-[#2E7D9B] mx-auto mb-4" />
              <p className="text-[#2E7D9B] mb-4">
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
            <h2 className="text-xl text-[#2E5C8A] mb-4">Bucket List</h2>
            {bucketList.length > 0 ? (
              <div className="space-y-3">
                {bucketList.map((item: BucketListItem) => (
                  <div
                    key={item.id}
                    onClick={() => onToggleBucketItem(friend.id, item.id)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#E0F2F7] hover:bg-[#B0D8E8] transition-colors cursor-pointer"
                  >
                    {item.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-[#4A90E2] flex-shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#2E7D9B] flex-shrink-0" />
                    )}
                    <span className={`flex-1 ${item.completed ? 'text-[#2E5C8A]/60 line-through' : 'text-[#2E5C8A]'}`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Compass className="w-16 h-16 text-[#2E7D9B] mx-auto mb-4" />
                <p className="text-[#2E7D9B] mb-4">
                  No bucket list items yet. Start dreaming up adventures!
                </p>
              </div>
            )}
            <button className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-br from-[#4A90E2] to-[#2E5C8A] text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
              <Plus className="w-4 h-4" />
              Add to Bucket List
            </button>
          </div>
        )}

        {/* About / Relationship Info Section */}
        {activeTab === 'about' && (
          <RelationshipInfoTab
            friend={friend}
            theme="city"
            onUpdateRelationshipNature={onUpdateRelationshipNature}
          />
        )}
      </div>

      {/* Create New Task Modal */}
      {showCreateModal && (
        <CreateTaskModal
          friends={allFriends}
          themeStyles={{
            textPrimary: 'text-[#1B3A5F]', textSecondary: 'text-[#1B3A5F]/70', textTertiary: 'text-[#1B3A5F]/50',
            accentBg: 'bg-[#1B3A5F]', accentText: 'text-[#1B3A5F]', border: 'border-[#1B3A5F]',
            focusBorder: 'focus:border-[#1B3A5F]', cardBgLight: 'bg-[#E0F2F7]', cardBgHover: 'hover:bg-[#E0F2F7]',
            buttonGradient: 'from-[#1B3A5F] to-[#2E5C8A]', buttonGradientHover: 'hover:from-[#2E5C8A] hover:to-[#1B3A5F]',
          }}
          initialSelectedFriends={new Set([friend.id])}
          onClose={() => setShowCreateModal(false)}
          onCreateTask={(data) => {
            data.selectedFriendIds.forEach(friendId => {
              onAddTaskToFriend(friendId, {
                id: `task-${Date.now()}-${friendId}`,
                title: data.title,
                completed: false,
                groupId: data.isGroup ? `group-${Date.now()}` : undefined,
                groupName: data.isGroup ? data.groupName : undefined,
                date: data.date,
              });
            });
            setShowCreateModal(false);
          }}
        />
      )}
    </div>
  );
}