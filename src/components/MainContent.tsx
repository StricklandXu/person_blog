import React, { useState, useEffect } from 'react';
import styles from './MainContent.module.css';

// 类型定义（保持不变）
interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  contentSections: {
    title: string;
    text: string;
    code?: string;
  }[];
  tags: string[];
}

const MainContent: React.FC = () => {
  // ✅ 1. 状态管理（替代原来的 const articles）
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // ✅ 2. 生命周期（组件挂载时获取数据）
  useEffect(() => {
    console.log("组件已挂载，开始获取文章数据...");

    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));

      const mockArticles: Article[] = [
        {
          id: 1,
          title: "理解 JavaScript 闭包",
          date: "2030-08-10",
          author: "张三",
          contentSections: [
            {
              title: "什么是闭包？",
              text: "闭包是指有权访问另一个函数作用域中的变量的函数。"
            },
            {
              title: "实际应用场景",
              text: "闭包常用于模块化、数据私有化、函数柯里化等场景。",
              code: `function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}`
            }
          ],
          tags: ["JavaScript", "前端"]
        },
        {
          id: 2,
          title: "CSS Grid 入门",
          date: "2030-08-15",
          author: "张三",
          contentSections: [
            {
              title: "什么是Grid布局？",
              text: "Grid 是二维布局系统，可同时处理行和列。"
            }
          ],
          tags: ["CSS", "布局"]
        }
      ];

      setArticles(mockArticles);
      setIsLoading(false);

      console.log("文章数据获取完成！");
    };

    fetchData();
  }, []);

  // ✅ 3. loading 状态控制（关键点）
  if (isLoading) {
    return (
      <main className={styles.main}>
        <p>加载文章中...</p>
      </main>
    );
  }

  // ✅ 4. 正常渲染（你原来的 JSX）
  return (
    <main className={styles.main}>
      {articles.map((article) => (
        <article key={article.id} className={styles.article}>
          <header className={styles.articleHeader}>
            <h2>{article.title}</h2>
            <p>
              发布于 <time dateTime={article.date}>{article.date}</time> by {article.author}
            </p>
          </header>

          {article.contentSections.map((section, index) => (
            <section key={index} className={styles.section}>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
              {section.code && (
                <pre className={styles.codeBlock}>
                  {section.code}
                </pre>
              )}
            </section>
          ))}

          <footer className={styles.articleFooter}>
            <p>
              标签:{' '}
              {article.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>
                  <a href="#">{tag}</a>
                  {tagIndex < article.tags.length - 1 && ', '}
                </span>
              ))}
            </p>
          </footer>
        </article>
      ))}

      <div className={styles.highlightCta}>
        <p>
          <mark className={styles.mark}>🔥 热门教程：</mark>
          想要掌握更多前端技巧？
          <a href="#">点击这里订阅我的 newsletter</a>，每周推送干货！
        </p>
      </div>
    </main>
  );
};

export default MainContent;
