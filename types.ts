export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Core';
  level: number; // 0-100
  logo: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const ChatRole = {
  USER: 'user',
  MODEL: 'model'
} as const;

export type ChatRole = typeof ChatRole[keyof typeof ChatRole];

export interface ChatMessage {
  role: ChatRole;
  text: string;
}
export interface SocialLink {
  platform: string;
  username: string;
  url: string;
  icon: string; // Icon name reference
}