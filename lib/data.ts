import { Project, Service, Language, Partner, FaqItem } from "@/lib/types";
import projectsData from "@/content/work.json";
import servicesData from "@/content/services.json";
import languagesData from "@/content/languages.json";
import partnersData from "@/content/partners.json";
import studioData from "@/content/studio.json";
import faqData from "@/content/faq.json";

export function getProjects(): Project[] {
  return (projectsData as Project[]).sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return (projectsData as Project[]).filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getServices(): Service[] {
  return servicesData as Service[];
}

export function getServiceBySlug(slug: string): Service | undefined {
  return (servicesData as Service[]).find((s) => s.slug === slug);
}

export function getLanguages(): Language[] {
  return languagesData as Language[];
}

export function getPartners(): Partner[] {
  return partnersData as Partner[];
}

export function getStudioData() {
  return studioData;
}

export function getFaqs(): FaqItem[] {
  return faqData as FaqItem[];
}
