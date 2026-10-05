export type VideoFormat = "HORIZONTAL" | "VERTICAL";

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  brand: string;
  brandLogo?: string;
  category: string;
  format: VideoFormat;
  videoUrl: string;
  videoId?: string;
  thumbnailUrl: string;
  posterUrl?: string;
  description: string;
  challenge?: string;
  approach?: string;
  results?: string;
  credits: ProjectCredit[];
  collaborators?: string[];
  year: number;
  featured: boolean;
  order: number;
  gallery?: string[];
  duration?: string;
}

export interface Reel {
  id: string;
  slug: string;
  title: string;
  brand: string;
  videoUrl: string;
  videoId?: string;
  thumbnailUrl: string;
  views?: string;
  category: string;
  credits: ProjectCredit[];
  order: number;
}

export interface Client {
  id: string;
  slug: string;
  name: string;
  logoUrl?: string;
  description: string;
  industry: string;
  deliverables?: string[];
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  phase: 1 | 2 | 3;
  phaseNumber: "01" | "02" | "03";
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  process?: ServiceProcessStep[];
}

export interface BtsImage {
  id: string;
  url: string;
  caption: string;
  project: string;
  order: number;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverUrl: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  group: "About" | "Work & Services" | "Budgets & Timelines";
  question: string;
  answer: string;
  order: number;
}

export interface LeadSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: number;
  currency: "USD" | "INR";
  timeline?: string;
  message: string;
}
