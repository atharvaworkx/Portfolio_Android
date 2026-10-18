import { useState, useEffect } from 'react';
import { BackgroundEnvironment } from './components/background/BackgroundEnvironment';
import { PhoneFrame } from './components/phone/PhoneFrame';
import { DeveloperPanel } from './components/panels/DeveloperPanel';
import { ConnectPanel } from './components/panels/ConnectPanel';
import { ThemePanel } from './components/panels/ThemePanel';
import { QuotePanel } from './components/panels/QuotePanel';
import { AndroidIcon, AppleIcon, TabletIcon } from './components/common/DeviceIcons';
import type { AppId, ThemeId, DeviceMode } from './types';

export function App() {
  const [activeApp, setActiveApp] = useState<AppId | null>(null);
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('ios');
  const [currentTheme, setCurrentTheme] = useState<ThemeId>(() => {
    try {
      const saved = localStorage.getItem('portfolio_theme');
      if (
        saved &&
        [
          'deep-blue',
          'amber-orange',
          'teal-cyan',
          'blue-purple',
          'magenta-purple',
          'coral-sunset',
        ].includes(saved)
      ) {
        return saved as ThemeId;
      }
    } catch {
      // LocalStorage access fallback
    }
    return 'deep-blue';
  });

  // Apply theme attribute to root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    try {
      localStorage.setItem('portfolio_theme', currentTheme);
    } catch {
      // Ignore storage errors
    }
  }, [currentTheme]);

  const handleSelectApp = (appId: AppId | null) => {
    setActiveApp(appId);
  };

  const handleThemeChange = (themeId: ThemeId) => {
    setCurrentTheme(themeId);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden text-slate-100 select-none">
      {/* Themed Background with Sky & Skyline */}
      <BackgroundEnvironment themeId={currentTheme} />

      {/* Main 3D Composition Stage matching screenshot distances */}
      <main className="w-full mx-auto px-4 py-4 md:py-6 flex-1 flex flex-col justify-center items-center z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 xl:gap-8 w-full max-w-[1120px]">
          {/* Left Column: Developer Info & Connect (Tilted in 3D) */}
          <div className="order-2 lg:order-1 flex flex-col gap-4 w-full max-w-[290px] lg:w-[290px] shrink-0">
            <DeveloperPanel />
            <ConnectPanel />
          </div>

          {/* Center Column: Dominant Hero Smartphone / Device Centerpiece */}
          <div className="order-1 lg:order-2 shrink-0 flex justify-center items-center py-1 z-20">
            <PhoneFrame
              activeApp={activeApp}
              deviceMode={deviceMode}
              onSelectApp={handleSelectApp}
            />
          </div>

          {/* Right Column: Color Laboratory & Quote (Tilted in 3D) */}
          <div className="order-3 lg:order-3 flex flex-col gap-4 w-full max-w-[290px] lg:w-[290px] shrink-0">
            <ThemePanel
              currentTheme={currentTheme}
              onSelectTheme={handleThemeChange}
            />
            <QuotePanel />
          </div>
        </div>
      </main>

      {/* Bottom Floating Device Switcher Bar (Android, Apple, iPad) */}
      <footer className="w-full flex justify-center items-center pb-6 pt-2 z-30">
        <div className="flex items-center gap-6 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl">
          {/* Android Mode Button */}
          <button
            onClick={() => setDeviceMode('android')}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
              deviceMode === 'android'
                ? 'bg-white text-black ring-4 ring-white/30 scale-110 shadow-lg'
                : 'bg-black/60 text-white/80 border border-white/20 hover:text-white hover:scale-105'
            }`}
            title="Switch to Android Mode"
            aria-label="Android Mode"
          >
            <AndroidIcon className="w-5 h-5" />
          </button>

          {/* iOS / Apple Mode Button */}
          <button
            onClick={() => setDeviceMode('ios')}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
              deviceMode === 'ios'
                ? 'bg-white text-black ring-4 ring-white/30 scale-110 shadow-lg'
                : 'bg-black/60 text-white/80 border border-white/20 hover:text-white hover:scale-105'
            }`}
            title="Switch to iOS Mode"
            aria-label="iOS Mode"
          >
            <AppleIcon className="w-5 h-5" />
          </button>

          {/* iPad / Tablet Mode Button */}
          <button
            onClick={() => setDeviceMode('ipad')}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
              deviceMode === 'ipad'
                ? 'bg-white text-black ring-4 ring-white/30 scale-110 shadow-lg'
                : 'bg-black/60 text-white/80 border border-white/20 hover:text-white hover:scale-105'
            }`}
            title="Switch to iPad / Tablet Mode"
            aria-label="iPad Tablet Mode"
          >
            <TabletIcon className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
