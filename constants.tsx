
import React from 'react';
import { 
  ShoppingBag, 
  Code, 
  Zap, 
  Layers, 
  Search, 
  TrendingUp, 
  Target, 
  PenTool, 
  Rocket, 
  Settings2 
} from 'lucide-react';
import { Project, Skill, ProcessStep } from './types';

export const PROJECTS: Project[] = [
  { 
    name: 'mythrojan.com', 
    url: 'https://mythrojan.com', 
    description: 'Historical reproduction commerce with high-volume scaling requirements.',
    tags: ['Scaling', 'Custom UI']
  },
  { 
    name: 'usjewels.com', 
    url: 'https://usjewels.com', 
    description: 'High-ticket jewelry experience focused on trust and conversion optimization.',
    tags: ['CRO', 'Premium Design']
  },
  { 
    name: 'supremelabs.co.uk', 
    url: 'https://supremelabs.co.uk', 
    description: 'Health & Supplements store with complex subscription logic and speed optimization.',
    tags: ['Performance', 'Apps']
  },
  { 
    name: 'gardeniacanada.com', 
    url: 'https://gardeniacanada.com', 
    description: 'Modern lifestyle brand with bespoke Shopify theme architecture.',
    tags: ['Theme Dev', 'UI/UX']
  },
  { 
    name: 'crystalquest.com', 
    url: 'https://crystalquest.com', 
    description: 'Industrial water filtration systems with B2B and B2C integration layers.',
    tags: ['B2B', 'Architecture']
  }
];

export const SKILLS: Skill[] = [
  {
    name: 'Shopify Development',
    icon: <ShoppingBag className="w-6 h-6 text-[#95BF47]" />,
    description: 'Liquid, Hydrogen, and API-first headless architectures.'
  },
  {
    name: 'Custom Themes & UI/UX',
    icon: <PenTool className="w-6 h-6 text-[#95BF47]" />,
    description: 'High-fidelity, high-converting interfaces tailored for brand identity.'
  },
  {
    name: 'CRO & Optimization',
    icon: <Target className="w-6 h-6 text-[#95BF47]" />,
    description: 'Data-driven A/B testing and performance tweaks to lift conversion rates.'
  },
  {
    name: 'App Integrations',
    icon: <Layers className="w-6 h-6 text-[#95BF47]" />,
    description: 'Seamless integration of ERPs, 3PLs, and marketing automation tools.'
  },
  {
    name: 'SEO & Speed',
    icon: <Zap className="w-6 h-6 text-[#95BF47]" />,
    description: 'Core Web Vitals mastery and semantic SEO for merchant visibility.'
  },
  {
    name: 'Store Scaling',
    icon: <TrendingUp className="w-6 h-6 text-[#95BF47]" />,
    description: 'Migrating and scaling stores to Shopify Plus for enterprise clients.'
  }
];

export const PROCESS: ProcessStep[] = [
  {
    title: 'Strategy',
    icon: <Search className="w-5 h-5" />,
    description: 'Auditing existing systems and defining KPIs for growth.'
  },
  {
    title: 'Design',
    icon: <PenTool className="w-5 h-5" />,
    description: 'Crafting elite UI that resonates with target demographics.'
  },
  {
    title: 'Launch',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Execution of architecture with zero-downtime deployment.'
  },
  {
    title: 'Optimize',
    icon: <Settings2 className="w-5 h-5" />,
    description: 'Iterative improvements based on real-time traffic data.'
  }
];
