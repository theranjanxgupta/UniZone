import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { saveUser, validateUser, setCurrentUser } from '@/lib/storage';
import { toast } from 'sonner';

interface LoginModalProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

export default function LoginModal({ onClose, onLoginSuccess }: LoginModalProps) {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: ''
  });

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields');
      return;
    }

    const user = validateUser(formData.email, formData.password);
    if (user) {
      setCurrentUser(user);
      toast.success('Login successful!');
      onLoginSuccess();
      onClose();
    } else {
      toast.error('Invalid email or password');
    }
  };

  const handleSignup = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.college) {
      toast.error('Please fill in all fields');
      return;
    }

    saveUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      college: formData.college
    });

    toast.success('Account created successfully! Please login.');
    setIsSignup(false);
    setFormData({ ...formData, name: '', college: '' });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#f7f4ef] rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 hover:bg-black/5"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>

        <h2 className="text-3xl font-bold text-[#0f0f0f] mb-6">
          {isSignup ? 'Sign Up' : 'Login'}
        </h2>

        <div className="space-y-4">
          {isSignup && (
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 bg-white/50"
              />
            </div>
          )}

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 bg-white/50"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-1 bg-white/50"
            />
          </div>

          {isSignup && (
            <div>
              <Label htmlFor="college">College</Label>
              <Select value={formData.college} onValueChange={(value) => setFormData({ ...formData, college: value })}>
                <SelectTrigger className="mt-1 bg-white/50">
                  <SelectValue placeholder="Select your college" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BIT Mesra">BIT Mesra</SelectItem>
                  <SelectItem value="BIT Deoghar">BIT Deoghar</SelectItem>
                  <SelectItem value="BIT Patna">BIT Patna</SelectItem>
                  <SelectItem value="NIT Meghalaya">NIT Meghalaya</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={isSignup ? handleSignup : handleLogin}
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </Button>

          <p className="text-center text-sm text-[#0f0f0f]/70">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              className="text-blue-600 hover:underline font-medium"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? 'Login' : 'Sign up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}