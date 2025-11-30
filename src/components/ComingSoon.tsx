import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ComingSoonProps {
  onClose: () => void;
}

export default function ComingSoon({ onClose }: ComingSoonProps) {
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
        
        <div className="text-center space-y-4 mt-4">
          <div className="text-6xl">🚀</div>
          <h2 className="text-3xl font-bold text-[#0f0f0f]">Coming Soon</h2>
          <p className="text-[#0f0f0f]/70 text-lg">
            We are working hard to bring this amazing feature to UniZone.
          </p>
        </div>
      </div>
    </div>
  );
}