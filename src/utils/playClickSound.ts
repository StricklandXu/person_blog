// 简单的合成器音效
export const playClickSound = (enabled: boolean) => {
    if (!enabled) return;
  
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
  
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
  
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
  
      // 设置音色：方形波更有电子感
      osc.type = 'square';
      
      // 频率：从低到高快速扫描，模拟机械按键
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);
  
      // 音量包络：快速衰减
      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
  
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.error("Audio play failed", e);
    }
  };