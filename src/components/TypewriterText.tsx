import React from 'react';
import TypewriterComponent from 'typewriter-effect';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 50, className }) => {
  return (
    <span className={className}>
      <TypewriterComponent
        options={{
          strings: [text],
          autoStart: true,
          loop: false,
          delay: delay,
          cursor: '|', // 终端风格光标
          cursorClassName: 'typing-cursor', // 可以自定义光标样式
        }}
      />
    </span>
  );
};

export default TypewriterText;