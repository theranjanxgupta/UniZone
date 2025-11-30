import { useState, useEffect, useRef } from 'react';
import { Send, Image as ImageIcon, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getChatMessages, addChatMessage, getCurrentUser, ChatMessage } from '@/lib/storage';
import { toast } from 'sonner';

interface ChatRoomProps {
  onBack: () => void;
}

export default function ChatRoom({ onBack }: ChatRoomProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const currentUser = getCurrentUser();

  useEffect(() => {
    loadMessages();
    const interval = setInterval(loadMessages, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadMessages = () => {
    setMessages(getChatMessages());
  };

  const handleSendMessage = () => {
    if (!currentUser) {
      toast.error('Please login to send messages');
      return;
    }

    if (!newMessage.trim()) return;

    const message: ChatMessage = {
      id: Date.now().toString(),
      userId: currentUser.email,
      userName: currentUser.name,
      message: newMessage,
      timestamp: Date.now()
    };

    addChatMessage(message);
    setNewMessage('');
    loadMessages();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !currentUser) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const message: ChatMessage = {
        id: Date.now().toString(),
        userId: currentUser.email,
        userName: currentUser.name,
        message: 'Shared an image',
        imageUrl: event.target?.result as string,
        timestamp: Date.now()
      };

      addChatMessage(message);
      loadMessages();
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed inset-0 bg-[#f7f4ef] z-50 flex flex-col">
      <div className="bg-white/80 backdrop-blur-sm border-b border-black/10 p-4 flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-2xl font-bold text-[#0f0f0f]">Doubt Solving Chatroom</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.userId === currentUser?.email ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-2xl p-4 shadow-lg ${
                msg.userId === currentUser?.email
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/80 text-[#0f0f0f]'
              }`}
            >
              <p className="font-semibold text-sm mb-1">{msg.userName}</p>
              <p>{msg.message}</p>
              {msg.imageUrl && (
                <img src={msg.imageUrl} alt="Shared" className="mt-2 rounded-lg max-w-full" />
              )}
              <p className="text-xs opacity-70 mt-1">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white/80 backdrop-blur-sm border-t border-black/10 p-4">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 bg-white/50"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => document.getElementById('image-upload')?.click()}
          >
            <ImageIcon className="h-5 w-5" />
          </Button>
          <Button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}