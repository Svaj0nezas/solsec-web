"use client"

import { Monitor, Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const buttons = [
    { value: 'system', icon: Monitor, label: 'System theme' },
    { value: 'light', icon: Sun, label: 'Light theme' },
    { value: 'dark', icon: Moon, label: 'Dark theme' }
  ];

  // Get the index of the current theme
  const getActiveIndex = () => {
    const index = buttons.findIndex(btn => btn.value === theme);
    return index !== -1 ? index : 0;
  };

  return (
    <div className="relative flex max-w-32 rounded-full border bg-secondary p-0.5">
      {/* Animated slider background */}
      <motion.div
        className="absolute inset-y-0.5 z-0 rounded-full border bg-background shadow-sm"
        animate={{
          left: `calc(${getActiveIndex() * 33.33}% + 1px)`
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
        style={{
          width: 'calc(33.33% - 2px)'
        }}
      />

      {/* Theme buttons */}
      {buttons.map(({ value, icon: Icon, label }) => (
        <Button
          key={value}
          onClick={() => setTheme(value)}
          variant="ghost"
          size="icon"
          className="relative z-10 rounded-full flex-1 h-auto px-3 py-1.5"
          aria-label={label}
        >
          <Icon
            className="text-foreground"
            aria-hidden="true"
          />
        </Button>
      ))}
    </div>
  );
}