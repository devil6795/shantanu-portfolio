'use client';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const updatePos = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };
    const handleDown = () => setClicked(true);
    const handleUp = () => setClicked(false);
    const handleLeave = () => setHidden(true);
    
    window.addEventListener('mousemove', updatePos);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    document.addEventListener('mouseleave', handleLeave);
    
    return () => {
      window.removeEventListener('mousemove', updatePos);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mouseleave', handleLeave);
    };
  }, [hidden]);

  if (hidden) return null;

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen transition-transform duration-75 ease-out hidden md:block"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      <div className={`relative flex items-center justify-center transition-all duration-150 ${clicked ? 'scale-75' : 'scale-100'}`}>
        {/* Core Dot */}
        <div className="w-1.5 h-1.5 bg-orange-500 rounded-sm shadow-[0_0_10px_#FF8000]"></div>
        {/* Radar Ring */}
        <div className="absolute w-8 h-8 border border-orange-500/50 rounded-sm rotate-45 transition-transform duration-500"></div>
        {/* Crosshairs */}
        <div className="absolute w-12 h-[1px] bg-orange-500/40"></div>
        <div className="absolute h-12 w-[1px] bg-orange-500/40"></div>
      </div>
    </div>
  );
}
