// src/pages/AboutPage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';
// ⚠️ 请确保这个文件存在！如果不存在，请改为 './assets/react.svg' 或其他现有图片
import avatarImg from '../assets/nxd.gif'; 

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>关于我 | 网络安全与漏洞研究</title>
        <meta name="description" content="资深网络安全工程师，漏洞赏金猎人。专注于Web安全、逆向工程与系统防御。" />
      </Helmet>
      
      {/* 使用 styles.page 如果存在，否则用内联样式兜底 */}
      <div className={styles.page || ''} style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', color: 'var(--text-primary)' }}>
        
        {/* 标题 */}
        <h1 className={`${styles.pageTitle || ''} ${styles.glitch || ''}`} data-text="Identity Verified" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '30px', fontFamily: 'var(--font-heading, sans-serif)' }}>
          Identity Verified
        </h1>

        {/* 居中头像区域 */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
          <img 
            src={avatarImg} 
            alt="Hacker Avatar" 
            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150/000000/00f3ff?text=Avatar'; }} // 图片加载失败时的兜底
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              border: '3px solid var(--neon-cyan, #00f3ff)',
              boxShadow: '0 0 20px var(--neon-cyan, #00f3ff), inset 0 0 20px rgba(0, 243, 255, 0.2)',
              objectFit: 'cover',
              filter: 'grayscale(20%) contrast(120%)'
            }}
          />
        </div>

        {/* 个人介绍内容 */}
        <div className={styles.aboutContent || ''} style={{ textAlign: 'left', lineHeight: '1.8', fontSize: '1.1rem' }}>
          
          <section style={{ marginBottom: '30px' }}>
            <h3 style={{ color: 'var(--neon-pink, #ff007f)', fontFamily: 'var(--font-heading, monospace)', marginBottom: '10px', fontSize: '1.4rem' }}>
              &gt; whoami
            </h3>
            <p>
              👋 你好，我是<span style={{ color: 'var(--neon-cyan, #00f3ff)', fontWeight: 'bold' }}>张三</span>。
            </p>
            <p>
              一名游走在代码边缘的<strong>没帽子</strong>与<strong>BUG BUTURY HUNTER</strong>。
              拥有 2.5 年十八线安全攻防经验，曾服务于航天机密、零号大坝、巴克什-皇家博物馆等核心安全团队。
              我的日常工作不是写 Bug，而是寻找那些隐藏在逻辑深处的幽灵——从 SQL 注入到 RCE，从前端 XSS 到后端权限绕过。
            </p>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h3 style={{ color: 'var(--neon-pink, #ff007f)', fontFamily: 'var(--font-heading, monospace)', marginBottom: '10px', fontSize: '1.4rem' }}>
              &gt; skills & expertise
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Web Penetration Testing', 'Reverse Engineering', 'Binary Exploitation', 'Secure Code Review', 'Threat Modeling', 'Bug Bounty Hunter'].map((skill, index) => (
                <li key={index} style={{
                  background: 'rgba(255, 0, 127, 0.1)',
                  border: '1px solid var(--neon-pink, #ff007f)',
                  color: 'var(--neon-pink, #ff007f)',
                  padding: '5px 12px',
                  borderRadius: '4px',
                  fontFamily: 'monospace',
                  fontSize: '0.9rem'
                }}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section style={{ marginBottom: '30px' }}>
            <h3 style={{ color: 'var(--neon-pink, #ff007f)', fontFamily: 'var(--font-heading, monospace)', marginBottom: '10px', fontSize: '1.4rem' }}>
              &gt; mission_statement
            </h3>
            <p>
              "安全不是一个产品，而是一个过程。"
              这个博客是我记录攻防实战、分享最新 CVE 漏洞分析以及探讨防御架构的地方。
              我相信，只有深入了解攻击者的思维，才能构建出真正坚不可摧的系统。
            </p>
          </section>

          <section style={{ borderTop: '1px dashed var(--border-color, #333)', paddingTop: '20px', fontFamily: 'monospace', color: 'var(--text-secondary, #aaa)' }}>
            <p>
              📧 Secure Contact: <a href="mailto:zhang.san@example.com" style={{ color: 'var(--neon-cyan, #00f3ff)' }}>zhang.san@example.com</a>
            </p>
            <p>
              🏆 HackerOne / Bugcrowd Profile: <span style={{ color: 'var(--neon-purple, #bc13fe)' }}>Top 1% Reporter</span>
            </p>
          </section>

        </div>
      </div>
    </>
  );
};

export default AboutPage;