// src/components/Header.tsx
import React from 'react';
import styles from './Header.module.css';
import { useTheme } from '../context/ThemeContext';
import SoundButton from './SoundButton';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.headerMinimal}> {/* 使用新类名 */}
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>{title}</h1>
        <div className={styles.controls}>
          <button onClick={toggleTheme} className={styles.iconButton}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <SoundButton />
        </div>
      </div>
    </header>
  );
};

export default Header;