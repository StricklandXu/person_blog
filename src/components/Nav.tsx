import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';
import { useTheme } from '../context/ThemeContext';
import { playClickSound } from '../utils/playClickSound';

const Nav: React.FC = () => {
  const { soundEnabled } = useTheme();

  const handleLinkClick = () => {
    playClickSound(soundEnabled);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? styles.active : undefined}
            onClick={handleLinkClick} // ✅ 添加点击事件
          >
            首页
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/articles" 
            className={({ isActive }) => isActive ? styles.active : undefined}
            onClick={handleLinkClick}
          >
            文章
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? styles.active : undefined}
            onClick={handleLinkClick}
          >
            关于我
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;