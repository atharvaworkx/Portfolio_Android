import React from 'react';

interface BackgroundEnvironmentProps {
  themeId: string;
}

export const BackgroundEnvironment: React.FC<BackgroundEnvironmentProps> = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden select-none -z-10 transition-all duration-1000"
      style={{
        background: `linear-gradient(110deg, var(--bg-gradient-top) 0%, var(--bg-gradient-mid) 45%, var(--bg-gradient-bot) 85%)`,
      }}
      aria-hidden="true"
    >
      {/* Radiant atmospheric top-left glow */}
      <div
        className="absolute -top-20 -left-20 w-[900px] h-[600px] rounded-full blur-[140px] opacity-40 transition-all duration-1000"
        style={{
          background: 'radial-gradient(circle, var(--theme-glow) 0%, transparent 70%)',
        }}
      />

      {/* Atmospheric Horizon Light */}
      <div
        className="absolute bottom-20 left-0 right-0 h-44 blur-[80px] opacity-35 transition-all duration-1000"
        style={{
          background: 'linear-gradient(180deg, transparent, var(--sky-horizon) 60%, transparent)',
        }}
      />

      {/* Soft stylized cloud puffs across the top */}
      <div className="absolute top-8 left-12 w-64 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
      <div className="absolute top-16 right-20 w-80 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />

      {/* Distant Stars Array */}
      <svg className="absolute inset-0 w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10%" cy="20%" r="1.5" fill="#fff" opacity="0.8" />
        <circle cx="24%" cy="12%" r="1" fill="#fff" opacity="0.6" />
        <circle cx="36%" cy="28%" r="1.5" fill="#fff" opacity="0.7" />
        <circle cx="70%" cy="16%" r="1.2" fill="#fff" opacity="0.8" />
        <circle cx="85%" cy="22%" r="1.5" fill="#fff" opacity="0.6" />
        <circle cx="92%" cy="14%" r="1" fill="#fff" opacity="0.5" />
      </svg>

      {/* Bottom City Skyline & Suspension Bridge Silhouette matching screenshot */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none flex items-end">
        <svg
          className="w-full h-full text-slate-950/90"
          preserveAspectRatio="none"
          viewBox="0 0 1400 240"
          fill="currentColor"
        >
          {/* Suspension Bridge on Left exactly like screenshot */}
          <g fill="#0b1020">
            {/* Bridge towers */}
            <rect x="80" y="80" width="8" height="160" />
            <polygon points="84,80 84,45 86,45 86,80" />
            <rect x="220" y="60" width="10" height="180" />
            <polygon points="225,60 225,35 227,35 227,60" />

            {/* Main suspension cables */}
            <path d="M 0 120 Q 84 150 84 80" stroke="#0b1020" strokeWidth="3" fill="none" />
            <path d="M 84 80 Q 152 140 220 60" stroke="#0b1020" strokeWidth="4" fill="none" />
            <path d="M 220 60 Q 300 135 380 90" stroke="#0b1020" strokeWidth="3" fill="none" />

            {/* Vertical cable suspenders */}
            <line x1="30" y1="125" x2="30" y2="175" stroke="#0b1020" strokeWidth="1.5" />
            <line x1="60" y1="110" x2="60" y2="175" stroke="#0b1020" strokeWidth="1.5" />
            <line x1="115" y1="105" x2="115" y2="175" stroke="#0b1020" strokeWidth="1.5" />
            <line x1="150" y1="120" x2="150" y2="175" stroke="#0b1020" strokeWidth="1.5" />
            <line x1="185" y1="105" x2="185" y2="175" stroke="#0b1020" strokeWidth="1.5" />
            <line x1="260" y1="95" x2="260" y2="175" stroke="#0b1020" strokeWidth="1.5" />
            <line x1="300" y1="115" x2="300" y2="175" stroke="#0b1020" strokeWidth="1.5" />
            <line x1="340" y1="105" x2="340" y2="175" stroke="#0b1020" strokeWidth="1.5" />

            {/* Bridge roadway deck */}
            <rect x="0" y="172" width="380" height="8" />

            {/* Clock tower / dome building in background */}
            <rect x="375" y="140" width="45" height="100" />
            <polygon points="375,140 397,110 420,140" />
            <circle cx="397" cy="148" r="6" fill="#fde047" opacity="0.6" />
          </g>

          {/* Right Skyline Skyscrapers */}
          <g fill="#090d1c">
            <rect x="1000" y="130" width="40" height="110" />
            <rect x="1050" y="100" width="48" height="140" />
            <rect x="1110" y="75" width="55" height="165" />
            <polygon points="1125,75 1137,35 1150,75" />
            <rect x="1175" y="115" width="45" height="125" />
            <rect x="1230" y="85" width="55" height="155" />
            <polygon points="1245,85 1257,45 1270,85" />
            <rect x="1295" y="120" width="50" height="120" />
            <rect x="1355" y="105" width="45" height="135" />

            {/* Glowing windows */}
            <circle cx="1125" cy="110" r="1.5" fill="#fde047" opacity="0.8" />
            <circle cx="1140" cy="110" r="1.5" fill="#fde047" opacity="0.6" />
            <circle cx="1125" cy="130" r="1.5" fill="#fde047" opacity="0.8" />
            <circle cx="1245" cy="115" r="1.5" fill="#38bdf8" opacity="0.8" />
            <circle cx="1260" cy="115" r="1.5" fill="#38bdf8" opacity="0.7" />
          </g>
        </svg>
      </div>
    </div>
  );
};
