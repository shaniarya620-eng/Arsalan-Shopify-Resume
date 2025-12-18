
import React from 'react';

export interface Project {
  name: string;
  url: string;
  description: string;
  tags: string[];
}

export interface Skill {
  name: string;
  // Fix: Using React.ReactElement<any> to allow prop injection (like className) via React.cloneElement
  icon: React.ReactElement<any>;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}