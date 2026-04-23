// src/data/articles.ts

export interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  summary?: string;
  contentSections: { title: string; text: string; code?: string }[];
  tags: string[];
}

const articlesData: Article[] = [
  {
    id: 1,
    title: "XSS 攻击与防御速查",
    date: "2030-08-10",
    author: "张三",
    summary: "跨站脚本攻击的核心原理与 CSP 防御策略。",
    contentSections: [
      { 
        title: "0x01 核心原理", 
        text: "XSS 本质是客户端代码注入。攻击者利用输入过滤漏洞，将恶意脚本注入网页，窃取 Cookie 或会话令牌。" 
      },
      { 
        title: "0x02 常见 Payload", 
        text: "快速验证漏洞存在的经典向量：", 
        code: `<img src=x onerror=alert(1)>
<svg/onload=alert('XSS')>` 
      },
      { 
        title: "0x03 CSP 防御", 
        text: "配置 Content-Security-Policy 禁止内联脚本执行：", 
        code: `Content-Security-Policy: default-src 'self'; script-src 'nonce-random';` 
      }
    ],
    tags: ["Security", "XSS", "Web"]
  },
  {
    id: 2,
    title: "HTTP 安全头配置",
    date: "2030-08-15",
    author: "张三",
    summary: "加固服务器的关键 HTTP 响应头配置指南。",
    contentSections: [
      { 
        title: "0x01 关键头部", 
        text: "HSTS 强制 HTTPS，X-Frame-Options 防止点击劫持，CSP 限制资源加载。" 
      },
      { 
        title: "0x02 Nginx 配置", 
        text: "在 server 块中添加以下指令以加固安全：", 
        code: `add_header Strict-Transport-Security "max-age=63072000" always;
add_header X-Frame-Options "DENY";
add_header X-Content-Type-Options "nosniff";` 
      },
      { 
        title: "0x03 快速检测", 
        text: "使用 curl 检查头部是否生效：", 
        code: `curl -I https://your-site.com | grep -E '(Strict|X-Frame|CSP)'` 
      }
    ],
    tags: ["Network", "Hardening", "DevOps"]
  },
  {
    id: 3,
    title: "Linux 应急响应命令",
    date: "2030-08-20",
    author: "张三",
    summary: "服务器被入侵？这几条命令帮你快速定位异常。",
    contentSections: [
      {
        title: "0x01 排查异常进程",
        text: "查找 CPU 占用高或可疑的进程，并定位其可执行文件路径：",
        code: `ps aux --sort=-%cpu | head
ls -l /proc/<PID>/exe`
      },
      {
        title: "0x02 网络连接分析",
        text: "检查是否有未知的反向 Shell 连接或异常外连：",
        code: `netstat -antp | grep ESTABLISHED
ss -tulpn | grep LISTEN`
      }
    ],
    tags: ["Linux", "Forensics", "SysAdmin"]
  }
];

export function getArticles(): Article[] {
  return articlesData;
}

export function getArticleById(id: number): Article | undefined {
  return articlesData.find(article => article.id === id);
}