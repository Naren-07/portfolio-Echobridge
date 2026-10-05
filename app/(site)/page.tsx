import { getProjects, getReels, getClients, getServices, getBtsImages, getFaqs, getPosts } from "@/lib/data";
import { HeroSection } from "@/components/sections/HeroSection";
import { CinematicEvidence } from "@/components/sections/CinematicEvidence";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { OnSetSection } from "@/components/sections/OnSetSection";
import { ScrollStoppers } from "@/components/sections/ScrollStoppers";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { HorizontalLibrary } from "@/components/sections/HorizontalLibrary";
import { VerticalLibrary } from "@/components/sections/VerticalLibrary";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ProductionPartner } from "@/components/sections/ProductionPartner";
import { BrandsGrid } from "@/components/sections/BrandsGrid";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactBrief } from "@/components/sections/ContactBrief";

export default function HomePage() {
  const projects = getProjects();
  const reels = getReels();
  const clients = getClients();
  const services = getServices();
  const btsImages = getBtsImages();
  const faqs = getFaqs();
  const posts = getPosts();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Cinematic Evidence (Pinned Full-Viewport Project Slides) */}
      <CinematicEvidence projects={projects} />

      {/* 3. Our Architecture (3-Phase Process) */}
      <ArchitectureSection services={services} />

      {/* 4. On Set (BTS Infinite Photography Marquee) */}
      <OnSetSection btsImages={btsImages} />

      {/* 5. Scroll Stoppers (9:16 Vertical Reel Swipe Deck) */}
      <ScrollStoppers reels={reels} />

      {/* 6. Trusted By (Infinite Logo Strip: Grayscale to Color) */}
      <TrustedBy clients={clients} />

      {/* 7. Horizontal Work Library ("Library Index" with Credits Slate) */}
      <HorizontalLibrary projects={projects} />

      {/* 8. Vertical Work Library (Native 9:16 Reels Grid) */}
      <VerticalLibrary reels={reels} />

      {/* 9. Services Overview */}
      <ServicesOverview services={services} />

      {/* 10. In-House Production Partner & Infrastructure */}
      <ProductionPartner />

      {/* 11. Brands We've Framed (Client Grid) */}
      <BrandsGrid clients={clients} />

      {/* 12. Editorial Blog Teaser ("The Echo Bridge Treatment") */}
      <BlogTeaser post={posts[0]} />

      {/* 13. FAQ Accordion (Tabbed Categories + FAQPage Schema) */}
      <FaqSection faqs={faqs} />

      {/* 14. The Final Cut (Interactive Brief with Dynamic Currency & Budget Tiers) */}
      <ContactBrief />
    </div>
  );
}
