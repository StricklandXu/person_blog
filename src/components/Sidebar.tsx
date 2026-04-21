import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';
import reactSvg from '../assets/nxd.gif';
import pzPng from '../assets/pm.gif';
import baiduPng from '../assets/baidu.png';

// 定义 Props 类型，包含一个可选的函数
interface SidebarProps {
  onSubscribe?: (email: string) => void; // 接收一个函数，参数为邮箱，无返回值
}

const Sidebar: React.FC<SidebarProps> = ({onSubscribe}) => {
  // 1. 定义时间状态
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 2. 启动定时器
    console.log("侧边栏组件已挂载，启动计时器...");
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // 3. 清除定时器（非常关键）
    return () => {
      console.log("侧边栏组件即将卸载，清除计时器...");
      clearInterval(timerId);
    };
  }, []);

 // 处理表单提交
 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); // 阻止表单的默认提交行为，防止页面刷新
  // 使用 FormData 或者通过 ref 获取输入框的值
  const formData = new FormData(event.currentTarget);
  const email = formData.get('email') as string;

  if (email && onSubscribe) {
    onSubscribe(email); // 调用父组件传下来的函数，将数据传出去
    event.currentTarget.reset(); // 清空表单
  } else if (!email) {
    alert('请输入邮箱地址');
  }
};

  return (
    <aside className={styles.sidebar}>
      {/* 当前时间（新增功能） */}
      <section className={styles.widget}>
        <h3>当前时间</h3>
        <p>{currentTime.toLocaleTimeString()}</p>
      </section>

      {/* 作者简介 */}
      <section className={styles.widget}>
        <h3>关于作者</h3>
        <div className={styles.authorInfo}>
          <img
            src={reactSvg}
            alt="徐樱桃"
            className={styles.avatar}
          />
          <p>没帽子，热爱分享技术。原神启动一枚。</p>
        </div>
      </section>

      {/* 社交链接 */}
      <section className={styles.widget}>
        <h3>关注我</h3>
        <ul className={styles.socialLinks}>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </section>

{/* 订阅 CTA - 修改表单，添加 onSubmit 事件 */}
<section className={`${styles.widget} ${styles.ctaWidget}`}>
        <h3>订阅更新</h3>
        <p>获取最新的文章和技术干货，每周发送一次，随时退订。</p>
        <form className={styles.subscribeForm} onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="你的邮箱" required />
          <button type="submit">订阅</button>
        </form>
      </section>

      {/* 合作伙伴 */}
      <section className={styles.widget}>
        <h3>合作伙伴</h3>
        <div className={styles.partners}>
          <img src={pzPng} alt="Partner 1" />
          <img src={baiduPng} alt="Partner 2" />
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
