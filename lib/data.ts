import { Project, Reel, Client, Service, BtsImage, FaqItem, Post } from "@/lib/types";
import projectsData from "@/content/projects.json";
import reelsData from "@/content/reels.json";
import clientsData from "@/content/clients.json";
import servicesData from "@/content/services.json";
import btsData from "@/content/bts.json";
import faqsData from "@/content/faqs.json";
import postsData from "@/content/posts.json";

export function getProjects(): Project[] {
  return (projectsData as Project[]).sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.slug === slug);
}

export function getReels(): Reel[] {
  return (reelsData as Reel[]).sort((a, b) => a.order - b.order);
}

export function getClients(): Client[] {
  return clientsData as Client[];
}

export function getServices(): Service[] {
  return (servicesData as unknown as Service[]).sort((a, b) => a.phase - b.phase);
}

export function getBtsImages(): BtsImage[] {
  return (btsData as BtsImage[]).sort((a, b) => a.order - b.order);
}

export function getFaqs(group?: string): FaqItem[] {
  const faqs = faqsData as FaqItem[];
  if (group) return faqs.filter((f) => f.group === group);
  return faqs.sort((a, b) => a.order - b.order);
}

export function getPosts(): Post[] {
  return postsData as Post[];
}

export function getPostBySlug(slug: string): Post | undefined {
  return (postsData as Post[]).find((p) => p.slug === slug);
}
