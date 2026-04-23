import { useState } from 'react';
import { ArrowLeft, CheckCircle2, Circle, Camera, ListChecks, Compass, Heart, Plus } from 'lucide-react';
import { Friend, RelationshipNature, Task, BucketListItem, Memory, getRelationshipTrend } from '../App';
import { Building } from './Building';
import { AiRecommendations } from './AiRecommendations';
import { RelationshipInfoTab } from './RelationshipInfoTab';

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
  const tasks = friend.tasks;
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
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#E0F2F7] hover:bg-[#B0D8E8] transition-colors cursor-pointer"
                  >
                    {task.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-[#4A90E2] flex-shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#2E7D9B] flex-shrink-0" />
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
                <p className="text-[#2E7D9B] text-center py-4">
                  No tasks yet. Add some to strengthen your connection!
                </p>
              )}
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
    </div>
  );
}