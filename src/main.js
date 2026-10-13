/**
 * EchoBridge Studio - Interactive Client App
 * Bridging Stories Across Worlds
 */

// Portfolio / Originals Data based on EchoBridge Studio Showcase
const portfolioData = [
  {
    id: 'romance-series',
    title: 'Eternal Resonance',
    category: 'Romance',
    client: 'OTT Streaming Platform',
    year: '2025',
    role: 'AI Micro-Drama & Voice Dubbing',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80',
    description: 'High-emotion romantic drama serialized into 60-second vertical episodes for digital audiences. Features multilingual voice dubbing across 8 Indian and Southeast Asian languages.',
    deliverables: ['Vertical Micro-Drama (60 Episodes)', 'Multilingual Dubbing (Hindi, Tamil, Telugu, Thai)', 'Emotional Voice Synthesis', 'Character-Consistent AI Visuals']
  },
  {
    id: 'thriller-suspense',
    title: 'Shadows of the Syndicate',
    category: 'Thriller',
    client: 'Kuku TV & Story TV',
    year: '2025',
    role: 'Script Development, Audio Drama & Dubbing',
    image: 'https://images.unsplash.com/photo-1489599735734-79b4169c2a78?auto=format&fit=crop&w=1400&q=80',
    description: 'A suspense-filled crime thriller audio drama and synchronized video series packed with unexpected plot twists and immersive binaural sound design.',
    deliverables: ['Audio Drama Series (24 Episodes)', 'Full Cast Voice Acting', 'Foley & Sound Design', 'Binaural Mix & Subtitling']
  },
  {
    id: 'fantasy-epic',
    title: 'Chronicles of the Celestial Gate',
    category: 'Fantasy',
    client: 'Global OTT Network',
    year: '2025',
    role: 'World Building, AI Visuals & Localization',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80',
    description: 'An epic high-fantasy series featuring mythical realms, ancient deities, and majestic beasts. Localized from international languages into regional markets.',
    deliverables: ['Story Bible & World Building', 'AI Concept Art & Key Frames', 'Full Multilingual Dubbing', 'Broadcast Subtitling']
  },
  {
    id: 'ai-brand-commercial',
    title: 'Aura Luxury Fragrance',
    category: 'Brand Film',
    client: 'Global Luxury Group',
    year: '2025',
    role: 'End-to-End AI Commercial Production',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80',
    description: 'Cinematic commercial film created using hybrid AI image generation, hyper-real fluid simulation, and warm acoustic voice-over.',
    deliverables: ['4K Commercial Master (45s)', 'Social Cutdowns (9:16 & 1:1)', 'Voice-over Recording', 'Color Grading & Sound Master']
  },
  {
    id: 'youtube-creator-series',
    title: 'Mythos: Legends of the East',
    category: 'YouTube',
    client: 'Top 10M Creator Channel',
    year: '2024',
    role: 'Full Production & Localization Pipeline',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80',
    description: 'Engaging, serialized documentary storytelling created for creator growth. Scriptwriting, voice-over, sound mixing, and viral thumbnail design.',
    deliverables: ['Weekly Episodic Scripts', 'Professional Voice Narration', 'Dynamic Motion Graphics', 'Click-Optimized Thumbnails']
  },
  {
    id: 'multilingual-localization',
    title: 'The Continental Odyssey',
    category: 'Localization',
    client: 'International Distributor',
    year: '2024',
    role: '12-Language Dubbing & Subtitling',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    description: 'Cultural adaptation and lip-sync dubbing across 7 Indian regional languages and 5 global languages with TPN-approved security standards.',
    deliverables: ['Lip-Sync Dubbing', 'Cultural Nuance Translation', 'Dolby 5.1 Mix', 'QC Broadcast Master']
  }
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeaderScroll();
  initPortfolio();
  initModals();
  initContactForm();
  initScrollAnimations();
});

