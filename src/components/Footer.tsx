// src/components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

// 定义赞助商数据类型
interface Sponsor {
  id: number;
  name: string;
  url: string;
  // 实际项目中这里应该是图片路径，例如: logo: '/sponsors/google.png'
  // 这里为了演示方便，暂时使用文字或简单的占位符逻辑
}

const sponsors: Sponsor[] = [
  { id: 1, name: "Google Project Zero", url: "https://projectzero.google.com/" },
  { id: 2, name: "Microsoft Security", url: "https://www.microsoft.com/en-us/security" },
  { id: 3, name: "CrowdStrike", url: "https://www.crowdstrike.com/" },
  { id: 4, name: "Palo Alto Networks", url: "https://www.paloaltonetworks.com/" },
  { id: 5, name: "奇安信", url: "https://www.qianxin.com/" },
  { id: 6, name: "阿里云安全", url: "https://security.aliyun.com/" },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* --- 新增：赞助商区域 --- */}
      <div className={styles.sponsorSection}>
        <h4 className={styles.sponsorTitle}>Trusted By Industry Leaders</h4>
        <div className={styles.sponsorGrid}>
          {sponsors.map((sponsor) => (
            <a 
              key={sponsor.id} 
              href={sponsor.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.sponsorItem}
              title={sponsor.name}
            >
              {/* 
                提示：如果你有真实的 Logo 图片，可以将下面的 span 替换为 img 标签 
                例如: <img src={`/logos/${sponsor.name}.png`} alt={sponsor.name} /> 
              */}
              <span>{sponsor.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* 原有的版权信息 */}
      <div className={styles.copyright}>
        <p>&copy; 2030 Zero-Day Labs. All systems operational.</p>
        <p>
          <a href="/pgp">PGP Key</a> | <a href="/responsibility">Responsible Disclosure</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;