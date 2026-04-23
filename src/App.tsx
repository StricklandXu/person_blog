// src/App.tsx
import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Nav from './components/Nav';
// import Sidebar from './components/Sidebar'; // ✅ 移除全局 Sidebar
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import CyberBackground from './components/CyberBackground';

const App: React.FC = () => {
  const [blogTitle] = useState<string>("MY TECH BLOG"); // ✅ 改个更酷的名字

  const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { theme } = useTheme();
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
    return <>{children}</>;
  };

  return (
    <ThemeProvider>
      <ThemeWrapper>
        <CyberBackground /> 
        <div className={styles.pageLayout}>
          {/* Medium 风格：Header 和 Nav 可以更简洁，或者合并 */}
          <Header title={blogTitle} />
          <Nav />

          {/* 主要内容区域：居中窄栏 */}
          <main className={styles.mainArea}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:id" element={<ArticleDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ThemeWrapper>
    </ThemeProvider> 
  );
};

export default App;