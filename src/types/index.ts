export type AppId =
  | 'about'
  | 'skills'
  | 'experience'
  | 'education'
  | 'projects'
  | 'github'
  | 'linkedin'
  | 'achievements'
  | 'resume'
  | 'contact'
  | 'youtube'
  | 'x'
  | 'terminal'
  | 'devstats'
  | 'leetcode'
  | 'cloud'
  | 'playstore';

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  score: string;
  period?: string;
  status?: string;
  university?: string;
}

export interface AppIconConfig {
  id: AppId;
  name: string;
  icon: string; // Lucide icon identifier
  color: string;
  badge?: string;
  category: 'core' | 'work' | 'social' | 'system';
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  highlights?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full Stack' | 'Mobile & AI' | 'Cloud & Systems' | 'Developer Tools';
  shortDescription: string;
  overview: string;
  problemSolved: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  accentColor: string;
  stats?: { label: string; value: string }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  issuer: string;
  link?: string;
  certificatePdf?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  appId: AppId;
  iconName: string;
  accentColor: string;
}

export interface PortfolioConfig {
  developer: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    bio: string;
    shortBio: string;
    avatarUrl: string;
    availability: string;
    statusNote: string;
    interests: string[];
    yearsOfExperience: string;
    projectsCompleted: string;
    codeContributions: string;
  };
  social: {
    email: string;
    github: string;
    linkedin: string;
    x: string;
    youtube: string;
  };
  quote: {
    text: string;
    author: string;
    role: string;
  };
  resume: {
    path: string;
    filename: string;
    lastUpdated: string;
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  lockScreenNotifications: NotificationItem[];
}

export type DeviceMode = 'ios' | 'android' | 'ipad';

export type ThemeId =
  | 'deep-blue'
  | 'amber-orange'
  | 'teal-cyan'
  | 'blue-purple'
  | 'magenta-purple'
  | 'coral-sunset';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  gradientClass: string;
}
