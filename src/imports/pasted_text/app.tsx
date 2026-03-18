import { useState } from 'react';
import { CityView } from './components/CityView';
import { GardenView } from './components/GardenView';
import { DesertView } from './components/DesertView';
import { ConnectionDetailView } from './components/ConnectionDetailView';
import { FriendDetailView } from './components/FriendDetailView';
import { BottomNav } from './components/BottomNav';
import { AddFriendModal } from './components/AddFriendModal';
import { SettingsMenu } from './components/SettingsMenu';
import { TasksView } from './components/TasksView';
import { ProfileView } from './components/ProfileView';

export interface Friend {
  id: string;
  name: string;
  relationshipStrength: number; // 0-100
  color: string;
  height: number; // relative height
  category: 'friends' | 'family' | 'work';
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function App() {
  const [currentView, setCurrentView] = useState<'garden' | 'tasks' | 'memories' | 'profile'>('garden');
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [theme, setTheme] = useState<'city' | 'garden' | 'desert'>('city');

  const [friends] = useState<Friend[]>([
    // Friends group
    {
      id: '1',
      name: 'Sarah',
      relationshipStrength: 85,
      color: '#E87EA1',
      height: 140,
      category: 'friends',
      tasks: [
        { id: '1-1', title: 'Send a text to check in', completed: false },
        { id: '1-2', title: 'Plan coffee meetup', completed: false },
        { id: '1-3', title: 'Share that article she mentioned', completed: true },
      ]
    },
    {
      id: '2',
      name: 'Marcus',
      relationshipStrength: 65,
      color: '#FFB347',
      height: 110,
      category: 'friends',
      tasks: [
        { id: '2-1', title: 'Reply to his message', completed: false },
        { id: '2-2', title: 'Invite to game night', completed: false },
      ]
    },
    {
      id: '3',
      name: 'Emma',
      relationshipStrength: 92,
      color: '#A78BFA',
      height: 155,
      category: 'friends',
      tasks: [
        { id: '3-1', title: 'Call to wish happy birthday', completed: false },
        { id: '3-2', title: 'Send birthday card', completed: false },
        { id: '3-3', title: 'Plan surprise party', completed: false },
      ]
    },
    {
      id: '4',
      name: 'Jake',
      relationshipStrength: 35,
      color: '#FCD34D',
      height: 85,
      category: 'friends',
      tasks: [
        { id: '4-1', title: 'Reach out after a while', completed: false },
        { id: '4-2', title: 'Like recent social media post', completed: true },
      ]
    },
    {
      id: '5',
      name: 'Lily',
      relationshipStrength: 78,
      color: '#F472B6',
      height: 125,
      category: 'friends',
      tasks: [
        { id: '5-1', title: 'Schedule lunch date', completed: false },
        { id: '5-2', title: 'Ask about her new job', completed: false },
        { id: '5-3', title: 'Share workout playlist', completed: true },
      ]
    },
    {
      id: '6',
      name: 'David',
      relationshipStrength: 48,
      color: '#FB923C',
      height: 100,
      category: 'friends',
      tasks: [
        { id: '6-1', title: 'Congratulate on promotion', completed: false },
      ]
    },
    {
      id: '7',
      name: 'Zoe',
      relationshipStrength: 88,
      color: '#EC4899',
      height: 145,
      category: 'friends',
      tasks: [
        { id: '7-1', title: 'Send funny meme', completed: true },
        { id: '7-2', title: 'Plan weekend hike', completed: false },
        { id: '7-3', title: 'Check in about her cat', completed: false },
      ]
    },
    {
      id: '8',
      name: 'Alex',
      relationshipStrength: 70,
      color: '#FBBF24',
      height: 115,
      category: 'friends',
      tasks: [
        { id: '8-1', title: 'Reply to dinner invitation', completed: false },
        { id: '8-2', title: 'Share book recommendation', completed: false },
      ]
    },
    {
      id: '9',
      name: 'Mia',
      relationshipStrength: 62,
      color: '#F97316',
      height: 105,
      category: 'friends',
      tasks: [
        { id: '9-1', title: 'Ask about vacation', completed: false },
      ]
    },
    {
      id: '10',
      name: 'Tyler',
      relationshipStrength: 75,
      color: '#C084FC',
      height: 120,
      category: 'friends',
      tasks: [
        { id: '10-1', title: 'Watch new movie together', completed: false },
        { id: '10-2', title: 'Return borrowed book', completed: false },
      ]
    },
    {
      id: '11',
      name: 'Mom',
      relationshipStrength: 95,
      color: '#E879F9',
      height: 160,
      category: 'friends',
      tasks: [
        { id: '11-1', title: 'Call to say hi', completed: false },
        { id: '11-2', title: 'Send photos from trip', completed: false },
        { id: '11-3', title: 'Plan visit for holidays', completed: true },
      ]
    },
    {
      id: '12',
      name: 'Dad',
      relationshipStrength: 90,
      color: '#FB7185',
      height: 150,
      category: 'friends',
      tasks: [
        { id: '12-1', title: 'Ask about car advice', completed: false },
        { id: '12-2', title: 'Share new music playlist', completed: false },
      ]
    },
    {
      id: '13',
      name: 'Sister',
      relationshipStrength: 88,
      color: '#F472B6',
      height: 145,
      category: 'friends',
      tasks: [
        { id: '13-1', title: 'Video call this weekend', completed: false },
        { id: '13-2', title: 'Send care package', completed: false },
      ]
    },
    {
      id: '14',
      name: 'Brother',
      relationshipStrength: 82,
      color: '#FBBF24',
      height: 135,
      category: 'friends',
      tasks: [
        { id: '14-1', title: 'Play online game together', completed: true },
        { id: '14-2', title: 'Congratulate on graduation', completed: false },
      ]
    },
    {
      id: '15',
      name: 'Grandma',
      relationshipStrength: 52,
      color: '#D8B4FE',
      height: 155,
      category: 'friends',
      tasks: [
        { id: '15-1', title: 'Weekly phone call', completed: false },
        { id: '15-2', title: 'Mail handwritten letter', completed: false },
      ]
    },
    {
      id: '16',
      name: 'Maya',
      relationshipStrength: 25,
      color: '#FCD34D',
      height: 115,
      category: 'friends',
      tasks: [
        { id: '16-1', title: 'Reconnect after long time', completed: false },
      ]
    },
    {
      id: '17',
      name: 'Lisa',
      relationshipStrength: 76,
      color: '#FDA4AF',
      height: 125,
      category: 'friends',
      tasks: [
        { id: '17-1', title: 'Share recipe she asked for', completed: false },
        { id: '17-2', title: 'Check in about her health', completed: false },
      ]
    },
    {
      id: '18',
      name: 'Amy',
      relationshipStrength: 68,
      color: '#F0ABFC',
      height: 110,
      category: 'friends',
      tasks: [
        { id: '18-1', title: 'Like wedding photos', completed: true },
        { id: '18-2', title: 'Plan get together', completed: false },
      ]
    },
    // Work group
    {
      id: '19',
      name: 'Jennifer',
      relationshipStrength: 72,
      color: '#A78BFA',
      height: 118,
      category: 'work',
      tasks: [
        { id: '19-1', title: 'Grab coffee before meeting', completed: false },
        { id: '19-2', title: 'Collaborate on project', completed: false },
      ]
    },
    {
      id: '20',
      name: 'Michael',
      relationshipStrength: 55,
      color: '#FB923C',
      height: 108,
      category: 'work',
      tasks: [
        { id: '20-1', title: 'Ask about presentation tips', completed: false },
      ]
    },
    {
      id: '21',
      name: 'Rachel',
      relationshipStrength: 80,
      color: '#F472B6',
      height: 130,
      category: 'work',
      tasks: [
        { id: '21-1', title: 'Lunch together on Friday', completed: false },
        { id: '21-2', title: 'Review her proposal', completed: false },
      ]
    },
    {
      id: '22',
      name: 'Tom',
      relationshipStrength: 42,
      color: '#FBBF24',
      height: 100,
      category: 'work',
      tasks: [
        { id: '22-1', title: 'Help with technical issue', completed: true },
      ]
    },
    {
      id: '23',
      name: 'Nina',
      relationshipStrength: 75,
      color: '#E87EA1',
      height: 122,
      category: 'work',
      tasks: [
        { id: '23-1', title: 'Celebrate her promotion', completed: false },
        { id: '23-2', title: 'Invite to team event', completed: false },
      ]
    },
    {
      id: '24',
      name: 'Chris',
      relationshipStrength: 30,
      color: '#FFB347',
      height: 105,
      category: 'work',
      tasks: [
        { id: '24-1', title: 'Reach out to new colleague', completed: false },
      ]
    },
    {
      id: '25',
      name: 'Sophia',
      relationshipStrength: 85,
      color: '#C084FC',
      height: 115,
      category: 'work',
      tasks: [
        { id: '25-1', title: 'Connect on LinkedIn', completed: true },
        { id: '25-2', title: 'Ask about mentorship', completed: false },
      ]
    },
  ]);

  const handleFlowerClick = (friend: Friend) => {
    setSelectedFriend(friend);
  };

  const handleBackToGarden = () => {
    setSelectedFriend(null);
  };

  const handleNavClick = (view: 'garden' | 'tasks' | 'memories' | 'profile') => {
    setCurrentView(view);
    setSelectedFriend(null);
  };

  const handleAddFriend = (friendData: { name: string; relationship: string; lumilinkId: string }) => {
    // In a real app, this would make an API call to add the friend
    console.log('Adding friend:', friendData);
    // For now, just log the data. In production, you'd update the friends state
    // and sync with the backend using the Lumilink ID
  };

  // Get unique relationship categories for the modal
  const existingRelationships = Array.from(new Set(friends.map(f => {
    if (f.category === 'friends') return 'Friends & Family';
    if (f.category === 'work') return 'Work Connections';
    return f.category;
  })));

  return (
    <div className="h-screen flex flex-col bg-[#F5F1E8]">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-[390px] h-full max-h-[844px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[14px] border-[#1e1e1e] relative">
          {/* iPhone notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-[#1e1e1e] rounded-b-3xl z-50" />
          
          {/* Settings Menu - Only show on garden/city view */}
          {currentView === 'garden' && !selectedFriend && (
            <SettingsMenu theme={theme} onThemeChange={setTheme} />
          )}
          
          <div className="h-full flex flex-col bg-[#F5F1E8]">
            {selectedFriend ? (
              <>
                {theme === 'city' ? (
                  <ConnectionDetailView friend={selectedFriend} onBack={handleBackToGarden} />
                ) : (
                  <FriendDetailView friend={selectedFriend} onBack={handleBackToGarden} theme={theme === 'desert' ? 'desert' : 'garden'} />
                )}
                <BottomNav currentView={currentView} onNavigate={handleNavClick} theme={theme} />
              </>
            ) : (
              <>
                {currentView === 'garden' && (
                  <>
                    {theme === 'city' ? (
                      <CityView 
                        friends={friends} 
                        onBuildingClick={handleFlowerClick}
                        onAddFriendClick={() => setShowAddModal(true)}
                      />
                    ) : theme === 'desert' ? (
                      <DesertView 
                        friends={friends} 
                        onPlantClick={handleFlowerClick}
                        onAddFriendClick={() => setShowAddModal(true)}
                      />
                    ) : (
                      <GardenView 
                        friends={friends} 
                        onFlowerClick={handleFlowerClick}
                        onAddFriendClick={() => setShowAddModal(true)}
                      />
                    )}
                  </>
                )}
                {currentView === 'tasks' && (
                  <TasksView friends={friends} />
                )}
                {currentView === 'memories' && (
                  <div className="flex-1 flex items-center justify-center p-6">
                    <div className="text-center">
                      <h2 className="text-2xl text-[#5D4E37] mb-2">Memories</h2>
                      <p className="text-[#7C6F5B]">Your cherished moments with friends</p>
                    </div>
                  </div>
                )}
                {currentView === 'profile' && (
                  <ProfileView theme={theme} userName="Alex" friends={friends} />
                )}
                <BottomNav currentView={currentView} onNavigate={handleNavClick} theme={theme} />
              </>
            )}
          </div>
          
          {/* Add Friend Modal */}
          {showAddModal && (
            <AddFriendModal
              onClose={() => setShowAddModal(false)}
              onAdd={handleAddFriend}
              existingRelationships={existingRelationships}
              theme={theme}
            />
          )}
        </div>
      </div>
    </div>
  );
}