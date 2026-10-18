import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AppId, DeviceMode } from '../../types';
import { LockScreen } from './LockScreen';
import { HomeScreen } from './HomeScreen';
import { AppWindow } from './AppWindow';
import { Wifi, Battery, BatteryMedium, Signal, Lock, Unlock, Triangle, Circle, Square } from 'lucide-react';

import { AboutApp } from '../apps/AboutApp';
import { SkillsApp } from '../apps/SkillsApp';
import { ExperienceApp } from '../apps/ExperienceApp';
import { ProjectsApp } from '../apps/ProjectsApp';
import { GitHubApp } from '../apps/GitHubApp';
import { LinkedInApp } from '../apps/LinkedInApp';
import { AchievementsApp } from '../apps/AchievementsApp';
import { ResumeApp } from '../apps/ResumeApp';
import { ContactApp } from '../apps/ContactApp';
import { YouTubeApp } from '../apps/YouTubeApp';
import { XApp } from '../apps/XApp';
import { TerminalApp } from '../apps/TerminalApp';
import { EducationApp } from '../apps/EducationApp';

interface PhoneFrameProps {
  activeApp: AppId | null;
  deviceMode: DeviceMode;
  onSelectApp: (appId: AppId | null) => void;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ activeApp, deviceMode, onSelectApp }) => {
  const [isLocked, setIsLocked] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<string>('2:06');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleUnlock = () => {
    setIsLocked(false);
  };

  const handleLockToggle = () => {
    if (!isLocked) {
      setIsLocked(true);
      onSelectApp(null);
    } else {
      setIsLocked(false);
    }
  };

  const handleOpenApp = (appId: AppId) => {
    setIsLocked(false);
    onSelectApp(appId);
  };

  const handleCloseApp = () => {
    onSelectApp(null);
  };

  const renderActiveApp = () => {
    switch (activeApp) {
      case 'about':
        return <AboutApp />;
      case 'skills':
        return <SkillsApp />;
      case 'experience':
        return <ExperienceApp />;
      case 'education':
        return <EducationApp />;
      case 'projects':
        return <ProjectsApp />;
      case 'github':
        return <GitHubApp />;
      case 'linkedin':
        return <LinkedInApp />;
      case 'achievements':
        return <AchievementsApp />;
      case 'resume':
        return <ResumeApp />;
      case 'contact':
        return <ContactApp />;
      case 'youtube':
        return <YouTubeApp />;
      case 'x':
        return <XApp />;
      case 'terminal':
        return <TerminalApp />;
      case 'devstats':
        return <GitHubApp />;
      case 'leetcode':
        return <SkillsApp />;
      case 'cloud':
        return <SkillsApp />;
      case 'playstore':
        return <ProjectsApp />;
      default:
        return null;
    }
  };

  // Chassis sizing based on mode
  const getDimensions = () => {
    if (deviceMode === 'ipad') {
      return 'w-[480px] sm:w-[520px] h-[690px] rounded-[36px]';
    }
    return 'w-[340px] xs:w-[360px] sm:w-[370px] h-[720px] rounded-[50px]';
  };

  const getScreenRadius = () => {
    if (deviceMode === 'ipad') return 'rounded-[28px]';
    return 'rounded-[44px]';
  };

  const isWhiteScreen = activeApp !== null && activeApp !== 'about';

  return (
    <div className="relative flex flex-col items-center select-none group transition-all duration-500">
      {/* Outer ambient glow */}
      <div
        className="absolute -inset-4 rounded-[60px] blur-2xl opacity-40 pointer-events-none transition-all duration-700"
        style={{
          background: 'radial-gradient(circle, var(--theme-glow) 0%, transparent 70%)',
        }}
      />

      {/* Physical Device Frame Chassis */}
      <div
        className={`relative ${getDimensions()} p-2.5 bg-gradient-to-b from-[#2a2d3d] via-[#161826] to-[#0e101c] border-[3px] border-[#444860]/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(56,189,248,0.2)] flex flex-col items-center transition-all duration-500`}
      >
        {/* Physical Side Buttons for Phone Modes */}
        {deviceMode !== 'ipad' && (
          <>
            <div className="absolute -left-[5px] top-24 w-[3px] h-8 bg-slate-500 rounded-l-sm" />
            <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-slate-500 rounded-l-sm" />
            <div className="absolute -left-[5px] top-52 w-[3px] h-12 bg-slate-500 rounded-l-sm" />
            <button
              onClick={handleLockToggle}
              title={isLocked ? 'Unlock device' : 'Lock device'}
              className="absolute -right-[5px] top-32 w-[3px] h-14 bg-slate-400 hover:bg-sky-400 transition-colors rounded-r-sm cursor-pointer"
              aria-label={isLocked ? 'Unlock device' : 'Lock device'}
            />
          </>
        )}

        {/* Screen Display Bezel */}
        <div
          className={`relative w-full h-full ${getScreenRadius()} bg-[#080a14] overflow-hidden flex flex-col border border-white/10 shadow-inner`}
        >
          {/* Top Camera / Notch Treatment */}
          {deviceMode === 'ios' && (
            /* iPhone Notch matching reference screenshot */
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
              <div className="w-36 h-6 bg-black rounded-b-2xl border-b border-x border-white/10 flex items-center justify-center gap-3 shadow-md">
                {/* Speaker slit */}
                <div className="w-10 h-1 bg-zinc-800 rounded-full" />
                {/* Front Camera Lens */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#0a1128] border border-blue-900/80 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-400/90" />
                </div>
              </div>
            </div>
          )}

          {deviceMode === 'android' && (
            /* Android Punch Hole Camera */
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-50">
              <div className="w-3.5 h-3.5 rounded-full bg-black border border-white/15 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-400/90" />
              </div>
            </div>
          )}

          {deviceMode === 'ipad' && (
            /* iPad Centered Micro Camera Dot */
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50">
              <div className="w-2 h-2 rounded-full bg-black border border-white/20" />
            </div>
          )}

          {/* Device Status Bar */}
          <div
            className={`absolute top-0 left-0 right-0 h-8 px-6 flex items-center justify-between text-[11px] font-medium z-40 select-none pointer-events-none transition-colors duration-200 ${
              isWhiteScreen ? 'text-slate-800' : 'text-white/90'
            }`}
          >
            <span className="font-semibold tracking-tight">{currentTime}</span>

            <div
              className={`flex items-center gap-2 transition-colors duration-200 ${
                isWhiteScreen ? 'text-slate-800' : 'text-white/80'
              }`}
            >
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              {deviceMode === 'android' ? (
                <div className="flex items-center gap-1 font-mono text-[10px]">
                  <span>88%</span>
                  <BatteryMedium
                    className={`w-3.5 h-3.5 ${
                      isWhiteScreen ? 'text-slate-800' : 'text-emerald-400'
                    }`}
                  />
                </div>
              ) : (
                <Battery
                  className={`w-4 h-4 ${isWhiteScreen ? 'text-slate-800' : 'text-white'}`}
                />
              )}
            </div>
          </div>

          {/* Screen Content Container with transitions */}
          <div className="relative w-full h-full flex flex-col">
            <AnimatePresence mode="wait">
              {isLocked ? (
                <motion.div
                  key="lock-screen"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="w-full h-full"
                >
                  <LockScreen
                    onUnlock={handleUnlock}
                    onOpenNotification={handleOpenApp}
                  />
                </motion.div>
              ) : activeApp ? (
                <motion.div
                  key={`app-${activeApp}`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className="w-full h-full relative"
                >
                  <AppWindow
                    appId={activeApp}
                    onBack={handleCloseApp}
                    onClose={handleCloseApp}
                  >
                    {renderActiveApp()}
                  </AppWindow>
                </motion.div>
              ) : (
                <motion.div
                  key="home-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="w-full h-full"
                >
                  <HomeScreen onOpenApp={handleOpenApp} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Navigation Control: iOS Home Bar or Android 3-Button Nav */}
          {deviceMode === 'android' ? (
            <div className="absolute bottom-1 left-0 right-0 h-7 flex items-center justify-around z-50 pointer-events-auto bg-black/40 backdrop-blur-xs">
              <button
                onClick={handleCloseApp}
                className="p-1 text-slate-400 hover:text-white"
                title="Back"
                aria-label="Back"
              >
                <Triangle className="w-3 h-3 -rotate-90 fill-current" />
              </button>
              <button
                onClick={handleCloseApp}
                className="p-1 text-slate-400 hover:text-white"
                title="Home"
                aria-label="Home"
              >
                <Circle className="w-3.5 h-3.5 fill-current" />
              </button>
              <button
                onClick={handleCloseApp}
                className="p-1 text-slate-400 hover:text-white"
                title="Recents"
                aria-label="Recents"
              >
                <Square className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <div className="absolute bottom-1.5 left-0 right-0 flex justify-center z-50 pointer-events-auto">
              <button
                onClick={handleCloseApp}
                className="group py-2 px-6 flex items-center justify-center cursor-pointer focus:outline-none"
                title="Return to Home Screen"
                aria-label="Home button"
              >
                <div
                  className={`w-32 h-1 rounded-full transition-colors active:scale-95 shadow-sm ${
                    isWhiteScreen
                      ? 'bg-slate-400/80 group-hover:bg-slate-700'
                      : 'bg-white/50 group-hover:bg-white'
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lock Status Helper Pill */}
      <div className="mt-2.5 flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-400 font-mono">
        <button
          onClick={handleLockToggle}
          className="flex items-center gap-1.5 hover:text-white transition-colors"
          title="Toggle device lock"
        >
          {isLocked ? (
            <>
              <Lock className="w-3 h-3 text-sky-400" />
              <span>Click phone to unlock</span>
            </>
          ) : (
            <>
              <Unlock className="w-3 h-3 text-emerald-400" />
              <span>Unlocked • Bottom bar for home</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
