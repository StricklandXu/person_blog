// src/components/SoundButton.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { playClickSound } from '../utils/playClickSound';

const SoundButton: React.FC = () => {
  const { soundEnabled, toggleSound } = useTheme();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playClickSound(soundEnabled); 
    toggleSound();
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        background: 'transparent',
        border: 'none',
        fontSize: '1.2rem',
        cursor: 'pointer',
        color: 'var(--text-primary)',
        transition: 'transform 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {soundEnabled ? '🔊' : '🔇'}
    </button>
  );
};

export default SoundButton;