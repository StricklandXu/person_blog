// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';
import { getArticles } from '../data/articles';
import TypewriterText from '../components/TypewriterText';

const HomePage: React.FC = () => {
  const articles = getArticles().slice(0, 5); 

  return (
    <>
      <Helmet>
        <title>首页 | My Tech Blog</title>
        <meta name="description" content="分享前端开发技巧、React实战经验。" />
      </Helmet>
      
      {/* Medium 风格头部 */}
      <div className={styles.heroSection}>
        <h1 className={`${styles.pageTitle} ${styles.glitch}`} data-text="LATEST STORIES">
          LATEST STORIES
        </h1>
        <p className={styles.subtitle}>
        <TypewriterText text="System Secure. Monitoring Threats... Welcome to the Grid." delay={50} />
        </p>
      </div>

      <div className={styles.feed}>
        {/* ✅ 1. 这里只渲染文章列表 */}
        {articles.map(article => (
          <article key={article.id} className={styles.mediumCard}>
            <Link to={`/articles/${article.id}`} className={styles.cardLink}>
              <h2>{article.title}</h2>
              <div className={styles.meta}>
                <span>{article.author}</span>
                <span className={styles.dot}>•</span>
                <span>{article.date}</span>
                <span className={styles.dot}>•</span>
                <span>{Math.ceil(article.contentSections.reduce((acc, curr) => acc + curr.text.length, 0) / 500)} min read</span>
              </div>
              <p className={styles.excerpt}>
                {article.summary || article.contentSections[0]?.text.substring(0, 150)}...
              </p>
              
              {/* 标签展示 */}
              <div className={styles.tags}>
                {article.tags.map(tag => (
                  <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
              </div>
            </Link>
          </article>
        ))}

        {/* ✅ 2. 将订阅框移到 map 循环外面，这样它只会渲染一次，且不在 Link 标签内 */}
        <div className={styles.newsletterCta}>
          <h3>Stay Updated</h3>
          <p>Get the latest cyber-insights directly to your inbox.</p>
          <form className={styles.simpleForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomePage;