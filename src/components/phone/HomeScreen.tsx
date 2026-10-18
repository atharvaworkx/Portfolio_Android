import React from 'react';
import { APPS_LIST } from '../../config/apps';
import type { AppId } from '../../types';
import { AppIcon } from './AppIcon';

interface HomeScreenProps {
  onOpenApp: (appId: AppId) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onOpenApp }) => {
  return (
    <div className="w-full h-full flex flex-col justify-start pt-12 pb-6 px-4 select-none overflow-y-auto no-scrollbar">
      {/* 4-column App Icons Grid matching screenshot */}
      <div className="grid grid-cols-4 gap-y-5 gap-x-2 w-full pt-2">
        {APPS_LIST.map((app) => (
          <AppIcon key={app.id} app={app} onOpen={onOpenApp} />
        ))}
      </div>
    </div>
  );
};
