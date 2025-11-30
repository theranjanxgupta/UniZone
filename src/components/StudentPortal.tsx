import { useState } from 'react';
import { ArrowLeft, BookOpen, FileText, Calendar, MessageCircle, Library, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ChatRoom from './ChatRoom';
import ComingSoon from './ComingSoon';
import {
  getClassAnnouncements,
  addClassAnnouncement,
  getClassChatMessages,
  addClassChatMessage,
  getClubAnnouncements,
  addClubAnnouncement,
  getCurrentUser,
  ChatMessage,
  ClassAnnouncement
} from '@/lib/storage';
import { toast } from 'sonner';

interface StudentPortalProps {
  onClose: () => void;
}

export default function StudentPortal({ onClose }: StudentPortalProps) {
  const [view, setView] = useState<string>('main');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedClub, setSelectedClub] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const subjects = [
    'AC LAB', 'Maths 1', 'Maths 2', 'Physics', 'BEE', 'PPS',
    'Biology', 'Workshop', 'Physics Lab', 'Communication', 'SPT Lab', 'Chemistry',
    'BME', 'ECE', 'Environmental Science', 'BECE Lab', 'Chemistry Lab', 'NSS'
  ];

  const departments = ['CSE', 'ECE', 'AIML', 'EEE', 'CHEMICAL', 'CIVIL'];
  const clubs = ['ACM', 'Robotics', 'PSOC', 'EDC'];

  const handleCRLogin = () => {
    if (loginData.username === 'theranjansah' && loginData.password === '0007') {
      setIsAuthenticated(true);
      toast.success('Login successful!');
    } else {
      toast.error('Invalid credentials');
    }
  };

  const handleClubPresidentLogin = () => {
    if (loginData.username === 'theranjansah07' && loginData.password === '00007') {
      setIsAuthenticated(true);
      toast.success('Login successful!');
    } else {
      toast.error('Invalid credentials');
    }
  };

  if (view === 'chatroom') {
    return <ChatRoom onBack={() => setView('main')} />;
  }

  return (
    <div className="fixed inset-0 bg-[#f7f4ef] z-50 overflow-y-auto">
      <div className="min-h-screen p-8">
        <Button
          variant="ghost"
          className="mb-6 hover:bg-black/5"
          onClick={() => {
            if (view === 'main') {
              onClose();
            } else {
              setView('main');
              setSelectedDepartment('');
              setSelectedClub('');
              setIsAuthenticated(false);
            }
          }}
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Button>

        {view === 'main' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#0f0f0f] mb-4 text-center">Student Portal</h2>
            <p className="text-xl text-[#0f0f0f]/70 mb-12 text-center">Your Academic Companion, Powered By Innovation</p>

            <div className="grid grid-cols-3 gap-6">
              <button
                onClick={() => setView('notes')}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left group"
              >
                <BookOpen className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#0f0f0f] mb-2">Notes & Tutorial</h3>
                <p className="text-[#0f0f0f]/70">Access study materials</p>
              </button>

              <button
                onClick={() => setView('pyq')}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left group"
              >
                <FileText className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#0f0f0f] mb-2">PYQ & Mock Test</h3>
                <p className="text-[#0f0f0f]/70">Practice previous papers</p>
              </button>

              <button
                onClick={() => setView('coming-soon')}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left group"
              >
                <Calendar className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#0f0f0f] mb-2">Event & Notices</h3>
                <p className="text-[#0f0f0f]/70">Stay updated</p>
              </button>

              <button
                onClick={() => setView('chatroom')}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left group"
              >
                <MessageCircle className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#0f0f0f] mb-2">Doubt Solving</h3>
                <p className="text-[#0f0f0f]/70">Real-time chat support</p>
              </button>

              <button
                onClick={() => setView('coming-soon')}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left group"
              >
                <Library className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#0f0f0f] mb-2">E-Library</h3>
                <p className="text-[#0f0f0f]/70">Digital resources</p>
              </button>

              <button
                onClick={() => setView('newsroom')}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left group"
              >
                <Newspaper className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#0f0f0f] mb-2">Campus Newsroom</h3>
                <p className="text-[#0f0f0f]/70">Class & club updates</p>
              </button>
            </div>
          </div>
        )}

        {(view === 'notes' || view === 'pyq') && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f0f0f] mb-8 text-center">
              {view === 'notes' ? 'Notes & Tutorial' : 'PYQ & Mock Test'}
            </h2>
            <div className="grid grid-cols-6 gap-4">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => setView('coming-soon')}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <p className="font-semibold text-[#0f0f0f]">{subject}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'newsroom' && !selectedDepartment && !selectedClub && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f0f0f] mb-8 text-center">Campus Newsroom</h2>
            <div className="grid grid-cols-3 gap-6">
              <button
                onClick={() => setView('class-newsroom')}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-[#0f0f0f]">Class Newsroom</h3>
              </button>
              <button
                onClick={() => setView('coming-soon')}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-[#0f0f0f]">College Updates</h3>
              </button>
              <button
                onClick={() => setView('clubs')}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-[#0f0f0f]">Clubs</h3>
              </button>
            </div>
          </div>
        )}

        {view === 'class-newsroom' && !selectedDepartment && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f0f0f] mb-8 text-center">Select Department</h2>
            <div className="grid grid-cols-3 gap-6">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => {
                    setSelectedDepartment(dept);
                    setView('select-role');
                  }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-xl font-bold text-[#0f0f0f]">{dept}</h3>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'clubs' && !selectedClub && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f0f0f] mb-8 text-center">Select Club</h2>
            <div className="grid grid-cols-2 gap-6">
              {clubs.map((club) => (
                <button
                  key={club}
                  onClick={() => {
                    setSelectedClub(club);
                    setView('club-role');
                  }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-xl font-bold text-[#0f0f0f]">{club}</h3>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'select-role' && selectedDepartment && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f0f0f] mb-8 text-center">Select Your Role</h2>
            <div className="grid grid-cols-2 gap-6">
              <button
                onClick={() => setView('class-view')}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-[#0f0f0f]">Student</h3>
              </button>
              <button
                onClick={() => setView('cr-login')}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-[#0f0f0f]">CR/Faculty</h3>
              </button>
            </div>
          </div>
        )}

        {view === 'club-role' && selectedClub && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f0f0f] mb-8 text-center">Select Your Role</h2>
            <div className="grid grid-cols-2 gap-6">
              <button
                onClick={() => setView('club-view')}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-[#0f0f0f]">College Student</h3>
              </button>
              <button
                onClick={() => setView('president-login')}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-[#0f0f0f]">Club President</h3>
              </button>
            </div>
          </div>
        )}

        {view === 'cr-login' && !isAuthenticated && (
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-6">CR/Faculty Login</h2>
            <div className="space-y-4">
              <Input
                placeholder="Username"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                className="bg-white/50"
              />
              <Input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="bg-white/50"
              />
              <Button onClick={handleCRLogin} className="w-full bg-blue-600 hover:bg-blue-700">
                Login
              </Button>
            </div>
          </div>
        )}

        {view === 'president-login' && !isAuthenticated && (
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-6">Club President Login</h2>
            <div className="space-y-4">
              <Input
                placeholder="Username"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                className="bg-white/50"
              />
              <Input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="bg-white/50"
              />
              <Button onClick={handleClubPresidentLogin} className="w-full bg-blue-600 hover:bg-blue-700">
                Login
              </Button>
            </div>
          </div>
        )}

        {(view === 'cr-login' && isAuthenticated) && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-6">{selectedDepartment} - CR View</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Class Announcements</h3>
                <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                  {getClassAnnouncements(selectedDepartment).map((ann) => (
                    <div key={ann.id} className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold">{ann.author}</p>
                      <p>{ann.message}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        {new Date(ann.timestamp).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
                <Input placeholder="Post announcement..." className="mb-2 bg-white/50" id="cr-announcement" />
                <Button
                  onClick={() => {
                    const input = document.getElementById('cr-announcement') as HTMLInputElement;
                    if (input.value.trim()) {
                      addClassAnnouncement({
                        id: Date.now().toString(),
                        department: selectedDepartment,
                        message: input.value,
                        timestamp: Date.now(),
                        author: 'CR/Faculty'
                      });
                      input.value = '';
                      setView('cr-login');
                      setTimeout(() => setView('cr-login'), 10);
                    }
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Post
                </Button>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Live Chat</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {getClassChatMessages(selectedDepartment).map((msg) => (
                    <div key={msg.id} className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">{msg.userName}</p>
                      <p>{msg.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'class-view' && selectedDepartment && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-6">{selectedDepartment} - Student View</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Class Announcements</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {getClassAnnouncements(selectedDepartment).map((ann) => (
                    <div key={ann.id} className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-semibold">{ann.author}</p>
                      <p>{ann.message}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        {new Date(ann.timestamp).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Live Chat</h3>
                <div className="space-y-4 mb-4 max-h-80 overflow-y-auto">
                  {getClassChatMessages(selectedDepartment).map((msg) => (
                    <div key={msg.id} className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold">{msg.userName}</p>
                      <p>{msg.message}</p>
                    </div>
                  ))}
                </div>
                <Input placeholder="Type message..." className="mb-2 bg-white/50" id="student-chat" />
                <Button
                  onClick={() => {
                    const user = getCurrentUser();
                    const input = document.getElementById('student-chat') as HTMLInputElement;
                    if (user && input.value.trim()) {
                      addClassChatMessage(selectedDepartment, {
                        id: Date.now().toString(),
                        userId: user.email,
                        userName: user.name,
                        message: input.value,
                        timestamp: Date.now()
                      });
                      input.value = '';
                      setView('class-view');
                      setTimeout(() => setView('class-view'), 10);
                    } else {
                      toast.error('Please login to send messages');
                    }
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        )}

        {(view === 'president-login' && isAuthenticated) && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-6">{selectedClub} - President View</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Club Announcements</h3>
              <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                {getClubAnnouncements(selectedClub).map((ann) => (
                  <div key={ann.id} className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold">{ann.author}</p>
                    <p>{ann.message}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(ann.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
              <Input placeholder="Post announcement..." className="mb-2 bg-white/50" id="club-announcement" />
              <Button
                onClick={() => {
                  const input = document.getElementById('club-announcement') as HTMLInputElement;
                  if (input.value.trim()) {
                    addClubAnnouncement(selectedClub, {
                      id: Date.now().toString(),
                      department: selectedClub,
                      message: input.value,
                      timestamp: Date.now(),
                      author: 'Club President'
                    });
                    input.value = '';
                    setView('president-login');
                    setTimeout(() => setView('president-login'), 10);
                  }
                }}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Post
              </Button>
            </div>
          </div>
        )}

        {view === 'club-view' && selectedClub && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-6">{selectedClub} - Student View</h2>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Club Announcements</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {getClubAnnouncements(selectedClub).map((ann) => (
                  <div key={ann.id} className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold">{ann.author}</p>
                    <p>{ann.message}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(ann.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {view === 'coming-soon' && <ComingSoon onClose={() => setView('main')} />}
      </div>
    </div>
  );
}