// View Navigation & Routing
function initNavigation() {
  const navLinks = document.querySelectorAll('[data-route]');
  const views = document.querySelectorAll('.view-section');
  const mobileNav = document.getElementById('mobileNav');
  const mobileToggle = document.getElementById('mobileToggle');

  function setActiveView(targetRoute) {
    const route = targetRoute.replace(/^#\/?/, '') || 'home';

    let found = false;
    views.forEach(view => {
      const viewRoute = view.getAttribute('data-view');
      if (viewRoute === route) {
        view.classList.add('active-view');
        found = true;
      } else {
        view.classList.remove('active-view');
      }
    });

    if (!found) {
      document.querySelector('[data-view="home"]')?.classList.add('active-view');
    }

    navLinks.forEach(link => {
      const linkRoute = link.getAttribute('data-route');
      if (linkRoute === route) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    if (mobileNav) {
      mobileNav.classList.remove('open');
    }
    closeModal();

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (window.location.hash !== `#${route}`) {
      window.history.pushState(null, '', `#${route}`);
    }

    setTimeout(checkScrollReveals, 100);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.getAttribute('data-route');
      setActiveView(route);
    });
  });

  window.addEventListener('popstate', () => {
    const route = window.location.hash.replace(/^#\/?/, '') || 'home';
    setActiveView(route);
  });

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

  const initialRoute = window.location.hash.replace(/^#\/?/, '') || 'home';
  setActiveView(initialRoute);
}

// Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Portfolio Grid & Filtering
function initPortfolio() {
  const portfolioContainer = document.getElementById('portfolioGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  function renderCards(filter = 'All') {
    if (!portfolioContainer) return;

    const filtered = filter === 'All' 
      ? portfolioData 
      : portfolioData.filter(item => item.category.toLowerCase() === filter.toLowerCase());

    portfolioContainer.innerHTML = filtered.map(item => `
      <article class="portfolio-card reveal" data-project-id="${item.id}" style="border: 1px solid var(--border); border-radius: var(--radius-xl); overflow: hidden; background: var(--card); cursor: pointer;">
        <div style="aspect-ratio: 16/10; overflow: hidden; position: relative;">
          <img src="${item.image}" alt="${item.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease;" />
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(11, 11, 14, 0.95), rgba(11, 11, 14, 0.2) 60%, transparent);"></div>
          <div style="position: absolute; bottom: 1rem; left: 1.25rem; right: 1.25rem;">
            <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--gold); font-weight: 600;">${item.category}</div>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 0.25rem; color: var(--foreground);">${item.title}</h3>
            <p style="font-size: 0.82rem; color: var(--muted-foreground); margin-top: 0.2rem;">${item.client}</p>
          </div>
        </div>
      </article>
    `).join('');

    portfolioContainer.querySelectorAll('.portfolio-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project-id');
        openProjectModal(id);
      });
    });

    setTimeout(checkScrollReveals, 50);
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter') || 'All';
      renderCards(cat);
    });
  });

  document.querySelectorAll('[data-home-project]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-home-project');
      openProjectModal(id);
    });
  });

  renderCards('All');
}

// Modal handling
function initModals() {
  const modalBackdrop = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');

  if (modalBackdrop) {
    if (modalClose) {
      modalClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal();
      });
    }

    modalBackdrop.addEventListener('click', (e) => {
      if (!e.target.closest('.modal-container') || e.target.closest('.modal-close-btn')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
        closeModal();
      }
    });
  }

  // Slide modal / Image viewer clicks
  document.querySelectorAll('[data-view-slide]').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      const src = img.getAttribute('src');
      const alt = img.getAttribute('alt') || 'EchoBridge Showcase';
      openImageModal(src, alt);
    });
  });
}

function openProjectModal(id) {
  const project = portfolioData.find(p => p.id === id) || portfolioData[0];
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  const modalMedia = modal.querySelector('.modal-media-wrapper');
  const modalTag = modal.querySelector('.modal-tag');
  const modalTitle = modal.querySelector('.modal-title');
  const modalClient = modal.querySelector('.modal-client');
  const modalDesc = modal.querySelector('.modal-description');
  const modalDeliverables = modal.querySelector('.modal-deliverables-list');
  const modalRole = modal.querySelector('.modal-role');
  const modalYear = modal.querySelector('.modal-year');

  if (modalMedia) {
    modalMedia.innerHTML = `<img src="${project.image}" alt="${project.title}" />`;
  }
  if (modalTag) modalTag.textContent = project.category;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalClient) modalClient.textContent = project.client;
  if (modalDesc) modalDesc.textContent = project.description;
  if (modalRole) modalRole.textContent = project.role || 'Direction & Multimedia';
  if (modalYear) modalYear.textContent = project.year || '2025';

  if (modalDeliverables && project.deliverables) {
    modalDeliverables.innerHTML = project.deliverables.map(d => `
      <li style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem; color: var(--muted-foreground); font-size: 0.85rem;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--gold);">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
        ${d}
      </li>
    `).join('');
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openImageModal(src, title) {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  const modalMedia = modal.querySelector('.modal-media-wrapper');
  const modalTag = modal.querySelector('.modal-tag');
  const modalTitle = modal.querySelector('.modal-title');
  const modalClient = modal.querySelector('.modal-client');
  const modalDesc = modal.querySelector('.modal-description');
  const modalDeliverables = modal.querySelector('.modal-deliverables-list');

  if (modalMedia) {
    modalMedia.innerHTML = `<img src="${src}" alt="${title}" style="max-height: 65vh; width: 100%; object-fit: contain; background: #0b0b0e;" />`;
  }
  if (modalTag) modalTag.textContent = 'EchoBridge Studio Showcase';
  if (modalTitle) modalTitle.textContent = title;
  if (modalClient) modalClient.textContent = 'Bridging Stories Across Worlds';
  if (modalDesc) modalDesc.textContent = 'High-resolution official studio asset and presentation document.';
  if (modalDeliverables) modalDeliverables.innerHTML = '';

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
      </svg>
      Sending inquiry...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      form.reset();
      showToast('Thank you! Your project inquiry has been received by EchoBridge Studio. We will reply within 24 hours.');
    }, 1200);
  });
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Scroll Entrance Observer
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  window.__scrollObserver = observer;
  checkScrollReveals();
}

function checkScrollReveals() {
  if (!window.__scrollObserver) return;
  const reveals = document.querySelectorAll('.reveal:not(.revealed)');
  reveals.forEach(el => window.__scrollObserver.observe(el));
}
