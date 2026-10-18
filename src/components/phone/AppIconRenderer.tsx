import React from 'react';
import {
  User,
  Settings,
  Briefcase,
  GraduationCap,
  Trophy,
  Terminal,
  TrendingUp,
  FileText,
  Rocket,
  Cloud,
  Code2,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '../common/BrandIcons';

interface AppIconRendererProps extends LucideProps {
  name: string;
}

export const AppIconRenderer: React.FC<AppIconRendererProps> = ({ name, ...props }) => {
  const iconName = name.toLowerCase();
  const className = props.className || 'w-5 h-5';

  switch (iconName) {
    case 'user':
      return <User className={className} strokeWidth={2} />;
    case 'skills':
      return <Settings className={className} strokeWidth={2} />;
    case 'youtube':
      return <YoutubeIcon className={className} />;
    case 'linkedin':
      return <LinkedinIcon className={className} />;
    case 'twitter':
      return <TwitterIcon className={className} />;
    case 'briefcase':
      return <Briefcase className={className} strokeWidth={2} />;
    case 'education':
      return <GraduationCap className={className} strokeWidth={2} />;
    case 'achievements':
      return <Trophy className={className} strokeWidth={2} />;
    case 'terminal':
      return <Terminal className={className} strokeWidth={2} />;
    case 'devstats':
      return <TrendingUp className={className} strokeWidth={2} />;
    case 'github':
      return <GithubIcon className={className} />;
    case 'resume':
      return <FileText className={className} strokeWidth={2} />;
    case 'gmail':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M2 6l10 7 10-7v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            stroke="#ea4335"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M22 6L12 13 2 6" stroke="#ea4335" strokeWidth="2" />
        </svg>
      );
    case 'projects':
      return <Rocket className={className} strokeWidth={2} />;
    case 'leetcode':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="#f59e0b">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .749 1.625 5.606 5.606 0 0 0 1.938 1.812 5.86 5.86 0 0 0 2.875.75 5.688 5.688 0 0 0 2.875-.75l3.875-4.125 5.406-5.781a1.375 1.375 0 0 0-.969-2.344 1.375 1.375 0 0 0-.969.406l-4.719 5.063-3.875 4.125a3.03 3.03 0 0 1-1.531.406 2.97 2.97 0 0 1-1.531-.406 2.766 2.766 0 0 1-.969-.938 2.96 2.96 0 0 1-.375-1.281 2.88 2.88 0 0 1 .031-1.188 2.75 2.75 0 0 1 .656-1.125l3.875-4.125 5.406-5.781A1.374 1.374 0 0 0 13.483 0z" />
          <path d="M9.813 14.875h10.374c.75 0 1.375.625 1.375 1.375s-.625 1.375-1.375 1.375H9.813c-.75 0-1.375-.625-1.375-1.375s.625-1.375 1.375-1.375z" />
        </svg>
      );
    case 'cloud':
      return <Cloud className={className} strokeWidth={2} />;
    case 'playstore':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path
            d="M3 20.5v-17c0-.86.96-1.36 1.66-.86l14.5 8.5c.67.4.67 1.33 0 1.72l-14.5 8.5c-.7.5-1.66 0-1.66-.86z"
            fill="#3b82f6"
          />
          <path d="M3 3.5l10.5 10.5L3 20.5V3.5z" fill="#06b6d4" opacity="0.7" />
        </svg>
      );
    default:
      return <Code2 className={className} />;
  }
};
