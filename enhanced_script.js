const scrollToTopBtn = document.getElementById('scroll-to-hero');

if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', function() {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Show/hide scroll-to-top button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
      scrollToTopBtn.classList.add('is-visible');
    } else {
      scrollToTopBtn.classList.remove('is-visible');
    }
  });
  }

// Dark mode toggle
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    // Optionally save preference to localStorage
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // On page load, apply saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
}

// Navigation bar scroll effect
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Add class after scrolling 50px
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
  });
}

// Close mobile menu when clicking outside or on a link
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
    navMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
  }
});

// Close mobile menu when a link is clicked
navMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navMenu.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
  }
});

// Add counters to project cards
const projectCards = document.querySelectorAll('.project-card');
if (projectCards.length > 0) {
  projectCards.forEach((card, index) => {
    const counterElement = card.querySelector('.project-counter-card');
    if (counterElement) counterElement.textContent = `${index + 1} / ${projectCards.length}`;
  });
}

// Project modal functionality
function openProjectModal(imgSrc, title) {
  document.getElementById('modal-title').textContent = title;
  const modalImages = document.getElementById('modal-images');
  modalImages.innerHTML = `<img src="${imgSrc}" alt="${title}">`;
  document.getElementById('project-modal').style.display = 'flex';
}

// Close modal on close button click
document.querySelector('.modal-close').addEventListener('click', () => {
  document.getElementById('project-modal').style.display = 'none';
});

// Close modal on overlay click
document.querySelector('.modal-overlay').addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal-overlay')) {
    document.getElementById('project-modal').style.display = 'none';
  }
});
