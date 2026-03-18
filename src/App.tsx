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
import { MemoriesView } from './components/MemoriesView';
import ProfileView from './components/ProfileView';

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
  groupId?: string; // If set, this task is meant to be done as a group activity
  groupName?: string; // Custom group name for this activity
  date?: Date; // Optional date for the task
}

export interface Memory {
  id: string;
  date: Date;
  friendIds: string[];
  photoUrl: string;
  caption: string;
  location?: string;
}

export default function App() {
  const [currentView, setCurrentView] = useState<'garden' | 'tasks' | 'memories' | 'profile'>('garden');
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [theme, setTheme] = useState<'city' | 'garden' | 'desert'>('city');
  
  // Icon customization colors - separate for each theme
  const [gardenColors, setGardenColors] = useState({
    primary: '#E87EA1',
    secondary: '#FCD34D'
  });
  
  const [cityColors, setCityColors] = useState({
    primary: '#4A90E2',
    secondary: '#FCD34D'
  });
  
  const [desertColors, setDesertColors] = useState({
    primary: '#6B8E4E',
    secondary: '#8B6F47'
  });

  const [userName, setUserName] = useState('Alex');

  const [memories, setMemories] = useState<Memory[]>([
    {
      id: 'mem-1',
      date: new Date(2026, 2, 8), // March 8, 2026
      friendIds: ['1', '2'], // Sarah, Marcus
      photoUrl: 'https://images.unsplash.com/photo-1623120893483-0e9d83ebbfe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwY29mZmVlJTIwbGF1Z2hpbmd8ZW58MXx8fHwxNzczMjQwMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Coffee and laughs with Sarah and Marcus ☕️',
      location: 'Downtown Coffee House'
    },
    {
      id: 'mem-2',
      date: new Date(2026, 2, 5), // March 5, 2026
      friendIds: ['3', '5'], // Emma, Lily
      photoUrl: 'https://images.unsplash.com/photo-1650584997985-e713a869ee77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzczMjMxMzY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Emma\'s birthday celebration! 🎉',
      location: 'Home'
    },
    {
      id: 'mem-3',
      date: new Date(2026, 2, 1), // March 1, 2026
      friendIds: ['7'], // Zoe
      photoUrl: 'https://images.unsplash.com/photo-1603475429038-44361bcde123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbiUyMHRyYWlsfGVufDF8fHx8MTc3MzIxNDM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Weekend hike with Zoe 🏔️',
      location: 'Mt. Wilson Trail'
    },
    {
      id: 'mem-4',
      date: new Date(2026, 1, 28), // February 28, 2026
      friendIds: ['8', '9'], // Alex, Mia
      photoUrl: 'https://images.unsplash.com/photo-1629624123501-7595e0193fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZGlubmVyJTIwZnJpZW5kc3xlbnwxfHx8fDE3NzMxMzkxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Dinner with Alex and Mia at new restaurant',
      location: 'Bella Vista'
    },
    {
      id: 'mem-5',
      date: new Date(2026, 1, 22), // February 22, 2026
      friendIds: ['1', '5', '7'], // Sarah, Lily, Zoe
      photoUrl: 'https://images.unsplash.com/photo-1697809311064-c7a3852206ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHN1bnNldCUyMG9jZWFufGVufDF8fHx8MTc3MzIwMTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Beach sunset with the girls 🌅',
      location: 'Santa Monica Beach'
    },
    {
      id: 'mem-6',
      date: new Date(2026, 1, 15), // February 15, 2026
      friendIds: ['11', '12'], // Mom, Dad
      photoUrl: 'https://images.unsplash.com/photo-1755003842792-9d2b7ad08862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBwaWNuaWMlMjBwYXJrfGVufDF8fHx8MTc3MzI0NDc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Family picnic in the park ❤️',
      location: 'Central Park'
    },
    {
      id: 'mem-7',
      date: new Date(2026, 1, 10), // February 10, 2026
      friendIds: ['2', '10'], // Marcus, Tyler
      photoUrl: 'https://images.unsplash.com/photo-1630609682318-70047533e3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwbmlnaHQlMjBmcmllbmRzfGVufDF8fHx8MTc3MzI0NDc3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Epic game night! 🎮',
      location: 'Marcus\'s place'
    },
    {
      id: 'mem-8',
      date: new Date(2026, 1, 5), // February 5, 2026
      friendIds: ['8'], // Alex
      photoUrl: 'https://images.unsplash.com/photo-1662049024498-4fbc4468455e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBtdXNldW0lMjBnYWxsZXJ5fGVufDF8fHx8MTc3MzE5NDczOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Art museum with Alex 🎨',
      location: 'Modern Art Museum'
    },
    {
      id: 'mem-9',
      date: new Date(2026, 0, 28), // January 28, 2026
      friendIds: ['3', '17'], // Emma, Lisa
      photoUrl: 'https://images.unsplash.com/photo-1758520387687-38a92a7ee42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBmcmllbmRzfGVufDF8fHx8MTc3MzI0NDc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Shopping spree! 🛍️',
      location: 'The Grove'
    },
    {
      id: 'mem-10',
      date: new Date(2026, 0, 20), // January 20, 2026
      friendIds: ['5', '7', '17'], // Lily, Zoe, Lisa
      photoUrl: 'https://images.unsplash.com/photo-1621407808155-770a27217758?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwbXVzaWMlMjB2ZW51ZXxlbnwxfHx8fDE3NzMyNDQ3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      caption: 'Concert night! 🎵',
      location: 'Hollywood Bowl'
    },
  ]);

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
        { id: '1-2', title: 'Grab coffee together', completed: false, date: new Date(2026, 2, 18) },
        { id: '1-3', title: 'Dinner at the new Italian restaurant', completed: true },
        { id: 'group-1', title: 'Weekend camping trip at Yosemite', completed: false, groupId: 'group-weekend-squad', groupName: 'Weekend Squad', date: new Date(2026, 2, 22) },
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
        { id: '2-1', title: 'Game night at his place', completed: false, date: new Date(2026, 2, 21) },
        { id: '2-2', title: 'Grab coffee together', completed: false },
        { id: 'group-1', title: 'Weekend camping trip at Yosemite', completed: false, groupId: 'group-weekend-squad', groupName: 'Weekend Squad', date: new Date(2026, 2, 22) },
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
        { id: '3-2', title: 'Lunch at the food market', completed: false, date: new Date(2026, 2, 17) },
        { id: '3-3', title: 'Sunday brunch together', completed: false, date: new Date(2026, 2, 23) },
        { id: 'group-1', title: 'Weekend camping trip at Yosemite', completed: false, groupId: 'group-weekend-squad', groupName: 'Weekend Squad', date: new Date(2026, 2, 22) },
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
        { id: '4-2', title: 'Grab coffee together', completed: false },
        { id: 'group-1', title: 'Weekend camping trip at Yosemite', completed: false, groupId: 'group-weekend-squad', groupName: 'Weekend Squad', date: new Date(2026, 2, 22) },
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
        { id: '5-1', title: 'Lunch at the new cafe', completed: false, date: new Date(2026, 2, 17) },
        { id: '5-2', title: 'Hiking at Griffith Park', completed: false, date: new Date(2026, 2, 20) },
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
        { id: '6-1', title: 'Grab coffee together', completed: false, date: new Date(2026, 2, 19) },
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
        { id: '7-1', title: 'Rock climbing at the gym', completed: false, date: new Date(2026, 2, 19) },
        { id: '7-3', title: 'Watch movie or show together', completed: true },
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
        { id: '8-1', title: 'Dinner at the steakhouse', completed: false, date: new Date(2026, 2, 25) },
        { id: '8-2', title: 'Wine tasting this weekend', completed: false, date: new Date(2026, 2, 22) },
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
        { id: '9-1', title: 'Shopping at the mall', completed: false },
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
        { id: '10-1', title: 'Watch movie or show together', completed: false },
        { id: '10-2', title: 'Game night this Friday', completed: false, date: new Date(2026, 2, 21) },
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
        { id: '11-2', title: 'Visit for the weekend', completed: false, date: new Date(2026, 2, 29) },
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
        { id: '12-2', title: 'Fishing at the lake', completed: false },
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
        { id: '13-2', title: 'Brunch this Sunday', completed: false },
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
        { id: '15-2', title: 'Visit this weekend', completed: false },
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
        { id: '16-1', title: 'Catch up over drinks', completed: false },
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
        { id: '17-1', title: 'Lunch at the Thai place', completed: false },
        { id: '17-2', title: 'Shopping downtown', completed: false },
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
        { id: '18-2', title: 'Yoga class together', completed: false },
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
        { id: '19-1', title: 'Grab coffee together', completed: false },
        { id: '19-2', title: 'Lunch at the new cafe', completed: false },
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
        { id: '20-1', title: 'Happy hour after work', completed: false },
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
        { id: '21-1', title: 'Lunch at the sushi place', completed: false },
        { id: '21-2', title: 'Grab coffee together', completed: false },
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
        { id: '22-1', title: 'Team lunch this Friday', completed: false },
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
        { id: '23-1', title: 'Dinner at the steakhouse', completed: false },
        { id: '23-2', title: 'Grab coffee together', completed: false },
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
        { id: '24-1', title: 'Coffee chat next week', completed: false },
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
        { id: '25-2', title: 'Lunch at the food trucks', completed: false },
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

  const handleAddMemory = (memory: Omit<Memory, 'id'>) => {
    const newMemory: Memory = {
      ...memory,
      id: `mem-${Date.now()}`
    };
    setMemories([...memories, newMemory]);
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
        <div className="w-[390px] h-[844px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[14px] border-[#1e1e1e] relative">
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
                  <TasksView friends={friends} onAddMemory={handleAddMemory} theme={theme} />
                )}
                {currentView === 'memories' && (
                  <MemoriesView friends={friends} memories={memories} theme={theme} />
                )}
                {currentView === 'profile' && (
                  <ProfileView 
                    theme={theme} 
                    onThemeChange={setTheme} 
                    iconColors={theme === 'garden' ? gardenColors : theme === 'city' ? cityColors : desertColors} 
                    onIconColorsChange={theme === 'garden' ? setGardenColors : theme === 'city' ? setCityColors : setDesertColors} 
                    gardenColors={gardenColors}
                    cityColors={cityColors}
                    desertColors={desertColors}
                    onGardenColorsChange={setGardenColors}
                    onCityColorsChange={setCityColors}
                    onDesertColorsChange={setDesertColors}
                    userName={userName}
                    onUserNameChange={setUserName}
                    friends={friends} 
                  />
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