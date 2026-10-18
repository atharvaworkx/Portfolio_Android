import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../../config/portfolio';
import type { AppId, NotificationItem } from '../../types';
import { Lock, ChevronUp, Trophy, Rocket, User } from 'lucide-react';

interface LockScreenProps {
  onUnlock: () => void;
  onOpenNotification: (appId: AppId) => void;
}

export const LockScreen: React.FC<LockScreenProps> = ({ onUnlock, onOpenNotification }) => {
  const [time, setTime] = useState<string>('2:28');
  const [dateStr, setDateStr] = useState<string>('Monday, October 19');
  const { lockScreenNotifications } = portfolioConfig;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
      setDateStr(
        now.toLocaleDateString([], {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderNotifIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'trophy':
        return <Trophy className="w-3.5 h-3.5 text-white" />;
      case 'rocket':
        return <Rocket className="w-3.5 h-3.5 text-white" />;
      default:
        return <User className="w-3.5 h-3.5 text-white" />;
    }
  };

  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: -250, bottom: 0 }}
      dragElastic={0.25}
      onDragEnd={(_, info) => {
        if (info.offset.y < -60 || info.velocity.y < -200) {
          onUnlock();
        }
      }}
      className="relative w-full h-full flex flex-col justify-between p-5 select-none text-white z-10 cursor-grab active:cursor-grabbing touch-none"
    >
      {/* Top Lock Indicator, Time & Date */}
      <div className="flex flex-col items-center pt-6 pointer-events-none">
        <Lock className="w-4 h-4 text-white/90 mb-2 drop-shadow" />

        {/* Dynamic Live Clock */}
        <div className="text-5xl font-light tracking-tight text-white drop-shadow-md">
          {time || '2:28'}
        </div>

        {/* Dynamic Date */}
        <div className="text-xs font-normal text-white/80 mt-1 drop-shadow">
          {dateStr || 'Monday, October 19'}
        </div>
      </div>

      {/* Center: Notifications Stack matching screenshot */}
      <div className="my-auto w-full space-y-2.5 max-h-[310px] overflow-y-auto no-scrollbar py-1">
        {lockScreenNotifications.map((notif: NotificationItem) => (
          <div
            key={notif.id}
            onClick={() => onOpenNotification(notif.appId)}
            className="w-full text-left p-3 rounded-2xl bg-white/[0.12] hover:bg-white/[0.18] backdrop-blur-xl border border-white/15 transition-all duration-200 cursor-pointer shadow-lg"
          >
            <div className="flex items-start gap-2.5">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 shadow-sm"
                style={{ backgroundColor: notif.accentColor }}
              >
                {renderNotifIcon(notif.iconName)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[10px] font-bold tracking-wider uppercase font-mono text-white/90">
                    {notif.title}
                  </span>
                  <span className="text-[9px] text-white/50 font-mono">
                    {notif.time}
                  </span>
                </div>
                <div className="text-xs text-white leading-tight font-medium whitespace-pre-line">
                  {notif.message}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom: Swipe up to unlock with slide-up drag gesture */}
      <div className="flex flex-col items-center pb-2 pointer-events-none">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[11px] text-white/60 tracking-wider">
            Swipe up to unlock
          </span>
          <ChevronUp className="w-4 h-4 text-white/70 animate-bounce" />
        </div>

        {/* Home gesture bar */}
        <div className="w-32 h-1 bg-white/60 rounded-full mt-2" />
      </div>
    </motion.div>
  );
};
