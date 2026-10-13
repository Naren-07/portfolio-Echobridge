import { FaqItem, Project } from "./types";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "EchoBridge Studio",
    "alternateName": "EchoBridge Content & Voice Production Studio",
    "description":
      "Premium content and voice production studio dedicated to voice-over, dubbing, localization, subtitling, and AI-powered micro drama production.",
    "url": "https://echobridge.studio",
    "logo": "https://echobridge.studio/assets/echobridge-emblem.jpg",
    "image": "https://echobridge.studio/assets/echobridge-banner.png",
    "founder": {
      "@type": "Person",
      "name": "Sarika Sharma",
      "jobTitle": "Founder & Creative Director",
      "sameAs": "https://linkedin.com/in/sarikasharma06"
    },
    "telephone": "+918377086807",
    "email": "echobridge.studio6@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "areaServed": "Global",
    "knowsLanguage": [
      "hi", "en", "mr", "ta", "te", "kn", "ml", "pa", "gu", "es", "ar", "th", "id", "pt", "fr", "de", "it", "tr", "ru", "vi"
    ]
  };
}

export function getFaqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };
}

export function getVideoObjectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": project.title,
    "description": project.description,
    "thumbnailUrl": [`https://echobridge.studio${project.thumbnailUrl}`],
    "embedUrl": project.videoUrl,
    "uploadDate": "2026-01-01T00:00:00+05:30",
  };
}
