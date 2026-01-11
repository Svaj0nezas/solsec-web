import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <Button
      onClick={onClick}
      size="icon"
      className="bg-transparent  text-foreground hover:bg-transparent hover:scale-95 hover:text-foregrond/80 hover:opacity-80 transition-transform"
      aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
      aria-expanded={isOpen}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {/* Top bar */}
        <motion.span
          className="absolute w-6 h-0.5 bg-current rounded-full"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 0 : -6
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
        
        {/* Bottom bar */}
        <motion.span
          className="absolute w-6 h-0.5 bg-current rounded-full"
          animate={{
            rotate: isOpen ? 135 : 0,
            y: isOpen ? 0 : 6
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
      </div>
    </Button>
  );
}