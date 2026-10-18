import React, { useState, useEffect, useCallback } from 'react';

const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789!@#$%^&*<>[]{}';

interface ShufflingTextProps {
  target: string;
  className?: string;
  delay?: number;
}

const ShufflingText: React.FC<ShufflingTextProps> = ({ target, className = '', delay = 0 }) => {
  const [displayText, setDisplayText] = useState(target);

  const startShuffle = useCallback(() => {
    let iteration = 0;
    const maxIterations = target.length * 2.5;

    const interval = setInterval(() => {
      setDisplayText(() => {
        return target
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '\n') return char;
            if (index < iteration / 2.5) {
              return target[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('');
      });

      iteration += 1;
      if (iteration > maxIterations) {
        clearInterval(interval);
        setDisplayText(target);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [target]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      startShuffle();
    }, delay);
    return () => clearTimeout(timeout);
  }, [startShuffle, delay]);

  return (
    <span
      onClick={startShuffle}
      title="Click to re-shuffle"
      className={`cursor-pointer transition-colors duration-150 ${className}`}
    >
      {displayText}
    </span>
  );
};

export const AboutApp: React.FC = () => {
  return (
    <div className="relative min-h-[460px] pb-6 px-1 select-text">
      {/* Subtle Matrix Slanted Dash Pattern in Background */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.07] overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(163, 230, 53, 0.5) 1px, transparent 1px), repeating-linear-gradient(45deg, rgba(74, 222, 128, 0.3) 0, rgba(74, 222, 128, 0.3) 1px, transparent 0, transparent 14px)`,
          backgroundSize: '16px 16px',
        }}
      />

      <div className="relative z-10 space-y-4">
        {/* Large Name with Letter Shuffling Animation */}
        <div className="pt-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-white leading-[1.15]">
            <div>
              <ShufflingText target="Atharva" delay={80} />
            </div>
            <div>
              <ShufflingText target="Warankar." delay={240} />
            </div>
          </h1>

          {/* Subtitle tag matching screenshot: full-stack • flutter • pune */}
          <p className="mt-2 text-xs font-mono text-zinc-400 tracking-wider flex items-center gap-2">
            <span>backend & full-stack</span>
            <span className="text-zinc-600">•</span>
            <span>flutter</span>
            <span className="text-zinc-600">•</span>
            <span>pune</span>
          </p>
        </div>

        {/* Clean Divider */}
        <div className="h-[1px] bg-zinc-800/80 my-3" />

        {/* Professional Body Copy (Clean, no emojis) */}
        <div className="space-y-4 text-xs text-zinc-300 leading-relaxed font-normal">
          <p>
            I'm a Computer Engineering & Applications scholar, currently pursuing my Post-Graduation (MCA) at{' '}
            <strong className="text-white font-semibold">Sinhgad College of Computer Application</strong>, Pune, having completed graduation from{' '}
            <strong className="text-white font-semibold">MIT ACSC Pune</strong>.
          </p>

          <p>
            I got into this because I liked making things that actually run, and I'd rather understand the whole thing than one slice of it. So I work at both ends:{' '}
            <strong className="text-white font-semibold">Python, Django, and distributed systems</strong> behind the scenes,{' '}
            <strong className="text-white font-semibold">React or Flutter</strong> in front.
          </p>

          <p className="text-zinc-400">
            Away from the screen I'm usually drawing, behind a camera, or gaming.
          </p>
        </div>

        {/* Highlights / Quick Specs in clean minimal style */}
        <div className="pt-3 border-t border-zinc-800/60 grid grid-cols-2 gap-2 text-left">
          <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">EXPERIENCE</span>
            <span className="text-xs font-semibold text-zinc-200 mt-0.5 block">Production Engineering</span>
          </div>
          <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">CORE STACK</span>
            <span className="text-xs font-semibold text-zinc-200 mt-0.5 block">Python • Django • Flutter</span>
          </div>
        </div>
      </div>
    </div>
  );
};
