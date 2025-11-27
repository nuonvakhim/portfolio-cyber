
import type { Project, Skill, NavItem, SocialLink } from '../types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'SYST.INIT', href: '#home' },
  { label: 'DATA.ABOUT', href: '#about' },
  { label: 'MOD.SKILLS', href: '#skills' },
  { label: 'EXE.PROJECTS', href: '#projects' },
  { label: 'COM.LINK', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GITHUB',
    username: '@nuonvakhim',
    url: 'https://github.com/nuonvakhim', // Update with your actual URL
    icon: 'github'
  },
  {
    platform: 'LINKEDIN',
    username: 'Nuon Vakhim',
    url: 'https://linkedin.com/in/nuonvakhim', // Update with your actual URL
    icon: 'linkedin'
  },
  {
    platform: 'EMAIL',
    username: 'contact@nuonvakhim.dev', // Update with your actual Email
    url: 'mailto:contact@nuonvakhim.dev', 
    icon: 'mail'
  },
  {
    platform: 'TELEGRAM',
    username: '@nuonvakhim',
    url: 'https://t.me/nuonvakhim', // Update with your actual URL
    icon: 'telegram'
  }
];

export const SKILLS: Skill[] = [
  { 
    name: 'Spring Boot', 
    category: 'Backend', 
    level: 95, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' 
  },
  { 
    name: 'Next.js', 
    category: 'Frontend', 
    level: 92, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' 
  },
  { 
    name: 'Spring Data JPA', 
    category: 'Backend', 
    level: 85, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg' 
  },
  { 
    name: 'Golang', 
    category: 'Core', 
    level: 80, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' 
  },
  { 
    name: 'Hyperledger Fabric', 
    category: 'Core', 
    level: 75,
    logo: ''
    // No stable CDN logo, will use fallback icon
  },
  { 
    name: 'RESTful APIs', 
    category: 'Backend', 
    level: 95,
    logo: ''
    // Will use fallback icon
  },
  { 
    name: 'jQuery', 
    category: 'Frontend', 
    level: 85, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' 
  },
  { 
    name: 'Docker', 
    category: 'Tools', 
    level: 75, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' 
  },
];

export const PROJECTS: Project[] = [
  {
    id: '001',
    title: 'BLOCK_CHAIN_LEDGER',
    description: 'A secure, decentralized supply chain application built using Golang and Hyperledger Fabric to ensure data immutability and transparency.',
    techStack: ['Golang', 'Hyperledger Fabric', 'Docker', 'Shell'],
    imageUrl: 'https://picsum.photos/600/400?random=4',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '002',
    title: 'ENTERPRISE_API_CORE',
    description: 'High-performance microservices architecture using Spring Boot and Spring Data JPA, serving as the backbone for a fintech platform.',
    techStack: ['Spring Boot', 'Java', 'JPA', 'MySQL'],
    imageUrl: 'https://picsum.photos/600/400?random=5',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '003',
    title: 'NEXT_GEN_DASHBOARD',
    description: 'A responsive, high-speed analytics dashboard built with Next.js and React, featuring server-side rendering and real-time data visualization.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    imageUrl: 'https://picsum.photos/600/400?random=6',
    demoUrl: '#',
    repoUrl: '#'
  }
];