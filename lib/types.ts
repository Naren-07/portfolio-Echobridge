export type VideoFormat = "16:9" | "9:16" | "AUDIO";

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  platform: string;
  category: "OTT Dubbing" | "AI Micro-Drama" | "Audio Drama" | "Brand Film" | "YouTube Growth";
  format: VideoFormat;
  videoUrl: string;
  thumbnailUrl: string;
  posterUrl: string;
  description: string;
  challenge: string;
  approach: string;
  results: string;
  languages: string[];
  credits: ProjectCredit[];
  featured: boolean;
  order: number;
  duration?: string;
}

export interface Service {
  slug: string;
  pillar: "human" | "ai";
  pillarTitle: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  deliverables: string[];
}

export interface Language {
  name: string;
  native: string;
  group: "indian" | "international";
  code: string;
  description?: string;
}

export interface Partner {
  name: string;
  logo: string;
  blurb: string;
  category: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "Services" | "Turnaround" | "Technology" | "Security";
}

export interface StudioMetric {
  label: string;
  value: string;
  description: string;
}
