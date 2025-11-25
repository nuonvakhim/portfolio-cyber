import type {Project, Skill, NavItem} from '../types';
export const NAV_ITEMS: NavItem[] = [
  { label: 'SYST.INIT', href: '#home' },
  { label: 'DATA.ABOUT', href: '#about' },
  { label: 'MOD.SKILLS', href: '#skills' },
  { label: 'EXE.PROJECTS', href: '#projects' },
  { label: 'COM.LINK', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Spring Boot', category: 'Backend', level: 95 },
  { name: 'Next.js', category: 'Frontend', level: 92 },
  { name: 'Spring Data JPA', category: 'Backend', level: 85 },
  { name: 'Golang', category: 'Core', level: 80 },
  { name: 'Hyperledger Fabric', category: 'Core', level: 75 },
  { name: 'RESTful APIs', category: 'Backend', level: 95 },
  { name: 'jQuery', category: 'Frontend', level: 85 },
  { name: 'Docker', category: 'Tools', level: 75 },
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